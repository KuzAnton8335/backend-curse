import { Router } from "express";

const router = Router();

/*Products*/

// маршрут для получения всех продуктов
router.get("/product", (req, res) => {
  res.json({ message: "hello product" });
});

// получение продуктов по id(уникальному индификатор) продукта
router.get("/product/:id", () => {});

// обнвление продукта по его id (уникальному индификатору)
router.put("/product/:id", () => {});

// создание нового продукта
router.post("/product", () => {});

// удаление продукта по его id (уникальному индификатору)
router.delete("/product/:id", () => {});

// обнвление информации о продукте
/* Update*/

router.get("/update", () => {});

router.get("/update/:id", () => {});

router.put("/update/:id", () => {});

router.post("/update", () => {});

router.delete("/update/:id", () => {});

// точки обновления
/* Update Points*/

router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", () => {});

router.put("/updatepoint/:id", () => {});

router.post("/updatepoint", () => {});

router.delete("/updatepoint/:id", () => {});

export default router;
