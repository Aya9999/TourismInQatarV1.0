
// token: sk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYWJtZmQwN2U4M2xzMHZ6bWJ6NXVxIn0.Dir6AiSvYeuJjslEyCXcfQ

// import orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
// @mui
import { Box, Link, Card, Avatar, Typography, CardContent, Stack, Grid, Button, Container, TextField } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import Image from '../components/Image';
import SvgIconStyle from '../components/SvgIconStyle';
// utills
import { fDate } from '../utils/formatTime';
// map 
import QMap from './Map'

// routes

// ----------------------------------------------------------------------

HomePage.propTypes = {
  index: PropTypes.number,

};
export default function HomePage({ index }) {
  const { themeStretch } = useSettings();

  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(["#EBD168", "#A81818"])
  const [textColor, setTextColor] = useState(["#A81818", "#EBD168"])
  const [filters, setFilters] = useState('latest');
  const [popupInfo, setPopupInfo] = useState(null)
  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;
  const linkTo = '/';


  const [viewMap, setViewMap] = useState(true)

  useEffect(() => {
    createPlaces();

  }, []);

  const createPlaces = () => {
    const places = [
      {
        id: 0,
        placeName: "The Pearl",
        coordinates: [51.55148, 25.36875],
        img: "https://thepearlqatar.com/-/media/Thepearlqatar/ExploreTheIsland2019/QQ-2.jpg"
      },
      {
        id: 1,
        placeName: "Souq Waqif",
        coordinates: [51.53280, 25.28840],
        img: "http://cdn.cnn.com/cnnnext/dam/assets/180122165928-souq-waqif--by-dimitris-sideridis.jpg"
      },
      {
        id: 2,
        placeName: "Musherib",
        coordinates: [51.52723, 25.28148],
        img: "https://www.myholidays.com/blog/content/images/2021/04/Why-Visit-Msheireb-Downtown-Doha.jpg"
      },
      {
        id: 3,
        placeName: "Lusail",
        coordinates: [51.53004, 25.42068],
        img: "https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Lusail-in-Qatar1.jpg"
      },
      {
        id: 4,
        placeName: "Katara",
        coordinates: [51.52556, 25.35926],
        img: "https://www.accessibleqatar.com/wp-content/uploads/2016/05/katara_photo_big_2.jpg"
      },
      {
        id: 5,
        placeName: "Cournish",
        coordinates: [51.51933, 25.30795],
        img: "https://lp-cms-production.imgix.net/2019-06/f868443201b1370e5faa91e332e47ef8-al-corniche.jpg"
      }
    ];
    setPlaces(places);
    // changeCardColor()

  };

  const changeCardColor = () => {
    for (let i = 0; i < 6; i += 1) {

      if (backgroundColor[0] === "#EBD168") {
        setBackgroundColor(["#A81818", '#EBD168'])
        setTextColor(["#EBD168", "#A81818"])
      }
      else {
        setBackgroundColor(["#EBD168", "#A81818"])
        setTextColor(["#A81818", '#EBD168'])

      }
    }
    // setInterval(clickButton, 10000)
  };
  const clickButton = () => {
    document.getElementById("changeColor").click()
  }
  const shuffle = () => {
    const places1 = places
    const newArrengement = []
    let currentIndex = places.length
    let randomIndex;


    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      newArrengement.push(places1[randomIndex])
      places1.splice(randomIndex, 1)
      currentIndex -= 1
    }
    setPlaces(newArrengement)
  }
  const handleSearch = () => {
    if (search.length > 0) {

      const searchPlaces = places.filter(place => place.placeName.toLowerCase().includes(search.toLowerCase()))

      setPlaces(searchPlaces)
    }
    else {
      createPlaces()
    }
  }

  const showOnMap = (place) => {
    setPopupInfo(place)
    if(!viewMap){
      setViewMap(true)
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function testViewMap () {
    setViewMap(false)
    return viewMap == false
  }

  return (
    <Page title="Home Page">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <TextField lable="Search" value={search} onChange={val => setSearch(val.target.value)} />
        <Button id="searchNow" onClick={handleSearch}>search</Button>
        <Button id="changeColor" onClick={changeCardColor}>change color</Button>
        <Button id="shuffle" onClick={shuffle}>shuffle cards</Button>
        <Button onClick={() => setViewMap(!viewMap)}>View Map</Button>

        <Grid container spacing={3}>
          <Grid key="map" item hidden={!viewMap} xs={12}>
            <QMap setPopupInfo={setPopupInfo} popupInfo={popupInfo} />
          </Grid>
          {places.map((place, index) => (
            <Grid key={place.id} item xs={12} sm={6} md={4}>
              <Card
                id={`card${place.id}`}
                sx={{
                  backgroundColor: `${backgroundColor[index % 2]}`,
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Image alt="cover" src={place.img} ratio="4/3" />
                </Box>
                <CardContent
                  sx={{
                    pt: 4.5,
                    width: 1,
                    ...((latestPostLarge || latestPostSmall) && {
                      pt: 0,
                      zIndex: 9,
                      bottom: 0,
                      position: 'absolute',
                      color: 'common.white',
                    }),
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    sx={{
                      color: `${textColor[index % 2]}`,
                      fontSize: '18px',
                      ...((latestPostLarge || latestPostSmall) && {
                        opacity: 0.64,
                        color: 'common.white',
                      }),
                    }}
                  >
                    {place.placeName}
                  </Typography>
                  <Button sx={{
                    color: `${textColor[index % 2]}`,
                    ...((latestPostLarge || latestPostSmall) && {
                      opacity: 0.64,
                      color: 'common.white',
                    }),
                  }} onClick={() => showOnMap(place)}>Show on Map</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
