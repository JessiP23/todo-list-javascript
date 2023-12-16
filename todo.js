function addTodo(){
    const todoElement = document.getElementById("new-todo");//get access to this element
    var todo = todoElement.value;//value is mostly to the input of an html format  TO GET THE VALUE
    todoElement.value = "";//to clean the value

    if (todo.length < 3) {
        return alert("You must have at least 3 characters for your TODO");
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);

    li.setAttribute("onclick", "this.remove()");
    //append text to the list
    li.appendChild(text);
    list.appendChild(li);

    const getDate = document.getElementById("datetime").innerHTML = Date();
    const datetime = document.createElement("p");
    datetime.append(getDate);
}
