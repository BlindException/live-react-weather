import React from 'react';
import {dateFormatter} from './DateFormatter';
import Astro from './Astro';
import Day from './Day';
import Hourly from './Hourly';
const ForecastDay = ({ forecastObject }) => {
  const [selectedTab, setSelectedTab] = React.useState('day');
  if(forecastObject){
    
    const datetimeString = forecastObject.date+' 00:00:00';
const options = { weekday: 'short', month: 'numeric', day: 'numeric', year: '2-digit' };
const formattedDate = new Date(datetimeString).toLocaleDateString('en-US', options);
  
    
   
  
    return (
  
  
    <>
   
  
    <div>
  
  
    <header>
   
   
    <h5>{formattedDate}</h5>
    <nav>
          <button onClick={() => setSelectedTab('day')}>Day</button>
          <button onClick={() => setSelectedTab('hourly')}>Hourly</button>
         <button onClick={() => setSelectedTab('astro')}>Astronomy</button>
          </nav>
      </header>
            <div>
            {selectedTab === 'day' && <Day forecastData={forecastObject.day}/>}
          {selectedTab === 'hourly' && <Hourly forecastData={forecastObject.hour}/>}
            {selectedTab === 'astro' && <Astro forecastData={forecastObject.astro}/>}
            </div>
            </div>
            </>
            );
    }
    if (!forecastObject) {
   
   
      return <div>No forecast data available...</div>;
     
     
      }
            };
            export default ForecastDay;