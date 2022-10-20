"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4626);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6017);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


// import Articles from "../components/articles";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import menuIcon from "../assets/images/villazzo-symbol.png"





const Home = ({ global , homepage , footerData , articles , categories , navigation ,  })=>{
    const myLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    let navElements = navigation.attributes.Navigation;
    let mainNavigation = [];
    let menucount = 0;
    navElements.forEach((element, index)=>{
        if (element.__component === "shared.header-navigation") {
            console.log(index);
            mainNavigation.push(element);
            if (index === 0) {
                menucount = 0;
                mainNavigation[menucount].submenu = [];
            } else {
                menucount = menucount + 1;
                mainNavigation[menucount].submenu = [];
            }
        } else {
            mainNavigation[menucount].submenu.push(element);
        }
    });
    const { 0: toggleMenuClass , 1: toggleMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: subMenuClass , 1: subMenuToggleMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-img",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "homepage-image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            loader: myLoader,
                            src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_5__/* .getStrapiMedia */ .$)(homepage.attributes.headerImage),
                            className: "header_image",
                            layout: "fill",
                            alt: "Villazzo"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "header",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "main-wrap container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mobile-nav",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            className: "navbar navbar-expand-lg navbar-light hideOnDesk",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "container-fluid",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "navbar-toggler",
                                                        type: "button",
                                                        onClick: ()=>toggleMenu(toggleMenuClass = !toggleMenuClass),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-bars",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `navbar-collapse ${toggleMenuClass ? "" : "collapse"}`,
                                                        id: "navbarNavDropdown",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "navbar-nav",
                                                            children: mainNavigation.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "nav-item",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: menu.URL,
                                                                            className: `nav-link ${menu.showIcon === "Yes" ? "showIcon" : ""}`,
                                                                            onClick: ()=>subMenuToggleMenu(subMenuClass = !subMenuClass),
                                                                            children: [
                                                                                menu.Label,
                                                                                menu.submenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "arrow",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fa fa-chevron-down",
                                                                                        "aria-hidden": "true"
                                                                                    })
                                                                                }) : ""
                                                                            ]
                                                                        }, `nav-link-mobile${index}`),
                                                                        menu.submenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                            className: `dropdown-menu ${subMenuClass ? "active" : ""}`,
                                                                            children: menu.submenu.map((submenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        className: "dropdown-item",
                                                                                        href: submenu.URL,
                                                                                        children: submenu.Label
                                                                                    }, `nav-menu-item${index}dd${submenu.Label}`)
                                                                                }, `nav-li-mobile${index}sub${submenu.Label}`))
                                                                        }, `nav-submenu-mobile${index}`) : ""
                                                                    ]
                                                                }, `nav-menu-mobile${index}`))
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logo-wrap",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "villazzo-logo-wrap",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "main-logo",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        loader: myLoader,
                                                        src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_5__/* .getStrapiMedia */ .$)(global.attributes.companyLogo),
                                                        alt: "Image",
                                                        layout: "fill"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "visit-text",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Visit Our Sites"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "drop-down mb-drop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fa-solid fa-caret-down"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inquiry-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "inquiry",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "tel:+1(305)777 0146",
                                                        className: "desktop-inquiry-call",
                                                        children: "+1 (877) VILLAZZO"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "tel:+1(305)777 0146",
                                                        className: "mobile-inquiry-call",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-phone",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "see-more-text",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "SEE MORE OPTIONS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "drop-down",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-solid fa-caret-down"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "inqury-btn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: "INQUIRE"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "navbar navbar-expand-lg navbar-light bg-light hideOnMob",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container-fluid",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "navbar-toggler",
                                            type: "button",
                                            "data-bs-toggle": "collapse",
                                            "data-bs-target": "#navbarNavDropdown",
                                            "aria-controls": "navbarNavDropdown",
                                            "aria-expanded": "false",
                                            "aria-label": "Toggle navigation",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "navbar-toggler-icon"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "collapse navbar-collapse",
                                            id: "navbarNavDropdown",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "navbar-nav",
                                                children: mainNavigation.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: `nav-link ${menu.showIcon === "Yes" ? "showIcon" : ""}`,
                                                                href: menu.URL,
                                                                children: menu.Label
                                                            }, `nav-links-desk${index}`),
                                                            menu.submenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: "dropdown-menu",
                                                                children: menu.submenu.map((submenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "dropdown-item",
                                                                            href: submenu.URL,
                                                                            children: submenu.Label
                                                                        }, `nav-drop-item-desk${index}dd${submenu.Label}`)
                                                                    }, `nav-li-desk${index}dd${submenu.Label}`))
                                                            }, `nav-drop-desk${index}`) : ""
                                                        ]
                                                    }, `nav-menu-desk${index}`))
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "buttons-wrap",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sell-buy-rent-buttons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sell-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/sell",
                                        children: "SELL"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sell-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/buy",
                                        children: "BUY"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sell-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/buy",
                                        children: "RENT"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                footerProp: footerData
            })
        ]
    });
};
async function getStaticProps() {
    // Run API calls in parallel
    const [globalRes, homepageRes, footerRes, articleRes, categoryRes, navigationRes, ] = await Promise.all([
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/global", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/homepage", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/footer", {
            populate: "deep"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/articles", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/categories", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/header-nav", {
            populate: "*"
        }), 
    ]);
    return {
        props: {
            global: globalRes.data,
            homepage: homepageRes.data,
            footerData: footerRes.data,
            articles: articleRes.data,
            categories: categoryRes.data,
            navigation: navigationRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,17,151], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();