import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'
import Image from 'next/image';
import App from '../../../components/App';
import {useState} from 'react';



const Bim = function ({ children }) {
  const { t } = i18next
  
  const [images,setImages]=useState([
    {
      id:0,
      url:"/images/images16.jpeg"
    },
    {
      id:1,
      url:"/images/images17.jpeg"
    },
    {
      id:2,
      url:"/images/images18.jpeg"
    },
  ])

  return (
    <>
    <Layout>
        <div className="model">
            <div className="service">
              <h2>{t('Ser')}</h2>
              <div className="lang">
              <Link href="/service/bim" >
              <a className="modeling">
              <Image src="/images/images2.png" alt="" width={100} height={100} />
              <span className="title">{t('bmn')}</span>
              </a>
              </Link>
              <Link href="/service/object">
              <a>
              <Image src="/images/images8.png" alt="" width={100} height={100} />
            <span className="title">{t('exp')}</span>
              </a>
              </Link>
              <Link href="/service/point">
            <a>
            <Image src="/images/images4.png" alt="" width={100} height={100} />
            <span className="title">{t('cld')}</span>
            </a>
              </Link>
              <Link href="/service/design">
            <a>
            <Image src="/images/images5.png" alt="" width={100} height={100} />
            <span className="title">{t('auto')}</span>
          </a>
          </Link>
        </div>
            </div>
            <div className="nav">
              <h2>BIM Modeling</h2>
              <h3>{t('Revit')}</h3>
              <p>{t('Manner')}</p>
              <ul>
                <li>{t('With')}</li>
                <li>{t('Floor')}</li>
                <li>{t('Render')}</li>
                <li>{t('Aim')}</li>
                <li>{t('Clash')}</li>
                <li>{t('Any')}</li>
              </ul>
              <h3>{t('Our')}</h3>
              <p>{t('Quality')}</p>
              <p>{t('Plans')}</p>
              <p>{t('Wals')}</p>
              <h3>{t('Flex')}</h3>
              <p>{t('Expand')}</p>
            </div>
        </div>
        <div className="bdm">
        <h1>{t('bdm')}</h1>
        </div>
        <div className="app">
        <App images={images}></App>
        </div>
        </Layout>
    </>
  )
}
export default Bim;