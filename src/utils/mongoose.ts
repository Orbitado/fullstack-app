import mongoose from "mongoose";

const user = "vleonardojuanpablo";
const password = "%40EuR3K4!3710";
const mongoDb = "task";

export const connectDb = async () => {
    mongoose
      .connect(
        `mongodb+srv://${user}:${password}@db-test.pg3rvlv.mongodb.net/${mongoDb}`
      )
      .then(() => {
        try {
          console.log(`MongoDb connected to ${mongoDb}`);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log("Error connecting to MongoDb", error);
      });
  }