import { innerDiv , innerinnerDiv , innerHeading } from "./bodyHome";
import { buttonMenu } from "./headingHome";
import { leftButton , rightButton } from "./bodyHome";

function event2()
{
    buttonMenu.addEventListener('click' , Menupage);
}

function Menupage()
{   
    leftButton.disabled = false;
    rightButton.disabled = false;
    innerDiv.setAttribute('name', 'Menu');
    innerDiv.setAttribute('id', 'menu0');
    innerHeading.textContent = "Menu"
    innerinnerDiv.textContent="menu0";
}

export {event2};