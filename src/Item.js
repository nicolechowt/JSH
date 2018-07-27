import React from "react";

const Item = ({match,data}) => {
  // console.log(match);
  let item = data.find(element => element.id==match.params.itemId);
  let itemData;

  // console.log(JSON.stringify(item.image));
  if (item)
    itemData = <div>
      <h3> {item.name} </h3>
      <p>{item.description}</p>
      <img src={require(`${item.image}`)} alt={item.id} width={450} height={300}/></div>;
  else
    itemData = <h2> Sorry. Product doesn't exist </h2>;

    return (
      <div className="align-left">
      {itemData}        
      </div>
    );
}
 
export default Item;