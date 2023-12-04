// ------require all files/packages------
const express = require('express')
const cors = require('cors')

// ------configure the server---------
const app = express() //creates the express server
app.use(express.json()) // server will send/receive info in json format
app.use(cors()) //allow req/res from other ports on my machine

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

// -------- endpoints -----------
app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        const filteredItems = inventory.filter((item) => {
            return item.toLocaleLowerCase().includes(req.query.item.toLocaleLowerCase())
        })
        res.status(200).send(filteredItems)
    } else {
    res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req, res) => {
    let index = +req.params.index //index automatically a string, put + in front to make it a number
    res.status(200).send(inventory[index])
})

// -------- listen ------------
app.listen(5050, () => console.log('Server running on port 5050'))