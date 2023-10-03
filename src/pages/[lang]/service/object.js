
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../../components/layout'


const object = function ({ children }) {
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
              <a href="#" className="modeling">
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
              <h2>BIM Object Modeling</h2>
              <h3>Assuring High-Quality Output</h3>
              <p>BIM Object Modeling families creation requires specialized expertise as each and every element of the family has to be modeled, keeping the geometry of the family at the core. Bimodel has trained and developed a specialized team primarily focusing on BIM Object Modeling projects, assuring a high-quality output.</p>
              <h3>Advantages of BIM Object Modeling Family Creation</h3>
              <p>With BIM Object Modeling family Creation, we can display the parameter of actual equipment & imperative geometrical components of various elements like windows, boilers, tables, chairs, walls, etc., through graphics.</p>
              <ul>
                <li>BIM Object Modeling family creation has other parameters such as formula and imported data that will result in a better surface finish.</li>
                <li>It helps to create more accurate models irrespective of size and design.</li>
                <li>It enables feasible and economical re-sizing of models.</li>
                <li>It maintains relationships and coordination in various units or parts of a design or model.</li>
                <li>The model designed using BIM Object Modelingappears as realistic as possible and it involves accurate constructional documentation.</li>
                <li>Family creation services provide 3D BIM Object Modelings that can be used for accurate building analysis and estimating purposes.</li>
              </ul>
              <h3>BIM Object Modeling Family Creation Services</h3>
              <p>Using BIM Object Modeling family creation services, many more items like curtain wall panels, ceilings, furniture, fixtures, counters, plumbing fixtures, electrical fixtures, machine parts, elevators, insulators and HVAC pumps can be created.</p>
              <ul>
                <li>Structure family creation</li>
                <li>Architecture family creation</li>
                <li>Structural Family Creation</li>
                <li>MEP Family Creation</li>
                <li>Building System Families</li>
                <li>BIM Families</li>
                <li>Structural Components</li>
                <li>MEP BIM Object Modeling families</li>
                <li>Fixtures, Custom Applications</li>
                <li>Partitions, Windows,u Walls, Doors</li>
                <li>Related Cstom and Supporting Content</li>
                <li>Related custom and supporting doors</li>
              </ul>
              <h3>Steps of BIM Object Modeling Family Creation Services</h3>
              <p>The most successful software, BIM Object Modeling is nowadays used in various building information modeling projects. The detailed steps followed in offering effective BIM families are given here.</p>
              <ul>
                <li>Choose the family template</li>
                <li>Plan the parameters</li>
                <li>Create the model geometry</li>
                <li>Assign the object subcategories according to the needs</li>
                <li>Set up the visibility rules</li>
                <li>Create family types</li>
              </ul>
              <p>We at Bimodel provide fast and veritable BIM Object Modeling Family Creation services for different projects like residential, commercial, educational, industrial buildings. The highly skilled and experienced dynamic team of BIM Object Modeling family designers in Bimodel ensures the most superior quality services with fast turnaround time and at a reasonable rate.</p>
            </div>
        </div>
        </Layout>
    </>
  )
}
export default object;