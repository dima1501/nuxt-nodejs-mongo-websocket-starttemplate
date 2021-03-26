// const axios = require("axios")
let localIO = null

module.exports = {
  start: async(io) => {
    localIO = io
    io.on("connection", (socket) => {
        console.log(`Socket.io user connected`)
        // localIO.to(socket.id).emit('updateSocketId', socket.id);
    })
  }
}
