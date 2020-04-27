import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { LocationsList } from "./components/LocationsList";
import { TeamList } from "./components/TeamList";
import { MenuPage } from "./components/MenuPage";
import { ContactPage } from "./components/ContactPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/react-restaurant/" component={Home} exact />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/locations" component={LocationsList} />
                    <Route path="/team" component={TeamList} />
                    <Route path="/contact" component={ContactPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
