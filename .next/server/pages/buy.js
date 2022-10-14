"use strict";
(() => {
var exports = {};
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 9416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ buy),
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
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(6017);
;// CONCATENATED MODULE: external "react-range"
const external_react_range_namespaceObject = require("react-range");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/buy.js


// import Articles from "../components/articles";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import menuIcon from "../assets/images/villazzo-symbol.png"








const Buy = ({ global , homepage , footerData , navigation  })=>{
    const myLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    const router = (0,router_.useRouter)();
    let defaultState = {
        values: [
            100
        ]
    };
    let { 0: state , 1: setState  } = (0,external_react_.useState)(defaultState);
    const { 0: location , 1: setLocation  } = (0,external_react_.useState)("");
    const { 0: propertyType , 1: setPropertyType  } = (0,external_react_.useState)("8");
    const handleSubmit = (event)=>{
        event.preventDefault();
        let searchURL = "/search/?loc=" + location + "&t=" + propertyType + "&p=" + state.values[0];
        router.push(searchURL);
    // alert(JSON.stringify(state))
    // alert(`The state you entered was: ${state}`)
    };
    const currencyFormat = (num)=>{
        return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-img",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "homepage-image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            loader: myLoader,
                            src: (0,media/* getStrapiMedia */.$)(homepage.attributes.headerImage),
                            className: "header_image",
                            layout: "fill",
                            alt: "Villazzo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                        navigation: navigation,
                        global: global
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "buttons-wrap",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sell-search-container buy",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "selltxt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "propertytxt",
                                            children: "THE PERFECT HOME FOR YOU"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium libero faucibus pharetra consequat. Aliquam cursus risus in nunc venenatis mattis. Suspendisse arcu mi, dapibus quis volutpat sit amet, ultricies non eros."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "buy-search-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: handleSubmit,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "",
                                                            children: "LOCATION"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            onChange: (e)=>setLocation(e.target.value),
                                                            placeholder: "CITY, REGION"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-md-3 prop_type",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "",
                                                            children: "PROPERTY TYPE"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                            className: "form-control",
                                                            placeholder: "PROPERTY TYPE",
                                                            onChange: (e)=>setPropertyType(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "8",
                                                                    children: "Commercial"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "2",
                                                                    children: "Condo/Townhouse/Co-Op"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "4",
                                                                    children: "Farms/Ranch"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "9",
                                                                    children: "Lot/Land/Acreage"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "3",
                                                                    children: "Mobile/Manufactured"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "6",
                                                                    children: "Multi Family"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "5",
                                                                    children: "Rental Properties"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "7",
                                                                    children: "Residential Income"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "7",
                                                                    children: "Single Family"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "10",
                                                                    children: "Vacation/Time-Share"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "",
                                                            children: "PRICE RANGE"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_range_namespaceObject.Range, {
                                                            step: 100,
                                                            initial: 100,
                                                            min: 100,
                                                            max: 100000,
                                                            values: state.values,
                                                            onChange: (values)=>setState({
                                                                    values
                                                                }),
                                                            renderTrack: ({ props , children  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    ...props,
                                                                    style: {
                                                                        ...props.style,
                                                                        height: "4px",
                                                                        width: "100%",
                                                                        marginTop: "15px",
                                                                        backgroundColor: "#f7dd80"
                                                                    },
                                                                    children: children
                                                                }),
                                                            renderThumb: ({ props  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    ...props,
                                                                    style: {
                                                                        ...props.style,
                                                                        height: "15px",
                                                                        width: "15px",
                                                                        borderRadius: "25px",
                                                                        backgroundColor: "#fff",
                                                                        borderColor: "#f7dd80",
                                                                        borderStyle: "solid",
                                                                        borderWidth: "4px"
                                                                    }
                                                                })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("output", {
                                                            style: {
                                                                marginTop: "5px",
                                                                float: "right"
                                                            },
                                                            id: "output",
                                                            children: currencyFormat(state.values[0])
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-md-1 search-icon-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            className: "search-button icon-btn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-search",
                                                                "aria-hidden": "true"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/search",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "search-button for-mobile",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-search",
                                                                        "aria-hidden": "true"
                                                                    }),
                                                                    " ",
                                                                    "Search"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sell-search-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-search",
                                            "aria-hidden": "true"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "search-input"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/search",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "search-button",
                                                children: "MLS SEARCH"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
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
    const [globalRes, homepageRes, footerRes, navigationRes] = await Promise.all([
        (0,api/* fetchAPI */.I)("/global", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/homepage", {
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
            homepage: homepageRes.data,
            footerData: footerRes.data,
            navigation: navigationRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const buy = (Buy);


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,17,151,683], () => (__webpack_exec__(9416)));
module.exports = __webpack_exports__;

})();