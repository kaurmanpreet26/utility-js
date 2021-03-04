const map1=(array,func)=>{
    if(array.length==0){
        return [];
    }
    if(func=='cube'){
       return array.map(cube);
    }
    if(func=='identity'){
       return array.map(identity);
    }

}

const cube=function(x){
    
    return x*x*x;
}
const identity=(x)=>{
    return x*1;
}

