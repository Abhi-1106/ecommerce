"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var bcrypt = require("bcryptjs");
// This script will seed the database with initial data
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client, db, products, result, hashedPassword, demoUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uri = "mongodb+srv://123:123321@cluster0.04jn701.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
                    if (!uri) {
                        console.error("MONGODB_URI environment variable is not set");
                        process.exit(1);
                    }
                    client = new mongodb_1.MongoClient(uri);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, 9, 11]);
                    return [4 /*yield*/, client.connect()];
                case 2:
                    _a.sent();
                    console.log("Connected to MongoDB");
                    db = client.db("organic-market");
                    // Clear existing collections
                    return [4 /*yield*/, db.collection("products").deleteMany({})];
                case 3:
                    // Clear existing collections
                    _a.sent();
                    return [4 /*yield*/, db.collection("users").deleteMany({})];
                case 4:
                    _a.sent();
                    console.log("Cleared existing collections");
                    products = [
                        {
                            name: "Organic Avocados",
                            description: "Fresh, ripe avocados grown without pesticides. Rich in healthy fats and perfect for salads, sandwiches, or guacamole.",
                            price: 5.99,
                            category: "fruits-vegetables",
                            image: "/images/avocado.jpg",
                            stock: 50,
                            featured: true,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Free-Range Eggs",
                            description: "Farm-fresh eggs from free-range chickens. These eggs come from hens raised in open pastures with natural diets.",
                            price: 4.49,
                            category: "dairy-eggs",
                            image: "/images/eggs.jpg",
                            stock: 100,
                            featured: true,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Quinoa",
                            description: "Nutrient-rich quinoa grown using organic farming practices. High in protein and fiber, perfect for salads and sides.",
                            price: 6.99,
                            category: "grains-cereals",
                            image: "/images/quinoa.jpg",
                            stock: 75,
                            featured: true,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Trail Mix",
                            description: "A delicious blend of organic nuts, seeds, and dried fruits. Perfect for on-the-go snacking or hiking adventures.",
                            price: 7.99,
                            category: "snacks-treats",
                            image: "/images/trail-mix.jpg",
                            stock: 60,
                            featured: true,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Spinach",
                            description: "Fresh, crisp organic spinach leaves. Packed with iron, vitamins, and antioxidants for a nutritious addition to any meal.",
                            price: 3.49,
                            category: "fruits-vegetables",
                            image: "/images/spinach.jpg",
                            stock: 40,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Almond Milk",
                            description: "Creamy, dairy-free almond milk made from organic almonds. Perfect for smoothies, cereal, or drinking straight.",
                            price: 4.99,
                            category: "dairy-eggs",
                            image: "/images/almond-milk.jpg",
                            stock: 30,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Brown Rice",
                            description: "Wholesome, organic brown rice rich in fiber and nutrients. A versatile staple for countless healthy meals.",
                            price: 5.49,
                            category: "grains-cereals",
                            image: "/images/brown-rice.jpg",
                            stock: 80,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Dark Chocolate",
                            description: "Rich, indulgent dark chocolate made with organic cacao. A guilt-free treat high in antioxidants.",
                            price: 4.29,
                            category: "snacks-treats",
                            image: "/images/dark-chocolate.jpg",
                            stock: 45,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Blueberries",
                            description: "Sweet, juicy organic blueberries bursting with flavor and antioxidants. Perfect for snacking or baking.",
                            price: 6.49,
                            category: "fruits-vegetables",
                            image: "/images/blueberries.jpg",
                            stock: 35,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Greek Yogurt",
                            description: "Creamy, protein-rich Greek yogurt made from organic milk. A versatile ingredient for breakfast, snacks, or cooking.",
                            price: 5.29,
                            category: "dairy-eggs",
                            image: "/images/greek-yogurt.jpg",
                            stock: 50,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Oats",
                            description: "Hearty, fiber-rich organic oats. Perfect for a nutritious breakfast or baking healthy treats.",
                            price: 3.99,
                            category: "grains-cereals",
                            image: "/images/oats.jpg",
                            stock: 90,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "Organic Fruit Bars",
                            description: "Chewy, naturally sweet fruit bars made with 100% organic fruits. A convenient, healthy snack on the go.",
                            price: 4.99,
                            category: "snacks-treats",
                            image: "/images/fruit-bars.jpg",
                            stock: 70,
                            featured: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];
                    return [4 /*yield*/, db.collection("products").insertMany(products)];
                case 5:
                    result = _a.sent();
                    console.log("".concat(result.insertedCount, " products inserted"));
                    return [4 /*yield*/, bcrypt.hash("password123", 10)];
                case 6:
                    hashedPassword = _a.sent();
                    demoUser = {
                        name: "Demo User",
                        email: "demo@example.com",
                        password: hashedPassword,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };
                    return [4 /*yield*/, db.collection("users").insertOne(demoUser)];
                case 7:
                    _a.sent();
                    console.log("Demo user created");
                    console.log("Database seeded successfully");
                    return [3 /*break*/, 11];
                case 8:
                    error_1 = _a.sent();
                    console.error("Error seeding database:", error_1);
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, client.close()];
                case 10:
                    _a.sent();
                    console.log("MongoDB connection closed");
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
// Run the seed function
seedDatabase();
