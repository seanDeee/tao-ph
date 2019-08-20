(function () {
    var a, b, c = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a() {}
        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in a) d = a[c], null != d && (b[c] = d);
            return b
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a
    }(), b = this.WeakMap || (b = function () {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), this.WOW = function () {
        function d(a) {
            null == a && (a = {}), this.scrollCallback = c(this.scrollCallback, this), this.scrollHandler = c(this.scrollHandler, this), this.start = c(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new b
        }
        return d.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        }, d.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
        }, d.prototype.start = function () {
            var a, b, c, d;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                if (this.disabled()) return this.resetStyle();
                for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b], this.applyStyle(a, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
            }
        }, d.prototype.stop = function () {
            return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, d.prototype.show = function (a) {
            return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass
        }, d.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, d.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), d.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
            return e
        }, d.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, d.prototype.vendors = ["moz", "webkit"], d.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c], a["" + c] = d, f.push(function () {
                var b, f, g, h;
                for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                return h
            }.call(this));
            return f
        }, d.prototype.vendorCSS = function (a, b) {
            var c, d, e, f, g, h;
            for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);
            return c
        }, d.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, d.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, d.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, d.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, d.prototype.scrollCallback = function () {
            var a;
            return this.scrolled && (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), !this.boxes.length) ? this.stop() : void 0
        }, d.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, d.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, d.prototype.util = function () {
            return this._util || (this._util = new a)
        }, d.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, d
    }()
}).call(this);
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('smoothScroll', factory(root))
    } else if (typeof exports === 'object') {
        module.smoothScroll = factory(root)
    } else {
        root.smoothScroll = factory(root)
    }
})(this, function (root) {
    'use strict';
    var exports = {};
    var supports = !!document.querySelector && !!root.addEventListener;
    var settings;
    var defaults = {
        speed: 500,
        easing: 'easeInOutCubic',
        offset: 0,
        updateURL: !1,
        callbackBefore: function () {},
        callbackAfter: function () {}
    };
    var forEach = function (collection, callback, scope) {
        if (Object.prototype.toString.call(collection) === '[object Object]') {
            for (var prop in collection) {
                if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                    callback.call(scope, collection[prop], prop, collection)
                }
            }
        } else {
            for (var i = 0, len = collection.length; i < len; i++) {
                callback.call(scope, collection[i], i, collection)
            }
        }
    };
    var extend = function (defaults, options) {
        var extended = {};
        forEach(defaults, function (value, prop) {
            extended[prop] = defaults[prop]
        });
        forEach(options, function (value, prop) {
            extended[prop] = options[prop]
        });
        return extended
    };
    var easingPattern = function (type, time) {
        var pattern;
        if (type === 'easeInQuad') pattern = time * time;
        if (type === 'easeOutQuad') pattern = time * (2 - time);
        if (type === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        if (type === 'easeInCubic') pattern = time * time * time;
        if (type === 'easeOutCubic') pattern = (--time) * time * time + 1;
        if (type === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
        if (type === 'easeInQuart') pattern = time * time * time * time;
        if (type === 'easeOutQuart') pattern = 1 - (--time) * time * time * time;
        if (type === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
        if (type === 'easeInQuint') pattern = time * time * time * time * time;
        if (type === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time;
        if (type === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
        return pattern || time
    };
    var getEndLocation = function (anchor, headerHeight, offset) {
        var location = 0;
        if (anchor.offsetParent) {
            do {
                location += anchor.offsetTop;
                anchor = anchor.offsetParent
            } while (anchor);
        }
        location = location - headerHeight - offset;
        return location >= 0 ? location : 0
    };
    var getDocumentHeight = function () {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    };
    var trim = function (string) {
        return string.replace(/^\s+|\s+$/g, '')
    };
    var getDataOptions = function (options) {
        var settings = {};
        if (options) {
            options = options.split(';');
            options.forEach(function (option) {
                option = trim(option);
                if (option !== '') {
                    option = option.split(':');
                    settings[option[0]] = trim(option[1])
                }
            })
        }
        return settings
    };
    var updateUrl = function (anchor, url) {
        if (history.pushState && (url || url === 'true')) {
            history.pushState({
                pos: anchor.id
            }, '', anchor)
        }
    };
    exports.animateScroll = function (toggle, anchor, options, event) {
        var settings = extend(settings || defaults, options || {});
        var overrides = getDataOptions(toggle ? toggle.getAttribute('data-options') : null);
        settings = extend(settings, overrides);
        var fixedHeader = document.querySelector('[data-scroll-header]');
        var headerHeight = fixedHeader === null ? 0 : (fixedHeader.offsetHeight + fixedHeader.offsetTop);
        var startLocation = root.pageYOffset;
        var endLocation = getEndLocation(document.querySelector(anchor), headerHeight, parseInt(settings.offset, 10));
        var animationInterval;
        var distance = endLocation - startLocation;
        var documentHeight = getDocumentHeight();
        var timeLapsed = 0;
        var percentage, position;
        if (toggle && toggle.tagName.toLowerCase() === 'a' && event) {
            event.preventDefault()
        }
        updateUrl(anchor, settings.updateURL);
        var stopAnimateScroll = function (position, endLocation, animationInterval) {
            var currentLocation = root.pageYOffset;
            if (position == endLocation || currentLocation == endLocation || ((root.innerHeight + currentLocation) >= documentHeight)) {
                clearInterval(animationInterval);
                settings.callbackAfter(toggle, anchor)
            }
        };
        var loopAnimateScroll = function () {
            timeLapsed += 16;
            percentage = (timeLapsed / parseInt(settings.speed, 10));
            percentage = (percentage > 1) ? 1 : percentage;
            position = startLocation + (distance * easingPattern(settings.easing, percentage));
            root.scrollTo(0, Math.floor(position));
            stopAnimateScroll(position, endLocation, animationInterval)
        };
        var startAnimateScroll = function () {
            settings.callbackBefore(toggle, anchor);
            animationInterval = setInterval(loopAnimateScroll, 16)
        };
        if (root.pageYOffset === 0) {
            root.scrollTo(0, 0)
        }
        startAnimateScroll()
    };
    exports.init = function (options) {
        if (!supports) return;
        settings = extend(defaults, options || {});
        var toggles = document.querySelectorAll('[data-scroll]');
        forEach(toggles, function (toggle) {
            toggle.addEventListener('click', exports.animateScroll.bind(null, toggle, toggle.hash, settings), !1)
        })
    };
    return exports
});
! function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, g, h, e = this;
            if (e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (a, b) {
                        return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0
                }, e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, g = e.options.responsive || null, g && g.length > -1) {
                e.respondTo = e.options.respondTo || "window";
                for (h in g) g.hasOwnProperty(h) && (e.breakpoints.push(g[h].breakpoint), e.breakpointSettings[g[h].breakpoint] = g[h].settings);
                e.breakpoints.sort(function (a, b) {
                    return e.options.mobileFirst === !0 ? a - b : b - a
                })
            }
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init(), e.checkResponsive(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function (a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function () {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function (b) {
        var c = this,
            d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
        null !== d && d.slideHandler(b, !0)
    }, b.prototype.applyTransition = function (a) {
        var b = this,
            c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function () {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().width(100 / a.options.slidesPerRow + "%").css({
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function (b) {
        var d, e, f, c = this,
            g = c.$slider.width(),
            h = window.innerWidth || a(window).width();
        if ("window" === c.respondTo ? f = h : "slider" === c.respondTo ? f = g : "min" === c.respondTo && (f = Math.min(h, g)), c.originalSettings.responsive && c.originalSettings.responsive.length > -1 && null !== c.originalSettings.responsive) {
            e = null;
            for (d in c.breakpoints) c.breakpoints.hasOwnProperty(d) && (c.originalSettings.mobileFirst === !1 ? f < c.breakpoints[d] && (e = c.breakpoints[d]) : f > c.breakpoints[d] && (e = c.breakpoints[d]));
            null !== e ? null !== c.activeBreakpoint ? e !== c.activeBreakpoint && (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : null !== c.activeBreakpoint && (c.activeBreakpoint = null, c.options = c.originalSettings, b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f, g, h, d = this,
            e = a(b.target);
        switch (e.is("a") && b.preventDefault(), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c);
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function (a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).off("click.slick", b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", b.setPaused.bind(b, !0)).off("mouseleave.slick", b.setPaused.bind(b, !1)), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), b.options.autoplay === !0 && a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", b.setPaused.bind(b, !0)), b.$list.off("mouseleave.slick", b.setPaused.bind(b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function () {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function () {
        var b = this;
        b.autoPlayClear(), b.touchObject = {}, b.cleanUpEvents(), a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides && (b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), b.$slider.html(b.$slides)), b.cleanUpRows(), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized")
    }, b.prototype.disableTransition = function (a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: 1e3
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: 1e3
        }), b && setTimeout(function () {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll);
        else if (a.options.centerMode === !0) d = a.slideCount;
        else
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function (a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function () {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? (e = a.slideCount - a.options.slidesToShow + 1, a.options.centerMode === !0 && (e = a.slideCount)) : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function () {
        return this
    }, b.prototype.getSlideCount = function () {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function () {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildRows(), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [b])
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", b.setPaused.bind(b, !0)).on("mouseleave.slick", b.setPaused.bind(b, !1))
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.autoplay === !0 && a(document).on(b.visibilityChange, b.visibility.bind(b)), b.$list.on("mouseenter.slick", b.setPaused.bind(b, !0)), b.$list.on("mouseleave.slick", b.setPaused.bind(b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange.bind(b)), a(window).on("resize.slick.slick-" + b.instanceUid, b.resize.bind(b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.lazyLoad = function () {
        function g(b) {
            a("img[data-lazy]", b).each(function () {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function () {
                    b.animate({
                        opacity: 1
                    }, 200)
                }, d.src = c, b.css({
                    opacity: 0
                }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function (a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function () {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function () {
        var b = this,
            c = b.currentSlide;
        b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !1)
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function (a, b, c) {
        var d = this;
        d.options[a] = b, c === !0 && (d.unload(), d.reinit())
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function () {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function (a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, b.autoPlayClear())
    }, b.prototype.selectHandler = function (b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), c.$slides.eq(e).addClass("slick-active").attr("aria-hidden", "false"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(e).addClass("slick-center")), c.asNavFor(e), void 0) : (c.slideHandler(e), void 0)
    }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function () {
            i.postSlide(e)
        }) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e)
        }) : i.postSlide(e), void 0)))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function () {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function (a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function () {
        var a = this;
        a.destroy()
    }, b.prototype.updateArrows = function () {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function () {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay())
    }, a.fn.slick = function () {
        var g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length,
            f = 0;
        for (f; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
(function ($, window, undefined) {
    var lastTime = 0,
        running, animate = function (elem) {
            if (running) {
                window.requestAnimationFrame(animate, elem);
                jQuery.fx.tick()
            }
        },
        vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0, len = vendors.length; x < len && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (fn, element) {
            var currTime = new Date().getTime(),
                delta = currTime - lastTime,
                timeToCall = Math.max(0, 16 - delta);
            var id = window.setTimeout(function () {
                fn(currTime + timeToCall)
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        };
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id)
        }
    }
    jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !running) {
            running = !0;
            animate(timer.elem)
        }
    };
    jQuery.fx.stop = function () {
        running = !1
    }
}(jQuery, this));
eval(function (d, e, a, c, b, f) {
    b = function (a) {
        return (a < e ? "" : b(parseInt(a / e))) + (35 < (a %= e) ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        for (; a--;) f[b(a)] = c[a] || b(a);
        c = [function (a) {
            return f[a]
        }];
        b = function () {
            return "\\w+"
        };
        a = 1
    }
    for (; a--;) c[a] && (d = d.replace(new RegExp("\\b" + b(a) + "\\b", "g"), c[a]));
    return d
}('(12(g,n,R){12 F(a,b){18 1i(a.1C(b),10)||0}12 J(){17 a=n,b="4v";"gB"2T n||(b="gA",a=1x.3B||1x.2H);18{1c:a[b+"gy"],1e:a[b+"gx"]}}12 fa(){17 a=L();n.31.4o="";n.6J(a.x,a.y)}12 ga(a,b){a="3e://19.gr/gq/9C.7X?2h="+7U(a).1q(/!/g,"%21").1q(/\'/g,"%27").1q(/\\(/g,"%28").1q(/\\)/g,"%29").1q(/\\*/g,"%2A");g.6r({2h:a,7v:"9C"});g8=12(a){b.1m(11,a)}}12 S(a){17 b=[];g("*",a).1X(12(){17 a="";"5w"!=g(11).1C("aL-2F")?a=g(11).1C("aL-2F"):"2N"!=1d g(11).2L("2i")&&"7l"==11.8T.1Y()&&(a=g(11).2L("2i"));1a(-1==a.1N("g6"))1t(17 a=a.1q(/2h\\(\\"/g,""),a=a.1q(/2h\\(/g,""),a=a.1q(/\\"\\)/g,""),a=a.1q(/\\)/g,""),a=a.24(","),d=0;d<a.1g;d++)1a(0<a[d].1g&&-1==g.g4(a[d],b)){17 e="";D.6j&&9>D.2B&&(e="?"+M(9L*T()));b.4S(a[d]+e)}});18 b}12 Z(a){a=a.24(".").8v().1Y();17 b=-1!==a.1N("?")?a.24("?").8v():"";18 a.1q(b,"")}12 $(a){a=Z(a);18-1!==U.2F.1N(a)?"2F":-1!==U.2t.1N(a)?"2t":-1!==U.1H.1N(a)?"1H":"4p"}12 aa(a,b){18 1i(b/2l*a)}12 V(a){18(a=g3(a).1q(/^\\s+|\\s+$/g,"").5O(/^([^:\\/?#]+:)?(\\/\\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\\/?#]*)(?::(\\d*))?))?([^?#]*)(\\?[^#]*)?(#[\\s\\S]*)?/))?{2V:a[0]||"",5f:a[1]||"",4I:a[2]||"",fZ:a[3]||"",fY:a[4]||"",fX:a[5]||"",3I:a[6]||"",6y:a[7]||"",4o:a[8]||""}:1f}12 N(a,b){12 c(a){17 b=[];a.1q(/^(\\.\\.?(\\/|$))+/,"").1q(/\\/(\\.(\\/|$))+/g,"/").1q(/\\/\\.\\.$/,"/../").1q(/\\/?[^\\/]*/g,12(a){"/.."===a?b.8v():b.4S(a)});18 b.5y("").1q(/^\\//,"/"===a.4g(0)?"/":"")}b=V(b||"");a=V(a||"");18 b&&a?(b.5f||a.5f)+(b.5f||b.4I?b.4I:a.4I)+c(b.5f||b.4I||"/"===b.3I.4g(0)?b.3I:b.3I?(a.4I&&!a.3I?"/":"")+a.3I.7b(0,a.3I.79("/")+1)+b.3I:a.3I)+(b.5f||b.4I||b.3I?b.6y:b.6y||a.6y)+b.4o:1f}12 a7(a,b,c){11.78=11.78||{};11.78.ar=11.78.ar||{};17 d=0,e=0,f=0,l={fV:-6,fU:-5,a:-5,fT:-4,b:-4,fS:-3,fQ:-3,"#":-2,p:1,bh:1},d=12(a){a=(""+a).1q(/[7L\\-+]/g,".");a=a.1q(/([^.\\d]+)/g,".$1.").1q(/\\.{2,}/g,".");18 a.1g?a.24("."):[-8]},g=12(a){18 a?bt(a)?l[a]||-7:1i(a,10):0};a=d(a);b=d(b);e=ba(a.1g,b.1g);1t(d=0;d<e;d++)1a(a[d]!=b[d])1a(a[d]=g(a[d]),b[d]=g(b[d]),a[d]<b[d]){f=-1;1z}2f 1a(a[d]>b[d]){f=1;1z}1a(!c)18 f;4d(c){1r">":1r"gt":18 0<f;1r">=":1r"ge":18 0<=f;1r"<=":1r"fL":18 0>=f;1r"==":1r"=":1r"eq":18 0===f;1r"<>":1r"!=":1r"fI":18 0!==f;1r"":1r"<":1r"fD":18 0>f;8S:18 1f}}12 L(){17 a=0,b=0;"3g"==1d n.a9?(b=n.a9,a=n.fC):1x.2H&&(1x.2H.4s||1x.2H.4J)?(b=1x.2H.4J,a=1x.2H.4s):1x.3B&&(1x.3B.4s||1x.3B.4J)&&(b=1x.3B.4J,a=1x.3B.4s);18{x:a,y:b}}12 ca(a,b,c){17 d;d=q[a+b];1f==d&&(d=q[b]);18 1f!=d?(0==b.1N(a)&&1f==c&&(c=b.6A(a.1g)),1f==c&&(c=b),c+\'="\'+d+\'" \'):""}12 B(a,b){1a(0==a.1N("5Y#"))18"";0==a.1N("57#")&&1f==b&&(b=a.6A(4));18 ca("57#",a,b)}12 G(a,b){1a(0==a.1N("57#"))18"";0==a.1N("5Y#")&&1f==b&&(b=a.6A(4));18 ca("5Y#",a,b)}12 da(a,b){17 c,d="",e=b?" />":">";-1==a.1N("5Y#")&&(c=q["57#"+a],1f==c&&(c=q[a]),0==a.1N("57#")&&(a=a.6A(4)),1f!=c&&(d=\'  <3W 2e="\'+a+\'" 2M="\'+c+\'"\'+e+"\\n"));18 d}12 bB(){1t(17 a=0;a<2R.1g;a++){17 b=2R[a];5Z q[b];5Z q["5Y#"+b];5Z q["57#"+b]}}12 91(){17 a;a="fB";17 b=2R;1a(4>b.1g||0!=b.1g%2)b=j,b=b.1q("%%",a),61(b),a="";2f{q=[];q.2i=b[0];q.1c=b[1];q.1e=b[2];q.6n="6l:9f-9r-9u-9y-9B";q.4L="3e://5m.7j.3l/2W/7J/";a=b[3];1a(1f==a||""==a)a="6,0,2,0";q.7d="3e://5m.7j.3l/fA/fy.fx#2B="+a;1t(17 c,d=4;d<b.1g;d+=2)c=b[d].1Y(),a=b[d+1],"2e"==c||"7a"==c?q.2e=a:q[c]=a;b="<3q "+B("6n")+B("1c")+B("1e")+B("7d")+B("2e","7a")+B("77")+B("7w")+B("7r")+B("49")+B("8M")+B("1v")+B("1J")+B("aH")+B("aI")+">\\n"+da("2i",!1);d="  <8j "+G("2i")+G("1c")+G("1e")+G("4L")+G("2e")+G("8M")+G("77");bB("2i","1c","1e","4L","6n","7d","2e","77","7w","7r","49","8M","aI","1v","1J","aH");1t(c 2T q)a=q[c],1f!=a&&(d+=G(c),b+=da(c,!1));a=b+d+"> </8j>\\n</3q>"}18 a}17 U={2t:["fw"],2F:"ft fs fr fq fp fm fl fh ff".24(" "),4p:"fe fd fc fb f9 2J f8 7X bh f7 f5 f3 f2 f1 f0 eZ eY".24(" "),1H:"eX 9k eW eV eU 46 3t 7D 5d eT 8w".24(" ")},O=g(n),E=g(1x),D,C,H,z="",A=!!("eS"2T n)&&/eR|eQ|ae|af|ag|eP|eO|al eN/i.1F(69.7V),K=A?"3u.1E":"6a.1E",aK=A?"71.1E":"eM.1E",aP=A?"8l.1E":"eL.1E",W=A?"aX.1E":"b0.1E",I=4r.eK,P=4r.eJ,X=4r.eI,ba=4r.3F,Y=4r.3H,M=4r.eH,T=4r.eG,ea=12(a,b,c,d){17 e=11;e.14=b;e.3h=a.3h||a;e.4m=a.4m;e.99=d;1>c.1g?e.8s():e.1n=c;e.1j={1Q:e.1n.1g,2Y:0,1o:1f,1h:1f,1p:1f,3o:g("2H"),4c:0,1V:g(\'<1b 1v="19-1V"></1b>\'),2r:g(\'<1b 1v="19-2r"><1b></1b></1b>\'),1P:g(\'<1b 1v="19-1P"></1b>\'),3Y:g(\'<1b 1v="19-4v-1P"></1b>\'),1J:g(\'<1b 1v="19-1J"></1b>\'),9D:g(\'<a 1v="19-3Z" 1J="\'+e.14.2P.3Z+\'"></a>\'),6B:g(\'<a 1v="19-3c" 1J="\'+e.14.2P.7W+\'"></a>\'),81:g(\'<a 1v="19-4A" 1J="\'+e.14.2P.a0+\'"></a>\'),41:g(\'<a 1v="19-1h-42" 1J="\'+e.14.2P.1h+\'"></a>\'),43:g(\'<a 1v="19-1p-42" 1J="\'+e.14.2P.7q+\'"></a>\'),1O:g(\'<1b 1v="19-1O\'+(A?" 6z":"")+\'" 5a="18 2Z;"><1b 1v="19-23"></1b></1b>\'),2K:g(\'<1b 1v="19-1O\'+(A?" 6z":"")+\' 19-1h" 5a="18 2Z;"><1b 1v="19-23"></1b></1b>\'),2I:g(\'<1b 1v="19-1O\'+(A?" 6z":"")+\' 19-1p" 5a="18 2Z;"><1b 1v="19-23"></1b></1b>\'),2D:g(\'<a 1v="19-42 19-1h-42" 5a="18 2Z;" 1J="\'+e.14.2P.1h+\'"><2o></2o></a>\'),2n:g(\'<a 1v="19-42 19-1p-42" 5a="18 2Z;" 1J="\'+e.14.2P.7q+\'"><2o></2o></a>\'),1B:g(\'<1b 1v="19-1B" 5a="18 2Z;"><1b 1v="19-1B-23"><a 1v="19-1B-eE"></a><1b 1v="19-1B-6d"></1b></1b></1b>\'),6e:!1,3O:!1,3N:!1,3C:!1,3v:!1,8f:eC,2y:!1,34:!1,4x:0,3w:0,4z:0};e.1j.8B=e.1j.2D.2d(e.1j.2n);e.7B();e.bb();e.14.47=0<e.14.47&&e.14.47>=e.1j.1Q?e.1j.1Q-1:e.14.47;e.14.47=e.14.bf?M(T()*e.1j.1Q):e.14.47;e.1j.2Y=e.14.47;d?e.bg():e.7H();e.14.2w&&(e.7P(),O.3n(12(){e.7P()}));A&&(a=/(6a|4C|4X|eB|eA)/ez,e.14.1S.1u=e.14.1S.1u.1q(a,"3u"),e.14.1S.1U=e.14.1S.1U.1q(a,"3u"),e.14.1T.1u=e.14.1T.1u.1q(a,"3u"),e.14.1T.1U=e.14.1T.1U.1q(a,"3u"));e.14.2a.6v&&g.3x(e.14.1M,{63:0,62:0,6F:0,6M:0})};ea.48={5h:12(){11.1j.4c+=1;"1G"==11.14.3y.1Y()?11.1j.2r.1Z().2u({1y:"-9z"},11.14.1u.2p,"2U"):11.1j.2r.1Z().2u({1w:"-9z"},11.14.1u.2p,"2U")},4a:12(){11.1j.4c-=1;11.1j.4c=0>11.1j.4c?0:11.1j.4c;"1G"==11.14.3y.1Y()?0>=11.1j.4c&&11.1j.2r.1Z().2u({1y:"-9F"},11.14.1u.2p,"7O"):0>=11.1j.4c&&11.1j.2r.1Z().2u({1w:"-9F"},11.14.1u.2p,"7O")},5l:12(){17 a=11;a.1I={ey:a.1j.1O,ex:a.1j.2K,ew:a.1j.2I,et:a.1j.1o,em:a.1j.1h,ek:a.1j.1p,1U:12(){a.32()},4K:12(){0<2R.1g?a.3i(!0):a.3i()},3c:12(){a.4V()}}},8s:12(){17 a=11,b=[],c=[];g(a.3h,a.4m).1X(12(){17 d=g(11),e=d.2L(a.14.2L)||1f,f=d.1A("14")&&eb("({"+d.1A("14")+"})")||{},l=d.1A("1S"),k=d.1A("1J"),h=d.1A("1k")||$(e);c.4S({1s:e,1S:l,1J:k,1k:h,14:f});a.99||b.4S(d)});a.1n=c;a.6s=b},7B:12(){17 a=11,b=[];g.1X(a.1n,12(c,d){"3p"==1d d&&(d={2h:d});17 e=d.2h||d.1s||1f,f=d.14||{},l=d.1S||1f,k=d.1J||1f,h=d.1k?d.1k.1Y():$(e),m="3q"!=1d e?Z(e):"";f.2j=f.2j||("2F"==h?e:1f);f.8k=f.8k||1f;f.3s=f.3s||a.14.3s;f.1c=f.1c||1f;f.1e=f.1e||1f;f.3V="2N"!=1d f.3V?f.3V:!0;f.3U="2N"!=1d f.3U?f.3U:!0;f.1T="2N"!=1d f.1T?f.1T:a.14.1T.8r&&g.3x({},{},a.14.1T.8r);"1H"==h&&(f.2g="2N"!=1d f.2g?f.2g:{},f.2g.3t=f.2g.3t||f.2g.e9||1f,f.2g.2a="2N"!=1d f.2g.2a?f.2g.2a:"2a",f.2g.6E=f.2g.6E||"e4",f.2g.5b="2N"!=1d f.2g.5b?f.2g.5b:!1);f.1c&&f.1e||("1H"==h?(f.1c=aC,f.1e=aF):"4p"==h?(f.1c="2l%",f.1e="90%"):"2t"==h&&(f.1c=aC,f.1e=aF));5Z d.2h;d.8R=c;d.1s=e;d.1S=l;d.1J=k;d.1k=h;d.14=f;d.2X=m;b.4S(d)});a.1n=b},bg:12(){17 a=11.1j.2Y;11.1j.1o=a;11.1j.1h=11.1n[a+1]?a+1:1f;11.1j.1p=11.1n[a-1]?a-1:1f;11.6H();11.6I()},6H:12(){17 a=11,b=a.1j,c=a.14,d=J(),e=c.3y.1Y(),f=0<b.1Q&&a.1n.5W(12(a,b,d){18-1===["2F","2t","1H"].1N(a.1k)&&"2N"===1d a.aO&&(c.7z||a.14.7z)}),l=0<f.1g;c.7A&&!c.3Y&&(b.3v=d.1c<=b.8f);b.1V.1D(c.3s).1U().1C("2O",c.1V.2O);c.2w&&b.1V[0].e1("aW",c.2w);c.2a.1P&&(b.1P.1D(c.3s).1K(b.9D),c.2a.3c&&b.1P.1K(b.6B),c.2a.3E&&b.1P.1K(b.81),1<b.1Q&&b.1P.1K(b.43).1K(b.41));b.3o.1D("19-7I").1K(b.1V).1K(b.2r).1K(b.1O).1K(b.2K).1K(b.2I);c.3Y||b.3o.1K(b.1P);c.2a.6v&&b.3o.1K(b.2D).1K(b.2n);c.2a.2j&&1<b.1Q&&(b.3o.1K(b.1B),b.1B.1D(c.3s).1D("19-"+e),g("1b.19-1B-6d",b.1B).4e(),b.6e=!0);d="1G"==c.3y.1Y()?{1w:1i(d.1c/2-b.2r.3j()/2)}:{1y:1i(d.1e/2-b.2r.2m()/2)};b.2r.1D(c.3s).1C(d);b.2D.2d(b.2n).1D(c.3s);"1G"==e&&b.2r.2d(b.2D).2d(b.2n).1D("1G");b.3o[b.3v?"1D":"2G"]("3v");c.2S||(b.2n.2d(b.2n).2d(b.43).2d(b.41).2G("3R"),0==b.1o&&b.2n.2d(b.43).1D("3R"),b.1o>=b.1Q-1&&b.2D.2d(b.41).1D("3R"));c.1u.4f?(b.1V.1Z().33(c.1u.2p),b.1P.1Z().33(c.1u.2p)):(b.1V.1u(),b.1P.1u());17 k=f.1g;l?(a.5h(),g.1X(f,12(d,e){a.bq(11,12(d){17 e=-1;a.1n.5W(12(a,b,c){a.1s==d.2h&&(e=b);18 a.1s==d.2h});17 f=a.1n[e];d&&g.3x(!0,f,{1s:d.4y,1k:d.1k,aO:!0,14:{2g:d.2g,1c:"2F"==d.1k?0:d.1c||f.1c,1e:"2F"==d.1k?0:d.1e||f.1e,2j:f.14.2j||d.2j}});k--;0==k&&(a.4a(),b.7e=!1,a.5n(),c.1u.4f?2E(12(){a.5r()},c.1u.2p):a.5r())})})):c.1u.4f?2E(12(){a.5r()},c.1u.2p):a.5r();a.5l();n.1E={3Z:12(){a.32()},3c:12(){a.4V()},bI:12(){a.25("1h")},8V:12(){a.25("1p")},4h:12(b){a.4h(b)},4K:12(){a.4K()},6f:12(){0<2R.1g?a.3i(!0):a.3i()},5V:12(b){a.5V(b)},94:12(){a.32();a.6h()}};c.2w&&(b.3C=!0,n.31.4o=c.2w+"/"+b.1o,2E(12(){b.3C=!1},55));c.3E.97||(a.5U(),b.81.2G("19-4A").1D("19-4i"));"12"==1d a.14.1l.9b&&a.14.1l.9b.1m(a)},4Z:12(a,b,c){17 d,e;11.5l();a.2p=c||11.14.2C.5B;"1o"==b&&(11.1j.4j=a.14.3V?!1:!0,11.1j.53=a.14.3U?!1:!0);4d(b){1r"1o":d=11.1j.1O;e=11.1j.1o;1z;1r"1h":d=11.1j.2K;e=11.1j.1h;1z;1r"1p":d=11.1j.2I,e=11.1j.1p}d.8t("36 1v").1D("19-1O"+(A?" 6z":"")).1D(a.14.3s);g("1b.19-4v-1P",d).4E();1a(a.1J||11.14.3Y){c=11.1j.3Y.5S();1a(a.1J&&11.14.1u.1J){17 f=11.1j.1J.5S();f.4e().2J(a.1J);c.1K(f)}11.14.3Y&&c.1K(1<11.1j.1Q?11.1j.1P.5S():11.1j.1P);d.dX(c)}11.9v(a,d,e,b)},9v:12(a,b,c,d){17 e=11,f=e.14,l={9w:b,8F:c};4d(a.1k){1r"2F":"12"==1d f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1d a.14.2b&&a.14.2b.1m(e,l);e.4k(a.1s,12(k){"12"==1d f.1l.1W&&f.1l.1W.1m(e,e.1I,c);"12"==1d a.14.1W&&a.14.1W.1m(e,l);b.1A({2s:k?k.1c:dR,2q:k?k.1e:7k});g("1b.19-23",b).4e().1K(k?\'<7l 2i="\'+a.1s+\'" 1v="19-2F" />\':\'<2o 1v="19-61">\'+f.5Q.4k+"</2o>");"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);e.3L(a,d,b)});1z;1r"1H":b.1A({2s:a.14.1c,2q:a.14.1e});e.4U(b,a);"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);e.3L(a,d,b);1z;1r"4p":e.5h();b.1A({2s:a.14.1c,2q:a.14.1e});17 k=e.4U(b,a);"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);"12"==1d f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1d a.14.2b&&a.14.2b.1m(e,l);k.4n("5e",12(){"12"==1d f.1l.1W&&f.1l.1W.1m(e,e.1I,c);"12"==1d a.14.1W&&a.14.1W.1m(e,l);e.4a();e.3L(a,d,b);k.6K("5e")});1z;1r"6L":17 k=g(a.1s),h=e.4U(b,a),m=S(b);b.1A({2s:e.1n[c].14.1c||k.3j(),2q:e.1n[c].14.1e||k.2m()});h.dQ().eq(0).1u();"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);"12"==1d f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1d a.14.2b&&a.14.2b.1m(e,l);e.4k(m,12(){"12"==1d f.1l.1W&&f.1l.1W.1m(e,e.1I,c);"12"==1d a.14.1W&&a.14.1W.1m(e,l);e.3L(a,d,b)});1z;1r"2t":k=e.4U(b,a);b.1A({2s:e.1n[c].14.1c||k.3j(),2q:e.1n[c].14.1e||k.2m()});"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);e.3L(a,d,b);1z;1r"6r":17 p=a.14.6r||{};"12"==1d f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1d a.14.2b&&a.14.2b.1m(e,l);e.5h();g.6r({2h:a.1s||f.2Q.2h,1A:p.1A||1f,7v:p.7v||"2J",1k:p.1k||f.2Q.1k,6N:p.6N||f.2Q.6N,6O:p.6O||f.2Q.6O,6P:p.6P||f.2Q.6P,6Q:p.6Q||f.2Q.6Q,6R:p.6R||f.2Q.6R,6T:p.6T||f.2Q.6T,6U:p.6U||f.2Q.6U,70:p.70||f.2Q.70,5P:12(k,h,m){e.4a();17 x=g(k),t=g("1b.19-23",b),n=e.1n[c].14.1c||1i(x[0].73("1c")),v=e.1n[c].14.1e||1i(x[0].73("1e")),ah=x[0].73("1c")&&x[0].73("1e")?{ai:"dP"}:{};t.4e().1K(g(\'<1b 1v="19-75"></1b>\').1C(ah).2J(x));b.1u().1A({2s:n||t.3j(),2q:v||t.2m()}).1U();"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);x=S(b);e.4k(x,12(){"12"==1d f.1l.1W&&f.1l.1W.1m(e,e.1I,c);"12"==1d a.14.1W&&a.14.1W.1m(e,l);e.3L(a,d,b)});f.2Q.5P(k,h,m);"12"==1d p.5P&&p.5P(k,h,m)},4M:12(k,h,m){"12"==1d f.1l.1W&&f.1l.1W.1m(e,e.1I,c);"12"==1d a.14.1W&&a.14.1W.1m(e,l);e.4a();g("1b.19-23",b).4e().1K(\'<2o 1v="19-61">\'+f.5Q.am+"</2o>");e.3L(a,d,b);f.2Q.4M(k,h,m);"12"==1d p.4M&&p.4M(k,h,m)}});1z;1r"2J":h=a.1s;23=g("1b.19-23",b);h[0].8T?k=h.5S():(h=g(h),k=h.3h?g("<1b>"+h+"</1b>"):h);17 x=e.1n[c].14.1c||1i(k.2L("1c")),t=e.1n[c].14.1e||1i(k.2L("1e"));e.4U(b,a);k.dL(1x.3B).1U();"12"==1d f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1d a.14.1L&&a.14.1L.1m(e,l);m=S(b);"12"==1d f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1d a.14.2b&&a.14.2b.1m(e,l);e.4k(m,12(){"12"==1d f.1l.1W&&f.1l.1W.1m(e,e.1I,c);"12"==1d a.14.1W&&a.14.1W.1m(e,l);b.1u().1A({2s:x||23.3j(),2q:t||23.2m()}).1U();k.4E();e.3L(a,d,b)})}},3L:12(a,b,c){17 d=11,e=d.1j,f=d.14;"1o"!=b&&("1h"==b?c.1D("19-1h"):c.1D("19-1p"));1a("1o"==b)17 l=e.1o;2f 1a("1h"==b)17 k=f.1M.6F,l=e.1h;2f k=f.1M.6M,l=e.1p;17 h={9w:c,8F:l};d.1n[l].14.1c=d.1n[l].14.1c||0;d.1n[l].14.1e=d.1n[l].14.1e||0;"1o"==b?f.1u.4f?c.1C(C,H).33(a.2p,12(){c.1C(C,"");1a(a.1S){d.84(a,c);17 b=g("1b.19-1S",c),e=1i(b.2m()/c.2m()*2l);f.1S.2Y&50>=e&&b.33(f.2C.5K)}1a(b=a.14.1T)d.88(b,a.1s,c),f.1T.2Y&&g("1b.19-1T",c).33(f.2C.5K);d.5n();"12"==1d f.1l.2x&&f.1l.2x.1m(d,d.1I,l);"12"==1d a.14.2x&&a.14.2x.1m(d,h)}):(c.1u(),d.5n(),"12"==1d f.1l.2x&&f.1l.2x.1m(d,d.1I,l),"12"==1d a.14.2x&&a.14.2x.1m(d,h)):f.1u.4f?c.ay(a.2p,k,12(){"1h"==b?e.3O=!1:e.3N=!1;d.5n();"12"==1d f.1l.2x&&f.1l.2x.1m(d,d.1I,l);"12"==1d a.14.2x&&a.14.2x.1m(d,h)}):(c.1C({2O:k}).1u(),"1h"==b?e.3O=!1:e.3N=!1,d.5n(),"12"==1d f.1l.2x&&f.1l.2x.1m(d,d.1I,l),"12"==1d a.14.2x&&a.14.2x.1m(d,h));2E(12(){d.3i()},0)},5r:12(){17 a=11.1j,b=11.14;b.2S&&3<=a.1Q?(a.1o==a.1Q-1&&(a.1h=0),0==a.1o&&(a.1p=a.1Q-1)):b.2S=!1;11.4Z(11.1n[a.1o],"1o",b.1u.2p);11.1n[a.1h]&&11.4Z(11.1n[a.1h],"1h",b.1u.2p);11.1n[a.1p]&&11.4Z(11.1n[a.1p],"1p",b.1u.2p)},5n:12(){17 a=11,b=a.1j,c=a.14,d=1f;1a(b.6e&&!a.1j.7e){17 e=b.1B,f=g("1b.19-1B-23",e),l=g("1b.19-1B-6d",f),k=0;l.8t("36").4e();g.1X(a.1n,12(h,m){17 p=b.1o==h?"19-5k":"",x=b.1o==h?c.1B.8c:c.1B.8e,t=m.14.2j,r=g(\'<1b 1v="19-2j"></1b>\'),s=g(\'<1b 1v="19-2j-7c"></1b>\');r.1C({2O:0}).1D(p);"1H"!=m.1k&&"2t"!=m.1k||"2N"!=1d m.14.7c?m.14.7c&&(s.1D("19-2j-"+m.14.7c),r.1K(s)):(s.1D("19-2j-1H"),r.1K(s));t&&a.4k(t,12(b){k++;b?r.1A({2s:b.1c,2q:b.1e}).1K(\'<7l 2i="\'+t+\'" 49="0" />\'):r.1A({2s:c.1B.8g,2q:c.1B.8h});4P(d);d=2E(12(){a.5J(e,f,l)},20);2E(12(){r.ay(c.2C.5B,x)},20*k)});l.1K(r)});a.1j.7e=!0}},5J:12(a,b,c){17 d=11,e=d.1j,f=d.14,l=J(),k=f.3y.1Y();a||(a=e.1B);b||(b=g("1b.19-1B-23",a));c||(c=g("1b.19-1B-6d",b));17 h=g(".19-2j",c),e="1G"==k?l.1c-f.1M.5I:h.eq(0).3j()-f.1M.5I,l="1G"==k?h.eq(0).2m()-f.1M.5H:l.1e-f.1M.5H,m="1G"==k?0:e,p="1G"==k?l:0,x=g(".19-5k",c),t={};3>2R.1g&&(h.1C({2O:f.1B.8e}),x.1C({2O:f.1B.8c}));h.1X(12(a){a=g(11);17 b=a.1A(),c="1G"==k?0:f.1B.8g;1e="1G"==k?f.1B.8h:0;8o=d.5E(c,1e,b.2s,b.2q,!0);a.1C({1c:8o.1c,1e:8o.1e});"1G"==k&&a.1C({"dK":"1w"});"1G"==k?m+=a.3j():p+=a.2m()});t={1c:m,1e:p};c.1C(t);17 t={},h=c.3d(),r=x.1g?x.3d():{1y:1i(l/2),1w:1i(e/2)};h.1y-=E.4J();h.1w-=E.4s();r.1y=r.1y-h.1y-E.4J();r.1w=r.1w-h.1w-E.4s();"1G"==k?(t.1y=0,t.1w=1i(e/2-r.1w-x.3j()/2)):(t.1y=1i(l/2-r.1y-x.2m()/2),t.1w=0);3>2R.1g?c.1Z().2u(t,f.2C.5C,"2U"):c.1C(t)},4k:12(a,b){g.3J(a)||(a=[a]);17 c=11,d=a.1g;0<d?(c.5h(),g.1X(a,12(e,f){17 l=2v dJ;l.dF=12(){d-=1;0==d&&(c.4a(),b(l))};l.dA=l.dz=12(){d-=1;0==d&&(c.4a(),b(!1))};l.2i=a[e]})):b(!1)},7H:12(){17 a=11,b=a.1j,c=A?"3u.5t":"6a.5t",d=A?"6a.5t":"3u.5t";1a(a.4m&&a.3h){17 e=g(a.3h,a.4m);g(a.4m).1R(c,a.3h,12(){17 c=g(11),c=e.8R(c);b.1o=c;b.1h=a.1n[c+1]?c+1:1f;b.1p=a.1n[c-1]?c-1:1f;a.6H();a.6I();18!1}).1R(d,a.3h,12(){18!1})}2f g.1X(a.6s,12(e,l){l.1R(c,12(){b.1o=e;b.1h=a.1n[e+1]?e+1:1f;b.1p=a.1n[e-1]?e-1:1f;a.6H();a.6I();18!1}).1R(d,12(){18!1})})},6h:12(){11.4m&&11.3h?g(11.4m).5u(".5t",11.3h):g.1X(11.6s,12(a,b){b.5u(".5t")})},4K:12(){11.6h();11.8s();11.7B();11.7H()},6I:12(){12 a(a){c.3v||(c.4x||c.8B.1u(),c.4x=4P(c.4x),-1===h.1N(a.8H)&&(c.4x=2E(12(){c.8B.1U();c.4x=4P(c.4x)},9L)))}17 b=11,c=b.1j,d=b.14,e=d.3y.1Y(),f=g(".19-1O"),l=z.8I+".1E",k=8K=2l,h=[c.2D[0],c.2n[0],c.2D[0].3f,c.2n[0].3f];O.4n("dv.1E",12(){17 a=J();d.7A&&!d.3Y&&(c.3v=a.1c<=c.8f);c.3o[c.3v?"1D":"2G"]("3v");b.3i(1f);A&&(4P(c.bA),c.bA=2E(12(){17 a=L().y;n.6J(0,a-30);n.6J(0,a+30);n.6J(0,a)},du));c.6e&&b.5J()}).4n("dt.1E",12(a){1a(d.2a.3T)4d(a.ds){1r 13:a.dr&&d.3T.8W&&b.4V();1z;1r 27:d.3T.8X&&b.32();1z;1r 37:d.3T.1w&&!c.5x&&b.25("1p");1z;1r 38:d.3T.92&&!c.5x&&b.25("1p");1z;1r 39:d.3T.5T&&!c.5x&&b.25("1h");1z;1r 40:d.3T.96&&!c.5x&&b.25("1h")}});z.5z&&O.4n(l,12(){b.7s()});17 l=[d.1S.1u+".1E",d.1S.1U+".1E",d.1T.1u+".1E",d.1T.1U+".1E"].5W(12(a,b,c){18 c.79(a)===b}),m="";g.1X(l,12(a,b){0!=a&&(m+=" ");m+=b});E.1R(K,".19-1V",12(){d.1V.98&&b.32()}).1R(K,".19-1h, .19-1h-42",12(){b.25("1h")}).1R(K,".19-1p, .19-1p-42",12(){b.25("1p")}).1R(K,".19-2j",12(){17 a=g(11),a=g(".19-2j",c.1B).8R(a);a!=c.1o&&b.4h(a)}).1R(m,".19-1O:7t(.19-1h, .19-1p)",12(a){17 b=g("1b.19-1S",c.1O),e=g("1b.19-1T",c.1O),f=d.2C.5K;c.3O||c.3N?(a.1k!=d.1S.1u||b.3A(":3m")?a.1k==d.1S.1U&&b.3A(":3m")&&b.3X(f):b.33(f),a.1k!=d.1T.1u||e.3A(":3m")?a.1k==d.1T.1U&&e.3A(":3m")&&e.3X(f):e.33(f)):(a.1k!=d.1S.1u||b.3A(":3m")?a.1k==d.1S.1U&&b.3A(":3m")&&b.1Z().3X(f):b.1Z().33(f),a.1k!=d.1T.1u||e.3A(":3m")?a.1k==d.1T.1U&&e.3A(":3m")&&e.1Z().3X(f):e.1Z().33(f))}).1R("4C.1E 4X.1E",".19-75",12(a){c.4j="4C"==a.1k?!0:!1}).1R(K,".19-1P a.19-3Z, .19-1P a.19-3c, .19-1P a.19-4A, .19-1P a.19-4i",12(){17 a=g(11);a.7x("19-3c")?b.4V():a.7x("19-4A")?(b.5U(),a.1D("19-4i").2G("19-4A")):a.7x("19-4i")?(b.4i(),a.1D("19-4A").2G("19-4i")):b.32()}).1R(W,".19-1V, .19-1B-23",12(a){a.7y()});1a(d.2a.6v&&!A)E.1R("b0.1E",a);1a(d.2a.3E&&d.3E.9e)E.1R("4C.1E 4X.1E",".19-1O:7t(.19-1h, .19-1p)",12(a){"4C"==a.1k&&c.3w?b.4i():"4X"==a.1k&&c.4z&&b.5U()});l=g(".19-1V, .19-1O, .19-1B");1a(d.2a.3V)l.1R("3V.1E",12(a,d){c.4j||(a.7y(),0>d?b.25("1h"):0<d&&b.25("1p"))});1a(d.2a.3U)f.1R(aK,12(a){12 l(a){17 b=g(11);a=q[a];17 c=[w.2k[0]-v.2k[0],w.2k[1]-v.2k[1]];b[0].36["1G"==e?"1w":"1y"]=("1G"==e?a.1w-c[0]:a.1y-c[1])+"4T"}12 h(a){1a(w){17 b=a.6t.6u?a.6t.6u[0]:a;v={5v:(2v 9l).9m(),2k:[b.9n-n,b.9o-s]};f.1X(l);a.7y()}}12 m(){f.1X(12(){17 a=g(11),b=a.1A("3d")||{1y:a.3d().1y-s,1w:a.3d().1w-n},c=b.1y,b=b.1w;a.1C(C,H).1Z().2u({1y:c,1w:b},9p,"2U",12(){a.1C(C,"")})})}1a(!(c.3O||c.3N||1==c.1Q||c.53)){c.3o.1D("19-9q");a=a.6t.6u?a.6t.6u[0]:a;17 s=E.4J(),n=E.4s(),y=[f.eq(0).3d(),f.eq(1).3d(),f.eq(2).3d()],q=[{1y:y[0].1y-s,1w:y[0].1w-n},{1y:y[1].1y-s,1w:y[1].1w-n},{1y:y[2].1y-s,1w:y[2].1w-n}],w={5v:(2v 9l).9m(),2k:[a.9n-n,a.9o-s]},v;f.4n(W,h);E.7E(aP,12(a){f.6K(W,h);c.3o.2G("19-9q");w&&v&&("1G"==e&&9s>v.5v-w.5v&&I(w.2k[0]-v.2k[0])>k&&I(w.2k[1]-v.2k[1])<8K?w.2k[0]>v.2k[0]?c.1o!=c.1Q-1||d.2S?(c.34=!0,b.25("1h")):m():0!=c.1o||d.2S?(c.34=!0,b.25("1p")):m():"9t"==e&&9s>v.5v-w.5v&&I(w.2k[1]-v.2k[1])>k&&I(w.2k[0]-v.2k[0])<8K?w.2k[1]>v.2k[1]?c.1o!=c.1Q-1||d.2S?(c.34=!0,b.25("1h")):m():0!=c.1o||d.2S?(c.34=!0,b.25("1p")):m():m());w=v=R})}})},4h:12(a){17 b=11,c=b.1j,d=b.14,e=a-c.1o;d.2S&&(a==c.1Q-1&&0==c.1o&&(e=-1),c.1o==c.1Q-1&&0==a&&(e=1));1a(1==e)b.25("1h");2f 1a(-1==e)b.25("1p");2f{1a(c.3O||c.3N)18!1;"12"==1d d.1l.6w&&d.1l.6w.1m(b,b.1I);d.2w&&(c.3C=!0,n.31.4o=d.2w+"/"+a);b.1n[a]&&(b.1n[a].14.3V?b.1j.4j=!1:c.4j=!0,c.53=b.1n[a].14.3U?!1:!0);g.1X([c.1O,c.2K,c.2I],12(a,b){b.1C(C,H).3X(d.2C.5B)});c.1o=a;c.1h=a+1;c.1p=a-1;b.5l();2E(12(){b.5r()},d.2C.5B+50);g(".19-2j",c.1B).2G("19-5k").eq(a).1D("19-5k");b.5J();d.2w&&2E(12(){c.3C=!1},55);d.2S||(c.2D.2d(c.2n).2d(c.43).2d(c.41).2G("3R"),0==c.1o&&c.2n.2d(c.43).1D("3R"),c.1o>=c.1Q-1&&c.2D.2d(c.41).1D("3R"));b.7G();"12"==1d d.1l.6x&&d.1l.6x.1m(b,b.1I)}},25:12(a){17 b=11,c=b.1j,d=b.14,e=d.3y.1Y(),f=J(),l=d.2C.9x;1a(c.3O||c.3N)18!1;17 k="1h"==a?c.1h:c.1p;d.2w&&(c.3C=!0,n.31.4o=d.2w+"/"+k);1a("1h"==a){1a(!b.1n[k])18!1;17 h=c.2K,m=c.1O,p=c.2I,x="19-1p",t="19-1h"}2f 1a("1p"==a){1a(!b.1n[k])18!1;h=c.2I;m=c.1O;p=c.2K;x="19-1h";t="19-1p"}"12"==1d d.1l.6w&&d.1l.6w.1m(b,b.1I);"1h"==a?c.3O=!0:c.3N=!0;17 r=g("1b.19-1S",m),s=g("1b.19-1T",m);r.1g&&r.1Z().3X(l,12(){g(11).4E()});s.1g&&s.1Z().3X(l,12(){g(11).4E()});b.1n[k].1S&&(b.84(b.1n[k],h),r=g("1b.19-1S",h),s=1i(r.2m()/h.2m()*2l),d.1S.2Y&&50>=s&&r.33(l));1a(r=b.1n[k].14.1T)b.88(r,b.1n[k].1s,h),d.1T.2Y&&g("1b.19-1T",h).33(d.2C.5K);g.1X([h,m,p],12(a,b){b.2G("19-1h 19-1p")});17 u=h.1A("3d"),r=f.1c-d.1M.5I,f=f.1e-d.1M.5H,s=u.5D.1c,y=u.5D.1e,q=u.9A,u=u.7K,w=1i(f/2-y/2-u.H-q.H/2),u=1i(r/2-s/2-u.W-q.W/2);h.1C(C,H).2u({1y:w,1w:u,2O:1},l,c.34?"2U":"5q",12(){h.1C(C,"")});g("1b.19-23",h).2u({1c:s,1e:y},l,c.34?"2U":"5q");17 y=m.1A("3d"),v=y.3q,u=y.7K,s=y.5D.1c,y=y.5D.1e,s=1i(s*d.1M["1h"==a?"5F":"5G"]),y=1i(y*d.1M["1h"==a?"5F":"5G"]),w="1G"==e?1i(f/2-v.5p-y/2-u.H-q.H/2):1i(f-v.4R-u.H-q.H/2);"1p"==a?u="1G"==e?1i(r-v.4R-u.W-q.W/2):1i(r/2-s/2-u.W-v.5p-q.W/2):(w="1G"==e?w:1i(v.4R-u.H-y-q.H/2),u="1G"==e?1i(v.4R-u.W-s-q.W/2):1i(r/2-v.5p-s/2-u.W-q.W/2));g("1b.19-23",m).2u({1c:s,1e:y},l,c.34?"2U":"5q");m.1D(x).1C(C,H).2u({1y:w,1w:u,2O:d.1M.6M},l,c.34?"2U":"5q",12(){m.1C(C,"");g(".19-2j",c.1B).2G("19-5k").eq(k).1D("19-5k");b.5J();b.1n[k]&&(c.4j=b.1n[k].14.3V?!1:!0,c.53=b.1n[k].14.3U?!1:!0);c.34=!1;"1h"==a?(c.2K=p,c.2I=m,c.1O=h,c.2K.1U(),c.1h+=1,c.1p=c.1o,c.1o+=1,d.2S&&(c.1o>c.1Q-1&&(c.1o=0),c.1o==c.1Q-1&&(c.1h=0),0==c.1o&&(c.1p=c.1Q-1)),b.5l(),b.1n[c.1h]?b.4Z(b.1n[c.1h],"1h"):c.3O=!1):(c.2I=p,c.2K=m,c.1O=h,c.2I.1U(),c.1h=c.1o,c.1o=c.1p,c.1p=c.1o-1,d.2S&&(c.1o==c.1Q-1&&(c.1h=0),0==c.1o&&(c.1p=c.1Q-1)),b.5l(),b.1n[c.1p]?b.4Z(b.1n[c.1p],"1p"):c.3N=!1);d.2w&&2E(12(){c.3C=!1},55);d.2S||(c.2D.2d(c.2n).2d(c.43).2d(c.41).2G("3R"),0==c.1o&&c.2n.2d(c.43).1D("3R"),c.1o>=c.1Q-1&&c.2D.2d(c.41).1D("3R"));b.3i();b.7G();"12"==1d d.1l.6x&&d.1l.6x.1m(b,b.1I)});w="1G"==e?F(p,"1y"):"1h"==a?1i(-(f/2)-p.2m()):1i(2*w);u="1G"==e?"1h"==a?1i(-(r/2)-p.3j()):1i(2*u):F(p,"1w");p.1C(C,H).2u({1y:w,1w:u,2O:d.1M.6F},l,c.34?"2U":"5q",12(){p.1C(C,"")}).1D(t)},84:12(a,b){17 c=g(\'<1b 1v="19-1S"></1b>\');a.1S&&(c.2J(a.1S),g("1b.19-23",b).1K(c))},9H:12(a,b){17 c=11.14,d=n.31.2V;g.1X(a,12(e,f){1a(!f)18!0;17 l,g;4d(e.1Y()){1r"9I":l="3e://5m.9I.3l/9J.7X?v=4&2i=bm&u={1s}";g="4Q 1R do";1z;1r"9N":l="3e://9N.3l/dn?5j={1s}";g="4Q 1R dm";1z;1r"dl":l="dj://di.dh.3l/9J?2h={1s}";g="4Q 1R dg+";1z;1r"9W":l="3e://9W.3l/df?2h={1s}";g="4Q 1R de";1z;1r"9Y":l="3e://9Y.3l/9Z?dd=2&2h={1s}";g="4Q 1R dc";1z;1r"83":l="3e://83.3l/9Z?2h={1s}",g="4Q 1R 83"}a[e]={1s:f.1s&&N(d,f.1s)||c.2w&&n.31.2V||"3p"!==1d b&&d||b&&N(d,b)||d,4y:f.4y||l||f.1s&&N(d,f.1s)||b&&N(d,b),2P:f.2P||g||"4Q 1R "+e,1c:"2N"==1d f.1c||bt(f.1c)?db:1i(f.1c),1e:f.1e||d9}});18 a},88:12(a,b,c){17 d=g(\'<1b 1v="19-1T"></1b>\'),e="<a5>";a=11.9H(a,b);g.1X(a,12(a,b){a.1Y();17 c=b.4y.1q(/\\{1s\\}/g,7U(b.1s).1q(/!/g,"%21").1q(/\'/g,"%27").1q(/\\(/g,"%28").1q(/\\)/g,"%29").1q(/\\*/g,"%2A").1q(/%20/g,"+"));e+=\'<a6 1v="\'+a+\'"><a 2V="\'+c+\'" d8="a8:d7.ab(11.2V\'+(0>=b.1c||0>=b.1e?"":", \'\', \'d6=51,1P=51,d5=8a,d4=8a,1e="+b.1e+",1c="+b.1c+",1w=40,1y=40\'")+\');18 2Z;" 1J="\'+b.2P+\'" 8H="9O"></a></a6>\'});e+="</a5>";d.2J(e);g("1b.19-23",c).1K(d)},4V:12(){z.5z?z.8d()?z.4W(1x.3B):z.6V(1x.3B):11.7s()},7s:12(){17 a=11.1j,b=J(),c=11.14;1a(c.3z){17 d=a.1O,e=11.1n[a.1o],f=b.1c,l=b.1e,k=[d,a.2K,a.2I,a.2D,a.2n,a.1V,a.1P,a.1B,a.2r],b=[a.2K,a.2I,a.2D,a.2n,a.2r,a.1B];1a(a.2y)a.2y=a.5x=a.4j=a.53=!1,a.1V.1C({2O:11.14.1V.2O}),g.1X(b,12(a,b){b.1u()}),a.6B.2L("1J",c.2P.7W),d.1A({2s:d.1A("6X"),2q:d.1A("6Y"),6X:1f,6Y:1f}),g.1X(k,12(a,b){b.2G("19-3c")}),"12"==1d c.1l.ap&&c.1l.ap.1m(11,11.1I);2f{a.2y=a.5x=a.4j=a.53=!0;a.1V.1C({2O:1});g.1X(b,12(a,b){b.1U()});a.6B.2L("1J",c.2P.aq);1a(-1!=c.6Z.1N(e.1k))d.1A({6X:d.1A("2s"),6Y:d.1A("2q"),2s:f,2q:l});2f{17 b=e.14.4B||c.4B||"",a=f,e=l,f=d.1A("2s"),h=d.1A("2q");"d2"==b.1Y()?(e=a/f*h,e<l&&(a=l/h*f,e=l)):"d1"==b.1Y()?(l=11.5E(a,e,f,h,!0),a=l.1c,e=l.1e):"d0"!=b.1Y()&&(l=11.5E(a,e,f,h,f>a||h>e?!0:!1),a=l.1c,e=l.1e);d.1A({6X:d.1A("2s"),6Y:d.1A("2q"),2s:a,2q:e})}g.1X(k,12(a,b){b.1D("19-3c")});"12"==1d c.1l.av&&c.1l.av.1m(11,11.1I)}}2f a.2y=a.2y?!1:!0;11.3i(!0)},32:12(){17 a=11.1j,b=11.14;O.6K(".1E");E.5u(".1E");a.2y&&z.4W(1x.3B);g(".19-1V, .19-1O, .19-1B").5u(".1E");b.1U.4f?a.1V.1Z().3X(b.1U.2p,12(){a.1V.4E();a.3o.2G("19-7I").5u(".1E")}):(a.1V.4E(),a.3o.2G("19-7I").5u(".1E"));g.1X([a.1P,a.1O,a.2K,a.2I,a.2D,a.2n,a.2r,a.1B],12(a,b){b.8t("36").4E()});a.7e=a.2y=!1;n.1E=1f;b.2w&&(a.3C=!0,fa(),2E(12(){a.3C=!1},55));"12"==1d b.1l.aw&&b.1l.aw.1m(11,11.1I)},3i:12(){17 a=11.1j,b=11.14,c=b.3y.1Y(),d=J(),e=d.1c,f=d.1e,d=a.2y&&b.3z||a.3v?0:"1G"==c?0:a.1B.3j(),l=a.3v?a.1P.2m():a.2y&&b.3z?0:"1G"==c?a.1B.2m():0,e=a.2y&&b.3z?e:e-b.1M.5I,f=a.2y&&b.3z?f:f-b.1M.5H,k="1G"==c?1i(11.1n[a.1h]||11.1n[a.1p]?2*(b.1M.63+b.1M.62):30>=e/10?30:e/10):1i(30>=e/10?30:e/10)+d,h="1G"==c?1i(30>=f/10?30:f/10)+l:1i(11.1n[a.1h]||11.1n[a.1p]?2*(b.1M.63+b.1M.62):30>=f/10?30:f/10),d={1k:"1o",1c:e,1e:f,5X:11.1n[a.1o],8m:k,8n:h,aA:d,aB:l,2u:2R.1g,1O:a.1O};11.74(d);11.1n[a.1h]&&(d=g.3x(d,{1k:"1h",5X:11.1n[a.1h],4R:b.1M.63,5p:b.1M.aD,1O:a.2K}),11.74(d));11.1n[a.1p]&&(d=g.3x(d,{1k:"1p",5X:11.1n[a.1p],4R:b.1M.62,5p:b.1M.aE,1O:a.2I}),11.74(d));b="1G"==c?{1w:1i(e/2-a.2r.3j()/2)}:{1y:1i(f/2-a.2r.2m()/2)};a.2r.1C(b)},74:12(a){17 b=11.1j,c=11.14,d=c.3y.1Y(),e="1o"==a.1k?b.2y&&c.3z?a.1c:a.1c-a.8m:a.1c-a.8m,f="1o"==a.1k?b.2y&&c.3z?a.1e:a.1e-a.8n:a.1e-a.8n,l=a.5X,k=a.5X.14,h=a.1O,m=a.4R||0,p=a.5p||0,n=a.aA,t=a.aB;"1o"==a.1k?("3g"==1d k.1c&&k.1c&&(e=b.2y&&c.3z&&(-1!=c.6Z.1N(l.1k)||k.4B||c.4B)?e:k.1c>e?e:k.1c),"3g"==1d k.1e&&k.1e&&(f=b.2y&&c.3z&&(-1!=c.6Z.1N(l.1k)||k.4B||c.4B)?f:k.1e>f?f:k.1e)):("3g"==1d k.1c&&k.1c&&(e=k.1c>e?e:k.1c),"3g"==1d k.1e&&k.1e&&(f=k.1e>f?f:k.1e));f=1i(f-g(".19-4v-1P",h).2m());b="3p"==1d k.1c&&-1!=k.1c.1N("%")?aa(1i(k.1c.1q("%","")),a.1c):h.1A("2s");l="3p"==1d k.1e&&-1!=k.1e.1N("%")?aa(1i(k.1e.1q("%","")),a.1e):h.1A("2q");l="3p"==1d k.1c&&-1!=k.1c.1N("%")||"3p"==1d k.1e&&-1!=k.1e.1N("%")?{1c:b,1e:l}:11.5E(e,f,b,l);e=g.3x({},l,{});"1p"==a.1k||"1h"==a.1k?(b=1i(l.1c*("1h"==a.1k?c.1M.5G:c.1M.5F)),l=1i(l.1e*("1h"==a.1k?c.1M.5G:c.1M.5F))):(b=l.1c,l=l.1e);f=1i((F(h,"58-1w")+F(h,"58-5T")+F(h,"49-1w-1c")+F(h,"49-5T-1c"))/2);k=1i((F(h,"58-1y")+F(h,"58-aG")+F(h,"49-1y-1c")+F(h,"49-aG-1c")+g(".19-4v-1P",h).2m())/2);4d(a.1k){1r"1o":17 r=1i(a.1e/2-l/2-k-t/2),s=1i(a.1c/2-b/2-f-n/2);1z;1r"1h":r="1G"==d?1i(a.1e/2-p-l/2-k-t/2):1i(a.1e-m-k-t/2);s="1G"==d?1i(a.1c-m-f-n/2):1i(a.1c/2-b/2-f-p-n/2);1z;1r"1p":r="1G"==d?1i(a.1e/2-p-l/2-k-t/2):1i(m-k-l-t/2),s="1G"==d?1i(m-f-b-n/2):1i(a.1c/2-p-b/2-f-n/2)}h.1A("3d",{1y:r,1w:s,5D:e,7K:{W:f,H:k},9A:{W:n,H:t},3q:a});0<a.2u&&c.2C.6f?(h.1C(C,H).1Z().2u({1y:r,1w:s},c.2C.5C,"2U",12(){h.1C(C,"")}),g("1b.19-23",h).1Z().2u({1c:b,1e:l},c.2C.5C,"2U"),g("1b.19-4v-1P",h).1Z().2u({1c:b},c.2C.5C,"2U",12(){g(11).1C("ai","3m")})):(h.1C({1y:r,1w:s}),g("1b.19-23",h).1C({1c:b,1e:l}),g("1b.19-4v-1P",h).1C({1c:b}))},5U:12(a){17 b=11,c=b.1j,d=b.14;!d.3E.8q||d.2a.3E&&1>=c.1Q||a<c.4z||(c.4z=0,c.3w&&(c.3w=4P(c.3w)),c.3w=2E(12(){c.1o==c.1Q-1?b.4h(0):b.25("1h")},d.3E.8q))},4i:12(a){17 b=11.1j;a<b.4z||(b.4z=a||2l,b.3w&&(b.3w=4P(b.3w)))},7G:12(){17 a=11.1j;11.14.2a.3E&&a.3w&&!a.4z&&11.5U()},5E:12(a,b,c,d,e){4b=a?b?Y(a/c,b/d):a/c:b/d;e||(4b>11.14.4O?4b=11.14.4O:4b<11.14.4D&&(4b=11.14.4D));a=11.14.8u?X(c*4b):a;b=11.14.8u?X(d*4b):b;18{1c:a,1e:b,cT:4b}},5V:12(a){11.14=g.3x(!0,11.14,a||{});11.4K()},bb:12(){17 a=1x.59("1H");11.3b={2t:0<=1i(Q.3P("aR"))||0<=1i(Q.3P("aS"))?!0:!1,2W:0<=1i(Q.3P("66"))?!0:!1,8y:!(!a.44||!a.44("1H/46").1q(/51/,"")),8z:!(!a.44||!a.44("1H/3t").1q(/51/,"")),8A:!(!a.44||!a.44("1H/5d").1q(/51/,"")),aY:!(!a.44||!a.44("1H/2W").1q(/51/,""))}},4U:12(a,b){17 c;4d(b.1k){1r"1H":17 d=!1,e=b.8k,f=b.14.2g;("1H/46"==e||"46"==b.2X||"8w"==b.2X||f.aZ)&&11.3b.8y?(b.2X="46",b.1s=f.aZ||b.1s):f.3t&&11.3b.8z?(b.2X="3t",b.1s=f.3t||b.1s):f.5d&&11.3b.8A&&(b.2X="7D",b.1s=f.5d||b.1s);!11.3b.8y||"1H/46"!=e&&"46"!=b.2X&&"8w"!=b.2X?!11.3b.8z||"1H/3t"!=e&&"3t"!=b.2X?!11.3b.8A||"1H/5d"!=e&&"7D"!=b.2X?!11.3b.aY||"1H/2W"!=e&&"9k"!=b.2X&&"cP"!=b.2X||(d=!0,e="1H/2W"):(d=!0,e="1H/5d"):(d=!0,e="1H/3t"):(d=!0,e="1H/46");d?c=g("<1H />",{1c:"2l%",1e:"2l%",6E:f.6E,5b:f.5b,b1:f.b1,2a:f.2a}).1K(g("<4y />",{2i:b.1s,1k:e})):11.3b.2W?(c=g("<3q />",{1k:"1H/2W",4L:"3e://5m.7j.3l/2W/7J"}).2L({1A:b.1s,1c:"2l%",1e:"2l%"}).1K(g("<3W />",{2e:"2i",2M:b.1s})).1K(g("<3W />",{2e:"5b",2M:"2Z"})).1K(g("<3W />",{2e:"b2",2M:"2Z"})).1K(g("<3W />",{2e:"b3",2M:"b4"})),D.6j&&(c=91(b.1s,"2l%","2l%","","cO","b4","cI","2Z","cG","2Z"))):c=g("<2o />",{"1v":"19-61",2J:11.14.5Q.8C.1q("{4L}","3e://5m.7j.3l/2W/7J").1q("{1k}","66")});1z;1r"2t":1a(11.3b.2t){17 l="",k=0;b.14.8D?g.1X(b.14.8D,12(a,b){0!=k&&(l+="&");l+=a+"="+7U(b);k++}):l=1f;c=g("<8j />").2L({1k:"68/x-7f-2t",2i:b.1s,1c:"3g"==1d b.14.1c&&b.14.1c&&"1"==11.14.4D&&"1"==11.14.4O?b.14.1c:"2l%",1e:"3g"==1d b.14.1e&&b.14.1e&&"1"==11.14.4D&&"1"==11.14.4O?b.14.1e:"2l%",cF:"cE",cD:"#cC",4A:"7g",b2:"7g",cB:"7g",cx:"cw",b3:"cv",cu:"bn",bo:"7g",8D:l,3c:"8a"})}2f c=g("<2o />",{"1v":"19-61",2J:11.14.5Q.8C.1q("{4L}","3e://5m.ct.3l/go/ce").1q("{1k}","cd aS cc")});1z;1r"4p":c=g("<4p />").2L({1c:"3g"==1d b.14.1c&&b.14.1c&&"1"==11.14.4D&&"1"==11.14.4O?b.14.1c:"2l%",1e:"3g"==1d b.14.1e&&b.14.1e&&"1"==11.14.4D&&"1"==11.14.4O?b.14.1e:"2l%",2i:b.1s,c5:0,7w:0,7r:0,c2:A?"c1":"c0",bZ:"",bU:"",bo:""});1z;1r"6L":c=g(\'<1b 1v="19-75"></1b>\').2J(g(b.1s).5S(!0));1z;1r"2J":d=b.1s,d[0].8T||(d=g(b.1s),d=d.3h?g("<1b>"+d+"</1b>"):d),c=g(\'<1b 1v="19-75"></1b>\').2J(d)}g("1b.19-23",a).4e().2J(c);"1H"===c[0].8P.1Y()&&D.4q&&2E(12(){17 a=c[0].bC+"?"+M(bT*T());c[0].bC=a;c[0].2i=a});18 c},bq:12(a,b){17 c=11,d=a.1s;c.5h();ga(d,12(a){c.4a();1a(a){17 d={1g:!1};d.2h=a.2h;1a(7k==a.5j){a=a.bS;17 l=a.1k,g=a.4y;d.4y=g.2i;d.1c=g.1c&&1i(g.1c)||0;d.1e=g.1e&&1i(g.1e)||0;d.1k=l;d.2j=g.2j||a.bR[0];d.2g=a.2g||{};d.1g=!0;"68/x-7f-2t"==g.1k?d.1k="2t":-1!=g.1k.1N("1H/")?d.1k="1H":-1!=g.1k.1N("/2J")?d.1k="4p":-1!=g.1k.1N("2F/")&&(d.1k="2F")}2f 1a("2N"!=1d a.bG)5o a.bG;b.1m(11,d.1g?d:!1)}})},7P:12(a){17 b=11.1j,c=11.14;a=V(a||n.31.2V).4o;17 d=a.24("/"),e=d[1];b.3C||"#"+c.2w!=d[0]&&1<a.1g||(e?(b=d[1]||0,11.1n[b]?(a=g(".19-1V"),a.1g&&a.2L("aW")==c.2w?11.4h(b):11.6s[b].76(A?"3u":"6a")):(a=g(".19-1V"),a.1g&&11.32())):(a=g(".19-1V"),a.1g&&11.32()))}};g.fn.1E=12(){17 a=2R,b=g.bL(a[0])?a[0]:a[1],c=g.3J(a[0])||"3p"==1d a[0]?a[0]:a[1];b||(b={});17 b=g.3x(!0,{2L:"2V",3y:"9t",3s:"e8",2w:!1,2S:!1,47:0,bf:!1,8u:!0,4O:1,4D:.2,3Y:!1,7z:!1,7A:!0,3z:!0,4B:1f,6Z:"2t, 1H",1V:{98:!0,2O:.85},2a:{6v:!1,3E:!1,1P:!0,3c:!0,2j:!0,3T:!0,3V:!0,3U:!0},3T:{1w:!0,5T:!0,92:!0,96:!0,8X:!0,8W:!0},1u:{4f:!0,2p:bJ,1J:!0},1U:{4f:!0,2p:bJ},1S:{2Y:!0,1u:"4C",1U:"4X"},1T:{2Y:!0,1u:"4C",1U:"4X",8r:!1},1M:{5I:0,5H:0,63:45,aD:0,6F:1,5G:1,62:45,aE:0,6M:1,5F:1},1B:{8g:bM,8h:80,8e:1,8c:.6},2C:{6f:!0,5C:7k,9x:9p,5B:bN,5K:7k},3E:{8q:bO,9e:!1,97:!0},2P:{3Z:"bP bQ 7i 3Z",7W:"8Q bD (bz+8Q)",aq:"bV bD (bz+8Q)",a0:"bW",1h:"bX",7q:"bY"},5Q:{4k:"by 4M bx bw bv 7i 5e c3.",am:"by 4M bx bw bv 7i 5e c4.",8C:"8O c6 c7 c8 c9 7i cb 8N bs <a 2V=\'{4L}\' 8H=\'9O\'>{1k} 7h</a>."},2Q:{2h:"",6U:12(a,b){},6N:!1,70:12(a,b){},6O:!1,4M:12(a,b,c){},5P:12(a,b,c){},6P:!0,6Q:!1,6R:1f,6T:1f,1k:"cf"},1l:{}},b),d=g.3J(c)||"3p"==1d c?!0:!1,c=g.3J(c)?c:[];"3p"==1d a[0]&&(c[0]=a[0]);1a(a7(g.fn.cg,"1.8",">=")){17 e=2v ea(g(11),b,c,d);18{3Z:12(){e.32()},3c:12(){e.4V()},bI:12(){e.25("1h")},8V:12(){e.25("1p")},4h:12(a){e.4h(a)},4K:12(){e.4K()},6f:12(){0<2R.1g?e.3i(!0):e.3i()},5V:12(a){e.5V(a)},94:12(){e.32();e.6h()}}}5o"8O 8L 2B ch ci cj 3A ck cl. 1E 8N 8L 1.8+";};g.1E=12(a,b){18 g.fn.1E(a,b)};g.3x(g.cm,{7O:12(a,b,c,d,e){18-d*(P(1-(b/=e)*b)-1)+c},2U:12(a,b,c,d,e){18 d*P(1-(b=b/e-1)*b)+c},5q:12(a,b,c,d,e){18 1>(b/=e/2)?-d/2*(P(1-b*b)-1)+c:d/2*(P(1-(b-=2)*b)+1)+c}});(12(){g.1X("71 aX 8l cn co 3U cp cq cr cs".24(" "),12(a,b){g.fn[b]=12(a){18 a?11.4n(b,a):11.76(b)};g.bp&&(g.bp[b]=!0)});g.4F.bl.3u={bk:12(){17 a=11,b=g(11),c,d;b.4n("71.8J",12(e){c=L();b.7E("8l.8J",12(b){d=L();b=g.4F.cy(b||n.4F);b.1k="3u";c&&d&&c.x==d.x&&c.y==d.y&&(g.4F.cz||g.4F.cA).1m(a,b);c=d=R})})},bi:12(){g(11).6K("71.8J")}}})();(12(){z={5z:!1,8d:12(){18!1},6V:12(){},4W:12(){},8I:"",3G:""};8G=["4q","bd","o","b7","cH"];1a("2N"!=1d 1x.4W)z.5z=!0;2f 1t(17 a=0,b=8G.1g;a<b;a++)1a(z.3G=8G[a],"2N"!=1d 1x[z.3G+"b6"]){z.5z=!0;1z}z.5z&&(z.8I=z.3G+"cJ",z.8d=12(){4d(11.3G){1r"":18 1x.cK;1r"4q":18 1x.cL;8S:18 1x[11.3G+"cM"]}},z.6V=12(a){18""===11.3G?a.6V():a[11.3G+"cN"]()},z.4W=12(a){18""===11.3G?1x.4W():1x[11.3G+"b6"]()})})();(12(){17 a,b;a=69.7V;a=a.1Y();b=/(b5)[ \\/]([\\w.]+)/.4H(a)||/(4q)[ \\/]([\\w.]+)/.4H(a)||/(cQ)(?:.*2B|)[ \\/]([\\w.]+)/.4H(a)||/(6j) ([\\w.]+)/.4H(a)||0>a.1N("cR")&&/(cS)(?:.*? aM:([\\w.]+)|)/.4H(a)||[];a=b[1]||"";b=b[2]||"0";D={};a&&(D[a]=!0,D.2B=b);D.b5?D.4q=!0:D.4q&&(D.cU=!0)})();(12(){12 a(a){1t(17 e=0,f=b.1g;e<f;e++){17 g=b[e]?b[e]+a.4g(0).cV()+a.7b(1):a;1a(c.36[g]!==R)18 g}}17 b=["","4q","bd","b7","o"],c=1x.59("1b");C=a("cW")||"";H=a("cX")?"cY(0) ":""})();17 Q={2B:"0.7.9",2e:"cZ",au:12(a,b,c){18 12(){a(b,c)}},5c:"<",4u:12(a){18"2N"!=1d a},3J:12(a){18/d3/i.1F(6S.48.89.1m(a))},56:12(a){18"12"==1d a},4G:12(a){18"3p"==1d a},5R:12(a){18"3g"==1d a},4l:12(a){18"3p"==1d a&&/\\d/.1F(a)},a3:/[\\d][\\d\\.\\7L,-]*/,3a:/[\\.\\7L,-]/g,5g:12(a,b){17 c=11.4l(a)?(11.4u(b)?2v 2z(b):11.a3).4H(a):1f;18 c?c[0]:1f},3S:12(a,b,c){17 d=1i;1a(11.4l(a)&&11.4l(b)){1a(11.4u(c)&&c.3S)18 c.3S(a,b);a=a.24(11.3a);b=b.24(11.3a);1t(c=0;c<Y(a.1g,b.1g);c++){1a(d(a[c],10)>d(b[c],10))18 1;1a(d(a[c],10)<d(b[c],10))18-1}}18 0},3K:12(a,b){17 c,d;1a(!11.4l(a))18 1f;11.5R(b)||(b=4);b--;d=a.1q(/\\s/g,"").24(11.3a).5N(["0","0","0","0"]);1t(c=0;4>c;c++)1a(/^(0+)(.+)$/.1F(d[c])&&(d[c]=2z.$2),c>b||!/\\d/.1F(d[c]))d[c]="0";18 d.7b(0,4).5y(",")},$$5M:12(a){18 12(b){1a(!a.3M&&b){17 c,d,e=a.3J(b)?b:a.4G(b)?[b]:[];1t(d=0;d<e.1g;d++)1a(a.4G(e[d])&&/[^\\s]/.1F(e[d])&&(c=(b=69.dk[e[d]])?b.7T:0)&&(c.2e||c.4N))18 b}18 1f}},7Q:12(a,b,c){a=2v 2z(a,"i");b=!11.4u(b)||b?/\\d/:0;c=c?2v 2z(c,"i"):0;17 d=69.3b,e,f,g;1t(e=0;e<d.1g;e++)1a(g=d[e].4N||"",f=d[e].2e||"",a.1F(g)&&(!b||b.1F(2z.9M+2z.9K))||a.1F(f)&&(!b||b.1F(2z.9M+2z.9K)))1a(!c||!c.1F(g)&&!c.1F(f))18 d[e];18 1f},dp:12(a,b,c){17 d;b=2v 2z(b,"i");c=c?2v 2z(c,"i"):0;17 e,f,g=11.4G(a)?[a]:a;1t(f=0;f<g.1g;f++)1a((d=11.5M(g[f]))&&(d=d.7T)&&(e=d.4N||"",a=d.2e||"",b.1F(e)||b.1F(a))&&(!c||!c.1F(e)&&!c.1F(a)))18 d;18 0},7p:12(a,b){17 c,d,e,f,g=-1;1a(2<11.6m||!a||!a.2B||!(c=11.5g(a.2B)))18 b;1a(!b)18 c;c=11.3K(c);b=11.3K(b);d=b.24(11.3a);e=c.24(11.3a);1t(f=0;f<d.1g;f++)1a(-1<g&&f>g&&"0"!=d[f]||e[f]!=d[f]&&(-1==g&&(g=f),"0"!=d[f]))18 b;18 c},8Y:n.dq,3Q:12(a){17 b=1f;2c{b=2v 11.8Y(a)}26(c){}18 b},bF:12(a){17 b,c,d=/^[\\$][\\$]/;1t(b 2T a)1a(d.1F(b))2c{c=b.7b(2),0<c.1g&&!a[c]&&(a[c]=a[b](a),5Z a[b])}26(e){}},6i:12(a,b,c){17 d;1a(a){1a(1==a[b[0]]||c)1t(d=0;d<b.1g;d+=2)a[b[d]]=b[d+1];1t(d 2T a)(c=a[d])&&1==c[b[0]]&&11.6i(c,b)}},bu:12(){17 a=69,b,c=1x,d=a.7V||"",e=a.dw||"",f=a.dx||"",a=a.dy||"";11.6i(11,["$",11]);1t(b 2T 11.5s)11.5s[b]&&11.6i(11.5s[b],["$",11,"$$",11.5s[b]],1);11.bF(11);11.6m=2l;1a(f){17 g=["8x",1,"dB",2,"dC",3,"dD",4,"ae",21.1,"ag",21.2,"af",21.3,"8x.*dE",22.1,"8x.*dG",22.2,"dH\\\\s*dI",22.3,"",2l];1t(b=g.1g-2;0<=b;b-=2)1a(g[b]&&(2v 2z(g[b],"i")).1F(f)){11.6m=g[b+1];1z}}11.3k=c.6c("3k")[0]||c.6c("2H")[0]||c.2H||1f;11.5L=(11.3M=(2v dM("18/*@dN!@*/!1"))())&&/dO\\s*(\\d+\\.?\\d*)/i.1F(d)?7Y(2z.$1,10):1f;11.7F=11.7n=1f;1a(11.3M){b=1x.59("1b");2c{b.36.dS="2h(#8S#dT)",11.7n=b.dU("{dV-dW-8E-dY-dZ}","e0").1q(/,/g,".")}26(k){}b=7Y(11.7n||"0",10);11.7F=c.aV||(/e2/i.1F(c.e3||"")?5:b)||11.5L;11.5L=b||11.7F}11.6G=!1;1a(11.3M)1t(c="ax.e5 ax.e6 e7.bK 6D.6D a2.a2 ec.ed ee.ef eg.eh".24(" "),b=0;b<c.1g;b++)1a(11.3Q(c[b])){11.6G=!0;1z}11.ei=(11.ej=/9U/i.1F(a)&&/9U\\s*\\/\\s*\\d/i.1F(d))?11.3K(/aM\\s*\\:\\s*([\\.\\,\\d]+)/i.1F(d)?2z.$1:"0.9"):1f;11.el=(11.9T=/en\\s*\\/\\s*(\\d[\\d\\.]*)/i.1F(d))?11.3K(2z.$1):1f;11.eo=(11.ep=(/er/i.1F(e)||!e&&!11.9T)&&/es\\s*\\/\\s*(\\d[\\d\\.]*)/i.1F(d))&&/9S\\s*\\/\\s*(\\d[\\d\\.]*)/i.1F(d)?11.3K(2z.$1):1f;11.eu=(11.ev=/al\\s*[\\/]?\\s*(\\d+\\.?\\d*)/i.1F(d))&&(/9S\\s*\\/\\s*(\\d+\\.?\\d*)/i.1F(d),1)?7Y(2z.$1,10):1f;11.9R("5e",11.au(11.9Q,11))},9P:12(a){17 b,c={5j:-3,7h:0};1a(!11.4G(a))18 c;1a(1==a.1g)18 11.8U=a,c;a=a.1Y().1q(/\\s/g,"");b=11.5s[a];1a(!b||!b.3P)18 c;c.7h=b;11.4u(b.52)||(b.52=1f,b.2B=1f,b.bE=1f,b.5A=1f,b.eD=a);11.7S=!1;1a(11.3M&&!11.6G&&"eF"!==a)18 c.5j=-2,c;c.5j=1;18 c},8Z:12(a,b){11.3J(b)&&(11.56(a)||11.3J(a)&&0<a.1g&&11.56(a[0]))&&b.4S(a)},6b:12(a){17 b;1a(11.3J(a))1t(b=0;b<a.1g&&1f!==a[b];b++)11.1m(a[b]),a[b]=1f},1m:12(a){17 b=11.3J(a)?a.1g:-1;1a(0<b&&11.56(a[0]))a[0](11,1<b?a[1]:0,2<b?a[2]:0,3<b?a[3]:0);2f 11.56(a)&&a(11)},8U:",",$$3P:12(a){18 12(b,c,d){b=a.9P(b);1a(0>b.5j)18 1f;b=b.7h;1!=b.5A&&(b.3P(1f,c,d),1f===b.5A&&(b.5A=1));a.br();18 c=(c=b.2B||b.bE)?c.1q(a.3a,a.8U):c}},br:12(){11.7S&&11.4u(n.bj)&&n.bj()},8i:12(a,b){17 c=!1,d=\'<3q 1c="1" 1e="1" 36="6g:5w" \'+a.aN(b)+">"+a.ao+11.5c+"/3q>";1a(!11.3k)18 c;11.3k.ak(1x.59("3q"),11.3k.3f);11.3k.3f.82=d;2c{11.3k.3f.6n=a.6C}26(e){}2c{11.3k.3f.3q&&(c=!0)}26(f){}2c{c&&4>11.3k.3f.ac&&(11.7S=!0)}26(g){}11.3k.67(11.3k.3f);18 c},65:12(a,b){17 c=11;1a(!c.6G||!a)18 1f;a.64&&a.64.1g&&1f!==a.64[a.64.1g-1]&&c.6b(a.64);17 d,e=a.86;1a(c.4l(b)){1a(e.5O&&e.3H&&0>=c.3S(b,e.3H))18!0;1a(e.5O&&e.3F&&0<=c.3S(b,e.3F))18!1;(d=c.8i(a,b))&&(!e.3H||0<c.3S(b,e.3H))&&(e.3H=b);d||e.3F&&!(0>c.3S(b,e.3F))||(e.3F=b);18 d}17 f=[0,0,0,0],g=[].5N(e.8b),k=e.3H?1:0,h,m,n=12(b,d){17 e=[].5N(f);e[b]=d;18 c.8i(a,e.5y(","))};1a(e.3F){d=e.3F.24(c.3a);1t(h=0;h<d.1g;h++)d[h]=1i(d[h],10);d[0]<g[0]&&(g[0]=d[0])}1a(e.3H){m=e.3H.24(c.3a);1t(h=0;h<m.1g;h++)m[h]=1i(m[h],10);m[0]>f[0]&&(f[0]=m[0])}1a(m&&d)1t(h=1;h<m.1g&&m[h-1]==d[h-1];h++)d[h]<g[h]&&(g[h]=d[h]),m[h]>f[h]&&(f[h]=m[h]);1a(e.3F)1t(h=1;h<g.1g;h++)1a(0<d[h]&&0==g[h]&&g[h-1]<e.8b[h-1]){g[h-1]+=1;1z}1t(h=0;h<g.1g;h++){m={};1t(e=0;20>e&&!(1>g[h]-f[h]);e++){d=X((g[h]+f[h])/2);1a(m["a"+d])1z;m["a"+d]=1;n(h,d)?(f[h]=d,k=1):g[h]=d}g[h]=f[h];!k&&n(h,f[h])&&(k=1);1a(!k)1z}18 k?f.5y(","):1f},9R:12(a,b){17 c;11.56(b)&&(n.9j?n.9j(a,b,!1):n.9i?n.9i("1R"+a,b):(c=n["1R"+a],n["1R"+a]=11.9h(b,c)))},9h:12(a,b){18 12(){a();"12"==1d b&&b()}},9g:[],4w:[],9Q:12(a){a.35=!0;a.6b(a.9g);a.6b(a.4w);1a(a.8p)a.8p()},35:!1,$$f4:12(a){18 12(b){a.35?a.1m(b):a.8Z(b,a.4w)}},1b:1f,72:"f6",9a:50,3r:1,93:12(){17 a,b,c,d;1a(11.1b&&11.1b.5i)1t(a=11.1b.5i.1g-1;0<=a;a--){1a((c=11.1b.5i[a])&&c.5i)1t(b=c.5i.1g-1;0<=b;b--){d=c.5i[b];2c{c.67(d)}26(e){}}1a(c)2c{11.1b.67(c)}26(f){}}!11.1b&&(a=1x.7N(11.72))&&(11.1b=a);1a(11.1b&&11.1b.7R){2c{11.1b.7R.67(11.1b)}26(g){}11.1b=1f}},7Z:[],8p:12(){17 a,b;1a(11.35&&(!11.4w||!11.4w.1g||1f===11.4w[11.4w.1g-1])){1t(a 2T 11)1a((b=11[a])&&b.6k&&(3==b.fg||b.6k.1g&&1f!==b.6k[b.6k.1g-1]))18;1t(a=0;a<11.7Z.1g;a++)11.6b(11.7Z);11.93()}},6o:12(a){18 a&&(a=a.fi||a.fj,11.5R(a))?a:-1},fk:12(a,b,c,d){17 e=a.2o,f=11.6o(e);c=c.2o;17 g=11.6o(c);b=b.2o;17 k=11.6o(b);1a(!(e&&c&&b&&11.6p(a)))18-2;1a(g<k||0>f||0>g||0>k||k<=11.3r||1>11.3r)18 0;1a(f>=k)18-1;2c{1a(f==11.3r&&(!11.3M||4==11.6p(a).ac)&&(!a.35&&11.35||a.35&&11.5R(d)&&(11.5R(a.87)||(a.87=d),10<=d-a.87)))18 1}26(h){}18 0},6p:12(a,b){17 c=a?a.2o:0,d=c&&c.3f?1:0;2c{d&&b&&11.1b.fo()}26(e){}18 d?c.3f:1f},6q:12(a,b){17 c=a.36,d;1a(c&&b)1t(d=0;d<b.1g;d+=2)2c{c[b[d]]=b[d+1]}26(e){}},b8:12(a,b){17 c=1f,d=b?n.1y.1x:n.1x,e=d.6c("2H")[0]||d.2H;1a(!e)2c{d.aU(\'<1b 7a="aT">.\'+11.5c+"/1b>"),c=d.7N("aT")}26(f){}1a(e=d.6c("2H")[0]||d.2H)e.ak(a,e.3f),c&&e.67(c)},aQ:12(a,b,c,d,e){e=1x;17 f,g=e.59("2o"),k,h="fu 5w fv 5w 58 54 a4 54 a1 3m".24(" ");11.4u(d)||(d="");1a(11.4G(a)&&/[^\\s]/.1F(a)){a=a.1Y().1q(/\\s/g,"");f=11.5c+a+\' 1c="\'+11.3r+\'" 1e="\'+11.3r+\'" \';f+=\'36="fz-36:5w;49-36:5w;58:54;a4:54;a1:3m;6g:6L;" \';1t(k=0;k<b.1g;k+=2)/[^\\s]/.1F(b[k+1])&&(f+=b[k]+\'="\'+b[k+1]+\'" \');f+=">";1t(k=0;k<c.1g;k+=2)/[^\\s]/.1F(c[k+1])&&(f+=11.5c+\'3W 2e="\'+c[k]+\'" 2M="\'+c[k+1]+\'" />\');f+=d+11.5c+"/"+a+">"}2f f=d;11.1b||((b=e.7N(11.72))?11.1b=b:(11.1b=e.59("1b"),11.1b.7a=11.72),11.6q(11.1b,h.5N(["1c",11.9a+"4T","1e",11.3r+3+"4T","9X",11.3r+3+"4T","95",11.3r+3+"4T","ad","9V","6g","fE"])),b||(11.6q(11.1b,"8F fF 5T 54 1y 54".24(" ")),11.b8(11.1b)));1a(11.1b&&11.1b.7R){11.6q(g,h.5N(["9X",11.3r+3+"4T","95",11.3r+3+"4T","ad","9V","6g","6L"]));2c{g.fG=f}26(m){}2c{11.1b.fH(g)}26(n){}18{2o:g,35:11.35,8P:a,82:f}}18{2o:1f,35:11.35,8P:"",82:f}},5s:{2W:{4t:["1H/2W","68/x-fJ","2F/x-fK","2F/x-2W"],3D:"fM.fN.1",fO:"66.66",6C:"6l:9f-9r-9u-9y-9B",7C:7,ao:\'<3W 2e="2i" 2M="" /><3W 2e="fP" 2M="2Z" />\',aN:12(a){18\'7d="#2B=\'+a+\'"\'},86:{3H:0,3F:0,5O:0,8b:[16,b9,b9,0]},3P:12(a){17 b=11.$,c=1f,d=1f;1a(b.3M){b.4l(a)&&(a=a.24(b.3a),3<a.1g&&0<1i(a[3],10)&&(a[3]="fR"),a=a.5y(","));1a(b.4l(a)&&b.5L>=11.7C&&0<11.7M()){11.52=11.aJ(a);11.5A=0;18}11.5A=1;!c&&b.5L>=11.7C&&(c=11.az(b.65(11)));c||(d=b.3Q(11.3D))&&d.at&&(c=d.at.89(16),c=1i(c.4g(0),16)+"."+1i(c.4g(1),16)+"."+1i(c.4g(2),16))}2f b.5M(11.4t)&&(d=3!=b.6m?b.7Q("66.*fW-?2T",0):1f)&&d.2e&&(c=b.5g(d.2e));11.52=c?1:d?0:-1;11.2B=b.3K(c,3)},7m:["7,60,0,0","0,0,0,0"],7o:["7,50,0,0",1f],7u:[12(a,b){17 c=b.24(a.$.3a);18[c[0],c[1].4g(0),c[1].4g(1),c[2]].5y()},1f],az:12(a){17 b=11.$,c,d=11.7m,e=11.7o;1a(a)1t(a=b.3K(a),c=0;c<d.1g;c++)1a(d[c]&&0>b.3S(a,d[c])&&e[c]&&0<=b.3S(a,e[c])&&11.7u[c])18 11.7u[c](11,a);18 a},7M:12(){17 a=11.$,b,c=11.7M,d=11.7m,e=11.7o;1a(!c.2M)1t(c.2M=-1,b=0;b<d.1g;b++){1a(d[b]&&a.65(11,d[b])){c.2M=1;1z}1a(e[b]&&a.65(11,e[b])){c.2M=-1;1z}}11.86.5O=1==c.2M?1:0;18 c.2M},aJ:12(a){18 11.$.65(11,a)?.7:-1}},2t:{4t:"68/x-7f-2t",3D:"6D.6D",6C:"6l:g0-g1-8E-g2-9c",3P:12(){17 a=12(a){18 a?(a=/[\\d][\\d\\,\\.\\s]*[bH]{0,1}[\\d\\,]*/.4H(a))?a[0].1q(/[bH\\.]/g,",").1q(/\\s/g,""):1f:1f},b=11.$,c,d=1f,e=1f,f=1f;1a(b.3M){1t(c=15;2<c;c--)1a(e=b.3Q(11.3D+"."+c)){f=c.89();1z}e||(e=b.3Q(11.3D));1a("6"==f)2c{e.g5="bn"}26(g){18"6,0,21,0"}2c{d=a(e.as("$2B"))}26(k){}!d&&f&&(d=f)}2f{1a(e=b.5M(11.4t)){c=b.6p(b.aQ("3q",["1k",11.4t],[],"",11));2c{d=b.5g(c.as("$2B"))}26(h){}}d||((c=e?e.7T:1f)&&c.4N&&(d=a(c.4N)),d&&(d=b.7p(c,d)))}11.52=d?1:-1;11.2B=b.3K(d);18!0}},7f:{4t:"68/x-g7",3D:"9E.9E",6C:"6l:g9-gb-8E-gc-9c",3P:12(){17 a=1f,b=1f,c=11.$;1a(c.3M){2c{b=c.3Q(11.3D).gd("")}26(d){}c.4G(b)&&0<b.1g?a=c.5g(b):c.3Q(11.3D+".8")?a="8":c.3Q(11.3D+".7")?a="7":c.3Q(11.3D+".1")&&(a="6")}2f(b=c.7Q("aR\\\\s*1t\\\\s*gf"))&&b.4N&&c.5M(11.4t)&&(a=c.5g(b.4N)),a&&(a=c.7p(b,a));11.52=a?1:-1;11.2B=c.3K(a)}},gg:0}};Q.bu();17 j=\'8O "%%" 12 8N an gh 3g gi 2R.\\gj gk be 2T bs gl "gm", "gn", ...\',q=1f;(12(){12 a(a){a=a||31.2V;18"#"+a.1q(/^[^#]*#?(.*)$/,"$1")}17 b=1x,c,d=g.4F.bl,e=b.aV,f="gp"2T n&&(9d 0===e||7<e);g.fn.3n=12(a){18 a?11.4n("3n",a):11.76("3n")};g.fn.3n.bc=50;d.3n=g.3x(d.3n,{bk:12(){1a(f)18!1;g(c.2Y)},bi:12(){1a(f)18!1;g(c.1Z)}});c=12(){12 c(){17 b=a(),d=t(m);b!==m?(q(m=b,d),g(n).76("3n")):d!==m&&(31.2V=31.2V.1q(/#.*/,"")+d);e=2E(c,g.fn.3n.bc)}17 d={},e,m=a(),p=12(a){18 a},q=p,t=p;d.2Y=12(){e||c()};d.1Z=12(){e&&4P(e);e=9d 0};D.6j&&!f&&12(){17 e,f;d.2Y=12(){e||(f=(f=g.fn.3n.2i)&&f+a(),e=g(\'<4p 77="-1" 1J="4e"/>\').1U().7E("5e",12(){f||q(a());c()}).2L("2i",f||"a8:0").gs("2H")[0].gu,b.gv=12(){2c{"1J"===4F.gw&&(e.1x.1J=b.1J)}26(a){}})};d.1Z=p;t=12(){18 a(e.31.2V)};q=12(a,c){17 d=e.1x,f=g.fn.3n.aj;a!==c&&(d.1J=b.1J,d.ab(),f&&d.aU(\'<9G>1x.aj="\'+f+\'"\\gz/9G>\'),d.3Z(),e.31.4o=a)}}();18 d}()})();4Y.48.5W||(4Y.48.5W=12(a,b){1a(1f==11)5o 2v 6W;17 c=6S(11),d=c.1g>>>0;1a("12"!=1d a)5o 2v 6W;1t(17 e=[],f=0;f<d;f++)1a(f 2T c){17 g=c[f];a.1m(b,g,f,c)&&e.4S(g)}18 e});4Y.48.1N||(4Y.48.1N=12(a,b){17 c;1a(1f==11)5o 2v 6W(\'"11" 3A 1f gC 7t gD\');17 d=6S(11),e=d.1g>>>0;1a(0===e)18-1;c=+b||0;gE===I(c)&&(c=0);1a(c>=e)18-1;1t(c=ba(0<=c?c:e-I(c),0);c<e;){1a(c 2T d&&d[c]===a)18 c;c++}18-1});4Y.48.79||(4Y.48.79=12(a){1a(1f==11)5o 2v 6W;17 b=6S(11),c=b.1g>>>0;1a(0===c)18-1;17 d=c;1<2R.1g&&(d=gF(2R[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(0<d||-1)*M(I(d))));1t(c=0<=d?Y(d,c-1):c-I(d);0<=c;c--)1a(c 2T b&&b[c]===a)18 c;18-1})})(8L,11);', 62, 1034, "                                                               this function  options   var return ilightbox if div width typeof height null length next parseInt vars type callback call items current prev replace case URL for show class left document top break data thumbnails css addClass iLightBox test horizontal video ui title append onRender styles indexOf holder toolbar total on caption social hide overlay onAfterLoad each toLowerCase stop    container split moveTo catch    controls onBeforeLoad try add name else html5video url src thumbnail coords 100 outerHeight prevButton span speed naturalHeight loader naturalWidth flash animate new linkId onShow isInFullScreen RegExp  version effects nextButton setTimeout image removeClass body prevPhoto html nextPhoto attr value undefined opacity text ajaxSetup arguments infinite in easeOutCirc href quicktime ext start false  location closeAction fadeIn isSwipe winLoaded style    splitNumRegx plugins fullscreen offset http firstChild number selector repositionPhoto outerWidth head com visible iLightBoxHashChange BODY string object pluginSize skin webm itap isMobile cycleID extend path fullAlone is documentElement hashLock progID slideshow max prefix min pathname isArray formatNum configureHolder isIE prevLock nextLock getVersion getAXO disabled compareNums keyboard swipe mousewheel param fadeOut innerToolbar close  innerNextButton button innerPrevButton canPlayType  mp4 startFrom prototype border hideLoader factor loadRequests switch empty effect charAt goTo pause lockWheel loadImage isStrNum context bind hash iframe webkit Math scrollLeft mimeType isDefined inner WLfuncs mouseID source isPaused play fullViewPort mouseenter minScale remove event isString exec authority scrollTop refresh pluginspage error description maxScale clearTimeout Share offsetX push px addContent fullScreenAction cancelFullScreen mouseleave Array loadContent  no installed lockSwipe 0px  isFunc obj padding createElement ondragstart autoplay openTag ogg load protocol getNum showLoader childNodes status active createUI www generateThumbnails throw offsetY easeInOutCirc generateBoxes Plugins iL off time none lockKey join supportsFullScreen getVersionDone loadedFadeSpeed repositionSpeed newDims getNewDimenstions prevScale nextScale pageOffsetY pageOffsetX positionThumbnails fadeSpeed verIE hasMimeType concat match success errors isNum clone right resume setOption filter item emb delete  alert prevOffsetX nextOffsetX BIfuncs codebaseSearch QuickTime removeChild application navigator click callArray getElementsByTagName grid thumbs reposition display dispatchItemsEvents initObj msie funcs clsid OS classid getWidth getDOMobj setStyle ajax itemsObject originalEvent touches arrows onBeforeChange onAfterChange search supportTouch substring fullScreenButton classID ShockwaveFlash preload nextOpacity ActiveXEnabled addContents patchEvents scrollTo unbind inline prevOpacity cache crossDomain global ifModified username Object password beforeSend requestFullScreen TypeError naturalWidthOld naturalHeightOld fullStretchTypes complete touchstart divID getAttribute repositionEl wrapper trigger tabindex php_js lastIndexOf id slice icon codebase dontGenerateThumbs shockwave true plugin to apple 200 img cdbaseUpper verIEfull cdbaseLower getPluginFileVersion previous vspace doFullscreen not cdbase2ver dataType hspace hasClass preventDefault smartRecognition mobileOptimizer normalizeItems minIEver ogv one docModeIE resetCycle patchItemsEvents noscroll download diff _ canUseIsMin getElementById easeInCirc hashChangeHandler findNavPlugin parentNode garbage enabledPlugin encodeURIComponent userAgent enterFullscreen php parseFloat DONEfuncs  innerPlayButton outerHTML reddit setCaption  SEARCH count setSocial toString yes digits activeOpacity isFullScreen normalOpacity mobileMaxWidth maxWidth maxHeight isActiveXObject embed videoType touchend offsetW offsetH dims onDoneEmptyDiv pauseTime buttons attachItems removeAttr keepAspectRatio pop m4v Win html5H264 html5WebM html5Vorbis hideableElements missingPlugin flashvars 11CF position browserPrefixes target fullScreenEventName iTap verticalDistanceThreshold jQuery align requires The tagName Enter index default nodeName getVersionDelimiter movePrev shift_enter esc AXO fPush  ja up emptyDiv destroy lineHeight down startPaused blur instant divWidth onOpen 444553540000 void pauseOnHover 02BF25D5 WLfuncs0 winHandler attachEvent addEventListener mov Date getTime pageX pageY 500 closedhand 8C17 1E3 vertical 4B23 loadSwitcher element switchSpeed BC80 30px thumbsOffset D3488ABDDC6B jsonp closeButton SWCtl 192px script normalizeSocial facebook share rightContext 3E3 leftContext twitter _blank init runWLfuncs addWinEvent Version isChrome Gecko baseline delicious fontSize digg submit slideShow visibility TDCCtl getNumRegx margin ul li ha javascript pageYOffset  open readyState verticalAlign iPhone iPad iPod na overflow domain insertBefore Opera loadContents  HTML onExitFullScreen exitFullscreen ENV GetVariable QuickTimeVersion handler onEnterFullScreen onHide Msxml2 fadeTo CDBASE2VER thumbsOffsetW thumbsOffsetH 1280 nextOffsetY prevOffsetY 720 bottom accesskey noexternaldata isMin la background rv getCodeBaseVersion recognized ma insertHTML Shockwave Flash pd33993399 write documentMode linkid touchmove html5QuickTime h264 mousemove poster loop scale tofit chrome CancelFullScreen ms insertDivInBody 128  availPlugins delay moz  randomStart instantCall pl teardown CollectGarbage setup special  always allowFullScreen attrFn ogpRecognition cleanup the isNaN initScript trying when occurred An Shift setTime ia currentSrc Fullscreen version0 convertFuncs response rRdD moveNext 300 XMLDOM isPlainObject 120 180 5E3 Press Esc images results 3E4 mozallowfullscreen Exit Slideshow Next Previous webkitAllowFullScreen scroll auto scrolling photo contents frameborder content your are attempting  view player Adobe getflash GET jquery that was loaded too old easing tap taphold swipeleft swiperight scrollstart scrollstop adobe allowScriptAccess showall transparent wmode fix dispatch handle menu 000000 bgcolor high quality LOOP khtml AUTOPLAY fullscreenchange fullScreen webkitIsFullScreen FullScreen RequestFullScreen SCALE qt opera compatible mozilla ratio safari toUpperCase transform perspective translateZ PluginDetect stretch fit fill array scrollbars resizable menubar window onclick 360  640 Digg phase Delicious post Google google plus https mimeTypes googleplus Twitter home Facebook getMimeEnabledPlugin ActiveXObject shiftKey keyCode keydown 2E3 resize vendor platform product onabort onerror Mac Linux FreeBSD CE onload Mobile Pocket PC Image float appendTo Function cc_on MSIE hidden children 400 behavior clientcaps getComponentVersion 89820200 ECBD prepend 8B85 00AA005B4383 componentid setAttribute back compatMode metadata XMLHTTP DOMDocument Microsoft dark WEBM  eval Shell UIHelper Scripting Dictionary wmplayer ocx verGecko isGecko prevItem verChrome nextItem Chrome verSafari isSafari  Apple Safari currentItem verOpera isOpera prevElement nextElement currentElement ig mouseout mouseover 980 pluginName dragger java random floor round sqrt abs mouseup mousedown Mini IEMobile BlackBerry webOS Android ontouchstart 3gp movie mpeg mpg avi txt shtml rhtml rb phtml php5 onWindowLoaded php4 plugindetect php3 jsp htm  cfm cgi aspx asp jpe OTF jfif scrollWidth offsetWidth getTagStatus tif tiff  focus png jpg jpeg gif bmp outlineStyle borderStyle swf cab qtplugin outline qtactivex QT_GenerateOBJECTText pageXOffset lt block absolute innerHTML appendChild ne quicktimeplayer macpaint le QuickTimeCheckObject QuickTimeCheck progID0 controller rc 9999 RC beta alpha dev Plug port hostname host D27CDB6E AE6D 96B8 String inArray AllowScriptAccess gradient director iLCallback 166B1BCA  3F9C 8075 ShockwaveVersion  Director zz even of nArguments should form atttributeName attributeValue  oniLightBoxHashChange getSource net insertAfter  contentWindow onpropertychange propertyName Height Width x3c client innerWidth or defined Infinity Number".split(" "), 0, {}));
(function ($, window, document, undefined) {
    var lazyLoadXT = 'lazyLoadXT',
        dataLazied = 'lazied',
        load_error = 'load error',
        classLazyHidden = 'lazy-hidden',
        docElement = document.documentElement || document.body,
        forceLoad = (window.onscroll === undefined || !!window.operamini || !docElement.getBoundingClientRect),
        options = {
            autoInit: !0,
            selector: 'img[data-src]',
            blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            throttle: 99,
            forceLoad: forceLoad,
            loadEvent: 'pageshow',
            updateEvent: 'load orientationchange resize scroll touchmove focus',
            forceEvent: 'lazyloadall',
            oninit: {
                removeClass: 'lazy'
            },
            onshow: {
                addClass: classLazyHidden
            },
            onload: {
                removeClass: classLazyHidden,
                addClass: 'lazy-loaded'
            },
            onerror: {
                removeClass: classLazyHidden
            },
            checkDuplicates: !0
        },
        elementOptions = {
            srcAttr: 'data-src',
            edgeX: 0,
            edgeY: 0,
            visibleOnly: !0
        },
        $window = $(window),
        $isFunction = $.isFunction,
        $extend = $.extend,
        $data = $.data || function (el, name) {
            return $(el).data(name)
        },
        elements = [],
        topLazy = 0,
        waitingMode = 0;
    $[lazyLoadXT] = $extend(options, elementOptions, $[lazyLoadXT]);

    function getOrDef(obj, prop) {
        return obj[prop] === undefined ? options[prop] : obj[prop]
    }

    function scrollTop() {
        var scroll = window.pageYOffset;
        return (scroll === undefined) ? docElement.scrollTop : scroll
    }
    $.fn[lazyLoadXT] = function (overrides) {
        overrides = overrides || {};
        var blankImage = getOrDef(overrides, 'blankImage'),
            checkDuplicates = getOrDef(overrides, 'checkDuplicates'),
            scrollContainer = getOrDef(overrides, 'scrollContainer'),
            forceShow = getOrDef(overrides, 'show'),
            elementOptionsOverrides = {},
            prop;
        $(scrollContainer).on('scroll', queueCheckLazyElements);
        for (prop in elementOptions) {
            elementOptionsOverrides[prop] = getOrDef(overrides, prop)
        }
        return this.each(function (index, el) {
            if (el === window) {
                $(options.selector).lazyLoadXT(overrides)
            } else {
                var duplicate = checkDuplicates && $data(el, dataLazied),
                    $el = $(el).data(dataLazied, forceShow ? -1 : 1);
                if (duplicate) {
                    queueCheckLazyElements();
                    return
                }
                if (blankImage && el.tagName === 'IMG' && !el.src) {
                    el.src = blankImage
                }
                $el[lazyLoadXT] = $extend({}, elementOptionsOverrides);
                triggerEvent('init', $el);
                elements.push($el);
                queueCheckLazyElements()
            }
        })
    };

    function triggerEvent(event, $el) {
        var handler = options['on' + event];
        if (handler) {
            if ($isFunction(handler)) {
                handler.call($el[0])
            } else {
                if (handler.addClass) {
                    $el.addClass(handler.addClass)
                }
                if (handler.removeClass) {
                    $el.removeClass(handler.removeClass)
                }
            }
        }
        $el.trigger('lazy' + event, [$el]);
        queueCheckLazyElements()
    }

    function triggerLoadOrError(e) {
        triggerEvent(e.type, $(this).off(load_error, triggerLoadOrError))
    }

    function checkLazyElements(force) {
        if (!elements.length) {
            return
        }
        force = force || options.forceLoad;
        topLazy = Infinity;
        var viewportTop = scrollTop(),
            viewportHeight = window.innerHeight || docElement.clientHeight,
            viewportWidth = window.innerWidth || docElement.clientWidth,
            i, length;
        for (i = 0, length = elements.length; i < length; i++) {
            var $el = elements[i],
                el = $el[0],
                objData = $el[lazyLoadXT],
                removeNode = !1,
                visible = force || $data(el, dataLazied) < 0,
                topEdge;
            if (!$.contains(docElement, el)) {
                removeNode = !0
            } else if (force || !objData.visibleOnly || el.offsetWidth || el.offsetHeight) {
                if (!visible) {
                    var elPos = el.getBoundingClientRect(),
                        edgeX = objData.edgeX,
                        edgeY = objData.edgeY;
                    topEdge = (elPos.top + viewportTop - edgeY) - viewportHeight;
                    visible = (topEdge <= viewportTop && elPos.bottom > -edgeY && elPos.left <= viewportWidth + edgeX && elPos.right > -edgeX)
                }
                if (visible) {
                    $el.on(load_error, triggerLoadOrError);
                    triggerEvent('show', $el);
                    var srcAttr = objData.srcAttr,
                        src = $isFunction(srcAttr) ? srcAttr($el) : el.getAttribute(srcAttr);
                    if (src) {
                        el.src = src
                    }
                    removeNode = !0
                } else {
                    if (topEdge < topLazy) {
                        topLazy = topEdge
                    }
                }
            }
            if (removeNode) {
                $data(el, dataLazied, 0);
                elements.splice(i--, 1);
                length--
            }
        }
        if (!length) {
            triggerEvent('complete', $(docElement))
        }
    }

    function timeoutLazyElements() {
        if (waitingMode > 1) {
            waitingMode = 1;
            checkLazyElements();
            setTimeout(timeoutLazyElements, options.throttle)
        } else {
            waitingMode = 0
        }
    }

    function queueCheckLazyElements(e) {
        if (!elements.length) {
            return
        }
        if (e && e.type === 'scroll' && e.currentTarget === window) {
            if (topLazy >= scrollTop()) {
                return
            }
        }
        if (!waitingMode) {
            setTimeout(timeoutLazyElements, 0)
        }
        waitingMode = 2
    }

    function initLazyElements() {
        $window.lazyLoadXT()
    }

    function forceLoadAll() {
        checkLazyElements(!0)
    }
    $(document).ready(function () {
        triggerEvent('start', $window);
        $window.on(options.updateEvent, queueCheckLazyElements).on(options.forceEvent, forceLoadAll);
        $(document).on(options.updateEvent, queueCheckLazyElements);
        if (options.autoInit) {
            $window.on(options.loadEvent, initLazyElements);
            initLazyElements()
        }
    })
})(window.jQuery || window.Zepto || window.$, window, document);
(function ($) {
    var options = $.lazyLoadXT,
        bgAttr = options.bgAttr || 'data-bg';
    options.selector += ',[' + bgAttr + ']';
    $(document).on('lazyshow', function (e) {
        var $this = $(e.target),
            url = $this.attr(bgAttr);
        if (!!url) {
            $this.css('background-image', "url('" + url + "')").removeAttr(bgAttr).triggerHandler('load')
        }
    })
})(window.jQuery || window.Zepto || window.$);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.4", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = c(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.4", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.4", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a(document.body).height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
jQuery(function ($) {
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove()
    });
    var slideHeight = $(window).height();
    $('#home-slider .item').css('height', slideHeight);
    $(window).resize(function () {
        'use strict',
        $('#home-slider .item').css('height', slideHeight)
    });
    var slideHeight = $(window).height();
    $('#mobile-slider .item').css('height', slideHeight);
    $(window).resize(function () {
        'use strict',
        $('#mobile-slider .item').css('height', slideHeight)
    });
    $(".navbar-toggle").click(function () {
        $(".main-nav").toggleClass("active")
    })
    $(window).scroll(function (event) {
        Scroll()
    });
    $('.navbar-collapse ul li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        $(".main-nav").removeClass("active");
        return !1
    });

    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function () {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height())
        })
        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll').removeClass('active').eq(i).addClass('active')
            }
        })
    };
    $('.tohash').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
        return !1
    });
    new WOW().init();
    smoothScroll.init();
    $('#about-us').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%')
            });
            $(this).unbind('inview')
        }
    });
    $('#features').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter))
                    }
                })
            });
            $(this).unbind('inview')
        }
    });
    $('#portfolio').on('click', '.folio-read-more', function (event) {
        event.preventDefault();
        var link = $(this).data('single_url');
        var full_url = '#portfolio-single-wrap',
            parts = full_url.split("#"),
            trgt = parts[1],
            target_top = $("#" + trgt).offset().top;
        $('html, body').animate({
            scrollTop: target_top
        }, 600);
        $('#portfolio-single').slideUp(500, function () {
            $(this).load(link, function () {
                $(this).slideDown(500)
            })
        })
    });
    $('#portfolio-single-wrap').on('click', '.close-folio-item', function (event) {
        event.preventDefault();
        var full_url = '#portfolio',
            parts = full_url.split("#"),
            trgt = parts[1],
            target_offset = $("#" + trgt).offset(),
            target_top = target_offset.top;
        $('html, body').animate({
            scrollTop: target_top
        }, 600);
        $("#portfolio-single").slideUp(500)
    });
    var form = $('#main-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn())
            }
        }).done(function (data) {
            form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut()
        })
    })
});
$(document).ready(function () {
    $('.responsive-items').slick({
        centerMode: !0,
        centerPadding: '3rem',
        adaptiveHeight: !0,
        autoplay: !0,
        arrows: !0,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1300,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: '300px',
                slidesToShow: 1,
            }
        }, {
            breakpoint: 1000,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: '200px',
                slidesToShow: 1,
            }
        }, {
            breakpoint: 800,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: '150px',
                slidesToShow: 1,
            }
        }, {
            breakpoint: 650,
            settings: {
                centerPadding: '1.5rem',
                slidesToShow: 1,
                arrows: !1,
            }
        }]
    })
});
$(".pop-up-slider").slick({
    arrows: !0,
    autoplay: !0,
    autoplaySpeed: 5000,
    pauseOnFocus: !1,
    pauseOnHover: !1,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
        }
    }]
});
$(".close-pu").click(function () {
    $(".pop-up-slider").fadeOut()
})
var items = document.querySelectorAll(".story-text-right");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth))
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            $(".pop-up-slider").addClass("in-view")
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
$('.project-box').iLightBox({
    skin: "smooth",
    path: 'horizontal',
    keepAspectRatio: !1,
    innerToolbar: !0,
    fullViewPort: 'stretch',
    options: {
        fullViewPort: 'fill',
        height: "100%",
        width: "100%",
    },
    controls: {
        arrows: !0,
        fullscreen: !1,
        thumbnail: !1,
    }
});
$('.video-box').iLightBox({
    skin: "smooth"
});
$('#our-story-video, #our-story-video-2').iLightBox({
    skin: "smooth"
});
$.extend($.lazyLoadXT, {
    edgeY: 200,
    srcAttr: 'data-src'
});
$("#read-more").click(function () {
    $(this).hide();
    $(".mobile-holder").css("height", "100%")
});
var isMobileXS = window.matchMedia("only screen and (max-width: 779px)");
if (isMobileXS.matches) {
    $(".travel-info h4").click(function () {
        $(this).next("ul").slideToggle();
        $(this).children("i").toggleClass("rotate")
    })
};
$('.partner-slider').slick({
    infinite: !0,
    slidesToShow: 1,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 1000
});
$("#show-expeditions").click(function (event) {
    event.preventDefault();
    $("#tao-expeditions").fadeIn();
    $("body").css("overflow-y", "hidden")
});
$("#show-retreats").click(function (event) {
    event.preventDefault();
    $("#tao-retreats ").fadeIn();
    $("body").css("overflow-y", "hidden")
});
$("#expedition .darken").click(function () {
    $(this).fadeOut();
    $("body").css("overflow-y", "visible")
});
var isMobile = window.matchMedia("only screen and (max-width: 968px)");
if (!isMobile.matches) {
    $(".folio-item").hover(function () {
        $(this).find(".slide-info").stop(!0, !0).slideToggle()
    })
}
