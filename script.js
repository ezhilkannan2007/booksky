//selecting overlay,popup,add button for popup
var add_btn = document.getElementById("add_btn")
add_btn.addEventListener("click",function(event){
    var overlay = document.getElementById("overlay")
    var popup = document.getElementById("popup")
 
    event.preventDefault()
    overlay.style.display = "block"
    popup.style.display = "block"
})

//selecting container div , book_container div , popup div , inputs from popup div , add button for adding book

var add_book = document.getElementById("add_book")
add_book.addEventListener("click" , function(event){

    var container = document.querySelector(".container")
    var book_title = document.getElementById("book_title")
    var author_name = document.getElementById("author_name")
    var description = document.getElementById("description")

    event.preventDefault()
    console.log("hi")
    var bookcontainer = document.createElement("div")
    bookcontainer.setAttribute("class","book_container")
    bookcontainer.innerHTML = `<h2>${book_title.value}</h2>
        <h4>${author_name.value}</h4>
        <p>${description.value}</p>
        <button class="delete_book" onclick="del_book(event)">delete</button>`
    
    container.append(bookcontainer)
    overlay.style.display = "none"
    popup.style.display = "none"
})



//selecting overlay,popup,cancel button for cancelling popup

var cancel_btn = document.getElementById("cancel_book")
cancel_btn.addEventListener("click",function(event){
    var overlay = document.getElementById("overlay")
    var popup = document.getElementById("popup")
    event.preventDefault()
    overlay.style.display = "none"
    popup.style.display = "none"
})

//selecting div book container and button to delete the entered book


function del_book(event){
    event.target.parentElement.remove()

}