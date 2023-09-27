import { innerDiv, leftButton, rightButton } from "./bodyHome";


let arrhomecontent=['random' , 'random2' , 'random3'];
let arrmenucontent = ['something' , 'something2' , 'something3'];
let arrspcontent = ['anything' , 'anything2' , 'anything3'];
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
            if(innerDiv.textContent == arrhomecontent[i])
            {
                index=i;
            }   
        }

        if(index == 0)
        {leftButton.disabled= true;}
        else
        {
            leftButton.disabled= false;
            innerDiv.textContent = arrhomecontent[--index];
        }

    }
    else if (innerDiv.getAttribute("name") == "Menu")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.textContent == arrmenucontent[i])
                {
                    index=i;
                }   
            }
    
            if(index == 0)
            {leftButton.disabled= true;}
            else
            {
                leftButton.disabled= false;
                innerDiv.textContent = arrmenucontent[--index];
            }
    
    }}
    else if(innerDiv.getAttribute("name") == "SP")
    {
        let index;
        {
            for (let i = 0; i<3 ; i++ )
            {
                if(innerDiv.textContent == arrspcontent[i])
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
                innerDiv.textContent = arrspcontent[--index];
            }
        }
}
}

export {leftbun , leftButton};