import React, { useEffect, Suspense } from "react";
import UserSession from "../../auth/UserSession";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import FormPage from "../../features/events/eventForm/FormPage";
import SkeletonMain from "../../helpers/skeleton/SkeletonMain";

function App() {
  const { key } = useLocation(); // unique key to rerender

  return (
    <>
      <NavBar />
      <div className="main">
        <Suspense fallback={<SkeletonMain />}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/events" component={EventDashboard} exact />
            <Route path="/events/:id" component={EventDetailedPage} />
            <Route
              path={["/create", "/manage/:id"]}
              component={FormPage}
              key={key}
            />
            <Route path="/ske" component={SkeletonMain} />
            <Route path="/user/:userid" component={EventForm} />
            <Route path="/signup" component={UserSession} />
            <Route path="/login" component={UserSession} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
