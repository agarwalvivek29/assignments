/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    console.log(new Date);
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            //console.log("hey yo yo yo");
            console.log(new Date);
            resolve();
        },milliseconds)
        
    })
}

module.exports = sleep;
