export function getAllNotes(req, res) {
    res.status(200).send("Notes fetched scuccessfully")
}

export function createANote(req, res){
    res.status(201).json({ "message": "Note created scuccessfully" })
}

export function updateANote(req, res) {
    res.status(200).json({ "message": "Note updated scuccessfully" })
}

export function deleteANote(req, res) {
    res.status(200).json({ "message": "Note deleted scuccessfully" })
}