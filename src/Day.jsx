import React from 'react';
import {dateFormatter} from './DateFormatter';
const Day = ({ forecastData }) => {
    const [data, setData] = React.useState(forecastData);
    React.useEffect(() => {
            if (forecastData) {
            const updatedData = {...forecastData};
            //updatedData.precip='';
            updatedData.maxtemp_f = Math.round(updatedData.maxtemp_f) + '\u00B0f';
            updatedData.mintemp_f= Math.round(updatedData.mintemp_f) + '\u00B0f';
            updatedData.maxtemp_c= Math.round(updatedData.maxtemp_c) + '\u00B0c';
            updatedData.mintemp_c= Math.round(updatedData.mintemp_c) + '\u00B0c';
        if(updatedData.daily_will_it_rain==1&&updatedData.daily_will_it_snow==1){
            updatedData.precip=updatedData.daily_chance_of_rain+'% rain '+updatedData.daily_chance_of_snow+'% snow';
        }else if(updatedData.daily_will_it_rain==1&&updatedData.daily_will_it_snow==0){
            updatedData.precip=updatedData.daily_chance_of_rain+'% rain';
        }else if(updatedData.daily_will_it_rain==0&&updatedData.daily_will_it_snow==1){
            updatedData.precip=updatedData.daily_chance_of_snow+'% snow';
        }else if(updatedData.daily_will_it_rain==0&&updatedData.daily_will_it_snow==0){
            updatedData.precip='0% rain/snow';
        }
        updatedData.totalprecip_in=Math.round(updatedData.totalprecip_in);
        updatedData.totalprecip_mm=Math.round(updatedData.totalprecip_mm);
            setData(updatedData);
            }
            }, [forecastData]);
            if (!data) {
            return <div>Loading...</div>;
            }
            return (
            <>
            <div aria-describedby='dayRegionDescription'>
                <div id='dayRegionDescription' className='visually-hidden'>Daily Forecast</div>
                <div>{data.condition.text}</div>
            <div><img alt={data.condition.text} src={data.condition.icon}/></div>
            <div>High: {data.maxtemp_f} / {data.maxtemp_c}</div>
            <div>Low: {data.mintemp_f} / {data.mintemp_c}</div>
            <div>Humidity: {data.avghumidity}%</div>
            <div>{data.precip} totalling {data.totalprecip_in}in. / {data.totalprecip_mm}mm.</div>
            </div>
            </>
            );
            };
            export default Day;