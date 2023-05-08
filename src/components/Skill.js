import React from 'react';
import { css } from '@emotion/react';

const Skill = ({ children }) => (
  <div
    css={css`
      display: flex;
      padding: 15px 20px;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 80px;
      background: white;
      border-radius: 20px;
      box-shadow: 0px 4px 100px rgba(159, 150, 178, 0.14);
      border: 1px solid rgba(0, 0, 0, 0.05);
      margin-right: 5px;
    `}
  >
    {children}
  </div>
);

export default Skill;
