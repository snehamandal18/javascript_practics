//for each loop
const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

coding.forEach(function(val){
  //  console.log(val)
})

coding.forEach( (val) => {
   // console.log(val)
})




function printMe(item) {
    //console.log(item);
}
//coding.forEach(printMe);



coding.forEach( (item,index,arr)=>{
    //console.log(item,index,arr);
})

//array of object 
// retriving data from this using for each loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c ++",
        languageFileName: "cpp"
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
