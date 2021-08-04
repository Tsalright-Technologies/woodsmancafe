import React from "react";
import { If, Then, Else } from "react-if";


import BigFoot from '../../images/sasquatch.png'
// multi column in the menu section
// switch the menu and lovin scoopful around

function Item(props) {
  
  return (
    <>
    <div className="menuDiv">
      {props.data.items.map((obj) => (
        <div className={`menuItems ${obj.name}`} key={`${obj.name}`}>
          <h2>{obj.name}</h2>
            <ul className="menuItemUl">
              {obj.itemsCollection.items.map((item) => (
                <If condition={item.houseFavorite}>
                  <Then>
                    <li
                      className={`itemCollection houseFavorite ${obj.name}`}
                      key={`${item.name}`}
                    >
                      <h4>
                        <img className="bigFoot"alt='BigFoot' src={BigFoot}></img>
                        {item.name} | {item.price}
                      </h4>
                      <p>{item.ingredients}</p>
                    </li>
                  </Then>
                  <Else>
                    <li className={`itemCollection ${obj.name}`} key={`${item.name}`}>
                      <h4>
                        {item.name} | {item.price}
                      </h4>
                      <p>{item.ingredients}</p>
                    </li>
                  </Else>
                </If>
              ))}
            </ul>
        </div>
      ))}
    </div>
</>
  )
}

export default Item;