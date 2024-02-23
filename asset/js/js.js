
// hidden unhidden navbar mobile
document.getElementById('tgl-nav').addEventListener('click', function () {
    var dropdown = document.getElementById('list');
    dropdown.classList.toggle('hiddenlis');
});

// scrollsmote
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}
document.querySelectorAll('a').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    smoothScroll(targetId);
    });
});