//create a example react component

import React from "react"
import i18next from 'i18next'
import Layout from "../../../components/layout"


const Hakkimizda = () => {
    const { t } = i18next
    return (
        <Layout>
        <div>
        <h1>{t('communication')}</h1>
        </div>
        </Layout>
    )
    }

export default Hakkimizda;