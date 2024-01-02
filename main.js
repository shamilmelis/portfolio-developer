const date = new Date();
const postDay = date.getDate();
const postYear = date.getFullYear();
const postHour = date.getHours();
const postMinute = date.getMinutes();

const monthsArray = [
    'Январь', 
    'Февраль', 
    'Март', 
    'Апрель', 
    'Май', 
    'Июнь', 
    'Июль', 
    'Август', 
    'Сентябрь', 
    'Октябрь', 
    'Ноябрь', 
    'Декабрь'
];

const monthsArrayFilter = [
    'Января', 
    'Февраля', 
    'Марта', 
    'Апреля', 
    'Мая', 
    'Июня', 
    'Июля', 
    'Августа', 
    'Сентября', 
    'Октября', 
    'Ноября', 
    'Декабря'
];


const backPOST = [
    {
        id: 1,
        postTag: 1, 
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil.', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil.', 
        img: 'https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg',
    }
]


for (let i = 0; i < monthsArray.length; i++) {
    let postData = document.getElementsByClassName('post__date');
    for (let i = 0; i < postData.length; i++) {
        if (postDay > 10) {
            postData[i].innerHTML = `${postDay} ${monthsArrayFilter[5]} ${postYear}`;
        } else if (postDay < 11) {
            postData[i].innerHTML = `${postDay} ${monthsArray[5]} ${postYear}`;
        }
    }
}

const postTime = document.getElementsByClassName('post__time');
for (let i = 0; i < postTime.length; i++) {
    postTime[i].innerHTML = `${postHour}:${postMinute}`
}

const menuClick = document.getElementById('open__menu');
menuClick.addEventListener('click', function () {
    const menu = document.getElementById('container');
    menu.classList.add('containerActive');
    menu.classList.remove('container')
    menu.style.display = "flex";
})


const menuClose = document.getElementById('close__menu__button');
menuClose.addEventListener('click', function () {
    const menu = document.getElementById('container');
    menu.classList.remove('containerActive');
    menu.classList.add('container')
})


const tabActive = document.getElementsByClassName('tabs__containers');
for (let i = 0; i < tabActive.length; i++) {
    tabActive[i].style.display = "none";
    tabActive[1].style.display = "flex";
}


function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName('tabs__containers');
    let tabButton = document.getElementsByClassName('tab__buttons');
    let i;
    const menu = document.getElementById('container');
    menu.classList.remove('containerActive');
    menu.classList.add('container')
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" tab__buttonsActive", "")
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " tab__buttonsActive";
}




const openTags = document.getElementById('all_post__button');
openTags.addEventListener('click', function () {
    let option = document.getElementById('container-5__blocks__tags__option');
    let active = document.getElementById('all_post__button')
    if (option.className === 'container-5__blocks__tags__option') {
        option.classList.remove('container-5__blocks__tags__option')
        option.classList.add('container-5__blocks__tags__optionActive')
        active.classList.remove('all_post__button')
        active.classList.add('all_post__buttonActive')
    } else {
        option.classList.add('container-5__blocks__tags__option');
        option.classList.remove('container-5__blocks__tags__optionActive');
        active.classList.add('all_post__button')
        active.classList.remove('all_post__buttonActive')
    }
})


const activeTag = document.getElementsByClassName('content_tag');
for (let i = 0; i < activeTag.length; i++) {
    activeTag[0].style.display = "flex";
    activeTag[i].style.display = "none";
}

function openTag(tagName) {
    let tagContent = document.getElementsByClassName('content_tag');
    let i;
    let option = document.getElementById('container-5__blocks__tags__option');
    let active = document.getElementById('all_post__button')
    for (i = 0; i < tagContent.length; i++) {
        tagContent[i].style.display = "none";
    }
    option.classList.add('container-5__blocks__tags__option');
    option.classList.remove('container-5__blocks__tags__optionActive');
    active.classList.add('all_post__button')
    active.classList.remove('all_post__buttonActive')
    document.getElementById(tagName).style.display = "flex";
}


