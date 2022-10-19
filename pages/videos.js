import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const Videos = ({
  global,
  footerData,
  navigation,
}) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <>
      <div className="bg-img bg-white sold_pg_wrap videos_pg_wrap">
        <Header navigation={navigation} global={global} />
        <div className="container">
          <div className="buttons-wrap video-wrapper">
            <h1 className="video-heading">VIDEOS</h1>
            <div className="video-wrap">
              <div className="video-box">
                <div className="video_item_wrap">
                </div>
                <h2 className="video-name">NAME OF PROPERTY VIDEO</h2>
                <p className="video-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="video-box">
                <div className="video_item_wrap">
                </div>
                <h2 className="video-name">NAME OF PROPERTY VIDEO</h2>
                <p className="video-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="video-box">
                <div className="video_item_wrap">
                </div>
                <h2 className="video-name">NAME OF PROPERTY VIDEO</h2>
                <p className="video-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="video-box">
                <div className="video_item_wrap">
                </div>
                <h2 className="video-name">NAME OF PROPERTY VIDEO</h2>
                <p className="video-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="video-btn contact-btn sold-btn">
              <a href="javascript:;">MORE</a>
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
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default Videos
