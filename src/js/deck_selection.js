import "../sass/st.scss";


const cardBox = document.querySelector (".cardBox")

function deckSelections (e) {
    e.preventDefault();
    let result = e.target.dataset.name;
    
    let obj = localStorage.setItem( `result`, JSON.stringify(result));
   console.log(obj);
   return;
   
}

cardBox.addEventListener ("click", deckSelections);

export {deckSelections};
export default cardBox;
