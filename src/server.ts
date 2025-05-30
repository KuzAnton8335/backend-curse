import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./routes";

// api express
const app = express();
console.log(app);

// подключение cors
app.use(cors());
// подключение morgan
app.use(morgan("dev"));
// Middleware to parse JSON bodies
app.use(express.json());
// обработка url запросов (перевод в объект)
app.use(express.urlencoded({ extended: true }));

// costum middleware
// app.use((req, res, next) => {
//   req.shhh_secret = "doggy";
//   next();
// });

// ответ от express
app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({
    message: "hello",
  });
});

// подключение api
app.use("/api", router);

export default app;
