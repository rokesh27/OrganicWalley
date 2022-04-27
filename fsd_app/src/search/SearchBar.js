import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { findByName } from "../utils/api";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const HandleFilter = async (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log(searchWord);

    const newFilter = await findByName(searchWord);
    setFilteredData(newFilter.data);
      // Promise.resolve(
      //     findByName(searchWord).then((res)=>res.data).then(
      //         (i)=>{
      //             console.log(i)
      //             console.log("hiii")
      //             setFilteredData(i.data)
      //         }
      //     )
      // )
      

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text" className="colorchange"
          value={wordEntered}
          onChange={HandleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              /*<a className="dataItem" href={value.link} target="_blank">
                <p>{value.Full_name} </p>
              </a>*/
              <Link className="dataItem" to={{
                pathname: "/Products",
                state: { product:value },
              }}>{value.Full_name}</Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
