const textArea=document.querySelector("textarea");
const btn=document.getElementById("BTN");
const display = document.getElementById("display");

    btn.addEventListener("click", () => {
const words = textArea.value.trim().split(/\s+/); //splits strings into single words
let index = 0; //start of array

const interval = setInterval(() => {
    if (index >= words.length) {
        clearInterval(interval); //clears the interval
        return;
    }
    const highlightedText = words.map((word,i) => {
        return i === index
        ? `<span class="highlighted">${word}</span>`
        : word;
    }).join(" ");
    display.innerHTML = highlightedText; //display the highlighted text 
    index++;
    },100);
        });
 //maybe change the amount of highlighted words too 3 or line or whatever 
 // tim ferris said like every 3 lines from left and right or somfin maybe
//also maybe add a button to stop the interval or a page button or something