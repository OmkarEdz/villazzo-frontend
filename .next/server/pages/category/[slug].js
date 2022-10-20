"use strict";
(() => {
var exports = {};
exports.id = 24;
exports.ids = [24,888];
exports.modules = {

/***/ 4525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(8744);
;// CONCATENATED MODULE: ./components/card.js




const Card = ({ article  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/article/${article.attributes.slug}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "uk-link-reset",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "uk-card uk-card-muted",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "uk-card-media-top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                            image: article.attributes.image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "uk-card-body",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                id: "category",
                                className: "uk-text-uppercase",
                                children: article.attributes.category.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                id: "title",
                                className: "uk-text-large",
                                children: article.attributes.title
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./components/articles.js



const Articles = ({ articles  })=>{
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "uk-child-width-1-2@s",
            "data-uk-grid": "true",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: leftArticles.map((article, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(card, {
                            article: article
                        }, `article__left__${article.attributes.slug}`);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "uk-child-width-1-2@m uk-grid-match",
                        "data-uk-grid": true,
                        children: rightArticles.map((article, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(card, {
                                article: article
                            }, `article__left__${article.attributes.slug}`);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const articles = (Articles);

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(8050);
// EXTERNAL MODULE: ./components/seo.js
var components_seo = __webpack_require__(7187);
;// CONCATENATED MODULE: ./pages/category/[slug].js





const Category = ({ category , categories  })=>{
    const seo = {
        metaTitle: category.attributes.name,
        metaDescription: `All ${category.attributes.name} articles`
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        categories: categories.data,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_seo/* default */.Z, {
                seo: seo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "uk-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "uk-container uk-container-large",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: category.attributes.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(articles, {
                            articles: category.attributes.articles.data
                        })
                    ]
                })
            })
        ]
    });
};
async function getStaticPaths() {
    const categoriesRes = await (0,api/* fetchAPI */.I)("/categories", {
        fields: [
            "slug"
        ]
    });
    return {
        paths: categoriesRes.data.map((category)=>({
                params: {
                    slug: category.attributes.slug
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const matchingCategories = await (0,api/* fetchAPI */.I)("/categories", {
        filters: {
            slug: params.slug
        },
        populate: {
            articles: {
                populate: "*"
            }
        }
    });
    const allCategories = await (0,api/* fetchAPI */.I)("/categories");
    return {
        props: {
            category: matchingCategories.data[0],
            categories: allCategories
        },
        revalidate: 1
    };
}
/* harmony default export */ const _slug_ = (Category);


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,544,17,510,911], () => (__webpack_exec__(4525)));
module.exports = __webpack_exports__;

})();