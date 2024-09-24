import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SearchLocal.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function SearchLocal() {
  

    return (
        <>
          <div className="search">
            <form className="search__form">
              <p className="search__prompt">Look up by location</p>
              <div className="search__input-group">
                <label className="search__label"></label>
                <input
                  className="search__input"
                  // onChange={}
                  // value={}
                  placeholder="Mount Robson"
                  required
                />
              </div>
              <button className="search__button">Submit</button>
            </form>
          </div>
      </>
    );
}

export default SearchLocal;
