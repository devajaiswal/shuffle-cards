let colors = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E']

let initialCards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

window.onload = (event) => {
  createCards(initialCards)
}

let createCards = (arr) => {
  let cardContainer = document.getElementsByClassName('cards')[0]
  cardContainer.innerHTML = ''

  arr.map((element, i) => {
    let card = document.createElement('div')
    let colorToPick = initialCards.indexOf(element)
    card.innerText = `${element}`
    card.style.backgroundColor = `${colors[colorToPick]}`
    card.style.backgroundImage = `-webkit-linear-gradient(left, ${colors[colorToPick]}, ${colors[colorToPick]} 5%, transparent 5%, transparent 100%)`
    card.className = 'card'
    cardContainer.appendChild(card)
  })
}

let rearrangeCards = (cards) => {
  let rearrangedCardsPosition = []
  let foundNextPosition = false
  let nextCardPosition
  cards.map(card => {
    do {
      foundNextPosition = false
      nextCardPosition = Math.floor(Math.random() * 10)
      if (!!nextCardPosition && !rearrangedCardsPosition.includes(nextCardPosition)) {
        rearrangedCardsPosition.push(nextCardPosition)
        foundNextPosition = true
      }
    }
    while (!foundNextPosition)
  })
  return rearrangedCardsPosition.map(position => cards[position -1])
}

let shuffleCards = () => {
  createCards(rearrangeCards(initialCards))
}

function sort(){
  createCards(initialCards.sort())
}
