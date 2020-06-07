const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const title = [];
books.forEach((element) => {
    title.push(element.title); 
})
console.log(title);