function loaderA() {
    document.getElementById('loader').style.zIndex = '-5' 
    document.getElementById('overf').style.overflow = 'initial'
    document.getElementById('background-main').style.zIndex="4"
}
function removeElement() {
    // Removes an element from the document
    var element = document.getElementById('loader');
    element.parentNode.removeChild(element);
}
