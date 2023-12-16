import React from 'react';
import {moonSelector} from './MoonSelector';
const Astro= ({ forecastData }) => {
    const [data, setData] = React.useState(forecastData);
    React.useEffect(() => {
            if (forecastData) {
            const updatedData = {...forecastData};
            if (updatedData.sunrise.charAt(0) === '0') {
                updatedData.sunrise = updatedData.sunrise.substring(1);
                }            
                if (updatedData.sunset.charAt(0) === '0') {
                    updatedData.sunset= updatedData.sunset.substring(1);
                                                          }
                    if (updatedData.moonrise.charAt(0) === '0') {
                        updatedData.moonrise= updatedData.moonrise.substring(1);
                                                                      }
                        if (updatedData.moonset.charAt(0) === '0') {
                            updatedData.moonset= updatedData.moonset.substring(1);
                                                                                    }
                                                                                    updatedData.moonURL = moonSelector(updatedData.moon_phase);
            setData(updatedData);
            }
            }, [forecastData]);
            if (!data) {
            return <div>Loading...</div>;
            }
            return (
            <>
            <div aria-describedby='astroRegionDescription'>
                <div id='astroRegionDescription' className='visually-hidden'>Astronomy Information</div>
<div>Sunrise: {data.sunrise}</div>
<div>Sunset: {data.sunset}</div>
<div><img src ={data.moonURL} alt={data.moon_phase}/></div>
<div>Moonrise: {data.moonrise}</div>
<div>Moonset: {data.moonset}</div>
            </div>
            </>
            );
            };
            export default Astro;