const request = require("supertest");
const app = require("../src/index");
const mongoose = require("mongoose");

describe("Task API", () => {
    // Connect to a test database before running tests
    beforeAll(async () => {
        const url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/test_db";
        await mongoose.connect(url);
    });

    // Close connection after all tests are done
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should create task", async () => {
        const res = await request(app)
            .post("/tasks")
            .send({ title: "Test Task" });

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
        expect(res.body.data.title).toBe("Test Task");
    });

  it("should fail when title is empty", async () => {
    const res = await request(app)
        .post("/tasks")
        .send({});

    expect(res.statusCode).toBe(400);
    });

});