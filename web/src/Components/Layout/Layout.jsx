import React, { memo } from "react";
import { Outlet ,NavLink} from "react-router-dom";
import { menu } from "./menu";

import "./Layout.css";

export const Layout = memo(() => {
  return (


    <main className="main">
      <aside className="main_aside">
        <nav>
          {
            menu.map((item, index) => {
              return (
                <NavLink to={item.path} key={index}>
                  {item.icon}
                  {item.name}
                </NavLink>
              );
            })
          }
        </nav>
      </aside>
      <section>
        <Outlet/>
      </section>
    </main>
  );
});
