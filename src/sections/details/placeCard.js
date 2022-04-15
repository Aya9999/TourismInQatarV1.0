/* eslint no-restricted-globals:0 */

import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import { ColorPreview } from '../../../../components/color-utils';

// ----------------------------------------------------------------------

PlaceCard.propTypes = {
    place: PropTypes.object,
};

export default function PlaceCard({ place }) {
    const { id, placeName, img } = place;
    //   const { name, cover, price, colors, status, priceSale } = place;

    const linkTo = PATH_DASHBOARD.eCommerce.view(paramCase(name));

    return (
        <Card>
            <Box sx={{ position: 'relative' }}>
                {/* {<Label
                    variant="filed"
                    // color={(status === 'sale' && 'error') || 'info'}
                    sx={{
                        top: 16,
                        right: 16,
                        zIndex: 9,
                        position: 'absolute',
                        textTransform: 'uppercase',
                    }}
                >
                    {placeName}
                </Label>
                } */}
                <Image alt={placeName} src={img} ratio="1/1" />
            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
                <Link to={linkTo} color="inherit" component={RouterLink}>
                    <Typography variant="subtitle2" noWrap>
                        {placeName}
                    </Typography>
                </Link>

                {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <ColorPreview colors={colors} /> */}

                    {/* <Stack direction="row" spacing={0.5}>
                        {priceSale && (
                            <Typography component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                                {fCurrency(priceSale)}
                            </Typography>
                        )} */}

                        {/* <Typography variant="subtitle1">{fCurrency(price)}</Typography> */}
                    {/* </Stack>
                </Stack> */}
            </Stack>
        </Card>
    );
}
