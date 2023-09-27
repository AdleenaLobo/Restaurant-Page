import './style.css';

let heading;
let buttonHome, buttonMenu , SpecialFeatures;
let division , subDiv;
function createElements()
{
    division = document.createElement('div');
    heading = document.createElement('h1');
    heading.textContent = "Carribean RoofTop Restaurant";

    subDiv = document.createElement('div');
    buttonHome = document.createElement('button');
    buttonHome.textContent = "Home";

    buttonMenu = document.createElement('button');
    buttonMenu.textContent = "Menu";

    SpecialFeatures = document.createElement('button');
    SpecialFeatures.textContent = "Special features";
}

 function addclasses()
 {
    division.classList.add('header');
    buttonHome.classList.add('Home');
    buttonMenu.classList.add('Menu');
    SpecialFeatures.classList.add('SF');
 }

function addElements()
{
    
    createElements();
    subDiv.appendChild(buttonHome);
    subDiv.appendChild(buttonMenu);
    subDiv.appendChild(SpecialFeatures);

    division.appendChild(heading);
    division.appendChild(subDiv);
    
    addclasses();
}

export {division ,buttonHome,buttonMenu, SpecialFeatures , addElements};