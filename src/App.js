import React from 'react'
import { CardsGlobal, CardsCountry, CountryPicker } from './components'
import styles from './App.module.css'

class App extends React.Component {
    state = {
        data: {

        }
    }

    async componentDidMount() {
        const response = await fetch("https://covid19.mathdro.id/api")
        const data = await response.json()
        const { confirmed, recovered, deaths, lastUpdate } = await data
        this.setState({
            data: {
                confirmed: await confirmed,
                recovered: await recovered,
                death: await deaths,
                lastUpdate: await lastUpdate,
            }
        })
        console.log(this.state.data);

    }


    render() {
        return (
            <div className={styles.container}>
                <CardsGlobal />
                <CardsCountry />
                <CountryPicker />
            </div>
        )
    }
}

export default App