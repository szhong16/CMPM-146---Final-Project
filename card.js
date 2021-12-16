const NAME = ["UC Santa Cruz Arboretum", "UC Santa Cruz Entrance", "Santa Cruz Lighthouse", "Surfer Dude Statue", "Santa Cruz Bell Tower"]
// const IMG = ["Example/6.jpg"]

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
}

class Card {
    constructor(name) {
        this.name = name
    }
}

function freshDeck() {
    return NAME.map(name => {
        return new Card(name)
    })
}