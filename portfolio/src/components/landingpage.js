import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-page">
            <Cell col={12}>
            <img
            src="https://www.smmcare.com/wp-content/uploads/2017/12/team-members-avatar.jpg"
            alt="avatar"
            className="avatar-img"
            />

            <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr/>
            <p>HTML | Css/Bootstrap | JavaScript | React.js | Node.js | Express |MongoDB | MySQL | SQL</p>
             <div className="social-links">
            {/*linkedin* comment in jsx*/}
             <a href="https://google.com" target="_blank">
             <i class="fa fa-linkedin-square" aria-hidden="true"></i>
             </a>
             {/*github* comment in jsx*/}
             <a href="https://google.com" target="_blank">
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