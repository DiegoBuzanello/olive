
function loaderA() {
    document.getElementById('loader').style.zIndex = '-5' 
    document.getElementById('overf').style.overflow = 'initial'
    document.getElementById('background-main').style.zIndex="4"
    console.log('loader')
    document.getElementById("loader").remove();
    console.log('tirou')
}
function removeElement() {
    // Removes an element from the document
    console.log('remove')
    var element = document.getElementById(loader);
    element.parentNode.removeChild(element);
    console.log('remove')
}
