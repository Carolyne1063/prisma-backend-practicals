"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("../src/router/userRoutes"));
// import postRoutes from './routes/PostRoutes';
// import profileRoutes from './routes/ProfileRoutes';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(userRoutes_1.default);
// app.use(postRoutes);
// app.use(profileRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
