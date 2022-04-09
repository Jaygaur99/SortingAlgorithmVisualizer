// Find all the divs and add the event listener

let inp_size = document.getElementById('a_size');
let array_size = inp_size.value;
let inp_gen = document.getElementById('a_generate');
let inp_speed = document.getElementById('a_speed');

// console.log(array_size, inp_speed.value, inp_speed.value);

let button_algos = document.querySelectorAll('.algos button');

let div_sizes = [];
let divs = [];
let margin_size=0.1;
let main_container = document.getElementById('array-cont');


// Setup the page functions
const generate_array = () => {

    main_container.innerHTML = "";

    for(let i=0; i<array_size; i++){
        div_sizes[i] = Math.floor(Math.random() * 0.5*(inp_size.max - inp_size.min))
        divs[i] = document.createElement('div');
        main_container.appendChild(divs[i]);
        divs[i].style=" margin: 0% 0.1%; background-color: blue; width: "+ (100 / array_size - (2 * margin_size)) + "%; height: " + (div_sizes[i]) + "%;";
    }
}
 
const update_array_size = () => {
    array_size = inp_size.value;
    div_sizes = [];
    divs = [];
    generate_array();
}


function disable_buttons () {
    for(let i=0; i < button_algos.length; i++)
    {
        button_algos[i].classList = [];
        button_algos[i].classList.add('butt_locked');
        button_algos[i].disabled=true;
        inp_size.disabled=this;
        inp_gen.disabled=this;
        inp_speed.disabled=this;
    }
};

function runAlgo () {
    disable_buttons();
    // console.log(this.classList)
    this.classList.add('butt_selected');
    switch(this.innerHTML) {
        case "Bubble" : bubbleSort(); break;
        case "Selection" : selectionSort(); break;
        case "Insertion" : insertionSort(); break;
        case "Merge" : mergeSort(); break;
        case "Quick" : quickSort(); break;
        // case "Heap" : heapSort(); break;
    }
};

// initialize
window.onload = update_array_size();
inp_gen.addEventListener('click', generate_array);
inp_size.addEventListener('input', update_array_size);

for(let i =0; i<button_algos.length; i++)
{
    button_algos[i].addEventListener("click", runAlgo);
}

