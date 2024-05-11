import React, { useState } from "react";
import style from "./GoogleTabs.module.css";
function GoogleTabs() {
  const [currentTab, setCurrentTab] = useState("All");

  const tabs = ["All", "Video", "Image"];
  return (
    <>
      <div>
        <ul className={style.nav}>
          {tabs.map((tab) => {
            return (
              <li>
                 key={tab}
              className={currentTab === tab ? style.activeTab : style.tab}
              onClick={() => setCurrentTab(tab)}
              style={{ textDecoration: currentTab === tab ? "underline" : "none" }}
            
              {tab}
            
               
              </li>
            );
          })}
        </ul>

        <p>Current Tab: {currentTab}</p>

        <div>
          <h2>All Content</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            eligendi iste perferendis corrupti illum delectus. Quam voluptatibus
            omnis laudantium ipsam iste accusamus ratione delectus culpa?
          </p>
        </div>

        <div>
          <h2>Video Content</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            corporis fugiat aperiam tempora veniam, blanditiis, ducimus, quas
            labore recusandae suscipit placeat hic velit minima sint.
          </p>
        </div>
        <div>
          <h2>Image Content</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi
            vero odio debitis repudiandae, quidem accusantium commodi , unde,
            fugiat cum earum doloribus? Qui, voluptas quidem?
          </p>
        </div>
      </div>
    </>
  );
}
export default GoogleTabs;
