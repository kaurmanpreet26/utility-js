const max= (array) =>{
 length=array.length;
 
 return calmax(array,length);;
}
const calmax=(array,length) =>{
if (length==1){
    return array[0];
}
return greater(array[length-1],calmax(array,length-1));
}
 const greater=(x,y)=>{
     if(x>y){
         return x;
     }
     return y;
 }

