"use strict";
exports.id = 911;
exports.ids = [911];
exports.modules = {

/***/ 8744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6017);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Image = ({ image , style  })=>{
    const { url , alternativeText , width , height , cssStyle  } = image.data.attributes;
    // const loader = () => {
    //   return getStrapiMedia(image)
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        // loader={loader}
        layout: "fill",
        width: width || "100%",
        height: height || "100%",
        objectFit: "contain",
        src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiMedia */ .$)(image),
        alt: alternativeText || "",
        className: cssStyle || ""
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 8050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/nav.js



const Nav = ({ categories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "uk-navbar-container",
            "data-uk-navbar": true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "uk-navbar-left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "uk-navbar-nav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Strapi Blog"
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "uk-navbar-right",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "uk-navbar-nav",
                        children: categories.map((category)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/category/${category.attributes.slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "uk-link-reset",
                                        children: category.attributes.name
                                    })
                                })
                            }, category.id);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./components/layout.js


const Layout = ({ children , categories , seo  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav, {
                categories: categories
            }),
            children
        ]
    });
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8510);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6017);





const Seo = ({ seo  })=>{
    const { defaultSeo , siteName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);
    const seoWithDefaults = {
        ...defaultSeo,
        ...seo
    };
    const fullSeo = {
        ...seoWithDefaults,
        // Add title suffix
        metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
        // Get full image URL
        shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(seoWithDefaults.shareImage)
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            fullSeo.metaTitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: fullSeo.metaTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: fullSeo.metaTitle,
                        "maximum-scale": "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: fullSeo.metaTitle,
                        "maximum-scale": "1"
                    })
                ]
            }),
            fullSeo.metaDescription && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: fullSeo.metaDescription,
                        "maximum-scale": "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: fullSeo.metaDescription,
                        "maximum-scale": "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: fullSeo.metaDescription,
                        "maximum-scale": "1"
                    })
                ]
            }),
            fullSeo.shareImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: fullSeo.shareImage,
                        "maximum-scale": "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: fullSeo.shareImage,
                        "maximum-scale": "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "image",
                        content: fullSeo.shareImage,
                        "maximum-scale": "1"
                    })
                ]
            }),
            fullSeo.article && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "article",
                "maximum-scale": "1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image",
                "maximum-scale": "1"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ })

};
;