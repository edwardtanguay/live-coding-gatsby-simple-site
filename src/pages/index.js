import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const links = [
  {
    text: "Welcome",
    url: "/",
    badge: false,
    description:
      "Welcome page",
  },
  {
    text: "Info",
    url: "/info",
    badge: false,
    description:
      "This is the info page",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <div className={styles.textCenter}>
      <nav>
        {links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== links.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        </nav>
      <h1>Welcome</h1>
      <StaticImage
        src="../images/city.jpg"
        loading="eager"
        width={364}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
  </Layout>
)

export default IndexPage
