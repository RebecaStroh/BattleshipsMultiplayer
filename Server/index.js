
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { 
  cors : {
    origin: "http://localhost:3000", // who is gone call this server?
    methods: ["GET", "POST"], // which methods the server will accept
  }
});
const cors = require("cors");
const port = 2000;

app.use(cors());

// whenever someone (socket) connects
io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("joinGame", (data) => {
    socket.join(data);

    console.log('User "', socket.id, '" joined the game "', data, '"');
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

server.listen(port, () => {
  console.log('Server running...');
})