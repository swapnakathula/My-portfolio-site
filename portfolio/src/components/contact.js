import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Swapna Kathula</h2>
                        <img
                            src={require('../images/swapna.jpg')}
                            alt="avatar"
                            style={{ height: '350px' }}
                        />
                       
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                
                        <div className="contact-list">
                        <List>
                        {/*we use <i/> for icons from font awesome icons*/}
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton',color:'white'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                612-327-0843
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton',color:'white'}}>
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                                swapna.j.kathula@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton',color:'white'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                             <a href="https://www.linkedin.com/in/swapna-kathula-70ba05159/" target="_blank">
                                Linkedin
                                </a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton',color:'white'}}>
                                <i className="fa fa-github-square" aria-hidden="true"/>
                                <a href="https://github.com/swapnakathula" target="_blank">
                                Github
                                </a>
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Contact;