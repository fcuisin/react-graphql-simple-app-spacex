import React from 'react';

function LaunchList({data, selectedYear}) {

  console.log(selectedYear)

  return (

    <div className="card-list">
    {data.launchesPast
      .filter(launch => launch.launch_year === selectedYear)
      .map(launch =>
        <div className="card">
          <div
            className="card-picture"
            style={{ backgroundImage: `url(${launch.links.flickr_images.length === 0 ? "https://source.unsplash.com/1600x900/?rocket" : launch.links.flickr_images})` }}
          ></div>
          <div className="card-desc">
            <p className="card-year">{launch.launch_year}</p>
            <h3>{launch.mission_name}</h3>
            <p>Rocket : {launch.rocket.rocket_name}</p>
          </div>
        </div>
      )
    }
    </div>

  )

}

export default LaunchList
