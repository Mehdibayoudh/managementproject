import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";
 import {BrowserRouter, Route, Routes} from "react-router-dom";
import Task from "./component/task";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";

function App() {
  return (
<>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Sidebar />}>
              {/* Nested route for Task */}
              <Route path="task" element={<Task />} />
              <Route path="dashboard" element={<Dashboard />} />
          </Route>

      </Routes>

</>
  );
}

export default App;
