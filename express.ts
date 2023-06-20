import express from "express";

const app = express();
const port = 3000;

app.get("/api/some-value", (req, res) => {
  res.json({ value: "Hello from the API!" });
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
