import React from "react";
import { Link } from "gatsby";

// import imgL1Logo from "../../assets/image/png/l1-logo.png";
// import imgL1LogoWhite from "../../assets/image/png/logo-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {white ? (
        <h3 style={{color:"white"}}>zapezzy</h3>
      ) : (
        <h3 style={{color:"black"}}>zapezzy</h3>
      )}
    </Link>
  );
};

export default Logo;
