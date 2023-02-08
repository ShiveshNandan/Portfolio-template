import React from 'react'
import "../CSS/About.css"

export default function About() {
    // const scollToRef = React.useRef();
    window.addEventListener("scroll", function () {
        const photo = document.getElementById("photu");
        let offset = window.pageYOffset;
        // parallax.style.backgroundPositionY = `${offset * 0.5}px`;
        photo.style.backgroundPositionY = offset * -0.10 + "px";
    });
    window.addEventListener("scroll", function () {
        const parallax_item2 = document.getElementById("bggg");
        let offset = window.pageYOffset;
        // parallax.style.backgroundPositionY = `${offset * 0.5}px`;
        parallax_item2.style.backgroundPositionY = offset * -0.08 + "px";
    });

    return (
        <>
            <section >
                <div id='bggg' className="parallax_item2">
                    <div className="mainabout">
                        <div className="about">
                            <h1>About</h1>
                            <p>I am Shivesh Nandan, a second year Computer Science Engineering Student at USICT, GGSIP university Dwarka. I am learning about web development since last year and now building some projects like this portfolio using React.js framework. Currently i am learning more about the Web Development and looking for an internship or free lancing on web development. I love to do photograpy too. The images used in this website are captured by me XD.</p>
                        </div>
                        <div className="pillar"></div>
                        <div id='photu' className="photo"></div>
                    </div>
                </div>
            </section>
        </>
    )
}


// i am trying to add the scroll in the website