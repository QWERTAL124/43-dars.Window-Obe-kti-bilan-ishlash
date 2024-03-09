' use strict '

const box = document.querySelector('.box'),
btn = document.querySelector('button')


// Foydalanuvchiga box tagining ko'rinadigan gorizontal kenglik clientWidth metodi

// const width = box.clientWidth;
// console.log(width);

// // Foydalanuvchiga box tagining ko'rinadigan vertikal uzunligi clientHeight metodi

// const height = box.clientHeight;
// console.log(height);

// Tagning haqiqiy gorizontal kengligini ko'rsatuvchi offsetWidth

// const width = box.offsetWidth;
// console.log(width);

// Tagning haqiqiy vertikal uzunligini ko'rsatuvchi offsetHeight

// const height = box.offsetHeight
// console.log(height);

// Tagning haqiqiy vertikal uzunligini aniqlovchi scrollHeight metodi
// const height = box.scrollHeight
// console.log(height);

/// Hodisa orqali vertikal uzunlikni aniqlash.Faqat pastki tarafga

btn.addEventListener('click',()=>{
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

// Dinamik still berish

// document.documentElement.scrollTop = 0

// Avtomatik kompyuter tomonidan berilgan computed styllarni olish
const style = window.getComputedStyle(box);
console.log(style);

// Ma'lum bir selectorni computedStyledan olib ko'rish

console.log(style.display);

// Umumiy sayt ko'rinihinng kengligini olish
console.log(document.documentElement.clientWidth);