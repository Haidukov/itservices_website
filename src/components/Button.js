import React from 'react';
import { css } from '@emotion/react';

const Button = ({ children }) => (
  <button
    css={css`
      margin-top: 20px;
      background: linear-gradient(
        104.1deg,
        #7735e8 32.26%,
        #ba2df0 80.02%,
        #c62cf1 88.17%
      );
      color: white;
      border-color: #0e1071;
      font-size: 18px;
      font-weight: 600;
      transition: #0f0644 0.5s ease, #420084 0.5s ease;
      width: 215px;
      height: 59px;
      border-radius: 60px;
      &:hover {
        background: -moz-linear-gradient(
          104.1deg,
          #c62cf1 11.38%,
          #ba2df0 19.98%,
          #7735e8 67.74%
        );
        background: -webkit-linear-gradient(
          104.1deg,
          #c62cf1) 11.38%,
          #ba2df0 19.98%,
          #7735e8 67.74%
        );
        background: linear-gradient(
          104.1deg,
          #c62cf1 11.38%,
          #ba2df0 19.98%,
          #7735e8 67.74%
        );
      }
    `}
  >
    {children}
  </button>
);

export default Button;
