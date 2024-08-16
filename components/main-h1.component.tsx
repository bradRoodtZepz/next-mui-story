import React from "react";
import StyledH1 from "./styled-h1.component";

interface MainH1Props {
    title: string;
}

const MainH1:React.FC<MainH1Props> = ({title}) => {
    return <StyledH1>{title}</StyledH1>
}

export default MainH1;