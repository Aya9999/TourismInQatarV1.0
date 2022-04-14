import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import SvgBackground from '../../components/SvgBackground';
// sections
import { LoginForm } from '../../sections/auth/login';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 8),
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

// TODO: fix typography variants once theme has been established.
export default function Login() {
  return (
    <Page title="Login">
      <SvgBackground
        svgPath="/svgs/background_login.svg"
        sx={{
          backgroundImage: 'url(/svgs/login_top_right.svg), url(/svgs/login_bottom_left.svg)',
          backgroundPosition: 'top right, bottom left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '17vw auto, auto 70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="sm">
          <ContentStyle>
            <Logo />
            <Box>
              <Typography variant="body1">Sign in for the Host Country Media Center Accreditation</Typography>
            </Box>

            <Box sx={{ marginTop: '12px' }}>
              <LoginForm />
            </Box>

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?{' '}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Register Here
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
        <Typography variant="subtitle1">
          Copyrights © Supreme Committee for Delivery & Legacy 2022. All Rights Reserved
        </Typography>
      </SvgBackground>
    </Page>
  );
}
