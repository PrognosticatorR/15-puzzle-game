import React from "react";
import styled from "styled-components";
import GitHubIcon from "./GitHubIcon";

const FooterContent = styled.div`
  background-color: #f8f9fa;
  position: fixed;
  height: 80px;
  bottom: 0;
  width: 100%;
  color: rgb(0, 0, 0);
  padding-top: 10px;
  text-align: center;
  & .footerheart {
    color: #d4726a;
  }
  & .footerlink {
    text-decoration: none;
    color: #226666;
  }
`;

const Footer = () => (
  <FooterContent>
    <a
      href="https://github.com/react-puzzle-games/15-puzzle/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </a>
    <p>
      Made by{" "}
      <a
        className="footerlink"
        href="https://github.com/deveshrawat"
        rel="noopener noreferrer"
        target="_blank"
      >
        Devesh Rawat{" "}
      </a>{" "}
      with <span className="footerheart">♥</span>
    </p>
  </FooterContent>
);

export default Footer;
