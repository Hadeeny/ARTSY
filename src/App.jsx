import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router >
      {/* <Header /> */}
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
