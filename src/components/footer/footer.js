import React from "react";
import './footer.scss'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { NavLink } from "react-router-dom";

export default function Footer() {
  const GET_ITEMS = gql`
    {
      hoursCollection (order: sortOrder_ASC) { 
        items {
            hoursOfOperation
            sortOrder
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ITEMS);

  if (error) return <h1>Something is wrong!!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">Hours</h2>
            <ul>
              {data.hoursCollection.items.map((h) => (
                <li key={h.sortOrder}>{h.hoursOfOperation}</li>
              ))}
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Navigation</h2>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/kids-menu'>Kids Menu</NavLink></li>
              <li><NavLink to='/breakfast-menu'>Breakfast Menu</NavLink></li>
              <li><NavLink to='/main-menu'>Main Menu</NavLink></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>Phone: (218) 566-2080</li>
            </ul>
          </div>
        </section>

        {/* <section class="ft-social">
          <ul class="ft-social-list">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          </ul>
        </section> */}

        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>&copy; 2022 Copyright Woodsman Cafe</li>
          </ul>
        </section>
      </footer>
    </>
  );
}
