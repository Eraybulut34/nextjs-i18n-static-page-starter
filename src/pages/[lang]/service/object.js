
import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'
import Image from 'next/image';
import App from '../../../components/App';
import {useState} from 'react';

const Object = function ({ children }) {
  const { t } = i18next
  

  const [images,setImages]=useState([
    {
      id:0,
      url:"/images/images13.jpeg"
    },
    {
      id:1,
      url:"/images/images14.jpeg"
    },
    {
      id:2,
      url:"/images/images15.jpeg"
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
              <a className="modeling">
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
            <a href="#">
            <Image src="/images/images5.png" alt="" width={100} height={100} />
            <span className="title">{t('auto')}</span>
          </a>
          </Link>
        </div>
            </div>
            <div className="nav">
              <h2>BIM Object Modeling</h2>
              <h3>{t('Output')}</h3>
              <p>{t('Core')}</p>
              <h3>{t('Family')}</h3>
              <p>{t('Etc')}</p>
              <ul>
                <li>{t('That')}</li>
                <li>{t('Helps')}</li>
                <li>{t('And')}</li>
                <li>{t('Various')}</li>
                <li>{t('As')}</li>
                <li>{t('Can')}</li>
              </ul>
              <h3>{t('Ling')}</h3>
              <p>{t('Machine')}</p>
              <ul>
                <li>{t('Structure')}</li>
                <li>{t('Arc')}</li>
                <li>{t('Structural')}</li>
                <li>{t('Mep')}</li>
                <li>{t('Sys')}</li>
                <li>{t('Fam')}</li>
                <li>{t('Ents')}</li>
                <li>{t('Del')}</li>
                <li>{t('Fix')}</li>
                <li>{t('Doors')}</li>
                <li>{t('Rel')}</li>
                <li>{t('Tom')}</li>
              </ul>
              <h3>{t('Cre')}</h3>
              <p>{t('The')}</p>
              <ul>
                <li>{t('Template')}</li>
                <li>{t('Plan')}</li>
                <li>{t('Geo')}</li>
                <li>{t('To')}</li>
                <li>{t('Up')}</li>
                <li>{t('Types')}</li>
              </ul>
              <p>{t('Super')}</p>
            </div>
        </div>
        <div className="bdm">
        <h1>{t('obj')}</h1>
        </div>
        <div className="app">
        <App images={images}></App>
        </div>
        </Layout>
    </>
  )
}
export default Object;