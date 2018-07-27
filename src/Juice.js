import React from "react";
import { Link, Route } from "react-router-dom";
import Item from "./Item";
 
const Juice = ({ match }) => { 

  const shopData = [
    {
      id: 'raspyJuice',
      name: 'Raspy Juice',
      description: 'Makes your voice raspy.',
      image: './Raspberry.jpg'

    },
    {
      id: 'yellowMellow',
      name: 'Yellow Mellow',
      description: 'For the mellows.',
      image: './Smoothie.jpg'

    },
    {
      id: 'greenMachine',
      name: 'Green Machine',
      description: 'Machine that has been rusted.',
      image: './GreenJuice.jpg'

    },
    {
      id: 'bulletProofCoffee',
      name: 'Bulletproof Coffee',
      description: 'Not fool proof, though.',
      image:'./Coffee.jpg'
    }
  ];

  let linkList = shopData.map( (item,index) => {
    return (
        <li key={index} className="item-name">
          <Link to={`${match.url}/${item.id}`}>
            {item.name}
          </Link>
        </li>
    )
  })

  // console.log(match);
  return (
    <div>
        <ul className="align-left">
          {linkList}
        </ul>

      <Route path={`${match.path}/:itemId`} render={(props) => <Item data={shopData} {...props} />}/>
    </div>
  )
}
 
export default Juice;