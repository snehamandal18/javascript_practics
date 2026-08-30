//extarct data from form
let form = document.querySelector("form");
form.addEventListener("submit" ,function(event){
    event.preventDefault();

    //console.dir(form);
   // alert("form submitted");
//    let user = document.querySelector("#user");
//    let pass = document.querySelector("#pass");
//   // console.dir(inp);
//    console.log(user.value); 
//    console.log(pass.value);


// we can access element without query selector 
// let user = this.elements[0];
// let pass = this.elements[1];

//     alert(`username is ${user.value} and password is ${pass.value}`);
} );

// change event
let user = document.querySelector("#user");
user.addEventListener("change", function(){
    console.log(" changed event");
    console.log("final value = ", this.value);
})


user.addEventListener("input", function(){
    console.log(" input event");
    console.log("final value = ", this.value);
})