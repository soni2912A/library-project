import books from "./book.js";


class library{
    constructor(libraryname){
        this.libraryname = libraryname;
        this.booklist = []
    }
    // book is object in this parameter @params => books(object)
    addbook(bk) {
        // instance of is basically use for oject is present or not . if it is present  it will true (! not operater)
        if(!(bk instanceof books)){
            console.error("hey! you tried to add something that isn't a book oject!");
            return;
        }
        this.booklist.push(bk);
        console.log(
            '"${b'
        )
    }
}

export default library