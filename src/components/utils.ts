
function getNoOfLines(element:any){
    const copy = element.cloneNode();
    copy.style.visibility = 'hidden';
    copy.style.position = 'absolute';
    copy.textContent = 'a';
    element.parentNode.appendChild(copy);
    const lineHeight = copy.offsetHeight;
    const linesCount = Math.round(element.offsetHeight / lineHeight);
    element.parentNode.removeChild(copy);

    return linesCount;
}

export {getNoOfLines}