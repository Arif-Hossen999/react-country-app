/* eslint-disable react/prop-types */
import React from "react";

import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, area, capital, population } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  };
  return (
    <article className={style.country}>
      <div>
        <img className={style.flag} src={flags.png} alt={name.common} />
        <h3>Name : {name.common}</h3>
        <h3>Population : {population}</h3>
        <h3>Capital : {capital}</h3>
        <h3>Area : {area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Contry
        </button>
      </div>
    </article>
  );
};

export default Country;
