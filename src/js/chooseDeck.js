export function chooseDeck(e){
    
    localStorage.setItem('faction', JSON.stringify(e.target.dataset.faction));
}
