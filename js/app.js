fetch('./data.json') // le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
// il n'empeche pas, cependant la lecture du fichier
//ici, le fetch demande des information concernant le fichier 'data.json"
	.then(response => { //ici sera decrit sa reponse
		return response.json();
	}) //en attendant cette reponse, on lui demande d'initialiser la response2
	.then(response2 => {
		sessionStorage.setItem('data', JSON.stringify(response2));
		init(response2);
	});

//********************************* CLASS ******************************************/

// /**
//  * @param domElement
//  */
// class CreateDOMElement {
//    constructor(domElement, className, id, src) {
//       this.domElement = domElement;
//       this.className = className;

//       const elem = document.createElement(this.domElement);
//       elem.classList.add(this.className);
//       return elem;
//    }
// }

// class CreateHeader {
//    constructor() {
//    const header = new domElement('header');
//    const linkHome = new domElement('a');
//    const h1 = new domElement('h1');
//    const logo = new domElement('img');
//    const nav = new domElement('nav');
//    }
// }


// const image = new CreateDOMElement('img', 'logo');
// const div = new CreateDOMElement('div', 'bground');

//**************************************************************************************/

//DOM ELEMENTS
const body = document.body;

//___________//create
//HEADER_____
const hidden = document.createElement('div');
const hiddenLink = document.createElement('a');
const header = document.createElement('header');
const linkHome = document.createElement('a');
const logo = document.createElement('img');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const liPortrait = document.createElement('li');
const btnPortrait = document.createElement('button');
const liArt = document.createElement('li');
const btnArt = document.createElement('button');
const liFashion = document.createElement('li');
const btnFashion = document.createElement('button');
const liArchitecture = document.createElement('li');
const btnArchitecture = document.createElement('button');
const liTravel = document.createElement('li');
const btnTravel = document.createElement('button');
const liSport = document.createElement('li');
const btnSport = document.createElement('button');
const liAnimals = document.createElement('li');
const btnAnimals = document.createElement('button');
const liEvents = document.createElement('li');
const btnEvents = document.createElement('button');
const mainHeader = document.createElement('div');
const h1 = document.createElement('h1');
//___________//settings
//HEADER_____
hidden.classList.add('hidden');
hiddenLink.href = '#main';
hiddenLink.innerHTML = 'Passer au contenu';
header.classList.add('banner');
linkHome.href = './index.html';
linkHome.classList.add('logo');
logo.src = 'FishEye_Photos/logo.png';
logo.alt = 'FishEye Home Page';
nav.ariaLabel = 'photographer categories';
nav.classList.add('topNav');
ul.classList.add('tagDesign');
btnPortrait.classList.add('tagDesign__tag');
btnPortrait.innerHTML = '#Portrait';
btnPortrait.id = 'portrait';
btnArt.classList.add('tagDesign__tag');
btnArt.innerHTML = '#Art';
btnArt.id = 'art';
btnFashion.classList.add('tagDesign__tag');
btnFashion.innerHTML = '#Fashion';
btnFashion.id = 'fashion';
btnArchitecture.classList.add('tagDesign__tag');
btnArchitecture.innerHTML = '#Architecture';
btnArchitecture.id = 'architecture';
btnTravel.classList.add('tagDesign__tag');
btnTravel.innerHTML = '#Travel';
btnTravel.id = 'travel';
btnSport.classList.add('tagDesign__tag');
btnSport.innerHTML = '#Sport';
btnSport.id = 'sport';
btnAnimals.classList.add('tagDesign__tag');
btnAnimals.innerHTML = '#Animals';
btnAnimals.id = 'animals';
btnEvents.classList.add('tagDesign__tag');
btnEvents.innerHTML = '#Events';
btnEvents.id = 'events';
mainHeader.classList.add('mainHeader');
h1.innerHTML = 'Nos photographes';
//___________//indent
//HEADER_____
body.append(hidden);
hidden.append(hiddenLink);
body.append(header);
header.append(linkHome);
header.append(mainHeader);
linkHome.append(logo);
header.append(nav);
nav.append(ul);
ul.append(liPortrait);
liPortrait.append(btnPortrait);
ul.append(liArt);
liArt.append(btnArt);
ul.append(liFashion);
liFashion.append(btnFashion);
ul.append(liArchitecture);
liArchitecture.append(btnArchitecture);
ul.append(liTravel);
liTravel.append(btnTravel);
ul.append(liSport);
liSport.append(btnSport);
ul.append(liAnimals);
liAnimals.append(btnAnimals);
ul.append(liEvents);
liEvents.append(btnEvents);
mainHeader.append(h1);

