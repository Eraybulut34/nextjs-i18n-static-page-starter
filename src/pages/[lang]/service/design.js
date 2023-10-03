import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../../components/layout'


const design = function ({ children }) {
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
            <a href="#" className="modeling">
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
          </a>
        </div>
            </div>
            <div className="nav">
              <h2>Meb Shop Drawing Services</h2>
              <h3>MEP Shop Drawing Services | HVAC, Electrical, Plumbing, Fire</h3>
              <p>A mechanical, electrical, plumbing (MEP) coordinated shop drawing is a combined 3D rendering of the construction project by integrating all architectural, structural and trades shop drawings. A drawing or a set of drawings, which are required for prefabricated components like trusses, elevators, structural steel, windows, cabinets, appliances, mill-work, and air handling units and produced by the contractor, supplier, manufacturer, fabricator, or sub-contractors, are called shop drawings.</p>
              <p>An MEP HVAC shop drawing is the drawn version of the information in the construction documents. It includes dimensions, manufacturing standards, fabrication and contains more details compared to construction documents.</p>
              <p>An MEP shop drawing that emphasizes a particular product or installation has a very different style from that of the architect’s drawing.</p>
              <h3>Coordinated MEP shop drawings provide support for design-build projects in various areas like:</h3>
              <ul>
                <li>Electrical component technical drawings</li>
                <li>Composite drawings</li>
                <li>Underground and above-ceiling coordination</li>
                <li>Coordinated shop drawings</li>
                <li>Sheet metal drawings</li>
                <li>Pipe fabrication drawings</li>
                <li>HVAC shop drawings</li>
                <li>Duct shop drawings</li>
                <li>Plumbing construction shop drawings</li>
                <li>Fabrication Drawing</li>
                <li>Plumbing Shop Drawing</li>
                <li>Mechanical piping detail drawings</li>
                <li>Mechanical room HVAC detailed drawings</li>
                <li>Equipment Placement</li>
              </ul>
              <h3>Why Use MEP Coordinated Shop Drawings?</h3>
              <p>Using Revit family creation services, many more items like curtain wall panels, ceilings, furniture, fixtures, counters, plumbing fixtures, electrical fixtures, machine parts, elevators, insulators, and HVAC pumps can be created.</p>
              <ul>
                <li>The MEP coordinated shop drawings that include HVAC, electrical, plumbing, piping, and duct-work layout drawings, enable engineers to create better fabrication drawings, installation, schedule trades, and other activities related to construction.</li>
                <li>These drawings ensure that each contractor gets a place for his system which needs to be installed in a structure.</li>
                <li>It allows extraction and manipulation of data for trades and contributors and increases the accuracy of the building design and delivery process.</li>
                <li>It enhances building quality and productivity through improved off-site fabrication, enhanced plans, and better-informed trade crews.
                Potential problems are identified before fabrication and installation on the job site. It enables to view the building project as a whole than as a separate drawing.</li>
                <li>It provides the client cost savings of around 50% and improvements in delivery schedules of over 40%.</li>
              </ul>
            </div>
        </div>
        </Layout>
    </>
  )
}
export default design