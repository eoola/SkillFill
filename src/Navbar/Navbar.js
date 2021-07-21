import React from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header/Header';

const GlobalNavInner = function GlobalNav(props) {
    let path = props.location.pathname

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/signup`; 
        history.push(path);
    }

    return (

        <div class="topbar">
            {/* <div class="logo">
                <img src={logo}  alt={'Alum Coffee'} />
            </div> */}
            <Header/>
            <ul class="nav">
                <li id="Home"><a href="/" className={(path.split('/')[1].length > 0)? "" : "active"} >Home</a></li>
                <li id="all-categories"><a href="/all-categories" className={(path.includes('All') || 
                                                                path.includes('profile'))? "active" : ""} >All Categories</a></li>
                <li id="music"><a href="/music" className={(path.includes('music'))? "active" : ""} >Music</a></li>
                <li id="creative-art"><a href="/creative-art" className={(path.includes('creative-art'))? "active" : ""} >Creative Art</a></li>
                <li id="photography"><a href="/photography" className={(path.includes('photography'))? "active" : ""} >Photography</a></li>
            </ul>
            <ul class="nav-btn">
                <li id="login"><a href="/login-page" className={(path.includes('login'))? "active" : ""}> Log In</a></li>
                {/* <li><span class="btn btn-tertiary">Log in</span></li> */}
                {/* <li><Button to="/signup" class="btn btn-secondary" onClick={routeChange}>Sign up</Button></li> */}
            </ul>
            
        </div>
    )


}

const GlobalNav = withRouter(GlobalNavInner);
export default GlobalNav;


// class Sidebar extends React.Component {
//     render (){
//         return (
//             <div>

                
//                 {/* <div className="top-nav">
                    
//                     <a href="/all-categories">All Categories</a>
//                     <a href="/creative-art">Creative Art</a>
//                     <a href="/music">Music</a>
//                     <a href="/instruments">Instruments</a>
//                     <a href="/visual">Visual</a>
//                     <a href="/digital-art">Digital Art</a>
//                     <a href="/photography">Photography</a>
//                 </div> */}

//                 {/* <div className="content">
//                     <Router>
//                         <Switch>
//                             <Route path="/all-categories">
//                                 <All />
//                             </Route>
//                         </Switch>

//                         <Switch>
//                             <Route path="/creative-art">
//                                 <CreativeArt />
//                             </Route>
//                         </Switch>

//                         <Switch>
//                             <Route path="/music">
//                                 <Music/>
//                             </Route>
//                         </Switch>
//                     </Router>
//                 </div> */}

//                 </div>
//             )
//         }
//     }

// export default Sidebar;