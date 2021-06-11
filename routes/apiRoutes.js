const fs = require('fs')
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(data));

    app.get('/api/notes/:id', (req, res) => {
        res.json(data[Number(req.params.id)])
    })

    app.post('/api/notes', (req, res) => {
        let note = req.body;
        let uniqueID = (data.length)
        console.log(uniqueID);
        note.id = uniqueID;
        data.push(note);

        fs.writeFileSync("./db/db.json", JSON.stringify(data), (err) => { 
            if (err) throw (err)
        })

        res.json(data)
    }); 
}

