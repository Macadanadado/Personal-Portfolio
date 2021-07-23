let box1 = document.getElementById('project1');
let innerBox1 = document.getElementById('description-box1');

let box2 = document.getElementById('project2');
let innerBox2 = document.getElementById('description-box2');

let box3 = document.getElementById('project3');
let innerBox3 = document.getElementById('description-box3');

let box4 = document.getElementById('project4');
let innerBox4 = document.getElementById('description-box4');

/*
const changeVisual = function(item) { 
    let innerBox = document.getElementById(item)
    innerBox.style.visibility  = 'visible';
};

const changeVisualBack = function(item) {
    let innerBox = document.getElementById(item)
    innerBox.style.visibility = 'hidden';
};

box1.addEventListener('mouseover', changeVisual('description-box1'));
box1.addEventListener('mouseout', changeVisualBack('description-box1'));

box2.addEventListener('mouseover', changeVisual('description-box2'));
box2.addEventListener('mouseout', changeVisualBack('description-box2'));

box3.addEventListener('mouseover', changeVisual('description-box3'));
box3.addEventListener('mouseout', changeVisualBack('description-box3'));

box4.addEventListener('mouseover', changeVisual('description-box4'));
box4.addEventListener('mouseout', changeVisualBack('description-box4'));
*/

box1.addEventListener('mouseover', ()=>{
    innerBox1.style.visibility  = 'visible';
});
box1.addEventListener('mouseout', ()=>{
    innerBox1.style.visibility = 'hidden';
});

box2.addEventListener('mouseover', ()=>{
    innerBox2.style.visibility  = 'visible';
});
box2.addEventListener('mouseout', ()=>{
    innerBox2.style.visibility = 'hidden';
});

box3.addEventListener('mouseover', ()=>{
    innerBox3.style.visibility  = 'visible';
});
box3.addEventListener('mouseout', ()=>{
    innerBox3.style.visibility = 'hidden';
});

box4.addEventListener('mouseover', ()=>{
    innerBox4.style.visibility  = 'visible';
});
box4.addEventListener('mouseout', ()=>{
    innerBox4.style.visibility = 'hidden';
});