

import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'


const Object = function ({ children }) {
  const { t } = i18next

  return (
    <>
        <Layout>
        <div className="model">
            <div className="service">
              <h2>Services</h2>
              <div className="lang">
              <Link href="/service/bim">
              <a>
              <img src="https://cdn-icons-png.flaticon.com/512/6968/6968900.png" alt="" />
              <span className="title">BIM Modeling</span>
              </a>
              </Link>
              <Link href="/service/object">
              <a className="modeling">
          <img src="https://t4.ftcdn.net/jpg/03/34/61/85/360_F_334618569_xsm60thnM5iv8CLE8j0kLFkcPuVzHde5.jpg" alt="" />
            <span className="title">BIM Object Modeling</span>
            </a>
            </Link>
            <Link href="/service/point">
            <a>
            <img src="https://cdn-icons-png.flaticon.com/512/7024/7024150.png" alt="" />
            <span className="title">Point Cloud Modeling</span>
            </a>
            </Link>
            <Link href="/service/design">
            <a href="#">
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
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
        </Layout>
    </>
  )
}
export default Object;