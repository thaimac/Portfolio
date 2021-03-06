import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return(
        <animated.div className="proj-card-info" style={style}>
            <p className="proj-card-title">{props.title}</p>
            <p className="proj-card-subtitle">{props.subTitle}</p>
            <a href="localhost:3000" target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default CardInfo;