import './style.css';
import homeImg from '../assets/home.png';
import menuImg from '../assets/menu.png';
import featuresImg from '../assets/features.png';
import icon from '../assets/icon.svg';


let heading;
let buttonHome, buttonMenu , SpecialFeatures;
let division , subDiv;
let homeimage;
let menuimage;
const featuresimage= new Image();

let Icon = new Image();
function createElements()
{
    Icon.src = icon;
    Icon.setAttribute('height' , '50px');
    Icon.setAttribute('width' , '50px');
    division = document.createElement('div');
    heading = document.createElement('h1');
    heading.textContent = "Carribean Restaurant";

    subDiv = document.createElement('div');
    buttonHome = document.createElement('button');
    homeimage = document.createElement('img');
    homeimage.src=homeImg;
    homeimage.setAttribute('height' , '20px');
    homeimage.setAttribute('width' , '20px');

    buttonMenu = document.createElement('button');
    menuimage=document.createElement('img');
    menuimage.src=menuImg;
    menuimage.setAttribute('height' , '20px');
    menuimage.setAttribute('width' , '20px');

    SpecialFeatures = document.createElement('button');
    featuresimage.src=featuresImg;
    featuresimage.setAttribute('height', '20px');
    featuresimage.setAttribute('width', '20px');


}

 function addclasses()
 {
    division.classList.add('header');
    buttonHome.classList.add('Home');
    buttonMenu.classList.add('Menu');
    SpecialFeatures.classList.add('SF');
    subDiv.classList.add('buttoncontainer');
 }

function addElements()
{
    createElements();
    buttonHome.appendChild(homeimage);
    buttonMenu.appendChild(menuimage);
    SpecialFeatures.appendChild(featuresimage);

    subDiv.appendChild(buttonHome);
    subDiv.appendChild(buttonMenu);
    subDiv.appendChild(SpecialFeatures);

    division.appendChild(Icon);
    division.appendChild(heading);
    division.appendChild(subDiv);
    
    addclasses();
}

export {division ,buttonHome,buttonMenu, SpecialFeatures , addElements};