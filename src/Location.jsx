import React from 'react';
import {dateFormatter} from './DateFormatter';

const Location= ({ searchValue }) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=';
    const key=process.env.REACT_APP_API_KEY;
        const [data, setData] = React.useState(null);
React.useEffect(() => {
fetch(url + key + '&q=' + searchValue)
.then(response => response.json())
.then(data => {
// Use the data received from the API call
data.location.localtime=dateFormatter(data.location.localtime);
setData(data.location);
})
.catch(error => {
    // Handle the error here
            console.error('Error:', error);
            });
}, [searchValue]);
if (!data) {
return <div>Loading...</div>;
}
return (
<>
<div>
<h3>Location:</h3>
<div>{data.name+', '+data.region}</div>
<div>{data.country}</div>
<div>{data.localtime}</div>
</div>
</>
);
};
export default Location;