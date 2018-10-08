import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Swapna Kathula"  style={{color: 'white',fontSize: '1000px',fontWeight:'2em'}}>
            <Navigation className="nav-links" >
                <Link to="/home" style={{color: 'white',fontSize: '20px'}}><strong>Home</strong></Link>
                <Link to="/aboutme" style={{color: 'white',fontSize: '20px'}}><strong>About Me</strong></Link>
                <Link to="/projects" style={{color: 'white',fontSize: '20px'}}><strong>Projects</strong></Link>
                <Link to="/contact" style={{color: 'white',fontSize: '20px'}}><strong>Contact</strong></Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
        );
    }
}


export default App;
