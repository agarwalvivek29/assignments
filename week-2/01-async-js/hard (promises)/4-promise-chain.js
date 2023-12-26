/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log(`Delay1 : ${t}`);
            resolve();
        },t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log(`Delay2 : ${t}`);
            resolve();
        },t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log(`Delay3 : ${t}`);
            resolve();
        },t*1000)
    })
}

function calculateTime(t1, t2, t3) {
    return new Promise((resolve,reject)=>{
        let x=new Date();
        let start=x.getTime();
        wait1(t1)
            .then(()=>wait2(t2))
            .then(()=>wait3(t3))
            .then(()=>{
                let y=new Date();
                let end=y.getTime();   
                resolve(end-start);             
            })        
    });
}

module.exports = calculateTime;
