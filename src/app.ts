import express from "express";
import path from "node:path";

const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

const isProd = process.env.NODE_ENV === "prod";

if (isProd) {
  app.set("views", path.join(import.meta.dirname, "views"));
} else {
  app.set("views", path.join(import.meta.dirname, "..", "dist", "views"));
}
app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { message: "hello bcit" });
});

app.listen(PORT, () => {
  console.log("Server is now running");
});
