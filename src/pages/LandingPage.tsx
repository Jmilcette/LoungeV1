import "../pages/styles/LandingPage.css";
import { pages } from "../App";
import { useSpring, animated } from 'react-spring'
import React, { useState } from 'react'

interface  LandingScreenProps {
    changePage: (page: pages) => void;
}

const LandingPage = (props: LandingScreenProps) => {

    const fadeProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1000,
        config: { duration: 3000 }
    });

    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 5000 } })



    return (
        <div className="logo" >
            <animated.h1 style={fadeProps}>
                <a onClick={(e) => props.changePage(pages.SignUpPage)}>
                    <img src={require("../images/lounge.png")} />
                </a>
            </animated.h1>

            <div onClick={() => toggle(!state)}>
                <animated.div
                    style={{
                        opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                        transform: x
                            .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                            })
                            .interpolate(x => `scale(${x})`)
                    }}
                    onClick={(e) => props.changePage(pages.SignUpPage)}>

                    <p><i>"Creating a centralized platform that allows teachers to exchange resources and form new connections."</i></p>
                    <b>GET STARTED!</b>
                </animated.div>
            </div >

        </div >
    )
};

export { LandingPage };


