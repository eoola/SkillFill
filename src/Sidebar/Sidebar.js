import React from 'react';
import ReactDom from 'react-dom';
import All from '../pages/categories/All';
import CreativeArt from '../pages/categories/creativeArt';
import Music from '../pages/categories/Music';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';


class Sidebar extends React.Component {
    render (){
        return (
            <div>
            <div className="sidebar">
                <h1 className="header1">skillfill</h1>
                <h2 className="header2">Explore</h2>
                <a href="/all-categories">All Categories</a>
                <a href="/creative-art">Creative Art</a>
                <a href="/music">Music</a>
                <a href="/instruments">Instruments</a>
                <a href="/visual">Visual</a>
                <a href="/digital-art">Digital Art</a>
                <a href="/photography">Photography</a>
            </div>

            <div className="content">
                <Router>
                    <Switch>
                        <Route path="/all-categories">
                            <All />
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/creative-art">
                            <CreativeArt />
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/music">
                            <Music/>
                        </Route>
                    </Switch>
                </Router>
            </div>

            </div>
        )
    }
}

export default Sidebar;