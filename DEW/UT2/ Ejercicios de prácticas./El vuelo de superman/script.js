class Superman {
    constructor(element) {
        this.element = element;
    }

    volar() {
        let position = 0;
        const interval = setInterval(() => {
            if (position >= window.innerHeight - 100) {
                clearInterval(interval);
            } else {
                position += 10;
                this.element.style.bottom = position + 'px';
            }
        }, 50);
    }
}

const supermanImg = document.getElementById('superman');
const superman = new Superman(supermanImg);

document.getElementById('volarBtn').onclick = () => {
    superman.volar();
};
