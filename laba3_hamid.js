var x1 ={};
var x2 ={"yt":76};
function isEmpty(obj){
  if(Object.keys(obj)[0]==null){
    return true
  }else{
    return false 
  }
}
console.log(isEmpty(x1));
console.log(isEmpty(x2));