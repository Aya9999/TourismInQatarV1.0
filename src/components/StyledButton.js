import { Button } from '@mui/lab';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 0,
  padding: '6px 40px',
  // Restricts the button's dimensions to a polygon,
  // points are defined as a percentage of the width from the left and
  // a percentage of heigth from the top.
  // This is used to achieve the < and > on the sides of the button.
  clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
}));

export default StyledButton;
