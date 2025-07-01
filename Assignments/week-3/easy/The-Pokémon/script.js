async function fetchPokemons() {
  const number = document.getElementById("numberInput").value;
  const selectedType = document
    .getElementById("typeSelect")
    .value.toLowerCase();
  const container = document.getElementById("cardContainer");

  container.innerHTML = "";

  if (number <= 0 || isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }

  let count = 0;
  let id = 1;

  while (count < number) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      const types = data.types.map((t) => t.type.name);

      // Check type match or allow if "All types"
      if (selectedType === "" || types.includes(selectedType)) {
        createCard(data);
        count++;
      }

      id++;
      if (id > 1025) break; // PokeApi limit safety
    } catch (error) {
      console.log(`Error fetching Pokemon: ${error}`);
      id++;
    }
  }
}

function createCard(pokemon) {
  const container = document.getElementById("cardContainer");
  const card = document.createElement("div");
  card.className = `bg-white rounded-xl shadow-md p-4 flex flex-col items-center space-y-3`;

  card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" 
        alt="${pokemon.name}"
        class="w-24 h-24"
        <h2 class="text-xl font-semibold capitalize">${pokemon.name}</h2>
        <p class="text-gray-600">Type: ${pokemon.types
          .map((t) => t.type.name)
          .join(", ")}</p>
    `;

  container.appendChild(card);
}
