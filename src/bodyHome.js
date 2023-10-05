import rest1 from '../assets/rest1.jpg';
const container = document.createElement('div');
const innerinnerDiv = document.createElement('div');
const innerDiv = document.createElement('div');
const innerHeading = document.createElement('h2');
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');
const side1 = document.createElement('div');
const side2 = document.createElement('div');
const side3 = document.createElement('div');
const image = new Image();


let arrhomecontentHeading=['home0' , 'home1' , 'home2'];
let arrhomecontent= [];
let arrmenucontentHeading= ['menu0' , 'menu1' , 'menu2'];
let arrmenucontent = [];
let arrspcontentHeading = ['sp0' , 'sp1' , 'sp2'];
let arrspcontent= [];

function decarrayhome()
{
    arrhomecontent[0]="Organizer, Craig Stephen, opened the first ‘Organization Name’ Restaurant in Los Alamitos, California, on September 27, 1977. Today, there are 37 areas all through Arizona, California, Illinois, Louisiana, Nevada, Oregon, Tennessee, and Washington.....";
    arrhomecontent[1]="‘Organization Name’ Restaurants are well known with a substantial gathering of people, including families, kids, seniors, and business experts. Our benevolent condition is perfect for praising unique events, facilitating a business lunch, or assembling for a flavorful dinner with loved ones.....";
    arrhomecontent[2]=" Open day by day for lunch and dinner,’ Company Name’ offers a choice of naturally arranged things utilizing just the best fixings accessible. Top picks incorporate Certified Angus Beef®, crisp fish, rotisserie chicken, and infant back pork ribs. New prepared pot pie, strength plates of mixed greens, wood-let go pizzas, pasta, sandwiches, burgers, and more."
}
function decarraymenu()
{
    arrmenucontent[0]="";
    arrmenucontent[1]="";
    arrmenucontent[2]="";
}

function decarraysp()
{
    arrspcontent[0]="Caribean Restaurant has been here for ages and have put smile on million faces , We strive on our customers enjoying the time of their life and for that we will make sure to grind and never back down because our end goal is to see ull smile:)";
    arrspcontent[1]="<b>Street:</b>Maakeskenraitti 67<br><b>City:</b>Pertunmaa<br><b>State/province/area:</b>Southern Savonia<br><b>Zip code:</b>19430<br><b>Country calling code:</b>+358<br><b>Country:</b> Finland";
    arrspcontent[2]="<b>Phone number: </b>042 718 6437<br><b>Instagram: </b><a href='https://www.google.com/'>@caribeanfoods</a><br><b>Twitter: </b><a href = 'https://www.google.com/'>@caribeanfoods</a><br><b>Linkdin: </b><a href = 'https://www.google.com/'>@caribeanfoods</a><br><b>Facebook: </b><a href='https://www.google.com/'>@caribeanfoods</a>";
}


function createElem()
{
    decarrayhome();
    decarraysp();
    leftButton.textContent = "<";
    rightButton.textContent = ">";
    innerHeading.textContent = "About us";
    image.src = rest1;
    image.setAttribute('height' , '200px');
    image.setAttribute('width' , '300px');
    side2.textContent = arrhomecontent[0];
}

function addClass()
{
    container.classList.add('floatingBlock');
    innerDiv.setAttribute('id', 'home0');
    innerDiv.setAttribute('name' , 'Home');
    innerinnerDiv.setAttribute('id' , 'indiv');
    side1.setAttribute('id', 'side1');
    side2.setAttribute('id' , 'side2');
    side3.setAttribute('id' , 'side3');
   }
function addBody()
{
    createElem();
    side1.appendChild(image);
    innerinnerDiv.appendChild(side1);
    innerinnerDiv.appendChild(side2);
    innerDiv.appendChild(innerHeading);
    innerDiv.appendChild(innerinnerDiv);
    container.appendChild(leftButton);
    container.appendChild(innerDiv);
    container.appendChild(rightButton);
    addClass();
}

export {container, innerDiv , leftButton , rightButton,arrhomecontent ,arrmenucontent, arrspcontent, innerinnerDiv , innerHeading , side1, side2 , image, arrhomecontentHeading, arrspcontentHeading ,side3 ,arrmenucontentHeading, addBody};