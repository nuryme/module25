/*
console.log('hello from js');
console.log(document.getElementsByTagName('h1'));
const liCollection = document.getElementsByTagName('li')
console.log(liCollection);
for(const li of liCollection) {
    console.log(li);
    console.log(li.innerText)
}
console.log(document.getElementById('fruits').innerText = 'changed by DOM');
const places = document.getElementsByClassName('places');
for(const place of places) {
    console.log(place);
    console.log(place.innerText);
}
console.log(document.getElementsByClassName('place'));
const someLi = document.querySelectorAll('.fruits-section li');
console.log(someLi);
for(const li of someLi) {
    console.log(li.innerText)
}       */
/*
console.log(document.querySelector('.fruits-section li'));
console.log(document.querySelector('.fruits-section li').style.color = 'blue');
console.log(document.querySelector('.fruits-section li').style.backgroundColor = '#e9edc9');
console.log(document.querySelector('.fruits-section li').style.textAlign = 'center');
const title = document.getElementById('fruits');
console.log(title.getAttribute('id'))
console.log(title.getAttribute('class'))
console.log(title.classList)
console.log(title.classList.remove('class-3'))
console.log(title.classList)
console.log(title.classList.add('added'))
console.log(title.classList);
console.log(title.setAttribute('title', 'tooltip by javascript'))
console.log(document.getElementsByClassName('fruits-section')[0].innerHTML)
console.log(document.getElementsByClassName('fruits-section')[0].innerHTML = '<h2> ABC wow DOM is changing </h2>');     */

/*
const sections = document.querySelectorAll('section');
console.log(sections);
for(const section of sections) {
    section.style.border = '2px solid blue';
    section.style.marginTop = '5px'
    section.style.borderRadius = '5px'
    section.style.paddingLeft = '10px'
    section.style.backgroundColor = '#caf0f8';
}
const fruitsSection = document.getElementById('fruits-container');
fruitsSection.style.backgroundColor = '#90e0ef';
fruitsSection.classList.add('center');
console.log(fruitsSection.childNodes[1]);
console.log(fruitsSection.childNodes[3].childNodes[5]);
const li = document.createElement('li');
li.innerHTML = 'created with js';
const placesUL = document.querySelector('#places-container ul');
placesUL.appendChild(li);       */

//------------   adding something
//1. where to add
const placesList = document.getElementById('places-list');
//2. what to be added
const li = document.createElement('li');
li.innerHTML = 'added with js(2)';
//3.add the child
placesList.appendChild(li);
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food list (with js)';
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'kacchi';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'biryani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'faluda';
ul.appendChild(li3);
section.appendChild(h1);
section.appendChild(ul)
mainContainer.appendChild(section);
//otherway (set inner HTML directly)
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress Section (with js)</h1>
    <ul>
        <li>T-Shirt</li>
        <li>Saree</li>
        <li>Pant</li>
    </ul>
`
mainContainer.appendChild(sectionDress)