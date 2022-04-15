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
// charts
import PChart from './charts/PearlChart'
// functions
import { typingAnimation, shakeElement } from './detailsFunctions'
import 'regenerator-runtime/runtime'

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
  const place = { id: 0, placeName: "The Pearl", desc: "The Pearl-Qatar is a destination of choice offering its residents and visitors an integrated leisure experience. On this fascinating Island, luxury living blends with lively shopping and entertainment, and scenic backdrops are complemented by a thriving community lifestyle, making The Pearl-Qatar a true living wonder…", img: ['https://thepearlqatar.com/-/media/Thepearlqatar/ExploreTheIsland2019/QQ-2.jpg', 'https://www.myholidays.com/blog/content/images/2020/11/The-Pearl-Qatar-1.jpg', 'https://mycoreo.com/wp-content/uploads/2014/05/the-pearl-qatar-650.jpg', 'https://www.regencyholidays.com/blog/content/images/2021/06/Interesting-Things-To-Know-About-Pearl-Qatar.jpg'] }

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
                <Button id="clickMe" onClick={() => typingAnimation("placeName",place)}>Click Me!</Button>
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
                          <PChart place={place}/>
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
