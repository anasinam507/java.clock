function avg (a,b) {
    return (a+b)/2 ;
}
c1=avg (30,20);
c2=avg (42,49);
console.log(c1,c2);


var age= 20  ;
if ( age >8) {
    console.log ( 'you are not a kid' );
}
else {
    console.log ( 'you are kid' );
}

var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr) 
for (i=9; i>=arr.length; i--) {
    if(i==3){
        continue;
    }
    console.log(arr[i])
}

let j=0;
while (j<arr.length) {
    j++;
console.log(arr[j])
}


var arr=[1,2,3,4,5,6]
for  (i=0;i<arr.length;i++){
    if(i==2){
        //break;
        continue;
    }
    console.log(arr[i])
}
let myArr=[  'apple', 'banana' , ' chai' , 2 , 4,5 , 9]
console.log(myArr.length)
myArr.push( 555)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.shift()
console.log(myArr)
myArr.unshift("anas")
console.log(myArr)


let elem= document.getElementById('click')
console.log(elem);


