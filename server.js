const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Ahoj zkousime remote push z VPS nebo ne ze by ned'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))