import styled, { css } from "styled-components";
import { StylesType } from "@/types";

export const StyledButton = styled.button<StylesType>`
  position: relative;
  user-select: none;
  cursor: pointer;
  color: #eee;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  & span {
    position: relative;
    z-index: 1;
    display: block;
    padding: 10px;
    border-radius: 1000px;
    background-color: #d99d61;
    border: 1px solid darken(#d99d61, 5%);
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s, box-shadow 0.2s, background-color 0.2s;
  }
  &:after {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    border-radius: 1000px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2), inset 0 0 0px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.1s;
  }

  &:hover,
  &:focus {
    & span {
      background-color: lighten(#d99d61, 3%);
    }
  }
  &:active {
    & span {
      background-color: #d99d61;
      transform: scale(0.97);
      box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    &:after {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2),
        inset -3px 3px 1em rgba(0, 0, 0, 0.2);
    }
  }
`;
