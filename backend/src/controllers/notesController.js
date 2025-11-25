import Note from '../models/Note.js';

export async function getAllNotes (req, res)  {
    try {
        const notes = await Note.find(); //fetch all notes from db
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function createNote (req, res)  {
    try {
        const {title, content} = req.body;
        const newNote = new Note({ title: title, content: content });
        console.log(title, content);
    } catch (error) {
        console.error("Error creating note:", error);
    }
};

export async function updateNote (req, res)  {
    res.status(200).json({message: "note updated"});
};

export async function deleteNote (req, res)  {
    res.status(200).json({message: "note deleted"});
};