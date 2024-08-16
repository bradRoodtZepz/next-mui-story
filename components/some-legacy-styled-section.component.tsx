import { ReactNode } from "react"
import LegacyStyledSection from "./legacy-styled-section.component"

interface SomeLegacyStyledSectionProps {
    children: ReactNode;
}

const SomeLegacyStyledSection:React.FC<SomeLegacyStyledSectionProps> = ({children}) => {
    return <LegacyStyledSection>{children}</LegacyStyledSection>
}

export default SomeLegacyStyledSection;