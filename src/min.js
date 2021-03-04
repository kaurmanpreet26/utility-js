var min=function(array){
    minelement=array[0];
  for(i=1;i<array.length;i++){
   if(array[i]<minelement){
       minelement=array[i];
   }
  }
  return minelement;
};
console.log(min([1,2,3,4]));