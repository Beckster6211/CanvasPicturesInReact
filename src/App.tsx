import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 
import Home from "./components/home/home"
import Mickey from "./components/mickey/mickey"
import XmasHouse from "./components/xmasHouse/xmasHouse"

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {

    if(canvasRef.current){
      const renderCtx = canvasRef.current.getContext("2d");

      if(renderCtx){
        setContext(renderCtx)
      }
    }

  }, [context]);

  return (
    <Router>
    <div
      style={{
        textAlign: 'center',
      }}>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;&nbsp;
          <Link to="/mickey">Mickey</Link>
          &nbsp;&nbsp;
          <Link to ="/xmasHouse">Xmas House</Link>
        </nav>
        <Switch>
          <Route path = "/xmasHouse">
            <XmasHouse/>
          </Route>
          <Route path="/mickey">
            <Mickey/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;