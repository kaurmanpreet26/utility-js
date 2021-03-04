const reduce = (array,func,value) => {
    if(array.length==0)
    {
        return value;
    }
    var res;
    if(intial==undefined)
    {
       res='';
    }
    else{
        res=value;
    }
     
     for (const val of array) {
        res=(func.call(array,res,val));
     }
     return res;
}