import { homepage0, homepage1, homepage2 } from "./Homepage";
import { menu1, menu2 } from "./Menupage";
import {arrmenucontentHeading, arrhomecontentHeading, arrspcontentHeading, innerDiv, leftButton, rightButton,arrmenucontent , arrspcontent , innerHeading , innerinnerDiv } from "./bodyHome";
import {sf0 , sf1 , sf2} from "./specialFeatures.js";

function rightbun()
{
    rightButton.addEventListener('click' , disp);
}

function disp()
{
    leftButton.disabled=false;
    if(innerDiv.getAttribute("name") == "Home")
    {   let index;
        for (let i =0; i<3 ; i++ )
        {
            if(innerDiv.getAttribute('id') == arrhomecontentHeading[i])
            {
                index=i;
                index++;
            }   
        }

        if(index == 2)
        {
            innerDiv.setAttribute('id' , 'home2');
            rightButton.disabled= true;
            homepage2();
        }

        else
        {
            rightButton.disabled= false;
            innerHeading.textContent = "About us";
            innerDiv.setAttribute('id' , arrhomecontentHeading[index]);

            if(index == 1)
            {
                homepage1();
            }
            else if(index == 0)
            {
                homepage0();
            }
        }

    }
    else if (innerDiv.getAttribute("name") == "Menu")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.getAttribute('id') == arrmenucontentHeading[i])
                {
                    index=i;
                    index++;
                }   
            }
    
            if(index == 2)
            {
                innerDiv.setAttribute('id' , 'menu2');
                rightButton.disabled= true;
                menu2();
            }
            else
            {
                rightButton.disabled= false;
                innerDiv.setAttribute('id' , arrmenucontentHeading[index]);

                if(index == 1)
                {
                    menu1();
                }
                else if (index == 2)
                {
                    menu2();
                }
            }
    
    }}
    else if(innerDiv.getAttribute("name") == "SP")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.getAttribute('id') == arrspcontentHeading[i])
                {
                    index=i;
                    index++;
                }   
            }
    
            if(index == 2)
            {
                rightButton.disabled= true;
                innerDiv.setAttribute('id' , arrspcontentHeading[2]);
                sf2();
            }
            else
            {
                rightButton.disabled= false;
                innerDiv.setAttribute('id' , arrspcontentHeading[index]);
                
                if(index == 0)
                {
                    sf0();
                }
                else if(index == 1)
                {
                    sf1();
                }
            }
        }
}
}

export {rightbun};