function loaderA() {
    document.getElementById('loader').style.zIndex = '-5' 
    document.getElementById('overf').style.overflow = 'initial'
    document.getElementById('background-main').style.zIndex="4"
}
function removeElement(overf) {
    // Removes an element from the document
    var element = document.getElementById('overf');
    element.parentNode.removeChild(element);
}
