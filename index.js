// ARRAY SECTION

// Task 1: Create an empty array called readingList
let readingList = {
    books:["Einstien","DarkSeid","Shorts"],

};
readingList.books[1]="Darkseid Updated";
// Task 2: Add 3 books to the readingList array

// Task 3: Update the second book to have "Updated" at the end of its title

// Task 4: Delete the last book from the readingList array
// Console log readingList
readingList.books.pop();
// OBJECTS SECTION

// Task 5: Create an object called bookData with 'title', 'author', and 'pages' properties
let bookData = {
    title:"IDK",
    author:"Lucas Gomez",
    pages:67,
};
// Task 6: Add a property 'read' to the bookData object and set it to false
bookData.read = false;

// Task 7: Update the 'read' property to true
// Console log the bookData object

// NESTED ARRAYS & OBJECTS SECTION
// Task 8:  Add an property 'chapters' and set it equal to an array holding "Chapter 1", "Chapter 2", and "Chapter 3"
bookData.chapter=["Chapters 1","Chapter 2","Chapter 3"];
bookData.chapter.push("Chapter 4");
// Task 9: Add "Chapter 4" the 'chapters' property

// Console log the length of bookData's 'chapters' array to confirm it worked
console.log(bookData.chapter.length);
// Task 10: Update the title of the first chapter in the 'chapters' array to be "Chapter 1: Introduction"
bookData.chapter[0]="Chapter 1: Introduction";
// Console log the bookData object
console.log(bookData)