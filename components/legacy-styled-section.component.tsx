import { makeStyles } from "@mui/styles";

import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

const useStyles = makeStyles(() => ({
    section: {
        backgroundColor: 'red',
        padding: '20px',
        color: 'green'
    },
}));


const LegacyStyledSection: React.FC<Props> = ({children}) => {
    const classes = useStyles();
    return (
        <section className={classes.section}>
        {children}
        </section>
    )    
}

export default LegacyStyledSection;