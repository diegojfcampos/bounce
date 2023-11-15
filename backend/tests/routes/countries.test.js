const request = require("supertest");
const app = require("../../src/app");

describe("Testing route to get country by name", () => {
  it("should return status 200 and a JSON with Country Geral Information", async () => {
    const response = await request(app)
      .get("/api/country/get/deutschland");

    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("name");
  });
});
