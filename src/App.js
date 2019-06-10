import React, { Component } from 'react';
import './App.css';
import Info from './components/info'
import Weather from "./components/weather";
import Form from "./components/form";


const API_KEY="67ad56ab2340de2892118782666569e2";

//const link="https://samples.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=67ad56ab2340de2892118782666569e2"

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  };
  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    console.log(city);
    const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
    if (data.cod !== "404") {
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Set the correct name of a city"
      });
    }
  };

  render() {
    return (
        <div>
          <div className="info-block">
            <Info/>
            <Form weatherMethod={this.gettingWeather}/>
            <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                sunset={this.state.sunset}
                error={this.state.error}
            />
          </div>
        </div>
    );
  }
}

export default App;
