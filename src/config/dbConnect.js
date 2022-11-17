import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://admin:1998*Kel@notepadcluster.vhrmyaj.mongodb.net/notedb`
);

let db = mongoose.connection;

export default db;
