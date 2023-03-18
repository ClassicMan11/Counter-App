let currentNum = document.getElementById('currentNum');
let savedNum = document.getElementById('entries');
let removeThis = document.getElementById('removeThis');
let num = 0;
 
function addOne() {
    num += 1;
    currentNum.textContent = num;
    if (num < 0) {
        currentNum.textContent = 0;
        num += 1;
        currentNum.textContent = num;
    } else {
        currentNum.textContent = num;
    }
}
function removeOne() {
    num = num - 1;
    currentNum.textContent = num;
    if (num < 0) {
        currentNum.textContent = 0;
        num += 1;
        currentNum.textContent = num;
    } else {
        currentNum.textContent = num;
    }
}
function saveCurrent() {
    let savestr = num + '-'
    savedNum.textContent += savestr;
    num = num * 0;
    currentNum.textContent = num;
}
function deleteThis() {
    removeThis.style.display = 'none';
}

// To be able to copy the selected text

// const span = document.getElementById("entries");

// span.onclick = function() {
//   document.execCommand("copy");
// }

// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     console.log(event.clipboardData.getData("text"))
//   }
// });