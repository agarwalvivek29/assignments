let string = 'hello     world    my    name   is       raman'

function filterstring(str){
    let res='';
    let n=str.length;
    for(let i=0;i<n;i++){
        if(str[i]==' '){
            if(res.length>0){
                if(res[res.length-1]!=' '){
                    res+=str[i];
                }
            }
        }
        else{
            res+=str[i];
        }
    }
    return res
}
console.log(filterstring(string))