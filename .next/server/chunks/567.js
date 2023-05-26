"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xc": () => (/* binding */ HomeSlider1),
  "SJ": () => (/* binding */ HomeSlider2),
  "_h": () => (/* binding */ HomeSlider3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/munfirmSlider.js

const munfirmSlider = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(1);
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            // 2 => total slider item
            setActive((prevState)=>active == 2 ? 1 : prevState + 1);
        }, 10000);
        return ()=>clearInterval(interval);
    }, [
        active
    ]);
    return {
        active,
        setActive
    };
};
/* harmony default export */ const src_munfirmSlider = (munfirmSlider);

;// CONCATENATED MODULE: ./src/components/HomeSlider.js




const HomeSlider1 = ()=>{
    const { active , setActive  } = src_munfirmSlider();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "slider-prev slick-arrow",
                onClick: ()=>setActive(active == 1 ? 2 : 1),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-chevron-left"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `slider-single-item slide-one ${active == 1 ? "slick-active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "slider-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sub-title mb-20",
                                                children: "Welcome to Munfirm"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: "Organic Foods & Vegetables"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "25 Years of experience in agriculture farming"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "slider-btns mt-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/shop-grid",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "theme-btn style-two",
                                                            children: [
                                                                "Shop Now ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-double-right"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/about",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "theme-btn style-two",
                                                            children: [
                                                                "Learn More ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-double-right"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "slider-images",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "image",
                                                src: "assets/images/slider/slider-image1.png",
                                                alt: "Slider"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "offer",
                                                src: "assets/images/shapes/organic.png",
                                                alt: "Organic"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-shapes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "pumpkin-shape",
                                src: "assets/images/slider/pumpkin.png",
                                alt: "Pumpkin"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "two-leaf",
                                src: "assets/images/slider/two-lear.png",
                                alt: "Leaf"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "half-leaf",
                                src: "assets/images/slider/half-leaf.png",
                                alt: "Leaf"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "leaf-one",
                                src: "assets/images/slider/leaf-1.png",
                                alt: "Leaf"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "leaf-two",
                                src: "assets/images/slider/leaf-2.png",
                                alt: "Leaf"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `slider-single-item slide-two ${active == 2 ? "slick-active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "slider-images",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "image",
                                                src: "assets/images/slider/slider-image2.png",
                                                alt: "Slider"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "offer",
                                                src: "assets/images/shapes/organic.png",
                                                alt: "Organic"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "slider-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sub-title mb-20",
                                                children: "Welcome to Munfirm"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: "Organic Foods & Vegetables"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "25 Years of experience in agriculture farming"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "slider-btns mt-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/shop-grid",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "theme-btn style-two",
                                                            children: [
                                                                "Shop Now ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-double-right"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/about",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "theme-btn style-two",
                                                            children: [
                                                                "Learn More ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-double-right"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-shapes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "pumpkin-shape",
                                src: "assets/images/slider/pumpkin.png",
                                alt: "Pumpkin"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "two-leaf",
                                src: "assets/images/slider/two-lear.png",
                                alt: "Leaf"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "half-leaf",
                                src: "assets/images/slider/half-leaf.png",
                                alt: "Leaf"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "leaf-one",
                                src: "assets/images/slider/leaf-1.png",
                                alt: "Leaf"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "leaf-two",
                                src: "assets/images/slider/leaf-2.png",
                                alt: "Leaf"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "slider-next slick-arrow",
                onClick: ()=>setActive(active == 2 ? 1 : 2),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-chevron-right"
                })
            })
        ]
    });
};
const HomeSlider2 = ()=>{
    const { active , setActive  } = src_munfirmSlider();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "slider-prev slick-arrow",
                onClick: ()=>setActive(active == 1 ? 2 : 1),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-chevron-left"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `slider-single-item style-two ${active == 1 ? "slick-active" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "slider-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sub-title mb-20",
                                            children: "Welcome to Munfirm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Organic Foods & Vegetables"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "slider-btns mt-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop-grid",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-two",
                                                        children: [
                                                            "Shop Now ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-two",
                                                        children: [
                                                            "Learn More ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "slider-images",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "image",
                                            src: "assets/images/slider/slider-two1.png",
                                            alt: "Slider"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "offer",
                                            src: "assets/images/shapes/organic.png",
                                            alt: "Organic"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `slider-single-item style-two ${active == 2 ? "slick-active" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "slider-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sub-title mb-20",
                                            children: "Welcome to Munfirm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Organic Foods & Vegetables"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "slider-btns mt-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-two",
                                                        children: [
                                                            "Learn More ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop-grid",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-two",
                                                        children: [
                                                            "Shop Now ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "slider-images",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "image",
                                            src: "assets/images/slider/slider-two3.png",
                                            alt: "Slider"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "offer",
                                            src: "assets/images/shapes/organic.png",
                                            alt: "Organic"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "slider-next slick-arrow",
                onClick: ()=>setActive(active == 2 ? 1 : 2),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-chevron-right"
                })
            })
        ]
    });
};
const HomeSlider3 = ()=>{
    const { active , setActive  } = src_munfirmSlider();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "slider-prev slick-arrow",
                onClick: ()=>setActive(active == 1 ? 2 : 1),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-chevron-left"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `slider-single-item style-three slide-one ${active == 1 ? "slick-active" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "slider-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sub-title mb-20",
                                            children: "Welcome to Munfirm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Organic Food & Vegetables"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "On the other hand we denounce with righteou indignation and dislike men who are so beguiled and demoralized"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "slider-btns mt-20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop-grid",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-two",
                                                        children: [
                                                            "Shop Now ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-three",
                                                        children: [
                                                            "Learn More ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7 col-lg-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "slider-images",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "image",
                                        src: "assets/images/slider/slider-three-1.png",
                                        alt: "Slider"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `slider-single-item style-three slide-two ${active == 2 ? "slick-active" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7 col-lg-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "slider-images",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "image",
                                        src: "assets/images/slider/slider-three-1.png",
                                        alt: "Slider"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "slider-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sub-title mb-20",
                                            children: "Welcome to Munfirm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Organic Food & Vegetables"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "On the other hand we denounce with righteou indignation and dislike men who are so beguiled and demoralized"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "slider-btns mt-20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop-grid",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-two",
                                                        children: [
                                                            "Shop Now ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "theme-btn style-three",
                                                        children: [
                                                            "Learn More ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-angle-double-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "slider-next slick-arrow",
                onClick: ()=>setActive(active == 2 ? 1 : 2),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-chevron-right"
                })
            })
        ]
    });
};


/***/ })

};
;