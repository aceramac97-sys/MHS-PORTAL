

function toggleCard(card) {
    if (card.style.maxHeiht) {
        card.style.maxHeight = null;

    } else {
        card.style.maxHeight =
        card.scrollHeight + "px";
    }
}