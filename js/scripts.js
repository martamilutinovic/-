document.addEventListener('DOMContentLoaded', function() {
    const animals = document.querySelectorAll('.animal');

    animals.forEach(animal => {
        const sound = new Audio(`audio/${animal.dataset.sound}`);

        animal.addEventListener('mouseover', () => {
            sound.play();
        });

        animal.addEventListener('click', () => {
            alert(animal.dataset.desc);
        });
    });
});

