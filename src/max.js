var max=function(array){
     maxelement=array[0];
   for(i=1;i<array.length;i++){
    if(array[i]>maxelement){
        maxelement=array[i];
    }
   }
   return maxelement;
};
console.log(max([1,2,3,4]));