import React from 'react';

import logoGrande from '../../../assets/logo_completa.svg';
import logoPequena from '../../../assets/logo_1.svg';

interface LogoGrandeProps {
  width?: string;
  height?: string;
}

export const LogoGrande = (
  commomProps: LogoGrandeProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
): JSX.Element => {
  const { height } = commomProps;
  return (
    <div {...commomProps}>
      <img height={height || 30} src={logoGrande} alt="Gmill" />
    </div>
  );
};

export const LogoPequena = (
  commomProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
): JSX.Element => (
  <div {...commomProps}>
    <img width="30" src={logoPequena} alt="Gmill" />
  </div>
);
