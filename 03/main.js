var alto = document.getElementById("alto");
var ancho = document.getElementById("vancho");
var color = document.getElementById("color");
var figura = document.getElementById("figura");
var radius = document.getElementById("radius");
var bordewidth = document.getElementById("bordewidth");
var bordestyle = document.getElementById("bordestyle");
var colorborde = document.getElementById("colorborde");


var hsombra = document.getElementById("hsombra");
var vsombra = document.getElementById("vsombra");
var anchosombra = document.getElementById("anchosombra");
var colorsombra = document.getElementById("colorsombra");


colorsombra.value = "#000000"; // Color negro por defecto para la sombra
figura.style.boxShadow = `0px 0px 0px #000000`; // Sombra inicial


alto.oninput = () => {
    figura.style.height = alto.value + "px";
    document.getElementById("valalto").innerHTML = alto.value;
}


ancho.oninput = () => {
    figura.style.width = ancho.value + "px";
    document.getElementById("valancho").innerHTML = ancho.value;
}


color.oninput = () => {
    figura.style.backgroundColor = color.value;
}


radius.oninput = () => {
    figura.style.borderRadius = radius.value + "%";
    document.getElementById("vradio").innerHTML = radius.value;
}


bordewidth.oninput = () => {
    figura.style.borderWidth = bordewidth.value + "px";
    document.getElementById("vborderwidth").innerHTML = bordewidth.value;
    figura.style.borderStyle = bordestyle.value;
    figura.style.borderColor = colorborde.value;
}


bordestyle.onchange = () => {
    figura.style.borderWidth = bordewidth.value + "px";
    figura.style.borderStyle = bordestyle.value;
    figura.style.borderColor = colorborde.value;
}


colorborde.oninput = () => {
    figura.style.borderWidth = bordewidth.value + "px";
    figura.style.borderStyle = bordestyle.value;
    figura.style.borderColor = colorborde.value;
}


hsombra.oninput = () => {
    figura.style.boxShadow = `${hsombra.value}px ${vsombra.value}px ${anchosombra.value}px ${colorsombra.value}`;
    document.getElementById("vhsombra").innerHTML = hsombra.value;
}


vsombra.oninput = () => {
    figura.style.boxShadow = `${hsombra.value}px ${vsombra.value}px ${anchosombra.value}px ${colorsombra.value}`;
    document.getElementById("vvsombra").innerHTML = vsombra.value;
}


anchosombra.oninput = () => {
    figura.style.boxShadow = `${hsombra.value}px ${vsombra.value}px ${anchosombra.value}px ${colorsombra.value}`;
    document.getElementById("vanchosombra").innerHTML = anchosombra.value;
}


colorsombra.oninput = () => {
    figura.style.boxShadow = `${hsombra.value}px ${vsombra.value}px ${anchosombra.value}px ${colorsombra.value}`;
}