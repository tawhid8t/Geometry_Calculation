document.getElementById('calculate').addEventListener('click' , function(){
    // get the base number.
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText)

    // get the height number.
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat (triangleHeightText);

    // calculate the math
    const area = 0.5 * base * height;

    // set the total area in an another field
    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "decimal";
    li.innerText = "total number is " + area; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

    // remove the current value of base and height
    triangleBase.value = '';
    triangleHeight.value = '';

})