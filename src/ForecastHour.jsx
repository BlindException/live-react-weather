import React from 'react';
import {dateFormatter} from './DateFormatter';
const ForecastHour= ({ forecastObject}) => {
    const [data, setData] = React.useState(forecastObject);
    React.useEffect(() => {
            if (forecastObject) {
                const updatedData = {...forecastObject};
                const date = new Date(updatedData.time);
const hours = date.getHours();
const ampm = hours >= 12 ? "PM" : "AM";
updatedData.formattedTime = `${hours % 12 || 12}${ampm}`;
updatedData.temp_f = Math.round(updatedData.temp_f)+'\u00B0f';
updatedData.temp_c = Math.round(updatedData.temp_c)+'\u00B0c';
            
            
            setData(updatedData);
            }
            }, [forecastObject]);
            if (!data) {
            return <div>Loading...</div>;
}
return (
<>
<div>
<div>{data.formattedTime}</div>
<div>{data.temp_f} / {data.temp_c}</div>
<div><img alt={data.condition.text} src={data.condition.icon}/></div>
</div>
</>
);
};
export default ForecastHour;