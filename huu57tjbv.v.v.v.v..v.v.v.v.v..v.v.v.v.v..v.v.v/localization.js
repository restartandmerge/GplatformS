const selected = document.getElementById('selected');
const options = document.querySelectorAll('.options div');
const languageOptions = document.getElementById('language-options');


    const translations = {
        zh: {
            localization1S: "G 平台 S",
            localization2S: "游戏软件涵盖多种平台、功能和用途",
			showhidden1S: "\u00A0\u00A0\u00A0\u00A0\u00A0下载\u00A0\u00A0\u00A0\u00A0\u00A0"
        },
        en: {
            localization1S: "G platform S",
            localization2S: "Game software covers multiple platforms, functions, and uses",
			showhidden1S: "\u00A0download\u00A0"
        },
		ru: {
            localization1S: "G Платформа S",
            localization2S: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Игровое программное обеспечение\n охватывает \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0множество платформ,функций и применений",
			showhidden1S: "\u00A0Скачать\u00A0"
        },
		de: {
            localization1S: "G Plattform S",
            localization2S: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Spielsoftware deckt mehrere Plattformen, Funktionen und \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\Verwendungen ab",
			showhidden1S: "\u00A0Download\u00A0"
        },
		jp: {
            localization1S: "G プラットフォーム S",
            localization2S: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\ゲームソフトウェアは、さまざまなプラットフォーム、\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0機能、用途をカバーしています",
			showhidden1S: "ダウンロード"
        },
        es: {
            localization1S: "G platform S",
            localization2S: "Game software covers multiple platforms, functions, and uses",
			showhidden1S: "download"
        }
};


function loadLanguage() {
    const lang = localStorage.getItem('preferredLanguage') || 'zh'; 
    setLanguage(lang);
}


function setLanguage(lang) {
    if (translations[lang]) {
        selected.textContent = lang === 'zh' ? '简体中文' : lang === 'en' ? 'English' : lang === 'ru' ? 'Русский' : lang === 'de' ? 'Deutsch' : lang === 'jp' ? '日本語' :'Español'; 
        document.getElementById('localization1').textContent = translations[lang].localization1S;
        document.getElementById('localization1logo1').textContent = translations[lang].localization1S;
        document.getElementById('localization2').textContent = translations[lang].localization2S;
		document.getElementById('show-hidden1').textContent = translations[lang].showhidden1S;
        localStorage.setItem('preferredLanguage', lang); 
		TM.style.opacity = 1;
		if(lang==="jp")
		  {
              switchLanguage_1();
		  }
		  else
		  {
		      
		  }
    }
}

options.forEach(option => {
    option.addEventListener('click', function () {
        const lang = this.getAttribute('data-value');
        setLanguage(lang);
        //languageOptions.classList.remove('show');
    });
});


selected.addEventListener('click', function () {
    //languageOptions.classList.toggle('show');
});


document.addEventListener('click', function (event) {
    if (!selected.contains(event.target) && !languageOptions.contains(event.target)) {
        //languageOptions.classList.remove('show');
    }
});





window.onload = function() {
    loadLanguage();
    languageOptions.classList.add('show'); 
};
