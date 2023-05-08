import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { css } from '@emotion/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Logo from '../images/logo.svg';

const menuItemCss = css`
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
  color: #0e1071;
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header css={css``}>
      <nav
        className="mx-auto flex max-w-7xl h-16 items-center p-1 lg:px-8"
        aria-label="Global"
        css={css`
          position: fixed;
          top: 40px;
          left: 20px;
          right: 20px;
          width: 100%;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(50px);
          border-radius: 60px;
        `}
      >
        <div
          className="flex"
          css={css`
            margin-right: 60px;
          `}
        >
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-lg leading-6" css={menuItemCss}>
            Features
          </a>
          <a href="#" className="text-lg leading-6" css={menuItemCss}>
            Marketplace
          </a>
          <a href="#" className="text-lg leading-6" css={menuItemCss}>
            Company
          </a>
        </Popover.Group>
      </nav>
    </header>
  );
}
