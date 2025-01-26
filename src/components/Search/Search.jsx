import React from "react";
import { Link } from "react-router-dom";
import  "./Search.scss"
const Search = ({ filterData }) => {
  return (
    <div className="search-results">
      {filterData && filterData.length > 0 ? (
        filterData.map((product) => (
          <div
            key={product.id}
            className="search-result-item"
            style={{ cursor: "pointer" }}
          >
            <Link to={`/product/${product.id}`}>
              <p>{product.title}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Search;
