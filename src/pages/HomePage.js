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

// ----------------------------------------------------------------------

HomePage.propTypes = {
  index: PropTypes.number,
};
export default function HomePage({ index }) {
  const { themeStretch } = useSettings();

  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [backgroundColor, setBackgroundColor]=useState(["#EBD168","#A81818"] )
  const [textColor, setTextColor]=useState(["#A81818", "#EBD168"])
  const [filters, setFilters] = useState('latest');
  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;
  const linkTo = '/';

  useEffect(() => {
    createPlaces();

  }, []);

  const createPlaces = () => {
    const places = [
      {
        id: 0,
        placeName: 'The Pearl',
        img: 'https://thepearlqatar.com/-/media/Thepearlqatar/ExploreTheIsland2019/QQ-2.jpg',
      },
      {
        id: 1,
        placeName: 'Souq Waqif',
        img: 'http://cdn.cnn.com/cnnnext/dam/assets/180122165928-souq-waqif--by-dimitris-sideridis.jpg',
      },
      {
        id: 2,
        placeName: 'Musherib',
        img: 'https://www.myholidays.com/blog/content/images/2021/04/Why-Visit-Msheireb-Downtown-Doha.jpg',
      },
      {
        id: 3,
        placeName: 'Lusail',
        img: 'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Lusail-in-Qatar1.jpg',
      },
      {
        id: 4,
        placeName: 'Katara',
        img: 'https://www.accessibleqatar.com/wp-content/uploads/2016/05/katara_photo_big_2.jpg',
      },
      {
        id: 5,
        placeName: 'Cournish',
        img: 'https://lp-cms-production.imgix.net/2019-06/f868443201b1370e5faa91e332e47ef8-al-corniche.jpg',
      },
    ];
    setPlaces(places);
    // changeCardColor()

  };

  const changeCardColor = () => {
    for(let i=0; i<6; i+=1){

      if(backgroundColor[0]==="#EBD168"){
        setBackgroundColor(["#A81818",'#EBD168'])
        setTextColor(["#EBD168","#A81818"])
      }
      else{
        setBackgroundColor(["#EBD168","#A81818"])
        setTextColor(["#A81818",'#EBD168'])
      
      }}
      // setInterval(clickButton, 10000)
  };
  const clickButton=()=>{
    document.getElementById("changeColor").click()
  }
  const shuffle=()=> {
    const places1= places
    const newArrengement=[]
    let currentIndex = places.length
    let randomIndex;


    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      newArrengement.push(places1[randomIndex])
      places1.splice(randomIndex, 1)
      currentIndex-=1
    }
    setPlaces(newArrengement)
  }
  const handleSearch=()=>{
    if(search.length>0){
    
    const searchPlaces=places.filter(place=>place.placeName.toLowerCase().includes(search.toLowerCase()))
    
    setPlaces(searchPlaces)
    }
  else{
    createPlaces()
  }  }
  return (
    <Page title="Home Page">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <TextField lable="Search" value={search} onChange={val=>setSearch(val.target.value)}/>
        <Button id="searchNow"onClick={handleSearch}>search</Button>
        <Button id="changeColor" onClick={changeCardColor}>change color</Button>
        <Button id="shuffle" onClick={shuffle}>shuffle cards</Button>

        <Grid container spacing={3}>
          {places.map((place, index) => (
            <Grid key={place.id} item xs={12} sm={6} md={4}>
              <Card
                id={`card${place.id}`}
                sx={{
                  backgroundColor: `${backgroundColor[index%2]}`,
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
                      color: `${textColor[index%2]}`,
                      fontSize: '18px',
                      ...((latestPostLarge || latestPostSmall) && {
                        opacity: 0.64,
                        color: 'common.white',
                      }),
                    }}
                  >
                    {place.placeName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
