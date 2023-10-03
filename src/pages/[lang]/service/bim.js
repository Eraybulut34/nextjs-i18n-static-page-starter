

import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../../components/layout'







const bim = function ({ children }) {
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
              <a href="#" className="modeling">
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
            </div>
            <div className="nav">
              <h2>BIM Modeling</h2>
              <h3>3D Revit Bim Modeling Services</h3>
              <p>Our 3D BIM Modeling services ensure that all aspects of design and construction work in a coordinated manner!</p>
              <ul>
                <li>With the replacement of AutoCAD drafting with BIM, designers can now create 1:1 scale virtual models of buildings.</li>
                <li>One of the most powerful aspects of our custom 3D modeling service is that designers can create floor plans, sections and elevations by taking snapshots from different perspectives. This was not possible previously when building plans used to be created in CAD software.</li>
                <li>Using Revit BIM modeling, it is possible to create color fill, 3D perspective, detailed drawing, and rendering limited walkthrough animation.</li>
                <li>Our 3D model outsourcing services aim at bringing coordination and collaboration between various disciplines of architectural, structural and MEP; and increase accuracy in design decisions</li>
                <li>We deliver clash-free 3D Revit modeling services for building plans to help contractors avoid rework and save cost and time.</li>
                <li>If there is a change to any element, it would automatically propagate to keep the model consistent. For example, a change is made to the location of a wall, it would update the adjacent walls, roofs, floors, adjust the floor areas reported in schedules, redraw section views and correct the placement and values of dimensions and notes. As a result, we can get all the documentation coordinated even after the change.</li>
              </ul>
              <h3>Our revit bim service</h3>
              <p>We offer quality Revit BIM services at reasonable prices in multiple disciplines like structural, architectural and MEP BIM services.</p>
              <p>Our skilled professional team develops a 3D Revit BIM model based on interior elevations, details, floor plans and sections provided by the clients into a BIM model.</p>
              <p>We use Revit Families Creation for architectural objects like windows, walls, doors, cabinetry, furniture, etc. The ‘custom’ families that we create, match the unique building systems, furniture, and equipment of clients.</p>
              <h3>Flexibility to Expand</h3>
              <p>We have the flexibility to expand the existing Revit architectural background to include mechanical, electrical and plumbing equipment or rotate it in various directions to view the different perspectives of the building. This helps to identify and avoid conflicts between different building systems.</p>
            </div>
        </div>
        </Layout>
    </>
  )
}
export default bim;