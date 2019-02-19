

const cardBox = document.querySelector (".cardBox")

function deckSelections (e) {
    e.preventDefault();
    let result = e.target.dataset.name; 

   localStorage.setItem(`name`, JSON.stringify(result));

}

cardBox.addEventListener ("click", deckSelections);

export {deckSelections};
