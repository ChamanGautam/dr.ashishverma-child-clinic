import React from 'react'
import CountUp from 'react-countup';
import "./Counter.css"
import ex from "../assets/img/expirence+.png"
import p from "../assets/img/patient+.png"
function Couter() {
    return (
        <div className='count'>
            <div className="count1">
                <CountUp start={0} end={10} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <div className="inn">
                            <img src={ex} alt="" />
                            <div className='c'>
                            <span ref={countUpRef} />+ Years
                            </div>
                            </div>
                            <p>Exprience</p>
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="count1">
                <CountUp start={0} end={1000} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <div className="inn">
                            <img src={p} alt="" />
                            <div className='c'>
                            <span ref={countUpRef} />+
                            </div>
                            </div>
                            <p>Happy Patient Per Month</p>
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
    )
}

export default Couter