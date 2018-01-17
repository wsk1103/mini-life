(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Er6l) {
        if (!Er6l || !Er6l.length) return null;
        var Wp1x = window;
        for (var a = Er6l.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Wp1x = Wp1x[a[i]] = Wp1x[a[i]] || {}, i++) ;
        return Wp1x
    };
    NEJ.Q = function (bJ6D, Er6l) {
        bJ6D = bJ6D || NEJ.O;
        var br6l = Er6l.split(".");
        for (var i = 0, l = br6l.length; i < l; i++) {
            bJ6D = bJ6D[br6l[i]];
            if (!bJ6D) break
        }
        return bJ6D
    };
    NEJ.C = function () {
        var bSl4p = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bxN8F = function (D6x, bz6t) {
            for (var x in bz6t) if (D6x == bz6t[x]) return x;
            return null
        };
        var bgM4Q = {cx6r: 0, bl6f: 1, bD6x: 2, bX6R: 3, bL6F: 4, eX8P: 5, ko9f: 6, eC8u: 7},
            uQ3x = {cD7w: 0, bm6g: 1, bH6B: 2, cg6a: 3, bQ6K: 4, gC8u: 5, lg0x: 6, gp8h: 7};
        return function () {
            var fI8A = function () {
                this.byl8d();
                return this.cx6r.apply(this, arguments)
            };
            fI8A.prototype.byl8d = NEJ.F;
            fI8A.prototype.cx6r = NEJ.F;
            fI8A.O6I = function (Al5q, bAq9h) {
                if (bSl4p(Al5q)) return;
                if (bAq9h == null || !!bAq9h) NEJ.X(this, Al5q, bSl4p);
                this.cpZ0x = Al5q;
                this.cs6m = Al5q.prototype;
                var bI6C = function () {
                };
                bI6C.prototype = Al5q.prototype;
                this.prototype = new bI6C;
                var EY6S = this.prototype;
                EY6S.constructor = this;
                var cl6f;
                for (var x in bgM4Q) {
                    cl6f = bxN8F(bgM4Q[x], uQ3x);
                    if (!cl6f || !this.cs6m[x]) continue;
                    EY6S[x] = function (V6P) {
                        return function () {
                            this[V6P].apply(this, arguments)
                        }
                    }(cl6f)
                }
                var Fm6g = {};
                for (var x in uQ3x) {
                    cl6f = bxN8F(uQ3x[x], bgM4Q);
                    if (!cl6f || !this.cs6m[cl6f]) continue;
                    Fm6g[cl6f] = Al5q;
                    EY6S[x] = function (V6P) {
                        return function () {
                            var o6i, bI6C = this.bik4o[V6P], WU1x = bI6C.prototype[V6P];
                            this.bik4o[V6P] = bI6C.cpZ0x || Al5q;
                            if (!!WU1x) o6i = WU1x.apply(this, arguments);
                            this.bik4o[V6P] = Al5q;
                            return o6i
                        }
                    }(cl6f)
                }
                EY6S.byl8d = function () {
                    this.bik4o = NEJ.X({}, Fm6g)
                };
                EY6S.cHS4W = EY6S.cD7w;
                return EY6S
            };
            return fI8A
        }
    }();
    NEJ.X = function (gr8j, bP6J, dX8P) {
        if (!gr8j || !bP6J) return gr8j;
        dX8P = dX8P || NEJ.F;
        for (var x in bP6J) {
            if (bP6J.hasOwnProperty(x) && !dX8P(bP6J[x], x)) gr8j[x] = bP6J[x]
        }
        return gr8j
    };
    NEJ.EX = function (gr8j, bP6J) {
        if (!gr8j || !bP6J) return gr8j;
        for (var x in gr8j) {
            if (gr8j.hasOwnProperty(x) && bP6J[x] != null) gr8j[x] = bP6J[x]
        }
        return gr8j
    };
    var Id7W = Function.prototype;
    Id7W.eF8x = function (ly0x, xg4k) {
        var f = NEJ.F, xg4k = xg4k || f, ly0x = ly0x || f, dt7m = this;
        return function () {
            var d6d = {args: NEJ.R.slice.call(arguments, 0)};
            ly0x(d6d);
            if (!d6d.stopped) {
                d6d.value = dt7m.apply(this, d6d.args);
                xg4k(d6d)
            }
            return d6d.value
        }
    };
    Id7W.g6a = function () {
        var bf6Z = arguments, gr8j = arguments[0], bio5t = this;
        return function () {
            var xf4j = NEJ.R.slice.call(bf6Z, 1);
            NEJ.R.push.apply(xf4j, arguments);
            return bio5t.apply(gr8j || window, xf4j)
        }
    };
    Id7W.eu8m = function () {
        var bf6Z = arguments, gr8j = NEJ.R.shift.call(bf6Z), bio5t = this;
        return function () {
            NEJ.R.push.apply(arguments, bf6Z);
            return bio5t.apply(gr8j || window, arguments)
        }
    };
    var Id7W = String.prototype;
    if (!Id7W.trim) {
        Id7W.trim = function () {
            var dh7a = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(dh7a, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, N6H = c5h("nej.p"), ul3x = window.navigator.platform,
        um3x = window.navigator.userAgent;
    var lt0x = {mac: ul3x, win: ul3x, linux: ul3x, ipad: um3x, ipod: um3x, iphone: ul3x, android: um3x};
    N6H.Ii7b = lt0x;
    for (var x in lt0x) lt0x[x] = (new RegExp(x, "i")).test(lt0x[x]);
    lt0x.ios = lt0x.ipad || lt0x.iphone || lt0x.ipod;
    lt0x.tablet = lt0x.ipad;
    lt0x.desktop = lt0x.mac || lt0x.win || lt0x.linux && !lt0x.android;
    var iv9m = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    N6H.ds7l = iv9m;
    if (/msie\s+(.*?);/i.test(um3x) || /trident\/.+rv:([\d\.]+)/i.test(um3x)) {
        iv9m.engine = "trident";
        iv9m.browser = "ie";
        iv9m.version = RegExp.$1;
        iv9m.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var my0x = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        iv9m.release = my0x[document.documentMode] || my0x[parseInt(iv9m.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(um3x)) {
        iv9m.engine = "webkit";
        iv9m.release = RegExp.$1 || "";
        iv9m.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(um3x)) {
        iv9m.engine = "gecko";
        iv9m.release = RegExp.$1 || "";
        iv9m.browser = "firefox";
        iv9m.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(um3x)) iv9m.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(um3x)) {
        iv9m.engine = "presto";
        iv9m.release = RegExp.$1 || "";
        iv9m.browser = "opera";
        iv9m.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(um3x)) iv9m.version = RegExp.$1 || ""
    }
    if (iv9m.browser == "unknow") {
        var my0x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = my0x.length, V6P; i < l; i++) {
            V6P = my0x[i] == "safari" ? "version" : my0x[i];
            if ((new RegExp(V6P + "/(.*?)(?=\\s|$)", "i")).test(um3x)) {
                iv9m.browser = my0x[i];
                iv9m.version = RegExp.$1.trim();
                break
            }
        }
    }
    N6H.bQz3x = {};
    var bbd3x = iv9m.engine != "trident";
    N6H.mX0x = {
        gecko: iv9m.engine != "gecko",
        webkit: iv9m.engine != "webkit",
        presto: iv9m.engine != "presto",
        trident0: bbd3x || iv9m.release > "2.0",
        trident1: bbd3x || iv9m.release < "6.0",
        trident2: bbd3x || iv9m.release > "3.0",
        trident: bbd3x || iv9m.release >= "6.0"
    }
})();
(function () {
    var iu9l = NEJ.P("nej.c"), R6L = {};
    var biE5J = function () {
        var dh7a = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y6S) {
            Y6S = Y6S || "";
            if (dh7a.test(Y6S)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var UQ1x = function () {
        var byJ8B = function (i6c, bz6t) {
            if (!i6c || !i6c.length) return;
            for (var i = 0, l = i6c.length, jO9F; i < l; i++) {
                jO9F = i6c[i];
                if (jO9F.indexOf("://") > 0) bz6t[biE5J(jO9F)] = jO9F
            }
        };
        var bg6a = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bP6J) {
            iu9l.Io7h("root", bP6J.root || "/res/");
            var bli5n, fY8Q = iu9l.B6v("root");
            for (var x in bg6a) {
                bli5n = bg6a[x];
                iu9l.Io7h(x, bP6J[bli5n.name] || fY8Q + bli5n.dft)
            }
            var An5s = bP6J.p_csrf;
            if (An5s == !0) {
                An5s = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            iu9l.Io7h("csrf", NEJ.EX({cookie: "", param: ""}, An5s));
            R6L.frames = {};
            byJ8B(bP6J.p_frame, R6L.frames);
            R6L.flashs = {};
            byJ8B(bP6J.p_flash, R6L.flashs)
        }
    }();
    iu9l.Io7h = function (J6D, D6x) {
        R6L[J6D] = D6x
    };
    iu9l.B6v = function (J6D) {
        return R6L[J6D]
    };
    iu9l.ccG6A = function (Y6S) {
        var sS2x = biE5J(Y6S);
        return R6L.frames[sS2x] || sS2x + "/res/nej_proxy_frame.html"
    };
    iu9l.cej7c = function (Y6S) {
        return R6L.flashs[biE5J(Y6S)]
    };
    UQ1x(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p"), iu9l = c5h("nej.c"), bP6J = window.NEJ_CONF || NEJ.O;
    if (N6H.mX0x.trident) return;
    iu9l.Io7h("storage.swf", bP6J.storage || iu9l.B6v("root") + "nej_storage.swf");
    if (N6H.ds7l.release < "4.0") {
        iu9l.Io7h("blank.png", bP6J.blank || iu9l.B6v("root") + "nej_blank.gif")
    }
    var i6c = bP6J.xdr, gH8z = /^(https?:\/\/.*?)(?=\/|$)/i, ky9p = /[\/?=&]/i;
    var bRN4R = function (Y6S) {
        return (gH8z.test(Y6S) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i6c && !!i6c.length) for (var i = i6c.length - 1, Y6S, J6D; i >= 0; i--) {
        Y6S = i6c[i];
        J6D = bRN4R(Y6S);
        if (!!J6D) iu9l.Io7h(J6D, Y6S)
    }
    iu9l.cGK3x = function (Y6S) {
        var J6D = bRN4R(Y6S);
        if (!J6D) {
            if (ky9p.test(Y6S)) {
                J6D = location.protocol + "//" + location.host
            } else if (Y6S.indexOf("://") < 0) {
                J6D = location.protocol + "//" + Y6S
            } else {
                J6D = Y6S
            }
        }
        return iu9l.B6v(J6D) || J6D + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c5h = NEJ.P, iu9l = c5h("nej.c"), N6H = c5h("nej.g"), gF8x = +(new Date);
    N6H.cGB3x = 1e4 - gF8x;
    N6H.bnw6q = 10001 - gF8x;
    N6H.cGy3x = 10002 - gF8x;
    N6H.byB8t = 10003 - gF8x;
    N6H.cpv0x = 10004 - gF8x;
    N6H.cGp3x = 10005 - gF8x;
    N6H.boX6R = 10006 - gF8x;
    N6H.cBZ2x = 10007 - gF8x;
    N6H.yH4L = "Content-Type";
    N6H.cGi3x = "text/plain";
    N6H.DI6C = "multipart/form-data";
    N6H.cCa2x = "application/x-www-form-urlencoded";
    N6H.bph6b = iu9l.B6v("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c5h = NEJ.P, fA8s = NEJ.R, N6H = c5h("nej.p"), a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        be6Y = c5h("nej.h");
    var kr9i = N6H.ds7l.prefix, bCc9T = N6H.bQz3x,
        cCA2x = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, cCG2x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, Us0x = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var UQ1x = function () {
        var tg2x = be6Y.bCk9b();
        bCc9T.css3d = !!tg2x && tg2x.m41 != null;
        var dh7a = /-([a-z])/g;
        for (var x in Us0x) {
            Us0x[bCo9f(x)] = Us0x[x]
        }
    };
    var bCo9f = function () {
        var dh7a = /-([a-z])/g;
        return function (V6P) {
            V6P = V6P || "";
            return V6P.replace(dh7a, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bCp9g = function (V6P) {
        return (!bCc9T.css3d ? cCA2x : cCG2x)[V6P]
    };
    var bCq9h = function () {
        var dh7a = /\s+/;
        return function (fI8A) {
            fI8A = (fI8A || "").trim();
            return !!fI8A ? fI8A.split(dh7a) : null
        }
    }();
    var bbB3x = function (F6z, u6o, fI8A) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return;
        k6e.bd6X(bCq9h(fI8A), function (ea8S) {
            F6z.classList[u6o](ea8S)
        })
    };
    be6Y.IA7t = function (i6c) {
        return fA8s.slice.call(i6c, 0)
    };
    be6Y.bpo6i = function (F6z) {
        return be6Y.IA7t(F6z.children)
    };
    be6Y.bpp6j = function (F6z, fI8A) {
        return be6Y.IA7t(F6z.getElementsByClassName(fI8A))
    };
    be6Y.bpr6l = function (F6z, IE7x) {
        bbB3x(F6z, "add", IE7x)
    };
    be6Y.bps6m = function (F6z, IK7D) {
        bbB3x(F6z, "remove", IK7D)
    };
    be6Y.Ub0x = function (F6z, IK7D, IE7x) {
        bbB3x(F6z, "remove", IK7D);
        bbB3x(F6z, "add", IE7x)
    };
    be6Y.bpB6v = function (F6z, fI8A) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return !1;
        var i6c = F6z.classList;
        if (!i6c || !i6c.length) return !1;
        return k6e.dj7c(bCq9h(fI8A), function (ea8S) {
            return i6c.contains(ea8S)
        }) >= 0
    };
    be6Y.bpF6z = function (F6z, ea8S) {
    };
    be6Y.bqw6q = function (F6z) {
    };
    be6Y.bqB6v = function (gh8Z, nG0x) {
        gh8Z.selectionEnd = nG0x.end || 0;
        gh8Z.selectionStart = nG0x.start || 0;
        gh8Z.focus()
    };
    be6Y.bre7X = function (gh8Z) {
        return {end: gh8Z.selectionEnd, start: gh8Z.selectionStart}
    };
    be6Y.brk7d = function () {
        var DN6H = function (ea8S, d6d) {
            var F6z = h6b.W6Q(d6d);
            if (!F6z.value) a4e.x6r(F6z, ea8S)
        };
        var IR7K = function (ea8S, d6d) {
            a4e.y6s(h6b.W6Q(d6d), ea8S)
        };
        return function (F6z, fj8b, ea8S) {
            if (fj8b == 1) {
                h6b.s6m(F6z, "blur", DN6H.g6a(null, ea8S))
            }
            if (fj8b == 1 || fj8b == -1) {
                h6b.s6m(F6z, "focus", IR7K.g6a(null, ea8S))
            }
        }
    }();
    be6Y.brt7m = function (G6A) {
        return (new XMLSerializer).serializeToString(G6A) || ""
    };
    be6Y.brX7Q = function (Aq5v) {
        var fY8Q = (new DOMParser).parseFromString(Aq5v, "text/xml").documentElement;
        return fY8Q.nodeName == "parsererror" ? null : fY8Q
    };
    be6Y.bse7X = function (F6z) {
    };
    be6Y.nJ0x = function (F6z) {
        return null
    };
    be6Y.bsE7x = function (F6z) {
        return null
    };
    be6Y.bsH7A = function (dN8F) {
    };
    be6Y.bsL7E = function () {
        var bf6Z = be6Y.IA7t(arguments);
        bf6Z[0] = a4e.B6v(bf6Z[0]);
        if (!bf6Z[0]) return null;
        bf6Z[1] = (bf6Z[1] || "").toLowerCase();
        if (!bf6Z[1]) return null;
        return bf6Z
    };
    be6Y.Ar5w = function () {
        var vU3x = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, jq9h = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cil8d = function (u6o) {
            return (kr9i.evt || kr9i.pro) + u6o
        };
        return function () {
            var bf6Z = be6Y.bsL7E.apply(be6Y, arguments);
            if (!bf6Z) return;
            var Yj1x = jq9h[bf6Z[1]], Ym1x = vU3x[bf6Z[1]];
            if (!!Yj1x) {
                bf6Z[4] = bf6Z[1];
                bf6Z[1] = cil8d(Yj1x)
            } else if (!!Ym1x) {
                var V6P = "on" + bf6Z[1];
                if (!(V6P in bf6Z[0])) {
                    bf6Z[4] = bf6Z[1];
                    bf6Z[1] = Ym1x
                }
            }
            return bf6Z
        }
    }();
    be6Y.bte7X = function () {
        var bf6Z = arguments;
        bf6Z[0].addEventListener(bf6Z[1], bf6Z[2], !!bf6Z[3])
    };
    be6Y.Yw2x = function () {
        var bf6Z = arguments;
        bf6Z[0].removeEventListener(bf6Z[1], bf6Z[2], !!bf6Z[3])
    };
    be6Y.bti7b = function (F6z, u6o, e6c) {
        var d6d = document.createEvent("Event");
        d6d.initEvent(u6o, !0, !0);
        NEJ.X(d6d, e6c);
        F6z.dispatchEvent(d6d)
    };
    be6Y.bCk9b = function () {
        var gH8z = /\((.*?)\)/, ky9p = /\s*,\s*/, i6c = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var baE2x = function (tg2x) {
            var ij9a = {};
            if (gH8z.test(tg2x || "")) {
                k6e.bd6X(RegExp.$1.split(ky9p), function (D6x, r6l) {
                    ij9a[i6c[r6l]] = D6x || ""
                })
            }
            return ij9a
        };
        return function (tg2x) {
            if (!!window.CSSMatrix) return new CSSMatrix(tg2x);
            var V6P = kr9i.clz + "CSSMatrix";
            if (!!window[V6P]) return new window[V6P](tg2x || "");
            return baE2x(tg2x)
        }
    }();
    be6Y.bKQ1x = function () {
        var dh7a = /\{(.*?)\}/g;
        return function (V6P, bz6t) {
            bz6t = bz6t || o;
            var pg1x = bCp9g(V6P);
            return !pg1x ? "" : pg1x.replace(dh7a, function ($1, $2) {
                var br6l = $2.split("|");
                return bz6t[br6l[0]] || br6l[1] || "0"
            })
        }
    }();
    be6Y.btk7d = function (F6z, V6P, D6x) {
        F6z.style[be6Y.bKX1x(V6P)] = D6x
    };
    be6Y.bKX1x = function () {
        var dh7a = /^[a-z]/, btp7i = kr9i.css;
        var cov9m = function (V6P) {
            return V6P.replace(dh7a, function ($1) {
                return btp7i + $1.toUpperCase()
            })
        };
        return function (V6P) {
            V6P = bCo9f(V6P);
            var coR9I = be6Y.coU9L(V6P, Us0x);
            return coR9I ? cov9m(V6P) : V6P
        }
    }();
    be6Y.coU9L = function () {
        var dh7a = /^([a-z]+?)[A-Z]/;
        return function (V6P, bz6t) {
            if (!bz6t[V6P]) {
                if (dh7a.test(V6P)) V6P = RegExp.$1
            }
            return !!bz6t[V6P]
        }
    }();
    be6Y.coV9M = function () {
        var dh7a = /\$<(.*?)>/gi, btp7i = "-" + kr9i.css.toLowerCase() + "-";
        return function (km9d) {
            return km9d.replace(dh7a, function ($1, $2) {
                var eQ8I = $2, br6l = eQ8I.split("|"), pg1x = bCp9g(br6l[0]);
                if (!!pg1x) {
                    return be6Y.bKQ1x(br6l[0], k6e.hu9l(br6l[1]))
                }
                return !be6Y.cpk9b(eQ8I, Us0x) ? eQ8I : btp7i + eQ8I
            })
        }
    }();
    be6Y.cpk9b = function (V6P, bz6t) {
        return !!bz6t[V6P]
    };
    be6Y.buw7p = function (ch6b, km9d) {
        ch6b.textContent = km9d
    };
    be6Y.buS7L = function (ch6b, km9d) {
        var zW5b = ch6b.sheet, bq6k = zW5b.cssRules.length;
        zW5b.insertRule(km9d, bq6k);
        return zW5b.cssRules[bq6k]
    };
    be6Y.cEb3x = function (F6z, e6c) {
    };
    be6Y.Zc2x = function (Zj2x) {
        return (Zj2x || "").toLowerCase() != "transparent"
    };
    be6Y.cvV1x = function (F6z) {
    };
    be6Y.bwe8W = function (F6z, V6P) {
        if (!!F6z.getAttribute) return F6z.getAttribute(V6P);
        return ""
    };
    be6Y.ZE2x = function (eL8D) {
        a4e.cJ7C(eL8D)
    };
    UQ1x()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), N6H = c5h("nej.p"), be6Y = c5h("nej.h");
    if (N6H.mX0x.trident0) return;
    var gF8x = +(new Date);
    R6L = {};
    be6Y.bpF6z = be6Y.bpF6z.eF8x(function (d6d) {
        d6d.stopped = !0;
        var bf6Z = d6d.args, C6w = a4e.lB0x(bf6Z[0]), J6D = "hover-" + C6w;
        if (!C6w || !!R6L[J6D]) return;
        R6L[J6D] = !0;
        h6b.s6m(C6w, "mouseenter", a4e.y6s.g6a(a4e, C6w, bf6Z[1]));
        h6b.s6m(C6w, "mouseleave", a4e.x6r.g6a(a4e, C6w, bf6Z[1]))
    });
    be6Y.bqw6q = function () {
        var cDC3x = function () {
        };
        return be6Y.bqw6q.eF8x(function (d6d) {
            d6d.stopped = !0;
            var F6z = d6d.args[0], C6w = "fixed-" + a4e.lB0x(F6z);
            if (!!R6L[C6w]) return;
            var bg6a = {};
            R6L[C6w] = bg6a
        })
    }();
    be6Y.bse7X = be6Y.bse7X.eF8x(function (d6d) {
        d6d.stopped = !0;
        var F6z = d6d.args[0], ch6b = F6z.style, bTG4K = a4e.pd1x();
        ch6b.width = bTG4K.scrollWidth + "px";
        ch6b.height = bTG4K.scrollHeight + "px"
    });
    be6Y.nJ0x = be6Y.nJ0x.eF8x(function (d6d) {
        d6d.stopped = !0;
        var F6z = d6d.args[0], lr0x = R6L[F6z.msk];
        if (!lr0x) {
            F6z.msk = gF8x++;
            lr0x = a4e.dg7Z("iframe");
            lr0x.style.position = "absolute";
            R6L[F6z.msk] = lr0x
        }
        d6d.value = lr0x;
        var ch6b = lr0x.style;
        ch6b.top = (parseInt(a4e.df7Y(F6z, "top")) || 0) + "px";
        ch6b.left = (parseInt(a4e.df7Y(F6z, "left")) || 0) + "px";
        ch6b.width = F6z.offsetWidth + "px";
        ch6b.height = F6z.offsetHeight + "px";
        F6z.insertAdjacentElement("beforeBegin", lr0x)
    });
    be6Y.bsE7x = be6Y.bsE7x.eF8x(function (d6d) {
        d6d.stopped = !0;
        var lr0x = R6L[d6d.args[0].msk];
        if (!!lr0x) a4e.ni0x(lr0x)
    })
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p"), a4e = c5h("nej.e"), be6Y = c5h("nej.h");
    if (N6H.mX0x.trident1) return;
    be6Y.Ar5w = function () {
        var vU3x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be6Y.Ar5w.eF8x(function (d6d) {
            var bf6Z = be6Y.bsL7E.apply(be6Y, d6d.args);
            if (!bf6Z) {
                d6d.stopped = !0;
                return
            }
            var u6o = vU3x[bf6Z[1]];
            if (!!u6o && ("on" + u6o).toLowerCase() in bf6Z[0]) {
                bf6Z[4] = bf6Z[1];
                bf6Z[1] = u6o;
                d6d.stopped = !0;
                d6d.value = bf6Z
            }
        })
    }();
    be6Y.Zc2x = function (Zj2x) {
        return !0
    };
    be6Y.ZE2x = be6Y.ZE2x.eF8x(function (d6d) {
        d6d.stopped = !0;
        var eL8D = d6d.args[0];
        a4e.ba6U(eL8D, "display", "none");
        try {
            eL8D.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, N6H = c5h("nej.p"), a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        be6Y = c5h("nej.h"), bwM8E = {};
    if (N6H.mX0x.trident) return;
    be6Y.IA7t = be6Y.IA7t.eF8x(function (d6d) {
        d6d.stopped = !0;
        var i6c = d6d.args[0];
        if (!i6c) {
            d6d.value = null;
            return
        }
        var r6l = 0, o6i = [];
        while (!!i6c[r6l]) {
            o6i.push(i6c[r6l++])
        }
        d6d.value = o6i
    });
    be6Y.bpo6i = be6Y.bpo6i.eF8x(function (d6d) {
        d6d.stopped = !0;
        var br6l = [];
        k6e.bd6X(d6d.args[0].childNodes, function (f6b) {
            if (f6b.nodeType == 1) br6l.push(f6b)
        });
        d6d.value = br6l
    });
    be6Y.bpp6j = be6Y.bpp6j.eF8x(function (d6d) {
        var F6z = d6d.args[0];
        if (!!F6z.getElementsByClassName) return;
        d6d.stopped = !0;
        var o6i = [], Tv0x = new RegExp("(\\s|^)(?:" + d6d.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k6e.bd6X(F6z.getElementsByTagName("*"), function (f6b) {
            if (Tv0x.test(f6b.className)) o6i.push(f6b)
        });
        d6d.value = o6i
    });
    be6Y.bqB6v = be6Y.bqB6v.eF8x(function (d6d) {
        var gh8Z = d6d.args[0], nG0x = d6d.args[1];
        if (gh8Z.selectionStart == null) {
            d6d.stopped = !0;
            var dd7W = gh8Z.createTextRange();
            dd7W.collapse(!0);
            dd7W.moveStart("character", nG0x.start);
            dd7W.moveEnd("character", nG0x.end - nG0x.start);
            dd7W.select();
            gh8Z.focus()
        }
    });
    be6Y.bre7X = be6Y.bre7X.eF8x(function (d6d) {
        var gh8Z = d6d.args[0];
        gh8Z.focus();
        if (gh8Z.selectionStart == null) {
            d6d.stopped = !0;
            var bUD4H = document.selection.createRange();
            var bUP5U = gh8Z.createTextRange();
            bUP5U.moveToBookmark(bUD4H.getBookmark());
            var bxg8Y = gh8Z.createTextRange();
            bxg8Y.collapse(!0);
            bxg8Y.setEndPoint("EndToStart", bUP5U);
            var hC9t = bxg8Y.text.length;
            d6d.value = {start: hC9t, end: hC9t + bUD4H.text.length}
        }
    });
    be6Y.brt7m = be6Y.brt7m.eF8x(function (d6d) {
        if (!!window.XMLSerializer) return;
        d6d.stopped = !0;
        var F6z = d6d.args[0];
        d6d.value = F6z.xml != null ? F6z.xml : F6z.outHTML
    });
    be6Y.brX7Q = function () {
        var Ts0x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var cDl3x = function () {
            try {
                for (var i = 0, l = Ts0x.length; i < l; i++) return new ActiveXObject(Ts0x[i])
            } catch (ex) {
                return null
            }
        };
        return be6Y.brX7Q.eF8x(function (d6d) {
            if (!!window.DOMParser) return;
            d6d.stopped = !0;
            var oi0x = cDl3x();
            if (!!oi0x && oi0x.loadXML(d6d.args[0]) && !oi0x.parseError.errorCode) d6d.value = oi0x.documentElement
        })
    }();
    be6Y.Ar5w = function () {
        var jq9h = {input: "propertychange", load: "readystatechange"};
        for (var x in jq9h) bwM8E[jq9h[x]] = !0;
        var cDk3x = function (F6z, u6o) {
            if ("on" + u6o in F6z) return null;
            return jq9h[u6o] || ""
        };
        var cDj3x = function (u6o, dt7m) {
            var cK7D = dt7m;
            switch (u6o) {
                case"readystatechange":
                    cK7D = function (d6d) {
                        var F6z = h6b.W6Q(d6d) || this;
                        if (F6z.readyState == "loaded" || F6z.readyState == "complete") {
                            d6d.target = F6z;
                            dt7m.call(F6z, d6d)
                        }
                    };
                    break;
                case"propertychange":
                    cK7D = function (d6d) {
                        var F6z = h6b.W6Q(d6d) || this;
                        if ("value" in F6z && d6d.propertyName == "value") {
                            d6d.target = F6z;
                            dt7m.call(F6z, d6d)
                        }
                    };
                    break
            }
            return cK7D
        };
        return be6Y.Ar5w.eF8x(function (d6d) {
            var bf6Z = be6Y.bsL7E.apply(be6Y, d6d.args);
            if (!bf6Z) {
                d6d.stopped = !0;
                return
            }
            var u6o = cDk3x(bf6Z[0], bf6Z[1]);
            if (!!u6o) {
                d6d.stopped = !0;
                bf6Z[4] = bf6Z[1];
                bf6Z[1] = u6o;
                if (!!bf6Z[2]) {
                    bf6Z[5] = bf6Z[2];
                    bf6Z[2] = cDj3x(bf6Z[1], bf6Z[2])
                }
                d6d.value = bf6Z
            }
        }, function (d6d) {
            var bf6Z = d6d.value;
            if (!bf6Z[0] || !k6e.gI8A(bf6Z[2])) return;
            if (!k6e.gI8A(bf6Z[5])) bf6Z[5] = bf6Z[2];
            bf6Z[2] = bf6Z[2].g6a(bf6Z[0])
        })
    }();
    be6Y.bte7X = be6Y.bte7X.eF8x(function (d6d) {
        var bf6Z = d6d.args;
        if (!!bwM8E[bf6Z[1]] || !document.addEventListener) {
            d6d.stopped = !0;
            bf6Z[0].attachEvent("on" + bf6Z[1], bf6Z[2])
        }
    });
    be6Y.Yw2x = be6Y.Yw2x.eF8x(function (d6d) {
        var bf6Z = d6d.args;
        if (!!bwM8E[bf6Z[1]] || !document.removeEventListener) {
            d6d.stopped = !0;
            bf6Z[0].detachEvent("on" + bf6Z[1], bf6Z[2])
        }
    });
    be6Y.bti7b = be6Y.bti7b.eF8x(function (d6d) {
        if (!document.createEvent) {
            d6d.stopped = !0;
            var bf6Z = d6d.args, bUE4I = document.createEventObject();
            NEJ.X(bUE4I, bf6Z[2]);
            try {
                bf6Z[0].fireEvent("on" + bf6Z[1], bUE4I)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be6Y.btk7d = be6Y.btk7d.eF8x(function (d6d) {
        var bf6Z = d6d.args, V6P = bf6Z[1].toLowerCase();
        if (V6P == "opacity" && !(V6P in document.body.style)) {
            bf6Z[1] = "filter";
            bf6Z[2] = "alpha(opacity=" + bf6Z[2] * 100 + ")"
        }
    });
    be6Y.buw7p = function () {
        var fo8g = 30;
        return be6Y.buw7p.eF8x(function (d6d) {
            var F6z = d6d.args[0];
            if (!F6z.styleSheet) return;
            d6d.stopped = !0;
            var km9d = d6d.args[1];
            var i6c = document.styleSheets;
            if (i6c.length > fo8g) {
                F6z = i6c[fo8g];
                km9d = F6z.cssText + km9d
            } else {
                F6z = F6z.styleSheet
            }
            F6z.cssText = km9d
        })
    }();
    be6Y.buS7L = be6Y.buS7L.eF8x(function (d6d) {
        var bf6Z = d6d.args, zW5b = bf6Z[0].sheet;
        if (!!zW5b) return;
        d6d.stopped = !0;
        var zW5b = bf6Z[0].styleSheet, bq6k = zW5b.rules.length, br6l = bf6Z[1].split(/[\{\}]/);
        zW5b.addRule(br6l[0], br6l[1], bq6k);
        d6d.value = zW5b.rules[bq6k]
    });
    be6Y.brk7d = function () {
        var DN6H = function (ea8S, d6d) {
            a4e.x6r(h6b.W6Q(d6d), ea8S)
        };
        return be6Y.brk7d.eF8x(function (d6d) {
            if (N6H.ds7l.release >= "4.0") return;
            var bf6Z = d6d.args;
            if (bf6Z[1] != 1) {
                h6b.s6m(bf6Z[0], "blur", DN6H.g6a(null, bf6Z[2]));
                bf6Z[1] = -1
            }
        })
    }();
    be6Y.Zc2x = function (Zj2x) {
        return !0
    };
    be6Y.bwe8W = be6Y.bwe8W.eF8x(function (d6d) {
        var bf6Z = d6d.args, f6b = (bf6Z[0].attributes || bb6V)[bf6Z[1]];
        if (!!f6b) {
            d6d.stopped = !0;
            d6d.value = f6b.value
        }
    }, function (d6d) {
        var bf6Z = d6d.args;
        if (bf6Z[1] == "maxlength" && d6d.value == 2147483647) d6d.value = ""
    });
    if (N6H.ds7l.release < 5) {
        be6Y.bsH7A = function () {
            var eg8Y, eL8D, ks9j = [], bwX8P = "cb-" + +(new Date),
                bo6i = '<script>parent.nej.h["' + bwX8P + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bUy4C = function () {
                eg8Y = window.clearTimeout(eg8Y);
                if (!ks9j.length) return;
                var dN8F = ks9j.shift();
                try {
                    var wp4t = eL8D.contentWindow.document;
                    wp4t.open();
                    wp4t.write("<head><title>");
                    wp4t.write(document.title);
                    wp4t.write("</title>");
                    wp4t.write(bo6i.replace("#<HASH>", encodeURIComponent(dN8F)));
                    wp4t.write("</head><body></body>");
                    if (location.hostname != document.domain) wp4t.domain = document.domain;
                    wp4t.close();
                    be6Y[bwX8P] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    ks9j.unshift(dN8F)
                }
                eg8Y = window.setTimeout(bUy4C, 50)
            };
            return be6Y.bsH7A.eF8x(function (d6d) {
                d6d.stopped = !0;
                var dN8F = d6d.args[0];
                if (!!be6Y[bwX8P] || !eL8D && !dN8F) return;
                ks9j.push(dN8F);
                if (!eL8D) eL8D = a4e.bbF3x();
                bUy4C()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c5h = NEJ.P, h6b = c5h("nej.v"), be6Y = c5h("nej.h"), N6H = c5h("nej.p"), bbY3x = N6H.bQz3x;
    if (N6H.mX0x.gecko) return;
    var UQ1x = function () {
        bbY3x.css3d = bbY3x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iW9N, F6z) {
            if (!iW9N || !F6z) return;
            switch (iW9N) {
                case"beforeEnd":
                    this.appendChild(F6z);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(F6z, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(F6z) : this.insertBefore(F6z, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F6z) : this.parentNode.insertBefore(F6z, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bo6i) {
                this.textContent = bo6i
            })
        }
    };
    be6Y.Ar5w = function () {
        var gH8z = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be6Y.Ar5w.eF8x(function (d6d) {
            var bf6Z = d6d.args;
            if (gH8z.test(bf6Z[1] || "")) {
                d6d.stopped = !0;
                d6d.value = bf6Z
            }
        })
    }();
    be6Y.cvV1x = function () {
        var cCB2x = function (d6d) {
            h6b.bi6c(d6d);
            h6b.W6Q(d6d).control.click()
        };
        return function (F6z) {
            h6b.s6m(F6z, "click", cCB2x)
        }
    }();
    UQ1x()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), be6Y = c5h("nej.h");
    var bdu3x = function () {
        var my0x = !!document.body.classList;
        return function () {
            return my0x
        }
    }();
    var bUu4y = function () {
        var dh7a = /\s+/g;
        return function (fI8A) {
            fI8A = (fI8A || "").trim();
            return !fI8A ? null : new RegExp("(\\s|^)(?:" + fI8A.replace(dh7a, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be6Y.Ub0x = be6Y.Ub0x.eF8x(function (d6d) {
        if (bdu3x()) return;
        d6d.stopped = !0;
        var bf6Z = d6d.args, F6z = a4e.B6v(bf6Z[0]);
        if (!F6z || !bf6Z[1] && !bf6Z[2]) return;
        var fI8A = F6z.className || "";
        var IE7x = " " + (bf6Z[2] || ""), IK7D = bUu4y((bf6Z[1] || "") + IE7x);
        !!IK7D && (fI8A = fI8A.replace(IK7D, "$1"));
        F6z.className = (fI8A + IE7x).replace(/\s+/g, " ").trim()
    });
    be6Y.bpr6l = be6Y.bpr6l.eF8x(function (d6d) {
        if (bdu3x()) return;
        d6d.stopped = !0;
        var bf6Z = d6d.args;
        be6Y.Ub0x(bf6Z[0], "", bf6Z[1])
    });
    be6Y.bps6m = be6Y.bps6m.eF8x(function (d6d) {
        if (bdu3x()) return;
        d6d.stopped = !0;
        var bf6Z = d6d.args;
        be6Y.Ub0x(bf6Z[0], bf6Z[1], "")
    });
    be6Y.bpB6v = be6Y.bpB6v.eF8x(function (d6d) {
        if (bdu3x()) return;
        d6d.stopped = !0;
        var bf6Z = d6d.args, F6z = a4e.B6v(bf6Z[0]);
        if (!F6z) {
            d6d.value = !1;
            return
        }
        var dh7a = bUu4y(bf6Z[1]);
        d6d.value = !dh7a ? !1 : dh7a.test(F6z.className || "")
    })
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p"), be6Y = c5h("nej.h");
    if (N6H.mX0x.webkit) return;
    be6Y.Zc2x = function (Zj2x) {
        return !0
    }
})();
(function () {
    var c5h = NEJ.P, be6Y = c5h("nej.h"), a4e = c5h("nej.e"), k6e = c5h("nej.u"), h6b = c5h("nej.v"),
        cX7Q = c5h("nej.x"), R6L = {};
    var bUs4w = function (F6z) {
        F6z = a4e.B6v(F6z);
        if (!F6z || !R6L[F6z.id]) return;
        var VY1x = !0, C6w = F6z.id;
        k6e.eE8w(R6L[C6w], function () {
            VY1x = !1;
            return !0
        });
        if (VY1x) delete R6L[C6w]
    };
    h6b.s6m = cX7Q.s6m = function () {
        var cCq2x = function () {
            var bf6Z = be6Y.Ar5w.apply(be6Y, arguments);
            if (!bf6Z || !bf6Z[2]) return;
            var uY3x = a4e.lB0x(bf6Z[0]), oY1x = R6L[uY3x] || {};
            R6L[uY3x] = oY1x;
            uY3x = bf6Z[4] || bf6Z[1];
            var Az5E = oY1x[uY3x] || [];
            oY1x[uY3x] = Az5E;
            Az5E.push({type: bf6Z[1], func: bf6Z[2], capt: !!bf6Z[3], sfun: bf6Z[5] || bf6Z[2]});
            return bf6Z.slice(0, 4)
        };
        return function () {
            var bf6Z = cCq2x.apply(null, arguments);
            if (!!bf6Z) be6Y.bte7X.apply(be6Y, bf6Z);
            return this
        }
    }();
    h6b.mG0x = cX7Q.mG0x = function () {
        var cCk2x = function () {
            var xf4j = arguments, uY3x = a4e.lB0x(xf4j[0]), oY1x = R6L[uY3x], u6o = (xf4j[1] || "").toLowerCase(),
                d6d = xf4j[2];
            if (!oY1x || !u6o || !d6d) return;
            oY1x = oY1x[u6o];
            if (!oY1x) return;
            var cCh2x = !!xf4j[3], r6l = k6e.dj7c(oY1x, function (jq9h) {
                return d6d == jq9h.sfun && cCh2x == jq9h.capt
            });
            if (r6l < 0) return;
            var jq9h = oY1x.splice(r6l, 1)[0];
            return !jq9h ? null : [a4e.B6v(uY3x), jq9h.type, jq9h.func, jq9h.capt]
        };
        return function () {
            var bf6Z = cCk2x.apply(null, arguments);
            if (!!bf6Z) {
                be6Y.Yw2x.apply(be6Y, bf6Z);
                bUs4w(bf6Z[0])
            }
            return this
        }
    }();
    h6b.hf9W = cX7Q.hf9W = function () {
        var bUl4p = function () {
            var xf4j = arguments, uY3x = a4e.lB0x(xf4j[0]), oY1x = R6L[uY3x], Az5E = (xf4j[1] || "").toLowerCase();
            if (!oY1x || !Az5E) return;
            var F6z = a4e.B6v(uY3x);
            k6e.no0x(oY1x[Az5E], function (jq9h, r6l, i6c) {
                be6Y.Yw2x(F6z, jq9h.type, jq9h.func, jq9h.capt);
                i6c.splice(r6l, 1)
            });
            delete oY1x[Az5E]
        };
        var cBU2x = function (F6z) {
            F6z = a4e.B6v(F6z);
            if (!F6z) return;
            var C6w = F6z.id;
            k6e.eE8w(R6L[C6w], function (i6c, u6o) {
                bUl4p(C6w, u6o)
            });
            delete R6L[C6w]
        };
        return function (F6z, u6o) {
            !u6o ? cBU2x(F6z) : bUl4p(F6z, u6o);
            bUs4w(F6z);
            return this
        }
    }();
    h6b.W6Q = function () {
        var bwO8G;
        var Jk7d = function (V6P, F6z) {
            var br6l = V6P.split(":");
            if (br6l.length > 1) {
                if (!bwO8G) bwO8G = {c: a4e.bE6y, d: a4e.t6n, a: a4e.gg8Y};
                var Jl7e = bwO8G[br6l[0]];
                if (!!Jl7e) return !!Jl7e(F6z, br6l[1]);
                V6P = br6l[1]
            }
            return !!a4e.gg8Y(F6z, V6P) || !!a4e.t6n(F6z, V6P) || a4e.bE6y(F6z, V6P)
        };
        return function (d6d) {
            if (!d6d) return null;
            var F6z = d6d.target || d6d.srcElement, dX8P = arguments[1];
            if (!dX8P) return F6z;
            if (k6e.fE8w(dX8P)) dX8P = Jk7d.g6a(null, dX8P);
            if (k6e.gI8A(dX8P)) {
                while (F6z) {
                    if (!!dX8P(F6z)) return F6z;
                    F6z = F6z.parentNode
                }
                return null
            }
            return F6z
        }
    }();
    h6b.bi6c = function (d6d) {
        h6b.tx2x(d6d);
        h6b.cq6k(d6d);
        return this
    };
    h6b.tx2x = function (d6d) {
        if (!!d6d) {
            !!d6d.stopPropagation ? d6d.stopPropagation() : d6d.cancelBubble = !0
        }
        return this
    };
    h6b.cq6k = function (d6d) {
        if (!!d6d) {
            !!d6d.preventDefault ? d6d.preventDefault() : d6d.returnValue = !1
        }
        return this
    };
    h6b.cDt3x = function () {
        var qV1x = !1;
        var cBH2x = function () {
            if (qV1x) return;
            qV1x = !0;
            h6b.s6m(document, "click", cBD2x, !0)
        };
        var cBD2x = function (d6d) {
            var F6z = h6b.W6Q(d6d), cBs2x = a4e.t6n(F6z, "stopped");
            if (cBs2x == "true") {
                h6b.bi6c(d6d);
                a4e.t6n(F6z, "stopped", "false")
            }
        };
        return function (d6d) {
            if (!d6d) return;
            if (d6d.type == "click") {
                h6b.bi6c(d6d);
                return
            }
            cBH2x();
            a4e.t6n(h6b.W6Q(d6d), "stopped", "true")
        }
    }();
    h6b.jH9y = function (d6d) {
        return d6d.pageX != null ? d6d.pageX : d6d.clientX + a4e.pd1x().scrollLeft
    };
    h6b.me0x = function (d6d) {
        return d6d.pageY != null ? d6d.pageY : d6d.clientY + a4e.pd1x().scrollTop
    };
    h6b.z6t = cX7Q.z6t = function (F6z, u6o, e6c) {
        var bf6Z = be6Y.Ar5w(F6z, u6o);
        if (!!bf6Z) be6Y.bti7b(bf6Z[0], bf6Z[1], e6c);
        return this
    };
    c5h("dbg").dumpEV = function () {
        return R6L
    };
    cX7Q.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m) p = function (a) {
                    var f = this.__proto__, a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b)) ;
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }, G = function (a) {
                        var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    }, E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++) ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++) ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1)) ;
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ") ;
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j(); else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++) ;
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    }, F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function (a, b, c) {
                        var d = a[b], h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c); else C(d, function (a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p");
    if (N6H.mX0x.trident0) return;
    JSON.parse = JSON.parse.eF8x(function (d6d) {
        var cI7B = d6d.args[0] || "";
        if (cI7B.length >= 5e5) {
            d6d.stopped = !0;
            d6d.value = eval("(" + cI7B + ")")
        }
    })
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, ej8b = c5h("nej.g"), a4e = c5h("nej.e"), k6e = c5h("nej.u"),
        h6b = c5h("nej.v"), be6Y = c5h("nej.h"), cX7Q = c5h("nej.x"), Ju7n, bwG8y = {},
        R6L = document.createDocumentFragment();
    a4e.lB0x = cX7Q.lB0x = function (F6z) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return;
        var C6w = !!F6z.id ? F6z.id : "auto-id-" + k6e.SZ0x(16);
        F6z.id = C6w;
        if (a4e.B6v(C6w) != F6z) bwG8y[C6w] = F6z;
        return C6w
    };
    a4e.B6v = cX7Q.B6v = function (F6z) {
        var f6b = bwG8y["" + F6z];
        if (!!f6b) return f6b;
        if (!k6e.fE8w(F6z) && !k6e.ws4w(F6z)) return F6z;
        return document.getElementById(F6z)
    };
    a4e.dl7e = cX7Q.dl7e = function (F6z, ea8S) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return null;
        var i6c = be6Y.bpo6i(F6z);
        if (!!ea8S) k6e.no0x(i6c, function (f6b, r6l) {
            if (!a4e.bE6y(f6b, ea8S)) i6c.splice(r6l, 1)
        });
        return i6c
    };
    a4e.H6B = cX7Q.H6B = function (F6z, fI8A) {
        F6z = a4e.B6v(F6z);
        return !F6z ? null : be6Y.bpp6j(F6z, fI8A.trim())
    };
    a4e.bTK4O = cX7Q.bTK4O = function (F6z) {
        F6z = a4e.B6v(F6z);
        if (!!F6z) {
            F6z = F6z.parentNode;
            while (!!F6z) {
                if (F6z.scrollHeight > F6z.clientHeight) break;
                F6z = F6z.parentNode
            }
            if (!!F6z) return F6z
        }
        var oY1x = document.body.scrollHeight, Az5E = document.documentElement.scrollHeight;
        return Az5E >= oY1x ? document.documentElement : document.body
    };
    a4e.pd1x = function () {
        var bTJ4N = function (i6c) {
            var o6i = 0;
            k6e.bd6X(i6c, function (eG8y) {
                if (!eG8y) return;
                if (!o6i) {
                    o6i = eG8y
                } else {
                    o6i = Math.min(o6i, eG8y)
                }
            });
            return o6i
        };
        return function (wp4t) {
            var JA7t = wp4t || document, AC5H = JA7t.body, AF5K = JA7t.documentElement, o6i = {
                scrollTop: Math.max(AC5H.scrollTop, AF5K.scrollTop),
                scrollLeft: Math.max(AC5H.scrollLeft, AF5K.scrollLeft),
                clientWidth: bTJ4N([AC5H.clientWidth, AC5H.offsetWidth, AF5K.clientWidth, AF5K.offsetWidth]),
                clientHeight: bTJ4N([AC5H.clientHeight, AC5H.offsetHeight, AF5K.clientHeight, AF5K.offsetHeight])
            };
            o6i.scrollWidth = Math.max(o6i.clientWidth, AC5H.scrollWidth, AF5K.scrollWidth);
            o6i.scrollHeight = Math.max(o6i.clientHeight, AC5H.scrollHeight, AF5K.scrollHeight);
            return o6i
        }
    }();
    a4e.cDv3x = function (fo8g, oR1x) {
        var o6i = NEJ.X({}, oR1x), bTE4I = fo8g.width / fo8g.height, XU1x = oR1x.width / oR1x.height;
        if (bTE4I > XU1x && oR1x.height > fo8g.height) {
            o6i.height = fo8g.height;
            o6i.width = o6i.height * XU1x
        }
        if (bTE4I < XU1x && oR1x.width > fo8g.width) {
            o6i.width = fo8g.width;
            o6i.height = o6i.width / XU1x
        }
        return o6i
    };
    a4e.cDw3x = function () {
        var dh7a = /\s+/;
        var uo3x = {
            left: function () {
                return 0
            }, center: function (hx9o, oR1x) {
                return (hx9o.width - oR1x.width) / 2
            }, right: function (hx9o, oR1x) {
                return hx9o.width - oR1x.width
            }, top: function () {
                return 0
            }, middle: function (hx9o, oR1x) {
                return (hx9o.height - oR1x.height) / 2
            }, bottom: function (hx9o, oR1x) {
                return hx9o.height - oR1x.height
            }
        };
        return function (hx9o, oR1x, nW0x) {
            var o6i = {}, br6l = (nW0x || "").split(dh7a), gx8p = uo3x[br6l[1]] || uo3x.middle,
                gS8K = uo3x[br6l[0]] || uo3x.center;
            o6i.top = gx8p(hx9o, oR1x);
            o6i.left = gS8K(hx9o, oR1x);
            return o6i
        }
    }();
    a4e.tm2x = cX7Q.tm2x = function (F6z, ea8S) {
        be6Y.bpF6z(F6z, ea8S || a4e.t6n(F6z, "hover") || "js-hover");
        return this
    };
    a4e.JF8x = cX7Q.JF8x = function (F6z) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return;
        be6Y.bqw6q(F6z)
    };
    a4e.cAV2x = cX7Q.cAV2x = function () {
        var R6L = {}, bTx4B = 2;
        var cAP2x = function (C6w, ea8S, d6d) {
            R6L[C6w] = [h6b.jH9y(d6d), h6b.me0x(d6d)];
            a4e.y6s(C6w, ea8S)
        };
        var cAO2x = function (C6w, ea8S, d6d) {
            var bM6G = R6L[C6w];
            if (!k6e.eJ8B(bM6G)) return;
            var cAI2x = Math.abs(h6b.jH9y(d6d) - bM6G[0]), cAH2x = Math.abs(h6b.me0x(d6d) - bM6G[1]);
            if (cAI2x > bTx4B || cAH2x > bTx4B) bwB8t(C6w, ea8S)
        };
        var bwB8t = function (C6w, ea8S) {
            if (k6e.eJ8B(R6L[C6w])) {
                R6L[C6w] = -1;
                a4e.x6r(C6w, ea8S)
            }
        };
        return function (F6z, ea8S) {
            var C6w = a4e.lB0x(F6z);
            if (!C6w || R6L[C6w] != null) return;
            R6L[C6w] = -1;
            ea8S = ea8S || a4e.t6n(C6w, "highlight") || "js-highlight";
            h6b.s6m(C6w, "touchstart", cAP2x.g6a(null, C6w, ea8S));
            h6b.s6m(document, "touchmove", cAO2x.g6a(null, C6w, ea8S));
            h6b.s6m(document, "touchend", bwB8t.g6a(null, C6w, ea8S));
            h6b.s6m(document, "touchcancel", bwB8t.g6a(null, C6w, ea8S))
        }
    }();
    a4e.AN5S = cX7Q.AN5S = function () {
        var cAC2x = function (C6w, ea8S, cAp2x) {
            var F6z = a4e.B6v(C6w), d6d = {clazz: ea8S, target: F6z};
            if (a4e.bE6y(F6z, ea8S)) {
                d6d.toggled = !1;
                a4e.x6r(F6z, ea8S)
            } else {
                d6d.toggled = !0;
                a4e.y6s(F6z, ea8S)
            }
            cAp2x.call(null, d6d)
        };
        return function (F6z, e6c) {
            F6z = a4e.B6v(F6z);
            if (!!F6z) {
                var ij9a = {ontoggle: bs6m, clazz: "js-toggle", element: F6z.parentNode};
                if (k6e.fE8w(e6c)) {
                    var f6b = a4e.B6v(e6c);
                    !!f6b ? ij9a.element = f6b : ij9a.clazz = e6c
                } else {
                    NEJ.EX(ij9a, e6c);
                    ij9a.element = a4e.B6v(ij9a.element)
                }
                var C6w = a4e.lB0x(ij9a.element);
                h6b.s6m(F6z, "click", cAC2x.g6a(null, C6w, ij9a.clazz, ij9a.ontoggle || bs6m))
            }
            return this
        }
    }();
    a4e.mN0x = cX7Q.mN0x = function (F6z, e6c) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return;
        var fj8b = 0, ea8S = "js-focus";
        if (k6e.ws4w(e6c)) {
            fj8b = e6c
        } else if (k6e.fE8w(e6c)) {
            ea8S = e6c
        } else if (k6e.lO0x(e6c)) {
            fj8b = e6c.mode || fj8b;
            ea8S = e6c.clazz || ea8S
        }
        var D6x = parseInt(a4e.t6n(F6z, "mode"));
        if (!isNaN(D6x)) fj8b = D6x;
        D6x = a4e.t6n(F6z, "focus");
        if (!!D6x) ea8S = D6x;
        be6Y.brk7d(F6z, fj8b, ea8S);
        return this
    };
    a4e.dg7Z = function () {
        var bz6t = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fy8q, fI8A, bI6C) {
            var F6z = document.createElement(fy8q);
            NEJ.X(F6z, bz6t[fy8q.toLowerCase()]);
            if (!!fI8A) F6z.className = fI8A;
            bI6C = a4e.B6v(bI6C);
            if (!!bI6C) bI6C.appendChild(F6z);
            return F6z
        }
    }();
    a4e.bbF3x = function () {
        var cAo2x = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cAn2x = function (V6P) {
            V6P = V6P.trim();
            if (!V6P) return a4e.dg7Z("iframe");
            var eL8D;
            try {
                eL8D = document.createElement('<iframe name="' + V6P + '"></iframe>');
                eL8D.frameBorder = 0
            } catch (e) {
                eL8D = a4e.dg7Z("iframe");
                eL8D.name = V6P
            }
            return eL8D
        };
        return function (e6c) {
            e6c = e6c || bb6V;
            var eL8D = cAn2x(e6c.name || "");
            if (!e6c.visible) eL8D.style.display = "none";
            if (k6e.gI8A(e6c.onload)) h6b.s6m(eL8D, "load", function (d6d) {
                if (!eL8D.src) return;
                h6b.hf9W(eL8D, "load");
                e6c.onload(d6d)
            });
            var bI6C = e6c.parent;
            if (k6e.gI8A(bI6C)) {
                try {
                    bI6C(eL8D)
                } catch (e) {
                }
            } else {
                (a4e.B6v(bI6C) || document.body).appendChild(eL8D)
            }
            var cT7M = e6c.src || cAo2x();
            window.setTimeout(function () {
                eL8D.src = cT7M
            }, 0);
            return eL8D
        }
    }();
    a4e.cJ7C = cX7Q.cJ7C = function () {
        var bTm4q = function (yl4p) {
            yl4p.src = ej8b.bph6b
        };
        var bTl4p = function (ei8a) {
            ei8a.src = "about:blank"
        };
        return function (F6z, cAb2x) {
            F6z = a4e.B6v(F6z);
            if (!F6z) return this;
            if (!cAb2x) h6b.hf9W(F6z);
            delete bwG8y[F6z.id];
            var fy8q = F6z.tagName;
            if (fy8q == "IFRAME") {
                bTl4p(F6z)
            } else if (fy8q == "IMG") {
                bTm4q(F6z)
            } else if (!!F6z.getElementsByTagName) {
                k6e.bd6X(F6z.getElementsByTagName("img"), bTm4q);
                k6e.bd6X(F6z.getElementsByTagName("iframe"), bTl4p)
            }
            if (!!F6z.parentNode) {
                F6z.parentNode.removeChild(F6z)
            }
            return this
        }
    }();
    a4e.ni0x = cX7Q.ni0x = function (F6z) {
        F6z = a4e.B6v(F6z);
        if (!!F6z) R6L.appendChild(F6z);
        return this
    };
    a4e.bTk4o = cX7Q.bTk4o = function (F6z) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return;
        k6e.no0x(F6z.childNodes, function (f6b) {
            a4e.cJ7C(f6b)
        })
    };
    a4e.JS8K = cX7Q.JS8K = function () {
        var ea8S, gH8z = /\s+/;
        var czZ2x = function () {
            if (!!ea8S) return;
            ea8S = a4e.sC2x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a4e.bTj4n()
        };
        return function (F6z, e6c) {
            F6z = a4e.B6v(F6z);
            if (!F6z) return;
            czZ2x();
            e6c = e6c || bb6V;
            var bI6C = F6z.parentNode;
            if (!a4e.bE6y(bI6C, ea8S)) {
                bI6C = a4e.dg7Z("span", ea8S);
                F6z.insertAdjacentElement("beforeBegin", bI6C);
                bI6C.appendChild(F6z)
            }
            var bTi4m = e6c.nid || "", f6b = a4e.H6B(bI6C, bTi4m || ea8S + "-show")[0];
            if (!f6b) {
                var dZ8R = ((e6c.clazz || "") + " " + bTi4m).trim();
                dZ8R = ea8S + "-show" + (!dZ8R ? "" : " ") + dZ8R;
                f6b = a4e.dg7Z(e6c.tag || "span", dZ8R);
                bI6C.appendChild(f6b)
            }
            var dZ8R = e6c.clazz;
            if (!!dZ8R) {
                dZ8R = (dZ8R || "").trim().split(gH8z)[0] + "-parent";
                a4e.y6s(bI6C, dZ8R)
            }
            return f6b
        }
    }();
    a4e.t6n = cX7Q.t6n = function () {
        var bwx8p = {}, fy8q = "data-", dh7a = /\-(.{1})/gi;
        var El6f = function (F6z) {
            var C6w = a4e.lB0x(F6z);
            if (!!bwx8p[C6w]) return;
            var bz6t = {};
            k6e.bd6X(F6z.attributes, function (f6b) {
                var J6D = f6b.nodeName;
                if (J6D.indexOf(fy8q) != 0) return;
                J6D = J6D.replace(fy8q, "").replace(dh7a, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bz6t[J6D] = f6b.nodeValue || ""
            });
            bwx8p[C6w] = bz6t
        };
        return function (F6z, J6D, D6x) {
            F6z = a4e.B6v(F6z);
            if (!F6z) return null;
            var Xu1x = F6z.dataset;
            if (!Xu1x) {
                El6f(F6z);
                Xu1x = bwx8p[F6z.id]
            }
            if (D6x !== undefined) Xu1x[J6D] = D6x;
            return Xu1x[J6D]
        }
    }();
    a4e.gg8Y = cX7Q.gg8Y = function (F6z, V6P, D6x) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return "";
        if (D6x !== undefined && !!F6z.setAttribute) F6z.setAttribute(V6P, D6x);
        return be6Y.bwe8W(F6z, V6P)
    };
    a4e.od0x = function (dT8L) {
        var sa2x = document.createElement("div");
        sa2x.innerHTML = dT8L;
        var i6c = a4e.dl7e(sa2x);
        return i6c.length > 1 ? sa2x : i6c[0]
    };
    a4e.czC2x = cX7Q.czC2x = function (F6z) {
        F6z = a4e.B6v(F6z);
        return !F6z ? "" : be6Y.brt7m(F6z)
    };
    a4e.bTc4g = function (Aq5v) {
        Aq5v = (Aq5v || "").trim();
        return !Aq5v ? null : be6Y.brX7Q(Aq5v)
    };
    a4e.czx2x = function (cH7A, u6o) {
        cH7A = cH7A || "";
        switch (u6o) {
            case"xml":
                cH7A = a4e.bTc4g(cH7A);
                break;
            case"json":
                try {
                    cH7A = JSON.parse(cH7A)
                } catch (ex) {
                    cH7A = null
                }
                break
        }
        return cH7A
    };
    a4e.hR9I = cX7Q.hR9I = function () {
        var czs2x = function (F6z) {
            return F6z == document.body || F6z == document.documentElement
        };
        return function (eb8T, nA0x) {
            eb8T = a4e.B6v(eb8T);
            if (!eb8T) return null;
            nA0x = a4e.B6v(nA0x) || null;
            var o6i = {x: 0, y: 0}, bww8o, do7h, ZA2x;
            while (!!eb8T && eb8T != nA0x) {
                bww8o = czs2x(eb8T);
                do7h = bww8o ? 0 : eb8T.scrollLeft;
                ZA2x = parseInt(a4e.df7Y(eb8T, "borderLeftWidth")) || 0;
                o6i.x += eb8T.offsetLeft + ZA2x - do7h;
                do7h = bww8o ? 0 : eb8T.scrollTop;
                ZA2x = parseInt(a4e.df7Y(eb8T, "borderTopWidth")) || 0;
                o6i.y += eb8T.offsetTop + ZA2x - do7h;
                eb8T = eb8T.offsetParent
            }
            return o6i
        }
    }();
    a4e.nB0x = cX7Q.nB0x = function (F6z) {
        var bh6b = a4e.hR9I(F6z);
        window.scrollTo(bh6b.x, bh6b.y);
        return this
    };
    a4e.cDB3x = function (tg2x) {
        tg2x = (tg2x || "").trim();
        return be6Y.bCk9b(tg2x)
    };
    a4e.czk2x = cX7Q.czk2x = function (F6z, V6P, bz6t) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return this;
        var D6x = be6Y.bKQ1x(V6P, bz6t);
        if (!D6x) return this;
        a4e.ba6U(F6z, "transform", D6x);
        return this
    };
    a4e.eZ8R = cX7Q.eZ8R = function (F6z, bz6t) {
        F6z = a4e.B6v(F6z);
        if (!!F6z) k6e.eE8w(bz6t, function (D6x, V6P) {
            a4e.ba6U(F6z, V6P, D6x)
        });
        return this
    };
    a4e.czj2x = cX7Q.czj2x = function (gh8Z, e6c) {
        gh8Z = a4e.B6v(gh8Z);
        if (!gh8Z) return {start: 0, end: 0};
        if (k6e.ws4w(e6c)) e6c = {start: e6c, end: e6c};
        if (e6c != null) {
            if (e6c.end == null) e6c.end = e6c.start || 0;
            be6Y.bqB6v(gh8Z, e6c)
        } else {
            e6c = be6Y.bre7X(gh8Z)
        }
        return e6c
    };
    a4e.ba6U = cX7Q.ba6U = function (F6z, V6P, D6x) {
        F6z = a4e.B6v(F6z);
        if (!!F6z) be6Y.btk7d(F6z, V6P, D6x);
        return this
    };
    a4e.df7Y = cX7Q.df7Y = function (F6z, V6P) {
        F6z = a4e.B6v(F6z);
        if (!F6z) return "";
        var hk9b = !window.getComputedStyle ? F6z.currentStyle || bb6V : window.getComputedStyle(F6z, null);
        return hk9b[be6Y.bKX1x(V6P)] || ""
    };
    a4e.bSY4c = function () {
        var dh7a = /[\s\r\n]+/gi;
        return function (ch6b) {
            ch6b = (ch6b || "").trim().replace(dh7a, " ");
            if (!ch6b) return;
            var f6b = a4e.dg7Z("style");
            document.head.appendChild(f6b);
            be6Y.buw7p(f6b, be6Y.coV9M(ch6b));
            return f6b
        }
    }();
    a4e.bSW4a = function (zI5N) {
        try {
            zI5N = zI5N.trim();
            if (!!zI5N) return (new Function(zI5N))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a4e.sC2x = function () {
        var dh7a = /#<.*?>/g, gF8x = +(new Date);
        return function (km9d) {
            if (!Ju7n) Ju7n = [];
            var fI8A = "auto-" + gF8x++;
            Ju7n.push(km9d.replace(dh7a, fI8A));
            return fI8A
        }
    }();
    a4e.bTj4n = function () {
        if (!!Ju7n) {
            a4e.bSY4c(Ju7n.join(""));
            Ju7n = null
        }
        return this
    };
    a4e.cDE3x = function (ch6b, km9d) {
        ch6b = a4e.B6v(ch6b);
        return !ch6b ? null : be6Y.buS7L(ch6b, km9d)
    };
    a4e.y6s = cX7Q.y6s = function () {
        be6Y.bpr6l.apply(be6Y, arguments);
        return this
    };
    a4e.x6r = cX7Q.x6r = function () {
        be6Y.bps6m.apply(be6Y, arguments);
        return this
    };
    a4e.fl8d = cX7Q.fl8d = function () {
        be6Y.Ub0x.apply(be6Y, arguments);
        return this
    };
    a4e.bE6y = cX7Q.bE6y = function () {
        return be6Y.bpB6v.apply(be6Y, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cX7Q.isChange = !0
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, fA8s = NEJ.R, bs6m = NEJ.F, a4e = c5h("nej.e"), be6Y = c5h("nej.h"),
        k6e = c5h("nej.u");
    var Et6n = function (j6d, u6o) {
        try {
            u6o = u6o.toLowerCase();
            if (j6d === null) return u6o == "null";
            if (j6d === undefined) return u6o == "undefined";
            return bb6V.toString.call(j6d).toLowerCase() == "[object " + u6o + "]"
        } catch (e) {
            return !1
        }
    };
    k6e.gI8A = function (j6d) {
        return Et6n(j6d, "function")
    };
    k6e.fE8w = function (j6d) {
        return Et6n(j6d, "string")
    };
    k6e.ws4w = function (j6d) {
        return Et6n(j6d, "number")
    };
    k6e.cDF3x = function (j6d) {
        return Et6n(j6d, "boolean")
    };
    k6e.Ez6t = function (j6d) {
        return Et6n(j6d, "date")
    };
    k6e.eJ8B = function (j6d) {
        return Et6n(j6d, "array")
    };
    k6e.lO0x = function (j6d) {
        return Et6n(j6d, "object")
    };
    k6e.fz8r = function () {
        var dh7a = /[^\x00-\xfff]/g;
        return function (bo6i) {
            return ("" + (bo6i || "")).replace(dh7a, "**").length
        }
    }();
    k6e.dj7c = function (i6c, p6j) {
        var dX8P = k6e.gI8A(p6j) ? p6j : function (D6x) {
            return D6x === p6j
        }, r6l = k6e.eE8w(i6c, dX8P);
        return r6l != null ? r6l : -1
    };
    k6e.cDG3x = function () {
        var bSM4Q;
        var RT0x = function (i6c, oy1x, ov1x) {
            if (oy1x > ov1x) return -1;
            var ED6x = Math.ceil((oy1x + ov1x) / 2), o6i = bSM4Q(i6c[ED6x], ED6x, i6c);
            if (o6i == 0) return ED6x;
            if (o6i < 0) return RT0x(i6c, oy1x, ED6x - 1);
            return RT0x(i6c, ED6x + 1, ov1x)
        };
        return function (i6c, Jl7e) {
            bSM4Q = Jl7e || bs6m;
            return RT0x(i6c, 0, i6c.length - 1)
        }
    }();
    k6e.no0x = function (i6c, cK7D, P6J) {
        if (!i6c || !i6c.length || !k6e.gI8A(cK7D)) return null;
        for (var i = i6c.length - 1; i >= 0; i--) if (!!cK7D.call(P6J, i6c[i], i, i6c)) return i;
        return null
    };
    k6e.bd6X = function (i6c, cK7D, P6J) {
        if (!i6c || !i6c.length || !k6e.gI8A(cK7D)) return this;
        if (!!i6c.forEach) {
            i6c.forEach(cK7D, P6J);
            return this
        }
        for (var i = 0, l = i6c.length; i < l; i++) cK7D.call(P6J, i6c[i], i, i6c);
        return this
    };
    k6e.eE8w = function (i6c, cK7D, P6J) {
        if (!i6c || !k6e.gI8A(cK7D)) return null;
        if (i6c.length != null) {
            if (i6c.length > 0) for (var i = 0, l = i6c.length; i < l; i++) if (!!cK7D.call(P6J, i6c[i], i, i6c)) return i
        }
        if (k6e.lO0x(i6c)) {
            for (var x in i6c) if (i6c.hasOwnProperty(x) && !!cK7D.call(P6J, i6c[x], x, i6c)) return x
        }
        return null
    };
    k6e.cyB2x = function (jg9X, cyx2x, e6c) {
        jg9X = jg9X || [];
        e6c = e6c || bb6V;
        var bSJ4N = !!e6c.union, xi4m = !!e6c.begin, Xg1x = e6c.compare, cyv2x = bSJ4N && xi4m ? k6e.no0x : k6e.bd6X;
        cyv2x(cyx2x, function (p6j) {
            if (!!Xg1x) Xg1x = Xg1x.eu8m(p6j);
            var r6l = k6e.dj7c(jg9X, Xg1x || p6j);
            if (r6l >= 0) jg9X.splice(r6l, 1);
            if (bSJ4N) jg9X[xi4m ? "unshift" : "push"](p6j)
        });
        return jg9X
    };
    k6e.EG6A = function (bz6t, bo6i) {
        if (!bz6t || !bo6i || !bo6i.replace) return bo6i || "";
        return bo6i.replace(bz6t.r, function ($1) {
            var o6i = bz6t[!bz6t.i ? $1.toLowerCase() : $1];
            return o6i != null ? o6i : $1
        })
    };
    k6e.dG7z = function () {
        var bz6t = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bo6i) {
            return k6e.EG6A(bz6t, bo6i)
        }
    }();
    k6e.AS5X = function () {
        var bz6t = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bo6i) {
            return k6e.EG6A(bz6t, bo6i)
        }
    }();
    k6e.ig9X = function () {
        var bz6t = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, cyo2x = ["上午", "下午"],
            cym2x = ["A.M.", "P.M."], bwn8f = ["日", "一", "二", "三", "四", "五", "六"],
            cyh1x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cxY1x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var RE0x = function (gR8J) {
            gR8J = parseInt(gR8J) || 0;
            return (gR8J < 10 ? "0" : "") + gR8J
        };
        var cxV1x = function (pX1x) {
            return pX1x < 12 ? 0 : 1
        };
        return function (bA6u, Kl8d, cxU1x) {
            if (!bA6u || !Kl8d) return "";
            bA6u = k6e.ZD2x(bA6u);
            bz6t.yyyy = bA6u.getFullYear();
            bz6t.yy = ("" + bz6t.yyyy).substr(2);
            bz6t.M = bA6u.getMonth() + 1;
            bz6t.MM = RE0x(bz6t.M);
            bz6t.eM = cxY1x[bz6t.M - 1];
            bz6t.cM = cyh1x[bz6t.M - 1];
            bz6t.d = bA6u.getDate();
            bz6t.dd = RE0x(bz6t.d);
            bz6t.H = bA6u.getHours();
            bz6t.HH = RE0x(bz6t.H);
            bz6t.m = bA6u.getMinutes();
            bz6t.mm = RE0x(bz6t.m);
            bz6t.s = bA6u.getSeconds();
            bz6t.ss = RE0x(bz6t.s);
            bz6t.ms = bA6u.getMilliseconds();
            bz6t.w = bwn8f[bA6u.getDay()];
            var bSs4w = cxV1x(bz6t.H);
            bz6t.ct = cyo2x[bSs4w];
            bz6t.et = cym2x[bSs4w];
            if (!!cxU1x) {
                bz6t.H = bz6t.H % 12
            }
            return k6e.EG6A(bz6t, Kl8d)
        }
    }();
    k6e.ZD2x = function (bA6u) {
        var cY7R = bA6u;
        if (k6e.fE8w(bA6u)) cY7R = new Date(Date.parse(bA6u));
        if (!k6e.Ez6t(bA6u)) cY7R = new Date(bA6u);
        return cY7R
    };
    k6e.JF8x = function (cxJ1x, cxG1x) {
        return (new Number(cxJ1x)).toFixed(cxG1x)
    };
    k6e.bwj8b = function () {
        var gH8z = /([^\/:])\/.*$/, ky9p = /\/[^\/]+$/, ES6M = /[#\?]/, bwg8Y = location.href.split(/[?#]/)[0],
            sI2x = document.createElement("a");
        var bwf8X = function (jD9u) {
            return (jD9u || "").indexOf("://") > 0
        };
        var bSk4o = function (jD9u) {
            return (jD9u || "").split(ES6M)[0].replace(ky9p, "/")
        };
        var cxv1x = function (jD9u, fY8Q) {
            if (jD9u.indexOf("/") == 0) return fY8Q.replace(gH8z, "$1") + jD9u;
            return bSk4o(fY8Q) + jD9u
        };
        bwg8Y = bSk4o(bwg8Y);
        return function (jD9u, fY8Q) {
            jD9u = (jD9u || "").trim();
            if (!bwf8X(fY8Q)) fY8Q = bwg8Y;
            if (!jD9u) return fY8Q;
            if (bwf8X(jD9u)) return jD9u;
            jD9u = cxv1x(jD9u, fY8Q);
            sI2x.href = jD9u;
            jD9u = sI2x.href;
            return bwf8X(jD9u) ? jD9u : sI2x.getAttribute("href", 4)
        }
    }();
    k6e.cxs1x = function () {
        var dh7a = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y6S) {
            if (dh7a.test(Y6S || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k6e.bSi4m = function (G6A, ij9a) {
        if (!G6A) return ij9a;
        var V6P = G6A.tagName.toLowerCase(), i6c = a4e.dl7e(G6A);
        if (!i6c || !i6c.length) {
            ij9a[V6P] = G6A.textContent || G6A.text || "";
            return ij9a
        }
        var cl6f = {};
        ij9a[V6P] = cl6f;
        k6e.bd6X(i6c, function (f6b) {
            k6e.bSi4m(f6b, cl6f)
        });
        return ij9a
    };
    k6e.cDI3x = function (Aq5v) {
        try {
            return k6e.bSi4m(a4e.bTc4g(Aq5v), {})
        } catch (ex) {
            return null
        }
    };
    k6e.Ri0x = function (ih9Y, Rh0x) {
        var ij9a = {};
        k6e.bd6X((ih9Y || "").split(Rh0x), function (V6P) {
            var bdF3x = V6P.split("=");
            if (!bdF3x || !bdF3x.length) return;
            var J6D = bdF3x.shift();
            if (!J6D) return;
            ij9a[decodeURIComponent(J6D)] = decodeURIComponent(bdF3x.join("="))
        });
        return ij9a
    };
    k6e.uP3x = function (gr8j, Rh0x, cxm1x) {
        if (!gr8j) return "";
        var br6l = [];
        for (var x in gr8j) {
            br6l.push(encodeURIComponent(x) + "=" + (!!cxm1x ? encodeURIComponent(gr8j[x]) : gr8j[x]))
        }
        return br6l.join(Rh0x || ",")
    };
    k6e.hu9l = function (bv6p) {
        return k6e.Ri0x(bv6p, "&")
    };
    k6e.cF7y = function (gr8j) {
        return k6e.uP3x(gr8j, "&", !0)
    };
    k6e.cDJ3x = function (gr8j) {
        return be6Y.IA7t(gr8j)
    };
    k6e.cDK3x = function (i6c, dX8P) {
        var o6i = {};
        k6e.bd6X(i6c, function (p6j) {
            var J6D = p6j;
            if (!!dX8P) {
                J6D = dX8P(p6j)
            }
            o6i[J6D] = p6j
        });
        return o6i
    };
    k6e.cDL3x = function (gR8J, fX8P) {
        var cwX1x = ("" + gR8J).length, cwW1x = Math.max(1, parseInt(fX8P) || 0), do7h = cwW1x - cwX1x;
        if (do7h > 0) {
            gR8J = (new Array(do7h + 1)).join("0") + gR8J
        }
        return "" + gR8J
    };
    k6e.WJ1x = function (gr8j, V6P) {
        if (!k6e.eJ8B(V6P)) {
            try {
                delete gr8j[V6P]
            } catch (e) {
                gr8j[V6P] = undefined
            }
            return this
        }
        k6e.bd6X(V6P, k6e.WJ1x.g6a(k6e, gr8j));
        return this
    };
    k6e.SZ0x = function () {
        var bRZ4d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq6k) {
            bq6k = bq6k || 10;
            var o6i = [];
            for (var i = 0, bRY4c; i < bq6k; ++i) {
                bRY4c = Math.floor(Math.random() * bRZ4d.length);
                o6i.push(bRZ4d.charAt(bRY4c))
            }
            return o6i.join("")
        }
    }();
    k6e.Bc5h = function (fF8x, fo8g) {
        return Math.floor(Math.random() * (fo8g - fF8x) + fF8x)
    };
    k6e.ol1x = function (bq6k) {
        bq6k = Math.max(0, Math.min(bq6k || 8, 30));
        var fF8x = Math.pow(10, bq6k - 1), fo8g = fF8x * 10;
        return k6e.Bc5h(fF8x, fo8g).toString()
    };
    k6e.Xm1x = function () {
        var gF8x = +(new Date);
        return function () {
            return "" + gF8x++
        }
    }()
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, fA8s = NEJ.R, bs6m = NEJ.F, h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        N6H = c5h("nej.ut"), oD1x;
    if (!!N6H.cG7z) return;
    N6H.cG7z = NEJ.C();
    oD1x = N6H.cG7z.prototype;
    N6H.cG7z.A6u = function (e6c) {
        e6c = e6c || {};
        var cA7t = !!this.Bd5i && this.Bd5i.shift();
        if (!cA7t) {
            cA7t = new this(e6c);
            this.cwT1x = (this.cwT1x || 0) + 1
        }
        cA7t.bl6f(e6c);
        return cA7t
    };
    N6H.cG7z.T6N = function () {
        var MG8y = function (p6j, r6l, i6c) {
            p6j.T6N();
            i6c.splice(r6l, 1)
        };
        return function (cA7t) {
            if (!cA7t) return null;
            if (!k6e.eJ8B(cA7t)) {
                if (!(cA7t instanceof this)) {
                    var fI8A = cA7t.constructor;
                    if (!!fI8A.T6N) fI8A.T6N(cA7t);
                    return null
                }
                if (cA7t == this.fh8Z) delete this.fh8Z;
                if (cA7t == this.Be5j) delete this.Be5j;
                cA7t.bD6x();
                if (!this.Bd5i) this.Bd5i = [];
                if (k6e.dj7c(this.Bd5i, cA7t) < 0) {
                    this.Bd5i.push(cA7t)
                }
                return null
            }
            k6e.no0x(cA7t, MG8y, this)
        }
    }();
    N6H.cG7z.go8g = function (e6c) {
        e6c = e6c || {};
        if (!this.fh8Z) this.fh8Z = this.A6u(e6c);
        return this.fh8Z
    };
    N6H.cG7z.bRX4b = function (e6c, ss2x) {
        e6c = e6c || {};
        if (!!ss2x && !!this.Be5j) {
            this.Be5j.T6N();
            delete this.Be5j
        }
        if (!this.Be5j) {
            this.Be5j = this.A6u(e6c)
        } else {
            this.Be5j.bl6f(e6c)
        }
        return this.Be5j
    };
    oD1x.cx6r = function () {
        var gF8x = +(new Date);
        return function () {
            this.id = gF8x++;
            this.md0x = {};
            this.bRW4a = {}
        }
    }();
    oD1x.bl6f = function (e6c) {
        this.bwb8T(e6c)
    };
    oD1x.bD6x = function () {
        this.hf9W();
        this.Kv8n()
    };
    oD1x.bW6Q = function () {
        var gF8x = +(new Date);
        var cwH1x = function (bf6Z) {
            if (!bf6Z || bf6Z.length < 3) return;
            this.bRW4a["de-" + gF8x++] = bf6Z;
            h6b.s6m.apply(h6b, bf6Z)
        };
        return function (i6c) {
            k6e.bd6X(i6c, cwH1x, this)
        }
    }();
    oD1x.Kv8n = function () {
        var cwG1x = function (bf6Z, J6D, bz6t) {
            delete bz6t[J6D];
            h6b.mG0x.apply(h6b, bf6Z)
        };
        return function () {
            k6e.eE8w(this.bRW4a, cwG1x)
        }
    }();
    oD1x.cDN3x = function (dX8P) {
        dX8P = dX8P || bs6m;
        k6e.eE8w(this, function (Gk7d, J6D, bz6t) {
            if (!!Gk7d && !!Gk7d.T6N && !dX8P(Gk7d)) {
                delete bz6t[J6D];
                Gk7d.T6N()
            }
        })
    };
    oD1x.T6N = function () {
        this.constructor.T6N(this)
    };
    oD1x.bvZ8R = function (u6o) {
        var d6d = this.md0x[u6o.toLowerCase()];
        return !!d6d && d6d !== bs6m
    };
    oD1x.s6m = function (u6o, d6d) {
        this.xh4l.apply(this, arguments);
        return this
    };
    oD1x.mG0x = function (u6o, d6d) {
        var u6o = (u6o || "").toLowerCase(), ee8W = this.md0x[u6o];
        if (!k6e.eJ8B(ee8W)) {
            if (ee8W == d6d) delete this.md0x[u6o];
            return
        }
        k6e.no0x(ee8W, function (ey8q, r6l, i6c) {
            if (ey8q == d6d) i6c.splice(r6l, 1)
        })
    };
    oD1x.xh4l = function (u6o, d6d) {
        if (!!u6o && k6e.gI8A(d6d)) this.md0x[u6o.toLowerCase()] = d6d;
        return this
    };
    oD1x.bwb8T = function () {
        var cwB1x = function (d6d, u6o) {
            this.xh4l(u6o, d6d)
        };
        return function (ee8W) {
            k6e.eE8w(ee8W, cwB1x, this);
            return this
        }
    }();
    oD1x.hf9W = function () {
        var bvX8P = function (d6d, u6o) {
            this.hf9W(u6o)
        };
        return function (u6o) {
            var u6o = (u6o || "").toLowerCase();
            if (!!u6o) {
                delete this.md0x[u6o]
            } else {
                k6e.eE8w(this.md0x, bvX8P, this)
            }
            return this
        }
    }();
    oD1x.bvW8O = function (u6o, d6d) {
        if (!u6o || !k6e.gI8A(d6d)) return this;
        u6o = u6o.toLowerCase();
        var ee8W = this.md0x[u6o];
        if (!ee8W) {
            this.md0x[u6o] = d6d;
            return this
        }
        if (!k6e.eJ8B(ee8W)) {
            this.md0x[u6o] = [ee8W]
        }
        this.md0x[u6o].push(d6d);
        return this
    };
    oD1x.z6t = function (u6o) {
        var d6d = this.md0x[(u6o || "").toLowerCase()];
        if (!d6d) return this;
        var bf6Z = fA8s.slice.call(arguments, 1);
        if (!k6e.eJ8B(d6d)) return d6d.apply(this, bf6Z);
        k6e.bd6X(d6d, function (dt7m) {
            try {
                dt7m.apply(this, bf6Z)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N6H.bbR3x = function () {
        var R6L = {};
        return function (C6w, fI8A, e6c) {
            var fk8c = fI8A.cwq1x;
            if (!fk8c) {
                fk8c = k6e.SZ0x(10);
                fI8A.cwq1x = fk8c
            }
            var J6D = C6w + "-" + fk8c, cA7t = R6L[J6D];
            if (!!e6c && !cA7t) {
                cA7t = fI8A.A6u(e6c);
                cA7t.T6N = cA7t.T6N.eF8x(function (d6d) {
                    delete R6L[J6D];
                    delete cA7t.T6N
                });
                R6L[J6D] = cA7t
            }
            return cA7t
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gB8t = function () {
        var cY7R = new Date, cwp1x = +cY7R, bvV8N = 864e5;
        var cwl1x = function (V6P) {
            var rv1x = document.cookie, sQ2x = "\\b" + V6P + "=", bds3x = rv1x.search(sQ2x);
            if (bds3x < 0) return "";
            bds3x += sQ2x.length - 2;
            var wX4b = rv1x.indexOf(";", bds3x);
            if (wX4b < 0) wX4b = rv1x.length;
            return rv1x.substring(bds3x, wX4b) || ""
        };
        return function (V6P, j6d) {
            if (j6d === undefined) return cwl1x(V6P);
            if (u.fE8w(j6d)) {
                if (!!j6d) {
                    document.cookie = V6P + "=" + j6d + ";";
                    return j6d
                }
                j6d = {expires: -100}
            }
            j6d = j6d || o;
            var rv1x = V6P + "=" + (j6d.value || "") + ";";
            delete j6d.value;
            if (j6d.expires !== undefined) {
                cY7R.setTime(cwp1x + j6d.expires * bvV8N);
                j6d.expires = cY7R.toGMTString()
            }
            rv1x += u.uP3x(j6d, ";");
            document.cookie = rv1x
        }
    }()
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, iu9l = c5h("nej.c"), ej8b = c5h("nej.g"), a4e = c5h("nej.e"), v6p = c5h("nej.j"),
        I6C = c5h("nej.ut"), N6H = c5h("nej.ut.j"), k6e = c5h("nej.u"), b5g;
    if (!!N6H.KE8w) return;
    N6H.KE8w = NEJ.C();
    b5g = N6H.KE8w.O6I(I6C.cG7z);
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.py1x = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.py1x, e6c);
        var An5s = iu9l.B6v("csrf");
        if ((/^\/[^\/]/.test(this.py1x.url) || this.py1x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!An5s.cookie && !!An5s.param) {
            var bv6p = encodeURIComponent(An5s.param) + "=" + encodeURIComponent(v6p.gB8t(An5s.cookie) || ""),
                Rh0x = this.py1x.url.indexOf("?") < 0 ? "?" : "&";
            this.py1x.url += Rh0x + bv6p
        }
        this.VU1x = e6c.headers || {};
        var bo6i = this.VU1x[ej8b.yH4L];
        if (bo6i == null) this.VU1x[ej8b.yH4L] = ej8b.cCa2x
    };
    b5g.bD6x = function () {
        this.bH6B();
        delete this.Bk5p;
        delete this.py1x;
        delete this.VU1x
    };
    b5g.cwh1x = function (bo6i) {
        var bz6t = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.py1x.noescape) {
            return k6e.EG6A(bz6t, bo6i)
        } else {
            return bo6i
        }
    };
    b5g.vD3x = function (d6d) {
        var es8k = d6d.status;
        if (es8k == -1) {
            this.z6t("onerror", {code: ej8b.byB8t, message: "请求[" + this.py1x.url + "]超时！"});
            return
        }
        if (("" + es8k).indexOf("2") != 0) {
            this.z6t("onerror", {
                data: es8k,
                code: ej8b.boX6R,
                message: "服务器返回异常状态[" + es8k + "]!",
                extData: d6d.result
            });
            return
        }
        this.z6t("onload", a4e.czx2x(this.cwh1x(d6d.result), this.py1x.type))
    };
    b5g.co6i = bs6m;
    b5g.bvT8L = function (j6d) {
        var Y6S = this.py1x.url;
        if (!Y6S) {
            this.z6t("onerror", {code: ej8b.bnw6q, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.py1x.data = j6d == null ? null : j6d;
            var d6d = {request: this.py1x, headers: this.VU1x};
            try {
                this.z6t("onbeforerequest", d6d)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.co6i(d6d)
        } catch (e) {
            this.z6t("onerror", {code: ej8b.boX6R, message: "请求[" + Y6S + "]失败:" + e.message + "！"})
        }
        return this
    };
    b5g.kn9e = bs6m
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, be6Y = c5h("nej.h"), ej8b = c5h("nej.g"), k6e = c5h("nej.u"), N6H = c5h("nej.ut.j"),
        R6L = {}, QD9u;
    if (!!N6H.WT1x) return;
    N6H.WT1x = NEJ.C();
    QD9u = N6H.WT1x.O6I(N6H.KE8w);
    QD9u.bD6x = function () {
        this.bH6B();
        window.clearTimeout(this.ed8V);
        delete this.ed8V;
        try {
            this.rW2x.onreadystatechange = bs6m;
            this.rW2x.abort()
        } catch (e) {
        }
        delete this.rW2x
    };
    QD9u.co6i = function () {
        var cwf1x = function (D6x, J6D) {
            this.rW2x.setRequestHeader(J6D, D6x)
        };
        return function (e6c) {
            var ge8W = e6c.request, oO1x = e6c.headers;
            this.rW2x = be6Y.bvS8K();
            if (oO1x[ej8b.yH4L] === ej8b.DI6C) {
                delete oO1x[ej8b.yH4L];
                this.rW2x.upload.onprogress = this.gn8f.g6a(this, 1);
                if (ge8W.data.tagName === "FORM") ge8W.data = new FormData(ge8W.data)
            }
            this.rW2x.onreadystatechange = this.gn8f.g6a(this, 2);
            if (ge8W.timeout != 0) {
                this.ed8V = window.setTimeout(this.gn8f.g6a(this, 3), ge8W.timeout)
            }
            this.rW2x.open(ge8W.method, ge8W.url, !ge8W.sync);
            k6e.eE8w(oO1x, cwf1x, this);
            if (!!this.py1x.cookie && "withCredentials" in this.rW2x) this.rW2x.withCredentials = !0;
            this.rW2x.send(ge8W.data)
        }
    }();
    QD9u.gn8f = function (u6o) {
        switch (u6o) {
            case 1:
                this.z6t("onuploading", arguments[1]);
                break;
            case 2:
                if (this.rW2x.readyState == 4) this.vD3x({
                    status: this.rW2x.status,
                    result: this.rW2x.responseText || ""
                });
                break;
            case 3:
                this.vD3x({status: -1});
                break
        }
    };
    QD9u.kn9e = function () {
        this.vD3x({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var QC9t = {}, Yf1x = [], bRx4B = /\s+/g, gF8x = +(new Date), KI8A, bP6J, hH9y;
    var GL7E = function () {
        var gH8z = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, ky9p = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            ES6M = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bvR8J = /^new\s+/,
            cvS1x = /['"]/;
        var cvR1x = function (D6x) {
            if (gH8z.test(D6x)) return;
            D6x = D6x.split(".")[0].trim();
            if (!D6x || cvS1x.test(D6x)) return;
            D6x = D6x.replace(bvR8J, "");
            try {
                if (ES6M.test(D6x)) return;
                hH9y[D6x] = 1
            } catch (e) {
            }
        };
        return function (bo6i) {
            bo6i = bo6i || "";
            if (!bo6i || gH8z.test(bo6i)) return;
            var br6l = bo6i.split(ky9p);
            for (var i = 0, l = br6l.length; i < l; i++) cvR1x(br6l[i])
        }
    }();
    var cvQ1x = function (dI7B) {
        if (dI7B[2] != "in") throw"bad for loop statement: " + dI7B.join(" ");
        Yf1x.push(dI7B[1]);
        GL7E(dI7B[3]);
        return "var __HASH__" + dI7B[1] + " = " + dI7B[3] + "," + dI7B[1] + "," + dI7B[1] + "_count=0;" + "if (!!__HASH__" + dI7B[1] + ")" + "for(var " + dI7B[1] + "_key in __HASH__" + dI7B[1] + "){" + dI7B[1] + " = __HASH__" + dI7B[1] + "[" + dI7B[1] + "_key];" + "if (typeof(" + dI7B[1] + ')=="function") continue;' + dI7B[1] + "_count++;"
    };
    var cvN1x = function () {
        var dI7B = Yf1x[Yf1x.length - 1];
        return "}; if(!__HASH__" + dI7B + "||!" + dI7B + "_count){"
    };
    var cvM1x = function () {
        Yf1x.pop();
        return "};"
    };
    var cvK1x = function (dI7B) {
        if (dI7B[2] != "as") throw"bad for list loop statement: " + dI7B.join(" ");
        var Qs9j = dI7B[1].split("..");
        if (Qs9j.length > 1) {
            GL7E(Qs9j[0]);
            GL7E(Qs9j[1]);
            return "for(var " + dI7B[3] + "," + dI7B[3] + "_index=0," + dI7B[3] + "_beg=" + Qs9j[0] + "," + dI7B[3] + "_end=" + Qs9j[1] + "," + dI7B[3] + "_length=parseInt(" + dI7B[3] + "_end-" + dI7B[3] + "_beg+1);" + dI7B[3] + "_index<" + dI7B[3] + "_length;" + dI7B[3] + "_index++){" + dI7B[3] + " = " + dI7B[3] + "_beg+" + dI7B[3] + "_index;"
        } else {
            GL7E(dI7B[1]);
            return "for(var __LIST__" + dI7B[3] + " = " + dI7B[1] + "," + dI7B[3] + "," + dI7B[3] + "_index=0," + dI7B[3] + "_length=__LIST__" + dI7B[3] + ".length;" + dI7B[3] + "_index<" + dI7B[3] + "_length;" + dI7B[3] + "_index++){" + dI7B[3] + " = __LIST__" + dI7B[3] + "[" + dI7B[3] + "_index];"
        }
    };
    var cvJ1x = function (dI7B) {
        if (!dI7B || !dI7B.length) return;
        dI7B.shift();
        var V6P = dI7B[0].split("(")[0];
        return "var " + V6P + " = function" + dI7B.join("").replace(V6P, "") + "{var __OUT=[];"
    };
    var cvD1x = function (dI7B) {
        if (!dI7B[1]) throw"bad include statement: " + dI7B.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bvO8G = function (kr9i, dI7B) {
        GL7E(dI7B.slice(1).join(" "));
        return kr9i
    };
    var cvB1x = function (dI7B) {
        return bvO8G("if(", dI7B)
    };
    var cvA1x = function (dI7B) {
        return bvO8G("}else if(", dI7B)
    };
    var cvz1x = function (dI7B) {
        return bvO8G("var ", dI7B)
    };
    bP6J = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cvB1x, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cvA1x, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cvQ1x, pmin: 3},
            forelse: {pfix: cvN1x},
            "/for": {pfix: cvM1x},
            list: {pfix: cvK1x, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cvz1x, sfix: ";"},
            macro: {pfix: cvJ1x},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    KI8A = !0
                }
            },
            "/trim": {
                pfix: function () {
                    KI8A = null
                }
            },
            inline: {pfix: cvD1x, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (kr9i) {
                return (kr9i || "") + "" + gF8x
            }, "default": function (D6x, kg9X) {
                return D6x || kg9X
            }
        }
    };
    var cvy1x = function () {
        var cvx1x = /\\([\{\}])/g;
        return function (bo6i, jI9z) {
            bo6i = bo6i.replace(cvx1x, "$1");
            var dI7B = bo6i.slice(1, -1).split(bRx4B), bg6a = bP6J.def[dI7B[0]];
            if (!bg6a) {
                bbn3x(bo6i, jI9z);
                return
            }
            if (!!bg6a.pmin && bg6a.pmin >= dI7B.length) throw"Statement needs more parameters:" + bo6i;
            jI9z.push(!!bg6a.pfix && typeof bg6a.pfix != "string" ? bg6a.pfix(dI7B) : bg6a.pfix || "");
            if (!!bg6a.sfix) {
                if (dI7B.length <= 1) {
                    if (!!bg6a.pdft) jI9z.push(bg6a.pdft)
                } else {
                    for (var i = 1, l = dI7B.length; i < l; i++) {
                        if (i > 1) jI9z.push(" ");
                        jI9z.push(dI7B[i])
                    }
                }
                jI9z.push(bg6a.sfix)
            }
        }
    }();
    var bRl4p = function (KO8G, jI9z) {
        if (!KO8G || !KO8G.length) return;
        if (KO8G.length == 1) {
            var bvN8F = KO8G.pop();
            GL7E(bvN8F);
            jI9z.push(bvN8F == "" ? '""' : bvN8F);
            return
        }
        var bvM8E = KO8G.pop().split(":");
        jI9z.push("__MDF['" + bvM8E.shift() + "'](");
        bRl4p(KO8G, jI9z);
        if (bvM8E.length > 0) {
            var bf6Z = bvM8E.join(":");
            GL7E(bf6Z);
            jI9z.push("," + bf6Z)
        }
        jI9z.push(")")
    };
    var bbn3x = function (bo6i, jI9z) {
        if (!bo6i) return;
        var wm3x = bo6i.split("\n");
        if (!wm3x || !wm3x.length) return;
        for (var i = 0, l = wm3x.length, hw9n; i < l; i++) {
            hw9n = wm3x[i];
            if (!!KI8A) {
                hw9n = hw9n.trim();
                if (!hw9n) continue
            }
            cvr1x(hw9n, jI9z);
            if (!!KI8A && i < l - 1) jI9z.push("__OUT.push('\\n');")
        }
    };
    var cvr1x = function () {
        var cvq1x = /\|\|/g, cvo1x = /#@@#/g;
        return function (bo6i, jI9z) {
            var Qi9Z = "}", Qg9X = -1, bq6k = bo6i.length, xi4m, fN8F, KR8J, bdl3x, Qe9V;
            while (Qg9X + Qi9Z.length < bq6k) {
                xi4m = "${";
                fN8F = "}";
                KR8J = bo6i.indexOf(xi4m, Qg9X + Qi9Z.length);
                if (KR8J < 0) break;
                if (bo6i.charAt(KR8J + 2) == "%") {
                    xi4m = "${%";
                    fN8F = "%}"
                }
                bdl3x = bo6i.indexOf(fN8F, KR8J + xi4m.length);
                if (bdl3x < 0) break;
                bdt3x(bo6i.substring(Qg9X + Qi9Z.length, KR8J), jI9z);
                Qe9V = bo6i.substring(KR8J + xi4m.length, bdl3x).replace(cvq1x, "#@@#").split("|");
                for (var i = 0, l = Qe9V.length; i < l; Qe9V[i] = Qe9V[i].replace(cvo1x, "||"), i++) ;
                jI9z.push("__OUT.push(");
                bRl4p(Qe9V, jI9z);
                jI9z.push(");");
                Qi9Z = fN8F;
                Qg9X = bdl3x
            }
            bdt3x(bo6i.substring(Qg9X + Qi9Z.length), jI9z)
        }
    }();
    var bdt3x = function () {
        var bz6t = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cvn1x = function (bo6i) {
            return (bo6i || "").replace(bz6t.r, function ($1) {
                return bz6t[$1] || $1
            })
        };
        return function (bo6i, jI9z) {
            if (!bo6i) return;
            jI9z.push("__OUT.push('" + cvn1x(bo6i) + "');")
        }
    }();
    var cvm1x = function () {
        var cvl1x = /\t/g, cvj1x = /\n/g, cuX1x = /\r\n?/g;
        var bQU4Y = function (bo6i, xi4m) {
            var r6l = bo6i.indexOf("}", xi4m + 1);
            while (bo6i.charAt(r6l - 1) == "\\") {
                r6l = bo6i.indexOf("}", r6l + 1)
            }
            return r6l
        };
        var cuR1x = function () {
            var br6l = [], GY7R = arguments[0];
            for (var x in GY7R) {
                x = (x || "").trim();
                if (!x) continue;
                br6l.push(x + "=$v('" + x + "')")
            }
            return br6l.length > 0 ? "var " + br6l.join(",") + ";" : ""
        };
        return function (bo6i) {
            hH9y = {};
            bo6i = bo6i.replace(cuX1x, "\n").replace(cvl1x, "    ");
            var sA2x = ["if(!__CTX) return '';", ""];
            sA2x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sA2x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sA2x.push("__OUT=[];");
            var Ha7T = -1, bq6k = bo6i.length;
            var nj0x, KU8M, PT9K, PS9J, Bo5t, PO9F, bvD8v, PN9E;
            while (Ha7T + 1 < bq6k) {
                nj0x = Ha7T;
                nj0x = bo6i.indexOf("{", nj0x + 1);
                while (nj0x >= 0) {
                    KU8M = bQU4Y(bo6i, nj0x);
                    PT9K = bo6i.substring(nj0x, KU8M);
                    PS9J = PT9K.match(bP6J.blk);
                    if (!!PS9J) {
                        Bo5t = PS9J[1].length + 1;
                        PO9F = bo6i.indexOf("}", nj0x + Bo5t);
                        if (PO9F >= 0) {
                            bvD8v = PO9F - nj0x - Bo5t <= 0 ? "{/" + PS9J[1] + "}" : PT9K.substr(Bo5t + 1);
                            Bo5t = bo6i.indexOf(bvD8v, PO9F + 1);
                            if (Bo5t >= 0) {
                                bbn3x(bo6i.substring(Ha7T + 1, nj0x), sA2x);
                                PN9E = bo6i.substring(PO9F + 1, Bo5t);
                                switch (PS9J[1]) {
                                    case"cdata":
                                        bdt3x(PN9E, sA2x);
                                        break;
                                    case"minify":
                                        bdt3x(PN9E.replace(cvj1x, " ").replace(bRx4B, " "), sA2x);
                                        break;
                                    case"eval":
                                        if (!!PN9E) sA2x.push("__OUT.push((function(){" + PN9E + "})());");
                                        break
                                }
                                nj0x = Ha7T = Bo5t + bvD8v.length - 1
                            }
                        }
                    } else if (bo6i.charAt(nj0x - 1) != "$" && bo6i.charAt(nj0x - 1) != "\\" && PT9K.substr(PT9K.charAt(1) == "/" ? 2 : 1).search(bP6J.tag) == 0) {
                        break
                    }
                    nj0x = bo6i.indexOf("{", nj0x + 1)
                }
                if (nj0x < 0) break;
                KU8M = bQU4Y(bo6i, nj0x);
                if (KU8M < 0) break;
                bbn3x(bo6i.substring(Ha7T + 1, nj0x), sA2x);
                cvy1x(bo6i.substring(nj0x, KU8M + 1), sA2x);
                Ha7T = KU8M
            }
            bbn3x(bo6i.substring(Ha7T + 1), sA2x);
            sA2x.push(';return __OUT.join("");');
            sA2x[1] = cuR1x(hH9y);
            hH9y = null;
            return new Function("__CTX", "__MDF", sA2x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gF8x
    };
    TrimPath.merge = function () {
        var PM9D = {};
        TrimPath.dump = function () {
            return {func: PM9D, text: QC9t}
        };
        return function (fk8c, j6d, jT9K) {
            try {
                j6d = j6d || {};
                if (!PM9D[fk8c] && !QC9t[fk8c]) return "";
                if (!PM9D[fk8c]) {
                    PM9D[fk8c] = cvm1x(QC9t[fk8c]);
                    delete QC9t[fk8c]
                }
                if (!!jT9K) {
                    for (var x in bP6J.ext) if (!jT9K[x]) jT9K[x] = bP6J.ext[x]
                }
                return PM9D[fk8c](j6d, jT9K || bP6J.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cuM1x = +(new Date);
        return function (bo6i, fk8c) {
            if (!bo6i) return "";
            fk8c = fk8c || "ck_" + cuM1x++;
            QC9t[fk8c] = bo6i;
            return fk8c
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), k6e = c5h("nej.u"), ew8o = {}, bQP4T = {};
    a4e.Lf8X = TrimPath.seed;
    a4e.bZ6T = function () {
        var bQO4S = function (C6w) {
            return !a4e.iD9u ? "" : a4e.iD9u(C6w)
        };
        return function (fk8c, j6d, jT9K) {
            j6d = NEJ.X(NEJ.X({}, bQP4T), j6d);
            j6d.inline = bQO4S;
            jT9K = NEJ.X(NEJ.X({}, ew8o), jT9K);
            jT9K.rand = k6e.ol1x;
            jT9K.format = k6e.ig9X;
            jT9K.escape = k6e.dG7z;
            jT9K.inline = bQO4S;
            return TrimPath.merge(fk8c, j6d, jT9K)
        }
    }();
    a4e.ex8p = function (bo6i, cuH1x) {
        if (!bo6i) return "";
        var fk8c, F6z = a4e.B6v(bo6i);
        if (!!F6z) {
            fk8c = F6z.id;
            bo6i = F6z.value || F6z.innerText;
            if (!cuH1x) a4e.cJ7C(F6z)
        }
        return TrimPath.parse(bo6i, fk8c)
    };
    a4e.dH7A = function (bI6C, fk8c, j6d, jT9K) {
        bI6C = a4e.B6v(bI6C);
        if (!!bI6C) bI6C.innerHTML = a4e.bZ6T(fk8c, j6d, jT9K);
        return this
    };
    a4e.cDS3x = function (bz6t) {
        NEJ.X(ew8o, bz6t)
    };
    a4e.cuF1x = function (bz6t) {
        NEJ.X(bQP4T, bz6t)
    };
    c5h("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var du7n = NEJ.P("nej.p"), N6H = window, lt0x = du7n.Ii7b, bQK4O = lt0x.ipad || lt0x.iphone;
    if (!bQK4O && !!N6H.requestAnimationFrame && !!N6H.cancelRequestAnimationFrame) return;
    var kr9i = du7n.ds7l.prefix.pro;
    if (!bQK4O && !!N6H[kr9i + "RequestAnimationFrame"] && !!N6H[kr9i + "CancelRequestAnimationFrame"]) {
        N6H.requestAnimationFrame = N6H[kr9i + "RequestAnimationFrame"];
        N6H.cancelRequestAnimationFrame = N6H[kr9i + "CancelRequestAnimationFrame"];
        return
    }
    var YL2x = lt0x.desktop ? 80 : lt0x.ios ? 50 : 30;
    N6H.requestAnimationFrame = function (cK7D) {
        return window.setTimeout(function () {
            try {
                cK7D(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / YL2x)
    };
    N6H.cancelRequestAnimationFrame = function (C6w) {
        window.clearTimeout(C6w);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, k6e = c5h("nej.u"), a4e = c5h("nej.e"), h6b = c5h("nej.v"), be6Y = c5h("nej.h"),
        cX7Q = c5h("nej.x"), YQ2x = c5h("nej.ut.j.cb"), gk8c;
    if (!!a4e.rE1x) return;
    a4e.rE1x = cX7Q.rE1x = function () {
        var R6L = {}, gH8z = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d6d) {
            var C6w = decodeURIComponent(d6d.target), u6o = d6d.type.toLowerCase();
            var dt7m = R6L[C6w + "-on" + u6o];
            if (!!dt7m) {
                try {
                    dt7m(d6d)
                } catch (e) {
                }
                return
            }
            var cM7F = R6L[C6w + "-tgt"];
            if (!!cM7F && gH8z.test(u6o)) {
                bQJ4N(cM7F, d6d)
            }
        };
        var bvA8s = function (e6c) {
            var bI6C = a4e.B6v(e6c.parent) || document.body, dT8L = a4e.bZ6T(gk8c, e6c);
            bI6C.insertAdjacentHTML(!e6c.hidden ? "beforeEnd" : "afterBegin", dT8L)
        };
        var bQJ4N = function (C6w, d6d) {
            var u6o = d6d.type.toLowerCase();
            requestAnimationFrame(function () {
                h6b.z6t(C6w, u6o)
            })
        };
        var cuu1x = function (hM9D) {
            return !!hM9D && !!hM9D.inited && !!hM9D.inited()
        };
        var PB9s = function (C6w) {
            var br6l = [document.embeds[C6w], a4e.B6v(C6w), document[C6w], window[C6w]], r6l = k6e.eE8w(br6l, cuu1x),
                hM9D = br6l[r6l], bvz8r = C6w + "-count";
            R6L[bvz8r]++;
            if (!!hM9D || R6L[bvz8r] > 100) {
                R6L[C6w](hM9D);
                delete R6L[C6w];
                delete R6L[bvz8r];
                return
            }
            window.setTimeout(PB9s.g6a(null, C6w), 300)
        };
        var cus1x = function (e6c) {
            var C6w = e6c.id, cm6g = e6c.params;
            if (!cm6g) {
                cm6g = {};
                e6c.params = cm6g
            }
            var hH9y = cm6g.flashvars || "";
            hH9y += (!hH9y ? "" : "&") + ("id=" + C6w);
            if (!e6c.hidden && (!!e6c.target || be6Y.Zc2x(cm6g.wmode))) {
                var hO9F = a4e.lB0x(e6c.target) || a4e.lB0x(e6c.parent), baj2x = k6e.Xm1x();
                YQ2x["cb" + baj2x] = bQJ4N.g6a(null, hO9F);
                hH9y += "&onevent=nej.ut.j.cb.cb" + baj2x;
                R6L[C6w + "-tgt"] = hO9F
            }
            cm6g.flashvars = hH9y;
            k6e.eE8w(e6c, function (D6x, J6D) {
                if (k6e.gI8A(D6x) && J6D != "onready") {
                    R6L[C6w + "-" + J6D] = D6x
                }
            })
        };
        return function (e6c) {
            e6c = NEJ.X({}, e6c);
            if (!e6c.src) return;
            var C6w = "flash_" + k6e.Xm1x();
            e6c.id = C6w;
            cus1x(e6c);
            bvA8s(e6c);
            if (!e6c.onready) return;
            R6L[C6w] = e6c.onready;
            R6L[C6w + "-count"] = 0;
            PB9s(C6w)
        }
    }();
    gk8c = a4e.ex8p('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cX7Q.isChange = !0
})();
(function () {
    var c5h = NEJ.P, iu9l = c5h("nej.c"), a4e = c5h("nej.e"), k6e = c5h("nej.u"), N6H = c5h("nej.ut.j"),
        YQ2x = c5h("nej.ut.j.cb"), R6L = {}, gF8x = +(new Date), bvy8q;
    if (!!N6H.bvx8p) return;
    YQ2x["ld" + gF8x] = function (J6D, cH7A) {
        var jM9D = R6L[J6D];
        if (!jM9D) return;
        delete R6L[J6D];
        jM9D.vD3x({status: 200, result: cH7A})
    };
    YQ2x["er" + gF8x] = function (J6D, es8k) {
        var jM9D = R6L[J6D];
        if (!jM9D) return;
        delete R6L[J6D];
        jM9D.vD3x({status: es8k || 0})
    };
    N6H.bvx8p = NEJ.C();
    bvy8q = N6H.bvx8p.O6I(N6H.KE8w);
    bvy8q.co6i = function (e6c) {
        var hM9D = R6L.flash;
        if (k6e.eJ8B(hM9D)) {
            hM9D.push(this.co6i.g6a(this, e6c));
            return
        }
        if (!hM9D) {
            R6L.flash = [this.co6i.g6a(this, e6c)];
            a4e.rE1x({
                hidden: !0, src: iu9l.B6v("ajax.swf"), onready: function (hM9D) {
                    if (!hM9D) return;
                    var i6c = R6L.flash;
                    R6L.flash = hM9D;
                    k6e.no0x(i6c, function (dt7m) {
                        try {
                            dt7m()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Bk5p = "swf-" + k6e.ol1x();
        R6L[this.Bk5p] = this;
        var j6d = NEJ.EX({url: "", data: null, method: "GET"}, e6c.request);
        j6d.key = this.Bk5p;
        j6d.headers = e6c.headers;
        j6d.onerror = "nej.ut.j.cb.er" + gF8x;
        j6d.onloaded = "nej.ut.j.cb.ld" + gF8x;
        var bQE4I = iu9l.cej7c(j6d.url);
        if (!!bQE4I) j6d.policyURL = bQE4I;
        hM9D.request(j6d)
    };
    bvy8q.kn9e = function () {
        delete R6L[this.Bk5p];
        this.vD3x({status: 0});
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, be6Y = c5h("nej.h");
    be6Y.bQD4H = function () {
        var dh7a = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kG0x) {
            kG0x = kG0x || "";
            if (dh7a.test(kG0x)) return RegExp.$1;
            return "*"
        }
    }();
    be6Y.bvw8o = function (j6d) {
        return j6d
    };
    be6Y.bvs8k = function (bbh3x, e6c) {
        if (!bbh3x.postMessage) return;
        e6c = e6c || bb6V;
        bbh3x.postMessage(be6Y.bvw8o(e6c.data), be6Y.bQD4H(e6c.origin))
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), N6H = c5h("nej.ut"), b5g;
    if (!!N6H.fK8C) return;
    N6H.fK8C = NEJ.C();
    b5g = N6H.fK8C.O6I(N6H.cG7z);
    b5g.cx6r = function () {
        this.S6M = {};
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.Ps9j = a4e.B6v(e6c.element) || window;
        this.bQw3x(e6c.event);
        this.ctW1x();
        this.z6t("oninit")
    };
    b5g.bD6x = function () {
        var HM7F = function (D6x, J6D, bz6t) {
            if (!k6e.eJ8B(D6x)) {
                k6e.WJ1x(this.Ps9j, J6D)
            }
            delete bz6t[J6D]
        };
        return function () {
            this.bH6B();
            k6e.eE8w(this.S6M, HM7F, this);
            delete this.Ps9j
        }
    }();
    b5g.bbX3x = function (F6z, u6o) {
        F6z = a4e.B6v(F6z);
        return F6z == this.Ps9j && (!u6o || !!this.S6M["on" + u6o])
    };
    b5g.bQw3x = function (d6d) {
        if (k6e.fE8w(d6d)) {
            var V6P = "on" + d6d;
            if (!this.S6M[V6P]) {
                this.S6M[V6P] = this.ctV1x.g6a(this, d6d)
            }
            this.bQt3x(d6d);
            return
        }
        if (k6e.eJ8B(d6d)) {
            k6e.bd6X(d6d, this.bQw3x, this)
        }
    };
    b5g.bQt3x = function (u6o) {
        var d6d = "on" + u6o, dt7m = this.Ps9j[d6d], bQs3x = this.S6M[d6d];
        if (dt7m != bQs3x) {
            this.bcf3x(u6o);
            if (!!dt7m && dt7m != bs6m) this.bQr3x(u6o, dt7m);
            this.Ps9j[d6d] = bQs3x
        }
    };
    b5g.bQr3x = function (u6o, dt7m, ctH0x) {
        var i6c = this.S6M[u6o];
        if (!i6c) {
            i6c = [];
            this.S6M[u6o] = i6c
        }
        if (k6e.gI8A(dt7m)) {
            !ctH0x ? i6c.push(dt7m) : i6c.unshift(dt7m)
        }
    };
    b5g.bcf3x = function (u6o, dt7m) {
        var i6c = this.S6M[u6o];
        if (!i6c || !i6c.length) return;
        if (!dt7m) {
            delete this.S6M[u6o];
            return
        }
        k6e.no0x(i6c, function (D6x, r6l, Ll8d) {
            if (dt7m === D6x) {
                Ll8d.splice(r6l, 1);
                return !0
            }
        })
    };
    b5g.ctV1x = function (u6o, d6d) {
        d6d = d6d || {noargs: !0};
        d6d.type = u6o;
        this.z6t("ondispatch", d6d);
        if (!!d6d.stopped) return;
        k6e.bd6X(this.S6M[u6o], function (dt7m) {
            try {
                dt7m(d6d)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b5g.ctW1x = function () {
        var bvp8h = function (d6d) {
            var bf6Z = d6d.args, u6o = bf6Z[1].toLowerCase();
            if (this.bbX3x(bf6Z[0], u6o)) {
                d6d.stopped = !0;
                this.bQt3x(u6o);
                this.bQr3x(u6o, bf6Z[2], bf6Z[3]);
                this.z6t("oneventadd", {type: u6o, listener: bf6Z[2]})
            }
        };
        var ctD0x = function (d6d) {
            var bf6Z = d6d.args, u6o = bf6Z[1].toLowerCase();
            if (this.bbX3x(bf6Z[0], u6o)) {
                d6d.stopped = !0;
                this.bcf3x(u6o, bf6Z[2])
            }
        };
        var bvX8P = function (d6d) {
            var bf6Z = d6d.args, u6o = (bf6Z[1] || "").toLowerCase();
            if (this.bbX3x(bf6Z[0])) {
                if (!!u6o) {
                    this.bcf3x(u6o);
                    return
                }
                k6e.eE8w(this.S6M, function (D6x, J6D) {
                    if (k6e.eJ8B(D6x)) {
                        this.bcf3x(J6D)
                    }
                }, this)
            }
        };
        var cty0x = function (d6d) {
            var bf6Z = d6d.args, u6o = bf6Z[1].toLowerCase();
            if (this.bbX3x(bf6Z[0], u6o)) {
                d6d.stopped = !0;
                bf6Z[0]["on" + u6o].apply(bf6Z[0], bf6Z.slice(2))
            }
        };
        return function () {
            if (!!this.cto0x) return;
            this.cto0x = true;
            h6b.s6m = h6b.s6m.eF8x(bvp8h.g6a(this));
            h6b.mG0x = h6b.mG0x.eF8x(ctD0x.g6a(this));
            h6b.hf9W = h6b.hf9W.eF8x(bvX8P.g6a(this));
            h6b.z6t = h6b.z6t.eF8x(cty0x.g6a(this))
        }
    }()
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p"), be6Y = c5h("nej.h"), k6e = c5h("nej.u"), h6b = c5h("nej.v"),
        I6C = c5h("nej.ut");
    if (N6H.mX0x.trident) return;
    if (!!window.postMessage) {
        be6Y.bvw8o = be6Y.bvw8o.eF8x(function (d6d) {
            d6d.stopped = !0;
            d6d.value = JSON.stringify(d6d.args[0])
        });
        return
    }
    var J6D = "MSG|", ks9j = [];
    var ctn0x = function () {
        var V6P = unescape(window.name || "").trim();
        if (!V6P || V6P.indexOf(J6D) != 0) return;
        window.name = "";
        var o6i = k6e.Ri0x(V6P.replace(J6D, ""), "|"), kG0x = (o6i.origin || "").toLowerCase();
        if (!!kG0x && kG0x != "*" && location.href.toLowerCase().indexOf(kG0x) != 0) return;
        h6b.z6t(window, "message", {
            data: JSON.parse(o6i.data || "null"),
            source: window.frames[o6i.self] || o6i.self,
            origin: be6Y.bQD4H(o6i.ref || document.referrer)
        })
    };
    var ctm0x = function () {
        var bdb3x;
        var ctk0x = function (bz6t, r6l, i6c) {
            if (k6e.dj7c(bdb3x, bz6t.w) < 0) {
                bdb3x.push(bz6t.w);
                i6c.splice(r6l, 1);
                bz6t.w.name = bz6t.d
            }
        };
        return function () {
            bdb3x = [];
            k6e.no0x(ks9j, ctk0x);
            bdb3x = null
        }
    }();
    be6Y.bvs8k = function () {
        var ctg0x = function (j6d) {
            var o6i = {};
            j6d = j6d || bb6V;
            o6i.origin = j6d.origin || "";
            o6i.ref = location.href;
            o6i.self = j6d.source;
            o6i.data = JSON.stringify(j6d.data);
            return J6D + k6e.uP3x(o6i, "|", !0)
        };
        return be6Y.bvs8k.eF8x(function (d6d) {
            d6d.stopped = !0;
            var bf6Z = d6d.args;
            ks9j.unshift({w: bf6Z[0], d: escape(ctg0x(bf6Z[1]))})
        })
    }();
    I6C.fK8C.A6u({element: window, event: "message"});
    window.setInterval(ctm0x, 100);
    window.setInterval(ctn0x, 20)
})();
(function () {
    var c5h = NEJ.P, be6Y = c5h("nej.h"), a4e = c5h("nej.e"), v6p = c5h("nej.j");
    v6p.ctd0x = function () {
        var gP8H = window.name || "_parent", cta0x = {gx8p: window.top, gP8H: window, bI6C: window.parent};
        return function (cM7F, e6c) {
            if (typeof cM7F == "string") {
                cM7F = cta0x[cM7F] || window.frames[cM7F];
                if (!cM7F) return this
            }
            var j6d = NEJ.X({origin: "*", source: gP8H}, e6c);
            be6Y.bvs8k(cM7F, j6d);
            return this
        }
    }()
})();
(function () {
    var c5h = NEJ.P, iu9l = c5h("nej.c"), a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        v6p = c5h("nej.j"), N6H = c5h("nej.ut.j"), R6L = {}, bdy3x;
    if (!!N6H.bvg8Y) return;
    N6H.bvg8Y = NEJ.C();
    bdy3x = N6H.bvg8Y.O6I(N6H.KE8w);
    bdy3x.cx6r = function () {
        var eY8Q = "NEJ-AJAX-DATA:", El6f = !1;
        var bvf8X = function (d6d) {
            var j6d = d6d.data;
            if (j6d.indexOf(eY8Q) != 0) return;
            j6d = JSON.parse(j6d.replace(eY8Q, ""));
            var jM9D = R6L[j6d.key];
            if (!jM9D) return;
            delete R6L[j6d.key];
            j6d.result = decodeURIComponent(j6d.result || "");
            jM9D.vD3x(j6d)
        };
        var bvd8V = function () {
            if (!El6f) {
                El6f = !0;
                h6b.s6m(window, "message", bvf8X)
            }
        };
        return function () {
            this.cD7w();
            bvd8V()
        }
    }();
    bdy3x.co6i = function (e6c) {
        var ge8W = e6c.request, jM9D = iu9l.ccG6A(ge8W.url), ei8a = R6L[jM9D];
        if (k6e.eJ8B(ei8a)) {
            ei8a.push(this.co6i.g6a(this, e6c));
            return
        }
        if (!ei8a) {
            R6L[jM9D] = [this.co6i.g6a(this, e6c)];
            a4e.bbF3x({
                src: jM9D, visible: !1, onload: function (d6d) {
                    var i6c = R6L[jM9D];
                    R6L[jM9D] = h6b.W6Q(d6d).contentWindow;
                    k6e.no0x(i6c, function (dt7m) {
                        try {
                            dt7m()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Bk5p = "frm-" + k6e.ol1x();
        R6L[this.Bk5p] = this;
        var j6d = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, ge8W);
        j6d.key = this.Bk5p;
        j6d.headers = e6c.headers;
        v6p.ctd0x(R6L[jM9D], {data: j6d})
    };
    bdy3x.kn9e = function () {
        delete R6L[this.Bk5p];
        this.vD3x({status: 0});
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, ej8b = c5h("nej.g"), a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        v6p = c5h("nej.j"), N6H = c5h("nej.ut.j"), R6L = {}, Lp8h;
    if (!!N6H.bvc8U) return;
    N6H.bvc8U = NEJ.C();
    Lp8h = N6H.bvc8U.O6I(N6H.KE8w);
    Lp8h.cx6r = function () {
        var eY8Q = "NEJ-UPLOAD-RESULT:", El6f = !1;
        var bvf8X = function (d6d) {
            var j6d = d6d.data;
            if (j6d.indexOf(eY8Q) != 0) return;
            j6d = JSON.parse(j6d.replace(eY8Q, ""));
            var jM9D = R6L[j6d.key];
            if (!jM9D) return;
            delete R6L[j6d.key];
            jM9D.vD3x(decodeURIComponent(j6d.result))
        };
        var bvd8V = function () {
            if (!El6f) {
                El6f = !0;
                h6b.s6m(window, "message", bvf8X)
            }
        };
        return function () {
            this.cD7w();
            bvd8V()
        }
    }();
    Lp8h.bD6x = function () {
        this.bH6B();
        a4e.cJ7C(this.bvb8T);
        delete this.bvb8T;
        window.clearTimeout(this.ed8V);
        delete this.ed8V
    };
    Lp8h.vD3x = function (cH7A) {
        var Q6K;
        try {
            Q6K = JSON.parse(cH7A);
            this.z6t("onload", Q6K)
        } catch (e) {
            this.z6t("onerror", {code: ej8b.cpv0x, message: cH7A})
        }
    };
    Lp8h.co6i = function () {
        var csl0x = function () {
            var mL0x, cH7A;
            try {
                var mL0x = this.bvb8T.contentWindow.document.body, cH7A = mL0x.innerText || mL0x.textContent
            } catch (e) {
                return
            }
            this.vD3x(cH7A)
        };
        var bva8S = function (Y6S, fj8b, rv1x) {
            v6p.bn6h(Y6S, {
                type: "json",
                method: "POST",
                cookie: rv1x,
                mode: parseInt(fj8b) || 0,
                onload: function (j6d) {
                    if (!this.ed8V) return;
                    this.z6t("onuploading", j6d);
                    this.ed8V = window.setTimeout(bva8S.g6a(this, Y6S, fj8b, rv1x), 1e3)
                }.g6a(this),
                onerror: function (cb6V) {
                    if (!this.ed8V) return;
                    this.ed8V = window.setTimeout(bva8S.g6a(this, Y6S, fj8b, rv1x), 1e3)
                }.g6a(this)
            })
        };
        return function (e6c) {
            var ge8W = e6c.request, oO1x = e6c.headers, fg8Y = ge8W.data, V6P = "fom-" + k6e.ol1x();
            R6L[V6P] = this;
            fg8Y.target = V6P;
            fg8Y.method = "POST";
            fg8Y.enctype = ej8b.DI6C;
            fg8Y.encoding = ej8b.DI6C;
            var Y6S = fg8Y.action || "", lv0x = Y6S.indexOf("?") <= 0 ? "?" : "&";
            fg8Y.action = Y6S + lv0x + "_proxy_=form";
            this.bvb8T = a4e.bbF3x({
                name: V6P, onload: function (d6d) {
                    var ei8a = h6b.W6Q(d6d);
                    h6b.s6m(ei8a, "load", csl0x.g6a(this));
                    fg8Y.submit();
                    var bPy2x = (fg8Y.nej_query || bb6V).value;
                    if (!bPy2x) return;
                    var fj8b = (fg8Y.nej_mode || bb6V).value, rv1x = (fg8Y.nej_cookie || bb6V).value == "true";
                    this.ed8V = window.setTimeout(bva8S.g6a(this, bPy2x, fj8b, rv1x), 100)
                }.g6a(this)
            })
        }
    }();
    Lp8h.kn9e = function () {
        this.z6t("onerror", {code: ej8b.cBZ2x, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, be6Y = c5h("nej.h"), N6H = c5h("nej.ut.j");
    be6Y.bvS8K = function () {
        return new XMLHttpRequest
    };
    be6Y.buZ8R = function (fj8b, WK1x, e6c) {
        var bz6t = !!WK1x ? {2: N6H.bvc8U} : {2: N6H.bvg8Y, 3: N6H.bvx8p};
        return (bz6t[fj8b] || N6H.WT1x).A6u(e6c)
    }
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p"), be6Y = c5h("nej.h");
    if (N6H.mX0x.trident) return;
    be6Y.bvS8K = function () {
        var Ts0x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var crW0x = function () {
            for (var i = 0, l = Ts0x.length; i < l; i++) {
                try {
                    return new ActiveXObject(Ts0x[i])
                } catch (e) {
                }
            }
            return null
        };
        return be6Y.bvS8K.eF8x(function (d6d) {
            if (!!window.XMLHttpRequest) return;
            d6d.stopped = !0;
            d6d.value = crW0x()
        })
    }();
    be6Y.buZ8R = function () {
        var Fm6g = {0: 2, 1: 3};
        return be6Y.buZ8R.eF8x(function (d6d) {
            var bf6Z = d6d.args, fj8b = bf6Z[0] || 0;
            bf6Z[0] = !!bf6Z[1] ? 2 : Fm6g[fj8b] || fj8b
        })
    }()
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, be6Y = c5h("nej.h"), ej8b = c5h("nej.g"), k6e = c5h("nej.u"),
        v6p = c5h("nej.j"), N6H = c5h("nej.ut.j"), ok1x = {}, Jk7d = bs6m;
    v6p.kn9e = function (fk8c) {
        var R6L = ok1x[fk8c];
        if (!R6L) return this;
        R6L.req.kn9e();
        return this
    };
    v6p.WQ1x = function (dX8P) {
        Jk7d = dX8P || bs6m;
        return this
    };
    v6p.bn6h = function () {
        var jz9q = (location.protocol + "//" + location.host).toLowerCase();
        var crR0x = function (Y6S) {
            var kG0x = k6e.cxs1x(Y6S);
            return !!kG0x && kG0x != jz9q
        };
        var crQ0x = function (oO1x) {
            return (oO1x || bb6V)[ej8b.yH4L] == ej8b.DI6C
        };
        var crL0x = function (e6c) {
            var WK1x = crQ0x(e6c.headers);
            if (!crR0x(e6c.url) && !WK1x) return N6H.WT1x.A6u(e6c);
            return be6Y.buZ8R(e6c.mode, WK1x, e6c)
        };
        var HM7F = function (fk8c) {
            var R6L = ok1x[fk8c];
            if (!R6L) return;
            if (!!R6L.req) R6L.req.T6N();
            delete ok1x[fk8c]
        };
        var bPo2x = function (fk8c, u6o) {
            var R6L = ok1x[fk8c];
            if (!R6L) return;
            HM7F(fk8c);
            try {
                var d6d = {type: u6o, result: arguments[2]};
                Jk7d(d6d);
                if (!d6d.stopped) (R6L[u6o] || bs6m)(d6d.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var zM5R = function (fk8c, j6d) {
            bPo2x(fk8c, "onload", j6d)
        };
        var Bz5E = function (fk8c, cb6V) {
            bPo2x(fk8c, "onerror", cb6V)
        };
        return function (Y6S, e6c) {
            e6c = e6c || {};
            var fk8c = k6e.ol1x(), R6L = {onload: e6c.onload || bs6m, onerror: e6c.onerror || bs6m};
            ok1x[fk8c] = R6L;
            e6c.onload = zM5R.g6a(null, fk8c);
            e6c.onerror = Bz5E.g6a(null, fk8c);
            if (!!e6c.query) {
                var lv0x = Y6S.indexOf("?") < 0 ? "?" : "&", bv6p = e6c.query;
                if (k6e.lO0x(bv6p)) bv6p = k6e.cF7y(bv6p);
                if (!!bv6p) Y6S += lv0x + bv6p
            }
            e6c.url = Y6S;
            R6L.req = crL0x(e6c);
            R6L.req.bvT8L(e6c.data);
            return fk8c
        }
    }();
    v6p.gV8N = function (fg8Y, e6c) {
        var eA8s = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(eA8s, e6c);
        eA8s.data = fg8Y;
        eA8s.method = "POST";
        eA8s.timeout = 0;
        eA8s.headers[ej8b.yH4L] = ej8b.DI6C;
        return v6p.bn6h(fg8Y.action, eA8s)
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, ej8b = c5h("nej.g"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        N6H = c5h("nej.ut.j"), mA0x, gL8D = 6e4;
    if (!!N6H.ON9E) return;
    N6H.ON9E = NEJ.C();
    mA0x = N6H.ON9E.O6I(I6C.cG7z);
    mA0x.cx6r = function () {
        this.cD7w();
        this.OL9C = {onerror: this.crv0x.g6a(this), onloaded: this.crg0x.g6a(this)};
        if (!this.constructor.S6M) this.constructor.S6M = {loaded: {}}
    };
    mA0x.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.LB8t = e6c.version;
        this.buO7H = e6c.timeout;
        this.OL9C.version = this.LB8t;
        this.OL9C.timeout = this.buO7H
    };
    mA0x.bOV2x = function (J6D) {
        delete this.constructor.S6M[J6D]
    };
    mA0x.BF5K = function (J6D) {
        return this.constructor.S6M[J6D]
    };
    mA0x.bOS2x = function (J6D, j6d) {
        this.constructor.S6M[J6D] = j6d
    };
    mA0x.YS2x = bs6m;
    mA0x.bOP2x = function (ge8W) {
        h6b.hf9W(ge8W)
    };
    mA0x.buJ7C = function (ge8W) {
        ge8W.src = this.lJ0x;
        document.head.appendChild(ge8W)
    };
    mA0x.BG5L = function () {
        var R6L = this.BF5K(this.lJ0x);
        if (!R6L) return;
        window.clearTimeout(R6L.timer);
        this.bOP2x(R6L.request);
        delete R6L.bind;
        delete R6L.timer;
        delete R6L.request;
        this.bOV2x(this.lJ0x);
        this.BF5K("loaded")[this.lJ0x] = !0
    };
    mA0x.Zm2x = function (V6P) {
        var R6L = this.BF5K(this.lJ0x);
        if (!R6L) return;
        var i6c = R6L.bind;
        this.BG5L();
        if (!!i6c && i6c.length > 0) {
            var cA7t;
            while (i6c.length) {
                cA7t = i6c.shift();
                try {
                    cA7t.z6t(V6P, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cA7t.T6N()
            }
        }
    };
    mA0x.eK8C = function (cb6V) {
        this.Zm2x("onerror", cb6V)
    };
    mA0x.bON2x = function () {
        this.Zm2x("onloaded")
    };
    mA0x.cqA0x = function (Y6S) {
        this.constructor.A6u(this.OL9C).LI8A(Y6S)
    };
    mA0x.bOL2x = function (cb6V) {
        var R6L = this.BF5K(this.wM4Q);
        if (!R6L) return;
        if (!!cb6V) R6L.error++;
        R6L.loaded++;
        if (R6L.loaded < R6L.total) return;
        this.bOV2x(this.wM4Q);
        this.z6t(R6L.error > 0 ? "onerror" : "onloaded")
    };
    mA0x.crv0x = function (cb6V) {
        this.bOL2x(!0)
    };
    mA0x.crg0x = function () {
        this.bOL2x()
    };
    mA0x.LI8A = function (Y6S) {
        Y6S = k6e.bwj8b(Y6S);
        if (!Y6S) {
            this.z6t("onerror", {code: ej8b.bnw6q, message: "请指定要载入的资源地址！"});
            return this
        }
        this.lJ0x = Y6S;
        if (!!this.LB8t) this.lJ0x += (this.lJ0x.indexOf("?") < 0 ? "?" : "&") + this.LB8t;
        if (this.BF5K("loaded")[this.lJ0x]) {
            try {
                this.z6t("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T6N();
            return this
        }
        var R6L = this.BF5K(this.lJ0x), ge8W;
        if (!!R6L) {
            R6L.bind.unshift(this);
            R6L.timer = window.clearTimeout(R6L.timer)
        } else {
            ge8W = this.YS2x();
            R6L = {request: ge8W, bind: [this]};
            this.bOS2x(this.lJ0x, R6L);
            h6b.s6m(ge8W, "load", this.bON2x.g6a(this));
            h6b.s6m(ge8W, "error", this.eK8C.g6a(this, {code: ej8b.boX6R, message: "无法加载指定资源文件[" + this.lJ0x + "]！"}))
        }
        if (this.buO7H != 0) R6L.timer = window.setTimeout(this.eK8C.g6a(this, {
            code: ej8b.byB8t,
            message: "指定资源文件[" + this.lJ0x + "]载入超时！"
        }), this.buO7H || gL8D);
        if (!!ge8W) this.buJ7C(ge8W);
        this.z6t("onloading");
        return this
    };
    mA0x.bOJ2x = function (i6c) {
        if (!i6c || !i6c.length) {
            this.z6t("onerror", {code: ej8b.bnw6q, message: "请指定要载入的资源队列！"});
            return this
        }
        this.wM4Q = k6e.ol1x();
        var R6L = {error: 0, loaded: 0, total: i6c.length};
        this.bOS2x(this.wM4Q, R6L);
        for (var i = 0, l = i6c.length; i < l; i++) {
            if (!i6c[i]) {
                R6L.total--;
                continue
            }
            this.cqA0x(i6c[i])
        }
        this.z6t("onloading");
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), be6Y = c5h("nej.h"), N6H = c5h("nej.ut.j"), Om9d;
    if (!!N6H.buH7A) return;
    N6H.buH7A = NEJ.C();
    Om9d = N6H.buH7A.O6I(N6H.ON9E);
    Om9d.YS2x = function () {
        var eL8D = a4e.dg7Z("iframe");
        eL8D.width = 0;
        eL8D.height = 0;
        eL8D.style.display = "none";
        return eL8D
    };
    Om9d.buJ7C = function (ge8W) {
        ge8W.src = this.lJ0x;
        document.body.appendChild(ge8W)
    };
    Om9d.eK8C = function (cb6V) {
        var eL8D = (this.BF5K(this.lJ0x) || bb6V).request;
        this.Zm2x("onerror", cb6V);
        be6Y.ZE2x(eL8D)
    };
    Om9d.bON2x = function () {
        var mL0x = null, eL8D = (this.BF5K(this.lJ0x) || bb6V).request;
        try {
            mL0x = eL8D.contentWindow.document.body
        } catch (ex) {
        }
        this.Zm2x("onloaded", mL0x);
        be6Y.ZE2x(eL8D)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), N6H = c5h("nej.ut.j"), buD7w;
    if (!!N6H.ZO2x) return;
    N6H.ZO2x = NEJ.C();
    buD7w = N6H.ZO2x.O6I(N6H.ON9E);
    buD7w.YS2x = function () {
        return a4e.dg7Z("link")
    };
    buD7w.buJ7C = function (ge8W) {
        ge8W.href = this.lJ0x;
        document.head.appendChild(ge8W)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), N6H = c5h("nej.ut.j"), ZU2x;
    if (!!N6H.bac2x) return;
    N6H.bac2x = NEJ.C();
    ZU2x = N6H.bac2x.O6I(N6H.ON9E);
    ZU2x.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.bOC2x = e6c.async;
        this.buB7u = e6c.charset;
        this.OL9C.async = !1;
        this.OL9C.charset = this.buB7u
    };
    ZU2x.YS2x = function () {
        var ge8W = a4e.dg7Z("script");
        if (this.bOC2x != null) ge8W.async = !!this.bOC2x;
        if (this.buB7u != null) ge8W.charset = this.buB7u;
        return ge8W
    };
    ZU2x.bOP2x = function (ge8W) {
        a4e.cJ7C(ge8W)
    }
})();
(function () {
    var c5h = NEJ.P, v6p = c5h("nej.j"), N6H = c5h("nej.ut.j");
    v6p.cql0x = function (Y6S, e6c) {
        N6H.bac2x.A6u(e6c).LI8A(Y6S);
        return this
    };
    v6p.cqj0x = function (i6c, e6c) {
        N6H.bac2x.A6u(e6c).bOJ2x(i6c);
        return this
    };
    v6p.cEf3x = function (Y6S, e6c) {
        N6H.ZO2x.A6u(e6c).LI8A(Y6S);
        return this
    };
    v6p.cqc0x = function (i6c, e6c) {
        N6H.ZO2x.A6u(e6c).bOJ2x(i6c);
        return this
    };
    v6p.bOn2x = function (Y6S, e6c) {
        N6H.buH7A.A6u(e6c).LI8A(Y6S);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), v6p = c5h("nej.j"),
        I6C = c5h("nej.ut"), R6L = {}, sM2x = +(new Date) + "-";
    a4e.cZ7S = function () {
        var cE7x = 0;
        var Od9U = function () {
            if (cE7x > 0) return;
            cE7x = 0;
            h6b.z6t(document, "templateready");
            h6b.hf9W(document, "templateready")
        };
        var bbi3x = function (gh8Z, e6c) {
            var cT7M = a4e.t6n(gh8Z, "src");
            if (!cT7M) return;
            e6c = e6c || bb6V;
            var fY8Q = e6c.root;
            if (!fY8Q) {
                fY8Q = gh8Z.ownerDocument.location.href
            } else {
                fY8Q = k6e.bwj8b(fY8Q)
            }
            cT7M = cT7M.split(",");
            k6e.bd6X(cT7M, function (D6x, r6l, i6c) {
                i6c[r6l] = k6e.bwj8b(D6x, fY8Q)
            });
            return cT7M
        };
        var cpL0x = function (gh8Z, e6c) {
            if (!gh8Z) return;
            var cT7M = bbi3x(gh8Z, e6c);
            if (!!cT7M) v6p.cqc0x(cT7M, {version: a4e.t6n(gh8Z, "version")});
            a4e.bSY4c(gh8Z.value)
        };
        var cpJ0x = function (D6x) {
            cE7x--;
            a4e.bSW4a(D6x);
            Od9U()
        };
        var cpH0x = function (gh8Z, e6c) {
            if (!gh8Z) return;
            var cT7M = bbi3x(gh8Z, e6c), eQ8I = gh8Z.value;
            if (!!cT7M) {
                cE7x++;
                var e6c = {version: a4e.t6n(gh8Z, "version"), onloaded: cpJ0x.g6a(null, eQ8I)};
                window.setTimeout(v6p.cqj0x.g6a(v6p, cT7M, e6c), 0);
                return
            }
            a4e.bSW4a(eQ8I)
        };
        var cpA0x = function (mL0x) {
            cE7x--;
            a4e.cZ7S(mL0x);
            Od9U()
        };
        var cpz0x = function (gh8Z, e6c) {
            if (!gh8Z) return;
            var cT7M = bbi3x(gh8Z, e6c)[0];
            if (!!cT7M) {
                cE7x++;
                var e6c = {version: a4e.t6n(gh8Z, "version"), onloaded: cpA0x};
                window.setTimeout(v6p.bOn2x.g6a(v6p, cT7M, e6c), 0)
            }
        };
        var cpy0x = function (C6w, cH7A) {
            cE7x--;
            a4e.LU8M(C6w, cH7A || "");
            Od9U()
        };
        var cpx0x = function (gh8Z, e6c) {
            if (!gh8Z || !gh8Z.id) return;
            var C6w = gh8Z.id, cT7M = bbi3x(gh8Z, e6c)[0];
            if (!!cT7M) {
                cE7x++;
                var Y6S = cT7M + (cT7M.indexOf("?") < 0 ? "?" : "&") + (a4e.t6n(gh8Z, "version") || ""),
                    e6c = {type: "text", method: "GET", onload: cpy0x.g6a(null, C6w)};
                window.setTimeout(v6p.bn6h.g6a(v6p, Y6S, e6c), 0)
            }
        };
        var cpr9i = function (f6b, e6c) {
            var u6o = f6b.name.toLowerCase();
            switch (u6o) {
                case"jst":
                    a4e.ex8p(f6b, !0);
                    return;
                case"txt":
                    a4e.LU8M(f6b.id, f6b.value || "");
                    return;
                case"ntp":
                    a4e.iw9n(f6b.value || "", f6b.id);
                    return;
                case"js":
                    cpH0x(f6b, e6c);
                    return;
                case"css":
                    cpL0x(f6b, e6c);
                    return;
                case"html":
                    cpz0x(f6b, e6c);
                    return;
                case"res":
                    cpx0x(f6b, e6c);
                    return
            }
        };
        I6C.fK8C.A6u({element: document, event: "templateready", oneventadd: Od9U});
        return function (F6z, e6c) {
            F6z = a4e.B6v(F6z);
            if (!!F6z) {
                var i6c = F6z.tagName == "TEXTAREA" ? [F6z] : F6z.getElementsByTagName("textarea");
                k6e.bd6X(i6c, function (f6b) {
                    cpr9i(f6b, e6c)
                });
                a4e.cJ7C(F6z, !0)
            }
            Od9U();
            return this
        }
    }();
    a4e.LU8M = function (J6D, D6x) {
        R6L[J6D] = D6x || "";
        return this
    };
    a4e.iD9u = function (J6D) {
        return R6L[J6D] || ""
    };
    a4e.iw9n = function (F6z, J6D) {
        J6D = J6D || k6e.ol1x();
        F6z = a4e.B6v(F6z) || F6z;
        a4e.LU8M(sM2x + J6D, F6z);
        a4e.ni0x(F6z);
        return J6D
    };
    a4e.dy7r = function (J6D) {
        if (!J6D) return null;
        J6D = sM2x + J6D;
        var D6x = a4e.iD9u(J6D);
        if (!D6x) return null;
        if (k6e.fE8w(D6x)) {
            D6x = a4e.od0x(D6x);
            a4e.LU8M(J6D, D6x)
        }
        return D6x.cloneNode(!0)
    };
    a4e.BM5R = function () {
        var Jk7d = function (D6x, J6D) {
            return J6D == "offset" || J6D == "limit"
        };
        return function (i6c, p6j, e6c) {
            var br6l = [];
            if (!i6c || !i6c.length || !p6j) return br6l;
            e6c = e6c || bb6V;
            var dq7j = i6c.length, jQ9H = parseInt(e6c.offset) || 0,
                fN8F = Math.min(dq7j, jQ9H + (parseInt(e6c.limit) || dq7j)),
                cp6j = {total: i6c.length, range: [jQ9H, fN8F]};
            NEJ.X(cp6j, e6c, Jk7d);
            for (var i = jQ9H, cA7t; i < fN8F; i++) {
                cp6j.index = i;
                cp6j.data = i6c[i];
                cA7t = p6j.A6u(cp6j);
                var C6w = cA7t.Eh6b();
                R6L[C6w] = cA7t;
                cA7t.T6N = cA7t.T6N.eF8x(function (C6w, cA7t) {
                    delete R6L[C6w];
                    delete cA7t.T6N
                }.g6a(null, C6w, cA7t));
                br6l.push(cA7t)
            }
            return br6l
        }
    }();
    a4e.bOc2x = function (C6w) {
        return R6L[C6w]
    };
    a4e.cEh3x = function (dZ8R, e6c) {
        e6c = e6c || bb6V;
        a4e.cZ7S(e6c.tid || "template-box");
        h6b.s6m(document, "templateready", function () {
            dZ8R.A6u().z6t("onshow", e6c)
        })
    };
    c5h("dbg").dumpTC = function () {
        return R6L
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        N6H = c5h("nej.ui"), b5g;
    if (!!N6H.eh8Z) return;
    N6H.eh8Z = NEJ.C();
    b5g = N6H.eh8Z.O6I(I6C.cG7z);
    b5g.cx6r = function () {
        this.cD7w();
        a4e.bTj4n();
        this.cf6Z();
        this.bX6R()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.cpi9Z(e6c.clazz);
        this.bNW2x(e6c.parent)
    };
    b5g.bD6x = function () {
        this.bH6B();
        this.bNV2x();
        delete this.gi8a;
        a4e.ni0x(this.n6h);
        a4e.x6r(this.n6h, this.bun7g);
        delete this.bun7g
    };
    b5g.cf6Z = bs6m;
    b5g.bX6R = function () {
        if (!this.cd6X) this.Mi8a();
        this.n6h = a4e.dy7r(this.cd6X);
        if (!this.n6h) this.n6h = a4e.dg7Z("div", this.mf0x);
        a4e.y6s(this.n6h, this.mf0x)
    };
    b5g.Mi8a = bs6m;
    b5g.cpi9Z = function (ea8S) {
        this.bun7g = ea8S || "";
        a4e.y6s(this.n6h, this.bun7g)
    };
    b5g.coK9B = function () {
        if (!this.mf0x) return;
        a4e.y6s(this.gi8a, this.mf0x + "-parent")
    };
    b5g.bNV2x = function () {
        if (!this.mf0x) return;
        a4e.x6r(this.gi8a, this.mf0x + "-parent")
    };
    b5g.lS0x = function () {
        return this.n6h
    };
    b5g.bNW2x = function (bI6C) {
        if (!this.n6h) return this;
        this.bNV2x();
        if (k6e.gI8A(bI6C)) {
            this.gi8a = bI6C(this.n6h)
        } else {
            this.gi8a = a4e.B6v(bI6C);
            if (!!this.gi8a) this.gi8a.appendChild(this.n6h)
        }
        this.coK9B();
        return this
    };
    b5g.L6F = function () {
        if (!this.gi8a || !this.n6h || this.n6h.parentNode == this.gi8a) return this;
        this.gi8a.appendChild(this.n6h);
        return this
    };
    b5g.bu6o = function () {
        a4e.ni0x(this.n6h);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), k6e = c5h("nej.u"), be6Y = c5h("nej.h"),
        N6H = c5h("nej.ui"), vT3x, bNN2x;
    if (!!N6H.Nn9e) return;
    N6H.Nn9e = NEJ.C();
    vT3x = N6H.Nn9e.O6I(N6H.eh8Z);
    bNN2x = N6H.Nn9e.cs6m;
    vT3x.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.xh4l("oncontentready", e6c.oncontentready || this.cop9g.g6a(this));
        this.cog9X = !!e6c.nohack;
        this.cnW9N = !!e6c.destroyable;
        this.Ml8d(e6c.content)
    };
    vT3x.bD6x = function () {
        this.z6t("onbeforerecycle");
        this.bH6B();
        this.We1x();
        this.Ml8d("");
        a4e.eZ8R(this.n6h, {top: "", left: ""})
    };
    vT3x.cop9g = bs6m;
    vT3x.Mm8e = bs6m;
    vT3x.We1x = function () {
        a4e.ni0x(this.n6h);
        if (!!this.nJ0x) {
            this.nJ0x = be6Y.bsE7x(this.n6h);
            delete this.nJ0x
        }
    };
    vT3x.Ml8d = function (bo6i) {
        if (!this.n6h || !this.BT5Y || bo6i == null) return this;
        bo6i = bo6i || "";
        k6e.fE8w(bo6i) ? this.BT5Y.innerHTML = bo6i : this.BT5Y.appendChild(bo6i);
        this.z6t("oncontentready", this.BT5Y);
        return this
    };
    vT3x.gG8y = function (bh6b) {
        var D6x = bh6b.top;
        if (D6x != null) {
            D6x += "px";
            a4e.ba6U(this.n6h, "top", D6x);
            a4e.ba6U(this.nJ0x, "top", D6x)
        }
        var D6x = bh6b.left;
        if (D6x != null) {
            D6x += "px";
            a4e.ba6U(this.n6h, "left", D6x);
            a4e.ba6U(this.nJ0x, "left", D6x)
        }
        return this
    };
    vT3x.L6F = function () {
        a4e.ba6U(this.n6h, "visibility", "hidden");
        bNN2x.L6F.apply(this, arguments);
        this.Mm8e();
        a4e.ba6U(this.n6h, "visibility", "");
        if (!this.cog9X) {
            this.nJ0x = be6Y.nJ0x(this.n6h)
        }
        return this
    };
    vT3x.bu6o = function () {
        this.cnW9N ? this.T6N() : this.We1x();
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, k6e = c5h("nej.u"), a4e = c5h("nej.e"), N6H = c5h("nej.ui"), BU5Z;
    if (!!N6H.WE1x) return;
    N6H.WE1x = NEJ.C();
    BU5Z = N6H.WE1x.O6I(N6H.eh8Z);
    BU5Z.bl6f = function (e6c) {
        this.Ne8W();
        this.bm6g(this.cnV9M(e6c));
        this.cc6W.onbeforerecycle = this.T6N.g6a(this);
        this.oS1x = this.bud7W()
    };
    BU5Z.bD6x = function () {
        this.z6t("onbeforerecycle");
        this.bH6B();
        delete this.cc6W;
        a4e.ni0x(this.n6h);
        var BW5b = this.oS1x;
        if (!!BW5b) {
            delete this.oS1x;
            BW5b.T6N()
        }
    };
    BU5Z.bud7W = bs6m;
    BU5Z.cnV9M = function (e6c) {
        var o6i = {};
        k6e.eE8w(e6c, function (p6j, J6D) {
            this.cc6W.hasOwnProperty(J6D) ? this.cc6W[J6D] = p6j : o6i[J6D] = p6j
        }, this);
        return o6i
    };
    BU5Z.Ne8W = function () {
        this.cc6W = {clazz: "", parent: null, content: this.n6h, destroyable: !1, oncontentready: null, nohack: !1}
    };
    BU5Z.L6F = function () {
        if (!!this.oS1x) this.oS1x.L6F();
        this.z6t("onaftershow");
        return this
    };
    BU5Z.bu6o = function () {
        if (!!this.oS1x) this.oS1x.bu6o();
        return this
    }
})();
(function () {
    var c5h = NEJ.P, ej8b = c5h("nej.g"), be6Y = c5h("nej.h"), a4e = c5h("nej.e"), k6e = c5h("nej.u"),
        h6b = c5h("nej.v"), N6H = c5h("nej.ui"), Na8S, bNh2x;
    if (!!N6H.Mt8l) return;
    var iM9D = a4e.sC2x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + ej8b.bph6b + ");}");
    N6H.Mt8l = NEJ.C();
    Na8S = N6H.Mt8l.O6I(N6H.eh8Z);
    bNh2x = N6H.Mt8l.cs6m;
    Na8S.bl6f = function (e6c) {
        this.bm6g(e6c);
        var bo6i = e6c.content || "&nbsp;";
        k6e.fE8w(bo6i) ? this.n6h.innerHTML = bo6i : this.n6h.appendChild(bo6i)
    };
    Na8S.bD6x = function () {
        this.bH6B();
        this.n6h.innerHTML = "&nbsp;"
    };
    Na8S.cf6Z = function () {
        this.mf0x = iM9D
    };
    Na8S.L6F = function () {
        be6Y.bse7X(this.n6h);
        bNh2x.L6F.apply(this, arguments);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), N6H = c5h("nej.ut"), wj3x;
    if (!!N6H.vw3x) return;
    N6H.vw3x = NEJ.C();
    wj3x = N6H.vw3x.O6I(N6H.cG7z);
    wj3x.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.cns9j = !!e6c.overflow;
        this.n6h = a4e.B6v(e6c.body);
        this.BX5c = a4e.B6v(e6c.view) || a4e.bTK4O(this.n6h);
        this.bNd2x = a4e.B6v(e6c.mbar) || this.n6h;
        this.Xw1x = parseInt(e6c.direction) || 0;
        if (!!e6c.isRelative) {
            this.n6h.style.position = "relative";
            this.bua7T = true;
            this.btZ7S()
        }
        this.bW6Q([[document, "mouseup", this.btY7R.g6a(this)], [document, "mousemove", this.btX7Q.g6a(this)], [this.bNd2x, "mousedown", this.MQ8I.g6a(this)]])
    };
    wj3x.btZ7S = function () {
        if (!!this.bua7T) {
            this.MA8s = a4e.hR9I(this.n6h, this.BX5c);
            this.MA8s.x -= parseInt(a4e.df7Y(this.n6h, "left")) || 0;
            this.MA8s.y -= parseInt(a4e.df7Y(this.n6h, "top")) || 0
        }
    };
    wj3x.bD6x = function () {
        this.bH6B();
        delete this.n6h;
        delete this.bNd2x;
        delete this.BX5c
    };
    wj3x.btW7P = function () {
        return {
            x: Math.max(this.BX5c.clientWidth, this.BX5c.scrollWidth) - this.n6h.offsetWidth,
            y: Math.max(this.BX5c.clientHeight, this.BX5c.scrollHeight) - this.n6h.offsetHeight
        }
    };
    wj3x.MQ8I = function (d6d) {
        h6b.bi6c(d6d);
        if (!!this.hP9G) return;
        this.hP9G = {x: h6b.jH9y(d6d), y: h6b.me0x(d6d)};
        this.bMV2x = this.btW7P();
        this.z6t("ondragstart", d6d)
    };
    wj3x.btX7Q = function (d6d) {
        if (!this.hP9G) return;
        var bh6b = {x: h6b.jH9y(d6d), y: h6b.me0x(d6d)};
        var pI1x = bh6b.x - this.hP9G.x, pA1x = bh6b.y - this.hP9G.y, D6x = {
            top: (parseInt(a4e.df7Y(this.n6h, "top")) || 0) + pA1x,
            left: (parseInt(a4e.df7Y(this.n6h, "left")) || 0) + pI1x
        };
        if (this.bua7T) {
            this.btZ7S();
            D6x.top = D6x.top + this.MA8s.y;
            D6x.left = D6x.left + this.MA8s.x
        }
        this.hP9G = bh6b;
        this.gG8y(D6x)
    };
    wj3x.btY7R = function (d6d) {
        if (!this.hP9G) return;
        delete this.bMV2x;
        delete this.hP9G;
        this.z6t("ondragend", this.btV7O())
    };
    wj3x.gG8y = function (d6d) {
        if (!this.cns9j) {
            var bMI2x = this.bMV2x || this.btW7P();
            d6d.top = Math.min(bMI2x.y, Math.max(0, d6d.top));
            d6d.left = Math.min(bMI2x.x, Math.max(0, d6d.left))
        }
        var ch6b = this.n6h.style;
        if (this.bua7T) {
            this.btZ7S();
            d6d.top = d6d.top - this.MA8s.y;
            d6d.left = d6d.left - this.MA8s.x
        }
        if (this.Xw1x == 0 || this.Xw1x == 2) ch6b.top = d6d.top + "px";
        if (this.Xw1x == 0 || this.Xw1x == 1) ch6b.left = d6d.left + "px";
        this.z6t("onchange", d6d);
        return this
    };
    wj3x.btV7O = function () {
        return {left: parseInt(a4e.df7Y(this.n6h, "left")) || 0, top: parseInt(a4e.df7Y(this.n6h, "top")) || 0}
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = NEJ.P("nej.e"), h6b = NEJ.P("nej.v"), k6e = NEJ.P("nej.u"),
        I6C = NEJ.P("nej.ut"), N6H = NEJ.P("nej.ui"), iM9D, gk8c, b5g, K6E;
    if (!!N6H.YN2x) return;
    N6H.YN2x = NEJ.C();
    b5g = N6H.YN2x.O6I(N6H.Nn9e);
    K6E = N6H.YN2x.cs6m;
    b5g.cx6r = function () {
        this.sh2x = {};
        this.kU0x = {onchange: this.btX7Q.g6a(this)};
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.cmu9l(e6c.mask);
        this.cmo9f(e6c.align);
        this.Cf5k(e6c.title);
        if (!e6c.draggable) return;
        this.iY9P = I6C.vw3x.A6u(this.kU0x)
    };
    b5g.bD6x = function () {
        this.bH6B();
        delete this.qJ1x;
        delete this.Ra0x;
        if (!!this.Cg5l) {
            this.Cg5l.T6N();
            delete this.Cg5l
        }
        if (!!this.iY9P) {
            this.iY9P.T6N();
            delete this.iY9P
        }
    };
    b5g.cf6Z = function () {
        this.mf0x = iM9D;
        this.cd6X = gk8c
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.dl7e(this.n6h);
        this.BT5Y = i6c[1];
        this.kU0x.mbar = i6c[0];
        this.kU0x.body = this.n6h;
        h6b.s6m(i6c[2], "mousedown", this.cme9V.g6a(this));
        h6b.s6m(this.kU0x.mbar, "mousedown", this.MQ8I.g6a(this));
        this.bMs2x = a4e.dl7e(this.kU0x.mbar)[0]
    };
    b5g.cme9V = function (d6d) {
        h6b.bi6c(d6d);
        this.z6t("onclose", d6d);
        if (!d6d.stopped) {
            this.bu6o()
        }
    };
    b5g.MQ8I = function (d6d) {
        h6b.z6t(document, "click")
    };
    b5g.btX7Q = function (d6d) {
        if (!this.nJ0x) return;
        a4e.eZ8R(this.nJ0x, {top: d6d.top + "px", left: d6d.left + "px"})
    };
    b5g.Mm8e = function () {
        var ey8q = [function () {
            return 0
        }, function (oh0x, mz0x, bh6b, J6D) {
            if (J6D == "top" && window.top != window.self) {
                var ZH2x = 0, EU6O = 0;
                if (top.g_topBarHeight) ZH2x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) EU6O = top.g_bottomBarHeight;
                if (oh0x.top <= ZH2x) {
                    var btL7E = Math.max(0, (mz0x.height - (ZH2x - oh0x.top) - EU6O - bh6b.height) / 2);
                    return btL7E + ZH2x
                } else {
                    var btL7E = Math.max(0, (mz0x.height - EU6O - bh6b.height) / 2);
                    return btL7E + oh0x.top
                }
            }
            return Math.max(0, oh0x[J6D] + (mz0x[iB9s[J6D]] - bh6b[iB9s[J6D]]) / 2)
        }, function (oh0x, mz0x, bh6b, J6D) {
            return oh0x[J6D] + (mz0x[iB9s[J6D]] - bh6b[iB9s[J6D]])
        }], clV9M = ["left", "top"], iB9s = {left: "width", top: "height"};
        return function () {
            var D6x = {}, ch6b = this.n6h.style, jx9o = a4e.pd1x(), oh0x = {left: jx9o.scrollLeft, top: jx9o.scrollTop},
                mz0x = {width: jx9o.clientWidth, height: jx9o.clientHeight},
                bh6b = {width: this.n6h.offsetWidth, height: this.n6h.offsetHeight},
                do7h = {left: jx9o.clientWidth - this.n6h.offsetWidth, top: jx9o.clientHeight - this.n6h.offsetHeight};
            k6e.bd6X(clV9M, function (J6D, r6l) {
                var dt7m = ey8q[this.qJ1x[r6l]];
                if (!dt7m) return;
                D6x[J6D] = dt7m(oh0x, mz0x, bh6b, J6D)
            }, this);
            this.gG8y(D6x)
        }
    }();
    b5g.clP9G = function () {
        if (!this.Cg5l) {
            if (!this.Ra0x) return;
            this.sh2x.parent = this.gi8a;
            this.Cg5l = this.Ra0x.A6u(this.sh2x)
        }
        this.Cg5l.L6F()
    };
    b5g.We1x = function () {
        if (!!this.Cg5l) this.Cg5l.bu6o();
        K6E.We1x.apply(this, arguments)
    };
    b5g.cmu9l = function (lr0x) {
        if (!!lr0x) {
            if (lr0x instanceof N6H.Mt8l) {
                this.Cg5l = lr0x;
                return
            }
            if (k6e.gI8A(lr0x)) {
                this.Ra0x = lr0x;
                return
            }
            this.Ra0x = N6H.Mt8l;
            if (k6e.fE8w(lr0x)) this.sh2x.clazz = lr0x;
            return
        }
        this.Ra0x = null
    };
    b5g.Cf5k = function (em8e, dT8L) {
        if (!!this.bMs2x) {
            var WU1x = !dT8L ? "innerText" : "innerHTML";
            this.bMs2x[WU1x] = em8e || "标题"
        }
        return this
    };
    b5g.cmo9f = function () {
        var dh7a = /\s+/, clM9D = {left: 0, center: 1, right: 2, auto: 3},
            clL9C = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (nW0x) {
            this.qJ1x = (nW0x || "").split(dh7a);
            var cl6f = clM9D[this.qJ1x[0]];
            if (cl6f == null) cl6f = 1;
            this.qJ1x[0] = cl6f;
            var cl6f = clL9C[this.qJ1x[1]];
            if (cl6f == null) cl6f = 1;
            this.qJ1x[1] = cl6f;
            return this
        }
    }();
    b5g.L6F = function () {
        K6E.L6F.apply(this, arguments);
        this.clP9G();
        return this
    };
    iM9D = a4e.sC2x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gk8c = a4e.iw9n('<div class="' + iM9D + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c5h = NEJ.P, k6e = c5h("nej.u"), N6H = c5h("nej.ui"), btI7B;
    if (!!N6H.bag2x) return;
    N6H.bag2x = NEJ.C();
    btI7B = N6H.bag2x.O6I(N6H.WE1x);
    btI7B.bud7W = function () {
        return N6H.YN2x.A6u(this.cc6W)
    };
    btI7B.Ne8W = function () {
        N6H.bag2x.cs6m.Ne8W.apply(this, arguments);
        this.cc6W.mask = null;
        this.cc6W.title = "标题";
        this.cc6W.align = "";
        this.cc6W.draggable = !1;
        this.cc6W.onclose = null
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), bc6W = c5h("nej.ui"), m6g = c5h("nm.l"), b5g, K6E;
    m6g.ek8c = NEJ.C();
    b5g = m6g.ek8c.O6I(bc6W.bag2x);
    b5g.bl6f = function (e6c) {
        e6c.clazz = "m-layer z-show " + (e6c.clazz || "");
        e6c.nohack = true;
        e6c.draggable = true;
        this.bm6g(e6c)
    };
    b5g.dO8G = function (f6b, bG6A) {
        if (!f6b) return;
        a4e.ba6U(f6b, "display", !bG6A ? "none" : "");
        f6b.lastChild.innerText = bG6A || ""
    };
    b5g.dV8N = function (gK8C, da7T, MP8H, MS8K) {
        var dZ8R = "js-lock";
        if (da7T === undefined) return a4e.bE6y(gK8C, dZ8R);
        !da7T ? a4e.x6r(gK8C, dZ8R) : a4e.y6s(gK8C, dZ8R);
        gK8C.firstChild.innerText = !da7T ? MP8H : MS8K
    };
    m6g.ek8c.L6F = function (e6c) {
        e6c = e6c || {};
        if (e6c.mask === undefined) e6c.mask = "m-mask";
        if (e6c.parent === undefined) e6c.parent = document.body;
        if (e6c.draggable === undefined) e6c.draggable = true;
        !!this.fh8Z && this.fh8Z.T6N();
        this.fh8Z = this.A6u(e6c);
        this.fh8Z.L6F(e6c);
        return this.fh8Z
    };
    m6g.ek8c.bu6o = function () {
        !!this.fh8Z && this.fh8Z.T6N()
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), q6k = c5h("nm.d"),
        l6f = c5h("nm.x"), m6g = c5h("nm.l"), b5g, K6E;
    m6g.btH7A = NEJ.C();
    b5g = m6g.btH7A.O6I(m6g.ek8c);
    K6E = m6g.btH7A.cs6m;
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        if (e6c.bubble === undefined) e6c.bubble = true;
        this.MX8P = e6c.bubble;
        this.qz1x = e6c.message || ""
    };
    b5g.cf6Z = function () {
        this.cd6X = a4e.iw9n('<div class="lyct f-cb f-tc"></div>')
    };
    b5g.bX6R = function () {
        this.cg6a();
        h6b.s6m(this.n6h, "click", this.cN7G.g6a(this))
    };
    b5g.cN7G = function (d6d) {
        var f6b = h6b.W6Q(d6d, "d:action");
        if (!f6b) return;
        if (f6b.href) h6b.cq6k(d6d);
        if (a4e.t6n(f6b, "action") == "close") this.bu6o();
        if (this.MX8P === !1) h6b.tx2x(d6d);
        this.z6t("onaction", a4e.t6n(f6b, "action"))
    };
    b5g.L6F = function () {
        K6E.L6F.call(this);
        this.n6h.innerHTML = this.qz1x
    };
    var gF8x = a4e.ex8p('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l6f.mZ0x = function () {
        var eg8Y;
        var cA7t;
        var btG7z = function (eP8H, U6O) {
            if (k6e.gI8A(eP8H, "function") && eP8H(U6O) != -1) cA7t.T6N()
        };
        var Cl5q = function () {
            !!cA7t && cA7t.bu6o()
        };
        return function (e6c) {
            clearTimeout(eg8Y);
            e6c = e6c || {};
            e6c.title = e6c.title || "提示";
            e6c.clazz = e6c.clazz || "";
            e6c.parent = e6c.parent || document.body;
            e6c.buttons = e6c.buttons || [];
            e6c.message = a4e.bZ6T(gF8x, e6c);
            e6c.onaction = btG7z.g6a(null, e6c.action);
            if (e6c.mask === undefined) e6c.mask = true;
            if (e6c.draggable === undefined) e6c.draggable = true;
            !!cA7t && cA7t.T6N();
            cA7t = m6g.btH7A.A6u(e6c);
            cA7t.L6F();
            if (e6c.autoclose) eg8Y = setTimeout(Cl5q.g6a(null), 2e3);
            return cA7t
        }
    }();
    l6f.fs8k = function (e6c) {
        e6c = e6c || {};
        e6c.clazz = e6c.clazz || "m-layer-w1";
        e6c.buttons = [{klass: "u-btn2-2", action: "close", text: e6c.btntxt || "确定"}];
        var cA7t = l6f.mZ0x(e6c);
        return cA7t
    };
    l6f.hq9h = function (e6c) {
        e6c = e6c || {};
        e6c.clazz = e6c.clazz || "m-layer-w2";
        e6c.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e6c.btnok || "确定",
            style: e6c.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e6c.btncc || "取消", style: e6c.ccstyle || ""}];
        var cA7t = l6f.mZ0x(e6c);
        return cA7t
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u");
    a4e.clE9v = function () {
        var gH8z = /[\r\n]/gi, R6L = {};
        var clC9t = function (cI7B) {
            return (cI7B || "").replace(gH8z, "aa").length
        };
        var bMc2x = function (C6w) {
            var bg6a = R6L[C6w], bMa2x = a4e.B6v(C6w), qu1x = a4e.B6v(C6w + "-counter");
            if (!bMa2x || !bg6a) return;
            var d6d = {input: bMa2x.value};
            d6d.length = bg6a.onlength(d6d.input);
            d6d.delta = bg6a.max - d6d.length;
            bg6a.onchange(d6d);
            qu1x.innerHTML = d6d.value || "剩余" + d6d.delta + "个字"
        };
        return function (F6z, e6c) {
            var C6w = a4e.lB0x(F6z);
            if (!C6w || !!R6L[C6w]) return;
            var bg6a = NEJ.X({}, e6c);
            bg6a.onchange = bg6a.onchange || bs6m;
            bg6a.onlength = clC9t;
            if (!bg6a.max) {
                var bLU2x = parseInt(a4e.gg8Y(C6w, "maxlength")), bLS2x = parseInt(a4e.t6n(C6w, "maxLength"));
                bg6a.max = bLU2x || bLS2x || 100;
                if (!bLU2x && !!bLS2x) bg6a.onlength = k6e.fz8r
            }
            R6L[C6w] = bg6a;
            h6b.s6m(C6w, "input", bMc2x.g6a(null, C6w));
            var f6b = a4e.JS8K(C6w, {nid: bg6a.nid || "js-counter", clazz: bg6a.clazz});
            bg6a.xid = C6w + "-counter";
            f6b.id = bg6a.xid;
            bMc2x(C6w)
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), be6Y = c5h("nej.h");
    be6Y.btD7w = function (F6z, ea8S) {
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, N6H = c5h("nej.p"), a4e = c5h("nej.e"), h6b = c5h("nej.v"), be6Y = c5h("nej.h");
    if (N6H.mX0x.trident) return;
    be6Y.btD7w = function () {
        var R6L = {};
        var IR7K = function (d6d) {
            var dm7f = h6b.W6Q(d6d);
            if (!!dm7f.value) return;
            a4e.ba6U(a4e.JS8K(dm7f), "display", "none")
        };
        var DN6H = function (d6d) {
            var dm7f = h6b.W6Q(d6d);
            if (!!dm7f.value) return;
            a4e.ba6U(a4e.JS8K(dm7f), "display", "")
        };
        var clb9S = function (dm7f, ea8S) {
            var C6w = a4e.lB0x(dm7f), iX9O = a4e.JS8K(dm7f, {tag: "label", clazz: ea8S});
            iX9O.htmlFor = C6w;
            var cH7A = a4e.gg8Y(dm7f, "placeholder") || "";
            iX9O.innerText = cH7A == "null" ? "" : cH7A;
            var cj6d = dm7f.offsetHeight + "px";
            a4e.eZ8R(iX9O, {left: 0, display: !dm7f.value ? "" : "none"})
        };
        return be6Y.btD7w.eF8x(function (d6d) {
            d6d.stopped = !0;
            var bf6Z = d6d.args, dm7f = a4e.B6v(bf6Z[0]);
            if (!!R6L[dm7f.id]) return;
            clb9S(dm7f, bf6Z[1]);
            R6L[dm7f.id] = !0;
            h6b.s6m(dm7f, "blur", DN6H.g6a(null));
            h6b.s6m(dm7f, "focus", IR7K.g6a(null))
        })
    }()
})();
(function () {
    var c5h = NEJ.P, be6Y = c5h("nej.h"), a4e = c5h("nej.e"), cX7Q = c5h("nej.x");
    a4e.gs8k = cX7Q.gs8k = function (F6z, ea8S) {
        be6Y.btD7w(F6z, a4e.t6n(F6z, "holder") || ea8S || "js-placeholder");
        return this
    };
    cX7Q.isChange = !0
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        N6H = c5h("nej.ut"), hS9J;
    if (!!N6H.NK9B) return;
    N6H.NK9B = NEJ.C();
    hS9J = N6H.NK9B.O6I(N6H.cG7z);
    hS9J.cx6r = function () {
        this.cD7w();
        this.Fn6h = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hS9J.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.gv8n = document.forms[e6c.form] || a4e.B6v(e6c.form);
        this.bW6Q([[this.gv8n, "keypress", this.ckY8Q.g6a(this)]]);
        this.qz1x = e6c.message || {};
        this.qz1x.pass = this.qz1x.pass || "&nbsp;";
        var fj8b = this.pw1x(this.gv8n, "focusMode", 1);
        if (!isNaN(fj8b)) {
            this.bLM2x = {mode: fj8b, clazz: e6c.focus}
        }
        this.Cq6k = e6c.holder;
        this.Fn6h.tp.clazz = "js-mhd " + (e6c.tip || "js-tip");
        this.Fn6h.ok.clazz = "js-mhd " + (e6c.pass || "js-pass");
        this.Fn6h.er.clazz = "js-mhd " + (e6c.error || "js-error");
        this.bLH2x = e6c.invalid || "js-invalid";
        this.ckM8E(e6c);
        this.gz8r();
        if (!!this.Cr6l) this.Cr6l.focus()
    };
    hS9J.bD6x = function () {
        this.bH6B();
        delete this.qz1x;
        delete this.Cr6l;
        delete this.Fq6k;
        delete this.gv8n;
        delete this.bLA1x;
        delete this.Oj9a
    };
    hS9J.pw1x = function (f6b, xx4B, u6o) {
        var D6x = a4e.t6n(f6b, xx4B);
        switch (u6o) {
            case 1:
                return parseInt(D6x);
            case 2:
                return (D6x || "").toLowerCase() == "true";
            case 3:
                return this.btx7q(D6x)
        }
        return D6x
    };
    hS9J.Cs6m = function (D6x, u6o) {
        if (u6o == "date") return this.btx7q(D6x);
        return parseInt(D6x)
    };
    hS9J.VA1x = function () {
        var ky9p = /^button|submit|reset|image|hidden|file$/i;
        return function (f6b) {
            f6b = this.B6v(f6b) || f6b;
            var u6o = f6b.type;
            return !!f6b.name && !ky9p.test(f6b.type || "")
        }
    }();
    hS9J.ckt8l = function () {
        var ky9p = /^hidden$/i;
        return function (f6b) {
            if (this.VA1x(f6b)) return !0;
            f6b = this.B6v(f6b) || f6b;
            var u6o = f6b.type || "";
            return ky9p.test(u6o)
        }
    }();
    hS9J.btx7q = function () {
        var dh7a = /[-\/]/;
        var ckl8d = function (D6x) {
            if (!D6x) return "";
            D6x = D6x.split(dh7a);
            D6x.push(D6x.shift());
            return D6x.join("/")
        };
        return function (D6x) {
            if ((D6x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(ckl8d(D6x))
        }
    }();
    hS9J.ckY8Q = function (d6d) {
        if (d6d.keyCode != 13) return;
        this.z6t("onenter", d6d)
    };
    hS9J.ckh8Z = function (C6w, V6P) {
        var rT2x = this.Oj9a[V6P], D6x = this.pw1x(C6w, V6P);
        if (!D6x || !rT2x) return;
        this.VV1x(C6w, rT2x);
        this.btu7n(C6w, V6P, D6x)
    };
    hS9J.cjZ8R = function (C6w, V6P) {
        try {
            var bLq1x = this.pw1x(C6w, V6P);
            if (!bLq1x) return;
            var D6x = new RegExp(bLq1x);
            this.btu7n(C6w, V6P, D6x);
            this.VV1x(C6w, this.Oj9a[V6P])
        } catch (e) {
        }
    };
    hS9J.cjQ8I = function (C6w, V6P) {
        var rT2x = this.Oj9a[V6P];
        if (!!rT2x && this.pw1x(C6w, V6P, 2)) this.VV1x(C6w, rT2x)
    };
    hS9J.bts7l = function (C6w, V6P, D6x) {
        D6x = parseInt(D6x);
        if (isNaN(D6x)) return;
        this.btu7n(C6w, V6P, D6x);
        this.VV1x(C6w, this.Oj9a[V6P])
    };
    hS9J.bLm1x = function (C6w, V6P) {
        this.bts7l(C6w, V6P, this.pw1x(C6w, V6P))
    };
    hS9J.bLl1x = function (C6w, V6P) {
        this.bts7l(C6w, V6P, a4e.gg8Y(C6w, V6P))
    };
    hS9J.bLi1x = function (C6w, V6P, u6o) {
        var D6x = this.Cs6m(this.pw1x(C6w, V6P), this.pw1x(C6w, "type"));
        this.bts7l(C6w, V6P, D6x)
    };
    hS9J.cjz8r = function () {
        var gH8z = /^input|textarea$/i;
        var IR7K = function (d6d) {
            this.pq1x(h6b.W6Q(d6d))
        };
        var DN6H = function (d6d) {
            var f6b = h6b.W6Q(d6d);
            if (!this.pw1x(f6b, "ignore", 2)) {
                this.bLd1x(f6b)
            }
        };
        return function (f6b) {
            if (this.pw1x(f6b, "autoFocus", 2)) this.Cr6l = f6b;
            var qv1x = a4e.gg8Y(f6b, "placeholder");
            if (!!qv1x && qv1x != "null") a4e.gs8k(f6b, this.Cq6k);
            if (!!this.bLM2x && gH8z.test(f6b.tagName)) a4e.mN0x(f6b, this.bLM2x);
            var C6w = a4e.lB0x(f6b);
            this.cjQ8I(C6w, "required");
            this.ckh8Z(C6w, "type");
            this.cjZ8R(C6w, "pattern");
            this.bLl1x(C6w, "maxlength");
            this.bLl1x(C6w, "minlength");
            this.bLm1x(C6w, "maxLength");
            this.bLm1x(C6w, "minLength");
            this.bLi1x(C6w, "min");
            this.bLi1x(C6w, "max");
            var V6P = f6b.name;
            this.qz1x[V6P + "-tip"] = this.pw1x(f6b, "tip");
            this.qz1x[V6P + "-error"] = this.pw1x(f6b, "message");
            this.pq1x(f6b);
            var by6s = this.Fq6k[C6w], j6d = (by6s || bb6V).data || bb6V, Ot9k = this.pw1x(f6b, "counter", 2);
            if (Ot9k && (j6d.maxlength || j6d.maxLength)) {
                a4e.clE9v(C6w, {nid: this.Fn6h.tp.nid, clazz: "js-counter"})
            }
            if (!!by6s && gH8z.test(f6b.tagName)) {
                this.bW6Q([[f6b, "focus", IR7K.g6a(this)], [f6b, "blur", DN6H.g6a(this)]])
            } else if (this.pw1x(f6b, "focus", 2)) {
                this.bW6Q([[f6b, "focus", IR7K.g6a(this)]])
            }
        }
    }();
    hS9J.ckM8E = function () {
        var Fy6s = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.btx7q(v))
            }
        };
        var cju8m = {
            required: function (f6b) {
                var u6o = f6b.type, cjt8l = !f6b.value, cjp8h = (u6o == "checkbox" || u6o == "radio") && !f6b.checked;
                if (cjp8h || cjt8l) return -1
            }, type: function (f6b, e6c) {
                var dh7a = this.bLA1x[e6c.type], eQ8I = f6b.value.trim(), cjo8g = !!dh7a.test && !dh7a.test(eQ8I),
                    cjn8f = k6e.gI8A(dh7a) && !dh7a.call(this, eQ8I);
                if (cjo8g || cjn8f) return -2
            }, pattern: function (f6b, e6c) {
                if (!e6c.pattern.test(f6b.value)) return -3
            }, maxlength: function (f6b, e6c) {
                if (f6b.value.length > e6c.maxlength) return -4
            }, minlength: function (f6b, e6c) {
                if (f6b.value.length < e6c.minlength) return -5
            }, maxLength: function (f6b, e6c) {
                if (k6e.fz8r(f6b.value) > e6c.maxLength) return -4
            }, minLength: function (f6b, e6c) {
                if (k6e.fz8r(f6b.value) < e6c.minLength) return -5
            }, min: function (f6b, e6c) {
                var gR8J = this.Cs6m(f6b.value, e6c.type);
                if (isNaN(gR8J) || gR8J < e6c.min) return -6
            }, max: function (f6b, e6c) {
                var gR8J = this.Cs6m(f6b.value, e6c.type);
                if (isNaN(gR8J) || gR8J > e6c.max) return -7
            }
        };
        return function (e6c) {
            this.bLA1x = NEJ.X(NEJ.X({}, Fy6s), e6c.type);
            this.Oj9a = NEJ.X(NEJ.X({}, cju8m), e6c.attr)
        }
    }();
    hS9J.VV1x = function (C6w, yJ5O) {
        if (!k6e.gI8A(yJ5O)) return;
        var by6s = this.Fq6k[C6w];
        if (!by6s || !by6s.func) {
            by6s = by6s || {};
            by6s.func = [];
            this.Fq6k[C6w] = by6s
        }
        by6s.func.push(yJ5O)
    };
    hS9J.btu7n = function (C6w, V6P, D6x) {
        if (!V6P) return;
        var by6s = this.Fq6k[C6w];
        if (!by6s || !by6s.data) {
            by6s = by6s || {};
            by6s.data = {};
            this.Fq6k[C6w] = by6s
        }
        by6s.data[V6P] = D6x
    };
    hS9J.bLd1x = function (f6b) {
        f6b = this.B6v(f6b) || f6b;
        var by6s = this.Fq6k[a4e.lB0x(f6b)];
        if (!f6b || !by6s || !this.VA1x(f6b)) return !0;
        var o6i;
        k6e.eE8w(by6s.func, function (ey8q) {
            o6i = ey8q.call(this, f6b, by6s.data);
            return o6i != null
        }, this);
        if (o6i == null) {
            var d6d = {target: f6b, form: this.gv8n};
            this.z6t("oncheck", d6d);
            o6i = d6d.value
        }
        var d6d = {target: f6b, form: this.gv8n};
        if (o6i != null) {
            d6d.code = o6i;
            this.z6t("oninvalid", d6d);
            if (!d6d.stopped) {
                this.cjg8Y(f6b, d6d.value || this.qz1x[f6b.name + o6i])
            }
        } else {
            this.z6t("onvalid", d6d);
            if (!d6d.stopped) this.cje8W(f6b, d6d.value)
        }
        return o6i == null
    };
    hS9J.yM5R = function () {
        var cjb8T = function (Yj1x, Ym1x) {
            return Yj1x == Ym1x ? "block" : "none"
        };
        var cja8S = function (f6b, u6o, bG6A) {
            var qv1x = bKT1x.call(this, f6b, u6o);
            if (!qv1x && !!bG6A) qv1x = a4e.JS8K(f6b, this.Fn6h[u6o]);
            return qv1x
        };
        var bKT1x = function (f6b, u6o) {
            var qv1x;
            if (u6o == "tp") qv1x = a4e.B6v(f6b.name + "-tip");
            if (!qv1x) qv1x = a4e.H6B(f6b.parentNode, this.Fn6h[u6o].nid)[0];
            return qv1x
        };
        return function (f6b, bG6A, u6o) {
            f6b = this.B6v(f6b) || f6b;
            if (!f6b) return;
            u6o == "er" ? a4e.y6s(f6b, this.bLH2x) : a4e.x6r(f6b, this.bLH2x);
            var qv1x = cja8S.call(this, f6b, u6o, bG6A);
            if (!!qv1x && !!bG6A) qv1x.innerHTML = bG6A;
            k6e.eE8w(this.Fn6h, function (D6x, J6D) {
                a4e.ba6U(bKT1x.call(this, f6b, J6D), "display", cjb8T(u6o, J6D))
            }, this)
        }
    }();
    hS9J.pq1x = function (f6b, bG6A) {
        this.yM5R(f6b, bG6A || this.qz1x[f6b.name + "-tip"], "tp");
        return this
    };
    hS9J.cje8W = function (f6b, bG6A) {
        this.yM5R(f6b, bG6A || this.qz1x[f6b.name + "-pass"] || this.qz1x.pass, "ok");
        return this
    };
    hS9J.cjg8Y = function (f6b, bG6A) {
        this.yM5R(f6b, bG6A || this.qz1x[f6b.name + "-error"], "er");
        return this
    };
    hS9J.iP9G = function () {
        var gH8z = /^(?:radio|checkbox)$/i;
        var ciX8P = function (D6x) {
            return D6x == null ? "" : D6x
        };
        var bKS1x = function (D6x, f6b) {
            if (gH8z.test(f6b.type || "")) {
                f6b.checked = D6x == f6b.value
            } else {
                f6b.value = ciX8P(D6x)
            }
        };
        return function (V6P, D6x) {
            var f6b = this.B6v(V6P);
            if (!f6b) return this;
            if (f6b.tagName == "SELECT" || !f6b.length) {
                bKS1x(D6x, f6b)
            } else {
                k6e.bd6X(f6b, bKS1x.g6a(null, D6x))
            }
            return this
        }
    }();
    hS9J.B6v = function (V6P) {
        return this.gv8n.elements[V6P]
    };
    hS9J.cEL3x = function () {
        return this.gv8n
    };
    hS9J.XF1x = function () {
        var gH8z = /^radio|checkbox$/i, ky9p = /^number|date$/;
        var ciL8D = function (bz6t, f6b) {
            var V6P = f6b.name, D6x = f6b.value, by6s = bz6t[V6P], u6o = this.pw1x(f6b, "type");
            if (ky9p.test(u6o)) D6x = this.Cs6m(D6x, u6o);
            if (gH8z.test(f6b.type) && !f6b.checked) {
                D6x = this.pw1x(f6b, "value");
                if (!D6x) return
            }
            if (!!by6s) {
                if (!k6e.eJ8B(by6s)) {
                    by6s = [by6s];
                    bz6t[V6P] = by6s
                }
                by6s.push(D6x)
            } else {
                bz6t[V6P] = D6x
            }
        };
        return function () {
            var o6i = {};
            k6e.bd6X(this.gv8n.elements, function (f6b) {
                if (this.ckt8l(f6b)) ciL8D.call(this, o6i, f6b)
            }, this);
            return o6i
        }
    }();
    hS9J.Pc9T = function () {
        var ciI8A = function (f6b) {
            if (this.VA1x(f6b)) this.pq1x(f6b)
        };
        return function () {
            this.gv8n.reset();
            k6e.bd6X(this.gv8n.elements, ciI8A, this);
            return this
        }
    }();
    hS9J.cEN3x = function () {
        this.gv8n.submit();
        return this
    };
    hS9J.gz8r = function () {
        var ciD8v = function (f6b) {
            if (this.VA1x(f6b)) this.cjz8r(f6b)
        };
        return function () {
            this.Fq6k = {};
            k6e.bd6X(this.gv8n.elements, ciD8v, this);
            return this
        }
    }();
    hS9J.ciB8t = function (f6b) {
        f6b = this.B6v(f6b) || f6b;
        if (!!f6b) return this.bLd1x(f6b);
        var o6i = !0;
        k6e.bd6X(this.gv8n.elements, function (f6b) {
            var lm0x = this.ciB8t(f6b);
            o6i = o6i && lm0x
        }, this);
        return o6i
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), I6C = c5h("nej.ut"), k6e = c5h("nej.u"),
        l6f = c5h("nm.x"), m6g = c5h("nm.l"), b5g, K6E;
    m6g.Yn1x = NEJ.C();
    b5g = m6g.Yn1x.O6I(m6g.ek8c);
    K6E = m6g.Yn1x.cs6m;
    b5g.bX6R = function () {
        this.cg6a();
        h6b.s6m(this.n6h, "click", this.cN7G.g6a(this));
        h6b.s6m(document, "mousewheel", this.Cy6s.g6a(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Cy6s.g6a(this))
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        if (e6c.jst) {
            this.n6h.innerHTML = a4e.bZ6T(e6c.jst, e6c.data)
        } else if (e6c.ntp) {
            this.n6h.appendChild(a4e.dy7r(e6c.ntp))
        } else if (e6c.txt) {
            this.n6h.innerHTML = a4e.iD9u(e6c.txt)
        } else if (e6c.html) {
            this.n6h.innerHTML = e6c.html
        }
        var PG9x = this.n6h.getElementsByTagName("form");
        if (PG9x.length) {
            this.gv8n = I6C.NK9B.A6u({form: PG9x[0]})
        }
        this.FN6H = a4e.dl7e(this.n6h)[0]
    };
    b5g.bD6x = function () {
        this.z6t("ondestroy");
        this.bH6B();
        this.n6h.innerHTML = "";
        delete this.FN6H
    };
    b5g.cN7G = function (d6d) {
        var f6b = h6b.W6Q(d6d, "d:action"), j6d = this.gv8n ? this.gv8n.XF1x() : null,
            d6d = {action: a4e.t6n(f6b, "action")};
        if (j6d) d6d.data = j6d;
        if (d6d.action) {
            this.z6t("onaction", d6d);
            if (d6d.stopped) return;
            this.bu6o()
        }
    };
    b5g.Cy6s = function (d6d) {
        if (!this.FN6H) return;
        h6b.bi6c(d6d);
        var do7h = d6d.wheelDelta || -d6d.detail;
        this.FN6H.scrollTop -= do7h
    };
    l6f.kq9h = function (e6c) {
        e6c.destroyable = e6c.destroyable || true;
        e6c.title = e6c.title || "提示";
        e6c.draggable = true;
        e6c.parent = e6c.parent || document.body;
        e6c.mask = e6c.mask || true;
        var BW5b = m6g.Yn1x.A6u(e6c);
        BW5b.L6F();
        return BW5b
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bKF1x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", PR9I = {}, FP6J = {};
    for (var i = 0, l = bKF1x.length, c; i < l; i++) {
        c = bKF1x.charAt(i);
        PR9I[i] = c;
        FP6J[c] = i
    }
    var ciz8r = function (iz9q) {
        var r6l = 0, c, o6i = [];
        while (r6l < iz9q.length) {
            c = iz9q[r6l];
            if (c < 128) {
                o6i.push(String.fromCharCode(c));
                r6l++
            } else if (c > 191 && c < 224) {
                o6i.push(String.fromCharCode((c & 31) << 6 | iz9q[r6l + 1] & 63));
                r6l += 2
            } else {
                o6i.push(String.fromCharCode((c & 15) << 12 | (iz9q[r6l + 1] & 63) << 6 | iz9q[r6l + 2] & 63));
                r6l += 3
            }
        }
        return o6i.join("")
    };
    var ciq8i = function () {
        var hw9n = /\r\n/g;
        return function (j6d) {
            j6d = j6d.replace(hw9n, "\n");
            var o6i = [], my0x = String.fromCharCode(237);
            if (my0x.charCodeAt(0) < 0) for (var i = 0, l = j6d.length, c; i < l; i++) {
                c = j6d.charCodeAt(i);
                c > 0 ? o6i.push(c) : o6i.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j6d.length, c; i < l; i++) {
                c = j6d.charCodeAt(i);
                if (c < 128) o6i.push(c); else if (c > 127 && c < 2048) o6i.push(c >> 6 | 192, c & 63 | 128); else o6i.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return o6i
        }
    }();
    var KX8P = function (iz9q) {
        var r6l = 0, o6i = [], fj8b = iz9q.length % 3;
        if (fj8b == 1) iz9q.push(0, 0);
        if (fj8b == 2) iz9q.push(0);
        while (r6l < iz9q.length) {
            o6i.push(PR9I[iz9q[r6l] >> 2], PR9I[(iz9q[r6l] & 3) << 4 | iz9q[r6l + 1] >> 4], PR9I[(iz9q[r6l + 1] & 15) << 2 | iz9q[r6l + 2] >> 6], PR9I[iz9q[r6l + 2] & 63]);
            r6l += 3
        }
        if (fj8b == 1) o6i[o6i.length - 1] = o6i[o6i.length - 2] = "=";
        if (fj8b == 2) o6i[o6i.length - 1] = "=";
        return o6i.join("")
    };
    var bKA1x = function () {
        var ss2x = /\n|\r|=/g;
        return function (j6d) {
            var r6l = 0, o6i = [];
            j6d = j6d.replace(ss2x, "");
            for (var i = 0, l = j6d.length; i < l; i += 4) o6i.push(FP6J[j6d.charAt(i)] << 2 | FP6J[j6d.charAt(i + 1)] >> 4, (FP6J[j6d.charAt(i + 1)] & 15) << 4 | FP6J[j6d.charAt(i + 2)] >> 2, (FP6J[j6d.charAt(i + 2)] & 3) << 6 | FP6J[j6d.charAt(i + 3)]);
            var bq6k = o6i.length, fj8b = j6d.length % 4;
            if (fj8b == 2) o6i = o6i.slice(0, bq6k - 2);
            if (fj8b == 3) o6i = o6i.slice(0, bq6k - 1);
            return o6i
        }
    }();
    p.cEP3x = function (j6d) {
        return ciz8r(bKA1x(j6d))
    };
    p.cik8c = function (j6d) {
        var iz9q = bKA1x(j6d), dq7j = iz9q.length, iu9l;
        var r6l = 0;
        while (iu9l = iz9q[r6l]) {
            if (iu9l > 128) {
                iz9q[r6l] = iu9l - 256
            }
            r6l++
        }
        return iz9q
    };
    p.cii8a = function (j6d) {
        try {
            return window.btoa(j6d)
        } catch (ex) {
            return KX8P(ciq8i(j6d))
        }
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, h6b = c5h("nej.v"), a4e = c5h("nej.e"), v6p = c5h("nej.j"), N6H = c5h("nej.p"),
        k6e = c5h("nej.u"), m6g = c5h("nm.l"), w6q = c5h("nm.w"), bC6w = c5h("nej.ui"), q6k = c5h("nm.d"),
        l6f = c5h("nm.x"), b5g, K6E;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    m6g.bKy1x = NEJ.C();
    b5g = m6g.bKy1x.O6I(m6g.ek8c);
    b5g.cf6Z = function () {
        this.cd6X = "m-download-layer"
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.H6B(this.n6h, "j-flag");
        this.btb7U = i6c[0];
        this.bta7T = i6c[1];
        this.bKs1x = i6c[2];
        v6p.bn6h("/client/version/get", {type: "json", onload: this.chW8O.g6a(this)});
        if (N6H.Ii7b.mac) {
            a4e.x6r(this.btb7U.parentNode, "f-hide");
            a4e.y6s(this.bta7T.parentNode, "f-hide");
            a4e.y6s(this.bKs1x, "f-hide")
        } else {
            a4e.y6s(this.btb7U.parentNode, "f-hide");
            a4e.x6r(this.bta7T.parentNode, "f-hide");
            a4e.x6r(this.bKs1x, "f-hide")
        }
    };
    b5g.bl6f = function (e6c) {
        e6c.clazz = " m-layer-down";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "下载";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bm6g(e6c);
        this.bW6Q([[this.n6h, "click", this.bT6N.g6a(this)]]);
        this.et8l = TYPE_MAP[e6c.type];
        this.hb8T = e6c.id
    };
    b5g.bD6x = function () {
        this.bH6B()
    };
    b5g.CE6y = function () {
        this.bu6o()
    };
    b5g.FZ7S = function (d6d) {
        this.z6t("onok", D6x);
        this.bu6o()
    };
    b5g.bT6N = function (d6d) {
        var f6b = h6b.W6Q(d6d, "d:action");
        switch (a4e.t6n(f6b, "action")) {
            case"download":
                this.bu6o();
                window.open(a4e.t6n(f6b, "src"));
                break;
            case"orpheus":
                this.bu6o();
                location.href = "orpheus://" + k6e.cii8a(JSON.stringify({
                    type: this.et8l,
                    id: this.hb8T,
                    cmd: "download"
                }));
                break
        }
    };
    b5g.chW8O = function (d6d) {
        if ((d6d || bb6V).code == 200) {
            this.LB8t = d6d.data;
            this.btb7U.innerText = "V" + this.LB8t.mac;
            this.bta7T.innerText = "V" + this.LB8t.pc
        }
    };
    l6f.KF8x = function (e6c) {
        m6g.bKy1x.A6u(e6c).L6F()
    }
})();
(function () {
    var c5h = NEJ.P, l6f = c5h("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l6f.Gb7U = FullscreenApi
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, k6e = c5h("nej.u"), q6k = c5h("nm.d"), bP6J = {};
    q6k.B6v = function (J6D) {
        return bP6J[J6D]
    };
    q6k.nk0x = function (J6D, bg6a) {
        bP6J[J6D] = bg6a
    };
    q6k.fm8e = function (j6d) {
        k6e.eE8w(j6d, function (p6j, J6D) {
            var bg6a = bP6J[J6D] || {};
            NEJ.X(bg6a, p6j);
            bP6J[J6D] = bg6a
        })
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, be6Y = c5h("nej.h");
    be6Y.ZV2x = function (J6D) {
        return localStorage.getItem(J6D)
    };
    be6Y.ZW2x = function (J6D, D6x) {
        localStorage.setItem(J6D, D6x)
    };
    be6Y.bsW7P = function (J6D) {
        localStorage.removeItem(J6D)
    };
    be6Y.bsU7N = function () {
        localStorage.clear()
    };
    be6Y.chS8K = function () {
        var o6i = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o6i.push(localStorage.key(i));
        return o6i
    };
    be6Y.bsT7M = function () {
        (document.onstorageready || bs6m)()
    };
    be6Y.bsP7I = function () {
        return !0
    }
})();
(function () {
    var c5h = NEJ.P, N6H = c5h("nej.p"), iu9l = c5h("nej.c"), be6Y = c5h("nej.h"), tC2x;
    if (N6H.mX0x.trident || !!window.localStorage) return;
    var chK8C = function () {
        var sa2x, eg8Y;
        var bvA8s = function () {
            sa2x = document.createElement("div");
            NEJ.X(sa2x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", sa2x);
            sa2x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iu9l.B6v("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var PB9s = function () {
            eg8Y = window.clearTimeout(eg8Y);
            var hM9D = sa2x.getElementsByTagName("object")[0];
            if (!!hM9D.initStorage) {
                delete sa2x;
                tC2x = hM9D;
                tC2x.initStorage("nej-storage");
                (document.onstorageready || bs6m)();
                return
            }
            eg8Y = window.setTimeout(PB9s, 500)
        };
        return function () {
            if (!!tC2x) return;
            bvA8s();
            PB9s()
        }
    }();
    be6Y.ZV2x = be6Y.ZV2x.eF8x(function (d6d) {
        d6d.stopped = !0;
        if (!tC2x) return;
        d6d.value = tC2x.getItem(d6d.args[0])
    });
    be6Y.ZW2x = be6Y.ZW2x.eF8x(function (d6d) {
        d6d.stopped = !0;
        if (!tC2x) return;
        var bf6Z = d6d.args;
        tC2x.setItem(bf6Z[0], bf6Z[1])
    });
    be6Y.bsW7P = be6Y.bsW7P.eF8x(function (d6d) {
        d6d.stopped = !0;
        if (!tC2x) return;
        tC2x.removeItem(d6d.args[0])
    });
    be6Y.bsU7N = be6Y.bsU7N.eF8x(function (d6d) {
        d6d.stopped = !0;
        if (!!tC2x) tC2x.clear()
    });
    be6Y.bsT7M = be6Y.bsT7M.eF8x(function (d6d) {
        d6d.stopped = !0;
        chK8C()
    });
    be6Y.bsP7I = be6Y.bsP7I.eF8x(function (d6d) {
        d6d.stopped = !0;
        d6d.value = !!tC2x
    })
})();
(function () {
    var c5h = NEJ.P, k6e = c5h("nej.u"), h6b = c5h("nej.v"), be6Y = c5h("nej.h"), v6p = c5h("nej.j"),
        I6C = c5h("nej.ut"), R6L = {};
    v6p.uV3x = function (J6D, D6x) {
        var bKf1x = JSON.stringify(D6x);
        try {
            be6Y.ZW2x(J6D, bKf1x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKf1x != be6Y.ZV2x(J6D)) R6L[J6D] = D6x;
        return this
    };
    v6p.tA2x = function (J6D) {
        var j6d = JSON.parse(be6Y.ZV2x(J6D) || "null");
        return j6d == null ? R6L[J6D] : j6d
    };
    v6p.bKa1x = function (J6D, D6x) {
        var j6d = v6p.tA2x(J6D);
        if (j6d == null) {
            j6d = D6x;
            v6p.uV3x(J6D, j6d)
        }
        return j6d
    };
    v6p.Kx8p = function (J6D) {
        delete R6L[J6D];
        be6Y.bsW7P(J6D);
        return this
    };
    v6p.cEQ3x = function () {
        var bsK7D = function (p6j, J6D, bz6t) {
            delete bz6t[J6D]
        };
        return function () {
            k6e.eE8w(R6L, bsK7D);
            be6Y.bsU7N();
            return this
        }
    }();
    v6p.cER3x = function (o6i) {
        o6i = o6i || {};
        k6e.bd6X(be6Y.chS8K(), function (J6D) {
            o6i[J6D] = v6p.tA2x(J6D)
        });
        return o6i
    };
    I6C.fK8C.A6u({
        element: document, event: "storageready", oneventadd: function () {
            if (be6Y.bsP7I()) {
                document.onstorageready()
            }
        }
    });
    var chy8q = function () {
        var chx8p = function (D6x, J6D, bz6t) {
            be6Y.ZW2x(J6D, JSON.stringify(D6x));
            delete bz6t[J6D]
        };
        return function () {
            k6e.eE8w(R6L, chx8p)
        }
    }();
    h6b.s6m(document, "storageready", chy8q);
    be6Y.bsT7M()
})();
(function () {
    var c5h = NEJ.P, h6b = c5h("nej.v"), k6e = c5h("nej.u"), N6H = c5h("nej.ut"), Ko8g;
    if (!!N6H.bsJ7C) return;
    N6H.bsJ7C = NEJ.C();
    Ko8g = N6H.bsJ7C.O6I(N6H.cG7z);
    Ko8g.cx6r = function () {
        var gF8x = +(new Date), nr0x = "dat-" + gF8x;
        return function () {
            this.cD7w();
            var R6L = this.constructor[nr0x];
            if (!R6L) {
                R6L = {};
                this.constructor[nr0x] = R6L
            }
            this.S6M = R6L
        }
    }();
    Ko8g.B6v = function (J6D) {
        return this.S6M[J6D]
    };
    Ko8g.nk0x = function (J6D, D6x) {
        var ns0x = this.S6M[J6D];
        this.S6M[J6D] = D6x;
        h6b.z6t(localCache, "cachechange", {key: J6D, type: "set", oldValue: ns0x, newValue: D6x});
        return this
    };
    Ko8g.cJ7C = function (J6D) {
        var ns0x = this.S6M[J6D];
        k6e.WJ1x(this.S6M, J6D);
        h6b.z6t(localCache, "cachechange", {key: J6D, type: "delete", oldValue: ns0x, newValue: undefined});
        return ns0x
    };
    Ko8g.bbm3x = function (Er6l) {
        return NEJ.Q(this.S6M, Er6l)
    };
    window.localCache = N6H.bsJ7C.A6u();
    N6H.fK8C.A6u({element: localCache, event: "cachechange"})
})();
(function () {
    var c5h = NEJ.P, fA8s = NEJ.R, bs6m = NEJ.F, k6e = c5h("nej.u"), v6p = c5h("nej.j"), N6H = c5h("nej.ut"),
        nr0x = "dat-" + +(new Date), nt0x;
    if (!!N6H.bsI7B) return;
    N6H.bsI7B = NEJ.C();
    nt0x = N6H.bsI7B.O6I(N6H.cG7z);
    nt0x.cx6r = function () {
        this.cD7w();
        this.S6M = this.constructor[nr0x];
        if (!this.S6M) {
            this.S6M = {};
            this.S6M[nr0x + "-l"] = {};
            this.constructor[nr0x] = this.S6M
        }
    };
    nt0x.rD1x = function (J6D) {
        return this.S6M[J6D]
    };
    nt0x.pN1x = function (J6D, D6x) {
        this.S6M[J6D] = D6x
    };
    nt0x.lx0x = function (J6D, kg9X) {
        var j6d = this.rD1x(J6D);
        if (j6d == null) {
            j6d = kg9X;
            this.pN1x(J6D, j6d)
        }
        return j6d
    };
    nt0x.chr8j = function (J6D) {
        if (J6D != null) {
            delete this.S6M[J6D];
            return
        }
        k6e.eE8w(this.S6M, function (p6j, J6D) {
            if (J6D == nr0x + "-l") return;
            this.chr8j(J6D)
        }, this)
    };
    nt0x.cES3x = function (J6D) {
        if (!!v6p.Kx8p) return v6p.Kx8p(J6D)
    };
    nt0x.chp8h = function (J6D) {
        if (!!v6p.tA2x) return v6p.tA2x(J6D)
    };
    nt0x.chm8e = function (J6D, D6x) {
        if (!!v6p.uV3x) v6p.uV3x(J6D, D6x)
    };
    nt0x.Gp7i = function (J6D, kg9X) {
        var j6d = this.RL0x(J6D);
        if (j6d == null) {
            j6d = kg9X;
            this.wx4B(J6D, j6d)
        }
        return j6d
    };
    nt0x.RL0x = function (J6D) {
        var j6d = this.rD1x(J6D);
        if (j6d != null) return j6d;
        j6d = this.chp8h(J6D);
        if (j6d != null) this.pN1x(J6D, j6d);
        return j6d
    };
    nt0x.wx4B = function (J6D, D6x) {
        this.chm8e(J6D, D6x);
        this.pN1x(J6D, D6x)
    };
    nt0x.bJN1x = function (J6D) {
        if (J6D != null) {
            delete this.S6M[J6D];
            if (!!v6p.Kx8p) v6p.Kx8p(J6D);
            return
        }
        k6e.eE8w(this.S6M, function (p6j, J6D) {
            if (J6D == nr0x + "-l") return;
            this.bJN1x(J6D)
        }, this)
    };
    nt0x.cET3x = function () {
        this.bJN1x();
        return this
    };
    nt0x.cEU3x = function (J6D) {
        var j6d = this.S6M[nr0x + "-l"];
        delete j6d[J6D]
    };
    nt0x.bsD7w = function (J6D) {
        var j6d = this.S6M[nr0x + "-l"], bf6Z = fA8s.slice.call(arguments, 1);
        k6e.bd6X(j6d[J6D], function (cK7D) {
            try {
                cK7D.apply(null, bf6Z)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j6d[J6D]
    };
    nt0x.bsA7t = function (J6D, cK7D) {
        cK7D = cK7D || bs6m;
        var i6c = this.S6M[nr0x + "-l"][J6D];
        if (!i6c) {
            i6c = [cK7D];
            this.S6M[nr0x + "-l"][J6D] = i6c;
            return !1
        }
        i6c.push(cK7D);
        return !0
    };
    nt0x.cgN8F = function (i6c, bh6b, fX8P) {
        if (!i6c) return !1;
        bh6b = parseInt(bh6b) || 0;
        fX8P = parseInt(fX8P) || 0;
        if (!fX8P) {
            if (!i6c.loaded) return !1;
            fX8P = i6c.length
        }
        if (!!i6c.loaded) fX8P = Math.min(fX8P, i6c.length - bh6b);
        for (var i = 0; i < fX8P; i++) if (!i6c[bh6b + i]) return !1;
        return !0
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, k6e = c5h("nej.u"), N6H = c5h("nej.ut"), b5g, K6E;
    if (!!N6H.RU0x) return;
    N6H.RU0x = NEJ.C();
    b5g = N6H.RU0x.O6I(N6H.bsI7B);
    K6E = N6H.RU0x.cs6m;
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.wM4Q = e6c.key || "id";
        this.bk6e = e6c.data || bb6V;
        this.cgM8E = !!e6c.autogc;
        this.cgJ8B(e6c.id)
    };
    b5g.bD6x = function () {
        this.bH6B();
        if (!!this.ed8V) {
            this.bJs1x()
        }
    };
    b5g.cgJ8B = function (C6w) {
        var R6L;
        if (!!C6w) {
            R6L = this.S6M[C6w];
            if (!R6L) {
                R6L = {};
                this.S6M[C6w] = R6L
            }
        }
        R6L = R6L || this.S6M;
        R6L.hash = R6L.hash || {};
        this.SB0x = R6L
    };
    b5g.bJs1x = function () {
        this.ed8V = window.clearTimeout(this.ed8V);
        var bz6t = {};
        k6e.eE8w(this.SB0x, function (i6c, J6D) {
            if (J6D == "hash") return;
            if (!k6e.eJ8B(i6c)) return;
            k6e.bd6X(i6c, function (p6j) {
                if (!p6j) return;
                bz6t[p6j[this.wM4Q]] = !0
            }, this)
        }, this);
        k6e.eE8w(this.bcX3x(), function (p6j, C6w, dN8F) {
            if (!bz6t[C6w]) {
                delete dN8F[C6w]
            }
        })
    };
    b5g.cgC7v = function () {
        if (!!this.ed8V) {
            this.ed8V = window.clearTimeout(this.ed8V)
        }
        this.ed8V = window.setTimeout(this.bJs1x.g6a(this), 150)
    };
    b5g.CQ6K = function (p6j, bdf3x) {
        p6j = this.bJn1x(p6j, bdf3x) || p6j;
        if (!p6j) return null;
        var J6D = p6j[this.wM4Q];
        if (J6D != null) {
            var hZ9Q = this.bcX3x()[J6D];
            if (!!hZ9Q) p6j = NEJ.X(hZ9Q, p6j);
            this.bcX3x()[J6D] = p6j
        }
        delete p6j.bJj1x;
        return p6j
    };
    b5g.bJn1x = bs6m;
    b5g.bsp7i = function (J6D, p6j) {
        if (!p6j) return;
        if (!k6e.eJ8B(p6j)) {
            var i6c = this.hE9v(J6D), p6j = this.CQ6K(p6j, J6D);
            if (!!p6j) i6c.unshift(p6j);
            return
        }
        k6e.no0x(p6j, this.bsp7i.g6a(this, J6D))
    };
    b5g.SM0x = function (J6D, cy7r) {
        var i6c = this.hE9v(J6D);
        i6c.length = Math.max(i6c.length, cy7r);
        this.bso7h(J6D);
        return this
    };
    b5g.kp9g = function (J6D) {
        return this.hE9v(J6D).length
    };
    b5g.bso7h = function (J6D, oF1x) {
        this.hE9v(J6D).loaded = oF1x != !1;
        return this
    };
    b5g.bdG3x = function (J6D) {
        return !!this.hE9v(J6D).loaded
    };
    b5g.vl3x = function (J6D, i6c) {
        this.vf3x(J6D);
        this.bsk7d({key: J6D, offset: 0, limit: i6c.length + 1}, {list: i6c, total: i6c.length})
    };
    b5g.hE9v = function () {
        var GO7H = function (J6D) {
            return (J6D || "") + (!J6D ? "" : "-") + "list"
        };
        return function (J6D) {
            var J6D = GO7H(J6D), i6c = this.SB0x[J6D];
            if (!i6c) {
                i6c = [];
                this.SB0x[J6D] = i6c
            }
            return i6c
        }
    }();
    b5g.bcX3x = function () {
        var dN8F = this.SB0x.hash;
        if (!dN8F) {
            dN8F = {};
            this.SB0x.hash = dN8F
        }
        return dN8F
    };
    b5g.bsj7c = function () {
        var GO7H = function (e6c) {
            return "r-" + e6c.key
        };
        return function (e6c) {
            var ja9R = NEJ.X({}, e6c), oo1x = GO7H(ja9R);
            if (!this.bsA7t(oo1x, this.z6t.g6a(this))) {
                ja9R.rkey = oo1x;
                ja9R.onload = this.cfO7H.g6a(this, ja9R);
                this.z6t("dopullrefresh", ja9R)
            }
            return this
        }
    }();
    b5g.cfO7H = function (e6c, i6c) {
        this.bsp7i(e6c.key, i6c);
        this.bsD7w(e6c.rkey, "onpullrefresh", e6c)
    };
    b5g.lA0x = function () {
        var GO7H = function (e6c) {
            return "r-" + e6c.key + "-" + e6c.offset + "-" + e6c.limit
        };
        return function (e6c) {
            e6c = e6c || bb6V;
            var ja9R = {
                key: "" + e6c.key || "",
                ext: e6c.ext || null,
                data: e6c.data || null,
                offset: parseInt(e6c.offset) || 0,
                limit: parseInt(e6c.limit) || 0
            }, i6c = this.hE9v(ja9R.key);
            if (this.cgN8F(i6c, ja9R.offset, ja9R.limit)) {
                this.z6t("onlistload", ja9R);
                return this
            }
            var oo1x = GO7H(ja9R);
            if (!this.bsA7t(oo1x, this.z6t.g6a(this))) {
                ja9R.rkey = oo1x;
                ja9R.onload = this.bsk7d.g6a(this, ja9R);
                this.z6t("doloadlist", ja9R)
            }
            return this
        }
    }();
    b5g.bsk7d = function () {
        var HM7F = function (p6j, r6l, i6c) {
            if (!!p6j) {
                return !0
            }
            i6c.splice(r6l, 1)
        };
        return function (e6c, o6i) {
            e6c = e6c || bb6V;
            var J6D = e6c.key, bh6b = e6c.offset, bIT1x = this.hE9v(J6D);
            var i6c = o6i || [];
            if (!k6e.eJ8B(i6c)) {
                i6c = o6i.result || o6i.list || [];
                var cy7r = parseInt(o6i.total);
                if (!isNaN(cy7r) || cy7r > i6c.length) {
                    this.SM0x(J6D, cy7r)
                }
            }
            k6e.bd6X(i6c, function (p6j, r6l) {
                bIT1x[bh6b + r6l] = this.CQ6K(p6j, J6D)
            }, this);
            if (i6c.length < e6c.limit) {
                this.bso7h(J6D);
                k6e.no0x(bIT1x, HM7F)
            }
            this.bsD7w(e6c.rkey, "onlistload", e6c)
        }
    }();
    b5g.vf3x = function () {
        var HM7F = function (p6j, r6l, i6c) {
            i6c.splice(r6l, 1)
        };
        return function (J6D) {
            var i6c = this.hE9v(J6D);
            k6e.no0x(i6c, HM7F);
            this.bso7h(J6D, !1);
            if (this.cgM8E) {
                this.cgC7v()
            }
            return this
        }
    }();
    b5g.bIS1x = function (p6j, bdf3x) {
        return !p6j.bJj1x
    };
    b5g.eH8z = function (C6w) {
        return this.bcX3x()[C6w]
    };
    b5g.cEV3x = function (C6w) {
        var p6j = this.eH8z(C6w);
        if (!!p6j) p6j.bJj1x = !0
    };
    b5g.Vw1x = function () {
        var GO7H = function (e6c) {
            return "r-" + e6c.key + "-" + e6c.id
        };
        return function (e6c) {
            e6c = e6c || bb6V;
            var C6w = e6c[this.wM4Q], ja9R = {id: C6w, ext: e6c.ext, data: e6c.data || {}, key: "" + e6c.key || ""};
            p6j = this.eH8z(C6w);
            ja9R.data[this.wM4Q] = C6w;
            if (!!p6j && this.bIS1x(p6j, ja9R.key)) {
                this.z6t("onitemload", ja9R);
                return this
            }
            var oo1x = GO7H(ja9R);
            if (!this.bsA7t(oo1x, this.z6t.g6a(this))) {
                ja9R.rkey = oo1x;
                ja9R.onload = this.cfE7x.g6a(this, ja9R);
                this.z6t("doloaditem", ja9R)
            }
            return this
        }
    }();
    b5g.cfE7x = function (e6c, p6j) {
        e6c = e6c || bb6V;
        this.CQ6K(p6j, e6c.key);
        this.bsD7w(e6c.rkey, "onitemload", e6c)
    };
    b5g.jA9r = function (e6c) {
        e6c = NEJ.X({}, e6c);
        e6c.onload = this.xE4I.g6a(this, e6c);
        this.z6t("doadditem", e6c)
    };
    b5g.xE4I = function (e6c, p6j) {
        var J6D = e6c.key;
        p6j = this.CQ6K(p6j, J6D);
        if (!!p6j) {
            var eY8Q = 0, i6c = this.hE9v(J6D);
            if (!e6c.push) {
                eY8Q = -1;
                var bh6b = e6c.offset || 0;
                i6c.splice(bh6b, 0, p6j)
            } else if (i6c.loaded) {
                eY8Q = 1;
                i6c.push(p6j)
            } else {
                i6c.length++
            }
        }
        var d6d = {key: J6D, flag: eY8Q, data: p6j, action: "add", ext: e6c.ext};
        this.z6t("onitemadd", d6d);
        return d6d
    };
    b5g.Jq7j = function (e6c) {
        e6c = NEJ.X({}, e6c);
        e6c.onload = this.bsh7a.g6a(this, e6c);
        this.z6t("dodeleteitem", e6c)
    };
    b5g.bsh7a = function (e6c, bIP1x) {
        var p6j, J6D = e6c.key;
        if (!!bIP1x) {
            p6j = this.eH8z(e6c.id) || null;
            var C6w = e6c.id, cfx7q = this.wM4Q, i6c = this.hE9v(J6D), r6l = k6e.dj7c(i6c, function (hZ9Q) {
                return !!hZ9Q && hZ9Q[cfx7q] == C6w
            });
            if (r6l >= 0) i6c.splice(r6l, 1)
        }
        var d6d = {key: J6D, data: p6j, action: "delete", ext: e6c.ext};
        this.z6t("onitemdelete", d6d);
        return d6d
    };
    b5g.VZ1x = function (e6c) {
        e6c = NEJ.X({}, e6c);
        e6c.onload = this.cfp7i.g6a(this, e6c);
        this.z6t("doupdateitem", e6c)
    };
    b5g.cfp7i = function (e6c, p6j) {
        var J6D = e6c.key;
        if (!!p6j) p6j = this.CQ6K(p6j, J6D);
        var d6d = {key: J6D, data: p6j, action: "update", ext: e6c.ext};
        this.z6t("onitemupdate", d6d);
        return d6d
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, k6e = c5h("nej.u"), N6H = c5h("nej.ut"), b5g;
    if (!!N6H.bsd7W) return;
    N6H.bsd7W = NEJ.C();
    b5g = N6H.bsd7W.O6I(N6H.RU0x);
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.bwb8T({
            doloadlist: this.Wf1x.g6a(this),
            doloaditem: this.bsc7V.g6a(this),
            doadditem: this.bID1x.g6a(this),
            dodeleteitem: this.Wj1x.g6a(this),
            doupdateitem: this.Wn1x.g6a(this),
            dopullrefresh: this.bIC1x.g6a(this)
        })
    };
    b5g.Wf1x = bs6m;
    b5g.bIC1x = bs6m;
    b5g.bsc7V = bs6m;
    b5g.bID1x = bs6m;
    b5g.Wj1x = bs6m;
    b5g.Wn1x = bs6m
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, k6e = c5h("nej.u"), h6b = c5h("nej.v"), v6p = c5h("nej.j"),
        I6C = c5h("nej.ut"), l6f = c5h("nm.x"), q6k = c5h("nm.d"), b5g, K6E;
    q6k.hK9B = NEJ.C();
    b5g = q6k.hK9B.O6I(I6C.bsd7W);
    b5g.co6i = function () {
        var xX4b = location.protocol + "//" + location.host;
        var cfc7V = function (br6l, j6d) {
            var bz6t = {conf: {}, data: {}, urls: []};
            k6e.bd6X(br6l, function (J6D, r6l, i6c) {
                var bg6a = q6k.B6v(J6D);
                if (!bg6a) return;
                var brY7R = bIv1x(bg6a.url, j6d[J6D]);
                bz6t.urls.push(brY7R);
                bz6t.conf[brY7R] = bg6a;
                bz6t.data[brY7R] = JSON.stringify(j6d[J6D] == null ? "" : j6d[J6D])
            });
            return bz6t
        };
        var bIv1x = function (Y6S, j6d) {
            return Y6S.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j6d[$2] || $1
            })
        };
        var bIt1x = function (bg6a, e6c, d6d) {
            h6b.z6t(window, "requesterror", d6d);
            if (!!d6d.stopped) return;
            var CV6P = bg6a.onerror || e6c.onerror;
            if (k6e.fE8w(CV6P)) {
                this.z6t(CV6P, d6d, e6c)
            } else {
                (CV6P || bs6m).call(this, d6d, e6c)
            }
            var d6d = {result: d6d, option: e6c};
            this.z6t("onerror", d6d);
            if (!d6d.stopped) (bg6a.onmessage || bs6m).call(this, d6d.result.code, d6d.result)
        };
        var bIq1x = function (Q6K, bg6a, e6c) {
            var o6i = Q6K;
            if (k6e.gI8A(bg6a.format)) {
                o6i = bg6a.format.call(this, Q6K, e6c)
            }
            return o6i
        };
        var zM5R = function (Q6K, bg6a, e6c, uQ3x) {
            if (k6e.gI8A(bg6a.beforeload)) {
                bg6a.beforeload.call(this, Q6K, e6c, bg6a)
            }
            if (Q6K && Q6K.code != null && Q6K.code != 200) {
                bIt1x.call(this, bg6a, e6c, {
                    key: e6c.key,
                    code: Q6K.code,
                    message: Q6K.message || "",
                    captchaId: Q6K.captchaId,
                    ext: Q6K
                });
                return
            }
            var o6i = Q6K;
            if (!uQ3x) {
                o6i = bIq1x.call(this, Q6K, bg6a, e6c)
            } else if (k6e.gI8A(bg6a.format)) {
                var brS7L = [];
                k6e.bd6X(uQ3x.urls, function (Y6S) {
                    brS7L.push(bIq1x.call(this, Q6K[Y6S], uQ3x.conf[Y6S], e6c))
                }, this);
                brS7L.push(e6c);
                o6i = bg6a.format.apply(this, brS7L)
            }
            var sx2x = bg6a.onload || e6c.onload, bIn1x = bg6a.finaly || e6c.finaly || bs6m;
            if (k6e.fE8w(sx2x)) {
                bIn1x.call(this, this.z6t(sx2x, o6i), e6c)
            } else {
                bIn1x.call(this, (sx2x || bs6m).call(this, o6i), e6c)
            }
        };
        var Bz5E = function (bg6a, e6c, cb6V) {
            bIt1x.call(this, bg6a, e6c, {key: e6c.key, code: cb6V.code || -1, message: cb6V.message || ""})
        };
        return function (bg6a, e6c) {
            if (k6e.fE8w(bg6a)) {
                bg6a = q6k.B6v(bg6a)
            }
            delete e6c.value;
            (bg6a.filter || bs6m).call(this, e6c, bg6a);
            var Q6K = e6c.value;
            if (!!Q6K) {
                zM5R.call(this, Q6K, bg6a, e6c);
                return
            }
            var Y6S, j6d = e6c.data || bb6V, yj4n = {
                cookie: !0,
                type: bg6a.rtype || "json",
                method: bg6a.type || "POST",
                onerror: Bz5E.g6a(this, bg6a, e6c),
                noescape: bg6a.noescape
            };
            if (k6e.eJ8B(bg6a.url)) {
                var uQ3x = cfc7V(bg6a.url, j6d);
                Y6S = xX4b + "/api/batch";
                yj4n.data = k6e.cF7y(uQ3x.data);
                yj4n.onload = zM5R.eu8m(this, bg6a, e6c, uQ3x);
                yj4n.headers = {"batch-method": "POST"};
                delete uQ3x.data
            } else {
                var kr9i = bg6a.url.indexOf(":") < 0 ? xX4b : "";
                Y6S = bIv1x(kr9i + bg6a.url, j6d);
                yj4n.data = k6e.cF7y(e6c.data);
                yj4n.onload = zM5R.eu8m(this, bg6a, e6c)
            }
            if (yj4n.method == "GET") yj4n.query = yj4n.data;
            return v6p.bn6h(Y6S, yj4n)
        }
    }();
    b5g.GS7L = function () {
        var gH8z = /^get|list|pull$/i;
        return function (bIm1x, e6c) {
            var J6D = e6c.key, bg6a = q6k.B6v(J6D.split("-")[0] + "-" + bIm1x);
            if (gH8z.test(bIm1x) && J6D.indexOf("post-") < 0) bg6a.type = "GET";
            this.co6i(bg6a, e6c)
        }
    }();
    b5g.cEY3x = function (J6D, i6c) {
        var cy7r = i6c.length;
        this.bsk7d({key: J6D, offset: 0, limit: cy7r + 1}, {list: i6c, total: cy7r})
    };
    b5g.Wf1x = function (e6c) {
        this.GS7L("list", e6c)
    };
    b5g.bsc7V = function (e6c) {
        this.GS7L("get", e6c)
    };
    b5g.bIC1x = function (e6c) {
        this.GS7L("pull", e6c)
    };
    b5g.bID1x = function (e6c) {
        this.GS7L("add", e6c)
    };
    b5g.Wj1x = function (e6c) {
        this.GS7L("del", e6c)
    };
    b5g.Wn1x = function (e6c) {
        this.GS7L("update", e6c)
    };
    b5g.ceE7x = function (p6j) {
        this.CQ6K(p6j)
    };
    I6C.fK8C.A6u({element: window, event: "requesterror"})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), I6C = c5h("nej.ut"), q6k = c5h("nm.d"), brR7K = {},
        b5g, K6E;
    var va3x = function (o6i, e6c) {
        o6i.conf = e6c.conf;
        return o6i
    };
    q6k.fm8e({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (Q6K, e6c) {
                return va3x({mv: Q6K}, e6c)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (o6i, e6c) {
                if (!!o6i.songs && o6i.songs.length > 0) o6i.song = o6i.songs[0]; else o6i.song = brR7K;
                delete o6i.songs;
                return va3x(o6i, e6c)
            }, filter: function (e6c) {
                e6c.data.ids = "[" + e6c.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: va3x},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: va3x},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (o6i, e6c) {
                o6i.playlist = o6i.result;
                delete o6i.result;
                return va3x(o6i, e6c)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: va3x},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: va3x},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: va3x},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e6c) {
                var i6c = e6c.data.id.split("-");
                e6c.data.radioId = i6c[0];
                e6c.data.asc = i6c[1] == 2;
                e6c.data.limit = 1e3;
                delete e6c.data.id
            }, format: function (Q6K, e6c) {
                var ceC7v = {id: e6c.data.radioId, programs: Q6K.programs};
                return va3x({djradio: ceC7v}, e6c)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: va3x},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e6c) {
                e6c.data.lv = 0;
                e6c.data.tv = 0
            }, format: function (o6i, e6c) {
                var xe4i = {lyric: "", nolyric: true};
                if (o6i.code == 200 && o6i.lrc && o6i.lrc.lyric) {
                    xe4i.lyric = o6i.lrc.lyric;
                    xe4i.nolyric = false
                } else {
                    xe4i.nolyric = true
                }
                return va3x({lyric: xe4i}, e6c)
            }
        }
    });
    q6k.xc4g = NEJ.C();
    b5g = q6k.xc4g.O6I(q6k.hK9B);
    b5g.ceA7t = function (u6o, cR7K) {
        return this.rD1x(this.Xe1x(u6o, cR7K))
    };
    b5g.TK0x = function (u6o, cR7K, e6c) {
        e6c = e6c || {};
        var j6d = this.rD1x(this.Xe1x(u6o, cR7K));
        if (j6d && (u6o != 13 && u6o != 19 || e6c.conf && e6c.conf.useCache)) {
            this.z6t("onresourceload", u6o, cR7K, j6d, e6c.conf);
            return
        }
        e6c.data = {id: cR7K};
        e6c.onload = this.cey7r.g6a(this, u6o, cR7K);
        e6c.onerror = this.cex7q.g6a(this, u6o, cR7K);
        this.co6i("res-" + this.CX6R(u6o) + "-get", e6c)
    };
    b5g.cey7r = function (u6o, cR7K, o6i) {
        var j6d = o6i[this.CX6R(u6o)];
        this.pN1x(this.Xe1x(u6o, cR7K), j6d);
        this.z6t("onresourceload", u6o, cR7K, j6d, o6i.conf)
    };
    b5g.cex7q = function (u6o, cR7K, o6i, e6c) {
        if (o6i.code != 404) {
            this.z6t("onresourceerror", u6o, cR7K, o6i.code);
            return
        }
        this.pN1x(this.Xe1x(u6o, cR7K), brR7K);
        this.z6t("onresourceload", u6o, cR7K, brR7K, e6c.conf)
    };
    b5g.cEZ3x = function (u6o, e6c) {
        this.co6i("res-" + this.CX6R(u6o) + "-play", e6c)
    };
    b5g.Xe1x = function (u6o, cR7K) {
        return "res-" + this.CX6R(u6o) + "-" + cR7K
    };
    b5g.CX6R = function (u6o) {
        var bz6t = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz6t[u6o]
    };
    q6k.xc4g.IS7L = function (u6o, cR7K) {
        if (!this.fh8Z) this.fh8Z = q6k.xc4g.A6u({});
        return this.fh8Z.ceA7t(u6o, cR7K)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        q6k = c5h("nm.d"), l6f = c5h("nm.x"), brO7H = /^[1-9][0-9]*$/, b5g, K6E;
    var LOCAL_LOG_KEY = "local-log";
    q6k.fm8e({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    q6k.hQ9H = NEJ.C();
    b5g = q6k.hQ9H.O6I(q6k.hK9B);
    b5g.fu8m = function (U6O, bg6a) {
        if (!U6O || !bg6a) return;
        if (k6e.fE8w(bg6a)) {
            try {
                bg6a = JSON.parse(bg6a)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a4e)
                }
            }
        }
        if (!k6e.lO0x(bg6a)) return;
        this.co6i("bi-log", {data: {logs: JSON.stringify([{action: U6O, json: bg6a}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U6O + ", json=" + JSON.stringify(bg6a))
        }
    };
    b5g.XJ1x = function (nV0x) {
        if (!k6e.eJ8B(nV0x)) return;
        this.co6i("bi-batch-log", {data: {logs: JSON.stringify(nV0x)}})
    };
    b5g.bIe1x = function (bg6a) {
        if (!bg6a || !bg6a.type || !bg6a.rid) return;
        var nQ0x = bg6a.type;
        if (brO7H.test(nQ0x)) {
            nQ0x = this.CX6R(nQ0x)
        }
        if (!nQ0x) return;
        if (nQ0x == "playlist") nQ0x = "list";
        this.fu8m("search", {type: nQ0x, id: bg6a.rid || null, keyword: bg6a.keyword || null})
    };
    b5g.TW0x = function () {
        var cep7i = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bg6a) {
            if (!bg6a || !bg6a.type || !bg6a.rid) return;
            if (bg6a.play === undefined) bg6a.play = true;
            var nQ0x = bg6a.type;
            if (brO7H.test(nQ0x)) {
                nQ0x = this.CX6R(nQ0x)
            }
            if (!nQ0x) return;
            if (nQ0x == "playlist") nQ0x = "list";
            var Q6K = {id: bg6a.rid, type: nQ0x};
            if (nQ0x == "song" && bg6a.source) {
                Q6K.source = this.bHZ1x(bg6a.source);
                if (!!bg6a.sourceid) Q6K.sourceid = bg6a.sourceid
            }
            this.fu8m(!bg6a.play ? "addto" : "play", Q6K);
            if (nQ0x == "song" && bg6a.hash && bg6a.hash.match(cep7i)) {
                this.fu8m(!bg6a.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b5g.brI7B = function (C6w, bA6u, eb8T, Hf7Y) {
        var Q6K = {type: "song", wifi: 0, download: 0};
        var cei7b = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        Q6K.id = C6w;
        Q6K.time = Math.round(bA6u);
        Q6K.end = k6e.fE8w(Hf7Y) ? Hf7Y : cei7b[Hf7Y] || "";
        if (eb8T && eb8T.fid) {
            Q6K.source = this.bHZ1x(eb8T.fid);
            Q6K.sourceId = eb8T.fdata
        }
        this.fu8m("play", Q6K)
    };
    b5g.bHX1x = function (u6o, cR7K) {
        if (!u6o || !cR7K) return;
        if (brO7H.test(u6o)) u6o = this.CX6R(u6o);
        if (u6o != "playlist" && u6o != "dj") return;
        var bg6a = q6k.B6v("plus-" + u6o + "-count");
        if (!bg6a) return !1;
        this.co6i(bg6a, {data: {id: cR7K}});
        var R6L = this.lx0x("play-hist-" + u6o, []);
        if (k6e.dj7c(R6L, cR7K) < 0) {
            R6L.push(cR7K);
            return !0
        }
        return !1
    };
    b5g.CX6R = function (u6o) {
        var bz6t = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bz6t[u6o]
    };
    b5g.bHZ1x = function (II7B) {
        var bz6t = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz6t[II7B]
    };
    b5g.bHW1x = function (hg9X) {
        var nV0x = this.Gp7i(LOCAL_LOG_KEY, []);
        nV0x.unshift(hg9X);
        if (nV0x.length > 200) {
            nV0x.length = 200
        }
        this.wx4B(LOCAL_LOG_KEY, nV0x)
    };
    b5g.cef7Y = function () {
        return this.RL0x(LOCAL_LOG_KEY)
    };
    b5g.el8d = function (Q6K) {
        this.fu8m("play", Q6K)
    };
    var bHU1x = q6k.hQ9H.go8g();
    l6f.rV2x = function () {
        bHU1x.fu8m.apply(bHU1x, arguments)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), v6p = c5h("nej.j"), I6C = c5h("nej.ut"),
        a4e = c5h("nej.e"), k6e = c5h("nej.u"), m6g = c5h("nm.l"), l6f = c5h("nm.x"), q6k = c5h("nm.d");
    var FullscreenApi = l6f.Gb7U || {};
    if (!q6k.xc4g) return;
    var R6L = q6k.xc4g.A6u({onresourceload: cea7T});
    var vA3x = q6k.hQ9H.go8g();

    function cea7T(u6o, cR7K, j6d, bg6a) {
        var i6c = [];
        switch (parseInt(u6o)) {
            case 2:
                i6c = j6d;
                break;
            case 13:
                i6c = j6d.tracks;
                break;
            case 18:
                i6c.push(j6d);
                break;
            case 19:
                i6c = j6d.songs;
                break;
            case 21:
                if (j6d.mp && j6d.mp.fee && j6d.mp.pl <= 0) {
                    l6f.Uq0x(j6d.data.id, j6d.mp.fee);
                    return
                }
                break
        }
        if (l6f.Iw7p(i6c, true, null, u6o == 19 ? {source: "album", sourceid: cR7K} : null) == 0) {
            return
        }
        l6f.fs8k({clazz: "m-layer-w2", bubble: !1, message: bg6a.message})
    }

    function cdX7Q(d6d, nN0x, zE5J, ew8o) {
        ew8o = ew8o || {};
        if (d6d.action == "ok") {
            if (zE5J) {
                location.dispatch2("/payfee?songId=" + zE5J)
            } else {
                location.dispatch2("/payfee?fee=" + nN0x || 1)
            }
            vA3x.fu8m("click", {
                type: "tobuyvip",
                name: "box",
                source: ew8o.source || "song",
                sourceid: ew8o.sourceid || zE5J || 0
            })
        } else if (d6d.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zE5J);
            vA3x.fu8m("click", {
                type: "tobuyone",
                name: "box",
                source: ew8o.source || "song",
                sourceid: ew8o.sourceid || zE5J || 0
            })
        }
    }

    function Uy0x(bG6A) {
        l6f.fs8k({clazz: "m-layer-w2", bubble: !1, message: bG6A, btntxt: "知道了"})
    }

    function UD0x(bG6A, Q6K) {
        Uy0x((Q6K || bb6V).toast || bG6A)
    }

    l6f.is9j = function (bG6A, C6w, u6o, cdW7P, bj6d) {
        bG6A = bG6A || "由于版权保护，您所在的地区暂时无法使用。";
        if (cdW7P && bj6d && bj6d.privilege && bj6d.privilege.toast) {
            v6p.bn6h("/api/song/toast", {
                query: {id: bj6d.id},
                type: "json",
                onload: UD0x.g6a(this, bG6A),
                onerror: UD0x.g6a(this, bG6A)
            })
        } else if (C6w && u6o) {
            R6L.TK0x(u6o, C6w, {conf: {message: bG6A, useCache: u6o != 18}})
        } else {
            Uy0x(bG6A)
        }
    };
    l6f.vg3x = function (nN0x, zE5J, u6o, ew8o, nd0x) {
        var bP6J, pg1x = "m-popup-info", brB7u = "单首购买", brw7p = "马上去开通", cU7N = "唱片公司要求，当前歌曲须付费使用。", bHG1x = true;
        try {
            bP6J = top.api.feeMessage || {}
        } catch (e) {
            bP6J = {}
        }
        if (nN0x == 1 || nN0x == 8 || nN0x == 16) {
            if (u6o == "song") {
                pg1x = "m-popup-song-buy";
                cU7N = bP6J["vip2"] || cU7N;
                brw7p = bP6J["vip2button"] || "包月购买";
                brB7u = bP6J["vip2link"] || brB7u;
                if (nd0x && nd0x.flag !== undefined) {
                    var br6l = nd0x.flag.toString(2).split("");
                    if (parseInt(br6l.pop(), 10) == 1) {
                        bHG1x = false
                    }
                }
            } else {
                cU7N = bP6J["vip"] || cU7N
            }
        } else if (nN0x == 4) {
            cU7N = bP6J["album"] || cU7N;
            brw7p = "立即订购"
        } else {
            cU7N = bP6J["unknow"] || cU7N
        }
        l6f.kq9h({
            clazz: "m-layer-w5",
            html: a4e.bZ6T(pg1x, {songTxt: brB7u, tip: cU7N, oktext: brw7p, cctext: "以后再说", showSongText: bHG1x}),
            onaction: cdX7Q.eu8m(null, nN0x, zE5J, ew8o)
        })
    };
    l6f.bHE1x = function (hz9q, gl8d) {
        l6f.hq9h({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u6o) {
                if (u6o == "ok") {
                    l6f.KF8x({id: hz9q, type: gl8d})
                }
            }
        })
    };
    l6f.Uq0x = function (kv9m, nN0x) {
        var bP6J, cU7N = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bP6J = top.api.feeMessage || {}
        } catch (e) {
            bP6J = {}
        }
        if (nN0x == 1 || nN0x == 8) {
            cU7N = bP6J["vip"] || cU7N
        } else if (nN0x == 4) {
            cU7N = bP6J["album"] || cU7N
        } else {
            cU7N = bP6J["unknow"] || cU7N
        }
        return l6f.kq9h({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a4e.bZ6T("m-popup-info", {tip: cU7N, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d6d) {
                if (d6d.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kv9m);
                    vA3x.fu8m("click", {type: "tobuyone", name: "box", source: "mv", sourceid: kv9m || 0})
                }
            }
        })
    };
    l6f.Iw7p = function () {
        function compareFee(cdG7z, cdF7y) {
            var bz6t = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bz6t[cdG7z] || 0) - (bz6t[cdF7y] || 0)
        }

        return function (i6c, cU7N, rY2x, ew8o) {
            rY2x = rY2x || {};
            var yJ5O = [], Ik7d = {}, bHD1x = 0, bHC1x = 0, Ij7c = null;
            if (!i6c || !i6c.length) return yJ5O;
            k6e.bd6X(i6c, function (bj6d) {
                var fB8t = l6f.qn1x(bj6d);
                if (fB8t == 0) {
                    yJ5O.push(bj6d)
                } else if (fB8t == 10) {
                    if (bj6d.privilege) {
                        bj6d.fee = bj6d.privilege.fee
                    }
                    if (compareFee(bj6d.fee, Ik7d.fee) > 0) {
                        Ik7d = bj6d
                    }
                } else if (fB8t == 11) {
                    ++bHD1x;
                    if (!rY2x.play) yJ5O.push(bj6d)
                } else if (fB8t == 1e3) {
                    ++bHC1x;
                    if (!rY2x.download) yJ5O.push(bj6d)
                } else if (fB8t == 100) {
                    Ij7c = bj6d
                }
            });
            if (yJ5O.length == 0 && cU7N) {
                if (bHD1x == i6c.length) {
                    var sH2x = i6c[0].privilege || {};
                    if (sH2x.payed) {
                        l6f.is9j("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l6f.vg3x(sH2x.fee, null, null, ew8o)
                    }
                } else if (bHC1x == i6c.length) {
                    l6f.is9j("因版权方要求，该歌曲不支持下载")
                } else if (Ik7d.id) {
                    l6f.vg3x(Ik7d.fee, Ik7d.id, null, ew8o, Ik7d.privilege)
                } else {
                    if (Ij7c && i6c.length == 1 && Ij7c.privilege && Ij7c.privilege.st < 0 && Ij7c.privilege.toast) {
                        l6f.is9j(null, null, null, true, Ij7c)
                    } else {
                        l6f.is9j()
                    }
                }
            }
            return yJ5O
        }
    }();
    l6f.qn1x = function (bj6d) {
        if (!bj6d) return 0;
        var fB8t = bj6d.privilege;
        if (bj6d.program) return 0;
        if (window.GAbroad) return 100;
        if (fB8t) {
            if (fB8t.st != null && fB8t.st < 0) {
                return 100
            }
            if (fB8t.fee > 0 && fB8t.fee != 8 && fB8t.payed == 0 && fB8t.pl <= 0) return 10;
            if (fB8t.fee == 16) return 11;
            if ((fB8t.fee == 0 || fB8t.payed) && fB8t.pl > 0 && fB8t.dl == 0) return 1e3;
            if (fB8t.pl == 0 && fB8t.dl == 0) return 100;
            return 0
        } else {
            var es8k = bj6d.status != null ? bj6d.status : bj6d.st != null ? bj6d.st : 0;
            if (bj6d.status >= 0) return 0;
            if (bj6d.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, fA8s = NEJ.R, a4e = c5h("nej.e"), h6b = c5h("nej.v"),
        k6e = c5h("nej.u"), I6C = c5h("nej.ut"), w6q = c5h("nm.w"), b5g;
    if (!!w6q.bHA1x) return;
    var cl6f = ~[];
    cl6f = {
        bHx1x: ++cl6f,
        cdu7n: (![] + "")[cl6f],
        kx9o: ++cl6f,
        Ic7V: (![] + "")[cl6f],
        baw2x: (cl6f[cl6f] + "")[cl6f],
        bHu0x: ++cl6f,
        cFd3x: ({} + "")[cl6f],
        cdn7g: (cl6f[cl6f] + "")[cl6f],
        cdl7e: (![] + "")[cl6f],
        Vq1x: ++cl6f,
        baH2x: (!"" + "")[cl6f],
        cFe3x: ++cl6f,
        Ah5m: ++cl6f,
        bHo0x: ({} + "")[cl6f],
        wO4S: ++cl6f,
        cdb7U: ++cl6f,
        cFf3x: ++cl6f,
        cFg3x: ++cl6f
    };
    cl6f.LC8u = (cl6f.LC8u = cl6f + "")[cl6f.Ah5m] + (cl6f.HQ7J = cl6f.LC8u[cl6f.kx9o]) + (cl6f.bbl3x = (cl6f.HK7D + "")[cl6f.kx9o]) + (!cl6f + "")[cl6f.Vq1x] + (cl6f.HJ7C = cl6f.LC8u[cl6f.wO4S]) + (cl6f.HK7D = (!"" + "")[cl6f.kx9o]) + (ccU6O = (!"" + "")[cl6f.bHu0x]) + cl6f.LC8u[cl6f.Ah5m] + cl6f.HJ7C + cl6f.HQ7J + cl6f.HK7D;
    cl6f.bbl3x = cl6f.HK7D + (!"" + "")[cl6f.Vq1x] + cl6f.HJ7C + ccU6O + cl6f.HK7D + cl6f.bbl3x;
    cl6f.HK7D = cl6f.bHx1x[cl6f.LC8u][cl6f.LC8u];
    w6q.bHA1x = cl6f
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, h6b = c5h("nej.v"), a4e = c5h("nej.e"), N6H = c5h("nej.ui"), b5g;
    if (!!N6H.bbu3x) return;
    var iM9D = a4e.sC2x(".#<uispace>{position:absolute;background:#fff;}");
    N6H.bbu3x = NEJ.C();
    b5g = N6H.bbu3x.O6I(N6H.Nn9e);
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.bW6Q([[document, "click", this.tu2x.g6a(this)]]);
        this.ccR6L = !!e6c.nostop;
        this.bHk0x = {top: e6c.top, left: e6c.left}
    };
    b5g.bD6x = function () {
        delete this.yw4A;
        delete this.brp7i;
        delete this.qJ1x;
        delete this.bHf0x;
        delete this.bbJ3x;
        delete this.bHk0x;
        this.bH6B()
    };
    b5g.cf6Z = function () {
        this.mf0x = iM9D
    };
    b5g.bX6R = function () {
        this.cg6a();
        this.BT5Y = this.n6h;
        h6b.s6m(this.n6h, "click", this.ccI6C.g6a(this))
    };
    b5g.tu2x = function (d6d) {
        if (d6d.button != 2) this.bu6o()
    };
    b5g.ccI6C = function (d6d) {
        if (this.ccR6L) return;
        h6b.tx2x(d6d);
        var F6z = h6b.W6Q(d6d);
        if (F6z.tagName == "A") h6b.cq6k(d6d)
    };
    b5g.ccA6u = function () {
        var dh7a = /\s+/i;
        return function (nW0x) {
            nW0x = (nW0x || "").trim().toLowerCase().split(dh7a);
            nW0x[0] = nW0x[0] || "bottom";
            nW0x[1] = nW0x[1] || "left";
            this.qJ1x = nW0x
        }
    }();
    b5g.ccz6t = function (nW0x) {
        var o6i = {}, nh0x = this.brp7i, cFh3x = a4e.pd1x(), cz7s = this.n6h.offsetWidth, cj6d = this.n6h.offsetHeight;
        switch (nW0x[0]) {
            case"top":
                o6i.top = nh0x.top - cj6d;
                o6i.left = nW0x[1] == "right" ? nh0x.left + nh0x.width - cz7s : nh0x.left;
                break;
            case"left":
                o6i.left = nh0x.left - cz7s;
                o6i.top = nW0x[1] == "bottom" ? nh0x.top + nh0x.height - cj6d : nh0x.top;
                break;
            case"right":
                o6i.left = nh0x.left + nh0x.width;
                o6i.top = nW0x[1] == "bottom" ? nh0x.top + nh0x.height - cj6d : nh0x.top;
                break;
            default:
                o6i.top = nh0x.top + nh0x.height;
                o6i.left = nW0x[1] == "right" ? nh0x.left + nh0x.width - cz7s : nh0x.left;
                break
        }
        return o6i
    };
    b5g.Mm8e = function () {
        if (!this.bHf0x) {
            this.gG8y(this.bHk0x);
            return
        }
        if (!!this.bbJ3x) {
            this.gG8y(this.yw4A);
            return
        }
        if (!!this.brp7i) this.gG8y(this.ccz6t(this.qJ1x))
    };
    b5g.ccw6q = function (F6z, do7h, d6d) {
        do7h = do7h || bb6V;
        var bGV0x = a4e.pd1x(), cX7Q = h6b.jH9y(d6d) + (do7h.left || 0), hB9s = h6b.me0x(d6d) + (do7h.top || 0),
            cz7s = F6z.offsetWidth + (do7h.right || 0), cj6d = F6z.offsetHeight + (do7h.bottom || 0),
            HZ7S = bGV0x.scrollWidth, bri7b = bGV0x.scrollHeight, brh7a = cX7Q + cz7s, brg7Z = hB9s + cj6d;
        switch (this.qJ1x[0]) {
            case"top":
                hB9s = brg7Z > bri7b ? hB9s - cj6d : hB9s;
                if (this.qJ1x[1] == "right") {
                    cX7Q = cX7Q - cz7s < 0 ? 0 : cX7Q - cz7s
                } else {
                    cX7Q = brh7a > HZ7S ? HZ7S - cz7s : cX7Q
                }
                break;
            case"left":
                cX7Q = brh7a > HZ7S ? HZ7S - cz7s : cX7Q;
                if (this.qJ1x[1] == "top") {
                    hB9s = brg7Z > bri7b ? hB9s - cj6d : hB9s
                } else {
                    hB9s = hB9s - cj6d < 0 ? hB9s : hB9s - cj6d
                }
                break;
            case"right":
                cX7Q = cX7Q - cz7s < 0 ? 0 : cX7Q - cz7s;
                if (this.qJ1x[1] == "top") {
                    hB9s = brg7Z > bri7b ? hB9s - cj6d : hB9s
                } else {
                    hB9s = hB9s - cj6d < 0 ? hB9s : hB9s - cj6d
                }
                break;
            default:
                hB9s = hB9s - cj6d < 0 ? hB9s : hB9s - cj6d;
                if (this.qJ1x[1] == "left") {
                    cX7Q = brh7a > HZ7S ? HZ7S - cz7s : cX7Q
                } else {
                    cX7Q = cX7Q - cz7s < 0 ? 0 : cX7Q - cz7s
                }
                break
        }
        return {top: hB9s, left: cX7Q}
    };
    b5g.brf7Y = function () {
        var ccp6j = function (F6z, do7h) {
            F6z = a4e.B6v(F6z);
            if (!F6z) return;
            do7h = do7h || bb6V;
            var bh6b = a4e.hR9I(F6z);
            return {
                top: bh6b.y - (do7h.top || 0),
                left: bh6b.x - (do7h.left || 0),
                width: F6z.offsetWidth + (do7h.right || 0),
                height: F6z.offsetHeight + (do7h.bottom || 0)
            }
        };
        return function (e6c) {
            e6c = e6c || bb6V;
            this.bbJ3x = e6c.event;
            this.ccA6u(e6c.align);
            if (!!this.bbJ3x) this.yw4A = this.ccw6q(e6c.target, e6c.delta, this.bbJ3x);
            this.brp7i = ccp6j(e6c.target, e6c.delta);
            this.bHf0x = !!e6c.fitable;
            this.L6F();
            return this
        }
    }()
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), N6H = c5h("nej.ui"), b5g,
        K6E;
    if (!!N6H.De6Y) return;
    N6H.De6Y = NEJ.C();
    b5g = N6H.De6Y.O6I(N6H.WE1x);
    K6E = N6H.De6Y.cs6m;
    N6H.De6Y.cFl3x = function () {
        var ccf6Z = function (d6d, C6w, fI8A, ki9Z, UO1x) {
            var cA7t, J6D = C6w + "-i", R6L = fI8A.zh5m, bGH0x = !!ki9Z.noclear, bGF0x = !!ki9Z.toggled;
            if (k6e.gI8A(ki9Z.onbeforeclick)) {
                var bde3x = ki9Z.noclear, cbX6R = ki9Z.toggled;
                try {
                    ki9Z.onbeforeclick(ki9Z)
                } catch (e) {
                }
                bGH0x = !!ki9Z.noclear;
                bGF0x = !!ki9Z.toggled;
                ki9Z.toggled = cbX6R;
                ki9Z.noclear = bde3x
            }
            var Gk7d = R6L[J6D];
            if (bGF0x && !!Gk7d) {
                Gk7d.bu6o();
                return
            }
            h6b.bi6c(d6d);
            if (!bGH0x) {
                h6b.z6t(document, "click");
                cA7t = fI8A.A6u(ki9Z)
            } else {
                cA7t = fI8A.bRX4b(ki9Z, !0)
            }
            R6L[J6D] = cA7t;
            cA7t.xh4l("onbeforerecycle", function () {
                delete R6L[J6D]
            });
            cA7t.brf7Y(UO1x)
        };
        return function (f6b, e6c) {
            f6b = a4e.B6v(f6b);
            if (!f6b) return this;
            if (!this.zh5m) this.zh5m = {};
            var C6w = a4e.lB0x(f6b);
            if (!!this.zh5m[C6w]) return this;
            e6c = NEJ.X({}, e6c);
            var UO1x = NEJ.EX({align: "", delta: null, fitable: !1}, e6c);
            UO1x.target = C6w;
            e6c.destroyable = !0;
            if (!e6c.fixed) {
                UO1x.fitable = !0;
                e6c.parent = document.body
            }
            this.zh5m[C6w] = [C6w, e6c.event || "click", ccf6Z.eu8m(null, C6w, this, e6c, UO1x)];
            h6b.s6m.apply(h6b, this.zh5m[C6w]);
            return this
        }
    }();
    N6H.De6Y.cFm3x = function (f6b) {
        if (!this.zh5m) return this;
        var C6w = a4e.lB0x(f6b), d6d = this.zh5m[C6w];
        if (!d6d) return this;
        delete this.zh5m[C6w];
        h6b.mG0x.apply(h6b, d6d);
        var cA7t = this.zh5m[C6w + "-i"];
        if (!!cA7t) cA7t.bu6o();
        return this
    };
    b5g.bud7W = function () {
        return N6H.bbu3x.A6u(this.cc6W)
    };
    b5g.Ne8W = function () {
        K6E.Ne8W.apply(this, arguments);
        this.cc6W.top = null;
        this.cc6W.left = null;
        this.cc6W.nostop = !1
    };
    b5g.brf7Y = function (e6c) {
        if (!!this.oS1x) this.oS1x.brf7Y(e6c);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bc6W = c5h("nej.ui"), m6g = c5h("nm.l"), b5g, K6E;
    m6g.bqW7P = NEJ.C();
    b5g = m6g.bqW7P.O6I(bc6W.De6Y);
    b5g.bl6f = function (e6c) {
        e6c.nohack = true;
        this.bm6g(e6c)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), m6g = c5h("nm.l"), l6f = c5h("nm.x"), b5g, K6E;
    var FullscreenApi = l6f.Gb7U || {};
    m6g.Z6T = NEJ.C();
    b5g = m6g.Z6T.O6I(m6g.bqW7P);
    K6E = m6g.Z6T.cs6m;
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.et8l = e6c.type || 1
    };
    b5g.bX6R = function () {
        this.cg6a();
        this.n6h = a4e.od0x(this.cbH6B());
        var i6c = a4e.dl7e(this.n6h);
        this.qO1x = i6c[0];
        this.cu6o = i6c[1]
    };
    b5g.cbH6B = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b5g.Mm8e = function () {
        var D6x = {}, ch6b = this.n6h.style, jx9o = a4e.pd1x(), oh0x = {left: jx9o.scrollLeft, top: jx9o.scrollTop},
            do7h = {left: jx9o.clientWidth - this.n6h.offsetWidth, top: jx9o.clientHeight - this.n6h.offsetHeight};
        D6x.top = Math.max(0, oh0x.top + do7h.top / 2);
        D6x.left = Math.max(0, oh0x.left + do7h.left / 2);
        this.oS1x.gG8y(D6x)
    };
    b5g.L6F = function (e6c) {
        K6E.L6F.call(this);
        this.Mm8e();
        this.et8l == 1 ? a4e.fl8d(this.qO1x, "u-icn-32", "u-icn-31") : a4e.fl8d(this.qO1x, "u-icn-31", "u-icn-32");
        this.cu6o.innerHTML = e6c.tip || ""
    };
    window.g_showTipCard = m6g.Z6T.L6F = function () {
        var eg8Y;
        return function (e6c) {
            clearTimeout(eg8Y);
            if (e6c.parent === undefined) e6c.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e6c.autoclose === undefined) e6c.autoclose = true;
            e6c.clazz = "m-sysmsg";
            !!this.fh8Z && this.fh8Z.T6N();
            this.fh8Z = this.A6u(e6c);
            this.fh8Z.L6F(e6c);
            if (e6c.autoclose) eg8Y = setTimeout(this.bu6o.g6a(this), 2e3)
        }.g6a(m6g.Z6T)
    }();
    m6g.Z6T.bu6o = function () {
        !!this.fh8Z && this.fh8Z.bu6o()
    }
})();
(function () {
    var c5h = NEJ.P, v6p = c5h("nej.j"), k6e = c5h("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v6p.bn6h = v6p.bn6h.eF8x(function (d6d) {
            e6c = d6d.args[1];
            e6c.query = e6c.query || {};
            if (k6e.fE8w(e6c.query)) e6c.query = k6e.hu9l(e6c.query);
            e6c.query.ref = "mail"
        })
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, fA8s = NEJ.R, I6C = c5h("nej.ut"), k6e = c5h("nej.u"), h6b = c5h("nej.v"),
        v6p = c5h("nej.j"), q6k = c5h("nm.d"), m6g = c5h("nm.l"), J6D = "playlist-tracks_", b5g;
    q6k.fm8e({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (Q6K, e6c) {
                this.cbC6w(Q6K.playlist);
                return {total: 0, list: fA8s}
            }, onerror: function () {
                this.z6t("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (Q6K, e6c) {
                var nn0x = Q6K.playlist;
                nn0x.creator = GUser;
                nn0x.isHost = !0;
                nn0x.typeFlag = "playlist";
                return nn0x
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ic9T, "listchange", d6d)
            }, onmessage: function () {
                var mH0x = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (ci6c) {
                    m6g.Z6T.L6F({tip: mH0x[ci6c] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e6c) {
                e6c.id = e6c.data.pid
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ic9T, "listchange", d6d)
            }, onmessage: function () {
                var mH0x = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (ci6c) {
                    m6g.Z6T.L6F({tip: mH0x[ci6c] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e6c) {
                var ew8o = e6c.ext || {};
                e6c.ext = NEJ.X(ew8o, e6c.data);
                e6c.data = {id: e6c.ext.id}
            }, format: function (Q6K, e6c) {
                m6g.Z6T.L6F({tip: "收藏成功" + (Q6K.point > 0 ? ' 获得<em class="s-fc6">' + Q6K.point + "积分</em>" : "")});
                var p6j = e6c.ext;
                p6j.subscribedCount++;
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.cbB6v, "listchange", d6d);
                h6b.z6t(q6k.cbB6v, "itemchange", {attr: "subscribedCount", data: d6d.data})
            }, onmessage: function () {
                var mH0x = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (ci6c) {
                    m6g.Z6T.L6F({type: 2, tip: mH0x[ci6c] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e6c) {
                e6c.id = e6c.data.id = e6c.data.pid
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ic9T, "listchange", d6d)
            }, onmessage: function () {
                var mH0x = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (ci6c) {
                    m6g.Z6T.L6F({tip: mH0x[ci6c], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e6c) {
                var j6d = e6c.data, bdR3x = {};
                bdR3x["playlist-update-name"] = {id: j6d.id, name: j6d.name};
                bdR3x["playlist-update-tag"] = {id: j6d.id, tags: j6d.tags.join(";")};
                bdR3x["playlist-update-desc"] = {id: j6d.id, desc: j6d.description};
                e6c.data = bdR3x;
                e6c.ext = j6d
            },
            format: function (V6P, qq1x, Uf0x, e6c) {
                if (V6P.code == 200 && qq1x.code == 200 && Uf0x.code == 200) {
                    e6c.ext.allSuccess = true;
                    m6g.Z6T.L6F({tip: "保存成功"})
                } else if (V6P.code == 407 || qq1x.code == 407 || Uf0x.code == 407) {
                    e6c.ext.allSuccess = false;
                    m6g.Z6T.L6F({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e6c.ext.allSuccess = false;
                    m6g.Z6T.L6F({type: 2, tip: "保存失败"})
                }
                return this.eH8z(e6c.ext.id)
            },
            finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ic9T, "listchange", d6d)
            },
            onmessage: function (ci6c) {
                m6g.Z6T.L6F({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (Q6K, e6c) {
                var p6j = this.eH8z(e6c.ext.id);
                if (Q6K.code == 200) p6j.name = e6c.ext.name;
                return Q6K
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (Q6K, e6c) {
                var p6j = this.eH8z(e6c.ext.id);
                if (Q6K.code == 200) p6j.tags = e6c.ext.tags;
                return Q6K
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (Q6K, e6c) {
                var p6j = this.eH8z(e6c.ext.id);
                if (Q6K.code == 200) p6j.description = e6c.ext.description;
                return Q6K
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e6c) {
                e6c.url = e6c.data.url;
                delete e6c.data.url
            }, format: function (Q6K, e6c) {
                m6g.Z6T.L6F({tip: "保存成功"});
                var p6j = this.eH8z(e6c.data.id);
                p6j.coverImgUrl = e6c.url;
                e6c.ext = p6j;
                return p6j
            }, onmessage: function (ci6c) {
                m6g.Z6T.L6F({type: 2, tip: "保存失败"})
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ic9T, "itemchange", {attr: "coverImgUrl", data: e6c.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (Q6K, e6c) {
                var nn0x = this.eH8z(e6c.data.id);
                if (!nn0x) return;
                nn0x.playCount++;
                h6b.z6t(q6k.ic9T, "itemchange", {attr: "playcount", data: nn0x})
            }
        }
    });
    q6k.ic9T = NEJ.C();
    b5g = q6k.ic9T.O6I(q6k.hK9B);
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bGu0x = function () {
        var dn7g = GUser.userId;
        this.lA0x({limit: 1001, key: "playlist_my-" + dn7g, data: {offset: 0, limit: 1001, uid: dn7g}})
    };
    b5g.cbC6w = function (i6c) {
        var dn7g = GUser.userId, iQ9H = [], bGr0x = [];
        k6e.bd6X(i6c, function (p6j) {
            p6j.typeFlag = "playlist";
            if (p6j.creator && p6j.creator.userId == dn7g) {
                if (p6j.specialType == 5) p6j.name = "我喜欢的音乐";
                p6j.isHost = !0;
                iQ9H.push(p6j)
            } else {
                bGr0x.push(p6j)
            }
        });
        this.vl3x("playlist_new-" + dn7g, iQ9H);
        this.vl3x("playlist_fav-" + dn7g, bGr0x)
    };
    b5g.cbt6n = function (j6d) {
        this.co6i("playlist-update-cover", {data: j6d})
    };
    b5g.cFn3x = function () {
        var TU0x = this.cbj6d.B6v("host-plist");
        if (TU0x.length == 0) {
            return
        }
        if (TU0x.length == 1 && TU0x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = TU0x.length; i < len; i++) {
            var p6j = TU0x[i];
            if (p6j.trackCount > 0) return p6j.id
        }
        return this.cbj6d.B6v("host-plist")[0].id
    };
    b5g.cbf6Z = function (C6w) {
        if (GUser && GUser.userId > 0) {
            this.co6i("playlist-upcount", {data: {id: C6w}})
        }
    };
    b5g.GZ7S = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b5g.cFo3x = function () {
        return GUser.userId
    };
    b5g.GU7N = function (p6j) {
        if (p6j.userId == GUser.userId && p6j.specialType == 5) p6j.name = "我喜欢的音乐";
        h6b.z6t(this.constructor, "itemchange", {data: this.CQ6K(p6j)});
        return p6j
    };
    I6C.fK8C.A6u({element: q6k.ic9T, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c5h = NEJ.P, fA8s = NEJ.R, bs6m = NEJ.F, bb6V = NEJ.O, I6C = c5h("nej.ut"), h6b = c5h("nej.v"),
        k6e = c5h("nej.u"), l6f = c5h("nm.x"), q6k = c5h("nm.d"), m6g = c5h("nm.l"), b5g, K6E;
    q6k.fm8e({
        "program-get": {
            url: "/api/dj/program/detail", format: function (Q6K) {
                return Q6K.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e6c) {
                e6c.data.limit = 1e3;
                delete e6c.data.id
            }, format: function (Q6K, e6c) {
                var bGb0x = [], pG1x = Q6K.programs;
                if (pG1x) {
                    for (var i = 0, l = pG1x.length; i < l; i++) {
                        if (pG1x[i].programFeeType < 10 || pG1x[i].buyed) {
                            bGb0x.push(pG1x[i])
                        }
                    }
                }
                return bGb0x
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (Q6K, e6c) {
                return Q6K.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e6c) {
                e6c.ext = e6c.data;
                e6c.data = {id: e6c.ext.id};
                e6c.id = e6c.data.id
            }, format: function (Q6K, e6c) {
                m6g.Z6T.L6F({tip: "收藏成功"});
                var p6j = e6c.ext;
                p6j.subscribedCount++;
                p6j.subscribed = !0;
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ra1x, "listchange", d6d)
            }, onmessage: function () {
                var mH0x = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (ci6c) {
                    m6g.Z6T.L6F({type: 2, tip: mH0x[ci6c] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ra1x, "listchange", d6d)
            }, onmessage: function () {
                var mH0x = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (ci6c) {
                    l6f.bqM7F({txt: mH0x[ci6c] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e6c) {
                var p6j = this.eH8z(e6c.data.id) || bb6V;
                e6c.ext = (p6j.listenerCount || 0) + 1
            }, format: function (Q6K, e6c) {
                var p6j = this.eH8z(e6c.data.id);
                if (!!p6j) {
                    p6j.listenerCount = Math.max(e6c.ext, p6j.listenerCount || 0)
                }
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ra1x, "itemchange", {attr: "playCount", data: this.eH8z(e6c.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e6c) {
                e6c.data = {threadId: "A_DJ_1_" + e6c.id}
            }, format: function (Q6K, e6c) {
                var p6j = e6c.ext.data || this.eH8z(e6c.id);
                p6j.liked = true;
                p6j.likedCount++;
                e6c.ext.data = p6j;
                try {
                    top.player.setLike(p6j)
                } catch (e) {
                }
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ra1x, "itemchange", {attr: "likedCount", data: e6c.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e6c) {
                e6c.data = {threadId: "A_DJ_1_" + e6c.id}
            }, format: function (Q6K, e6c) {
                var p6j = e6c.ext.data || this.eH8z(e6c.id);
                p6j.liked = false;
                p6j.likedCount--;
                e6c.ext.data = p6j;
                try {
                    top.player.setLike(p6j)
                } catch (e) {
                }
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.ra1x, "itemchange", {attr: "likedCount", data: e6c.ext.data})
            }
        }
    });
    q6k.ra1x = NEJ.C();
    b5g = q6k.ra1x.O6I(q6k.hK9B);
    b5g.cFp3x = function () {
        var dn7g = GUser.userId;
        this.lA0x({limit: 1001, key: "program_fav-" + dn7g, data: {offset: 0, limit: 1e3, uid: dn7g}})
    };
    b5g.cFq3x = function (dc7V) {
        var pB1x = dc7V[this.wM4Q];
        l6f.caO6I(4, function (R6L) {
            R6L.vl3x("track_program-" + pB1x, dc7V.songs)
        });
        delete dc7V.songs;
        var bN6H = dc7V.mainSong;
        l6f.caO6I(4, function (R6L) {
            R6L.vl3x("track_program_main-" + pB1x, !bN6H ? [] : [bN6H])
        });
        dc7V.mainSong = (bN6H || bb6V).id
    };
    b5g.cFs3x = function (C6w) {
        var dc7V = this.eH8z(C6w), dn7g = localCache.bbm3x("host.profile.userId");
        return !!dc7V && dc7V.dj.userId == dn7g
    };
    b5g.cFu3x = function (C6w) {
        return !1
    };
    b5g.GU7N = function (p6j) {
        h6b.z6t(this.constructor, "itemchange", {attr: "detail", data: this.CQ6K(p6j)});
        return p6j
    };
    b5g.cbf6Z = function (C6w) {
        this.co6i("program-update-count", {data: {id: C6w}})
    };
    l6f.bFW0x = function (e6c) {
        var R6L = q6k.ra1x.A6u({
            onitemadd: function () {
                (e6c.onsuccess || bs6m)()
            }, onerror: function () {
                (e6c.onerror || bs6m)()
            }
        });
        if (e6c.data.liked) {
            R6L.uk3x(e6c.data)
        } else {
            R6L.oN1x(e6c.data)
        }
    };
    b5g.oN1x = function (dc7V) {
        if (!l6f.gQ8I()) return;
        var cp6j = {ext: {}};
        if (k6e.lO0x(dc7V)) {
            cp6j.id = dc7V.id;
            cp6j.ext.data = dc7V
        } else {
            cp6j.id = dc7V
        }
        this.co6i("program-like", cp6j)
    };
    b5g.uk3x = function (dc7V) {
        if (!l6f.gQ8I()) return;
        var cp6j = {ext: {}};
        if (k6e.lO0x(dc7V)) {
            cp6j.id = dc7V.id;
            cp6j.ext.data = dc7V
        } else {
            cp6j.id = dc7V
        }
        this.co6i("program-unlike", cp6j)
    };
    I6C.fK8C.A6u({element: q6k.ra1x, event: ["listchange", "itemchange"]})
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, fA8s = NEJ.R, I6C = c5h("nej.ut"), k6e = c5h("nej.u"), h6b = c5h("nej.v"),
        v6p = c5h("nej.j"), q6k = c5h("nm.d"), m6g = c5h("nm.l"), l6f = c5h("nm.x"), J6D = "playlist-tracks_",
        l6f = c5h("nm.x"), b5g;
    q6k.fm8e({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e6c) {
                e6c.data.c = JSON.stringify([{id: e6c.data.id}])
            }, format: function (Q6K, e6c) {
                var bj6d = l6f.GI7B(Q6K.songs[0]);
                bj6d.privilege = Q6K.privileges[0];
                return bj6d
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e6c) {
                e6c.data.n = 1e3
            }, format: function (Q6K, e6c) {
                var hD9u = [];
                this.ti2x.GU7N(Q6K.playlist);
                k6e.bd6X(Q6K.playlist.tracks, function (bN6H, r6l) {
                    var bFS0x = l6f.GI7B(bN6H);
                    bFS0x.privilege = Q6K.privileges[r6l];
                    hD9u.push(bFS0x)
                }, this);
                return hD9u
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (Q6K, e6c) {
                var hD9u = [];
                k6e.bd6X(Q6K.songs, function (bj6d) {
                    hD9u.push(l6f.GI7B(bj6d))
                });
                return hD9u
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e6c) {
                var bz6t = {}, j6d = e6c.data, caA6u = this.hE9v(e6c.key) || [];
                GF7y = [];
                k6e.bd6X(caA6u, function (bN6H) {
                    var C6w = k6e.lO0x(bN6H) ? bN6H.id : bN6H;
                    bz6t[C6w] = true
                });
                e6c.ext = [];
                k6e.bd6X(j6d.tracks, function (bN6H) {
                    var C6w = k6e.lO0x(bN6H) ? bN6H.id : bN6H;
                    if (!bz6t[C6w]) {
                        GF7y.push(C6w);
                        bz6t[C6w] = true;
                        e6c.ext.push(bN6H)
                    }
                });
                j6d.trackIds = JSON.stringify(GF7y);
                j6d.op = "add";
                if (!GF7y.length) {
                    e6c.value = {code: 502}
                }
            }, format: function (Q6K, e6c) {
                m6g.Z6T.L6F({tip: "已添加至歌单"});
                var nn0x = this.ti2x.eH8z(e6c.data.pid);
                if (!!Q6K.coverImgUrl) nn0x.coverImgUrl = Q6K.coverImgUrl;
                k6e.no0x(e6c.ext, function (bN6H) {
                    this.xE4I(e6c, k6e.lO0x(bN6H) ? bN6H : null);
                    if (!!nn0x) nn0x.trackCount++
                }, this);
                h6b.z6t(q6k.ic9T, "itemchange", {data: nn0x || {}, cmd: "add"});
                this.z6t("onaddsuccess");
                return null
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.wI4M, "listchange", {key: e6c.key, action: "refresh"});
                var pB1x = e6c.data.pid, cy7r = this.kp9g(e6c.key)
            }, onmessage: function () {
                var mH0x = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (ci6c) {
                    setTimeout(function () {
                        m6g.Z6T.L6F({tip: mH0x[ci6c] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e6c) {
                var j6d = e6c.data;
                e6c.ext = j6d.trackIds;
                j6d.trackIds = JSON.stringify(j6d.trackIds);
                j6d.op = "del"
            }, format: function (Q6K, e6c) {
                var nn0x = this.ti2x.eH8z(e6c.data.pid);
                k6e.bd6X(e6c.ext, function (C6w) {
                    this.bsh7a({id: C6w, key: "track_playlist-" + e6c.data.pid}, !0);
                    if (!!nn0x) nn0x.trackCount = Math.max(0, nn0x.trackCount - 1)
                }, this);
                h6b.z6t(q6k.ic9T, "itemchange", {data: nn0x || {}, cmd: "del"});
                return null
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.wI4M, "listchange", {key: e6c.key, action: "refresh"})
            }, onmessage: function (ci6c) {
                l6f.bqM7F({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (Q6K, e6c) {
                return this.bFQ0x.GU7N(Q6K.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (Q6K, e6c) {
                var i6c = [];
                if (e6c.data.type == -1) {
                    if (Q6K.weekData && Q6K.weekData.length) {
                        e6c.data.type = 1
                    } else {
                        e6c.data.type = 0
                    }
                }
                if (e6c.data.type == 1) {
                    i6c = this.bFO0x(Q6K.weekData)
                } else {
                    i6c = this.bFO0x(Q6K.allData)
                }
                return i6c
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (Q6K, e6c) {
                var nV0x = [], i6c = Q6K.recommend || [];
                k6e.bd6X(i6c, function (bj6d, r6l) {
                    nV0x.push({
                        action: "recommendimpress",
                        json: {alg: bj6d.alg, scene: "user-song", position: r6l, id: bj6d.id}
                    })
                });
                this.kT0x.XJ1x(nV0x);
                e6c.limit = i6c.length;
                return i6c
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e6c) {
                e6c.data.lv = 0;
                e6c.data.tv = 0
            }, format: function (o6i, e6c) {
                return o6i
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    q6k.wI4M = NEJ.C();
    b5g = q6k.wI4M.O6I(q6k.hK9B);
    b5g.cx6r = function () {
        this.cD7w();
        this.ti2x = q6k.ic9T.A6u();
        this.bFQ0x = q6k.ra1x.A6u();
        this.kT0x = q6k.hQ9H.A6u()
    };
    b5g.bFO0x = function (i6c) {
        var o6i = [], fo8g = 0;
        k6e.bd6X(i6c, function (p6j, r6l) {
            var bj6d = l6f.GI7B(p6j.song);
            if (r6l == 0) {
                fo8g = p6j.score
            }
            bj6d.max = fo8g;
            bj6d.playCount = p6j.playCount;
            bj6d.score = p6j.score;
            o6i.push(bj6d)
        });
        return o6i
    };
    I6C.fK8C.A6u({element: q6k.wI4M, event: ["listchange"]})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, cW7P = c5h("nm.pc");
    var bqH6B = {playlist: "A_PL_0_", dj: "A_DJ_1_", program: "A_DJ_1_", album: "R_AL_3_", song: "R_SO_4_"};
    var sf2x = function (bP6J) {
        var xX4b = "orpheus://orpheus";
        if (GEnvType == "local") xX4b = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bP6J), xX4b)
    };
    var car6l = function (lY0x) {
        var kG0x = "http://" + location.host + "/",
            Sp0x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dP8H = Sp0x.exec(lY0x);
        if (!dP8H) return caq6k(lY0x);
        var gl8d = dP8H[2], hz9q = dP8H[3], dn7g = dP8H[4] || "", jl9c = "";
        switch (gl8d) {
            case"album":
                jl9c = "#/m/album/comment/?rid=" + bqH6B[gl8d] + hz9q + "&id=" + hz9q;
                break;
            case"playlist":
                jl9c = "#/m/playlist/comment/?rid=" + bqH6B[gl8d] + hz9q + "&id=" + hz9q;
                break;
            case"song":
            case"dj":
            case"program":
                jl9c = "#/m/song?rid=" + bqH6B[gl8d] + hz9q;
                break;
            case"event":
                jl9c = "#/m/friend/event/?id=" + hz9q + "&uid=" + dn7g;
                break;
            case"user/home":
                jl9c = "#/m/personal/?uid=" + hz9q;
                break;
            case"mv":
                jl9c = "#/m2/mv/?id=" + hz9q;
                break;
            case"activity":
                jl9c = "#/m/friend/activity?id=" + hz9q;
                break;
            case"video":
                jl9c = "#/m2/mv/?id=" + hz9q + "&type=1";
                break;
            default:
                jl9c = "#/m/" + gl8d + "/?id=" + hz9q
        }
        return kG0x + jl9c
    };
    var caq6k = function (lY0x) {
        var cal6f = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dP8H = cal6f.exec(lY0x);
        if (dP8H) return "http://v.youku.com/v_show/id_" + dP8H[1];
        return lY0x
    };
    cW7P.el8d = function (gl8d, hz9q) {
        sf2x({name: "play", args: {type: gl8d, id: hz9q}})
    };
    cW7P.fD8v = function () {
        sf2x({name: "pause"})
    };
    cW7P.CN6H = function (lY0x) {
        sf2x({name: "open", args: {link: car6l(lY0x)}})
    };
    cW7P.la0x = function (gl8d, hz9q) {
        sf2x({name: "share", args: {type: gl8d, id: hz9q}})
    };
    cW7P.bFK0x = function (gl8d, hz9q) {
        sf2x({name: "comment", args: {type: gl8d, id: hz9q}})
    };
    cW7P.caa6U = function () {
        sf2x({name: "init"})
    };
    cW7P.RS0x = function (cj6d) {
        sf2x({name: "setHeight", args: {height: cj6d}})
    };
    cW7P.jy9p = function (bG6A, X6R) {
        sf2x({name: "toast", args: {message: bG6A || "", state: X6R}})
    };
    cW7P.RI0x = function (lY0x) {
        sf2x({name: "login", args: {link: lY0x}})
    };
    cW7P.bFE0x = function (CG6A) {
        sf2x({name: "topbar", args: {show: !!CG6A}})
    };
    cW7P.bZS6M = function (by6s) {
        sf2x({name: "refreshtopbar", args: {info: by6s}})
    };
    cW7P.bZO6I = function (br6l, r6l) {
        sf2x({name: "big", args: {arr: br6l, index: r6l}})
    };
    cW7P.KF8x = function (cw6q) {
        sf2x({name: "download", args: {img: cw6q}})
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d, d = (new J).d, e = (new J).d, f = (new J).d, g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15], l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]); else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74], e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g); else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g); else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]); else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]); else throw Error(b[146]); else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23], g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {
                        }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }

                        var d = [c[21], c[141], B[6]], l = [], f = c[139], e = b[327], g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]), g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null, h = null, d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76], l = b[240], g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](), X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]), d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]), d = h[B[7]](b[354]), f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [], f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0); else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++) ; else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }

                    var z = Array.prototype.forEach, I = Array.prototype.map,
                        n = {e: M, j: !0, i: !0, h: !0, b: !0, a: !0};
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [], l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]), p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a:{
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta, f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]], e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262], k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0, t = {v: b[227]}, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({b: Xa, a: Ya})).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t), t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y), p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301], z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F); else {
                            var n = A.length, J = a[15], J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null; else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null; else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null; else if (null == D) ia = w; else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E), ja = f(xa), ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null; else if (G.length == a[15]) ka = b[0]; else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya; else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({ec: b[43], em: ga.message}), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }

                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0, Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]], y = window[c[6]], N = a[16], T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158], L = a[158], ha = a[23], va = a[23], d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345], S = b[299], V = c[100], fa = a[91], ea = b[275], Ta = ea.length, sa = a[444],
                    ta = a[396], Ya = !1, Xa = !1, O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56], A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A), pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(), K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1; else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var bFx0x;
    var vR3x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var bZM6G = 0;
    var bFw0x = 0;
    var bFv0x = 1;
    var bFo0x = 0;
    var bqy6s = "";
    var bFl0x = "";
    var bFh0x = "";
    var XO1x = "";
    var XP1x = "";
    var bqt6n = "";
    var bFb0x = 0;
    var bER0x = "";
    var KK8C = "";
    var FT6N = 0;
    var bqq6k = ntes_get_domain();
    var bqp6j = null;
    var cFI3x = "//analytics.163.com";
    var bYy5D = function () {
    };

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqq6k
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqq6k
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqq6k
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "", n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var bYw5B = 0;
    var PW9N = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * PW9N))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << PW9N) - 1;
        for (var b = 0; b < d.length * PW9N; b += PW9N) {
            c[b >> 5] |= (d.charCodeAt(b / PW9N) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = bYw5B ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        XO1x = "-";
        bqt6n = "-";
        XP1x = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            XO1x = b.width + "x" + b.height;
            bqt6n = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                XO1x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            XP1x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                XP1x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bFb0x = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cFJ3x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || bYy5D;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bFx0x;
        bqy6s = escape(a || document.location);
        bFl0x = escape(m || document.title);
        bFh0x = l === true ? "" : escape(l || document.referrer);
        bER0x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqp6j == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqp6j = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bqy6s.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqp6j) {
                vR3x = fetch_visitor_hash();
                bFw0x = 1;
                ntes_set_cookie_long("_ntes_nnid", vR3x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vR3x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            vR3x = h.substr(0, o);
            FT6N = h.substr(o + 1, p - o - 1);
            if (FT6N == 0) {
                FT6N = (new Date).getTime();
                f = true
            }
            if (!vR3x) {
                vR3x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", vR3x + "," + FT6N);
                ntes_set_cookie_long("_ntes_nuid", vR3x)
            }
            if (FT6N != 0 && b - FT6N > 365 * 86400 * 1e3) {
                FT6N = 0;
                ntes_set_cookie_long("_ntes_nnid", vR3x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vR3x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        KK8C = c("P_INFO", "P_OINFO");
        KK8C = KK8C ? KK8C.substr(0, KK8C.indexOf("|")) : "";
        bFo0x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", vR3x, "&_nvtm=", bZM6G, "&_nvsf=", bFv0x, "&_nvfi=", bFw0x, "&_nlag=", XP1x, "&_nlmf=", bFb0x, "&_nres=", XO1x, "&_nscd=", bqt6n, "&_nstm=", bFo0x, "&_nurl=", bqy6s, "&_ntit=", bFl0x, "&_nref=", bFh0x, "&_nfla=", bER0x, "&_nssn=", KK8C, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bFv0x = 0;
        neteaseTracker.callback = null
    }

    bFx0x = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}, l = d.lib = {}, s = function () {
    }, t = l.Base = {
        extend: function (a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        }, create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        }, init: function () {
        }, mixIn: function (a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        }, clone: function () {
            return this.init.prototype.extend(this)
        }
    }, r = l.WordArray = t.extend({
        init: function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        }, toString: function (a) {
            return (a || v).stringify(this)
        }, concat: function (a) {
            var c = this.words, e = a.words, j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        }, clamp: function () {
            var a = this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        }, clone: function () {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }), w = d.enc = {}, v = w.Hex = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    }, b = w.Latin1 = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    }, x = w.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        }, parse: function (a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }, q = l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
            this.j6d = new r.init;
            this.bEy0x = 0
        }, Ys2x: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.j6d.concat(a);
            this.bEy0x += a.sigBytes
        }, CB6v: function (a) {
            var c = this.j6d, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bEz0x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bEx0x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.j6d = this.j6d.clone();
            return a
        }, bEz0x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.bqh6b()
        }, update: function (a) {
            this.Ys2x(a);
            this.CB6v();
            return this
        }, finalize: function (a) {
            a && this.Ys2x(a);
            return this.YF2x()
        }, blockSize: 16, bqj6d: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, bYa5f: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this.bz6t;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bz6t, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bz6t: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bqh6b: function () {
            this.dN8F = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bEx0x: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dN8F.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
                t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12],
                D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, YF2x: function () {
            var b = this.j6d, n = b.words, a = 8 * this.bEy0x, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.CB6v();
            b = this.dN8F;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dN8F = this.dN8F.clone();
            return b
        }
    });
    t.MD5 = v.bqj6d(r);
    t.HmacMD5 = v.bYa5f(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this.bqg6a, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.bXS5X, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bEm0x = e;
                this.J6D = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.bqh6b()
            }, process: function (e) {
                this.Ys2x(e);
                return this.CB6v()
            }, finalize: function (e) {
                e && this.Ys2x(e);
                return this.YF2x()
            }, keySize: 4, ivSize: 4, bqg6a: 1, bXS5X: 2, bqj6d: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        YF2x: function () {
            return this.CB6v(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bEg0x;
        c ? this.bEg0x = u : c = this.bDY0x;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bDX0x = e;
            this.bEg0x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bDX0x, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bDY0x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bDX0x, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bDY0x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this.bEm0x == this.bqg6a) var c = a.createEncryptor; else c = a.createDecryptor, this.bEz0x = 1;
            this.fj8b = c.call(a, this, b && b.words)
        }, bEx0x: function (a, b) {
            this.fj8b.processBlock(a, b)
        }, YF2x: function () {
            var a = this.cfg.padding;
            if (this.bEm0x == this.bqg6a) {
                a.pad(this.j6d, this.blockSize);
                var b = this.CB6v(!0)
            } else b = this.CB6v(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.baE2x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, baE2x: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.baE2x(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        bqh6b: function () {
            for (var a = this.J6D, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.bXq5v = d + 6) + 1), e = this.bXm5r = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.bXg5l = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bDW0x(a, b, this.bXm5r, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bDW0x(a, c, this.bXg5l, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bDW0x: function (a, b, c, d, e, j, l, f) {
            for (var m = this.bXq5v, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p.bqj6d(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}

var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
    biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c5h = NEJ.P, ej8b = c5h("nej.g"), v6p = c5h("nej.j"), k6e = c5h("nej.u"), NT9K = c5h("nm.x.ek");
    NT9K.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    NT9K.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c5h = NEJ.P, ej8b = c5h("nej.g"), v6p = c5h("nej.j"), k6e = c5h("nej.u"), NT9K = c5h("nm.x.ek"),
        l6f = c5h("nm.x");
    if (v6p.bn6h.redefine) return;
    window.GEnc = true;
    var bqa6U = function (bXb5g) {
        var o6i = [];
        k6e.bd6X(bXb5g, function (bWZ5e) {
            o6i.push(NT9K.emj[bWZ5e])
        });
        return o6i.join("")
    };
    var bWY5d = v6p.bn6h;
    v6p.bn6h = function (Y6S, e6c) {
        var j6d = {}, e6c = NEJ.X({}, e6c), lv0x = Y6S.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y6S) && !(e6c.headers && e6c.headers[ej8b.yH4L] == ej8b.DI6C) && !e6c.noEnc) {
            if (lv0x != -1) {
                j6d = k6e.hu9l(Y6S.substring(lv0x + 1));
                Y6S = Y6S.substring(0, lv0x)
            }
            if (e6c.query) {
                j6d = NEJ.X(j6d, k6e.fE8w(e6c.query) ? k6e.hu9l(e6c.query) : e6c.query)
            }
            if (e6c.data) {
                j6d = NEJ.X(j6d, k6e.fE8w(e6c.data) ? k6e.hu9l(e6c.data) : e6c.data)
            }
            j6d["csrf_token"] = v6p.gB8t("__csrf");
            Y6S = Y6S.replace("api", "weapi");
            e6c.method = "post";
            delete e6c.query;
            var bDJ0x = window.asrsea(JSON.stringify(j6d), bqa6U(["流泪", "强"]), bqa6U(NT9K.md), bqa6U(["爱心", "女孩", "惊恐", "大笑"]));
            e6c.data = k6e.cF7y({params: bDJ0x.encText, encSecKey: bDJ0x.encSecKey})
        }
        bWY5d(Y6S, e6c)
    };
    v6p.bn6h.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), du7n = c5h("nej.p"), k6e = c5h("nej.u"), h6b = c5h("nej.v"),
        v6p = c5h("nej.j"), dC7v = c5h("nm.u"), l6f = c5h("nm.x"), q6k = c5h("nm.d"), m6g = c5h("nm.l"),
        cW7P = c5h("nm.pc"), bpX6R = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j6d = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }, bWU5Z = function () {
            if (h6b && h6b.z6t) {
                h6b.dispatchEventalias = h6b.z6t
            }
        };
    bWU5Z();
    l6f.bpW6Q = function (bN6H) {
        if (!bN6H || bN6H.copyrightId === undefined || !!bN6H.program) return false;
        if (window.GAbroad) {
            bN6H.fee = 0;
            return true
        }
        if (bN6H.status < 0) return true;
        var Nj8b;
        if (typeof GCopyrights !== "undefined") Nj8b = GCopyrights;
        try {
            if (!Nj8b && !!top.GCopyrights) Nj8b = top.GCopyrights
        } catch (e) {
        }
        if (Nj8b) {
            var r6l = k6e.dj7c(Nj8b, bN6H.copyrightId);
            if (r6l >= 0) return true
        }
        return false
    };
    l6f.bpV6P = function () {
        var Cm5r = /^\/m\/(song|album|artist|playlist|dj|search)\?/, vU3x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }, bWQ5V = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var bWO5T = function (J6D, j6d, Nc8U) {
            switch (J6D) {
                case"event":
                    j6d = j6d.split("|");
                    return "/event?id=" + j6d[0] + "&uid=" + j6d[1];
                case"searchsong":
                case"searchlyric":
                    var u6o = J6D == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j6d) + "&type=" + u6o;
                case"toplist":
                    return "/discover/toplist?id=" + j6d + "&_hash=songlist-" + Nc8U;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Nc8U;
                    ;
                case"record":
                    j6d = j6d.split("|");
                    return "/user/songs/rank?id=" + j6d[0] + "&cat=" + j6d[1];
                    break;
                default:
                    return "/" + J6D + "?id=" + j6d + "&_hash=songlist-" + Nc8U
            }
        };
        return function (eb8T, Nc8U) {
            if (!eb8T) return null;
            var II7B = eb8T.fid || (eb8T.type != 18 ? eb8T.type : null), bpU6O = eb8T.fdata || eb8T.rid,
                bDz0x = eb8T.page || eb8T.fhref;
            var J6D = vU3x[II7B];
            if (!J6D) {
                var zR5W = (bDz0x || "").match(Cm5r);
                if (zR5W) J6D = zR5W[1]
            }
            if (!J6D) return null;
            return {title: bWQ5V[J6D], link: !vU3x[II7B] ? bDz0x : bWO5T(J6D, bpU6O, Nc8U), fid: II7B, fdata: bpU6O}
        }
    }();
    l6f.ZT2x = function (kg9X) {
        var dp7i = kg9X;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp7i = GUser;
        return dp7i
    };
    l6f.gQ8I = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l6f.MD8v = function () {
        var Cm5r = /#(.*?)$/;
        return function (gx8p) {
            var jz9q = gx8p === false ? location : top.location;
            return Cm5r.test(jz9q.href) ? RegExp.$1 : ""
        }
    }();
    l6f.Ci5n = function () {
        var Ch5m = a4e.dg7Z("audio"), bWJ5O = Ch5m.canPlayType && Ch5m.canPlayType("audio/mpeg");
        if (bWJ5O) return 2;
        var bWF5K = l6f.bpT6N().supported;
        if (bWF5K) return 1;
        return 0
    };
    l6f.bpT6N = function () {
        var gr8j, bpS6M = !1, bpR6L = "";
        if (du7n.ds7l.browser == "ie") {
            try {
                gr8j = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gr8j = null
            }
            if (gr8j) {
                bpS6M = !0;
                bpR6L = gr8j.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gr8j = navigator.plugins["Shockwave Flash"];
                if (gr8j) {
                    bpS6M = !0;
                    bpR6L = gr8j.description
                }
            }
        }
        return {supported: bpS6M, version: bpR6L}
    };
    l6f.sj2x = function () {
        return "网易云音乐"
    };
    l6f.bWx5C = function () {
        return j6d
    };
    l6f.bDo9f = function (cH7A) {
        var C6w = j6d[cH7A];
        return C6w == null ? "" : bpX6R.replace("{ID}", C6w)
    };
    l6f.xa4e = function (bo6i, dZ8R, BZ5e) {
        if (!bo6i) return "";
        if (!!BZ5e) {
            bo6i = l6f.bWr5w(bo6i)
        }
        return l6f.bau2x(l6f.bWp5u(bo6i, dZ8R))
    };
    l6f.bay2x = function () {
        var Sp0x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bpP6J = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, bWj5o = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, bWi5n = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var bWf5k = function (dJ7C, bpM6G) {
            dJ7C = Mo8g(dJ7C);
            if (!!bpM6G) {
                dJ7C = dJ7C.replace(Sp0x.MLINE, "\n\n").replace(Sp0x.LING, "</br>")
            }
            dJ7C = l6f.bau2x(dJ7C);
            return dJ7C
        };
        var Mo8g = function (bo6i) {
            return k6e.EG6A(bWj5o, bo6i)
        };
        return function (dJ7C, e6c, dD7w) {
            e6c = e6c || {};
            dD7w = dD7w || {};
            dD7w.actHash = {};
            var bVY5d = !!e6c.parseLink, bVX5c = !!e6c.parseAct, bVR5W = e6c.linkTpl || bpP6J.LINK,
                bVQ5V = e6c.atTpl || bpP6J.AT, bVP5U = e6c.atUrl || "/user/home?nickname=",
                bVO5T = e6c.actTpl || bpP6J.ACT, bpM6G = !!e6c.keepSpace, bpG6A = e6c.linkKlass || "s-fc7";
            cFM3x = e6c.actBiJson || "";
            if (!dJ7C) return "";
            dJ7C = dJ7C.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lF0x = bWi5n[bVY5d + 2 * bVX5c], dh7a = Sp0x[lF0x], br6l = null, lU0x = null, gq8i = 0, cFN3x = "",
                cFO3x = "";
            var pD1x = [];
            dh7a.lastIndex = 0;
            while (br6l = dh7a.exec(dJ7C)) {
                var dP8H = {html: "", before: br6l.index - 1, after: br6l.index + br6l[0].length};
                if (br6l[1]) {
                    var lU0x = br6l[2].replace(/[^\x00-\xff]/g, "**");
                    if (lU0x.length < 4 || lU0x.length > 32) {
                    } else {
                        var Ec6W = a4e.ex8p(bVQ5V);
                        dP8H.html = a4e.bZ6T(Ec6W, {
                            value: Mo8g(br6l[2]),
                            url: encodeURI(bVP5U + br6l[2]),
                            klass: bpG6A
                        });
                        pD1x.push(dP8H)
                    }
                } else if (br6l.length > 8 && br6l[4]) {
                    var Ec6W = a4e.ex8p(bVR5W);
                    dP8H.html = a4e.bZ6T(Ec6W, {value: Mo8g(br6l[4]), url: br6l[4], klass: bpG6A});
                    pD1x.push(dP8H)
                } else {
                    var bCQ9H = lF0x == "ACT_NOLINK" ? 4 : 9;
                    var Ec6W = a4e.ex8p(bVO5T);
                    dP8H.html = a4e.bZ6T(Ec6W, {value: Mo8g(br6l[bCQ9H]), klass: bpG6A});
                    pD1x.push(dP8H);
                    dD7w.actHash[br6l[bCQ9H].slice(1, -1)] = true
                }
            }
            var bpD6x = pD1x.length, kg9X = {before: dJ7C.length - 1, after: 0}, bpz6t = "";
            for (var i = 0; i <= bpD6x; i++) {
                var hC9t, fN8F;
                hC9t = (pD1x[i - 1] || kg9X).after;
                fN8F = (pD1x[i] || kg9X).before;
                if (fN8F >= hC9t && hC9t >= 0 && fN8F <= dJ7C.length - 1) {
                    bpz6t += bWf5k(dJ7C.substring(hC9t, fN8F + 1), bpM6G)
                }
                if (pD1x[i]) {
                    bpz6t += pD1x[i].html
                }
            }
            return bpz6t
        }
    }();
    l6f.bWr5w = function () {
        var dh7a = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bo6i) {
            return (bo6i || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dh7a, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l6f.bWp5u = function () {
        var dh7a = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ey8q = function (lU0x, dZ8R) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lU0x) + '" class="' + (dZ8R || "") + '">@' + lU0x + "</a>"
        };
        return function (bo6i, dZ8R) {
            return (bo6i || "").replace(dh7a, function ($0, $1) {
                return ey8q($1, dZ8R)
            })
        }
    }();
    l6f.bau2x = function () {
        var dh7a = /\[(.*?)\]/g;
        return function (bo6i) {
            return (bo6i || "").replace(dh7a, function ($1, $2) {
                var Y6S = l6f.bDo9f($2);
                return !Y6S ? $1 : '<img src="' + Y6S + '"/>'
            })
        }
    }();
    l6f.AN5S = function (F6z, dZ8R) {
        a4e.bE6y(F6z, dZ8R) ? a4e.x6r(F6z, dZ8R) : a4e.y6s(F6z, dZ8R)
    };
    l6f.LO8G = function (cM7F, kG0x) {
        cM7F = a4e.B6v(cM7F);
        kG0x = a4e.B6v(kG0x);
        if (!cM7F || !kG0x) return !1;
        for (kG0x = kG0x.parentNode; !!kG0x && kG0x != cM7F; kG0x = kG0x.parentNode) ;
        return kG0x == cM7F
    };
    l6f.li0x = function () {
        var bCJ9A = function (gR8J) {
            return (gR8J < 10 ? "0" : "") + gR8J
        };
        return function (kH0x) {
            kH0x = parseInt(kH0x) || 0;
            if (!kH0x) return "00:00";
            var yi4m = Math.floor(kH0x % 60), bVt5y = Math.floor(kH0x / 60);
            return bCJ9A(bVt5y) + ":" + bCJ9A(yi4m)
        }
    }();
    l6f.yk4o = function (fQ8I, wH4L) {
        if (!fQ8I || fQ8I.length == 0) return "";
        wH4L = wH4L || "/";
        var br6l = [];
        for (var i = fQ8I.length - 1; i >= 0; i--) {
            br6l.unshift(fQ8I[i].name)
        }
        return br6l.join(wH4L)
    };
    l6f.rZ2x = function () {
        var Ov9m = function (if9W, dZ8R, cM7F, bcg3x) {
            var ey8q = bcg3x ? l6f.bpx6r : k6e.dG7z;
            if (!if9W || !if9W.name) return "";
            if (!if9W.id) return '<span class="' + dZ8R + '">' + ey8q(if9W.name) + "</span>";
            return "<a" + (cM7F ? ' target="_blank"' : "") + ' class="' + dZ8R + '" href="/artist?id=' + if9W.id + '" hidefocus="true">' + ey8q(if9W.name) + "</a>"
        };
        return function (fQ8I, V6P, wH4L, cM7F, bCG9x, bcg3x) {
            if (!fQ8I || !fQ8I.length) return "";
            wH4L = wH4L || "/";
            V6P = V6P || "";
            LF8x = "";
            var em8e = [];
            for (var i = 0, i6c = [], tf2x = [], fH8z; i < fQ8I.length; ++i) {
                em8e.push(fQ8I[i].name);
                if (!fQ8I[i] || fQ8I[i].id <= 0) {
                    tf2x.push(fQ8I[i]);
                    continue
                }
                if (k6e.gI8A(V6P)) {
                    fH8z = V6P(fQ8I[i])
                } else {
                    fH8z = Ov9m(fQ8I[i], V6P, cM7F, bcg3x)
                }
                if (fH8z && bCG9x && fQ8I[i].tns && fQ8I[i].tns.length > 0) {
                    LF8x = k6e.dG7z(fQ8I[i].tns[0]);
                    fH8z += '<span class="s-fc8" title="' + LF8x + '"> - (' + LF8x + ")</span>"
                }
                !!fH8z && i6c.push(fH8z)
            }
            for (var i = 0, fH8z; i < tf2x.length; ++i) {
                if (k6e.gI8A(V6P)) {
                    fH8z = V6P(tf2x[i])
                } else {
                    fH8z = Ov9m(tf2x[i], V6P, cM7F, bcg3x)
                }
                if (fH8z && bCG9x && tf2x[i].tns && tf2x[i].tns.length > 0) {
                    LF8x = k6e.dG7z(tf2x[i].tns[0]);
                    fH8z += '<span class="s-fc8" title="' + LF8x + '"> - (' + LF8x + ")</span>"
                }
                !!fH8z && i6c.push(fH8z)
            }
            return '<span title="' + em8e.join(wH4L) + '">' + i6c.join(wH4L) + "</span>"
        }
    }();
    l6f.yx4B = function (fw8o, pp1x) {
        pp1x = pp1x || "86";
        return !!fw8o && (pp1x == "86" ? /^\d{11}$/ : /^\d+$/).test(fw8o)
    };
    l6f.cFR3x = function (fw8o) {
        if (!l6f.yx4B(fw8o)) return fw8o;
        return fw8o.substring(0, 3) + "****" + fw8o.substr(7)
    };
    l6f.jW9N = function () {
        var dh7a = /^\s+$/g;
        return function (ih9Y) {
            return !ih9Y || dh7a.test(ih9Y)
        }
    }();
    l6f.OC9t = function () {
        var bpv6p = /[^\x00-\xfff]/g;
        return function (ih9Y) {
            var bVg5l = ih9Y.match(bpv6p) || [], dq7j = bVg5l.length;
            return ih9Y.length + dq7j
        }
    }();
    l6f.BD5I = function () {
        var bpv6p = /[^\x00-\xfff]/;
        return function (ih9Y, eG8y) {
            for (var i = 0, len = ih9Y.length; i < len && eG8y > 0; i++) {
                if (bpv6p.test(ih9Y.charAt(i))) {
                    eG8y -= 2;
                    if (eG8y < 0) {
                        break
                    }
                } else {
                    eG8y -= 1
                }
            }
            return ih9Y.substring(0, i)
        }
    }();
    l6f.BB5G = function (ih9Y, eG8y, Ot9k) {
        eG8y = eG8y || 10;
        Ot9k = Ot9k || nej.p.ds7l.engine == "trident" && parseInt(nej.p.ds7l.release) < 5;
        if (Ot9k && l6f.OC9t(ih9Y) > eG8y) {
            return l6f.BD5I(ih9Y, eG8y) + "..."
        } else {
            return ih9Y
        }
    };
    l6f.bCz9q = function (f6b) {
        return f6b === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f6b.type || f6b.href || ~f6b.tabIndex)
    };
    l6f.bVc5h = function (d6d, cM7F) {
        if (!d6d || !cM7F) return !0;
        var f6b, u6o = d6d.type.toLowerCase();
        if (u6o == "mouseout") {
            f6b = d6d.relatedTarget || d6d.toElement
        } else if (u6o == "mouseover") {
            f6b = d6d.relatedTarget || d6d.fromElement
        }
        return !f6b || f6b !== cM7F && !l6f.LO8G(cM7F, f6b)
    };
    l6f.tm2x = function () {
        R6L = {};
        return function (f6b, ea8S) {
            var C6w = a4e.lB0x(f6b), J6D = "hover-" + C6w;
            if (!ea8S || !C6w || !!R6L[J6D]) return;
            R6L[J6D] = !0;
            h6b.s6m(C6w, "mouseover", function () {
                var bpt6n = a4e.H6B(f6b, "hshow") || [];
                var bpq6k = a4e.H6B(f6b, "icn-dislike") || [];
                a4e.y6s(C6w, "z-hover");
                a4e.ba6U(bpt6n[0], "display", "block");
                a4e.ba6U(bpq6k[0], "display", "block")
            });
            h6b.s6m(C6w, "mouseout", function () {
                var bpt6n = a4e.H6B(f6b, "hshow") || [];
                var bpq6k = a4e.H6B(f6b, "icn-dislike") || [];
                a4e.x6r(C6w, "z-hover");
                a4e.ba6U(bpt6n[0], "display", "none");
                a4e.ba6U(bpq6k[0], "display", "none")
            })
        }
    }();
    l6f.bCl9c = function () {
        var bz6t = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (ih9Y) {
            return k6e.EG6A(bz6t, ih9Y)
        }
    }();
    l6f.yK5P = function (bA6u) {
        if (k6e.Ez6t(bA6u)) bA6u = bA6u.getTime();
        var eU8M = new Date, kh9Y = eU8M.getTime() - bA6u;
        if (kh9Y <= 6e4) return "刚刚";
        var nv0x = eU8M.getHours() * 36e5 + eU8M.getMinutes() * 6e4 + eU8M.getSeconds() * 1e3;
        if (kh9Y <= nv0x) {
            if (kh9Y < 36e5) {
                var Dz6t = Math.floor(kh9Y / 6e4);
                return Dz6t + "分钟前"
            }
            return k6e.ig9X(bA6u, "HH:mm")
        } else {
            if (kh9Y < nv0x + 864e5) {
                return "昨天" + k6e.ig9X(bA6u, "HH:mm")
            } else {
                var gE8w = eU8M.getFullYear(), OP9G = new Date(gE8w, 0, 1);
                var nv0x = eU8M.getTime() - OP9G.getTime();
                if (kh9Y < nv0x) {
                    return k6e.ig9X(bA6u, "M月d日 HH:mm")
                }
                return k6e.ig9X(bA6u, "yyyy年M月d日")
            }
        }
    };
    l6f.cCP3x = function (bA6u) {
        if (k6e.Ez6t(bA6u)) bA6u = bA6u.getTime();
        var eU8M = new Date, kh9Y = eU8M.getTime() - bA6u;
        var nv0x = eU8M.getHours() * 36e5 + eU8M.getMinutes() * 6e4 + eU8M.getSeconds() * 1e3;
        if (kh9Y <= nv0x) {
            return "今天" + k6e.ig9X(bA6u, "HH:mm")
        } else {
            if (kh9Y < nv0x + 864e5) {
                return "昨天" + k6e.ig9X(bA6u, "HH:mm")
            } else {
                return k6e.ig9X(bA6u, "yy-MM-dd HH:mm")
            }
        }
    };
    l6f.cCL3x = function (bA6u) {
        if (k6e.Ez6t(bA6u)) bA6u = bA6u.getTime();
        var eU8M = new Date, kh9Y = eU8M.getTime() - bA6u;
        if (kh9Y <= 6e4) return "刚刚";
        var nv0x = eU8M.getHours() * 36e5 + eU8M.getMinutes() * 6e4 + eU8M.getSeconds() * 1e3;
        if (kh9Y <= nv0x) {
            if (kh9Y < 36e5) {
                var Dz6t = Math.floor(kh9Y / 6e4);
                return Dz6t + "分钟前"
            }
            return k6e.ig9X(bA6u, "HH:mm")
        } else {
            if (kh9Y < nv0x + 864e5) {
                return "昨天" + k6e.ig9X(bA6u, "HH:mm")
            } else if (kh9Y < nv0x + 864e5 * 6) {
                var gE8w = eU8M.getFullYear(), OP9G = new Date(gE8w, 0, 1);
                var nv0x = eU8M.getTime() - OP9G.getTime();
                if (kh9Y < nv0x) {
                    return k6e.ig9X(bA6u, "M月d日 HH:mm")
                }
                return k6e.ig9X(bA6u, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l6f.bdz3x = function () {
        var dh7a = /\{(.*?)\}/gi;
        return function (pg1x, j6d) {
            return (pg1x || "").replace(dh7a, function ($1, $2) {
                var D6x = j6d[$2];
                return D6x == null ? $1 : D6x
            })
        }
    }();
    l6f.fm8e = function () {
        var bf6Z = Array.prototype.slice.call(arguments, 0), pg1x = bf6Z.shift();
        if (pg1x) {
            return pg1x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf6Z.length ? bf6Z[$2] : $1
            })
        }
        return ""
    };
    l6f.Ls8k = function (i6c, dZ8R, kr9i) {
        return "";
        kr9i = kr9i || " - ";
        if (i6c && i6c.length) {
            return kr9i + (!!dZ8R ? '<span class="' + dZ8R + '">' + i6c[0] + "</span>" : i6c[0])
        }
        return ""
    };
    l6f.bCj9a = function () {
        if (window.getSelection) {
            var rO2x = window.getSelection();
            if (rO2x && rO2x.focusNode && rO2x.focusNode.tagName) {
                var Bw5B = a4e.dl7e(rO2x.focusNode);
                for (var i = 0, yY5d; i < Bw5B.length; ++i) {
                    yY5d = Bw5B[i].tagName;
                    if (!yY5d) continue;
                    yY5d = yY5d.toLowerCase();
                    if (yY5d == "textarea" || yY5d == "input") return !0
                }
            }
        } else if (document.selection) {
            var dd7W = document.selection.createRange();
            if (dd7W) {
                var f6b = dd7W.parentElement();
                if (f6b && f6b.tagName) {
                    var yY5d = f6b.tagName.toLowerCase();
                    if (yY5d == "textarea" || yY5d == "input") return !0
                }
            }
        }
        return !1
    };
    l6f.Bv5A = function (fC8u) {
        if (/^[A-Z]\:\\/i.test(fC8u)) {
            fC8u = fC8u.split("\\")
        } else {
            fC8u = fC8u.split("/")
        }
        fC8u = fC8u[fC8u.length - 1];
        return fC8u
    };
    l6f.cCE2x = function () {
        var Fy6s = [13, 17, 34, 19, 18, 21];
        return function (C6w) {
            var br6l = (C6w || "").split("_");
            return {type: Fy6s[br6l[2]] || -1, id: br6l[3] || ""}
        }
    }();
    l6f.bCh9Y = function (gr8j) {
        if (!gr8j) {
            return true
        }
        for (var k in gr8j) {
            return false
        }
        return true
    };
    l6f.bpl6f = function (dp7i) {
        if (!dp7i) {
            return ""
        }
        if (4 == dp7i.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp7i.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp7i.expertTags && dp7i.expertTags.length || !l6f.bCh9Y(dp7i.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l6f.PE9v = function (hJ9A) {
        if (!hJ9A) return "";
        var dq7j = hJ9A.length, ik9b = [];
        ik9b[0] = dq7j / 3 | 0;
        ik9b[1] = ik9b[0] + ((dq7j - ik9b[0]) / 2 | 0);
        return hJ9A.substring(0, ik9b[0]) + hJ9A.substring(ik9b[0], ik9b[1]).replace(/\d/g, "*") + hJ9A.substring(ik9b[1], dq7j)
    };
    l6f.cGd3x = function (r6l, cy7r) {
        return (r6l % cy7r + cy7r) % cy7r
    };
    l6f.bpk6e = function () {
        var Fy6s = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (C6w) {
            var br6l = (C6w || "").split("_"), o6i = {type: Fy6s[br6l[2]] || -1, id: br6l[3] || ""};
            if (o6i.type == "event") {
                o6i.uid = br6l[4] || "";
                return "/" + o6i.type + "?id=" + o6i.id + "&uid=" + o6i.uid
            }
            return "/" + o6i.type + "?id=" + o6i.id
        }
    }();
    l6f.bpj6d = function () {
        var Fy6s = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (C6w) {
            var br6l = (C6w || "").split("_");
            return Fy6s[br6l[2]] || "资源"
        }
    }();
    l6f.cCv2x = function (bv6p) {
        var qs = bv6p.length > 0 ? bv6p.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
            item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l6f.bpi6c = function (nR0x, Qc9T) {
        var beB4F = 0, es8k = new Array;
        k6e.bd6X(nR0x, function (Y6S, r6l) {
            var cw6q = a4e.dg7Z("img");
            cw6q.src = Y6S;
            h6b.s6m(cw6q, "load", function (r6l, d6d) {
                es8k[r6l] = 1;
                beB4F++;
                if (beB4F == nR0x.length) Qc9T(nR0x, es8k)
            }.g6a(this, r6l));
            h6b.s6m(cw6q, "error", function (d6d, r6l) {
                es8k[r6l] = 0;
                beB4F++;
                if (beB4F == nR0x.length) Qc9T(nR0x, es8k)
            }.g6a(this, r6l))
        })
    };
    l6f.KL8D = function (i6c, dX8P) {
        var o6i = [];
        k6e.bd6X(i6c, function (p6j, r6l, P6J) {
            o6i.push(dX8P(p6j, r6l, P6J))
        });
        return o6i
    };
    l6f.WQ1x = function (i6c, dX8P, P6J) {
        var o6i = [];
        k6e.bd6X(i6c, function (p6j, r6l) {
            if (dX8P.call(P6J, p6j, r6l, i6c)) {
                o6i.push(p6j)
            }
        });
        return o6i
    };
    l6f.bCa9R = function (bo6i) {
        return k6e.dG7z((bo6i || "").replace(/\s{2,}/g, " ").trim())
    };
    l6f.bpg6a = function (bj6d) {
        if (bj6d.transNames && bj6d.transNames.length) {
            return bj6d.transNames[0]
        } else if (bj6d.alias && bj6d.alias.length) {
            return bj6d.alias[0]
        }
    };
    l6f.bpf6Z = function (Uf0x) {
        if (Uf0x) {
            return Uf0x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l6f.bpd6X = function (f6b) {
        var f6b = a4e.B6v(f6b), cH7A = f6b && f6b.getElementsByTagName("textarea")[0], J6D = a4e.t6n(f6b, "key"),
            boY6S = a4e.t6n(f6b, "simple") == "1", cBe2x = a4e.t6n(f6b, "pvnamed") == "1", cBc2x = q6k.wI4M.go8g();
        if (!(f6b && cH7A && J6D)) return;
        var VH1x, boW6Q, VO1x;
        VH1x = a4e.H6B(a4e.B6v("m-playlist"), "j-img");
        k6e.bd6X(VH1x, function (iV9M) {
            if (!VO1x && a4e.t6n(iV9M, "key")) {
                VO1x = a4e.t6n(iV9M, "key");
                iV9M.removeAttribute("data-key")
            }
        });
        VH1x = a4e.H6B(a4e.B6v("m-playlist"), "m-info");
        k6e.bd6X(VH1x, function (iV9M) {
            if (!boW6Q && iV9M.id && iV9M.id.indexOf("auto-id-") == 0) {
                boW6Q = iV9M.id.slice(8, 12)
            }
        });
        var D6x = cH7A.value || cH7A.defaultValue;
        if (VO1x) {
            D6x = decodeURIComponent(k6e.cAJ2x(D6x, "param=" + boW6Q + VO1x))
        }
        D6x = JSON.parse(D6x);
        if (cBe2x) {
            l6f.cAG2x(D6x)
        }
        if (boY6S) {
            D6x = l6f.GI7B(D6x)
        }
        cBc2x.vl3x(J6D, D6x);
        f6b.innerHTML = "";
        return J6D
    };
    l6f.czi2x = function (pz1x) {
        if (!pz1x.onbeforelistload) {
            pz1x.onbeforelistload = function (d6d) {
                d6d.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pz1x.onemptylist) {
            pz1x.onemptylist = function (d6d) {
                d6d.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pz1x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pz1x
    };
    l6f.cAG2x = function (hD9u) {
        k6e.bd6X(hD9u, function (bN6H) {
            bN6H.privilege = bN6H.pv;
            delete bN6H.pv
        })
    };
    l6f.GI7B = function (im9d) {
        if (k6e.eJ8B(im9d)) {
            var dD7w = [];
            k6e.bd6X(im9d, function (boY6S) {
                dD7w.push(bBb9S(boY6S))
            });
            return dD7w
        } else {
            return bBb9S(im9d)
        }

        function bBb9S(im9d) {
            if (!im9d) return null;
            var dD7w = {
                album: im9d.al,
                alias: im9d.alia || im9d.ala || [],
                artists: im9d.ar || [],
                commentThreadId: "R_SO_4_" + im9d.id,
                copyrightId: im9d.cp || 0,
                duration: im9d.dt || 0,
                id: im9d.id,
                mvid: im9d.mv || 0,
                name: im9d.name || "",
                cd: im9d.cd,
                position: im9d.no || 0,
                ringtone: im9d.rt,
                rtUrl: im9d.rtUrl,
                status: im9d.st || 0,
                pstatus: im9d.pst || 0,
                fee: im9d.fee || 0,
                version: im9d.v || 0,
                eq: im9d.eq,
                songType: im9d.t || 0,
                mst: im9d.mst,
                score: im9d.pop || 0,
                ftype: im9d.ftype,
                rtUrls: im9d.rtUrls,
                transNames: im9d.tns,
                privilege: im9d.privilege,
                lyrics: im9d.lyrics
            };
            return dD7w
        }
    };
    l6f.cGq3x = function () {
        var f6b = a4e.od0x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f6b);
        h6b.s6m(f6b, "click", function (d6d) {
            h6b.bi6c(d6d);
            a4e.cJ7C(f6b)
        })
    };
    l6f.iG9x = function (cE7x) {
        if (cE7x < 1e5) {
            return cE7x
        } else if (cE7x < 1e8) {
            return Math.floor(cE7x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cE7x / 1e7) / 10 + "亿"
        }
    };
    l6f.uT3x = function (cE7x, cH7A) {
        return "<i>" + (cE7x ? "(" + cE7x + ")" : cH7A) + "</i>"
    };
    l6f.bBa9R = function (u6o, id9U) {
        var e6c = {};
        if (!k6e.lO0x(id9U)) {
            return e6c
        }
        switch (parseInt(u6o)) {
            case 17:
                e6c.title = id9U.name;
                e6c.author = (id9U.radio || []).name;
                e6c.picUrl = id9U.coverUrl;
                e6c.category = id9U.radio.category;
                break;
            case 19:
                e6c.title = id9U.name;
                e6c.author = l6f.yk4o(id9U.artists);
                e6c.authors = l6f.yk4o(id9U.artists, " / ");
                e6c.picUrl = id9U.picUrl;
                break;
            case 13:
                e6c.title = id9U.name;
                e6c.author = (id9U.creator || []).nickname;
                e6c.picUrl = id9U.coverImgUrl;
                break;
            case 18:
                e6c.title = id9U.name;
                e6c.author = l6f.yk4o(id9U.artists);
                e6c.picUrl = (id9U.album || []).picUrl;
                break;
            case 20:
                e6c.title = id9U.name;
                e6c.author = "";
                e6c.picUrl = id9U.img1v1Url;
                break;
            case 21:
                e6c.title = id9U.name;
                e6c.author = id9U.artistName;
                e6c.authors = l6f.yk4o(id9U.artists, " / ");
                e6c.picUrl = id9U.newCover || id9U.cover;
                break;
            case 70:
                e6c.title = id9U.name;
                e6c.author = (id9U.dj || []).nickname;
                e6c.picUrl = id9U.picUrl;
                e6c.category = id9U.category;
                break;
            default:
                break
        }
        return e6c
    };
    l6f.bAU9L = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l6f.Wo1x = function (ey8q, om1x, e6c) {
        var bJ6D, bf6Z, o6i;
        var gL8D = null;
        var uX3x = 0;
        if (!e6c) e6c = {};
        var zO5T = function () {
            uX3x = e6c.leading === false ? 0 : +(new Date);
            gL8D = null;
            o6i = ey8q.apply(bJ6D, bf6Z);
            if (!gL8D) bJ6D = bf6Z = null
        };
        return function () {
            var eU8M = +(new Date);
            if (!uX3x && e6c.leading === false) uX3x = eU8M;
            var FU6O = om1x - (eU8M - uX3x);
            bJ6D = this;
            bf6Z = arguments;
            if (FU6O <= 0 || FU6O > om1x) {
                if (gL8D) {
                    clearTimeout(gL8D);
                    gL8D = null
                }
                uX3x = eU8M;
                o6i = ey8q.apply(bJ6D, bf6Z);
                if (!gL8D) bJ6D = bf6Z = null
            } else if (!gL8D && e6c.trailing !== false) {
                gL8D = setTimeout(zO5T, FU6O)
            }
            return o6i
        }
    };
    l6f.Ky8q = function (ey8q, om1x, oZ1x) {
        var gL8D, bf6Z, bJ6D, Bf5k, o6i;
        var zO5T = function () {
            var gq8i = new Date - Bf5k;
            if (gq8i < om1x && gq8i >= 0) {
                gL8D = setTimeout(zO5T, om1x - gq8i)
            } else {
                gL8D = null;
                if (!oZ1x) {
                    o6i = ey8q.apply(bJ6D, bf6Z);
                    if (!gL8D) bJ6D = bf6Z = null
                }
            }
        };
        return function () {
            bJ6D = this;
            bf6Z = arguments;
            Bf5k = new Date;
            var QZ0x = oZ1x && !gL8D;
            if (!gL8D) gL8D = setTimeout(zO5T, om1x);
            if (QZ0x) {
                o6i = ey8q.apply(bJ6D, bf6Z);
                bJ6D = bf6Z = null
            }
            return o6i
        }
    };
    l6f.Rc0x = function (f6b, hr9i) {
        if (f6b) {
            var f6b = f6b.firstElementChild;
            if (f6b) {
                f6b.firstElementChild && (f6b = f6b.firstElementChild);
                f6b.setAttribute("xlink:href", "/style/pc/svg/" + hr9i)
            }
        }
    };
    l6f.bAT9K = function (em8e) {
        if (!em8e || !em8e.length) {
            return
        }
        em8e = /^#(.+?)#$/.exec(em8e)[1];
        em8e = em8e.replace(/\s/g, " ");
        v6p.bn6h("/api/act/detail", {
            type: "json",
            method: "post",
            data: k6e.cF7y({actname: em8e}),
            onload: function (Q6K) {
                if (!Q6K || Q6K.code != 200 || !Q6K.act) {
                    m6g.Z6T.L6F({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + Q6K.act.actId)
                }
            },
            onerror: function (cb6V) {
                m6g.Z6T.L6F({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l6f.cxF1x = function (em8e) {
        if (!em8e || !em8e.length) {
            return
        }
        var Rf0x = location.host;
        em8e = /^#(.+?)#$/.exec(em8e)[1];
        em8e = em8e.replace(/\s/g, " ");
        v6p.bn6h("/api/act/detail", {
            type: "json",
            method: "post",
            data: k6e.cF7y({actname: em8e}),
            onload: function (Q6K) {
                if (!Q6K || Q6K.code != 200 || !Q6K.act) {
                    cW7P.jy9p("该话题暂未创建")
                } else {
                    cW7P.CN6H(Rf0x + "/activity?id=" + Q6K.act.actId)
                }
            },
            onerror: function (cb6V) {
                cW7P.jy9p("操作失败，请稍后再试")
            }
        })
    };
    l6f.boF6z = function (Aa5f, rx1x) {
        if (!Aa5f || !rx1x) return false;
        if (Aa5f == rx1x) return true;
        return l6f.boF6z(Aa5f, rx1x.parentNode)
    };
    a4e.cC7v = function (bI6C, iT9K) {
        if (!bI6C) return null;
        if (!iT9K) return bI6C.firstChild;
        return a4e.H6B(bI6C, iT9K)[0]
    };
    l6f.bAN9E = function (ih9Y) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ih9Y)
    };
    l6f.bAJ9A = function (ih9Y, Rk0x) {
        Rk0x = Rk0x || "86";
        if (Rk0x == "86") return /^\d{11}$/.test(ih9Y);
        return /^\d+$/.test(ih9Y)
    };
    l6f.cGr3x = function (vm3x) {
        if (!vm3x) {
            return "0b"
        }
        var cxb1x = ["Bytes", "KB", "MB", "GB"];
        var bc6W = Math.floor(Math.log(vm3x) / Math.log(1024));
        return (vm3x / Math.pow(1024, Math.floor(bc6W))).toFixed(bc6W == 1 ? 0 : 1) + cxb1x[bc6W]
    };
    l6f.bAG9x = function (dJ7C, fo8g, cwV1x) {
        if (!dJ7C) return dJ7C;
        var dq7j = k6e.fz8r(dJ7C);
        if (dq7j <= fo8g) return dJ7C;
        var boC6w = dq7j - dJ7C.length, boB6v = dJ7C.length - boC6w;
        var fF8x = Math.ceil(fo8g / 2), cwL1x = fo8g, bAA9r = 0;
        if (boC6w < fF8x) fF8x = fo8g - boC6w;
        if (boB6v < fo8g) fo8g = boB6v + Math.ceil((fo8g - boB6v) / 2);
        while (fF8x <= fo8g) {
            bAA9r = k6e.fz8r(dJ7C.substr(0, fF8x));
            var box6r = cwL1x - bAA9r;
            if (box6r == 0) break;
            if (box6r == 1) {
                var cwI1x = k6e.fz8r(dJ7C.charAt(fF8x));
                if (cwI1x == 1) {
                    fF8x++;
                    break
                } else {
                    break
                }
            }
            fF8x += Math.floor(box6r / 2)
        }
        return dJ7C.substr(0, fF8x) + (!!cwV1x ? "" : "...")
    };
    l6f.cwv1x = function (bq6k) {
        bq6k = bq6k || 10;
        var cI7B = "";
        for (var i = 0; i < bq6k; i++) {
            cI7B += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cI7B
    };
    var cwu1x = /([A-Za-z0-9 \.\-\(\)\!\?])/, cwm1x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        cwg1x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bAp9g = function (cvX1x) {
        var bq6k = k6e.Bc5h(1, 5), cvP1x = Math.random() < .5, iQ9H = "";
        if (cvX1x) {
            if (cvP1x) {
                while (bq6k >= 0) {
                    iQ9H += cwg1x[k6e.Bc5h(0, 500)];
                    bq6k--
                }
            } else {
                iQ9H = l6f.cwv1x(bq6k)
            }
        } else {
            iQ9H = k6e.SZ0x(bq6k)
        }
        return '<div class="soil">' + iQ9H + "</div>"
    };
    l6f.bpx6r = function (eo8g) {
        eo8g = k6e.AS5X(eo8g);
        try {
            var bq6k = eo8g.length, r6l = k6e.Bc5h(1, bq6k - 1);
            while (r6l < bq6k) {
                if (cwm1x.test(eo8g.charAt(r6l))) {
                    return k6e.dG7z(eo8g.slice(0, r6l)) + bAp9g(true) + k6e.dG7z(eo8g.slice(r6l))
                } else if (cwu1x.test(eo8g.charAt(r6l))) {
                    return k6e.dG7z(eo8g.slice(0, r6l)) + bAp9g() + k6e.dG7z(eo8g.slice(r6l))
                } else {
                    r6l++
                }
            }
            return k6e.dG7z(eo8g)
        } catch (e) {
            return k6e.dG7z(eo8g)
        }
    };
    l6f.XA1x = function (lp0x, mu0x) {
        return "//nos.netease.com/" + lp0x + "/" + mu0x
    };
    l6f.cvL1x = function (fC8u) {
        var dP8H = /(.+)(\.[^\.]+$)/.exec(fC8u);
        return dP8H ? {filename: dP8H[1], suffix: dP8H[2]} : {filename: fC8u || "", suffix: ""}
    };
    l6f.bAl9c = function (br6l, cvC1x) {
        var dD7w = [];
        k6e.bd6X(br6l, function (hZ9Q) {
            dD7w.push(cvC1x(hZ9Q))
        });
        return dD7w
    };
    var cvw1x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l6f.bAk9b = function (xW4a) {
        var j6d = NEJ.X({}, xW4a);
        k6e.eE8w(xW4a, function (p6j, J6D) {
            var bAj9a = cvw1x[J6D];
            if (bAj9a) {
                j6d[bAj9a] = p6j
            }
        });
        var RH0x = xW4a.creator || [];
        if (!k6e.eJ8B(RH0x)) {
            RH0x = [RH0x]
        }
        if (RH0x) {
            j6d.artists = [];
            k6e.bd6X(RH0x, function (p6j) {
                j6d.artists.push({name: p6j.nickname || p6j.userName, id: p6j.userId})
            })
        }
        if (!!xW4a.aliaName) {
            j6d.alias = [xW4a.aliaName]
        }
        if (!!xW4a.transName) {
            j6d.transNames = [xW4a.transName]
        }
        return j6d
    };
    l6f.cve1x = function (Y6S) {
        return (Y6S || "").replace(/^https?:/, "")
    };
    l6f.GU7N = function (cI7B) {
        if (!k6e.fE8w(cI7B)) return cI7B;
        var dD7w = null;
        try {
            dD7w = JSON.parse(cI7B)
        } catch (_e) {
        }
        return dD7w
    };
    var cuT1x = '<span class="s-fc7 f-tdn">${value}</span>';
    l6f.cuK1x = function (cH7A, tN3x, e6c) {
        e6c = e6c || {};
        if (!tN3x) {
            return k6e.dG7z(cH7A)
        }
        cH7A = k6e.AS5X(cH7A);
        var pD1x = [], br6l = null, Tv0x = new RegExp(l6f.bCl9c(tN3x), "gi"), pg1x = e6c.tpl || cuT1x;
        while (br6l = Tv0x.exec(cH7A)) {
            var dP8H = {html: "", before: br6l.index - 1, after: br6l.index + br6l[0].length};
            var Ec6W = a4e.ex8p(pg1x);
            dP8H.html = a4e.bZ6T(Ec6W, {value: k6e.dG7z(br6l[0])});
            pD1x.push(dP8H)
        }
        var bpD6x = pD1x.length, kg9X = {before: cH7A.length - 1, after: 0}, dD7w = "";
        for (var i = 0; i <= bpD6x; i++) {
            var hC9t, fN8F;
            hC9t = (pD1x[i - 1] || kg9X).after;
            fN8F = (pD1x[i] || kg9X).before;
            if (fN8F >= hC9t && hC9t >= 0 && fN8F <= cH7A.length - 1) {
                dD7w += k6e.dG7z(cH7A.substring(hC9t, fN8F + 1))
            }
            if (pD1x[i]) {
                dD7w += pD1x[i].html
            }
        }
        return dD7w
    }
})();
(function () {
    var k6e = NEJ.P("nej.u");

    function cux1x() {
        var AR5W = function (hW9N) {
            if (hW9N < -128) {
                return AR5W(128 - (-128 - hW9N))
            } else if (hW9N >= -128 && hW9N <= 127) {
                return hW9N
            } else if (hW9N > 127) {
                return AR5W(-129 + hW9N - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cup1x = function (hW9N, bh6b) {
            return AR5W(hW9N + bh6b)
        };
        var cuo1x = function (Yk1x, boe6Y) {
            if (Yk1x == null) {
                return null
            }
            if (boe6Y == null) {
                return Yk1x
            }
            var qM1x = [];
            var cul1x = boe6Y.length;
            for (var i = 0, bq6k = Yk1x.length; i < bq6k; i++) {
                qM1x[i] = cup1x(Yk1x[i], boe6Y[i % cul1x])
            }
            return qM1x
        };
        var cue1x = function (Yr2x) {
            if (Yr2x == null) {
                return Yr2x
            }
            var qM1x = [];
            var ctY1x = Yr2x.length;
            for (var i = 0, bq6k = ctY1x; i < bq6k; i++) {
                qM1x[i] = AR5W(0 - Yr2x[i])
            }
            return qM1x
        };
        var ctN0x = function (bnZ6T, Sn0x) {
            bnZ6T = AR5W(bnZ6T);
            Sn0x = AR5W(Sn0x);
            return AR5W(bnZ6T ^ Sn0x)
        };
        var bzF9w = function (Ss0x, bnX6R) {
            if (Ss0x == null || bnX6R == null || Ss0x.length != bnX6R.length) {
                return Ss0x
            }
            var qM1x = [];
            var cts0x = Ss0x.length;
            for (var i = 0, bq6k = cts0x; i < bq6k; i++) {
                qM1x[i] = ctN0x(Ss0x[i], bnX6R[i])
            }
            return qM1x
        };
        var bzB9s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var csZ0x = function (du7n) {
            var JQ8I = [];
            JQ8I.push(bzB9s[du7n >>> 4 & 15]);
            JQ8I.push(bzB9s[du7n & 15]);
            return JQ8I.join("")
        };
        var bzw9n = function (vm3x) {
            var bq6k = vm3x.length;
            if (vm3x == null || bq6k < 0) {
                return new String("")
            }
            var JQ8I = [];
            for (var i = 0; i < bq6k; i++) {
                JQ8I.push(csZ0x(vm3x[i]))
            }
            return JQ8I.join("")
        };
        var bzv9m = function (YP2x) {
            if (YP2x == null || YP2x.length == 0) {
                return YP2x
            }
            var bnR6L = new String(YP2x);
            var qM1x = [];
            var bq6k = bnR6L.length / 2;
            var bh6b = 0;
            for (var i = 0; i < bq6k; i++) {
                var ov1x = parseInt(bnR6L.charAt(bh6b++), 16) << 4;
                var oy1x = parseInt(bnR6L.charAt(bh6b++), 16);
                qM1x[i] = AR5W(ov1x + oy1x)
            }
            return qM1x
        };
        var bzq9h = function (cI7B) {
            if (cI7B == null || cI7B == undefined) {
                return cI7B
            }
            var Sw0x = encodeURIComponent(cI7B);
            var vm3x = [];
            var bzp9g = Sw0x.length;
            for (var i = 0; i < bzp9g; i++) {
                if (Sw0x.charAt(i) == "%") {
                    if (i + 2 < bzp9g) {
                        vm3x.push(bzv9m(Sw0x.charAt(++i) + "" + Sw0x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vm3x.push(Sw0x.charCodeAt(i))
                }
            }
            return vm3x
        };
        var csn0x = function (wd3x) {
            var bc6W = 0;
            bc6W += (wd3x[0] & 255) << 24;
            bc6W += (wd3x[1] & 255) << 16;
            bc6W += (wd3x[2] & 255) << 8;
            bc6W += wd3x[3] & 255;
            return bc6W
        };
        var cGt3x = function (bc6W) {
            var wd3x = [];
            wd3x[0] = bc6W >>> 24 & 255;
            wd3x[1] = bc6W >>> 16 & 255;
            wd3x[2] = bc6W >>> 8 & 255;
            wd3x[3] = bc6W & 255;
            return wd3x
        };
        var csd0x = function (cT7M, bnO6I, bq6k) {
            var dD7w = [];
            if (cT7M == null || cT7M.length == 0) {
                return dD7w
            }
            if (cT7M.length < bq6k) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq6k; i++) {
                dD7w[i] = cT7M[bnO6I + i]
            }
            return dD7w
        };
        var bnM6G = function (cT7M, bnO6I, rH1x, crO0x, bq6k) {
            if (cT7M == null || cT7M.length == 0) {
                return rH1x
            }
            if (rH1x == null) {
                throw new Error("1004")
            }
            if (cT7M.length < bq6k) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq6k; i++) {
                rH1x[crO0x + i] = cT7M[bnO6I + i]
            }
            return rH1x
        };
        var crF0x = function (bq6k) {
            var br6l = [];
            for (var i = 0; i < bq6k; i++) {
                br6l[i] = 0
            }
            return br6l
        };
        var crt0x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var JG8y = 64;
        var Zr2x = 64;
        var bzh9Y = 4;
        var cro0x = function (qE1x) {
            var bzg8Y = [];
            if (qE1x == null || qE1x == undefined || qE1x.length == 0) {
                return crF0x(Zr2x)
            }
            if (qE1x.length >= Zr2x) {
                return csd0x(qE1x, 0, Zr2x)
            } else {
                for (var i = 0; i < Zr2x; i++) {
                    bzg8Y[i] = qE1x[i % qE1x.length]
                }
            }
            return bzg8Y
        };
        var crj0x = function (ZB2x) {
            if (ZB2x == null || ZB2x.length % JG8y != 0) {
                throw new Error("1005")
            }
            var bnL6F = [];
            var bh6b = 0;
            var crh0x = ZB2x.length / JG8y;
            for (var i = 0; i < crh0x; i++) {
                bnL6F[i] = [];
                for (var j = 0; j < JG8y; j++) {
                    bnL6F[i][j] = ZB2x[bh6b++]
                }
            }
            return bnL6F
        };
        var crf0x = function (bze8W) {
            var ov1x = bze8W >>> 4 & 15;
            var oy1x = bze8W & 15;
            var bh6b = ov1x * 16 + oy1x;
            return crt0x[bh6b]
        };
        var bzd8V = function (bnK6E) {
            if (bnK6E == null) {
                return null
            }
            var bzb8T = [];
            for (var i = 0, bq6k = bnK6E.length; i < bq6k; i++) {
                bzb8T[i] = crf0x(bnK6E[i])
            }
            return bzb8T
        };
        var byZ8R = function (Jz7s, qE1x) {
            if (Jz7s == null) {
                return null
            }
            if (Jz7s.length == 0) {
                return []
            }
            if (Jz7s.length % JG8y != 0) {
                throw new Error("1005")
            }
            qE1x = cro0x(qE1x);
            var bnJ6D = qE1x;
            var bnI6C = crj0x(Jz7s);
            var Ti0x = [];
            var cpX0x = bnI6C.length;
            for (var i = 0; i < cpX0x; i++) {
                var bnF6z = bzd8V(bnI6C[i]);
                bnF6z = bzd8V(bnF6z);
                var bnE6y = bzF9w(bnF6z, bnJ6D);
                var cpR0x = cuo1x(bnE6y, cue1x(bnJ6D));
                bnE6y = bzF9w(cpR0x, qE1x);
                bnM6G(bnE6y, 0, Ti0x, i * JG8y, JG8y);
                bnJ6D = bnI6C[i]
            }
            var byH8z = [];
            bnM6G(Ti0x, Ti0x.length - bzh9Y, byH8z, 0, bzh9Y);
            var bq6k = csn0x(byH8z);
            if (bq6k > Ti0x.length) {
                throw new Error("1006")
            }
            var qM1x = [];
            bnM6G(Ti0x, 0, qM1x, 0, bq6k);
            return qM1x
        };
        var cpK0x = function (bae2x, J6D) {
            if (bae2x == null) {
                return null
            }
            var byF8x = new String(bae2x);
            if (byF8x.length == 0) {
                return []
            }
            var Jz7s = bzv9m(byF8x);
            if (J6D == null || J6D == undefined) {
                throw new Error("1007")
            }
            var qE1x = bzq9h(J6D);
            return byZ8R(Jz7s, qE1x)
        };
        this.cpG0x = function (bae2x, J6D) {
            var bnB6v = cpK0x(bae2x, J6D);
            var Fz6t = new String(bzw9n(bnB6v));
            var zk5p = [];
            var bnz6t = Fz6t.length / 2;
            var bh6b = 0;
            for (var i = 0; i < bnz6t; i++) {
                zk5p.push("%");
                zk5p.push(Fz6t.charAt(bh6b++));
                zk5p.push(Fz6t.charAt(bh6b++))
            }
            return zk5p.join("")
        };
        k6e.cAJ2x = function (bny6s, J6D) {
            return k6e.cpe9V(k6e.cik8c(bny6s), J6D)
        };
        k6e.cpe9V = function (bny6s, J6D) {
            var bnB6v = byZ8R(bny6s, bzq9h(J6D));
            var Fz6t = new String(bzw9n(bnB6v));
            var zk5p = [];
            var bnz6t = Fz6t.length / 2;
            var bh6b = 0;
            for (var i = 0; i < bnz6t; i++) {
                zk5p.push("%");
                zk5p.push(Fz6t.charAt(bh6b++));
                zk5p.push(Fz6t.charAt(bh6b++))
            }
            return zk5p.join("")
        }
    }

    window.settmusic = (new cux1x).cpG0x
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, I6C = c5h("nej.ut"), k6e = c5h("nej.u"), h6b = c5h("nej.v"), v6p = c5h("nej.j"),
        q6k = c5h("nm.d"), l6f = c5h("nm.x"), J6D = "Search-tracks_", b5g;
    q6k.fm8e({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (Q6K) {
                return Q6K
            }, onerror: function (Q6K, e6c) {
                if (Q6K.code == 407) {
                    e6c.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e6c, bg6a) {
                window.log && window.log("searchkeywordclient", {
                    type: this.coN9E(parseInt(e6c.data.type)) || "suggest",
                    keyword: e6c.data.s,
                    offset: e6c.offset
                })
            }, format: function (Q6K, e6c) {
                if (Q6K.abroad) {
                    try {
                        Q6K.result = JSON.parse(decodeURIComponent(settmusic(Q6K.result, q6k.sk)))
                    } catch (e) {
                    }
                }
                Q6K.result = Q6K.result || {};
                var i6c, cy7r, hN9E = [], qj1x = e6c.data.s || "", fX8P = e6c.data.limit,
                    u6o = parseInt(e6c.data.type) || 1, o6i = Q6K.result;
                switch (u6o) {
                    case 1:
                        i6c = this.byt8l(o6i.songs, e6c.data.hlpretag, e6c.data.hlposttag);
                        cy7r = o6i.songCount;
                        break;
                    case 10:
                        i6c = o6i.albums;
                        cy7r = o6i.albumCount;
                        break;
                    case 100:
                        i6c = o6i.artists;
                        cy7r = o6i.artistCount;
                        break;
                    case 1e3:
                        i6c = o6i.playlists;
                        cy7r = o6i.playlistCount;
                        break;
                    case 1002:
                        i6c = o6i.userprofiles;
                        cy7r = o6i.userprofileCount;
                        break;
                    case 1004:
                        i6c = o6i.mvs;
                        cy7r = o6i.mvCount;
                        break;
                    case 1014:
                        i6c = l6f.bAl9c(o6i.videos, l6f.bAk9b);
                        cy7r = o6i.videoCount;
                        break;
                    case 1006:
                        i6c = this.byt8l(o6i.songs, e6c.data.hlpretag, e6c.data.hlposttag);
                        cy7r = o6i.songCount;
                        break;
                    case 1009:
                        var qy1x = o6i.djRadios;
                        if (!!qy1x) {
                            k6e.bd6X(qy1x, function (D6x, r6l, coB9s) {
                                D6x.xid = D6x.id;
                                D6x.id = D6x.id + "_rad"
                            });
                            if (qy1x.length) {
                                this.vl3x("radio_search-" + e6c.data.s, qy1x)
                            }
                        }
                        cy7r = Math.min(o6i.djprogramCount, 500);
                        i6c = o6i.djprograms || [];
                        if (e6c.data.isPub) {
                            k6e.no0x(qy1x, function (D6x, r6l, coB9s) {
                                D6x.stype = 1;
                                i6c.unshift(D6x)
                            });
                            cy7r = Math.min(i6c.length, 500)
                        }
                        break
                }
                this.z6t("onsearchload", Q6K);
                if (i6c && i6c.length) {
                    for (var i = 0; i < fX8P; i++) {
                        if (i < i6c.length) {
                            hN9E.push(i6c[i])
                        } else {
                            hN9E.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cy7r || 0, qj1x.length < 3 ? 500 : 5e3), list: hN9E}
            }, onerror: function (Q6K, e6c) {
                e6c.onload(e6c, []);
                if (k6e.gI8A(e6c.onerror)) {
                    e6c.onerror(Q6K)
                }
            }
        }
    });
    q6k.Eg6a = NEJ.C();
    b5g = q6k.Eg6a.O6I(q6k.hK9B);
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.con9e = function (J6D, e6c) {
        if (!J6D) return;
        if (!!this.byn8f) v6p.kn9e(this.byn8f);
        this.byn8f = this.co6i("search-suggest", NEJ.X({data: {s: J6D, limit: 8}}, e6c))
    };
    b5g.cok9b = function (J6D, e6c) {
        if (!J6D) return;
        this.co6i("search-multimatch", NEJ.X({data: {s: J6D}}, e6c))
    };
    b5g.byt8l = function () {
        var coh9Y = function (hw9n, byk8c, byg8Y) {
            var cnu9l = hw9n.match(new RegExp(byk8c + "(.+?)" + byg8Y, "gi")), cE7x = 0;
            k6e.bd6X(cnu9l, function (p6j) {
                cE7x += p6j.replace(new RegExp(byk8c, "g"), "").replace(new RegExp(byg8Y, "g"), "").length
            });
            return cE7x
        };
        return function (jt9k, cnt9k, cna9R) {
            var bxM8E = [];
            k6e.bd6X(jt9k, function (bj6d, bc6W) {
                bj6d = l6f.GI7B(bj6d);
                var baV3x = bj6d.lyrics || [], dq7j = baV3x.length, jQ9H = 0, cy7r = 4, baX3x = {l: 0, v: 0}, bne6Y;
                if (dq7j > 4) {
                    k6e.bd6X(baV3x, function (hw9n, r6l) {
                        var bxI8A = coh9Y(hw9n, cnt9k, cna9R);
                        if (bxI8A > baX3x.v) {
                            baX3x.v = bxI8A;
                            baX3x.l = r6l
                        }
                    });
                    jQ9H = baX3x.l;
                    jQ9H = Math.max(jQ9H, 0);
                    bne6Y = dq7j - jQ9H - 4;
                    if (bne6Y < 0) jQ9H += bne6Y;
                    bj6d.lrcAbstractEnd = jQ9H + cy7r - 1
                } else {
                    bj6d.lrcAbstractEnd = dq7j - 1
                }
                bj6d.lrcAbstractStart = jQ9H;
                bj6d.indexId = (baV3x && baV3x.length ? "L" : "NL") + bj6d.id;
                bxM8E.push(bj6d)
            });
            return bxM8E
        }
    }();
    b5g.coN9E = function (u6o) {
        switch (u6o) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        v6p = c5h("nej.j"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), E6y = c5h("nm.m"), m6g = c5h("nm.l"),
        dw7p = c5h("nm.i"), M6G = c5h("nm.m.sch"), b5g, K6E;
    var bbf3x = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    M6G.Vf1x = NEJ.C();
    b5g = M6G.Vf1x.O6I(I6C.cG7z);
    b5g.cx6r = function (f6b) {
        this.cD7w();
        this.bX6R(f6b);
        this.S6M = q6k.Eg6a.go8g()
    };
    b5g.bX6R = function (f6b) {
        this.n6h = f6b;
        var i6c = a4e.H6B(f6b, "j-flag");
        this.eV8N = i6c[0];
        this.bnd6X = i6c[1];
        this.cr6l = i6c[2];
        this.mW0x = i6c[3];
        h6b.s6m(this.eV8N, "input", this.gj8b.g6a(this));
        h6b.s6m(this.eV8N, "keyup", this.gj8b.g6a(this));
        h6b.s6m(this.eV8N, "focus", this.gO8G.g6a(this));
        h6b.s6m(this.bnd6X, "click", this.gO8G.g6a(this));
        h6b.s6m(this.eV8N, "blur", this.bnc6W.g6a(this));
        h6b.s6m(this.cr6l, "click", this.bbs3x.g6a(this));
        h6b.s6m(this.n6h, "keydown", this.bmZ6T.g6a(this));
        h6b.s6m(this.n6h, "keypress", this.bbw3x.g6a(this));
        h6b.s6m(this.mW0x, "mouseover", this.Vk1x.g6a(this));
        h6b.s6m(this.mW0x, "mouseout", this.Vk1x.g6a(this));
        if (this.eV8N.value) {
            this.eV8N.value = ""
        }
        if (this.eV8N.style.opacity != null) {
            this.eV8N.style.opacity = 1
        }
    };
    b5g.gj8b = function (d6d) {
        if (d6d.type == "keyup" && d6d.keyCode == 8 || d6d.keyCode == 46) {
            this.Ex6r()
        } else if (d6d.type == "input" || d6d.type == "propertychange") {
            setTimeout(this.Ex6r.g6a(this), 0)
        }
    };
    b5g.gO8G = function () {
        this.zP5U(this.bnd6X, !1);
        a4e.y6s(this.n6h, "m-srch-fcs");
        this.eV8N.focus();
        this.Ex6r();
        a4e.y6s((a4e.H6B("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b5g.bnc6W = function () {
        if (!this.eV8N.value) {
            this.zP5U(this.bnd6X, !0)
        }
        var GK7D = a4e.H6B(this.mW0x, "slt");
        if (this.bbD3x(this.mW0x) && GK7D.length > 0 && a4e.t6n(GK7D[0], "type")) {
            var hr9i = GK7D[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hr9i)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eV8N.value})
            }
            this.bmY6S(GK7D[0].href)
        }
        this.zP5U(this.mW0x, !1);
        a4e.x6r(this.n6h, "m-srch-fcs")
    };
    b5g.zP5U = function (f6b, mk0x) {
        a4e.ba6U(f6b, "display", !mk0x ? "none" : "")
    };
    b5g.bbD3x = function (f6b) {
        return a4e.df7Y(f6b, "display") != "none"
    };
    b5g.Ex6r = function () {
        var clJ9A = function (ih9Y) {
            ih9Y = k6e.AS5X(ih9Y);
            var eG8y = this.n6h.clientWidth > 250 ? 41 : 17;
            if (l6f.OC9t(ih9Y) > eG8y) {
                ih9Y = l6f.BD5I(ih9Y, eG8y) + "..."
            }
            return k6e.dG7z(ih9Y)
        };
        var bbI3x = function (o6i) {
            return o6i.songs && o6i.songs.length || o6i.albums && o6i.albums.length || o6i.artists && o6i.artists.length || o6i.playlists && o6i.playlists.length
        };
        var sx2x = function (tN3x, d6d) {
            if (!l6f.bCz9q(this.eV8N) || l6f.jW9N(this.eV8N.value)) {
                this.zP5U(this.mW0x, !1);
                return
            }
            d6d.keyword = k6e.dG7z(tN3x);
            var dT8L = a4e.bZ6T("m-search-suggest", d6d, {mark: l6f.cuK1x.eu8m(this, tN3x), cutStr: clJ9A.g6a(this)}),
                sJ2x = d6d.result.order;
            this.mW0x.innerHTML = dT8L;
            this.zP5U(this.mW0x, bbI3x(d6d.result) ? !0 : !1);
            if (!!sJ2x && !!sJ2x.length && bbf3x[sJ2x[0]]) {
                this.bmX6R = {keyword: tN3x, type: bbf3x[sJ2x[0]]}
            }
        };
        var clw9n = function () {
            this.zP5U(this.mW0x, !1);
            return
        };
        return function () {
            var D6x = this.eV8N.value;
            if (l6f.jW9N(D6x)) {
                this.zP5U(this.mW0x, !1);
                return
            }
            this.S6M.con9e(D6x, {onload: sx2x.g6a(this, D6x), onForbidden: clw9n.g6a(this)})
        }
    }();
    b5g.bbw3x = function (d6d) {
        if (d6d.keyCode != 13) return;
        var GK7D = a4e.H6B(this.mW0x, "slt");
        if (this.bbD3x(this.mW0x) && GK7D.length > 0) {
            this.bmY6S(GK7D[0].href);
            this.zP5U(this.mW0x, !1);
            return
        }
        this.bbs3x();
        this.zP5U(this.mW0x, !1)
    };
    b5g.bmZ6T = function (d6d) {
        if (!this.bbD3x(this.mW0x)) return;
        var i6c = a4e.H6B(this.mW0x, "xtag"), dq7j = i6c.length, r6l = k6e.dj7c(i6c, function (p6j) {
            return a4e.bE6y(p6j, "slt")
        });
        switch (d6d.keyCode) {
            case 38:
                if (r6l >= 0) a4e.x6r(i6c[r6l], "slt");
                a4e.y6s(i6c[r6l <= 0 ? dq7j - 1 : r6l - 1], "slt");
                break;
            case 40:
                if (r6l >= 0) a4e.x6r(i6c[r6l], "slt");
                a4e.y6s(i6c[(r6l + 1) % dq7j], "slt");
                break
        }
    };
    b5g.Vk1x = function (d6d) {
        if (!this.bbD3x(this.mW0x)) return;
        var Vr1x, F6z = h6b.W6Q(d6d), i6c = a4e.H6B(this.mW0x, "xtag");
        if (F6z.tagName.toLowerCase() == "a") Vr1x = F6z; else if (F6z.parentNode.tagName.toLowerCase() == "a") Vr1x = F6z.parentNode;
        if (!Vr1x) return;
        k6e.bd6X(i6c, function (p6j) {
            a4e.x6r(p6j, "slt");
            a4e.t6n(p6j, "type", "")
        });
        if (d6d.type == "mouseout") return;
        a4e.y6s(Vr1x, "slt");
        a4e.t6n(Vr1x, "type", "mouse")
    };
    b5g.bbs3x = function () {
        var dN8F = location.hash, r6l = dN8F.indexOf("?"), bv6p = k6e.hu9l(dN8F.substring(r6l + 1));
        bv6p.s = this.eV8N.value;
        if (l6f.jW9N(bv6p.s)) return;
        if (!bv6p.type && this.bmX6R && this.bmX6R.keyword == bv6p.s) {
            bv6p.type = this.bmX6R.type
        }
        this.bmY6S("/search/#/?" + k6e.cF7y(bv6p));
        this.eV8N.blur()
    };
    b5g.bmY6S = function (Y6S) {
        if (location.dispatch2) {
            location.dispatch2(Y6S)
        } else {
            location.href = Y6S
        }
    };
    M6G.Vf1x.clt9k = function () {
        var i6c = a4e.H6B(document.body, "j-suggest");
        k6e.bd6X(i6c, function (p6j) {
            new M6G.Vf1x(p6j)
        })
    };
    M6G.Vf1x.clt9k()
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, I6C = c5h("nej.ut"), k6e = c5h("nej.u"), h6b = c5h("nej.v"), v6p = c5h("nej.j"),
        q6k = c5h("nm.d"), b5g;
    q6k.fm8e({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (Q6K) {
                return {total: Q6K.size || 0, list: Q6K.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (Q6K) {
                return {total: Q6K.size || 0, list: Q6K.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (Q6K) {
                return Q6K.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (Q6K, e6c) {
                if (e6c.offset == 0) {
                    var pU1x = Q6K.data[0];
                    this.z6t("onfirstload", pU1x);
                    Q6K.data.splice(0, 1);
                    return Q6K.data
                } else {
                    return Q6K.data
                }
            }
        }
    });
    q6k.Dj6d = NEJ.C();
    b5g = q6k.Dj6d.O6I(q6k.hK9B);
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bmW6Q = function () {
        var sM2x = "LOCAL_FLAG";
        return function (u6o, cla8S) {
            var j6d = this.Gp7i(sM2x, {});
            if (j6d[u6o]) {
                return true
            } else {
                if (!cla8S) {
                    j6d[u6o] = true;
                    this.wx4B(sM2x, j6d)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), k6e = c5h("nej.u"), N6H = c5h("nej.ut"), bmV6P;
    if (!!N6H.oc0x) return;
    N6H.oc0x = NEJ.C();
    bmV6P = N6H.oc0x.O6I(N6H.cG7z);
    bmV6P.bl6f = function () {
        var ckV8N = function (d6d) {
            d6d.matched = d6d.source == d6d.target
        };
        return function (e6c) {
            e6c.oncheck = e6c.oncheck || ckV8N;
            this.bm6g(e6c);
            this.bU6O = e6c.list;
            this.je9V = e6c.dataset || "id";
            this.kI0x = e6c.selected || "js-selected"
        }
    }();
    bmV6P.nI0x = function (D6x) {
        var F6z, d6d = {target: D6x};
        k6e.bd6X(this.bU6O, function (f6b) {
            delete d6d.matched;
            d6d.source = a4e.t6n(f6b, this.je9V);
            this.z6t("oncheck", d6d);
            if (!d6d.matched) {
                a4e.x6r(f6b, this.kI0x)
            } else {
                F6z = f6b;
                a4e.y6s(f6b, this.kI0x)
            }
        }, this);
        return F6z
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), N6H = c5h("nej.ut"), qo1x;
    if (!!N6H.de7X) return;
    N6H.de7X = NEJ.C();
    qo1x = N6H.de7X.O6I(N6H.cG7z);
    qo1x.cx6r = function () {
        this.jc9T = {};
        this.cD7w();
        this.bL6F()
    };
    qo1x.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.bmU6O = e6c.umi || "";
        this.BI5N = e6c.dispatcher;
        this.HS7L = e6c.composite || bb6V;
        this.bwb8T({
            onshow: this.eX8P.g6a(this),
            onhide: this.ko9f.g6a(this),
            onrefresh: this.eC8u.g6a(this),
            onmessage: this.qt1x.g6a(this),
            onbeforehide: this.cke8W.g6a(this)
        })
    };
    qo1x.bD6x = function () {
        delete this.bmU6O;
        this.jc9T = {};
        this.bH6B()
    };
    qo1x.tW3x = function (d6d) {
        if (!!d6d) d6d.stopped = !0
    };
    qo1x.bL6F = bs6m;
    qo1x.eX8P = bs6m;
    qo1x.ko9f = bs6m;
    qo1x.eC8u = bs6m;
    qo1x.qt1x = bs6m;
    qo1x.cke8W = bs6m;
    qo1x.mV0x = function (nA0x, bG6A, fj8b) {
        this.BI5N.bmO6I({to: nA0x, mode: fj8b || 0, data: bG6A, from: this.bmU6O})
    };
    qo1x.cGJ3x = function (u6o, j6d) {
        this.BI5N.Ak5p(u6o, {from: this.bmU6O, data: j6d})
    };
    qo1x.cGL3x = function () {
        this.BI5N.ms0x.apply(this.BI5N, arguments)
    };
    qo1x.cjM8E = function () {
        return this.jc9T
    };
    a4e.bcU3x = function () {
        if (!!window.dispatcher) {
            dispatcher.bUj4n.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c5h = NEJ.P, bs6m = NEJ.F, bb6V = NEJ.O, a4e = c5h("nej.e"), k6e = c5h("nej.u"), N6H = c5h("nej.ut"), zN5S;
    if (!!N6H.dv7o) return;
    N6H.dv7o = NEJ.C();
    zN5S = N6H.dv7o.O6I(N6H.de7X);
    zN5S.cjG8y = function (e6c) {
        var bI6C;
        if (!bI6C) {
            var j6d = e6c.input || bb6V;
            bI6C = a4e.B6v(j6d.parent)
        }
        if (!bI6C) {
            var j6d = e6c.data || bb6V;
            bI6C = a4e.B6v(j6d.parent)
        }
        if (!bI6C) {
            bI6C = a4e.B6v(e6c.parent)
        }
        return bI6C
    };
    zN5S.eX8P = function (e6c) {
        var bI6C = this.cjG8y(e6c);
        if (!!bI6C && !!this.n6h) bI6C.appendChild(this.n6h);
        this.gC8u(e6c);
        this.bUc4g("onshow", e6c);
        this.eC8u(e6c)
    };
    zN5S.eC8u = function (e6c) {
        this.gp8h(e6c);
        this.bUc4g("onrefresh", e6c)
    };
    zN5S.ko9f = function () {
        this.lg0x();
        this.cjr8j();
        a4e.ni0x(this.n6h)
    };
    zN5S.bTS4W = function () {
        var gH8z = /^onshow|onrefresh|delay$/;
        return function (ck6e) {
            return gH8z.test(ck6e)
        }
    }();
    zN5S.bTR4V = bs6m;
    zN5S.bUc4g = function () {
        var bTL4P = function (bv6p, e6c, ck6e, pB1x) {
            if (this.bTS4W(pB1x)) return;
            if (!!bv6p) ck6e += (ck6e.indexOf("?") > 1 ? "&" : "?") + bv6p;
            var dm7f = this.bTR4V(pB1x, e6c) || {};
            dm7f.location = e6c;
            dm7f.parent = this.jc9T[pB1x];
            this.BI5N.it9k(ck6e, {input: dm7f})
        };
        return function (u6o, e6c) {
            if (!e6c.nodelay) {
                if (!!this.HS7L.delay) return;
                var bTH4L = this.HS7L[u6o] || bb6V;
                if (bTH4L.delay) return
            }
            var bv6p = k6e.cF7y(e6c.param) || "";
            if (u6o == "onrefresh") {
                k6e.eE8w(this.HS7L, bTL4P.g6a(this, bv6p, e6c))
            }
            k6e.eE8w(bTH4L, bTL4P.g6a(this, bv6p, e6c))
        }
    }();
    zN5S.cjr8j = function () {
        var Cl5q = function (ck6e, pB1x) {
            if (!this.bTS4W(pB1x)) this.BI5N.bu6o(ck6e)
        };
        return function () {
            k6e.eE8w(this.HS7L, Cl5q, this);
            k6e.eE8w(this.HS7L.onshow, Cl5q, this);
            k6e.eE8w(this.HS7L.onrefresh, Cl5q, this)
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), I6C = c5h("nej.ut"), v6p = c5h("nej.j"),
        k6e = c5h("nej.u"), E6y = c5h("nm.m"), l6f = c5h("nm.x"), q6k = c5h("nm.d"), b5g, K6E;
    E6y.UT1x = NEJ.C();
    b5g = E6y.UT1x.O6I(I6C.cG7z);
    b5g.cx6r = function () {
        this.cD7w();
        this.n6h = a4e.B6v("g-topbar");
        var i6c = a4e.H6B(this.n6h, "j-tflag");
        this.bmH6B = i6c[0];
        this.Hi7b = i6c[1];
        this.bTb4f = i6c[2];
        this.bmG6A = i6c[3];
        this.cie8W = I6C.oc0x.A6u({list: this.bmH6B.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bmF6z = I6C.oc0x.A6u({list: this.bmG6A.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bW6Q([[this.n6h, "click", this.UF0x.g6a(this)], [this.Hi7b, "click", this.cN7G.g6a(this)], [this.Hi7b, "mouseout", this.bSF4J.g6a(this, 0)], [this.Hi7b, "mouseover", this.bSF4J.g6a(this, 1)]]);
        window.scrollTopbar = this.chT8L.g6a(this);
        window.matchNav = this.bSD4H.g6a(this);
        window.polling = this.vk3x.g6a(this);
        this.bmC6w = q6k.Dj6d.A6u();
        this.chD8v();
        this.IT7M();
        var bv6p = k6e.hu9l(location.href.split("?")[1]) || {};
        if (bv6p.market) {
            a4e.B6v("topbar-download-link").href = "/download?market=" + bv6p.market
        }
        var bmA6u = a4e.H6B(this.n6h, "j-showoff");
        if (bmA6u && !this.bmC6w.bmW6Q("newMvSearch")) {
            a4e.x6r(bmA6u[0], "f-hide");
            window.setTimeout(function () {
                a4e.y6s(bmA6u[0], "f-hide")
            }, 5e3)
        }
    };
    b5g.vk3x = function (d6d) {
        var dN8F = l6f.MD8v();
        if (!/^\/msg/.test(dN8F)) {
            var wQ4U = 0;
            wQ4U += d6d.comment;
            wQ4U += d6d.forward;
            wQ4U += d6d.msg;
            wQ4U += d6d.notice;
            if (wQ4U > 0) {
                wQ4U = wQ4U > 99 ? "99+" : wQ4U;
                this.TS0x.innerText = wQ4U;
                this.IV7O.innerText = wQ4U;
                a4e.x6r(this.TS0x, "f-hide");
                a4e.x6r(this.IV7O, "f-hide");
                this.bee4i = true
            } else {
                a4e.y6s(this.TS0x, "f-hide");
                a4e.y6s(this.IV7O, "f-hide");
                this.bee4i = false
            }
            var eT8L = "/at";
            if (d6d.notice) eT8L = "/notify";
            if (d6d.comment) eT8L = "/comment";
            if (d6d.msg > 0) eT8L = "/private";
            if (d6d.forward > 0) eT8L = "/at";
            this.IV7O.parentNode.href = "/msg/#" + eT8L
        } else {
            this.IV7O.parentNode.href = "javascript:;";
            a4e.y6s(this.TS0x, "f-hide");
            a4e.y6s(this.IV7O, "f-hide");
            this.bee4i = false
        }
        var i6c = a4e.H6B(this.bmH6B, "j-t");
        if (!/^\/friend/.test(dN8F)) {
            if (i6c && i6c.length) {
                a4e.ba6U(i6c[0], "display", d6d.event > 0 ? "" : "none")
            }
        } else {
            a4e.ba6U(i6c[0], "display", "none")
        }
    };
    b5g.cN7G = function (d6d) {
        var f6b = h6b.W6Q(d6d, "d:action");
        if (f6b) {
            switch (a4e.t6n(f6b, "action")) {
                case"login":
                    h6b.cq6k(d6d);
                    var u6o = a4e.t6n(f6b, "type");
                    if (u6o) {
                        if (u6o == "sina" || u6o == "tencent") top.open(f6b.href); else top.login(u6o == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h6b.cq6k(d6d);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.bmC6w.bmW6Q("storeNew")) {
                        a4e.y6s(this.cGM3x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.bmC6w.bmW6Q("levelNew")) {
                        a4e.y6s(this.cGN3x, "f-vhide")
                    }
                    break
            }
        }
    };
    b5g.UF0x = function (d6d) {
        var f6b = h6b.W6Q(d6d, "d:action");
        if (!f6b) return;
        var U6O = a4e.t6n(f6b, "action");
        switch (U6O) {
            case"bilog":
                var bmx5C = a4e.t6n(f6b, "logAction"), bmw5B = a4e.t6n(f6b, "logJson");
                window.log(bmx5C, bmw5B);
                break
        }
    };
    b5g.bSF4J = function (IZ7S, d6d) {
        if (this.bmu5z) {
            this.bmu5z.style.display = !IZ7S ? "none" : "";
            (IZ7S || !this.bee4i ? a4e.y6s : a4e.x6r).call(window, this.TS0x, "f-hide")
        }
    };
    b5g.chT8L = function (gf8X) {
        a4e.ba6U(this.n6h, "top", -gf8X + "px")
    };
    b5g.bSD4H = function (eT8L, cgY8Q) {
        this.cie8W.nI0x(eT8L);
        if (eT8L == "discover") {
            a4e.y6s(this.bTb4f, "f-hide");
            a4e.x6r(this.bmG6A, "f-hide");
            window.g_topBarHeight = 105;
            this.bmF6z.nI0x(cgY8Q)
        } else {
            a4e.x6r(this.bTb4f, "f-hide");
            a4e.y6s(this.bmG6A, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b5g.chD8v = function () {
        var ei8a = a4e.B6v("g_iframe");
        if (!ei8a) return;
        var gx8p = ei8a.contentWindow.document.getElementById("g_top");
        this.bSD4H(a4e.t6n(gx8p, "module"), a4e.t6n(gx8p, "sub"))
    };
    var bey4C = {}, bRq4u = /\/\/\w+/, cgT8L = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bRq4u, "") !== b.replace(bRq4u, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b5g.cgI8A = function (beD4H) {
        var oa0x = k6e.dj7c(cgT8L, function (D6x, J6D) {
            if (k6e.gI8A(D6x)) {
                return D6x(beD4H[J6D], bey4C[J6D])
            } else {
                return beD4H[J6D] !== bey4C[J6D]
            }
        });
        bey4C = beD4H;
        return beD4H[oa0x]
    };
    b5g.IT7M = function () {
        var dp7i = GUser || {}, cgj7c = GUserAcc || {};
        if (dp7i && dp7i.userId) {
            var bQI4M = NEJ.X(dp7i, cgj7c);
            if (this.cgI8A(bQI4M)) {
                a4e.dH7A(this.Hi7b, "m-topbar-user-login", bQI4M)
            }
        } else {
            bey4C = {};
            this.Hi7b.innerHTML = a4e.iD9u("m-topbar-user-unlogin");
            var i6c = a4e.H6B(this.bmH6B, "j-t");
            a4e.ba6U(i6c[0], "display", "none")
        }
        a4e.x6r(this.Hi7b, "f-hide");
        this.bee4i = false;
        var i6c = a4e.H6B(this.Hi7b, "j-uflag");
        if (dp7i && dp7i.userId) {
            this.TS0x = i6c.shift();
            this.bmu5z = i6c.shift();
            this.IV7O = i6c.shift()
        } else {
            this.bmu5z = i6c.shift()
        }
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), I6C = c5h("nej.ut"), q6k = c5h("nm.d"), b5g, K6E;
    q6k.fm8e({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (Q6K) {
                h6b.z6t(q6k.th2x, "message", Q6K)
            }
        }
    });
    q6k.th2x = NEJ.C();
    b5g = q6k.th2x.O6I(q6k.hK9B);
    b5g.Vy1x = function () {
        this.co6i("polling-get", {})
    };
    b5g.ug3x = function () {
        var eg8Y;
        return function () {
            if (!!eg8Y) return;
            eg8Y = window.setInterval(this.Vy1x.g6a(this), 1e5);
            this.Vy1x()
        }
    }();
    I6C.fK8C.A6u({event: "message", element: q6k.th2x})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "",
                ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "", data = pieces[5] || "",
                packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1],
                packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.VB1x(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.VB1x(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Tr0x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bmp5u();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
                j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false,
                a = false, n, G, m = true, M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1", ag = [0, 0, 0], ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new (window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {
                            }
                        }
                    }
                    return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
                }(), k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {success: false, id: Y};
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {success: false, id: X};
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv, X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({success: false, id: ab})
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {success: false, id: ah};
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M, getFlashPlayerVersion: function () {
                    return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
                }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                }, error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.hb8T = WebSocket.cfR7K++;
            WebSocket.bQC3x[self.hb8T] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.md0x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.VB1x(function () {
                    WebSocket.pR1x.create(self.hb8T, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pR1x.send(this.hb8T, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pR1x.close(this.hb8T)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.md0x)) {
                this.md0x[type] = []
            }
            this.md0x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.md0x)) return;
            var events = this.md0x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.md0x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cfC7v = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bQB3x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bQB3x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cfr7k("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bQB3x = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.cfr7k = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pR1x = null;
        WebSocket.bQC3x = {};
        WebSocket.Tr0x = [];
        WebSocket.cfR7K = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.VB1x(function () {
                WebSocket.pR1x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bmp5u = function () {
            if (WebSocket.pR1x) return;
            if (WebSocket.cfj7c) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cfj7c
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cfd7W()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cGP3x = function () {
            setTimeout(function () {
                WebSocket.pR1x = document.getElementById("webSocketFlash");
                WebSocket.pR1x.setCallerUrl(location.href);
                WebSocket.pR1x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Tr0x.length; ++i) {
                    WebSocket.Tr0x[i]()
                }
                WebSocket.Tr0x = []
            }, 0)
        };
        WebSocket.cGS3x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.pR1x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bQC3x[events[i].webSocketId].cfC7v(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cGT3x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dO8G = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.VB1x = function (task) {
            if (WebSocket.pR1x) {
                task()
            } else {
                WebSocket.Tr0x.push(task)
            }
        };
        WebSocket.cfd7W = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bmp5u()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bmp5u()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c5h = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c5h(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c5h = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.ee8W) this.ee8W = {};
        this.bQf3x = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ee8W || !this.ee8W.error || isArray(this.ee8W.error) && !this.ee8W.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ee8W) return false;
        var handler = this.ee8W[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ee8W) this.ee8W = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ee8W[type]) {
            this.ee8W[type] = listener
        } else if (isArray(this.ee8W[type])) {
            this.ee8W[type].push(listener)
        } else {
            this.ee8W[type] = [this.ee8W[type], listener]
        }
        if (isArray(this.ee8W[type]) && !this.ee8W[type].warned) {
            var m;
            if (this.bQf3x !== undefined) {
                m = this.bQf3x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ee8W[type].length > m) {
                this.ee8W[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ee8W[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ee8W || !this.ee8W[type]) return this;
        var list = this.ee8W[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ee8W[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.ee8W = {};
            return this
        }
        var events = this.ee8W && this.ee8W[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ee8W[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.ee8W) this.ee8W = {};
        if (!this.ee8W[type]) this.ee8W[type] = [];
        if (!isArray(this.ee8W[type])) {
            this.ee8W[type] = [this.ee8W[type]]
        }
        return this.ee8W[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        l6f = c5h("nm.x"), dC7v = c5h("nm.u"), q6k = c5h("nm.d"), SQ0x = c5h("pomelo"), X6R = 0, b5g, K6E;
    q6k.fm8e({
        "polling-init": {
            url: "/api/push/init", format: function (Q6K) {
                X6R = 2;
                var ts2x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j6d = Q6K.account || bb6V, dn7g = GUser.userId;
                SQ0x.init(ts2x.host, ts2x.port, true, this.ceH7A.g6a(this, {
                    user: dn7g,
                    nonce: j6d.nonce,
                    domain: ts2x.domain,
                    productKey: ts2x.key,
                    signature: j6d.signature,
                    expire_time: j6d.expireTime
                }))
            }, onerror: function () {
                return this.bml5q()
            }
        }
    });
    q6k.AE5J = NEJ.C();
    b5g = q6k.AE5J.O6I(q6k.hK9B);
    b5g.cx6r = function () {
        var qV1x = !1;
        return function (e6c) {
            if (!qV1x) {
                qV1x = !0
            }
            this.cD7w(e6c);
            SQ0x.on("specify", this.qt1x.g6a(this));
            SQ0x.on("broadcast", this.qt1x.g6a(this))
        }
    }();
    b5g.qt1x = function (d6d) {
        k6e.bd6X(d6d, function (bG6A) {
            h6b.z6t(q6k.AE5J, "message", bG6A)
        }, this)
    };
    b5g.bml5q = function () {
        var bA6u = 500;
        return function () {
            X6R = 0;
            SQ0x.disconnect();
            if (bA6u > 6e4) bA6u = 500;
            bA6u *= 2
        }
    }();
    b5g.ceH7A = function (e6c, cb6V) {
        if (!!cb6V) {
            return this.bml5q()
        }
        X6R = 3;
        SQ0x.registerAndBind(e6c, function (o6i) {
            if (o6i.code != 200) {
                return this.bml5q()
            }
            X6R = 4
        }.g6a(this))
    };
    b5g.cGU3x = function () {
        dC7v.ceo7h.go8g().cGV3x()
    };
    b5g.cGW3x = function () {
        dC7v.ceo7h.go8g().cGX3x()
    };
    b5g.bmj5o = function () {
        var qV1x = !1;
        return function () {
            if (qV1x) return;
            qV1x = !0;
            this.co6i("polling-init", {})
        }
    }();
    I6C.fK8C.A6u({event: "message", element: q6k.AE5J})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), v6p = c5h("nej.j"), du7n = c5h("nej.p"),
        k6e = c5h("nej.u"), m6g = c5h("nm.l"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), cW7P = c5h("api"), b5g, K6E;
    var gk8c = a4e.iw9n('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    m6g.bmi5n = NEJ.C();
    b5g = m6g.bmi5n.O6I(m6g.ek8c);
    K6E = m6g.bmi5n.cs6m;
    b5g.bl6f = function (e6c) {
        e6c.title = "意见反馈";
        this.bm6g(e6c)
    };
    b5g.cf6Z = function () {
        this.cd6X = gk8c
    };
    b5g.bX6R = function () {
        this.cg6a();
        this.hy9p = {};
        var JH8z = a4e.H6B;
        var Dy6s = h6b.s6m;
        this.hy9p.submit_btn = JH8z(this.n6h, "u-btn2")[0];
        this.hy9p.cancle_btn = JH8z(this.n6h, "u-btn2")[1];
        this.hy9p.prompt_msg = JH8z(this.n6h, "u-err")[0];
        this.hy9p.zs = JH8z(this.n6h, "zs")[0];
        a4e.ba6U(this.hy9p.zs, "display", "none");
        this.hy9p.fb_txt = JH8z(this.n6h, "u-txt")[0];
        this.hy9p.contact = JH8z(this.n6h, "u-txt")[1];
        a4e.gs8k(this.hy9p.fb_txt, "holder");
        a4e.gs8k(this.hy9p.contact, "holder");
        if (a4e.bE6y(this.hy9p.fb_txt.parentNode, "holder-parent")) {
            a4e.ba6U(this.hy9p.fb_txt.parentNode, "display", "block")
        }
        if (a4e.bE6y(this.hy9p.contact.parentNode, "holder-parent")) {
            a4e.ba6U(this.hy9p.contact.parentNode, "display", "block")
        }
        Dy6s(this.hy9p.submit_btn, "click", this.cdY7R.g6a(this));
        Dy6s(this.hy9p.cancle_btn, "click", this.cdV7O.g6a(this));
        Dy6s(this.hy9p.prompt_msg, "msgShow", this.cdU7N.g6a(this));
        Dy6s(this.hy9p.fb_txt, "keyup", this.vu3x.g6a(this));
        Dy6s(this.hy9p.fb_txt, "input", this.fM8E.g6a(this));
        Dy6s(this.hy9p.contact, "keyup", this.cdI7B.g6a(this));
        Dy6s(this.hy9p.contact, "input", this.bPn2x.g6a(this));
        this.kT0x = q6k.hQ9H.A6u()
    };
    b5g.cdY7R = function (d6d) {
        h6b.bi6c(d6d);
        if (this.cO7H()) return;
        var bo6i = this.hy9p.fb_txt.value.trim();
        var bq6k = bo6i.length;
        var e6c = {type: "json", method: "post", noEnc: true};
        var bOT2x = this.hy9p.contact.value.trim();
        var WA1x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l6f.bpT6N(),
            contact: bOT2x
        };
        var j6d = {content: bo6i, client: "web", xInfo: JSON.stringify(WA1x)}, nV0x = this.kT0x.cef7Y();
        if (nV0x && nV0x.length) {
            j6d.log = nV0x.join("\n")
        }
        if (bq6k == 0) {
            this.hy9p.prompt_msg.innerHTML = "反馈内容不能为空";
            a4e.ba6U(this.hy9p.prompt_msg, "display", "block");
            return
        }
        if (bOT2x.length > 100) {
            this.hy9p.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a4e.ba6U(this.hy9p.prompt_msg, "display", "block");
            return
        }
        this.cO7H(true);
        e6c.data = k6e.cF7y(j6d);
        e6c.onload = this.ccX6R.g6a(this);
        e6c.onerror = this.iO9F.g6a(this);
        v6p.bn6h("/api/feedback/web", e6c)
    };
    b5g.fM8E = function (d6d) {
        var bq6k = this.hy9p.fb_txt.value.trim().length;
        if (bq6k > 0) a4e.ba6U(this.hy9p.prompt_msg, "display", "none");
        du7n.ds7l.browser == "ie" && du7n.ds7l.version < "7.0" ? setTimeout(this.gj8b.g6a(this), 0) : this.gj8b()
    };
    b5g.vu3x = function (d6d) {
        if (d6d.keyCode === 8) this.gj8b()
    };
    b5g.gj8b = function () {
        var bq6k = this.hy9p.fb_txt.value.trim().length;
        this.hy9p.zs.innerHTML = !bq6k ? "0/140" : bq6k + "/140"
    };
    b5g.bPn2x = function (d6d) {
        var bq6k = this.hy9p.contact.value.trim().length;
        if (bq6k > 0) a4e.ba6U(this.hy9p.prompt_msg, "display", "none")
    };
    b5g.cdI7B = function (d6d) {
        if (d6d.keyCode === 8) this.bPn2x()
    };
    b5g.cdV7O = function (d6d) {
        h6b.cq6k(d6d);
        this.bu6o()
    };
    b5g.cdU7N = function (d6d) {
        var f6b = h6b.W6Q(d6d);
        f6b.innerHTML = "请输入反馈内容"
    };
    b5g.cGZ3x = function (cHa3x) {
        var f6b = h6b.W6Q(d6d);
        f6b.innerHTML = ""
    };
    b5g.ccX6R = function (o6i) {
        this.cO7H(false);
        this.bu6o();
        m6g.Z6T.L6F({tip: "意见发送成功", autoclose: true})
    };
    b5g.iO9F = function (o6i) {
        this.cO7H(false);
        m6g.Z6T.L6F({tip: "意见发送失败", autoclose: true})
    };
    b5g.cO7H = function (da7T) {
        return this.dV8N(this.hy9p.submit_btn, da7T, "发送意见", "发送中...")
    };
    b5g.L6F = function () {
        K6E.L6F.call(this);
        this.cO7H(false);
        this.hy9p.fb_txt.value = "";
        this.hy9p.contact.value = "";
        a4e.ba6U(this.hy9p.prompt_msg, "display", "none");
        this.gj8b()
    };
    l6f.ccF6z = function (e6c) {
        e6c = e6c || {};
        if (e6c.title === undefined) e6c.title = "意见反馈";
        m6g.bmi5n.L6F(e6c)
    };
    cW7P.feedback = l6f.feedback = l6f.ccF6z
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, N6H = c5h("nej.ui"), b5g;
    if (!!N6H.yq4u) return;
    N6H.yq4u = NEJ.C();
    b5g = N6H.yq4u.O6I(N6H.eh8Z);
    b5g.cx6r = function () {
        this.hb8T = this.bOE2x();
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.ct6n = e6c.index;
        this.gy8q = e6c.total;
        this.hv9m = e6c.range;
        this.gz8r(e6c.data)
    };
    b5g.bD6x = function () {
        this.bH6B();
        delete this.bk6e;
        delete this.ct6n;
        delete this.gy8q;
        delete this.hv9m
    };
    b5g.iA9r = bs6m;
    b5g.bOE2x = function () {
        var gF8x = +(new Date);
        return function () {
            return "itm-" + ++gF8x
        }
    }();
    b5g.Eh6b = function () {
        return this.hb8T
    };
    b5g.hX9O = function () {
        return this.bk6e
    };
    b5g.gz8r = function (j6d) {
        this.bk6e = j6d || {};
        this.iA9r(this.bk6e)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), N6H = c5h("nej.ui"), b5g, K6E;
    if (!!N6H.vK3x) return;
    N6H.vK3x = NEJ.C();
    b5g = N6H.vK3x.O6I(N6H.yq4u);
    K6E = N6H.vK3x.cs6m;
    b5g.bl6f = function (e6c) {
        this.ccx6r = e6c.pkey || "id";
        this.bm6g(e6c)
    };
    b5g.Ev6p = function (j6d) {
        this.z6t("ondelete", {ext: j6d, id: this.Eh6b(), data: this.hX9O(), body: this.lS0x()})
    };
    b5g.tO3x = function (j6d) {
        this.z6t("onupdate", {ext: j6d, id: this.Eh6b(), data: this.hX9O(), body: this.lS0x()})
    };
    b5g.gz8r = function (j6d) {
        K6E.gz8r.apply(this, arguments);
        this.hb8T = this.bk6e[this.ccx6r] || this.bOE2x()
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, fA8s = NEJ.R, a4e = c5h("nej.e"), k6e = c5h("nej.u"), N6H = c5h("nej.ui"), b5g, iM9D,
        blX5c;
    if (!!N6H.blW5b) return;
    N6H.blW5b = NEJ.C();
    b5g = N6H.blW5b.O6I(N6H.eh8Z);
    b5g.bl6f = function (e6c) {
        this.WY1x = NEJ.X({}, e6c);
        this.fR8J = NEJ.X({}, e6c);
        delete this.WY1x.onchange;
        this.fR8J.onchange = this.gc8U.g6a(this);
        this.bm6g(e6c);
        this.ccs6m({number: e6c.number, label: e6c.label || bb6V})
    };
    b5g.bD6x = function () {
        this.bH6B();
        if (!!this.le0x) {
            this.le0x.T6N();
            delete this.le0x
        }
        delete this.WY1x;
        delete this.fR8J;
        this.cco6i();
        this.n6h.innerHTML = "&nbsp;"
    };
    b5g.cf6Z = function () {
        this.mf0x = iM9D
    };
    b5g.ccs6m = function (j6d) {
        a4e.dH7A(this.n6h, blX5c, j6d);
        var gF8x = a4e.Lf8X();
        this.fR8J.list = a4e.H6B(this.n6h, "js-i-" + gF8x);
        this.fR8J.pbtn = (a4e.H6B(this.n6h, "js-p-" + gF8x) || fA8s)[0];
        this.fR8J.nbtn = (a4e.H6B(this.n6h, "js-n-" + gF8x) || fA8s)[0]
    };
    b5g.bX6R = function () {
        this.cg6a()
    };
    b5g.cHc3x = function (j6d) {
        return a4e.bZ6T(blX5c, j6d)
    };
    b5g.gc8U = function (d6d) {
        if (this.RC0x) return;
        var r6l = d6d.index, cy7r = d6d.total;
        this.RC0x = !0;
        this.Rz0x(r6l, cy7r);
        k6e.bd6X(this.Xj1x, function (tL3x) {
            tL3x.Rz0x(r6l, cy7r)
        });
        this.RC0x = !1;
        this.z6t("onchange", d6d)
    };
    b5g.g6a = function (bI6C) {
        bI6C = a4e.B6v(bI6C);
        if (!bI6C) return this;
        var cp6j = NEJ.X({}, this.WY1x);
        cp6j.parent = bI6C;
        cp6j.index = this.tK2x();
        cp6j.total = this.kp9g();
        var tL3x = this.constructor.A6u(cp6j);
        tL3x.xh4l("onchange", this.fR8J.onchange);
        if (!this.Xj1x) this.Xj1x = [];
        this.Xj1x.push(tL3x);
        return this
    };
    b5g.cco6i = function () {
        var bsK7D = function (tL3x, r6l, i6c) {
            tL3x.T6N();
            i6c.splice(r6l, 1)
        };
        return function () {
            k6e.no0x(this.Xj1x, bsK7D)
        }
    }();
    b5g.kF0x = function (r6l) {
        if (!this.le0x) return;
        this.le0x.kF0x(r6l)
    };
    b5g.tK2x = function () {
        if (!this.le0x) return 1;
        return this.le0x.tK2x()
    };
    b5g.kp9g = function () {
        if (!this.le0x) return 1;
        return this.le0x.kp9g()
    };
    b5g.Rz0x = function (r6l, cy7r) {
        if (!this.le0x) return;
        this.le0x.Rz0x(r6l, cy7r)
    };
    b5g.blS5X = function (cy7r) {
        if (!this.le0x) return;
        this.le0x.blS5X(cy7r)
    };
    iM9D = a4e.sC2x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    blX5c = a4e.ex8p('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        N6H = c5h("nej.ut"), b5g;
    if (!!N6H.Xo1x) return;
    N6H.Xo1x = NEJ.C();
    b5g = N6H.Xo1x.O6I(N6H.cG7z);
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.Xq1x = e6c.pbtn;
        this.cr6l = e6c.nbtn;
        this.Xr1x = e6c.sbtn;
        this.Xs1x = e6c.ebtn;
        this.je9V = e6c.event || "click";
        this.kI0x = e6c.selected || "js-selected";
        this.nZ0x = e6c.disabled || "js-disabled";
        this.ccc6W(e6c.list);
        this.Rz0x(e6c.index || 1, e6c.total || 1)
    };
    b5g.bD6x = function () {
        this.bH6B();
        delete this.bU6O;
        delete this.je9V;
        delete this.Xq1x;
        delete this.cr6l;
        delete this.Xr1x;
        delete this.Xs1x;
        delete this.bOi2x;
        delete this.gy8q;
        delete this.ct6n;
        delete this.kI0x;
        delete this.nZ0x
    };
    b5g.ccc6W = function () {
        var blP5U = function (f6b) {
            this.bU6O.push(f6b);
            this.bW6Q([[f6b, this.je9V, this.cv6p.eu8m(this, 0)]])
        };
        return function (i6c) {
            this.bU6O = [];
            this.bW6Q([[this.Xq1x, "click", this.cv6p.eu8m(this, -1)], [this.cr6l, "click", this.cv6p.eu8m(this, 1)], [this.Xr1x, "click", this.cv6p.eu8m(this, -2)], [this.Xs1x, "click", this.cv6p.eu8m(this, 2)]]);
            k6e.bd6X(i6c, blP5U, this)
        }
    }();
    b5g.Fl6f = function (f6b, r6l) {
        if (r6l == null) {
            f6b.innerText = "";
            a4e.ba6U(f6b, "display", "none");
            a4e.x6r(f6b, this.kI0x)
        } else {
            f6b.innerText = r6l;
            a4e.ba6U(f6b, "display", "");
            r6l == this.ct6n ? a4e.y6s(f6b, this.kI0x) : a4e.x6r(f6b, this.kI0x)
        }
    };
    b5g.blO5T = function () {
        if (this.ct6n <= 1) {
            a4e.y6s(this.Xq1x, this.nZ0x);
            a4e.y6s(this.Xr1x, this.nZ0x)
        } else {
            a4e.x6r(this.Xq1x, this.nZ0x);
            a4e.x6r(this.Xr1x, this.nZ0x)
        }
        if (this.ct6n >= this.gy8q) {
            a4e.y6s(this.cr6l, this.nZ0x);
            a4e.y6s(this.Xs1x, this.nZ0x)
        } else {
            a4e.x6r(this.cr6l, this.nZ0x);
            a4e.x6r(this.Xs1x, this.nZ0x)
        }
    };
    b5g.XD1x = bs6m;
    b5g.blN5S = function () {
        this.XD1x();
        this.blO5T();
        this.z6t("onchange", {last: this.bOi2x, total: this.gy8q, index: this.ct6n, ext: this.blM5R})
    };
    b5g.bNA2x = function (r6l) {
        r6l = parseInt(r6l);
        if (isNaN(r6l) || this.gy8q == null) return !1;
        r6l = Math.max(1, Math.min(r6l, this.gy8q));
        this.bOi2x = this.ct6n;
        this.ct6n = r6l;
        return !0
    };
    b5g.blL5Q = function (cy7r) {
        cy7r = parseInt(cy7r);
        if (isNaN(cy7r) || cy7r < 1) return !1;
        this.gy8q = cy7r;
        return !0
    };
    b5g.cv6p = function (d6d, eY8Q) {
        h6b.cq6k(d6d);
        var F6z = h6b.W6Q(d6d);
        if (!F6z || a4e.bE6y(F6z, this.kI0x) || a4e.bE6y(F6z, this.nZ0x)) return;
        var r6l = F6z.innerText;
        switch (eY8Q) {
            case 1:
            case-1:
                r6l = this.ct6n + eY8Q;
                break;
            case 2:
                r6l = this.gy8q;
                break;
            case-2:
                r6l = 1;
                break
        }
        this.kF0x(r6l)
    };
    b5g.tK2x = function () {
        return this.ct6n
    };
    b5g.kF0x = function (r6l) {
        var cby6s = this.ct6n;
        this.bNA2x(r6l);
        if (cby6s != this.ct6n) this.blN5S();
        return this
    };
    b5g.kp9g = function () {
        return this.gy8q
    };
    b5g.SM0x = function (cy7r) {
        if (this.blL5Q(cy7r) && this.ct6n != null) {
            this.ct6n = 1;
            this.blN5S()
        }
        return this
    };
    b5g.blS5X = function (cy7r) {
        if (this.blL5Q(cy7r)) {
            this.XD1x();
            this.blO5T()
        }
        return this
    };
    b5g.Rz0x = function (r6l, cy7r) {
        if (!this.blL5Q(cy7r) || !this.bNA2x(r6l)) return this;
        this.blN5S();
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), k6e = c5h("nej.u"), cX7Q = c5h("nej.x"), N6H = c5h("nej.ut"),
        b5g;
    if (!!N6H.Rg0x) return;
    N6H.Rg0x = NEJ.C();
    b5g = N6H.Rg0x.O6I(N6H.Xo1x);
    b5g.cx6r = function () {
        this.cD7w();
        var f6b = a4e.dg7Z("span", "zdot");
        f6b.innerText = "...";
        this.XL1x = [f6b.cloneNode(true), f6b]
    };
    b5g.bD6x = function () {
        this.bH6B();
        this.bNv2x()
    };
    b5g.bNv2x = function () {
        a4e.ni0x(this.XL1x[0]);
        a4e.ni0x(this.XL1x[1])
    };
    b5g.XD1x = function () {
        this.blM5R = {last: !1, first: !1, list: this.bU6O};
        this.bNv2x();
        this.Fl6f(this.bU6O[0], 1);
        var bM6G = 1, bq6k = this.bU6O.length;
        if (this.gy8q < bq6k) {
            for (var qT1x; bM6G < bq6k; bM6G++) {
                qT1x = bM6G + 1;
                this.Fl6f(this.bU6O[bM6G], qT1x > this.gy8q ? null : qT1x)
            }
            return
        }
        if (this.ct6n > 1) {
            var cE7x = Math.floor((bq6k - 2) / 2), cbw6q = this.gy8q - bq6k + 2, hC9t = Math.max(2, this.ct6n - cE7x);
            if (this.gy8q >= bq6k) {
                hC9t = Math.min(hC9t, cbw6q)
            }
            if (hC9t > 2) {
                this.bU6O[0].insertAdjacentElement("afterEnd", this.XL1x[0]);
                this.blM5R.first = !0
            }
            for (var r6l; ; bM6G++) {
                r6l = hC9t + bM6G - 1;
                if (r6l > this.ct6n) break;
                this.Fl6f(this.bU6O[bM6G], r6l)
            }
        }
        if (this.ct6n < this.gy8q) {
            var r6l, hC9t = this.ct6n + 1;
            for (var i = 0, l = bq6k - 2; ; i++, bM6G++) {
                r6l = hC9t + i;
                if (bM6G > l || r6l > this.gy8q) break;
                this.Fl6f(this.bU6O[bM6G], r6l)
            }
            if (r6l < this.gy8q) {
                this.bU6O[bM6G].insertAdjacentElement("beforeBegin", this.XL1x[1]);
                this.blM5R.last = !0
            }
            if (r6l <= this.gy8q) {
                this.Fl6f(this.bU6O[bM6G++], this.gy8q)
            }
        }
        for (; bM6G < bq6k; bM6G++) {
            this.Fl6f(this.bU6O[bM6G])
        }
    };
    a4e.cbk6e = cX7Q.cbk6e = function (bI6C, e6c) {
        var C6w = a4e.lB0x(bI6C);
        if (!C6w) return null;
        if (!N6H.bbR3x(C6w, N6H.Rg0x)) {
            e6c = e6c || {};
            var i6c = !e6c.clazz ? a4e.dl7e(C6w) : a4e.H6B(C6w, e6c.clazz);
            e6c.pbtn = i6c.shift();
            e6c.nbtn = i6c.pop();
            e6c.list = i6c;
            delete e6c.clazz
        }
        return N6H.bbR3x(C6w, N6H.Rg0x, e6c || bb6V)
    };
    cX7Q.isChange = !0
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, fA8s = NEJ.R, a4e = c5h("nej.e"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        N6H = c5h("nej.ui"), b5g, K6E, gk8c;
    if (!!N6H.Rb0x) return;
    N6H.Rb0x = NEJ.C();
    b5g = N6H.Rb0x.O6I(N6H.blW5b);
    K6E = N6H.Rb0x.cs6m;
    b5g.bl6f = function (e6c) {
        e6c.number = parseInt(e6c.number) || 9;
        this.bm6g(e6c);
        this.le0x = I6C.Rg0x.A6u(this.fR8J)
    };
    b5g.gc8U = function (d6d) {
        if (!!this.WY1x.noend) {
            var bNe2x = d6d.ext || bb6V, i6c = bNe2x.list || fA8s;
            if (bNe2x.last) {
                a4e.ba6U(i6c[i6c.length - 1], "display", "none")
            }
        }
        K6E.gc8U.apply(this, arguments)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        bc6W = c5h("nej.ui"), N6H = c5h("nej.ut"), b5g;
    if (!!N6H.XZ1x) return;
    N6H.XZ1x = NEJ.C();
    b5g = N6H.XZ1x.O6I(N6H.cG7z);
    b5g.bl6f = function (e6c) {
        this.jr9i = {};
        this.bm6g(e6c);
        this.in9e = a4e.B6v(e6c.parent);
        this.fi8a = {parent: this.in9e};
        this.oX1x = parseInt(e6c.limit) || 10;
        this.zz5E = parseInt(e6c.first) || this.oX1x;
        this.cbh6b(e6c.item);
        this.cbe6Y(e6c.cache || bb6V);
        this.caW6Q(e6c.pager || bb6V);
        this.gz8r()
    };
    b5g.bD6x = function () {
        this.z6t("onbeforerecycle");
        this.QR0x();
        this.bH6B();
        if (this.jr9i.clear) {
            this.S6M.vf3x(this.jr9i.key)
        }
        this.S6M.T6N();
        if (!!this.js9j) {
            this.js9j.T6N();
            delete this.js9j
        }
        delete this.bMT2x;
        delete this.fR8J;
        delete this.Yo1x;
        delete this.S6M;
        delete this.in9e;
        delete this.QO9F;
        delete this.fi8a;
        delete this.jr9i
    };
    b5g.bMQ2x = function () {
        var dh7a = /\{(.*?)\}/gi, caD6x = function (pg1x, j6d) {
            return (pg1x || "{id}{seed}").replace(dh7a, function ($1, $2) {
                var D6x = j6d[$2];
                return D6x == null ? $1 : D6x
            })
        };
        return function (C6w) {
            var J6D = caD6x(this.fi8a.jstIdTempalte, {id: C6w, seed: a4e.Lf8X()});
            if (!this.fi8a.jstIdType) {
                return a4e.B6v(J6D)
            } else if (this.fi8a.jstIdType == 1) {
                return (a4e.H6B(this.in9e, J6D) || [])[0]
            }
        }
    }();
    b5g.Bj5o = function (bM6G, bh6b, fX8P, bq6k) {
        var o6i = {index: 1, total: 1};
        if (bh6b >= bM6G) {
            o6i.index = Math.floor((bh6b - bM6G) / fX8P) + 2
        }
        if (bq6k > bM6G) {
            o6i.total = Math.ceil((bq6k - bM6G) / fX8P) + 1
        }
        return o6i
    };
    b5g.bML2x = function (J6D) {
        delete this.QO9F;
        this.KH8z = J6D;
        this.bW6Q([[this.in9e, "click", this.cak6e.g6a(this)]])
    };
    b5g.cbh6b = function (p6j) {
        if (k6e.fE8w(p6j)) {
            this.bML2x(p6j);
            return
        }
        NEJ.X(this.fi8a, p6j);
        var dZ8R = this.fi8a.klass;
        delete this.fi8a.klass;
        if (k6e.fE8w(dZ8R)) {
            this.bML2x(dZ8R);
            return
        }
        delete this.KH8z;
        this.QO9F = dZ8R;
        this.fi8a.ondelete = this.z6t.g6a(this, "ondelete");
        this.fi8a.onupdate = this.z6t.g6a(this, "onupdate")
    };
    b5g.cbe6Y = function (R6L) {
        var dZ8R = R6L.klass, ki9Z = NEJ.X({}, R6L);
        this.jr9i.key = ki9Z.lkey;
        this.jr9i.data = ki9Z.data || {};
        this.jr9i.clear = !!ki9Z.clear;
        this.fi8a.pkey = ki9Z.key || "id";
        ki9Z.onlistload = this.blD5I.g6a(this);
        ki9Z.onpullrefresh = this.bZW6Q.g6a(this);
        if (!!dZ8R && "onlistchange" in dZ8R) {
            this.bW6Q([[dZ8R, "listchange", this.blC5H.g6a(this)]])
        } else {
            ki9Z.onitemadd = this.YA2x.g6a(this);
            ki9Z.onitemdelete = this.YB2x.g6a(this);
            ki9Z.onitemupdate = this.bMj2x.g6a(this)
        }
        this.S6M = (dZ8R || N6H.RU0x).A6u(ki9Z);
        if (R6L.total != null) {
            this.S6M.SM0x(this.jr9i.key, R6L.total)
        }
        if (!!R6L.list) {
            this.S6M.vl3x(this.jr9i.key, R6L.list)
        }
    };
    b5g.caW6Q = function (tL3x) {
        this.bMT2x = tL3x.klass || bc6W.Rb0x;
        this.fR8J = NEJ.X({}, tL3x);
        if (k6e.eJ8B(tL3x.parent)) {
            this.fR8J.parent = tL3x.parent[0];
            this.Qp9g = tL3x.parent.slice(1);
            if (!this.Qp9g || !this.Qp9g.length) {
                delete this.Qp9g
            }
        }
        delete this.fR8J.klass
    };
    b5g.QR0x = function () {
        var gH8z = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z6t("onbeforelistclear", {parent: this.in9e});
            if (!!this.fL8D && this.fL8D.length > 0) {
                this.fL8D = this.QO9F.T6N(this.fL8D);
                delete this.fL8D
            }
            if (gH8z.test(this.in9e.tagName)) {
                a4e.bTk4o(this.in9e)
            } else {
                this.in9e.innerHTML = ""
            }
        }
    }();
    b5g.blB5G = function (YI2x) {
        if (!!this.fR8J.fixed) return;
        a4e.ba6U(this.fR8J.parent, "display", YI2x);
        k6e.bd6X(this.Qp9g, function (bI6C) {
            a4e.ba6U(bI6C, "display", YI2x)
        }, this)
    };
    b5g.blA5F = function () {
        var r6l = this.fR8J.index || 1;
        delete this.fR8J.index;
        if (!!this.js9j) {
            r6l = this.js9j.tK2x()
        }
        this.Bn5s({last: r6l, index: r6l})
    };
    b5g.Bn5s = function (d6d) {
        this.z6t("onpagechange", d6d)
    };
    b5g.bMf2x = function (bh6b) {
        this.jr9i.offset = bh6b;
        this.Wf1x()
    };
    b5g.bMe2x = function (e6c) {
        return e6c
    };
    b5g.Wf1x = function () {
        this.PI9z();
        var j6d = this.jr9i.data;
        j6d.offset = this.jr9i.offset;
        var pU1x = j6d.offset == 0;
        j6d.total = pU1x;
        this.jr9i.limit = pU1x ? this.zz5E : this.oX1x;
        j6d.limit = this.jr9i.limit;
        this.S6M.lA0x(this.bMe2x(NEJ.X({}, this.jr9i)))
    };
    b5g.blD5I = function (e6c) {
        if (e6c.key != this.jr9i.key || e6c.offset != this.jr9i.offset) return;
        this.YU2x();
        var i6c = this.S6M.hE9v(e6c.key);
        if (!i6c || !i6c.length) {
            this.blz5E();
            return
        }
        var fX8P = e6c.limit, bh6b = e6c.offset;
        if (this.bly5D(i6c, bh6b, fX8P)) return;
        this.z6t("onbeforelistrender", {list: i6c, offset: bh6b, parent: this.in9e});
        if (!!this.KH8z) {
            this.fi8a.xlist = i6c;
            this.fi8a.beg = bh6b;
            this.fi8a.end = Math.min(i6c.length, bh6b + fX8P) - 1;
            this.fi8a.act = "list";
            var dT8L = a4e.bZ6T(this.KH8z, this.fi8a);
            this.Py9p(dT8L)
        } else {
            this.fi8a.limit = fX8P;
            this.fi8a.offset = bh6b;
            var hp9g = a4e.BM5R(i6c, this.QO9F, this.fi8a);
            this.Pu9l(hp9g)
        }
        this.z6t("onafterlistrender", {list: i6c, offset: bh6b, parent: this.in9e})
    };
    b5g.bZW6Q = function (e6c) {
        if (!this.Yo1x) return;
        delete this.Yo1x;
        this.YU2x("onafterpullrefresh");
        this.gz8r()
    };
    b5g.bLQ2x = function (r6l, cy7r) {
        if (!!this.js9j) {
            var wX4b = this.js9j.tK2x(), bZD6x = this.js9j.kp9g();
            if (wX4b > cy7r || cy7r != bZD6x) {
                this.js9j.T6N();
                delete this.js9j;
                this.Bn5s({last: wX4b, index: Math.min(r6l, cy7r)});
                return !0
            }
        } else {
            this.fR8J.index = r6l;
            this.fR8J.total = cy7r;
            this.js9j = this.bMT2x.A6u(this.fR8J);
            this.js9j.xh4l("onchange", this.Bn5s.g6a(this));
            k6e.bd6X(this.Qp9g, function (bI6C) {
                this.js9j.g6a(bI6C)
            }, this)
        }
    };
    b5g.Ze2x = function () {
        var gF8x = +(new Date);
        return function (j6d) {
            var C6w = j6d[this.fi8a.pkey];
            if (!C6w) {
                j6d["dirty-data"] = !0;
                j6d[this.fi8a.pkey] = "dirty-" + gF8x++
            }
            return j6d
        }
    }();
    b5g.Zf2x = function (j6d) {
        var C6w = j6d[this.fi8a.pkey];
        if (!!j6d["dirty-data"]) {
            delete j6d["dirty-data"];
            delete j6d[this.fi8a.pkey]
        }
        return C6w
    };
    b5g.Zg2x = function () {
        var bZh6b = function (kX0x, mL0x) {
            this.in9e.insertAdjacentElement(kX0x, mL0x)
        };
        return function (kX0x, j6d) {
            var Ll8d = [j6d];
            if (!!this.KH8z) {
                this.fi8a.xlist = Ll8d;
                this.fi8a.beg = 0;
                this.fi8a.end = 0;
                this.fi8a.act = "add";
                this.Py9p(a4e.bZ6T(this.KH8z, this.fi8a), kX0x)
            } else {
                this.fi8a.limit = 1;
                this.fi8a.offset = 0;
                this.fi8a.parent = bZh6b.g6a(this, kX0x);
                var hp9g = a4e.BM5R(Ll8d, this.QO9F, this.fi8a);
                this.fi8a.parent = this.in9e;
                this.Pu9l(hp9g)
            }
        }
    }();
    b5g.PI9z = bs6m;
    b5g.YU2x = function (V6P) {
        var d6d = {parent: this.in9e};
        this.z6t(V6P || "onafterlistload", d6d);
        if (!d6d.stopped) {
            a4e.ni0x(this.cu6o)
        }
    };
    b5g.bly5D = bs6m;
    b5g.Zk2x = function (bG6A, kX0x) {
        if (k6e.fE8w(bG6A)) {
            if (!this.cu6o) this.cu6o = a4e.dg7Z("div");
            this.cu6o.innerHTML = bG6A
        } else {
            this.cu6o = bG6A
        }
        this.in9e.insertAdjacentElement(kX0x || "beforeEnd", this.cu6o)
    };
    b5g.yM5R = function (V6P, kg9X, kX0x) {
        var d6d = {parent: this.in9e};
        this.z6t(V6P, d6d);
        if (!d6d.stopped) {
            this.Zk2x(d6d.value || kg9X, kX0x)
        }
    };
    b5g.blz5E = bs6m;
    b5g.Py9p = bs6m;
    b5g.Pu9l = bs6m;
    b5g.cak6e = function () {
        var gH8z = /^(?:delete|update)$/;
        return function (d6d) {
            var f6b = h6b.W6Q(d6d, "d:action");
            if (!f6b) return;
            var U6O = a4e.t6n(f6b, "action");
            if (!gH8z.test(U6O)) return;
            var C6w = a4e.t6n(f6b, "id");
            if (!C6w) return;
            var p6j = this.S6M.eH8z(C6w);
            if (!p6j) return;
            h6b.bi6c(d6d);
            this.z6t("on" + U6O, {data: p6j, id: p6j[this.fi8a.pkey], body: a4e.B6v(this.bMQ2x(C6w))})
        }
    }();
    b5g.YA2x = bs6m;
    b5g.Wj1x = function (d6d) {
        var j6d = d6d.data || {}, e6c = {data: j6d, key: this.jr9i.key, id: j6d[this.fi8a.pkey]};
        this.z6t("onbeforedelete", e6c);
        this.S6M.Jq7j(e6c)
    };
    b5g.YB2x = bs6m;
    b5g.Wn1x = function (d6d) {
        var j6d = d6d.data || {}, e6c = {data: j6d, key: this.jr9i.key};
        this.z6t("onbeforeupdate", e6c);
        this.S6M.VZ1x(e6c)
    };
    b5g.bMj2x = function (d6d) {
        this.Pd9U(d6d, "onafterupdate");
        if (d6d.stopped) return;
        var C6w = d6d.data[this.fi8a.pkey];
        if (!!this.fL8D) {
            var p6j = a4e.bOc2x(C6w);
            if (!!p6j) p6j.gz8r(d6d.data)
        } else {
            var f6b = a4e.B6v(C6w + "" + a4e.Lf8X());
            if (!f6b) return;
            var i6c = this.S6M.hE9v(d6d.key), r6l = k6e.dj7c(i6c, d6d.data);
            if (r6l < 0) return;
            this.fi8a.list = i6c;
            this.fi8a.beg = r6l;
            this.fi8a.end = r6l;
            this.fi8a.act = "update";
            var dT8L = a4e.bZ6T(this.KH8z, this.fi8a);
            f6b.insertAdjacentHTML("afterEnd", dT8L);
            a4e.cJ7C(f6b)
        }
    };
    b5g.Pd9U = function (d6d, V6P) {
        var p6j = d6d.data;
        if (!p6j || p6j[this.fi8a.pkey] == null) {
            this.z6t("onerror", d6d);
            d6d.stopped = !0
        }
        if (!d6d.stopped) {
            this.z6t(V6P, d6d)
        }
    };
    b5g.blr5w = bs6m;
    b5g.bln5s = bs6m;
    b5g.blC5H = function (d6d) {
        if (d6d.key != this.jr9i.key) return;
        switch (d6d.action) {
            case"add":
                this.YA2x(d6d);
                break;
            case"delete":
                this.YB2x(d6d);
                break;
            case"update":
                this.bMj2x(d6d);
                break;
            case"refresh":
                this.gz8r();
                break;
            case"unshift":
                this.bln5s(d6d.offset, d6d.limit);
                break;
            case"append":
                this.blr5w(d6d.offset, d6d.limit);
                break
        }
    };
    b5g.qd1x = function (p6j) {
        this.Wn1x({data: p6j})
    };
    b5g.mE0x = function (p6j) {
        this.Wj1x({data: p6j})
    };
    b5g.tp2x = function (p6j) {
        this.S6M.jA9r({data: p6j, key: this.jr9i.key})
    };
    b5g.to2x = function () {
        return this.S6M
    };
    b5g.blm5r = function (j6d) {
        this.Zg2x("afterBegin", this.Ze2x(j6d));
        return this.Zf2x(j6d)
    };
    b5g.bKB1x = function (j6d) {
        this.Zg2x("beforeEnd", this.Ze2x(j6d));
        return this.Zf2x(j6d)
    };
    b5g.gz8r = function () {
        this.QR0x();
        this.blA5F()
    };
    b5g.cHf4j = function () {
        this.S6M.vf3x(this.jr9i.key);
        this.gz8r()
    };
    b5g.bsj7c = function () {
        if (!!this.Yo1x) return;
        this.Yo1x = !0;
        this.yM5R("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.S6M.bsj7c({key: this.jr9i.key, data: this.jr9i.data})
    };
    b5g.kp9g = function () {
        return this.S6M.kp9g(this.jr9i.key)
    };
    b5g.bKu1x = function () {
        return this.js9j
    };
    b5g.bdG3x = function () {
        return this.S6M.bdG3x(this.jr9i.key)
    };
    b5g.bYs5x = function () {
        return this.fL8D
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, fA8s = NEJ.R, k6e = c5h("nej.u"), a4e = c5h("nej.e"), N6H = c5h("nej.ut"), b5g, K6E;
    if (!!N6H.kb9S) return;
    N6H.kb9S = NEJ.C();
    b5g = N6H.kb9S.O6I(N6H.XZ1x);
    K6E = N6H.kb9S.cs6m;
    b5g.Bj5o = function (bh6b, bq6k) {
        return K6E.Bj5o.call(this, this.zz5E, bh6b, this.oX1x, bq6k)
    };
    b5g.blk5p = function (r6l) {
        var bh6b = 0;
        if (r6l > 1) bh6b = this.zz5E + (r6l - 2) * this.oX1x;
        return bh6b
    };
    b5g.Bn5s = function (d6d) {
        K6E.Bn5s.apply(this, arguments);
        if (!d6d.stopped) {
            this.bMf2x(this.blk5p(d6d.index))
        }
    };
    b5g.PI9z = function () {
        this.QR0x();
        this.yM5R("onbeforelistload", "列表加载中...")
    };
    b5g.YU2x = function () {
        K6E.YU2x.apply(this, arguments);
        this.QR0x()
    };
    b5g.bly5D = function (i6c, bh6b, fX8P) {
        var by6s = this.Bj5o(bh6b, i6c.length);
        if (this.bLQ2x(by6s.index, by6s.total)) return !0;
        this.blB5G(by6s.total > 1 ? "" : "none")
    };
    b5g.blz5E = function () {
        this.yM5R("onemptylist", "没有列表数据！")
    };
    b5g.Zk2x = function (bG6A, kX0x) {
        if (!kX0x && k6e.fE8w(bG6A)) {
            this.in9e.innerHTML = bG6A;
            return
        }
        K6E.Zk2x.apply(this, arguments)
    };
    b5g.Py9p = function (dT8L) {
        this.in9e.innerHTML = dT8L
    };
    b5g.Pu9l = function (hp9g) {
        this.fL8D = hp9g
    };
    b5g.YA2x = function (d6d) {
        this.Pd9U(d6d, "onafteradd");
        if (!d6d.stopped) this.gz8r()
    };
    b5g.YB2x = function (d6d) {
        this.Pd9U(d6d, "onafterdelete");
        if (!d6d.stopped) this.gz8r()
    };
    b5g.blr5w = function (bh6b, fX8P) {
        var r6l = 1;
        if (!!this.js9j) {
            r6l = this.js9j.tK2x()
        }
        var jQ9H = this.blk5p(r6l), fN8F = jQ9H + (r6l > 1 ? this.oX1x : this.zz5E);
        if (bh6b >= fN8F && !!this.js9j) {
            var by6s = this.Bj5o(0, this.kp9g());
            this.js9j.blS5X(by6s.total);
            this.blB5G(by6s.total > 1 ? "" : "none")
        } else {
            this.gz8r()
        }
    };
    b5g.bln5s = function (bh6b, fX8P) {
        var r6l = 1;
        if (!!this.js9j) {
            r6l = this.js9j.tK2x()
        }
        var jQ9H = this.blk5p(r6l), by6s = this.Bj5o(jQ9H, this.kp9g());
        this.Bn5s({last: r6l, index: by6s.index})
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), I6C = c5h("nej.ut"),
        k6e = c5h("nej.u"), l6f = c5h("nm.x"), q6k = c5h("nm.d"), w6q = c5h("nm.w"), fo8g = 40, b5g, K6E;
    w6q.ZF2x = NEJ.C();
    b5g = w6q.ZF2x.O6I(I6C.cG7z);
    K6E = w6q.ZF2x.cs6m;
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.OO9F = e6c.inputer;
        this.blj5o = e6c.tipper;
        this.bW6Q([[this.OO9F, "input", this.fM8E.g6a(this)]])
    };
    b5g.bD6x = function () {
        this.bH6B();
        this.Lw8o(null, null)
    };
    b5g.fM8E = function (d6d) {
        if (d6d && d6d.type == "keyup" && (d6d.keyCode != 8 || d6d.keyCode != 68)) return;
        var V6P = this.OO9F.value, cHg4k;
        if (l6f.OC9t(V6P) > fo8g) {
            this.OO9F.value = l6f.BD5I(V6P, fo8g);
            this.Lw8o("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g6a(this))
        } else if (V6P.indexOf("#") >= 0 || V6P.indexOf("@") >= 0) {
            this.Lw8o("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Lw8o(null, null);
            this.z6t("onchange", {value: V6P})
        }
    };
    b5g.bYc5h = function () {
        this.fM8E()
    };
    b5g.Lw8o = function () {
        var C6w = 0;
        return function (dJ7C, bKl1x) {
            if (!!C6w) window.clearTimeout(C6w);
            if (!dJ7C) {
                a4e.y6s(this.blj5o, "f-vhide");
                this.bKi1x = !1;
                return
            }
            this.blj5o.innerHTML = '<i class="u-icn u-icn-25"></i>' + dJ7C;
            a4e.x6r(this.blj5o, "f-vhide");
            this.bKi1x = !0;
            if (k6e.gI8A(bKl1x)) C6w = window.setTimeout(function () {
                this.Lw8o(null, null);
                bKl1x()
            }.g6a(this), 1e3)
        }
    }();
    b5g.bKh1x = function () {
        if (this.bKi1x) return !1;
        if (l6f.jW9N(this.OO9F.value)) {
            this.Lw8o("歌单名不能为空");
            return !1
        }
        return !0
    };
    b5g.fT8L = function () {
        return this.OO9F.value
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, h6b = c5h("nej.v"), a4e = c5h("nej.e"), v6p = c5h("nej.j"), m6g = c5h("nm.l"),
        w6q = c5h("nm.w"), bC6w = c5h("nej.ui"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), b5g, K6E;
    m6g.ZQ2x = NEJ.C();
    b5g = m6g.ZQ2x.O6I(m6g.ek8c);
    K6E = m6g.ZQ2x.cs6m;
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.H6B(this.n6h, "j-flag");
        this.ZR2x = {inputer: i6c[0], tipper: i6c[1]};
        this.iF9w = {onerror: this.bKc1x.g6a(this), onitemadd: this.bKc1x.g6a(this)};
        this.lN0x = i6c[2];
        h6b.s6m(i6c[2], "click", this.DJ6D.g6a(this));
        h6b.s6m(i6c[3], "click", this.CE6y.g6a(this));
        h6b.s6m(this.n6h, "keypress", this.bJW1x.g6a(this))
    };
    b5g.cf6Z = function () {
        this.cd6X = "m-wgt-create"
    };
    b5g.bl6f = function (e6c) {
        e6c.clazz = " m-layer-w2";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "新建歌单";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bm6g(e6c);
        this.ZR2x.inputer.value = e6c.name || "";
        this.uc3x = w6q.ZF2x.A6u(this.ZR2x);
        this.uc3x.bYc5h();
        this.S6M = q6k.ic9T.A6u(this.iF9w);
        setTimeout(function () {
            this.ZR2x.inputer.focus()
        }.g6a(this), 0)
    };
    b5g.bD6x = function () {
        this.bH6B();
        if (this.uc3x) {
            this.uc3x.T6N();
            delete this.uc3x
        }
        this.te2x(!1);
        this.ZR2x.inputer.value = ""
    };
    b5g.te2x = function (Oy9p) {
        this.oM1x = Oy9p;
        if (Oy9p) {
            this.lN0x.innerHTML = "<i>新建中...</i>";
            a4e.y6s(this.lN0x, "u-btn2-dis")
        } else {
            this.lN0x.innerHTML = "<i>新 建</i>";
            a4e.x6r(this.lN0x, "u-btn2-dis")
        }
    };
    b5g.DJ6D = function () {
        if (this.oM1x || !this.uc3x.bKh1x()) return;
        var cp6j = {key: "playlist_new-" + GUser.userId, data: {name: this.uc3x.fT8L()}, offset: 1};
        this.S6M.jA9r(cp6j);
        this.te2x(!0)
    };
    b5g.bKc1x = function (d6d) {
        var ci6c = (d6d.result || bb6V).code;
        if (!ci6c) {
            this.z6t("onsuccess", d6d.data)
        } else {
            this.z6t("onerror", d6d)
        }
        this.bu6o()
    };
    b5g.CE6y = function () {
        this.bu6o()
    };
    b5g.bJW1x = function (d6d) {
        if (d6d.keyCode == 13) this.DJ6D()
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        I6C = c5h("nej.ut"), v6p = c5h("nej.j"), l6f = c5h("nm.x"), q6k = c5h("nm.d"), m6g = c5h("nm.l"), b5g, K6E;
    m6g.ble5j = NEJ.C();
    b5g = m6g.ble5j.O6I(m6g.ek8c);
    K6E = m6g.ble5j.cs6m;
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.H6B(this.n6h, "j-flag");
        this.iK9B = {
            limit: 301,
            parent: i6c[1],
            cache: {klass: q6k.ic9T, lkey: "playlist_new-" + GUser.userId, onlisterror: this.blc5h.g6a(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l6f.BB5G, escape: k6e.dG7z}
        };
        this.iF9w = {onsuccess: this.bai2x.g6a(this), onerror: this.eK8C.g6a(this)};
        h6b.s6m(i6c[0], "click", this.DJ6D.g6a(this));
        h6b.s6m(i6c[1], "click", this.lI0x.g6a(this))
    };
    b5g.cf6Z = function () {
        this.cd6X = "m-wgt-subscribe"
    };
    b5g.bl6f = function (e6c) {
        e6c.parent = e6c.parent || document.body;
        e6c.clazz = " m-layer-w2";
        e6c.title = "添加到歌单";
        e6c.draggable = !0;
        e6c.mask = !0;
        this.bm6g(e6c);
        this.bak2x = (e6c.tracks || []).reverse();
        this.iK9B.item.size = this.bak2x.length;
        this.iF9w.name = e6c.name || "";
        this.bJH1x = q6k.wI4M.A6u({onaddsuccess: this.BJ5O.g6a(this)});
        this.ti2x = q6k.ic9T.A6u({onlistload: this.bXh5m.g6a(this)});
        this.ti2x.bGu0x();
        k6e.bd6X(this.bak2x, function (p6j, r6l, i6c) {
            if (!k6e.lO0x(p6j)) {
                i6c[r6l] = this.bJH1x.eH8z(p6j) || p6j
            }
        }, this)
    };
    b5g.bXh5m = function () {
        if (this.dK7D) this.dK7D.T6N();
        this.dK7D = I6C.kb9S.A6u(this.iK9B)
    };
    b5g.DJ6D = function () {
        this.bu6o();
        if (this.DX6R) this.DX6R.T6N();
        this.DX6R = m6g.ZQ2x.A6u(this.iF9w);
        this.DX6R.L6F()
    };
    b5g.lI0x = function () {
        var bXf5k = function (f6b) {
            while (f6b && f6b != document) {
                if (f6b.tagName.toLowerCase() == "li") {
                    return f6b
                }
                f6b = f6b.parentNode
            }
        };
        return function (d6d) {
            h6b.cq6k(d6d);
            var F6z = h6b.W6Q(d6d), LR8J = bXf5k(F6z);
            if (!!LR8J && !a4e.bE6y(LR8J, "dis")) {
                this.bai2x({id: a4e.t6n(LR8J, "id")})
            }
        }
    }();
    b5g.bai2x = function (d6d) {
        var C6w = d6d.id;
        if (!C6w || !this.bak2x.length) return;
        this.bJH1x.jA9r({key: "track_playlist-" + C6w, data: {tracks: this.bak2x, pid: C6w}});
        this.bu6o()
    };
    b5g.BJ5O = function () {
        this.z6t("onsuccess");
        m6g.Z6T.L6F({tip: "收藏成功"})
    };
    b5g.eK8C = function (d6d) {
        this.bu6o();
        this.z6t("onerror", d6d);
        var cU7N = "收藏失败";
        switch (d6d.code) {
            case 405:
                cU7N = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cU7N = "歌单数量超过限制";
                break;
            case 502:
                cU7N = "歌曲已经存在"
        }
        m6g.Z6T.L6F({tip: cU7N, type: 2})
    };
    b5g.blc5h = function () {
        this.bu6o();
        m6g.Z6T.L6F({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l6f.ms0x = function (e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        m6g.ble5j.L6F(e6c)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, du7n = c5h("nej.p"), a4e = c5h("nej.e"), h6b = c5h("nej.v"),
        v6p = c5h("nej.j"), k6e = c5h("nej.u"), l6f = c5h("nm.x");
    var blb5g, oF1x, Y6S = decodeURIComponent(location.href),
        jM9D = /.+(https?:\/\/.+\/proxy.html)/.test(Y6S) ? RegExp.$1 : "";
    if (!!jM9D) {
        v6p.uV3x("mail_proxy_url", jM9D)
    } else {
        jM9D = v6p.tA2x("mail_proxy_url") || "about:blank"
    }
    blb5g = a4e.bbF3x({
        src: jM9D, onload: function () {
            oF1x = true
        }
    });
    var bJC1x = function () {
        v6p.gB8t("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var bXc5h = function () {
        if (du7n.ds7l.browser == "ie" && parseInt(du7n.ds7l.version) < 9) {
            l6f.fs8k({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l6f.LW8O = function (u6o, C6w, U6O) {
        if (!bXc5h()) return;
        bJC1x();
        if (U6O == "stop") {
            if (!oF1x) throw"proxy not loaded";
            bJC1x();
            blb5g.contentWindow.location.replace(jM9D + "#" + k6e.cF7y({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            blb5g.contentWindow.location.replace(jM9D + "#" + k6e.cF7y({
                to: "ifrmMusic",
                message: JSON.stringify({type: u6o, id: C6w, s: +(new Date), action: U6O})
            }))
        }
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), v6p = c5h("nej.j"),
        k6e = c5h("nej.u"), l6f = c5h("nm.x"), m6g = c5h("nm.l"), q6k = c5h("nm.d");
    var kT0x = q6k.hQ9H.A6u();
    var oI1x = q6k.wI4M.A6u({onlistload: bWX5c, onitemload: bWW5b, onerror: eK8C});
    var Ef6Z = q6k.ra1x.A6u({onlistload: bWH5M, onitemload: bWE5J, onerror: eK8C});
    var bJi1x = {};

    function wR4V(d6d) {
        var f6b = h6b.W6Q(d6d, "d:resAction"), U6O = a4e.t6n(f6b, "resAction");
        if (f6b && (U6O == "play" || U6O == "addto")) {
            var u6o = parseInt(a4e.t6n(f6b, "resType"));
            bJg1x({
                action: U6O,
                type: u6o,
                id: a4e.t6n(f6b, "resId"),
                from: a4e.t6n(f6b, "resFrom"),
                data: a4e.t6n(f6b, "resData"),
                order: a4e.t6n(f6b, "resOrder"),
                node: f6b
            });
            if (u6o != 13) bJf1x(f6b)
        }
    }

    function bJg1x(bP6J) {
        var U6O = bP6J.action, u6o = bP6J.type, C6w = bP6J.id, eb8T = bP6J.from, j6d = bP6J.data, sJ2x = bP6J.order,
            e6c = {
                limit: 1e3,
                offset: 0,
                data: {id: C6w},
                ext: {id: C6w, action: U6O, type: u6o, from: eb8T, data: j6d, node: bP6J.node}
            };
        if (U6O != "play" && U6O != "addto" || !u6o) return;
        if (window.GRef && GRef == "mail") {
            l6f.LW8O(u6o, C6w, U6O);
            return
        }
        switch (u6o) {
            case 13:
                e6c.key = "track_playlist-" + C6w;
                oI1x.lA0x(e6c);
                break;
            case 17:
                e6c.key = "program";
                e6c.id = C6w;
                Ef6Z.Vw1x(e6c);
                if (U6O == "play") {
                    v6p.bn6h("/api/dj/program/listen", {query: {id: C6w}})
                }
                break;
            case 18:
                e6c.key = "track";
                e6c.id = C6w;
                oI1x.Vw1x(e6c);
                break;
            case 19:
                e6c.key = "track_album-" + C6w;
                oI1x.lA0x(e6c);
                break;
            case 24:
                e6c.key = "track_day";
                oI1x.lA0x(e6c);
                break;
            case 2:
                e6c.key = "track_artist_top-" + C6w;
                oI1x.lA0x(e6c);
                break;
            case 70:
                e6c.key = "program_djradio-" + C6w + "-" + sJ2x;
                e6c.data.radioId = C6w;
                e6c.data.asc = sJ2x == 2;
                Ef6Z.lA0x(e6c);
                break
        }
    }

    function bJc1x(i6c) {
        var o6i = [];
        k6e.bd6X(i6c, function (p6j) {
            if (p6j.mainSong) {
                p6j.mainSong.program = p6j;
                o6i.push(p6j.mainSong);
                p6j.localupdatetime = +(new Date);
                oI1x.ceE7x(p6j.mainSong);
                p6j.mainTrackId = p6j.mainSong.id;
                delete p6j.mainSong
            } else {
                var bJb1x = oI1x.eH8z(p6j.mainTrackId);
                bJb1x && o6i.push(bJb1x)
            }
        });
        return o6i
    }

    function baP3x(i6c, e6c) {
        var ss2x = e6c.action == "play" && e6c.type != 17 && e6c.type != 18, ga8S = e6c.action == "play";
        if (!i6c.length) return;
        if (e6c.type == 19) {
            i6c = l6f.Iw7p(i6c, true, {play: true}, {source: "album", sourceid: e6c.id})
        } else {
            i6c = l6f.Iw7p(i6c, true, {play: true})
        }
        k6e.bd6X(i6c, function (p6j) {
            p6j.source = l6f.bpV6P({fid: e6c.from, fdata: e6c.data, type: e6c.type, rid: e6c.id}, p6j.id)
        });
        top.player.addTo(i6c, ss2x, ga8S);
        kT0x.TW0x({rid: e6c.id, type: e6c.type, hash: l6f.MD8v(), play: ga8S, source: e6c.from, sourceid: e6c.data})
    }

    function bWX5c(d6d) {
        var ew8o = d6d.ext || {};
        i6c = oI1x.hE9v(d6d.key);
        baP3x(i6c, ew8o);
        if (ew8o.type == 13 && ew8o.action == "play" && i6c && i6c.length > 0) {
            bJf1x(ew8o.node);
            v6p.bn6h("/api/playlist/update/playcount", {query: {id: ew8o.id}})
        }
    }

    function bWW5b(d6d) {
        var i6c = [oI1x.eH8z(d6d.id)], bj6d = i6c[0], rl1x = l6f.qn1x(bj6d), sH2x = bj6d.privilege || {};
        if (rl1x == 10) {
            l6f.vg3x(sH2x.fee || bj6d.fee, bj6d.id, "song", null, sH2x)
        } else if (rl1x == 100) {
            l6f.is9j(null, null, null, true, bj6d)
        } else if (rl1x == 11) {
            l6f.bHE1x(bj6d.id, 18)
        } else {
            baP3x(i6c, d6d.ext)
        }
    }

    function bWH5M(d6d) {
        var i6c = bJc1x(Ef6Z.hE9v(d6d.key));
        baP3x(i6c, d6d.ext)
    }

    function bWE5J(d6d) {
        var i6c = bJc1x([Ef6Z.eH8z(d6d.id)]);
        baP3x(i6c, d6d.ext)
    }

    function eK8C() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bJf1x(f6b) {
        var u6o = a4e.t6n(f6b, "resType"), C6w = a4e.t6n(f6b, "resId"), J6D = u6o + "-" + C6w;
        if (bJi1x[J6D]) return;
        var bJa1x = a4e.B6v("play-count"), bkU5Z = a4e.H6B(f6b.parentNode, "nb"), Ng8Y = null;
        if (bJa1x) {
            Ng8Y = bJa1x
        } else {
            Ng8Y = !!bkU5Z && !!bkU5Z[0] ? bkU5Z[0] : null
        }
        if (Ng8Y) {
            var cE7x = Ng8Y.innerHTML;
            if (/^\d+$/.test(cE7x)) {
                Ng8Y.innerText = +cE7x + 1
            }
            bJi1x[J6D] = true
        }
    }

    l6f.bVG5L = function (f6b) {
        h6b.s6m(f6b || document.body, "click", wR4V.g6a(this))
    };
    l6f.bVD5I = function (U6O, u6o, C6w) {
        bJg1x({action: U6O, type: u6o, id: C6w})
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), k6e = c5h("nej.u"), v6p = c5h("nej.j"),
        I6C = c5h("nej.ut"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), b5g, K6E;
    q6k.fm8e({
        "share-all": {
            url: "/api/share/friends/resource", format: function (o6i, e6c) {
                this.bVx5C(o6i, e6c)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (o6i, e6c) {
                this.z6t("onshareall", e6c.result)
            }, onerror: function (o6i, e6c) {
                this.z6t("onshareall", e6c.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (o6i, e6c) {
                e6c.options.picUrl = o6i.picUrl;
                this.bIx1x(e6c.options, e6c.result)
            }, onerror: function (o6i, e6c) {
                this.z6t("onshareall", e6c.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (Q6K, e6c) {
                this.pN1x("vid_info-" + e6c.data.nosKey, Q6K);
                return Q6K
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e6c) {
            }, format: function (o6i, e6c) {
                e6c.data = e6c.data2;
                this.co6i("share-all", e6c)
            }, onerror: "onshareerror"
        }
    });
    q6k.bkR5W = NEJ.C();
    b5g = q6k.bkR5W.O6I(q6k.hK9B);
    b5g.bVl5q = function () {
        var uy3x = function (Q6K, e6c) {
            e6c.times++;
            if (e6c.times > 10) {
                this.z6t("onvinfoerror", e6c.key, Q6K)
            } else {
                setTimeout(ey8q.g6a(this, e6c), e6c.times * 1e3)
            }
        };
        var xC4G = function (Q6K, e6c) {
            this.z6t("onvinfo", e6c.key, Q6K)
        };
        var ey8q = function (e6c) {
            var Y6S = e6c.url;
            v6p.bn6h(Y6S + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xC4G.eu8m(this, e6c),
                onerror: uy3x.eu8m(this, e6c)
            })
        };
        return function (e6c) {
            e6c.times = 0;
            ey8q.call(this, e6c)
        }
    }();
    b5g.cHk4o = function () {
        var EA6u;
        var uy3x = function (Q6K, e6c) {
            if (Q6K.code > 0) {
                clearInterval(this.EB6v);
                this.z6t("onviderror", e6c.data.nosKey)
            }
        };
        var xC4G = function (J6D, Q6K) {
            if (Q6K.vid && Q6K.covers) {
                clearInterval(this.EB6v);
                this.z6t("onvid", J6D, Q6K)
            }
        };
        var ey8q = function (e6c) {
            if (+(new Date) - EA6u > 60 * 60 * 1e3) {
                clearInterval(this.EB6v);
                this.z6t("onviderror", e6c.data.nosKey);
                return
            }
            e6c.onload = xC4G.g6a(this, e6c.data.nosKey);
            e6c.onerror = uy3x.g6a(this);
            this.co6i("vid-get", e6c)
        };
        return function (e6c) {
            if (!e6c || !e6c.data) return;
            EA6u = +(new Date);
            this.EB6v = clearInterval(this.EB6v);
            this.EB6v = setInterval(ey8q.g6a(this, e6c), 1e4);
            ey8q.apply(this, arguments)
        }
    }();
    b5g.bVd5i = function () {
        this.EB6v = clearInterval(this.EB6v)
    };
    b5g.bVx5C = function (o6i, oq1x) {
        if (o6i.event && oq1x.snsTypes) {
            if (oq1x.pics) {
                var bIo1x = [];
                for (var i = 0, len = oq1x.pics.length; i < len; i++) {
                    bIo1x[i] = oq1x.pics[i].originId
                }
                this.co6i("share_img_compound", {data: {picIds: bIo1x.join(",")}, options: oq1x, result: o6i})
            } else {
                oq1x.picUrl = oq1x.picUrl;
                this.bIx1x(oq1x, o6i)
            }
        } else {
            this.z6t("onshareall", o6i)
        }
        var vA3x = q6k.hQ9H.A6u();
        vA3x.fu8m(oq1x.isPub ? "pubevent" : "shareevent", {id: o6i.id})
    };
    b5g.bIx1x = function (oq1x, o6i) {
        var cp6j = {}, d6d = o6i.event || {};
        cp6j.eventid = d6d.id;
        cp6j.eventtype = d6d.type;
        oq1x.picUrl && (cp6j.picUrl = oq1x.picUrl);
        cp6j.snsTypes = oq1x.snsTypes;
        cp6j.msg = oq1x.data.msg || "";
        cp6j.type = oq1x.data.type;
        oq1x.data.id && (cp6j.id = oq1x.data.id);
        if (cp6j.eventtype == 41) {
            var Q6K = l6f.GU7N(d6d.json);
            cp6j.eventtype = 39;
            if (cp6j.msg) {
                cp6j.msg += "  "
            }
            cp6j.msg += "分享" + Q6K.video.creator.nickname + "的视频《" + Q6K.video.title + "》";
            delete cp6j.id
        }
        this.co6i("share-sns", {data: cp6j, result: o6i})
    };
    b5g.bUX5c = function (e6c) {
        var j6d = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k6e.ol1x(5)
        };
        j6d = NEJ.EX(j6d, e6c);
        if (j6d.id < 0) {
            delete j6d.id;
            j6d.type = "noresource"
        }
        if (!j6d.threadId) {
            delete j6d.threadId
        }
        if (!j6d.actId) {
            delete j6d.actId
        }
        if (!j6d.pics) {
            delete j6d.pics
        } else {
            j6d.pics = JSON.stringify(j6d.pics)
        }
        this.co6i("share-all", {
            data: j6d,
            snsTypes: e6c.snsTypes,
            picUrl: e6c.picUrl,
            pics: e6c.pics,
            isPub: e6c.isPub
        })
    };
    b5g.bUU5Z = function (e6c) {
        this.co6i("share-private", e6c)
    };
    b5g.cDp3x = function (e6c) {
        this.co6i("video-submit", e6c)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, h6b = c5h("nej.v"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        q6k = c5h("nm.d"), l6f = c5h("nm.x"), b5g, K6E;
    var cDm3x = {40: !0};
    q6k.fm8e({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e6c) {
                e6c.data.getcounts = true;
                e6c.data.pagesize = e6c.data.limit;
                if (e6c.data.offset == 0) {
                    e6c.data.lasttime = -1
                }
                delete e6c.data.offset
            }, format: function (Q6K, e6c) {
                Q6K.event = l6f.WQ1x(Q6K.event, function (p6j, r6l) {
                    return !cDm3x[p6j.type]
                });
                this.cCR3x(Q6K.event);
                e6c.data.lasttime = Q6K.lasttime;
                if (Q6K.event.length) {
                    Q6K.event.length = e6c.limit
                }
                return {list: Q6K.event, total: Q6K.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (Q6K, e6c) {
                return {list: Q6K.events, total: Q6K.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e6c) {
                e6c.data.pagesize = 20
            }, format: function (Q6K, e6c) {
                return Q6K.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e6c) {
                if (e6c.data.offset == 0) {
                    e6c.data.time = -1
                }
                delete e6c.data.offset;
                e6c.data.getcounts = true
            }, format: function (Q6K, e6c) {
                e6c.data.time = Q6K.lasttime;
                var i6c = Q6K.events;
                if (Q6K.more && i6c.length < e6c.data.limit) {
                    i6c = this.ME8w(i6c, e6c.data.limit)
                }
                return {list: i6c, total: Q6K.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (o6i, e6c) {
                o6i.conf = e6c.conf;
                return o6i
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e6c, bg6a) {
                if (e6c.like) {
                    if (e6c.comment) {
                        bg6a.url = "/api/v1/comment/like"
                    } else {
                        bg6a.url = "/api/resource/like"
                    }
                    bg6a.onload = "oneventlike";
                    bg6a.onerror = "oneventlikeerr"
                } else {
                    if (e6c.comment) {
                        bg6a.url = "/api/v1/comment/unlike"
                    } else {
                        bg6a.url = "/api/resource/unlike"
                    }
                    bg6a.onload = "oneventunlike";
                    bg6a.onerror = "oneventunlikeerr"
                }
            }, format: function (o6i, e6c) {
                o6i.eid = e6c.eid;
                o6i.origin = e6c.origin;
                o6i.ext = e6c.ext;
                return o6i
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (o6i, e6c) {
                o6i.id = e6c.data.id;
                return o6i
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e6c, bg6a) {
                if (e6c.data.type == "nointer") {
                    bg6a.url = "/api/event/rcmd/reject"
                } else if (e6c.data.transcoding) {
                    bg6a.url = "/api/event/video/transcoding/delete"
                } else {
                    bg6a.url = "/api/event/delete"
                }
            }, format: function (o6i, e6c) {
                o6i.id = e6c.data.id;
                return o6i
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (o6i, e6c) {
                o6i.id = e6c.data.id;
                return o6i
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e6c) {
                e6c.data.lasttime = e6c.data.lasttime || -1;
                e6c.data.pagesize = e6c.data.limit;
                e6c.data.getcounts = true;
                delete e6c.data.offset
            }, format: function (Q6K, e6c) {
                e6c.data.lasttime = Q6K.lasttime;
                var i6c = Q6K.events;
                if (Q6K.more) i6c = this.ME8w(i6c, e6c.data.pagesize);
                return {list: i6c, total: Q6K.size}
            }, onerror: "onlisterror"
        }
    });
    q6k.zY5d = NEJ.C();
    b5g = q6k.zY5d.O6I(q6k.hK9B);
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bkP5U = function (u6o, cR7K) {
        return u6o + "-" + cR7K
    };
    b5g.cHl4p = function (e6c) {
        this.co6i("ievent-get", e6c)
    };
    b5g.cHn4r = function (e6c) {
        this.co6i("ievent-new-get", e6c)
    };
    b5g.cHo4s = function (e6c) {
        this.co6i("ievent-user-get", e6c)
    };
    b5g.cHp4t = function (u6o, cR7K) {
        return this.rD1x(this.bkP5U(u6o, cR7K))
    };
    b5g.cHq4u = function (MF8x, e6c) {
        if (!MF8x || !MF8x.length) return;
        e6c = e6c || {};
        var bz6t = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, GF7y = [], bHT1x = [], j6d; i < MF8x.length; ++i) {
            j6d = MF8x[i];
            j6d = this.rD1x(this.bkP5U(j6d.type, j6d.id));
            if (!j6d) {
                GF7y.push(MF8x[i].id);
                bHT1x.push(bz6t[MF8x[i].type] || 0)
            }
        }
        if (!GF7y.length) {
            this.z6t("oneventresload", e6c.conf);
            return
        }
        e6c.data = {ids: JSON.stringify(GF7y), types: JSON.stringify(bHT1x)};
        e6c.onload = this.cBG2x.g6a(this);
        this.co6i("ievent-res-get", e6c)
    };
    b5g.cBG2x = function (o6i) {
        if (o6i.code != 200) {
            this.z6t("oneventreserror", o6i.code);
            return
        }
        var bz6t = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i6c = o6i.results; i < i6c.length; ++i) {
            this.pN1x(this.bkP5U(bz6t[i6c[i].type], i6c[i].id), i6c[i])
        }
        this.z6t("oneventresload", o6i.conf)
    };
    b5g.bHR1x = function (j6d) {
        var J6D = "event-list";
        this.bsp7i(J6D, j6d);
        this.z6t("onitemadd", {key: J6D, action: "add", data: j6d, flag: -1})
    };
    b5g.oN1x = function (e6c) {
        this.co6i("ievent-like", e6c)
    };
    b5g.mE0x = function (e6c) {
        this.co6i("ievent-delete", e6c)
    };
    b5g.ME8w = function (i6c, fX8P) {
        for (var i = i6c.length; i < fX8P; i++) i6c.push(null);
        return i6c
    };
    b5g.cCR3x = function (i6c) {
        var o6i = [];
        if (!i6c || !i6c.length) return;
        k6e.bd6X(i6c, function (d6d) {
            d6d.biData = this.bHO1x(d6d)
        }, this)
    };
    b5g.bHO1x = function () {
        var bbf3x = {32: "comment", 33: "activity", 34: "recomment_artist"},
            cBl2x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d6d) {
            var Q6K = {
                id: d6d.id,
                sourceid: d6d.user.userId,
                alg: d6d.rcmdInfo ? d6d.rcmdInfo.alg : null,
                contentType: bbf3x[d6d.type] || (k6e.dj7c(cBl2x, d6d.type) != -1 ? "user_event" : "other")
            };
            return Q6K
        }
    }();
    b5g.EV6P = function (cBg2x, d6d) {
        var Q6K = this.bHO1x(d6d);
        Q6K.actionType = cBg2x;
        if (window.log) log("eventclick", Q6K)
    };
    b5g.cHs4w = function (e6c) {
        this.co6i("event_latest-list", e6c)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
        return a + b & 4294967295
    }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }

    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray,
                    sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }

    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.sn2x += contents;
        this.bq6k += contents.length;
        var length = this.sn2x.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dN8F, md5blk(this.sn2x.substring(i - 64, i)))
        }
        this.sn2x = this.sn2x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.sn2x, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.ot1x(tail, length);
        ret = hex(this.dN8F);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.sn2x = "";
        this.bq6k = 0;
        this.dN8F = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.sn2x, length: this.bq6k, hash: this.dN8F}
    };
    SparkMD5.prototype.setState = function (state) {
        this.sn2x = state.buff;
        this.bq6k = state.length;
        this.dN8F = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dN8F;
        delete this.sn2x;
        delete this.bq6k
    };
    SparkMD5.prototype.ot1x = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dN8F, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq6k * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dN8F, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.sn2x.buffer, arr, true), length = buff.length, i;
        this.bq6k += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dN8F, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.sn2x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.sn2x, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.ot1x(tail, length);
        ret = hex(this.dN8F);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.sn2x = new Uint8Array(0);
        this.bq6k = 0;
        this.dN8F = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.ot1x = SparkMD5.prototype.ot1x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, a4e = c5h("nej.e"), h6b = c5h("nej.v"), v6p = c5h("nej.j"),
        ej8b = c5h("nej.g"), k6e = c5h("nej.u"), fH8z = c5h("nej.n"), I6C = c5h("nej.ut"), l6f = c5h("nm.x"),
        q6k = c5h("nm.d"), jw9n = c5h("nm.x.nos"), w6q = c5h("nm.w");
    var cAS2x = 1024 * 256, cAM2x = 1024 * 1024 * 2, rm1x = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bHH1x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bs6m,
        rn1x = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        jC9t = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var ok1x = {};
    var vA3x = q6k.hQ9H.A6u();
    jw9n.cHu4y = function () {
        return jC9t
    };
    var czT2x = function () {
        return k6e.ol1x(6) + +(new Date)
    };
    var Mj8b = function (iJ9A, e6c) {
        if (!ok1x[e6c.taskId]) {
            return
        }
        (e6c.onuploading || bs6m).call(this, iJ9A)
    };
    var bkG5L = function (R6L) {
        var czh2x = R6L.md5, cV7O = R6L.file, czb2x = czh2x + cV7O.size;
        return "nos_file_hash_" + czb2x
    };
    var cyM2x = function (R6L) {
        var J6D = bkG5L(R6L), j6d = v6p.bKa1x(J6D, "{}");
        try {
            j6d = JSON.parse(j6d)
        } catch (e) {
            j6d = {}
        }
        return j6d
    };
    var cyA2x = function (R6L, e6c) {
        if (!R6L.md5) {
            return
        }
        var J6D = bkG5L(R6L), j6d = v6p.bKa1x(J6D, "{}");
        try {
            j6d = JSON.parse(j6d)
        } catch (e) {
            j6d = {}
        }
        NEJ.X(j6d, e6c);
        v6p.uV3x(J6D, JSON.stringify(j6d))
    };
    var cyy2x = function (R6L) {
        var J6D = bkG5L(R6L);
        v6p.Kx8p(J6D)
    };
    var cyu2x = function (R6L, eP8H) {
        var Y6S = R6L.urls[Math.min(R6L.urlIndex, R6L.urls.length - 1)], cV7O = R6L.file, lp0x = R6L.bucket,
            mu0x = R6L.objectKey, eM8E = R6L.token, bJ6D = R6L.context, oO1x = {},
            On9e = bHH1x.call(cV7O, R6L.beg, R6L.end),
            bv6p = {offset: R6L.beg, complete: R6L.lastChunk || false, version: "1.0"};
        if (bJ6D) {
            bv6p.context = bJ6D
        }
        oO1x["x-nos-token"] = eM8E;
        oO1x[ej8b.yH4L] = cV7O.type;
        R6L.reqId = v6p.bn6h(Y6S + "/" + lp0x + "/" + mu0x, {
            type: "json",
            method: "POST",
            headers: oO1x,
            query: bv6p,
            data: On9e,
            onload: eP8H.onload,
            onerror: eP8H.onerror
        })
    };
    var cyn2x = function (o6i, R6L, e6c) {
        o6i = {
            code: 200,
            fileName: e6c.file.name,
            size: e6c.file.size,
            type: e6c.file.type,
            bucket: R6L.bucket,
            docId: R6L.docId,
            objectKey: R6L.objectKey,
            url: "//nos.netease.com/" + R6L.bucket + "/" + R6L.objectKey
        };
        cyy2x(R6L);
        if (!ok1x[e6c.taskId]) {
            return
        }
        delete ok1x[e6c.taskId];
        vA3x.fu8m("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(o6i)});
        (e6c.onsuccess || bs6m).call(this, o6i)
    };
    var cxC1x = function (o6i, e6c) {
        (e6c.onerror || bs6m).call(this, o6i)
    };
    var cxq1x = function (o6i, R6L, e6c) {
        R6L.context = o6i.context;
        R6L.beg = o6i.offset;
        var iJ9A = R6L.beg / R6L.file.size;
        cyA2x(R6L, {
            bucket: R6L.bucket,
            objectKey: R6L.objectKey,
            token: R6L.token,
            context: R6L.context,
            beg: R6L.beg,
            updateTime: +(new Date)
        });
        iJ9A = rn1x.DNS_GET + (rn1x.UPLOADED - rn1x.DNS_GET) * iJ9A;
        Mj8b(iJ9A, e6c);
        if (R6L.lastChunk) {
            cyn2x(o6i, R6L, e6c)
        } else {
            bcM3x(R6L, e6c)
        }
    };
    var cwY1x = function (o6i, R6L, e6c) {
        vA3x.fu8m("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o6i.data,
            body: o6i.extData,
            ext: JSON.stringify(R6L),
            timging: +(new Date) - R6L.chuckUploadStartTime
        });
        if (R6L.urlIndex < Math.max(R6L.urls.length - 1, 5)) {
            R6L.urlIndex++;
            bcM3x(R6L, e6c)
        } else {
            cxC1x(o6i, e6c)
        }
    };
    var bcM3x = function (R6L, e6c) {
        if (!R6L || R6L.step == -1) {
            return
        }
        R6L.end = R6L.beg + cAS2x;
        if (R6L.end >= R6L.file.size) {
            R6L.end = R6L.file.size;
            R6L.lastChunk = true
        }
        R6L.chuckUploadStartTime = +(new Date);
        cyu2x(R6L, {onload: cxq1x.eu8m(this, R6L, e6c), onerror: cwY1x.eu8m(this, R6L, e6c)})
    };
    var cwR1x = function (o6i, R6L, e6c) {
        R6L.beg = o6i.offset;
        var iJ9A = R6L.beg / R6L.file.size;
        iJ9A = rn1x.DNS_GET + (rn1x.UPLOADED - rn1x.DNS_GET) * iJ9A;
        Mj8b(iJ9A, e6c);
        bcM3x(R6L, e6c)
    };
    var cwJ1x = function (o6i, R6L, e6c) {
        R6L.beg = 0;
        delete R6L.context;
        bkA5F(R6L, e6c)
    };
    var bGG0x = function (Ou9l, R6L, e6c) {
        R6L.lastChunk = false;
        R6L.urls = Ou9l;
        R6L.urlIndex = 0;
        Mj8b(rn1x.DNS_GET, e6c);
        if (R6L.fromExist) {
            delete R6L.fromExist;
            var Y6S = R6L.urls[Math.min(R6L.urlIndex, R6L.urls.length - 1)], lp0x = R6L.bucket, mu0x = R6L.objectKey,
                eM8E = R6L.token, bJ6D = R6L.context, oO1x = {}, bv6p = {context: bJ6D, version: "1.0"};
            oO1x["x-nos-token"] = eM8E;
            R6L.reqId = v6p.bn6h(Y6S + "/" + lp0x + "/" + mu0x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: oO1x,
                query: bv6p,
                onload: cwR1x.eu8m(this, R6L, e6c),
                onerror: cwJ1x.eu8m(this, R6L, e6c)
            })
        } else {
            R6L.beg = 0;
            bcM3x(R6L, e6c)
        }
    };
    var cwA1x = function (o6i, R6L, e6c) {
        o6i.code = rm1x.DNS_ERROR;
        (e6c.onerror || bs6m).call(this, o6i)
    };
    var bGB0x = function (j6d, e6c) {
        var o6i = j6d.result || {}, lp0x = o6i.bucket, mu0x = o6i.objectKey, eM8E = o6i.token, R6L = ok1x[e6c.taskId];
        if (!lp0x || !mu0x || !eM8E || !R6L) {
            o6i.code = rm1x.TOKEN_ERROR;
            (e6c.onerror || bs6m).call(this, o6i);
            return
        }
        R6L.bucket = lp0x;
        R6L.objectKey = mu0x;
        R6L.docId = o6i.docId;
        R6L.token = eM8E;
        Mj8b(rn1x.TOKEN_GET, e6c);
        if (location.protocol == "https:") {
            bGG0x(["//nosup-hz1.127.net"], R6L, e6c)
        } else {
            R6L.reqId = jw9n.cvv1x({
                bucket: lp0x,
                onload: bGG0x.eu8m(this, R6L, e6c),
                onerror: cwA1x.eu8m(this, R6L, e6c)
            })
        }
        R6L.step = 1
    };
    var cvu1x = function (o6i, e6c) {
        o6i.code = rm1x.TOKEN_ERROR;
        (e6c.onerror || bs6m).call(this, o6i)
    };
    var bkA5F = function (R6L, e6c) {
        var cV7O = e6c.file, fr8j = cV7O.name || "", ew8o = fr8j.split(".").pop();
        jw9n.bdc3x(NEJ.X({
            filename: fr8j,
            ext: ew8o,
            onload: bGB0x.eu8m(this, e6c),
            onerror: cvu1x.eu8m(this, e6c)
        }, e6c, function (p6j) {
            return k6e.gI8A(p6j) || k6e.lO0x(p6j)
        }))
    };
    var cvt1x = function (R6L, e6c) {
        if (!R6L || R6L.step == -1) {
            return
        }
        R6L.md5 = R6L.spark.end();
        var Lt8l = cyM2x(R6L) || {}, lp0x = Lt8l.bucket, mu0x = Lt8l.objectKey, eM8E = Lt8l.token;
        if (!lp0x || !mu0x || !eM8E) {
            bkA5F(R6L, e6c)
        } else {
            R6L.context = Lt8l.context;
            R6L.beg = Lt8l.beg;
            R6L.fromExist = true;
            bGB0x({result: Lt8l}, e6c)
        }
    };
    var cvi1x = function (FG6A, R6L, e6c) {
        if (!R6L || R6L.step == -1) {
            return
        }
        R6L.beg = R6L.end;
        var iJ9A = R6L.beg / R6L.file.size;
        iJ9A = 0 + rn1x.MD5_DONE * iJ9A;
        Mj8b(iJ9A, e6c);
        R6L.spark.append(FG6A.result);
        if (R6L.lastChunk) {
            cvt1x(R6L, e6c)
        } else {
            bFP0x(R6L, e6c)
        }
    };
    var cuI1x = function (o6i, R6L, e6c) {
        R6L.md5 = "";
        bkA5F(R6L, e6c)
    };
    var bFP0x = function (R6L, e6c) {
        if (!R6L || R6L.step == -1) {
            return
        }
        R6L.end = R6L.beg + cAM2x;
        if (R6L.end >= R6L.file.size) {
            R6L.end = R6L.file.size;
            R6L.lastChunk = true
        }
        var FG6A = new FileReader;
        FG6A.onload = cvi1x.g6a(this, FG6A, R6L, e6c);
        FG6A.onerror = cuI1x.g6a(this, FG6A, R6L, e6c);
        FG6A.readAsArrayBuffer(bHH1x.call(R6L.file, R6L.beg, R6L.end))
    };
    jw9n.gV8N = function (e6c) {
        var cV7O = e6c.file, fr8j = cV7O.name || "", ew8o = fr8j.split(".").pop(), FI6C = czT2x();
        e6c.taskId = FI6C;
        ok1x[FI6C] = {step: 0};
        Mj8b(0, e6c);
        var R6L = ok1x[FI6C];
        R6L.id = FI6C;
        R6L.file = cV7O;
        R6L.beg = 0;
        R6L.lastChunk = false;
        R6L.spark = new SparkMD5.ArrayBuffer;
        var cuG1x = e6c.onerror || bs6m;
        e6c.onerror = function () {
            if (!ok1x[FI6C]) {
                return
            }
            delete ok1x[FI6C];
            cuG1x.apply(this, arguments)
        };
        vA3x.fu8m("sysaction", {type: "nosuploadstart", location: location.href});
        bFP0x(R6L, e6c);
        return FI6C
    };
    jw9n.kn9e = function (C6w) {
        var R6L = ok1x[C6w];
        if (R6L) {
            if (R6L.step == 0) {
                delete ok1x[C6w]
            } else {
                R6L.step = -1;
                if (R6L.reqId) {
                    v6p.kn9e(R6L.reqId)
                }
                delete ok1x[C6w]
            }
        }
    };
    jw9n.bdc3x = function () {
        var zM5R = function (o6i, e6c) {
            (e6c.onload || bs6m).call(this, o6i)
        };
        var Bz5E = function (o6i, e6c) {
            (e6c.onerror || bs6m).call(this, o6i)
        };
        var bFG0x = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e6c) {
            var bdm3x = e6c.returnBody || bFG0x;
            if (k6e.lO0x(bdm3x)) {
                try {
                    JSON.stringify(bdm3x)
                } catch (e) {
                    bdm3x = bFG0x
                }
            }
            return v6p.bn6h("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e6c.filename || "",
                    ext: e6c.ext || "",
                    type: e6c.type || jC9t.OTHER,
                    bucket: e6c.bucket || "",
                    local: e6c.local || false,
                    nos_product: e6c.nosProduct || 0,
                    return_body: bdm3x
                },
                onload: zM5R.eu8m(this, e6c),
                onerror: Bz5E.eu8m(this, e6c)
            })
        }
    }();
    jw9n.cvv1x = function () {
        var cuq1x = "//wanproxy.127.net/lbs";
        var zM5R = function (o6i, e6c) {
            if (o6i.lbs) {
            }
            var Ou9l = o6i.upload;
            if (!Ou9l || !Ou9l.length) {
                Bz5E(o6i, e6c)
            }
            (e6c.onload || bs6m).call(this, Ou9l)
        };
        var Bz5E = function (o6i, e6c) {
            (e6c.onerror || bs6m).call(this, o6i)
        };
        return function (e6c) {
            var lp0x = e6c.bucket;
            return v6p.bn6h(cuq1x, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: lp0x},
                onload: zM5R.eu8m(this, e6c),
                onerror: Bz5E.eu8m(this, e6c)
            })
        }
    }();
    jw9n.bdq3x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), v6p = c5h("nej.j"),
        ca6U = c5h("nej.ut"), bC6w = c5h("nej.ui"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), jw9n = c5h("nm.x.nos"),
        E6y = c5h("nm.m"), m6g = c5h("nm.l"), w6q = c5h("nm.w"), b5g, K6E;
    var gk8c = a4e.iw9n('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w6q.bFF0x = NEJ.C();
    b5g = w6q.bFF0x.O6I(bC6w.eh8Z);
    b5g.cf6Z = function () {
        this.cd6X = gk8c
    };
    b5g.bX6R = function () {
        this.cg6a();
        this.bF6z = this.n6h;
        this.hF9w = a4e.H6B(this.n6h, "j-file")[0];
        h6b.s6m(this.hF9w, "change", this.sy2x.g6a(this))
    };
    b5g.bl6f = function (e6c) {
        e6c = e6c || {};
        this.bm6g(e6c);
        this.hF9w.accept = e6c.accept || "*";
        this.xt4x = e6c
    };
    b5g.bdA3x = function () {
        return a4e.lB0x(this.hF9w)
    };
    b5g.sy2x = function (d6d) {
        if (this.hF9w.value == "") return;
        var kD0x = this.hF9w.value.split("\\"), fr8j = kD0x.length > 0 ? kD0x[kD0x.length - 1] : kD0x[0],
            oE1x = (this.hF9w.files || [{}])[0];
        var cm6g = {files: this.hF9w.files, filename: fr8j, size: oE1x.size, cancelUpload: false};
        this.z6t("onchange", cm6g);
        if (cm6g.cancelUpload) {
            this.hF9w.value = "";
            return
        }
        if (cm6g.stopped) {
            return
        }
        this.Ql9c()
    };
    b5g.Ql9c = function () {
        if (this.hF9w.value == "") return;
        var kD0x = this.hF9w.value.split("\\"), fr8j = kD0x.length > 0 ? kD0x[kD0x.length - 1] : kD0x[0],
            ew8o = (fr8j.split(".") || []).pop(), oE1x = (this.hF9w.files || [{}])[0],
            FV6P = (oE1x.type || "").split("/").shift();
        if (oE1x.size > 100 * 1024 * 1024) {
            return this.nD0x("onerror", {code: -200})
        }
        this.z6t("onuploading", 0);
        this.bFC0x = jw9n.bdc3x(NEJ.X({
            onload: this.QA9r.eu8m(this, fr8j),
            onerror: this.nD0x.g6a(this)
        }, this.xt4x, function (p6j) {
            return k6e.gI8A(p6j) || k6e.lO0x(p6j)
        }))
    };
    b5g.QA9r = function (bR6L, fr8j) {
        var o6i = bR6L.result || {}, lp0x = o6i.bucket, mu0x = o6i.objectKey, eM8E = o6i.token;
        if (!lp0x || !mu0x || !eM8E) {
            bR6L.code = -100;
            this.nD0x.call(this, bR6L);
            return
        }
        var oE1x = (this.hF9w.files || [{}])[0];
        var hN9E = a4e.dl7e(this.bF6z);
        hN9E[0].value = mu0x;
        hN9E[1].value = eM8E;
        if (oE1x.type && oE1x.type.indexOf("audio") == 0) {
            hN9E[3].value = "audio/mpeg"
        } else {
            hN9E[3].value = oE1x.type || ""
        }
        this.bF6z.action = "//nos.netease.com/" + lp0x;
        this.Ga7T = o6i;
        this.rp1x = fr8j;
        this.z6t("onuploading", .2);
        this.gV8N()
    };
    b5g.gV8N = function () {
        this.bFC0x = v6p.gV8N(this.bF6z, {
            type: "json",
            onload: this.uU3x.g6a(this),
            onerror: this.nD0x.g6a(this),
            onuploading: this.bdV3x.g6a(this)
        })
    };
    b5g.kn9e = function () {
        v6p.kn9e(this.bFC0x);
        this.bF6z.reset()
    };
    b5g.uU3x = function (bR6L) {
        var eM8E = this.Ga7T, fr8j = this.rp1x, oE1x = (this.hF9w.files || [{}])[0], kg9X = {
            code: 200,
            fileName: fr8j,
            size: oE1x.size,
            bucket: eM8E.bucket,
            docId: eM8E.docId,
            objectKey: eM8E.objectKey,
            url: "//nos.netease.com/" + eM8E.bucket + "/" + eM8E.objectKey
        };
        if (!bR6L) {
            bR6L = kg9X
        }
        if (!bR6L.code || bR6L.code == 200) {
            this.z6t("onsuccess", NEJ.X(kg9X, bR6L))
        } else {
            this.z6t("onerror", bR6L)
        }
        this.bF6z.reset()
    };
    b5g.nD0x = function (bR6L) {
        this.z6t("onerror", bR6L);
        this.bF6z.reset()
    };
    b5g.bdV3x = function (iJ9A) {
        this.z6t("onuploading", .2 + iJ9A.loaded / iJ9A.total * .8)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), v6p = c5h("nej.j"),
        ca6U = c5h("nej.ut"), bC6w = c5h("nej.ui"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), jw9n = c5h("nm.x.nos"),
        E6y = c5h("nm.m"), m6g = c5h("nm.l"), w6q = c5h("nm.w"), b5g, K6E;
    w6q.QS0x = NEJ.C();
    b5g = w6q.QS0x.O6I(ca6U.cG7z);
    b5g.bl6f = function (e6c) {
        e6c = e6c || {};
        this.bm6g(e6c);
        this.bea4e = w6q.bFF0x.A6u(NEJ.X({
            parent: e6c.parent,
            onchange: this.sy2x.g6a(this),
            onuploading: this.z6t.g6a(this, "onuploading"),
            onsuccess: this.z6t.g6a(this, "onsuccess"),
            onerror: this.z6t.g6a(this, "onerror")
        }, e6c, function (p6j) {
            return k6e.gI8A(p6j) || k6e.lO0x(p6j)
        }));
        if (e6c.multiple && jw9n.bdq3x()) {
            a4e.gg8Y(this.bea4e.bdA3x(), "multiple", true)
        }
        this.xt4x = e6c
    };
    b5g.sy2x = function (e6c) {
        var fr8j = e6c.filename, ew8o = (fr8j.split(".") || []).pop();
        this.bFs0x = (e6c.files || [{}])[0];
        this.z6t("onchange", e6c);
        if (jw9n.bdq3x() && !e6c.stopped && !e6c.cancelUpload) {
            this.Ql9c(true);
            e6c.stopped = true
        }
    };
    b5g.bdA3x = function () {
        return this.bea4e.bdA3x()
    };
    b5g.ctB0x = function () {
        return this.bFs0x
    };
    b5g.Ql9c = function (eY8Q, cV7O) {
        cV7O = cV7O || this.bFs0x;
        if (jw9n.bdq3x()) {
            this.bFj0x = jw9n.gV8N(NEJ.X({
                file: cV7O,
                local: this.xt4x.bucket && this.xt4x.bucket.length,
                onuploading: this.z6t.g6a(this, "onuploading"),
                onsuccess: this.z6t.g6a(this, "onsuccess"),
                onerror: this.z6t.g6a(this, "onerror")
            }, this.xt4x, function (p6j) {
                return k6e.gI8A(p6j) || k6e.lO0x(p6j)
            }));
            return this.bFj0x
        } else if (!eY8Q) {
            this.bea4e.Ql9c()
        }
    };
    b5g.kn9e = function (C6w) {
        C6w = C6w || this.bFj0x;
        if (C6w) {
            jw9n.kn9e(C6w)
        }
        this.bea4e.kn9e()
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), ej8b = c5h("nej.g"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        v6p = c5h("nej.j"), fH8z = c5h("nej.n"), I6C = c5h("nej.ut"), bc6W = c5h("nej.ui"), w6q = c5h("nm.w"),
        m6g = c5h("nm.l"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), M6G = c5h("nm.x.f"), jw9n = c5h("nm.x.nos"), b5g, K6E,
        bkr5w = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, bko5t = 5 * 1024 * 1024, cHw4A = 80,
        bEq0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w6q.bEn0x = NEJ.C();
    b5g = w6q.bEn0x.O6I(I6C.vw3x);
    b5g.btW7P = function () {
        return {x: this.BX5c.clientWidth - this.n6h.offsetWidth, y: this.BX5c.clientHeight - this.n6h.offsetHeight}
    };
    w6q.bkh5m = NEJ.C();
    b5g = w6q.bkh5m.O6I(bc6W.eh8Z);
    b5g.cf6Z = function () {
        this.cd6X = "m-xwgt-share-upload"
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.H6B(this.n6h, "j-flag");
        this.bem4q = i6c.shift();
        this.Km8e = i6c.shift();
        this.RA0x = i6c.shift();
        this.bDU0x = {
            onchange: this.bDL0x.eu8m(this, 0),
            onerror: this.eK8C.g6a(this),
            onsuccess: this.ur3x.g6a(this),
            multiple: true,
            parent: this.Km8e,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bkf5k = {
            onchange: this.bDL0x.eu8m(this, 1),
            onerror: this.eK8C.g6a(this),
            onsuccess: this.ur3x.g6a(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cqQ0x = w6q.QS0x.A6u(this.bDU0x)
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.bkf5k.parent = e6c.button;
        this.Kc8U && this.Kc8U.T6N();
        this.Kc8U = w6q.QS0x.A6u(this.bkf5k);
        this.n6h.style.display = "none";
        if (!!this.fc8U) {
            for (var i = this.fc8U.length - 1; i >= 0; i--) {
                a4e.cJ7C(this.fc8U[i].element, false);
                if (this.fc8U[i].dragger) this.fc8U[i].dragger.T6N()
            }
        }
        this.fc8U = [];
        if (this.CL6F) {
            clearTimeout(this.CL6F)
        }
        this.beC4G(0);
        this.RW0x = 0;
        this.bW6Q([[this.bDU0x.parent, "click", this.bDF0x.g6a(this)], [this.bkf5k.parent, "click", this.bDF0x.g6a(this)]])
    };
    b5g.bD6x = function () {
        h6b.hf9W(this.sK2x, "click");
        if (!!this.fc8U) {
            for (var i = this.fc8U.length - 1; i >= 0; i--) {
                a4e.cJ7C(this.fc8U[i].element, false);
                if (this.fc8U[i].dragger) this.fc8U[i].dragger.T6N()
            }
        }
        this.fc8U = [];
        if (this.CL6F) {
            clearTimeout(this.CL6F)
        }
        this.CL6F = 0;
        this.Kc8U && this.Kc8U.T6N();
        delete this.Kc8U;
        this.bH6B()
    };
    b5g.bDF0x = function (d6d) {
        if (!jw9n.bdq3x() && this.fc8U.doing) {
            h6b.bi6c(d6d)
        }
    };
    b5g.bDL0x = function (e6c, r6l) {
        var nC0x = e6c.files, iH9y;
        e6c.stopped = true;
        if (!nC0x) {
            if (e6c.filename) {
                nC0x = [{name: e6c.filename, isIE: true}]
            }
        }
        for (var i = 0, len = nC0x.length; i < len; i++) {
            if (!bEq0x.test(nC0x[i].name)) {
                this.bke5j({path: nC0x[i].name, index: r6l, status: -4, fail: "这不是<br>图片"})
            } else if (nC0x[i].size > bko5t) {
                this.bkd5i(-3);
                this.bke5j({path: nC0x[i].name, index: r6l, status: -3, fail: "上传<br>失败"})
            } else {
                this.bke5j({path: nC0x[i].name, file: nC0x[i], index: r6l, status: 0})
            }
        }
    };
    b5g.bke5j = function (sT2x) {
        if (this.fc8U.length >= 9) {
            this.bkd5i(-10, 3e3, this.bDf9W.g6a(this));
            return
        }
        this.cpU0x(sT2x);
        this.fc8U.push(sT2x);
        if (!!this.fc8U.length) {
            this.n6h.style.display = ""
        }
        if (this.fc8U.length >= 9) {
            this.Km8e.style.display = "none"
        } else {
            this.Km8e.style.display = ""
        }
        this.JO8G()
    };
    b5g.JO8G = function () {
        var bka5f = -1, bCY9P = 0;
        for (var i = 0, l = this.fc8U.length; i < l; i++) {
            if (this.fc8U[i].status == 1) {
                return
            }
            if (this.fc8U[i].status == 0 && bka5f < 0) {
                bka5f = i
            }
            if (this.fc8U[i].status == 2 || this.fc8U[i].status < 0) {
                bCY9P++
            }
        }
        var p6j = this.fc8U[bka5f];
        if (p6j) {
            (p6j.index == 0 ? this.cqQ0x : this.Kc8U).Ql9c(false, p6j.file);
            p6j.status = 1;
            this.fc8U.doing = p6j;
            this.z6t("onstartupload", {})
        } else if (bCY9P == this.fc8U.length) {
            this.z6t("onfinishupload", {})
        }
    };
    b5g.bjZ5e = function () {
        return this.fc8U.doing || {}
    };
    b5g.eK8C = function (d6d) {
        var sT2x = this.bjZ5e();
        sT2x.status = -4;
        sT2x.fail = "上传<br>失败";
        this.bCW9N(sT2x);
        this.fc8U.doing = null;
        this.JO8G()
    };
    b5g.ur3x = function (d6d) {
        var sT2x = this.bjZ5e(), dP8H = d6d.fileName.match(bEq0x);
        sT2x.picUrl = d6d.url;
        v6p.bn6h("/upload/event/img/v1", {
            query: {imgid: d6d.docId, format: dP8H[1]},
            type: "json",
            onload: this.bCV9M.g6a(this),
            onerror: this.bCV9M.g6a(this)
        })
    };
    b5g.bCV9M = function (d6d) {
        if (d6d && d6d.code == 200 && d6d.picInfo) {
            var sT2x = this.bjZ5e();
            sT2x.status = 2;
            var by6s = NEJ.X({}, d6d.picInfo);
            by6s.originId = by6s.originIdStr;
            by6s.squareId = by6s.squareIdStr;
            by6s.rectangleId = by6s.rectangleIdStr;
            by6s.pcSquareId = by6s.pcSquareIdStr;
            by6s.pcRectangleId = by6s.pcRectangleIdStr;
            by6s.originJpgId = by6s.originJpgIdStr || by6s.originJpgId;
            sT2x.picInfo = by6s;
            this.bCW9N(sT2x);
            this.fc8U.doing = null;
            this.JO8G()
        } else {
            this.eK8C(d6d)
        }
    };
    b5g.bkd5i = function (r6l, kH0x, eP8H) {
        if (this.RW0x < r6l) {
            return
        }
        if (this.CL6F) {
            clearTimeout(this.CL6F);
            this.CL6F = 0
        }
        if (kH0x) {
            this.RA0x.innerText = bkr5w[r6l * 1];
            this.RW0x = r6l;
            this.CL6F = setTimeout(this.beC4G.g6a(this, r6l, eP8H), kH0x)
        } else {
            this.RA0x.innerText = bkr5w[r6l];
            this.RW0x = r6l
        }
        this.RA0x.style.display = ""
    };
    b5g.beC4G = function (r6l, eP8H) {
        if (r6l && this.RW0x !== r6l) {
            return
        }
        this.RW0x = 0;
        this.RA0x.innerText = bkr5w[0];
        this.RA0x.style.display = "none";
        eP8H && eP8H()
    };
    b5g.cpU0x = function (cV7O) {
        var j6d = {};
        if (cV7O.fail) {
            j6d.fail = cV7O.fail
        }
        var dT8L = a4e.bZ6T("m-xwgt-share-upload-preview", j6d);
        cV7O.element = a4e.od0x(dT8L);
        h6b.s6m(a4e.H6B(cV7O.element, "del")[0], "mousedown", this.cpq9h.g6a(this, cV7O), false);
        this.bem4q.insertBefore(cV7O.element, this.bem4q.lastElementChild);
        cV7O.dragger = w6q.bEn0x.A6u({
            view: this.bem4q.parentNode,
            body: cV7O.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.MQ8I.g6a(this, cV7O),
            onchange: this.coS9J.g6a(this, cV7O),
            ondragend: this.btY7R.g6a(this, cV7O)
        })
    };
    b5g.bCW9N = function (cV7O) {
        if (!cV7O || !cV7O.element) {
            return false
        }
        var j6d = {};
        if (cV7O.fail) {
            j6d.fail = cV7O.fail
        } else {
            j6d.url = cV7O.picUrl
        }
        a4e.y6s(cV7O.element, "z-fail");
        cV7O.element.firstChild.outerHTML = a4e.bZ6T("m-xwgt-share-upload-preview-img", j6d)
    };
    b5g.MQ8I = function (p6j, kX0x) {
        a4e.y6s(p6j.element, "z-sel")
    };
    b5g.coS9J = function (p6j, kX0x) {
        var cHz4D, gq8i = this.fc8U.length - 1, oa0x;
        for (var i = gq8i; i >= 0; i--) {
            a4e.x6r(this.fc8U[i].element, "z-jump");
            if (this.fc8U[i] == p6j) {
                oa0x = i
            } else {
                a4e.eZ8R(this.fc8U[i].element, {left: "", top: ""})
            }
        }
        var SG0x = {x: 46 + 92 * (oa0x % 5) + kX0x.left, y: 46 + 92 * (oa0x / 5 >> 0) + kX0x.top};
        var bjX5c = SG0x.x / 92 >> 0, bjW5b = SG0x.y / 92 >> 0, xG4K = Math.max(0, Math.min(gq8i, bjW5b * 5 + bjX5c));
        if (xG4K == oa0x) {
            return
        }
        var com9d = xG4K < oa0x;
        for (var i = Math.min(xG4K, oa0x); i <= Math.max(xG4K, oa0x); i++) {
            if (i !== oa0x) {
                var bCC9t = i % 5;
                if (com9d) {
                    if (bCC9t == 4) {
                        a4e.eZ8R(this.fc8U[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a4e.eZ8R(this.fc8U[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bCC9t == 0) {
                        a4e.eZ8R(this.fc8U[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a4e.eZ8R(this.fc8U[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b5g.btY7R = function (p6j, kX0x) {
        var cHA4E, gq8i = this.fc8U.length - 1, oa0x;
        for (var i = gq8i; i >= 0; i--) {
            a4e.eZ8R(this.fc8U[i].element, {left: "", top: ""});
            if (this.fc8U[i] == p6j) {
                oa0x = i
            }
        }
        a4e.x6r(p6j.element, "z-sel");
        var SG0x = {x: 46 + 92 * (oa0x % 5) + kX0x.left, y: 46 + 92 * (oa0x / 5 >> 0) + kX0x.top};
        var bjX5c = SG0x.x / 92 >> 0, bjW5b = SG0x.y / 92 >> 0, xG4K = Math.max(0, Math.min(gq8i, bjW5b * 5 + bjX5c));
        if (xG4K == oa0x) {
            return
        }
        this.bem4q.insertBefore(p6j.element, (this.fc8U[xG4K + (xG4K > oa0x ? 1 : 0)] || {}).element || this.Km8e);
        this.fc8U.splice(oa0x, 1);
        this.fc8U.splice(xG4K, 0, p6j)
    };
    b5g.cpq9h = function (p6j, d6d) {
        a4e.cJ7C(p6j.element, false);
        if (p6j.dragger) p6j.dragger.T6N();
        delete p6j.dragger;
        var r6l = -1;
        for (var i = this.fc8U.length - 1; i >= 0; i--) {
            if (this.fc8U[i] == p6j) {
                r6l = i;
                break
            }
        }
        this.fc8U.splice(r6l, r6l >= 0 ? 1 : 0);
        delete p6j;
        if (this.fc8U.length >= 9) {
            this.Km8e.style.display = "none"
        } else {
            this.Km8e.style.display = ""
        }
        if (!this.fc8U.length) {
            this.n6h.style.display = "none";
            this.beC4G(0)
        } else {
            this.bDf9W()
        }
        if (this.fc8U.doing == p6j) {
            this.fc8U.doing = null
        }
        this.JO8G()
    };
    b5g.bDf9W = function () {
        var bCA9r = false;
        for (var i = 0, len = this.fc8U.length; i < len; i++) {
            if (this.fc8U[i].status == -3) {
                bCA9r = true
            }
        }
        if (bCA9r) {
            this.bkd5i(-3)
        } else {
            this.beC4G(-3)
        }
    };
    b5g.Tf0x = function () {
        var dD7w = [];
        for (var i = this.fc8U.length - 1; i >= 0; i--) {
            if (this.fc8U[i].status == 2) {
                dD7w.unshift(this.fc8U[i].picInfo)
            }
        }
        return dD7w
    };
    I6C.fK8C.A6u({element: w6q.bkh5m, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, fA8s = NEJ.R, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        bc6W = c5h("nej.ui"), N6H = c5h("nej.ut"), b5g, K6E;
    if (!!N6H.nx0x) return;
    N6H.nx0x = NEJ.C();
    b5g = N6H.nx0x.O6I(N6H.XZ1x);
    K6E = N6H.nx0x.cs6m;
    b5g.bl6f = function (e6c) {
        this.cnx9o(e6c.more);
        this.GV7O = a4e.B6v(e6c.sbody);
        this.cnr9i = e6c.fixScrollPosition;
        this.bW6Q([[this.GV7O, "scroll", this.cmw9n.g6a(this)]]);
        var do7h = e6c.delta;
        if (do7h == null) do7h = 30;
        this.TR0x = Math.max(0, do7h);
        var cE7x = parseInt(e6c.count) || 0;
        this.jF9w = Math.max(0, cE7x);
        var gR8J = parseInt(e6c.number) || 0;
        if (gR8J > 1 && gR8J <= cE7x) {
            this.Cs6m = gR8J
        }
        this.bm6g(e6c)
    };
    b5g.bD6x = function () {
        this.bH6B();
        delete this.CY6S;
        delete this.GV7O;
        delete this.ty2x;
        delete this.Wk1x
    };
    b5g.Bj5o = function (bh6b, bq6k) {
        var bM6G = this.zz5E + (this.jF9w - 1) * this.oX1x, fX8P = this.jF9w * this.oX1x;
        return K6E.Bj5o.call(this, bM6G, bh6b, fX8P, bq6k)
    };
    b5g.cnx9o = function (Wl1x) {
        this.CY6S = a4e.B6v(Wl1x);
        this.bW6Q([[this.CY6S, "click", this.oV1x.g6a(this)]])
    };
    b5g.bjT5Y = function (F6z) {
        F6z = F6z || {};
        if (this.ty2x || !F6z) return;
        if (!F6z.scrollHeight) F6z = a4e.pd1x();
        var bh6b = a4e.hR9I(this.in9e, this.cnr9i ? F6z : null),
            do7h = bh6b.y + this.in9e.offsetHeight - F6z.scrollTop - F6z.clientHeight,
            bjS5X = F6z.scrollHeight <= F6z.clientHeight;
        if (do7h <= this.TR0x || bjS5X && !this.ty2x) {
            this.oV1x()
        }
    };
    b5g.cmw9n = function (d6d) {
        if (this.ty2x) return;
        this.bjT5Y(h6b.W6Q(d6d))
    };
    b5g.Bn5s = function (d6d) {
        K6E.Bn5s.apply(this, arguments);
        if (!d6d.stopped) {
            this.QR0x();
            var bh6b = 0;
            if (d6d.index > 1) {
                bh6b = this.zz5E + ((d6d.index - 1) * this.jF9w - 1) * this.oX1x
            }
            this.hP9G = bh6b;
            this.oV1x()
        }
    };
    b5g.bMe2x = function (e6c) {
        if (!!this.Cs6m) {
            var do7h = e6c.offset > 0 ? this.oX1x : this.zz5E, fX8P = do7h + this.oX1x * (this.Cs6m - 1);
            this.hP9G = e6c.offset + fX8P;
            e6c.data.limit = fX8P;
            e6c.limit = fX8P;
            delete this.Cs6m
        }
        return e6c
    };
    b5g.blD5I = function (e6c) {
        delete this.Wk1x;
        K6E.blD5I.apply(this, arguments);
        this.bBL9C()
    };
    b5g.blC5H = function (d6d) {
        if (d6d.key != this.jr9i.key) return;
        switch (d6d.action) {
            case"refresh":
            case"append":
                delete this.Wk1x;
                break
        }
        K6E.blC5H.apply(this, arguments)
    };
    b5g.PI9z = function () {
        this.yM5R("onbeforelistload", "列表加载中...");
        a4e.ba6U(this.CY6S, "display", "none")
    };
    b5g.bly5D = function (i6c, bh6b, fX8P) {
        var bq6k = i6c.length, bjM5R = i6c.loaded ? bh6b + fX8P >= bq6k : bh6b + fX8P > bq6k;
        this.hP9G = Math.min(this.hP9G, bq6k);
        a4e.ba6U(this.CY6S, "display", bjM5R ? "none" : "");
        if (bjM5R) this.ty2x = !0;
        if (this.jF9w > 0) {
            var by6s = this.Bj5o(bh6b, i6c.length);
            if (this.bLQ2x(by6s.index, by6s.total)) return !0;
            var do7h = this.zz5E - this.oX1x, gR8J = this.jF9w * this.oX1x;
            this.ty2x = (bh6b + fX8P - do7h) % gR8J == 0 || bjM5R;
            a4e.ba6U(this.CY6S, "display", this.ty2x ? "none" : "");
            this.blB5G(this.ty2x && by6s.total > 1 ? "" : "none")
        }
    };
    b5g.blz5E = function () {
        this.hP9G = 0;
        this.ty2x = !0;
        this.yM5R("onemptylist", "没有列表数据！")
    };
    b5g.Py9p = function (dT8L, kX0x) {
        this.in9e.insertAdjacentHTML(kX0x || "beforeEnd", dT8L)
    };
    b5g.Pu9l = function (hp9g) {
        this.fL8D = this.fL8D || [];
        if (k6e.eJ8B(hp9g)) {
            fA8s.push.apply(this.fL8D, hp9g)
        } else {
            this.fL8D.push(hp9g)
        }
    };
    b5g.YA2x = function (d6d) {
        a4e.ni0x(this.cu6o);
        this.Pd9U(d6d, "onafteradd");
        var eY8Q = d6d.flag;
        if (d6d.stopped || !eY8Q) return;
        if (this.jF9w > 0) {
            this.blA5F();
            return
        }
        this.hP9G += 1;
        eY8Q == -1 ? this.blm5r(d6d.data) : this.bKB1x(d6d.data)
    };
    b5g.YB2x = function (d6d) {
        this.Pd9U(d6d, "onafterdelete");
        if (d6d.stopped) return;
        if (this.jF9w > 0) {
            this.blA5F();
            return
        }
        var C6w = d6d.data[this.fi8a.pkey];
        if (!!this.fL8D) {
            var p6j = a4e.bOc2x(C6w), r6l = k6e.dj7c(this.fL8D, p6j);
            if (r6l >= 0) {
                this.fL8D.splice(r6l, 1);
                this.hP9G -= 1
            }
            if (!!p6j) p6j.T6N()
        } else {
            var f6b = a4e.B6v(this.bMQ2x(C6w));
            if (!!f6b) this.hP9G -= 1;
            a4e.cJ7C(f6b)
        }
        if (this.hP9G <= 0) this.oV1x()
    };
    b5g.blr5w = function (bh6b, fX8P) {
        if (bh6b != this.hP9G) return;
        if (this.bdG3x()) {
            this.ty2x = !1;
            this.bBL9C()
        }
    };
    b5g.bln5s = function (bh6b, fX8P) {
        if (bh6b != 0) return;
        var Ll8d = this.S6M.hE9v(this.jr9i.key);
        for (var i = fX8P - 1; i >= 0; i--) {
            this.blm5r(Ll8d[i])
        }
    };
    b5g.bBL9C = function () {
        var F6z = this.GV7O;
        if (!F6z || this.ty2x) return;
        this.bjT5Y(this.GV7O)
    };
    b5g.gz8r = function () {
        delete this.ty2x;
        K6E.gz8r.apply(this, arguments)
    };
    b5g.oV1x = function () {
        if (!!this.Wk1x) return;
        this.Wk1x = !0;
        var bh6b = this.hP9G;
        this.hP9G += bh6b == 0 ? this.zz5E : this.oX1x;
        this.bMf2x(bh6b)
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), k6e = c5h("nej.u"), h6b = c5h("nej.v"), cX7Q = c5h("nej.x"),
        N6H = c5h("nej.ut"), b5g;
    if (!!N6H.Hh7a) return;
    N6H.Hh7a = NEJ.C();
    b5g = N6H.Hh7a.O6I(N6H.cG7z);
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.je9V = e6c.event || "click";
        this.kI0x = e6c.selected || "js-selected";
        this.nZ0x = e6c.disabled || "js-disabled";
        this.bBt9k = !!e6c.inverse;
        this.clc9T(e6c.list);
        this.Ue0x(e6c.index || 0)
    };
    b5g.bD6x = function () {
        var ckU8M = function (f6b) {
            this.bjH5M(f6b, !1)
        };
        return function () {
            this.bH6B();
            k6e.bd6X(this.bU6O, ckU8M, this);
            delete this.bU6O;
            delete this.je9V;
            delete this.ct6n;
            delete this.nZ0x;
            delete this.kI0x;
            delete this.bBt9k
        }
    }();
    b5g.clc9T = function () {
        var blP5U = function (p6j) {
            if (!p6j) return;
            this.bU6O.push(p6j);
            var r6l = this.bU6O.length - 1, dt7m = this.bjG5L[r6l];
            if (!dt7m) {
                dt7m = this.Ue0x.g6a(this, r6l);
                this.bjG5L[r6l] = dt7m
            }
            this.bW6Q([[p6j, this.je9V, dt7m]])
        };
        return function (i6c) {
            this.bU6O = [];
            if (!this.bjG5L) this.bjG5L = [];
            k6e.bd6X(i6c, blP5U, this)
        }
    }();
    b5g.bjH5M = function (F6z, cjV8N) {
        !!cjV8N && !this.bBt9k ? a4e.y6s(F6z, this.kI0x) : a4e.x6r(F6z, this.kI0x)
    };
    b5g.Ue0x = function (r6l, Uh0x, j6d) {
        var F6z = this.bU6O[r6l];
        if (Uh0x != !0 && (r6l == this.ct6n || !F6z || a4e.bE6y(F6z, this.nZ0x))) {
            h6b.cq6k(arguments[1]);
            return this
        }
        var d6d = {index: r6l, last: this.ct6n, list: this.lA0x(), data: j6d || a4e.t6n(F6z, "value")};
        this.ct6n = r6l;
        F6z = this.bU6O[d6d.last];
        if (!!F6z) this.bjH5M(F6z, !1);
        F6z = this.bU6O[this.ct6n];
        this.bjH5M(F6z, !0);
        this.z6t("onchange", d6d);
        if (!d6d.nostop) h6b.cq6k(arguments[1]);
        return this
    };
    b5g.tK2x = function () {
        return this.ct6n
    };
    b5g.lA0x = function () {
        return this.bU6O
    };
    a4e.cjP8H = cX7Q.cjP8H = function (bI6C, e6c) {
        var C6w = a4e.lB0x(bI6C);
        if (!C6w) return null;
        if (!N6H.bbR3x(C6w, N6H.Hh7a)) {
            e6c = e6c || {};
            e6c.list = !e6c.clazz ? a4e.dl7e(C6w) : a4e.H6B(C6w, e6c.clazz);
            delete e6c.clazz
        }
        return N6H.bbR3x(C6w, N6H.Hh7a, e6c || bb6V)
    };
    cX7Q.isChange = !0
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, k6e = c5h("nej.u"), v6p = c5h("nej.j"), l6f = c5h("nm.x");
    var SETTING_KEY = "player-setting";
    var nl0x = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    nl0x = v6p.tA2x(SETTING_KEY) || nl0x;
    l6f.bjA5F = function () {
        return nl0x
    };
    l6f.Hr7k = function (Hs7l) {
        if (Hs7l) {
            nl0x = Hs7l;
            v6p.uV3x(SETTING_KEY, Hs7l)
        }
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), I6C = c5h("nej.ut"),
        l6f = c5h("nm.x"), q6k = c5h("nm.d"), hg9X = c5h("nm.w.player.log");
    var kT0x = q6k.hQ9H.A6u();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var ho9f = function (u6o, bG6A, rl1x) {
        var cH7A = l6f.fm8e("{0} {1} {2}", k6e.ig9X(new Date, "yyyy-MM-dd HH:mm:ss"), u6o, bG6A);
        if (rl1x == LogLevel.ERROR) {
            kT0x.fu8m("playerror", {message: bG6A})
        }
        if (rl1x >= LogLevel.INFO) {
            kT0x.bHW1x(cH7A)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cH7A)
        }
    };
    hg9X.ce6Y = function () {
        ho9f("PLAY_ERROR", l6f.fm8e.apply(null, arguments), LogLevel.ERROR)
    };
    hg9X.pV1x = function () {
        ho9f("PLAY_INFO", l6f.fm8e.apply(null, arguments), LogLevel.INFO)
    };
    hg9X.cHD4H = function () {
        ho9f("PLAY_DEBUG", l6f.fm8e.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), I6C = c5h("nej.ut"), k6e = c5h("nej.u"), w6q = c5h("nm.w"),
        eP8H = c5h("flash.cb");
    var ee8W = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Hx7q, WN1x, vQ3x;
    w6q.cjD8v = function (u6o, cK7D) {
        if (u6o != "flash") {
            if (!Hx7q) {
                Hx7q = a4e.dg7Z("audio");
                k6e.bd6X(ee8W, function (u6o) {
                    h6b.s6m(Hx7q, u6o, onMediaCallBack)
                })
            }
            if (Hx7q && Hx7q.canPlayType && Hx7q.canPlayType("audio/mpeg")) {
                cK7D(new MediaWrap("audio"));
                return
            }
        }
        if (!WN1x) {
            a4e.rE1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (hM9D) {
                    WN1x = hM9D;
                    k6e.bd6X(ee8W, function (u6o) {
                        eP8H[u6o] = onMediaCallBack;
                        WN1x.addCallback(u6o, "flash.cb." + u6o)
                    });
                    cK7D(new MediaWrap("flash"))
                }.g6a(this)
            })
        } else {
            cK7D(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Hz7s) {
        var gN8F;
        I6C.fK8C.A6u({element: this, event: ee8W.concat(["interrupt", "recover"])});
        gN8F = Hz7s == "audio" ? Hx7q : WN1x;
        this.type = Hz7s;
        this.destroy = function () {
        };
        this.setSrc = function (Y6S) {
            if (vQ3x != this) {
                var gq8i = vQ3x;
                if (gq8i) {
                    gq8i.interrupt()
                }
                vQ3x = this
            }
            if (Hz7s == "flash") {
                gN8F.setSrc(Y6S)
            } else {
                gN8F.src = Y6S
            }
        };
        this.play = function () {
            if (vQ3x != this) {
                var gq8i = vQ3x;
                if (gq8i) {
                    gq8i.interrupt();
                    vQ3x = this;
                    this.recover()
                } else {
                    vQ3x = this
                }
            }
            if (Hz7s == "flash") {
                gN8F.as_play()
            } else {
                gN8F.play()
            }
        };
        this.pause = function () {
            if (vQ3x != this) return;
            if (Hz7s == "flash") {
                gN8F.as_pause()
            } else {
                gN8F.pause()
            }
        };
        this.load = function () {
            if (vQ3x != this) return;
            if (Hz7s == "flash") {
                gN8F.as_load()
            } else {
                gN8F.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return gN8F
        };
        var pb1x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k6e.bd6X(pb1x, function (V6P) {
            var UY1x = "get" + V6P, Vb1x = "set" + V6P;
            if (Hz7s == "flash") {
                if (!this[UY1x]) {
                    this[UY1x] = function () {
                        return gN8F[UY1x]()
                    }
                }
                if (!this[Vb1x]) {
                    this[Vb1x] = function (value) {
                        gN8F[Vb1x](value)
                    }
                }
            } else {
                var bAD9u = V6P.slice(0, 1).toLowerCase() + V6P.slice(1);
                if (!this[UY1x]) {
                    this[UY1x] = function () {
                        return gN8F[bAD9u]
                    }
                }
                if (!this[Vb1x]) {
                    this[Vb1x] = function (value) {
                        gN8F[bAD9u] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d6d) {
        if (vQ3x) {
            h6b.z6t(vQ3x, d6d.type, d6d)
        }
    }
})();
(function () {
    var c5h = NEJ.P, h6b = c5h("nej.v"), v6p = c5h("nej.j"), I6C = c5h("nej.ut"), du7n = c5h("nej.p"),
        w6q = c5h("nm.w"), l6f = c5h("nm.x"), hg9X = c5h("nm.w.player.log"), b5g;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bAB9s = false;
    w6q.fO8G = NEJ.C();
    b5g = w6q.fO8G.O6I(I6C.cG7z);
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.cL7E = {};
        this.Xa1x(e6c.media);
        v6p.bn6h("/api/cdns", {
            type: "json", onload: function (d6d) {
                if (d6d.code) {
                    this.qD1x = d6d.data
                }
            }.g6a(this)
        })
    };
    b5g.bD6x = function () {
        this.bH6B();
        delete this.cL7E
    };
    b5g.Xc1x = function (bj6d) {
        if (!bj6d) return;
        var ww4A = this.cL7E.volume;
        if (this.dS8K) {
            this.dS8K.pause()
        }
        this.cL7E = {time: 0, id: bj6d.id, duration: bj6d.duration / 1e3, play: this.cL7E.play, stalledRetryCount: 0};
        if (ww4A != null) {
            this.cL7E.volume = ww4A
        }
        this.cL7E.loadState = LoadState.LOAD_START;
        this.bAz9q(bj6d.id);
        hg9X.pV1x("play song id: {0}", bj6d.id)
    };
    b5g.el8d = function () {
        if (this.cL7E.error) {
            this.cL7E.error = null;
            if (this.cL7E.error == ErrorType.INFO_GET_ERR || this.bAy9p()) {
                this.bAx9o()
            } else {
                this.Vu1x()
            }
        } else {
            if (this.dS8K) {
                this.dS8K.play()
            }
        }
        this.cL7E.play = true;
        this.qf1x("play")
    };
    b5g.fD8v = function () {
        if (this.dS8K) {
            this.dS8K.pause()
        }
        this.cL7E.play = false;
        this.qf1x("pause")
    };
    b5g.pj1x = function (bA6u) {
        if (this.dS8K) {
            this.dS8K.setCurrentTime(bA6u)
        }
        this.cL7E.time = bA6u;
        hg9X.pV1x("seek to: {0}", bA6u)
    };
    b5g.bjx5C = function () {
        return this.cL7E.duration || 0
    };
    b5g.uv3x = function () {
        return !!this.cL7E.play
    };
    b5g.mO0x = function (Vo1x) {
        this.cL7E.volume = Vo1x;
        if (this.dS8K) {
            this.dS8K.setVolume(Vo1x)
        }
    };
    b5g.Xp1x = function () {
        return this.cL7E.time
    };
    b5g.Xa1x = function (u6o) {
        w6q.cjD8v(u6o, function (gN8F) {
            this.dS8K = gN8F;
            hg9X.pV1x("media loaded: {0}", gN8F.type);
            this.bW6Q([[this.dS8K, "loadedmetadata", this.ciy8q.g6a(this)], [this.dS8K, "ended", this.cij8b.g6a(this)], [this.dS8K, "waiting", this.ye4i.g6a(this)], [this.dS8K, "play", this.uj3x.g6a(this)], [this.dS8K, "pause", this.bju5z.g6a(this)], [this.dS8K, "playing", this.Vc1x.g6a(this)], [this.dS8K, "timeupdate", this.cig8Y.g6a(this)], [this.dS8K, "progress", this.sN2x.g6a(this)], [this.dS8K, "stalled", this.bjt5y.g6a(this)], [this.dS8K, "interrupt", this.fD8v.g6a(this)], [this.dS8K, "recover", this.cib8T.g6a(this)], [this.dS8K, "error", this.eK8C.g6a(this)]]);
            if (this.cL7E) {
                if (this.cL7E.loadState == LoadState.LOAD_START || this.cL7E.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bjr5w();
                    if (this.cL7E.volume != null) {
                        this.dS8K.setVolume(this.cL7E.volume)
                    }
                }
            }
        }.g6a(this))
    };
    b5g.chU8M = function (u6o) {
        this.Kv8n();
        this.dS8K.destroy();
        this.cL7E.loadState = LoadState.IN_SWITCH_MEDIA;
        this.ye4i();
        this.Xa1x(u6o);
        hg9X.pV1x("switch media")
    };
    b5g.cHE4I = function () {
        return this.dS8K
    };
    b5g.bAz9q = function () {
        this.ye4i();
        v6p.bn6h("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cL7E.id]), br: DEFAULT_BR},
            onload: this.bAe9V.g6a(this),
            onerror: this.bAe9V.g6a(this)
        })
    };
    b5g.bAe9V = function (d6d) {
        if (d6d.code == 200 && d6d.data && d6d.data.length) {
            var by6s = d6d.data[0];
            if (!by6s.url) {
                this.cL7E.error = ErrorType.INFO_GET_ERR;
                this.qf1x("error", {code: this.cL7E.error});
                return
            }
            this.cL7E.playUrl = by6s.url;
            this.cL7E.expireTime = (new Date).getTime() + by6s.expi * 1e3;
            this.bjr5w()
        } else {
            this.cL7E.error = ErrorType.INFO_GET_ERR;
            this.qf1x("error", {code: this.cL7E.error});
            hg9X.ce6Y("info load error")
        }
    };
    b5g.bjr5w = function () {
        if (this.dS8K) {
            var Y6S = this.cL7E.playUrl;
            if (this.cL7E.time > 0 && (this.cL7E.loadState == LoadState.IN_RE_GET_URL || this.cL7E.loadState == LoadState.IN_RE_GET_URL)) {
                Y6S += "#t=" + this.cL7E.time
            }
            this.dS8K.setSrc(Y6S);
            hg9X.pV1x("load mp3: {0},loadState: {1}.", Y6S, this.cL7E.loadState)
        }
    };
    b5g.bzY9P = function () {
        if (/#t=(\d+)$/.test(this.dS8K.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b5g.Vu1x = function () {
        var bA6u = parseInt(this.cL7E.time) || 0, chB8t = this.bzY9P();
        if (bA6u === chB8t) {
            this.dS8K.load()
        } else {
            this.dS8K.setSrc(this.cL7E.playUrl + "#t=" + bA6u)
        }
        this.cL7E.loadState = LoadState.IN_RELOAD;
        this.ye4i();
        hg9X.pV1x("reload from: {0}", bA6u)
    };
    b5g.bAx9o = function () {
        this.cL7E.loadState = LoadState.IN_RE_GET_URL;
        this.bAz9q()
    };
    b5g.bzL9C = function () {
        var sS2x = getHost(this.cL7E.playUrl);
        if (sS2x) {
            for (var i = 0; i < this.qD1x.length; i++) {
                var ik9b = this.qD1x[i] || [], r6l = ik9b.indexOf(sS2x);
                if (r6l >= 0 && ik9b.length > 1) {
                    return ik9b[(r6l + 1) % ik9b.length]
                }
            }
        }

        function getHost(Y6S) {
            if (CDN_HOST_REG.test(Y6S)) return RegExp.$1
        }
    };
    b5g.cgX8P = function () {
        this.cL7E.playUrl = this.cL7E.playUrl.replace(CDN_HOST_REG, this.bzL9C());
        this.cL7E.loadState = LoadState.IN_SWITCH_CDN;
        this.bjr5w();
        this.ye4i()
    };
    b5g.ciy8q = function () {
        if (this.cL7E.loadState == LoadState.LOAD_START) {
            this.cL7E.loadState = LoadState.LOADED_META;
            if (this.dS8K.type == "audio") {
                this.cL7E.duration = this.dS8K.getDuration()
            }
            this.qf1x("loadedmeta", {duration: this.cL7E.duration})
        } else {
            this.cL7E.loadState = LoadState.LOADED_META
        }
        if (this.cL7E.play) {
            this.dS8K.play()
        } else {
            this.dS8K.pause()
        }
        if (this.cL7E.time && parseInt(this.cL7E.time) != this.bzY9P()) {
            this.dS8K.setCurrentTime(this.cL7E.time)
        }
        this.Im7f();
        this.Vc1x();
        bAB9s = true;
        hg9X.pV1x("loaded meta")
    };
    b5g.cij8b = function () {
        this.cL7E.ended = true;
        this.qf1x("ended")
    };
    b5g.ye4i = function () {
        if (!this.cL7E.waiting) {
            this.cL7E.waiting = true;
            this.cL7E.waitTimestamp = +(new Date);
            this.qf1x("waiting")
        }
    };
    b5g.Vc1x = function () {
        this.cL7E.waiting = false;
        this.cL7E.waitTimestamp = 0;
        this.qf1x("playing")
    };
    b5g.uj3x = function () {
        this.qf1x("play")
    };
    b5g.bju5z = function () {
        this.qf1x("pause")
    };
    b5g.cig8Y = function () {
        if (this.cL7E.loadState != LoadState.LOADED_META) return;
        var bA6u = this.dS8K.getCurrentTime();
        if (this.cL7E.waiting && bA6u > this.cL7E.time) {
            this.Vc1x()
        }
        this.cL7E.time = bA6u;
        this.qf1x("timeupdate", {time: this.cL7E.time, duration: this.cL7E.duration})
    };
    b5g.sN2x = function (d6d) {
        if (this.cL7E.loadState != LoadState.LOADED_META) return;
        var o6i = {};
        if (d6d.data) {
            o6i.total = d6d.data.total;
            o6i.loaded = d6d.data.loaded
        } else {
            var Af5k = this.dS8K.getBuffered(), bA6u = this.dS8K.getCurrentTime(), oF1x = 0;
            for (var i = 0; i < Af5k.length; i++) {
                if (bA6u > Af5k.start(i) && bA6u < Af5k.end(i)) {
                    oF1x = Af5k.end(i);
                    break
                }
            }
            o6i.total = this.cL7E.duration;
            o6i.loaded = Math.min(oF1x, o6i.total)
        }
        this.qf1x("progress", o6i)
    };
    b5g.Im7f = function () {
        if (this.cL7E.retry) {
            clearTimeout(this.cL7E.retry.tid);
            this.cL7E.retry = null
        }
    };
    b5g.eK8C = function () {
        var cb6V = this.dS8K.getError();
        hg9X.ce6Y("media error code: {0}, netState: {1}", cb6V.code, this.dS8K.getNetworkState());
        if (cb6V.code == MediaError.MEDIA_ERR_NETWORK || cb6V.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Hs7l = l6f.bjA5F();
            if (!this.cL7E.retry) {
                this.cL7E.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cL7E.retry.tid)
            }
            if (this.cL7E.retry.level == RetryLevel.NONE) {
                if (this.bAy9p()) {
                    this.cL7E.retry.level = RetryLevel.GET_URL;
                    this.bAx9o();
                    hg9X.pV1x("Url expired, get url.")
                } else {
                    this.cL7E.retry.level = RetryLevel.RELOAD;
                    this.cL7E.retry.tid = setTimeout(this.Vu1x.g6a(this), 3e3);
                    hg9X.pV1x("Reload mp3 3s later.")
                }
            } else if (this.cL7E.retry.level == RetryLevel.GET_URL) {
                this.cL7E.retry.level = RetryLevel.RELOAD;
                this.cL7E.retry.tid = setTimeout(this.Vu1x.g6a(this), 3e3);
                hg9X.pV1x("Reload mp3 3s later.")
            } else if (this.cL7E.retry.level == RetryLevel.RELOAD) {
                this.cL7E.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bzL9C()) {
                    this.cL7E.retry.tid = setTimeout(this.cgX8P.g6a(this), 5e3);
                    hg9X.pV1x("Switch CDN 5s later.")
                } else {
                    this.cL7E.retry.tid = setTimeout(this.Vu1x.g6a(this), 5e3);
                    hg9X.pV1x("Reload mp3 5s later.")
                }
            } else if (!bAB9s && this.dS8K.type == "audio" && !Hs7l.useFlash && !du7n.Ii7b.mac && l6f.bpT6N().supported) {
                Hs7l.useFlash = true;
                l6f.Hr7k(Hs7l);
                this.chU8M("flash")
            } else {
                this.Im7f();
                this.fD8v();
                this.cL7E.error = ErrorType.NET_ERR;
                this.qf1x("error", {code: this.cL7E.error});
                hg9X.ce6Y("error can not retry.")
            }
        } else {
            this.Im7f();
            this.fD8v();
            this.cL7E.error = ErrorType.UNKNOWN_ERR;
            this.qf1x("error", {code: this.cL7E.error});
            hg9X.ce6Y("error can not retry.")
        }
    };
    b5g.bjt5y = function () {
        var hO9F = 0, bzI9z = 5e3;
        return function () {
            this.ye4i();
            clearTimeout(hO9F);
            setTimeout(function () {
                var eU8M = +(new Date);
                if (this.cL7E.waiting && eU8M - this.cL7E.waitTimestamp >= bzI9z && this.cL7E.stalledRetryCount < MAX_STALLED_RETRY) {
                    hg9X.pV1x("stalled too long retry.");
                    this.cL7E.stalledRetryCount++;
                    this.Vu1x()
                }
            }.g6a(this), bzI9z);
            hg9X.pV1x("stalled")
        }
    }();
    b5g.bAy9p = function () {
        var eU8M = +(new Date);
        return eU8M > this.cL7E.expireTime
    };
    b5g.cib8T = function () {
        var bA6u = parseInt(this.cL7E.time) || 0;
        this.dS8K.setSrc(this.cL7E.playUrl + "#t=" + bA6u);
        this.cL7E.loadState = LoadState.IN_RELOAD;
        this.ye4i();
        hg9X.pV1x("recover from: {0}", bA6u)
    };
    b5g.qf1x = function (U6O, j6d) {
        h6b.z6t(w6q.fO8G, "playaction", {action: U6O, data: j6d || {}})
    };
    I6C.fK8C.A6u({element: w6q.fO8G, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c5h = NEJ.P, h6b = c5h("nej.v"), I6C = c5h("nej.ut"), w6q = c5h("nm.w"), b5g;
    w6q.Hw7p = NEJ.C();
    b5g = w6q.Hw7p.O6I(w6q.fO8G);
    K6E = w6q.Hw7p.cs6m;
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.cgU8M = function (bN6H) {
        this.Xc1x(bN6H);
        this.el8d()
    };
    b5g.bjl5q = function () {
        this.fD8v()
    };
    b5g.wR4V = function (d6d) {
        if (d6d.action == "play") {
            this.fD8v()
        }
    };
    b5g.qf1x = function (U6O, j6d) {
        h6b.z6t(w6q.Hw7p, "tmpplayaction", {action: U6O, data: j6d || {}, tmp: true})
    };
    b5g.sZ2x = function () {
        return this.cL7E
    };
    I6C.fK8C.A6u({element: w6q.Hw7p, event: ["tmpplayaction"]})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), fH8z = c5h("nej.n"),
        v6p = c5h("nej.j"), I6C = c5h("nej.ut"), bc6W = c5h("nej.ui"), w6q = c5h("nm.w"), m6g = c5h("nm.l"),
        kS0x = c5h("nm.c"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), b5g, K6E,
        XV1x = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var bjh5m = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    w6q.bjg5l = NEJ.C();
    b5g = w6q.bjg5l.O6I(bc6W.eh8Z);
    b5g.cx6r = function (e6c) {
        this.cD7w(e6c);
        var i6c = a4e.H6B(this.n6h, "j-flag");
        this.cHF4J = i6c.shift();
        this.cga7T = i6c.shift();
        this.Iu7n = i6c.shift();
        this.bja5f = i6c.shift();
        this.biZ5e = [i6c.shift(), i6c.shift(), i6c.shift(), i6c.shift(), i6c.shift(), i6c.shift()];
        this.Ye1x = i6c.shift();
        this.byR8J = i6c.shift();
        this.rz1x = {list: this.biZ5e, selected: "z-curr", onchange: this.byL8D.g6a(this)};
        h6b.s6m(this.Iu7n, "input", this.Yi1x.g6a(this));
        h6b.s6m(this.Iu7n, "propertychange", this.Yi1x.g6a(this));
        h6b.s6m(this.Iu7n, "keyup", this.Yi1x.g6a(this));
        h6b.s6m(this.cga7T, "click", this.Yi1x.g6a(this));
        h6b.s6m(this.Ye1x, "click", this.cN7G.g6a(this));
        h6b.s6m(this.byR8J, "click", function () {
            this.z6t("oncancel", {})
        }.g6a(this));
        this.S6M = q6k.Eg6a.go8g();
        this.Uj0x = top.nm.w.Hw7p.go8g();
        I6C.fK8C.A6u({element: top.nm.w.Hw7p, event: ["tmpplayaction"]});
        this.sh2x = {limit: 100, offset: 0, parent: this.Ye1x, onbeforelistload: this.qI1x.g6a(this)};
        q6k.sk = "fuck" + a4e.t6n(this.bja5f, "xname") + "458";
        h6b.s6m(top.nm.w.Hw7p, "tmpplayaction", this.wR4V.g6a(this))
    };
    b5g.cf6Z = function () {
        this.cd6X = "m-xwgt-publish-search"
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        if (!!this.Dc6W) {
            this.Dc6W.T6N();
            delete this.Dc6W
        }
        this.rz1x.index = bjh5m[e6c.type || "song"];
        this.Dc6W = I6C.Hh7a.A6u(this.rz1x);
        this.Iu7n.value = "";
        this.Iu7n.focus();
        this.vJ3x = "";
        this.cHI4M = 0;
        if (e6c.showMV == true) {
            this.biZ5e[bjh5m["mv"]].parentNode.style.display = "";
            a4e.y6s(this.bja5f, "srchtab-1")
        } else {
            this.biZ5e[bjh5m["mv"]].parentNode.style.display = "none";
            a4e.x6r(this.bja5f, "srchtab-1")
        }
        if (!!this.dK7D) {
            this.dK7D = this.dK7D.T6N()
        }
        if (e6c.hideBack) {
            a4e.y6s(this.byR8J.parentNode, "f-hide")
        }
    };
    b5g.bD6x = function () {
        this.Uj0x.bjl5q();
        this.bH6B()
    };
    b5g.Yi1x = function () {
        var value = this.Iu7n.value.trim();
        if (value && value.length) {
            if (value != this.vJ3x) {
                this.vJ3x = value;
                this.byL8D({index: this.Dc6W.tK2x()})
            }
        } else {
            if (this.dK7D) {
                this.dK7D = this.dK7D.T6N()
            }
        }
        this.vJ3x = value
    };
    b5g.cN7G = function () {
        var ceM7F = function (F6z) {
            return a4e.bE6y(F6z, "sitm") || a4e.bE6y(F6z, "itm") || a4e.bE6y(F6z, "mv-item")
        }, ceI7B = function (F6z) {
            return a4e.bE6y(F6z, "ply")
        }, byG8y = function () {
            m6g.Z6T.L6F({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, cem7f = function () {
            m6g.Z6T.L6F({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, biV5a = function (bj6d) {
            if (bj6d && bj6d.privilege && bj6d.privilege.toast) {
                v6p.bn6h("/api/song/toast", {
                    query: {id: bj6d.id},
                    type: "json",
                    onload: UD0x.g6a(this),
                    onerror: UD0x.g6a(this)
                })
            } else {
                Uy0x()
            }
        }, UD0x = function (Q6K) {
            Uy0x((Q6K || bb6V).toast)
        }, Uy0x = function (bG6A) {
            m6g.Z6T.L6F({type: 2, tip: bG6A || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d6d) {
            var Hk7d = h6b.W6Q(d6d, ceI7B), i6c = h6b.W6Q(d6d, ceM7F), es8k = this.Uj0x.sZ2x();
            if (!!i6c) {
                h6b.bi6c(d6d);
                this.Ud0x = a4e.t6n(i6c, "id");
                this.TZ0x = a4e.t6n(i6c, "type");
                if (this.TZ0x == 18) {
                    var bN6H = this.S6M.eH8z(this.Ud0x), rl1x = l6f.qn1x(bN6H);
                    if (!Hk7d) {
                        if (rl1x == 10) {
                            byG8y();
                            return
                        } else if (rl1x == 100) {
                            biV5a(bN6H);
                            return
                        }
                    } else {
                        if (rl1x == 10) {
                            byG8y();
                            return
                        } else if (rl1x == 100) {
                            biV5a(bN6H);
                            return
                        } else if (rl1x == 11) {
                            cem7f();
                            return
                        } else {
                            a4e.x6r(this.CZ6T, "z-pause z-loading");
                            if (Hk7d == this.CZ6T && es8k.play && !es8k.ended) {
                                this.Uj0x.bjl5q()
                            } else {
                                this.CZ6T = Hk7d;
                                this.Uj0x.cgU8M(bN6H)
                            }
                            return
                        }
                    }
                } else if (this.TZ0x == 70) {
                    if (a4e.bE6y(i6c, "z-noprogram")) {
                        m6g.Z6T.L6F({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.cee7X()
            }
        }
    }();
    b5g.cee7X = function () {
        var id9U = this.S6M.eH8z(this.Ud0x), tB2x = l6f.bBa9R(this.TZ0x, id9U);
        tB2x.title = tB2x.title || "";
        tB2x.author = tB2x.author || "";
        tB2x.picUrl = tB2x.picUrl || "";
        tB2x.authors = tB2x.authors || "";
        if (this.TZ0x == 70) {
            this.Ud0x = this.Ud0x.slice(0, -4)
        }
        this.z6t("onfinish", {id: this.Ud0x, type: this.TZ0x, data: tB2x})
    };
    b5g.wR4V = function (d6d) {
        var j6d = d6d.data;
        if (!this.CZ6T) {
            return
        }
        switch (d6d.action) {
            case"play":
                a4e.fl8d(this.CZ6T, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a4e.x6r(this.CZ6T, "z-pause z-loading");
                break;
            case"error":
                m6g.Z6T.L6F({type: 2, tip: "试听遇到问题，播放失败"});
                a4e.x6r(this.CZ6T, "z-pause z-loading");
                break;
            case"playing":
                a4e.fl8d(this.CZ6T, "z-loading", "z-pause");
                break;
            case"waiting":
                a4e.fl8d(this.CZ6T, "z-pause", "z-loading");
                break
        }
    };
    b5g.cdR7K = function (d6d) {
        if (d6d.result.code == 407) {
            this.Ye1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Ye1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b5g.byL8D = function (d6d) {
        if (!this.vJ3x || d6d.index < 0 || d6d.index > 5) {
            return
        }
        this.Uj0x.bjl5q();
        var bg6a = XV1x[d6d.index], e6c = NEJ.X({}, this.sh2x);
        e6c.cache = {klass: q6k.Eg6a, clear: true, onerror: this.cdR7K.g6a(this)};
        e6c.cache.lkey = "search-publish-" + bg6a.type + "-" + this.vJ3x;
        e6c.item = {klass: bg6a.item, getRestrictLevel: l6f.qn1x, dur2time: l6f.li0x};
        if (!e6c.cache.data) {
            e6c.cache.data = {}
        }
        e6c.cache.data.s = this.vJ3x;
        e6c.cache.data.type = bg6a.type;
        e6c.cache.data.isPub = true;
        if (bg6a.type == 1) {
            e6c.cache.data.hlpretag = '<span class="s-fc7">';
            e6c.cache.data.hlposttag = "</span>"
        }
        e6c.onemptylist = this.cdO7H.g6a(this, this.vJ3x);
        if (!!this.Hd7W) this.S6M.vf3x(this.Hd7W);
        if (!!this.dK7D) {
            this.dK7D = this.dK7D.T6N()
        }
        this.dK7D = I6C.nx0x.A6u(e6c);
        this.Hd7W = e6c.cache.lkey
    };
    b5g.qI1x = function (d6d) {
        d6d.value = a4e.iD9u("m-publish-search-loading")
    };
    b5g.cdO7H = function (J6D, d6d) {
        a4e.dH7A(d6d.parent, "m-publish-emtpy-message", {key: J6D});
        d6d.stopped = true
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), du7n = c5h("nej.p"), v6p = c5h("nej.j"),
        ca6U = c5h("nej.ut"), bC6w = c5h("nej.ui"), w6q = c5h("nm.w"), b5g, K6E;
    var cdD7w = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w6q.Hc7V = NEJ.C();
    b5g = w6q.Hc7V.O6I(bC6w.eh8Z);
    var gk8c = a4e.ex8p("m-wgt-receiverInput");
    var cdC7v = a4e.ex8p("m-wgt-receiverList");
    var iM9D = a4e.sC2x(cdD7w);
    var cdB7u = a4e.ex8p('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b5g.cx6r = function (e6c) {
        this.bk6e = [];
        this.wy4C = e6c.receiver || null;
        this.cdz7s = e6c.unique || false;
        this.nz0x = e6c.err;
        this.byp8h(this.byo8g, e6c.uid);
        this.cD7w(e6c)
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.TE0x();
        this.TC0x();
        this.YT2x();
        if (e6c.receiver) this.biS5X(e6c.receiver.nickname, e6c.receiver.userId);
        a4e.ba6U(this.Cq6k, "display", "block");
        a4e.ba6U(this.biR5W, "cursor", "text");
        a4e.ba6U(this.Cq6k, "cursor", "text")
    };
    b5g.cf6Z = function () {
        var j6d = this.byh8Z();
        this.cd6X = a4e.iw9n(a4e.bZ6T(gk8c, {receiver: this.wy4C, users: j6d}));
        this.mf0x = iM9D
    };
    b5g.bX6R = function () {
        this.cg6a();
        var bS6M = a4e.H6B(this.n6h, "j-flag");
        var hp9g = a4e.H6B(this.n6h, "j-item");
        this.biR5W = bS6M[0];
        this.byb8T = bS6M[1];
        this.ec8U = bS6M[2];
        this.Cq6k = bS6M[3];
        this.Zb2x = bS6M[4];
        this.biP5U = bS6M[5];
        this.fL8D = hp9g;
        a4e.y6s(this.fL8D[0], "j-selected");
        h6b.s6m(this.ec8U, "keyup", this.biO5T.g6a(this));
        h6b.s6m(this.ec8U, "keydown", this.Tg0x.g6a(this));
        h6b.s6m(this.ec8U, "focus", this.ls0x.g6a(this));
        h6b.s6m(this.Zb2x, "click", this.ccE6y.g6a(this));
        h6b.s6m(this.biR5W, "click", this.ccC6w.g6a(this));
        h6b.s6m(document.body, "click", this.ox1x.g6a(this));
        h6b.s6m(this.ec8U, "input", this.fM8E.g6a(this));
        h6b.s6m(this.ec8U, "blur", this.op1x.g6a(this))
    };
    b5g.bD6x = function (e6c) {
        h6b.mG0x(document.body, "click", this.ox1x.g6a(this));
        this.bH6B();
        this.YT2x();
        this.ccu6o();
        this.ox1x()
    };
    b5g.biO5T = function (d6d) {
        h6b.bi6c(d6d);
        var jP9G = d6d.keyCode || d6d.which;
        var bo6i = this.ec8U.value;
        var bq6k = this.fL8D.length;
        var sm2x = a4e.H6B(this.n6h, "j-selected")[0];
        switch (jP9G) {
            case 13:
                var ln0x = a4e.gg8Y(sm2x, "data-username");
                var il9c = a4e.gg8Y(sm2x, "data-userId");
                this.biS5X(ln0x, il9c);
                this.ox1x();
                this.ec8U.value = "";
                break;
            case 38:
                var r6l = a4e.gg8Y(sm2x, "data-index") - 1 < 0 ? bq6k - 1 : a4e.gg8Y(sm2x, "data-index") - 1;
                a4e.x6r(sm2x, "j-selected");
                a4e.y6s(this.fL8D[r6l], "j-selected");
                break;
            case 40:
                var r6l = parseInt(a4e.gg8Y(sm2x, "data-index")) + 1 >= bq6k ? 0 : parseInt(a4e.gg8Y(sm2x, "data-index")) + 1;
                a4e.x6r(sm2x, "j-selected");
                a4e.y6s(this.fL8D[r6l], "j-selected");
                break;
            default:
                this.wP4T()
        }
    };
    b5g.Tg0x = function (d6d) {
        var jP9G = d6d.keyCode || d6d.which;
        var bo6i = this.ec8U.value;
        var r6l = a4e.H6B(this.n6h, "j-receiver").length - 1;
        if (jP9G === 8 && bo6i === "") this.ccr6l(r6l)
    };
    b5g.fM8E = function (d6d) {
        var bo6i = this.ec8U.value;
        if (bo6i.length > 10) {
            this.ec8U.value = bo6i.substring(0, 10);
            return
        }
        du7n.ds7l.browser == "ie" && du7n.ds7l.version < "7.0" ? setTimeout(this.biJ5O.g6a(this), 0) : this.biJ5O();
        this.TC0x()
    };
    b5g.ls0x = function () {
        if (this.bk6e[0]) this.wP4T(); else this.byp8h(this.ccm6g);
        a4e.ba6U(this.Cq6k, "display", "none")
    };
    b5g.op1x = function () {
        var bq6k = a4e.H6B(this.n6h, "j-receiver").length;
        if (this.ec8U.value.trim() == "" && bq6k <= 0) a4e.ba6U(this.Cq6k, "display", "block")
    };
    b5g.biS5X = function (ln0x, il9c) {
        var Jx7q = this.SY0x();
        if (Jx7q.length >= 10) {
            this.dO8G();
            return
        }
        var bc6W;
        for (bc6W = 0; bc6W < Jx7q.length; bc6W++) {
            if (Jx7q[bc6W] == il9c) {
                this.ox1x();
                return
            }
        }
        if (!ln0x || !il9c) return;
        var f6b = a4e.dy7r(a4e.iw9n(a4e.bZ6T(cdB7u, {username: ln0x, userId: il9c})));
        var bI6C = this.byb8T.parentNode;
        if (this.cdz7s) {
            this.YT2x()
        }
        bI6C.insertBefore(f6b, this.byb8T);
        this.ec8U.value = "";
        var bq6k = a4e.H6B(this.n6h, "j-receiver").length;
        if (bq6k > 1) a4e.ba6U(this.Cq6k, "display", "none");
        this.biJ5O();
        this.TC0x()
    };
    b5g.YT2x = function () {
        var SV0x = a4e.H6B(this.n6h, "j-receiver");
        var bc6W;
        if (SV0x.length > 0) {
            for (bc6W = 0; bc6W < SV0x.length; bc6W++) {
                a4e.cJ7C(SV0x[bc6W], false)
            }
        }
    };
    b5g.ccu6o = function () {
        this.ec8U.value = ""
    };
    b5g.ccr6l = function (r6l) {
        this.dO8G(!0);
        var SV0x = a4e.H6B(this.n6h, "j-receiver");
        a4e.cJ7C(SV0x[r6l], false);
        this.TC0x()
    };
    b5g.wP4T = function () {
        var bo6i = this.ec8U.value;
        var bv6p = bo6i.trim().toLowerCase();
        var j6d;
        bv6p = bv6p.replace(/\[/g, "\\[");
        bv6p = bv6p.replace(/\]/g, "\\]");
        j6d = this.byh8Z(bv6p);
        this.cca6U(j6d)
    };
    b5g.ox1x = function (d6d) {
        a4e.ba6U(this.Zb2x, "display", "none")
    };
    b5g.dO8G = function (eA8s) {
        if (eA8s && this.nz0x) {
            a4e.ba6U(this.nz0x, "display", "none");
            return
        }
        if (this.nz0x) a4e.ba6U(this.nz0x, "display", "block")
    };
    b5g.ccE6y = function (d6d) {
        h6b.cq6k(d6d);
        var bO6I = d6d.target || d6d.srcElement;
        if (a4e.bE6y(bO6I, "j-flag")) return;
        var bI6C = bO6I.nodeName.toLowerCase() == "a" ? bO6I.parentNode : bO6I.parentNode.parentNode;
        var ln0x = a4e.gg8Y(bI6C, "data-username");
        var il9c = a4e.gg8Y(bI6C, "data-userId");
        this.biS5X(ln0x, il9c);
        this.ox1x();
        a4e.ba6U(this.Cq6k, "display", "none")
    };
    b5g.ccC6w = function (d6d) {
        h6b.bi6c(d6d);
        var bO6I = d6d.target || d6d.srcElement;
        if (a4e.bE6y(bO6I.parentNode, "j-receiver")) {
            a4e.cJ7C(bO6I.parentNode, false);
            this.dO8G(!0);
            this.TC0x()
        } else this.ec8U.focus()
    };
    b5g.biJ5O = function () {
        this.biP5U.innerHTML = this.ec8U.value;
        var cz7s = this.biP5U.offsetWidth + 2;
        a4e.ba6U(this.ec8U, "width", cz7s + "px")
    };
    b5g.TC0x = function () {
        var ZC2x = a4e.hR9I(this.ec8U, this.n6h).y;
        var bxH8z = Math.floor((ZC2x - 8) / 27);
        if (bxH8z < 0) return;
        a4e.ba6U(this.biR5W, "height", 19 + bxH8z * 29 + "px")
    };
    b5g.TE0x = function () {
        var pu1x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pu1x.length; i++) {
            a4e.ba6U(this.biP5U, pu1x[i], a4e.df7Y(this.ec8U, pu1x[i]))
        }
    };
    b5g.byp8h = function (cK7D, C6w) {
        var dn7g = C6w ? C6w : window.GUser.userId;
        var Y6S = "/api/user/getfollows/" + dn7g;
        var ge8W = v6p.bn6h(Y6S, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cK7D.g6a(this),
            onerror: function (j6d) {
                this.bk6e = []
            },
            onbeforerequest: function (j6d) {
            }
        })
    };
    b5g.byo8g = function (j6d) {
        this.bk6e = JSON.parse(j6d).follow || [];
        var C6w = GUser.userId;
        for (var i = 0; i < this.bk6e.length; i++) {
            if (this.bk6e[i].userId == C6w) {
                this.bk6e.splice(i, 1);
                continue
            }
            this.bk6e[i].avatarUrl = this.bk6e[i].avatarUrl + "?param=30y30"
        }
    };
    b5g.ccm6g = function (j6d) {
        if (this.bk6e[0]) return;
        this.byo8g(j6d);
        this.wP4T()
    };
    b5g.byh8Z = function (bv6p) {
        var bv6p = bv6p ? bv6p : "";
        this.bk6e = this.bk6e[0] ? this.bk6e : [];
        var bq6k = this.bk6e.length;
        var SI0x = this.SY0x();
        var ta2x = [];
        var SF0x, SE0x, biG5L;
        if (!this.bk6e[0]) return ta2x;
        for (var bc6W = 0; bc6W < bq6k; bc6W++) {
            biG5L = false;
            for (var v6p = 0; v6p < SI0x.length; v6p++) {
                if (this.bk6e[bc6W].userId == SI0x[v6p]) {
                    biG5L = true;
                    break
                }
            }
            if (biG5L) continue;
            SF0x = this.bk6e[bc6W].nickname.toLowerCase().search(bv6p);
            SE0x = this.bk6e[bc6W].py ? this.bk6e[bc6W].py.toLowerCase().search(bv6p) : -1;
            if (SF0x !== -1 || SE0x != -1) ta2x.push(this.bk6e[bc6W])
        }
        return ta2x
    };
    b5g.cca6U = function (j6d) {
        a4e.dH7A(this.Zb2x, cdC7v, {users: j6d});
        a4e.y6s(a4e.H6B(this.n6h, "j-item")[0], "j-selected");
        this.fL8D = a4e.H6B(this.n6h, "j-item");
        a4e.ba6U(this.Zb2x, "display", "block")
    };
    b5g.SY0x = function () {
        var ta2x = a4e.H6B(this.n6h, "j-receiver") || [];
        var il9c = [];
        for (var i = 0; i < ta2x.length; i++) {
            il9c.push(a4e.gg8Y(ta2x[i], "data-id"))
        }
        return il9c
    };
    b5g.cHL4P = function () {
        var il9c = this.SY0x();
        var ta2x = [];
        for (var i = 0; i < il9c.length; i++) {
            for (var j = 0; j < this.bk6e.length; j++) {
                if (il9c[i] == this.bk6e[j].userId) ta2x.push(this.bk6e[j])
            }
        }
        return ta2x
    };
    b5g.cbF6z = function () {
        this.YT2x()
    };
    w6q.Hc7V.L6F = function (e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            m6g.oP1x.L6F({title: "登录"});
            return
        }
        e6c = e6c || {};
        if (e6c.parent === undefined) e6c.parent = document.body;
        !!this.fh8Z && this.fh8Z.T6N();
        this.fh8Z = this.A6u(e6c)
    };
    w6q.Hc7V.bu6o = function () {
        !!this.fh8Z && this.fh8Z.T6N()
    };
    w6q.Hc7V.GH7A = function () {
        return this.ox1x()
    };
    w6q.Hc7V.cHM4Q = function () {
        return this.wP4T()
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), k6e = c5h("nej.u"), h6b = c5h("nej.v"), l6f = c5h("nm.x"), m6g = c5h("nm.l"),
        b5g, K6E;
    m6g.JN8F = NEJ.C();
    b5g = m6g.JN8F.O6I(m6g.bqW7P);
    K6E = m6g.JN8F.cs6m;
    b5g.bl6f = function () {
        var GC7v;
        var cbu6o = function (D6x, J6D) {
            GC7v = GC7v || [];
            if (J6D != "18") GC7v.push({key: J6D, value: D6x})
        };
        return function (e6c) {
            this.bm6g(e6c);
            if (e6c.upwards) {
                a4e.y6s(this.n6h, "m-emts-up")
            } else {
                a4e.x6r(this.n6h, "m-emts-up")
            }
            if (e6c.rightwards) {
                a4e.y6s(this.n6h, "m-emts-right")
            } else {
                a4e.x6r(this.n6h, "m-emts-right")
            }
            if (!GC7v) {
                var bz6t = l6f.bWx5C();
                k6e.eE8w(bz6t, cbu6o)
            }
            var bq6k = GC7v.length;
            GC7v.splice(bq6k - 2, 0, {key: "18", value: "186"});
            this.ZS2x = GC7v;
            this.cbs6m = !!e6c.autoHide
        }
    }();
    b5g.cf6Z = function () {
        this.cd6X = "ntp-portrait"
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.H6B(this.n6h, "j-flag");
        this.bK6E = i6c[0];
        this.cbo6i = i6c[1];
        this.cbn6h = i6c[2];
        this.cbd6X = i6c[3];
        h6b.s6m(this.bK6E, "click", this.zl5q.g6a(this));
        h6b.s6m(this.cbo6i, "click", this.Gu7n.g6a(this, 1));
        h6b.s6m(this.cbd6X, "click", this.Gu7n.g6a(this, 2))
    };
    b5g.biA5F = function (r6l) {
        this.bab2x = r6l;
        var bh6b = (r6l - 1) * 50;
        var i6c = this.ZS2x.slice(bh6b, Math.min(bh6b + 50, this.ZS2x.length));
        this.bK6E.innerHTML = a4e.bZ6T("jst-portrait", {plist: i6c}, {purl: l6f.bDo9f});
        this.cbn6h.innerText = r6l + "/" + Math.ceil(this.ZS2x.length / 50)
    };
    b5g.Gu7n = function (r6l) {
        var cax6r = Math.ceil(this.ZS2x.length / 50);
        if (r6l == 1 && this.bab2x == 1 || r6l == 2 && this.bab2x == cax6r) return;
        r6l == 1 ? this.biA5F(this.bab2x - 1) : this.biA5F(this.bab2x + 1)
    };
    b5g.zl5q = function (d6d) {
        var F6z = h6b.W6Q(d6d, "d:text");
        if (!F6z) return;
        var d6d = {url: a4e.t6n(F6z, "url"), text: a4e.t6n(F6z, "text")};
        this.z6t("onselect", d6d);
        if (this.cbs6m && !d6d.stopped) {
            this.bu6o()
        }
    };
    b5g.L6F = function () {
        K6E.L6F.call(this);
        this.biA5F(1)
    }
})();
(function () {
    var c5h = NEJ.P, h6b = c5h("nej.v"), k6e = c5h("nej.u"), du7n = c5h("nej.p"), be6Y = c5h("nej.h"),
        I6C = c5h("nej.ut"), ky9p = /^[#?]+/, ES6M = /#(.*?)$/, zi5n = window,
        biy5D = !history.pushState || du7n.Ii7b.android || !history.auto;
    var baf2x = function (Y6S, bix5C) {
        zi5n.history[!bix5C ? "pushState" : "replaceState"](null, document.title, Y6S)
    };
    var bah2x = function () {
        return location.parse(zi5n.location.href)
    };
    baf2x = baf2x.eF8x(function (d6d) {
        if (!biy5D) return;
        var bf6Z = d6d.args;
        d6d.stopped = !0;
        Y6S = bf6Z[0].replace(ky9p, "");
        !bf6Z[1] ? zi5n.location.hash = Y6S : zi5n.location.replace("#" + Y6S)
    });
    bah2x = bah2x.eF8x(function (d6d) {
        if (!biy5D) return;
        d6d.stopped = !0;
        var dN8F = ES6M.test(zi5n.location.href) ? RegExp.$1 : "";
        d6d.value = location.parse(dN8F.replace(ky9p, ""))
    });
    location.redirect = function (Y6S, bix5C) {
        baf2x(Y6S, bix5C);
        return this
    };
    location.active = function () {
        var eg8Y, Y6S, jz9q, da7T, Qc9T;
        var biw5B = function (hr9i) {
            if (!!da7T) {
                da7T = !1;
                return
            }
            var d6d = {oldValue: jz9q, newValue: bah2x()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h6b.z6t(location, "beforeurlchange", d6d);
                if (d6d.stopped) {
                    if (!!jz9q) {
                        da7T = !0;
                        baf2x(jz9q.href, !0)
                    }
                    return
                }
            }
            Y6S = zi5n.location.href;
            jz9q = d6d.newValue;
            h6b.z6t(location, "urlchange", jz9q);
            be6Y.bsH7A(jz9q.href)
        };
        var bSG4K = function () {
            if (Y6S != zi5n.location.href) biw5B();
            eg8Y = requestAnimationFrame(bSG4K)
        };
        return function (bJ6D) {
            if (!!Qc9T) return this;
            Qc9T = !0;
            zi5n = bJ6D || window;
            if (biy5D && "onhashchange" in window && du7n.mX0x.trident2) {
                h6b.s6m(zi5n, "hashchange", biw5B);
                biw5B()
            } else if (!eg8Y) {
                eg8Y = requestAnimationFrame(bSG4K)
            }
            return this
        }
    }();
    location.parse = function () {
        var gH8z = /^https?:\/\/.*?\//i, ky9p = /[?#]/;
        return function (Y6S) {
            var o6i = {href: Y6S};
            Y6S = (Y6S || "").replace(gH8z, "/").split(ky9p);
            var cE7x = 1;
            if (Y6S[0] == "/" && (Y6S[1] || "").indexOf("/") == 0) cE7x = 2;
            o6i.path = Y6S.splice(0, cE7x).join("?");
            o6i.query = k6e.hu9l(Y6S.join("&"));
            return o6i
        }
    }();
    location.same = function (Y6S) {
        return bah2x().href == Y6S
    };
    I6C.fK8C.A6u({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), gt8l = c5h("nm.ut");
    gt8l.uw3x = function (eo8g) {
        var hc8U = {text: "", start: 0, end: 0};
        if (eo8g.setSelectionRange) {
            hc8U.start = eo8g.selectionStart;
            hc8U.end = eo8g.selectionEnd;
            hc8U.text = hc8U.start != hc8U.end ? eo8g.value.substring(hc8U.start, hc8U.end) : ""
        } else if (document.selection) {
            var i, ban2x = document.selection.createRange(), yN5S = document.body.createTextRange();
            yN5S.moveToElementText(eo8g);
            hc8U.text = ban2x.text;
            hc8U.bookmark = ban2x.getBookmark();
            for (i = 0; yN5S.compareEndPoints("StartToStart", ban2x) < 0 && ban2x.moveStart("character", -1) !== 0; i++) {
                if (eo8g.value.charAt(i) == "\n") {
                    i++
                }
            }
            hc8U.start = i;
            hc8U.end = hc8U.text.length + hc8U.start
        }
        return hc8U
    };
    gt8l.bap2x = function (eo8g, hc8U) {
        var yN5S;
        if (!hc8U) {
            hc8U = {text: "", start: 0, end: 0}
        }
        eo8g.focus();
        if (eo8g.setSelectionRange) {
            eo8g.setSelectionRange(hc8U.start, hc8U.end)
        } else if (eo8g.createTextRange) {
            yN5S = eo8g.createTextRange();
            if (eo8g.value.length === hc8U.start) {
                yN5S.collapse(false);
                yN5S.select()
            } else {
                yN5S.moveToBookmark(hc8U.bookmark);
                yN5S.select()
            }
        }
    };
    gt8l.Ki8a = function (eo8g, hc8U, cH7A) {
        var hc8U = hc8U || {text: "", start: 0, end: 0};
        var biv5A, bSp4t, yN5S, RG0x, bSn4r, bRR4V, Gg7Z;
        this.bap2x(eo8g, hc8U);
        if (eo8g.setSelectionRange) {
            biv5A = eo8g.value;
            bSp4t = biv5A.substring(0, hc8U.start) + cH7A + biv5A.substring(hc8U.end);
            bSn4r = bRR4V = hc8U.start + cH7A.length;
            Gg7Z = eo8g.scrollTop;
            eo8g.value = bSp4t;
            if (eo8g.scrollTop != Gg7Z) {
                eo8g.scrollTop = Gg7Z
            }
            eo8g.setSelectionRange(bSn4r, bRR4V)
        } else if (eo8g.createTextRange) {
            RG0x = document.selection.createRange();
            RG0x.text = cH7A;
            RG0x.setEndPoint("StartToEnd", RG0x);
            RG0x.select()
        }
        h6b.z6t(eo8g, "keyup")
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), du7n = c5h("nej.p"), k6e = c5h("nej.u"),
        ca6U = c5h("nej.ut"), w6q = c5h("nm.w"), gt8l = c5h("nm.ut"), b5g;
    w6q.bRM4Q = NEJ.C();
    b5g = w6q.bRM4Q.O6I(ca6U.cG7z);
    b5g.cx6r = function (e6c) {
        this.cD7w(e6c)
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.gw8o = e6c.txt;
        this.Gf7Y = e6c.sgtsContainer;
        this.bRH4L = e6c.sgtsList[0];
        this.baC2x = e6c.sgtsItem;
        this.oW1x = e6c.rangeData;
        this.Kt8l = e6c.atIndex;
        a4e.y6s(this.baC2x[0], "selected-item");
        this.Rp0x()
    };
    b5g.bD6x = function () {
        this.bH6B();
        h6b.mG0x(document.body, "keyup", this.bRE4I.g6a(this));
        h6b.mG0x(document.body, "click", this.bRD4H.g6a(this))
    };
    b5g.Rp0x = function () {
        this.bW6Q([[document.body, "keyup", this.bRE4I.g6a(this)], [document.body, "click", this.bRD4H.g6a(this)], [this.gw8o, "keydown", this.bRn4r.g6a(this)], [this.gw8o, "keypress", this.bRn4r.g6a(this)], [this.bRH4L, "click", this.bQN4R.g6a(this)], [this.bRH4L, "mouseover", this.Gd7W.g6a(this)]])
    };
    b5g.Gd7W = function (d6d) {
        var bO6I = h6b.W6Q(d6d);
        var p6j = a4e.H6B(this.Gf7Y, "selected-item");
        if (a4e.bE6y(bO6I, "j-sgt")) {
            a4e.x6r(p6j[0], "selected-item");
            a4e.y6s(bO6I, "selected-item")
        }
    };
    b5g.bRE4I = function (d6d) {
        var p6j = a4e.H6B(this.Gf7Y, "selected-item");
        var bq6k = this.baC2x.length;
        var jP9G = d6d.keyCode || d6d.which;
        var r6l, j6d;
        switch (jP9G) {
            case 38:
                r6l = a4e.gg8Y(p6j[0], "data-index") - 1 < 0 ? bq6k - 1 : a4e.gg8Y(p6j[0], "data-index") - 1;
                a4e.x6r(p6j[0], "selected-item");
                a4e.y6s(this.baC2x[r6l], "selected-item");
                break;
            case 40:
                r6l = parseInt(a4e.gg8Y(p6j[0], "data-index")) + 1 >= bq6k ? 0 : parseInt(a4e.gg8Y(p6j[0], "data-index")) + 1;
                a4e.x6r(p6j[0], "selected-item");
                a4e.y6s(this.baC2x[r6l], "selected-item");
                break;
            case 13:
                this.bQN4R(d6d);
                break;
            case 27:
                this.ox1x();
                break;
            case 32:
                var bo6i = this.gw8o.value;
                var r6l = gt8l.uw3x(this.gw8o);
                if (bo6i.charAt(r6l.start - 1) !== " ") return;
                this.ox1x();
                break
        }
    };
    b5g.bRn4r = function (d6d) {
        var jP9G = d6d.keyCode || d6d.which;
        if (jP9G === 13 || jP9G === 38 || jP9G === 40) {
            h6b.cq6k(d6d);
            d6d.keyCode = 0;
            d6d.which = 0;
            d6d.returnvalue = false
        }
    };
    b5g.bRD4H = function (d6d) {
        var bO6I = d6d.target || d6d.srcElement;
        if (bO6I === this.gw8o) return;
        this.ox1x()
    };
    b5g.bQN4R = function (d6d) {
        h6b.bi6c(d6d);
        var p6j = a4e.H6B(this.Gf7Y, "selected-item")[0];
        var sm2x = d6d.target || d6d.srcElement;
        var u6o = d6d.type;
        if (a4e.bE6y(sm2x, "lst")) return;
        if (u6o == "click") {
            a4e.x6r(p6j, "selected-item");
            a4e.y6s(sm2x, "selected-item")
        } else sm2x = p6j;
        var j6d = sm2x.innerHTML + " ";
        this.ox1x();
        var hc8U = this.oW1x;
        hc8U.start = this.Kt8l + 1;
        if (du7n.ds7l.browser == "ie" && du7n.ds7l.version < "9.0") {
            this.gw8o.value = this.gw8o.value.substring(0, hc8U.start) + this.gw8o.value.substring(hc8U.end, this.gw8o.value.length);
            hc8U.end = hc8U.start
        }
        gt8l.Ki8a(this.gw8o, hc8U, j6d);
        h6b.z6t(this.gw8o, "keyup")
    };
    b5g.ox1x = function (d6d) {
        if (!!this.Gf7Y) a4e.ba6U(this.Gf7Y, "display", "none");
        this.T6N()
    };
    b5g.wP4T = function (d6d) {
        if (!!this.Gf7Y) a4e.ba6U(this.Gf7Y, "display", "block")
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), v6p = c5h("nej.j"), w6q = c5h("nm.w"),
        ca6U = c5h("nej.ut"), bC6w = c5h("nej.ui"), b5g;
    var bYM6G = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bYL6F = a4e.ex8p("m-wgt-atlist");
    var iM9D = a4e.sC2x(bYM6G);
    w6q.bQa3x = NEJ.C();
    b5g = w6q.bQa3x.O6I(bC6w.eh8Z);
    b5g.cx6r = function (e6c) {
        this.fR8J = {};
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.fR8J.txt = a4e.B6v(e6c.target);
        this.fR8J.data = e6c.data;
        this.fR8J.offset = e6c.offset;
        this.fR8J.rangeData = e6c.rangeData;
        this.fR8J.atIndex = e6c.atIndex;
        this.bYE5J(e6c);
        this.bm6g(e6c);
        this.fR8J.sgtsContainer = this.n6h;
        this.fR8J.sgtsList = a4e.H6B(this.n6h, "lst");
        this.fR8J.sgtsItem = a4e.H6B(this.n6h, "f-thide");
        this.Pc9T(e6c);
        this.bYr5w = w6q.bRM4Q.A6u(this.fR8J)
    };
    b5g.bD6x = function (e6c) {
        this.bH6B();
        this.bYr5w.T6N()
    };
    b5g.cf6Z = function () {
        this.mf0x = iM9D
    };
    b5g.bX6R = function () {
        this.cg6a()
    };
    b5g.bYE5J = function (e6c) {
        this.n6h = a4e.dy7r(a4e.iw9n(a4e.bZ6T(bYL6F, e6c.data)))
    };
    b5g.Pc9T = function (e6c) {
        var bPS2x = a4e.H6B(this.n6h, "selected-item")[0];
        if (bPS2x) a4e.x6r(bPS2x, "selected-item");
        var cX7Q = e6c.offset.x + "px";
        var hB9s = e6c.offset.y + "px";
        a4e.ba6U(this.n6h, "left", cX7Q);
        a4e.ba6U(this.n6h, "top", hB9s)
    }
})();
(function () {
    var c5h = NEJ.P, v6p = c5h("nej.j"), gt8l = c5h("nm.ut");
    gt8l.bPG2x = function (bo6i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dh7a = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var KG8y = bo6i.match(dh7a) || [];
        for (var bc6W = 0; bc6W < KG8y.length; bc6W++) {
            KG8y[bc6W] = KG8y[bc6W].split("@")[1]
        }
        KG8y = KG8y.reverse();
        var il9c = GUser.userId;
        var bYf5k = v6p.tA2x("mentioners" + il9c) || [];
        var jK9B = KG8y.concat(bYf5k);
        if (jK9B.length > 10) jK9B = jK9B.slice(0, 10);
        v6p.uV3x("mentioners" + il9c, jK9B)
    };
    gt8l.bXZ5e = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var il9c = GUser.userId;
        return v6p.tA2x("mentioners" + il9c) || []
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), du7n = c5h("nej.p"), v6p = c5h("nej.j"),
        k6e = c5h("nej.u"), ca6U = c5h("nej.ut"), w6q = c5h("nm.w"), gt8l = c5h("nm.ut"), l6f = c5h("nm.x"), b5g;
    var FullscreenApi = l6f.Gb7U || {};
    w6q.bPe2x = NEJ.C();
    b5g = w6q.bPe2x.O6I(ca6U.cG7z);
    b5g.cx6r = function (e6c) {
        this.cD7w(e6c);
        this.bOI2x()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.gw8o = e6c.txt;
        this.n6h = e6c.body;
        this.bOD2x = e6c.before;
        this.RC0x = e6c.flag;
        this.bXj5o = e6c.after;
        this.qK1x = [];
        if (du7n.ds7l.browser != "ie") {
            setTimeout(function () {
                this.lV0x()
            }.g6a(this), 0)
        }
        this.Rp0x()
    };
    b5g.bD6x = function () {
        this.bH6B();
        if (this.vN3x) this.vN3x.T6N();
        delete this.vN3x
    };
    b5g.Rp0x = function () {
        this.bW6Q([[this.gw8o, "keyup", this.bOy2x.g6a(this, this.gw8o)], [this.gw8o, "click", this.bOy2x.g6a(this, this.gw8o)], [this.gw8o, "focus", this.lV0x.g6a(this)]])
    };
    b5g.lV0x = function (d6d) {
        this.oW1x = gt8l.uw3x(this.gw8o)
    };
    b5g.bOI2x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var dn7g = window.GUser.userId;
        var Y6S = "/api/user/getfollows/" + dn7g;
        var ge8W = v6p.bn6h(Y6S, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j6d) {
                window.GFollowers = JSON.parse(j6d).follow
            }.g6a(this),
            onerror: function (j6d) {
            },
            onbeforerequest: function (j6d) {
            }
        })
    };
    b5g.bOk2x = function (index) {
        var D6x = this.gw8o.value, bh6b, bil4p, bij4n, PU9L;
        this.bOD2x.innerHTML = k6e.dG7z(D6x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var my0x = a4e.H6B(this.bOD2x, "j-test");
        for (var bc6W = 0; bc6W < my0x.length; bc6W++) {
            my0x[bc6W].innerText = " "
        }
        this.RC0x.innerHTML = D6x.charAt(index);
        this.bXj5o.innerHTML = k6e.dG7z(D6x.substr(index + 1, D6x.length));
        PU9L = parseInt(a4e.df7Y(this.gw8o, "lineHeight"));
        a4e.ba6U(this.n6h, "display", "block");
        bil4p = a4e.hR9I(this.RC0x, this.n6h);
        bij4n = a4e.hR9I(this.gw8o);
        a4e.ba6U(this.n6h, "display", "none");
        var cX7Q = bil4p.x + bij4n.x;
        var hB9s = bil4p.y + bij4n.y + PU9L;
        bh6b = {x: cX7Q, y: hB9s};
        this.bWD5I(bh6b)
    };
    b5g.bOy2x = function (eo8g, d6d) {
        h6b.cq6k(d6d);
        var eo8g = eo8g;
        var D6x = eo8g.value;
        var bq6k = D6x.length;
        var r6l = gt8l.uw3x(eo8g).start;
        var bNH2x = 0;
        var jP9G = d6d.keyCode || d6d.which;
        var jK9B;
        this.oW1x = gt8l.uw3x(eo8g);
        var bNo2x = false;
        for (var i = 1; i < 20; i++) {
            jK9B = r6l - i;
            if (D6x.charAt(jK9B) === " ") break;
            if (D6x.charAt(jK9B) === "@") {
                bNo2x = true;
                this.Kt8l = bNH2x = jK9B;
                break
            }
        }
        if (bNo2x && d6d.shiftKey === false && jP9G !== 38 && jP9G !== 40) {
            if (jP9G !== 27 && jP9G !== 13) {
                this.vN3x ? this.vN3x.T6N() : null;
                this.bOk2x(bNH2x)
            }
        } else if (jP9G !== 38 && jP9G !== 40 && d6d.keyCode !== 32) {
            this.vN3x ? this.vN3x.T6N() : null
        }
    };
    b5g.bWD5I = function (bh6b) {
        var bh6b = bh6b;
        var j6d = this.vj3x();
        var e6c = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bh6b,
            data: j6d,
            target: this.gw8o,
            rangeData: this.oW1x,
            atIndex: this.Kt8l
        };
        this.vN3x ? this.vN3x.T6N() : null;
        this.vN3x = w6q.bQa3x.A6u(e6c)
    };
    b5g.vj3x = function () {
        var bWg5l = gt8l.uw3x(this.gw8o).start;
        var bWd5i = this.Kt8l + 1;
        var bNg2x = gt8l.bXZ5e() || [];
        var bMX2x = [];
        var bv6p = this.gw8o.value.substring(bWd5i, bWg5l).toLowerCase();
        bv6p = bv6p.replace(/\[/g, "\\[");
        bv6p = bv6p.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qK1x = window.GFollowers[0] ? window.GFollowers : []
        } else this.qK1x = [];
        if (!this.qK1x[0]) this.bOI2x();
        for (var bc6W = 0; bc6W < bNg2x.length; bc6W++) {
            for (var v6p = 0; v6p < this.qK1x.length; v6p++) {
                if (this.qK1x[v6p].nickname == bNg2x[bc6W]) bMX2x.push(this.qK1x[v6p])
            }
        }
        this.qK1x = k6e.cyB2x(this.qK1x, bMX2x, {union: true, begin: true});
        var bUV5a = this.qK1x.length;
        var bby3x = [];
        var SF0x, SE0x;
        if (!this.qK1x[0]) return {suggests: bby3x};
        for (var i = 0; i < bUV5a; i++) {
            SF0x = this.qK1x[i].nickname.toLowerCase().search(bv6p);
            SE0x = this.qK1x[i].py ? this.qK1x[i].py.toLowerCase().search(bv6p) : -1;
            if (SF0x !== -1 || SE0x != -1) bby3x.push(this.qK1x[i]);
            if (bby3x.length === 10) break
        }
        return {suggests: bby3x}
    };
    b5g.PL9C = function () {
        var hc8U = this.oW1x || {text: "", start: 0, end: 0};
        h6b.z6t(this.gw8o, "focus");
        gt8l.Ki8a(this.gw8o, hc8U, "@");
        this.oW1x = gt8l.uw3x(this.gw8o);
        this.Kt8l = hc8U.start;
        this.bOk2x(this.Kt8l)
    };
    b5g.GH7A = function () {
        if (this.vN3x) this.vN3x.T6N()
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h6b = c5h("nej.v"), k6e = c5h("nej.u"), v6p = c5h("nej.j"), w6q = c5h("nm.w"),
        ca6U = c5h("nej.ut"), bC6w = c5h("nej.ui"), b5g;
    var cCK3x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cCI3x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gk8c = a4e.iw9n(cCI3x);
    var iM9D = a4e.sC2x(cCK3x);
    w6q.PD9u = NEJ.C();
    b5g = w6q.PD9u.O6I(bC6w.eh8Z);
    b5g.cx6r = function (e6c) {
        this.fR8J = {};
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c);
        this.fR8J.txt = a4e.B6v(e6c.target);
        this.TE0x();
        this.PC9t = w6q.bPe2x.A6u(this.fR8J)
    };
    b5g.bD6x = function (e6c) {
        this.bH6B();
        this.PC9t.T6N()
    };
    b5g.cf6Z = function () {
        this.cd6X = gk8c;
        this.mf0x = iM9D
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.dl7e(a4e.B6v(this.n6h));
        this.fR8J.body = this.n6h;
        this.fR8J.before = i6c[0];
        this.fR8J.flag = i6c[1];
        this.fR8J.after = i6c[2]
    };
    b5g.TE0x = function () {
        var pu1x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pu1x.length; i++) {
            if (pu1x[i] === "width" && a4e.df7Y(this.fR8J.txt, pu1x[i]) == "100%") {
                var cCH2x = this.fR8J.txt.offsetWidth;
                if (!cCH2x) {
                    setTimeout(function () {
                        a4e.ba6U(this.n6h, pu1x[i], this.fR8J.txt.offsetWidth + "px")
                    }.g6a(this), 300)
                } else {
                    a4e.ba6U(this.n6h, pu1x[i], this.fR8J.txt.offsetWidth + "px")
                }
                continue
            }
            a4e.ba6U(this.n6h, pu1x[i], a4e.df7Y(this.fR8J.txt, pu1x[i]))
        }
    };
    b5g.PL9C = function () {
        this.PC9t.PL9C()
    };
    b5g.GH7A = function () {
        this.PC9t.GH7A()
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, fA8s = NEJ.R, a4e = c5h("nej.e"), h6b = c5h("nej.v"),
        k6e = c5h("nej.u"), I6C = c5h("nej.ut"), kS0x = c5h("nm.c"), R6L = {}, b5g;
    if (!!kS0x.bic4g) return;
    kS0x.bic4g = NEJ.C();
    b5g = kS0x.bic4g.O6I(I6C.cG7z);
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c)
    };
    b5g.bD6x = function () {
        this.bH6B()
    };
    b5g.FH6B = function (fk8c, cK7D, bbH3x) {
        if (R6L[fk8c]) {
            this.hh9Y("register commonJST[" + fk8c + "] duplicate");
            return
        }
        if (!k6e.gI8A(cK7D)) {
            cK7D = ctl.comJST.cCC2x(fk8c, cK7D, bbH3x)
        }
        R6L[fk8c] = cK7D
    };
    b5g.cCw2x = function (bbL3x) {
        if (k6e.eJ8B(bbL3x)) {
            k6e.bd6X(bbL3x, function (p6j) {
                ctl.comJST.FH6B.apply(this, p6j)
            }, this)
        } else if (k6e.lO0x(bbL3x)) {
            k6e.eE8w(bbL3x, function (eQ8I, J6D) {
                ctl.comJST.FH6B(J6D, eQ8I)
            })
        }
    };
    b5g.cCC2x = function (fk8c, vO3x, bbH3x) {
        vO3x = vO3x || {};
        NEJ.X(vO3x, {comJST: this.nc0x});
        if (vO3x.resetDataName && !k6e.eJ8B(vO3x.resetDataName)) {
            vO3x.resetDataName = [vO3x.resetDataName]
        }
        return function () {
            var j6d = arguments[0], jT9K = arguments[1];
            if (vO3x.resetDataName) {
                var jK9B = {};
                for (var i = 0, ii = vO3x.resetDataName.length; i < ii; i++) {
                    jK9B[vO3x.resetDataName[i]] = arguments[i]
                }
                j6d = jK9B;
                jT9K = arguments[ii]
            }
            NEJ.X(j6d, vO3x, dX8P);
            if (bbH3x) {
                jT9K = jT9K || {};
                NEJ.X(jT9K, bbH3x)
            }
            return a4e.bZ6T(fk8c, j6d, jT9K)
        }
    };
    b5g.nc0x = function (fk8c) {
        if (!R6L[fk8c]) {
            this.hh9Y("commonJST[" + fk8c + "] is unregister");
            return ""
        } else {
            return R6L[fk8c].apply(null, fA8s.slice.call(arguments, 1))
        }
    };
    b5g.dump = function () {
        return R6L
    };
    b5g.hh9Y = function (cCg2x) {
        if (console && console.log) {
            console.log(cCg2x)
        }
    };
    var dX8P = function (eQ8I, J6D) {
        return J6D == "resetDataName"
    };
    c5h("ctl").comJST = kS0x.bic4g.go8g();
    a4e.cuF1x({comJST: c5h("ctl").comJST.nc0x})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, bs6m = NEJ.F, fA8s = NEJ.R, a4e = c5h("nej.e"), h6b = c5h("nej.v"),
        k6e = c5h("nej.u"), I6C = c5h("nej.ut"), kS0x = c5h("nm.c"), l6f = c5h("nm.x"), R6L = {}, b5g;
    if (!!kS0x.bib4f) return;
    kS0x.bib4f = NEJ.C();
    b5g = kS0x.bib4f.O6I(I6C.cG7z);
    b5g.cx6r = function () {
        this.cD7w();
        var e6c = {
            "com-mv-artists": function (fQ8I, ea8S, Pa9R, bia4e) {
                return a4e.bZ6T("com-mv-artists", {
                    artists: fQ8I,
                    clazz: ea8S,
                    boxClazz: bia4e,
                    mark: Pa9R || function (cI7B) {
                        return cI7B
                    },
                    escape: k6e.dG7z,
                    comJST: ctl.comJST.nc0x
                })
            },
            "com-album-artists": function (fQ8I, ea8S, Pa9R, bia4e) {
                return a4e.bZ6T("com-album-artists", {
                    artists: fQ8I,
                    clazz: ea8S,
                    boxClazz: bia4e,
                    mark: Pa9R || function (cI7B) {
                        return cI7B
                    },
                    escape: k6e.dG7z,
                    comJST: ctl.comJST.nc0x
                })
            },
            "com-artists-title": {resetDataName: ["artists"], escape: k6e.dG7z},
            "com-user-type": function (dp7i, ea8S, ly0x, xg4k, bLe1x) {
                return a4e.bZ6T("com-user-type", {
                    x: dp7i,
                    clazz: ea8S || "",
                    clazz2: typeof bLe1x == "undefined" ? "icn" : bLe1x,
                    before: ly0x || "",
                    after: xg4k || "",
                    isEmptyObject: l6f.bCh9Y
                })
            }
        };
        for (var C6w in e6c) {
            ctl.comJST.FH6B(C6w, e6c[C6w])
        }
    };
    b5g.bl6f = function (e6c) {
        this.bm6g(e6c)
    };
    b5g.bD6x = function () {
        this.bH6B()
    };
    c5h("ctl").comJSTUtil = kS0x.bib4f.go8g()
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, a4e = c5h("nej.e"), du7n = c5h("nej.p"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        I6C = c5h("nej.ut"), v6p = c5h("nej.j"), w6q = c5h("nm.w"), gt8l = c5h("nm.ut"), q6k = c5h("nm.d"),
        l6f = c5h("nm.x"), m6g = c5h("nm.l"), bhZ4d = [2, 3], dZ8R = ["sn", "db"], b5g, K6E, cAQ2x = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        }, bbW3x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        }, bKp1x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        }, cyO2x = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, FD6x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        }, FullscreenApi = l6f.Gb7U || {};
    m6g.pv1x = NEJ.C();
    b5g = m6g.pv1x.O6I(m6g.ek8c);
    K6E = m6g.pv1x.cs6m;
    b5g.bl6f = function (e6c) {
        if (e6c.onclose === undefined) {
            e6c.onclose = this.bKd1x.g6a(this)
        }
        this.bm6g(e6c);
        this.Cv6p = e6c.isPub;
        this.jv9m = e6c.rid || -1;
        this.et8l = e6c.type || -1;
        this.bhS4W = e6c.purl;
        this.OG9x = e6c.name || "";
        this.OE9v = e6c.author || "";
        this.bhQ4U = e6c.authors || "";
        this.bcj3x = e6c.actId;
        this.bck3x = e6c.actName;
        this.bJv1x = e6c.title;
        this.bcn3x = {};
        this.cvc1x = e6c.mesg || "";
        this.cvb1x = e6c.placeholder || "说点什么吧";
        this.bhM4Q = e6c.hideTip;
        this.cuD1x = e6c.videoJumpUrl;
        var i6c, eU8M = +(new Date);
        try {
            i6c = top.localCache.B6v("user") || {}
        } catch (e) {
            i6c = {}
        }
        for (var i = 0, i6c = i6c.bindings || [], eM8E; i < i6c.length; ++i) {
            eM8E = !i6c[i].tokenJsonStr ? null : JSON.parse(i6c[i].tokenJsonStr);
            if (!eM8E || eM8E.expires_in === undefined) continue;
            var bcu3x = parseInt(eM8E.expires_in), bcv3x = parseInt(i6c[i].refreshTime),
                cum1x = (bcu3x + bcv3x) * 1e3 - 5 * 60 * 1e3;
            if (cum1x > eU8M) this.bcn3x[i6c[i].type] = !0
        }
        this.wy4C = w6q.Hc7V.A6u({parent: this.bcz3x, err: this.bIa1x});
        if (this.hA9r) {
            this.hA9r.T6N()
        }
        this.hA9r = w6q.PD9u.A6u({parent: document.body, target: this.ev8n});
        if (this.et8l == 24 || this.et8l == 21 || this.et8l == 41 || this.Fu6o()) {
            this.yh4l.style.display = "none"
        } else {
            this.yh4l.style.display = "";
            this.oL1x = w6q.bkh5m.A6u({
                parent: this.bhL4P,
                button: this.yh4l,
                onstartupload: this.bHn0x.g6a(this, true),
                onfinishupload: this.bHn0x.g6a(this, false)
            })
        }
        if (this.Fu6o()) {
            this.po1x.innerText = "";
            a4e.y6s(this.po1x, "info-video");
            a4e.y6s(this.bhH4L, "f-hide")
        } else {
            a4e.x6r(this.bhH4L, "f-hide")
        }
    };
    b5g.bD6x = function () {
        this.bH6B();
        if (this.wy4C) {
            this.wy4C.T6N();
            delete this.wy4C
        }
        if (this.hA9r) {
            this.hA9r.T6N();
            delete this.hA9r
        }
        if (this.oL1x) {
            this.oL1x.T6N();
            delete this.oL1x
        }
        if (this.mS0x) {
            this.mS0x.T6N();
            delete this.mS0x
        }
    };
    b5g.cf6Z = function () {
        this.cd6X = "m-wgt-sharewin"
    };
    b5g.bX6R = function () {
        this.cg6a();
        this.bHd0x = a4e.dl7e(this.n6h)[0];
        var bt6n = a4e.H6B(this.n6h, "j-flag");
        this.qs1x = bt6n.shift();
        this.bIa1x = bt6n.shift();
        this.bcz3x = bt6n.shift();
        this.ev8n = bt6n.shift();
        this.po1x = bt6n.shift();
        this.bhG4K = bt6n.shift();
        this.csW0x = bt6n.shift();
        this.yh4l = bt6n.shift();
        this.cu6o = bt6n.shift();
        this.bhL4P = bt6n.shift();
        this.Cp5u = bt6n.shift();
        this.cHX4b = bt6n.shift();
        this.bhH4L = bt6n.shift();
        this.en8f = bt6n.shift();
        this.bcW3x = a4e.H6B(this.bhH4L, "j-t");
        this.Dc6W = I6C.Hh7a.A6u({list: a4e.dl7e(this.qs1x), selected: "z-slt", onchange: this.bhE4I.g6a(this)});
        if (du7n.ds7l.browser == "ie" && du7n.ds7l.version < "8.0") {
            a4e.ba6U(this.bcz3x, "position", "relative");
            a4e.ba6U(this.bcz3x, "zIndex", "10")
        }
        h6b.s6m(window, "snsbind", this.Nu9l.g6a(this));
        h6b.s6m(this.ev8n, "input", this.fM8E.g6a(this));
        h6b.s6m(this.ev8n, "keyup", this.vu3x.g6a(this));
        h6b.s6m(this.n6h, "click", this.cN7G.g6a(this));
        this.S6M = q6k.bkR5W.A6u();
        this.S6M.s6m("onshareall", this.bcZ3x.g6a(this, 0));
        this.S6M.s6m("onshareerror", this.iO9F.g6a(this));
        this.S6M.s6m("onshareprivate", this.bcZ3x.g6a(this, 1));
        this.bda3x = q6k.zY5d.A6u();
        this.hh9Y = q6k.hQ9H.A6u();
        try {
            this.Nt9k = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Nt9k) {
            this.Nt9k = FD6x;
            v6p.bn6h("/api/event/user/permission", {
                type: "json", onload: function (d6d) {
                    if (d6d.code == 200) {
                        this.Nt9k = NEJ.EX(FD6x, d6d)
                    }
                }.g6a(this)
            })
        }
    };
    b5g.bhE4I = function (d6d) {
        d6d.index == 0 ? a4e.x6r(this.bHd0x, "m-plshare") : a4e.y6s(this.bHd0x, "m-plshare");
        this.bcz3x.style.display = d6d.index == 0 ? "none" : "";
        this.csW0x.style.display = d6d.index == 0 ? "" : "none";
        this.yh4l.style.display = d6d.index == 0 ? "" : "none";
        if (this.et8l == 24 || this.et8l == 21) {
            this.yh4l.style.display = "none"
        }
        this.bIa1x.style.display = "none";
        this.ev8n.value = "";
        this.ce6Y();
        this.Fk6e();
        if (d6d.index == 0) {
            var cz7s = a4e.df7Y(this.ev8n, "width");
            if (cz7s == "auto" || !cz7s) {
                return
            } else {
                if (this.hA9r) {
                    this.hA9r.T6N()
                }
                this.hA9r = w6q.PD9u.A6u({parent: document.body, target: this.ev8n})
            }
            this.bhL4P.style.display = ""
        } else {
            if (this.hA9r) {
                this.hA9r.T6N();
                delete this.hA9r
            }
            this.bhL4P.style.display = "none"
        }
    };
    b5g.cN7G = function (d6d) {
        var f6b = h6b.W6Q(d6d, "d:action");
        if (!f6b) return;
        if (a4e.t6n(f6b, "action") == "search") {
            h6b.cq6k(d6d)
        } else if (a4e.t6n(f6b, "default") === undefined) {
            h6b.cq6k(d6d)
        }
        switch (a4e.t6n(f6b, "action")) {
            case"txt":
                this.lV0x();
                break;
            case"search":
                if (this.Fu6o()) {
                    top.location.href = this.cuD1x
                } else if (this.Cv6p && this.et8l != 24) {
                    if (this.mS0x) {
                        this.mS0x.T6N()
                    }
                    this.mS0x = w6q.bjg5l.A6u({
                        parent: this.n6h.parentNode,
                        onfinish: this.bhD4H.g6a(this),
                        oncancel: this.crk0x.g6a(this)
                    });
                    this.bhB4F = true;
                    this.n6h.style.display = "none";
                    this.Fi6c(this.jv9m < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case"at":
                h6b.tx2x(d6d);
                !!this.hs9j && this.hs9j.bu6o();
                this.hA9r.PL9C();
                this.gj8b();
                break;
            case"emot":
                h6b.tx2x(d6d);
                !!this.hA9r && this.hA9r.GH7A();
                if (!this.hs9j) {
                    this.hs9j = m6g.JN8F.A6u({parent: this.bhG4K});
                    this.hs9j.s6m("onselect", this.zl5q.g6a(this))
                }
                this.hs9j.L6F();
                break;
            case"upload":
                break;
            case"sns":
                h6b.bi6c(d6d);
                var bhA4E, bv6p, u6o = a4e.t6n(f6b, "type");
                if (!this.bcn3x[u6o]) {
                    bhA4E = f6b.href.split("?");
                    bv6p = k6e.hu9l(bhA4E[1]);
                    bv6p["csrf_token"] = v6p.gB8t("__csrf");
                    top.open(bhA4E[0] + "?" + k6e.cF7y(bv6p));
                    return
                }
                var bz6t = {2: "sn", 3: "db", 4: "rr"};
                l6f.AN5S(f6b, "u-slg-" + bz6t[u6o] + "-gray");
                break;
            case"close":
                !!this.hs9j && this.hs9j.bu6o();
                this.bKd1x();
                break;
            case"share":
                h6b.bi6c(d6d);
                if (this.Fu6o()) {
                    if (!a4e.bE6y(f6b, "u-btn2-2-dis")) {
                        this.cqO0x()
                    }
                } else if (a4e.bE6y(f6b, "u-btn2-2-dis")) {
                    if (!this.Nt9k.pubEventWithoutResource && this.jv9m < 0) {
                        this.cqN0x()
                    } else {
                    }
                } else if (this.jv9m < 0 && !this.ev8n.value && this.oL1x && this.oL1x.Tf0x().length == 0) {
                    m6g.Z6T.L6F({type: 2, tip: "请输入内容"})
                } else {
                    this.cqD0x()
                }
                break
        }
    };
    b5g.cqN0x = function () {
        var sW2x = 0, bhy4C = function () {
            if (sW2x % 2) {
                a4e.x6r(this.po1x, "z-show")
            } else {
                a4e.y6s(this.po1x, "z-show")
            }
            sW2x++;
            if (sW2x > 5) {
                clearInterval(eg8Y)
            }
        }, eg8Y;
        return function () {
            sW2x = 0;
            clearInterval(eg8Y);
            eg8Y = setInterval(bhy4C.g6a(this), 200)
        }
    }();
    b5g.Nu9l = function (o6i) {
        o6i = o6i.result;
        this.bcn3x[o6i.type] = !0;
        var r6l = k6e.dj7c(bhZ4d, o6i.type), ch6b = "u-slg-" + dZ8R[r6l] + "-gray";
        a4e.x6r(this.bcW3x[r6l], ch6b)
    };
    b5g.bhD4H = function (by6s) {
        var j6d = by6s.data;
        this.jv9m = by6s.id;
        this.et8l = by6s.type;
        this.n6h.style.display = "";
        this.Fi6c(this.bJv1x);
        this.mS0x && this.mS0x.T6N();
        this.bhB4F = false;
        this.bhS4W = j6d.picUrl;
        this.OG9x = j6d.title || "";
        this.OE9v = j6d.author || "";
        this.bhQ4U = j6d.authors || "";
        this.cpY0x();
        this.bdp3x()
    };
    b5g.crk0x = function () {
        this.mS0x && this.mS0x.T6N();
        this.n6h.style.display = "";
        this.Fi6c(this.bJv1x);
        this.bhB4F = false;
        this.bdp3x()
    };
    b5g.zl5q = function (d6d) {
        var bo6i = "[" + d6d.text + "]";
        gt8l.Ki8a(this.ev8n, this.oW1x, bo6i);
        this.gj8b()
    };
    b5g.fM8E = function (d6d) {
        du7n.ds7l.browser == "ie" && du7n.ds7l.version < "7.0" ? setTimeout(this.gj8b.g6a(this), 0) : this.gj8b()
    };
    b5g.vu3x = function (d6d) {
        this.lV0x();
        if (d6d.keyCode == 8) this.gj8b()
    };
    b5g.gj8b = function () {
        this.lV0x();
        this.Fk6e()
    };
    b5g.Fk6e = function () {
        var bq6k = Math.ceil(k6e.fz8r(this.ev8n.value.trim()) / 2);
        this.cu6o.innerText = 140 - bq6k;
        bq6k > 140 ? a4e.fl8d(this.cu6o, "s-fc4", "s-fc6") : a4e.fl8d(this.cu6o, "s-fc6", "s-fc4")
    };
    b5g.cqD0x = function () {
        if (this.cO7H()) return;
        if (k6e.fz8r(this.ev8n.value.trim()) > 280) {
            this.ce6Y("字数超过140个字符");
            return
        }
        var u6o = this.Dc6W.tK2x(), j6d;
        if (u6o == 0) {
            for (var i = 0, Mq8i = []; i < this.bcW3x.length; ++i) {
                if (!a4e.bE6y(this.bcW3x[i], "u-slg-" + dZ8R[i] + "-gray")) Mq8i.push(bhZ4d[i])
            }
            this.cO7H(!0);
            j6d = {
                id: this.jv9m,
                msg: this.ev8n.value.trim(),
                type: this.bdr3x(this.et8l),
                picUrl: this.bhS4W,
                snsTypes: Mq8i.join(","),
                isPub: this.Cv6p
            };
            if (this.bcj3x > 0) {
                j6d.actId = this.bcj3x;
                if (this.bck3x) {
                    j6d.msg = "#" + this.bck3x + "#" + j6d.msg
                }
            }
            var og0x = this.oL1x && this.oL1x.Tf0x();
            if (og0x && og0x.length) {
                j6d.pics = og0x
            }
            this.S6M.bUX5c(j6d)
        } else {
            var ta2x = this.wy4C.SY0x();
            if (ta2x.length <= 0) {
                this.ce6Y("请至少选择一位好友");
                return
            }
            this.S6M.bUU5Z({
                data: {
                    id: this.jv9m,
                    msg: this.ev8n.value.trim(),
                    type: this.bdr3x(this.et8l == 41 ? 39 : this.et8l),
                    userIds: "[" + ta2x.join(",") + "]"
                }
            })
        }
    };
    b5g.cqO0x = function () {
        if (this.cO7H()) {
            return
        }
        this.hh9Y.fu8m("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k6e.fz8r(this.ev8n.value.trim()) > 280) {
            this.ce6Y("字数超过140个字符");
            return
        }
        this.cO7H(!0);
        var j6d = {msg: this.ev8n.value.trim() || "", type: "video"}, cpw0x = {videoId: this.jv9m};
        if (this.bcj3x > 0) {
            j6d.actId = this.bcj3x;
            if (this.bck3x) {
                j6d.msg = "#" + this.bck3x + "#" + j6d.msg
            }
        }
        j6d.videoinfo = JSON.stringify(cpw0x);
        this.S6M.cDp3x({data: {videoId: this.jv9m, commit: true}, data2: j6d, snsTypes: ""})
    };
    b5g.bcZ3x = function (u6o, o6i) {
        this.cO7H(!1);
        this.bu6o();
        if (!this.bhM4Q) {
            if (this.Fu6o()) {
                m6g.Z6T.L6F({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                m6g.Z6T.L6F({
                    tip: "分享成功" + (o6i.point > 0 ? ' 获得<em class="s-fc6">' + o6i.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h6b.z6t(m6g.pv1x, "sharesuccess", {isPrivate: u6o, rid: this.jv9m, rtype: this.et8l, data: o6i.event});
        this.z6t("onshare")
    };
    b5g.iO9F = function (o6i) {
        this.cO7H(!1);
        var bG6A = "分享失败";
        if (o6i.code) {
            switch (o6i.code) {
                case 404:
                    bG6A = "分享的资源不存在";
                    break;
                case 407:
                    bG6A = "输入内容包含有关键字";
                    break;
                case 408:
                    bG6A = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bG6A = o6i.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l6f.fs8k({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.ce6Y(bG6A)
    };
    b5g.lV0x = function () {
        this.oW1x = gt8l.uw3x(this.ev8n)
    };
    b5g.ce6Y = function (bG6A) {
        this.dO8G(this.en8f, bG6A)
    };
    b5g.cO7H = function (da7T) {
        return this.dV8N(this.Cp5u, da7T, "分享", "分享中...")
    };
    b5g.bdr3x = function (hW9N) {
        return cAQ2x[hW9N] || ""
    };
    b5g.cpj9a = function () {
        var eo8g, vF3x = this.bdr3x(this.et8l);
        this.po1x.style.display = "";
        if (this.jv9m < 0) {
            this.po1x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.OG9x) {
                this.po1x.style.display = "none";
                return
            }
            var bdw3x = this.Cv6p && this.et8l != 24;
            eo8g = (bbW3x[vF3x] ? bbW3x[vF3x] + "：" : "") + this.OG9x + (bKp1x[vF3x] || " ") + (vF3x == "mv" || vF3x == "album" ? this.bhQ4U || this.OE9v : this.OE9v);
            a4e.dH7A(this.po1x, "m-xwgt-share-infobar", {canChange: bdw3x, info: eo8g});
            if (bdw3x) {
                a4e.x6r(this.po1x, "z-dis")
            } else {
                a4e.y6s(this.po1x, "z-dis")
            }
        }
        a4e.x6r(this.po1x, "info-video")
    };
    b5g.cpY0x = function () {
        var vF3x = this.bdr3x(this.et8l),
            eo8g = (bbW3x[vF3x] ? bbW3x[vF3x] + "：" : "") + this.OG9x + (bKp1x[vF3x] || " ") + (vF3x == "mv" || vF3x == "album" ? this.bhQ4U || this.OE9v : this.OE9v);
        bdw3x = this.Cv6p && this.et8l != 24;
        if (this.Fu6o()) {
        } else {
            a4e.x6r(this.po1x, "info-video");
            a4e.dH7A(this.po1x, "m-xwgt-share-infobar", {canChange: bdw3x, isPub: this.Cv6p, info: eo8g})
        }
    };
    b5g.cph9Y = function () {
        var Mw8o = this.ev8n.value;
        if (this.Cv6p) {
            if (!!this.bhB4F) {
                return !!Mw8o && !!Mw8o.length || !!this.oL1x && this.oL1x.Tf0x().length > 0
            } else {
                return !(this.jv9m < 0) || !!Mw8o && !!Mw8o.length || !!this.oL1x && this.oL1x.Tf0x().length > 0
            }
        } else {
            return !!Mw8o && !!Mw8o.length || !!this.oL1x && this.oL1x.Tf0x().length > 0
        }
    };
    b5g.bdp3x = function () {
        var bFk0x = false;
        if (!this.Cv6p || this.Nt9k.pubEventWithoutResource || !(this.jv9m < 0)) {
            bFk0x = true
        }
        if (bFk0x) {
            a4e.x6r(this.Cp5u, "u-btn2-2-dis")
        } else {
            a4e.y6s(this.Cp5u, "u-btn2-2-dis")
        }
    };
    b5g.bHn0x = function (bhw4A) {
        if (bhw4A) {
            a4e.y6s(this.Cp5u, "u-btn2-2-dis")
        } else {
            this.bdp3x()
        }
    };
    b5g.bKd1x = function (d6d) {
        if (d6d) {
            d6d.stopped = true
        }
        if (this.cph9Y()) {
            l6f.hq9h({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (U6O) {
                    if (U6O == "ok") {
                        this.z6t("forceclose", {});
                        this.bu6o();
                        h6b.z6t(m6g.pv1x, "shareclose", {})
                    }
                }.g6a(this)
            })
        } else {
            this.z6t("forceclose", {});
            this.bu6o();
            h6b.z6t(m6g.pv1x, "shareclose", {})
        }
    };
    b5g.Fi6c = function (em8e, dT8L) {
        this.oS1x.Cf5k(em8e, dT8L)
    };
    b5g.bdD3x = function (u6o) {
        this.hh9Y.fu8m("page", {type: u6o})
    };
    b5g.Fu6o = function () {
        return this.et8l == 39
    };
    b5g.L6F = function () {
        var coz9q = function (p6j, r6l) {
            var ch6b = "u-slg-" + dZ8R[r6l] + "-gray";
            !this.bcn3x[bhZ4d[r6l]] ? a4e.y6s(p6j, ch6b) : a4e.x6r(p6j, ch6b)
        };
        return function () {
            K6E.L6F.call(this);
            this.n6h.style.display = "";
            this.ce6Y();
            this.cO7H(!1);
            this.Dc6W.Ue0x(0);
            this.ev8n.focus();
            this.ev8n.value = this.cvc1x || "";
            this.ev8n.placeholder = this.cvb1x || "";
            if (!this.Fu6o()) {
                this.cpj9a()
            } else {
                a4e.y6s(this.po1x, "info-video");
                a4e.dH7A(this.po1x, "m-xwgt-share-videobar", {title: this.OG9x, picUrl: this.bhS4W})
            }
            this.gj8b();
            this.wy4C.cbF6z();
            k6e.bd6X(this.bcW3x, coz9q, this);
            this.lV0x();
            if (this.Cv6p) {
                this.qs1x.style.display = "none"
            } else {
                this.qs1x.style.display = ""
            }
            this.bdp3x()
        }
    }();
    b5g.bu6o = function (d6d) {
        K6E.bu6o.call(this);
        !!this.hs9j && this.hs9j.bu6o();
        if (this.wy4C) {
            this.wy4C.T6N();
            delete this.wy4C
        }
        if (this.hA9r) {
            this.hA9r.T6N();
            delete this.hA9r
        }
        if (this.oL1x) {
            this.oL1x.T6N();
            delete this.oL1x
        }
        if (this.bEu0x) {
            this.bEu0x = this.bEu0x.T6N()
        }
        if (this.mS0x) {
            this.mS0x.T6N();
            delete this.mS0x
        }
    };
    l6f.la0x = function (e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e6c.title === undefined) {
            e6c.title = "分享"
        }
        if (e6c.actId && e6c.type != 39) {
            var u6o = cyO2x[e6c.resourceType], bV6P = e6c.resourceJson, id9U;
            if (k6e.fE8w(bV6P)) {
                try {
                    bV6P = JSON.parse(bV6P)
                } catch (e) {
                }
            }
            if (u6o) {
                id9U = l6f.bBa9R(u6o, bV6P);
                e6c.name = id9U.title;
                e6c.author = id9U.author;
                e6c.picUrl = id9U.picUrl;
                e6c.type = u6o;
                e6c.rid = (bV6P || []).id
            }
        }
        m6g.pv1x.L6F(e6c)
    };
    I6C.fK8C.A6u({element: m6g.pv1x, event: ["sharesuccess", "shareclose"]})
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, h6b = c5h("nej.v"), a4e = c5h("nej.e"), v6p = c5h("nej.j"), m6g = c5h("nm.l"),
        w6q = c5h("nm.w"), bC6w = c5h("nej.ui"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), b5g, K6E;
    m6g.bdI3x = NEJ.C();
    b5g = m6g.bdI3x.O6I(m6g.ek8c);
    K6E = m6g.bdI3x.cs6m;
    b5g.cx6r = function () {
        this.cD7w()
    };
    b5g.bX6R = function () {
        this.cg6a();
        var i6c = a4e.H6B(this.n6h, "j-flag");
        h6b.s6m(i6c[0], "click", this.FZ7S.g6a(this))
    };
    b5g.cf6Z = function () {
        this.cd6X = "m-import-ok"
    };
    b5g.bl6f = function (e6c) {
        e6c.parent = e6c.parent || document.body;
        e6c.title = "歌曲同步完成";
        this.bm6g(e6c)
    };
    b5g.bD6x = function () {
        this.bH6B()
    };
    b5g.FZ7S = function (d6d) {
        this.bu6o();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b5g.CE6y = function () {
        this.bu6o()
    };
    b5g.bJW1x = function (d6d) {
        if (d6d.keyCode == 13) this.DJ6D()
    }
})();
(function () {
    var c5h = NEJ.P, bb6V = NEJ.O, h6b = c5h("nej.v"), a4e = c5h("nej.e"), v6p = c5h("nej.j"), N6H = c5h("nej.p"),
        k6e = c5h("nej.u"), m6g = c5h("nm.l"), w6q = c5h("nm.w"), bC6w = c5h("nej.ui"), q6k = c5h("nm.d"),
        l6f = c5h("nm.x"), b5g, K6E;
    m6g.bEt0x = NEJ.C();
    b5g = m6g.bEt0x.O6I(m6g.ek8c);
    b5g.cf6Z = function () {
        this.cd6X = "m-programtips-layer"
    };
    b5g.bX6R = function () {
        this.cg6a();
        this.bU6O = a4e.H6B(this.n6h, "j-flag")
    };
    b5g.bl6f = function (e6c) {
        e6c.clazz = " m-layer-programtips";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "付费内容提示";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bm6g(e6c);
        this.hb8T = e6c.id;
        this.cnl9c = e6c.radiotype;
        this.lJ0x = location.protocol + "//" + (this.bht4x() || "music.163.com") + "/m/" + this.cnl9c + "?id=" + this.hb8T;
        this.cmQ9H()
    };
    b5g.bD6x = function () {
        this.bH6B()
    };
    b5g.CE6y = function () {
        this.bu6o()
    };
    b5g.FZ7S = function (d6d) {
        this.z6t("onok", D6x);
        this.bu6o()
    };
    l6f.bEb0x = function (e6c) {
        m6g.bEt0x.A6u(e6c).L6F()
    };
    b5g.cmQ9H = function () {
        v6p.bn6h("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k6e.cF7y({url: this.lJ0x, size: 180}),
            onload: function (j6d) {
                if (j6d.code == 200) {
                    this.cmk9b(j6d.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g6a(this)
        })
    };
    b5g.bht4x = function () {
        var Rf0x = location.host;
        if (Rf0x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b5g.cmk9b = function (jL9C) {
        this.bU6O[0].style.backgroundImage = "url(" + jL9C + ")"
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), du7n = c5h("nej.p"), h6b = c5h("nej.v"), k6e = c5h("nej.u"),
        I6C = c5h("nej.ut"), v6p = c5h("nej.j"), q6k = c5h("nm.d"), l6f = c5h("nm.x"), E6y = c5h("nm.m"),
        m6g = c5h("nm.l"), M6G = c5h("nm.m.f"), b5g, K6E;
    E6y.de7X = NEJ.C();
    b5g = E6y.de7X.O6I(I6C.dv7o);
    b5g.bL6F = function () {
        var qV1x = !1;
        return function () {
            if (qV1x) return;
            qV1x = !0;
            this.bQ6K();
            if (top == self) {
                return
            }
            this.tJ2x = a4e.B6v("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bEa0x()
            }
            I6C.fK8C.A6u({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bW6Q([[window, "scroll", this.Cd5i.g6a(this)], [document, "keyup", this.clY9P.g6a(this)], [document.body, "click", this.tu2x.g6a(this)], [document, "mouseup", this.clT9K.g6a(this)], [this.tJ2x, "click", this.MK8C.g6a(this)], [q6k.th2x, "message", this.vk3x.g6a(this)]]);
            l6f.bVG5L(document.body);
            this.Cd5i();
            if (this.Cc5h !== false && typeof GUser !== "undefined" && GUser.userId > 0) q6k.th2x.go8g().ug3x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (du7n.ds7l.browser == "ie" && parseInt(du7n.ds7l.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hk9b = top.player.getPlaying();
                    if (hk9b && hk9b.track && hk9b.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hk9b.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.xA4E.g6a(this);
            this.kd9U = q6k.hQ9H.A6u();
            window.log = this.ho9f.g6a(this);
            var sQ2x = location.search;
            if (sQ2x) {
                var bv6p = sQ2x.substr(sQ2x.indexOf("?") + 1), gr8j = k6e.hu9l(bv6p);
                if (gr8j && gr8j["_hash"]) location.hash = gr8j["_hash"]
            }
        }
    }();
    b5g.clY9P = function (d6d) {
        var f6b = h6b.W6Q(d6d);
        try {
            if (d6d.keyCode == 80 && l6f.bCj9a() || ["textarea", "input"].indexOf(f6b.tagName.toLowerCase()) >= 0) return;
            h6b.z6t(top.document, "keyup", {ctrlKey: d6d.ctrlKey, keyCode: d6d.keyCode})
        } catch (e) {
        }
    };
    b5g.tu2x = function (d6d) {
        var f6b = h6b.W6Q(d6d);
        if (f6b && f6b.tagName == "INPUT") return;
        var f6b = h6b.W6Q(d6d, "d:pid");
        if (f6b) {
            h6b.cq6k(d6d);
            var pB1x = a4e.t6n(f6b, "pid"), Cb5g = a4e.t6n(f6b, "ptype"), U6O = a4e.t6n(f6b, "action") || "play";
            switch (U6O) {
                case"subscribe":
                    l6f.ms0x({tracks: [pB1x]});
                    break
            }
        }
        f6b = h6b.W6Q(d6d, "d:resAction");
        if (f6b && f6b.className.indexOf("-dis") == -1) {
            var cR7K = a4e.t6n(f6b, "resId"), u6o = a4e.t6n(f6b, "resType"), bhr4v = a4e.t6n(f6b, "resRadiotype"),
                bhq4u = a4e.t6n(f6b, "resRadioid"), eb8T = a4e.t6n(f6b, "resFrom"), j6d = a4e.t6n(f6b, "resData"),
                U6O = a4e.t6n(f6b, "resAction"), biV5a = a4e.t6n(f6b, "resCopyright"),
                beg4k = a4e.t6n(f6b, "resAuditstatus");
            if (U6O != "log" && U6O != "bilog") h6b.cq6k(d6d);
            switch (U6O) {
                case"log":
                    j6d = (j6d || "").split("|");
                    if (!!j6d[0]) {
                        var bg6a = {id: cR7K, alg: j6d[2] || "itembased", scene: j6d[3], position: j6d[1] || 0};
                        if (!!j6d[4]) bg6a.srcid = j6d[4];
                        window.log(j6d[0], bg6a)
                    }
                    break;
                case"bilog":
                    var bmx5C = a4e.t6n(f6b, "logAction"), bmw5B = a4e.t6n(f6b, "logJson");
                    window.log(bmx5C, bmw5B);
                    break;
                case"share":
                    if (beg4k && beg4k == 1) {
                        l6f.is9j("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cR7K, u6o, a4e.t6n(f6b, "resPic"), a4e.t6n(f6b, "resName"), a4e.t6n(f6b, "resAuthor"), a4e.t6n(f6b, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (u6o == 18) {
                        var rl1x = a4e.t6n(f6b, "resLevel"), nN0x = a4e.t6n(f6b, "resFee");
                        if (rl1x == 10) {
                            l6f.vg3x(nN0x, cR7K, "song");
                            break
                        }
                        l6f.ms0x({tracks: [cR7K]})
                    }
                    break;
                case"download":
                    l6f.KF8x({id: cR7K, type: u6o});
                    break;
                case"programtips":
                    if (beg4k && beg4k == 1) {
                        l6f.is9j("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l6f.bEb0x({id: bhq4u, radiotype: bhr4v})
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d6d)
        } catch (e) {
        }
    };
    b5g.clT9K = function (d6d) {
        try {
            h6b.z6t(top.document, "mouseup")
        } catch (e) {
        }
    };
    b5g.Cd5i = function () {
        var clB9s = function () {
            var cj6d = window.innerHeight;
            if (!k6e.ws4w(cj6d)) cj6d = (document.documentElement || document.body).clientHeight;
            return cj6d
        };
        return function (d6d) {
            if (!this.tJ2x) return;
            var bei4m = clB9s(), gf8X = document.documentElement.scrollTop || document.body.scrollTop;
            a4e.ba6U(this.tJ2x, "display", gf8X > 0 ? "" : "none");
            if (du7n.ds7l.browser == "ie" && du7n.ds7l.version < "7.0") {
                var gx8p = Math.min(document.body.clientHeight, bei4m + gf8X) - 204;
                a4e.ba6U(this.tJ2x, "top", gx8p + "px")
            }
        }
    }();
    b5g.MK8C = function (d6d) {
        h6b.cq6k(d6d);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b5g.xA4E = function () {
        var bhp4t = function (d6d) {
            h6b.z6t(window, "share", d6d)
        };
        return function (cR7K, u6o, zC5H, V6P, EC6w, Ey6s) {
            l6f.la0x({
                rid: cR7K,
                type: u6o,
                purl: zC5H,
                name: V6P,
                author: EC6w,
                authors: Ey6s,
                onshare: bhp4t.g6a(this)
            })
        }
    }();
    b5g.ho9f = function (U6O, bg6a) {
        try {
            top.log(U6O, bg6a)
        } catch (e) {
            if (U6O.indexOf("new|") == 0) {
                return this.kd9U.fu8m(U6O.slice(4), bg6a)
            }
            switch (U6O) {
                case"play":
                    this.kd9U.el8d(bg6a);
                    break;
                case"search":
                    this.kd9U.bIe1x(bg6a);
                    break;
                default:
                    this.kd9U.fu8m(U6O, bg6a)
            }
        }
    };
    b5g.bEa0x = function () {
        var ben4r, bho4s = false, br6l = [45, 60];
        var cln9e = function (bG6A) {
            if (bG6A.title != "MailBoxImport") return;
            var Q6K = JSON.parse(bG6A.content || "null") || bb6V;
            if (Q6K.status == 10) {
                m6g.bdI3x.A6u().L6F();
                window.clearTimeout(ben4r)
            }
        };
        var sx2x = function (d6d) {
            if (d6d.code == 200) {
                if (d6d.status == 1) {
                    h6b.s6m(q6k.AE5J, "message", cln9e.g6a(this));
                    q6k.AE5J.A6u().bmj5o();
                    bho4s = true
                } else {
                    if (bho4s) {
                        if (d6d.status == 10) {
                            m6g.bdI3x.A6u().L6F();
                            h6b.hf9W(q6k.AE5J, "message");
                            window.clearTimeout(ben4r);
                            bho4s = false
                        }
                    } else {
                        window.clearTimeout(ben4r)
                    }
                }
            }
        };
        return function () {
            var tH2x = br6l.shift() * 1e3;
            v6p.bn6h("/api/musicbox/mail/status", {type: "json", method: "get", onload: sx2x.g6a(this)});
            if (tH2x) {
                ben4r = window.setTimeout(arguments.callee, tH2x)
            }
        }
    }();
    b5g.vk3x = function (d6d) {
        try {
            top.polling(d6d)
        } catch (e) {
        }
    }
})()