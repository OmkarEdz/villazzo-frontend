import React, { useState, useEffect } from "react"
// import Articles from "../components/articles";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import menuIcon from "../assets/images/villazzo-symbol.png"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import { Range } from 'react-range'
import Link from 'next/link'


const Buy = ({
  global,
  homepage,
  footerData,
  navigation,
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  let defaultState = {values:[20]}
  let [state, setState] = useState(defaultState)
  return (
    <>
      <div className="bg-img">
        <div className="homepage-image">
          <Image
            loader={myLoader}
            src={getStrapiMedia(homepage.attributes.headerImage)}
            className="header_image"
            layout="fill"
            alt="Villazzo"
          />
        </div>
        <Header navigation={navigation} global={global} />
        <div className="buttons-wrap">
            <div className="sell-search-container buy">
              <div className="selltxt">
                <h3 className="propertytxt">THE PERFECT HOME FOR YOU</h3>
                <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have!.</p>
              </div>
              <div className="buy-search-box">
                <div className="row">
                  <div className="col-md-4">
                    <label className="">LOCATION</label>
                    <input type="text" className="form-control" placeholder="CITY, REGION"/>
                  </div>
                  <div className="col-md-3">
                    <label className="">PROPERTY TYPE</label>
                    <select className="form-control" placeholder="PROPERTY TYPE">
                      <option value="any">Any</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="">PRICE RANGE</label>
                    <Range
                      step={0.1}
                      initial={10}
                      min={0}
                      max={100}
                      values={state.values}
                      onChange={(values) => setState({ values })}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '4px',
                            width: '100%',
                            marginTop: '20px',
                            backgroundColor: '#f7dd80'
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '15px',
                            width: '15px',
                            borderRadius: '25px',
                            backgroundColor: '#fff',
                            borderColor:'#f7dd80',
                            borderStyle:'solid',
                            borderWidth: '4px'
                          }}
                        />
                      )}
                    />
                  </div>
                  <div className="col-md-1 search-icon-box">
                    <Link href="/search">
                      <a className="search-button icon-btn"><i className="fa fa-search" aria-hidden="true"></i></a>
                    </Link>
                    <Link href="/search">
                      <a className="search-button for-mobile"><i className="fa fa-search" aria-hidden="true"></i> Search</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sell-search-box">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" className="search-input"/>
                <Link href="/search">
                  <a className="search-button">MLS SEARCH</a>
                </Link>
              </div>
            </div>
            
        </div>
      </div>
      <Footer footerProp={footerData} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    globalRes,
    homepageRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/homepage", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      homepage: homepageRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default Buy