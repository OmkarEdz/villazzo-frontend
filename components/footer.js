import React from "react"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"

const Footer = ({ footerProp }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <>
      <div className="footer-bg-color">
        <div className="footer-container container-fluid">
          <footer>
            <div className="footer-wrap">
              <div className="footer-links">
                <div className="footer-sec1">
                  <div className="toll-wrap left-section" dangerouslySetInnerHTML={{__html: footerProp.attributes.leftSectionContent}}>
                  </div>
                </div>
                <div className="navigate-wrap">
                  <b>
                    <p className="text-navigate">NAVIGATE</p>
                  </b>
                  <div className="navigate">
                    <div className="navigate-links">
                      {footerProp.attributes.navigateLinksLeft.map((value, index) => (
                        <div className="navigate-sec1" key={`left${index}`}>
                          <a href={value.URL} key={`left-links${index}`}>{value.Label}</a>
                        </div>
                      ))}
                    </div>
                    <div className="navigate-links">
                      {footerProp.attributes.navigateLinksRight.map((value, index) => (
                        <div className="navigate-sec1" key={`right${index}`}>
                          <a href={value.URL} key={`right-links${index}`}>{value.Label}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="connect-wrap">
                    <div className="footer-icons">
                      <p>CONNECT:</p>
                      <div className="icons-wrap">
                        {footerProp.attributes.socialConnect.map((value, index) => (
                          value.Account=='Email' ? <a href={value.URL} key={`footer-links${index}`}>
                          <i className='fa-solid fa-envelope' key={`ico${index}`}></i>
                          </a> :
                          value.URL && <a href={value.URL} key={`social${index}`}>
                            <i className={`fa-brands fa-${value.Account.toLowerCase()}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-images-wrap">
                <div className="footer-images">
                  {footerProp.attributes.featuredImages.map((fImage, index) => (
                    <a href={fImage.URL} className="footer-img" key={`featuredImages${index}`}>
                      <div className="featured-img">
                        <Image
                          loader={myLoader}
                          src={getStrapiMedia(
                            fImage.Hero
                          )}
                          key={`featuredImage${index}`}
                          layout="fill"
                          alt="footerImage"
                        />
                      </div>
                      <div className="footer-logo-img">
                        <Image
                          loader={myLoader}
                          src={getStrapiMedia(
                            fImage.Logo
                          )}
                          key={`featuredImageLogo${index}`}
                          layout="fill"
                          alt="Logo"
                        />
                      </div>
                    </a>
                  ))}
                  {/* <div className="footer-img">
                    <Image
                      loader={myLoader}
                      src={getStrapiMedia(
                        footerProp.attributes.firstFeaturedImage
                      )}
                      layout="fill"
                      alt="footerImage"
                    />
                  </div>
                  <div className="footer-img">
                    <Image
                      loader={myLoader}
                      src={getStrapiMedia(
                        footerProp.attributes.secondFeaturedImage
                      )}
                      layout="fill"
                      alt="footerImage"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-page-links">
          {footerProp.attributes.copyrightLinks.map((value, index) => (
            <div className="year" key={`copyright${index}`}>
              <a href={value.URL} key={`links${index}`}>{value.Label}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Footer
