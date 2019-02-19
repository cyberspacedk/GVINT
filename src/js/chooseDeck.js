export function chooseDeck(e){
    if(e.target.nodeName !== 'IMG'){
        return
    }
    localStorage.setItem('faction', JSON.stringify(e.target.dataset.faction));
}
