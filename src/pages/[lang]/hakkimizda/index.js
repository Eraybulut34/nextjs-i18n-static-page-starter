//create a example react component

import React from "react"
import Layout from "../../../components/layout";
import i18next from 'i18next'
import Head from 'next/head';
import Image from "next/image";
import AnimatedNumber from '../../../components/AnimatedNumber';

const Hakkimizda = () => {
    const { t } = i18next
    
    return (
        <>
        <Head>
        <title>{t('about')}</title>
        <meta name="description" content="BIM Modeling." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        </Head>
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
        <div className="wall">
        <div className="material">
        <i className="material-icons">flag</i>
        <h1>Mission</h1>
        <p>To make your retirement better, plain and simple.</p>
        </div>
        <div className="material">
        <i className="material-icons">double_arrow</i>
        <h1>Vision</h1>
        <p>The retirement you picture; the future you deserve.</p>
        </div>
        <div className="material">
        <i className="material-icons">compass_calibration</i>
        <h1>Values</h1>
        <p>Knowledge, security, simplicity, and a few laughs along the way.</p>
        </div>
        </div>
        <div className="job">
            <h2 className="create">{t('result')}</h2>
            <div className="box">
                <div className="boxes one">
                    <h1><AnimatedNumber value={2000} duration={1000} /></h1>
                    <p>{t('grow')}</p>
                </div>
                <div className="boxes two">
                    <h1><AnimatedNumber value={2000} duration={1000} /></h1>
                    <p>{t('more')}</p>
                </div>
                <div className="boxes three">
                    <h1><AnimatedNumber value={2000} duration={1000} /></h1>
                    <p>{(t('from'))}</p>
                </div>
                <div className="boxes four">
                    <h1><AnimatedNumber value={2000} duration={1000} /></h1>
                    <p>{t('work')}</p>
                </div>
                <div className="boxes five">
                    <h1><AnimatedNumber value={2000} duration={1000} /></h1>
                    <p>{t('bought')}</p>
                </div>
                <div className="boxes six">
                    <h1><AnimatedNumber value={2000} duration={1000} /></h1>
                    <p>{t('part')}</p>
                </div>
            </div>
        </div>
        
        </Layout>
        </>
    )
    }

export default Hakkimizda;