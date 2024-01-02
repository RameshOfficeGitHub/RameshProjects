const exrpress = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = exrpress()
app.use(exrpress.json());
app.use(cors());
app.use(cors({
    origin: ["https://ramesh-projects-cliebt.vercel.app"],
    methods: ["POST", 'GET'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.json("hello")
})
app.post('/user', async (req, res) => {

    try {
        const { name, age } = req.body;
        console.log("first")
        const responce = await axios.post('https://651ff610906e276284c3cac8.mockapi.io/UsersData', { name: name, age: age })
        res.json({message:"success"})
    } catch (error) {
        console.log(error)
    }

})
app.listen("8080", "0.0.0.0", () => {
    console.log(`Server running on port 8080`);
});
