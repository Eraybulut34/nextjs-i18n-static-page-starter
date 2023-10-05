
import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'



const Point = function ({ children }) {
  const { t } = i18next

  return (
    <>
        <Layout>
        <div className="model">
            <div className="service">
              <h2>Services</h2>
              <div className="lang">
              <Link href="/service/bim">
              <a href="#" >
              <img src="https://cdn-icons-png.flaticon.com/512/6968/6968900.png" alt="" />
              <span className="title">BIM Modeling</span>
              </a>
              </Link>
              <Link href="/service/object">
            <a>
          <img src="https://t4.ftcdn.net/jpg/03/34/61/85/360_F_334618569_xsm60thnM5iv8CLE8j0kLFkcPuVzHde5.jpg" alt="" />
            <span className="title">BIM Object Modeling</span>
            </a>
            </Link>
            <Link href="/service/point">
            <a className="modeling">
            <img src="https://cdn-icons-png.flaticon.com/512/7024/7024150.png" alt="" />
            <span className="title">Point Cloud Modeling</span>
            </a>
            </Link>
            <Link href="/service/design">
            <a>
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
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
        </Layout>
    </>
  )
}
export default Point