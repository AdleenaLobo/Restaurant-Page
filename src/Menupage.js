import { innerDiv } from "./bodyHome";
import { buttonMenu } from "./headingHome";

function event2()
{
    buttonMenu.addEventListener('click' , Menupage);
}

function Menupage()
{   innerDiv.setAttribute('name', 'Menu');
    innerDiv.textContent="something";
}

export {event2};