import React from 'react';
import ForecastDay from './ForecastDay';
import {dateFormatter} from './DateFormatter';
const Forecast = ({ searchValue }) => {

    const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://api.weatherapi.com/v1/forecast.json?days=7&key='+apiKey;
const [data, setData] = React.useState(null);
React.useEffect(() => {
    if(searchValue{
    const fetchData = () => {
        fetch(url+ '&q=' + searchValue)
       
       
        .then(response => response.json())
     
     
        .then(data => {
       
       
        setData(data.forecast);
       
       
        });
       
       
        };
       
       
        fetchData();
       
       
        const interval = setInterval(fetchData, 3600000); // Call fetchData every hour
       
       
        return () => {
       
       
        clearInterval(interval); // Clear the interval when the component is unmounted
       
       
        };
      
    }
        }, [searchValue]);
if (!data) {


return <div>Loading...</div>;


}


return (


<>


<div>


<h3>Forecast:</h3>


{data.forecastday.map((forecast, index) => (


<ForecastDay key={index} forecastObject={forecast} />


))}


</div>


</>


);


};


export default Forecast;