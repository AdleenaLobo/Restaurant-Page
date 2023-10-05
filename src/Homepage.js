import rest2 from "../assets/rest2.jpg";
import rest3 from "../assets/rest3.jpg";
import rest1 from "../assets/rest1.jpg";
import { buttonHome } from "./headingHome";
import {innerDiv , innerinnerDiv , innerHeading, image , arrhomecontent, side2 , side1} from "./bodyHome";
import { leftButton, rightButton } from "./bodyHome";

function event()
{
    buttonHome.addEventListener('click' , initial);
}
function initial()
{
   leftButton.disabled = false;
   rightButton.disabled = false;
   innerDiv.setAttribute('name', 'Home');
   innerDiv.setAttribute('id', 'home0');
   homepage0();

}
 function homepage0()
 {  
   side1.textContent = "";
   side2.textContent = "";
   image.src = rest1;
   side2.textContent = arrhomecontent[0];
   side1.appendChild(image);

 }

 function homepage1()
 {
    side1.removeChild(image);
    image.src = rest2;
    side1.textContent = arrhomecontent[1];
    side2.textContent ="";
    side2.appendChild(image);

 }

 function homepage2()
 {

   side2.removeChild(image);
   image.src = rest3;
   side1.textContent = "";
   side1.appendChild(image);
   side2.textContent=arrhomecontent[2] ;
 }

 export {event , homepage0 , homepage1 , homepage2};