const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Ahoj tady IMPULSOV zkxusime remote push z VPS nebo ne ze by ndefdd'))

app.listen(port, () => console.log(`Example app listening ond port ${port}!. NODE_ENV je ${process.env.NODE_ENV}`))