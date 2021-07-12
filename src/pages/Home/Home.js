import React from 'react';
import Header from '../../components/Header/Header';
import GlobalNav from '../../Navbar/Navbar';
import All from '../categories/All';
import CreativeArt from '../categories/creativeArt';
import Music from '../categories/Music';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Home extends React.Component {

    render() {
        return (
            <div>
                
                
                
                <div className="content">
                    <Router>
                    <GlobalNav/>
                    

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

export default Home;