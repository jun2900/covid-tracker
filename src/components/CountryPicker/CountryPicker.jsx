import React, { useEffect, useState } from "react";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <div>
      <form>
        <label>
          Pilih Negara:
          <select
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="">Pick A Country</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default CountryPicker;
