import React, { useEffect, useState } from "react";
import { fetchCountries } from "../../api";
import { Form, Label } from "reactstrap";

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
      <Form>
        <Label>
          Pilih Negara:
          <select onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="global" disabled>
              Select Country
            </option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </Label>
      </Form>
    </div>
  );
};

export default CountryPicker;
