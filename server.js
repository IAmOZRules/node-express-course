const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: "login successful",
            token: "encrypted"
        })
    } else {
        res.json({
            success: false,
            message: "login unsuccessful"
        })
    }
})

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Successfully got user by id. Nice!',
        user: req.params.id
    })
})

app.listen(8000, () => { console.log('Server is Listening') })
