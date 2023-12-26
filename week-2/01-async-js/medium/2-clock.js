//didn't import function from counter, cuz its bad cose and has many log statements unnecessary

function counter(secs){
    for(let i=0;i<secs;i++){
        setTimeout(function(){
            let now=new Date;
            let H=now.setHours();
            let M=now.getMinutes();
            let S=now.getSeconds();
            if(H<13){
                console.log(`${H}:${M}:${S} AM`);
            }
            else{
                console.log(`${H}:${M}:${S} PM`)
            }
            
        },1000*(i+1))
    }
}

counter(10);