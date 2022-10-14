import React from "react";
import Card from './Card';
import { IRobot } from "../containers/App";

const CardList = ({robots}: {robots: Array<IRobot>}) => {
    // if (true) {
    //     throw new Error('Noooo!');
    // }
    // console.log('Cardlist')
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card 
                    key={i} 
                    id={user.id} 
                    name={user.name} 
                    email={user.email}/>
                })
            }
        </div> 
    )
}

export default CardList;