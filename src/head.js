var head =  function(array){
    if(array.length==0)
    {
        return null;
    }
    return array[0];
    
};
console.log(head([]))
console.log(head([1,2,3]))