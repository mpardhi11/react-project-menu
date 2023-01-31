import { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

// ----------------------------

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

// ----------------------------
// ----------------------------

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={allCategories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
