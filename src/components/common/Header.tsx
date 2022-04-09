import * as React from 'react';
import styled from 'styled-components';
import avt from '../../assets/imgs/avt.png';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  position: sticky;
  background: #eff4ff;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Span = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 540;
  color: #333;
`;

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <HeaderStyle>
      <>
        <Img src={avt} alt="img-avt" />

        <Span>Dictionary Web App</Span>
      </>
    </HeaderStyle>
  );
}
