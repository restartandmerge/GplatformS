
        const menuButtonlanguage = document.getElementById('menuButtonlanguage');
        const submenulanguage = document.getElementById('submenulanguage');

        menuButtonlanguage.addEventListener('click', (event) => {
            event.stopPropagation();
            if (submenulanguage.classList.contains('show1')) {
                submenulanguage.classList.add('hide1');
                submenulanguage.addEventListener('animationend', () => {
                    submenulanguage.classList.remove('show1', 'hide1');
                }, { once: true });
            } else {
                submenulanguage.classList.add('show1');
            }
			
        });

        document.addEventListener('click', () => {
            if (submenulanguage.classList.contains('show1')) {
                submenulanguage.classList.add('hide1');
                submenulanguage.addEventListener('animationend', () => {
                    submenulanguage.classList.remove('show1', 'hide1');
                }, { once: true });
            } else {
                //submenulanguage.classList.add('hide1');
            }
			
        });


