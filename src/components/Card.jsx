import { Image } from "../styles/Image.style";
import { CardWrapper } from "../styles/wrappers/CardWrapper.style";
import minhaImage from "../assets/images/avatar-jessica.jpeg";
import { NameWrapper } from "../styles/wrappers/NameWrapper.style";
import { Name } from "../styles/Name.style";
import { Location } from "../styles/Location.style";
import { Desc } from "../styles/Desc.style";
import { Link } from "../styles/Link.style";
import { LinkWrapper } from "../styles/wrappers/LinkWrapper.style";
import Button from "./Button";
import { useState } from "react";

const Card = () => {
  const [links, setLinks] = useState([
    {
      link: "#",
      site: "GitHub",
    },
    {
      link: "#",
      site: "FrontEnd Mentor",
    },
    {
      link: "#",
      site: "Linkedin",
    },
    {
      link: "#",
      site: "Twitter",
    },
    {
      link: "#",
      site: "Instagram",
    },
  ]);

  return (
    <CardWrapper>
      <Image src={minhaImage} />
      <NameWrapper>
        <Name>Jessica Randall</Name>
        <Location>London, United KingDom</Location>
      </NameWrapper>
      <Desc>"Front-end developer and avid reader."</Desc>
      <LinkWrapper>
        {links &&
          links.map((link, index) => (
            <Button key={index} link={link.link} site={link.site} />
          ))}
      </LinkWrapper>
    </CardWrapper>
  );
};

export default Card;
