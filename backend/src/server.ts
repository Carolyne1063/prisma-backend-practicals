// server.ts

import express from 'express';
import userRoutes from '../src/router/userRoutes';
// import postRoutes from './routes/PostRoutes';
// import profileRoutes from './routes/ProfileRoutes';

const app = express();
app.use(express.json());

app.use(userRoutes);
// app.use(postRoutes);
// app.use(profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
