import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getAllNotes controller: ", error)
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

export async function getNoteById(req, res) {
    try {
        const notes = await Note.findById(req.params.id);
        if (!notes) return res.status(404).json({ "message": "Note not found" })
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getAllNotes controller: ", error)
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

export async function createANote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Error in createANote controller: ", error)
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

export async function updateANote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true, });
        if (!updatedNote) return res.status(404).json({ "message": "Note not found" })
        res.status(200).json(updatedNote)
    } catch (error) {
        console.log("Error in updateANote controller: ", error)
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

export async function deleteANote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id, { new: true });
        if (!deletedNote) return res.status(404).json({ "message": "Note not found" })
        res.status(200).json({ "Node deleted": deletedNote })
    } catch (error) {
        console.log("Error in deleteANote controller: ", error)
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}