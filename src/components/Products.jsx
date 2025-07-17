import { useState, useEffect } from "react";
import "../Table.css";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 100,
    quantity: 10,
    description: "This is a laptop",
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    price: 200,
    quantity: 20,
    description: "This is a phone",
    inStock: true,
  },
  {
    id: 3,
    name: "Tablet",
    price: 300,
    quantity: 30,
    description: "This is a tablet",
    inStock: true,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 400,
    quantity: 40,
    description: "This is a smartwatch",
    inStock: true,
  },
  {
    id: 5,
    name: "Headphones",
    price: 500,
    quantity: 50,
    description: "This is a headphones",
    inStock: false,
  },
  {
    id: 6,
    name: "Keyboard",
    price: 600,
    quantity: 60,
    description: "This is a keyboard",
    inStock: false,
  },
  {
    id: 7,
    name: "Mouse",
    price: 700,
    quantity: 70,
    description: "This is a mouse",
    inStock: true,
  },
  {
    id: 8,
    name: "Speaker",
    price: 800,
    quantity: 80,
    description: "This is a speaker",
    inStock: true,
  },
  {
    id: 9,
    name: "Monitor",
    price: 900,
    quantity: 90,
    description: "This is a monitor",
    inStock: true,
  },
  {
    id: 10,
    name: "Printer",
    price: 1000,
    quantity: 100,
    description: "This is a printer",
    inStock: false,
  },
];

export default function Products() {
  const [searchValue, setSearchValue] = useState("");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    const filteredProducts = initialProducts.filter((product) => {
      let userInput = searchValue.toLowerCase();
      let productName = product.name.toLowerCase();
      if (showOnlyInStock === true) {
        return product.inStock === true && productName.includes(userInput);
      }
      return productName.includes(userInput);
    });
    setFilteredProducts(filteredProducts);
  }, [showOnlyInStock, searchValue]);

  //   Search by name
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  //   Show only in stock products
  const handleShowOnlyInStock = (e) => {
    setShowOnlyInStock(e.target.checked);
  };

  //   Reset filters
  const handleReset = () => {
    setSearchValue("");
    setShowOnlyInStock(false);
    setFilteredProducts(initialProducts);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        <div className="search-container">
          <label htmlFor="search">Search by name</label>
          <input
            className="search-input"
            type="text"
            id="search"
            onChange={handleSearch}
            value={searchValue}
            placeholder="Search by name"
          />
        </div>

        <div>
          <label htmlFor="sort">Show only in stock products</label>
          <input
            type="checkbox"
            id="sort"
            onChange={handleShowOnlyInStock}
            checked={showOnlyInStock}
          />
        </div>

        <div>
          <button onClick={handleReset}>Reset Filters</button>
        </div>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td
                  style={{
                    backgroundColor: product.inStock ? "green" : "red",
                    color: product.inStock ? "white" : "white",
                  }}
                >
                  {product.inStock ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
