import axios from "axios";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const api = import.meta.env.VITE_FULL_SEARCH;

const Fulltext = () => {
  const [data, setData] = useState([]);
  const items = [];
  const fetchData = async () => {
    try {
      const response = await axios(`${api}Apartment`);
      const dataResponse = await response.data;
      console.log(dataResponse.data);
    } catch {}
  };
  const handleOnSearch = async (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    try {
      const response = await axios(`${api}${string}`);
      const dataResponse = await response.data.data;
      
      console.log(dataResponse);
      items.push(dataResponse)
    } catch {}
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  useEffect(() => {
    // fetchData();
  }, []);
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
  return (
    <div>
      <h1>Full-text-full</h1>

      {/* <span style={{ display: "block", textAlign: "left" }}>
        id: {items.titleImageurl}
      </span>
      <span style={{ display: "block", textAlign: "left" }}>
        name: {items.categories}
      </span> */}

      <div className="App">
        <header className="App-header">
          <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
                // formatResult={formatResult}
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Fulltext;
