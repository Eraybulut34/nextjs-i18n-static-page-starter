
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../../components/layout'
import Link from 'next/link'







const bim = function ({ children }) {
  const router = useRouter()
  const { t } = i18next
  console.log(router,"router")
  

  return (
    <>
    <Layout>
        <div className="model">
            <div className="service">
              <h2>{t('Ser')}</h2>
              <div className="lang">
              <Link href="/service/bim" >
              <a className="modeling">
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
            <a>
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
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
        </Layout>
    </>
  )
}
export default bim;