import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <p>Hello, my name is Tyler McEwen and I am a passionate developer currently pursuing a major in Computer Science at Lakehead University in Thunder Bay, Ontario</p>

                <p>I am constantly learning and evolving as an engineer. The byproducts of this evolution are the projects that this portal is meant to showcase.</p>

                <p>Those are what can be found on the home page.</p>

                <p>I am always open to collaborate and/or developing something that fits your needs.</p>

                <p>Let's chat!</p>
            </Content>
        </div>
    );
}

export default AboutPage;