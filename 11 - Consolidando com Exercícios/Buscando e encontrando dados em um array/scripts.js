/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    categoryName: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    categoryName: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

function countNumberOfCategories(booksByCategoryArray) {
  return `O número de categorias é  ${booksByCategoryArray.length}`;
}

/*
  Utilizando o for para iteração
*/

/*
function countNumberOfBooksByCategory(booksByCategoryArray) {
  let message = "";
  for (i = 0; i < booksByCategoryArray.length; i++) {
    message += `O número de livros da categoria  ${booksByCategoryArray[i].categoryName} é ${booksByCategoryArray[i].books.length}\n`;
  }
  return message;
}

function countNumberOfAuthors(booksByCategoryArray) {
  let authors = [];
  for (i = 0; i < booksByCategoryArray.length; i++) {
    for (k = 0; k < booksByCategoryArray[i].books.length; k++) {
      if (!authors.includes(booksByCategoryArray[i].books[k].author)) {
        authors.push(booksByCategoryArray[i].books[k].author);
      }
    }
  }
  return `O número de autores é ${authors.length}`;
}

function showBooksByAugustoCury(booksByCategoryArray) {
  let message = "O Autor possui os livros:\n";
  for (i = 0; i < booksByCategoryArray.length; i++) {
    for (k = 0; k < booksByCategoryArray[i].books.length; k++) {
      booksByCategoryArray[i].books[k].author == "Augusto Cury"
        ? (message += `- ${booksByCategoryArray[i].books[k].title}\n`)
        : (message += "");
    }
  }
  return message;
}

function showBooksByAuthor(booksByCategoryArray, author) {
  let message = "O Autor possui os livros:\n";
  for (i = 0; i < booksByCategoryArray.length; i++) {
    for (k = 0; k < booksByCategoryArray[i].books.length; k++) {
      booksByCategoryArray[i].books[k].author == author
        ? (message += `- ${booksByCategoryArray[i].books[k].title}\n`)
        : (message += "");
    }
  }
  return message;
}
*/

/*
Utilizando o forEach para iteração
*/

function countNumberOfBooksByCategory(booksByCategoryArray) {
  let message = "";
  booksByCategoryArray.forEach((category) => {
    message += `O número de livros da categoria  ${category.categoryName} é ${category.books.length}\n`;
  });
  return message;
}

function countNumberOfAuthors(booksByCategoryArray) {
  let authors = [];
  booksByCategoryArray.forEach((category) => {
    category.books.forEach((book) => {
      authorIncluded = authors.includes(book.author);
      if (!authorIncluded) {
        authors.push(book.author);
      }
    });
  });
  return `O número de autores é ${authors.length}`;
}

function showBooksByAugustoCury(booksByCategoryArray) {
  let message = "O Autor possui os livros:\n";
  booksByCategoryArray.forEach((category) => {
    category.books.forEach((book) => {
      book.author == "Augusto Cury"
        ? (message += `- ${book.title}\n`)
        : (message += "");
    });
  });
  return message;
}

function showBooksByAuthor(booksByCategoryArray, author) {
  let message = "O Autor possui os livros:\n";
  booksByCategoryArray.forEach((category) => {
    category.books.forEach((book) => {
      book.author == author
        ? (message += `- ${book.title}\n`)
        : (message += "");
    });
  });
  return message;
}

console.log(countNumberOfCategories(booksByCategory));
console.log(countNumberOfBooksByCategory(booksByCategory));
console.log(countNumberOfAuthors(booksByCategory));
console.log(showBooksByAugustoCury(booksByCategory));
console.log(showBooksByAuthor(booksByCategory, "Stephen R. Covey"));
