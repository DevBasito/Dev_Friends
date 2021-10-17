import React from 'react';
import Card from './Card.js';
import { devs } from '../Devs.js';

const cardArray = devs.map((items, i) => {
    return (
        <Card key={i} username={devs[i].username} name={devs[i].name} email={devs[i].email} occupation={devs[i].occupation} website={devs[i].website} />
    )
})
const Cardlist = () => {
    return (
        <div>
            {cardArray}
        </div>

    )
}

export default Cardlist;