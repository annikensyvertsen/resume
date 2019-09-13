import React from "react";
import { NavbarButton } from "../styles/navbarbutton";
import { Flex } from "../styles/flex";
import { backgroundColor } from "../styles/theme";
import styled from "styled-components";

export const Header = ({ page, setPage }) => {
  return (
    <div className="headerWrapper" style={{ backgroundColor: backgroundColor }}>
      <Flex mx="s" justifyContent="space-between">
        <NavbarButton mx="s" my="s" onClick={() => setPage("content")}>
          a.
        </NavbarButton>
        <Flex justifyContent="flex-end">
          <NavbarButton page={page} mx="m" onClick={() => setPage("bio")}>
            bio
          </NavbarButton>
          <NavbarButton
            page={page}
            mx="m"
            onClick={() => setPage("experience")}
          >
            experience
          </NavbarButton>
          <NavbarButton page={page} mx="m" onClick={() => setPage("cv")}>
            CV
          </NavbarButton>
          <NavbarButton page={page} mx="m" onClick={() => setPage("contact")}>
            contact
          </NavbarButton>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
