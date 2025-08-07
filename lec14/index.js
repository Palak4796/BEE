//acessing the dom elements
//via id //is unique and there returns the element not the collection 

let el1= document.getElementById("HomeTitle");
console.log(el1);

//2.using class name //always return the collection // not unique can take multiple elements 
let el2=document.getElementsByClassName("user-item");
console.log(el2[2]);

let el3=document.getElementsByClassName("user-list-heading")
console.log(el3[0]);

//3. tag name 
let el4=document.getElementsByTagName("p");
console.log(el4);

// 4.queury selector

let el5=document.querySelector("#HomeTitle");
console.log(el5);

let el6=document.querySelector(".user-item");
let el7=document.querySelectorAll(".user-item");
console.log(el7);
console.log(el6);

let userList=document.querySelector(".user-list");
let el8=document.querySelector("p");
console.dir (el8);

//properties 
//1.innner text


//2,inner html

//3, inner Content 

let content=el8.innerText;
console.log(content);

let userlistcontent =userList.innerText;
console.log(userlistcontent);


//getting the content 
let userlistcontent2 =userList.innerHTML;
console.log(userlistcontent2);


//setting the content 

el8.innerText="set via javascript"

userList.innerHTML=`<li>User one</li>
<li>User two</li>
`

/*
parent 
child 
siblings 
*/

