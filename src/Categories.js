import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((item, idx) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={idx}
            onClick={() => {
              return filterItems(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
