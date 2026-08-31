
const accountId = 14453
let acccountEmail = "sneha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed
acccountEmail = "sn@he.com"
accountPassword = "121212"
accountCity = "Bangalore"

console.log(accountId);
/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,acccountEmail,accountPassword,accountCity,accountState])
