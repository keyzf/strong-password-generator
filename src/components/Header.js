import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: relative;
  overflow: hidden;
  background: #4b706a;
  > h1 {
    font-size: 2rem;
    line-height: 1.2;
    color: #fff;
    padding: 2.4rem 0;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 0 0 6px #9e9e9e;
  }
  .ribbon-wrapper {
    width: 85px;
    height: 88px;
    overflow: hidden;
    position: absolute;
    top: -3px;
    left: -3px;
    .ribbon {
      text-align: center;
      position: relative;
      padding: 8px 0;
      transform: rotate(-45deg);
      font-size: 0.8rem;
      font-weight: 800;
      top: 15px;
      left: -30px;
      width: 120px;
      background-color: #318800;
      color: #fff;
    }
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <h1>strong passwords generator</h1>
      <div className="ribbon-wrapper">
        <div className="ribbon">ONLINE</div>
      </div>
    </Wrapper>
  );
}
