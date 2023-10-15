
import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'
import Image from 'next/image';
import App from '../../../components/App';
import {useState} from 'react';


const Design = function ({ children }) {
  const { t } = i18next
  
  const [images,setImages]=useState([
    {
      id:0,
      url:"/images/images19.jpeg"
    },
    {
      id:1,
      url:"/images/images21.jpeg"
    },
    {
      id:2,
      url:"/images/images20.jpeg"
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
              <a>
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
            <a className="modeling">
            <Image src="/images/images5.png" alt="" width={100} height={100} />
            <span className="title">{t('auto')}</span>
          </a>
          </Link>
        </div>
            </div>
            <div className="nav">
              <h2>{t('Shop')}</h2>
              <h3>{t('Hvac')}</h3>
              <p>{t('Mech')}</p>
              <p>{t('Drawn')}</p>
              <p>{t('An')}</p>
              <h3>{t('Areas')}</h3>
              <ul>
                <li>{t('Electric')}</li>
                <li>{t('Composite')}</li>
                <li>{t('Underground')}</li>
                <li>{t('Coor')}</li>
                <li>{t('Sheet')}</li>
                <li>{t('Pipe')}</li>
                <li>{t('Vac')}</li>
                <li>{t('Duct')}</li>
                <li>{t('Plumb')}</li>
                <li>{t('Fabrica')}</li>
                <li>{t('Lumb')}</li>
                <li>{t('Detail')}</li>
                <li>{t('Hanic')}</li>
                <li>{t('Placement')}</li>
              </ul>
              <h3>{t('Hop')}</h3>
              <p>{t('Furniture')}</p>
              <ul>
                <li>{t('Trades')}</li>
                <li>{t('These')}</li>
                <li>{t('Accuracy')}</li>
                <li>{t('Than')}</li>
                <li>{t('Schedules')}</li>
              </ul>
            </div>
        </div>
        <div className="bdm">
        <h1>{t('dsgn')}</h1>
        </div>
        <div className="app">
        <App images={images}></App>
        </div>
        </Layout>
    </>
  )
}
export default Design