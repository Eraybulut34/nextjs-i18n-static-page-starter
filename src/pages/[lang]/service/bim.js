
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'




const bim = function ({ children }) {
  const router = useRouter()
  const { t } = i18next
  console.log(router,"router")

  return (
    <>
        <div className="model">
            <p>bim modeling</p>
        </div>
    </>
  )
}
export default bim;