const categories = document.querySelector('#categories');
const item = categories.querySelectorAll('.item');
console.log('Number of categories:', item.length);


item.forEach(function (params) {
    console.log('Category:', params.firstElementChild.textContent);
    const innerIlEl = params.querySelectorAll('li');
    console.log('Elements:',innerIlEl.length);
})