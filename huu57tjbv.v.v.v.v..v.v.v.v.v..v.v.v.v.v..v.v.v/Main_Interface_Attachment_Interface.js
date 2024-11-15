
        const showButton = document.getElementById('show-hidden');
        const hideButton = document.getElementById('hidden-hidden');
        const hiddenScreen = document.getElementById('hidden-screen');

        showButton.addEventListener('click', function() {
            hiddenScreen.classList.add('active');
            hiddenScreen.style.boxShadow = "inset 0 4px 8px rgba(173, 173, 188, 0.2)";
			
        });

        hideButton.addEventListener('click', function() {
            hiddenScreen.classList.remove('active');
            hiddenScreen.classList.add('no-shadow');

            setTimeout(() => {
                hiddenScreen.classList.remove('no-shadow');
                hiddenScreen.style.boxShadow = "none"; // 确保阴影被移除
            }, 900); // 与缩放持续时间一致
        });
		
		

		
		

