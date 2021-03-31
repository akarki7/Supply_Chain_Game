import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose one of the four FOUR roles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='RETAILER: Interacts with constumer without delay but has normal deelay with wholesaler'
              label='Primary'
              path='/retailer'
            />
            <CardItem
              src='images/img-2.jpg'
              text='WHOLESALER: Interacts with retailer and distributor with normal delay'
              label='Secondary'
              path='/wholesaler'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='DISTRIBUTOR: Interacts with wholesaler and factory with normal delay'
              label='Tertiary'
              path='/distributer'
            />
            <CardItem
              src='images/img-4.jpg'
              text='FACTORY: Ineracts with with distribuer with normal delay but fewer delay with the production'
              label='Quaternary'
              path='/factory'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;