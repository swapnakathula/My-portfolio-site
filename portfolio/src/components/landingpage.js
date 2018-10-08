import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-page">
            <Cell col={12}>
                <img
                src={require('../images/swapna.jpg')}
                alt="avatar"
                className="avatar-img"
                />
            <div className="banner-text">
            <h1>Hello! I am Swapna Kathula</h1>
            <h2>Full Stack Web Developer</h2>
            <hr/>
            <p>HTML | Css/Bootstrap | JavaScript | React.js | Node.js | Express |MongoDB | MySQL | SQL</p>
             <div className="social-links">
            {/*linkedin* comment in jsx*/}
             <a href="https://www.linkedin.com/in/swapna-kathula-70ba05159/" target="_blank">
             <i class="fa fa-linkedin-square" aria-hidden="true"></i>
             </a>
             {/*github* comment in jsx*/}
             <a href="https://github.com/swapnakathula" target="_blank">
             <i class="fa fa-github-square" aria-hidden="true"></i>
             </a>
             </div>  
          </div>

            </Cell>
            </Grid>
            </div>
        );
    }
}

export default Landing; 