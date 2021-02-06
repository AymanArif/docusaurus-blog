import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {

  faMedium,  
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Follow me here: </h3>

      <div className="social-leaf">
      <a
        href="https://github.com/aymanapatel"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
  href="https://www.linkedin.com/in/aymanapatel"
  className="linkedin social"
>
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href="https://www.twitter.com/aymanapatel" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://medium.com/@aymanarif"
  className="github social"
>
  <FontAwesomeIcon icon={faMedium} size="2x" />
</a>
<a
  href="https://gitlab.com/aymanapatel"
  className="gitlab social"
>
  <FontAwesomeIcon icon={faGitlab} size="2x" />
</a>
</div>
    </div>

  );
}
