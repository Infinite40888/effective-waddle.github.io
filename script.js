const input = document.getElementById("input");
const totalCharacters = document.getElementById("total-characters");
const charactersWithoutSpace = document.getElementById("characters-without-space");

function updateCharacterCount() {
  const text = input.value;
  const totalLength = text.length;
  const lengthWithoutSpace = text.replace(/\s+/g, "").length;

  totalCharacters.textContent = totalLength;
  charactersWithoutSpace.textContent = lengthWithoutSpace;
}

input.addEventListener("input", updateCharacterCount);
