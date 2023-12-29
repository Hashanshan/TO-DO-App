const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect(
        "mongodb+srv://test:123@cluster0.d2kuc2v.mongodb.net/"
      ).then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();