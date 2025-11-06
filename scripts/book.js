class book{
    constructor(
        title,
        publishedby,
        publishedyear,
        author,
        quantity,
        ISBN
       ) {
        // 'this' refers to the new book object we are currently creating
        this.title = title;
        this.publishedby = publishedby;
        this.publishedyear = publishedyear;
        this.author = author;
        this.borrowed = 0;
        this.quantity = quantity || 2;
        this.ISBN = ISBN;
    }
    // a safety check : quantity cant't be negative!
    //  if  (this.quantity < 0) {
    //     this.quantity -=1;
        
    // }
    // this.borrowedcopies = 0;
}
export default book;