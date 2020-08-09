import React, {Component} from 'react';
import Card from "../components/threadCard"

function CardList(props){
    let cards = props.cards.map((card)=>{
        return <Card title={card.title} image = {card.image} description = {card.description} hashtags = {card.hastags} />
    })
    return(
        <div>
            {
                {cards}
            }
        </div>
    )
}