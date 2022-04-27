import React, { useState } from "react";
import Categories from "./Categories";
import "./catergory1.css"
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  const filterDis = (disItem) => {
    const discount = Categories.filter((currData) => {
      return currData.dis === disItem;
    });
    setData(discount);
  };
  const filterTyp = (typItem) => {
    const typ = Categories.filter((currrData) => {
      return currrData.type === typItem;
    });
    setData(typ);
  };

  return (
    <>

      <div className="container-fulid   mx-2" style={{ width: '100%', background: 'white' }}>
        <div className="row mt-5 mx-2" style={{ width: '100%', background: 'white' }}>
          
<div className="headi1"><b>Filters</b></div>
          <div className="col-md-3"  style={{ width: '90%', background: 'white' }} >
            <div className=" btn btn-warning w-100 mb-2" id="dropdown1" style={{ width: '100%', background: 'white' }}>
              <a

               

                role="button"
                id="dropdown1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
              >
               <b> Price </b><FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content1" >
                <ul>
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      onClick={() => filterResult("100below")}
                    >
                      Less than 100/-
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btn btn-warning">
                      More than 100/-
                    </button>
                  </li>
                </ul></div>
            </div>
            <div className=" btn btn-warning w-100 mb-2" id="dropdown1" style={{ width: '100%', background: 'white' }}>
              <a

               

                role="button"
                id="dropdown1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
              >
               <b> Price </b><FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content1" >
                <ul>
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      onClick={() => filterResult("100below")}
                    >
                      Lowest to Highest
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btn btn-warning">
                      Highest to Lowest
                    </button>
                  </li>
                </ul></div>
            </div>
            


            <div className=" btn btn-warning w-100 mb-2" id="dropdown2" style={{ width: '100%', background: 'white' }} >
              <a
               
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
                role="button"
                id="#dropdown2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <b>  Discount Range</b> <FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content2">              <ul

                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <button
                    className="dropdown-item btn btn-warning"
                    onClick={() => filterDis("10above")}
                    href="/#"
                  >
                    10% - 20%
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item btn btn-warning"
                    onClick={() => filterDis("20above")}
                    href="/#"
                  >
                    20% - 30%
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item "
                    onClick={() => filterDis("30above")}
                    href="/#"
                  >
                    30% and above
                  </button>
                </li>
              </ul></div>

            </div>

            <div className=" btn btn-warning w-100 mb-2" id="dropdown3" style={{ width: '100%', background: 'white', textAlign: 'left' }}>
              <a
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
                
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              
               <b> Category</b>   <FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content3">
                <ul

                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      
                     
                    >
                    Fruits
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      onClick={() => filterTyp("vegetables")}
                     
                    >
                      Vegetables
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => filterTyp("pulses")}
                     
                    >
                      Pulses
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => filterTyp("dairy")}
                    
                    >
                   <Link to="/Dairy">  Dairy</Link> 
                    </button>
                  </li>
                </ul></div>
            </div>

            <button style={{ width: '100%', color: 'black', background: 'white', textAlign: 'left', paddingLeft: '25px' }}
              className="btn btn-warning w-100 mb-2"
              id="dropdown2"
              onClick={() => setData(Categories)}
            >
             <b> All</b>
            </button>

          </div>
        </div>
      </div>
      
    </>
  );
};

export default Category;
