document.body.clientHeight;
document.body.clientWidth;

let numboxes = Math.floor(window.innerWidth / 22);
let numlines = Math.floor(window.innerHeight / 22) - 2;

const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
   container.textContent = '';
   numboxes = Number(prompt("How many squares per side ?"));
   numlines = numboxes;
   drawboxes();
});

function drawboxes() {
    for(j = 0; numlines > j; j++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(i = 0; numboxes > i; i++) {
            let box = document.createElement('div');
            box.setAttribute('class', 'box')
            box.addEventListener('mouseover', () => {
                box.style.cssText = 'background-color: black';
            });
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

drawboxes();