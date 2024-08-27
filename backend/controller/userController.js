const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const otpGenerator = require("otp-generator");
const Genres = require("../models/genreModel");
const Actors = require("../models/actorModel");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;
const client = require("twilio")(accountSid, authToken);

const generateOtp = async (req, res) => {
  try {
    const { mobileNo } = req.params;

    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    client.verify.v2
      .services(serviceSid)
      .verifications.create({
        to: "+91" + String(mobileNo),
        channel: "sms",
      })
      .then((verification) => {
        res.status(200).send({
          status: true,
          message: `OTP sent to ${mobileNo}`,
        });
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        res.status(500).send({
          status: false,
          message: "Error sending OTP",
          error: error.message,
        });
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginViaOtp = async (req, res) => {
  try {
    const { mobileNo, otp } = req.body;
    const verification_check = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({
        to: "+91" + String(mobileNo),
        code: String(otp),
      });

    if (verification_check.status === "approved") {
      const alreadyUser = await User.findOne({ mobileNo });

      if (alreadyUser) {
        const token = jwt.sign(
          { userId: alreadyUser._id },
          process.env.JWT_SECRET
        );
        const data = {
          username: alreadyUser.username,
          token: token,
        };
        res.status(200).send({
          status: true,
          message: "User logged in successfully",
          data: data,
        });
      } else {
        return res.status(404).send({
          status: false,
          message: "User needs to register",
        });
      }
    } else {
      return res.status(400).send({
        status: false,
        message: "Invalid or expired OTP",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Signup API
const register = async (req, res) => {
  try {
    const alreadyUser = await User.findOne({ email: req.body.email });
    if (alreadyUser) {
      return res.status(200).send({
        status: false,
        message: "User already exists",
      });
    }
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const randomClientCode = Math.floor(
      1000000000 + Math.random() * 9000000000
    );
    const user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // password: hashedPassword,
      clientCode: randomClientCode,
      mobileNo: req.body.mobileNo,
      imageUrl: req.body.imageUrl,
    });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const newUser = await user.save();
    const data = {
      email: newUser.email,
      mobileNo: newUser.mobileNo,
      imageUrl: newUser.imageUrl,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      token: token,
      clientCode: newUser.clientCode,
    };
    res.status(201).send({
      status: true,
      message: "User created successfully",
      data: data,
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  const users = await User.findOne({ _id: req?.user?._id });
  res.status(200).send(users);
};

const fetchInterests = async (req, res) => {
  try {
    const genres = await Genres.find();
    const actors = await Actors.find();

    const data = {
      GenresData: genres,
      ActorsData: actors,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching interests:", error);
    res
      .status(500)
      .json({ message: "Error fetching interests", error: error.message });
  }
};

const updateInterests = async (req, res) => {
  try {
    const { favouriteActors, favouriteLanguages, favouriteGenres } = req.body;
    const userId = req?.user?._id;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let updateObject = {};

    if (favouriteActors && favouriteActors.length > 0) {
      updateObject["investmentInterests.Actors"] = { $each: favouriteActors };
    }
    if (favouriteLanguages && favouriteLanguages.length > 0) {
      updateObject["investmentInterests.languages"] = {
        $each: favouriteLanguages,
      };
    }
    if (favouriteGenres && favouriteGenres.length > 0) {
      updateObject["investmentInterests.Genres"] = { $each: favouriteGenres };
    }

    // Update only if there's something to update
    if (Object.keys(updateObject).length > 0) {
      await User.updateOne(
        { _id: userId },
        {
          $addToSet: updateObject, // Use $addToSet to avoid duplicate entries
        }
      );

      return res
        .status(200)
        .json({ message: "Interests updated successfully" });
    } else {
      return res
        .status(400)
        .json({ message: "No interests provided to update" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating interests", error: error.message });
  }
};

module.exports = { updateInterests };

// Login API
// const login = async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!validPassword) {
//       return res.status(401).json({ message: "Invalid password" });
//     }
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     data = {
//       username: user.username,
//       token: token,
//     };
//     res.status(200).send({
//       status: true,
//       message: "User logged in successfully",
//       data: data,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports = {
  register,
  // login,
  getUser,
  loginViaOtp,
  generateOtp,
  fetchInterests,
  updateInterests,
};
