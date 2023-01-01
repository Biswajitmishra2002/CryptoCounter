import React from 'react';
import './Coins.css';
const coinitem = (props) => {
  const formatPercent = number=>`${new Number(number).toFixed(2)}%`
  return (
      
    <div className='coin-row'>
        
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
       
            <img src={props.coins.image} alt="" />
           
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
       
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p> {formatPercent(props.coins.price_change_percentage_24h)}%</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default coinitem
