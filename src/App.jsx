import React, { useState, useEffect } from 'react';


import Geolocation from 'react-geolocation';


import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';


import Current from './Current'


import Location from './Location'


import Forecast from './Forecast'


function App() {


const [inputValue, setInputValue] = useState('');


const [searchValue, setSearchValue] = useState('');


useEffect(() => {


if (navigator.geolocation) {


navigator.geolocation.getCurrentPosition((position) => {


setInputValue(`${position.coords.latitude},${position.coords.longitude}`);


});


}


}, []);


const handleSearch = () => {


setSearchValue(inputValue);


};


const handleKeyPress = (e) => {


if (e.key === 'Enter') {


handleSearch();


}


};


useEffect(() => {


if (inputValue) {


handleSearch();


}


}, [inputValue]);


return (


<>


<div className='container-fluid'>


{/* Header */}


<div className='row'>


<header className='banner'>


<h1>Live React Weather</h1>


</header>


</div>


<div className='row'>


<p>If you allow access to your location, the weather will be provided for the location retrieved from your device location. You can also enter a postal (zip) code, city, or coordinates to get weather for that location.</p>


</div>


{/* End Header */}


{/* Start Main */}


<main className='container'>


<div className='row'>


<div className='col-10'>


<label htmlFor='input'>Where would you like weather data for?</label>


<input


id='input'


type='text'


value={inputValue}


onChange={(e) => setInputValue(e.target.value)}


onKeyPress={handleKeyPress}


placeholder='Enter postal code city or coordinates'


/>


</div>


<div className='col-2'>


<button onClick={handleSearch}>Get Weather</button>


</div>


</div>


<div className='row'>


<div className='col-xl-4'>


<Location searchValue={searchValue} />


</div>


<div className='col-xl-8'>


<Current searchValue={searchValue} />


</div>


</div>


<div className='row'>


<Forecast searchValue={searchValue} />


</div>


</main>


{/* End Main */}


{/* Footer */}


<div className='container-fluid'>


<footer>


<small>BlindException&trade; 2023</small>


</footer>


</div>


</div>


</>


);


}


export default App;