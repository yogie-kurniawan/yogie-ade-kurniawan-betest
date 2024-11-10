import express, { urlencoded } from "express";
import env from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import helmet from "helmet";

// MIDDLEWARE VAR
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// ROUTES VAR
import { userRoute } from "./routes/index.js";

env.config();
const app = express();
const PORT = process.env.PORT || 7000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(helmet());

// ROUTES
app.get("/api/v1", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API. Your request was successful.",
  });
});
app.use("/api/v1/users", userRoute);

// MIDDLEWARE
app.use(notFound);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

export default app;
