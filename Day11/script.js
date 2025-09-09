let bookList = Array();
let div = document.getElementById('booklist');
function createBook(){
    let book = prompt("Enter book name and if you want quit then simply enter quit !");
    while(book!='quit'){
        bookList.push(book);
        book = prompt("Enter book name and if you want quit then simply enter quit !");
    }
    alert("Book list created successfully!");
}

function seeList(){
    div.innerHTML = '';
    if(bookList.length === 0){
        let item = document.createElement('p');
        item.innerHTML=`Nothing in booklist`;
        div.appendChild(item);
        return;
    }
    for (let i=0;i<bookList.length;i++) {
        let item = document.createElement('p');
        item.innerHTML=`${i} : ${bookList[i]}`;
        div.appendChild(item);
    }
}

function updateList(){
    let index = Number(prompt("Enter index to update book 0-based indexing"));
    let updatedBook = prompt("Enter updated book");
    bookList[index] = updatedBook;
    alert("Successfully updated!") ;
}

function reverse(){
    let reverseBookList = Array();
    for(let i=bookList.length-1;i>=0;i--){
        reverseBookList.push(bookList[i]);
    }
    bookList = reverseBookList;
}

function addBook(){
    let newbook = prompt("Enter book ?");
    bookList.push(newbook);
}


function login(){
    let userName = ['sumit' , 'sonu' , 'sanjeev'];
    let password = ['sumit@123' , 'sonu@12' , 'sanjeev@67'];
    let username = prompt("Enter user name : ");
    let i = 0;
    for(i ; i<userName.length;i++){
        if(username === userName[i]){
            break;
        }
    }
    if(i === userName.length){
        alert("Wrong username");
        return;
    }
    let pass = prompt("Enter your password : ");
    if(password[i] === pass){
        alert("Successfully logged in!");
        return;
    }
    return alert('Wrong password!');
}