import { useState } from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <div className="main">
        <EventDashboard formState={{ setFormOpen, formOpen }} />
      </div>
    </>
  );
}

export default App;
