"use strict";
(() => {
var exports = {};
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 4352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reviews),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(6151);
// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__(4683);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(6017);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./pages/reviews.js









var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true
};
const Reviews = ({ global , reviewspage , footerData , navigation ,  })=>{
    let reviewsList = reviewspage.attributes.Reviews;
    let mainReviewsList = [];
    reviewsList.forEach((element)=>{
        mainReviewsList.push(element);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-img bg-white reviews_pg_wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                        navigation: navigation,
                        global: global
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "slider-wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        charset: "UTF-8",
                                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "sliderHeader",
                                        children: "REVIEWS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                        ...settings,
                                        children: mainReviewsList.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "slider-content",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: element.Content
                                                })
                                            }, mainReviewsList.key))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "read-reviews",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "javascript:;",
                                    children: "READ ALL REVIEWS"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
                footerProp: footerData
            })
        ]
    });
};
async function getStaticProps() {
    // Run API calls in parallel
    const [globalRes, reviewspageRes, footerRes, navigationRes, ] = await Promise.all([
        (0,api/* fetchAPI */.I)("/global", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/reviewspage", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/footer", {
            populate: "deep"
        }),
        (0,api/* fetchAPI */.I)("/header-nav", {
            populate: "*"
        }), 
    ]);
    return {
        props: {
            global: globalRes.data,
            reviewspage: reviewspageRes.data,
            footerData: footerRes.data,
            navigation: navigationRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const reviews = (Reviews);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,17,151,683], () => (__webpack_exec__(4352)));
module.exports = __webpack_exports__;

})();