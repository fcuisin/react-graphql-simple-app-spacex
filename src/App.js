import './App.css';
import { useQuery, gql } from '@apollo/client';
import LaunchList from './launchesList';
import React, {useState} from 'react';


const QUERY = gql`
  {
    launchesPast(limit: 50) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        rocket {
          id
        }
      }
      id
      launch_year
      launch_success
      links {
        flickr_images
      }
    }
  }
`


function App() {

  const { data, loading } = useQuery(QUERY);

  const [selectedYear, setSelectedYear] = useState(2019)

  const handleChange = (e) => {
    setSelectedYear(e.target.value);
  }

  if (loading) return (<div className="App">Loading...</div>);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SpaceX Launch Dashboard</h1>
      </header>
      <select name="" className="select" onChange={handleChange}>
        <option value="" selected disabled hidden>Choose here</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
      <LaunchList data={data} selectedYear={selectedYear}/>
    </div>
  );
}

export default App;
