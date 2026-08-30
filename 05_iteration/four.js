
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple" 
}
for (const key in myObject) {
    
    //console.log(key) // it prints only key value 
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
 