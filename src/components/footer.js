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
        <div className="footer-top">
            <a href="" className="logo">
                bimodel.net
            </a>
            <div className="footer-menu">
                <nav>
                    <h4>Community</h4>
                    <ul>
                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Submit an issue 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Github Repo
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Slack
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h4>Getting Started</h4>
                    <ul>
                        <li>
                            <a href="#">
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Usage
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Globals
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Elements
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Collections
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Themes
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h4>Resources</h4>
                    <ul>
                        <li>
                            <a href="#">
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Usage
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Globals
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Elements
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Collections
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Themes
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="footer-bottom">
            <p>
                &copy; 2023 Leo. All rights reserved.
            </p>
            <nav className="footer-menu">
                <ul>
                    <li>
                        <a href="#">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Security
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Sitemap
                        </a>
                    </li>
                </ul>
            </nav>
            <ul className="footer-social">
                <li>
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
            </ul>
        </div>
   </footer>
    </>
  )
}
export default Footer
