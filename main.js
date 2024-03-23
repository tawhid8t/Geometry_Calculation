// common function
function Calculation(getValue) {
    const allInput = document.getElementById(getValue);
    const allInputText = allInput.value;
    const input = parseFloat(allInputText);
    allInput.value = '';
    return input;
}

// triangle
document.getElementById('calculate-triangle').addEventListener('click' , function(){
    // get the base and height number.
    const base = Calculation('triangle-base');
    const height = Calculation('triangle-height');

    // calculate the area
    const area = 0.5 * base * height;
    
    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "circle";
    li.innerHTML = "Triangle = " + area ; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

})

// rectangle
document.getElementById('calculate-rectangle').addEventListener('click' , function(){
    // get the base and height number.
    const base = Calculation('rectangle-base');
    const height = Calculation('rectangle-height');

    // calculate the area
    const area = base * height;

    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "circle";
    li.innerHTML = "Rectangle = " + area ; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

})

// Parallelogram
document.getElementById('calculate-parallelogram').addEventListener('click' , function(){
    // get the base and height number.
    const base = Calculation('parallelogram-base');
    const height = Calculation('parallelogram-height');

    // calculate the area
    const area = base * height;
    
    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "circle";
    li.innerHTML = "Parallelogram = " + area ; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

})

// Rhombus
document.getElementById('calculate-rhombus').addEventListener('click' , function(){
    // get the base and height number.
    const base = Calculation('rhombus-base');
    const height = Calculation('rhombus-height');

    // calculate the area
    const area = 0.5 * base * height;
    

    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "circle";
    li.innerHTML = "Rhombus = " + area ; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

})

// Pentagon
document.getElementById('calculate-pentagon').addEventListener('click' , function(){
    // get the base and height number.
    const base = Calculation('pentagon-base');
    const height = Calculation('pentagon-height');

    // calculate the area
    const area = 0.5 * base * height;
    
    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "circle";
    li.innerHTML = "Pentagon = " + area ; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

})

// Ellipse
document.getElementById('calculate-ellipse').addEventListener('click' , function(){
    // get the base and height number.
    const base = Calculation('ellipse-base');
    const height = Calculation('ellipse-height');

    // calculate the area
    const area = 3.1416 * base * height;
    

    const calculatedArea = document.getElementById('calculated-area');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.listStyle = "circle";
    li.innerHTML = "Ellipse = " + area ; 
    calculatedArea.appendChild(ul);
    ul.appendChild(li);

})
