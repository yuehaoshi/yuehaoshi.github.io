
import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken='pk.eyJ1IjoiYXNoaW1vb24iLCJhIjoiY2wxOWk3NHlqMDJnZTNjcXJjODVteHVydSJ9.6QtqtfqO2pOcn975BTqmvw';
// Sample data 
const Mapdata = [
	{
		"location": "Time Square",
		"city": "New York, US",
		"country": "US",
		"coordinates": [-73.9855,40.7580], // 40.7580° N, 73.9855° W
	},
	{
		"location": "The Spheres",
		"city": "Seattle, US",
		"country": "US",
		"coordinates": [-122.366699,47.638180], // 40.7580° N, 73.9855° W
	},
	{
		"location": "National Museum of Natural History",
		"city": "Washington, D.C., US",
		"country": "US",
		"coordinates": [-77.026703,38.891014],
	},
	{
		"location": "Willis Tower",
		"city": "Chicago, IL, US",
		"country": "US",
		"coordinates": [-87.635918,41.878876],
	},
    {
		"location": "Alma Mater",
		"city": "Champaign, IL, US",
		"country": "US",
		"coordinates": [-88.2434,40.1164],
	},
    {
		"location": "The Gateway Arch",
		"city": "St. Louis, MO, US",
		"country": "US",
		"coordinates": [-90.1868,38.6251],
	},
    {
		"location": "Stanford University",
		"city": "Stanford, CA, US",
		"country": "US",
		"coordinates": [-122.1697,37.4275],
	},
    {
		"location": "Changbai Mountain",
		"city": "Changbaishan, Jilin, China",
		"country": "China",
		"coordinates": [127.9656,41.7450],
	},
    {
		"location": "The Forbidden City",
		"city": "Beijing, China",
		"country": "China",
		"coordinates": [116.3907,39.9169],
	},
    {
		"location": "Tongji University",
		"city": "Shanghai, China",
		"country": "China",
		"coordinates": [121.4599,31.2627],
	},
    {
		"location": "Potala Palace",
		"city": "Lhasa, Tibet, China",
		"country": "China",
		"coordinates": [91.1186,29.6555],
	},
    {
		"location": "Lake Victoria",
		"city": "Kampala, Uganda",
		"country": "Uganda",
		"coordinates": [33.4384,-0.7558],
	},
    {
		"location": "Amsterdam Airport Schiphol",
		"city": "Amsterdam, North Holland, Netherlands",
		"country": "Netherlands",
		"coordinates": [4.7683,52.3105],
	},
    {
		"location": "Puná Island",
		"city": "Guayaquil, Guayas, Ecuador",
		"country": "Ecuador",
		"coordinates": [-80.1429,-2.8549],
	},
]

class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -74,
			lat: 40.7128,
			zoom: 1
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/dark-v10', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		Mapdata.forEach((location) => {
			console.log(location)
			new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 25 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'30vh'}}/>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans"
                    rel="stylesheet"
                />
                <link
                    href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
                    rel="stylesheet"
                />
			</div>
		)
	}
}

export default Mapp;