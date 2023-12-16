import React from 'react';
import ForecastHour from './ForecastHour';
import {dateFormatter} from './DateFormatter';
const Hourly= ({ forecastData}) => {
               
return (
<>
<div aria-describedby='hourlyRegionDescription'>
                <div id='hourlyRegionDescription' className='visually-hidden'>Hourly Forecast</div>
{forecastData.map((hour, index) => (
<ForecastHour key={index} forecastObject={hour} />
))}
</div>
</>
);
};
export default Hourly;