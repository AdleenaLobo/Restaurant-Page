import { homepage0, homepage1, homepage2 } from "./Homepage";
import { arrhomecontentHeading, innerDiv, leftButton, rightButton,arrmenucontent , arrspcontent , innerHeading , innerinnerDiv } from "./bodyHome";


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
                }   
            }
    
            if(index == 2)
            {rightButton.disabled= true;}
            else
            {
                rightButton.disabled= false;
                innerHeading.textContent = "Menu";
                innerinnerDiv.textContent = arrmenucontent[++index];
                innerDiv.setAttribute('id' , arrmenucontent[index]);
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
                }   
            }
    
            if(index == 2)
            {rightButton.disabled= true;}
            else
            {
                rightButton.disabled= false;
                innerHeading.textContent = "Special Features";
                innerinnerDiv.textContent = arrspcontent[++index];
                innerDiv.setAttribute('id' , arrspcontent[index]);
                
            }
        }
}
}

export {rightbun};