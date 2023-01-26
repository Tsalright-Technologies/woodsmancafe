import React from "react";
import { If, Then, Else } from "react-if";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import BigFoot from '../../images/sasquatch.png'
// multi column in the menu section

function Item(props) {
  
  return (
    <>
    <div className="menuDiv">
      {props.data.items.map((obj) => (
        <div className={`menuItems ${obj.name}`} key={`${obj.name}`}>
          <h2>{obj.displayName}</h2>
          <h3>{obj.subTitle}</h3>
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
          {
            obj.footer != null && obj.footer.json != null && documentToReactComponents(obj.footer.json)
          }
        </div>
      ))}
    </div>
</>
  )
}

export default Item;