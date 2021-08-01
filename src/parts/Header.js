import React from 'react'
import BrandIcon from '../components/BrandIcon'
import Button from '../components/Button'
import Fade from 'react-reveal/Fade'
const Header = (props) => {
    const getNavLinkClass = (path) => {
        return props.location.pathname === path ? "active" : "";
    }

    if(props.isCentered) {
        return (
            <Fade>
                <header className="spacing-sm">
                    <div className="container">
                        <nav className="navbar">
                            <Button type="link" href="" className="brand-text-icons mx-auto">
                                Stay<span className="text-gray-900">cation.</span>
                            </Button>
                        </nav>
                    </div>
                </header>
            </Fade>
        )
    }
    return (
        <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar">
                        <BrandIcon />
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item ${getNavLinkClass("/")}`}>
                                    <Button type="link" href="/" className="nav-link">
                                        Home
                                    </Button>
                                </li>
                                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                                    <Button type="link" href="/browse-by" className="nav-link">
                                        Browse By
                                    </Button>
                                </li>
                                <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                                    <Button type="link" href="/stories" className="nav-link">
                                        Stories
                                    </Button>
                                </li>
                                <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                                    <Button type="link" href="/agents" className="nav-link">
                                        Agents
                                    </Button>
                                </li>
                            </ul>
                    </nav>
                </div>
            </header>
        </Fade>
    )
}

export default Header;