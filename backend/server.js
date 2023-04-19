// /----import express---/
const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is good good");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(`${PORT}`, console.log(`gayathiri app was started on PORT ${PORT}`));
