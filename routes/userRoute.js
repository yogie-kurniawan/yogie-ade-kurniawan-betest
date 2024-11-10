import { Router } from "express";
import {
  register,
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

route.post("/register", register);
route.post("/login", authenticateUser);
route.get("/", checkAuth, getUsers);
route.get("/user/:id", checkAuth, getUserById);
route.get("/account/:accountNumber", checkAuth, getUserByAccountNumber);
route.get("/identity/:identityNumber", checkAuth, getUserByIdentityNumber);
route.post("/create", checkAuth, createUser);
route.patch("/:id/update", checkAuth, updateUser);
route.delete("/:id/delete", checkAuth, deleteUser);

export default route;
