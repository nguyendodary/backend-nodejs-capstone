const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SecondChance API",
      version: "1.0.0",
      description: "Modern Second-Hand Marketplace API",
      contact: {
        name: "SecondChance Team"
      }
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8080}`,
        description: "Development Server"
      }
    ],
    components: {
      schemas: {
        Item: {
          type: "object",
          required: ["name", "description", "category", "price"],
          properties: {
            _id: { type: "string", description: "Item ID" },
            name: { type: "string", description: "Item name" },
            description: { type: "string", description: "Item description" },
            category: {
              type: "string",
              enum: ["Electronics", "Clothing", "Books", "Furniture"],
              description: "Item category"
            },
            price: { type: "number", description: "Item price" },
            image: { type: "string", description: "Image URL" },
            createdAt: { type: "string", format: "date-time" }
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsdoc(options);
