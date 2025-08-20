const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Save submitted text into messages.txt
app.post("/save", (req, res) => {
  const text = req.body.text || "";
  fs.appendFileSync(path.join(__dirname, "messages.txt"), text + "\n", "utf8");
  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
