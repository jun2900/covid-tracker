import React from 'react'
import { Cards, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData, fetchFirstCountry } from './api'

class App extends React.Component {
    state = {
        data: {

        },
        dataCountry: {

        },
        country: ""
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })

        //Will display the first country when its deploy
        const firstCountry = await fetchFirstCountry()
        const firstData = await fetchData(firstCountry)
        this.setState({ dataCountry: firstData, country: firstCountry })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ dataCountry: fetchedData, country: country })
    }


    render() {
        return (
            <div className={styles.container}>
                <center><h1>Covid Tracker</h1></center>
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={this.state.dataCountry} country={this.state.country} />
            </div>
        )
    }
}

export default App