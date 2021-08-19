import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

// 라우터 역할을 해주는 컴포넌트!
function Router() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
