import {styled} from "@mui/system";

const StyledH1 = styled('button')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),    
  }));


  export default StyledH1;
