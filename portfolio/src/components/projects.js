import React, { Component } from 'react';
import { Grid,Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-page">
            <Grid className="demo-grid-1">
               <Cell col={4}>
                <Card shadow={0} style={{ width: '400px', height: '400px', margin: 'auto' }}>
                    <CardTitle expand className="cardTitle1">Travel Buddy</CardTitle>
                    <CardText style={{ color: '#b453c4'}}>
                       A Responsive web app that allows users to know the Weather and  find nearby top rated Restaurant suggestions with address  and website links by entering Zip Code.
                       Techonologies used:HTML5, CSS, Bootstrap, JavaScript, jQuery, Ajax, Json, Heroku,Weather(openweathermap) API and  FourSquare API. 
                    </CardText>
                    <CardActions border>
                    <Button colored>
                    <a href="https://github.com/edwinhsia2018/BeatTheWeather" target="_blank">
                    Github
                    </a>
                    </Button>
                        <Button colored>
                        <a href="https://travelbuddy2018.herokuapp.com/index.html" target="_blank">
                        Live Demo
                        </a>
                        </Button>
                    </CardActions>
                </Card>
                </Cell> 
                <Cell col={4}>  
                <Card shadow={0} style={{ width: '400px', height: '400px', margin: 'auto' }}>
                    <CardTitle expand className="cardTitle2">Financial App</CardTitle>
                    <CardText style={{ color: '#b453c4'}}>
                        A  web app that allows users to manage personal expenses,investments and cryprocurrencies in an interactive pie-chart with drill down functionality. 
                        Technologies used: HTML5,  CSS, Bootstrap, JavaScript, jQuery, Node.js, Handlebars.js, Express, MySQL, Sequelize, MVC,Trello,Heroku.
                          API's used: Nodemailer, yahoo-finance and  cryptocompare.
            </CardText>
                    <CardActions border>
                    <Button colored>
                    <a href="https://github.com/mguldberg/personal-financial-app" target="_blank">
                    Github
                    </a>
                    </Button>
                        <Button colored>
                        <a href="https://personal-financial-app.herokuapp.com/" target="_blank">
                        Live Demo
                        </a>
                        </Button>
                    </CardActions>
                </Card>
                </Cell>
               
                <Cell col={4}>
                <Card shadow={0} style={{ width: '400px', height: '400px', margin: 'auto' }}>
                    <CardTitle expand className="cardTitle3">Train Scheduler</CardTitle>
                    <CardText style={{ color: '#b453c4'}}>
                    A Train schedule application that will provide up-to-date information about various trains, 
                    namely their arrival times and how many minutes remain until they arrive at their station.Technologies used: HTML5,  CSS, Bootstrap, JavaScript, jQuery,Firebase,Moment.js.
                    </CardText>
                    <CardActions border>
                    <Button colored>
                    <a href="https://github.com/swapnakathula/TrainScheduler" target="_blank">
                    Github
                    </a>
                    </Button>
                        <Button colored>
                        <a href="https://swapnakathula.github.io/TrainScheduler/" target="_blank">
                        Live Demo
                        </a>
                        </Button>
                    </CardActions>
                </Card>
                </Cell>
                <Cell col={4}>
                <Card shadow={0} style={{ width: '400px', height: '400px', margin: 'auto' }}>
                    <CardTitle expand className="cardTitle4">GifTastic</CardTitle>
                    <CardText  style={{ color: '#b453c4'}}>
                    A Web application that uses the GIPHY API to fetch users choice of GIFs. GIFs have an click to play/ stop feature when clicked.
                    Technologies used: HTML5,  CSS, Bootstrap, JavaScript, jQuery,Giphy API,Ajax.
                    </CardText>
                    <CardActions border>
                    <Button colored>
                    <a href="https://github.com/swapnakathula/GifTastic" target = "_blank">
                    Github
                    </a>
                    </Button>
                        <Button colored>
                        <a href="https://swapnakathula.github.io/GifTastic/" target = "_blank">
                        Live Demo
                        </a>
                        </Button>
                    </CardActions>
                </Card>
                </Cell>
               
                </Grid>
            </div>
        );
    }
}

export default Projects;