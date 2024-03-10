import tomBarLogo from "../../images/tomBarLogo.png";

interface LogoProps {
  height?: string;
}

const TomBarLogo = ({ height }: LogoProps) => {
  return <img src={tomBarLogo} alt="logo" height={height ? height : "50px"} />;
};

export default TomBarLogo;
