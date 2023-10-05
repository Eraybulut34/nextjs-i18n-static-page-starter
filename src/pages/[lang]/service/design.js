
import i18next from 'i18next'
import 'twin.macro'
import Link from '../../../components/link'
import Layout from '../../../components/layout'



const Design = function ({ children }) {
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
            <a>
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
            <a className="modeling">
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
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
        </Layout>
    </>
  )
}
export default Design