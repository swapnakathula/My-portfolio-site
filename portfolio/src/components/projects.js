import React, { Component } from 'react';
import { Grid,Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-page">
            <Grid className="demo-grid-1">
               <Cell col={4}>
                <Card shadow={0} style={{ width: '350px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
                </Cell>   
                <Card shadow={0} style={{ width: '350px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
            </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
            
                <Card shadow={0} style={{ width: '350px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
            </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Live Demo</Button>
                        
                    </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '350px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '350px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
                
                <Card shadow={0} style={{ width: '350px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
                
                </Grid>
            </div>
        );
    }
}

export default Projects;