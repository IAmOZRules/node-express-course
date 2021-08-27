const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log("Server is Running!");
})

const mockUserData = [
    { name: "Mark" },
    { name: "Jill" }
]

app.get("/users", (req, res) => {
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users = mockUserData,
    })
})