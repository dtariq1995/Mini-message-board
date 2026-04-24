const { Router } = require("express");
const db = require("../db");
const indexRouter = Router();

indexRouter.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM messages ORDER BY created_at DESC");
    res.render("index", { title: "Mini Messageboard", messages: result.rows });
  } catch (err) {
    next(err);
  }
});

indexRouter.post("/", async (req, res, next) => {
  const { name, message } = req.body;

  try {
    await db.query(
      "INSERT INTO messages (user_name, text) VALUES ($1, $2)",
      [name, message]
    );
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = indexRouter;