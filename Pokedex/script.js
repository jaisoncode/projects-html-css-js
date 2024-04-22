const searchPokeNameOrId = document.querySelector("#search-name-or-id")
const firstPoke = document.querySelector("#first")
const lastPoke = document.querySelector("#last")


searchPokeNameOrId.addEventListener('change', () => {
    const valueSearchInput = searchPokeNameOrId.value.replace(/\s/g, '');
    let searchPokeAPI = valueSearchInput;

    while (searchPokeAPI.startsWith('0')) {
        searchPokeAPI = searchPokeAPI.slice(1)
    }
    createPokeCardInSearch(searchPokeAPI.toLowerCase());
    searchPokeNameOrId.value = '';
})

firstPoke.addEventListener("change", () => {
    let inicio = firstPoke.value;
    let fim = lastPoke.value;

    const pokeSearch = verValorVazio(inicio, fim)
    createPokeCard(parseInt(pokeSearch.inicio, 10), parseInt(pokeSearch.fim, 10))
})

lastPoke.addEventListener("change", () => {
    let inicio = firstPoke.value;
    let fim = lastPoke.value;

    const pokeSearch = verValorVazio(inicio, fim)
    createPokeCard(parseInt(pokeSearch.inicio, 10), parseInt(pokeSearch.fim, 10))

})

function verValorVazio(inputFisrt, inputLast) {
    let inicio;
    let fim;
    if (inputFisrt === '' || inputFisrt === undefined) {
        inicio = 1;
    } else {
        inicio = inputFisrt;
    }
    if (inputLast === '' || inputLast === undefined) {
        fim = 1;
    } else {
        fim = inputLast;
    }
    return { inicio, fim };
}

async function findPokemon(pokemon) {
    const APIRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const APIData = await APIRes.json();
    return APIData;
}

async function createPokeCardInSearch(pokemon) {
    let pokeCard = '';
    const APIData = await findPokemon(pokemon);
    const typePoke = await tipos(APIData);
    pokeCard += `<div class="poke-card">
                     <div class="desc-card">
                        <span class="id-poke"> N° ${APIData.id}</span>
                        <span class="name-poke">${APIData.name}</span>
                    </div>
                        <div class="profile-poke">
                            <img src="${APIData['sprites']['front_default']}"
                                    alt="${APIData.name}">
                        </div>`;
    pokeCard += typePoke;
    pokeCard += `</div>
                    </div>`;

    document.querySelector(".content-card").innerHTML = pokeCard;
}

createPokeCard(9, 10);

async function createPokeCard(inicio, fim) {
    document.querySelector("#modal").style.display = 'block';
    let index = inicio;
    let pokeCount = fim;
    let pokeCard = '';
    let requestsCount = 0;

    if (index < pokeCount || index === pokeCount) {
        for (index; index <= pokeCount; index++) {
            pokeCard += await addPokeCard(index);
            requestsCount++;
            const percentage = (requestsCount / (pokeCount - inicio + 1)) * 100;
            document.querySelector(".loader-bar").style.width = `${percentage}%`;
            document.querySelector(".loader-text").textContent = `${percentage.toFixed(0)}%`;
            
        }
    } else {
        for (index; index >= pokeCount; index--) {
            pokeCard += await addPokeCard(index);
        }
    }
    document.querySelector("#modal").style.display = 'none';
    document.querySelector(".content-card").innerHTML = pokeCard;
}

async function addPokeCard(index) {
    let pokeCard = '';
    const APIData = await findPokemon(index);
    const typePoke = await tipos(APIData);
    pokeCard += `<div class="poke-card">
                 <div class="desc-card">
                    <span class="id-poke"> N° ${APIData.id}</span>
                    <span class="name-poke">${APIData.name}</span>
                </div>
                    <div class="profile-poke">
                        <img src="${APIData['sprites']['front_default']}"
                                alt="${APIData.name}">
                    </div>`;
    pokeCard += typePoke;
    pokeCard += `</div>
                </div>`;
    return pokeCard;
}

async function tipos(APIData) {
    let typosHtml = '<div class="type-poke">';
    APIData.types.forEach(type => {
        typosHtml += `<span class="name-type ${type.type.name}">${type.type.name.toUpperCase()}</span>`;
    });
    typosHtml += "</div>";
    return typosHtml;
}


function startLoader() {
    let seconds = 100;

    for (let index = 0; index <= seconds; index++) {
        setTimeout(() => {
            console.log("segundos:", index);
        }, index * 1000);
    }
}