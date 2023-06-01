import { lazy, Suspense } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

// Lazy loaded
const A = lazy(() => import("./pages/A"));
const B = lazy(() => import("./pages/B"));
const C = lazy(() => import("./pages/C"));
const D = lazy(() => import("./pages/D"));

// Not lazy loaded
import E from "./pages/E";

const Loader = () => {
  return <span>Loading ...</span>;
};

function App() {
  return (
    <Router>
      <div className="top-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/a">Route A</NavLink>
        <NavLink to="/b">Route B</NavLink>
        <NavLink to="/c">Route C</NavLink>
        <NavLink to="/d">Route D</NavLink>
        <NavLink to="/e">Route E</NavLink>
      </div>
      <main>
        <div>Hello World</div>
        <Routes>
          <Route
            path="/a"
            element={
              <Suspense fallback={<Loader />}>
                <A />
              </Suspense>
            }
          />
          <Route
            path="/b"
            element={
              <Suspense fallback={<Loader />}>
                <B />
              </Suspense>
            }
          />
          <Route
            path="/c"
            element={
              <Suspense fallback={<Loader />}>
                <C />
              </Suspense>
            }
          />
          <Route
            path="/d"
            element={
              <Suspense fallback={<Loader />}>
                <D />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
