const mongoose = require("mongoose");
const Actor = require("../models/actorModel"); // Adjust the path as necessary
const connectDatabase = require("../config/connection");

connectDatabase();

const actors = [
  // Bollywood Actors
  {
    name: "Amitabh Bachchan",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Amitabh_Bachchan_in_2010.jpg/800px-Amitabh_Bachchan_in_2010.jpg",
    industry: "Bollywood",
  },
  {
    name: "Shah Rukh Khan",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Shah_Rukh_Khan_in_2015.jpg/800px-Shah_Rukh_Khan_in_2015.jpg",
    industry: "Bollywood",
  },
  {
    name: "Aamir Khan",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Aamir_Khan_at_2016_Red_Sea_International_Film_Festival.jpg/800px-Aamir_Khan_at_2016_Red_Sea_International_Film_Festival.jpg",
    industry: "Bollywood",
  },
  {
    name: "Salman Khan",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Salman_Khan_2016.jpg/800px-Salman_Khan_2016.jpg",
    industry: "Bollywood",
  },
  {
    name: "Deepika Padukone",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Deepika_Padukone_2013.jpg/800px-Deepika_Padukone_2013.jpg",
    industry: "Bollywood",
  },

  // Marathi Actors
  {
    name: "Mahesh Manjrekar",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mahesh_Manjrekar_in_2014.jpg/800px-Mahesh_Manjrekar_in_2014.jpg",
    industry: "Marathi",
  },
  {
    name: "Lalit Prabhakar",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lalit_Prabhakar_in_2015.jpg/800px-Lalit_Prabhakar_in_2015.jpg",
    industry: "Marathi",
  },
  {
    name: "Swwapnil Joshi",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Swwapnil_Joshi_2017.jpg/800px-Swwapnil_Joshi_2017.jpg",
    industry: "Marathi",
  },
  {
    name: "Sonali Kulkarni",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sonali_Kulkarni_2016.jpg/800px-Sonali_Kulkarni_2016.jpg",
    industry: "Marathi",
  },
  {
    name: "Jitendra Joshi",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jitendra_Joshi_2017.jpg/800px-Jitendra_Joshi_2017.jpg",
    industry: "Marathi",
  },

  // South Indian Actors
  {
    name: "Rajinikanth",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Rajinikanth_2012.jpg/800px-Rajinikanth_2012.jpg",
    industry: "South Indian",
  },
  {
    name: "Kamal Haasan",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kamal_Haasan_at_Filmfare_Awards_2018.jpg/800px-Kamal_Haasan_at_Filmfare_Awards_2018.jpg",
    industry: "South Indian",
  },
  {
    name: "Allu Arjun",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Allu_Arjun_2017.jpg/800px-Allu_Arjun_2017.jpg",
    industry: "South Indian",
  },
  {
    name: "Prabhas",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Prabhas_2017.jpg/800px-Prabhas_2017.jpg",
    industry: "South Indian",
  },
  {
    name: "Mahesh Babu",
    nationality: "Indian",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mahesh_Babu_at_MAHESH_BABU%27S_SAREE_SAMARPANAM.jpg/800px-Mahesh_Babu_at_MAHESH_BABU%27S_SAREE_SAMARPANAM.jpg",
    industry: "South Indian",
  },
];

const seedActors = async () => {
  try {
    await Actor.deleteMany({}); // Delete existing actors data
    await Actor.insertMany(actors);
    console.log("Actors data seeded successfully");
  } catch (error) {
    console.error("Error seeding actors data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedActors();
