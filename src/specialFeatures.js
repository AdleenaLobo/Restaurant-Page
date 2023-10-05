import { innerDiv, innerinnerDiv , innerHeading , leftButton , rightButton, arrspcontent} from "./bodyHome";
import { SpecialFeatures } from "./headingHome";

function event2()
{
    SpecialFeatures.addEventListener('click' , initial);
}

function initial()
{
    if(document.querySelector('#side3') != undefined)
    {
       innerinnerDiv.removeChild(side3);
    }
    if(document.querySelector('#inside1') != undefined)
    {
       side1.removeChild(inside1);
       side1.removeChild(inside2);
    }
    leftButton.disabled = false;
    rightButton.disabled = false;
    innerDiv.setAttribute('name' , 'SP');
    innerDiv.setAttribute('id' , 'sp0');
    innerinnerDiv.removeChild(side2);
    sf0();
    
}

function sf0()
{
    innerHeading.textContent = "Motive";
side1.textContent = arrspcontent[0];

}

function sf1()
{
    innerHeading.textContent = "Address";
    side1.innerHTML = arrspcontent[1];
}

function sf2()
{
    
    innerHeading.textContent = "Contact";
    side1.innerHTML = arrspcontent[2];
}


export {event2 , sf1 , sf2 , sf0};