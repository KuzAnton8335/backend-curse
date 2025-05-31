import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

// cоздание нового пользователя в базе данных
export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });
  // присваиваем токен авторизации для нового пользователя
  const token = createJWT(user);
  res.json(token);
};
// вход пользователя в систему
export const signin = async (res, req) => {
  // пользователь
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  // проверка валидность пользователя
  const isValid = await comparePassword(req.body.password, user.password);
  if (!isValid) {
    res.status(401);
    res.json({ message: "Неверный пароль или логин" });
    return;
  }
  // возвращаем токен авторизации для пользователя
  const token = createJWT(user);
  res.json(token);
};
