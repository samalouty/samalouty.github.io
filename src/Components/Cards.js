import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src = "\images\img-14.jpg"
                text = "Simulating noise cancellation in headphones by creating a sound then adding random noise and then removing the noise"
                label = 'Python'
                path = 'https://github.com/samalouty/Noise-Cancellation'

                />
                <CardItem 
              src='images/game.jpg'
              text='"The Last of Us: Legacy" A Complete 2d game built from scratch with no engine to demonstarte OOP skills'
              label='Java group project'
              path='https://github.com/Mohamed-Ahmed-Taha/The-Last-of-Us-Legacy'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wordle.jpg'
              text='Gucks, Nymph, Waltz, Vibex and Fjord are 5 words with 25 unique characters, click to see how I did it effeciently in C!'
             
              
              
              label='C programming language'
              path='https://github.com/samalouty/5words-25uniqueletters'
              
            />
            <CardItem
              src='images/chess.jpg'
              text='Text-based chess, movement is done by utilizing haskell functions'
              label='Haskell'
              path='https://github.com/samalouty/haskell_chess'
            />
            <CardItem
              src='images/tic.jpg'
              text='Created a more fun tic tac toe that reduces the possibilty of a boring draw'
              label='JavaFX'
              path='https://github.com/samalouty/FunTicTacToe'
            />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
