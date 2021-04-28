/* document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.fixed-action-btn-1');
    let instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.fixed-action-btn-2');
    let instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
    });
}); */
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let instances = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true
    });
});