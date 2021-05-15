import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_URL: process.env.MONGO_URL || "node-pag",
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.PORT || 4000
}