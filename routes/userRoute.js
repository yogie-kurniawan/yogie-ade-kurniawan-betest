import { Router } from "express";
import {
  authenticateUser,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByAccountNumber,
  getUserByIdentityNumber,
} from "../controllers/userController.js";
import { checkAuth } from "../middleware/auth.js";

const route = Router();

route.get("/login", authenticateUser);
route.get("/", getUsers);
route.get("/user/:id", getUserById);
route.get("/account/:accountNumber", getUserByAccountNumber);
route.get("/identity/:identityNumber", getUserByIdentityNumber);
route.post("/create", createUser);
route.patch("/:id/update", updateUser);
route.delete("/:id/delete", deleteUser);

export default route;
