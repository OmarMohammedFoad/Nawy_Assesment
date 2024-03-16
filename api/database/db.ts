import mongoose from "mongoose";
const db = mongoose.connection;
mongoose.connect("mongodb://mongo:27017/apartments");
db.once("open", () => {
  console.log(`successfully connect with database in development mode`);
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));
export default mongoose;
