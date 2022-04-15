import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Tab, Card, CardContent, Grid, Divider, Container, Typography, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// redux
import { useSelector } from '../../redux/store';
import { getProduct, addCart, onGotoStep } from '../../redux/slices/product';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import Markdown from '../../components/Markdown';
import { SkeletonProduct } from '../../components/skeleton';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import PlaceDetailsCarousel from '../../sections/details/placeCarousel';
// Chart
import SChart from './charts/SouqChart'
// functions
import { typingAnimation, shakeElement } from './detailsFunctions'

// ----------------------------------------------------------------------

const PRODUCT_DESCRIPTION = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'ic:round-verified',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'eva:clock-fill',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'ic:round-verified-user',
  },
];

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  justifyContent: 'center',
  height: theme.spacing(8),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
}));

// ----------------------------------------------------------------------

export default function PearlDetails() {
  const { themeStretch } = useSettings();
  const [value, setValue] = useState('1');
  const { name = '' } = useParams();
  const place = { id: 1, placeName: "Souq Waqif", desc: 'If you are looking for a wonderful place to shop, to dine, to explore or simply sitting at one of the many attractive outdoor cafe to watch the world pass by, look nowhere but Souq Waqif in Doha.For centuries,this location has been a souq for Bedouin (nomads who have historically inhabited the Arabian and Syrian Deserts.) to take the wool and animals to trade for daily necessities.  With time pass, the souq started to run down and has almost get to the point of being demolished.  Luckily, in 2004, it was decided to preserve this historical site so the entire market area has been renovated and restored according to the traditional Qatari architectural techniques.  It’s probably the only traditional souq left in the Gulf.', img: ['http://cdn.cnn.com/cnnnext/dam/assets/180122165928-souq-waqif--by-dimitris-sideridis.jpg', 'https://lp-cms-production.imgix.net/2019-06/5d98988e6f9bfc4ae173ae9762705e11-souq-waqif.jpg', 'https://www.visitqatar.qa/content/dam/visitqatar/img/13-things-to-do/C.jpg/_jcr_content/renditions/medium-1280px.jpeg', 'https://www.marhaba.qa/wp-content/uploads/2017/08/Souq-Waqif-Pigeons.jpg'] }

  window.addEventListener('click', shakeElement)

  return (
    <Page title={place.placeName}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box
          sx={{
            width: window.width,
            height: 60,
            backgroundColor: 'rgba(52, 52, 52, 0.0)',
          }}
        />
        {place &&
          <>
            <Card id="card">
              <CardContent>
                <Typography id="placeName" sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
                  { }
                </Typography>
                <Button onClick={() => typingAnimation("placeName", place)}>Click Me!</Button>
              </CardContent>
            </Card>
            <Card>
              <Grid id="grid" container>
                <Grid item xs={12} md={6} lg={5}>
                  <PlaceDetailsCarousel place={place} />
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                  <Card id="card2">
                    <TabContext id="tab" value={value}>
                      <Box sx={{ px: 3, bgcolor: 'background.neutral' }}>
                        <TabList onChange={(e, value) => setValue(value)}>
                          <Tab disableRipple value="1" label="Description" />
                          <Tab disableRipple value="2" label="Others" />
                        </TabList>
                      </Box>

                      <Divider />

                      <TabPanel value="1">
                        <Box sx={{ p: 3 }}>
                          <Markdown children={place.desc} />
                        </Box>
                      </TabPanel>
                      <TabPanel value="2">
                        <Box sx={{ p: 3 }}>
                          <SChart place={place}/>
                        </Box>
                      </TabPanel>
                    </TabContext>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </>
        }

        {!place && <SkeletonProduct />}

      </Container>
    </Page>
  );
}
