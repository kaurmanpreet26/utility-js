var tail=function(array){
if(array.length==0){
    return [];
}
 return array.slice(1);
};
console.log(tail([1,2,3]));