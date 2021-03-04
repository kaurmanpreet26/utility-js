const filter = (array,func) => {
    if(array.length==0)
        return array;
     const result = [];
     for (const val of array) {
       if(func(val))
            result.push(val);
     }
     return result;
}