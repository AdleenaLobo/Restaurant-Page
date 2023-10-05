import { innerDiv, innerinnerDiv , innerHeading , leftButton , rightButton} from "./bodyHome";
import { SpecialFeatures } from "./headingHome";

function event3()
{
    SpecialFeatures.addEventListener('click' , speacialpage);
}

function speacialpage()
{
    leftButton.disabled = false;
    rightButton.disabled = false;
    innerDiv.setAttribute('name', 'SP');
    innerDiv.setAttribute('id', 'sp0');
    innerHeading.textContent = "Special Features"
    innerinnerDiv.textContent="sp0";
}
export {event3};