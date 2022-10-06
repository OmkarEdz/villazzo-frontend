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
import Link from 'next/link'


const Sell = ({
  global,
  homepage,
  footerData,
  navigation,
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
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
            <div className="sell-search-container">
              <div className="selltxt">
                <h3 className="propertytxt">SELL YOUR PROPERTY</h3>
                <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have!.</p>
              </div>
              <div className="sell-search-box">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" className="search-input"/>
                <Link href="#">
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

export default Sell
