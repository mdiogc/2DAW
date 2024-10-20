document.querySelectorAll('#misiones li').forEach(mision => {
    mision.onclick = function() {
        this.classList.toggle('completada');
    };
});
