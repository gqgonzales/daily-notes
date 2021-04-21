const notes = [
  {
    id: 1,
    subject: "JavaScript Objects",
    date: "04/15/2021",
    body:
      "Objects are collections of values that have keys assigned to them. Key value pairs! Remember that an object can have multiple key value pairs associated with it. ",
    feeling: "Solid.",
    timeSpentHours: 0.5,
  },
  {
    id: 2,
    subject: "JavaScript Arrays",
    date: "04/15/2021",
    body:
      "This whole const notes is an array! Remember that arrays use solid brackets instead of curly braces.",
    feeling: "Decent!",
    timeSpentHours: 0.25,
  },
];

// console.log(notes);

const noteAboutToday = {
  id: 3,
  subject: "Adding Objects to Arrays",
  date: "04/16/21",
  body:
    "Going to try and add this note to the array. Felt cute, might .push() later.",
  feeling: "Sluggish, lethargic, uninspired. Get some sleep.",
  timeSpentHours: 6,
};

notes.push(noteAboutToday);
// console.log(notes);

// Below is a for...of loop for displaying the note's body.

/* 
for (const note of notes) {
  console.log(`
  Note ${note.id}
  ${note.date}
  I learned about ${note.subject}.
  ${note.body}
  I spent ${note.timeSpentHours} hours working on it.
  I felt ${note.feeling}
  ----------------------------------------------------
  `);
}
 */

// Let's add search funcitonality.

/*
const searchTerm = 2;

for (const note of notes) {
  if (searchTerm === note.id) {
    console.log(`
  Note ${note.id}
  ${note.date}
  I learned about ${note.subject}.
  ${note.body}
  I spent ${note.timeSpentHours} hours working on it.
  I felt ${note.feeling}
  ----------------------------------------------------
  `);
  }
}

*/

// First, start by definiing your function, making up variables as you go.
const createNote = (note) => {
  const lastNote = notes.length - 1;
  const currentLastNote = notes[lastNote];
  const maxId = currentLastNote.id;
  const idForNewNote = maxId + 1;
  note.id = idForNewNote;
  notes.push(note);
};

// create a new note object
const moreNewerNote = {
  subject: "Adding to Iterations through Functions",
  date: "04/16/21",
  body:
    "Now you're really adding! In this example, we actually define four different variables as we then are manipulating to get to the data we want.",
  feeling: "Hopeful, re-energized, uncaffeinated.",
  timeSpentHours: 3,
};

// Pass your object as an argument of the funciton.
createNote(moreNewerNote);

/*

for (const note of notes) {
  console.log(`
  Note ${note.id}
  ${note.date}
  I learned about ${note.subject}.
  ${note.body}
  I spent ${note.timeSpentHours} hours working on it.
  I felt ${note.feeling}
  ----------------------------------------------------
  `);
}

*/
// Let's test!
// It worked!!

// Now let's try and add a Date funciton.
var dateCreated = Date();

const aprilOneNineNote = {
  subject: "The Date Function",
  date: dateCreated,
  body:
    "Don't overcomplicate things! Sometimes, the simple answer is the right one.",
  feeling: "Hopeful, humbled",
  timeSpentHours: 0.75,
};

createNote(aprilOneNineNote);

const newNoteFunction = () => {
  for (const note of notes) {
    console.log(`
  Note ${note.id}
  ${note.date}
  I learned about ${note.subject}.
  ${note.body}
  I spent ${note.timeSpentHours} hours working on it.
  I felt ${note.feeling}
  ----------------------------------------------------
  `);
  }
};

newNoteFunction();

//Optional challenge: crushed!
