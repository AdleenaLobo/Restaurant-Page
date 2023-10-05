import { innerDiv , innerinnerDiv , innerHeading, side1 , side3 , side2} from "./bodyHome";
import { buttonMenu } from "./headingHome";
import { leftButton , rightButton } from "./bodyHome";
import Starters1 from "../assets/Starters1.jpg";
import Starters2 from "../assets/Starters2.jpg";
import Starters3 from "../assets/Starters3.jpg";

import Main1 from "../assets/main1.jpg";
import Main2 from "../assets/main2.jpg";
import Main3 from "../assets/main3.jpg";

import Desert1 from "../assets/desert1.jpg";
import Desert2 from "../assets/desert2.jpg";
import Desert3 from "../assets/desert3.jpg";

const image1 = new Image();
const image2 = new Image();
const image3 = new Image();


let side1Inside1 = document.createElement('div');
let side1Inside2 = document.createElement('div');
let side2Inside1 = document.createElement('div');
let side2Inside2 = document.createElement('div');
let side3Inside1 = document.createElement('div');
let side3Inside2 = document.createElement('div');

function SetAttribute()
{

    image1.setAttribute('height','150px');
    image1.setAttribute('width','150px');
    
    image2.setAttribute('height','150px');
    image2.setAttribute('width','150px');
    
    image3.setAttribute('height','150px');
    image3.setAttribute('width','150px');
}
function event1()
{
    buttonMenu.addEventListener('click' , initial);
}

function initial()
{
    SetAttribute();
    side1.textContent = "";
    side2.textContent = "";
    if(document.querySelector('#side2')  == undefined || document.querySelector('#inside1') == undefined )
    {
     
        innerinnerDiv.appendChild(side2);

    }

    if(document.querySelector('#side3') == undefined)
    {
       innerinnerDiv.appendChild(side3);
    }
    leftButton.disabled = false;
    rightButton.disabled = false;
    innerDiv.setAttribute('name', 'Menu');
    innerDiv.setAttribute('id', 'menu0');
    menu0();
}

function menu0()
{
    innerHeading.textContent="Starters";
    //side1
    side1Inside1.innerHTML = "<b>#1</b><br>";
    image1.src = Starters1;
    side1Inside1.appendChild(image1);
    side1Inside2.innerHTML = "<b> Guanio</b><br>Made out of potatoes and filled with cheese."
    side1.appendChild(side1Inside1);
    side1.appendChild(side1Inside2);

    //side2
    side2Inside1.innerHTML = "<b>#2</b><br>";
    image2.src = Starters2;
    side2Inside1.appendChild(image2);
    side2Inside2.innerHTML = "<b>Onion rings</b><br>Made up of thinly sliced onions and fried with breadcrumps";
    side2.appendChild(side2Inside1);
    side2.appendChild(side2Inside2);

    //side3
    side3Inside1.innerHTML = "<b>#3</b><br>";
    image3.src = Starters3;
    side3Inside1.appendChild(image3);
    side3Inside2.innerHTML = "<b>Hotop</b><br>Made up of potatoes woth filling inside";
    side3.appendChild(side3Inside1);
    side3.appendChild(side3Inside2);


}

function menu1()
{
    innerHeading.textContent="Main course";
     //side1
     side1Inside1.innerHTML = "<b>#1</b><br>";
     image1.src = Main1;
     side1Inside1.appendChild(image1);
     side1Inside2.innerHTML = "<b> Pav bhaji</b><br>Made up of all the vegetables mashed together."
     side1.appendChild(side1Inside1);
     side1.appendChild(side1Inside2);
 
     //side2
     side2Inside1.innerHTML = "<b>#2</b><br>";
     image2.src = Main2;
     side2Inside1.appendChild(image2);
     side2Inside2.innerHTML = "<b>Channa masala</b><br> Made up of indian white channa with rich indian taste";
     side2.appendChild(side2Inside1);
     side2.appendChild(side2Inside2);
 
     //side3
     side3Inside1.innerHTML = "<b>#3</b><br>";
     image3.src = Main3;
     side3Inside1.appendChild(image3);
     side3Inside2.innerHTML = "<b>Paneer masala</b><br>Made up of paneer with rich creamy flavour";
     side3.appendChild(side3Inside1);
     side3.appendChild(side3Inside2);
 
}

function menu2()
{
    innerHeading.textContent="Deserts";

     //side1
     side1Inside1.innerHTML = "<b>#1</b><br>";
     image1.src = Desert1;
     side1Inside1.appendChild(image1);
     side1Inside2.innerHTML = "<b>Macroos</b><br>Made up of maida, eggs, etc with sweet cream in between."
     side1.appendChild(side1Inside1);
     side1.appendChild(side1Inside2);
 
     //side2
     side2Inside1.innerHTML = "<b>#2</b><br>";
     image2.src = Desert2;
     side2Inside1.appendChild(image2);
     side2Inside2.innerHTML = "<b>Lemon tart</b><br> Made up of biscuit with lemon falvouring tart on top";
     side2.appendChild(side2Inside1);
     side2.appendChild(side2Inside2);
 
     //side3
     side3Inside1.innerHTML = "<b>#3</b><br>";
     image3.src = Desert3;
     side3Inside1.appendChild(image3);
     side3Inside2.innerHTML = "<b>Donut</b><br>Your typical donut";
     side3.appendChild(side3Inside1);
     side3.appendChild(side3Inside2);
 
}

export {event1 , menu0 , menu1 , menu2};