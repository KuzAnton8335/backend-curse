import { PrismaClient } from "./generated/prisma";

// образ призма клиента для связи с БД
const prisma = new PrismaClient();

export default prisma;
