import React, {Component} from 'react'

class NavBar extends Component{
    constructor(){
        super()

        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState( (prevState) => {
            return {
                toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        return(
            <header>
                <div className="nav-container">
                    <img className="logo" alt="logo" src = "https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
                    <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`} id="mainNav">
                    <ul className="nav text-uppercase ml-auto">
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </nav>
                        <a
                        id="nav-btn"
                        onClick={this.toggleShowFunc} 
                        alt="menu-icon" 
                        type="image" 
                        src="https://ibsindia.org/wp-content/uploads/2021/01/togl.png" 
                        href="#menu"
                        text-decoration = "none"
                        >Menu</a>
                </div>
        </header>
        )
    }
}
export default NavBar