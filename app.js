import express, { urlencoded } from "express";
import env from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";

// MIDDLEWARE VAR
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// ROUTES VAR
import { userRoute } from "./routes/index.js";

env.config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));

// ROUTES
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
