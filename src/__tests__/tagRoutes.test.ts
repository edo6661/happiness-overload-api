import request from "supertest";
import app from "..";
import { jwt, setup, teardown } from "../utils/setupTesting";

beforeAll(async () => {
  await setup();
});

afterAll(async () => {
  await teardown();
});

describe("Tags Routes", () => {
  describe("GET /tags?category=all", () => {
    it("Should return arrray of tags", async () => {
      const res = await request(app).get("/tags");
      const { statusCode, body } = res;

      expect(statusCode).toEqual(200);
      expect(body).toHaveProperty("data");
      expect(body).toHaveProperty("pagination");
      expect(body).toHaveProperty("links");
    });
  });
});