import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 헤더 컴포넌트!
const HeaderComponent = ({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/movie"}>
          <SLink to="/movie">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
};

// export 하는 건 다른 컴포넌트(헤더)가 안에 있는 withRouter
// 리액트앱의 라우터를 연결하게 되면 그 결과 라우터가 history api에 접근할 수 있게 되며 각각의 Route와 연결된 컴포넌트에 props로 match, location, history라는 객체를 전달하게 된다.
export default withRouter(HeaderComponent);
