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
import GCPLogo from '../images/gcp.png';
import KubernetisLogo from '../images/kubernetis.png';
import TerraformLogo from '../images/terraform.png';
import VueLogo from '../images/vue.svg';
import PythonLogo from '../images/python.png';
import DataDogLogo from '../images/datadog.png';
import PostgreSQLLogo from '../images/postgresql.png';
import MavenLogo from '../images/maven.png';
import GradleLogo from '../images/gradle.png';
import FlyWayLogo from '../images/flyway.svg';
import NodeLogo from '../images/node.png';
import JenkinsLogo from '../images/jenkins.png';
import CircleCILogo from '../images/circle_ci.png';
import MongoDBLogo from '../images/mongo.png';
import WebpackLogo from '../images/webpack.png';
import NewRelicLogo from '../images/new_relic.png';
import CucumberLogo from '../images/cucumber.png';
import MySQLLogo from '../images/mysql.png';

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
          flex-wrap: wrap;
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
        <Skill>
          <img src={GCPLogo} css={css``} />
        </Skill>
        <Skill>
          <img src={KubernetisLogo} />
        </Skill>
        <Skill>
          <img src={TerraformLogo} />
        </Skill>
        <Skill>
          <img src={VueLogo} />
        </Skill>
        <Skill>
          <img src={PythonLogo} />
        </Skill>
        <Skill>
          <img src={DataDogLogo} />
        </Skill>
        <Skill>
          <img src={PostgreSQLLogo} />
        </Skill>
        <Skill>
          <img
            src={MavenLogo}
            css={css`
              width: 90px;
            `}
          />
        </Skill>
        <Skill>
          <img src={GradleLogo} />
        </Skill>
        <Skill>
          <img
            src={FlyWayLogo}
            css={css`
              width: 50px;
            `}
          />
        </Skill>
        <Skill>
          <img src={NodeLogo} />
        </Skill>
        <Skill>
          <img src={JenkinsLogo} />
        </Skill>
        <Skill>
          <img src={CircleCILogo} />
        </Skill>
        <Skill>
          <img src={WebpackLogo} />
        </Skill>
        <Skill>
          <img src={MongoDBLogo} />
        </Skill>
        <Skill>
          <img src={NewRelicLogo} />
        </Skill>
        <Skill>
          <img src={CucumberLogo} />
        </Skill>
        <Skill>
          <img src={MySQLLogo} />
        </Skill>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
