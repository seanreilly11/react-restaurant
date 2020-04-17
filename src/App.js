import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { LocationsList } from "./components/LocationsList";
import { TeamList } from "./components/TeamList";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/locations" component={LocationsList} />
                    <Route path="/team" component={TeamList} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
