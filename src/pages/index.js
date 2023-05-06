import React from 'react';
import { css } from '@emotion/react';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <main>
      <Header />
      <div
        css={css`
          margin: 20px;
          background-color: #f6efff;
          width: 100%;
          border-radius: 45px;
          font-family: sans-serif;
          padding: 90px 80px;
        `}
      >
        <h1
          css={css`
            font-size: 56px;
            font-weight: 700;
            background: linear-gradient(104.1deg, #7735e8, #ba2df0, #c62cf1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Everything you need to build in Web3
        </h1>
        <p
          css={css`
            color: #5a6893;
            line-height: 1.5;
            font-size: 20px;
          `}
        >
          Build & scale your project with our comprehensive set of Web3 tools.
          <br />
          We provide wallet services, marketplace solutions, NFT tools, and
          more.
        </p>
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
          `}
        >
          View our services
        </button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
