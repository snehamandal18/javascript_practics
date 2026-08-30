
let btn = document.querySelector("button");
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click", function(){
    //console.log(inp.value);
    let item = document.createElement("li");
     item.innerText = inp.value;

     let dltBtn = document.createElement("button");
     dltBtn.innerText = "delete";
     dltBtn.classList.add("delete");

     item.appendChild(dltBtn);
     ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function(event){
  if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
})
// let delBtns = document.querySelectorAll(".delete");
// for(dltBtn of delBtns){
//     dltBtn.addEventListener("click", function(){
//         console.log("element deleted");
//         let par = this.parentElement;
//         par.remove();
//     })
// }