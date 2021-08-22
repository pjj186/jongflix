import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import Header from "Components/Header";
import Home from "Routes/Home";

// 라우터 역할을 해주는 컴포넌트!
function Router() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/show/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
