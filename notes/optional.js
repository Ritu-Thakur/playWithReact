
//Optional Chaining. (recent to javascript)
//How would you re-write this using optional chaining?

let user = {}; //user has no address
console.log(user.address.street.name); //fails

if (user && user.address && user.address.street){
  console.log(user.address.street.name);
}