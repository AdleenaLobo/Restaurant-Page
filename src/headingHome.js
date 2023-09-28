import './style.css';
import homeImg from '../assets/home.png';
import menuImg from '../assets/menu.png';
import featuresImg from '../assets/features.png';

let heading;
let buttonHome, buttonMenu , SpecialFeatures;
let division , subDiv;
let homeimage;
let menuimage;
const featuresimage= new Image();

function createElements()
{
    division = document.createElement('div');
    heading = document.createElement('h1');
    heading.textContent = "Carribean RoofTop Restaurant";

    subDiv = document.createElement('div');
    buttonHome = document.createElement('button');
    buttonHome.setAttribute('width', '50px');
    homeimage = document.createElement('img');
    homeimage.src=homeImg;
    homeimage.setAttribute('height' , '20px');
    homeimage.setAttribute('width' , '20px');

    buttonMenu = document.createElement('button');
    buttonMenu.setAttribute('width', '50px');
    menuimage=document.createElement('img');
    menuimage.src=menuImg;
    menuimage.setAttribute('height' , '20px');
    menuimage.setAttribute('width' , '20px');

    SpecialFeatures = document.createElement('button');
    SpecialFeatures.setAttribute('width', '50px');
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

    division.appendChild(heading);
    division.appendChild(subDiv);
    
    addclasses();
}

export {division ,buttonHome,buttonMenu, SpecialFeatures , addElements};