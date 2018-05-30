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
                            src="https://www.smmcare.com/wp-content/uploads/2017/12/team-members-avatar.jpg"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddinTop: '1em' }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                
                        <div className="contact-list">
                        <List>
                        {/*we use <i/> for icons from font awesome icons*/}
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                612-327-0843
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                                swapna.j.kathula@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                Linkedin
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                <i className="fa fa-github-square" aria-hidden="true"/>
                                Github
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