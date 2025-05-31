import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// сравнение паролей пользователя и хеша пароля в базе данных
export const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

// хеширование пароля
export const hashPassword = password => {
  return bcrypt.hash(password, 5);
};

//токен авторизации пользователя
export const createJWT = user => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};
// функция защиты пользователя
export const protect = (req, res, next) => {
  // заголовок авторизации
  const bearer = req.headers.authorization;
  // проверка на наличие заголовка авторизации
  if (!bearer) {
    res.status(401);
    res.json({ message: "not autorized" });
    return;
  }
  // разделение массива на при запросе
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "not valited token" });
    return;
  }
  // проверка на валидность токена
  try {
    const user = jwt.verfify(token, process.env.JWT_SECRET);
    // присвоение токена пользователю
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    res.json({ message: "not valited token" });
    return;
  }
};
