import notes from "../models/Note.js";

class NoteController {
  static getNotes = (req, res) => {
    notes.find((err, notes) => {
      if (err) {
        res.status(500).send;
      }
      return res.status(200).json(notes);
    });
  };
  static addNote = (req, res) => {
    const note = new notes(req.body); // req.body is the data sent from the client (the note) in JSON format
    note.save((err, note) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar nota.` });
      } else {
        res.status(201).send(note.toJSON());
      }
    });
  };
}

export default NoteController;
