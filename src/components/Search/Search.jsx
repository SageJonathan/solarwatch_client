import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function Search() {
  

    return (
        <>
        <div className="search">
          <div className="search__form-wrapper">
            <form className="search__form">
              <p className="search__instruction">Enter a location's name</p>
              <div className="search__input-group">
                <label className="search__label">Location:</label>
                <input
                  className="search__input"
                  // onChange={}
                  // value={}
                  required
                />
              </div>
              <button className="search__button">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Search;
