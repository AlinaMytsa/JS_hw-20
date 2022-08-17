'use strict';

const onePotatoWeight = 0.075;
const pintsOfBorsch = 48;
const priceOnePoundOfPotato = 13;


const getPotatoWeight  = () => {

  const potatoForOnePint = onePotatoWeight * 4;
  const potatoFor48Pints = (pintsOfBorsch * potatoForOnePint);
  const priceOfAllPotato = potatoFor48Pints * priceOnePoundOfPotato;

  let a = Math.round(priceOfAllPotato);


}

getPotatoWeight();
