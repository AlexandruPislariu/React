import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component
{
    render(){
        return (
            <header>
                <h2><button>Recipe App</button></h2>
                <nav>
                    <li><button>New Recipe</button></li>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact Us</button></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;