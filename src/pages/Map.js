/* eslint react/style-prop-object: 0 */
/* eslint react/prop-types: 0 */

// map
import Map, {
    Marker, Popup, NavigationControl, ScaleControl, GeolocateControl,
    FullscreenControl
} from 'react-map-gl'
import { useEffect, useMemo, useRef } from 'react';
import { Box, Card, Typography, CardContent, Button } from '@mui/material';
import { render } from 'react-dom';
import { BsPinFill } from "react-icons/bs";
import 'mapbox-gl/dist/mapbox-gl.css';
import places from './places.json'
import Image from '../components/Image';

export default function QMap({ setPopupInfo, popupInfo }) {
    const mapRef = useRef(null);

    useEffect(() => popupInfo ? mapRef.current.flyTo({ center: [popupInfo.coordinates[0], popupInfo.coordinates[1]], duration: 1000 }) : '', [popupInfo])

    const pins = useMemo(
        () =>
            places.map((place) => (
                <Marker key={place.placeName} longitude={place.coordinates[0]} latitude={place.coordinates[1]} anchor="bottom" >
                    <BsPinFill color="red" size={23} onClick={() => setPopupInfo(place)} />
                </Marker>
            )), [setPopupInfo])

    return (<Map
        ref={(ref) => { mapRef.current = ref; }}
        initialViewState={{
            longitude: 51.52556,
            latitude: 25.35926,
            zoom: 10
        }}
        style={{ width: '100%', height: '50vh' }}
        mapboxAccessToken="pk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYTc2NDMwYWRlM29wZzRqbTVqaDVrIn0.7-I9jUfnZ2TagYEF491H8g"
        mapStyle="mapbox://styles/mapbox/streets-v9"
    >
        <NavigationControl />
        <ScaleControl />
        <GeolocateControl />
        <FullscreenControl />
        {pins}

        {popupInfo && (
            <Popup
                anchor="bottom"
                longitude={popupInfo.coordinates[0]}
                latitude={popupInfo.coordinates[1]}
                closeOnClick={false}
                // closeOnMove
                onClose={() => setPopupInfo(null)}
            >
                <Card>
                    <CardContent>
                        <Typography
                            variant="subtitle2"
                        >
                            {popupInfo.placeName}
                        </Typography>
                    </CardContent>
                    <Box>
                        <Image alt="cover" src={popupInfo.img} ratio="4/3" />
                    </Box>
                    <Button onClick={()=>setPopupInfo(null)} variant="contained" style={{ width: '100%' }}>Close</Button>
                </Card>
            </Popup>
        )}
    </Map>)
}

export function renderToDom(container) {
    render(<QMap />, container);
}