const min=(array)=>{
    length=array.length;
    
    return calmin(array,length);
   }
const calmin=(array,length)=>{
   if (length==1){
       return array[0];
   }
   return smaller(array[length-1],calmin(array,length-1));
   }
   const smaller=(x,y)=>{
        if(x<y){
            return x;
        }
        return y;
    }
    
   
   