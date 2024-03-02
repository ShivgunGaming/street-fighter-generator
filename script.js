const characters = [
    { name: "Ryu", nationality: "Japanese", style: "Karate", strength: "Strong punches", weakness: "Low stamina", image: "Ryu.webp" },
    { name: "Ken", nationality: "American", style: "Karate", strength: "Fast kicks", weakness: "Easily distracted", image: "ken.webp" },
    { name: "Chun Li", nationality: "Chinese", style: "Kung Fu", strength: "High agility", weakness: "Limited range", image: "chun.png" },
    { name: "Guile", nationality: "American", style: "Boxing", strength: "Powerful throws", weakness: "Slow movement", image: "guile.webp" },
    { name: "Blanka", nationality: "Brazilian", style: "Capoeira", strength: "Great endurance", weakness: "Vulnerable to grabs", image: "blanka.png" },
    { name: "Zangief", nationality: "Russian", style: "Wrestling", strength: "Strong punches", weakness: "Easily distracted", image: "zan.webp" },
    { name: "Dhalsim", nationality: "Indian", style: "Yoga", strength: "Sharp reflexes", weakness: "Low stamina", image: "dal.webp" },
    { name: "E Honda", nationality: "Japanese", style: "Sumo Wrestling", strength: "Powerful throws", weakness: "Slow movement", image: "ehonda.png" },
    { name: "Balrog", nationality: "American", style: "Boxing", strength: "Fast punches", weakness: "Vulnerable to grabs", image: "balrog.webp" },
    { name: "Vega", nationality: "Spanish", style: "Ninjutsu", strength: "High agility", weakness: "Limited range", image: "vega.webp" },
    { name: "Sagat", nationality: "Thai", style: "Muay Thai", strength: "Strong punches", weakness: "Easily distracted", image: "sagat.png" },
    { name: "M Bison", nationality: "Unknown", style: "Psycho Power", strength: "Psychic abilities", weakness: "Easily distracted", image: "bison.webp" }
];

const generateButton = document.getElementById('generateButton');
const characterContainer = document.getElementById('characterContainer');
const loading = document.getElementById('loading');

generateButton.addEventListener('click', generateCharacter);

function showLoading() {
    loading.style.display = 'block';
}

function hideLoading() {
    loading.style.display = 'none';
}

function generateCharacter() {
    showLoading();

    setTimeout(() => {
        characterContainer.innerHTML = '';

        const character = characters[Math.floor(Math.random() * characters.length)];

        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        const characterImg = document.createElement('img');
        characterImg.classList.add('character-img');
        characterImg.src = `images/${character.image}`;
        characterImg.alt = character.name;
        characterCard.appendChild(characterImg);

        const characterInfo = document.createElement('div');
        characterInfo.classList.add('character-info');
        characterInfo.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Nationality:</strong> ${character.nationality}</p>
            <p><strong>Fighting Style:</strong> ${character.style}</p>
            <p><strong>Strength:</strong> ${character.strength}</p>
            <p><strong>Weakness:</strong> ${character.weakness}</p>
        `;
        characterCard.appendChild(characterInfo);

        characterContainer.appendChild(characterCard);

        hideLoading();
    }, 1000); // Simulating a delay for loading
}
