const mongoose = require("mongoose");
const Genre = require("../models/genreModel"); // Adjust the path as necessary
const connectDatabase = require("../config/connection");

connectDatabase();
const genres = [
  {
    name: "Action",
    description: "High-energy scenes with physical stunts and chases.",
  },
  {
    name: "Drama",
    description:
      "Focuses on emotional and relational development of characters.",
  },
  {
    name: "Comedy",
    description:
      "Light-hearted and humorous, aimed at making the audience laugh.",
  },
  {
    name: "Romance",
    description: "Centers around love and romantic relationships.",
  },
  {
    name: "Thriller",
    description: "Filled with suspense and excitement, often involving crime.",
  },
  {
    name: "Horror",
    description: "Designed to frighten and invoke our hidden worst fears.",
  },
  {
    name: "Mystery",
    description: "Focuses on the solving of a mystery, often a crime.",
  },
  {
    name: "Adventure",
    description:
      "Often involves a journey or quest, with high stakes and exciting experiences.",
  },
  {
    name: "Fantasy",
    description: "Set in an imaginary universe, often involving magic.",
  },
  {
    name: "Science Fiction",
    description:
      "Deals with futuristic concepts such as advanced science and technology.",
  },
  {
    name: "Historical",
    description:
      "Set in a specific historical period, often with elaborate costumes.",
  },
  {
    name: "Musical",
    description: "Includes song and dance as a central part of the narrative.",
  },
  {
    name: "Biographical",
    description:
      "Based on the life of a real person, often focusing on their achievements.",
  },
  {
    name: "Family",
    description:
      "Suitable for viewers of all ages, often with a focus on family dynamics.",
  },
  {
    name: "Crime",
    description: "Centers around criminal acts and the justice system.",
  },
  {
    name: "Animation",
    description: "Uses animated techniques to create motion pictures.",
  },
  {
    name: "War",
    description:
      "Depicts warfare and its consequences, often with a historical basis.",
  },
  {
    name: "Documentary",
    description: "Non-fictional, based on real events, people, and situations.",
  },
  {
    name: "Sports",
    description: "Centers around sports and athletic activities.",
  },
  {
    name: "Western",
    description:
      "Set in the American West, often featuring cowboys and outlaws.",
  },
];

const seedGenres = async () => {
  try {
    await Genre.deleteMany({}); // Delete existing genres data
    await Genre.insertMany(genres);
    console.log("Genres data seeded successfully");
  } catch (error) {
    console.error("Error seeding genres data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedGenres();
