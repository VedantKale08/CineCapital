const mongoose = require("mongoose");
const Genre = require("../models/genreModel"); // Adjust the path as necessary
const connectDatabase = require("../config/connection");

connectDatabase();
const genres = [
  {
    name: "Action",
    description: "High-energy scenes with physical stunts and chases.",
    url: "https://imgs.search.brave.com/NjOgPDCiJBcKNQQWJbvjym0VF2UCzpG6t_YGd6j4etE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zbGlkZXNoYXJl/Y2RuLmNvbS9nZW5y/ZW5ldy0xMjA0MzAw/ODE1MDYtcGhwYXBw/MDEvODUvQWN0aW9u/LUdlbnJlLTEtMzIw/LmpwZw",
  },
  {
    name: "Drama",
    description:
      "Focuses on emotional and relational development of characters.",
    url: "https://imgs.search.brave.com/zGFh5aivt9IWxa2OQ_omXmNJwL4lWR1N-h_N3f4avm8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnN0/dWRpb2JpbmRlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTAvV2hhdC1p/cy1EcmFtYS0lRTIl/ODAlOTQtRGVmaW5p/dGlvbi1FeGFtcGxl/cy1DaGFyYWN0ZXJp/c3RpY3MtRHJhbWEt/RXhhbXBsZXMtJUMy/JUI3LUdlc3R1cmVz/LWFuZC1QZXJmb3Jt/YW5jZS5wbmc",
  },
  {
    name: "Comedy",
    description:
      "Light-hearted and humorous, aimed at making the audience laugh.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/welcome-et00000113-22-01-2021-06-47-27.jpg",
  },
  {
    name: "Romance",
    description: "Centers around love and romantic relationships.",
    url: "https://imgs.search.brave.com/2MXr-8GnFGy7fqvRnGPYaGNGdnc0e4hCDR8POCj6Olc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI2LzAwLzMw/LzM2MF9GXzEyNjAw/MzA4NV9kd0J5TGVS/d2JubTNqRFY3SUVU/bjRPZGpDTUlBUWhQ/dC5qcGc",
  },
  {
    name: "Thriller",
    description: "Filled with suspense and excitement, often involving crime.",
    url: "https://imgs.search.brave.com/51o1TWkkIqhObZb2EiY-CC6aC6Y_IBbga1kvvWiuPhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXlzdGVyeWFuZHN1/c3BlbnNlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OS9NaWxpdGFyeS1U/aHJpbGxlci1HZW5y/ZS5qcGc",
  },
  {
    name: "Horror",
    description: "Designed to frighten and invoke our hidden worst fears.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-crow-et00392402-1711182361.jpg",
  },
  {
    name: "Mystery",
    description: "Focuses on the solving of a mystery, often a crime.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mystery-et00364170-1688992732.jpg",
  },
  {
    name: "Adventure",
    description:
      "Often involves a journey or quest, with high stakes and exciting experiences.",
    url: "https://imgs.search.brave.com/vQkz1tI6tUgd-WK7igiacCq9Inv5P7WygAOijwUxjrA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/MDQxNTMzNi9waG90/by9zdW1tZXItY2Ft/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bjk1ZXdaVGpj/MHdqQjJfUm9SbEta/RmhpSHQxT3dWWWpJ/YThMbGUtQUwyST0",
  },
  {
    name: "Fantasy",
    description: "Set in an imaginary universe, often involving magic.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fantasy-et00318104-1661075590.jpg",
  },
  {
    name: "Science Fiction",
    description:
      "Deals with futuristic concepts such as advanced science and technology.",
    url: "https://imgs.search.brave.com/1R1dKySDUW20FWlzHFE6zNF2pqeT4ju4TjmM3IbK2kw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTA2/MTU0NjQ1Lzc1MC81/NjIvaW1hZ2UuanBn",
  },
  {
    name: "Historical",
    description:
      "Set in a specific historical period, often with elaborate costumes.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-2-the-conclusion-et00038693-12-11-2020-05-48-55.jpg",
  },
  {
    name: "Musical",
    description: "Includes song and dance as a central part of the narrative.",
    url: "https://imgs.search.brave.com/I9HqUC7-mLY594Ot3kX6nwO8lyEjHFNDCb_y05SzNAA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYz/NDg4NTQ5L3Bob3Rv/L211c2ljLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1qTTE2/WUhTSVBsdHJIRkts/S2x6dDdoREFvd0p2/S0JhQUVlMU85WGhv/ODU4PQ",
  },
  {
    name: "Crime",
    description: "Centers around criminal acts and the justice system.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg",
  },
  {
    name: "War",
    description:
      "Depicts warfare and its consequences, often with a historical basis.",
    url: "https://imgs.search.brave.com/qOh35XOTqrzlSNIxBOErEe6Hq_ec_-wPUq1dq3bk_Nc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjMz/MDk0OC5qcGc",
  },
  {
    name: "Sports",
    description: "Centers around sports and athletic activities.",
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ms-dhoni-the-untold-story-et00025234-1683880914.jpg",
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
