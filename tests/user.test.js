import request from "supertest";
import app from "../app.js";
import { createUser, deleteUser } from "./util.js";
import { generateToken } from "../utils/token.js";
const baseUrl = "/api/v1";

const credentials = {
  _id: "672f2a237f49186d0c200340",
  userName: "john",
  accountNumber: "123",
  identityNumber: "123",
  emailAddress: "john@gmail.com",
};
const updatedUser = {
  userName: "ron",
  accountNumber: "1234",
  identityNumber: "1234",
  emailAddress: "ron@gmail.com",
};
const token = generateToken({
  userName: credentials.userName,
  accountNumber: credentials.accountNumber,
});
describe("User", () => {
  // test("GET : should return 200 and a user object if the user is found", async () => {
  //   const response = await request(app)
  //     .get(`${baseUrl}/users/user/${credentials._id}`)
  //     .set("Authorization", "Bearer " + token);
  //   expect(response.statusCode).toBe(200);
  //   expect(response.body.success).toBe(true);
  //   expect(response.body.user).toBeDefined();
  // });
  // test("NOT FOUND : should return 404 if the user is not found", async () => {
  //   const response = await request(app).get(
  //     `${baseUrl}/users/user/672f01c8ccc63f68d66a8a38`
  //   );
  //   expect(response.statusCode).toBe(404);
  //   expect(response.body.message).toBe("User Not Found");
  // });
  // test("INVALID ID: should return 400 for invalid ID format", async () => {
  //   const response = await request(app).get(`${baseUrl}/users/user/invalid-id`);
  //   expect(response.statusCode).toBe(400);
  //   expect(response.body.message).toBe("Invalid ID format");
  // });
  // test("CREATE : should return 201 and save a user object", async () => {
  //   const response = await request(app)
  //     .post(`${baseUrl}/users/create`)
  //     .send(credentials);
  //   expect(response.statusCode).toBe(201);
  // });
  // test("UPDATE : should return 200 and update an existing user", async () => {
  //   const response = await request(app)
  //     .patch(`${baseUrl}/users/123/update`)
  //     .send(updatedUser);
  //   expect(response.statusCode).toBe(200);
  // });
  test("DELETE : should return 200 and delete an existing user", async () => {
    const response = await request(app).delete(
      `${baseUrl}/users/672f2fa0e9cefc4531eb3330/delete`
    );
    expect(response.statusCode).toBe(200);
  });
});
