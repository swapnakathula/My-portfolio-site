import React,{ Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div className="aboutme-body" style={{width: '100%', margin: 'auto'}}>
            <Grid className="aboutme-grid">
            <Cell col={12}>
            <img
            src={require('../images/swapna.jpg')}
            alt="avatar"
            className="avatar-img2"
            />
           
            <p>
            Welcome to my portfolio. My name is Swapna Kathula, lives in Priorlake,MN.
            I am a Full Stack Web Developer dedicated to design and develop dynamic Web applications using both frontend and backend technologies and databases. I am a creative problem solver and 
            adept at working with diverse teams to implement projects. Excited to continue to learn new technologies advancing in my career.I am currently open to full time and contracting positions.</p> 
<p>
   I persued my Bachelor's degree in Mathematics.I like problem solving and passionate to learn computer technologies and I want to start my career in Software Industry.So I chose a 
   coding bootcamp and graduated from University Of Minnesota coding bootcamp,MN and recieved fullstack web developement certificate.
   I am highley flexible,hard worker,self motivated,detail oriented and excellent Teamplayer.
</p>
<p>
   I learned full-stack web development technologies through hands-on coding experience  with classroom activities,weekly assignments and group projects are
   HTML5, CSS, Bootstrap, Materialize, JavaScript,  jQuery,  Node.js,  Express, React.js, MVC, GIT,  Github,  GitLab, SQL, MySQL, Firebase, MongoDB, 
   APIs,JSON, AJAX,  REST, Java,Visual studio code, Responsive web design, Media Queries,computer science fundamentals,Trello, SDLC, writing tests, Agile process.
   Collaborated with other developers on group projects and established a project workflow Using Github.Managed Agile Project Management Workflow(scrum) through Trello.
   </p>
   <p>
   Thankyou for visiting my portfolio and if you have any questions please contact me.
            </p>
           
            </Cell>

                </Grid>
            </div>        
        );
    }
}

export default About;  