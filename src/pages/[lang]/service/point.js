
import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'
import Image from 'next/image';
import App from '../../../components/App';
import {useState} from 'react';



const Point = function ({ children }) {
  const { t } = i18next

  const [images,setImages]=useState([
  {
    id:0,
    url:"/images/images14.jpeg"
  },
  {
    id:1,
    url:"/images/images14.jpeg"
  },
  {
    id:2,
    url:"/images/images15.jpeg"
  },
  {
    id:3,
    url:"/images/images14.jpeg"
  },
])

  return (
    <>
        <Layout>
        <div className="model">
            <div className="service">
              <h2>Services</h2>
              <div className="lang">
              <Link href="/service/bim">
              <a href="#" >
              <Image src="/images/images2.png" alt="" width={100} height={100} />
              <span className="title">BIM Modeling</span>
              </a>
              </Link>
              <Link href="/service/object">
            <a>
            <Image src="/images/images8.png" alt="" width={100} height={100} />
            <span className="title">BIM Object Modeling</span>
            </a>
            </Link>
            <Link href="/service/point">
            <a className="modeling">
            <Image src="/images/images4.png" alt="" width={100} height={100} />
            <span className="title">Point Cloud Modeling</span>
            </a>
            </Link>
            <Link href="/service/design">
            <a>
            <Image src="/images/images5.png" alt="" width={100} height={100} />
            <span className="title">Design Automation</span>
          </a>
          </Link>
        </div>
            </div>
            <div className="nav">
              <h2>Point Cloud Modeling</h2>
              <h3>{t('High')}</h3>
              <p>{t('Need')}</p>
              <p>{t('Point')}</p>
              <p>{t('Use')}</p>
              <h3>{t('Main')}</h3>
              <ul>
                <li>{t('Cloud')}</li>
                <li>{t('Such')}</li>
                <li>{t('Built')}</li>
                <li>{t('Enh')}</li>
                <li>{t('Scan')}</li>
              </ul>
              <h3>{t('Cho')}</h3>
                <ul>
                  <li>{t('Convert')}</li>
                  <li>{t('Land')}</li>
                  <li>{t('Recreates')}</li>
                  <li>{t('Complete')}</li>
                  <li>{t('By')}</li>
                  <li>{t('Reduce')}</li>
                  <li>{t('Time')}</li>
                </ul>
            </div>
        </div>
        <div className="app">
        <App images={images}></App>
        </div>
        </Layout>
    </>
  )
}
export default Point