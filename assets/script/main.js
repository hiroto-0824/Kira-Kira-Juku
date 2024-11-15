//main.js  

// DOMContentLoadedイベントを使用してページが読み込まれた後に実行する
document.addEventListener("DOMContentLoaded", function () {

    // ハンバーガーメニューのイベントハンドラー
    const hamburger = document.querySelector(".hamburger");
    const topMenu = document.querySelector(".top__menu");

    if (hamburger && topMenu) {
        hamburger.addEventListener("click", function(event) {
            event.stopPropagation(); // イベントの伝播を停止
            topMenu.classList.toggle("active");
        });
    } else {
        console.error("Hamburger or topMenu element not found");
    }

    // ナビゲーションリンクをクリックした後にメニューを閉じる
    const navLinks = document.querySelectorAll(".list-content");
    if (!navLinks) {
        console.error("navLinks element not found");
    }else{
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                topMenu.classList.remove("active");
                console.log('navLinks clicked');
            });
        });
    }
    


});

document.querySelectorAll('.section03__tab').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Tab clicked');
        const tabNumber = button.getAttribute('data-target');
        showTab(tabNumber);
    });
});

function showTab(tabNumber) {
    // 全てのタブコンテンツを非表示にする
    const contents = document.querySelectorAll('.section03__content');
    contents.forEach(content =>
        content.style.display = 'none'
    );

    const tab_contents = document.querySelectorAll(`.section03__tab`);
    tab_contents.forEach(tab_content => {
        tab_content.style.opacity = '0.5';
        tab_content.style.backgroundColor = '#dcdcdc'; // 背景色を#dcdcdcに変更
    }
    );

    const tab = document.querySelector(`.section03__tab--${tabNumber}`);

    if (tab) {
        tab.style.opacity = '1';
        tab.style.backgroundColor = '#F0F8FF';
    } else {
        console.error(`Tab content with id 'section03__tab--${tabNumber}' not found`);
    }

    const tabContent = document.querySelector(`.section03__content${tabNumber}`)

    if (tabContent) {
        tabContent.style.display = 'grid';
    } else {
        console.error(`Tab content with id 'section03__content${tabNumber}' not found`);
    }
}

window.addEventListener("resize", function() {
    const targetElement01 = document.querySelector(".list-content");
    
    if (window.innerWidth < 767) {
        targetElement01.classList.remove("classname");
    } else {
        targetElement01.classList.add("classname"); // 必要に応じて追加処理
    }
});
