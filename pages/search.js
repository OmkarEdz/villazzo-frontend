import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"

const Search = ({
  global,
  homepage,
  footerData,
  navigation,
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = "Villazzo | Search"
//     const script = document.createElement("script")
//     script.src = "//idx.diversesolutions.com/scripts/controls/Remote-Frame.aspx?MasterAccountID=1519186&amp;SearchSetupID=124&amp;LinkID=477464&amp;Height=2000";
//     script.async = true
//     document.getElementById("searchPage").appendChild(script)
//   })

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
        <div id="searchPage" className="page_layout">
            <iframe id="_dsSearchAgent_Idx_Frame_0" name="_dsSearchAgent_Idx_Frame_0" src="https://idx.diversesolutions.com/link/#-" scrolling="no" style={{width: '100%', height: '940px', background: 'transparent', overflow: 'hidden'}} allowTransparency="true" frameBorder="0" seamless="seamless" mozAllowFullscreen="true" webkitAllowFullScreen="true" allowFullScreen="true" sandbox="allow-top-navigation allow-scripts allow-forms allow-modals allow-popups allow-same-origin"></iframe>
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

export default Search
