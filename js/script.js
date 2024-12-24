const characterNames = ['Jean-Grey', 'Ciclope', 'Tempestade', 'Magneto', 'Wolverine', 'Noturno', 'Vampira', 'Lince-Negra'];
const characterDescriptions = [
    'Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual manifesta poderes cósmicos, a telepatia e telecinese.',
    'Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los.',
    'Tem o poder de controlar as forças da natureza. Muito poderosa ela pode produzir raios, chuvas, gelos, ventos, neblina, entre outros efeitos.',
    'Ele tem o poder de magnetocinese, ou seja, controlar objetos de metal e criar campos magnéticos.',
    'Poderes- Garras Metálicas. Fator de Cura Regenerativo, Super Agilidade, e um incrível mau cheiro.',
    'Ele é um mutante que nasceu com cauda, orelhas pontudas e com o poder de se teletransportar.',
    'Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no caso dos mutantes os poderes e a memória, mas só temporariamente.',
    'Ela tem o poder de atravessar matéria sólida, campos de energia, rajadas ópticas, continuando intacta, e também tem o poder de andar no ar.'
];


function trocar(element) {
    const characterImage = document.querySelector(".selected-character-img");
    const characterName = document.querySelector(".select-character-name")
    const characteDesc = document.querySelector(".select-character-info");

    const index = GETElement(element);

    characterImage.src = `img/card-${characterNames[index].toLowerCase().replace(' ', '-')}.png`;
    characterName.innerHTML = characterNames[index]
    characteDesc.textContent = characterDescriptions[index];

    const div = selectedCharater(element);
    removerSelectedCharacter();
    div.classList.add("personagem-selecionado");
}

function GETElement(element) {
    let el = element.closest(".character-card");
    let index = Array.prototype.indexOf.call(el.parentNode.children, el);
    return index;
}

function selectedCharater(element) {
    return element.closest(".character-card");
}

function removerSelectedCharacter() {
    const personagemSelecionado = document.getElementsByClassName("personagem-selecionado");

    while (personagemSelecionado.length) {
        personagemSelecionado[0].classList.remove("personagem-selecionado");
    }
}

document.querySelectorAll(".character-card").forEach((card) => {
    card.addEventListener("mouseover", () => trocar(card));
});