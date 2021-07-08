import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../Sidebar/Sidebar';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <Sidebar/>
                <div>
                    <Header/>
                
                </div>

            </div>
            
        )
    }
}

export default Home;