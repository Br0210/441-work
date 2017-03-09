/*
HW-4; part 2
SHELL VARIABLE PRINTING

Directions: Write an application that can parse input variables supplied with the node call and print these to the console. This app should be capable of discarding flags (i.e. `-f` and/or `--flag`) and only printing the proceeding variables, each on their own line.

Furthermore, your app should be looking for a "message" flag signified by "`-m`". The value following this flag should be printed last, regardless of where it comes in the input variable sequence and should have a blank line above it.

When I test this app, I will include a number of values proceeded by flags (i.e. `--flag "some value"`).


*/
function grab(flag){
// Used array function '.indexOf(argument)' to find the relavent index
  var index = process.argv.indexOf(flag);

  return (index === -1) ? null : process.argv[++index];
}

  var flag = grab('-f');

  var flag2 = grab('--flag')

  var message = grab('-m');

if(!flag){
}else{
  console.log(`${flag}`);
}

if(!flag2){
  }else{
  console.log(`${flag2}`);
}

if(!message){
  }else{
  console.log(`\n${message}`)
}

if( !f || !flag ){
  console.log("data input not valid!");
} else {
  console.log(`${f} is ${flag}.`);
}
