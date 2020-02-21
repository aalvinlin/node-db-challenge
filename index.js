const server = require("./server");

const PORT = 5000;

server.listen(PORT, () => {
    console.log("Projects server is running on port", PORT);
})