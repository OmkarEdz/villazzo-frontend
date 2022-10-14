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
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <>
      <div className="bg-img bg-white">
        <Header navigation={navigation} global={global} />
        <div className="buttons-wrap video-wrapper team-wrapper">
			<h1 className="team-heading team">MEET THE TEAM</h1>
			<div className="meet-wrap">
				<div className="meet-left main-team">
					<p className="meet-left-img">
                    <Image
                        loader={myLoader}
                        src={getStrapiMedia(teamspage.attributes.memberImage)}
                        className="header_image"
                        layout="fill"
                        alt="Villazzo"
                    />
                    </p>
					<h3 className="meet-left-name">{teamspage.attributes.memberName}</h3>
					<p className="broker">{teamspage.attributes.memberType}</p>
					<a className="number" href="javascript:;">{teamspage.attributes.contactNo}</a>
					<a className="email" href='javascript:;'>{teamspage.attributes.memberEmail}</a>
				</div>
			</div>
			<div className="team-wrap">
				<div className="meet-left">
                    <p className="meet-left-img">
                        <Image
                            loader={myLoader}
                            src={getStrapiMedia(teamspage.attributes.memberImage1)}
                            className="header_image"
                            layout="fill"
                            alt="Villazzo"
                        />
                    </p>
					<h3 className="meet-left-name">{teamspage.attributes.memberName1}</h3>
					<p className="broker">{teamspage.attributes.memberType1}</p>
					<a className="number" href="javascript:;">{teamspage.attributes.contactNo1}</a>
					<a className="email" href='javascript:;'>{teamspage.attributes.memberEmail1}</a>
				</div> 
				<div className="meet-left">
                    <p className="meet-left-img">
                    <Image
                        loader={myLoader}
                        src={getStrapiMedia(teamspage.attributes.memberImage2)}
                        className="header_image"
                        layout="fill"
                        alt="Villazzo"
                    />
                    </p>
					<h3 className="meet-left-name">{teamspage.attributes.memberName2}</h3>
					<p className="broker">{teamspage.attributes.memberType2}</p>
					<a className="number" href="javascript:;">{teamspage.attributes.contactNo2}</a>
					<a className="email" href='javascript:;'>{teamspage.attributes.memberEmail2}</a>
				</div>
				<div className="meet-left">
                    <p className="meet-left-img">
                        <Image
                            loader={myLoader}
                            src={getStrapiMedia(teamspage.attributes.memberImage3)}
                            className="header_image"
                            layout="fill"
                            alt="Villazzo"
                        />
                    </p>
					<h3 className="meet-left-name">{teamspage.attributes.memberName3}</h3>
					<p className="broker">{teamspage.attributes.memberType3}</p>
					<a className="number" href="javascript:;">{teamspage.attributes.contactNo3}</a>
					<a className="email" href='javascript:;'>{teamspage.attributes.memberEmail3}</a>
				</div>
			</div>
			<div className="inqury-btn contact-btn">
				<a href="javascript:;">CONTACT US</a>
			</div>
			<div className="find-hotel">
				<a href="javascript:;">Find More about our Villa Hotels</a>
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
