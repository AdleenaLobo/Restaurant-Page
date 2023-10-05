import { homepage0, homepage1, homepage2 } from "./Homepage";
import { menu0, menu1, menu2 } from "./Menupage";
import { innerDiv, leftButton, rightButton , arrmenucontentHeading, innerHeading ,  arrhomecontentHeading, arrspcontentHeading} from "./bodyHome";
import { sf1 , sf2 , sf0 } from "./specialFeatures";

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
                if(innerDiv.getAttribute('id') == arrmenucontentHeading[i])
                {
                    index=i;
                    index --;
                }   
            }
    
            if(index == 0 || index == -1)
            {
            
                innerDiv.setAttribute('id' , arrmenucontentHeading[0]);
                leftButton.disabled= true;
                menu0();
            }

            else
            {
                leftButton.disabled= false;
                innerDiv.setAttribute('id' , arrmenucontentHeading[index]);
                if(index ==1)
                {
                    menu1();
                }
                else if( index == 2)
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
                    index--;
                }   
            }
    
            if(index == 0 || index == -1)
            {
                leftButton.disabled= true;
                innerDiv.setAttribute('id' , 'sp0');
                sf0();
            }
            else
            {
                leftButton.disabled= false;
                innerDiv.setAttribute('id' , arrspcontentHeading[index]);
                if(index == 1)
                {
                    sf1();
                }
                else if (index == 2)
                {
                    sf2();
                }

            }
        }
}
}

export {leftbun , leftButton};