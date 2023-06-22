import styled from "styled-components";
import { Popover, Tab } from "@headlessui/react";

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
`;

export const HeaderBanner = styled.p`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  height: 2.5rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const MainNav = styled.nav`
  position: relative;
  z-index: 20;
  background-color: #ffffff;
  --bg-opacity: 0.9;
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
    var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
    var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
    var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
    var(--tw-backdrop-sepia);
  backdrop-filter: blur(24px);
`;

export const MainNavListWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const MainNavFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
`;

export const MainNavLogoWrapper = styled.div`
  display: flex;
  margin-left: 1rem;

  @media (min-width: 1024px) {
    margin-left: 0;
  }

  img {
    width: auto;
    height: 2rem;
  }
`;

export const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;