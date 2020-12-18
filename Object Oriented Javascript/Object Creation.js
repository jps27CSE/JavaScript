var book = 
{
    name: "Functional Javascript",
    author: "Micheal Fogus",
    publisher: "0\ Reilly",
    page: 250,

    print: function()
    {
        console.log(this.name,this.author);
    }
}

console.log(book)
console.log(book.author)
console.log(book.print)

book.publishYear = 2010

console.log(book)