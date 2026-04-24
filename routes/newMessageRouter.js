const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("new-message", { title: "New Message" });
});

newMessageRouter.post("/", (req, res) => {
  // Handle new message submission here
  res.redirect("/");
});

module.exports = newMessageRouter;
