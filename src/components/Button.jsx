import React from "react";
import { Link } from "../styles/Link.style";

const Button = ({ link, site }) => {
  return (
    <Link href={link} target="_blank">
      {site}
    </Link>
  );
};

export default Button;
