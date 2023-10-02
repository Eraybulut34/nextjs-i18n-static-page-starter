//create a example react component

import React from "react"
import i18next from 'i18next'
import Layout from "../../../components/layout"
import Head from 'next/head';



const Hakkimizda = () => {
    const { t } = i18next
    return (
        <>
        <Head>
        <title>{t('contact')}</title>
        <meta name="description" content="BIM Modeling." />
        </Head>
        <Layout>
            <div className="contact">
            <div className="contact-us">
            <div className="left-side">
                <div className="address details">
                    <a href="https://www.google.com/maps?ll=38.461818,27.206661&z=13&t=m&hl=tr-TR&gl=US&mapclient=embed&q=Mustafa+Kemal+Cd.+No:93+Kaz%C4%B1mdirik+35100+Bornova/%C4%B0zmir">
                        <div className="topic">{t('Adress')}</div>
                        <div className="text-one">{t('Turkey')}</div>
                        <div className="text-two">Kazımdirik, Mustafa Kemal Cd. No:93, 35100 Bornova/İzmir</div></a>
                </div>
                <div className="phone details">
                    <a href="#">
                        <div className="topic">{t('Phone')}</div>
                        <div className="text-two">(+90) 535 611 30 38</div></a>
                </div>
                <div className="email details">
                    <a href="#">
                        <div className="topic">{t('Mail')}</div>
                        <div className="text-two">miray@bimodel.com</div></a>
                </div>
            </div>
            <div className="right-side">
                <div className="topic-text">{t('Send')}</div>
                <p>{t('Work')}</p>
            
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder={t('Place')}></input>
                </div>
                <div className="input-box">
                    <input type="text" placeholder={t('Second')}></input>
                </div>
                <div className="input-box message-box">
                    <textarea></textarea>
                </div>
                <div className="button">
                    <input type="button" value={t('Buton')}></input>
                </div>
            </form>
        </div>
        </div>
        </div>
        </Layout>
        </>
        )
    }    

export default Hakkimizda;



