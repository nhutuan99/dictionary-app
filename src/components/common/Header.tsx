import * as React from 'react';
import styled from 'styled-components';
import avt from '../../assets/imgs/avt.png';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: sticky;
  background: #000;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  padding: 20px 0;
  width: 70px;
  height: 70px;
`;

const Span = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <HeaderStyle>
      <>
        <Img src={avt} alt="img-avt" />

        <Span>Dictionary App</Span>
      </>
    </HeaderStyle>
  );
}
