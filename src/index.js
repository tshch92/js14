'use strict';

const btnsNum = 5;

const tableWidth = 3;
const tableHeight = 3;
const maxTableValue = 100;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//creating a container with colored squares
const $btnsCargo = document.createElement('div');
$btnsCargo.className = 'btn-cargo';

for (let i = 1; i <= btnsNum; i++) {
    const $btn = document.createElement('button');
    $btn.className = 'btn-0 btn';
    $btn.textContent = i;
    $btnsCargo.append($btn);
}

$btnsCargo.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        switch (true) {
        case e.target.classList.contains('btn-0'):
            e.target.classList.remove('btn-0');
            e.target.classList.add('btn-1');
            break;

        case e.target.classList.contains('btn-1'):
            e.target.classList.remove('btn-1');
            e.target.classList.add('btn-2');
            break;

        case e.target.classList.contains('btn-2'):
            e.target.classList.remove('btn-2');
            e.target.classList.add('btn-3');
            break;

        case e.target.classList.contains('btn-3'):
            e.target.classList.remove('btn-3');
            e.target.classList.add('btn-1');
            break;
        }

        const $tmp = e.target;

        e.currentTarget.append($tmp);
    }
});

//creating a table

const $myBody = document.querySelector('body');

const $tblOutput = document.createElement('div');
$tblOutput.className = 'output';

const $tbl = document.createElement('table');

const $tblBody = document.createElement('tbody');

for (let i = 0; i < tableHeight; i++) {
    const $tblRow = document.createElement('tr');

    for (let j = 0; j < tableWidth; j++) {
        const $tblCell = document.createElement('td');
        $tblCell.textContent = getRandomInt(maxTableValue);
        //рандомно красим ячейки по HSL варьируя Saturation
        $tblCell.style = `background-color: hsl(200, ${$tblCell.textContent}%, 50%)`;
        $tblRow.append($tblCell);
    }

    $tblBody.append($tblRow);
}

$tbl.append($tblBody);

$tbl.addEventListener('click', e => {
    if (e.target.tagName === 'TD') {
        //console.log(e.target);
        $tblOutput.textContent = e.target.textContent;
    }
});

//toggle class

const $togglePlayground = document.createElement('div');
$togglePlayground.textContent = 'togglePlayground';
$togglePlayground.className = 'box shadow border';
$togglePlayground.style = 'margin-top: 100px; padding: 16px; box-sizing: border-box;';

function toggleClass(element, cls) {
    let newClass = element.className;

    if (newClass.includes(cls)) {
        newClass = newClass.replace(cls, '');
        element.className = newClass;
        return element.className;
    }

    newClass = newClass.concat(' ', cls);
    element.className = newClass;
    return element.className;
}

$myBody.append($btnsCargo);
$myBody.append($tbl);
$myBody.append($tblOutput);
$myBody.append($togglePlayground);

toggleClass($togglePlayground, 'box');
//toggleClass($togglePlayground, 'radius');
