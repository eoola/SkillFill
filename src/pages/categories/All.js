import React from 'react';
import ReactDom from 'react-dom';
import CreativeArt from './creativeArt'
import Music from './Music';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class All extends React.Component{
    render() {
        return (
            <div>
                <div className="categories">
                    <h1>Categories</h1>
                    <a href="/creative-art">Creative Art</a>
                    <a href="/music">Music</a>
                    <a href="/instruments">Instruments</a>
                    <a href="/visual">Visual</a>
                    <a href="/digital-art">Digital Art</a>
                    <a href="/photography">Photography</a>
                </div>

                <div className="routes">
                    <Router>
                        <div className="all-links">
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

                            
                        </div>
                    </Router>

                </div>

                
            </div>

            

        
            

            

            
        )
    }
}

export default All;