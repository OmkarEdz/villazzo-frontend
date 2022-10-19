import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const Teams = ({
  global,
  teamspage,
  footerData,
  navigation,
}) => {
    let membersList = teamspage.attributes.Member
    let mainMembersList = []
    membersList.forEach((element) => {
      mainMembersList.push(element)
      console.log(element)
    })
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
  return (
    <>
      <div className="bg-img bg-white team_main_pg">
        <Header navigation={navigation} global={global} />
        <div className="container">
          <div className="buttons-wrap video-wrapper team-wrapper">
            <h1 className="team-heading team">MEET THE TEAM</h1>
            <div className="meet-wrap">
              {mainMembersList.map((element) => (
              <div key={mainMembersList.key} className="meet-left main-team">
                <p className="meet-left-img">
                  <Image
                    loader={myLoader}
                    src='https://res.cloudinary.com/usability-designs/image/upload/v1665984008/team_aa59daf099.png'
                    className="header_image"
                    layout="fill"
                    alt="Villazzo"
                  />
                </p>
                <h3 className="meet-left-name">{element.memberName}</h3>
                <p className="broker">{element.memberType}</p>
                <a className="number" href="javascript:;">{element.contactNo}</a>
                <a className="email" href='javascript:;'>{element.memberEmail}</a>
              </div>
              ))}
            </div>
            <div className="inqury-btn contact-btn">
              <a href="javascript:;">CONTACT US</a>
            </div>
            <div className="find-hotel">
              <a href="javascript:;">Find More about our Villa Hotels</a>
            </div>
          </div>	
        </div>
        <div className="team-banner">
            <div className="banner-img">
                          <Image
                              loader={myLoader}
                              src={getStrapiMedia(teamspage.attributes.moreVillaImageDesktop)}
                              className="desktop"
                              layout="fill"
                              alt="Villazzo"
                          />
                          <Image
                              loader={myLoader}
                              src={getStrapiMedia(teamspage.attributes.moreVillaImageMob)}
                              className="mobile"
                              layout="fill"
                              alt="Villazzo"
                          />
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
    teamspageRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/teamspage", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      teamspage: teamspageRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default Teams
