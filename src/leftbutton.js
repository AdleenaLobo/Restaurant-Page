import { homepage0, homepage1, homepage2 } from "./Homepage";
import { innerDiv, leftButton, rightButton , arrmenucontent, arrspcontent, innerHeading , innerinnerDiv, arrhomecontentHeading } from "./bodyHome";

function leftbun()
{
    leftButton.addEventListener('click' , disp);
}

function disp()
{
    rightButton.disabled=false;
    
    if(innerDiv.getAttribute("name") == "Home")
    {   let index;
        for (let i =0; i<3 ; i++ )
        {
            if(innerDiv.getAttribute('id') == arrhomecontentHeading[i])
            {
                index=i;
                index--;
            }   
        }

        if(index == 0 || index == -1)
        {
            
            innerDiv.setAttribute('id' , arrhomecontentHeading[0]);
            leftButton.disabled= true;
            homepage0();
        }
        else{
            leftButton.disabled= false;
            innerHeading.textContent = "About us";
            innerDiv.setAttribute('id' , arrhomecontentHeading[index]);
        if (index == 1)
        {
            homepage1();
        }
        else if(index ==2)
        {
            homepage2();
        }
    }

    }
    else if (innerDiv.getAttribute("name") == "Menu")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.getAttribute('id') == arrmenucontent[i])
                {
                    index=i;
                    index --;
                }   
            }
    
            if(index == 0 || index == -1)
            {
                leftButton.disabled= true;
                homepage0();
            }

            else
            {
                leftButton.disabled= false;
                innerHeading.textContent = "Menu";
                innerinnerDiv.textContent = arrmenucontent[--index];
                innerDiv.setAttribute('id' , arrmenucontent[index]);
            }
    
    }}
    else if(innerDiv.getAttribute("name") == "SP")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.getAttribute('id') == arrspcontent[i])
                {
                    index=i;
                }   
            }
    
            if(index == 0)
            {
                leftButton.disabled= true;
            }
            else
            {
                leftButton.disabled= false;
                innerHeading.textContent = "Special Features";
                innerinnerDiv.textContent = arrspcontent[--index];
                innerDiv.setAttribute('id' , arrspcontent[index]);
            }
        }
}
}

export {leftbun , leftButton};