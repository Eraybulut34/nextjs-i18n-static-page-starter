//create a example react component

import React from "react"
import Layout from "../../../components/layout";
import i18next from 'i18next'


const Hakkimizda = () => {
    const { t } = i18next
    
    return (
        <Layout>
        <div className="about-us">
        <div className="wrapper">
            <h2 className="intro">{t('thing')}</h2>
        </div>
        <div className="description">
            <p>{t('data')}</p>
            <p className="second" >{t('talk')}</p>
        </div>
        </div>
        <div className="job">
            <h2 className="create">{t('result')}</h2>
            <div className="box">
                <div className="boxes one">
                    <h1>#16</h1>
                    <p>{t('grow')}</p>
                </div>
                <div className="boxes two">
                    <h1>30%</h1>
                    <p>{t('more')}</p>
                </div>
                <div className="boxes three">
                    <h1>1.25B</h1>
                    <p>{(t('from'))}</p>
                </div>
                <div className="boxes four">
                    <h1>200</h1>
                    <p>{t('work')}</p>
                </div>
                <div className="boxes five">
                    <h1>275MM</h1>
                    <p>{t('bought')}</p>
                </div>
                <div className="boxes six">
                    <h1>9</h1>
                    <p>{t('part')}</p>
                </div>
            </div>
        </div>
        </Layout>
    )
    }

export default Hakkimizda;