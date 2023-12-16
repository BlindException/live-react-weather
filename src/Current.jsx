import React from 'react';
import {dateFormatter} from './DateFormatter';
const Current = ({ searchValue }) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=';
    const key = process.env.REACT_APP_API_KEY;
    const [data, setData] = React.useState(null);


React.useEffect(() => {

if(searchValue){
fetch(url + key + '&q=' + searchValue)


.then(response => response.json())


.then(data => {


// Use the data received from the API call

data.current.temp_f = Math.round(data.current.temp_f)+'\u00B0f';
data.current.temp_c = Math.round(data.current.temp_c)+'\u00B0c';
data.current.wind_mph= Math.round(data.current.wind_mph)+'mph';
data.current.wind_kph= Math.round(data.current.wind_kph)+'kph';
data.current.gust_mph= Math.round(data.current.gust_mph)+'mph';
data.current.gust_kph= Math.round(data.current.gust_kph)+'kph';
data.current.feelslike_f= Math.round(data.current.feelslike_f)+'\u00B0f';
data.current.feelslike_c = Math.round(data.current.feelslike_c)+'\u00B0c';
data.current.last_updated=dateFormatter(data.current.last_updated);
setData(data.current);


});
}
}, [searchValue]);


if (!data) {


return <div>Loading...</div>;


}


return (


<>


<div>


<h3>Current Conditions:</h3>
<div>Last Updated {data.last_updated}</div>
<div>{data.condition.text}<img src={data.condition.icon} alt={data.condition.text}/></div>
<div> {data.temp_f} / {data.temp_c}</div>
<div>Wind: {data.wind_mph} / {data.wind_kph} {data.wind_dir}
<span> with gusts up to {data.gust_mph} / {data.gust_kph}</span>
</div>
<div>Humidity: {data.humidity}%</div>
<div>Feels Like: {data.feelslike_f} / {data.feelslike_c}</div>
</div>
</>
);
};
export default Current;