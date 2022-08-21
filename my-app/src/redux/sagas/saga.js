



function* yyy() {
  yield "first";

  yield "second";
}
const generator = yyy();


console.log(1);

console.log("generator", generator.next());

console.log(2);




function* rootSaga() {
}

export default rootSaga;