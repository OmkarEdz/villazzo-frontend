import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const Sold = ({
  global,
  footerData,
  navigation,
}) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <>
      <div className="bg-img bg-white new_dev_pg_wrap sold_pg_wrap">
        <Header navigation={navigation} global={global} />
        <div className="container">
			<div className="buttons-wrap video-wrapper team-wrapper dev-wrapper sold-by-wrapper">
				<h1 className="sold-heading sold-by-heading">SOLD BY 
					<span className="heading-img">
						<Image
							loader={myLoader}
							src='https://res.cloudinary.com/usability-designs/image/upload/v1666154651/sold_4ed5eab465.png?updated_at=2022-10-19T04:44:09.656Z'
							className="img"
							layout="fill"
							alt="Villazzo"
						/>
					</span>
				</h1>
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
						<h4 className="pro-name">HEADLINE GOES HERE</h4>
						<p className="pro-text">Subheading goes here</p>
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
						<h4 className="pro-name">HEADLINE GOES HERE</h4>
						<p className="pro-text">Subheading goes here</p>
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
						<h4 className="pro-name">HEADLINE GOES HERE</h4>
						<p className="pro-text">Subheading goes here</p>
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
						<h4 className="pro-name">HEADLINE GOES HERE</h4>
						<p className="pro-text">Subheading goes here</p>
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
						<h4 className="pro-name">HEADLINE GOES HERE</h4>
						<p className="pro-text">Subheading goes here</p>
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
						<h4 className="pro-name">HEADLINE GOES HERE</h4>
						<p className="pro-text">Subheading goes here</p>
					</div>
				</div>
				<div className="video-btn sold-btn contact-btn">
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

export default Sold
