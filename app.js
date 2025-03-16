const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, this is a Node.js app running in Docker!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
