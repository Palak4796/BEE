// inserting a new element on dom via javascript
// 1.Create a new element foreg "li" using create Element function 
// 2.Insert content in that element using either inner text or inner html 
//3. insert that element in parent container via appendChild  function 

// let ul=document.querySelector("ul");
// function addToDo(){
//     let li=document.createElement("li")
//     li.innerHTML= ` TODO3
//     <button>but</button>`
//     ul.appendChild(li)
// }

// addToDo();


// let todo={
//     id:"1",
//     title:"study at 8 pm today",
//     status:"pending"
// }

let todos=[
    { 
    id:"1",
    title:"study at 8 pm today",
    status:"pending"
    },
    { 
    id:"2",
    title:"study at 9",
    status:"done "
    },
    { 
    id:"3",
    title:"study at 10 pm today",
    status:"still ar work"
    }
]



function showallTodos()
{
    todos.forEach(todo=>{
        addToDo(todo)
    });
}

let ul = document.querySelector("ul");

//object---> object.title
function addToDo(todo){ 
    let li=document.createElement("li");
    li.innerHTML= ` ${todo.title}
    <button>but</button>`
    ul.appendChild(li)
}


// addToDo(todo);

showallTodos(todos);

let todoinput=document.querySelector(".todoinput");
let todoform=document.querySelector(".todoform");

todoform.addEventListener("submit", function(ev) {
  ev.preventDefault();
  let title=todoinput.value;
  console.log(title);

  let todo={
    id:Math.floor(Math.random()*100000),
    title:title,
    status:"pending"
  }


//   todos.push(todo)
  addToDo(todo);
  todoform.reset();

});






