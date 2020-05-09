import React, { useEffect, useState } from "react";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <div className={styles.container}>
      <form>
        <h5 style={{ display: "inline" }}>Pilih Negara: </h5>
        <select onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="" disabled>
            Select Country
          </option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default CountryPicker;
