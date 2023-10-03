import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../../components/layout'


const point = function ({ children }) {
  const router = useRouter()
  const { t } = i18next
  console.log(router,"router")

  return (
    <>
        <Layout>
        <div className="model">
            <div className="service">
              <h2>Services</h2>
              <div className="lang">
              <a href="#" >
              <img src="https://cdn-icons-png.flaticon.com/512/6968/6968900.png" alt="" />
              <span className="title">BIM Modeling</span>
              </a>
            <a href="#">
          <img src="https://t4.ftcdn.net/jpg/03/34/61/85/360_F_334618569_xsm60thnM5iv8CLE8j0kLFkcPuVzHde5.jpg" alt="" />
            <span className="title">BIM Object Modeling</span>
            </a>
            <a href="#" className="modeling">
            <img src="https://cdn-icons-png.flaticon.com/512/7024/7024150.png" alt="" />
            <span className="title">Point Cloud Modeling</span>
            </a>
            <a href="#">
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
          </a>
        </div>
            </div>
            <div className="nav">
              <h2>Point Cloud Modeling</h2>
              <h3>Point Cloud Modeling</h3>
              <h3>Highly Talented & Experienced Team</h3>
              <p>At Bimodel, we have a highly talented and experienced team of professionals accurately capturing and interpreting 3D scan data for our clients. We leverage the potential of point cloud technology by integrating it with our BIM expertise. Point cloud is a set of data points in a 3D coordinate system representing the external surface of a building. The 3D scanned data captures every single detail, thus eliminating the need for repeated site visits. Our experts create BIM models from the point cloud.</p>
              <p>Point cloud Point Cloud Modeling is used nowadays by a number of sectors including retailers, main contractors, and architects. It is also used by MEP designers, MEP contractors, and consulting engineers. The main advantage of Point Cloud Modeling is its ability to analyze the differences between point cloud and model geometry by creating native Revit geometry from and to a point cloud.</p>
              <p>Using Point Cloud Modeling l, data can be exported or imported in a format understandable by electronic surveying equipment that will enable you to read the survey data for as-built conditions and to export design data for field verification.</p>
              <h3>Main Application of Point Cloud Modeling</h3>
              <ul>
                <li>Point Cloud Modeling helps create as-built BIM Modeling for retrofit, refurbishment and renovation projects.</li>
                <li>It enables the creation of as-built BIM models for the renovation work of infrastructure assets such as tunnels and bridges.</li>
                <li>It is used to create as-built BIM models for MEP services that help the managers provide early clash detection alerts.</li>
                <li>It enhances the creation of an intelligent BIM model in Revit by providing accurate point cloud data to the clients.</li>
                <li>It helps measure points within the scan to find true dimensions quickly.</li>
              </ul>
              <h3>Why choose Bimodel?</h3>
                <ul>
                  <li>We convert point cloud data into information-rich BIM models from laser surveyed data images and point clouds.</li>
                  <li>Our team of licensed architects, professional land surveyors, and certified scan technicians deliver high-quality as-built surveys.</li>
                  <li>Our point cloud data accurately recreates the as-built environment.</li>
                  <li>Our complete and accurate results enable the design team to make informed decisions quickly.</li>
                  <li>Our experienced professionals are adept at meeting clients’ expectations by capturing and interpreting the 3D scan data accurately.</li>
                  <li>Our improved build cost estimates reduce errors and thus achieve significant cost savings.</li>
                  <li>We believe in being ‘on time, each time!</li>
                </ul>
            </div>
        </div>
        </Layout>
    </>
  )
}
export default point