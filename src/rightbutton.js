import { innerDiv, leftButton, rightButton } from "./bodyHome";
import { leftbun } from "./leftbutton";


let arrhomecontent=['random' , 'random2' , 'random3'];
let arrmenucontent = ['something' , 'something2' , 'something3'];
let arrspcontent = ['anything' , 'anything2' , 'anything3'];
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
            if(innerDiv.textContent == arrhomecontent[i])
            {
                index=i;
            }   
        }

        if(index == 2)
        {rightButton.disabled= true;}
        else
        {
            rightButton.disabled= false;
            innerDiv.textContent = arrhomecontent[++index];
        }

    }
    else if (innerDiv.getAttribute("name") == "Menu")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.value == arrmenucontent[i])
                {
                    index=i;
                }   
            }
    
            if(index == 2)
            {rightButton.disabled= true;}
            else
            {
                rightButton.disabled= false;
                innerDiv.textContent = arrmenucontent[++index];
            }
    
    }}
    else if(innerDiv.getAttribute("name") == "SP")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.value == arrspcontent[i])
                {
                    index=i;
                }   
            }
    
            if(index == 2)
            {rightButton.disabled= true;}
            else
            {
                rightButton.disabled= false;
                innerDiv.textContent = arrspcontent[++index];
            }
        }
}
}

export {rightbun};