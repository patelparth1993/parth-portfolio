const express = require("express");
const path = require("path");
const compress = require("compression");
const app = express();

app.use(compress());

const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
