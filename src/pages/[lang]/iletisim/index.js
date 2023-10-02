//create a example react component

import React from "react"
import i18next from 'i18next'
import Layout from "../../../components/layout"




const Hakkimizda = () => {
    const { t } = i18next
    return (
        <Layout>
            <div class="contact">
            <div class="contact-us">
            <div class="left-side">
                <div class="address details">
                    <a href="https://www.google.com/maps?ll=38.461818,27.206661&z=13&t=m&hl=tr-TR&gl=US&mapclient=embed&q=Mustafa+Kemal+Cd.+No:93+Kaz%C4%B1mdirik+35100+Bornova/%C4%B0zmir" target="_blank">
                        <div class="topic">{t('Adress')}</div>
                        <div class="text-one">{t('Turkey')}</div>
                        <div class="text-two">Kazımdirik, Mustafa Kemal Cd. No:93, 35100 Bornova/İzmir</div></a>
                </div>
                <div class="phone details">
                    <a href="#">
                        <div class="topic">{t('Phone')}</div>
                        <div class="text-two">(+90) 535 611 30 38</div></a>
                </div>
                <div class="email details">
                    <a href="#">
                        <div class="topic">{t('Mail')}</div>
                        <div class="text-two">miray@bimodel.com</div></a>
                </div>
            </div>
            <div class="right-side">
                <div class="topic-text">{t('Send')}</div>
                <p>{t('Work')}</p>
            
            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder={t('Place')}></input>
                </div>
                <div class="input-box">
                    <input type="text" placeholder={t('Second')}></input>
                </div>
                <div class="input-box message-box">
                    <textarea></textarea>
                </div>
                <div class="button">
                    <input type="button" value={t('Buton')}></input>
                </div>
            </form>
        </div>
        </div>
    </div>
        
        </Layout>
        )
    }    

export default Hakkimizda;



