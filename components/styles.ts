import { SxProps, Theme } from '@mui/material/styles';

export const buttonStyle: SxProps<Theme> = (theme: Theme)  => ({
  backgroundColor: '#aaDFDD',
  color: theme.palette.primary.main,
  padding: theme.spacing(5)
});

