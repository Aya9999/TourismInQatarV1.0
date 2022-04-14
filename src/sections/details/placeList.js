import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// components
import { SkeletonProductItem } from '../../../../components/skeleton';
//
import PlaceCard from './placeCard';

// ----------------------------------------------------------------------

PlaceList.propTypes = {
    places: PropTypes.array.isRequired,
    loading: PropTypes.bool,
};

export default function PlaceList({ places, loading }) {

    places = [{ id: 0, placeName: "The Pearl", img: 'https://thepearlqatar.com/-/media/Thepearlqatar/ExploreTheIsland2019/QQ-2.jpg' },
    { id: 1, placeName: "Souq Waqif", img: 'http://cdn.cnn.com/cnnnext/dam/assets/180122165928-souq-waqif--by-dimitris-sideridis.jpg' },
    { id: 2, placeName: "Musherib", img: 'https://www.myholidays.com/blog/content/images/2021/04/Why-Visit-Msheireb-Downtown-Doha.jpg' },
    { id: 3, placeName: "Lusail", img: 'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Lusail-in-Qatar1.jpg' },
    { id: 4, placeName: "Katara", img: 'https://www.accessibleqatar.com/wp-content/uploads/2016/05/katara_photo_big_2.jpg' },
    { id: 5, placeName: "Cournish", img: 'https://lp-cms-production.imgix.net/2019-06/f868443201b1370e5faa91e332e47ef8-al-corniche.jpg' }]

    return (
        <Box
            sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
            }}
        >
            {places.map((place) =>
                place ? <PlaceCard key={place.id} place={place} /> : <SkeletonProductItem key={place.id} />
            )}
        </Box>
    );
}
