import React from 'react';
import { css } from '@emotion/react';
import Header from '../components/Header';
import Button from '../components/Button';
import Skill from '../components/Skill';
import ReactLogo from '../images/react.png';
import JavaLogo from '../images/java.png';
import SpringBootLogo from '../images/spring_boot.png';
import AngularLogo from '../images/angular.png';
import DockerLogo from '../images/docker.png';
import AWSLogo from '../images/aws.png';

const IndexPage = () => {
  return (
    <main>
      <Header />
      <div
        css={css`
          margin-top: 20px;
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
        <Button>View our services</Button>
      </div>
      <div
        css={css`
          display: flex;
          overflow: hidden;
          margin: 20px 60px;
        `}
      >
        <Skill>
          <img src={ReactLogo} />
        </Skill>
        <Skill>
          <img src={JavaLogo} />
        </Skill>
        <Skill>
          <img src={SpringBootLogo} />
        </Skill>
        <Skill>
          <img src={AngularLogo} />
        </Skill>
        <Skill>
          <img src={DockerLogo} />
        </Skill>
        <Skill>
          <img
            src={AWSLogo}
            css={css`
              margin-top: 10px;
              width: 60px;
            `}
          />
        </Skill>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
