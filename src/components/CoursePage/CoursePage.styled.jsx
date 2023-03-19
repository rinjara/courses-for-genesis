import { styled } from '@mui/material/styles';

export const Wrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  flexGrow: 1,
  padding: theme.spacing(3),
  paddingTop: 64,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerwidth,
  }),
}));
