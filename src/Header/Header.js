import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
          toggle: false
        }
      }
      render() {
          console.log(this.state.toggle)
        return (
            <header>
                <div>
                    <div className="logo">Start Bootstrap
                    </div>
                    <button className="menu" onClick={() => this.setState({toggle: !this.state.toggle})}><p>MENU (icon)</p></button>
                    <nav className={this.state.toggle ? 'show' : ''}>
                        <ul>
                            
                            <li><a href='#'>SERVICES</a></li>
                            <li><a href='#'>PORTFOLIO</a></li>
                            <li><a href='#'>ABOUT</a></li>
                            <li><a href='#'>TEAM</a></li>
                            <li><a href='#'>CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        );
      }
    }
    
 
export default Header;