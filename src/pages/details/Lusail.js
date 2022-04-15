import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Tab, Card, CardContent, Grid, Divider, Container, Typography, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// redux
import {  useSelector } from '../../redux/store';
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
// functions
import { typingAnimation, shakeElement } from './detailsFunctions'

// charts
import LChart from './charts/LusailChart'

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
  const place = { id: 3, placeName: "Lusail", desc: "Lusail is a planned city in Qatar, located on the coast, in the southern part of the municipality of Al Daayen. Lusail is located about 23 kilometres (14 mi) north of the city centre of Doha, just north of the West Bay Lagoon, on over 38 square kilometres (15 sq mi) and will eventually have the infrastructure to accommodate 450,000 people. Of these 450,000 people, it is estimated that 250,000 or fewer will be residents, 190,000 will be office workers and 60,000 will be retail workers.It is planned to have marinas, residential areas, island resorts, commercial districts, luxury shopping and leisure facilities, and a golf course community, man made islands and several entertainment districts. Construction is still ongoing. Development is being carried out by the state-controlled developer Qatari Diar along with Parsons Corporation and Dorsch-Gruppe.It is one of the proposed venues for the Qatar 2022 World Cup is the Lusail Iconic Stadium. It is also the site of the Formula One race track and the First Doha Grand Prix was held here in 2021. ", img: ['https://www.timeoutdoha.com/cloud/timeoutdoha/2022/02/17/Lusail-Marina-Promenade.jpg', 'https://www.hospitalitynet.org/picture/xxl_153123921.jpg?t=1613469924', 'https://www.visitqatar.qa/content/dam/things-to-do/popular-attractions-/lusail/_DSC0903.jpg/_jcr_content/renditions/medium-1280px.jpeg', 'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Lusail-in-Qatar1.jpg'] }
  
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
                          <LChart place={place}/>
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
