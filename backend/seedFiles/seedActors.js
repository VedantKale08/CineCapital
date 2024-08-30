const mongoose = require("mongoose");
const Actor = require("../models/actorModel"); // Adjust the path as necessary
const connectDatabase = require("../config/connection");

connectDatabase();

const actors = [
  // Bollywood Actors
  {
    name: "Amitabh Bachchan",
    nationality: "Indian",
    industry: "Bollywood",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bachchan-138-12-09-2017-02-34-37.jpg",
  },
  {
    name: "Shah Rukh Khan",
    nationality: "Indian",
    industry: "Bollywood",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
  },
  {
    name: "Kiara Advani",
    nationality: "Indian",
    industry: "Bollywood",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kiara-advani-1043272-1655467015.jpg",
  },
  {
    name: "Salman Khan",
    nationality: "Indian",
    industry: "Bollywood",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg",
  },
  {
    name: "Deepika Padukone",
    nationality: "Indian",
    industry: "Bollywood",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg",
  },

  // Marathi Actors
  {
    name: "Prajakta Mali",
    nationality: "Indian",
    industry: "Marathi",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/prajakta-mali-36635-1723209865.jpg",
  },
  {
    name: "Lalit Prabhakar",
    nationality: "Indian",
    industry: "Marathi",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/lalit-prabhakar-1069608-21-05-2019-10-56-18.jpg",
  },
  {
    name: "Swwapnil Joshi",
    nationality: "Indian",
    industry: "Marathi",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/swwapnil-joshi-4734-24-03-2017-12-31-12.jpg",
  },
  {
    name: "Sonali Kulkarni",
    nationality: "Indian",
    industry: "Marathi",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/sonali-kulkarni-2195-17-12-2018-03-41-25.jpg",
  },
  {
    name: "Jitendra Joshi",
    nationality: "Indian",
    industry: "Marathi",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jitendra-joshi-5938-1698301675.jpg",
  },

  // South Indian Actors
  {
    name: "Rajinikanth",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg",
  },
  {
    name: "Samantha Ruth Prabhu",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/samantha-ruth-prabhu-36761-1680672597.jpg",
  },
  {
    name: "Allu Arjun",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg",
  },
  {
    name: "Prabhas",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
  },
  {
    name: "Rashmika Mandanna",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rashmika-mandanna-1076783-28-12-2016-12-20-39.jpg",
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
