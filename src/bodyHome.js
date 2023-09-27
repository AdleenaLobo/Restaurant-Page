
const container = document.createElement('div');
const innerDiv = document.createElement('div');
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');

function createElem()
{
    leftButton.textContent = "<";
    rightButton.textContent = ">";
    innerDiv.textContent = "Mary had to make a decision and she knew that whatever decision she made, it would upset someone. It seemed like such a silly reason for people to get upset but she knew the minute that she began to consider doing it that there was no way everyone in her life would be pleased with what she ultimately decided to do. It was simply a question of who she would rather displease most. While this had always been her parents, and especially her mom, in the past that she tried to keep from upsetting, she decided that this time the person she was going to please the most with her decision was herself.";

}

function addClass()
{
    container.classList.add('floatingBlock');
    innerDiv.classList.add('inner');
}
function addBody()
{
    createElem();
    container.appendChild(leftButton);
    container.appendChild(innerDiv);
    container.appendChild(rightButton);
    addClass();
}

export {container, innerDiv , leftButton , rightButton, addBody};