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
    name: "Aamir Khan",
    nationality: "Indian",
    industry: "Bollywood",
    url: "https://imgs.search.brave.com/ga_osiajLKBMu8inv5qpgyCrnI2HGnvBIzCIdWiMZoQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JkL0FhbWlyX0to/YW5fMjAxMy5qcGc",
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
    name: "Mahesh Manjrekar",
    nationality: "Indian",
    industry: "Marathi",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/mahesh-manjrekar-1327-1649141659.jpg",
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
    name: "Kamal Haasan",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kamal-haasan-2886-24-03-2017-17-54-38.jpg",
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
    name: "Mahesh Babu",
    nationality: "Indian",
    industry: "South Indian",
    url: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/mahesh-babu-36982-20-12-2017-04-21-05.jpg",
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