const main = document.createElement('main');
const mainContent = document.createElement('section');

main.id = '#main';
mainContent.classList.add('mainContent');

body.append(main);
main.append(mainContent);
main.onmouseover = function () {
	hidden.style.display = 'block';
};

const init = (data) => {
	//boucle pour chaque photographes
	data.photographers.forEach(photographer => {
		//___________//create
		//CARDS______
		const card = document.createElement('a');
		const image = document.createElement('img');
		const contact = document.createElement('button');
		const blockFlex = document.createElement('div');
		const nameTitle = document.createElement('h2');
		const para = document.createElement('p');
		const place = document.createElement('span');
		const gimmick = document.createElement('span');
		const price = document.createElement('span');
		const mainFlux = document.createElement('section');
		//__________//create
		//TAGS______
		const ul = document.createElement('ul');
		//**************************************************************************************/
		//___________//settings
		//CARDS______
		card.classList.add('cards');
		card.href = 'photographer.html?id=' + photographer.id;
		card.id = photographer.id;
		image.src = 'FishEye_Photos/Photographers ID Photos/' + photographer.portrait;
		image.alt = 'photo portrait de ' + photographer.name;
		contact.classList.add('contact-btn');
		contact.innerHTML = 'Contactez-moi';
		blockFlex.classList.add('blockFlex');
		nameTitle.innerHTML = photographer.name;
		para.classList.add('descript');
		place.classList.add('local');
		place.innerHTML = photographer.city + ', ' + photographer.country;
		gimmick.classList.add('depiction');
		gimmick.innerHTML = photographer.tagline;
		price.classList.add('price');
		price.innerHTML = photographer.price + '€/jour';
		mainFlux.classList.add('mainFlux');
		//__________//settings
		//TAGS______
		ul.classList.add('tagDesign');
		/*********inDOM*********/
		mainContent.append(card);
		//**************************************************************************************/
		//___________//indent
		//CARDS______
		card.append(image);
		card.append(contact);
		card.append(blockFlex);
		blockFlex.append(nameTitle);
		blockFlex.append(para);
		para.append(place);
		para.append(gimmick);
		para.append(price);
		card.append(mainFlux);

		//__________//indent
		//TAGS______
		for (let i = 0; i < photographer.tags.length; i++) {
			const li = document.createElement('li');
			const tag = document.createElement('span');

			tag.classList.add('tagDesign__tag2');
			tag.innerHTML = '#' + photographer.tags[i];

			li.append(tag);
			ul.append(li);
		}
		blockFlex.append(ul);
	});

	//Quand je click sur un tag, si la card avec l'id: (photoId) ne contient pas le tag, alors tu passes cette card en Display = 'none';

	const tags = document.querySelectorAll('.tagDesign__tag'); // tags sur lesquels clicker
	const getCards = document.querySelectorAll('.cards'); // cards des photographes

	tags.forEach(tag => { // pour chaque tag
		tag.addEventListener('click', () => { // Quand je click sur un tag...

			const tagId = tag.id; //id du boutton selectionné
			console.log(tags);
			const photoArray = data.photographers;

			const photographerAsked = [];

			for (let i = 0; i < photoArray.length; i++) { // parcourir chacune des cards pour verifier les tags
				const photoTag = photoArray[i].tags; // tableau des tags de chaque photographe

				for (let j = 0; j < photoTag.length; j++) { // parcourir chacun des tableau des tags de chaque photographe
					const eachTag = photoTag[j]; // chaque tags de chaque photographe

					if (tagId == eachTag) { // si (id du btn sélectionné) correspond au (tag de chaque photographe)
						photographerAsked.push(photoArray[i]);
					}
				}
			}
			// afficher les photographes demandé
			const cardToDisplay = [];

			getCards.forEach(card => {
				card.style.display = 'none';
			});

			for (let i = 0; i < getCards.length; i++) {
				const cardId = getCards[i].id;
				for (let j = 0; j < photographerAsked.length; j++) {
					const photographerId = photographerAsked[j].id;
					if (photographerId == cardId) {
						cardToDisplay.push(getCards[i]);
					}
				}
			}
			for (let i = 0; i < cardToDisplay.length; i++) {
				document.getElementById(cardToDisplay[i].id).style.display = 'block';
			}
		});
	});
};