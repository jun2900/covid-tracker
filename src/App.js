import React from 'react'
import { CardsGlobal, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

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
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ dataCountry: fetchedData, country: country })
    }


    render() {
        return (
            <div className={styles.container}>
                <CardsGlobal data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <CardsGlobal data={this.state.dataCountry} country={this.state.country} />
            </div>
        )
    }
}

export default App