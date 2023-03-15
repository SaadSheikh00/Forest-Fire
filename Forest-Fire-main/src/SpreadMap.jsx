/* eslint-disable */
import { Map, GoogleApiWrapper, Polygon, Marker} from "google-maps-react";
import './SpreadMap.css'

const SimpleMap = (locations, start) => {
    let temp = locations["locations"]
    if (temp === ''){
        return (
            <div style={{ height: '50vh', width: '100%' }}>
            </div>
        );
    }
    else {
        let temp2 = []
        {Object.values(temp).map((value) => {
            let temp3 = {}
            temp3["lat"] = value[1]
            temp3["lng"] = value[0]
            temp2.push(temp3)
        })}
        let url = "http://maps.google.com/mapfiles/ms/icons/";
        url += "firedept.png";
        return (
            <div style={{ height: '100vh', width: '27vh' }}>
            <Map style={{ height: 'auto', width: 'auto'}}
                google={google}
                initialCenter={{
                    lat: temp2[0].lat, 
                    lng: temp2[0].lng
                }}
                defaultCenter={{ lat: temp2[0].lat, lng: temp2[0].lng}}
                defaultZoom={1}
            >
            <Marker
                position = {{
                lat: start[0],
                lng: start[1]
                }}
                icon = {{
                    url:url,
                    scaledSize: new google.maps.Size(15, 15)
                }}
            />
            <Polygon
            paths= {temp2}
            strokeColor= "#FF0000"
            strokeOpacity= {0.8}
            strokeWeight= {2}
            fillColor= "#FF0000"
            fillOpacity= {0.35}
            />
            </Map>
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyAghkx61FRH1BREoHHWjMI64pZcCiL56SU",
})(SimpleMap);
