import { buttonHome } from "./headingHome";
import {innerDiv} from "./bodyHome";
let hcheck;
function event()
{
    hcheck='null';
    buttonHome.addEventListener('click' , homepage);
}

 function homepage()
 { innerDiv.setAttribute('name', 'Home');
    innerDiv.textContent="random";
 }

 export {event};