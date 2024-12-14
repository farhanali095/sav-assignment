import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const itemsPerPage = 10;

  const RECAPTCHA_SITE_KEY = "6LcXXJsqAAAAADjMPZigtQFaa4aeyff74OItTItF";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onReCAPTCHAChange = (value) => {
    if (value) {
      setIsVerified(true);
    }
  };

  return (
    <div className="App">
      <h1>Items with pagination and search</h1>
      <div className="recaptcha">
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onReCAPTCHAChange} />
      </div>
      {isVerified ? (
        <>
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <ul className="item-list">
            {currentItems.map((item) => (
              <li key={item.id} className="item-card">
                <img src={item.image} alt={item.title} className="item-image" />
                <p>{item.title}</p>
                <p>
                  <strong>${item.price}</strong>
                </p>
              </li>
            ))}
          </ul>
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(filteredItems.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <p className="captcha-message">
          Please verify the reCAPTCHA to view the content.
        </p>
      )}
    </div>
  );
};

export default App;
