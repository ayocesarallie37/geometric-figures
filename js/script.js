function perimeter(side) {
    return side*4;
}

function area (side) {
    return side*side;
}

function perimeterCalculate() {
    const numberSide = document.getElementById("squareInput");
    const r = parseInt(numberSide.value);

    const p = perimeter(r);

    document.getElementById("perimeter").innerText = "Its perimeter is: " + p + " cm.";
}

function areaCalculate() {
    const numberSide = document.getElementById("squareInput");
    const r = parseInt(numberSide.value);

    const a = area(r);

    document.getElementById("area").innerText = "Its area is: " + a + " cm.";
}

function clearAll() {
    let display = document.querySelector("squareInput");
    display.value='';
}


// Area de un circulo.
function areacircle(radio) {
    return Math.PI * Math.pow(radio,2);
}

function perimetercircle(radio) {
    return Math.PI * radio * 2;
}

function perimeterCalculateCircle() {
    const numberRadio = document.getElementById("circleInput");
    const r = parseInt(numberRadio.value);

    const p = perimetercircle(r);

    document.getElementById("perimeter2").innerText = "Its perimeter is: " + p + " cm.";
}

function areaCalculateCircle() {
    const numberRadio = document.getElementById("circleInput");
    const r = parseInt(numberRadio.value);

    const a = areacircle(r);

    document.getElementById("area2").innerText = "Its area is: " + a + " cm.";
}

// Area del triangulo
function areaTriangule(base, h) {
    return (base * h) / 2;
}

function perimeterTriangule(side1, side2, base) {
    return side1 + side2 + base;
}

function perimeterCalculateTriangule() {
    const side1 = parseInt(document.getElementById("sideInput").value);
    const side2 = parseInt(document.getElementById("saidInput").value);
    const base = parseInt(document.getElementById("base").value);

    const p = perimeterTriangule(side1,side2,base);

    document.getElementById("perimeterResult").innerText = "Its perimeter is: " + p + " cm.";
}

function areaCalculateTriangule() {
    const base = parseInt(document.getElementById("base").value);
    const h = parseInt(document.getElementById("altura").value);

    const p = areaTriangule(base, h);

    document.getElementById("areaResult").innerText = "Its area is: " + p + " cm.";
}








