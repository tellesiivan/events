import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/events" component={EventDashboard} exact />
          <Route path="/events/:id" component={EventDetailedPage} />
          <Route path={["/create", "/manage/:id"]} component={EventForm} />
        </Switch>
      </div>
    </>
  );
}

export default App;
