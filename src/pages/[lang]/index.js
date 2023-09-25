import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import { useEffect, useState } from 'react'



export default function LangIndex({ language }) {
  const { t } = i18next
  return (
  <Layout>
    <div className="container">
      <div className="banner-box">
          <h1>Our values and  purpose</h1>
          <p>As a global sustainable development consultancy, our work is focused on producing safe, inclusive and resilient communities, infrastructure and cities. We recognise that sustainable development encompasses many different factors. So, our work also prioritises environmental regeneration, biodiversity, conservation of resources, stable economic growth and social value.</p>
          <a href="#" className="btn">Projects</a>
      </div>
      <div className="banner-box banner-image">
        <a href="">
          <img  src="https://www.erbilen.net/demo/egghead/img/ImmuateableImmer_Final.png" alt="" />
        </a>
      </div>
    </div>

    <div className="cont">
      <div className="section1">
        <div className="lang">
          <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/6968/6968900.png" alt="" />
            <span className="title">BIM Modeling</span>
          </a>
          <a href="#">
          <img src="https://t4.ftcdn.net/jpg/03/34/61/85/360_F_334618569_xsm60thnM5iv8CLE8j0kLFkcPuVzHde5.jpg" alt="" />
            <span className="title">BIM Object Modeling</span>
          </a>
          <a href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/7024/7024150.png" alt="" />
            <span className="title">Point Cloud Modeling</span>
          </a>
          <a href="#">
          <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
          </a>
        </div>
        <div className="inner">
          <h3>Our Services</h3>
          <a href="#" className="btn">Get Information</a>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang)
  return {
    props: {
      language,
    },
  }
}
