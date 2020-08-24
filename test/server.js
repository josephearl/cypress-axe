const express = require('express')

const app = express()
const port = 3030

app.use(express.static('test/fixtures'))
app.get('/', (req, res) => {
    res.status(200).end()
})
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
