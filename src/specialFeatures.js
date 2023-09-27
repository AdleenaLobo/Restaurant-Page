import { innerDiv} from "./bodyHome";
import { SpecialFeatures } from "./headingHome";

function event3()
{
    SpecialFeatures.addEventListener('click' , speacialpage);
}

function speacialpage()
{
    innerDiv.setAttribute('name', 'SP');
    innerDiv.textContent="anything";
}
export {event3};