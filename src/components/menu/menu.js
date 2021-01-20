import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// dependancies
import { If, Then, Else } from "react-if";

// images
import BigFoot from '../../images/sasquatch.png'

import "./menu.scss";

function Menu() {
  const GET_ITEMS = gql`
    {
      subMenuCollection(where: { name_contains: "Breakfast" }) {
        items {
          name
          displayName
          itemsCollection {
            items {
              ... on MenuItem {
                name
                ingredients
                price
                houseFavorite
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ITEMS);

  if (error) return <h1>Something is wrong!!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <main>
        <div className="menuDiv">
          {data.subMenuCollection.items.map((obj) => (
            <div className={`menuItems ${obj.name}`} key={obj.name}>
              <h2>{obj.name}</h2>
                <ul className="menuItemUl">
                  {obj.itemsCollection.items.map((item) => (
                    <If condition={item.houseFavorite}>
                      <Then>
                        <li
                          className={`itemCollection houseFavorite ${obj.name}`}
                          key={item.name}
                        >
                          <h4>
                          <img className="bigFoot"alt='BigFoot' src={BigFoot}></img>
                          {item.name} | {item.price}
                          </h4>
                          <p>{item.ingredients}</p>
                        </li>
                      </Then>
                      <Else>
                        <li className={`itemCollection ${obj.name}`} key={item.name}>
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
      </main>
    </>
  );
}

export default Menu;
