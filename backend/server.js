import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("StaySync modern backend chal raha hai!");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server port ${PORT} par start ho gaya hai`);
});
