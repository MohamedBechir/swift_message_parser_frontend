import { memo } from 'react';
import styled from 'styled-components';

interface Props {}

export const Footer = memo((props: Props) => {
  return <CustomFooter></CustomFooter>;
});

const CustomFooter = styled.footer`
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
`;
