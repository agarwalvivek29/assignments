function counter(secs){
    console.log("Timer Starts");
    for(let i=0;i<secs;i++){
        setTimeout(()=>{
            console.log(`time: ${i + 1}`);
        },1000*(i+1));
    }
}

counter(5);