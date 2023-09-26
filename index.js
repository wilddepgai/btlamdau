
const trigger =document.getElementById("trigger");
console.log(trigger);
const counter =document.getElementById("counter");
console.log(counter);
let count = 0
trigger.addEventListener(
    "click",
    (Event) => {
        
        console.log("Da click vao nut trigger");
        count = count +1;


        ill.innerHTML = count;

        
        

    }
)




const space  =document.getElementById("trigger");
console.log(space);
const ill =document.getElementById("ill");
console.log(ill);
let count = 0
space.addEventListener(
    "click",
    (Event) => {
        
        console.log("bam space");
        count = count +1;

        
        

    }
)


