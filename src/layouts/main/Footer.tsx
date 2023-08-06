// next
import NextLink from 'next/link';
// @mui
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// _mock
import { _socials } from '../../_mock/arrays';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Quick Links',
    children: [
      { name: 'Home', href: PATH_PAGE.home },
      { name: 'Shop', href: PATH_PAGE.shop },
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Privacy Policy', href: PATH_PAGE.privacy },
      { name: 'Cookie Policy', href: PATH_PAGE.cookie },
      { name: 'Terms and Condition', href: PATH_PAGE.terms },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: '+977 9840030835', href: 'tel:9840030835' },
      { name: 'dmerce.np@gmail.com', href: 'mailto:dmerce.np@gmail.com' },
      { name: 'Kalanki, Kathmandu', href: '#' },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Discover, Rent, and Buy the Ultimate Online Condos adventure with Confidence
              and Convenience!
            </Typography>

           
          </Grid>

          
        </Grid>
        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 1,
            textAlign: { xs: 'center', md: 'center' },
          }}
        >
          © CondoMonk {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}
