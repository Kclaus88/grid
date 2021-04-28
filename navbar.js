document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelector('.drop-trigger');
    let instances = M.Dropdown.init(elems, {
        belowOrigin: true
    })
});