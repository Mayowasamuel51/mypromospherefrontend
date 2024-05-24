import axios from "axios";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const api = import.meta.env.VITE_FULL_SEARCH;

const Fulltext = () => {
  const [data, setData] = useState([]);
  const items = [    {
    id: 0,
    name: 'Cobol'
  },

  {
    id: 1,
    name: 'Pets'
  },
  {
    id: 2,
    name: 'Furniture ,Home'
  },
  {
    id: 3,
    name: 'Apartment'
  },
  {
    id: 4,
    name: 'Skincare'
  },
  {
    id:5,
    name:"Groceries",
  },
  {
  id:6,
  name:"home-decoration"
  },
  {
    id:7,
    name:"Phones, Tablets"
  },
  {
    id:8,
    name:"Property"
  },
  {
    id:9,
    name:"Laptops"
  },
  {
    id:10,
    name:"Mens-shirts"
  }
];
  const fetchData = async () => {
    try {
      const response = await axios(`${api}Apartment`);
      const dataResponse = await response.data.data;
      setData(dataResponse)
      console.log(dataResponse);
    } catch {}
  };
 
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setData(results)
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    axios(`${api}${item.name}`).then((response)=>{
      if(response.status === 200){
        console.log(response.data.data)
      }
    })
    console.log(data)
    // console.log(item.name)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
 
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };
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
              // items={data}
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
