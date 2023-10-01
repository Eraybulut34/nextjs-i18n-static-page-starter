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
                        <div class="topic">Address</div>
                        <div class="text-one">Turkey</div>
                        <div class="text-two">Kazımdirik, Mustafa Kemal Cd. No:93, 35100 Bornova/İzmir</div></a>
                </div>
                <div class="phone details">
                    <a href="#">
                        <div class="topic">Phone</div>
                        <div class="text-two">(+90) 535 611 30 38</div></a>
                </div>
                <div class="email details">
                    <a href="#">
                        <div class="topic">Email</div>
                        <div class="text-two">miray@bimodel.com</div></a>
                </div>
            </div>
            <div class="right-side">
                <div class="topic-text">Send us a message</div>
                <p>If you have any work from me or any types of quries related to my tutorial,you can send me message from here.</p>
            
            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Enter your name"></input>
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Enter your last name"></input>
                </div>
                <div class="input-box message-box">
                    <textarea></textarea>
                </div>
                <div class="button">
                    <input type="button" value="Send Now"></input>
                </div>
            </form>
        </div>
        </div>
    </div>
        
        </Layout>
        )
    }    

export default Hakkimizda;



