import { styled } from "@mui/material";

const MainH1 = styled('button')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(4),    
  }));


  export default MainH1;
