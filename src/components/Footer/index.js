import React from "react";

function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      link: "https://github.com/dirtydenny",
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/denny-allen-47b978210/",
      name: "Linkedin",
    },
    {
      link: "https://www.facebook.com/denny.allen.94",
      name: "Facebook",
    },
  ];

  return (
    <footer className="text-center flex-row">
      <div className="pb-3">
        {icons.map((icon) => (
          <a
            className="px-3 "
            href={icon.link}
            key={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.name}
          </a>
        ))}
      </div>
      <p>
        {" "}
        Copyright © 2023. All rights reserved. No part of this website may be
        reproduced, distributed, or transitted in any form or by any means.
      </p>
    </footer>
  );
}

export default Footer;
