const express = require('express')
const app = express()
const port = process.env.port || 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
