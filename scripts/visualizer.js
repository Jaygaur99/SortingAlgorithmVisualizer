var speed=1000;


function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
        break;
        case 2: speed=10;
        break;
        case 3: speed=100;
        break;
        case 4: speed=1000;
        break;
        case 5: speed=10000;
        break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<button_algos.length;i++)
        {
            button_algos[i].classList=[];
            button_algos[i].classList.add("butt_unselected");
            
            button_algos[i].disabled=false;
            inp_size.disabled=false;
            inp_gen.disabled=false;
            inp_speed.disabled=false;
        }
    },c_delay+=delay_time);
}

inp_speed.addEventListener("input", vis_speed);