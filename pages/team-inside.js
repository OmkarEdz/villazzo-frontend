import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const TeamsInside = ({
  global,
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
		<div className="container">
			<div className="buttons-wrap video-wrapper team-wrapper inside-wrap">
				<h1 className="team-heading">MEET THE TEAM</h1>
				<div className="meet-wrap">
					<div className="meet-left">
						<p className="meet-left-img">
							<Image
								loader={myLoader}
								src='https://res.cloudinary.com/usability-designs/image/upload/v1665984008/team_aa59daf099.png'
								className="header_image"
								layout="fill"
								alt="Villazzo"
							/>
						</p>
						<h3 className="meet-left-name">LISA BLAKE</h3>
						<p className="broker">BROKER</p>
						<a className="number" href="javascript:;">+1 (305) 340-2727</a>
						<a className="email" href="javascript:;">lisa.blake@villazo.com</a>
					</div>
					<div className="meet-right">
						<p> I make it a priority to help all of my clients & their families succeed. Real Estate is a lifestyle, and I'm passionate about helping everyone successfully find & secure their new home or to rent/sell their property to move on to new adventures. After all, your home is one of the most important aspects of your life. I specialize in luxury homes & condominiums throughout Miami Beach, Downtown / Brickell, Coconut Grove and Coral Gables. Fluent in both English & Spanish. Contact me to discuss further and move forward with your next Real Estate adventure. </p>
					</div>
				</div>
				<div className="properties">
					<h1 className="team-heading">FEATURED PROPERTIES</h1>
					<div className="property-wrap">
						<div className="property-box">
							<p className="img_Wrap">
								<Image
									loader={myLoader}
									src='https://res.cloudinary.com/usability-designs/image/upload/v1666097741/property_7cac483ea2.png?updated_at=2022-10-18T12:55:41.809Z'
									className="header_image"
									layout="fill"
									alt="Villazzo"
								/>
							</p>
							<h4 className="pro-name">THE WALDORF ASTORIA</h4>
							<p className="pro-text">Property Location</p>
						</div>
						<div className="property-box">
							<p className="img_Wrap">
								<Image
									loader={myLoader}
									src='https://res.cloudinary.com/usability-designs/image/upload/v1666097741/property_7cac483ea2.png?updated_at=2022-10-18T12:55:41.809Z'
									className="header_image"
									layout="fill"
									alt="Villazzo"
								/>
							</p>
							<h4 className="pro-name">aston martin</h4>
							<p className="pro-text">Property Location</p>
						</div>
						<div className="property-box">
							<p className="img_Wrap">
								<Image
									loader={myLoader}
									src='https://res.cloudinary.com/usability-designs/image/upload/v1666097741/property_7cac483ea2.png?updated_at=2022-10-18T12:55:41.809Z'
									className="header_image"
									layout="fill"
									alt="Villazzo"
								/>
							</p>
							<h4 className="pro-name">Elysee</h4>
							<p className="pro-text">Property Location</p>
						</div>
					</div>
				</div>
				<div className="video-btn contact-btn">
					<a href="javascript:;">CONTACT US</a>
				</div>
				<div className="find-hotel">
					<a href="javascript:;">Find More about our Villa Hotels</a>
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

export default TeamsInside
