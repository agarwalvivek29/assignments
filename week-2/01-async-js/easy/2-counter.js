let i=0
let counter=setInterval(()=>{
    i+=1
    console.log(`time: ${i}`);
},1000)

function stopCounter(secs){
    setTimeout(()=>{
        clearInterval(counter);
        console.log('timer stops');
    },secs*1000)
}

stopCounter(10);
