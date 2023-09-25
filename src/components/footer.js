import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Link from './link'
import LanguageMenu from './languageMenu'

const Footer = function ({ children }) {
  const router = useRouter()
  const { t } = i18next

  return (
    <>
    <footer className="footer">
      <div className="foo">
        <div className="logo">
          <a href="#">
            <p>Bimodel.net</p>
          </a>
        </div>

        <div className="footer-nav">
          <nav>
            <h6>Services</h6>
            <ul>
              <li><a href="#">BIM</a></li>
              <li><a href="#">BIM Object Modeling</a></li>
              <li><a href="#">Point Cloud Meeting</a></li>
              <li><a href="#">Design Automation</a></li>
            </ul>
          </nav>
          <nav>
            <h6>About</h6>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </nav>
          <div className="search">
          <a href="">
          <img src="https://www.erbilen.net/demo/egghead/img/ImmuateableImmer_Final.png" alt="" />
        </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Footer
