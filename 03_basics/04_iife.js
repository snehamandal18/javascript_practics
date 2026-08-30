// immediately Invoked function expression(iife)
(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB two CONNECTED ${name}`);
})('sneha');

