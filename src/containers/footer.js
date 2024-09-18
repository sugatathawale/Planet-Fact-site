// import React from 'react'
// import { Footer } from '../components';

// export function FooterContainer(props) {
//     return (
//         <Footer >
//             <Footer.Text>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.</Footer.Text>
//             <Footer.Text>Coded by <a href="mailto:rhynedavid16@gmail.com">David Rhyne</a>.</Footer.Text>
//         </Footer>
//     )
// }
import React from 'react';
import { Footer } from '../components';

export function FooterContainer(props) {
    return (
        <Footer>
            <Footer.Text>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
            </Footer.Text>
            <Footer.Text>
                Coded by <a href="mailto:rhynedavid16@gmail.com">David Rhyne</a>.
            </Footer.Text>
        </Footer>
    );
}
