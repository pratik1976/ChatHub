const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
   .then(() => {
    console.log("Connection successful");
   }) 
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from:"Neha",
        to: "Priya",
        msg: "Send exam notes",
        created_at: new Date()
    },

    {
        from:"Nisha",
        to: "Kuldeep",
        msg: "Send exam timetable",
        created_at: new Date()
    },

    {
        from:"Kiran",
        to: "Shravan",
        msg: "Send exam time",
        created_at: new Date()
    },

    {
        from:"Raju",
        to: "Chutki",
        msg: "Send DAA notes",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);
