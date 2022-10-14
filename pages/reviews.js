import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'
import Slider from 'react-slick';

var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: true
  };

const Reviews = ({
  global,
  footerData,
  navigation,
}) => {
  return (
    <>
      <div className="bg-img bg-white reviews_pg_wrap">
        <Header navigation={navigation} global={global} />
        
        <div className="slider-wrapper">
        <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
        />    
            <h2 className="sliderHeader">REVIEWS</h2>
            <Slider {...settings}>
                <div className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
                <div  className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
                <div  className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
                <div  className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
                <div  className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
                <div  className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
                <div  className="slider-content">
                    <p>Gabriel has made the experience of finding a place extremely fun in a time that should be very stressful! He works tirelessly to make sure that you find the perfect place for you at the budget you have! Gabriel made the process of moving from NJ to Miami easy and also provided incredible insight on the area, building, and negotiation process. At no point of the process did I feel overwhelmed or worried because I knew Gabriel was a top level Realtor!! I would whole heartedly recommended Gabriel to anyone looking for a place in Miami!</p>
                </div>
            </Slider>
        </div>

        <div className="read-reviews">
            <a href="javascript:;">READ ALL REVIEWS</a>
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

export default Reviews
