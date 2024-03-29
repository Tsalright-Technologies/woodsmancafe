import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Item from "../item.js"

import "../menu.scss";

function BreakfastMenu() {
  const GET_ITEMS = gql`
    {
      subMenuCollection(where: { name_not_contains: "Kids", name_contains: "Breakfast:"}, order: [displayOrder_ASC]) {
        items {
          name
          displayName
          displayOrder
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
        <Item data={data.subMenuCollection} />
      </main>
    </>
  );
}

export default BreakfastMenu;
