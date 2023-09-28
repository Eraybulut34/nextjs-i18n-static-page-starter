//create a example react component

import React from "react"
import Layout from "../../../components/layout";


const Hakkimizda = () => {
    return (
        <Layout>
        <div className="about-us">
        <div className="wrapper">
            <h2 className="intro">
        The one thing you need to know about us  is that we build brands that don’t need to trade off between creativity  and performance.
            </h2>
        </div>
        <div className="description">
            <p>We are always happy to explain the science of Exper­i­men­tal Design, flaunt how we integrated strategy, creative, media, design and commerce or sing the praises of creative emboldened by data.</p>
            <p className="second" >But can we more than talk.</p>
        </div>
        </div>
        <div className="job">
            <h2 className="create">We create unexpected results.</h2>
            <div className="box">
                <div className="boxes one">
                    <h1>#16</h1>
                    <p>Fastest growing agency in the world.</p>
                </div>
                <div className="boxes two">
                    <h1>30%</h1>
                    <p>More effective on average for our <br /> clients for both brand and DR <br /> objectives.</p>
                </div>
                <div className="boxes three">
                    <h1>1.25B</h1>
                    <p>Learnings generated from our <br /> experimentation, powering more <br /> informed decisions.</p>
                </div>
                <div className="boxes four">
                    <h1>200</h1>
                    <p>Beautifully talented and diverse <br /> people willing to defect from the <br /> old model to create smarter work.</p>
                </div>
                <div className="boxes five">
                    <h1>275MM</h1>
                    <p>Dollars in managed media, <br /> bought in-house.</p>
                </div>
                <div className="boxes six">
                    <h1>9</h1>
                    <p>Fast and Furious movies you’re <br /> required to watch as part of your <br /> orientation. Not Tokyo Drift.</p>
                </div>
            </div>
        </div>
        </Layout>
    )
    }

export default Hakkimizda;