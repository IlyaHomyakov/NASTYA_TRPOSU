header = document.getElementById('header')


window.onwheel = e => {
    if(e.deltaY >= 0 && window.top.scrollY !== 0) header.style.top = `-${header.clientHeight}px`;
    else header.style.top = '0'
}