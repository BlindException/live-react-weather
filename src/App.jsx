import { useState } from 'react'
import './App.css'
import Current from './Current'
import Location from './Location'
import Forecast from './Forecast'
function App() {
    const [inputValue, setInputValue] = useState('')
    const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {
      // Perform the search logic here using the searchValue
      setSearchValue(inputValue)
      // You can pass the searchValue to other components or make an API call
            }
            const handleKeyPress = (e) => {
              if (e.key === 'Enter') {
                                          handleSearch();
                                          }
                                          };
  return (
    <>
<div>
  <label htmlFor='input'>Where would you like weather data for?</label>
<input
id='input'
type="text"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
onKeyPress={handleKeyPress}
placeholder='Enter postal code city or coordinates'
/>
<button onClick={handleSearch}>Get Weather</button>
</div>
<Location searchValue={searchValue} />
<Current searchValue={searchValue} />
<Forecast searchValue={searchValue} />
      </>
  )
}

export default App
