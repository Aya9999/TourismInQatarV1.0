import PropTypes from 'prop-types';

import { Box } from '@mui/material';

SvgBackground.propTypes = {
  svgPath: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function SvgBackground({ svgPath, children, ...boxProps }) {
  return (
    <Box
      {...boxProps}
      sx={{
        backgroundImage: `url(${svgPath})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        ...boxProps?.sx,
      }}
    >
      {children}
    </Box>
  );
}

export default SvgBackground;
