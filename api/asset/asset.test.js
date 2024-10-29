const request = require("supertest");
const app = require("../../app");

describe("Assets API", () => {
    it("should get all assets", async () => {
        // Arrange

        // Act
        const response = await request(app).get("/api/assets");

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it("should create a new asset", async () => {
        // Arrange
        const asset = {
            name: "Asset Test",
            price: 300,
            slug: "asset-test",
            image: "https://via.placeholder.com/150",
            tokenAssetAddress: "BQhCiUcQfDgoLLx6XUf6ne7kYe5YE8ZKMHpJ9j2yaW5N",
        };

        // Act
        const response = await request(app).post("/api/assets").send(asset);

        // Assert
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe(asset.name);
    });

    it("should get a single asset by ID", async () => {
        // Arrange
        const assetId = 1;

        // Act
        const response = await request(app).get(`/api/assets/${assetId}`);

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id", assetId);
    });

    it("should get a single asset by slug", async () => {
        // Arrange
        const assetSlug = "asset-1";

        // Act
        const response = await request(app).get(`/api/assets/slug/${assetSlug}`);

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("slug", assetSlug);
    });

    it("should update an asset", async () => {
        // Arrange
        const assetId = 1;
        const updatedAsset = {
            name: "Updated Asset",
            price: 400,
            slug: "updated-asset",
            image: "https://via.placeholder.com/150",
            tokenAssetAddress: "BQhCiUcQfDgoLLx6XUf6ne7kYe5YE8ZKMHpJ9j2yaW5N",
        };

        // Act
        const response = await request(app)
            .put(`/api/assets/${assetId}`)
            .send(updatedAsset);

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(updatedAsset.name);
    });

    it("should delete an asset", async () => {
        // Arrange
        const assetId = 1;

        // Act
        const response = await request(app).delete(`/api/assets/${assetId}`);

        // Assert
        expect(response.statusCode).toBe(204);
    });

    it("should return 404 for an asset not found", async () => {
        // Arrange
        const assetId = 999;

        // Act
        const response = await request(app).get(`/api/assets/${assetId}`);

        // Assert
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty("error", "Asset not found");
    });
});
