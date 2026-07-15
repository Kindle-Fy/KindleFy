const books=[

{

title:"No books yet",

author:"KindleFy",

status:"Coming Soon"

}

];

const library=document.getElementById("library");

books.forEach(book=>{

const card=document.createElement("div");

card.className="book";

card.innerHTML=`

<h2>${book.title}</h2>

<p>${book.author}</p>

<small>${book.status}</small>

`;

library.appendChild(card);

});
