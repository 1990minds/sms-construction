import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

class Loader extends Component {
    render() {
        return (
            <Fade>
                <Typed
                    strings={['Welcome To SMS Construction']}
                    typeSpeed={100}
                />
             
            </Fade>
        );
    }
}

export default Loader