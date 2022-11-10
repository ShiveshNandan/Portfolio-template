import React from 'react'
import "../CSS/About.css"

export default function About() {
    window.addEventListener("scroll", function () {
        const photo = document.getElementById("photu");
        let offset = window.pageYOffset;
        // parallax.style.backgroundPositionY = `${offset * 0.5}px`;
        photo.style.backgroundPositionY = offset * -0.13 + "px";
    });
    return (
        <>
            <section>
                <div className="parallax-item2">
                    <div className="mainabout">
                        <div className="about">
                            <h1>About</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae omnis mollitia, facere natus tempora aspernatur libero ducimus error, eligendi cupiditate fugit accusantium quos modi, qui aliquam cum aut quod pariatur? Unde animi totam id blanditiis cum voluptatum exercitationem facere alias? Ad, nihil debitis! Eum ullam unde earum architecto explicabo quibusdam modi quis nobis quisquam, fugiat doloremque sed doloribus consequatur perspiciatis dolorum est illo aliquid facere molestias sapiente praesentium nemo quasi possimus incidunt! Reiciendis repudiandae error laborum pariatur ipsam id ut voluptate voluptates nemo aliquid. Consequatur tenetur, sit deleniti facilis laborum ipsa cum alias expedita, dolorum perferendis magni, voluptatibus atque.</p>
                            {/* <p>I am Shivesh Nandan, a second year Computer Science Engineering Student at GGSIP university Dwarka. I am learning about blockchain and web3 since last year and now building Dapps on Ethereum and polygon blockchain using solidity, Truffle Ganache, etc.Currently reading "Mastering Ethereum" book so that I can understand Ethereum technology deeply and make secure and optimized smart contracts. I am also a web3 member of the Google Developer Student Club of my college, where my main motive is to learn, influence, and mentor my fellows about web3, and this is helping me in my teaching, public speaking, and other soft skills also.</p> */}
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