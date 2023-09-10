// let counter = document.querySelector(".counter");
// let count=1;
// setInterval(() => {
//    if(count<100){
//     count ++;
//     counter.innerText=count;
//    }

    
// }, 1000);

let counters=document.querySelectorAll(".counter");
let time=30000;
counters.forEach(counter =>{
    let upDateCounter=()=>  { 
        let target=+counter.getAttribute('data-target');
        let count=+counter.innerText;

        let increment=target/time;
        if(count<target){
            counter.innerText=Math.ceil(count+increment);
            setTimeout(upDateCounter,1);
        }
        else{
            counter.innerText=target;
        }

    } ;
    upDateCounter();

})
