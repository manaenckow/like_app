var kw = Object.defineProperty;
var xw = (e, t, r) => t in e ? kw(e, t, {enumerable: !0, configurable: !0, writable: !0, value: r}) : e[t] = r;
var Ae = (e, t, r) => xw(e, typeof t != "symbol" ? t + "" : t, r);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const a of o) if (a.type === "childList") for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
    }).observe(document, {childList: !0, subtree: !0});

    function r(o) {
        const a = {};
        return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const a = r(o);
        fetch(o.href, a)
    }
})();
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Xi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var M0 = {exports: {}}, qi = {};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kf = Object.getOwnPropertySymbols, $w = Object.prototype.hasOwnProperty, _w = Object.prototype.propertyIsEnumerable;

function Tw(e) {
    if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}

function Ow() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        var n = Object.getOwnPropertyNames(t).map(function (a) {
            return t[a]
        });
        if (n.join("") !== "0123456789") return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (a) {
            o[a] = a
        }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}

var R0 = Ow() ? Object.assign : function (e, t) {
    for (var r, n = Tw(e), o, a = 1; a < arguments.length; a++) {
        r = Object(arguments[a]);
        for (var l in r) $w.call(r, l) && (n[l] = r[l]);
        if (Kf) {
            o = Kf(r);
            for (var s = 0; s < o.length; s++) _w.call(r, o[s]) && (n[o[s]] = r[o[s]])
        }
    }
    return n
}, A0 = {exports: {}}, se = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd = R0, Oo = 60103, I0 = 60106;
se.Fragment = 60107;
se.StrictMode = 60108;
se.Profiler = 60114;
var j0 = 60109, L0 = 60110, N0 = 60112;
se.Suspense = 60113;
var D0 = 60115, F0 = 60116;
if (typeof Symbol == "function" && Symbol.for) {
    var Vt = Symbol.for;
    Oo = Vt("react.element"), I0 = Vt("react.portal"), se.Fragment = Vt("react.fragment"), se.StrictMode = Vt("react.strict_mode"), se.Profiler = Vt("react.profiler"), j0 = Vt("react.provider"), L0 = Vt("react.context"), N0 = Vt("react.forward_ref"), se.Suspense = Vt("react.suspense"), D0 = Vt("react.memo"), F0 = Vt("react.lazy")
}
var Gf = typeof Symbol == "function" && Symbol.iterator;

function Pw(e) {
    return e === null || typeof e != "object" ? null : (e = Gf && e[Gf] || e["@@iterator"], typeof e == "function" ? e : null)
}

function Zi(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var B0 = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, z0 = {};

function Po(e, t, r) {
    this.props = e, this.context = t, this.refs = z0, this.updater = r || B0
}

Po.prototype.isReactComponent = {};
Po.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error(Zi(85));
    this.updater.enqueueSetState(this, e, t, "setState")
};
Po.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function H0() {
}

H0.prototype = Po.prototype;

function nd(e, t, r) {
    this.props = e, this.context = t, this.refs = z0, this.updater = r || B0
}

var od = nd.prototype = new H0;
od.constructor = nd;
rd(od, Po.prototype);
od.isPureReactComponent = !0;
var id = {current: null}, V0 = Object.prototype.hasOwnProperty, W0 = {key: !0, ref: !0, __self: !0, __source: !0};

function U0(e, t, r) {
    var n, o = {}, a = null, l = null;
    if (t != null) for (n in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (a = "" + t.key), t) V0.call(t, n) && !W0.hasOwnProperty(n) && (o[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1) o.children = r; else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        o.children = u
    }
    if (e && e.defaultProps) for (n in s = e.defaultProps, s) o[n] === void 0 && (o[n] = s[n]);
    return {$$typeof: Oo, type: e, key: a, ref: l, props: o, _owner: id.current}
}

function Mw(e, t) {
    return {$$typeof: Oo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function ad(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Oo
}

function Rw(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (r) {
        return t[r]
    })
}

var Yf = /\/+/g;

function Es(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Rw("" + e.key) : t.toString(36)
}

function Ga(e, t, r, n, o) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0; else switch (a) {
        case"string":
        case"number":
            l = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case Oo:
                case I0:
                    l = !0
            }
    }
    if (l) return l = e, o = o(l), e = n === "" ? "." + Es(l, 0) : n, Array.isArray(o) ? (r = "", e != null && (r = e.replace(Yf, "$&/") + "/"), Ga(o, t, r, "", function (c) {
        return c
    })) : o != null && (ad(o) && (o = Mw(o, r + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Yf, "$&/") + "/") + e)), t.push(o)), 1;
    if (l = 0, n = n === "" ? "." : n + ":", Array.isArray(e)) for (var s = 0; s < e.length; s++) {
        a = e[s];
        var u = n + Es(a, s);
        l += Ga(a, t, r, u, o)
    } else if (u = Pw(e), typeof u == "function") for (e = u.call(e), s = 0; !(a = e.next()).done;) a = a.value, u = n + Es(a, s++), l += Ga(a, t, r, u, o); else if (a === "object") throw t = "" + e, Error(Zi(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
    return l
}

function wa(e, t, r) {
    if (e == null) return e;
    var n = [], o = 0;
    return Ga(e, n, "", "", function (a) {
        return t.call(r, a, o++)
    }), n
}

function Aw(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), e._status = 0, e._result = t, t.then(function (r) {
            e._status === 0 && (r = r.default, e._status = 1, e._result = r)
        }, function (r) {
            e._status === 0 && (e._status = 2, e._result = r)
        })
    }
    if (e._status === 1) return e._result;
    throw e._result
}

var K0 = {current: null};

function Ar() {
    var e = K0.current;
    if (e === null) throw Error(Zi(321));
    return e
}

var Iw = {
    ReactCurrentDispatcher: K0,
    ReactCurrentBatchConfig: {transition: 0},
    ReactCurrentOwner: id,
    IsSomeRendererActing: {current: !1},
    assign: rd
};
se.Children = {
    map: wa, forEach: function (e, t, r) {
        wa(e, function () {
            t.apply(this, arguments)
        }, r)
    }, count: function (e) {
        var t = 0;
        return wa(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return wa(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!ad(e)) throw Error(Zi(143));
        return e
    }
};
se.Component = Po;
se.PureComponent = nd;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iw;
se.cloneElement = function (e, t, r) {
    if (e == null) throw Error(Zi(267, e));
    var n = rd({}, e.props), o = e.key, a = e.ref, l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref, l = id.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) V0.call(t, u) && !W0.hasOwnProperty(u) && (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) n.children = r; else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        n.children = s
    }
    return {$$typeof: Oo, type: e.type, key: o, ref: a, props: n, _owner: l}
};
se.createContext = function (e, t) {
    return t === void 0 && (t = null), e = {
        $$typeof: L0,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    }, e.Provider = {$$typeof: j0, _context: e}, e.Consumer = e
};
se.createElement = U0;
se.createFactory = function (e) {
    var t = U0.bind(null, e);
    return t.type = e, t
};
se.createRef = function () {
    return {current: null}
};
se.forwardRef = function (e) {
    return {$$typeof: N0, render: e}
};
se.isValidElement = ad;
se.lazy = function (e) {
    return {$$typeof: F0, _payload: {_status: -1, _result: e}, _init: Aw}
};
se.memo = function (e, t) {
    return {$$typeof: D0, type: e, compare: t === void 0 ? null : t}
};
se.useCallback = function (e, t) {
    return Ar().useCallback(e, t)
};
se.useContext = function (e, t) {
    return Ar().useContext(e, t)
};
se.useDebugValue = function () {
};
se.useEffect = function (e, t) {
    return Ar().useEffect(e, t)
};
se.useImperativeHandle = function (e, t, r) {
    return Ar().useImperativeHandle(e, t, r)
};
se.useLayoutEffect = function (e, t) {
    return Ar().useLayoutEffect(e, t)
};
se.useMemo = function (e, t) {
    return Ar().useMemo(e, t)
};
se.useReducer = function (e, t, r) {
    return Ar().useReducer(e, t, r)
};
se.useRef = function (e) {
    return Ar().useRef(e)
};
se.useState = function (e) {
    return Ar().useState(e)
};
se.version = "17.0.2";
A0.exports = se;
var E = A0.exports;
const ur = Xi(E);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jw = E, G0 = 60103;
qi.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
    var Xf = Symbol.for;
    G0 = Xf("react.element"), qi.Fragment = Xf("react.fragment")
}
var Lw = jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nw = Object.prototype.hasOwnProperty,
    Dw = {key: !0, ref: !0, __self: !0, __source: !0};

function Y0(e, t, r) {
    var n, o = {}, a = null, l = null;
    r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (n in t) Nw.call(t, n) && !Dw.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps) for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
    return {$$typeof: G0, type: e, key: a, ref: l, props: o, _owner: Lw.current}
}

qi.jsx = Y0;
qi.jsxs = Y0;
M0.exports = qi;
var b = M0.exports, at = function (e) {
        try {
            return !!e()
        } catch {
            return !0
        }
    }, Fw = at, ld = !Fw(function () {
        var e = (function () {
        }).bind();
        return typeof e != "function" || e.hasOwnProperty("prototype")
    }), X0 = ld, q0 = Function.prototype, Wu = q0.call, Bw = X0 && q0.bind.bind(Wu, Wu), Re = X0 ? Bw : function (e) {
        return function () {
            return Wu.apply(e, arguments)
        }
    }, Z0 = Re, zw = Z0({}.toString), Hw = Z0("".slice), Qi = function (e) {
        return Hw(zw(e), 8, -1)
    }, Vw = Re, Ww = at, Uw = Qi, ks = Object, Kw = Vw("".split), Gw = Ww(function () {
        return !ks("z").propertyIsEnumerable(0)
    }) ? function (e) {
        return Uw(e) === "String" ? Kw(e, "") : ks(e)
    } : ks, Mo = function (e) {
        return e == null
    }, Yw = Mo, Xw = TypeError, Ji = function (e) {
        if (Yw(e)) throw new Xw("Can't call method on " + e);
        return e
    }, qw = Gw, Zw = Ji, Ro = function (e) {
        return qw(Zw(e))
    }, Yo = function (e) {
        return e && e.Math === Math && e
    },
    bt = Yo(typeof globalThis == "object" && globalThis) || Yo(typeof window == "object" && window) || Yo(typeof self == "object" && self) || Yo(typeof sr == "object" && sr) || Yo(typeof sr == "object" && sr) || function () {
        return this
    }() || Function("return this")(), Q0 = {exports: {}}, qf = bt, Qw = Object.defineProperty, sd = function (e, t) {
        try {
            Qw(qf, e, {value: t, configurable: !0, writable: !0})
        } catch {
            qf[e] = t
        }
        return t
    }, Jw = bt, e2 = sd, Zf = "__core-js_shared__", Qf = Q0.exports = Jw[Zf] || e2(Zf, {});
(Qf.versions || (Qf.versions = [])).push({
    version: "3.38.1",
    mode: "global",
    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var ud = Q0.exports, Jf = ud, J0 = function (e, t) {
        return Jf[e] || (Jf[e] = t || {})
    }, t2 = Ji, r2 = Object, cd = function (e) {
        return r2(t2(e))
    }, n2 = Re, o2 = cd, i2 = n2({}.hasOwnProperty), qt = Object.hasOwn || function (t, r) {
        return i2(o2(t), r)
    }, a2 = Re, l2 = 0, s2 = Math.random(), u2 = a2(1.toString), dd = function (e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + u2(++l2 + s2, 36)
    }, c2 = bt, ev = c2.navigator, tv = ev && ev.userAgent, d2 = tv ? String(tv) : "", em = bt, xs = d2, rv = em.process,
    nv = em.Deno, ov = rv && rv.versions || nv && nv.version, iv = ov && ov.v8, Ut, dl;
iv && (Ut = iv.split("."), dl = Ut[0] > 0 && Ut[0] < 4 ? 1 : +(Ut[0] + Ut[1]));
!dl && xs && (Ut = xs.match(/Edge\/(\d+)/), (!Ut || Ut[1] >= 74) && (Ut = xs.match(/Chrome\/(\d+)/), Ut && (dl = +Ut[1])));
var f2 = dl, av = f2, v2 = at, p2 = bt, h2 = p2.String, tm = !!Object.getOwnPropertySymbols && !v2(function () {
        var e = Symbol("symbol detection");
        return !h2(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && av && av < 41
    }), m2 = tm, rm = m2 && !Symbol.sham && typeof Symbol.iterator == "symbol", g2 = bt, y2 = J0, lv = qt, w2 = dd, S2 = tm,
    C2 = rm, no = g2.Symbol, $s = y2("wks"), b2 = C2 ? no.for || no : no && no.withoutSetter || w2, Ot = function (e) {
        return lv($s, e) || ($s[e] = S2 && lv(no, e) ? no[e] : b2("Symbol." + e)), $s[e]
    }, _s = typeof document == "object" && document.all, Fe = typeof _s > "u" && _s !== void 0 ? function (e) {
        return typeof e == "function" || e === _s
    } : function (e) {
        return typeof e == "function"
    }, E2 = Fe, Pt = function (e) {
        return typeof e == "object" ? e !== null : E2(e)
    }, k2 = Pt, x2 = String, $2 = TypeError, Zt = function (e) {
        if (k2(e)) return e;
        throw new $2(x2(e) + " is not an object")
    }, nm = {}, _2 = at, Qt = !_2(function () {
        return Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1] !== 7
    }), T2 = Qt, O2 = at, om = T2 && O2(function () {
        return Object.defineProperty(function () {
        }, "prototype", {value: 42, writable: !1}).prototype !== 42
    }), hr = {}, P2 = bt, sv = Pt, Uu = P2.document, M2 = sv(Uu) && sv(Uu.createElement), fd = function (e) {
        return M2 ? Uu.createElement(e) : {}
    }, R2 = Qt, A2 = at, I2 = fd, im = !R2 && !A2(function () {
        return Object.defineProperty(I2("div"), "a", {
            get: function () {
                return 7
            }
        }).a !== 7
    }), j2 = ld, Sa = Function.prototype.call, We = j2 ? Sa.bind(Sa) : function () {
        return Sa.apply(Sa, arguments)
    }, Ts = bt, L2 = Fe, N2 = function (e) {
        return L2(e) ? e : void 0
    }, Ao = function (e, t) {
        return arguments.length < 2 ? N2(Ts[e]) : Ts[e] && Ts[e][t]
    }, D2 = Re, vd = D2({}.isPrototypeOf), F2 = Ao, B2 = Fe, z2 = vd, H2 = rm, V2 = Object, am = H2 ? function (e) {
        return typeof e == "symbol"
    } : function (e) {
        var t = F2("Symbol");
        return B2(t) && z2(t.prototype, V2(e))
    }, W2 = String, pd = function (e) {
        try {
            return W2(e)
        } catch {
            return "Object"
        }
    }, U2 = Fe, K2 = pd, G2 = TypeError, Jt = function (e) {
        if (U2(e)) return e;
        throw new G2(K2(e) + " is not a function")
    }, Y2 = Jt, X2 = Mo, hd = function (e, t) {
        var r = e[t];
        return X2(r) ? void 0 : Y2(r)
    }, Os = We, Ps = Fe, Ms = Pt, q2 = TypeError, Z2 = function (e, t) {
        var r, n;
        if (t === "string" && Ps(r = e.toString) && !Ms(n = Os(r, e)) || Ps(r = e.valueOf) && !Ms(n = Os(r, e)) || t !== "string" && Ps(r = e.toString) && !Ms(n = Os(r, e))) return n;
        throw new q2("Can't convert object to primitive value")
    }, Q2 = We, uv = Pt, cv = am, J2 = hd, eS = Z2, tS = Ot, rS = TypeError, nS = tS("toPrimitive"), oS = function (e, t) {
        if (!uv(e) || cv(e)) return e;
        var r = J2(e, nS), n;
        if (r) {
            if (t === void 0 && (t = "default"), n = Q2(r, e, t), !uv(n) || cv(n)) return n;
            throw new rS("Can't convert object to primitive value")
        }
        return t === void 0 && (t = "number"), eS(e, t)
    }, iS = oS, aS = am, lm = function (e) {
        var t = iS(e, "string");
        return aS(t) ? t : t + ""
    }, lS = Qt, sS = im, uS = om, Ca = Zt, dv = lm, cS = TypeError, Rs = Object.defineProperty,
    dS = Object.getOwnPropertyDescriptor, As = "enumerable", Is = "configurable", js = "writable";
hr.f = lS ? uS ? function (t, r, n) {
    if (Ca(t), r = dv(r), Ca(n), typeof t == "function" && r === "prototype" && "value" in n && js in n && !n[js]) {
        var o = dS(t, r);
        o && o[js] && (t[r] = n.value, n = {
            configurable: Is in n ? n[Is] : o[Is],
            enumerable: As in n ? n[As] : o[As],
            writable: !1
        })
    }
    return Rs(t, r, n)
} : Rs : function (t, r, n) {
    if (Ca(t), r = dv(r), Ca(n), sS) try {
        return Rs(t, r, n)
    } catch {
    }
    if ("get" in n || "set" in n) throw new cS("Accessors not supported");
    return "value" in n && (t[r] = n.value), t
};
var fS = Math.ceil, vS = Math.floor, pS = Math.trunc || function (t) {
        var r = +t;
        return (r > 0 ? vS : fS)(r)
    }, hS = pS, Kl = function (e) {
        var t = +e;
        return t !== t || t === 0 ? 0 : hS(t)
    }, mS = Kl, gS = Math.max, yS = Math.min, wS = function (e, t) {
        var r = mS(e);
        return r < 0 ? gS(r + t, 0) : yS(r, t)
    }, SS = Kl, CS = Math.min, bS = function (e) {
        var t = SS(e);
        return t > 0 ? CS(t, 9007199254740991) : 0
    }, ES = bS, sm = function (e) {
        return ES(e.length)
    }, kS = Ro, xS = wS, $S = sm, fv = function (e) {
        return function (t, r, n) {
            var o = kS(t), a = $S(o);
            if (a === 0) return !e && -1;
            var l = xS(n, a), s;
            if (e && r !== r) {
                for (; a > l;) if (s = o[l++], s !== s) return !0
            } else for (; a > l; l++) if ((e || l in o) && o[l] === r) return e || l || 0;
            return !e && -1
        }
    }, _S = {includes: fv(!0), indexOf: fv(!1)}, Gl = {}, TS = Re, Ls = qt, OS = Ro, PS = _S.indexOf, MS = Gl,
    vv = TS([].push), um = function (e, t) {
        var r = OS(e), n = 0, o = [], a;
        for (a in r) !Ls(MS, a) && Ls(r, a) && vv(o, a);
        for (; t.length > n;) Ls(r, a = t[n++]) && (~PS(o, a) || vv(o, a));
        return o
    },
    md = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    RS = um, AS = md, IS = Object.keys || function (t) {
        return RS(t, AS)
    }, jS = Qt, LS = om, NS = hr, DS = Zt, FS = Ro, BS = IS;
nm.f = jS && !LS ? Object.defineProperties : function (t, r) {
    DS(t);
    for (var n = FS(r), o = BS(r), a = o.length, l = 0, s; a > l;) NS.f(t, s = o[l++], n[s]);
    return t
};
var zS = Ao, HS = zS("document", "documentElement"), VS = J0, WS = dd, pv = VS("keys"), gd = function (e) {
        return pv[e] || (pv[e] = WS(e))
    }, US = Zt, KS = nm, hv = md, GS = Gl, YS = HS, XS = fd, qS = gd, mv = ">", gv = "<", Ku = "prototype", Gu = "script",
    cm = qS("IE_PROTO"), Ns = function () {
    }, dm = function (e) {
        return gv + Gu + mv + e + gv + "/" + Gu + mv
    }, yv = function (e) {
        e.write(dm("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
    }, ZS = function () {
        var e = XS("iframe"), t = "java" + Gu + ":", r;
        return e.style.display = "none", YS.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(dm("document.F=Object")), r.close(), r.F
    }, ba, Ya = function () {
        try {
            ba = new ActiveXObject("htmlfile")
        } catch {
        }
        Ya = typeof document < "u" ? document.domain && ba ? yv(ba) : ZS() : yv(ba);
        for (var e = hv.length; e--;) delete Ya[Ku][hv[e]];
        return Ya()
    };
GS[cm] = !0;
var yd = Object.create || function (t, r) {
    var n;
    return t !== null ? (Ns[Ku] = US(t), n = new Ns, Ns[Ku] = null, n[cm] = t) : n = Ya(), r === void 0 ? n : KS.f(n, r)
}, QS = Ot, JS = yd, e4 = hr.f, Yu = QS("unscopables"), Xu = Array.prototype;
Xu[Yu] === void 0 && e4(Xu, Yu, {configurable: !0, value: JS(null)});
var t4 = function (e) {
        Xu[Yu][e] = !0
    }, Io = {}, r4 = bt, n4 = Fe, wv = r4.WeakMap, o4 = n4(wv) && /native code/.test(String(wv)), wd = function (e, t) {
        return {enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t}
    }, i4 = Qt, a4 = hr, l4 = wd, Yl = i4 ? function (e, t, r) {
        return a4.f(e, t, l4(1, r))
    } : function (e, t, r) {
        return e[t] = r, e
    }, s4 = o4, fm = bt, u4 = Pt, c4 = Yl, Ds = qt, Fs = ud, d4 = gd, f4 = Gl, Sv = "Object already initialized",
    qu = fm.TypeError, v4 = fm.WeakMap, fl, Ri, vl, p4 = function (e) {
        return vl(e) ? Ri(e) : fl(e, {})
    }, h4 = function (e) {
        return function (t) {
            var r;
            if (!u4(t) || (r = Ri(t)).type !== e) throw new qu("Incompatible receiver, " + e + " required");
            return r
        }
    };
if (s4 || Fs.state) {
    var ir = Fs.state || (Fs.state = new v4);
    ir.get = ir.get, ir.has = ir.has, ir.set = ir.set, fl = function (e, t) {
        if (ir.has(e)) throw new qu(Sv);
        return t.facade = e, ir.set(e, t), t
    }, Ri = function (e) {
        return ir.get(e) || {}
    }, vl = function (e) {
        return ir.has(e)
    }
} else {
    var qn = d4("state");
    f4[qn] = !0, fl = function (e, t) {
        if (Ds(e, qn)) throw new qu(Sv);
        return t.facade = e, c4(e, qn, t), t
    }, Ri = function (e) {
        return Ds(e, qn) ? e[qn] : {}
    }, vl = function (e) {
        return Ds(e, qn)
    }
}
var Xl = {set: fl, get: Ri, has: vl, enforce: p4, getterFor: h4}, Sd = {}, vm = {}, pm = {}.propertyIsEnumerable,
    hm = Object.getOwnPropertyDescriptor, m4 = hm && !pm.call({1: 2}, 1);
vm.f = m4 ? function (t) {
    var r = hm(this, t);
    return !!r && r.enumerable
} : pm;
var g4 = Qt, y4 = We, w4 = vm, S4 = wd, C4 = Ro, b4 = lm, E4 = qt, k4 = im, Cv = Object.getOwnPropertyDescriptor;
Sd.f = g4 ? Cv : function (t, r) {
    if (t = C4(t), r = b4(r), k4) try {
        return Cv(t, r)
    } catch {
    }
    if (E4(t, r)) return S4(!y4(w4.f, t, r), t[r])
};
var mm = {exports: {}}, Zu = Qt, x4 = qt, gm = Function.prototype, $4 = Zu && Object.getOwnPropertyDescriptor,
    Cd = x4(gm, "name"), _4 = Cd && (function () {
    }).name === "something", T4 = Cd && (!Zu || Zu && $4(gm, "name").configurable),
    ym = {EXISTS: Cd, PROPER: _4, CONFIGURABLE: T4}, O4 = Re, P4 = Fe, Qu = ud, M4 = O4(Function.toString);
P4(Qu.inspectSource) || (Qu.inspectSource = function (e) {
    return M4(e)
});
var R4 = Qu.inspectSource, bd = Re, A4 = at, I4 = Fe, Ea = qt, Ju = Qt, j4 = ym.CONFIGURABLE, L4 = R4, wm = Xl,
    N4 = wm.enforce, D4 = wm.get, bv = String, Xa = Object.defineProperty, F4 = bd("".slice), B4 = bd("".replace),
    z4 = bd([].join), H4 = Ju && !A4(function () {
        return Xa(function () {
        }, "length", {value: 8}).length !== 8
    }), V4 = String(String).split("String"), W4 = mm.exports = function (e, t, r) {
        F4(bv(t), 0, 7) === "Symbol(" && (t = "[" + B4(bv(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Ea(e, "name") || j4 && e.name !== t) && (Ju ? Xa(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t), H4 && r && Ea(r, "arity") && e.length !== r.arity && Xa(e, "length", {value: r.arity});
        try {
            r && Ea(r, "constructor") && r.constructor ? Ju && Xa(e, "prototype", {writable: !1}) : e.prototype && (e.prototype = void 0)
        } catch {
        }
        var n = N4(e);
        return Ea(n, "source") || (n.source = z4(V4, typeof t == "string" ? t : "")), e
    };
Function.prototype.toString = W4(function () {
    return I4(this) && D4(this).source || L4(this)
}, "toString");
var Sm = mm.exports, U4 = Fe, K4 = hr, G4 = Sm, Y4 = sd, jo = function (e, t, r, n) {
    n || (n = {});
    var o = n.enumerable, a = n.name !== void 0 ? n.name : t;
    if (U4(r) && G4(r, a, n), n.global) o ? e[t] = r : Y4(t, r); else {
        try {
            n.unsafe ? e[t] && (o = !0) : delete e[t]
        } catch {
        }
        o ? e[t] = r : K4.f(e, t, {
            value: r,
            enumerable: !1,
            configurable: !n.nonConfigurable,
            writable: !n.nonWritable
        })
    }
    return e
}, ql = {}, X4 = um, q4 = md, Z4 = q4.concat("length", "prototype");
ql.f = Object.getOwnPropertyNames || function (t) {
    return X4(t, Z4)
};
var Cm = {};
Cm.f = Object.getOwnPropertySymbols;
var Q4 = Ao, J4 = Re, eC = ql, tC = Cm, rC = Zt, nC = J4([].concat), oC = Q4("Reflect", "ownKeys") || function (t) {
        var r = eC.f(rC(t)), n = tC.f;
        return n ? nC(r, n(t)) : r
    }, Ev = qt, iC = oC, aC = Sd, lC = hr, sC = function (e, t, r) {
        for (var n = iC(t), o = lC.f, a = aC.f, l = 0; l < n.length; l++) {
            var s = n[l];
            !Ev(e, s) && !(r && Ev(r, s)) && o(e, s, a(t, s))
        }
    }, uC = at, cC = Fe, dC = /#|\.prototype\./, ea = function (e, t) {
        var r = vC[fC(e)];
        return r === hC ? !0 : r === pC ? !1 : cC(t) ? uC(t) : !!t
    }, fC = ea.normalize = function (e) {
        return String(e).replace(dC, ".").toLowerCase()
    }, vC = ea.data = {}, pC = ea.NATIVE = "N", hC = ea.POLYFILL = "P", bm = ea, ka = bt, mC = Sd.f, gC = Yl, yC = jo,
    wC = sd, SC = sC, CC = bm, Z = function (e, t) {
        var r = e.target, n = e.global, o = e.stat, a, l, s, u, c, v;
        if (n ? l = ka : o ? l = ka[r] || wC(r, {}) : l = ka[r] && ka[r].prototype, l) for (s in t) {
            if (c = t[s], e.dontCallGetSet ? (v = mC(l, s), u = v && v.value) : u = l[s], a = CC(n ? s : r + (o ? "." : "#") + s, e.forced), !a && u !== void 0) {
                if (typeof c == typeof u) continue;
                SC(c, u)
            }
            (e.sham || u && u.sham) && gC(c, "sham", !0), yC(l, s, c, e)
        }
    }, bC = at, EC = !bC(function () {
        function e() {
        }

        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }), kC = qt, xC = Fe, $C = cd, _C = gd, TC = EC, kv = _C("IE_PROTO"), ec = Object, OC = ec.prototype,
    Em = TC ? ec.getPrototypeOf : function (e) {
        var t = $C(e);
        if (kC(t, kv)) return t[kv];
        var r = t.constructor;
        return xC(r) && t instanceof r ? r.prototype : t instanceof ec ? OC : null
    }, PC = at, MC = Fe, RC = Pt, xv = Em, AC = jo, IC = Ot, tc = IC("iterator"), km = !1, Mn, Bs, zs;
[].keys && (zs = [].keys(), "next" in zs ? (Bs = xv(xv(zs)), Bs !== Object.prototype && (Mn = Bs)) : km = !0);
var jC = !RC(Mn) || PC(function () {
    var e = {};
    return Mn[tc].call(e) !== e
});
jC && (Mn = {});
MC(Mn[tc]) || AC(Mn, tc, function () {
    return this
});
var xm = {IteratorPrototype: Mn, BUGGY_SAFARI_ITERATORS: km}, LC = hr.f, NC = qt, DC = Ot, $v = DC("toStringTag"),
    Zl = function (e, t, r) {
        e && !r && (e = e.prototype), e && !NC(e, $v) && LC(e, $v, {configurable: !0, value: t})
    }, FC = xm.IteratorPrototype, BC = yd, zC = wd, HC = Zl, VC = Io, WC = function () {
        return this
    }, UC = function (e, t, r, n) {
        var o = t + " Iterator";
        return e.prototype = BC(FC, {next: zC(+!n, r)}), HC(e, o, !1), VC[o] = WC, e
    }, KC = Re, GC = Jt, $m = function (e, t, r) {
        try {
            return KC(GC(Object.getOwnPropertyDescriptor(e, t)[r]))
        } catch {
        }
    }, YC = Pt, XC = function (e) {
        return YC(e) || e === null
    }, qC = XC, ZC = String, QC = TypeError, JC = function (e) {
        if (qC(e)) return e;
        throw new QC("Can't set " + ZC(e) + " as a prototype")
    }, eb = $m, tb = Pt, rb = Ji, nb = JC, _m = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e = !1, t = {}, r;
        try {
            r = eb(Object.prototype, "__proto__", "set"), r(t, []), e = t instanceof Array
        } catch {
        }
        return function (o, a) {
            return rb(o), nb(a), tb(o) && (e ? r(o, a) : o.__proto__ = a), o
        }
    }() : void 0), ob = Z, ib = We, Tm = ym, ab = Fe, lb = UC, _v = Em, Tv = _m, sb = Zl, ub = Yl, Hs = jo, cb = Ot,
    db = Io, Om = xm, fb = Tm.PROPER, vb = Tm.CONFIGURABLE, Ov = Om.IteratorPrototype, xa = Om.BUGGY_SAFARI_ITERATORS,
    Xo = cb("iterator"), Pv = "keys", qo = "values", Mv = "entries", pb = function () {
        return this
    }, Ed = function (e, t, r, n, o, a, l) {
        lb(r, t, n);
        var s = function (f) {
                if (f === o && p) return p;
                if (!xa && f && f in v) return v[f];
                switch (f) {
                    case Pv:
                        return function () {
                            return new r(this, f)
                        };
                    case qo:
                        return function () {
                            return new r(this, f)
                        };
                    case Mv:
                        return function () {
                            return new r(this, f)
                        }
                }
                return function () {
                    return new r(this)
                }
            }, u = t + " Iterator", c = !1, v = e.prototype, g = v[Xo] || v["@@iterator"] || o && v[o], p = !xa && g || s(o),
            m = t === "Array" && v.entries || g, S, w, d;
        if (m && (S = _v(m.call(new e)), S !== Object.prototype && S.next && (_v(S) !== Ov && (Tv ? Tv(S, Ov) : ab(S[Xo]) || Hs(S, Xo, pb)), sb(S, u, !0))), fb && o === qo && g && g.name !== qo && (vb ? ub(v, "name", qo) : (c = !0, p = function () {
            return ib(g, this)
        })), o) if (w = {
            values: s(qo),
            keys: a ? p : s(Pv),
            entries: s(Mv)
        }, l) for (d in w) (xa || c || !(d in v)) && Hs(v, d, w[d]); else ob({target: t, proto: !0, forced: xa || c}, w);
        return v[Xo] !== p && Hs(v, Xo, p, {name: o}), db[t] = p, w
    }, kd = function (e, t) {
        return {value: e, done: t}
    }, hb = Ro, xd = t4, Rv = Io, Pm = Xl, mb = hr.f, gb = Ed, $a = kd, yb = Qt, Mm = "Array Iterator", wb = Pm.set,
    Sb = Pm.getterFor(Mm), Cb = gb(Array, "Array", function (e, t) {
        wb(this, {type: Mm, target: hb(e), index: 0, kind: t})
    }, function () {
        var e = Sb(this), t = e.target, r = e.index++;
        if (!t || r >= t.length) return e.target = null, $a(void 0, !0);
        switch (e.kind) {
            case"keys":
                return $a(r, !1);
            case"values":
                return $a(t[r], !1)
        }
        return $a([r, t[r]], !1)
    }, "values"), Av = Rv.Arguments = Rv.Array;
xd("keys");
xd("values");
xd("entries");
if (yb && Av.name !== "values") try {
    mb(Av, "name", {value: "values"})
} catch {
}
var Rm = {exports: {}}, Am = {}, bb = Re, Eb = bb([].slice), kb = Qi, xb = Ro, Im = ql.f, $b = Eb,
    jm = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    _b = function (e) {
        try {
            return Im(e)
        } catch {
            return $b(jm)
        }
    };
Am.f = function (t) {
    return jm && kb(t) === "Window" ? _b(t) : Im(xb(t))
};
var Tb = at, Ob = Tb(function () {
        if (typeof ArrayBuffer == "function") {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) && Object.defineProperty(e, "a", {value: 8})
        }
    }), Pb = at, Mb = Pt, Rb = Qi, Iv = Ob, qa = Object.isExtensible, Ab = Pb(function () {
        qa(1)
    }), Ib = Ab || Iv ? function (t) {
        return !Mb(t) || Iv && Rb(t) === "ArrayBuffer" ? !1 : qa ? qa(t) : !0
    } : qa, jb = at, Lb = !jb(function () {
        return Object.isExtensible(Object.preventExtensions({}))
    }), Nb = Z, Db = Re, Fb = Gl, Bb = Pt, $d = qt, zb = hr.f, jv = ql, Hb = Am, _d = Ib, Vb = dd, Wb = Lb, Lm = !1,
    Or = Vb("meta"), Ub = 0, Td = function (e) {
        zb(e, Or, {value: {objectID: "O" + Ub++, weakData: {}}})
    }, Kb = function (e, t) {
        if (!Bb(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!$d(e, Or)) {
            if (!_d(e)) return "F";
            if (!t) return "E";
            Td(e)
        }
        return e[Or].objectID
    }, Gb = function (e, t) {
        if (!$d(e, Or)) {
            if (!_d(e)) return !0;
            if (!t) return !1;
            Td(e)
        }
        return e[Or].weakData
    }, Yb = function (e) {
        return Wb && Lm && _d(e) && !$d(e, Or) && Td(e), e
    }, Xb = function () {
        qb.enable = function () {
        }, Lm = !0;
        var e = jv.f, t = Db([].splice), r = {};
        r[Or] = 1, e(r).length && (jv.f = function (n) {
            for (var o = e(n), a = 0, l = o.length; a < l; a++) if (o[a] === Or) {
                t(o, a, 1);
                break
            }
            return o
        }, Nb({target: "Object", stat: !0, forced: !0}, {getOwnPropertyNames: Hb.f}))
    }, qb = Rm.exports = {enable: Xb, fastKey: Kb, getWeakData: Gb, onFreeze: Yb};
Fb[Or] = !0;
var Nm = Rm.exports, Zb = Qi, Qb = Re, Jb = function (e) {
    if (Zb(e) === "Function") return Qb(e)
}, Lv = Jb, eE = Jt, tE = ld, rE = Lv(Lv.bind), ft = function (e, t) {
    return eE(e), t === void 0 ? e : tE ? rE(e, t) : function () {
        return e.apply(t, arguments)
    }
}, nE = Ot, oE = Io, iE = nE("iterator"), aE = Array.prototype, lE = function (e) {
    return e !== void 0 && (oE.Array === e || aE[iE] === e)
}, sE = Ot, uE = sE("toStringTag"), Dm = {};
Dm[uE] = "z";
var Od = String(Dm) === "[object z]", cE = Od, dE = Fe, Za = Qi, fE = Ot, vE = fE("toStringTag"), pE = Object,
    hE = Za(function () {
        return arguments
    }()) === "Arguments", mE = function (e, t) {
        try {
            return e[t]
        } catch {
        }
    }, Ql = cE ? Za : function (e) {
        var t, r, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = mE(t = pE(e), vE)) == "string" ? r : hE ? Za(t) : (n = Za(t)) === "Object" && dE(t.callee) ? "Arguments" : n
    }, gE = Ql, Nv = hd, yE = Mo, wE = Io, SE = Ot, CE = SE("iterator"), Fm = function (e) {
        if (!yE(e)) return Nv(e, CE) || Nv(e, "@@iterator") || wE[gE(e)]
    }, bE = We, EE = Jt, kE = Zt, xE = pd, $E = Fm, _E = TypeError, TE = function (e, t) {
        var r = arguments.length < 2 ? $E(e) : t;
        if (EE(r)) return kE(bE(r, e));
        throw new _E(xE(e) + " is not iterable")
    }, OE = We, Dv = Zt, PE = hd, Pd = function (e, t, r) {
        var n, o;
        Dv(e);
        try {
            if (n = PE(e, "return"), !n) {
                if (t === "throw") throw r;
                return r
            }
            n = OE(n, e)
        } catch (a) {
            o = !0, n = a
        }
        if (t === "throw") throw r;
        if (o) throw n;
        return Dv(n), r
    }, ME = ft, RE = We, AE = Zt, IE = pd, jE = lE, LE = sm, Fv = vd, NE = TE, DE = Fm, Bv = Pd, FE = TypeError,
    Qa = function (e, t) {
        this.stopped = e, this.result = t
    }, zv = Qa.prototype, Lo = function (e, t, r) {
        var n = r && r.that, o = !!(r && r.AS_ENTRIES), a = !!(r && r.IS_RECORD), l = !!(r && r.IS_ITERATOR),
            s = !!(r && r.INTERRUPTED), u = ME(t, n), c, v, g, p, m, S, w, d = function (h) {
                return c && Bv(c, "normal", h), new Qa(!0, h)
            }, f = function (h) {
                return o ? (AE(h), s ? u(h[0], h[1], d) : u(h[0], h[1])) : s ? u(h, d) : u(h)
            };
        if (a) c = e.iterator; else if (l) c = e; else {
            if (v = DE(e), !v) throw new FE(IE(e) + " is not iterable");
            if (jE(v)) {
                for (g = 0, p = LE(e); p > g; g++) if (m = f(e[g]), m && Fv(zv, m)) return m;
                return new Qa(!1)
            }
            c = NE(e, v)
        }
        for (S = a ? e.next : c.next; !(w = RE(S, c)).done;) {
            try {
                m = f(w.value)
            } catch (h) {
                Bv(c, "throw", h)
            }
            if (typeof m == "object" && m && Fv(zv, m)) return m
        }
        return new Qa(!1)
    }, BE = vd, zE = TypeError, Bm = function (e, t) {
        if (BE(t, e)) return e;
        throw new zE("Incorrect invocation")
    }, HE = Ot, zm = HE("iterator"), Hm = !1;
try {
    var VE = 0, Hv = {
        next: function () {
            return {done: !!VE++}
        }, return: function () {
            Hm = !0
        }
    };
    Hv[zm] = function () {
        return this
    }, Array.from(Hv, function () {
        throw 2
    })
} catch {
}
var WE = function (e, t) {
        try {
            if (!t && !Hm) return !1
        } catch {
            return !1
        }
        var r = !1;
        try {
            var n = {};
            n[zm] = function () {
                return {
                    next: function () {
                        return {done: r = !0}
                    }
                }
            }, e(n)
        } catch {
        }
        return r
    }, UE = Fe, KE = Pt, Vv = _m, GE = function (e, t, r) {
        var n, o;
        return Vv && UE(n = t.constructor) && n !== r && KE(o = n.prototype) && o !== r.prototype && Vv(e, o), e
    }, YE = Z, XE = bt, qE = Re, Wv = bm, ZE = jo, QE = Nm, JE = Lo, e3 = Bm, t3 = Fe, r3 = Mo, Vs = Pt, Ws = at, n3 = WE,
    o3 = Zl, i3 = GE, Vm = function (e, t, r) {
        var n = e.indexOf("Map") !== -1, o = e.indexOf("Weak") !== -1, a = n ? "set" : "add", l = XE[e],
            s = l && l.prototype, u = l, c = {}, v = function (f) {
                var h = qE(s[f]);
                ZE(s, f, f === "add" ? function (k) {
                    return h(this, k === 0 ? 0 : k), this
                } : f === "delete" ? function (C) {
                    return o && !Vs(C) ? !1 : h(this, C === 0 ? 0 : C)
                } : f === "get" ? function (k) {
                    return o && !Vs(k) ? void 0 : h(this, k === 0 ? 0 : k)
                } : f === "has" ? function (k) {
                    return o && !Vs(k) ? !1 : h(this, k === 0 ? 0 : k)
                } : function (k, $) {
                    return h(this, k === 0 ? 0 : k, $), this
                })
            }, g = Wv(e, !t3(l) || !(o || s.forEach && !Ws(function () {
                new l().entries().next()
            })));
        if (g) u = r.getConstructor(t, e, n, a), QE.enable(); else if (Wv(e, !0)) {
            var p = new u, m = p[a](o ? {} : -0, 1) !== p, S = Ws(function () {
                p.has(1)
            }), w = n3(function (f) {
                new l(f)
            }), d = !o && Ws(function () {
                for (var f = new l, h = 5; h--;) f[a](h, h);
                return !f.has(-0)
            });
            w || (u = t(function (f, h) {
                e3(f, s);
                var C = i3(new l, f, u);
                return r3(h) || JE(h, C[a], {that: C, AS_ENTRIES: n}), C
            }), u.prototype = s, s.constructor = u), (S || d) && (v("delete"), v("has"), n && v("get")), (d || m) && v(a), o && s.clear && delete s.clear
        }
        return c[e] = u, YE({global: !0, constructor: !0, forced: u !== l}, c), o3(u, e), o || r.setStrong(u, e, n), u
    }, Uv = Sm, a3 = hr, Wm = function (e, t, r) {
        return r.get && Uv(r.get, t, {getter: !0}), r.set && Uv(r.set, t, {setter: !0}), a3.f(e, t, r)
    }, l3 = jo, s3 = function (e, t, r) {
        for (var n in t) l3(e, n, t[n], r);
        return e
    }, u3 = Ao, c3 = Wm, d3 = Ot, f3 = Qt, Kv = d3("species"), v3 = function (e) {
        var t = u3(e);
        f3 && t && !t[Kv] && c3(t, Kv, {
            configurable: !0, get: function () {
                return this
            }
        })
    }, Gv = yd, p3 = Wm, Yv = s3, h3 = ft, m3 = Bm, g3 = Mo, y3 = Lo, w3 = Ed, _a = kd, S3 = v3, Zo = Qt, Xv = Nm.fastKey,
    Um = Xl, qv = Um.set, Us = Um.getterFor, Km = {
        getConstructor: function (e, t, r, n) {
            var o = e(function (c, v) {
                m3(c, a), qv(c, {
                    type: t,
                    index: Gv(null),
                    first: null,
                    last: null,
                    size: 0
                }), Zo || (c.size = 0), g3(v) || y3(v, c[n], {that: c, AS_ENTRIES: r})
            }), a = o.prototype, l = Us(t), s = function (c, v, g) {
                var p = l(c), m = u(c, v), S, w;
                return m ? m.value = g : (p.last = m = {
                    index: w = Xv(v, !0),
                    key: v,
                    value: g,
                    previous: S = p.last,
                    next: null,
                    removed: !1
                }, p.first || (p.first = m), S && (S.next = m), Zo ? p.size++ : c.size++, w !== "F" && (p.index[w] = m)), c
            }, u = function (c, v) {
                var g = l(c), p = Xv(v), m;
                if (p !== "F") return g.index[p];
                for (m = g.first; m; m = m.next) if (m.key === v) return m
            };
            return Yv(a, {
                clear: function () {
                    for (var v = this, g = l(v), p = g.first; p;) p.removed = !0, p.previous && (p.previous = p.previous.next = null), p = p.next;
                    g.first = g.last = null, g.index = Gv(null), Zo ? g.size = 0 : v.size = 0
                }, delete: function (c) {
                    var v = this, g = l(v), p = u(v, c);
                    if (p) {
                        var m = p.next, S = p.previous;
                        delete g.index[p.index], p.removed = !0, S && (S.next = m), m && (m.previous = S), g.first === p && (g.first = m), g.last === p && (g.last = S), Zo ? g.size-- : v.size--
                    }
                    return !!p
                }, forEach: function (v) {
                    for (var g = l(this), p = h3(v, arguments.length > 1 ? arguments[1] : void 0), m; m = m ? m.next : g.first;) for (p(m.value, m.key, this); m && m.removed;) m = m.previous
                }, has: function (v) {
                    return !!u(this, v)
                }
            }), Yv(a, r ? {
                get: function (v) {
                    var g = u(this, v);
                    return g && g.value
                }, set: function (v, g) {
                    return s(this, v === 0 ? 0 : v, g)
                }
            } : {
                add: function (v) {
                    return s(this, v = v === 0 ? 0 : v, v)
                }
            }), Zo && p3(a, "size", {
                configurable: !0, get: function () {
                    return l(this).size
                }
            }), o
        }, setStrong: function (e, t, r) {
            var n = t + " Iterator", o = Us(t), a = Us(n);
            w3(e, t, function (l, s) {
                qv(this, {type: n, target: l, state: o(l), kind: s, last: null})
            }, function () {
                for (var l = a(this), s = l.kind, u = l.last; u && u.removed;) u = u.previous;
                return !l.target || !(l.last = u = u ? u.next : l.state.first) ? (l.target = null, _a(void 0, !0)) : _a(s === "keys" ? u.key : s === "values" ? u.value : [u.key, u.value], !1)
            }, r ? "entries" : "values", !r, !0), S3(t)
        }
    }, C3 = Vm, b3 = Km;
C3("Map", function (e) {
    return function () {
        return e(this, arguments.length ? arguments[0] : void 0)
    }
}, b3);
var Ta = Re, Qo = Map.prototype,
    Mt = {Map, set: Ta(Qo.set), get: Ta(Qo.get), has: Ta(Qo.has), remove: Ta(Qo.delete), proto: Qo}, E3 = Z, k3 = Re,
    x3 = Jt, $3 = Ji, _3 = Lo, Jl = Mt, T3 = at, Gm = Jl.Map, O3 = Jl.has, P3 = Jl.get, M3 = Jl.set, R3 = k3([].push),
    A3 = T3(function () {
        return Gm.groupBy("ab", function (e) {
            return e
        }).get("a").length !== 1
    });
E3({target: "Map", stat: !0, forced: A3}, {
    groupBy: function (t, r) {
        $3(t), x3(r);
        var n = new Gm, o = 0;
        return _3(t, function (a) {
            var l = r(a, o++);
            O3(n, l) ? R3(P3(n, l), a) : M3(n, l, [a])
        }), n
    }
});
var I3 = Od, j3 = Ql, L3 = I3 ? {}.toString : function () {
    return "[object " + j3(this) + "]"
}, N3 = Od, D3 = jo, F3 = L3;
N3 || D3(Object.prototype, "toString", F3, {unsafe: !0});
var B3 = Ql, z3 = String, Md = function (e) {
        if (B3(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return z3(e)
    }, Rd = Re, H3 = Kl, V3 = Md, W3 = Ji, U3 = Rd("".charAt), Zv = Rd("".charCodeAt), K3 = Rd("".slice),
    Qv = function (e) {
        return function (t, r) {
            var n = V3(W3(t)), o = H3(r), a = n.length, l, s;
            return o < 0 || o >= a ? e ? "" : void 0 : (l = Zv(n, o), l < 55296 || l > 56319 || o + 1 === a || (s = Zv(n, o + 1)) < 56320 || s > 57343 ? e ? U3(n, o) : l : e ? K3(n, o, o + 2) : (l - 55296 << 10) + (s - 56320) + 65536)
        }
    }, G3 = {codeAt: Qv(!1), charAt: Qv(!0)}, Y3 = G3.charAt, X3 = Md, Ym = Xl, q3 = Ed, Jv = kd,
    Xm = "String Iterator", Z3 = Ym.set, Q3 = Ym.getterFor(Xm);
q3(String, "String", function (e) {
    Z3(this, {type: Xm, string: X3(e), index: 0})
}, function () {
    var t = Q3(this), r = t.string, n = t.index, o;
    return n >= r.length ? Jv(void 0, !0) : (o = Y3(r, n), t.index += o.length, Jv(o, !1))
});
var J3 = bt, qm = J3, ek = qm;
ek.Map;
var tk = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }, rk = fd, Ks = rk("span").classList, ep = Ks && Ks.constructor && Ks.constructor.prototype,
    nk = ep === Object.prototype ? void 0 : ep, tp = bt, Zm = tk, ok = nk, fi = Cb, rp = Yl, ik = Zl, ak = Ot,
    Gs = ak("iterator"), Ys = fi.values, Qm = function (e, t) {
        if (e) {
            if (e[Gs] !== Ys) try {
                rp(e, Gs, Ys)
            } catch {
                e[Gs] = Ys
            }
            if (ik(e, t, !0), Zm[t]) {
                for (var r in fi) if (e[r] !== fi[r]) try {
                    rp(e, r, fi[r])
                } catch {
                    e[r] = fi[r]
                }
            }
        }
    };
for (var Xs in Zm) Qm(tp[Xs] && tp[Xs].prototype, Xs);
Qm(ok, "DOMTokenList");
var lk = ft, sk = Zt, uk = cd, ck = Lo, Jm = function (e, t, r) {
    return function (o) {
        var a = uk(o), l = arguments.length, s = l > 1 ? arguments[1] : void 0, u = s !== void 0,
            c = u ? lk(s, l > 2 ? arguments[2] : void 0) : void 0, v = new e, g = 0;
        return ck(a, function (p) {
            var m = u ? c(p, g++) : p;
            r ? t(v, sk(m)[0], m[1]) : t(v, m)
        }), v
    }
}, dk = Z, np = Mt, fk = Jm;
dk({target: "Map", stat: !0, forced: !0}, {from: fk(np.Map, np.set, !0)});
var vk = Zt, eg = function (e, t, r) {
    return function () {
        for (var o = new e, a = arguments.length, l = 0; l < a; l++) {
            var s = arguments[l];
            r ? t(o, vk(s)[0], s[1]) : t(o, s)
        }
        return o
    }
}, pk = Z, op = Mt, hk = eg;
pk({target: "Map", stat: !0, forced: !0}, {of: hk(op.Map, op.set, !0)});
var mk = Mt.has, Et = function (e) {
    return mk(e), e
}, gk = Z, yk = Et, wk = Mt.remove;
gk({target: "Map", proto: !0, real: !0, forced: !0}, {
    deleteAll: function () {
        for (var t = yk(this), r = !0, n, o = 0, a = arguments.length; o < a; o++) n = wk(t, arguments[o]), r = r && n;
        return !!r
    }
});
var Sk = Z, Ck = Et, Ad = Mt, bk = Ad.get, Ek = Ad.has, ip = Ad.set;
Sk({target: "Map", proto: !0, real: !0, forced: !0}, {
    emplace: function (t, r) {
        var n = Ck(this), o, a;
        return Ek(n, t) ? (o = bk(n, t), "update" in r && (o = r.update(o, t, n), ip(n, t, o)), o) : (a = r.insert(t, n), ip(n, t, a), a)
    }
});
var kk = We, fn = function (e, t, r) {
        for (var n = r ? e : e.iterator, o = e.next, a, l; !(a = kk(o, n)).done;) if (l = t(a.value), l !== void 0) return l
    }, tg = Re, xk = fn, rg = Mt, $k = rg.Map, ng = rg.proto, _k = tg(ng.forEach), og = tg(ng.entries),
    Tk = og(new $k).next, mr = function (e, t, r) {
        return r ? xk({iterator: og(e), next: Tk}, function (n) {
            return t(n[1], n[0])
        }) : _k(e, t)
    }, Ok = Z, Pk = ft, Mk = Et, Rk = mr;
Ok({target: "Map", proto: !0, real: !0, forced: !0}, {
    every: function (t) {
        var r = Mk(this), n = Pk(t, arguments.length > 1 ? arguments[1] : void 0);
        return Rk(r, function (o, a) {
            if (!n(o, a, r)) return !1
        }, !0) !== !1
    }
});
var Ak = Z, Ik = ft, jk = Et, ig = Mt, Lk = mr, Nk = ig.Map, Dk = ig.set;
Ak({target: "Map", proto: !0, real: !0, forced: !0}, {
    filter: function (t) {
        var r = jk(this), n = Ik(t, arguments.length > 1 ? arguments[1] : void 0), o = new Nk;
        return Lk(r, function (a, l) {
            n(a, l, r) && Dk(o, l, a)
        }), o
    }
});
var Fk = Z, Bk = ft, zk = Et, Hk = mr;
Fk({target: "Map", proto: !0, real: !0, forced: !0}, {
    find: function (t) {
        var r = zk(this), n = Bk(t, arguments.length > 1 ? arguments[1] : void 0), o = Hk(r, function (a, l) {
            if (n(a, l, r)) return {value: a}
        }, !0);
        return o && o.value
    }
});
var Vk = Z, Wk = ft, Uk = Et, Kk = mr;
Vk({target: "Map", proto: !0, real: !0, forced: !0}, {
    findKey: function (t) {
        var r = Uk(this), n = Wk(t, arguments.length > 1 ? arguments[1] : void 0), o = Kk(r, function (a, l) {
            if (n(a, l, r)) return {key: l}
        }, !0);
        return o && o.key
    }
});
var Gk = function (e, t) {
    return e === t || e !== e && t !== t
}, Yk = Z, Xk = Gk, qk = Et, Zk = mr;
Yk({target: "Map", proto: !0, real: !0, forced: !0}, {
    includes: function (t) {
        return Zk(qk(this), function (r) {
            if (Xk(r, t)) return !0
        }, !0) === !0
    }
});
var Qk = Z, Jk = We, ex = Lo, tx = Fe, ap = Jt, rx = Mt.Map;
Qk({target: "Map", stat: !0, forced: !0}, {
    keyBy: function (t, r) {
        var n = tx(this) ? this : rx, o = new n;
        ap(r);
        var a = ap(o.set);
        return ex(t, function (l) {
            Jk(a, o, r(l), l)
        }), o
    }
});
var nx = Z, ox = Et, ix = mr;
nx({target: "Map", proto: !0, real: !0, forced: !0}, {
    keyOf: function (t) {
        var r = ix(ox(this), function (n, o) {
            if (n === t) return {key: o}
        }, !0);
        return r && r.key
    }
});
var ax = Z, lx = ft, sx = Et, ag = Mt, ux = mr, cx = ag.Map, dx = ag.set;
ax({target: "Map", proto: !0, real: !0, forced: !0}, {
    mapKeys: function (t) {
        var r = sx(this), n = lx(t, arguments.length > 1 ? arguments[1] : void 0), o = new cx;
        return ux(r, function (a, l) {
            dx(o, n(a, l, r), a)
        }), o
    }
});
var fx = Z, vx = ft, px = Et, lg = Mt, hx = mr, mx = lg.Map, gx = lg.set;
fx({target: "Map", proto: !0, real: !0, forced: !0}, {
    mapValues: function (t) {
        var r = px(this), n = vx(t, arguments.length > 1 ? arguments[1] : void 0), o = new mx;
        return hx(r, function (a, l) {
            gx(o, l, n(a, l, r))
        }), o
    }
});
var yx = Z, wx = Et, Sx = Lo, Cx = Mt.set;
yx({target: "Map", proto: !0, real: !0, arity: 1, forced: !0}, {
    merge: function (t) {
        for (var r = wx(this), n = arguments.length, o = 0; o < n;) Sx(arguments[o++], function (a, l) {
            Cx(r, a, l)
        }, {AS_ENTRIES: !0});
        return r
    }
});
var bx = Z, Ex = Jt, kx = Et, xx = mr, $x = TypeError;
bx({target: "Map", proto: !0, real: !0, forced: !0}, {
    reduce: function (t) {
        var r = kx(this), n = arguments.length < 2, o = n ? void 0 : arguments[1];
        if (Ex(t), xx(r, function (a, l) {
            n ? (n = !1, o = a) : o = t(o, a, l, r)
        }), n) throw new $x("Reduce of empty map with no initial value");
        return o
    }
});
var _x = Z, Tx = ft, Ox = Et, Px = mr;
_x({target: "Map", proto: !0, real: !0, forced: !0}, {
    some: function (t) {
        var r = Ox(this), n = Tx(t, arguments.length > 1 ? arguments[1] : void 0);
        return Px(r, function (o, a) {
            if (n(o, a, r)) return !0
        }, !0) === !0
    }
});
var Mx = Z, lp = Jt, Rx = Et, Id = Mt, Ax = TypeError, Ix = Id.get, jx = Id.has, Lx = Id.set;
Mx({target: "Map", proto: !0, real: !0, forced: !0}, {
    update: function (t, r) {
        var n = Rx(this), o = arguments.length;
        lp(r);
        var a = jx(n, t);
        if (!a && o < 3) throw new Ax("Updating absent value");
        var l = a ? Ix(n, t) : lp(o > 2 ? arguments[2] : void 0)(t, n);
        return Lx(n, t, r(l, t, n)), n
    }
});
var Oa = We, qs = Jt, Pa = Fe, Nx = Zt, Dx = TypeError, sg = function (t, r) {
    var n = Nx(this), o = qs(n.get), a = qs(n.has), l = qs(n.set), s = arguments.length > 2 ? arguments[2] : void 0, u;
    if (!Pa(r) && !Pa(s)) throw new Dx("At least one callback required");
    return Oa(a, n, t) ? (u = Oa(o, n, t), Pa(r) && (u = r(u), Oa(l, n, t, u))) : Pa(s) && (u = s(), Oa(l, n, t, u)), u
}, Fx = Z, Bx = sg;
Fx({target: "Map", proto: !0, real: !0, forced: !0}, {upsert: Bx});
var zx = Z, Hx = sg;
zx({target: "Map", proto: !0, real: !0, name: "upsert", forced: !0}, {updateOrInsert: Hx});
var Vx = Vm, Wx = Km;
Vx("Set", function (e) {
    return function () {
        return e(this, arguments.length ? arguments[0] : void 0)
    }
}, Wx);
var Zs = Re, Ma = Set.prototype, lt = {Set, add: Zs(Ma.add), has: Zs(Ma.has), remove: Zs(Ma.delete), proto: Ma},
    Ux = lt.has, st = function (e) {
        return Ux(e), e
    }, ug = Re, Kx = fn, cg = lt, Gx = cg.Set, dg = cg.proto, Yx = ug(dg.forEach), fg = ug(dg.keys), Xx = fg(new Gx).next,
    zt = function (e, t, r) {
        return r ? Kx({iterator: fg(e), next: Xx}, t) : Yx(e, t)
    }, vg = lt, qx = zt, Zx = vg.Set, Qx = vg.add, jd = function (e) {
        var t = new Zx;
        return qx(e, function (r) {
            Qx(t, r)
        }), t
    }, Jx = $m, e$ = lt, ta = Jx(e$.proto, "size", "get") || function (e) {
        return e.size
    }, t$ = function (e) {
        return {iterator: e, next: e.next, done: !1}
    }, sp = Jt, pg = Zt, up = We, r$ = Kl, n$ = t$, cp = "Invalid size", o$ = RangeError, i$ = TypeError, a$ = Math.max,
    hg = function (e, t) {
        this.set = e, this.size = a$(t, 0), this.has = sp(e.has), this.keys = sp(e.keys)
    };
hg.prototype = {
    getIterator: function () {
        return n$(pg(up(this.keys, this.set)))
    }, includes: function (e) {
        return up(this.has, this.set, e)
    }
};
var Dn = function (e) {
    pg(e);
    var t = +e.size;
    if (t !== t) throw new i$(cp);
    var r = r$(t);
    if (r < 0) throw new o$(cp);
    return new hg(e, r)
}, l$ = st, mg = lt, s$ = jd, u$ = ta, c$ = Dn, d$ = zt, f$ = fn, v$ = mg.has, dp = mg.remove, gg = function (t) {
    var r = l$(this), n = c$(t), o = s$(r);
    return u$(r) <= n.size ? d$(r, function (a) {
        n.includes(a) && dp(o, a)
    }) : f$(n.getIterator(), function (a) {
        v$(r, a) && dp(o, a)
    }), o
}, p$ = Ao, fp = function (e) {
    return {
        size: e, has: function () {
            return !1
        }, keys: function () {
            return {
                next: function () {
                    return {done: !0}
                }
            }
        }
    }
}, Fn = function (e) {
    var t = p$("Set");
    try {
        new t()[e](fp(0));
        try {
            return new t()[e](fp(-1)), !1
        } catch {
            return !0
        }
    } catch {
        return !1
    }
}, h$ = Z, m$ = gg, g$ = Fn;
h$({target: "Set", proto: !0, real: !0, forced: !g$("difference")}, {difference: m$});
var y$ = st, Ld = lt, w$ = ta, S$ = Dn, C$ = zt, b$ = fn, E$ = Ld.Set, vp = Ld.add, k$ = Ld.has, yg = function (t) {
    var r = y$(this), n = S$(t), o = new E$;
    return w$(r) > n.size ? b$(n.getIterator(), function (a) {
        k$(r, a) && vp(o, a)
    }) : C$(r, function (a) {
        n.includes(a) && vp(o, a)
    }), o
}, x$ = Z, $$ = at, _$ = yg, T$ = Fn, O$ = !T$("intersection") || $$(function () {
    return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2"
});
x$({target: "Set", proto: !0, real: !0, forced: O$}, {intersection: _$});
var P$ = st, M$ = lt.has, R$ = ta, A$ = Dn, I$ = zt, j$ = fn, L$ = Pd, wg = function (t) {
    var r = P$(this), n = A$(t);
    if (R$(r) <= n.size) return I$(r, function (a) {
        if (n.includes(a)) return !1
    }, !0) !== !1;
    var o = n.getIterator();
    return j$(o, function (a) {
        if (M$(r, a)) return L$(o, "normal", !1)
    }) !== !1
}, N$ = Z, D$ = wg, F$ = Fn;
N$({target: "Set", proto: !0, real: !0, forced: !F$("isDisjointFrom")}, {isDisjointFrom: D$});
var B$ = st, z$ = ta, H$ = zt, V$ = Dn, Sg = function (t) {
    var r = B$(this), n = V$(t);
    return z$(r) > n.size ? !1 : H$(r, function (o) {
        if (!n.includes(o)) return !1
    }, !0) !== !1
}, W$ = Z, U$ = Sg, K$ = Fn;
W$({target: "Set", proto: !0, real: !0, forced: !K$("isSubsetOf")}, {isSubsetOf: U$});
var G$ = st, Y$ = lt.has, X$ = ta, q$ = Dn, Z$ = fn, Q$ = Pd, Cg = function (t) {
    var r = G$(this), n = q$(t);
    if (X$(r) < n.size) return !1;
    var o = n.getIterator();
    return Z$(o, function (a) {
        if (!Y$(r, a)) return Q$(o, "normal", !1)
    }) !== !1
}, J$ = Z, e_ = Cg, t_ = Fn;
J$({target: "Set", proto: !0, real: !0, forced: !t_("isSupersetOf")}, {isSupersetOf: e_});
var r_ = st, Nd = lt, n_ = jd, o_ = Dn, i_ = fn, a_ = Nd.add, l_ = Nd.has, s_ = Nd.remove, bg = function (t) {
    var r = r_(this), n = o_(t).getIterator(), o = n_(r);
    return i_(n, function (a) {
        l_(r, a) ? s_(o, a) : a_(o, a)
    }), o
}, u_ = Z, c_ = bg, d_ = Fn;
u_({target: "Set", proto: !0, real: !0, forced: !d_("symmetricDifference")}, {symmetricDifference: c_});
var f_ = st, v_ = lt.add, p_ = jd, h_ = Dn, m_ = fn, Eg = function (t) {
    var r = f_(this), n = h_(t).getIterator(), o = p_(r);
    return m_(n, function (a) {
        v_(o, a)
    }), o
}, g_ = Z, y_ = Eg, w_ = Fn;
g_({target: "Set", proto: !0, real: !0, forced: !w_("union")}, {union: y_});
var S_ = qm;
S_.Set;
var C_ = Z, pp = lt, b_ = Jm;
C_({target: "Set", stat: !0, forced: !0}, {from: b_(pp.Set, pp.add, !1)});
var E_ = Z, hp = lt, k_ = eg;
E_({target: "Set", stat: !0, forced: !0}, {of: k_(hp.Set, hp.add, !1)});
var x_ = Z, $_ = st, __ = lt.add;
x_({target: "Set", proto: !0, real: !0, forced: !0}, {
    addAll: function () {
        for (var t = $_(this), r = 0, n = arguments.length; r < n; r++) __(t, arguments[r]);
        return t
    }
});
var T_ = Z, O_ = st, P_ = lt.remove;
T_({target: "Set", proto: !0, real: !0, forced: !0}, {
    deleteAll: function () {
        for (var t = O_(this), r = !0, n, o = 0, a = arguments.length; o < a; o++) n = P_(t, arguments[o]), r = r && n;
        return !!r
    }
});
var M_ = Z, R_ = ft, A_ = st, I_ = zt;
M_({target: "Set", proto: !0, real: !0, forced: !0}, {
    every: function (t) {
        var r = A_(this), n = R_(t, arguments.length > 1 ? arguments[1] : void 0);
        return I_(r, function (o) {
            if (!n(o, o, r)) return !1
        }, !0) !== !1
    }
});
var j_ = Ql, L_ = qt, N_ = Mo, D_ = Ot, F_ = Io, B_ = D_("iterator"), z_ = Object, H_ = function (e) {
    if (N_(e)) return !1;
    var t = z_(e);
    return t[B_] !== void 0 || "@@iterator" in t || L_(F_, j_(t))
}, V_ = Ao, mp = Fe, W_ = H_, U_ = Pt, K_ = V_("Set"), G_ = function (e) {
    return U_(e) && typeof e.size == "number" && mp(e.has) && mp(e.keys)
}, Bn = function (e) {
    return G_(e) ? e : W_(e) ? new K_(e) : e
}, Y_ = Z, X_ = We, q_ = Bn, Z_ = gg;
Y_({target: "Set", proto: !0, real: !0, forced: !0}, {
    difference: function (t) {
        return X_(Z_, this, q_(t))
    }
});
var Q_ = Z, J_ = ft, eT = st, kg = lt, tT = zt, rT = kg.Set, nT = kg.add;
Q_({target: "Set", proto: !0, real: !0, forced: !0}, {
    filter: function (t) {
        var r = eT(this), n = J_(t, arguments.length > 1 ? arguments[1] : void 0), o = new rT;
        return tT(r, function (a) {
            n(a, a, r) && nT(o, a)
        }), o
    }
});
var oT = Z, iT = ft, aT = st, lT = zt;
oT({target: "Set", proto: !0, real: !0, forced: !0}, {
    find: function (t) {
        var r = aT(this), n = iT(t, arguments.length > 1 ? arguments[1] : void 0), o = lT(r, function (a) {
            if (n(a, a, r)) return {value: a}
        }, !0);
        return o && o.value
    }
});
var sT = Z, uT = We, cT = Bn, dT = yg;
sT({target: "Set", proto: !0, real: !0, forced: !0}, {
    intersection: function (t) {
        return uT(dT, this, cT(t))
    }
});
var fT = Z, vT = We, pT = Bn, hT = wg;
fT({target: "Set", proto: !0, real: !0, forced: !0}, {
    isDisjointFrom: function (t) {
        return vT(hT, this, pT(t))
    }
});
var mT = Z, gT = We, yT = Bn, wT = Sg;
mT({target: "Set", proto: !0, real: !0, forced: !0}, {
    isSubsetOf: function (t) {
        return gT(wT, this, yT(t))
    }
});
var ST = Z, CT = We, bT = Bn, ET = Cg;
ST({target: "Set", proto: !0, real: !0, forced: !0}, {
    isSupersetOf: function (t) {
        return CT(ET, this, bT(t))
    }
});
var kT = Z, xg = Re, xT = st, $T = zt, _T = Md, TT = xg([].join), OT = xg([].push);
kT({target: "Set", proto: !0, real: !0, forced: !0}, {
    join: function (t) {
        var r = xT(this), n = t === void 0 ? "," : _T(t), o = [];
        return $T(r, function (a) {
            OT(o, a)
        }), TT(o, n)
    }
});
var PT = Z, MT = ft, RT = st, $g = lt, AT = zt, IT = $g.Set, jT = $g.add;
PT({target: "Set", proto: !0, real: !0, forced: !0}, {
    map: function (t) {
        var r = RT(this), n = MT(t, arguments.length > 1 ? arguments[1] : void 0), o = new IT;
        return AT(r, function (a) {
            jT(o, n(a, a, r))
        }), o
    }
});
var LT = Z, NT = Jt, DT = st, FT = zt, BT = TypeError;
LT({target: "Set", proto: !0, real: !0, forced: !0}, {
    reduce: function (t) {
        var r = DT(this), n = arguments.length < 2, o = n ? void 0 : arguments[1];
        if (NT(t), FT(r, function (a) {
            n ? (n = !1, o = a) : o = t(o, a, a, r)
        }), n) throw new BT("Reduce of empty set with no initial value");
        return o
    }
});
var zT = Z, HT = ft, VT = st, WT = zt;
zT({target: "Set", proto: !0, real: !0, forced: !0}, {
    some: function (t) {
        var r = VT(this), n = HT(t, arguments.length > 1 ? arguments[1] : void 0);
        return WT(r, function (o) {
            if (n(o, o, r)) return !0
        }, !0) === !0
    }
});
var UT = Z, KT = We, GT = Bn, YT = bg;
UT({target: "Set", proto: !0, real: !0, forced: !0}, {
    symmetricDifference: function (t) {
        return KT(YT, this, GT(t))
    }
});
var XT = Z, qT = We, ZT = Bn, QT = Eg;
XT({target: "Set", proto: !0, real: !0, forced: !0}, {
    union: function (t) {
        return qT(QT, this, ZT(t))
    }
});
var _g = {exports: {}}, Ht = {}, Tg = {exports: {}}, Og = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    var t, r, n, o;
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function () {
            return a.now()
        }
    } else {
        var l = Date, s = l.now();
        e.unstable_now = function () {
            return l.now() - s
        }
    }
    if (typeof window > "u" || typeof MessageChannel != "function") {
        var u = null, c = null, v = function () {
            if (u !== null) try {
                var A = e.unstable_now();
                u(!0, A), u = null
            } catch (V) {
                throw setTimeout(v, 0), V
            }
        };
        t = function (A) {
            u !== null ? setTimeout(t, 0, A) : (u = A, setTimeout(v, 0))
        }, r = function (A, V) {
            c = setTimeout(A, V)
        }, n = function () {
            clearTimeout(c)
        }, e.unstable_shouldYield = function () {
            return !1
        }, o = e.unstable_forceFrameRate = function () {
        }
    } else {
        var g = window.setTimeout, p = window.clearTimeout;
        if (typeof console < "u") {
            var m = window.cancelAnimationFrame;
            typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof m != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
        }
        var S = !1, w = null, d = -1, f = 5, h = 0;
        e.unstable_shouldYield = function () {
            return e.unstable_now() >= h
        }, o = function () {
        }, e.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : f = 0 < A ? Math.floor(1e3 / A) : 5
        };
        var C = new MessageChannel, k = C.port2;
        C.port1.onmessage = function () {
            if (w !== null) {
                var A = e.unstable_now();
                h = A + f;
                try {
                    w(!0, A) ? k.postMessage(null) : (S = !1, w = null)
                } catch (V) {
                    throw k.postMessage(null), V
                }
            } else S = !1
        }, t = function (A) {
            w = A, S || (S = !0, k.postMessage(null))
        }, r = function (A, V) {
            d = g(function () {
                A(e.unstable_now())
            }, V)
        }, n = function () {
            p(d), d = -1
        }
    }

    function $(A, V) {
        var K = A.length;
        A.push(V);
        e:for (; ;) {
            var ie = K - 1 >>> 1, O = A[ie];
            if (O !== void 0 && 0 < R(O, V)) A[ie] = V, A[K] = O, K = ie; else break e
        }
    }

    function x(A) {
        return A = A[0], A === void 0 ? null : A
    }

    function _(A) {
        var V = A[0];
        if (V !== void 0) {
            var K = A.pop();
            if (K !== V) {
                A[0] = K;
                e:for (var ie = 0, O = A.length; ie < O;) {
                    var P = 2 * (ie + 1) - 1, L = A[P], N = P + 1, T = A[N];
                    if (L !== void 0 && 0 > R(L, K)) T !== void 0 && 0 > R(T, L) ? (A[ie] = T, A[N] = K, ie = N) : (A[ie] = L, A[P] = K, ie = P); else if (T !== void 0 && 0 > R(T, K)) A[ie] = T, A[N] = K, ie = N; else break e
                }
            }
            return V
        }
        return null
    }

    function R(A, V) {
        var K = A.sortIndex - V.sortIndex;
        return K !== 0 ? K : A.id - V.id
    }

    var M = [], j = [], re = 1, U = null, B = 3, Y = !1, Q = !1, ne = !1;

    function ce(A) {
        for (var V = x(j); V !== null;) {
            if (V.callback === null) _(j); else if (V.startTime <= A) _(j), V.sortIndex = V.expirationTime, $(M, V); else break;
            V = x(j)
        }
    }

    function _e(A) {
        if (ne = !1, ce(A), !Q) if (x(M) !== null) Q = !0, t(Be); else {
            var V = x(j);
            V !== null && r(_e, V.startTime - A)
        }
    }

    function Be(A, V) {
        Q = !1, ne && (ne = !1, n()), Y = !0;
        var K = B;
        try {
            for (ce(V), U = x(M); U !== null && (!(U.expirationTime > V) || A && !e.unstable_shouldYield());) {
                var ie = U.callback;
                if (typeof ie == "function") {
                    U.callback = null, B = U.priorityLevel;
                    var O = ie(U.expirationTime <= V);
                    V = e.unstable_now(), typeof O == "function" ? U.callback = O : U === x(M) && _(M), ce(V)
                } else _(M);
                U = x(M)
            }
            if (U !== null) var P = !0; else {
                var L = x(j);
                L !== null && r(_e, L.startTime - V), P = !1
            }
            return P
        } finally {
            U = null, B = K, Y = !1
        }
    }

    var ke = o;
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (A) {
        A.callback = null
    }, e.unstable_continueExecution = function () {
        Q || Y || (Q = !0, t(Be))
    }, e.unstable_getCurrentPriorityLevel = function () {
        return B
    }, e.unstable_getFirstCallbackNode = function () {
        return x(M)
    }, e.unstable_next = function (A) {
        switch (B) {
            case 1:
            case 2:
            case 3:
                var V = 3;
                break;
            default:
                V = B
        }
        var K = B;
        B = V;
        try {
            return A()
        } finally {
            B = K
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = ke, e.unstable_runWithPriority = function (A, V) {
        switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
        }
        var K = B;
        B = A;
        try {
            return V()
        } finally {
            B = K
        }
    }, e.unstable_scheduleCallback = function (A, V, K) {
        var ie = e.unstable_now();
        switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ie + K : ie) : K = ie, A) {
            case 1:
                var O = -1;
                break;
            case 2:
                O = 250;
                break;
            case 5:
                O = 1073741823;
                break;
            case 4:
                O = 1e4;
                break;
            default:
                O = 5e3
        }
        return O = K + O, A = {
            id: re++,
            callback: V,
            priorityLevel: A,
            startTime: K,
            expirationTime: O,
            sortIndex: -1
        }, K > ie ? (A.sortIndex = K, $(j, A), x(M) === null && A === x(j) && (ne ? n() : ne = !0, r(_e, K - ie))) : (A.sortIndex = O, $(M, A), Q || Y || (Q = !0, t(Be))), A
    }, e.unstable_wrapCallback = function (A) {
        var V = B;
        return function () {
            var K = B;
            B = V;
            try {
                return A.apply(this, arguments)
            } finally {
                B = K
            }
        }
    }
})(Og);
Tg.exports = Og;
var JT = Tg.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es = E, Ee = R0, Ve = JT;

function I(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

if (!es) throw Error(I(227));
var Pg = new Set, Ai = {};

function zn(e, t) {
    ko(e, t), ko(e + "Capture", t)
}

function ko(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++) Pg.add(t[e])
}

var Pr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    eO = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    gp = Object.prototype.hasOwnProperty, yp = {}, wp = {};

function tO(e) {
    return gp.call(wp, e) ? !0 : gp.call(yp, e) ? !1 : eO.test(e) ? wp[e] = !0 : (yp[e] = !0, !1)
}

function rO(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function nO(e, t, r, n) {
    if (t === null || typeof t > "u" || rO(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function vt(e, t, r, n, o, a, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = l
}

var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Ze[e] = new vt(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Ze[t] = new vt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ze[e] = new vt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ze[e] = new vt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Ze[e] = new vt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ze[e] = new vt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Ze[e] = new vt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ze[e] = new vt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Ze[e] = new vt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Dd = /[\-:]([a-z])/g;

function Fd(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Dd, Fd);
    Ze[t] = new vt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Dd, Fd);
    Ze[t] = new vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Dd, Fd);
    Ze[t] = new vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ze[e] = new vt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ze.xlinkHref = new vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ze[e] = new vt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Bd(e, t, r, n) {
    var o = Ze.hasOwnProperty(t) ? Ze[t] : null,
        a = o !== null ? o.type === 0 : n ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
    a || (nO(t, r, o, n) && (r = null), n || o === null ? tO(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}

var Hn = es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vi = 60103, bn = 60106, Hr = 60107, zd = 60108,
    Si = 60114, Hd = 60109, Vd = 60110, ts = 60112, Ci = 60113, pl = 60120, rs = 60115, Wd = 60116, Ud = 60121,
    Kd = 60128, Mg = 60129, Gd = 60130, rc = 60131;
if (typeof Symbol == "function" && Symbol.for) {
    var ze = Symbol.for;
    vi = ze("react.element"), bn = ze("react.portal"), Hr = ze("react.fragment"), zd = ze("react.strict_mode"), Si = ze("react.profiler"), Hd = ze("react.provider"), Vd = ze("react.context"), ts = ze("react.forward_ref"), Ci = ze("react.suspense"), pl = ze("react.suspense_list"), rs = ze("react.memo"), Wd = ze("react.lazy"), Ud = ze("react.block"), ze("react.scope"), Kd = ze("react.opaque.id"), Mg = ze("react.debug_trace_mode"), Gd = ze("react.offscreen"), rc = ze("react.legacy_hidden")
}
var Sp = typeof Symbol == "function" && Symbol.iterator;

function Jo(e) {
    return e === null || typeof e != "object" ? null : (e = Sp && e[Sp] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Qs;

function pi(e) {
    if (Qs === void 0) try {
        throw Error()
    } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Qs = t && t[1] || ""
    }
    return `
` + Qs + e
}

var Js = !1;

function Ra(e, t) {
    if (!e || Js) return "";
    Js = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var n = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                n = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), a = n.stack.split(`
`), l = o.length - 1, s = a.length - 1; 1 <= l && 0 <= s && o[l] !== a[s];) s--;
            for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== a[s]) {
                if (l !== 1 || s !== 1) do if (l--, s--, 0 > s || o[l] !== a[s]) return `
` + o[l].replace(" at new ", " at "); while (1 <= l && 0 <= s);
                break
            }
        }
    } finally {
        Js = !1, Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? pi(e) : ""
}

function oO(e) {
    switch (e.tag) {
        case 5:
            return pi(e.type);
        case 16:
            return pi("Lazy");
        case 13:
            return pi("Suspense");
        case 19:
            return pi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ra(e.type, !1), e;
        case 11:
            return e = Ra(e.type.render, !1), e;
        case 22:
            return e = Ra(e.type._render, !1), e;
        case 1:
            return e = Ra(e.type, !0), e;
        default:
            return ""
    }
}

function po(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Hr:
            return "Fragment";
        case bn:
            return "Portal";
        case Si:
            return "Profiler";
        case zd:
            return "StrictMode";
        case Ci:
            return "Suspense";
        case pl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Vd:
            return (e.displayName || "Context") + ".Consumer";
        case Hd:
            return (e._context.displayName || "Context") + ".Provider";
        case ts:
            var t = e.render;
            return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case rs:
            return po(e.type);
        case Ud:
            return po(e._render);
        case Wd:
            t = e._payload, e = e._init;
            try {
                return po(e(t))
            } catch {
            }
    }
    return null
}

function rn(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"object":
        case"string":
        case"undefined":
            return e;
        default:
            return ""
    }
}

function Rg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function iO(e) {
    var t = Rg(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get, a = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return o.call(this)
            }, set: function (l) {
                n = "" + l, a.call(this, l)
            }
        }), Object.defineProperty(e, t, {enumerable: r.enumerable}), {
            getValue: function () {
                return n
            }, setValue: function (l) {
                n = "" + l
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Aa(e) {
    e._valueTracker || (e._valueTracker = iO(e))
}

function Ag(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), n = "";
    return e && (n = Rg(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
}

function hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function nc(e, t) {
    var r = t.checked;
    return Ee({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}

function Cp(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
    r = rn(t.value != null ? t.value : r), e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Ig(e, t) {
    t = t.checked, t != null && Bd(e, "checked", t, !1)
}

function oc(e, t) {
    Ig(e, t);
    var r = rn(t.value), n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r); else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ic(e, t.type, r) : t.hasOwnProperty("defaultValue") && ic(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function bp(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function ic(e, t, r) {
    (t !== "number" || hl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}

function aO(e) {
    var t = "";
    return es.Children.forEach(e, function (r) {
        r != null && (t += r)
    }), t
}

function ac(e, t) {
    return e = Ee({children: void 0}, t), (t = aO(t.children)) && (e.children = t), e
}

function ho(e, t, r, n) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++) o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + rn(r), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0, n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function lc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
    return Ee({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function Ep(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
            if (t != null) throw Error(I(92));
            if (Array.isArray(r)) {
                if (!(1 >= r.length)) throw Error(I(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""), r = t
    }
    e._wrapperState = {initialValue: rn(r)}
}

function jg(e, t) {
    var r = rn(t.value), n = rn(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
}

function kp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

var sc = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
};

function Lg(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function uc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Lg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Ia, Ng = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== sc.svg || "innerHTML" in e) e.innerHTML = t; else {
        for (Ia = Ia || document.createElement("div"), Ia.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ia.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Ii(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var bi = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, lO = ["Webkit", "ms", "Moz", "O"];
Object.keys(bi).forEach(function (e) {
    lO.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), bi[t] = bi[e]
    })
});

function Dg(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || bi.hasOwnProperty(e) && bi[e] ? ("" + t).trim() : t + "px"
}

function Fg(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
        var n = r.indexOf("--") === 0, o = Dg(r, t[r], n);
        r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o
    }
}

var sO = Ee({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function cc(e, t) {
    if (t) {
        if (sO[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(I(60));
            if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(I(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(I(62))
    }
}

function dc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

function Yd(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var fc = null, mo = null, go = null;

function xp(e) {
    if (e = na(e)) {
        if (typeof fc != "function") throw Error(I(280));
        var t = e.stateNode;
        t && (t = ss(t), fc(e.stateNode, e.type, t))
    }
}

function Bg(e) {
    mo ? go ? go.push(e) : go = [e] : mo = e
}

function zg() {
    if (mo) {
        var e = mo, t = go;
        if (go = mo = null, xp(e), t) for (e = 0; e < t.length; e++) xp(t[e])
    }
}

function Xd(e, t) {
    return e(t)
}

function Hg(e, t, r, n, o) {
    return e(t, r, n, o)
}

function qd() {
}

var Vg = Xd, En = !1, eu = !1;

function Zd() {
    (mo !== null || go !== null) && (qd(), zg())
}

function uO(e, t, r) {
    if (eu) return e(t, r);
    eu = !0;
    try {
        return Vg(e, t, r)
    } finally {
        eu = !1, Zd()
    }
}

function ji(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = ss(r);
    if (n === null) return null;
    r = n[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(I(231, t, typeof r));
    return r
}

var vc = !1;
if (Pr) try {
    var ei = {};
    Object.defineProperty(ei, "passive", {
        get: function () {
            vc = !0
        }
    }), window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei)
} catch {
    vc = !1
}

function cO(e, t, r, n, o, a, l, s, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, c)
    } catch (v) {
        this.onError(v)
    }
}

var Ei = !1, ml = null, gl = !1, pc = null, dO = {
    onError: function (e) {
        Ei = !0, ml = e
    }
};

function fO(e, t, r, n, o, a, l, s, u) {
    Ei = !1, ml = null, cO.apply(dO, arguments)
}

function vO(e, t, r, n, o, a, l, s, u) {
    if (fO.apply(this, arguments), Ei) {
        if (Ei) {
            var c = ml;
            Ei = !1, ml = null
        } else throw Error(I(198));
        gl || (gl = !0, pc = c)
    }
}

function Vn(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 1026 && (r = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? r : null
}

function Wg(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function $p(e) {
    if (Vn(e) !== e) throw Error(I(188))
}

function pO(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Vn(e), t === null) throw Error(I(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ;) {
        var o = r.return;
        if (o === null) break;
        var a = o.alternate;
        if (a === null) {
            if (n = o.return, n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === a.child) {
            for (a = o.child; a;) {
                if (a === r) return $p(o), e;
                if (a === n) return $p(o), t;
                a = a.sibling
            }
            throw Error(I(188))
        }
        if (r.return !== n.return) r = o, n = a; else {
            for (var l = !1, s = o.child; s;) {
                if (s === r) {
                    l = !0, r = o, n = a;
                    break
                }
                if (s === n) {
                    l = !0, n = o, r = a;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = a.child; s;) {
                    if (s === r) {
                        l = !0, r = a, n = o;
                        break
                    }
                    if (s === n) {
                        l = !0, n = a, r = o;
                        break
                    }
                    s = s.sibling
                }
                if (!l) throw Error(I(189))
            }
        }
        if (r.alternate !== n) throw Error(I(190))
    }
    if (r.tag !== 3) throw Error(I(188));
    return r.stateNode.current === r ? e : t
}

function Ug(e) {
    if (e = pO(e), !e) return null;
    for (var t = e; ;) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child) t.child.return = t, t = t.child; else {
            if (t === e) break;
            for (; !t.sibling;) {
                if (!t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return null
}

function _p(e, t) {
    for (var r = e.alternate; t !== null;) {
        if (t === e || t === r) return !0;
        t = t.return
    }
    return !1
}

var Kg, Qd, Gg, Yg, hc = !1, cr = [], Yr = null, Xr = null, qr = null, Li = new Map, Ni = new Map, ti = [],
    Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function mc(e, t, r, n, o) {
    return {blockedOn: e, domEventName: t, eventSystemFlags: r | 16, nativeEvent: o, targetContainers: [n]}
}

function Op(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Yr = null;
            break;
        case"dragenter":
        case"dragleave":
            Xr = null;
            break;
        case"mouseover":
        case"mouseout":
            qr = null;
            break;
        case"pointerover":
        case"pointerout":
            Li.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Ni.delete(t.pointerId)
    }
}

function ri(e, t, r, n, o, a) {
    return e === null || e.nativeEvent !== a ? (e = mc(t, r, n, o, a), t !== null && (t = na(t), t !== null && Qd(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function hO(e, t, r, n, o) {
    switch (t) {
        case"focusin":
            return Yr = ri(Yr, e, t, r, n, o), !0;
        case"dragenter":
            return Xr = ri(Xr, e, t, r, n, o), !0;
        case"mouseover":
            return qr = ri(qr, e, t, r, n, o), !0;
        case"pointerover":
            var a = o.pointerId;
            return Li.set(a, ri(Li.get(a) || null, e, t, r, n, o)), !0;
        case"gotpointercapture":
            return a = o.pointerId, Ni.set(a, ri(Ni.get(a) || null, e, t, r, n, o)), !0
    }
    return !1
}

function mO(e) {
    var t = kn(e.target);
    if (t !== null) {
        var r = Vn(t);
        if (r !== null) {
            if (t = r.tag, t === 13) {
                if (t = Wg(r), t !== null) {
                    e.blockedOn = t, Yg(e.lanePriority, function () {
                        Ve.unstable_runWithPriority(e.priority, function () {
                            Gg(r)
                        })
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.hydrate) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ja(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var r = rf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r !== null) return t = na(r), t !== null && Qd(t), e.blockedOn = r, !1;
        t.shift()
    }
    return !0
}

function Pp(e, t, r) {
    Ja(e) && r.delete(t)
}

function gO() {
    for (hc = !1; 0 < cr.length;) {
        var e = cr[0];
        if (e.blockedOn !== null) {
            e = na(e.blockedOn), e !== null && Kg(e);
            break
        }
        for (var t = e.targetContainers; 0 < t.length;) {
            var r = rf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (r !== null) {
                e.blockedOn = r;
                break
            }
            t.shift()
        }
        e.blockedOn === null && cr.shift()
    }
    Yr !== null && Ja(Yr) && (Yr = null), Xr !== null && Ja(Xr) && (Xr = null), qr !== null && Ja(qr) && (qr = null), Li.forEach(Pp), Ni.forEach(Pp)
}

function ni(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hc || (hc = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, gO)))
}

function Xg(e) {
    function t(o) {
        return ni(o, e)
    }

    if (0 < cr.length) {
        ni(cr[0], e);
        for (var r = 1; r < cr.length; r++) {
            var n = cr[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Yr !== null && ni(Yr, e), Xr !== null && ni(Xr, e), qr !== null && ni(qr, e), Li.forEach(t), Ni.forEach(t), r = 0; r < ti.length; r++) n = ti[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < ti.length && (r = ti[0], r.blockedOn === null);) mO(r), r.blockedOn === null && ti.shift()
}

function ja(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
}

var oo = {
    animationend: ja("Animation", "AnimationEnd"),
    animationiteration: ja("Animation", "AnimationIteration"),
    animationstart: ja("Animation", "AnimationStart"),
    transitionend: ja("Transition", "TransitionEnd")
}, tu = {}, qg = {};
Pr && (qg = document.createElement("div").style, "AnimationEvent" in window || (delete oo.animationend.animation, delete oo.animationiteration.animation, delete oo.animationstart.animation), "TransitionEvent" in window || delete oo.transitionend.transition);

function ns(e) {
    if (tu[e]) return tu[e];
    if (!oo[e]) return e;
    var t = oo[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in qg) return tu[e] = t[r];
    return e
}

var Zg = ns("animationend"), Qg = ns("animationiteration"), Jg = ns("animationstart"), ey = ns("transitionend"),
    ty = new Map, Jd = new Map,
    yO = ["abort", "abort", Zg, "animationEnd", Qg, "animationIteration", Jg, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", ey, "transitionEnd", "waiting", "waiting"];

function ef(e, t) {
    for (var r = 0; r < e.length; r += 2) {
        var n = e[r], o = e[r + 1];
        o = "on" + (o[0].toUpperCase() + o.slice(1)), Jd.set(n, t), ty.set(n, o), zn(o, [n])
    }
}

var wO = Ve.unstable_now;
wO();
var ge = 8;

function to(e) {
    if (1 & e) return ge = 15, 1;
    if (2 & e) return ge = 14, 2;
    if (4 & e) return ge = 13, 4;
    var t = 24 & e;
    return t !== 0 ? (ge = 12, t) : e & 32 ? (ge = 11, 32) : (t = 192 & e, t !== 0 ? (ge = 10, t) : e & 256 ? (ge = 9, 256) : (t = 3584 & e, t !== 0 ? (ge = 8, t) : e & 4096 ? (ge = 7, 4096) : (t = 4186112 & e, t !== 0 ? (ge = 6, t) : (t = 62914560 & e, t !== 0 ? (ge = 5, t) : e & 67108864 ? (ge = 4, 67108864) : e & 134217728 ? (ge = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (ge = 2, t) : 1073741824 & e ? (ge = 1, 1073741824) : (ge = 8, e))))))
}

function SO(e) {
    switch (e) {
        case 99:
            return 15;
        case 98:
            return 10;
        case 97:
        case 96:
            return 8;
        case 95:
            return 2;
        default:
            return 0
    }
}

function CO(e) {
    switch (e) {
        case 15:
        case 14:
            return 99;
        case 13:
        case 12:
        case 11:
        case 10:
            return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
            return 97;
        case 3:
        case 2:
        case 1:
            return 95;
        case 0:
            return 90;
        default:
            throw Error(I(358, e))
    }
}

function Di(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return ge = 0;
    var n = 0, o = 0, a = e.expiredLanes, l = e.suspendedLanes, s = e.pingedLanes;
    if (a !== 0) n = a, o = ge = 15; else if (a = r & 134217727, a !== 0) {
        var u = a & ~l;
        u !== 0 ? (n = to(u), o = ge) : (s &= a, s !== 0 && (n = to(s), o = ge))
    } else a = r & ~l, a !== 0 ? (n = to(a), o = ge) : s !== 0 && (n = to(s), o = ge);
    if (n === 0) return 0;
    if (n = 31 - nn(n), n = r & ((0 > n ? 0 : 1 << n) << 1) - 1, t !== 0 && t !== n && !(t & l)) {
        if (to(t), o <= ge) return t;
        ge = o
    }
    if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t;) r = 31 - nn(t), o = 1 << r, n |= e[r], t &= ~o;
    return n
}

function ry(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function yl(e, t) {
    switch (e) {
        case 15:
            return 1;
        case 14:
            return 2;
        case 12:
            return e = ro(24 & ~t), e === 0 ? yl(10, t) : e;
        case 10:
            return e = ro(192 & ~t), e === 0 ? yl(8, t) : e;
        case 8:
            return e = ro(3584 & ~t), e === 0 && (e = ro(4186112 & ~t), e === 0 && (e = 512)), e;
        case 2:
            return t = ro(805306368 & ~t), t === 0 && (t = 268435456), t
    }
    throw Error(I(358, e))
}

function ro(e) {
    return e & -e
}

function ru(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t
}

function os(e, t, r) {
    e.pendingLanes |= t;
    var n = t - 1;
    e.suspendedLanes &= n, e.pingedLanes &= n, e = e.eventTimes, t = 31 - nn(t), e[t] = r
}

var nn = Math.clz32 ? Math.clz32 : kO, bO = Math.log, EO = Math.LN2;

function kO(e) {
    return e === 0 ? 32 : 31 - (bO(e) / EO | 0) | 0
}

var xO = Ve.unstable_UserBlockingPriority, $O = Ve.unstable_runWithPriority, el = !0;

function _O(e, t, r, n) {
    En || qd();
    var o = tf, a = En;
    En = !0;
    try {
        Hg(o, e, t, r, n)
    } finally {
        (En = a) || Zd()
    }
}

function TO(e, t, r, n) {
    $O(xO, tf.bind(null, e, t, r, n))
}

function tf(e, t, r, n) {
    if (el) {
        var o;
        if ((o = (t & 4) === 0) && 0 < cr.length && -1 < Tp.indexOf(e)) e = mc(null, e, t, r, n), cr.push(e); else {
            var a = rf(e, t, r, n);
            if (a === null) o && Op(e, n); else {
                if (o) {
                    if (-1 < Tp.indexOf(e)) {
                        e = mc(a, e, t, r, n), cr.push(e);
                        return
                    }
                    if (hO(a, e, t, r, n)) return;
                    Op(e, n)
                }
                py(e, t, n, null, r)
            }
        }
    }
}

function rf(e, t, r, n) {
    var o = Yd(n);
    if (o = kn(o), o !== null) {
        var a = Vn(o);
        if (a === null) o = null; else {
            var l = a.tag;
            if (l === 13) {
                if (o = Wg(a), o !== null) return o;
                o = null
            } else if (l === 3) {
                if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
                o = null
            } else a !== o && (o = null)
        }
    }
    return py(e, t, n, o, r), null
}

var Wr = null, nf = null, tl = null;

function ny() {
    if (tl) return tl;
    var e, t = nf, r = t.length, n, o = "value" in Wr ? Wr.value : Wr.textContent, a = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++) ;
    var l = r - e;
    for (n = 1; n <= l && t[r - n] === o[a - n]; n++) ;
    return tl = o.slice(e, 1 < n ? 1 - n : void 0)
}

function rl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function La() {
    return !0
}

function Mp() {
    return !1
}

function Rt(e) {
    function t(r, n, o, a, l) {
        this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(a) : a[s]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? La : Mp, this.isPropagationStopped = Mp, this
    }

    return Ee(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = La)
        }, stopPropagation: function () {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = La)
        }, persist: function () {
        }, isPersistent: La
    }), t
}

var No = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, of = Rt(No), ra = Ee({}, No, {view: 0, detail: 0}), OO = Rt(ra), nu, ou, oi, is = Ee({}, ra, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: af,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? (nu = e.screenX - oi.screenX, ou = e.screenY - oi.screenY) : ou = nu = 0, oi = e), nu)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ou
        }
    }), Rp = Rt(is), PO = Ee({}, is, {dataTransfer: 0}), MO = Rt(PO), RO = Ee({}, ra, {relatedTarget: 0}), iu = Rt(RO),
    AO = Ee({}, No, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), IO = Rt(AO), jO = Ee({}, No, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), LO = Rt(jO), NO = Ee({}, No, {data: 0}), Ap = Rt(NO), DO = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, FO = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, BO = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function zO(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = BO[e]) ? !!t[e] : !1
}

function af() {
    return zO
}

var HO = Ee({}, ra, {
    key: function (e) {
        if (e.key) {
            var t = DO[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? FO[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: af,
    charCode: function (e) {
        return e.type === "keypress" ? rl(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), VO = Rt(HO), WO = Ee({}, is, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Ip = Rt(WO), UO = Ee({}, ra, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: af
}), KO = Rt(UO), GO = Ee({}, No, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), YO = Rt(GO), XO = Ee({}, is, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), qO = Rt(XO), ZO = [9, 13, 27, 32], lf = Pr && "CompositionEvent" in window, ki = null;
Pr && "documentMode" in document && (ki = document.documentMode);
var QO = Pr && "TextEvent" in window && !ki, oy = Pr && (!lf || ki && 8 < ki && 11 >= ki), jp = " ", Lp = !1;

function iy(e, t) {
    switch (e) {
        case"keyup":
            return ZO.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function ay(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var io = !1;

function JO(e, t) {
    switch (e) {
        case"compositionend":
            return ay(t);
        case"keypress":
            return t.which !== 32 ? null : (Lp = !0, jp);
        case"textInput":
            return e = t.data, e === jp && Lp ? null : e;
        default:
            return null
    }
}

function eP(e, t) {
    if (io) return e === "compositionend" || !lf && iy(e, t) ? (e = ny(), tl = nf = Wr = null, io = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return oy && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var tP = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Np(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tP[e.type] : t === "textarea"
}

function ly(e, t, r, n) {
    Bg(n), t = wl(t, "onChange"), 0 < t.length && (r = new of("onChange", "change", null, r, n), e.push({
        event: r,
        listeners: t
    }))
}

var xi = null, Fi = null;

function rP(e) {
    dy(e, 0)
}

function as(e) {
    var t = lo(e);
    if (Ag(t)) return e
}

function nP(e, t) {
    if (e === "change") return t
}

var sy = !1;
if (Pr) {
    var au;
    if (Pr) {
        var lu = "oninput" in document;
        if (!lu) {
            var Dp = document.createElement("div");
            Dp.setAttribute("oninput", "return;"), lu = typeof Dp.oninput == "function"
        }
        au = lu
    } else au = !1;
    sy = au && (!document.documentMode || 9 < document.documentMode)
}

function Fp() {
    xi && (xi.detachEvent("onpropertychange", uy), Fi = xi = null)
}

function uy(e) {
    if (e.propertyName === "value" && as(Fi)) {
        var t = [];
        if (ly(t, Fi, e, Yd(e)), e = rP, En) e(t); else {
            En = !0;
            try {
                Xd(e, t)
            } finally {
                En = !1, Zd()
            }
        }
    }
}

function oP(e, t, r) {
    e === "focusin" ? (Fp(), xi = t, Fi = r, xi.attachEvent("onpropertychange", uy)) : e === "focusout" && Fp()
}

function iP(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return as(Fi)
}

function aP(e, t) {
    if (e === "click") return as(t)
}

function lP(e, t) {
    if (e === "input" || e === "change") return as(t)
}

function sP(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var Lt = typeof Object.is == "function" ? Object.is : sP, uP = Object.prototype.hasOwnProperty;

function Bi(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) if (!uP.call(t, r[n]) || !Lt(e[r[n]], t[r[n]])) return !1;
    return !0
}

function Bp(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function zp(e, t) {
    var r = Bp(e);
    e = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
            e = n
        }
        e:{
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Bp(r)
    }
}

function cy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Hp() {
    for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) e = t.contentWindow; else break;
        t = hl(e.document)
    }
    return t
}

function gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

var cP = Pr && "documentMode" in document && 11 >= document.documentMode, ao = null, yc = null, $i = null, wc = !1;

function Vp(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    wc || ao == null || ao !== hl(n) || (n = ao, "selectionStart" in n && gc(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }), $i && Bi($i, n) || ($i = n, n = wl(yc, "onSelect"), 0 < n.length && (t = new of("onSelect", "select", null, t, r), e.push({
        event: t,
        listeners: n
    }), t.target = ao)))
}

ef("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
ef("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
ef(yO, 2);
for (var Wp = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), su = 0; su < Wp.length; su++) Jd.set(Wp[su], 0);
ko("onMouseEnter", ["mouseout", "mouseover"]);
ko("onMouseLeave", ["mouseout", "mouseover"]);
ko("onPointerEnter", ["pointerout", "pointerover"]);
ko("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    dP = new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));

function Up(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, vO(n, t, void 0, e), e.currentTarget = null
}

function dy(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r], o = n.event;
        n = n.listeners;
        e:{
            var a = void 0;
            if (t) for (var l = n.length - 1; 0 <= l; l--) {
                var s = n[l], u = s.instance, c = s.currentTarget;
                if (s = s.listener, u !== a && o.isPropagationStopped()) break e;
                Up(o, s, c), a = u
            } else for (l = 0; l < n.length; l++) {
                if (s = n[l], u = s.instance, c = s.currentTarget, s = s.listener, u !== a && o.isPropagationStopped()) break e;
                Up(o, s, c), a = u
            }
        }
    }
    if (gl) throw e = pc, gl = !1, pc = null, e
}

function Se(e, t) {
    var r = my(t), n = e + "__bubble";
    r.has(n) || (vy(t, e, 2, !1), r.add(n))
}

var Kp = "_reactListening" + Math.random().toString(36).slice(2);

function fy(e) {
    e[Kp] || (e[Kp] = !0, Pg.forEach(function (t) {
        dP.has(t) || Gp(t, !1, e, null), Gp(t, !0, e, null)
    }))
}

function Gp(e, t, r, n) {
    var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, a = r;
    e === "selectionchange" && r.nodeType !== 9 && (a = r.ownerDocument);
    var l = my(a), s = e + "__" + (t ? "capture" : "bubble");
    l.has(s) || (t && (o |= 4), vy(a, e, o, t), l.add(s))
}

function vy(e, t, r, n) {
    var o = Jd.get(t);
    switch (o === void 0 ? 2 : o) {
        case 0:
            o = _O;
            break;
        case 1:
            o = TO;
            break;
        default:
            o = tf
    }
    r = o.bind(null, t, r, e), o = void 0, !vc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {passive: o}) : e.addEventListener(t, r, !1)
}

function py(e, t, r, n, o) {
    var a = n;
    if (!(t & 1) && !(t & 2) && n !== null) e:for (; ;) {
        if (n === null) return;
        var l = n.tag;
        if (l === 3 || l === 4) {
            var s = n.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o) break;
            if (l === 4) for (l = n.return; l !== null;) {
                var u = l.tag;
                if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
                l = l.return
            }
            for (; s !== null;) {
                if (l = kn(s), l === null) return;
                if (u = l.tag, u === 5 || u === 6) {
                    n = a = l;
                    continue e
                }
                s = s.parentNode
            }
        }
        n = n.return
    }
    uO(function () {
        var c = a, v = Yd(r), g = [];
        e:{
            var p = ty.get(e);
            if (p !== void 0) {
                var m = of, S = e;
                switch (e) {
                    case"keypress":
                        if (rl(r) === 0) break e;
                    case"keydown":
                    case"keyup":
                        m = VO;
                        break;
                    case"focusin":
                        S = "focus", m = iu;
                        break;
                    case"focusout":
                        S = "blur", m = iu;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        m = iu;
                        break;
                    case"click":
                        if (r.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        m = Rp;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        m = MO;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        m = KO;
                        break;
                    case Zg:
                    case Qg:
                    case Jg:
                        m = IO;
                        break;
                    case ey:
                        m = YO;
                        break;
                    case"scroll":
                        m = OO;
                        break;
                    case"wheel":
                        m = qO;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        m = LO;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        m = Ip
                }
                var w = (t & 4) !== 0, d = !w && e === "scroll", f = w ? p !== null ? p + "Capture" : null : p;
                w = [];
                for (var h = c, C; h !== null;) {
                    C = h;
                    var k = C.stateNode;
                    if (C.tag === 5 && k !== null && (C = k, f !== null && (k = ji(h, f), k != null && w.push(zi(h, k, C)))), d) break;
                    h = h.return
                }
                0 < w.length && (p = new m(p, S, null, r, v), g.push({event: p, listeners: w}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (p = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", p && !(t & 16) && (S = r.relatedTarget || r.fromElement) && (kn(S) || S[Do])) break e;
                if ((m || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window, m ? (S = r.relatedTarget || r.toElement, m = c, S = S ? kn(S) : null, S !== null && (d = Vn(S), S !== d || S.tag !== 5 && S.tag !== 6) && (S = null)) : (m = null, S = c), m !== S)) {
                    if (w = Rp, k = "onMouseLeave", f = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (w = Ip, k = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = m == null ? p : lo(m), C = S == null ? p : lo(S), p = new w(k, h + "leave", m, r, v), p.target = d, p.relatedTarget = C, k = null, kn(v) === c && (w = new w(f, h + "enter", S, r, v), w.target = C, w.relatedTarget = d, k = w), d = k, m && S) t:{
                        for (w = m, f = S, h = 0, C = w; C; C = Zn(C)) h++;
                        for (C = 0, k = f; k; k = Zn(k)) C++;
                        for (; 0 < h - C;) w = Zn(w), h--;
                        for (; 0 < C - h;) f = Zn(f), C--;
                        for (; h--;) {
                            if (w === f || f !== null && w === f.alternate) break t;
                            w = Zn(w), f = Zn(f)
                        }
                        w = null
                    } else w = null;
                    m !== null && Yp(g, p, m, w, !1), S !== null && d !== null && Yp(g, d, S, w, !0)
                }
            }
            e:{
                if (p = c ? lo(c) : window, m = p.nodeName && p.nodeName.toLowerCase(), m === "select" || m === "input" && p.type === "file") var $ = nP; else if (Np(p)) if (sy) $ = lP; else {
                    $ = iP;
                    var x = oP
                } else (m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && ($ = aP);
                if ($ && ($ = $(e, c))) {
                    ly(g, $, r, v);
                    break e
                }
                x && x(e, p, c), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && ic(p, "number", p.value)
            }
            switch (x = c ? lo(c) : window, e) {
                case"focusin":
                    (Np(x) || x.contentEditable === "true") && (ao = x, yc = c, $i = null);
                    break;
                case"focusout":
                    $i = yc = ao = null;
                    break;
                case"mousedown":
                    wc = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    wc = !1, Vp(g, r, v);
                    break;
                case"selectionchange":
                    if (cP) break;
                case"keydown":
                case"keyup":
                    Vp(g, r, v)
            }
            var _;
            if (lf) e:{
                switch (e) {
                    case"compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case"compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            } else io ? iy(e, r) && (R = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
            R && (oy && r.locale !== "ko" && (io || R !== "onCompositionStart" ? R === "onCompositionEnd" && io && (_ = ny()) : (Wr = v, nf = "value" in Wr ? Wr.value : Wr.textContent, io = !0)), x = wl(c, R), 0 < x.length && (R = new Ap(R, e, null, r, v), g.push({
                event: R,
                listeners: x
            }), _ ? R.data = _ : (_ = ay(r), _ !== null && (R.data = _)))), (_ = QO ? JO(e, r) : eP(e, r)) && (c = wl(c, "onBeforeInput"), 0 < c.length && (v = new Ap("onBeforeInput", "beforeinput", null, r, v), g.push({
                event: v,
                listeners: c
            }), v.data = _))
        }
        dy(g, t)
    })
}

function zi(e, t, r) {
    return {instance: e, listener: t, currentTarget: r}
}

function wl(e, t) {
    for (var r = t + "Capture", n = []; e !== null;) {
        var o = e, a = o.stateNode;
        o.tag === 5 && a !== null && (o = a, a = ji(e, r), a != null && n.unshift(zi(e, a, o)), a = ji(e, t), a != null && n.push(zi(e, a, o))), e = e.return
    }
    return n
}

function Zn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Yp(e, t, r, n, o) {
    for (var a = t._reactName, l = []; r !== null && r !== n;) {
        var s = r, u = s.alternate, c = s.stateNode;
        if (u !== null && u === n) break;
        s.tag === 5 && c !== null && (s = c, o ? (u = ji(r, a), u != null && l.unshift(zi(r, u, s))) : o || (u = ji(r, a), u != null && l.push(zi(r, u, s)))), r = r.return
    }
    l.length !== 0 && e.push({event: t, listeners: l})
}

function Sl() {
}

var uu = null, cu = null;

function hy(e, t) {
    switch (e) {
        case"button":
        case"input":
        case"select":
        case"textarea":
            return !!t.autoFocus
    }
    return !1
}

function Sc(e, t) {
    return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Xp = typeof setTimeout == "function" ? setTimeout : void 0,
    fP = typeof clearTimeout == "function" ? clearTimeout : void 0;

function sf(e) {
    e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""))
}

function yo(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break
    }
    return e
}

function qp(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e;
                t--
            } else r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var du = 0;

function vP(e) {
    return {$$typeof: Kd, toString: e, valueOf: e}
}

var ls = Math.random().toString(36).slice(2), Ur = "__reactFiber$" + ls, Cl = "__reactProps$" + ls,
    Do = "__reactContainer$" + ls, Zp = "__reactEvents$" + ls;

function kn(e) {
    var t = e[Ur];
    if (t) return t;
    for (var r = e.parentNode; r;) {
        if (t = r[Do] || r[Ur]) {
            if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = qp(e); e !== null;) {
                if (r = e[Ur]) return r;
                e = qp(e)
            }
            return t
        }
        e = r, r = e.parentNode
    }
    return null
}

function na(e) {
    return e = e[Ur] || e[Do], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function lo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(I(33))
}

function ss(e) {
    return e[Cl] || null
}

function my(e) {
    var t = e[Zp];
    return t === void 0 && (t = e[Zp] = new Set), t
}

var Cc = [], so = -1;

function vn(e) {
    return {current: e}
}

function Ce(e) {
    0 > so || (e.current = Cc[so], Cc[so] = null, so--)
}

function Oe(e, t) {
    so++, Cc[so] = e.current, e.current = t
}

var on = {}, it = vn(on), wt = vn(!1), Rn = on;

function xo(e, t) {
    var r = e.type.contextTypes;
    if (!r) return on;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var o = {}, a;
    for (a in r) o[a] = t[a];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function St(e) {
    return e = e.childContextTypes, e != null
}

function bl() {
    Ce(wt), Ce(it)
}

function Qp(e, t, r) {
    if (it.current !== on) throw Error(I(168));
    Oe(it, t), Oe(wt, r)
}

function gy(e, t, r) {
    var n = e.stateNode;
    if (e = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var o in n) if (!(o in e)) throw Error(I(108, po(t) || "Unknown", o));
    return Ee({}, r, n)
}

function nl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, Rn = it.current, Oe(it, e), Oe(wt, wt.current), !0
}

function Jp(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(I(169));
    r ? (e = gy(e, t, Rn), n.__reactInternalMemoizedMergedChildContext = e, Ce(wt), Ce(it), Oe(it, e)) : Ce(wt), Oe(wt, r)
}

var uf = null, Tn = null, pP = Ve.unstable_runWithPriority, cf = Ve.unstable_scheduleCallback,
    bc = Ve.unstable_cancelCallback, hP = Ve.unstable_shouldYield, eh = Ve.unstable_requestPaint, Ec = Ve.unstable_now,
    mP = Ve.unstable_getCurrentPriorityLevel, us = Ve.unstable_ImmediatePriority, yy = Ve.unstable_UserBlockingPriority,
    wy = Ve.unstable_NormalPriority, Sy = Ve.unstable_LowPriority, Cy = Ve.unstable_IdlePriority, fu = {},
    gP = eh !== void 0 ? eh : function () {
    }, Cr = null, ol = null, vu = !1, th = Ec(), nt = 1e4 > th ? Ec : function () {
        return Ec() - th
    };

function $o() {
    switch (mP()) {
        case us:
            return 99;
        case yy:
            return 98;
        case wy:
            return 97;
        case Sy:
            return 96;
        case Cy:
            return 95;
        default:
            throw Error(I(332))
    }
}

function by(e) {
    switch (e) {
        case 99:
            return us;
        case 98:
            return yy;
        case 97:
            return wy;
        case 96:
            return Sy;
        case 95:
            return Cy;
        default:
            throw Error(I(332))
    }
}

function An(e, t) {
    return e = by(e), pP(e, t)
}

function Hi(e, t, r) {
    return e = by(e), cf(e, t, r)
}

function gr() {
    if (ol !== null) {
        var e = ol;
        ol = null, bc(e)
    }
    Ey()
}

function Ey() {
    if (!vu && Cr !== null) {
        vu = !0;
        var e = 0;
        try {
            var t = Cr;
            An(99, function () {
                for (; e < t.length; e++) {
                    var r = t[e];
                    do r = r(!0); while (r !== null)
                }
            }), Cr = null
        } catch (r) {
            throw Cr !== null && (Cr = Cr.slice(e + 1)), cf(us, gr), r
        } finally {
            vu = !1
        }
    }
}

var yP = Hn.ReactCurrentBatchConfig;

function Wt(e, t) {
    if (e && e.defaultProps) {
        t = Ee({}, t), e = e.defaultProps;
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}

var El = vn(null), kl = null, uo = null, xl = null;

function df() {
    xl = uo = kl = null
}

function ff(e) {
    var t = El.current;
    Ce(El), e.type._context._currentValue = t
}

function ky(e, t) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) === t) {
            if (r === null || (r.childLanes & t) === t) break;
            r.childLanes |= t
        } else e.childLanes |= t, r !== null && (r.childLanes |= t);
        e = e.return
    }
}

function wo(e, t) {
    kl = e, xl = uo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Kt = !0), e.firstContext = null)
}

function Ft(e, t) {
    if (xl !== e && t !== !1 && t !== 0) if ((typeof t != "number" || t === 1073741823) && (xl = e, t = 1073741823), t = {
        context: e,
        observedBits: t,
        next: null
    }, uo === null) {
        if (kl === null) throw Error(I(308));
        uo = t, kl.dependencies = {lanes: 0, firstContext: t, responders: null}
    } else uo = uo.next = t;
    return e._currentValue
}

var zr = !1;

function vf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null},
        effects: null
    }
}

function xy(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Zr(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function Qr(e, t) {
    if (e = e.updateQueue, e !== null) {
        e = e.shared;
        var r = e.pending;
        r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
    }
}

function rh(e, t) {
    var r = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var o = null, a = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var l = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                a === null ? o = a = l : a = a.next = l, r = r.next
            } while (r !== null);
            a === null ? o = a = t : a = a.next = t
        } else o = a = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: n.shared,
            effects: n.effects
        }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
}

function Vi(e, t, r, n) {
    var o = e.updateQueue;
    zr = !1;
    var a = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var u = s, c = u.next;
        u.next = null, l === null ? a = c : l.next = c, l = u;
        var v = e.alternate;
        if (v !== null) {
            v = v.updateQueue;
            var g = v.lastBaseUpdate;
            g !== l && (g === null ? v.firstBaseUpdate = c : g.next = c, v.lastBaseUpdate = u)
        }
    }
    if (a !== null) {
        g = o.baseState, l = 0, v = c = u = null;
        do {
            s = a.lane;
            var p = a.eventTime;
            if ((n & s) === s) {
                v !== null && (v = v.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e:{
                    var m = e, S = a;
                    switch (s = t, p = r, S.tag) {
                        case 1:
                            if (m = S.payload, typeof m == "function") {
                                g = m.call(p, g, s);
                                break e
                            }
                            g = m;
                            break e;
                        case 3:
                            m.flags = m.flags & -4097 | 64;
                        case 0:
                            if (m = S.payload, s = typeof m == "function" ? m.call(p, g, s) : m, s == null) break e;
                            g = Ee({}, g, s);
                            break e;
                        case 2:
                            zr = !0
                    }
                }
                a.callback !== null && (e.flags |= 32, s = o.effects, s === null ? o.effects = [a] : s.push(a))
            } else p = {
                eventTime: p,
                lane: s,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, v === null ? (c = v = p, u = g) : v = v.next = p, l |= s;
            if (a = a.next, a === null) {
                if (s = o.shared.pending, s === null) break;
                a = s.next, s.next = null, o.lastBaseUpdate = s, o.shared.pending = null
            }
        } while (!0);
        v === null && (u = g), o.baseState = u, o.firstBaseUpdate = c, o.lastBaseUpdate = v, ia |= l, e.lanes = l, e.memoizedState = g
    }
}

function nh(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var n = e[t], o = n.callback;
        if (o !== null) {
            if (n.callback = null, n = r, typeof o != "function") throw Error(I(191, o));
            o.call(n)
        }
    }
}

var $y = new es.Component().refs;

function $l(e, t, r, n) {
    t = e.memoizedState, r = r(n, t), r = r == null ? t : Ee({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}

var cs = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Vn(e) === e : !1
    }, enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = Tt(), o = Jr(e), a = Zr(n, o);
        a.payload = t, r != null && (a.callback = r), Qr(e, a), en(e, o, n)
    }, enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = Tt(), o = Jr(e), a = Zr(n, o);
        a.tag = 1, a.payload = t, r != null && (a.callback = r), Qr(e, a), en(e, o, n)
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = Tt(), n = Jr(e), o = Zr(r, n);
        o.tag = 2, t != null && (o.callback = t), Qr(e, o), en(e, n, r)
    }
};

function oh(e, t, r, n, o, a, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, a, l) : t.prototype && t.prototype.isPureReactComponent ? !Bi(r, n) || !Bi(o, a) : !0
}

function _y(e, t, r) {
    var n = !1, o = on, a = t.contextType;
    return typeof a == "object" && a !== null ? a = Ft(a) : (o = St(t) ? Rn : it.current, n = t.contextTypes, a = (n = n != null) ? xo(e, o) : on), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cs, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function ih(e, t, r, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && cs.enqueueReplaceState(t, t.state, null)
}

function kc(e, t, r, n) {
    var o = e.stateNode;
    o.props = r, o.state = e.memoizedState, o.refs = $y, vf(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? o.context = Ft(a) : (a = St(t) ? Rn : it.current, o.context = xo(e, a)), Vi(e, r, o, n), o.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && ($l(e, t, a, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && cs.enqueueReplaceState(o, o.state, null), Vi(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4)
}

var Na = Array.isArray;

function ii(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(I(309));
                var n = r.stateNode
            }
            if (!n) throw Error(I(147, e));
            var o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (a) {
                var l = n.refs;
                l === $y && (l = n.refs = {}), a === null ? delete l[o] : l[o] = a
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(I(284));
        if (!r._owner) throw Error(I(290, e))
    }
    return e
}

function Da(e, t) {
    if (e.type !== "textarea") throw Error(I(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
}

function Ty(e) {
    function t(d, f) {
        if (e) {
            var h = d.lastEffect;
            h !== null ? (h.nextEffect = f, d.lastEffect = f) : d.firstEffect = d.lastEffect = f, f.nextEffect = null, f.flags = 8
        }
    }

    function r(d, f) {
        if (!e) return null;
        for (; f !== null;) t(d, f), f = f.sibling;
        return null
    }

    function n(d, f) {
        for (d = new Map; f !== null;) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
        return d
    }

    function o(d, f) {
        return d = ln(d, f), d.index = 0, d.sibling = null, d
    }

    function a(d, f, h) {
        return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < f ? (d.flags = 2, f) : h) : (d.flags = 2, f)) : f
    }

    function l(d) {
        return e && d.alternate === null && (d.flags = 2), d
    }

    function s(d, f, h, C) {
        return f === null || f.tag !== 6 ? (f = yu(h, d.mode, C), f.return = d, f) : (f = o(f, h), f.return = d, f)
    }

    function u(d, f, h, C) {
        return f !== null && f.elementType === h.type ? (C = o(f, h.props), C.ref = ii(d, f, h), C.return = d, C) : (C = sl(h.type, h.key, h.props, null, d.mode, C), C.ref = ii(d, f, h), C.return = d, C)
    }

    function c(d, f, h, C) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = wu(h, d.mode, C), f.return = d, f) : (f = o(f, h.children || []), f.return = d, f)
    }

    function v(d, f, h, C, k) {
        return f === null || f.tag !== 7 ? (f = Eo(h, d.mode, C, k), f.return = d, f) : (f = o(f, h), f.return = d, f)
    }

    function g(d, f, h) {
        if (typeof f == "string" || typeof f == "number") return f = yu("" + f, d.mode, h), f.return = d, f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case vi:
                    return h = sl(f.type, f.key, f.props, null, d.mode, h), h.ref = ii(d, null, f), h.return = d, h;
                case bn:
                    return f = wu(f, d.mode, h), f.return = d, f
            }
            if (Na(f) || Jo(f)) return f = Eo(f, d.mode, h, null), f.return = d, f;
            Da(d, f)
        }
        return null
    }

    function p(d, f, h, C) {
        var k = f !== null ? f.key : null;
        if (typeof h == "string" || typeof h == "number") return k !== null ? null : s(d, f, "" + h, C);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case vi:
                    return h.key === k ? h.type === Hr ? v(d, f, h.props.children, C, k) : u(d, f, h, C) : null;
                case bn:
                    return h.key === k ? c(d, f, h, C) : null
            }
            if (Na(h) || Jo(h)) return k !== null ? null : v(d, f, h, C, null);
            Da(d, h)
        }
        return null
    }

    function m(d, f, h, C, k) {
        if (typeof C == "string" || typeof C == "number") return d = d.get(h) || null, s(f, d, "" + C, k);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case vi:
                    return d = d.get(C.key === null ? h : C.key) || null, C.type === Hr ? v(f, d, C.props.children, k, C.key) : u(f, d, C, k);
                case bn:
                    return d = d.get(C.key === null ? h : C.key) || null, c(f, d, C, k)
            }
            if (Na(C) || Jo(C)) return d = d.get(h) || null, v(f, d, C, k, null);
            Da(f, C)
        }
        return null
    }

    function S(d, f, h, C) {
        for (var k = null, $ = null, x = f, _ = f = 0, R = null; x !== null && _ < h.length; _++) {
            x.index > _ ? (R = x, x = null) : R = x.sibling;
            var M = p(d, x, h[_], C);
            if (M === null) {
                x === null && (x = R);
                break
            }
            e && x && M.alternate === null && t(d, x), f = a(M, f, _), $ === null ? k = M : $.sibling = M, $ = M, x = R
        }
        if (_ === h.length) return r(d, x), k;
        if (x === null) {
            for (; _ < h.length; _++) x = g(d, h[_], C), x !== null && (f = a(x, f, _), $ === null ? k = x : $.sibling = x, $ = x);
            return k
        }
        for (x = n(d, x); _ < h.length; _++) R = m(x, d, _, h[_], C), R !== null && (e && R.alternate !== null && x.delete(R.key === null ? _ : R.key), f = a(R, f, _), $ === null ? k = R : $.sibling = R, $ = R);
        return e && x.forEach(function (j) {
            return t(d, j)
        }), k
    }

    function w(d, f, h, C) {
        var k = Jo(h);
        if (typeof k != "function") throw Error(I(150));
        if (h = k.call(h), h == null) throw Error(I(151));
        for (var $ = k = null, x = f, _ = f = 0, R = null, M = h.next(); x !== null && !M.done; _++, M = h.next()) {
            x.index > _ ? (R = x, x = null) : R = x.sibling;
            var j = p(d, x, M.value, C);
            if (j === null) {
                x === null && (x = R);
                break
            }
            e && x && j.alternate === null && t(d, x), f = a(j, f, _), $ === null ? k = j : $.sibling = j, $ = j, x = R
        }
        if (M.done) return r(d, x), k;
        if (x === null) {
            for (; !M.done; _++, M = h.next()) M = g(d, M.value, C), M !== null && (f = a(M, f, _), $ === null ? k = M : $.sibling = M, $ = M);
            return k
        }
        for (x = n(d, x); !M.done; _++, M = h.next()) M = m(x, d, _, M.value, C), M !== null && (e && M.alternate !== null && x.delete(M.key === null ? _ : M.key), f = a(M, f, _), $ === null ? k = M : $.sibling = M, $ = M);
        return e && x.forEach(function (re) {
            return t(d, re)
        }), k
    }

    return function (d, f, h, C) {
        var k = typeof h == "object" && h !== null && h.type === Hr && h.key === null;
        k && (h = h.props.children);
        var $ = typeof h == "object" && h !== null;
        if ($) switch (h.$$typeof) {
            case vi:
                e:{
                    for ($ = h.key, k = f; k !== null;) {
                        if (k.key === $) {
                            switch (k.tag) {
                                case 7:
                                    if (h.type === Hr) {
                                        r(d, k.sibling), f = o(k, h.props.children), f.return = d, d = f;
                                        break e
                                    }
                                    break;
                                default:
                                    if (k.elementType === h.type) {
                                        r(d, k.sibling), f = o(k, h.props), f.ref = ii(d, k, h), f.return = d, d = f;
                                        break e
                                    }
                            }
                            r(d, k);
                            break
                        } else t(d, k);
                        k = k.sibling
                    }
                    h.type === Hr ? (f = Eo(h.props.children, d.mode, C, h.key), f.return = d, d = f) : (C = sl(h.type, h.key, h.props, null, d.mode, C), C.ref = ii(d, f, h), C.return = d, d = C)
                }
                return l(d);
            case bn:
                e:{
                    for (k = h.key; f !== null;) {
                        if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                            r(d, f.sibling), f = o(f, h.children || []), f.return = d, d = f;
                            break e
                        } else {
                            r(d, f);
                            break
                        } else t(d, f);
                        f = f.sibling
                    }
                    f = wu(h, d.mode, C), f.return = d, d = f
                }
                return l(d)
        }
        if (typeof h == "string" || typeof h == "number") return h = "" + h, f !== null && f.tag === 6 ? (r(d, f.sibling), f = o(f, h), f.return = d, d = f) : (r(d, f), f = yu(h, d.mode, C), f.return = d, d = f), l(d);
        if (Na(h)) return S(d, f, h, C);
        if (Jo(h)) return w(d, f, h, C);
        if ($ && Da(d, h), typeof h > "u" && !k) switch (d.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
                throw Error(I(152, po(d.type) || "Component"))
        }
        return r(d, f)
    }
}

var _l = Ty(!0), Oy = Ty(!1), oa = {}, vr = vn(oa), Wi = vn(oa), Ui = vn(oa);

function xn(e) {
    if (e === oa) throw Error(I(174));
    return e
}

function xc(e, t) {
    switch (Oe(Ui, t), Oe(Wi, e), Oe(vr, oa), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : uc(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uc(t, e)
    }
    Ce(vr), Oe(vr, t)
}

function _o() {
    Ce(vr), Ce(Wi), Ce(Ui)
}

function ah(e) {
    xn(Ui.current);
    var t = xn(vr.current), r = uc(t, e.type);
    t !== r && (Oe(Wi, e), Oe(vr, r))
}

function pf(e) {
    Wi.current === e && (Ce(vr), Ce(Wi))
}

var Te = vn(0);

function Tl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 64) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var Er = null, Kr = null, pr = !1;

function Py(e, t) {
    var r = Nt(5, null, null, 0);
    r.elementType = "DELETED", r.type = "DELETED", r.stateNode = t, r.return = e, r.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r
}

function lh(e, t) {
    switch (e.tag) {
        case 5:
            var r = e.type;
            return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
        case 13:
            return !1;
        default:
            return !1
    }
}

function $c(e) {
    if (pr) {
        var t = Kr;
        if (t) {
            var r = t;
            if (!lh(e, t)) {
                if (t = yo(r.nextSibling), !t || !lh(e, t)) {
                    e.flags = e.flags & -1025 | 2, pr = !1, Er = e;
                    return
                }
                Py(Er, r)
            }
            Er = e, Kr = yo(t.firstChild)
        } else e.flags = e.flags & -1025 | 2, pr = !1, Er = e
    }
}

function sh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Er = e
}

function Fa(e) {
    if (e !== Er) return !1;
    if (!pr) return sh(e), pr = !0, !1;
    var t = e.type;
    if (e.tag !== 5 || t !== "head" && t !== "body" && !Sc(t, e.memoizedProps)) for (t = Kr; t;) Py(e, t), t = yo(t.nextSibling);
    if (sh(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            Kr = yo(e.nextSibling);
                            break e
                        }
                        t--
                    } else r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            Kr = null
        }
    } else Kr = Er ? yo(e.stateNode.nextSibling) : null;
    return !0
}

function pu() {
    Kr = Er = null, pr = !1
}

var So = [];

function hf() {
    for (var e = 0; e < So.length; e++) So[e]._workInProgressVersionPrimary = null;
    So.length = 0
}

var _i = Hn.ReactCurrentDispatcher, Dt = Hn.ReactCurrentBatchConfig, Ki = 0, Me = null, rt = null, Ye = null, Ol = !1,
    Ti = !1;

function ht() {
    throw Error(I(321))
}

function mf(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Lt(e[r], t[r])) return !1;
    return !0
}

function gf(e, t, r, n, o, a) {
    if (Ki = a, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _i.current = e === null || e.memoizedState === null ? SP : CP, e = r(n, o), Ti) {
        a = 0;
        do {
            if (Ti = !1, !(25 > a)) throw Error(I(301));
            a += 1, Ye = rt = null, t.updateQueue = null, _i.current = bP, e = r(n, o)
        } while (Ti)
    }
    if (_i.current = Al, t = rt !== null && rt.next !== null, Ki = 0, Ye = rt = Me = null, Ol = !1, t) throw Error(I(300));
    return e
}

function $n() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return Ye === null ? Me.memoizedState = Ye = e : Ye = Ye.next = e, Ye
}

function Wn() {
    if (rt === null) {
        var e = Me.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = rt.next;
    var t = Ye === null ? Me.memoizedState : Ye.next;
    if (t !== null) Ye = t, rt = e; else {
        if (e === null) throw Error(I(310));
        rt = e, e = {
            memoizedState: rt.memoizedState,
            baseState: rt.baseState,
            baseQueue: rt.baseQueue,
            queue: rt.queue,
            next: null
        }, Ye === null ? Me.memoizedState = Ye = e : Ye = Ye.next = e
    }
    return Ye
}

function dr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ai(e) {
    var t = Wn(), r = t.queue;
    if (r === null) throw Error(I(311));
    r.lastRenderedReducer = e;
    var n = rt, o = n.baseQueue, a = r.pending;
    if (a !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = a.next, a.next = l
        }
        n.baseQueue = o = a, r.pending = null
    }
    if (o !== null) {
        o = o.next, n = n.baseState;
        var s = l = a = null, u = o;
        do {
            var c = u.lane;
            if ((Ki & c) === c) s !== null && (s = s.next = {
                lane: 0,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null
            }), n = u.eagerReducer === e ? u.eagerState : e(n, u.action); else {
                var v = {lane: c, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null};
                s === null ? (l = s = v, a = n) : s = s.next = v, Me.lanes |= c, ia |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        s === null ? a = n : s.next = l, Lt(n, t.memoizedState) || (Kt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = s, r.lastRenderedState = n
    }
    return [t.memoizedState, r.dispatch]
}

function li(e) {
    var t = Wn(), r = t.queue;
    if (r === null) throw Error(I(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch, o = r.pending, a = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var l = o = o.next;
        do a = e(a, l.action), l = l.next; while (l !== o);
        Lt(a, t.memoizedState) || (Kt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a
    }
    return [a, n]
}

function uh(e, t, r) {
    var n = t._getVersion;
    n = n(t._source);
    var o = t._workInProgressVersionPrimary;
    if (o !== null ? e = o === n : (e = e.mutableReadLanes, (e = (Ki & e) === e) && (t._workInProgressVersionPrimary = n, So.push(t))), e) return r(t._source);
    throw So.push(t), Error(I(350))
}

function My(e, t, r, n) {
    var o = dt;
    if (o === null) throw Error(I(349));
    var a = t._getVersion, l = a(t._source), s = _i.current, u = s.useState(function () {
        return uh(o, t, r)
    }), c = u[1], v = u[0];
    u = Ye;
    var g = e.memoizedState, p = g.refs, m = p.getSnapshot, S = g.source;
    g = g.subscribe;
    var w = Me;
    return e.memoizedState = {refs: p, source: t, subscribe: n}, s.useEffect(function () {
        p.getSnapshot = r, p.setSnapshot = c;
        var d = a(t._source);
        if (!Lt(l, d)) {
            d = r(t._source), Lt(v, d) || (c(d), d = Jr(w), o.mutableReadLanes |= d & o.pendingLanes), d = o.mutableReadLanes, o.entangledLanes |= d;
            for (var f = o.entanglements, h = d; 0 < h;) {
                var C = 31 - nn(h), k = 1 << C;
                f[C] |= d, h &= ~k
            }
        }
    }, [r, t, n]), s.useEffect(function () {
        return n(t._source, function () {
            var d = p.getSnapshot, f = p.setSnapshot;
            try {
                f(d(t._source));
                var h = Jr(w);
                o.mutableReadLanes |= h & o.pendingLanes
            } catch (C) {
                f(function () {
                    throw C
                })
            }
        })
    }, [t, n]), Lt(m, r) && Lt(S, t) && Lt(g, n) || (e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: v
    }, e.dispatch = c = Sf.bind(null, Me, e), u.queue = e, u.baseQueue = null, v = uh(o, t, r), u.memoizedState = u.baseState = v), v
}

function Ry(e, t, r) {
    var n = Wn();
    return My(n, e, t, r)
}

function si(e) {
    var t = $n();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: e
    }, e = e.dispatch = Sf.bind(null, Me, e), [t.memoizedState, e]
}

function Pl(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    }, t = Me.updateQueue, t === null ? (t = {lastEffect: null}, Me.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
}

function ch(e) {
    var t = $n();
    return e = {current: e}, t.memoizedState = e
}

function Ml() {
    return Wn().memoizedState
}

function _c(e, t, r, n) {
    var o = $n();
    Me.flags |= e, o.memoizedState = Pl(1 | t, r, void 0, n === void 0 ? null : n)
}

function yf(e, t, r, n) {
    var o = Wn();
    n = n === void 0 ? null : n;
    var a = void 0;
    if (rt !== null) {
        var l = rt.memoizedState;
        if (a = l.destroy, n !== null && mf(n, l.deps)) {
            Pl(t, r, a, n);
            return
        }
    }
    Me.flags |= e, o.memoizedState = Pl(1 | t, r, a, n)
}

function dh(e, t) {
    return _c(516, 4, e, t)
}

function Rl(e, t) {
    return yf(516, 4, e, t)
}

function Ay(e, t) {
    return yf(4, 2, e, t)
}

function Iy(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function jy(e, t, r) {
    return r = r != null ? r.concat([e]) : null, yf(4, 2, Iy.bind(null, t, e), r)
}

function wf() {
}

function Ly(e, t) {
    var r = Wn();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && mf(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
}

function Ny(e, t) {
    var r = Wn();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && mf(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
}

function wP(e, t) {
    var r = $o();
    An(98 > r ? 98 : r, function () {
        e(!0)
    }), An(97 < r ? 97 : r, function () {
        var n = Dt.transition;
        Dt.transition = 1;
        try {
            e(!1), t()
        } finally {
            Dt.transition = n
        }
    })
}

function Sf(e, t, r) {
    var n = Tt(), o = Jr(e), a = {lane: o, action: r, eagerReducer: null, eagerState: null, next: null}, l = t.pending;
    if (l === null ? a.next = a : (a.next = l.next, l.next = a), t.pending = a, l = e.alternate, e === Me || l !== null && l === Me) Ti = Ol = !0; else {
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var s = t.lastRenderedState, u = l(s, r);
            if (a.eagerReducer = l, a.eagerState = u, Lt(u, s)) return
        } catch {
        } finally {
        }
        en(e, o, n)
    }
}

var Al = {
    readContext: Ft,
    useCallback: ht,
    useContext: ht,
    useEffect: ht,
    useImperativeHandle: ht,
    useLayoutEffect: ht,
    useMemo: ht,
    useReducer: ht,
    useRef: ht,
    useState: ht,
    useDebugValue: ht,
    useDeferredValue: ht,
    useTransition: ht,
    useMutableSource: ht,
    useOpaqueIdentifier: ht,
    unstable_isNewReconciler: !1
}, SP = {
    readContext: Ft, useCallback: function (e, t) {
        return $n().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: Ft, useEffect: dh, useImperativeHandle: function (e, t, r) {
        return r = r != null ? r.concat([e]) : null, _c(4, 2, Iy.bind(null, t, e), r)
    }, useLayoutEffect: function (e, t) {
        return _c(4, 2, e, t)
    }, useMemo: function (e, t) {
        var r = $n();
        return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
    }, useReducer: function (e, t, r) {
        var n = $n();
        return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = n.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, e = e.dispatch = Sf.bind(null, Me, e), [n.memoizedState, e]
    }, useRef: ch, useState: si, useDebugValue: wf, useDeferredValue: function (e) {
        var t = si(e), r = t[0], n = t[1];
        return dh(function () {
            var o = Dt.transition;
            Dt.transition = 1;
            try {
                n(e)
            } finally {
                Dt.transition = o
            }
        }, [e]), r
    }, useTransition: function () {
        var e = si(!1), t = e[0];
        return e = wP.bind(null, e[1]), ch(e), [e, t]
    }, useMutableSource: function (e, t, r) {
        var n = $n();
        return n.memoizedState = {refs: {getSnapshot: t, setSnapshot: null}, source: e, subscribe: r}, My(n, e, t, r)
    }, useOpaqueIdentifier: function () {
        if (pr) {
            var e = !1, t = vP(function () {
                throw e || (e = !0, r("r:" + (du++).toString(36))), Error(I(355))
            }), r = si(t)[1];
            return !(Me.mode & 2) && (Me.flags |= 516, Pl(5, function () {
                r("r:" + (du++).toString(36))
            }, void 0, null)), t
        }
        return t = "r:" + (du++).toString(36), si(t), t
    }, unstable_isNewReconciler: !1
}, CP = {
    readContext: Ft,
    useCallback: Ly,
    useContext: Ft,
    useEffect: Rl,
    useImperativeHandle: jy,
    useLayoutEffect: Ay,
    useMemo: Ny,
    useReducer: ai,
    useRef: Ml,
    useState: function () {
        return ai(dr)
    },
    useDebugValue: wf,
    useDeferredValue: function (e) {
        var t = ai(dr), r = t[0], n = t[1];
        return Rl(function () {
            var o = Dt.transition;
            Dt.transition = 1;
            try {
                n(e)
            } finally {
                Dt.transition = o
            }
        }, [e]), r
    },
    useTransition: function () {
        var e = ai(dr)[0];
        return [Ml().current, e]
    },
    useMutableSource: Ry,
    useOpaqueIdentifier: function () {
        return ai(dr)[0]
    },
    unstable_isNewReconciler: !1
}, bP = {
    readContext: Ft,
    useCallback: Ly,
    useContext: Ft,
    useEffect: Rl,
    useImperativeHandle: jy,
    useLayoutEffect: Ay,
    useMemo: Ny,
    useReducer: li,
    useRef: Ml,
    useState: function () {
        return li(dr)
    },
    useDebugValue: wf,
    useDeferredValue: function (e) {
        var t = li(dr), r = t[0], n = t[1];
        return Rl(function () {
            var o = Dt.transition;
            Dt.transition = 1;
            try {
                n(e)
            } finally {
                Dt.transition = o
            }
        }, [e]), r
    },
    useTransition: function () {
        var e = li(dr)[0];
        return [Ml().current, e]
    },
    useMutableSource: Ry,
    useOpaqueIdentifier: function () {
        return li(dr)[0]
    },
    unstable_isNewReconciler: !1
}, EP = Hn.ReactCurrentOwner, Kt = !1;

function gt(e, t, r, n) {
    t.child = e === null ? Oy(t, null, r, n) : _l(t, e.child, r, n)
}

function fh(e, t, r, n, o) {
    r = r.render;
    var a = t.ref;
    return wo(t, o), n = gf(e, t, r, n, a, o), e !== null && !Kt ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, kr(e, t, o)) : (t.flags |= 1, gt(e, t, n, o), t.child)
}

function vh(e, t, r, n, o, a) {
    if (e === null) {
        var l = r.type;
        return typeof l == "function" && !$f(l) && l.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = l, Dy(e, t, l, n, o, a)) : (e = sl(r.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e)
    }
    return l = e.child, !(o & a) && (o = l.memoizedProps, r = r.compare, r = r !== null ? r : Bi, r(o, n) && e.ref === t.ref) ? kr(e, t, a) : (t.flags |= 1, e = ln(l, n), e.ref = t.ref, e.return = t, t.child = e)
}

function Dy(e, t, r, n, o, a) {
    if (e !== null && Bi(e.memoizedProps, n) && e.ref === t.ref) if (Kt = !1, (a & o) !== 0) e.flags & 16384 && (Kt = !0); else return t.lanes = e.lanes, kr(e, t, a);
    return Tc(e, t, r, n, a)
}

function hu(e, t, r) {
    var n = t.pendingProps, o = n.children, a = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden" || n.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = {baseLanes: 0}, za(t, r); else if (r & 1073741824) t.memoizedState = {baseLanes: 0}, za(t, a !== null ? a.baseLanes : r); else return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {baseLanes: e}, za(t, e), null; else a !== null ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, za(t, n);
    return gt(e, t, o, r), t.child
}

function Fy(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 128)
}

function Tc(e, t, r, n, o) {
    var a = St(r) ? Rn : it.current;
    return a = xo(t, a), wo(t, o), r = gf(e, t, r, n, a, o), e !== null && !Kt ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, kr(e, t, o)) : (t.flags |= 1, gt(e, t, r, o), t.child)
}

function ph(e, t, r, n, o) {
    if (St(r)) {
        var a = !0;
        nl(t)
    } else a = !1;
    if (wo(t, o), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), _y(t, r, n), kc(t, r, n, o), n = !0; else if (e === null) {
        var l = t.stateNode, s = t.memoizedProps;
        l.props = s;
        var u = l.context, c = r.contextType;
        typeof c == "object" && c !== null ? c = Ft(c) : (c = St(r) ? Rn : it.current, c = xo(t, c));
        var v = r.getDerivedStateFromProps,
            g = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        g || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== n || u !== c) && ih(t, l, n, c), zr = !1;
        var p = t.memoizedState;
        l.state = p, Vi(t, n, l, o), u = t.memoizedState, s !== n || p !== u || wt.current || zr ? (typeof v == "function" && ($l(t, r, v, n), u = t.memoizedState), (s = zr || oh(t, r, s, n, p, u, c)) ? (g || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4)) : (typeof l.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = n, t.memoizedState = u), l.props = n, l.state = u, l.context = c, n = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4), n = !1)
    } else {
        l = t.stateNode, xy(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : Wt(t.type, s), l.props = c, g = t.pendingProps, p = l.context, u = r.contextType, typeof u == "object" && u !== null ? u = Ft(u) : (u = St(r) ? Rn : it.current, u = xo(t, u));
        var m = r.getDerivedStateFromProps;
        (v = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== g || p !== u) && ih(t, l, n, u), zr = !1, p = t.memoizedState, l.state = p, Vi(t, n, l, o);
        var S = t.memoizedState;
        s !== g || p !== S || wt.current || zr ? (typeof m == "function" && ($l(t, r, m, n), S = t.memoizedState), (c = zr || oh(t, r, c, n, p, S, u)) ? (v || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(n, S, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(n, S, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), t.memoizedProps = n, t.memoizedState = S), l.props = n, l.state = S, l.context = u, n = c) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), n = !1)
    }
    return Oc(e, t, r, n, a, o)
}

function Oc(e, t, r, n, o, a) {
    Fy(e, t);
    var l = (t.flags & 64) !== 0;
    if (!n && !l) return o && Jp(t, r, !1), kr(e, t, a);
    n = t.stateNode, EP.current = t;
    var s = l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && l ? (t.child = _l(t, e.child, null, a), t.child = _l(t, null, s, a)) : gt(e, t, s, a), t.memoizedState = n.state, o && Jp(t, r, !0), t.child
}

function hh(e) {
    var t = e.stateNode;
    t.pendingContext ? Qp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qp(e, t.context, !1), xc(e, t.containerInfo)
}

var Ba = {dehydrated: null, retryLane: 0};

function mh(e, t, r) {
    var n = t.pendingProps, o = Te.current, a = !1, l;
    return (l = (t.flags & 64) !== 0) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (a = !0, t.flags &= -65) : e !== null && e.memoizedState === null || n.fallback === void 0 || n.unstable_avoidThisFallback === !0 || (o |= 1), Oe(Te, o & 1), e === null ? (n.fallback !== void 0 && $c(t), e = n.children, o = n.fallback, a ? (e = gh(t, e, o, r), t.child.memoizedState = {baseLanes: r}, t.memoizedState = Ba, e) : typeof n.unstable_expectedLoadTime == "number" ? (e = gh(t, e, o, r), t.child.memoizedState = {baseLanes: r}, t.memoizedState = Ba, t.lanes = 33554432, e) : (r = _f({
        mode: "visible",
        children: e
    }, t.mode, r, null), r.return = t, t.child = r)) : e.memoizedState !== null ? a ? (n = wh(e, t, n.children, n.fallback, r), a = t.child, o = e.child.memoizedState, a.memoizedState = o === null ? {baseLanes: r} : {baseLanes: o.baseLanes | r}, a.childLanes = e.childLanes & ~r, t.memoizedState = Ba, n) : (r = yh(e, t, n.children, r), t.memoizedState = null, r) : a ? (n = wh(e, t, n.children, n.fallback, r), a = t.child, o = e.child.memoizedState, a.memoizedState = o === null ? {baseLanes: r} : {baseLanes: o.baseLanes | r}, a.childLanes = e.childLanes & ~r, t.memoizedState = Ba, n) : (r = yh(e, t, n.children, r), t.memoizedState = null, r)
}

function gh(e, t, r, n) {
    var o = e.mode, a = e.child;
    return t = {
        mode: "hidden",
        children: t
    }, !(o & 2) && a !== null ? (a.childLanes = 0, a.pendingProps = t) : a = _f(t, o, 0, null), r = Eo(r, o, n, null), a.return = e, r.return = e, a.sibling = r, e.child = a, r
}

function yh(e, t, r, n) {
    var o = e.child;
    return e = o.sibling, r = ln(o, {
        mode: "visible",
        children: r
    }), !(t.mode & 2) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = r
}

function wh(e, t, r, n, o) {
    var a = t.mode, l = e.child;
    e = l.sibling;
    var s = {mode: "hidden", children: r};
    return !(a & 2) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, l = r.lastEffect, l !== null ? (t.firstEffect = r.firstEffect, t.lastEffect = l, l.nextEffect = null) : t.firstEffect = t.lastEffect = null) : r = ln(l, s), e !== null ? n = ln(e, n) : (n = Eo(n, a, o, null), n.flags |= 2), n.return = t, r.return = t, r.sibling = n, t.child = r, n
}

function Sh(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ky(e.return, t)
}

function mu(e, t, r, n, o, a) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
        lastEffect: a
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = n, l.tail = r, l.tailMode = o, l.lastEffect = a)
}

function Ch(e, t, r) {
    var n = t.pendingProps, o = n.revealOrder, a = n.tail;
    if (gt(e, t, n.children, r), n = Te.current, n & 2) n = n & 1 | 2, t.flags |= 64; else {
        if (e !== null && e.flags & 64) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Sh(e, r); else if (e.tag === 19) Sh(e, r); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (Oe(Te, n), !(t.mode & 2)) t.memoizedState = null; else switch (o) {
        case"forwards":
            for (r = t.child, o = null; r !== null;) e = r.alternate, e !== null && Tl(e) === null && (o = r), r = r.sibling;
            r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), mu(t, !1, o, r, a, t.lastEffect);
            break;
        case"backwards":
            for (r = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Tl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = r, r = o, o = e
            }
            mu(t, !0, r, null, a, t.lastEffect);
            break;
        case"together":
            mu(t, !1, null, null, void 0, t.lastEffect);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function kr(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), ia |= t.lanes, r & t.childLanes) {
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for (e = t.child, r = ln(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = ln(e, e.pendingProps), r.return = t;
            r.sibling = null
        }
        return t.child
    }
    return null
}

var By, Pc, zy, Hy;
By = function (e, t) {
    for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode); else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
Pc = function () {
};
zy = function (e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode, xn(vr.current);
        var a = null;
        switch (r) {
            case"input":
                o = nc(e, o), n = nc(e, n), a = [];
                break;
            case"option":
                o = ac(e, o), n = ac(e, n), a = [];
                break;
            case"select":
                o = Ee({}, o, {value: void 0}), n = Ee({}, n, {value: void 0}), a = [];
                break;
            case"textarea":
                o = lc(e, o), n = lc(e, n), a = [];
                break;
            default:
                typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Sl)
        }
        cc(r, n);
        var l;
        r = null;
        for (c in o) if (!n.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
            var s = o[c];
            for (l in s) s.hasOwnProperty(l) && (r || (r = {}), r[l] = "")
        } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ai.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
        for (c in n) {
            var u = n[c];
            if (s = o != null ? o[c] : void 0, n.hasOwnProperty(c) && u !== s && (u != null || s != null)) if (c === "style") if (s) {
                for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r || (r = {}), r[l] = "");
                for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (r || (r = {}), r[l] = u[l])
            } else r || (a || (a = []), a.push(c, r)), r = u; else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (a = a || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ai.hasOwnProperty(c) ? (u != null && c === "onScroll" && Se("scroll", e), a || s === u || (a = [])) : typeof u == "object" && u !== null && u.$$typeof === Kd ? u.toString() : (a = a || []).push(c, u))
        }
        r && (a = a || []).push("style", r);
        var c = a;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
Hy = function (e, t, r, n) {
    r !== n && (t.flags |= 4)
};

function ui(e, t) {
    if (!pr) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case"collapsed":
            r = e.tail;
            for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function kP(e, t, r) {
    var n = t.pendingProps;
    switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null;
        case 1:
            return St(t.type) && bl(), null;
        case 3:
            return _o(), Ce(wt), Ce(it), hf(), n = t.stateNode, n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Fa(t) ? t.flags |= 4 : n.hydrate || (t.flags |= 256)), Pc(t), null;
        case 5:
            pf(t);
            var o = xn(Ui.current);
            if (r = t.type, e !== null && t.stateNode != null) zy(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 128); else {
                if (!n) {
                    if (t.stateNode === null) throw Error(I(166));
                    return null
                }
                if (e = xn(vr.current), Fa(t)) {
                    n = t.stateNode, r = t.type;
                    var a = t.memoizedProps;
                    switch (n[Ur] = t, n[Cl] = a, r) {
                        case"dialog":
                            Se("cancel", n), Se("close", n);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            Se("load", n);
                            break;
                        case"video":
                        case"audio":
                            for (e = 0; e < hi.length; e++) Se(hi[e], n);
                            break;
                        case"source":
                            Se("error", n);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            Se("error", n), Se("load", n);
                            break;
                        case"details":
                            Se("toggle", n);
                            break;
                        case"input":
                            Cp(n, a), Se("invalid", n);
                            break;
                        case"select":
                            n._wrapperState = {wasMultiple: !!a.multiple}, Se("invalid", n);
                            break;
                        case"textarea":
                            Ep(n, a), Se("invalid", n)
                    }
                    cc(r, a), e = null;
                    for (var l in a) a.hasOwnProperty(l) && (o = a[l], l === "children" ? typeof o == "string" ? n.textContent !== o && (e = ["children", o]) : typeof o == "number" && n.textContent !== "" + o && (e = ["children", "" + o]) : Ai.hasOwnProperty(l) && o != null && l === "onScroll" && Se("scroll", n));
                    switch (r) {
                        case"input":
                            Aa(n), bp(n, a, !0);
                            break;
                        case"textarea":
                            Aa(n), kp(n);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof a.onClick == "function" && (n.onclick = Sl)
                    }
                    n = e, t.updateQueue = n, n !== null && (t.flags |= 4)
                } else {
                    switch (l = o.nodeType === 9 ? o : o.ownerDocument, e === sc.html && (e = Lg(r)), e === sc.html ? r === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = l.createElement(r, {is: n.is}) : (e = l.createElement(r), r === "select" && (l = e, n.multiple ? l.multiple = !0 : n.size && (l.size = n.size))) : e = l.createElementNS(e, r), e[Ur] = t, e[Cl] = n, By(e, t, !1, !1), t.stateNode = e, l = dc(r, n), r) {
                        case"dialog":
                            Se("cancel", e), Se("close", e), o = n;
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            Se("load", e), o = n;
                            break;
                        case"video":
                        case"audio":
                            for (o = 0; o < hi.length; o++) Se(hi[o], e);
                            o = n;
                            break;
                        case"source":
                            Se("error", e), o = n;
                            break;
                        case"img":
                        case"image":
                        case"link":
                            Se("error", e), Se("load", e), o = n;
                            break;
                        case"details":
                            Se("toggle", e), o = n;
                            break;
                        case"input":
                            Cp(e, n), o = nc(e, n), Se("invalid", e);
                            break;
                        case"option":
                            o = ac(e, n);
                            break;
                        case"select":
                            e._wrapperState = {wasMultiple: !!n.multiple}, o = Ee({}, n, {value: void 0}), Se("invalid", e);
                            break;
                        case"textarea":
                            Ep(e, n), o = lc(e, n), Se("invalid", e);
                            break;
                        default:
                            o = n
                    }
                    cc(r, o);
                    var s = o;
                    for (a in s) if (s.hasOwnProperty(a)) {
                        var u = s[a];
                        a === "style" ? Fg(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ng(e, u)) : a === "children" ? typeof u == "string" ? (r !== "textarea" || u !== "") && Ii(e, u) : typeof u == "number" && Ii(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ai.hasOwnProperty(a) ? u != null && a === "onScroll" && Se("scroll", e) : u != null && Bd(e, a, u, l))
                    }
                    switch (r) {
                        case"input":
                            Aa(e), bp(e, n, !1);
                            break;
                        case"textarea":
                            Aa(e), kp(e);
                            break;
                        case"option":
                            n.value != null && e.setAttribute("value", "" + rn(n.value));
                            break;
                        case"select":
                            e.multiple = !!n.multiple, a = n.value, a != null ? ho(e, !!n.multiple, a, !1) : n.defaultValue != null && ho(e, !!n.multiple, n.defaultValue, !0);
                            break;
                        default:
                            typeof o.onClick == "function" && (e.onclick = Sl)
                    }
                    hy(r, n) && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 128)
            }
            return null;
        case 6:
            if (e && t.stateNode != null) Hy(e, t, e.memoizedProps, n); else {
                if (typeof n != "string" && t.stateNode === null) throw Error(I(166));
                r = xn(Ui.current), xn(vr.current), Fa(t) ? (n = t.stateNode, r = t.memoizedProps, n[Ur] = t, n.nodeValue !== r && (t.flags |= 4)) : (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ur] = t, t.stateNode = n)
            }
            return null;
        case 13:
            return Ce(Te), n = t.memoizedState, t.flags & 64 ? (t.lanes = r, t) : (n = n !== null, r = !1, e === null ? t.memoizedProps.fallback !== void 0 && Fa(t) : r = e.memoizedState !== null, n && !r && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || Te.current & 1 ? qe === 0 && (qe = 3) : ((qe === 0 || qe === 3) && (qe = 4), dt === null || !(ia & 134217727) && !(Bo & 134217727) || Co(dt, ot))), (n || r) && (t.flags |= 4), null);
        case 4:
            return _o(), Pc(t), e === null && fy(t.stateNode.containerInfo), null;
        case 10:
            return ff(t), null;
        case 17:
            return St(t.type) && bl(), null;
        case 19:
            if (Ce(Te), n = t.memoizedState, n === null) return null;
            if (a = (t.flags & 64) !== 0, l = n.rendering, l === null) if (a) ui(n, !1); else {
                if (qe !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null;) {
                    if (l = Tl(e), l !== null) {
                        for (t.flags |= 64, ui(n, !1), a = l.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), n.lastEffect === null && (t.firstEffect = null), t.lastEffect = n.lastEffect, n = r, r = t.child; r !== null;) a = r, e = n, a.flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), r = r.sibling;
                        return Oe(Te, Te.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                n.tail !== null && nt() > Lc && (t.flags |= 64, a = !0, ui(n, !1), t.lanes = 33554432)
            } else {
                if (!a) if (e = Tl(l), e !== null) {
                    if (t.flags |= 64, a = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), ui(n, !0), n.tail === null && n.tailMode === "hidden" && !l.alternate && !pr) return t = t.lastEffect = n.lastEffect, t !== null && (t.nextEffect = null), null
                } else 2 * nt() - n.renderingStartTime > Lc && r !== 1073741824 && (t.flags |= 64, a = !0, ui(n, !1), t.lanes = 33554432);
                n.isBackwards ? (l.sibling = t.child, t.child = l) : (r = n.last, r !== null ? r.sibling = l : t.child = l, n.last = l)
            }
            return n.tail !== null ? (r = n.tail, n.rendering = r, n.tail = r.sibling, n.lastEffect = t.lastEffect, n.renderingStartTime = nt(), r.sibling = null, t = Te.current, Oe(Te, a ? t & 1 | 2 : t & 1), r) : null;
        case 23:
        case 24:
            return xf(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && n.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null
    }
    throw Error(I(156, t.tag))
}

function xP(e) {
    switch (e.tag) {
        case 1:
            St(e.type) && bl();
            var t = e.flags;
            return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
        case 3:
            if (_o(), Ce(wt), Ce(it), hf(), t = e.flags, t & 64) throw Error(I(285));
            return e.flags = t & -4097 | 64, e;
        case 5:
            return pf(e), null;
        case 13:
            return Ce(Te), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
        case 19:
            return Ce(Te), null;
        case 4:
            return _o(), null;
        case 10:
            return ff(e), null;
        case 23:
        case 24:
            return xf(), null;
        default:
            return null
    }
}

function Cf(e, t) {
    try {
        var r = "", n = t;
        do r += oO(n), n = n.return; while (n);
        var o = r
    } catch (a) {
        o = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {value: e, source: t, stack: o}
}

function Mc(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function () {
            throw r
        })
    }
}

var $P = typeof WeakMap == "function" ? WeakMap : Map;

function Vy(e, t, r) {
    r = Zr(-1, r), r.tag = 3, r.payload = {element: null};
    var n = t.value;
    return r.callback = function () {
        jl || (jl = !0, Nc = n), Mc(e, t)
    }, r
}

function Wy(e, t, r) {
    r = Zr(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function () {
            return Mc(e, t), n(o)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function () {
        typeof n != "function" && (fr === null ? fr = new Set([this]) : fr.add(this), Mc(e, t));
        var l = t.stack;
        this.componentDidCatch(t.value, {componentStack: l !== null ? l : ""})
    }), r
}

var _P = typeof WeakSet == "function" ? WeakSet : Set;

function bh(e) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
        t(null)
    } catch (r) {
        tn(e, r)
    } else t.current = null
}

function TP(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            return;
        case 1:
            if (t.flags & 256 && e !== null) {
                var r = e.memoizedProps, n = e.memoizedState;
                e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? r : Wt(t.type, r), n), e.__reactInternalSnapshotBeforeUpdate = t
            }
            return;
        case 3:
            t.flags & 256 && sf(t.stateNode.containerInfo);
            return;
        case 5:
        case 6:
        case 4:
        case 17:
            return
    }
    throw Error(I(163))
}

function OP(e, t, r) {
    switch (r.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            if (t = r.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                e = t = t.next;
                do {
                    if ((e.tag & 3) === 3) {
                        var n = e.create;
                        e.destroy = n()
                    }
                    e = e.next
                } while (e !== t)
            }
            if (t = r.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                e = t = t.next;
                do {
                    var o = e;
                    n = o.next, o = o.tag, o & 4 && o & 1 && (Jy(r, e), NP(r, e)), e = n
                } while (e !== t)
            }
            return;
        case 1:
            e = r.stateNode, r.flags & 4 && (t === null ? e.componentDidMount() : (n = r.elementType === r.type ? t.memoizedProps : Wt(r.type, t.memoizedProps), e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), t = r.updateQueue, t !== null && nh(r, t, e);
            return;
        case 3:
            if (t = r.updateQueue, t !== null) {
                if (e = null, r.child !== null) switch (r.child.tag) {
                    case 5:
                        e = r.child.stateNode;
                        break;
                    case 1:
                        e = r.child.stateNode
                }
                nh(r, t, e)
            }
            return;
        case 5:
            e = r.stateNode, t === null && r.flags & 4 && hy(r.type, r.memoizedProps) && e.focus();
            return;
        case 6:
            return;
        case 4:
            return;
        case 12:
            return;
        case 13:
            r.memoizedState === null && (r = r.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null && Xg(r))));
            return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
            return
    }
    throw Error(I(163))
}

function Eh(e, t) {
    for (var r = e; ;) {
        if (r.tag === 5) {
            var n = r.stateNode;
            if (t) n = n.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none"; else {
                n = r.stateNode;
                var o = r.memoizedProps.style;
                o = o != null && o.hasOwnProperty("display") ? o.display : null, n.style.display = Dg("display", o)
            }
        } else if (r.tag === 6) r.stateNode.nodeValue = t ? "" : r.memoizedProps; else if ((r.tag !== 23 && r.tag !== 24 || r.memoizedState === null || r === e) && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === e) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === e) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
}

function kh(e, t) {
    if (Tn && typeof Tn.onCommitFiberUnmount == "function") try {
        Tn.onCommitFiberUnmount(uf, t)
    } catch {
    }
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                var r = e = e.next;
                do {
                    var n = r, o = n.destroy;
                    if (n = n.tag, o !== void 0) if (n & 4) Jy(t, r); else {
                        n = t;
                        try {
                            o()
                        } catch (a) {
                            tn(n, a)
                        }
                    }
                    r = r.next
                } while (r !== e)
            }
            break;
        case 1:
            if (bh(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
            } catch (a) {
                tn(t, a)
            }
            break;
        case 5:
            bh(t);
            break;
        case 4:
            Uy(e, t)
    }
}

function xh(e) {
    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
}

function $h(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function _h(e) {
    e:{
        for (var t = e.return; t !== null;) {
            if ($h(t)) break e;
            t = t.return
        }
        throw Error(I(160))
    }
    var r = t;
    switch (t = r.stateNode, r.tag) {
        case 5:
            var n = !1;
            break;
        case 3:
            t = t.containerInfo, n = !0;
            break;
        case 4:
            t = t.containerInfo, n = !0;
            break;
        default:
            throw Error(I(161))
    }
    r.flags & 16 && (Ii(t, ""), r.flags &= -17);
    e:t:for (r = e; ;) {
        for (; r.sibling === null;) {
            if (r.return === null || $h(r.return)) {
                r = null;
                break e
            }
            r = r.return
        }
        for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18;) {
            if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
            r.child.return = r, r = r.child
        }
        if (!(r.flags & 2)) {
            r = r.stateNode;
            break e
        }
    }
    n ? Rc(e, r, t) : Ac(e, r, t)
}

function Rc(e, t, r) {
    var n = e.tag, o = n === 5 || n === 6;
    if (o) e = o ? e.stateNode : e.stateNode.instance, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Sl)); else if (n !== 4 && (e = e.child, e !== null)) for (Rc(e, t, r), e = e.sibling; e !== null;) Rc(e, t, r), e = e.sibling
}

function Ac(e, t, r) {
    var n = e.tag, o = n === 5 || n === 6;
    if (o) e = o ? e.stateNode : e.stateNode.instance, t ? r.insertBefore(e, t) : r.appendChild(e); else if (n !== 4 && (e = e.child, e !== null)) for (Ac(e, t, r), e = e.sibling; e !== null;) Ac(e, t, r), e = e.sibling
}

function Uy(e, t) {
    for (var r = t, n = !1, o, a; ;) {
        if (!n) {
            n = r.return;
            e:for (; ;) {
                if (n === null) throw Error(I(160));
                switch (o = n.stateNode, n.tag) {
                    case 5:
                        a = !1;
                        break e;
                    case 3:
                        o = o.containerInfo, a = !0;
                        break e;
                    case 4:
                        o = o.containerInfo, a = !0;
                        break e
                }
                n = n.return
            }
            n = !0
        }
        if (r.tag === 5 || r.tag === 6) {
            e:for (var l = e, s = r, u = s; ;) if (kh(l, u), u.child !== null && u.tag !== 4) u.child.return = u, u = u.child; else {
                if (u === s) break e;
                for (; u.sibling === null;) {
                    if (u.return === null || u.return === s) break e;
                    u = u.return
                }
                u.sibling.return = u.return, u = u.sibling
            }
            a ? (l = o, s = r.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(s) : l.removeChild(s)) : o.removeChild(r.stateNode)
        } else if (r.tag === 4) {
            if (r.child !== null) {
                o = r.stateNode.containerInfo, a = !0, r.child.return = r, r = r.child;
                continue
            }
        } else if (kh(e, r), r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return, r.tag === 4 && (n = !1)
        }
        r.sibling.return = r.return, r = r.sibling
    }
}

function gu(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            var r = t.updateQueue;
            if (r = r !== null ? r.lastEffect : null, r !== null) {
                var n = r = r.next;
                do (n.tag & 3) === 3 && (e = n.destroy, n.destroy = void 0, e !== void 0 && e()), n = n.next; while (n !== r)
            }
            return;
        case 1:
            return;
        case 5:
            if (r = t.stateNode, r != null) {
                n = t.memoizedProps;
                var o = e !== null ? e.memoizedProps : n;
                e = t.type;
                var a = t.updateQueue;
                if (t.updateQueue = null, a !== null) {
                    for (r[Cl] = n, e === "input" && n.type === "radio" && n.name != null && Ig(r, n), dc(e, o), t = dc(e, n), o = 0; o < a.length; o += 2) {
                        var l = a[o], s = a[o + 1];
                        l === "style" ? Fg(r, s) : l === "dangerouslySetInnerHTML" ? Ng(r, s) : l === "children" ? Ii(r, s) : Bd(r, l, s, t)
                    }
                    switch (e) {
                        case"input":
                            oc(r, n);
                            break;
                        case"textarea":
                            jg(r, n);
                            break;
                        case"select":
                            e = r._wrapperState.wasMultiple, r._wrapperState.wasMultiple = !!n.multiple, a = n.value, a != null ? ho(r, !!n.multiple, a, !1) : e !== !!n.multiple && (n.defaultValue != null ? ho(r, !!n.multiple, n.defaultValue, !0) : ho(r, !!n.multiple, n.multiple ? [] : "", !1))
                    }
                }
            }
            return;
        case 6:
            if (t.stateNode === null) throw Error(I(162));
            t.stateNode.nodeValue = t.memoizedProps;
            return;
        case 3:
            r = t.stateNode, r.hydrate && (r.hydrate = !1, Xg(r.containerInfo));
            return;
        case 12:
            return;
        case 13:
            t.memoizedState !== null && (kf = nt(), Eh(t.child, !0)), Th(t);
            return;
        case 19:
            Th(t);
            return;
        case 17:
            return;
        case 23:
        case 24:
            Eh(t, t.memoizedState !== null);
            return
    }
    throw Error(I(163))
}

function Th(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new _P), t.forEach(function (n) {
            var o = BP.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(o, o))
        })
    }
}

function PP(e, t) {
    return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1
}

var MP = Math.ceil, Il = Hn.ReactCurrentDispatcher, bf = Hn.ReactCurrentOwner, ee = 0, dt = null, Ne = null, ot = 0,
    In = 0, Ic = vn(0), qe = 0, ds = null, Fo = 0, ia = 0, Bo = 0, Ef = 0, jc = null, kf = 0, Lc = 1 / 0;

function zo() {
    Lc = nt() + 500
}

var H = null, jl = !1, Nc = null, fr = null, an = !1, Oi = null, mi = 90, Dc = [], Fc = [], $r = null, Pi = 0,
    Bc = null, il = -1, br = 0, al = 0, Mi = null, ll = !1;

function Tt() {
    return ee & 48 ? nt() : il !== -1 ? il : il = nt()
}

function Jr(e) {
    if (e = e.mode, !(e & 2)) return 1;
    if (!(e & 4)) return $o() === 99 ? 1 : 2;
    if (br === 0 && (br = Fo), yP.transition !== 0) {
        al !== 0 && (al = jc !== null ? jc.pendingLanes : 0), e = br;
        var t = 4186112 & ~al;
        return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t
    }
    return e = $o(), ee & 4 && e === 98 ? e = yl(12, br) : (e = SO(e), e = yl(e, br)), e
}

function en(e, t, r) {
    if (50 < Pi) throw Pi = 0, Bc = null, Error(I(185));
    if (e = fs(e, t), e === null) return null;
    os(e, t, r), e === dt && (Bo |= t, qe === 4 && Co(e, ot));
    var n = $o();
    t === 1 ? ee & 8 && !(ee & 48) ? zc(e) : (Bt(e, r), ee === 0 && (zo(), gr())) : (!(ee & 4) || n !== 98 && n !== 99 || ($r === null ? $r = new Set([e]) : $r.add(e)), Bt(e, r)), jc = e
}

function fs(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null
}

function Bt(e, t) {
    for (var r = e.callbackNode, n = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var s = 31 - nn(l), u = 1 << s, c = a[s];
        if (c === -1) {
            if (!(u & n) || u & o) {
                c = t, to(u);
                var v = ge;
                a[s] = 10 <= v ? c + 250 : 6 <= v ? c + 5e3 : -1
            }
        } else c <= t && (e.expiredLanes |= u);
        l &= ~u
    }
    if (n = Di(e, e === dt ? ot : 0), t = ge, n === 0) r !== null && (r !== fu && bc(r), e.callbackNode = null, e.callbackPriority = 0); else {
        if (r !== null) {
            if (e.callbackPriority === t) return;
            r !== fu && bc(r)
        }
        t === 15 ? (r = zc.bind(null, e), Cr === null ? (Cr = [r], ol = cf(us, Ey)) : Cr.push(r), r = fu) : t === 14 ? r = Hi(99, zc.bind(null, e)) : (r = CO(t), r = Hi(r, Ky.bind(null, e))), e.callbackPriority = t, e.callbackNode = r
    }
}

function Ky(e) {
    if (il = -1, al = br = 0, ee & 48) throw Error(I(327));
    var t = e.callbackNode;
    if (pn() && e.callbackNode !== t) return null;
    var r = Di(e, e === dt ? ot : 0);
    if (r === 0) return null;
    var n = r, o = ee;
    ee |= 16;
    var a = qy();
    (dt !== e || ot !== n) && (zo(), bo(e, n));
    do try {
        IP();
        break
    } catch (s) {
        Xy(e, s)
    } while (!0);
    if (df(), Il.current = a, ee = o, Ne !== null ? n = 0 : (dt = null, ot = 0, n = qe), Fo & Bo) bo(e, 0); else if (n !== 0) {
        if (n === 2 && (ee |= 64, e.hydrate && (e.hydrate = !1, sf(e.containerInfo)), r = ry(e), r !== 0 && (n = gi(e, r))), n === 1) throw t = ds, bo(e, 0), Co(e, r), Bt(e, nt()), t;
        switch (e.finishedWork = e.current.alternate, e.finishedLanes = r, n) {
            case 0:
            case 1:
                throw Error(I(345));
            case 2:
                wn(e);
                break;
            case 3:
                if (Co(e, r), (r & 62914560) === r && (n = kf + 500 - nt(), 10 < n)) {
                    if (Di(e, 0) !== 0) break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        Tt(), e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Xp(wn.bind(null, e), n);
                    break
                }
                wn(e);
                break;
            case 4:
                if (Co(e, r), (r & 4186112) === r) break;
                for (n = e.eventTimes, o = -1; 0 < r;) {
                    var l = 31 - nn(r);
                    a = 1 << l, l = n[l], l > o && (o = l), r &= ~a
                }
                if (r = o, r = nt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * MP(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = Xp(wn.bind(null, e), r);
                    break
                }
                wn(e);
                break;
            case 5:
                wn(e);
                break;
            default:
                throw Error(I(329))
        }
    }
    return Bt(e, nt()), e.callbackNode === t ? Ky.bind(null, e) : null
}

function Co(e, t) {
    for (t &= ~Ef, t &= ~Bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var r = 31 - nn(t), n = 1 << r;
        e[r] = -1, t &= ~n
    }
}

function zc(e) {
    if (ee & 48) throw Error(I(327));
    if (pn(), e === dt && e.expiredLanes & ot) {
        var t = ot, r = gi(e, t);
        Fo & Bo && (t = Di(e, t), r = gi(e, t))
    } else t = Di(e, 0), r = gi(e, t);
    if (e.tag !== 0 && r === 2 && (ee |= 64, e.hydrate && (e.hydrate = !1, sf(e.containerInfo)), t = ry(e), t !== 0 && (r = gi(e, t))), r === 1) throw r = ds, bo(e, 0), Co(e, t), Bt(e, nt()), r;
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e), Bt(e, nt()), null
}

function RP() {
    if ($r !== null) {
        var e = $r;
        $r = null, e.forEach(function (t) {
            t.expiredLanes |= 24 & t.pendingLanes, Bt(t, nt())
        })
    }
    gr()
}

function Gy(e, t) {
    var r = ee;
    ee |= 1;
    try {
        return e(t)
    } finally {
        ee = r, ee === 0 && (zo(), gr())
    }
}

function Yy(e, t) {
    var r = ee;
    ee &= -2, ee |= 8;
    try {
        return e(t)
    } finally {
        ee = r, ee === 0 && (zo(), gr())
    }
}

function za(e, t) {
    Oe(Ic, In), In |= t, Fo |= t
}

function xf() {
    In = Ic.current, Ce(Ic)
}

function bo(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, fP(r)), Ne !== null) for (r = Ne.return; r !== null;) {
        var n = r;
        switch (n.tag) {
            case 1:
                n = n.type.childContextTypes, n != null && bl();
                break;
            case 3:
                _o(), Ce(wt), Ce(it), hf();
                break;
            case 5:
                pf(n);
                break;
            case 4:
                _o();
                break;
            case 13:
                Ce(Te);
                break;
            case 19:
                Ce(Te);
                break;
            case 10:
                ff(n);
                break;
            case 23:
            case 24:
                xf()
        }
        r = r.return
    }
    dt = e, Ne = ln(e.current, null), ot = In = Fo = t, qe = 0, ds = null, Ef = Bo = ia = 0
}

function Xy(e, t) {
    do {
        var r = Ne;
        try {
            if (df(), _i.current = Al, Ol) {
                for (var n = Me.memoizedState; n !== null;) {
                    var o = n.queue;
                    o !== null && (o.pending = null), n = n.next
                }
                Ol = !1
            }
            if (Ki = 0, Ye = rt = Me = null, Ti = !1, bf.current = null, r === null || r.return === null) {
                qe = 1, ds = t, Ne = null;
                break
            }
            e:{
                var a = e, l = r.return, s = r, u = t;
                if (t = ot, s.flags |= 2048, s.firstEffect = s.lastEffect = null, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u;
                    if (!(s.mode & 2)) {
                        var v = s.alternate;
                        v ? (s.updateQueue = v.updateQueue, s.memoizedState = v.memoizedState, s.lanes = v.lanes) : (s.updateQueue = null, s.memoizedState = null)
                    }
                    var g = (Te.current & 1) !== 0, p = l;
                    do {
                        var m;
                        if (m = p.tag === 13) {
                            var S = p.memoizedState;
                            if (S !== null) m = S.dehydrated !== null; else {
                                var w = p.memoizedProps;
                                m = w.fallback === void 0 ? !1 : w.unstable_avoidThisFallback !== !0 ? !0 : !g
                            }
                        }
                        if (m) {
                            var d = p.updateQueue;
                            if (d === null) {
                                var f = new Set;
                                f.add(c), p.updateQueue = f
                            } else d.add(c);
                            if (!(p.mode & 2)) {
                                if (p.flags |= 64, s.flags |= 16384, s.flags &= -2981, s.tag === 1) if (s.alternate === null) s.tag = 17; else {
                                    var h = Zr(-1, 1);
                                    h.tag = 2, Qr(s, h)
                                }
                                s.lanes |= 1;
                                break e
                            }
                            u = void 0, s = t;
                            var C = a.pingCache;
                            if (C === null ? (C = a.pingCache = new $P, u = new Set, C.set(c, u)) : (u = C.get(c), u === void 0 && (u = new Set, C.set(c, u))), !u.has(s)) {
                                u.add(s);
                                var k = FP.bind(null, a, c, s);
                                c.then(k, k)
                            }
                            p.flags |= 4096, p.lanes = t;
                            break e
                        }
                        p = p.return
                    } while (p !== null);
                    u = Error((po(s.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)
                }
                qe !== 5 && (qe = 2), u = Cf(u, s), p = l;
                do {
                    switch (p.tag) {
                        case 3:
                            a = u, p.flags |= 4096, t &= -t, p.lanes |= t;
                            var $ = Vy(p, a, t);
                            rh(p, $);
                            break e;
                        case 1:
                            a = u;
                            var x = p.type, _ = p.stateNode;
                            if (!(p.flags & 64) && (typeof x.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (fr === null || !fr.has(_)))) {
                                p.flags |= 4096, t &= -t, p.lanes |= t;
                                var R = Wy(p, a, t);
                                rh(p, R);
                                break e
                            }
                    }
                    p = p.return
                } while (p !== null)
            }
            Qy(r)
        } catch (M) {
            t = M, Ne === r && r !== null && (Ne = r = r.return);
            continue
        }
        break
    } while (!0)
}

function qy() {
    var e = Il.current;
    return Il.current = Al, e === null ? Al : e
}

function gi(e, t) {
    var r = ee;
    ee |= 16;
    var n = qy();
    dt === e && ot === t || bo(e, t);
    do try {
        AP();
        break
    } catch (o) {
        Xy(e, o)
    } while (!0);
    if (df(), ee = r, Il.current = n, Ne !== null) throw Error(I(261));
    return dt = null, ot = 0, qe
}

function AP() {
    for (; Ne !== null;) Zy(Ne)
}

function IP() {
    for (; Ne !== null && !hP();) Zy(Ne)
}

function Zy(e) {
    var t = e1(e.alternate, e, In);
    e.memoizedProps = e.pendingProps, t === null ? Qy(e) : Ne = t, bf.current = null
}

function Qy(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return, t.flags & 2048) {
            if (r = xP(t), r !== null) {
                r.flags &= 2047, Ne = r;
                return
            }
            e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
        } else {
            if (r = kP(r, t, In), r !== null) {
                Ne = r;
                return
            }
            if (r = t, r.tag !== 24 && r.tag !== 23 || r.memoizedState === null || In & 1073741824 || !(r.mode & 4)) {
                for (var n = 0, o = r.child; o !== null;) n |= o.lanes | o.childLanes, o = o.sibling;
                r.childLanes = n
            }
            e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
        }
        if (t = t.sibling, t !== null) {
            Ne = t;
            return
        }
        Ne = t = e
    } while (t !== null);
    qe === 0 && (qe = 5)
}

function wn(e) {
    var t = $o();
    return An(99, jP.bind(null, e, t)), null
}

function jP(e, t) {
    do pn(); while (Oi !== null);
    if (ee & 48) throw Error(I(327));
    var r = e.finishedWork;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(I(177));
    e.callbackNode = null;
    var n = r.lanes | r.childLanes, o = n, a = e.pendingLanes & ~o;
    e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
    for (var l = e.eventTimes, s = e.expirationTimes; 0 < a;) {
        var u = 31 - nn(a), c = 1 << u;
        o[u] = 0, l[u] = -1, s[u] = -1, a &= ~c
    }
    if ($r !== null && !(n & 24) && $r.has(e) && $r.delete(e), e === dt && (Ne = dt = null, ot = 0), 1 < r.flags ? r.lastEffect !== null ? (r.lastEffect.nextEffect = r, n = r.firstEffect) : n = r : n = r.firstEffect, n !== null) {
        if (o = ee, ee |= 32, bf.current = null, uu = el, l = Hp(), gc(l)) {
            if ("selectionStart" in l) s = {
                start: l.selectionStart,
                end: l.selectionEnd
            }; else e:if (s = (s = l.ownerDocument) && s.defaultView || window, (c = s.getSelection && s.getSelection()) && c.rangeCount !== 0) {
                s = c.anchorNode, a = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
                try {
                    s.nodeType, u.nodeType
                } catch {
                    s = null;
                    break e
                }
                var v = 0, g = -1, p = -1, m = 0, S = 0, w = l, d = null;
                t:for (; ;) {
                    for (var f; w !== s || a !== 0 && w.nodeType !== 3 || (g = v + a), w !== u || c !== 0 && w.nodeType !== 3 || (p = v + c), w.nodeType === 3 && (v += w.nodeValue.length), (f = w.firstChild) !== null;) d = w, w = f;
                    for (; ;) {
                        if (w === l) break t;
                        if (d === s && ++m === a && (g = v), d === u && ++S === c && (p = v), (f = w.nextSibling) !== null) break;
                        w = d, d = w.parentNode
                    }
                    w = f
                }
                s = g === -1 || p === -1 ? null : {start: g, end: p}
            } else s = null;
            s = s || {start: 0, end: 0}
        } else s = null;
        cu = {focusedElem: l, selectionRange: s}, el = !1, Mi = null, ll = !1, H = n;
        do try {
            LP()
        } catch (M) {
            if (H === null) throw Error(I(330));
            tn(H, M), H = H.nextEffect
        } while (H !== null);
        Mi = null, H = n;
        do try {
            for (l = e; H !== null;) {
                var h = H.flags;
                if (h & 16 && Ii(H.stateNode, ""), h & 128) {
                    var C = H.alternate;
                    if (C !== null) {
                        var k = C.ref;
                        k !== null && (typeof k == "function" ? k(null) : k.current = null)
                    }
                }
                switch (h & 1038) {
                    case 2:
                        _h(H), H.flags &= -3;
                        break;
                    case 6:
                        _h(H), H.flags &= -3, gu(H.alternate, H);
                        break;
                    case 1024:
                        H.flags &= -1025;
                        break;
                    case 1028:
                        H.flags &= -1025, gu(H.alternate, H);
                        break;
                    case 4:
                        gu(H.alternate, H);
                        break;
                    case 8:
                        s = H, Uy(l, s);
                        var $ = s.alternate;
                        xh(s), $ !== null && xh($)
                }
                H = H.nextEffect
            }
        } catch (M) {
            if (H === null) throw Error(I(330));
            tn(H, M), H = H.nextEffect
        } while (H !== null);
        if (k = cu, C = Hp(), h = k.focusedElem, l = k.selectionRange, C !== h && h && h.ownerDocument && cy(h.ownerDocument.documentElement, h)) {
            for (l !== null && gc(h) && (C = l.start, k = l.end, k === void 0 && (k = C), "selectionStart" in h ? (h.selectionStart = C, h.selectionEnd = Math.min(k, h.value.length)) : (k = (C = h.ownerDocument || document) && C.defaultView || window, k.getSelection && (k = k.getSelection(), s = h.textContent.length, $ = Math.min(l.start, s), l = l.end === void 0 ? $ : Math.min(l.end, s), !k.extend && $ > l && (s = l, l = $, $ = s), s = zp(h, $), a = zp(h, l), s && a && (k.rangeCount !== 1 || k.anchorNode !== s.node || k.anchorOffset !== s.offset || k.focusNode !== a.node || k.focusOffset !== a.offset) && (C = C.createRange(), C.setStart(s.node, s.offset), k.removeAllRanges(), $ > l ? (k.addRange(C), k.extend(a.node, a.offset)) : (C.setEnd(a.node, a.offset), k.addRange(C)))))), C = [], k = h; k = k.parentNode;) k.nodeType === 1 && C.push({
                element: k,
                left: k.scrollLeft,
                top: k.scrollTop
            });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < C.length; h++) k = C[h], k.element.scrollLeft = k.left, k.element.scrollTop = k.top
        }
        el = !!uu, cu = uu = null, e.current = r, H = n;
        do try {
            for (h = e; H !== null;) {
                var x = H.flags;
                if (x & 36 && OP(h, H.alternate, H), x & 128) {
                    C = void 0;
                    var _ = H.ref;
                    if (_ !== null) {
                        var R = H.stateNode;
                        switch (H.tag) {
                            case 5:
                                C = R;
                                break;
                            default:
                                C = R
                        }
                        typeof _ == "function" ? _(C) : _.current = C
                    }
                }
                H = H.nextEffect
            }
        } catch (M) {
            if (H === null) throw Error(I(330));
            tn(H, M), H = H.nextEffect
        } while (H !== null);
        H = null, gP(), ee = o
    } else e.current = r;
    if (an) an = !1, Oi = e, mi = t; else for (H = n; H !== null;) t = H.nextEffect, H.nextEffect = null, H.flags & 8 && (x = H, x.sibling = null, x.stateNode = null), H = t;
    if (n = e.pendingLanes, n === 0 && (fr = null), n === 1 ? e === Bc ? Pi++ : (Pi = 0, Bc = e) : Pi = 0, r = r.stateNode, Tn && typeof Tn.onCommitFiberRoot == "function") try {
        Tn.onCommitFiberRoot(uf, r, void 0, (r.current.flags & 64) === 64)
    } catch {
    }
    if (Bt(e, nt()), jl) throw jl = !1, e = Nc, Nc = null, e;
    return ee & 8 || gr(), null
}

function LP() {
    for (; H !== null;) {
        var e = H.alternate;
        ll || Mi === null || (H.flags & 8 ? _p(H, Mi) && (ll = !0) : H.tag === 13 && PP(e, H) && _p(H, Mi) && (ll = !0));
        var t = H.flags;
        t & 256 && TP(e, H), !(t & 512) || an || (an = !0, Hi(97, function () {
            return pn(), null
        })), H = H.nextEffect
    }
}

function pn() {
    if (mi !== 90) {
        var e = 97 < mi ? 97 : mi;
        return mi = 90, An(e, DP)
    }
    return !1
}

function NP(e, t) {
    Dc.push(t, e), an || (an = !0, Hi(97, function () {
        return pn(), null
    }))
}

function Jy(e, t) {
    Fc.push(t, e), an || (an = !0, Hi(97, function () {
        return pn(), null
    }))
}

function DP() {
    if (Oi === null) return !1;
    var e = Oi;
    if (Oi = null, ee & 48) throw Error(I(331));
    var t = ee;
    ee |= 32;
    var r = Fc;
    Fc = [];
    for (var n = 0; n < r.length; n += 2) {
        var o = r[n], a = r[n + 1], l = o.destroy;
        if (o.destroy = void 0, typeof l == "function") try {
            l()
        } catch (u) {
            if (a === null) throw Error(I(330));
            tn(a, u)
        }
    }
    for (r = Dc, Dc = [], n = 0; n < r.length; n += 2) {
        o = r[n], a = r[n + 1];
        try {
            var s = o.create;
            o.destroy = s()
        } catch (u) {
            if (a === null) throw Error(I(330));
            tn(a, u)
        }
    }
    for (s = e.current.firstEffect; s !== null;) e = s.nextEffect, s.nextEffect = null, s.flags & 8 && (s.sibling = null, s.stateNode = null), s = e;
    return ee = t, gr(), !0
}

function Oh(e, t, r) {
    t = Cf(r, t), t = Vy(e, t, 1), Qr(e, t), t = Tt(), e = fs(e, 1), e !== null && (os(e, 1, t), Bt(e, t))
}

function tn(e, t) {
    if (e.tag === 3) Oh(e, e, t); else for (var r = e.return; r !== null;) {
        if (r.tag === 3) {
            Oh(r, e, t);
            break
        } else if (r.tag === 1) {
            var n = r.stateNode;
            if (typeof r.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (fr === null || !fr.has(n))) {
                e = Cf(t, e);
                var o = Wy(r, e, 1);
                if (Qr(r, o), o = Tt(), r = fs(r, 1), r !== null) os(r, 1, o), Bt(r, o); else if (typeof n.componentDidCatch == "function" && (fr === null || !fr.has(n))) try {
                    n.componentDidCatch(t, e)
                } catch {
                }
                break
            }
        }
        r = r.return
    }
}

function FP(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = Tt(), e.pingedLanes |= e.suspendedLanes & r, dt === e && (ot & r) === r && (qe === 4 || qe === 3 && (ot & 62914560) === ot && 500 > nt() - kf ? bo(e, 0) : Ef |= r), Bt(e, t)
}

function BP(e, t) {
    var r = e.stateNode;
    r !== null && r.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (br === 0 && (br = Fo), t = ro(62914560 & ~br), t === 0 && (t = 4194304)) : t = $o() === 99 ? 1 : 2 : t = 1), r = Tt(), e = fs(e, t), e !== null && (os(e, t, r), Bt(e, r))
}

var e1;
e1 = function (e, t, r) {
    var n = t.lanes;
    if (e !== null) if (e.memoizedProps !== t.pendingProps || wt.current) Kt = !0; else if (r & n) Kt = !!(e.flags & 16384); else {
        switch (Kt = !1, t.tag) {
            case 3:
                hh(t), pu();
                break;
            case 5:
                ah(t);
                break;
            case 1:
                St(t.type) && nl(t);
                break;
            case 4:
                xc(t, t.stateNode.containerInfo);
                break;
            case 10:
                n = t.memoizedProps.value;
                var o = t.type._context;
                Oe(El, o._currentValue), o._currentValue = n;
                break;
            case 13:
                if (t.memoizedState !== null) return r & t.child.childLanes ? mh(e, t, r) : (Oe(Te, Te.current & 1), t = kr(e, t, r), t !== null ? t.sibling : null);
                Oe(Te, Te.current & 1);
                break;
            case 19:
                if (n = (r & t.childLanes) !== 0, e.flags & 64) {
                    if (n) return Ch(e, t, r);
                    t.flags |= 64
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Oe(Te, Te.current), n) break;
                return null;
            case 23:
            case 24:
                return t.lanes = 0, hu(e, t, r)
        }
        return kr(e, t, r)
    } else Kt = !1;
    switch (t.lanes = 0, t.tag) {
        case 2:
            if (n = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = xo(t, it.current), wo(t, r), o = gf(null, t, n, e, o, r), t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(n)) {
                    var a = !0;
                    nl(t)
                } else a = !1;
                t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, vf(t);
                var l = n.getDerivedStateFromProps;
                typeof l == "function" && $l(t, n, l, e), o.updater = cs, t.stateNode = o, o._reactInternals = t, kc(t, n, e, r), t = Oc(null, t, n, !0, a, r)
            } else t.tag = 0, gt(null, t, o, r), t = t.child;
            return t;
        case 16:
            o = t.elementType;
            e:{
                switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = o._init, o = a(o._payload), t.type = o, a = t.tag = HP(o), e = Wt(o, e), a) {
                    case 0:
                        t = Tc(null, t, o, e, r);
                        break e;
                    case 1:
                        t = ph(null, t, o, e, r);
                        break e;
                    case 11:
                        t = fh(null, t, o, e, r);
                        break e;
                    case 14:
                        t = vh(null, t, o, Wt(o.type, e), n, r);
                        break e
                }
                throw Error(I(306, o, ""))
            }
            return t;
        case 0:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Wt(n, o), Tc(e, t, n, o, r);
        case 1:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Wt(n, o), ph(e, t, n, o, r);
        case 3:
            if (hh(t), n = t.updateQueue, e === null || n === null) throw Error(I(282));
            if (n = t.pendingProps, o = t.memoizedState, o = o !== null ? o.element : null, xy(e, t), Vi(t, n, null, r), n = t.memoizedState.element, n === o) pu(), t = kr(e, t, r); else {
                if (o = t.stateNode, (a = o.hydrate) && (Kr = yo(t.stateNode.containerInfo.firstChild), Er = t, a = pr = !0), a) {
                    if (e = o.mutableSourceEagerHydrationData, e != null) for (o = 0; o < e.length; o += 2) a = e[o], a._workInProgressVersionPrimary = e[o + 1], So.push(a);
                    for (r = Oy(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 1024, r = r.sibling
                } else gt(e, t, n, r), pu();
                t = t.child
            }
            return t;
        case 5:
            return ah(t), e === null && $c(t), n = t.type, o = t.pendingProps, a = e !== null ? e.memoizedProps : null, l = o.children, Sc(n, o) ? l = null : a !== null && Sc(n, a) && (t.flags |= 16), Fy(e, t), gt(e, t, l, r), t.child;
        case 6:
            return e === null && $c(t), null;
        case 13:
            return mh(e, t, r);
        case 4:
            return xc(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = _l(t, null, n, r) : gt(e, t, n, r), t.child;
        case 11:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Wt(n, o), fh(e, t, n, o, r);
        case 7:
            return gt(e, t, t.pendingProps, r), t.child;
        case 8:
            return gt(e, t, t.pendingProps.children, r), t.child;
        case 12:
            return gt(e, t, t.pendingProps.children, r), t.child;
        case 10:
            e:{
                n = t.type._context, o = t.pendingProps, l = t.memoizedProps, a = o.value;
                var s = t.type._context;
                if (Oe(El, s._currentValue), s._currentValue = a, l !== null) if (s = l.value, a = Lt(s, a) ? 0 : (typeof n._calculateChangedBits == "function" ? n._calculateChangedBits(s, a) : 1073741823) | 0, a === 0) {
                    if (l.children === o.children && !wt.current) {
                        t = kr(e, t, r);
                        break e
                    }
                } else for (s = t.child, s !== null && (s.return = t); s !== null;) {
                    var u = s.dependencies;
                    if (u !== null) {
                        l = s.child;
                        for (var c = u.firstContext; c !== null;) {
                            if (c.context === n && c.observedBits & a) {
                                s.tag === 1 && (c = Zr(-1, r & -r), c.tag = 2, Qr(s, c)), s.lanes |= r, c = s.alternate, c !== null && (c.lanes |= r), ky(s.return, r), u.lanes |= r;
                                break
                            }
                            c = c.next
                        }
                    } else l = s.tag === 10 && s.type === t.type ? null : s.child;
                    if (l !== null) l.return = s; else for (l = s; l !== null;) {
                        if (l === t) {
                            l = null;
                            break
                        }
                        if (s = l.sibling, s !== null) {
                            s.return = l.return, l = s;
                            break
                        }
                        l = l.return
                    }
                    s = l
                }
                gt(e, t, o.children, r), t = t.child
            }
            return t;
        case 9:
            return o = t.type, a = t.pendingProps, n = a.children, wo(t, r), o = Ft(o, a.unstable_observedBits), n = n(o), t.flags |= 1, gt(e, t, n, r), t.child;
        case 14:
            return o = t.type, a = Wt(o, t.pendingProps), a = Wt(o.type, a), vh(e, t, o, a, n, r);
        case 15:
            return Dy(e, t, t.type, t.pendingProps, n, r);
        case 17:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Wt(n, o), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, St(n) ? (e = !0, nl(t)) : e = !1, wo(t, r), _y(t, n, o), kc(t, n, o, r), Oc(null, t, n, !0, e, r);
        case 19:
            return Ch(e, t, r);
        case 23:
            return hu(e, t, r);
        case 24:
            return hu(e, t, r)
    }
    throw Error(I(156, t.tag))
};

function zP(e, t, r, n) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Nt(e, t, r, n) {
    return new zP(e, t, r, n)
}

function $f(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function HP(e) {
    if (typeof e == "function") return $f(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ts) return 11;
        if (e === rs) return 14
    }
    return 2
}

function ln(e, t) {
    var r = e.alternate;
    return r === null ? (r = Nt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function sl(e, t, r, n, o, a) {
    var l = 2;
    if (n = e, typeof e == "function") $f(e) && (l = 1); else if (typeof e == "string") l = 5; else e:switch (e) {
        case Hr:
            return Eo(r.children, o, a, t);
        case Mg:
            l = 8, o |= 16;
            break;
        case zd:
            l = 8, o |= 1;
            break;
        case Si:
            return e = Nt(12, r, t, o | 8), e.elementType = Si, e.type = Si, e.lanes = a, e;
        case Ci:
            return e = Nt(13, r, t, o), e.type = Ci, e.elementType = Ci, e.lanes = a, e;
        case pl:
            return e = Nt(19, r, t, o), e.elementType = pl, e.lanes = a, e;
        case Gd:
            return _f(r, o, a, t);
        case rc:
            return e = Nt(24, r, t, o), e.elementType = rc, e.lanes = a, e;
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Hd:
                    l = 10;
                    break e;
                case Vd:
                    l = 9;
                    break e;
                case ts:
                    l = 11;
                    break e;
                case rs:
                    l = 14;
                    break e;
                case Wd:
                    l = 16, n = null;
                    break e;
                case Ud:
                    l = 22;
                    break e
            }
            throw Error(I(130, e == null ? e : typeof e, ""))
    }
    return t = Nt(l, r, t, o), t.elementType = e, t.type = n, t.lanes = a, t
}

function Eo(e, t, r, n) {
    return e = Nt(7, e, n, t), e.lanes = r, e
}

function _f(e, t, r, n) {
    return e = Nt(23, e, n, t), e.elementType = Gd, e.lanes = r, e
}

function yu(e, t, r) {
    return e = Nt(6, e, null, t), e.lanes = r, e
}

function wu(e, t, r) {
    return t = Nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function VP(e, t, r) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = ru(0), this.expirationTimes = ru(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ru(0), this.mutableSourceEagerHydrationData = null
}

function WP(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: bn, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r}
}

function Ll(e, t, r, n) {
    var o = t.current, a = Tt(), l = Jr(o);
    e:if (r) {
        r = r._reactInternals;
        t:{
            if (Vn(r) !== r || r.tag !== 1) throw Error(I(170));
            var s = r;
            do {
                switch (s.tag) {
                    case 3:
                        s = s.stateNode.context;
                        break t;
                    case 1:
                        if (St(s.type)) {
                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                            break t
                        }
                }
                s = s.return
            } while (s !== null);
            throw Error(I(171))
        }
        if (r.tag === 1) {
            var u = r.type;
            if (St(u)) {
                r = gy(r, u, s);
                break e
            }
        }
        r = s
    } else r = on;
    return t.context === null ? t.context = r : t.pendingContext = r, t = Zr(a, l), t.payload = {element: e}, n = n === void 0 ? null : n, n !== null && (t.callback = n), Qr(o, t), en(o, l, a), l
}

function Su(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ph(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}

function Tf(e, t) {
    Ph(e, t), (e = e.alternate) && Ph(e, t)
}

function UP() {
    return null
}

function Of(e, t, r) {
    var n = r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources || null;
    if (r = new VP(e, t, r != null && r.hydrate === !0), t = Nt(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), r.current = t, t.stateNode = r, vf(t), e[Do] = r.current, fy(e.nodeType === 8 ? e.parentNode : e), n) for (e = 0; e < n.length; e++) {
        t = n[e];
        var o = t._getVersion;
        o = o(t._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [t, o] : r.mutableSourceEagerHydrationData.push(t, o)
    }
    this._internalRoot = r
}

Of.prototype.render = function (e) {
    Ll(e, this._internalRoot, null, null)
};
Of.prototype.unmount = function () {
    var e = this._internalRoot, t = e.containerInfo;
    Ll(null, e, null, function () {
        t[Do] = null
    })
};

function aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function KP(e, t) {
    if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var r; r = e.lastChild;) e.removeChild(r);
    return new Of(e, 0, t ? {hydrate: !0} : void 0)
}

function vs(e, t, r, n, o) {
    var a = r._reactRootContainer;
    if (a) {
        var l = a._internalRoot;
        if (typeof o == "function") {
            var s = o;
            o = function () {
                var c = Su(l);
                s.call(c)
            }
        }
        Ll(t, l, e, o)
    } else {
        if (a = r._reactRootContainer = KP(r, n), l = a._internalRoot, typeof o == "function") {
            var u = o;
            o = function () {
                var c = Su(l);
                u.call(c)
            }
        }
        Yy(function () {
            Ll(t, l, e, o)
        })
    }
    return Su(l)
}

Kg = function (e) {
    if (e.tag === 13) {
        var t = Tt();
        en(e, 4, t), Tf(e, 4)
    }
};
Qd = function (e) {
    if (e.tag === 13) {
        var t = Tt();
        en(e, 67108864, t), Tf(e, 67108864)
    }
};
Gg = function (e) {
    if (e.tag === 13) {
        var t = Tt(), r = Jr(e);
        en(e, r, t), Tf(e, r)
    }
};
Yg = function (e, t) {
    return t()
};
fc = function (e, t, r) {
    switch (t) {
        case"input":
            if (oc(e, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                        var o = ss(n);
                        if (!o) throw Error(I(90));
                        Ag(n), oc(n, o)
                    }
                }
            }
            break;
        case"textarea":
            jg(e, r);
            break;
        case"select":
            t = r.value, t != null && ho(e, !!r.multiple, t, !1)
    }
};
Xd = Gy;
Hg = function (e, t, r, n, o) {
    var a = ee;
    ee |= 4;
    try {
        return An(98, e.bind(null, t, r, n, o))
    } finally {
        ee = a, ee === 0 && (zo(), gr())
    }
};
qd = function () {
    !(ee & 49) && (RP(), pn())
};
Vg = function (e, t) {
    var r = ee;
    ee |= 2;
    try {
        return e(t)
    } finally {
        ee = r, ee === 0 && (zo(), gr())
    }
};

function t1(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!aa(t)) throw Error(I(200));
    return WP(e, t, null, r)
}

var GP = {Events: [na, lo, ss, Bg, zg, pn, {current: !1}]},
    ci = {findFiberByHostInstance: kn, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"}, YP = {
        bundleType: ci.bundleType,
        version: ci.version,
        rendererPackageName: ci.rendererPackageName,
        rendererConfig: ci.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Hn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Ug(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ci.findFiberByHostInstance || UP,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ha.isDisabled && Ha.supportsFiber) try {
        uf = Ha.inject(YP), Tn = Ha
    } catch {
    }
}
Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GP;
Ht.createPortal = t1;
Ht.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : Error(I(268, Object.keys(e)));
    return e = Ug(t), e = e === null ? null : e.stateNode, e
};
Ht.flushSync = function (e, t) {
    var r = ee;
    if (r & 48) return e(t);
    ee |= 1;
    try {
        if (e) return An(99, e.bind(null, t))
    } finally {
        ee = r, gr()
    }
};
Ht.hydrate = function (e, t, r) {
    if (!aa(t)) throw Error(I(200));
    return vs(null, e, t, !0, r)
};
Ht.render = function (e, t, r) {
    if (!aa(t)) throw Error(I(200));
    return vs(null, e, t, !1, r)
};
Ht.unmountComponentAtNode = function (e) {
    if (!aa(e)) throw Error(I(40));
    return e._reactRootContainer ? (Yy(function () {
        vs(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Do] = null
        })
    }), !0) : !1
};
Ht.unstable_batchedUpdates = Gy;
Ht.unstable_createPortal = function (e, t) {
    return t1(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null)
};
Ht.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!aa(r)) throw Error(I(200));
    if (e == null || e._reactInternals === void 0) throw Error(I(38));
    return vs(e, t, r, !1, n)
};
Ht.version = "17.0.2";

function r1() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r1)
    } catch (e) {
        console.error(e)
    }
}

r1(), _g.exports = Ht;
var n1 = _g.exports;
const XP = Xi(n1);
var Nl = function () {
    return Nl = Object.assign || function (t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }, Nl.apply(this, arguments)
};

function qP(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}

function ZP(e, t, r, n) {
    function o(a) {
        return a instanceof r ? a : new r(function (l) {
            l(a)
        })
    }

    return new (r || (r = Promise))(function (a, l) {
        function s(v) {
            try {
                c(n.next(v))
            } catch (g) {
                l(g)
            }
        }

        function u(v) {
            try {
                c(n.throw(v))
            } catch (g) {
                l(g)
            }
        }

        function c(v) {
            v.done ? a(v.value) : o(v.value).then(s, u)
        }

        c((n = n.apply(e, [])).next())
    })
}

function QP(e, t) {
    var r = {
        label: 0, sent: function () {
            if (a[0] & 1) throw a[1];
            return a[1]
        }, trys: [], ops: []
    }, n, o, a, l;
    return l = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (l[Symbol.iterator] = function () {
        return this
    }), l;

    function s(c) {
        return function (v) {
            return u([c, v])
        }
    }

    function u(c) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; l && (l = 0, c[0] && (r = 0)), r;) try {
            if (n = 1, o && (a = c[0] & 2 ? o.return : c[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, c[1])).done) return a;
            switch (o = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
                case 0:
                case 1:
                    a = c;
                    break;
                case 4:
                    return r.label++, {value: c[1], done: !1};
                case 5:
                    r.label++, o = c[1], c = [0];
                    continue;
                case 7:
                    c = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                        r.label = c[1];
                        break
                    }
                    if (c[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = c;
                        break
                    }
                    if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(c);
                        break
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            c = t.call(e, r)
        } catch (v) {
            c = [6, v], o = 0
        } finally {
            n = a = 0
        }
        if (c[0] & 5) throw c[1];
        return {value: c[0] ? c[1] : void 0, done: !0}
    }
}

function Hc(e, t, r) {
    for (var n = 0, o = t.length, a; n < o; n++) (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
    return e.concat(a || Array.prototype.slice.call(t))
}

function JP() {
    return {
        current: 0, next: function () {
            return ++this.current
        }
    }
}

function eM(e) {
    var t = JP(), r = {};
    return {
        add: function (n, o) {
            var a = o ?? "".concat(t.next(), "_").concat(e);
            return r[a] = n, a
        }, resolve: function (n, o, a) {
            var l = r[n];
            l && (a(o) ? l.resolve(o) : l.reject(o), r[n] = null)
        }
    }
}

function tM(e, t, r) {
    var n = eM(r);
    return t(function (o) {
        if (!(!o.detail || !o.detail.data || typeof o.detail.data != "object") && "request_id" in o.detail.data) {
            var a = o.detail.data, l = a.request_id, s = qP(a, ["request_id"]);
            l && n.resolve(l, s, function (u) {
                return !("error_type" in u)
            })
        }
    }), function (a, l) {
        return l === void 0 && (l = {}), new Promise(function (s, u) {
            var c = n.add({resolve: s, reject: u}, l.request_id);
            e(a, Nl(Nl({}, l), {request_id: c}))
        })
    }
}

function rM() {
    var e = 36, t = 2, r = 3;
    return Math.random().toString(e).substring(t, t + r)
}

var la = typeof window < "u", yi = !!(la && window.AndroidBridge),
    co = !!(la && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose),
    Cu = !!(la && window.ReactNativeWebView && typeof window.ReactNativeWebView.postMessage == "function"),
    On = la && !yi && !co, nM = On && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search), oM = On && !nM,
    Mh = On ? "message" : "VKWebAppEvent",
    iM = Hc(["VKWebAppInit", "VKWebAppGetCommunityAuthToken", "VKWebAppAddToCommunity", "VKWebAppAddToHomeScreenInfo", "VKWebAppClose", "VKWebAppCopyText", "VKWebAppCreateHash", "VKWebAppGetUserInfo", "VKWebAppSetLocation", "VKWebAppSendToClient", "VKWebAppGetClientVersion", "VKWebAppGetPhoneNumber", "VKWebAppGetEmail", "VKWebAppGetGroupInfo", "VKWebAppGetGeodata", "VKWebAppGetCommunityToken", "VKWebAppGetConfig", "VKWebAppGetLaunchParams", "VKWebAppSetTitle", "VKWebAppGetAuthToken", "VKWebAppCallAPIMethod", "VKWebAppJoinGroup", "VKWebAppLeaveGroup", "VKWebAppAllowMessagesFromGroup", "VKWebAppDenyNotifications", "VKWebAppAllowNotifications", "VKWebAppOpenPayForm", "VKWebAppOpenApp", "VKWebAppShare", "VKWebAppShowWallPostBox", "VKWebAppScroll", "VKWebAppShowOrderBox", "VKWebAppShowLeaderBoardBox", "VKWebAppShowInviteBox", "VKWebAppShowRequestBox", "VKWebAppAddToFavorites", "VKWebAppShowStoryBox", "VKWebAppStorageGet", "VKWebAppStorageGetKeys", "VKWebAppStorageSet", "VKWebAppFlashGetInfo", "VKWebAppSubscribeStoryApp", "VKWebAppOpenWallPost", "VKWebAppCheckAllowedScopes", "VKWebAppCheckBannerAd", "VKWebAppHideBannerAd", "VKWebAppShowBannerAd", "VKWebAppCheckNativeAds", "VKWebAppShowNativeAds", "VKWebAppRetargetingPixel", "VKWebAppConversionHit", "VKWebAppShowSubscriptionBox", "VKWebAppCheckSurvey", "VKWebAppShowSurvey", "VKWebAppScrollTop", "VKWebAppScrollTopStart", "VKWebAppScrollTopStop", "VKWebAppShowSlidesSheet", "VKWebAppTranslate", "VKWebAppRecommend", "VKWebAppAddToProfile", "VKWebAppGetFriends"], oM ? ["VKWebAppResizeWindow", "VKWebAppAddToMenu", "VKWebAppShowInstallPushBox", "VKWebAppShowCommunityWidgetPreviewBox", "VKWebAppCallStart", "VKWebAppCallJoin", "VKWebAppCallGetStatus"] : ["VKWebAppShowImages"]),
    gn, di = la ? window.AndroidBridge : void 0, yn = co ? window.webkit.messageHandlers : void 0,
    bu = On ? parent : void 0;

function aM(e) {
    var t = void 0, r = [], n = rM();

    function o(w, d) {
        di && di[w] ? di[w](JSON.stringify(d)) : yn && yn[w] && typeof yn[w].postMessage == "function" ? yn[w].postMessage(d) : Cu ? window.ReactNativeWebView.postMessage(JSON.stringify({
            handler: w,
            params: d
        })) : bu && typeof bu.postMessage == "function" && bu.postMessage({
            handler: w,
            params: d,
            type: "vk-connect",
            webFrameId: t,
            connectVersion: e
        }, "*")
    }

    function a(w) {
        r.push(w)
    }

    function l(w) {
        var d = r.indexOf(w);
        d > -1 && r.splice(d, 1)
    }

    function s(w) {
        return console.warn("This method is deprecated. Use supportsAsync instead."), yi ? !!(di && typeof di[w] == "function") : co ? !!(yn && yn[w] && typeof yn[w].postMessage == "function") : On ? iM.includes(w) : !1
    }

    function u() {
        return co || yi
    }

    function c() {
        return On && window.parent !== window
    }

    function v() {
        return u() || c()
    }

    function g() {
        return !v()
    }

    function p(w) {
        if (co || yi) return Hc([], r).map(function (k) {
            return k.call(null, w)
        });
        var d = w == null ? void 0 : w.data;
        if (!(!On || !d)) {
            if (Cu && typeof d == "string") try {
                d = JSON.parse(d)
            } catch {
            }
            var f = d.type, h = d.data, C = d.frameId;
            if (f) {
                if (f === "VKWebAppSettings") {
                    t = C;
                    return
                }
                Hc([], r).map(function (k) {
                    return k({detail: {type: f, data: h}})
                })
            }
        }
    }

    Cu && /(android)/i.test(navigator.userAgent) ? document.addEventListener(Mh, p) : typeof window < "u" && "addEventListener" in window && window.addEventListener(Mh, p);
    var m = tM(o, a, n);

    function S(w) {
        return ZP(this, void 0, void 0, function () {
            var d;
            return QP(this, function (f) {
                switch (f.label) {
                    case 0:
                        if (yi || co) return [2, s(w)];
                        if (gn) return [2, gn.includes(w)];
                        f.label = 1;
                    case 1:
                        return f.trys.push([1, 3, , 4]), [4, m("SetSupportedHandlers")];
                    case 2:
                        return d = f.sent(), gn = d.supportedHandlers, [2, gn.includes(w)];
                    case 3:
                        return f.sent(), gn = ["VKWebAppInit"], [2, gn.includes(w)];
                    case 4:
                        return [2]
                }
            })
        })
    }

    return a(function (w) {
        if (w.detail) switch (w.detail.type) {
            case"SetSupportedHandlers":
                gn = w.detail.data.supportedHandlers
        }
    }), {
        send: m,
        sendPromise: m,
        subscribe: a,
        unsubscribe: l,
        supports: s,
        supportsAsync: S,
        isWebView: u,
        isIframe: c,
        isEmbedded: v,
        isStandalone: g
    }
}

var lM = "2.15.0", Rh;
(function (e) {
    e.REWARD = "reward", e.INTERSTITIAL = "interstitial"
})(Rh || (Rh = {}));
var Ah;
(function (e) {
    e.RESIZE = "resize", e.OVERLAY = "overlay"
})(Ah || (Ah = {}));
var Ih;
(function (e) {
    e.TOP = "top", e.BOTTOM = "bottom"
})(Ih || (Ih = {}));
var jh;
(function (e) {
    e.LEFT = "left", e.RIGHT = "right", e.CENTER = "center"
})(jh || (jh = {}));
var Lh;
(function (e) {
    e.CAMERA = "camera", e.LOCATION = "location", e.PHOTO = "photo"
})(Lh || (Lh = {}));
var Nh;
(function (e) {
    e.RU = "ru", e.UK = "uk", e.UA = "ua", e.EN = "en", e.BE = "be", e.KZ = "kz", e.PT = "pt", e.ES = "es"
})(Nh || (Nh = {}));
var Dh;
(function (e) {
    e.ADMIN = "admin", e.EDITOR = "editor", e.MEMBER = "member", e.MODER = "moder", e.NONE = "none"
})(Dh || (Dh = {}));
var Fh;
(function (e) {
    e.DESKTOP_WEB = "desktop_web", e.DESKTOP_WEB_MESSENGER = "desktop_web_messenger", e.DESKTOP_APP_MESSENGER = "desktop_app_messenger", e.MOBILE_WEB = "mobile_web", e.MOBILE_ANDROID = "mobile_android", e.MOBILE_ANDROID_MESSENGER = "mobile_android_messenger", e.MOBILE_IPHONE = "mobile_iphone", e.MOBILE_IPHONE_MESSENGER = "mobile_iphone_messenger", e.MOBILE_IPAD = "mobile_ipad"
})(Fh || (Fh = {}));
var _t = aM(lM);

function D() {
    return D = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, D.apply(null, arguments)
}

var sM = {
    _noConflict: !1, _isSet: !1, get noConflict() {
        return this._noConflict
    }, set noConflict(e) {
        this._isSet && e !== this.noConflict && setTimeout(function () {
            throw new Error("[vkui]: Single VKUI instance can not have different globalClassName settings")
        }, 0), this._noConflict = e, this._isSet = !0
    }
}, o1 = sM, uM = /\b(?=[A-Z])/g, cM = {}, dM = {};

function Bh(e) {
    var t = o1.noConflict, r = t ? cM : dM;
    if (r[e]) return r[e];
    var n = e.replace(uM, "vkui"), o = t || e === n ? n : n + " " + e;
    return r[e] = o, o
}

function fM(e) {
    if (typeof e == "string") return Bh(e);
    for (var t = "", r = 0; r < e.length; r++) {
        var n = t ? " " : "";
        t += n + Bh(e[r])
    }
    return t
}

function vM(e) {
    var t = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && r !== "vkuiClass" && (t[r] = e[r]);
    if (e.vkuiClass) {
        var n = e.className, o = fM(e.vkuiClass);
        t.className = n ? n + " " + o : o
    }
    return t
}

function y(e, t) {
    var r = arguments;
    if (!t || !("vkuiClass" in t)) return E.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = r[0], o[1] = vM(t);
    for (var a = 2; a < n; a++) o[a] = r[a];
    return E.createElement.apply(null, o)
}

y.Fragment = E.Fragment;
var je = !!(typeof window < "u" && window.document && window.document.createElement),
    pM = je && !!window.addEventListener;

function Mr(e) {
    "@babel/helpers - typeof";
    return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
        return typeof t
    } : function (t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Mr(e)
}

var zh = function () {
}, hM = !1;
if (pM) try {
    var Hh = Object.defineProperty({}, "passive", {
        get: function () {
            hM = !0
        }
    });
    window.addEventListener("test", zh, Hh), window.removeEventListener("test", zh, Hh)
} catch {
}

function mM() {
    if (!je) return !1;
    var e = !1;
    try {
        var t = document.createElement("div");
        t.scrollTo({
            top: 0, get behavior() {
                return e = !0, "smooth"
            }
        })
    } catch {
    }
    return e
}

mM();

function Vc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n
}

function gM(e) {
    if (Array.isArray(e)) return Vc(e)
}

function yM(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function i1(e, t) {
    if (e) {
        if (typeof e == "string") return Vc(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Vc(e, t) : void 0
    }
}

function wM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Dl(e) {
    return gM(e) || yM(e) || i1(e) || wM()
}

function SM(e) {
    if (Array.isArray(e)) return e
}

function CM(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, o, a, l, s = [], u = !0, c = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
        } catch (v) {
            c = !0, o = v
        } finally {
            try {
                if (!u && r.return != null && (l = r.return(), Object(l) !== l)) return
            } finally {
                if (c) throw o
            }
        }
        return s
    }
}

function bM() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function te(e, t) {
    return SM(e) || CM(e, t) || i1(e, t) || bM()
}

function EM(e, t) {
    if (Mr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Mr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function a1(e) {
    var t = EM(e, "string");
    return Mr(t) == "symbol" ? t : t + ""
}

function Pe(e, t, r) {
    return (t = a1(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Vh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function kM(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Vh(Object(r), !0).forEach(function (n) {
            Pe(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function xM(e) {
    if (typeof e != "string") return {};
    if (e = e.trim().replace(/^[?#&]/, ""), !e) return {};
    var t = /\?(.+)$/gi.exec(e), r = t ? t[1] : e;
    return r.split("&").reduce(function (n, o) {
        var a = o.split("=");
        return a[1] && (n[a[0]] = decodeURIComponent(a[1])), n
    }, {})
}

function $M(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Mr(e) !== "object" || e === null) return "";
    t = kM({encode: !0}, t);
    var r = function (o) {
        return t.encode ? encodeURIComponent(o) : String(o)
    };
    return Object.keys(e).reduce(function (n, o) {
        var a = e[o];
        return a === void 0 ? n : a === null ? (t.skipNull || n.push([r(o), ""].join("=")), n) : Array.isArray(a) ? (a.map(function (l) {
            n.push("".concat(r(o), "[]=").concat(r(l)))
        }).join(), n) : (n.push([r(o), r(a)].join("=")), n)
    }, []).join("&")
}

var _M = {parse: xM, stringify: $M};

function l1(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function TM(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a1(n.key), n)
    }
}

function s1(e, t, r) {
    return t && TM(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), e
}

function u1(e) {
    e || (e = je ? navigator.userAgent.toLowerCase() : "");
    var t = RM(e), r = t || e.indexOf("ipad") !== -1, n = !r && e.search(/iphone|ipod/) !== -1, o = n || r,
        a = o && e.match(/OS ([\d_]+) like Mac OS X/i), l = 0, s = 0;
    t ? (l = 13, s = 0) : a && (a = a[1].split("_"), l = +a[0], s = +a[1]), a = null;
    var u = l < 13 && !(l === 11 && s < 3), c = o && MM(e), v = !1;
    je && (v = o && screen.width === 375 && screen.height === 812 && window.devicePixelRatio === 3);
    var g = e.search(/crios/i) !== -1;
    return {
        isIPad: r,
        isIPhone: n,
        isIOS: o,
        isIPadOS: t,
        iosMajor: l,
        iosMinor: s,
        isWKWebView: c,
        isScrollBasedViewport: u,
        isIPhoneX: v,
        isIOSChrome: g
    }
}

var c1 = u1(), OM = c1.isIOS, PM = c1.isIPadOS;

function MM(e) {
    if (!je) return !1;
    var t = window.webkit;
    if (t && t.messageHandlers) return !0;
    var r = /constructor/i.test(String(window.HTMLElement)), n = !!window.indexedDB;
    if (!(e.indexOf("safari") !== -1 && e.indexOf("version") !== -1 && !navigator.standalone)) {
        if (!(!n && r || !(window.statusbar && window.statusbar.visible))) {
            if (!r || n) return !0
        }
    }
    return !1
}

function RM(e) {
    if (!je) return !1;
    var t = !/ipad|iphone|ipod/.test(e), r = /mac os/.test(e);
    return !!(r && t && typeof navigator.standalone == "boolean")
}

var Cn, Va, fo, Wa;
if (je) if (OM && !PM) Cn = !1, fo = !1, Va = !0, Wa = !0; else if (Va = "ontouchstart" in document, Wa = Va || "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0, Wa) {
    var Wh = !/android|mobile|tablet/i.test(navigator.userAgent);
    Cn = typeof window.matchMedia == "function" && window.matchMedia("(pointer)").matches ? matchMedia("(pointer: fine)").matches : Wh, fo = Cn && (typeof window.matchMedia == "function" && window.matchMedia("(hover)").matches ? matchMedia("(hover: hover)").matches : Wh)
} else Cn = !0, fo = !0; else Cn = !1, Va = !1, fo = !1, Wa = !1;
var AM = function () {
    return {window: je ? window : void 0, document: je ? document : void 0}
}, IM = E.createContext(AM()), kt = function () {
    return E.useContext(IM)
};

function d1(e) {
    var t = function (n) {
        var o = kt();
        return y(e, D({}, n, o))
    };
    return t
}

function Eu(e) {
    e && e.activeElement && e.activeElement.blur()
}

if (je) {
    var Dr = Element.prototype;
    Dr.matches || (Dr.matches = Dr.matchesSelector || Dr.webkitMatchesSelector || Dr.mozMatchesSelector || Dr.msMatchesSelector), Dr.closest || (Dr.closest = function (e) {
        for (var t = this; t;) {
            if (t.matches(e)) return t;
            t = t.parentElement
        }
        return null
    })
}
Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function (t, r) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        var n = Object(this), o = n.length >>> 0;
        if (o === 0) return !1;
        var a = r | 0, l = Math.max(a >= 0 ? a : o - Math.abs(a), 0);

        function s(u, c) {
            return u === c || typeof u == "number" && typeof c == "number" && isNaN(u) && isNaN(c)
        }

        for (; l < o;) {
            if (s(n[l], t)) return !0;
            l++
        }
        return !1
    }
});
Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function (t) {
        if (this === null) throw new TypeError("Array.prototype.find called on null or undefined");
        if (typeof t != "function") throw new TypeError("callback must be a function");
        for (var r = Object(this), n = r.length >>> 0, o = arguments[1], a = 0; a < n; a++) {
            var l = r[a];
            if (t.call(o, l, a, r)) return l
        }
    }
});
String.prototype.padStart || (String.prototype.padStart = function (t, r) {
    return t = t >> 0, r = String(r || " "), this.length > t ? String(this) : (t = t - this.length, t > r.length && (r += r.repeat(t / r.length)), r.slice(0, t) + String(this))
});

function jM(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
        if (t.includes(n)) continue;
        r[n] = e[n]
    }
    return r
}

function G(e, t) {
    if (e == null) return {};
    var r, n, o = jM(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
}

function X() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) switch (Mr(r)) {
            case"string":
                e.push(r);
                break;
            case"object":
                for (var n in r) r[n] && e.push(n);
                break;
            default:
                e.push("".concat(r))
        }
    }
    return e.length > 1 ? e : e[0] || ""
}

function LM() {
    var e = X.apply(void 0, arguments);
    return typeof e == "string" ? e : e.join(" ")
}

var Fl;
(function (e) {
    e.IOS = "ios", e.UNKNOWN = ""
})(Fl || (Fl = {}));
var ku = {};

function NM() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (ku[e]) return ku[e];
    var t = null, r = Fl.UNKNOWN, n = u1(e), o = n.isIOS, a = n.iosMajor, l = n.iosMinor;
    o && (r = Fl.IOS, t = {major: a, minor: l});
    var s = {userAgent: e, system: r, systemVersion: t};
    return ku[e] = s, s
}

var xe;
(function (e) {
    e.ANDROID = "android", e.IOS = "ios", e.VKCOM = "vkcom"
})(xe || (xe = {}));
var f1 = {desktop_web: xe.VKCOM};

function DM(e) {
    return e in f1
}

function FM(e) {
    try {
        var t = _M.parse(e), r = t.vk_platform;
        return typeof r == "string" && DM(r) ? f1[r] : void 0
    } catch (n) {
        console.warn(n);
        return
    }
}

var Uh = je ? FM(location.search) : void 0, Gt = xe.ANDROID, ye = xe.IOS, Ie = xe.VKCOM;

function Pf(e) {
    return Uh || (e || (e = NM()), e.system === "ios" ? ye : Gt)
}

var BM = Pf(), Gr = BM === Gt, jn;
(function (e) {
    e.VKAPPS = "vkapps", e.INTERNAL = "internal"
})(jn || (jn = {}));
var Yt = E.createContext({
    webviewType: jn.VKAPPS,
    isWebView: _t.isWebView(),
    transitionMotionEnabled: !0,
    platform: Pf(),
    hasNewTokens: !1
}), zM = function () {
    return E.useContext(Yt)
};

function Kh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function me(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Kh(Object(r), !0).forEach(function (n) {
            Pe(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Fr(e) {
    return typeof e == "function"
}

function De(e) {
    return e !== void 0 && e !== !1 && e !== null && e !== ""
}

function Wc(e) {
    return typeof e == "string" || typeof e == "number"
}

function v1(e, t) {
    t && (typeof t == "function" ? t(e) : t.current = e)
}

function HM() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var n = null;
    return {
        get current() {
            return n
        }, set current(o) {
            n = o, t.forEach(function (a) {
                return a && v1(o, a)
            })
        }
    }
}

var ve = function () {
};

function VM(e) {
    var t = "";
    return E.Children.map(e, function (r) {
        typeof r == "string" && (t += r)
    }), t
}

var fe = je ? E.useLayoutEffect : E.useEffect, Bl = function (t, r, n) {
    return Math.max(r, Math.min(t, n))
}, p1 = function (t) {
    Object.assign(t.style, {position: "", top: "", left: "", right: "", overflowY: "", overflowX: ""})
}, WM = function (t) {
    var r = t.document.documentElement.clientHeight - t.innerHeight;
    return t.pageYOffset - r
}, ps = E.createContext({
    getScroll: function () {
        return {x: 0, y: 0}
    }, scrollTo: ve, isScrollLock: !1, enableScrollLock: ve, disableScrollLock: ve
}), h1 = function () {
    return E.useContext(ps)
}, UM = function (t) {
    var r = t.children, n = kt(), o = n.window, a = n.document, l = E.useState(!1), s = te(l, 2), u = s[0], c = s[1],
        v = E.useRef(new Set), g = E.useCallback(function () {
            return {x: o.pageXOffset, y: WM(o)}
        }, [o]), p = E.useCallback(function () {
            var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            o.scrollTo(d ? Bl(d, 0, a.body.scrollWidth - o.innerWidth) : 0, f ? Bl(f, 0, a.body.scrollHeight - o.innerHeight) : 0)
        }, [a, o]), m = E.useCallback(function () {
            v.current.forEach(function (k) {
                k()
            });
            var d = o.pageYOffset, f = o.pageXOffset, h = o.innerWidth > a.documentElement.clientWidth ? "scroll" : "",
                C = o.innerHeight > a.documentElement.clientHeight ? "scroll" : "";
            Object.assign(a.body.style, {
                position: "fixed",
                top: "-".concat(d, "px"),
                left: "-".concat(f, "px"),
                right: "0",
                overflowY: h,
                overflowX: C
            }), c(!0)
        }, [a, o]), S = E.useCallback(function () {
            var d = a.body.style.top, f = a.body.style.left;
            p1(a.body), o.scrollTo(-parseInt(f || "0"), -parseInt(d || "0")), c(!1)
        }, [a, o]), w = E.useMemo(function () {
            return {
                getScroll: g,
                scrollTo: p,
                isScrollLock: u,
                disableScrollLock: S,
                enableScrollLock: m,
                beforeScrollLockFnSetRef: v
            }
        }, [g, p, u, S, m]);
    return y(ps.Provider, {value: w}, r)
}, KM = function (t) {
    var r = t.elRef, n = t.children, o = E.useState(!1), a = te(o, 2), l = a[0], s = a[1], u = E.useRef(new Set),
        c = E.useCallback(function () {
            var S, w, d, f;
            return {
                x: (S = (w = r.current) === null || w === void 0 ? void 0 : w.scrollLeft) !== null && S !== void 0 ? S : 0,
                y: (d = (f = r.current) === null || f === void 0 ? void 0 : f.scrollTop) !== null && d !== void 0 ? d : 0
            }
        }, [r]), v = E.useCallback(function () {
            var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, d = r.current;
            d == null || d.scrollTo(S ? Bl(S, 0, d.scrollWidth - d.clientWidth) : 0, w ? Bl(w, 0, d.scrollHeight - d.clientHeight) : 0)
        }, [r]), g = E.useCallback(function () {
            var S = r.current;
            if (S) {
                u.current.forEach(function (C) {
                    C()
                });
                var w = S.scrollTop, d = S.scrollLeft, f = S.scrollWidth > S.clientWidth ? "scroll" : "",
                    h = S.scrollHeight > S.clientHeight ? "scroll" : "";
                Object.assign(S.style, {
                    position: "absolute",
                    top: "-".concat(w, "px"),
                    left: "-".concat(d, "px"),
                    right: "0",
                    overflowY: f,
                    overflowX: h
                }), s(!0)
            }
        }, [r]), p = E.useCallback(function () {
            var S = r.current;
            if (S) {
                var w = S.style.top, d = S.style.left;
                p1(S), S.scrollTo(-parseInt(d || "0"), -parseInt(w || "0")), s(!1)
            }
        }, [r]), m = E.useMemo(function () {
            return {
                getScroll: c,
                scrollTo: v,
                isScrollLock: l,
                disableScrollLock: p,
                enableScrollLock: g,
                beforeScrollLockFnSetRef: u
            }
        }, [c, v, l, p, g]);
    return y(ps.Provider, {value: m}, n)
}, m1 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = h1(), n = r.enableScrollLock,
        o = r.disableScrollLock;
    fe(function () {
        return t ? (n(), o) : ve
    }, [n, o, t])
}, g1 = E.createContext({colRef: null, animate: !0}), GM = function () {
    return E.useContext(g1)
}, hs = E.createContext({portalRoot: null});

function Mf(e) {
    var t = {};
    return function (r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "warn";
        t[r] || (console[n]("[VKUI/".concat(e, "] ").concat(r)), t[r] = !0)
    }
}

function y1(e) {
    var t = e.platform, r = e.appearance;
    switch (r) {
        case"dark":
            switch (t) {
                case Ie:
                    return Ge.VKCOM_DARK;
                default:
                    return Ge.SPACE_GRAY
            }
        default:
            switch (t) {
                case Ie:
                    return Ge.VKCOM_LIGHT;
                default:
                    return Ge.BRIGHT_LIGHT
            }
    }
}

var Ge;
(function (e) {
    e.DEPRECATED_CLIENT_LIGHT = "client_light", e.DEPRECATED_CLIENT_DARK = "client_dark", e.VKCOM = "vkcom", e.BRIGHT_LIGHT = "bright_light", e.SPACE_GRAY = "space_gray", e.VKCOM_LIGHT = "vkcom_light", e.VKCOM_DARK = "vkcom_dark"
})(Ge || (Ge = {}));
var Uc;
(function (e) {
    e.DARK = "dark", e.LIGHT = "light"
})(Uc || (Uc = {}));

function YM(e) {
    var t = e.platform, r = e.scheme, n = e.appearance;
    if (r === "inherit") return r;
    if (n || r === void 0) return y1({platform: t, appearance: n});
    if (r === Ge.VKCOM || t === Ie && (r === Ge.BRIGHT_LIGHT || r === Ge.SPACE_GRAY)) return Ge.VKCOM_LIGHT;
    switch (r) {
        case Ge.DEPRECATED_CLIENT_LIGHT:
            return Ge.BRIGHT_LIGHT;
        case Ge.DEPRECATED_CLIENT_DARK:
            return Ge.SPACE_GRAY;
        default:
            return r
    }
}

var w1 = E.createContext(Uc.LIGHT), S1 = E.createContext({platform: null, userAgent: "", browserInfo: void 0});

function we() {
    var e = E.useContext(S1), t = E.useContext(Yt), r = t.platform;
    return e.platform || r
}

var C1 = function (t, r) {
    var n;
    switch (t) {
        case xe.ANDROID:
            n = "vkBase";
            break;
        case xe.IOS:
            n = "vkIOS";
            break;
        case xe.VKCOM:
            n = "vkCom";
            break;
        default:
            n = t
    }
    return "vkui--".concat(n, "--").concat(r)
}, b1 = function (t) {
    var r = t.children, n = t.appearance, o = n === void 0 ? "light" : n, a = we(),
        l = y1({platform: a, appearance: o});
    return y(w1.Provider, {value: o}, E.Children.map(r, function (s) {
        return E.isValidElement(s) ? E.cloneElement(s, {className: LM(s.props.className, "vkui".concat(l), C1(a, o))}) : s
    }))
}, XM = function () {
    return E.useContext(w1)
}, E1 = function (t) {
    var r, n = t.children, o = t.className, a = t.forcePortal, l = E.useContext(hs), s = l.portalRoot, u = l.mode,
        c = l.disablePortal, v = XM();
    return a = (r = a) !== null && r !== void 0 ? r : u !== "full", !c && s && a ? n1.createPortal(y(b1, {appearance: v}, y("div", {className: o}, n)), s) : y(E.Fragment, null, n)
};

function qM(e, t) {
    return Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(function (r) {
        return e[r] === t[r]
    })
}

function k1(e) {
    var t = E.useRef(e);
    return qM(t.current, e) || (t.current = e), t.current
}

var x1 = E.createContext({entering: !1}), ZM = function () {
    return E.useContext(x1)
}, QM = function (t) {
    var r = t.children, n = t.entering, o = ZM(), a = k1({entering: o.entering || n});
    return y(x1.Provider, {value: a}, r)
};

function ar(e, t) {
    var r = e.nav || e.id;
    return r
}

function sn(e, t) {
    var r = E.useRef({cb: e, duration: t});
    fe(function () {
        r.current.cb = e, r.current.duration = t
    }, [e, t]);
    var n = E.useRef(), o = E.useCallback(function () {
        je && n !== null && n !== void 0 && n.current && clearTimeout(n.current)
    }, []), a = E.useCallback(function () {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.current.duration;
        o(), je && (n.current = setTimeout(function () {
            var s = r.current.cb;
            typeof s == "function" && s()
        }, l))
    }, [o]);
    return fe(function () {
        return o
    }, []), {set: a, clear: o}
}

var JM = !!(je && window.__isVkuiTesting), Kc = {supported: !1}, ct = {supported: !1, name: null};
je && !JM && ((typeof AnimationEvent < "u" || typeof WebKitAnimationEvent < "u") && (Kc.supported = !0), typeof TransitionEvent < "u" ? (ct.supported = !0, ct.name = "transitionend") : typeof WebKitTransitionEvent < "u" && (ct.supported = !0, ct.name = "webkitTransitionEnd"));
var Gc = function (t) {
    return t.clientX != null ? t.clientX : t.changedTouches && t.changedTouches[0].clientX
}, Yc = function (t) {
    return t.clientY != null ? t.clientY : t.changedTouches && t.changedTouches[0].clientY
}, Xc = function () {
    return je && "ontouchstart" in window
};

function eR() {
    return Xc() ? ["touchstart", "touchmove", "touchend", "touchcancel"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
}

function qc(e, t, r, n) {
    if (n || e < 0) return e;
    var o = e * r;
    return o * t / (o + t)
}

function sa() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var n = E.useRef(null);
    return E.useMemo(function () {
        return {
            get current() {
                return n.current
            }, set current(o) {
                n.current = o, t.forEach(function (a) {
                    a && v1(o, a)
                })
            }
        }
    }, t)
}

function Sn(e, t, r) {
    var n = E.useRef(t);
    fe(function () {
        n.current = t
    }, [t]);
    var o = E.useCallback(function (u) {
        return n.current && n.current(u)
    }, []), a = E.useRef(ve), l = E.useCallback(function () {
        a.current(), a.current = ve
    }, []), s = E.useCallback(function (u) {
        if (je && (l(), !!u)) {
            var c = me({}, r);
            u.addEventListener(e, o, c), a.current = function () {
                return u.removeEventListener(e, o, c)
            }
        }
    }, [r, o, e, l]);
    return E.useEffect(function () {
        return l
    }, [l]), {add: s, remove: l}
}

var tR = ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onLeave", "onEnter", "onEnd", "onEndX", "onEndY", "onClickCapture", "usePointerHover", "slideThreshold", "useCapture", "Component", "getRootRef", "noSlideClick", "stopPropagation"],
    ua = function (t) {
        var r = t.onStart, n = t.onStartX, o = t.onStartY, a = t.onMove, l = t.onMoveX, s = t.onMoveY, u = t.onLeave,
            c = t.onEnter, v = t.onEnd, g = t.onEndX, p = t.onEndY, m = t.onClickCapture, S = t.usePointerHover,
            w = t.slideThreshold, d = w === void 0 ? 5 : w, f = t.useCapture, h = f === void 0 ? !1 : f,
            C = t.Component, k = C === void 0 ? "div" : C, $ = t.getRootRef, x = t.noSlideClick,
            _ = x === void 0 ? !1 : x, R = t.stopPropagation, M = R === void 0 ? !1 : R, j = G(t, tR), re = kt(),
            U = re.document, B = E.useMemo(eR, []), Y = E.useRef(!1), Q = E.useRef(null), ne = function (z, W) {
                M && z.stopPropagation(), W.forEach(function (q) {
                    var F, J, oe,
                        be = Date.now() - ((F = (J = Q.current) === null || J === void 0 || (oe = J.startT) === null || oe === void 0 ? void 0 : oe.getTime()) !== null && F !== void 0 ? F : 0);
                    q && q(me(me({}, Q.current), {}, {duration: be, originalEvent: z}))
                })
            }, ce = Sn(S ? "pointerenter" : "mouseenter", c), _e = Sn(S ? "pointerleave" : "mouseleave", u),
            Be = Sn(B[0], function (T) {
                Q.current = rR(Gc(T), Yc(T)), ne(T, [r, n, o]), O(Xc() ? T.target : U)
            }, {capture: h, passive: !1}), ke = sa($);
        fe(function () {
            var T = ke.current;
            T && (ce.add(T), _e.add(T), Be.add(T))
        }, [k]);

        function A(T) {
            var z, W = (z = Q.current) !== null && z !== void 0 ? z : {}, q = W.isPressed, F = W.isX, J = W.isY,
                oe = W.startX, be = oe === void 0 ? 0 : oe, ue = W.startY, pt = ue === void 0 ? 0 : ue;
            if (q) {
                var jr, tr = Gc(T) - be, ut = Yc(T) - pt, rr = Math.abs(tr), nr = Math.abs(ut);
                if (T.touches && T.touches.length > 1) return V(T);
                if (!F && !J) {
                    var mn = rr >= d && rr > nr, Qe = nr >= d && nr > rr, or = mn && (!!l || !!a),
                        Kn = Qe && (!!s || !!a);
                    Object.assign(Q.current, {isY: Qe, isX: mn, isSlideX: or, isSlideY: Kn, isSlide: or || Kn})
                }
                (jr = Q.current) !== null && jr !== void 0 && jr.isSlide && (Object.assign(Q.current, {
                    shiftX: tr,
                    shiftY: ut,
                    shiftXAbs: rr,
                    shiftYAbs: nr
                }), ne(T, [a, Q.current.isSlideX && l, Q.current.isSlideY && s]))
            }
        }

        function V(T) {
            var z, W = (z = Q.current) !== null && z !== void 0 ? z : {}, q = W.isPressed, F = W.isSlide,
                J = W.isSlideX, oe = W.isSlideY;
            q && ne(T, [v, oe && p, J && g]), Y.current = !!F, Q.current = {}, Xc() && u && u(T), P()
        }

        var K = {capture: h, passive: !1}, ie = [Sn(B[1], A, K), Sn(B[2], V, K), Sn(B[3], V, K)];

        function O(T) {
            T && ie.forEach(function (z) {
                return z.add(T)
            })
        }

        function P() {
            ie.forEach(function (T) {
                return T.remove()
            })
        }

        var L = function (z) {
            var W = z.target;
            (W.tagName === "A" || W.tagName === "IMG") && z.preventDefault()
        }, N = function (z) {
            if (!Y.current) return m && m(z);
            z.target.closest("a") && z.preventDefault(), _ ? z.stopPropagation() : m && m(z), Y.current = !1
        };
        return y(k, D({}, j, {onDragStart: L, onClickCapture: N, ref: ke}))
    };

function rR(e, t) {
    return {
        startX: e,
        startY: t,
        startT: new Date,
        duration: 0,
        isPressed: !0,
        isY: !1,
        isX: !1,
        isSlideX: !1,
        isSlideY: !1,
        isSlide: !1,
        shiftX: 0,
        shiftY: 0,
        shiftXAbs: 0,
        shiftYAbs: 0
    }
}

var nR = "input, textarea, [data-vkui-swipe-back=false]";

function oR(e) {
    var t, r = e.originalEvent.target;
    return !!(!(r == null || (t = r.closest) === null || t === void 0) && t.call(r, nR))
}

var $1 = function () {
    var t = E.useRef(null), r = kt(), n = r.document, o = E.useRef(ve), a = E.useCallback(function () {
        o.current(), o.current = ve
    }, []), l = E.useCallback(function (s, u, c) {
        s && (!(n != null && n.hidden) && ct.supported && ct.name ? (a(), s.addEventListener(ct.name, u), o.current = function () {
            ct.name && s.removeEventListener(ct.name, u)
        }) : (t != null && t.current && clearTimeout(t.current), t.current = setTimeout(u, c)))
    }, [n, a, t]);
    return {waitTransitionFinish: l}
};

function Qn(e) {
    var t = E.useRef();
    return E.useEffect(function () {
        t.current = e
    }), t.current
}

var iR = ["popout", "modal", "activePanel", "history", "nav", "onTransition", "onSwipeBack", "onSwipeBackStart", "onSwipeBackCancel", "children"],
    Sr;
(function (e) {
    e[e.fail = 1] = "fail", e[e.success = 2] = "success"
})(Sr || (Sr = {}));
var Gh = {}, Ua = function (t) {
    var r = t.popout, n = t.modal, o = t.activePanel, a = t.history, l = t.nav, s = t.onTransition, u = t.onSwipeBack,
        c = t.onSwipeBackStart, v = t.onSwipeBackCancel, g = t.children, p = G(t, iR),
        m = E.useRef(Gh[ar({nav: l, id: p.id})] || {}), S = E.useRef(ve);
    E.useEffect(function () {
        return function () {
            var de = ar({nav: l, id: p.id});
            de && (Gh[de] = m.current)
        }
    });
    var w = E.useRef({}), d = kt(), f = d.window, h = d.document, C = h1(), k = zM(), $ = GM(), x = we(),
        _ = E.useState(!1), R = te(_, 2), M = R[0], j = R[1], re = E.useState([o]), U = te(re, 2), B = U[0], Y = U[1],
        Q = E.useState(o), ne = te(Q, 2), ce = ne[0], _e = ne[1], Be = E.useState(void 0), ke = te(Be, 2), A = ke[0],
        V = ke[1], K = E.useState(null), ie = te(K, 2), O = ie[0], P = ie[1], L = E.useState(null), N = te(L, 2),
        T = N[0], z = N[1], W = E.useState(!1), q = te(W, 2), F = q[0], J = q[1], oe = E.useState(0), be = te(oe, 2),
        ue = be[0], pt = be[1], jr = E.useState(0), tr = te(jr, 2), ut = tr[0], rr = tr[1], nr = E.useState(null),
        mn = te(nr, 2), Qe = mn[0], or = mn[1], Kn = E.useState(null), fa = te(Kn, 2), Lr = fa[0], Wo = fa[1],
        Ss = E.useState(null), va = te(Ss, 2), jt = va[0], Gn = va[1], Cs = E.useState(!1), pa = te(Cs, 2), Yn = pa[0],
        Ue = pa[1], pe = Qn(o), xt = Qn(F), Nr = Qn(Yn), yr = Qn(jt), Uo = Qn(Lr), Ko = Qn(s),
        Bf = E.Children.toArray(g).filter(function (de) {
            var ae = ar(de.props);
            return ae !== void 0 && B.includes(ae) || ae === Lr || ae === Qe
        }), Go = (k == null ? void 0 : k.transitionMotionEnabled) === !1 || !($ != null && $.animate),
        zf = function (ae) {
            return ae === null ? null : w.current[ae]
        }, ha = E.useCallback(function (de, ae) {
            ae && (m.current[de] = 0), P(null), z(null), Y([o]), _e(o), j(!1), V(void 0), S.current = function () {
                C == null || C.scrollTo(0, ae ? m.current[o] : 0), s && s({isBack: ae, from: de, to: o})
            }
        }, [o, s, C]);
    fe(function () {
        S.current(), S.current = ve
    }, [S.current]);
    var Hf = E.useCallback(function (de) {
            (!de || ["vkui-animation-ios-next-forward", "vkui-animation-ios-prev-back", "vkui-animation-view-next-forward", "vkui-animation-view-prev-back"].includes(de.animationName)) && O !== null && ha(O, !!A)
        }, [ha, A, O]), ww = $1(), Vf = ww.waitTransitionFinish, Wf = sn(Hf, x === ye ? 600 : 300),
        ma = E.useCallback(function () {
            u && u()
        }, [u]), ga = E.useCallback(function () {
            v && v(), Wo(null), or(null), J(!1), Gn(null), pt(0), rr(0)
        }, [v]), Uf = E.useCallback(function (de) {
            if (!de || de != null && de.propertyName.includes("transform") && (de == null ? void 0 : de.target) === zf(Qe)) switch (jt) {
                case Sr.fail:
                    ga();
                    break;
                case Sr.success:
                    ma()
            }
        }, [ga, ma, Qe, jt]), Sw = function (ae) {
            if (!oR(ae) && (x === ye && !(k != null && k.isWebView) && (ae.startX <= 70 || ae.startX >= f.innerWidth - 70) && !Yn && Ue(!0), x === ye && k !== null && k !== void 0 && k.isWebView && u)) {
                if (M && ae.startX <= 70 || !f) return;
                if (ae.startX <= 70 && !F && a && a.length > 1 && (ce !== null && (Eu(h), m.current[ce] = C == null ? void 0 : C.getScroll().y), J(!0), pt(ae.startX), Wo(ce), or(a.slice(-2)[0])), F) {
                    var le = 0;
                    ae.shiftX < 0 ? le = 0 : ae.shiftX > f.innerWidth - ue ? le = f == null ? void 0 : f.innerWidth : le = ae.shiftX, rr(le)
                }
            }
        }, Cw = E.useCallback(function (de) {
            if (F && f) {
                var ae, le = ut / de.duration * 1e3;
                ut === 0 ? ga() : ut >= ((ae = f == null ? void 0 : f.innerWidth) !== null && ae !== void 0 ? ae : 0) ? ma() : le > 250 || ue + ut > f.innerWidth / 2 ? Gn(Sr.success) : Gn(Sr.fail)
            }
        }, [ga, ma, ut, ue, F, f]), bw = function (ae) {
            if (!je || !f) return {};
            var le = ae === Lr, Xn = ae === Qe;
            if (!le && !Xn || jt) return {};
            var wr = "".concat(ut, "px"), ya = "".concat(-50 + ut * 100 / f.innerWidth / 2, "%"),
                bs = .3 * (f.innerWidth - ut) / f.innerWidth;
            return jt ? le ? {boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(bs, ")")} : {} : Xn ? {
                transform: "translate3d(".concat(ya, ", 0, 0)"),
                WebkitTransform: "translate3d(".concat(ya, ", 0, 0)")
            } : le ? {
                transform: "translate3d(".concat(wr, ", 0, 0)"),
                WebkitTransform: "translate3d(".concat(wr, ", 0, 0)"),
                boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(bs, ")")
            } : {}
        };
    return E.useEffect(function () {
        r && Eu(h)
    }, [h, r]), E.useEffect(function () {
        if (pe && pe !== o && !xt && !Nr) {
            var de = E.Children.toArray(g).map(function (wr) {
                return ar(wr.props)
            }).find(function (wr) {
                return wr === pe || wr === o
            }), ae = de === o;
            m.current[pe] = C == null ? void 0 : C.getScroll().y, Go ? ha(pe, ae) : (Eu(h), Y([pe, o]), P(pe), z(o), _e(null), j(!0), V(ae), Kc.supported || Wf.set())
        }
        if (pe && pe !== o && xt) {
            var le = o, Xn = pe;
            Uo && (m.current[Uo] = 0), Wo(null), or(null), J(!1), Gn(null), pt(0), rr(0), _e(le), Y([le]), S.current = function () {
                le !== null && (C == null || C.scrollTo(0, m.current[le])), Ko && Ko({isBack: !0, from: Xn, to: le})
            }
        }
        !xt && F && c && c(), !yr && jt && Vf(zf(Qe), Uf, x === ye ? 600 : 300), yr === Sr.fail && !jt && ce !== null && (C == null || C.scrollTo(0, m.current[ce])), pe !== o && Yn && (Ue(!1), z(null), P(null), j(!1), Y([o]), _e(o))
    }, [o, ce, Wf, Yn, g, Go, h, ha, c, Bf, x, pe, Nr, Ko, Uo, yr, xt, C, Qe, jt, F, Uf, Vf]), y(ua, D({Component: "section"}, p, {
        vkuiClass: X("View", x === ye && "View--ios", !Go && M && "View--animated", !Go && F && "View--swiping-back", Go && "View--no-motion"),
        onMoveX: Sw,
        onEnd: Cw
    }), y("div", {vkuiClass: "View__panels"}, Bf.map(function (de) {
        var ae, le = ar(de.props), Xn = le === O || le === Lr, wr = M && le === (A ? O : T),
            ya = Xn || le === Qe || le === T && A;
        return y("div", {
            vkuiClass: X("View__panel", le === ce && "View__panel--active", le === O && "View__panel--prev", le === T && "View__panel--next", le === Lr && "View__panel--swipe-back-prev", le === Qe && "View__panel--swipe-back-next", jt === Sr.success && "View__panel--swipe-back-success", jt === Sr.fail && "View__panel--swipe-back-failed"),
            onAnimationEnd: wr ? Hf : void 0,
            ref: function (Ew) {
                return le !== void 0 && (w.current[le] = Ew)
            },
            style: bw(le),
            key: le
        }, y("div", {
            vkuiClass: "View__panel-in",
            style: {marginTop: ya ? -((ae = m.current[le]) !== null && ae !== void 0 ? ae : 0) : void 0}
        }, y(QM, {entering: le === T || le === Qe}, de)))
    })), y(E1, null, !!r && y("div", {vkuiClass: "View__popout"}, r), !!n && y("div", {vkuiClass: "View__modal"}, n)))
}, aR = ["fixed"], lR = "data-tooltip-container", Rf = E.forwardRef(function (t, r) {
    var n = t.fixed, o = n === void 0 ? !1 : n, a = G(t, aR);
    return a[lR] = o ? "fixed" : "true", y("div", D({}, a, {ref: r}))
}), Xe;
(function (e) {
    e.COMPACT = "compact", e.REGULAR = "regular"
})(Xe || (Xe = {}));
var $t;
(function (e) {
    e[e.SMALL_MOBILE = 1] = "SMALL_MOBILE", e[e.MOBILE = 2] = "MOBILE", e[e.SMALL_TABLET = 3] = "SMALL_TABLET", e[e.TABLET = 4] = "TABLET", e[e.DESKTOP = 5] = "DESKTOP"
})($t || ($t = {}));
var Vr;
(function (e) {
    e[e.EXTRA_SMALL = 1] = "EXTRA_SMALL", e[e.SMALL = 2] = "SMALL", e[e.MEDIUM = 3] = "MEDIUM"
})(Vr || (Vr = {}));
var zl = E.createContext({
    sizeX: Xe.COMPACT,
    sizeY: Xe.REGULAR,
    hasMouse: Cn,
    deviceHasHover: fo,
    viewWidth: 0,
    viewHeight: 0
});

function At(e, t) {
    var r = function (o) {
        var a = E.useContext(zl), l = !1;
        (o.sizeX || o.sizeY) && (l = !0);
        var s = o.sizeX || a.sizeX, u = o.sizeY || a.sizeY, c = a.viewWidth, v = a.viewHeight, g = a.hasMouse,
            p = a.deviceHasHover, m = {};
        t.sizeX && (m.sizeX = s), t.sizeY && (m.sizeY = u), t.viewWidth && (m.viewWidth = c), t.viewHeight && (m.viewHeight = v), t.hasMouse && (m.hasMouse = g), t.deviceHasHover && (m.deviceHasHover = p);
        var S = y(e, D({}, o, m));
        return l ? y(zl.Provider, {
            value: {
                sizeX: s,
                sizeY: u,
                viewWidth: c,
                viewHeight: v,
                hasMouse: g,
                deviceHasHover: p
            }
        }, S) : S
    };
    return r
}

var sR = ["centered", "children", "getRootRef", "sizeX", "nav"], Ho = At(function (e) {
    var t = e.centered, r = t === void 0 ? !1 : t, n = e.children, o = e.getRootRef, a = e.sizeX;
    e.nav;
    var l = G(e, sR), s = we();
    return y("div", D({}, l, {
        ref: o,
        vkuiClass: X("Panel", s === ye && "Panel--ios", s === Ie && "Panel--vkcom", "Panel--sizeX-".concat(a), r && "Panel--centered")
    }), y(ua, {
        Component: Rf,
        vkuiClass: "Panel__in"
    }, s === ye && y("div", {vkuiClass: "Panel__fade"}), y("div", {vkuiClass: "Panel__in-before"}), r ? y("div", {vkuiClass: "Panel__centered"}, n) : n, y("div", {vkuiClass: "Panel__in-after"})))
}, {sizeX: !0});
Ho.displayName = "Panel";

function uR(e) {
    return {
        all: e = e || new Map, on: function (t, r) {
            var n = e.get(t);
            n ? n.push(r) : e.set(t, [r])
        }, off: function (t, r) {
            var n = e.get(t);
            n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []))
        }, emit: function (t, r) {
            var n = e.get(t);
            n && n.slice().map(function (o) {
                o(r)
            }), (n = e.get("*")) && n.slice().map(function (o) {
                o(t, r)
            })
        }
    }
}

var _1 = E.createContext(!1);

function cR(e) {
    var t = e == null ? void 0 : e.getBoundingClientRect();
    return {
        top: t == null ? void 0 : t.top,
        left: t == null ? void 0 : t.left,
        width: e == null ? void 0 : e.offsetWidth,
        height: e == null ? void 0 : e.offsetHeight
    }
}

var dR = ["a[href]", "area[href]", 'input:not([disabled]):not([hidden]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([hidden]):not([aria-hidden])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "audio", "video", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'],
    tt;
(function (e) {
    e.ENTER = "Enter", e.SPACE = "Space", e.TAB = "Tab", e.ESCAPE = "Escape", e.HOME = "Home", e.END = "End", e.ARROW_LEFT = "ArrowLeft", e.ARROW_RIGHT = "ArrowRight", e.ARROW_DOWN = "ArrowDown"
})(tt || (tt = {}));
var fR = [{code: tt.ENTER, key: ["Enter"], keyCode: 13}, {
    code: tt.SPACE,
    key: ["Space", "Spacebar", " "],
    keyCode: 32
}, {code: tt.TAB, key: ["Tab"], keyCode: 9}, {code: tt.ESCAPE, key: ["Escape"], keyCode: 27}, {
    code: tt.HOME,
    key: ["Home"],
    keyCode: 36
}, {code: tt.END, key: ["End"], keyCode: 35}, {
    code: tt.ARROW_LEFT,
    key: ["ArrowLeft"],
    keyCode: 37
}, {code: tt.ARROW_RIGHT, key: ["ArrowRight"], keyCode: 39}, {code: tt.ARROW_DOWN, key: ["ArrowDown"], keyCode: 40}];

function Hl(e) {
    var t;
    return ((t = fR.find(function (r) {
        var n = r.key, o = r.keyCode;
        return n.includes(e.key) || o === e.keyCode
    })) === null || t === void 0 ? void 0 : t.code) || null
}

function vR(e) {
    var t = e.target, r = t.tagName, n = t.getAttribute("role"),
        o = t.isContentEditable !== !0 && r !== "INPUT" && r !== "TEXTAREA" && (n === "button" || n === "link"),
        a = r === "A" && t.hasAttribute("href"), l = Hl(e);
    return o && (l === tt.SPACE && n === "button" || l === tt.ENTER && !a)
}

var pR = function (t) {
    var r = t.mode;
    return y("span", {"aria-hidden": "true", vkuiClass: X("FocusVisible", "FocusVisible--".concat(r))})
};

function hR() {
    var e = E.useState(!1), t = te(e, 2), r = t[0], n = t[1], o = E.useContext(hs), a = o.keyboardInput,
        l = E.useCallback(function (c) {
            c.stopPropagation(), n(!0)
        }, [n]), s = E.useCallback(function (c) {
            c.stopPropagation(), n(!1)
        }, [n]), u = a && r;
    return {focusVisible: u, onFocus: l, onBlur: s}
}

var Br = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return function () {
            for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
            return r.filter(function (s) {
                return typeof s == "function"
            }).forEach(function (s) {
                return s.apply(void 0, a)
            })
        }
    }, mR = function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = E.useState(t), n = te(r, 2),
            o = n[0], a = n[1], l = E.useCallback(function () {
                a(!0)
            }, []), s = E.useCallback(function () {
                a(!1)
            }, []), u = E.useCallback(function () {
                a(!o)
            }, [o]);
        return {value: o, setTrue: l, setFalse: s, toggle: u}
    },
    gR = ["children", "Component", "onClick", "onKeyDown", "activeEffectDelay", "stopPropagation", "getRootRef", "sizeX", "hasMouse", "deviceHasHover", "hasHover", "hoverMode", "hasActive", "activeMode", "focusVisibleMode", "onEnter", "onLeave"],
    Yh = 225, T1 = 70, yR = 600, xu = uR(), mt = {none: 0, pending: 1, active: 2, exiting: 3},
    Xh = E.createContext({onHoverChange: ve});

function wR(e, t) {
    var r = E.useMemo(function () {
        return Math.round(Math.random() * 1e8).toString(16)
    }, []), n = E.useState(mt.none), o = te(n, 2), a = o[0], l = o[1], s = function () {
        return l(mt.none)
    }, u = function () {
        return e && l(mt.active)
    }, c = function () {
        e && l(mt.pending)
    }, v = sn(u, T1), g = sn(s, t);
    fe(function () {
        return a === mt.pending ? (v.set(), v.clear) : a === mt.exiting ? g.clear : (a === mt.active && xu.emit("active", r), ve)
    }, [a]), fe(function () {
        if (a === mt.none) return ve;
        var m = function (w) {
            w !== r && s()
        };
        return xu.on("active", m), function () {
            return xu.off("active", m)
        }
    }, [a === mt.none]), fe(function () {
        !e && s()
    }, [e]);
    var p = function (S) {
        if (S) return l(mt.exiting), g.set(S);
        s()
    };
    return [a, {delayStart: c, start: u, stop: p}]
}

var SR = function (t) {
    var r = t.children, n = t.Component, o = t.onClick, a = t.onKeyDown, l = t.activeEffectDelay,
        s = l === void 0 ? yR : l, u = t.stopPropagation, c = u === void 0 ? !1 : u, v = t.getRootRef, g = t.sizeX,
        p = t.hasMouse, m = t.deviceHasHover, S = t.hasHover, w = S === void 0 ? !0 : S, d = t.hoverMode,
        f = d === void 0 ? "background" : d, h = t.hasActive, C = h === void 0 ? !0 : h, k = t.activeMode,
        $ = k === void 0 ? "background" : k, x = t.focusVisibleMode, _ = x === void 0 ? "inside" : x, R = t.onEnter,
        M = t.onLeave, j = G(t, gR);
    n = n || (j.href ? "a" : "div");
    var re = E.useContext(Xh), U = re.onHoverChange, B = E.useContext(_1), Y = we(), Q = hR(), ne = Q.focusVisible,
        ce = Q.onBlur, _e = Q.onFocus, Be = E.useState([]), ke = te(Be, 2), A = ke[0], V = ke[1], K = E.useState(!1),
        ie = te(K, 2), O = ie[0], P = ie[1], L = mR(!1), N = L.value, T = L.setTrue, z = L.setFalse,
        W = N && !j.disabled, q = C && !O && !j.disabled, F = m && w && !O,
        J = n !== "a" && n !== "button" && n !== "label" && !j.contentEditable,
        oe = ["opacity", "background"].includes(f), be = ["opacity", "background"].includes($),
        ue = ["inside", "outside"].includes(_), pt = wR(q, s), jr = te(pt, 2), tr = jr[0], ut = jr[1], rr = ut.start,
        nr = ut.stop, mn = ut.delayStart, Qe = tr === mt.active || tr === mt.exiting, or = sa(v),
        Kn = E.useRef({onHoverChange: P}).current;
    fe(function () {
        return W ? (U(!0), function () {
            return U(!1)
        }) : ve
    }, [W]);

    function fa(Ue) {
        if (J && vR(Ue)) {
            var pe;
            Ue.preventDefault(), (pe = or.current) === null || pe === void 0 || pe.click()
        }
    }

    var Lr = Y === Gt && !p && q && $ === "background", Wo = sn(function () {
        return V([])
    }, Yh);

    function Ss(Ue, pe) {
        var xt = Date.now(), Nr = A.filter(function (yr) {
            return yr.id + Yh > xt
        });
        V([].concat(Dl(Nr), [{x: Ue, y: pe, id: xt}])), Wo.set()
    }

    function va(Ue) {
        var pe = Ue.originalEvent;
        if (q) {
            if (pe.touches && pe.touches.length > 1) return nr();
            if (Lr) {
                var xt = cR(or.current), Nr = xt.top, yr = xt.left, Uo = Gc(pe) - (yr ?? 0), Ko = Yc(pe) - (Nr ?? 0);
                Ss(Uo, Ko)
            }
            mn()
        }
    }

    function jt(Ue) {
        var pe = Ue.isSlide;
        pe && nr()
    }

    function Gn(Ue) {
        var pe = Ue.duration;
        if (tr !== mt.none) {
            tr === mt.pending && rr();
            var xt = pe - T1;
            nr(xt >= 100 ? 0 : s - xt)
        }
    }

    var Cs = X("Tappable", Y === ye && "Tappable--ios", "Tappable--sizeX-".concat(g), F && "Tappable--hasHover", q && "Tappable--hasActive", F && W && !oe && f, q && Qe && !be && $, ne && !ue && _, q && Qe && "Tappable--active", p && "Tappable--mouse", F && W && oe && "Tappable--hover-".concat(f), q && Qe && be && "Tappable--active-".concat($), ne && "Tappable--focus-visible"),
        pa = {
            onStart: Br(va, j.onStart),
            onMove: Br(jt, j.onMove),
            onEnd: Br(Gn, j.onEnd),
            onClick: o,
            onKeyDown: Br(fa, a)
        }, Yn = j.href ? "link" : "button";
    return y(ua, D({
        onEnter: Br(T, R),
        onLeave: Br(z, M),
        type: n === "button" ? "button" : void 0,
        tabIndex: J && !j.disabled ? 0 : void 0,
        role: J ? Yn : void 0,
        "aria-disabled": J ? j.disabled : void 0,
        stopPropagation: c && !B && !j.disabled
    }, j, {
        slideThreshold: 20,
        usePointerHover: !0,
        vkuiClass: Cs,
        Component: n,
        getRootRef: or,
        onBlur: Br(ce, j.onBlur),
        onFocus: Br(_e, j.onFocus)
    }, j.disabled ? {} : pa), y(Xh.Provider, {value: Kn}, r), Lr && y("span", {
        "aria-hidden": "true",
        vkuiClass: "Tappable__waves"
    }, A.map(function (Ue) {
        return y("span", {key: Ue.id, vkuiClass: "Tappable__wave", style: {top: Ue.y, left: Ue.x}})
    })), F && f === "background" && y("span", {
        "aria-hidden": "true",
        vkuiClass: "Tappable__hoverShadow"
    }), !j.disabled && ue && y(pR, {mode: _}))
}, er = At(SR, {sizeX: !0, hasMouse: !0, deviceHasHover: !0});
er.displayName = "Tappable";

function hn(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pf();
    return "".concat(e, " ").concat(e, "--").concat(t)
}

var Ir = function () {
    return E.useContext(zl)
}, Af = function () {
    var t = we(), r = Ir(), n = r.viewWidth, o = r.viewHeight, a = r.hasMouse;
    return n >= $t.SMALL_TABLET && (a || o >= Vr.MEDIUM) || t === Ie
}, CR = ["children", "weight", "Component", "getRootRef"], un = function (t) {
    var r = t.children, n = t.weight, o = t.Component, a = o === void 0 ? "span" : o, l = t.getRootRef, s = G(t, CR),
        u = Ir(), c = u.sizeY;
    return y(a, D({}, s, {ref: l, vkuiClass: X("Text", "Text--sizeY-".concat(c), n && "Text--w-".concat(n))}), r)
}, bR = ["children", "weight", "level", "Component"], Ln = function (t) {
    var r = t.children, n = t.weight, o = t.level, a = o === void 0 ? "1" : o, l = t.Component, s = G(t, bR);
    return l || (l = "h" + a), y(l, D({}, s, {vkuiClass: X("Title", "Title--l-".concat(a), n && "Title--w-".concat(n))}), r)
}, ER = ["children", "primary", "label"], qh = function (t) {
    var r = t.primary, n = t.children, o = we();
    return o === ye ? y(Ln, {
        Component: "span",
        level: "3",
        weight: r ? "1" : "3"
    }, n) : y(un, {weight: o === Ie ? void 0 : "2"}, n)
}, xr = function (t) {
    var r = t.children, n = t.primary, o = n === void 0 ? !1 : n, a = t.label, l = G(t, ER), s = Wc(r), u = Wc(a),
        c = we(), v, g;
    switch (c) {
        case Gt:
            v = "background", g = "background";
            break;
        case ye:
            v = "background", g = "opacity";
            break;
        case Ie:
            v = "PanelHeaderButton--hover", g = "PanelHeaderButton--active"
    }
    return y(er, D({}, l, {
        hoverMode: v,
        Component: l.href ? "a" : "button",
        activeEffectDelay: 200,
        activeMode: g,
        vkuiClass: X(hn("PanelHeaderButton", c), o && "PanelHeaderButton--primary", s && "PanelHeaderButton--primitive", !s && !u && "PanelHeaderButton--notPrimitive")
    }), s ? y(qh, {primary: o}, r) : r, u ? y(qh, {primary: o}, a) : a)
};

function lr(e, t, r, n) {
    var o = Sn(t, r, n);
    fe(function () {
        r && e ? o.add(e) : o.remove()
    }, [!!r, !!e])
}

var kR = ["children", "style", "vertical", "getRootRef", "getRef", "filled"], xR = function (t) {
    var r = t.children, n = t.style, o = t.vertical, a = t.getRootRef, l = t.getRef, s = t.filled, u = G(t, kR),
        c = we(), v = E.useState(void 0), g = te(v, 2), p = g[0], m = g[1], S = kt(), w = S.window,
        d = E.useContext(g1), f = d.colRef, h = function () {
            return m(f != null && f.current ? "".concat(f.current.offsetWidth, "px") : void 0)
        };
    return E.useEffect(h, [f, c]), lr(w, "resize", h), y(Rf, D({}, u, {
        fixed: !0,
        ref: a,
        vkuiClass: X("FixedLayout", c === ye && "FixedLayout--ios", s && "FixedLayout--filled", "FixedLayout--".concat(o)),
        style: me(me({}, n), {}, {width: p})
    }), y("div", {vkuiClass: "FixedLayout__in", ref: l}, r))
}, $R = ["wide", "expanded"], cn = function (t) {
    var r = t.wide, n = t.expanded, o = G(t, $R);
    return y("div", D({}, o, {
        "aria-hidden": "true",
        vkuiClass: X("Separator", r && "Separator--wide", !r && "Separator--padded"),
        role: "separator"
    }), y("div", {vkuiClass: X("Separator__in", n && "Separator__in--expanded")}))
}, dn = E.createContext({
    updateModalHeight: function () {
    }, registerModal: function () {
    }, isInsideModal: !1
});

function _R(e, t) {
    var r = E.useContext(dn), n = E.useRef({}).current;
    fe(function () {
        if (e !== void 0) {
            r.registerModal(me(me({}, n), {}, {type: t, id: e}));
            var a = Object.keys(n).reduce(function (l, s) {
                return me(me({}, l), {}, Pe({}, s, null))
            }, {type: t, id: e});
            return function () {
                return r.registerModal(a)
            }
        }
    }, []);
    var o = E.useRef({
        modalElement: function (l) {
            return n.modalElement = l
        }, innerElement: function (l) {
            return n.innerElement = l
        }, headerElement: function (l) {
            return n.headerElement = l
        }, contentElement: function (l) {
            return n.contentElement = l
        }
    }).current;
    return {refs: o}
}

var TR = ["size", "separator", "style"], O1 = function (t) {
        var r = t.size, n = r === void 0 ? 8 : r, o = t.separator, a = t.style, l = G(t, TR), s = me({height: n}, a);
        return y("div", D({}, l, {
            "aria-hidden": "true",
            vkuiClass: X("Spacing", !!o && "Spacing--separator", (o === !0 || o === "center") && "Spacing--separator-center", o === "top" && "Spacing--separator-top", o === "bottom" && "Spacing--separator-bottom"),
            style: s
        }))
    },
    OR = ["before", "left", "after", "right", "children", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "sizeX", "sizeY", "fixed"],
    Zh = function (t) {
        var r = t.before, n = t.after, o = t.separator, a = t.children, l = E.useContext(Yt), s = l.webviewType,
            u = E.useContext(dn), c = u.isInsideModal, v = we();
        return y(E.Fragment, null, y(Rf, {
            fixed: !0,
            vkuiClass: "PanelHeader__in"
        }, y("div", {vkuiClass: "PanelHeader__before"}, r), y("div", {vkuiClass: "PanelHeader__content"}, v === Ie ? y(un, {weight: "2"}, a) : y("span", {vkuiClass: "PanelHeader__content-in"}, a)), y("div", {vkuiClass: "PanelHeader__after"}, (s === jn.INTERNAL || c) && n)), o && v === Ie && y(cn, {wide: !0}))
    }, PR = function (t) {
        var r = t.before, n = t.left, o = t.after, a = t.right, l = t.children, s = t.separator, u = s === void 0 ? !0 : s,
            c = t.visor, v = c === void 0 ? !0 : c, g = t.transparent, p = g === void 0 ? !1 : g, m = t.shadow,
            S = t.getRef, w = t.getRootRef, d = t.sizeX;
        t.sizeY;
        var f = t.fixed, h = G(t, OR), C = we(), k = E.useContext(Yt), $ = k.webviewType, x = E.useContext(dn),
            _ = x.isInsideModal, R = m && d === Xe.REGULAR, M = f !== void 0 ? f : C !== xe.VKCOM, j = r ?? n, re = o ?? a,
            U = {before: j, after: re, separator: u, children: l};
        return y("div", D({}, h, {
            vkuiClass: X(hn("PanelHeader", C), p && "PanelHeader--trnsp", R && "PanelHeader--shadow", v && "PanelHeader--vis", u && v && "PanelHeader--sep", $ === jn.VKAPPS && !_ && "PanelHeader--vkapps", !j && "PanelHeader--no-before", !re && "PanelHeader--no-after", M && "PanelHeader--fixed", "PanelHeader--sizeX-".concat(d)),
            ref: M ? w : S
        }), M ? y(xR, {
            vkuiClass: "PanelHeader__fixed",
            vertical: "top",
            getRootRef: S
        }, y(Zh, U)) : y(Zh, U), u && v && C !== Ie && (d === Xe.REGULAR ? y(O1, {size: 16}) : y(cn, null)))
    }, ca = At(PR, {sizeX: !0, sizeY: !0});
ca.displayName = "PanelHeader";
var MR = ["children", "weight", "level", "caps", "Component"], Ct = function (t) {
    var r = t.children, n = t.weight, o = t.level, a = o === void 0 ? "1" : o, l = t.caps, s = t.Component,
        u = s === void 0 ? "span" : s, c = G(t, MR);
    return y(u, D({}, c, {vkuiClass: X("Caption", "Caption--l-".concat(a), l && "Caption--caps", n && "Caption--w-".concat(n))}), r)
}, RR = ["children", "weight", "level", "Component", "getRootRef"], Rr = function (t) {
    var r = t.children, n = t.weight, o = n === void 0 ? "3" : n, a = t.level, l = a === void 0 ? "1" : a,
        s = t.Component, u = s === void 0 ? "h3" : s, c = t.getRootRef, v = G(t, RR), g = we(), p = Ir(), m = p.sizeY;
    return y(u, D({}, v, {
        ref: c,
        vkuiClass: X(hn("Headline", g), "Headline--sizeY-".concat(m), "Headline--l-".concat(l), "Headline--w-".concat(o))
    }), r)
}, AR = function (t) {
    var r = t.children, n = t.initialScroll, o = t.saveScroll, a = E.useContext(ps), l = a.getScroll, s = a.scrollTo;
    return fe(function () {
        return typeof n == "number" && s(0, n), function () {
            return o(l().y)
        }
    }, []), y(E.Fragment, null, r)
}, P1 = {type: "", viewportWidth: 0, viewportHeight: 0};

function M1(e) {
    var t = e.detail, r = t.type, n = t.data;
    if (r !== "VKWebAppUpdateConfig" || !n) return null;
    var o = n.adaptivity, a = n.viewport_width, l = n.viewport_height,
        s = {type: "", viewportWidth: isFinite(a) ? +a : 0, viewportHeight: isFinite(l) ? +l : 0};
    switch (o) {
        case"force_mobile":
        case"force_mobile_compact":
        case"adaptive":
            s.type = o
    }
    return s
}

_t.subscribe(function (e) {
    var t = M1(e);
    t && (P1 = t)
});

function IR() {
    var e = E.useState(P1), t = te(e, 2), r = t[0], n = t[1];
    return fe(function () {
        function o(a) {
            var l = M1(a);
            l && n(l)
        }

        return _t.subscribe(o), function () {
            _t.unsubscribe(o)
        }
    }, []), r
}

var jR = 1280, LR = 1024, NR = 768, DR = 320, FR = 414, BR = 720, zR = function (t) {
    var r = E.useRef(null), n = E.useState({}), o = te(n, 2), a = o[1], l = IR(), s = kt(), u = s.window;
    return r.current || (r.current = Qh(t, l, u)), E.useEffect(function () {
        function c() {
            if (r.current !== null) {
                var v = Qh(t, l, u), g = r.current, p = g.viewWidth, m = g.viewHeight, S = g.sizeX, w = g.sizeY,
                    d = g.hasMouse, f = g.deviceHasHover;
                (p !== v.viewWidth || m !== v.viewHeight || S !== v.sizeX || w !== v.sizeY || d !== v.hasMouse || f !== v.deviceHasHover) && (r.current = v, a({}))
            }
        }

        return c(), u.addEventListener("resize", c, !1), function () {
            u.removeEventListener("resize", c, !1)
        }
    }, [t.viewWidth, t.viewHeight, t.sizeX, t.sizeY, t.hasMouse, t.deviceHasHover, u, t, l]), y(zl.Provider, {value: r.current}, t.children)
};

function Qh(e, t, r) {
    var n = 0, o = 0;
    t.type === "adaptive" ? (n = t.viewportWidth, o = t.viewportHeight) : r && (n = r.innerWidth, o = r.innerHeight);
    var a = $t.SMALL_MOBILE, l = Vr.SMALL, s = Xe.REGULAR, u = Xe.REGULAR, c = Cn, v = fo;
    if (n >= jR ? a = $t.DESKTOP : n >= LR ? a = $t.TABLET : n >= NR ? a = $t.SMALL_TABLET : n >= DR ? a = $t.MOBILE : a = $t.SMALL_MOBILE, o >= BR ? l = Vr.MEDIUM : o > FR ? l = Vr.SMALL : l = Vr.EXTRA_SMALL, !t.type) {
        var g, p;
        e.viewWidth && (a = e.viewWidth), e.viewHeight && (l = e.viewHeight), c = (g = e.hasMouse) !== null && g !== void 0 ? g : c, v = (p = e.deviceHasHover) !== null && p !== void 0 ? p : v
    }
    return a <= $t.MOBILE && (u = Xe.COMPACT), (a >= $t.SMALL_TABLET && c || l <= Vr.EXTRA_SMALL) && (s = Xe.COMPACT), t.type || (e.sizeX && (u = e.sizeX), e.sizeY && (s = e.sizeY)), (t.type === "force_mobile" || t.type === "force_mobile_compact") && (a = $t.MOBILE, u = Xe.COMPACT, t.type === "force_mobile_compact" ? s = Xe.COMPACT : s = Xe.REGULAR), {
        viewWidth: a,
        viewHeight: l,
        sizeX: u,
        sizeY: s,
        hasMouse: c,
        deviceHasHover: v
    }
}

var HR = ["activeStory", "tabbar", "children", "viewWidth"], VR = function (t) {
    var r, n = t.activeStory, o = t.tabbar, a = t.children;
    t.viewWidth;
    var l = G(t, HR), s = E.useRef({}).current, u = (r = E.Children.toArray(a).find(function (c) {
        return E.isValidElement(c) && ar(c.props) === n
    })) !== null && r !== void 0 ? r : null;
    return y("div", D({}, l, {vkuiClass: "Epic"}), y(AR, {
        key: n, initialScroll: s[n] || 0, saveScroll: function (v) {
            return s[n] = v
        }
    }, u), o)
}, R1 = At(VR, {viewWidth: !0});
R1.displayName = "Epic";
var WR = ["children", "shadow", "itemsLayout", "mode"], UR = function (t, r) {
        switch (t) {
            case"horizontal":
            case"vertical":
                return t;
            default:
                return E.Children.count(r) > 2 ? "vertical" : "horizontal"
        }
    }, KR = function (t) {
        var r = t.children, n = t.shadow, o = n === void 0 ? !0 : n, a = t.itemsLayout, l = t.mode, s = G(t, WR), u = we();
        return y("div", D({vkuiClass: X("Tabbar", u === xe.IOS && "Tabbar--ios", "Tabbar--l-".concat(UR(a ?? l, r)), o && "Tabbar--shadow")}, s), y("div", {vkuiClass: "Tabbar__in"}, r))
    }, GR = ["mode", "size", "children"], YR = function (t) {
        var r = t.mode, n = r === void 0 ? "secondary" : r, o = t.size, a = o === void 0 ? "m" : o, l = t.children,
            s = G(t, GR);
        if (E.Children.count(l) === 0) return null;
        var u = a === "s" ? Ct : Rr;
        return y("span", D({}, s, {vkuiClass: X("Counter", "Counter--".concat(n), "Counter--s-".concat(a))}), De(l) && y(u, {
            Component: "span",
            vkuiClass: "Counter__in",
            level: "2"
        }, l))
    }, XR = ["children", "weight", "caps", "Component"], A1 = function (t) {
        var r = t.children, n = t.weight, o = t.caps, a = t.Component, l = a === void 0 ? "span" : a, s = G(t, XR);
        return y(l, D({}, s, {vkuiClass: X("Footnote", o && "Footnote--caps", n && "Footnote--w-".concat(n))}), r)
    }, qR = ["children", "selected", "label", "indicator", "text", "href", "Component", "disabled"], M6 = Mf("TabbarItem"),
    $u = function (t) {
        var r = t.children, n = t.selected, o = t.label, a = t.indicator, l = t.text, s = t.href, u = t.Component,
            c = u === void 0 ? s ? "a" : "button" : u, v = t.disabled, g = G(t, qR), p = we();
        return y(c, D({}, g, {
            disabled: v,
            href: s,
            vkuiClass: X("TabbarItem", p === xe.IOS && "TabbarItem--ios", p === xe.ANDROID && "TabbarItem--android", n && "TabbarItem--selected", !!l && "TabbarItem--text")
        }), y(er, {
            role: "presentation",
            Component: "div",
            disabled: v,
            activeMode: p === xe.IOS ? "TabbarItem__tappable--active" : "background",
            activeEffectDelay: p === xe.IOS ? 0 : 300,
            hasHover: !1,
            vkuiClass: "TabbarItem__tappable"
        }), y("div", {vkuiClass: "TabbarItem__in"}, y("div", {vkuiClass: "TabbarItem__icon"}, r, y("div", {vkuiClass: "TabbarItem__label"}, De(a) && a, !a && o && y(YR, {
            size: "s",
            mode: "prominent"
        }, o))), l && y(A1, {Component: "div", vkuiClass: "TabbarItem__text", weight: "2"}, l)))
    };

function ZR(e, t) {
    if (e == null) return {};
    var r = QR(e, t), n, o;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a.length; o++) n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function QR(e, t) {
    if (e == null) return {};
    var r = {}, n = Object.keys(e), o, a;
    for (a = 0; a < n.length; a++) o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}

var I1 = ur.createContext({}), JR = function (e) {
    var t = e.children, r = ZR(e, ["children"]), n = ur.useMemo(function () {
        return r
    }, [r.classPrefix, r.globalClasses]);
    return ur.createElement(I1.Provider, {value: n}, t)
}, j1 = {exports: {}};
(function (e, t) {
    (function (r, n) {
        e.exports = n()
    })(sr, function () {
        var r = function (w) {
            var d = w.id, f = w.viewBox, h = w.content;
            this.id = d, this.viewBox = f, this.content = h
        };
        r.prototype.stringify = function () {
            return this.content
        }, r.prototype.toString = function () {
            return this.stringify()
        }, r.prototype.destroy = function () {
            var w = this;
            ["id", "viewBox", "content"].forEach(function (d) {
                return delete w[d]
            })
        };
        var n = function (S) {
            var w = !!document.importNode, d = new DOMParser().parseFromString(S, "image/svg+xml").documentElement;
            return w ? document.importNode(d, !0) : d
        }, o = typeof window < "u" ? window : typeof sr < "u" ? sr : typeof self < "u" ? self : {};

        function a(S, w) {
            return w = {exports: {}}, S(w, w.exports), w.exports
        }

        var l = a(function (S, w) {
            (function (d, f) {
                S.exports = f()
            })(o, function () {
                function d(x) {
                    var _ = x && typeof x == "object";
                    return _ && Object.prototype.toString.call(x) !== "[object RegExp]" && Object.prototype.toString.call(x) !== "[object Date]"
                }

                function f(x) {
                    return Array.isArray(x) ? [] : {}
                }

                function h(x, _) {
                    var R = _ && _.clone === !0;
                    return R && d(x) ? $(f(x), x, _) : x
                }

                function C(x, _, R) {
                    var M = x.slice();
                    return _.forEach(function (j, re) {
                        typeof M[re] > "u" ? M[re] = h(j, R) : d(j) ? M[re] = $(x[re], j, R) : x.indexOf(j) === -1 && M.push(h(j, R))
                    }), M
                }

                function k(x, _, R) {
                    var M = {};
                    return d(x) && Object.keys(x).forEach(function (j) {
                        M[j] = h(x[j], R)
                    }), Object.keys(_).forEach(function (j) {
                        !d(_[j]) || !x[j] ? M[j] = h(_[j], R) : M[j] = $(x[j], _[j], R)
                    }), M
                }

                function $(x, _, R) {
                    var M = Array.isArray(_), j = R || {arrayMerge: C}, re = j.arrayMerge || C;
                    return M ? Array.isArray(x) ? re(x, _, R) : h(_, R) : k(x, _, R)
                }

                return $.all = function (_, R) {
                    if (!Array.isArray(_) || _.length < 2) throw new Error("first argument should be an array with at least two elements");
                    return _.reduce(function (M, j) {
                        return $(M, j, R)
                    })
                }, $
            })
        }), s = a(function (S, w) {
            var d = {
                svg: {name: "xmlns", uri: "http://www.w3.org/2000/svg"},
                xlink: {name: "xmlns:xlink", uri: "http://www.w3.org/1999/xlink"}
            };
            w.default = d, S.exports = w.default
        }), u = function (S) {
            return Object.keys(S).map(function (w) {
                var d = S[w].toString().replace(/"/g, "&quot;");
                return w + '="' + d + '"'
            }).join(" ")
        }, c = s.svg, v = s.xlink, g = {};
        g[c.name] = c.uri, g[v.name] = v.uri;
        var p = function (S, w) {
            S === void 0 && (S = "");
            var d = l(g, {}), f = u(d);
            return "<svg " + f + ">" + S + "</svg>"
        }, m = function (S) {
            function w() {
                S.apply(this, arguments)
            }

            S && (w.__proto__ = S), w.prototype = Object.create(S && S.prototype), w.prototype.constructor = w;
            var d = {isMounted: {}};
            return d.isMounted.get = function () {
                return !!this.node
            }, w.createFromExistingNode = function (h) {
                return new w({id: h.getAttribute("id"), viewBox: h.getAttribute("viewBox"), content: h.outerHTML})
            }, w.prototype.destroy = function () {
                this.isMounted && this.unmount(), S.prototype.destroy.call(this)
            }, w.prototype.mount = function (h) {
                if (this.isMounted) return this.node;
                var C = typeof h == "string" ? document.querySelector(h) : h, k = this.render();
                return this.node = k, C.appendChild(k), k
            }, w.prototype.render = function () {
                var h = this.stringify();
                return n(p(h)).childNodes[0]
            }, w.prototype.unmount = function () {
                this.node.parentNode.removeChild(this.node)
            }, Object.defineProperties(w.prototype, d), w
        }(r);
        return m
    })
})(j1);
var e5 = j1.exports;
const t5 = Xi(e5);
var L1 = {exports: {}};
(function (e, t) {
    (function (r, n) {
        e.exports = n()
    })(sr, function () {
        var r = typeof window < "u" ? window : typeof sr < "u" ? sr : typeof self < "u" ? self : {};

        function n(O, P) {
            return P = {exports: {}}, O(P, P.exports), P.exports
        }

        var o = n(function (O, P) {
            (function (L, N) {
                O.exports = N()
            })(r, function () {
                function L(F) {
                    var J = F && typeof F == "object";
                    return J && Object.prototype.toString.call(F) !== "[object RegExp]" && Object.prototype.toString.call(F) !== "[object Date]"
                }

                function N(F) {
                    return Array.isArray(F) ? [] : {}
                }

                function T(F, J) {
                    var oe = J && J.clone === !0;
                    return oe && L(F) ? q(N(F), F, J) : F
                }

                function z(F, J, oe) {
                    var be = F.slice();
                    return J.forEach(function (ue, pt) {
                        typeof be[pt] > "u" ? be[pt] = T(ue, oe) : L(ue) ? be[pt] = q(F[pt], ue, oe) : F.indexOf(ue) === -1 && be.push(T(ue, oe))
                    }), be
                }

                function W(F, J, oe) {
                    var be = {};
                    return L(F) && Object.keys(F).forEach(function (ue) {
                        be[ue] = T(F[ue], oe)
                    }), Object.keys(J).forEach(function (ue) {
                        !L(J[ue]) || !F[ue] ? be[ue] = T(J[ue], oe) : be[ue] = q(F[ue], J[ue], oe)
                    }), be
                }

                function q(F, J, oe) {
                    var be = Array.isArray(J), ue = oe || {arrayMerge: z}, pt = ue.arrayMerge || z;
                    return be ? Array.isArray(F) ? pt(F, J, oe) : T(J, oe) : W(F, J, oe)
                }

                return q.all = function (J, oe) {
                    if (!Array.isArray(J) || J.length < 2) throw new Error("first argument should be an array with at least two elements");
                    return J.reduce(function (be, ue) {
                        return q(be, ue, oe)
                    })
                }, q
            })
        });

        function a(O) {
            return O = O || Object.create(null), {
                on: function (L, N) {
                    (O[L] || (O[L] = [])).push(N)
                }, off: function (L, N) {
                    O[L] && O[L].splice(O[L].indexOf(N) >>> 0, 1)
                }, emit: function (L, N) {
                    (O[L] || []).map(function (T) {
                        T(N)
                    }), (O["*"] || []).map(function (T) {
                        T(L, N)
                    })
                }
            }
        }

        var l = n(function (O, P) {
            var L = {
                svg: {name: "xmlns", uri: "http://www.w3.org/2000/svg"},
                xlink: {name: "xmlns:xlink", uri: "http://www.w3.org/1999/xlink"}
            };
            P.default = L, O.exports = P.default
        }), s = function (O) {
            return Object.keys(O).map(function (P) {
                var L = O[P].toString().replace(/"/g, "&quot;");
                return P + '="' + L + '"'
            }).join(" ")
        }, u = l.svg, c = l.xlink, v = {};
        v[u.name] = u.uri, v[c.name] = c.uri;
        var g = function (O, P) {
            O === void 0 && (O = "");
            var L = o(v, P || {}), N = s(L);
            return "<svg " + N + ">" + O + "</svg>"
        }, p = l.svg, m = l.xlink, S = {
            attrs: (w = {
                style: ["position: absolute", "width: 0", "height: 0"].join("; "),
                "aria-hidden": "true"
            }, w[p.name] = p.uri, w[m.name] = m.uri, w)
        }, w, d = function (P) {
            this.config = o(S, P || {}), this.symbols = []
        };
        d.prototype.add = function (P) {
            var L = this, N = L.symbols, T = this.find(P.id);
            return T ? (N[N.indexOf(T)] = P, !1) : (N.push(P), !0)
        }, d.prototype.remove = function (P) {
            var L = this, N = L.symbols, T = this.find(P);
            return T ? (N.splice(N.indexOf(T), 1), T.destroy(), !0) : !1
        }, d.prototype.find = function (P) {
            return this.symbols.filter(function (L) {
                return L.id === P
            })[0] || null
        }, d.prototype.has = function (P) {
            return this.find(P) !== null
        }, d.prototype.stringify = function () {
            var P = this.config, L = P.attrs, N = this.symbols.map(function (T) {
                return T.stringify()
            }).join("");
            return g(N, L)
        }, d.prototype.toString = function () {
            return this.stringify()
        }, d.prototype.destroy = function () {
            this.symbols.forEach(function (P) {
                return P.destroy()
            })
        };
        var f = function (P) {
            var L = P.id, N = P.viewBox, T = P.content;
            this.id = L, this.viewBox = N, this.content = T
        };
        f.prototype.stringify = function () {
            return this.content
        }, f.prototype.toString = function () {
            return this.stringify()
        }, f.prototype.destroy = function () {
            var P = this;
            ["id", "viewBox", "content"].forEach(function (L) {
                return delete P[L]
            })
        };
        var h = function (O) {
            var P = !!document.importNode, L = new DOMParser().parseFromString(O, "image/svg+xml").documentElement;
            return P ? document.importNode(L, !0) : L
        }, C = function (O) {
            function P() {
                O.apply(this, arguments)
            }

            O && (P.__proto__ = O), P.prototype = Object.create(O && O.prototype), P.prototype.constructor = P;
            var L = {isMounted: {}};
            return L.isMounted.get = function () {
                return !!this.node
            }, P.createFromExistingNode = function (T) {
                return new P({id: T.getAttribute("id"), viewBox: T.getAttribute("viewBox"), content: T.outerHTML})
            }, P.prototype.destroy = function () {
                this.isMounted && this.unmount(), O.prototype.destroy.call(this)
            }, P.prototype.mount = function (T) {
                if (this.isMounted) return this.node;
                var z = typeof T == "string" ? document.querySelector(T) : T, W = this.render();
                return this.node = W, z.appendChild(W), W
            }, P.prototype.render = function () {
                var T = this.stringify();
                return h(g(T)).childNodes[0]
            }, P.prototype.unmount = function () {
                this.node.parentNode.removeChild(this.node)
            }, Object.defineProperties(P.prototype, L), P
        }(f), k = {
            autoConfigure: !0,
            mountTo: "body",
            syncUrlsWithBaseTag: !1,
            listenLocationChangeEvent: !0,
            locationChangeEvent: "locationChange",
            locationChangeAngularEmitter: !1,
            usagesToUpdate: "use[*|href]",
            moveGradientsOutsideSymbol: !1
        }, $ = function (O) {
            return Array.prototype.slice.call(O, 0)
        }, x = {
            isChrome: function () {
                return /chrome/i.test(navigator.userAgent)
            }, isFirefox: function () {
                return /firefox/i.test(navigator.userAgent)
            }, isIE: function () {
                return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent)
            }, isEdge: function () {
                return /edge/i.test(navigator.userAgent)
            }
        }, _ = function (O, P) {
            var L = document.createEvent("CustomEvent");
            L.initCustomEvent(O, !1, !1, P), window.dispatchEvent(L)
        }, R = function (O) {
            var P = [];
            return $(O.querySelectorAll("style")).forEach(function (L) {
                L.textContent += "", P.push(L)
            }), P
        }, M = function (O) {
            return (O || window.location.href).split("#")[0]
        }, j = function (O) {
            angular.module("ng").run(["$rootScope", function (P) {
                P.$on("$locationChangeSuccess", function (L, N, T) {
                    _(O, {oldUrl: T, newUrl: N})
                })
            }])
        }, re = "linearGradient, radialGradient, pattern, mask, clipPath", U = function (O, P) {
            return P === void 0 && (P = re), $(O.querySelectorAll("symbol")).forEach(function (L) {
                $(L.querySelectorAll(P)).forEach(function (N) {
                    L.parentNode.insertBefore(N, L)
                })
            }), O
        };

        function B(O, P) {
            var L = $(O).reduce(function (N, T) {
                if (!T.attributes) return N;
                var z = $(T.attributes), W = P ? z.filter(P) : z;
                return N.concat(W)
            }, []);
            return L
        }

        var Y = l.xlink.uri, Q = "xlink:href", ne = /[{}|\\\^\[\]`"<>]/g;

        function ce(O) {
            return O.replace(ne, function (P) {
                return "%" + P[0].charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function _e(O) {
            return O.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function Be(O, P, L) {
            return $(O).forEach(function (N) {
                var T = N.getAttribute(Q);
                if (T && T.indexOf(P) === 0) {
                    var z = T.replace(P, L);
                    N.setAttributeNS(Y, Q, z)
                }
            }), O
        }

        var ke = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke", "style"],
            A = ke.map(function (O) {
                return "[" + O + "]"
            }).join(","), V = function (O, P, L, N) {
                var T = ce(L), z = ce(N), W = O.querySelectorAll(A), q = B(W, function (F) {
                    var J = F.localName, oe = F.value;
                    return ke.indexOf(J) !== -1 && oe.indexOf("url(" + T) !== -1
                });
                q.forEach(function (F) {
                    return F.value = F.value.replace(new RegExp(_e(T), "g"), z)
                }), Be(P, T, z)
            }, K = {MOUNT: "mount", SYMBOL_MOUNT: "symbol_mount"}, ie = function (O) {
                function P(N) {
                    var T = this;
                    N === void 0 && (N = {}), O.call(this, o(k, N));
                    var z = a();
                    this._emitter = z, this.node = null;
                    var W = this, q = W.config;
                    if (q.autoConfigure && this._autoConfigure(N), q.syncUrlsWithBaseTag) {
                        var F = document.getElementsByTagName("base")[0].getAttribute("href");
                        z.on(K.MOUNT, function () {
                            return T.updateUrls("#", F)
                        })
                    }
                    var J = this._handleLocationChange.bind(this);
                    this._handleLocationChange = J, q.listenLocationChangeEvent && window.addEventListener(q.locationChangeEvent, J), q.locationChangeAngularEmitter && j(q.locationChangeEvent), z.on(K.MOUNT, function (oe) {
                        q.moveGradientsOutsideSymbol && U(oe)
                    }), z.on(K.SYMBOL_MOUNT, function (oe) {
                        q.moveGradientsOutsideSymbol && U(oe.parentNode), (x.isIE() || x.isEdge()) && R(oe)
                    })
                }

                O && (P.__proto__ = O), P.prototype = Object.create(O && O.prototype), P.prototype.constructor = P;
                var L = {isMounted: {}};
                return L.isMounted.get = function () {
                    return !!this.node
                }, P.prototype._autoConfigure = function (T) {
                    var z = this, W = z.config;
                    typeof T.syncUrlsWithBaseTag > "u" && (W.syncUrlsWithBaseTag = typeof document.getElementsByTagName("base")[0] < "u"), typeof T.locationChangeAngularEmitter > "u" && (W.locationChangeAngularEmitter = typeof window.angular < "u"), typeof T.moveGradientsOutsideSymbol > "u" && (W.moveGradientsOutsideSymbol = x.isFirefox())
                }, P.prototype._handleLocationChange = function (T) {
                    var z = T.detail, W = z.oldUrl, q = z.newUrl;
                    this.updateUrls(W, q)
                }, P.prototype.add = function (T) {
                    var z = this, W = O.prototype.add.call(this, T);
                    return this.isMounted && W && (T.mount(z.node), this._emitter.emit(K.SYMBOL_MOUNT, T.node)), W
                }, P.prototype.attach = function (T) {
                    var z = this, W = this;
                    if (W.isMounted) return W.node;
                    var q = typeof T == "string" ? document.querySelector(T) : T;
                    return W.node = q, this.symbols.forEach(function (F) {
                        F.mount(W.node), z._emitter.emit(K.SYMBOL_MOUNT, F.node)
                    }), $(q.querySelectorAll("symbol")).forEach(function (F) {
                        var J = C.createFromExistingNode(F);
                        J.node = F, W.add(J)
                    }), this._emitter.emit(K.MOUNT, q), q
                }, P.prototype.destroy = function () {
                    var T = this, z = T.config, W = T.symbols, q = T._emitter;
                    W.forEach(function (F) {
                        return F.destroy()
                    }), q.off("*"), window.removeEventListener(z.locationChangeEvent, this._handleLocationChange), this.isMounted && this.unmount()
                }, P.prototype.mount = function (T, z) {
                    T === void 0 && (T = this.config.mountTo), z === void 0 && (z = !1);
                    var W = this;
                    if (W.isMounted) return W.node;
                    var q = typeof T == "string" ? document.querySelector(T) : T, F = W.render();
                    return this.node = F, z && q.childNodes[0] ? q.insertBefore(F, q.childNodes[0]) : q.appendChild(F), this._emitter.emit(K.MOUNT, F), F
                }, P.prototype.render = function () {
                    return h(this.stringify())
                }, P.prototype.unmount = function () {
                    this.node.parentNode.removeChild(this.node)
                }, P.prototype.updateUrls = function (T, z) {
                    if (!this.isMounted) return !1;
                    var W = document.querySelectorAll(this.config.usagesToUpdate);
                    return V(this.node, W, M(T) + "#", M(z) + "#"), !0
                }, Object.defineProperties(P.prototype, L), P
            }(d);
        return ie
    })
})(L1);
var r5 = L1.exports;
const n5 = Xi(r5);
var N1 = !!(typeof window < "u" && window.document && window.document.createElement), vo;
if (N1) {
    var Jh = "__SVG_SPRITE_NODE__";
    vo = new n5({attrs: {id: Jh}});
    var _u = function () {
        var e = document.getElementById(Jh);
        e ? vo.attach(e) : vo.mount(), document.removeEventListener("DOMContentLoaded", _u)
    };
    document.querySelector("body") ? _u() : document.addEventListener("DOMContentLoaded", _u)
} else vo = null;

function o5(e) {
    vo && vo.add(e)
}

var i5 = N1 ? E.useLayoutEffect : E.useEffect;

function a5(e) {
    var t = {};
    return function (r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "warn";
        t[r] || (console[n]("[@vkontakte/icons][".concat(e, "] ").concat(r)), t[r] = !0)
    }
}

function l5(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Vl() {
    return Vl = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Vl.apply(this, arguments)
}

function s5(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {}, n = Object.keys(r);
        typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (o) {
            return Object.getOwnPropertyDescriptor(r, o).enumerable
        }))), n.forEach(function (o) {
            l5(e, o, r[o])
        })
    }
    return e
}

function u5(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
    }
    return r
}

function c5(e, t) {
    return t = t ?? {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u5(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function d5(e, t) {
    if (e == null) return {};
    var r = f5(e, t), n, o;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a.length; o++) n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function f5(e, t) {
    if (e == null) return {};
    var r = {}, n = Object.keys(e), o, a;
    for (a = 0; a < n.length; a++) o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}

var v5 = {display: "block"};

function p5(e, t) {
    for (var r = t.classPrefix, n = t.globalClasses, o = "", a = 0; a < e.length; a++) r && (o += " " + (r + e[a])), (!r || n) && (o += " " + e[a]);
    return o
}

var h5 = function (e) {
    var t = e.width, r = e.height, n = e.viewBox, o = e.id, a = e.className, l = a === void 0 ? "" : a, s = e.style,
        u = s === void 0 ? {} : s, c = e.fill, v = e.getRootRef, g = e.Component, p = g === void 0 ? "div" : g,
        m = e.role, S = e["aria-label"], w = e["aria-hidden"],
        d = d5(e, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef", "Component", "role", "aria-label", "aria-hidden"]),
        f = Math.max(t, r), h = ur.useContext(I1),
        C = p5(["Icon", "Icon--".concat(f), "Icon--w-".concat(t), "Icon--h-".concat(r), "Icon--".concat(o)], h);
    return ur.createElement(p, Vl({role: "presentation"}, d, {
        ref: v,
        className: "".concat(C, " ").concat(l),
        style: c5(s5({}, u), {width: t, height: r})
    }), ur.createElement("svg", {
        viewBox: n,
        width: t,
        height: r,
        style: v5,
        role: m,
        "aria-label": S,
        "aria-hidden": w
    }, ur.createElement("use", {xlinkHref: "#".concat(o), style: {fill: "currentColor", color: c}})))
};

function $e(e, t, r, n, o, a, l, s) {
    var u = !1;

    function c() {
        u || (o5(new t5({id: t, viewBox: r, content: n})), u = !0)
    }

    var v = l ? a5(e) : null, g = function (p) {
        if (i5(c, []), l) {
            var m = "";
            v("Иконка устарела" + m)
        }
        return ur.createElement(h5, Vl({}, p, {
            viewBox: r,
            id: t,
            width: isNaN(p.width) ? o : +p.width,
            height: isNaN(p.height) ? a : +p.height
        }))
    };
    return g.mountIcon = c, g.displayName = e, g
}

const m5 = $e("Icon12Circle", "circle_12", "0 0 12 12", '<symbol fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" id="circle_12"><path d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="currentColor" /></symbol>', 12, 12, !1),
    g5 = $e("Icon12OnlineMobile", "online_mobile_12", "0 0 8 12", '<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98Zm.007 3H2.004a.502.502 0 0 0-.503.502v4.995c0 .278.225.503.503.503h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>', 8, 12, !1),
    y5 = $e("Icon16Clear", "clear_16", "0 0 16 16", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="clear_16"><path fill-rule="evenodd" d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0ZM4.563 4.564a.9.9 0 0 0 0 1.272L6.727 8l-2.164 2.164a.9.9 0 1 0 1.273 1.272L8 9.273l2.164 2.163a.9.9 0 0 0 1.272-1.272L9.273 8l2.163-2.164a.9.9 0 1 0-1.272-1.272L8 6.727 5.836 4.564a.9.9 0 0 0-1.273 0Z" clip-rule="evenodd" /></symbol>', 16, 16, !1),
    w5 = $e("Icon16Done", "done_16", "0 0 16 16", '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="done_16"><path d="M13.743 3.756a.872.872 0 0 1 0 1.237l-7.317 7.25a.88.88 0 0 1-1.242 0L2.257 9.366a.872.872 0 0 1 0-1.237.88.88 0 0 1 1.242 0l2.306 2.261L12.5 3.756a.88.88 0 0 1 1.242 0Z" fill="currentColor" /></symbol>', 16, 16, !1),
    S5 = $e("Icon16Spinner", "spinner_16", "0 0 16 16", '<symbol fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" id="spinner_16"><path clip-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" fill="currentColor" fill-rule="evenodd" /></symbol>', 16, 16, !1),
    D1 = $e("Icon201CircleFillGold", "1_circle_fill_gold_20", "0 0 20 20", '<symbol viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="1_circle_fill_gold_20"><rect width="20" height="20" rx="10" fill="url(#1_circle_fill_gold_20_a)" /><path d="M9.438 15h1.764V5.136H9.445L6.868 6.947v1.661l2.454-1.736h.116V15Z" fill="#fff" /><defs><radialGradient id="1_circle_fill_gold_20_a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 5 5) scale(19.9542)"><stop stop-color="#FFD54F" /><stop offset="1" stop-color="#FFC105" /></radialGradient></defs></symbol>', 20, 20, !1),
    F1 = $e("Icon202CircleFillSilver", "2_circle_fill_silver_20", "0 0 20 20", '<symbol fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="2_circle_fill_silver_20"><radialGradient id="2_circle_fill_silver_20_a" cx="0" cy="0" gradientTransform="matrix(0 19.6755 -19.6755 0 10 .324)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#b0bec5" /><stop offset="1" stop-color="#90a4ae" /></radialGradient><path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z" fill="url(#2_circle_fill_silver_20_a)" /><path d="M6.527 8.055h1.655c0-1.04.683-1.75 1.756-1.75 1.033 0 1.648.69 1.648 1.586 0 .752-.3 1.223-1.545 2.481l-3.418 3.439V15h6.85v-1.463H9.016v-.116l2.119-2.085c1.695-1.661 2.194-2.461 2.194-3.61 0-1.64-1.333-2.836-3.295-2.836-2.057 0-3.507 1.298-3.507 3.165z" fill="#fff" /></symbol>', 20, 20, !1),
    B1 = $e("Icon203CircleFillBronze", "3_circle_fill_bronze_20", "0 0 20 20", '<symbol fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="3_circle_fill_bronze_20"><radialGradient id="3_circle_fill_bronze_20_a" cx="0" cy="0" gradientTransform="matrix(0 18.9947 -18.9947 0 10 .623)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#ffa726" /><stop offset="1" stop-color="#e68000" /></radialGradient><path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z" fill="url(#3_circle_fill_bronze_20_a)" /><path d="M8.722 10.598h1.237c1.217 0 1.955.608 1.955 1.6 0 .956-.8 1.599-1.935 1.599-1.141 0-1.914-.588-1.989-1.504H6.302c.082 1.784 1.552 2.953 3.698 2.953 2.133 0 3.719-1.23 3.719-2.926 0-1.346-.841-2.214-2.18-2.42v-.116c1.045-.28 1.79-1.066 1.797-2.256.007-1.415-1.176-2.638-3.274-2.638-2.14 0-3.48 1.21-3.569 2.94h1.654c.076-.985.746-1.532 1.819-1.532 1.046 0 1.668.642 1.668 1.456 0 .895-.697 1.524-1.71 1.524H8.723z" fill="#fff" /></symbol>', 20, 20, !1),
    C5 = $e("Icon20Cancel", "cancel_20", "0 0 20 20", '<symbol fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="cancel_20"><path clip-rule="evenodd" d="M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06z" fill="currentColor" fill-rule="evenodd" /></symbol>', 20, 20, !1),
    b5 = $e("Icon24AdvertisingOutline", "advertising_outline_24", "0 0 24 24", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="advertising_outline_24"><path fill-rule="evenodd" d="M18.567 6.914a.819.819 0 0 0-.573.09l-.025.015-3.757 1.875H7.6c-.77 0-1.453.285-1.937.729-.442.404-.763 1.174-.763 1.867 0 .692.321 1.462.763 1.867.248.227.548.412.885.54.321.12.676.188 1.052.188h6.612l3.757 1.876.025.015a.81.81 0 0 0 .406.106c.218 0 .4-.08.523-.193a.504.504 0 0 0 .177-.373V7.463a.478.478 0 0 0-.09-.274.702.702 0 0 0-.443-.275Zm-1.452-1.478a2.622 2.622 0 0 1 1.811-.283 2.5 2.5 0 0 1 1.563 1.011c.265.381.411.832.411 1.3v8.052c0 .68-.302 1.279-.76 1.698a2.573 2.573 0 0 1-1.74.665c-.45 0-.894-.114-1.285-.335l-3.327-1.662H7.6a4.91 4.91 0 0 1-.976-.098 4.597 4.597 0 0 1-2.178-1.103C3.585 13.893 3.1 12.617 3.1 11.49c0-1.128.485-2.403 1.346-3.192A4.663 4.663 0 0 1 7.6 7.097h6.188l3.327-1.661Z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M14.9 7.995v6.989h-1.8V7.995h1.8Z" clip-rule="evenodd" /><path d="m8.776 17.618-.307-1.735H7.6c-.334 0-.66-.034-.976-.1l.38 2.147c.116.664.505 1.21 1.021 1.554a2.5 2.5 0 0 0 1.824.377 2.497 2.497 0 0 0 1.583-.977c.368-.5.546-1.145.429-1.81l-.21-1.192h-1.83l.266 1.505a.562.562 0 0 1-.107.434.697.697 0 0 1-.445.27.698.698 0 0 1-.51-.102.563.563 0 0 1-.25-.371Z" /></symbol>', 24, 24, !1),
    Nn = $e("Icon24Cancel", "cancel_24", "0 0 24 24", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727 7.536 6.264Z" /></symbol>', 24, 24, !1),
    z1 = $e("Icon24Chevron", "chevron_24", "0 0 16 24", '<symbol viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" fill="currentColor" /></g></symbol>', 16, 24, !1),
    E5 = $e("Icon24ChevronLeft", "chevron_left_24", "0 0 24 24", '<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chevron_left_24"><path d="M15.884 18.116a1.25 1.25 0 0 1-1.768 1.768l-7-7a1.25 1.25 0 0 1 0-1.768l7-7a1.25 1.25 0 0 1 1.768 1.768L9.768 12z" fill="currentColor" /></symbol>', 24, 24, !1),
    k5 = $e("Icon24DismissDark", "dismiss_dark_24", "0 0 24 24", '<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dismiss_dark_24"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#000" opacity=".24" /><path d="M16.736 7.264a.9.9 0 0 1 0 1.272L13.273 12l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L12 13.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L12 10.727l3.464-3.463a.9.9 0 0 1 1.272 0z" fill="#fff" /></symbol>', 24, 24, !1),
    x5 = $e("Icon24DismissSubstract", "dismiss_substract_24", "0 0 24 24", '<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dismiss_substract_24"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4.736 7.264a.9.9 0 0 0-1.272 0L12 10.727 8.536 7.264l-.092-.08a.9.9 0 0 0-1.18.08l-.08.092a.9.9 0 0 0 .08 1.18L10.727 12l-3.463 3.464a.9.9 0 1 0 1.272 1.272L12 13.273l3.464 3.463.092.08a.9.9 0 0 0 1.18-.08l.08-.092a.9.9 0 0 0-.08-1.18L13.273 12l3.463-3.464a.9.9 0 0 0 0-1.272z" fill="currentColor" /></symbol>', 24, 24, !1),
    $5 = $e("Icon24Spinner", "spinner_24", "0 0 24 24", '<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="spinner_24"><path clip-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" fill="currentColor" fill-rule="evenodd" /></symbol>', 24, 24, !1),
    _5 = $e("Icon24ThumbDown", "thumb_down_24", "0 0 24 24", '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumb_down_24"><path fill="currentColor" fill-rule="evenodd" d="M6 14c0 1.5-.5 2-2 2H2V4h2c1.5 0 2 .5 2 2v8zm2 .636c1.034.52 1.867 1.31 2.5 2.364 1.5 2.5 1.5 5 2.5 5.5s2-.5 2-2.5-1-3.5-.5-4 3 0 5 0 2.5-.5 2.5-1.5-.667-1.5-2-1.5c1 0 1.5-.5 1.5-1.5s-.667-1.5-2-1.5c1 0 1.5-.5 1.5-1.5S20.333 7 19 7c1 0 1.5-.5 1.5-1.5S20 4 18 4c-5.145 0-5.477.875-10 .988v9.648z" /></symbol>', 24, 24, !0),
    T5 = $e("Icon24UserAddOutline", "user_add_outline_24", "0 0 24 24", '<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="user_add_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.85 7.95A2.849 2.849 0 0 0 16 5.1a2.849 2.849 0 0 0-2.85 2.85A2.849 2.849 0 0 0 16 10.8a2.849 2.849 0 0 0 2.85-2.85Zm1.8 0A4.649 4.649 0 0 1 16 12.6a4.649 4.649 0 0 1-4.65-4.65A4.649 4.649 0 0 1 16 3.3a4.649 4.649 0 0 1 4.65 4.65ZM9.9 18.429c0 .768-.09.671.335.671h11.53c.426 0 .335.097.335-.671 0-1.893-2.778-3.029-6.1-3.029-3.322 0-6.1 1.136-6.1 3.029Zm-4-8.329h2.7a.9.9 0 1 1 0 1.8H5.9v2.7a.9.9 0 1 1-1.8 0v-2.7H1.4a.9.9 0 1 1 0-1.8h2.7V7.4a.9.9 0 1 1 1.8 0v2.7Zm2.2 8.329c0-3.327 3.673-4.829 7.9-4.829s7.9 1.502 7.9 4.829c0 1.735-.686 2.471-2.135 2.471h-11.53c-1.45 0-2.135-.736-2.135-2.471Z" fill="currentColor" fill-rule="nonzero" /></g></symbol>', 24, 24, !1),
    O5 = $e("Icon28HourglassOutline", "hourglass_outline_28", "0 0 28 28", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="hourglass_outline_28"><path d="M11.75 17.74c1.455-.986 3.045-.986 4.5 0 1.306.884 1.75 2.047 1.75 3.463 0 .44-.358.798-.798.798h-6.404a.798.798 0 0 1-.798-.798c0-1.416.444-2.579 1.75-3.463ZM10.886 2c-.355 0-.634 0-.884.036a3.5 3.5 0 0 0-2.966 2.966C7 5.252 7 5.532 7 5.886v.116c0 .487 0 .793.025 1.087a7 7 0 0 0 2.318 4.637c.221.197.466.38.856.673l.359.27-1.953 2.343A11.24 11.24 0 0 0 6 22.207 3.793 3.793 0 0 0 9.793 26h8.414A3.793 3.793 0 0 0 22 22.207c0-2.63-.922-5.175-2.605-7.195l-1.953-2.344.36-.27c.39-.291.634-.475.855-.672a7 7 0 0 0 2.318-4.637C21 6.795 21 6.49 21 6.002v-.116c0-.355 0-.634-.036-.884a3.5 3.5 0 0 0-2.966-2.966C17.748 2 17.468 2 17.114 2h-6.228Zm-.6 2.015c.089-.012.212-.015.668-.015h6.091c.457 0 .58.003.668.015a1.5 1.5 0 0 1 1.272 1.272c.012.088.015.21.015.668 0 .55 0 .766-.018.966a5 5 0 0 1-1.656 3.312c-.15.134-.323.264-.762.594L15.4 11.7a1 1 0 0 0-.168 1.44l2.626 3.152A9.24 9.24 0 0 1 20 22.207c0 .99-.803 1.793-1.793 1.793H9.793C8.803 24 8 23.197 8 22.207a9.24 9.24 0 0 1 2.142-5.915l2.626-3.152a1 1 0 0 0-.168-1.44l-1.164-.873c-.44-.33-.612-.46-.762-.594a5 5 0 0 1-1.656-3.312C9 6.721 9 6.504 9 5.955c0-.457.003-.58.015-.668a1.5 1.5 0 0 1 1.271-1.272Z" clip-rule="evenodd" /></symbol>', 28, 28, !1),
    P5 = $e("Icon28PollSquareOutline", "poll_square_outline_28", "0 0 28 28", '<symbol viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" id="poll_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.692 5c-2.137 0-2.897.147-3.68.565a3.453 3.453 0 0 0-1.447 1.448C5.147 7.795 5 8.555 5 10.692v6.616c0 2.137.147 2.897.565 3.68.337.629.818 1.11 1.448 1.447.782.418 1.542.565 3.679.565h6.616c2.137 0 2.897-.147 3.68-.565a3.453 3.453 0 0 0 1.447-1.448c.418-.782.565-1.542.565-3.679v-6.616c0-2.137-.147-2.897-.565-3.68a3.453 3.453 0 0 0-1.448-1.447C20.205 5.147 19.445 5 17.308 5h-6.616Zm0-2h6.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623v6.616c0 2.675-.278 3.645-.801 4.623a5.452 5.452 0 0 1-2.268 2.268c-.978.523-1.948.801-4.623.801h-6.616c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 0 1-2.268-2.268C3.278 20.953 3 19.983 3 17.308v-6.616c0-2.675.278-3.645.801-4.623A5.452 5.452 0 0 1 6.07 3.801C7.047 3.278 8.017 3 10.692 3ZM11 19a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0v6Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v10Zm4 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0v4Z" fill="currentColor" fill-rule="nonzero" /></g></symbol>', 28, 28, !1),
    M5 = $e("Icon28UserSquareOutline", "user_square_outline_28", "0 0 28 28", '<symbol fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" id="user_square_outline_28"><mask id="user_square_outline_28_a" height="18" maskUnits="userSpaceOnUse" width="18" x="5" y="5"><path d="M9.852 5.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822v8.296c.028 1.479.18 2.141.545 2.823.342.64.839 1.137 1.48 1.48.68.364 1.343.516 2.822.544h8.296c1.479-.028 2.141-.18 2.823-.545a3.544 3.544 0 0 0 1.48-1.48c.364-.68.516-1.343.544-2.822V9.852c-.028-1.479-.18-2.141-.545-2.823a3.544 3.544 0 0 0-1.48-1.48c-.68-.364-1.343-.516-2.822-.544z" fill="currentColor" /></mask><path d="M17.926 3.002c1.958.02 2.954.231 3.988.784a5.543 5.543 0 0 1 2.3 2.3c.553 1.034.764 2.03.784 3.988v7.852c-.02 1.958-.231 2.954-.784 3.988a5.543 5.543 0 0 1-2.3 2.3c-1.034.553-2.03.764-3.988.784h-7.852c-1.958-.02-2.954-.231-3.988-.784a5.543 5.543 0 0 1-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988v-7.852c.02-1.958.231-2.954.784-3.988a5.543 5.543 0 0 1 2.3-2.3c1.034-.553 2.03-.764 3.988-.784zM9.852 5.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822v8.296c.028 1.479.18 2.141.545 2.823.342.64.839 1.137 1.48 1.48.68.364 1.343.516 2.822.544h8.296c1.479-.028 2.141-.18 2.823-.545a3.544 3.544 0 0 0 1.48-1.48c.364-.68.516-1.343.544-2.822V9.852c-.028-1.479-.18-2.141-.545-2.823a3.544 3.544 0 0 0-1.48-1.48c-.68-.364-1.343-.516-2.822-.544z" fill="currentColor" /><g mask="url(#user_square_outline_28_a)"><circle cx="14" cy="31.5" r="12" stroke="currentColor" stroke-width="2" /><path d="M14 7.5a4.749 4.749 0 0 1 4.75 4.75c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75A4.749 4.749 0 0 1 14 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z" fill="currentColor" /></g><g fill="currentColor"><path d="M14 7.5a4.749 4.749 0 0 1 4.75 4.75c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75A4.749 4.749 0 0 1 14 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z" /><path clip-rule="evenodd" d="M21.914 3.786c-1.034-.553-2.03-.764-3.988-.784h-7.852c-1.958.02-2.954.231-3.988.784a5.543 5.543 0 0 0-2.3 2.3c-.553 1.034-.764 2.03-.784 3.988v7.852c.02 1.958.231 2.954.784 3.988a5.543 5.543 0 0 0 2.3 2.3c1.034.553 2.03.764 3.988.784h7.852c1.958-.02 2.954-.231 3.988-.784a5.543 5.543 0 0 0 2.3-2.3c.553-1.034.764-2.03.784-3.988v-7.852c-.02-1.958-.231-2.954-.784-3.988a5.543 5.543 0 0 0-2.3-2.3zM7.029 5.55c.682-.365 1.344-.517 2.823-.545h8.296c1.479.028 2.141.18 2.823.545.64.342 1.137.839 1.48 1.48.364.68.516 1.343.544 2.822v8.296c-.028 1.479-.18 2.141-.545 2.823-.08.15-.17.293-.267.427C19.95 19.586 17.101 18.5 14 18.5s-5.949 1.086-8.183 2.898a3.72 3.72 0 0 1-.267-.427c-.365-.682-.517-1.344-.545-2.823V9.852c.028-1.479.18-2.141.545-2.823.342-.64.839-1.137 1.48-1.48zM14 7.5a4.749 4.749 0 0 1 4.75 4.75c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75A4.749 4.749 0 0 1 14 7.5zM9.852 22.995h8.296c1.169-.022 1.828-.122 2.39-.343C18.71 21.3 16.447 20.5 14 20.5s-4.71.8-6.537 2.152c.561.221 1.22.32 2.39.343zM11.25 12.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75S15.52 15 14 15s-2.75-1.23-2.75-2.75z" fill-rule="evenodd" /></g></symbol>', 28, 28, !1),
    R5 = $e("Icon32Spinner", "spinner_32", "0 0 32 32", '<symbol viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="spinner_32"><path d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" fill="currentColor" /></symbol>', 32, 32, !1),
    A5 = $e("Icon44Spinner", "spinner_44", "0 0 44 44", '<symbol viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" id="spinner_44"><path d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" fill="currentColor" /></symbol>', 44, 44, !1);
var I5 = ["alignY", "alignX", "closing", "hasMask", "fixed", "children", "onClick"], j5 = function (t) {
    var r = t.alignY, n = r === void 0 ? "center" : r, o = t.alignX, a = o === void 0 ? "center" : o, l = t.closing,
        s = l === void 0 ? !1 : l, u = t.hasMask, c = u === void 0 ? !0 : u, v = t.fixed, g = v === void 0 ? !0 : v,
        p = t.children, m = t.onClick, S = G(t, I5), w = we(), d = E.useState(!c), f = te(d, 2), h = f[0], C = f[1],
        k = E.useRef(null), $ = function (j) {
            (!j || j.animationName === "vkui-animation-full-fade-in") && C(!0)
        }, x = sn($, w === ye ? 300 : 200);
    E.useEffect(function () {
        !h && x.set()
    }, [x, h]);
    var _ = kt(), R = _.window;
    return lr(R, "touchmove", function (M) {
        return M.preventDefault()
    }, {passive: !1}), y("div", D({}, S, {
        vkuiClass: X("PopoutWrapper", "PopoutWrapper--v-".concat(n), "PopoutWrapper--h-".concat(a), s && "PopoutWrapper--closing", h && "PopoutWrapper--opened", g && "PopoutWrapper--fixed", c && "PopoutWrapper--masked"),
        onAnimationEnd: h ? void 0 : $,
        ref: k
    }), y("div", {vkuiClass: "PopoutWrapper__container"}, y("div", {
        vkuiClass: "PopoutWrapper__overlay",
        onClick: m
    }), y("div", {vkuiClass: "PopoutWrapper__content"}, p)))
}, L5 = ["children", "weight", "Component"], _r = function (t) {
    var r = t.children, n = t.weight, o = t.Component, a = o === void 0 ? "h5" : o, l = G(t, L5), s = Ir(), u = s.sizeY;
    return y(a, D({}, l, {vkuiClass: X("Subhead", "Subhead--sizeY-".concat(u), n && "Subhead--w-".concat(n))}), r)
}, N5 = ["size", "aria-label"], Vo = E.memo(function (e) {
    var t = e.size, r = t === void 0 ? "regular" : t, n = e["aria-label"], o = n === void 0 ? "Загружается..." : n,
        a = G(e, N5), l = {small: S5, regular: $5, medium: R5, large: A5}[r];
    return y("span", D({role: "status", "aria-label": o}, a, {vkuiClass: "Spinner"}), y(l, {
        "aria-hidden": "true",
        vkuiClass: "Spinner__self"
    }))
});
Vo.displayName = "Spinner";
var D5 = ["size", "sizeY", "platform"],
    F5 = ["size", "mode", "appearance", "stretched", "align", "children", "before", "after", "getRootRef", "sizeY", "Component", "loading", "onClick", "stopPropagation"],
    B5 = function (t) {
        var r = t.size, n = t.sizeY, o = t.platform, a = G(t, D5), l = n === Xe.COMPACT;
        switch (r) {
            case"l":
                return l ? y(un, D({weight: "2"}, a)) : o === Gt ? y(Rr, D({weight: "2"}, a)) : y(Ln, D({
                    level: "3",
                    weight: "2"
                }, a));
            case"m":
                return l ? y(_r, D({weight: o === Ie ? "3" : "2"}, a)) : y(un, D({weight: "2"}, a));
            case"s":
            default:
                return o === ye ? y(_r, D({weight: "2"}, a)) : o === Ie ? y(Ct, a) : l ? y(Ct, D({weight: "2"}, a)) : y(_r, D({weight: "2"}, a))
        }
    };

function z5(e, t) {
    var r = e, n = t;
    if (e === void 0) switch (t) {
        case"tertiary":
        case"secondary":
        case"primary":
        case"outline":
            r = "accent";
            break;
        case"commerce":
            n = "primary", r = "positive";
            break;
        case"destructive":
            n = "primary", r = "negative";
            break;
        case"overlay_primary":
            n = "primary", r = "overlay";
            break;
        case"overlay_secondary":
            n = "secondary", r = "overlay";
            break;
        case"overlay_outline":
            n = "outline", r = "overlay";
            break
    }
    return {resolvedAppearance: r, resolvedMode: n}
}

var H5 = function (t) {
    var r = t.size, n = r === void 0 ? "s" : r, o = t.mode, a = o === void 0 ? "primary" : o, l = t.appearance,
        s = t.stretched, u = s === void 0 ? !1 : s, c = t.align, v = c === void 0 ? "center" : c, g = t.children,
        p = t.before, m = t.after, S = t.getRootRef, w = t.sizeY, d = t.Component, f = d === void 0 ? "button" : d,
        h = t.loading, C = t.onClick, k = t.stopPropagation, $ = k === void 0 ? !0 : k, x = G(t, F5), _ = we(),
        R = !!(p || m), M = !g && !!m != !!p, j = z5(l, a), re = j.resolvedMode, U = j.resolvedAppearance,
        B = E.useContext(Yt).hasNewTokens;
    return y(er, D({
        hoverMode: B ? "Button--hover" : "background",
        activeMode: B ? "Button--active" : "opacity"
    }, x, {
        Component: x.href ? "a" : f,
        onClick: h ? void 0 : C,
        focusVisibleMode: "outside",
        stopPropagation: $,
        vkuiClass: X("Button", "Button--sz-".concat(n), "Button--lvl-".concat(re), "Button--clr-".concat(U), "Button--aln-".concat(v), "Button--sizeY-".concat(w), u && "Button--stretched", R && "Button--with-icon", M && "Button--singleIcon", h && "Button--loading"),
        getRootRef: S
    }), h && y(Vo, {
        size: "small",
        vkuiClass: "Button__spinner"
    }), y("span", {vkuiClass: "Button__in"}, p && y("span", {
        vkuiClass: "Button__before",
        role: "presentation"
    }, p), g && y(B5, {
        size: n,
        sizeY: w,
        platform: _,
        vkuiClass: "Button__content",
        Component: "span"
    }, g), m && y("span", {vkuiClass: "Button__after", role: "presentation"}, m)))
}, yt = At(H5, {sizeY: !0});
yt.displayName = "Button";
var V5 = ["aria-label"], W5 = function (t) {
        var r = t["aria-label"], n = r === void 0 ? "Закрыть" : r, o = G(t, V5);
        return y(er, D({vkuiClass: "ModalDismissButton"}, o, {
            "aria-label": n,
            activeMode: "ModalDismissButton--active",
            hoverMode: "ModalDismissButton--hover"
        }), y(C5, null))
    }, U5 = ["Component", "onClose", "restoreFocus", "timeout", "getRootRef", "children"], K5 = dR.join(),
    H1 = function (t) {
        var r = t.Component, n = r === void 0 ? "div" : r, o = t.onClose, a = t.restoreFocus, l = a === void 0 ? !0 : a,
            s = t.timeout, u = s === void 0 ? 0 : s, c = t.getRootRef, v = t.children, g = G(t, U5), p = sa(c),
            m = kt(), S = m.document, w = m.window, d = E.useState(null), f = te(d, 2), h = f[0], C = f[1],
            k = E.useState(null), $ = te(k, 2), x = $[0], _ = $[1], R = E.useContext(hs), M = R.keyboardInput,
            j = sn(function () {
                var B;
                M && !((B = p.current) !== null && B !== void 0 && B.contains(S.activeElement)) && h !== null && h !== void 0 && h.length && h[0].focus()
            }, u);
        fe(function () {
            j.set()
        }, []), fe(function () {
            if (p.current) {
                var B = [];
                Array.prototype.forEach.call(p.current.querySelectorAll(K5), function (Y) {
                    var Q = w.getComputedStyle(Y), ne = Q.display, ce = Q.visibility;
                    ne !== "none" && ce !== "hidden" && B.push(Y)
                }), B.length === 0 && B.push(p.current), C(B)
            }
        }, [v]);
        var re = sn(function () {
            x && x.focus()
        }, u);
        fe(function () {
            if (l && S.activeElement) return _(S.activeElement), function () {
                re.set()
            }
        }, [l]);
        var U = function (Y) {
            if (Hl(Y) === tt.TAB && h !== null && h !== void 0 && h.length) {
                var Q = h.length - 1, ne = h.findIndex(function (Be) {
                    return Be === Y.target
                }), ce = ne === -1 || ne === Q && !Y.shiftKey;
                if (ce || ne === 0 && Y.shiftKey) {
                    Y.preventDefault();
                    var _e = h[ce ? 0 : Q];
                    return _e !== S.activeElement && _e.focus(), !1
                }
            }
            return o && Hl(Y) === tt.ESCAPE && o(), !0
        };
        return lr(S, "keydown", U, {capture: !0}), y(n, D({tabIndex: -1, ref: p}, g), v)
    }, G5 = function (t) {
        return Mr(t) === "object" && t !== null && t.hasOwnProperty("current")
    }, Y5 = function (t) {
        return y("svg", D({
            vkuiClass: "Icon",
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), y("path", {
            d: "M9 24L19 34L39 14",
            stroke: "currentColor",
            strokeWidth: "3.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
    }, X5 = function (t) {
        return y("svg", D({
            vkuiClass: "Icon",
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), y("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-10.08-4.33a1.125 1.125 0 0 0-1.59-1.59L24 22.409l-4.33-4.33a1.125 1.125 0 0 0-1.59 0l-.101.116a1.125 1.125 0 0 0 .1 1.476L22.41 24l-4.33 4.33a1.125 1.125 0 0 0 1.591 1.59L24 25.591l4.33 4.33c.439.439 1.151.439 1.59 0l.101-.116a1.125 1.125 0 0 0-.1-1.476L25.59 24l4.33-4.33Z",
            fill: "currentColor"
        }))
    }, q5 = ["style", "className", "state", "size", "aria-label", "onClick"], Z5 = function (t) {
        var r = t.style, n = t.className, o = t.state, a = o === void 0 ? "loading" : o, l = t.size,
            s = l === void 0 ? "large" : l, u = t["aria-label"], c = u === void 0 ? "Пожалуйста, подождите..." : u,
            v = t.onClick, g = G(t, q5), p = a === "done" || a === "error", m = {
                loading: function () {
                    return null
                }, cancelable: Nn, done: Y5, error: X5
            }[a];
        return m1(), y(j5, {
            hasMask: !1,
            vkuiClass: X("ScreenSpinner", p && "ScreenSpinner--hideSpinner", "ScreenSpinner--state-".concat(a)),
            className: n,
            style: r
        }, y("div", {vkuiClass: "ScreenSpinner__container", onClick: v}, y(Vo, D({
            vkuiClass: "ScreenSpinner__spinner",
            size: s,
            "aria-label": c
        }, g)), y("div", {vkuiClass: "ScreenSpinner__icon"}, y(m, {"aria-hidden": !0}))))
    }, Q5 = ["Component", "getRootRef", "weight", "children"], J5 = function (t) {
        var r = t.Component, n = r === void 0 ? "span" : r, o = t.getRootRef, a = t.weight, l = t.children, s = G(t, Q5);
        return y(n, D({}, s, {ref: o, vkuiClass: X("Paragraph", a && "Paragraph--w-".concat(a))}), l)
    },
    eA = ["children", "layout", "action", "before", "after", "viewWidth", "duration", "onActionClick", "onClose", "mode"],
    V1 = function (t) {
        var r = t.children, n = t.layout, o = n === void 0 ? "horizontal" : n, a = t.action, l = t.before, s = t.after,
            u = t.viewWidth, c = t.duration, v = c === void 0 ? 4e3 : c, g = t.onActionClick, p = t.onClose, m = t.mode,
            S = m === void 0 ? "default" : m, w = G(t, eA), d = we(), f = $1(), h = f.waitTransitionFinish,
            C = E.useState(!1), k = te(C, 2), $ = k[0], x = k[1], _ = E.useState(!1), R = te(_, 2), M = R[0], j = R[1],
            re = E.useRef(0), U = E.useRef(0), B = E.useRef(null), Y = E.useRef(null), Q = E.useRef(null),
            ne = u >= $t.SMALL_TABLET, ce = d === Gt || d === Ie ? 400 : 320, _e = function () {
                x(!0), h(Y.current, function () {
                    p()
                }, ce)
            }, Be = function (L) {
                _e(), a && typeof g == "function" && g(L)
            }, ke = sn(_e, v), A = function (L) {
                Q.current !== null && cancelAnimationFrame(Q.current), Q.current = requestAnimationFrame(function () {
                    B.current && (B.current.style.transform = "translate3d(".concat(L, "%, 0, 0)"))
                })
            }, V = ke.clear, K = function (L) {
                var N, T, z = L.shiftX, W = L.originalEvent;
                W.preventDefault(), M || j(!0), re.current = z / ((N = (T = B.current) === null || T === void 0 ? void 0 : T.offsetWidth) !== null && N !== void 0 ? N : 0) * 100, U.current = qc(re.current, 72, 1.2, d === Gt || d === Ie), A(U.current)
            }, ie = function (L) {
                var N;
                if (M) {
                    var T = U.current, z = T / L.duration * 240 * .6;
                    T = T + z, ne && T <= -50 ? (ke.clear(), h(B.current, function () {
                        p()
                    }, ce), A(-120)) : !ne && T >= 50 ? (ke.clear(), h(B.current, function () {
                        p()
                    }, ce), A(120)) : N = function () {
                        ke.set(), A(0)
                    }
                } else ke.set();
                j(!1), N && requestAnimationFrame(N)
            };
        E.useEffect(function () {
            return ke.set()
        }, [ke]);
        var O = s || ne ? "vertical" : o;
        return y(E1, null, y("div", D({}, w, {vkuiClass: X("Snackbar", d === ye && "Snackbar--ios", "Snackbar--l-".concat(O), "Snackbar--".concat(S), $ && "Snackbar--closing", M && "Snackbar--touched", ne && "Snackbar--desktop")}), y(ua, {
            vkuiClass: "Snackbar__in",
            getRootRef: Y,
            onStart: V,
            onMoveX: K,
            onEnd: ie
        }, y("div", {
            vkuiClass: "Snackbar__body",
            ref: B
        }, l && y("div", {vkuiClass: "Snackbar__before"}, l), y("div", {vkuiClass: "Snackbar__content"}, y(J5, {vkuiClass: "Snackbar__content-text"}, r), a && y(yt, {
            align: "left",
            hasHover: !1,
            mode: "tertiary",
            appearance: S === "dark" ? "overlay" : "accent",
            size: "s",
            vkuiClass: "Snackbar__action",
            onClick: Be
        }, a)), s && y("div", {vkuiClass: "Snackbar__after"}, s)))))
    };
V1.displayName = "Snackbar";
var e0 = At(V1, {viewWidth: !0});

function He(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Zc(e, t) {
    return Zc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, n) {
        return r.__proto__ = n, r
    }, Zc(e, t)
}

function W1(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {writable: !1}), t && Zc(e, t)
}

function Wl(e) {
    return Wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, Wl(e)
}

function U1() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
        }))
    } catch {
    }
    return (U1 = function () {
        return !!e
    })()
}

function tA(e, t) {
    if (t && (Mr(t) == "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return He(e)
}

function K1(e) {
    var t = U1();
    return function () {
        var r, n = Wl(e);
        if (t) {
            var o = Wl(this).constructor;
            r = Reflect.construct(n, arguments, o)
        } else r = n.apply(this, arguments);
        return tA(this, r)
    }
}

function rA(e, t) {
    e && (e.style.transform = t, e.style.webkitTransform = t)
}

function G1(e) {
    function t(r) {
        var n = E.useContext(S1), o = E.useContext(Yt), a = o.platform;
        return y(e, D({}, r, {platform: n.platform || a}))
    }

    return t
}

function Y1(e, t, r) {
    function n(o) {
        var a = E.useContext(t);
        return y(e, D({}, o, Pe({}, r, a)))
    }

    return n
}

var et;
(function (e) {
    e.PAGE = "page", e.CARD = "card"
})(et || (et = {}));
var nA = 75;

function oA(e) {
    return E.Children.toArray(e)
}

function iA(e, t) {
    if (t.type === "setActive" && t.id !== e.activeModal) {
        var r = t.id, n = e.exitingModal || e.activeModal, o = e.history ? Dl(e.history) : [],
            a = !!(r && o.includes(r));
        return r === null ? o = [] : a ? o = o.splice(0, o.indexOf(r) + 1) : o.push(r), {
            activeModal: r,
            enteringModal: null,
            exitingModal: n,
            history: o,
            isBack: a
        }
    }
    return t.type === "entered" && t.id === e.enteringModal ? me(me({}, e), {}, {enteringModal: null}) : t.type === "exited" && t.id === e.exitingModal ? me(me({}, e), {}, {exitingModal: null}) : t.type === "inited" && t.id === e.activeModal ? me(me({}, e), {}, {enteringModal: t.id}) : e
}

function aA(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ve,
        n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ve,
        o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : ve,
        a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ve,
        l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : ve, s = E.useRef({}).current;
    oA(t).forEach(function ($) {
        var x = $.props, _ = ar(x), R = _ !== void 0 && s[_] || {id: _ ?? null};
        R.onOpen = $.props.onOpen, R.onOpened = $.props.onOpened, R.onClose = $.props.onClose, R.onClosed = $.props.onClosed, R.dynamicContentHeight = !!x.dynamicContentHeight, typeof x.settlingHeight == "number" && (R.settlingHeight = x.settlingHeight), R.id !== null && (s[R.id] = R)
    });
    var u = e && !s[e], c = u ? null : e, v = E.useReducer(iA, {
        activeModal: c,
        enteringModal: null,
        exitingModal: null,
        history: c ? [c] : [],
        isBack: !1
    }), g = te(v, 2), p = g[0], m = g[1];
    fe(function () {
        m({type: "setActive", id: c ?? null})
    }, [e]), fe(function () {
        p.activeModal && (l(s[p.activeModal]), m({type: "inited", id: p.activeModal}))
    }, [p.activeModal]);
    var S = function (x) {
        var _;
        return x != null && ((_ = s[x]) === null || _ === void 0 ? void 0 : _.type) === et.CARD
    }, w = E.useCallback(function ($) {
        if ($) {
            var x = s[$];
            Fr(x.onOpened) ? x.onOpened() : Fr(n) && n($)
        }
        m({type: "entered", id: $})
    }, [s, n]), d = E.useCallback(function ($) {
        if ($) {
            var x = s[$];
            Fr(x.onClosed) ? x.onClosed() : Fr(a) && a($)
        }
        m({type: "exited", id: $})
    }, [s, a]), f = !!(p.exitingModal && (S(e) || S(p.exitingModal))), h = E.useCallback(function ($) {
        return s[$]
    }, [s]);

    function C() {
        var $ = p.activeModal && s[p.activeModal];
        $ && (Fr($.onOpen) ? $.onOpen() : Fr(r) && r($.id))
    }

    function k() {
        var $ = p.activeModal && s[p.activeModal];
        $ && (Fr($.onClose) ? $.onClose() : Fr(o) && o($.id))
    }

    return me(me({onEnter: C, onEntered: w, onExit: k, onExited: d}, p), {}, {delayEnter: f, getModalState: h})
}

function X1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ve;
    return function (t) {
        return function (n) {
            var o = aA(n.activeModal, n.children, n.onOpen, n.onOpened, n.onClose, n.onClosed, e);
            return y(t, D({}, n, o))
        }
    }
}

var lA = ["id"], sA = Mf("ModalRoot");

function Ka(e, t) {
    return t ? e >= t[0] && e <= t[1] : !1
}

function t0(e) {
    return Math.max(0, Math.min(98, e))
}

var uA = function (e) {
    W1(r, e);
    var t = K1(r);

    function r(n) {
        var o;
        return l1(this, r), o = t.call(this, n), Pe(He(o), "documentScrolling", !1), Pe(He(o), "maskElementRef", void 0), Pe(He(o), "viewportRef", E.createRef()), Pe(He(o), "maskAnimationFrame", void 0), Pe(He(o), "modalRootContext", void 0), Pe(He(o), "frameIds", void 0), Pe(He(o), "restoreFocusTo", void 0), Pe(He(o), "preventTouch", function (a) {
            if (!a) return !1;
            for (; a.originalEvent;) a = a.originalEvent;
            return a.preventDefault && a.preventDefault(), !1
        }), Pe(He(o), "updateModalTranslate", function () {
            var a = o.getModalState(o.props.activeModal);
            a && o.animateTranslate(a, a.translateY)
        }), Pe(He(o), "updateModalHeight", function () {
            var a = o.getModalState(o.props.activeModal);
            a && a.type === et.PAGE && a.dynamicContentHeight && (o.props.enteringModal ? o.waitTransitionFinish(a, function () {
                requestAnimationFrame(function () {
                    return o.checkPageContentHeight()
                })
            }) : requestAnimationFrame(function () {
                return o.checkPageContentHeight()
            }))
        }), Pe(He(o), "onTouchMove", function (a) {
            if (!o.props.exitingModal) {
                var l = o.getModalState(o.props.activeModal);
                if (l) {
                    if (l.type === et.PAGE) return o.onPageTouchMove(a, l);
                    if (l.type === et.CARD) return o.onCardTouchMove(a, l)
                }
            }
        }), Pe(He(o), "onTouchEnd", function (a) {
            var l = o.getModalState(o.props.activeModal);
            if ((l == null ? void 0 : l.type) === et.PAGE) return o.onPageTouchEnd(a, l);
            if ((l == null ? void 0 : l.type) === et.CARD) return o.onCardTouchEnd(a, l)
        }), Pe(He(o), "onScroll", function (a) {
            var l, s = o.props.activeModal, u = a.target;
            if (s) {
                var c = o.getModalState(s);
                (c == null ? void 0 : c.type) === et.PAGE && c !== null && c !== void 0 && (l = c.contentElement) !== null && l !== void 0 && l.contains(u) && (c.contentScrolled = !0, c.contentScrollStopTimeout && clearTimeout(c.contentScrollStopTimeout), c.contentScrollStopTimeout = setTimeout(function () {
                    c.contentScrolled && (c.contentScrolled = !1)
                }, 250))
            }
        }), o.state = {
            touchDown: !1,
            dragging: !1
        }, o.maskElementRef = E.createRef(), o.modalRootContext = {
            updateModalHeight: o.updateModalHeight,
            registerModal: function (l) {
                var s = l.id, u = G(l, lA);
                return Object.assign(o.getModalState(s), u)
            },
            onClose: function () {
                return o.props.onExit()
            },
            isInsideModal: !0
        }, o.frameIds = {}, o
    }

    return s1(r, [{
        key: "timeout", get: function () {
            return this.props.platform === Gt || this.props.platform === Ie ? 320 : 400
        }
    }, {
        key: "document", get: function () {
            return this.props.document
        }
    }, {
        key: "window", get: function () {
            return this.props.window
        }
    }, {
        key: "getModalState", value: function (o) {
            if (o) return this.props.getModalState(o)
        }
    }, {
        key: "getModals", value: function () {
            return E.Children.toArray(this.props.children)
        }
    }, {
        key: "componentDidMount", value: function () {
            if (this.props.platform === ye) {
                var o;
                (o = this.window) === null || o === void 0 || o.addEventListener("resize", this.updateModalTranslate, !1)
            }
        }
    }, {
        key: "componentWillUnmount", value: function () {
            this.toggleDocumentScrolling(!0), this.window.removeEventListener("resize", this.updateModalTranslate, !1)
        }
    }, {
        key: "componentDidUpdate", value: function (o) {
            var a = this;
            if (this.props.exitingModal && this.props.exitingModal !== o.exitingModal && this.closeModal(this.props.exitingModal), this.props.enteringModal && this.props.enteringModal !== o.enteringModal) {
                var l = this.props.enteringModal, s = this.getModalState(l);
                this.props.onEnter(), this.waitTransitionFinish(s, function () {
                    s != null && s.innerElement && (s.innerElement.style.transitionDelay = ""), a.props.onEntered(l)
                }), s != null && s.innerElement && (s.innerElement.style.transitionDelay = this.props.delayEnter ? "".concat(this.timeout, "ms") : "", this.animateTranslate(s, s.translateY))
            }
            this.props.activeModal && !o.activeModal && (this.restoreFocusTo = this.document.activeElement), !this.props.activeModal && !this.props.exitingModal && this.restoreFocusTo && (this.restoreFocusTo.focus(), this.restoreFocusTo = null), this.toggleDocumentScrolling(!this.props.activeModal && !this.props.exitingModal)
        }
    }, {
        key: "toggleDocumentScrolling", value: function (o) {
            this.documentScrolling !== o && (this.documentScrolling = o, o ? this.window.removeEventListener("touchmove", this.preventTouch, {passive: !1}) : this.window.addEventListener("touchmove", this.preventTouch, {passive: !1}))
        }
    }, {
        key: "checkPageContentHeight", value: function () {
            var o = this.getModalState(this.props.activeModal);
            if ((o == null ? void 0 : o.type) === et.PAGE && o !== null && o !== void 0 && o.modalElement) {
                var a = me({}, o);
                q1(o);
                var l = me({}, o), s = !1;
                a.expandable === l.expandable ? a.translateYFrom !== l.translateYFrom && (s = !0) : s = !0, s && this.animateTranslate(o, o.translateY)
            }
        }
    }, {
        key: "closeModal", value: function (o) {
            var a = this, l, s, u;
            this.setState({touchDown: !1});
            var c = this.getModalState(o);
            if (!c) {
                o && sA("closeActiveModal: модальное окно (страница) ".concat(o, " не существует"), "error");
                return
            }
            var v = this.getModalState(this.props.activeModal), g = !!v && v.type === et.PAGE,
                p = !!c && c.type === et.PAGE;
            this.waitTransitionFinish(c, function () {
                return a.props.onExited(o)
            });
            var m = p && g && ((l = c.translateY) !== null && l !== void 0 ? l : 0) <= ((s = v == null ? void 0 : v.translateYFrom) !== null && s !== void 0 ? s : 0) && !this.props.isBack ? ((u = v == null ? void 0 : v.translateYFrom) !== null && u !== void 0 ? u : 0) + 10 : 100;
            this.animateTranslate(c, m), v || this.setMaskOpacity(c, 0)
        }
    }, {
        key: "onPageTouchMove", value: function (o, a) {
            var l, s, u = o.shiftY, c = o.originalEvent, v = c.target;
            if (!o.isY) {
                var g;
                (g = this.viewportRef.current) !== null && g !== void 0 && g.contains(v) && c.preventDefault();
                return
            }
            if (!((l = a.innerElement) !== null && l !== void 0 && l.contains(v))) return c.preventDefault();
            c.stopPropagation();
            var p = a.expandable, m = a.contentScrolled, S = a.collapsed, w = a.expanded;
            if (!this.state.touchDown) {
                var d, f;
                a.touchStartContentScrollTop = (d = (f = a.contentElement) === null || f === void 0 ? void 0 : f.scrollTop) !== null && d !== void 0 ? d : 0, this.setState({touchDown: !0})
            }
            if (!m && (a.touchMovePositive === null && (a.touchMovePositive = u > 0), !a.expandable || S || w && a.touchMovePositive && a.touchStartContentScrollTop === 0 || (s = a.headerElement) !== null && s !== void 0 && s.contains(v))) {
                var h;
                if (c.preventDefault(), !p && u < 0 || !this.window) return;
                !this.state.dragging && this.setState({dragging: !0});
                var C = u / this.window.innerHeight * 100,
                    k = qc(C, 72, .8, this.props.platform === Gt || this.props.platform === Ie);
                a.touchShiftYPercent = C, a.translateYCurrent = t0(((h = a.translateY) !== null && h !== void 0 ? h : 0) + k), this.animateTranslate(a, a.translateYCurrent), this.setMaskOpacity(a)
            }
        }
    }, {
        key: "onCardTouchMove", value: function (o, a) {
            var l, s = o.originalEvent, u = o.shiftY, c = s.target;
            if ((l = a.innerElement) !== null && l !== void 0 && l.contains(c)) {
                var v;
                this.state.touchDown || this.setState({touchDown: !0, dragging: !0});
                var g = u / a.innerElement.offsetHeight * 100,
                    p = qc(g, 72, 1.2, this.props.platform === Gt || this.props.platform === Ie);
                a.touchShiftYPercent = g, a.translateYCurrent = Math.max(0, ((v = a.translateY) !== null && v !== void 0 ? v : 0) + p), this.animateTranslate(a, a.translateYCurrent), this.setMaskOpacity(a)
            }
        }
    }, {
        key: "onPageTouchEnd", value: function (o, a) {
            var l = this, s = o.startY, u = o.shiftY;
            a.contentScrolled = !1, a.touchMovePositive = null;
            var c;
            if (this.state.dragging && this.window) {
                var v, g, p = (s + u) / this.window.innerHeight * 100,
                    m = (v = a.translateYCurrent) !== null && v !== void 0 ? v : 0,
                    S = m / o.duration * 240 * .6 * (((g = a.touchShiftYPercent) !== null && g !== void 0 ? g : 0) < 0 ? -1 : 1);
                if (m = t0(m + S), a.settlingHeight !== 100) if (Ka(m, a.expandedRange)) {
                    var w, d;
                    m = (w = (d = a.expandedRange) === null || d === void 0 ? void 0 : d[0]) !== null && w !== void 0 ? w : 0
                } else if (Ka(m, a.collapsedRange)) {
                    var f;
                    m = (f = a.translateYFrom) !== null && f !== void 0 ? f : 0
                } else if (Ka(m, a.hiddenRange)) m = 100; else {
                    var h;
                    m = (h = a.translateYFrom) !== null && h !== void 0 ? h : 0
                } else Ka(m, [0, 25]) ? m = 0 : m = 100;
                m !== 100 && p >= 75 && (m = 100), a.translateY = m, a.translateYCurrent = m, a.collapsed = m > 0 && m < p, a.expanded = m === 0, a.hidden = m === 100, a.hidden && this.props.onExit(), c = function () {
                    a.hidden || l.animateTranslate(a, a.translateY), l.setMaskOpacity(a)
                }
            }
            this.setState({touchDown: !1, dragging: !1}, c)
        }
    }, {
        key: "onCardTouchEnd", value: function (o, a) {
            var l = this, s = o.duration, u;
            if (this.state.dragging) {
                var c, v, g = (c = a.translateYCurrent) !== null && c !== void 0 ? c : 0,
                    p = g / s * 240 * .6 * (((v = a.touchShiftYPercent) !== null && v !== void 0 ? v : 0) < 0 ? -1 : 1);
                g = Math.max(0, g + p), g >= 30 ? g = 100 : g = 0, a.translateY = g, a.hidden = g === 100, a.hidden && this.props.onExit(), u = function () {
                    a.hidden || l.animateTranslate(a, a.translateY), l.setMaskOpacity(a)
                }
            }
            this.setState({touchDown: !1, dragging: !1}, u)
        }
    }, {
        key: "waitTransitionFinish", value: function (o, a) {
            if (ct.supported) {
                var l, s = function u() {
                    var c;
                    o == null || (c = o.innerElement) === null || c === void 0 || c.removeEventListener(ct.name, u), a()
                };
                o == null || (l = o.innerElement) === null || l === void 0 || l.addEventListener(ct.name, s)
            } else setTimeout(a, this.timeout)
        }
    }, {
        key: "animateTranslate", value: function (o, a) {
            var l = "animateTranslateFrame".concat(o.id);
            cancelAnimationFrame(this.frameIds[l]), this.frameIds[l] = requestAnimationFrame(function () {
                rA(o.innerElement, "translate3d(0, ".concat(a, "%, 0)"))
            })
        }
    }, {
        key: "setMaskOpacity", value: function (o) {
            var a, l = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            s === null && ((a = this.props.history) === null || a === void 0 ? void 0 : a[0]) !== o.id || (this.maskAnimationFrame && cancelAnimationFrame(this.maskAnimationFrame), this.maskAnimationFrame = requestAnimationFrame(function () {
                if (l.maskElementRef.current) {
                    var u = o.translateY, c = u === void 0 ? 0 : u, v = o.translateYCurrent, g = v === void 0 ? 0 : v,
                        p = s === null ? 1 - (g - c) / (100 - c) || 0 : s;
                    l.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, p)).toString()
                }
            }))
        }
    }, {
        key: "render", value: function () {
            var o, a = this, l = this.props, s = l.activeModal, u = l.exitingModal, c = l.enteringModal, v = this.state,
                g = v.touchDown, p = v.dragging;
            return !s && !u ? null : y(_1.Provider, {value: !0}, y(dn.Provider, {value: this.modalRootContext}, y(ua, {
                vkuiClass: X(hn("ModalRoot", this.props.platform), ((o = this.props.configProvider) === null || o === void 0 ? void 0 : o.webviewType) === jn.VKAPPS && "ModalRoot--vkapps", g && "ModalRoot--touched", !!(c || u) && "ModalRoot--switching"),
                onMove: this.onTouchMove,
                onEnd: this.onTouchEnd,
                onScroll: this.onScroll
            }, y("div", {
                vkuiClass: "ModalRoot__mask",
                onClick: this.props.onExit,
                ref: this.maskElementRef
            }), y("div", {vkuiClass: "ModalRoot__viewport", ref: this.viewportRef}, this.getModals().map(function (m) {
                var S = ar(m.props), w = a.getModalState(S);
                if (S !== s && S !== u || !w) return null;
                var d = me({}, w), f = d.type === et.PAGE, h = "modal-".concat(S);
                return y(H1, {
                    key: h,
                    getRootRef: function (k) {
                        var $ = a.getModalState(S);
                        $ && ($.modalElement = k)
                    },
                    onClose: a.props.onExit,
                    timeout: a.timeout,
                    vkuiClass: X("ModalRoot__modal", S === s && "ModalRoot__modal--active", S === u && "ModalRoot__modal--prev", (u && S === s || S === c) && "ModalRoot__modal--next", p && "ModalRoot__modal--dragging", f && d.expandable && "ModalRoot__modal--expandable", f && d.expanded && "ModalRoot__modal--expanded", f && d.collapsed && "ModalRoot__modal--collapsed"),
                    restoreFocus: !1
                }, m)
            })))))
        }
    }]), r
}(E.Component), cA = Y1(G1(d1(X1(dA)(uA))), Yt, "configProvider");

function dA(e) {
    switch (e.type) {
        case et.PAGE:
            return e.settlingHeight = e.settlingHeight || nA, q1(e);
        case et.CARD:
            return fA(e)
    }
}

function q1(e) {
    var t, r = e.contentElement, n = (r == null ? void 0 : r.firstElementChild).offsetHeight, o = e.translateY;
    e.expandable = n > ((t = r == null ? void 0 : r.clientHeight) !== null && t !== void 0 ? t : 0) || e.settlingHeight === 100;
    var a = !1, l = !1, s, u, c, v, g;
    if (e.expandable) {
        var p;
        s = 100 - ((p = e.settlingHeight) !== null && p !== void 0 ? p : 0);
        var m = s / 2, S = 100 - s;
        c = [0, m], v = [m, s + S / 4], g = [s + S / 4, 100], a = s > 0, l = s <= 0, u = s
    } else {
        var w, d, f, h, C,
            k = (w = (d = e.headerElement) === null || d === void 0 ? void 0 : d.offsetHeight) !== null && w !== void 0 ? w : 0,
            $ = n + k;
        s = 100 - $ / ((f = (h = e.innerElement) === null || h === void 0 || (C = h.parentElement) === null || C === void 0 ? void 0 : C.offsetHeight) !== null && f !== void 0 ? f : 0) * 100, u = s, c = [u, u + 25], v = [u + 25, u + 25], g = [u + 25, u + 100]
    }
    (e.expandable && u > (o ?? 100) || e.settlingHeight === 100) && (u = 0), u === 0 && (l = !0, a = !1), e.expandedRange = c, e.collapsedRange = v, e.hiddenRange = g, e.translateY = u, e.translateYFrom = s, e.collapsed = a, e.expanded = l
}

function fA(e) {
    e.translateY = 0
}

var vA = ["id"], pA = function (e) {
    W1(r, e);
    var t = K1(r);

    function r(n) {
        var o;
        return l1(this, r), o = t.call(this, n), Pe(He(o), "maskElementRef", void 0), Pe(He(o), "maskAnimationFrame", void 0), Pe(He(o), "modalRootContext", void 0), Pe(He(o), "restoreFocusTo", void 0), o.maskElementRef = E.createRef(), o.modalRootContext = {
            updateModalHeight: function () {
            }, registerModal: function (l) {
                var s = l.id, u = G(l, vA);
                return Object.assign(o.getModalState(s), u)
            }, onClose: function () {
                return o.props.onExit()
            }, isInsideModal: !0
        }, o
    }

    return s1(r, [{
        key: "timeout", get: function () {
            return this.props.platform === Gt || this.props.platform === Ie ? 320 : 400
        }
    }, {
        key: "modals", get: function () {
            return E.Children.toArray(this.props.children)
        }
    }, {
        key: "getModalState", value: function (o) {
            if (o !== null) return this.props.getModalState(o)
        }
    }, {
        key: "componentDidUpdate", value: function (o) {
            var a = this;
            if (this.props.exitingModal && this.props.exitingModal !== o.exitingModal && this.closeModal(this.props.exitingModal), this.props.enteringModal && this.props.enteringModal !== o.enteringModal) {
                var l = this.props.enteringModal, s = this.getModalState(l);
                this.props.onEnter(), requestAnimationFrame(function () {
                    a.props.enteringModal === l && (a.waitTransitionFinish(s, function () {
                        return a.props.onEntered(l)
                    }), a.animateModalOpacity(s, !0))
                })
            }
            if (this.props.activeModal && !o.activeModal) {
                var u, c;
                this.restoreFocusTo = (u = (c = this.props.document) === null || c === void 0 ? void 0 : c.activeElement) !== null && u !== void 0 ? u : void 0
            }
            !this.props.activeModal && !this.props.exitingModal && this.restoreFocusTo && (this.restoreFocusTo.focus(), this.restoreFocusTo = void 0)
        }
    }, {
        key: "closeModal", value: function (o) {
            var a = this, l = this.getModalState(o);
            l && (this.waitTransitionFinish(l, function () {
                return a.props.onExited(o)
            }), this.animateModalOpacity(l, !1), this.props.activeModal || this.setMaskOpacity(l, 0))
        }
    }, {
        key: "waitTransitionFinish", value: function (o, a) {
            if (ct.supported) {
                var l, s = function u() {
                    var c;
                    o == null || (c = o.innerElement) === null || c === void 0 || c.removeEventListener(ct.name, u), a()
                };
                o == null || (l = o.innerElement) === null || l === void 0 || l.addEventListener(ct.name, s)
            } else setTimeout(a, this.timeout)
        }
    }, {
        key: "animateModalOpacity", value: function (o, a) {
            o != null && o.innerElement && (o.innerElement.style.transitionDelay = a && this.props.delayEnter ? "".concat(this.timeout, "ms") : "", o.innerElement.style.opacity = a ? "1" : "0")
        }
    }, {
        key: "setMaskOpacity", value: function (o) {
            var a, l = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            s === null && ((a = this.props.history) === null || a === void 0 ? void 0 : a[0]) !== o.id || (this.maskAnimationFrame && cancelAnimationFrame(this.maskAnimationFrame), this.maskAnimationFrame = requestAnimationFrame(function () {
                if (l.maskElementRef.current) {
                    var u = o.translateY, c = u === void 0 ? 0 : u, v = o.translateYCurrent, g = v === void 0 ? 0 : v,
                        p = s === null ? 1 - (g - c) / (100 - c) || 0 : s;
                    l.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, p)).toString()
                }
            }))
        }
    }, {
        key: "render", value: function () {
            var o, a = this, l = this.props, s = l.exitingModal, u = l.activeModal, c = l.enteringModal;
            return !u && !s ? null : y(dn.Provider, {value: this.modalRootContext}, y("div", {vkuiClass: X(hn("ModalRoot", this.props.platform), ((o = this.props.configProvider) === null || o === void 0 ? void 0 : o.webviewType) === jn.VKAPPS && "ModalRoot--vkapps", "ModalRoot--desktop")}, y("div", {
                vkuiClass: "ModalRoot__mask",
                ref: this.maskElementRef,
                onClick: this.props.onExit
            }), y("div", {vkuiClass: "ModalRoot__viewport"}, this.modals.map(function (v) {
                var g = ar(v.props);
                if (g !== u && g !== s) return null;
                var p = "modal-".concat(g);
                return y(H1, {
                    restoreFocus: !1,
                    onClose: a.props.onExit,
                    timeout: a.timeout,
                    key: p,
                    vkuiClass: X("ModalRoot__modal", !s && !c && g === u && "ModalRoot__modal--active", g === s && "ModalRoot__modal--prev", !!s && g === u && "ModalRoot__modal--next")
                }, v)
            }))))
        }
    }]), r
}(E.Component), hA = Y1(G1(d1(X1()(pA))), Yt, "configProvider"), Z1 = function (t) {
    var r = Af();
    m1(!!t.activeModal);
    var n = r ? hA : cA;
    return y(n, t)
};
Z1.displayName = "ModalRoot";
var mA = At(Z1, {viewWidth: !0, viewHeight: !0, hasMouse: !0});

function r0(e) {
    var t, r, n;
    if (!e) return "portrait";
    var o = Math.abs((t = (r = e.screen) === null || r === void 0 || (n = r.orientation) === null || n === void 0 ? void 0 : n.angle) !== null && t !== void 0 ? t : Number(e.orientation));
    return o === 90 ? "landscape" : "portrait"
}

function gA() {
    var e = kt(), t = e.window, r = E.useState(function () {
        return r0(t)
    }), n = te(r, 2), o = n[0], a = n[1];
    return lr(t, "orientationchange", function () {
        return a(r0(t))
    }), o
}

var yA = ["children", "header", "size", "viewWidth", "viewHeight", "sizeX", "hasMouse", "onOpen", "onOpened", "onClose", "onClosed", "settlingHeight", "dynamicContentHeight", "getModalContentRef", "nav", "id", "hideCloseButton"],
    wA = function (t) {
        var r = t.children, n = t.header, o = t.size, a = o === void 0 ? "s" : o;
        t.viewWidth, t.viewHeight;
        var l = t.sizeX;
        t.hasMouse, t.onOpen, t.onOpened;
        var s = t.onClose;
        t.onClosed, t.settlingHeight, t.dynamicContentHeight;
        var u = t.getModalContentRef, c = t.nav, v = t.id, g = t.hideCloseButton, p = g === void 0 ? !1 : g,
            m = G(t, yA), S = E.useContext(dn), w = S.updateModalHeight, d = we(), f = gA();
        E.useEffect(w, [r, f, w]);
        var h = Af(), C = !p && h, k = h ? a : "s", $ = E.useContext(dn), x = _R(ar({nav: c, id: v}), et.PAGE),
            _ = x.refs;
        return y("div", D({}, m, {
            id: v,
            vkuiClass: X("ModalPage", d === xe.IOS && "ModalPage--ios", d === xe.VKCOM && "ModalPage--vkcom", "ModalPage--sizeX-".concat(l), h && "ModalPage--desktop", k && "ModalPage--".concat(k))
        }), y("div", {
            vkuiClass: "ModalPage__in-wrap",
            ref: _.innerElement
        }, y("div", {vkuiClass: "ModalPage__in"}, y("div", {
            vkuiClass: "ModalPage__header",
            ref: _.headerElement
        }, n), y("div", {vkuiClass: "ModalPage__content-wrap"}, y("div", {
            vkuiClass: "ModalPage__content",
            ref: HM(_.contentElement, u)
        }, y("div", {vkuiClass: "ModalPage__content-in"}, r))), C && y(W5, {onClick: s || $.onClose}))))
    }, Gi = At(wA, {viewWidth: !0, viewHeight: !0, sizeX: !0, hasMouse: !0});
Gi.displayName = "ModalPage";
var SA = ["children", "separator", "getRef"], Ul = function (t) {
    var r = t.children, n = t.separator, o = n === void 0 ? !0 : n, a = t.getRef, l = G(t, SA), s = we(),
        u = o && s === Ie, c = Af();
    return y("div", {
        vkuiClass: X("ModalPageHeader", s !== Ie && "ModalPageHeader--withGaps", c && "ModalPageHeader--desktop"),
        ref: a
    }, y(ca, D({vkuiClass: "ModalPageHeader__in"}, l, {
        fixed: !1,
        separator: !1,
        transparent: !0
    }), r), u && y(cn, {wide: !0}))
}, CA = ["icon", "sizeY", "children", "Component"], R6 = Mf("IconButton"), bA = function (t) {
    var r = t.icon, n = t.sizeY, o = t.children, a = t.Component, l = a === void 0 ? "button" : a, s = G(t, CA),
        u = we();
    return y(er, D({activeEffectDelay: 200, activeMode: "background"}, s, {
        Component: s.href ? "a" : l,
        vkuiClass: X("IconButton", "IconButton--sizeY-".concat(n), u === ye && "IconButton--ios")
    }), r || o)
}, ms = At(bA, {sizeY: !0});
ms.displayName = "IconButton";
var EA = ["badge", "badgeBeforeTitle", "badgeAfterTitle", "badgeBeforeSubtitle", "badgeAfterSubtitle", "before", "indicator", "children", "after", "description", "expandable", "multiline", "sizeY", "subhead", "subtitle", "extraSubtitle"],
    n0 = function (t) {
        var r = Ir(), n = r.sizeY;
        return n === Xe.COMPACT ? y(Ct, D({level: "2"}, t)) : y(A1, t)
    }, kA = function (t) {
        var r = t.badge, n = t.badgeBeforeTitle, o = t.badgeAfterTitle, a = o === void 0 ? r : o, l = t.badgeBeforeSubtitle,
            s = t.badgeAfterSubtitle, u = t.before, c = t.indicator, v = t.children, g = t.after, p = t.description,
            m = t.expandable, S = t.multiline, w = t.sizeY, d = t.subhead, f = t.subtitle, h = f === void 0 ? p : f,
            C = t.extraSubtitle, k = G(t, EA), $ = we(), x = De(g) || m && $ === ye;
        return y(er, D({}, k, {vkuiClass: X(hn("SimpleCell", $), m && "SimpleCell--exp", S && "SimpleCell--mult", "SimpleCell--sizeY-".concat(w))}), u, y("div", {vkuiClass: "SimpleCell__main"}, d && y(_r, {
            Component: "span",
            vkuiClass: "SimpleCell__text SimpleCell__subhead"
        }, d), y("div", {vkuiClass: "SimpleCell__content"}, n && y("span", {vkuiClass: "SimpleCell__badge"}, n), y(Rr, {
            Component: "span",
            vkuiClass: "SimpleCell__children",
            weight: "3"
        }, v), De(a) && y("span", {vkuiClass: "SimpleCell__badge"}, a)), h && y("div", {vkuiClass: "SimpleCell__content"}, l && y("span", {vkuiClass: "SimpleCell__badge"}, l), y(n0, {vkuiClass: "SimpleCell__text SimpleCell__subtitle"}, h), s && y("span", {vkuiClass: "SimpleCell__badge"}, s)), C && y(n0, {vkuiClass: "SimpleCell__text SimpleCell__extraSubtitle"}, C)), De(c) && y(Rr, {
            Component: "span",
            weight: "3",
            vkuiClass: "SimpleCell__indicator"
        }, c), x && y("div", {vkuiClass: "SimpleCell__after"}, g, m && $ === ye && y(z1, null)))
    }, Tr = At(kA, {sizeY: !0});
Tr.displayName = "SimpleCell";
var xA = ["platform", "mode"], $A = ["mode", "children", "subtitle", "indicator", "aside", "getRootRef", "multiline"],
    _A = function (t) {
        var r = t.platform, n = t.mode, o = G(t, xA);
        if (r === xe.IOS) switch (n) {
            case"primary":
            case"tertiary":
                return y(Ln, D({weight: "1", level: "3"}, o));
            case"secondary":
                return y(Ct, D({weight: "2", caps: !0}, o))
        }
        if (r === xe.VKCOM) switch (n) {
            case"primary":
                return y(Rr, D({weight: "3"}, o));
            case"secondary":
            case"tertiary":
                return y(Ct, o)
        }
        switch (n) {
            case"primary":
            case"tertiary":
                return y(Rr, D({weight: "2"}, o));
            case"secondary":
                return y(Ct, D({weight: "1", caps: !0}, o))
        }
        return null
    }, Qc = function (t) {
        var r = t.mode, n = r === void 0 ? "primary" : r, o = t.children, a = t.subtitle, l = t.indicator, s = t.aside,
            u = t.getRootRef, c = t.multiline, v = G(t, $A), g = we(), p = g === xe.VKCOM ? _r : un,
            m = n === "secondary" ? _r : Ct;
        return y("header", D({}, v, {
            ref: u,
            vkuiClass: X("Header", g === xe.VKCOM && "Header--vkcom", g === xe.ANDROID && "Header--android", g === xe.IOS && "Header--ios", "Header--mode-".concat(n), Wc(l) && "Header--pi")
        }), y("div", {vkuiClass: "Header__main"}, y(_A, {
            vkuiClass: "Header__content",
            Component: "span",
            mode: n,
            platform: g
        }, y("span", {vkuiClass: X("Header__content-in", c && "Header__content-in--multiline")}, o), De(l) && y(Ct, {
            vkuiClass: "Header__indicator",
            weight: n === "primary" || n === "secondary" ? "1" : void 0
        }, l)), De(a) && y(m, {
            vkuiClass: "Header__subtitle",
            Component: "span"
        }, a)), De(s) && y(p, {vkuiClass: "Header__aside", Component: "span"}, s))
    }, TA = ["header", "description", "children", "separator", "getRootRef", "mode", "padding", "sizeX", "tabIndex"],
    OA = function (t) {
        var r = t.header, n = t.description, o = t.children, a = t.separator, l = a === void 0 ? "auto" : a,
            s = t.getRootRef, u = t.mode, c = t.padding, v = c === void 0 ? "m" : c, g = t.sizeX, p = t.tabIndex,
            m = G(t, TA), S = E.useContext(dn), w = S.isInsideModal, d = we(), f = u;
        u || (f = g === Xe.COMPACT || w ? "plain" : "card");
        var h = m.role === "tabpanel", C = h && p === void 0 ? 0 : p, k = null;
        if (l !== "hide") {
            var $ = X("Group__separator", l === "show" && "Group__separator--force");
            k = f === "card" ? y(O1, {vkuiClass: $, size: 16}) : y(cn, {vkuiClass: $})
        }
        return y(E.Fragment, null, y("section", D({}, m, {
            tabIndex: C,
            ref: s,
            vkuiClass: X("Group", d === ye && "Group--ios", "Group--sizeX-".concat(g), "Group--".concat(f), "Group--padding-".concat(v))
        }), r, o, De(n) && y(Ct, {vkuiClass: "Group__description"}, n)), k)
    }, If = At(OA, {sizeX: !0});
If.displayName = "Group";
var PA = ["getRootRef", "children", "onRemove", "removePlaceholder", "align"], MA = function (t) {
        var r = t.onRemove, n = t.removePlaceholder, o = t.removePlaceholderString, a = t.children, l = kt(), s = l.window,
            u = E.useRef(null), c = E.useRef(!0), v = E.useState(0), g = te(v, 2), p = g[0], m = g[1];
        lr(s, "click", function () {
            p > 0 && m(0)
        }, {capture: !0});
        var S = function () {
            if (p > 0) {
                var f;
                u == null || (f = u.current) === null || f === void 0 || f.focus()
            } else c.current = !0
        }, w = function (f) {
            if (f.stopPropagation(), !!u.current) {
                var h = u.current.offsetWidth;
                c.current = !1, m(h)
            }
        };
        return y("div", {
            vkuiClass: "Removable__content",
            style: {transform: "translateX(-".concat(p ?? 0, "px)")},
            onTransitionEnd: S
        }, y(ms, {
            hasActive: !1,
            hasHover: !1,
            "aria-label": o,
            vkuiClass: "Removable__action Removable__toggle",
            onClick: w,
            disabled: p > 0
        }, y("i", {vkuiClass: "Removable__toggle-in", role: "presentation"})), a, y("span", {
            vkuiClass: "Removable__offset",
            "aria-hidden": !0
        }), y(er, {
            Component: "button",
            hasActive: !1,
            hasHover: !1,
            disabled: c.current,
            getRootRef: u,
            vkuiClass: "Removable__remove",
            onClick: r
        }, y("span", {vkuiClass: "Removable__remove-in"}, n)))
    }, RA = function (t) {
        var r = t.getRootRef, n = t.children, o = t.onRemove, a = o === void 0 ? ve : o, l = t.removePlaceholder,
            s = l === void 0 ? "Удалить" : l, u = t.align, c = u === void 0 ? "center" : u, v = G(t, PA), g = we(),
            p = Ir(), m = p.sizeY, S = sa(r), w = function (h) {
                h.preventDefault(), a(h)
            }, d = VM(s);
        return y("div", D({}, v, {
            ref: S,
            vkuiClass: X("Removable", g === ye && "Removable--ios", "Removable--".concat(c), "Removable--sizeY-".concat(m))
        }), g !== ye && y("div", {vkuiClass: "Removable__content"}, n, y(ms, {
            activeMode: "opacity",
            hoverMode: "opacity",
            vkuiClass: "Removable__action",
            onClick: w,
            "aria-label": d
        }, y(Nn, {role: "presentation"})), y("span", {
            vkuiClass: "Removable__offset",
            "aria-hidden": !0
        })), g === ye && y(MA, {onRemove: w, removePlaceholder: s, removePlaceholderString: d}, n))
    },
    AA = ["alt", "crossOrigin", "decoding", "height", "loading", "referrerPolicy", "sizes", "src", "srcSet", "useMap", "width", "getRef", "size", "shadow", "mode", "className", "children", "getRootRef", "style", "aria-label", "badge", "overlayIcon", "overlayMode", "overlayAction", "onClick"],
    Q1 = 48, IA = !0, Pn = function (t) {
        var r = t.alt, n = t.crossOrigin, o = t.decoding, a = t.height, l = t.loading, s = t.referrerPolicy, u = t.sizes,
            c = t.src, v = t.srcSet, g = t.useMap, p = t.width, m = t.getRef, S = t.size, w = S === void 0 ? Q1 : S,
            d = t.shadow, f = d === void 0 ? IA : d, h = t.mode, C = h === void 0 ? "default" : h, k = t.className,
            $ = t.children, x = t.getRootRef, _ = t.style, R = t["aria-label"], M = t.badge, j = t.overlayIcon,
            re = t.overlayMode, U = re === void 0 ? "light" : re, B = t.overlayAction, Y = t.onClick, Q = G(t, AA),
            ne = Ir(), ce = ne.hasMouse, _e = E.useState(!1), Be = te(_e, 2), ke = Be[0], A = Be[1],
            V = B ?? (ce ? "hover" : "always"), K = function () {
                A(!0)
            }, ie = function () {
                A(!1)
            }, O = "50%";
        switch (C) {
            case"image":
                w < 64 && (O = 4), w >= 64 && w < 96 && (O = 6), w >= 96 && (O = 8);
                break;
            case"app":
                w <= 40 && (O = 8), w > 40 && w < 56 && (O = 10), w >= 56 && w < 64 && (O = 12), w >= 64 && w < 84 && (O = 16), w >= 84 && (O = 18);
                break
        }
        var P = c || v;
        return y("div", D({}, Q, {
            vkuiClass: X("Avatar", "Avatar--type-".concat(C), "Avatar--sz-".concat(w), f && "Avatar--shadow", ke && "Avatar--failed"),
            className: k,
            ref: x,
            role: P ? "img" : "presentation",
            "aria-label": r || R,
            onClick: j ? void 0 : Y,
            style: me(me({}, _), {}, {width: w, height: w, borderRadius: O})
        }), P && y("img", {
            crossOrigin: n,
            decoding: o,
            height: a,
            loading: l,
            referrerPolicy: s,
            sizes: u,
            src: c,
            srcSet: v,
            useMap: g,
            width: p,
            ref: m,
            onError: K,
            onLoad: ie,
            vkuiClass: "Avatar__img",
            alt: ""
        }), $ && y("div", {vkuiClass: "Avatar__children"}, $), j && y(er, {
            Component: "button",
            vkuiClass: X("Avatar__overlay", V === "always" && "Avatar__overlay--visible", U === "light" && "Avatar__overlay--light", U === "dark" && "Avatar__overlay--dark"),
            hoverMode: "Avatar__overlay--visible",
            focusVisibleMode: "Avatar__overlay--focus-visible",
            hasActive: !1,
            onClick: Y
        }, j), M && y("div", {vkuiClass: X("Avatar__badge", w >= 96 && "Avatar__badge--large", M !== "online" && M !== "online-mobile" && "Avatar__badge--shadow")}, M === "online" ? y("div", {vkuiClass: "Avatar__badge-online"}, y(m5, {
            width: w >= 72 ? 15 : 12,
            height: w >= 72 ? 15 : 12
        })) : M === "online-mobile" ? y("div", {vkuiClass: "Avatar__badge-online-mobile"}, y(g5, {
            width: w >= 72 ? 9 : 8,
            height: w >= 72 ? 15 : 12
        })) : M))
    }, jA = ["children"], To = function (t) {
        var r = t.children, n = G(t, jA);
        return y(Ct, D({Component: "footer"}, n, {vkuiClass: "Footer"}), r)
    }, LA = ["header", "children"], o0 = function (t) {
        var r = t.header, n = t.children, o = G(t, LA);
        return y(Rr, D({Component: "span"}, o, {vkuiClass: "InfoRow", weight: "3"}), De(r) && y(_r, {
            Component: "span",
            vkuiClass: "InfoRow__header"
        }, r), n)
    }, NA = ["size", "children", "gradientColor", "style"],
    DA = {1: "red", 2: "orange", 3: "yellow", 4: "green", 5: "l-blue", 6: "violet"};

function FA(e) {
    var t = Math.ceil(e * .36), r = t % 2;
    return t + r
}

var J1 = function (t) {
        var r = t.size, n = r === void 0 ? Q1 : r, o = t.children, a = t.gradientColor, l = t.style, s = G(t, NA),
            u = typeof a == "string" ? a : a && DA[a];
        return y(Pn, D({}, s, {
            style: me(me({}, l), {}, {fontSize: FA(n)}),
            size: n,
            vkuiClass: X("InitialsAvatar", "InitialsAvatar--color-".concat(u))
        }), y("span", {"aria-hidden": "true", vkuiClass: "InitialsAvatar__text"}, o))
    }, BA = ["hasVisited", "children"], Jc = function (t) {
        var r = t.hasVisited, n = t.children, o = G(t, BA);
        return y(er, D({Component: o.href ? "a" : "button"}, o, {
            vkuiClass: X("Link", r && "Link--has-visited"),
            hasHover: !1,
            activeMode: "opacity",
            focusVisibleMode: "Link--focus-visible"
        }), n)
    },
    zA = ["mode", "imageTheme", "size", "before", "asideMode", "header", "subheader", "text", "children", "background", "actions", "onDismiss", "dismissLabel"],
    i0 = function (t) {
        var r = t.mode, n = r === void 0 ? "tint" : r, o = t.imageTheme, a = o === void 0 ? "dark" : o, l = t.size,
            s = l === void 0 ? "s" : l, u = t.before, c = t.asideMode, v = t.header, g = t.subheader, p = t.text;
        t.children;
        var m = t.background, S = t.actions, w = t.onDismiss, d = t.dismissLabel, f = d === void 0 ? "Скрыть" : d,
            h = G(t, zA), C = we(), k = s === "m" ? Ln : Rr, $ = s === "m" ? un : _r, x = n === "image" ? k5 : x5,
            _ = y(E.Fragment, null, n === "image" && m && y("div", {
                "aria-hidden": "true",
                vkuiClass: "Banner__bg"
            }, m), u && y("div", {vkuiClass: "Banner__before"}, u), y("div", {vkuiClass: "Banner__content"}, De(v) && y(k, {
                Component: "span",
                vkuiClass: "Banner__header",
                weight: "2",
                level: s === "m" ? "2" : "1"
            }, v), De(g) && y($, {
                Component: "span",
                vkuiClass: "Banner__subheader"
            }, g), De(p) && y(un, {vkuiClass: "Banner__text"}, p), De(S) && E.Children.count(S) > 0 && y("div", {vkuiClass: "Banner__actions"}, S)));
        return y("section", D({}, h, {vkuiClass: X("Banner", C === ye && "Banner--ios", "Banner--md-".concat(n), "Banner--sz-".concat(s), n === "image" && a === "dark" && "Banner--inverted")}), c === "expand" ? y(er, {
            vkuiClass: "Banner__in",
            activeMode: C === ye ? "opacity" : "background",
            role: "button"
        }, _, y("div", {vkuiClass: "Banner__aside"}, y(z1, null))) : y("div", {vkuiClass: "Banner__in"}, _, c === "dismiss" && y("div", {vkuiClass: "Banner__aside"}, y(ms, {
            "aria-label": f,
            vkuiClass: "Banner__dismiss",
            onClick: w,
            hoverMode: "opacity",
            hasActive: !1
        }, y(C === ye ? x : Nn, null)))))
    }, HA = ["children", "Component", "getRef", "onSubmit"], VA = function (t) {
        return t.preventDefault()
    }, ew = function (t) {
        var r = t.children, n = t.Component, o = n === void 0 ? "form" : n, a = t.getRef, l = t.onSubmit,
            s = l === void 0 ? VA : l, u = G(t, HA), c = we();
        return y(o, D({}, u, {
            vkuiClass: hn("FormLayout", c),
            onSubmit: s,
            ref: a
        }), y("div", {vkuiClass: "FormLayout__container"}, r), o === "form" && y("input", {
            type: "submit",
            vkuiClass: "FormLayout__submit",
            value: ""
        }))
    },
    WA = ["children", "top", "bottom", "status", "Component", "removable", "onRemove", "removePlaceholder", "getRootRef"],
    _n = function (t) {
        var r = t.children, n = t.top, o = t.bottom, a = t.status, l = a === void 0 ? "default" : a, s = t.Component,
            u = s === void 0 ? "div" : s, c = t.removable, v = t.onRemove, g = v === void 0 ? ve : v,
            p = t.removePlaceholder, m = p === void 0 ? "Удалить" : p, S = t.getRootRef, w = G(t, WA), d = we(),
            f = sa(S), h = Ir(), C = h.sizeY,
            k = y(E.Fragment, null, De(n) && y(_r, {vkuiClass: "FormItem__top"}, n), r, De(o) && y(Ct, {vkuiClass: "FormItem__bottom"}, o));
        return y(u, D({}, w, {
            ref: f,
            vkuiClass: X(hn("FormItem", d), "FormItem--".concat(l), "FormItem--sizeY-".concat(C), De(n) && "FormItem--withTop", c && "FormItem--removable")
        }), c ? y(RA, {
            align: "start", onRemove: function (x) {
                f != null && f.current && g(x, f.current)
            }, removePlaceholder: m
        }, y("div", {vkuiClass: "FormItem__removable"}, k)) : k)
    }, UA = ["Component", "status", "children", "getRootRef", "before", "after", "disabled", "mode"],
    KA = {default: "default", plain: "plain"}, GA = function (t) {
        var r = t.Component, n = r === void 0 ? "div" : r, o = t.status, a = o === void 0 ? "default" : o, l = t.children,
            s = t.getRootRef, u = t.before, c = t.after, v = t.disabled, g = t.mode, p = g === void 0 ? KA.default : g,
            m = G(t, UA), S = Ir(), w = S.sizeY, d = E.useState(!1), f = te(d, 2), h = f[0], C = f[1], k = function (_) {
                _.stopPropagation(), C(!0)
            }, $ = function (_) {
                _.stopPropagation(), C(!1)
            };
        return y(n, D({role: "presentation"}, m, {
            ref: s,
            onMouseEnter: k,
            onMouseLeave: $,
            vkuiClass: X("FormField", "FormField--".concat(p), "FormField--status-".concat(a), "FormField--sizeY-".concat(w), v && "FormField--disabled", !v && h && "FormField--hover")
        }), u && y("div", {
            role: "presentation",
            vkuiClass: "FormField__before"
        }, u), l, c && y("div", {role: "presentation", vkuiClass: "FormField__after"}, c), y("div", {
            role: "presentation",
            vkuiClass: "FormField__border"
        }))
    }, YA = ["mode", "header", "children", "dangerouslySetInnerHTML"], XA = function (t) {
        var r = t.mode, n = t.header, o = t.children, a = t.dangerouslySetInnerHTML, l = G(t, YA);
        return y("div", D({}, l, {vkuiClass: X("FormStatus", "FormStatus--".concat(r))}), De(n) && y(Rr, {
            weight: "2",
            vkuiClass: "FormStatus__header"
        }, n), a && y(Ct, {dangerouslySetInnerHTML: a}), De(o) && !a && y(Ct, null, o))
    }, qA = ["type", "align", "getRef", "className", "getRootRef", "sizeY", "style", "before", "after", "status"],
    ZA = function (t) {
        var r = t.type, n = r === void 0 ? "text" : r, o = t.align, a = t.getRef, l = t.className, s = t.getRootRef,
            u = t.sizeY, c = t.style, v = t.before, g = t.after, p = t.status, m = G(t, qA);
        return y(GA, {
            vkuiClass: X("Input", !!o && "Input--".concat(o), "Input--sizeY-".concat(u), v && "Input--hasBefore", g && "Input--hasAfter"),
            style: c,
            className: l,
            getRootRef: s,
            before: v,
            after: g,
            disabled: m.disabled,
            status: p
        }, y("input", D({}, m, {type: n, vkuiClass: "Input__el", ref: a})))
    }, Yi = At(ZA, {sizeY: !0});
Yi.displayName = "Input";
var a0 = E.createContext(void 0), QA = "enableKeyboardInput", JA = "disableKeyboardInput";

function eI() {
    var e = kt(), t = e.document, r = E.useState(!1), n = te(r, 2), o = n[0], a = n[1], l = E.useCallback(function () {
        a(!0)
    }, []), s = E.useCallback(function (v) {
        Hl(v) === tt.TAB && l()
    }, [l]), u = E.useCallback(function () {
        a(!1)
    }, []), c = {passive: !0, capture: !0};
    return lr(t, "keydown", s, c), lr(t, "mousedown", u, c), lr(t, "touchstart", u, c), lr(t, QA, l, c), lr(t, JA, u, c), o
}

var tI = ["children", "getRootRef"], he = function (t) {
    var r = t.children, n = t.getRootRef, o = G(t, tI);
    return y("div", D({}, o, {ref: n, vkuiClass: "Div"}), r)
}, tw = {bottom: null, top: null, left: null, right: null};

function rw(e) {
    var t = e.detail, r = t.type, n = t.data;
    switch (r) {
        case"VKWebAppUpdateConfig":
        case"VKWebAppUpdateInsets":
            var o = n.insets;
            if (o) return me(me({}, o), {}, {bottom: o.bottom > 150 ? 0 : o.bottom})
    }
    return null
}

_t.subscribe(function (e) {
    var t = rw(e);
    t && (tw = t)
});

function rI() {
    var e = E.useState(tw), t = te(e, 2), r = t[0], n = t[1];
    return fe(function () {
        function o(a) {
            var l = rw(a);
            l && n(l)
        }

        return _t.subscribe(o), function () {
            _t.unsubscribe(o)
        }
    }, []), r
}

var nI = ["children", "mode", "embedded", "sizeX", "hasMouse", "noLegacyClasses", "scroll", "portalRoot", "disablePortal"],
    nw = At(function (e) {
        var t = e.children, r = e.mode, n = e.embedded, o = e.sizeX, a = e.hasMouse, l = e.noLegacyClasses,
            s = l === void 0 ? !1 : l, u = e.scroll, c = u === void 0 ? "global" : u, v = e.portalRoot,
            g = v === void 0 ? null : v, p = e.disablePortal, m = G(e, nI), S = r || (n ? "embedded" : "full"),
            w = eI(), d = E.useRef(null), f = E.useState(null), h = te(f, 2), C = h[0], k = h[1], $ = kt(),
            x = $.document, _ = rI(), R = E.useContext(Yt), M = R.appearance;
        o1.noConflict = s, fe(function () {
            var U = null;
            return g && (G5(g) ? U = g.current : U = g), U || (U = x.createElement("div"), U.classList.add("vkui__portal-root"), x.body.appendChild(U)), k(U), function () {
                var B, Y;
                (B = U) === null || B === void 0 || (Y = B.parentElement) === null || Y === void 0 || Y.removeChild(U)
            }
        }, [g]), fe(function () {
            var U, B;
            if (S === "partial") return ve;
            var Y = (U = d.current) === null || U === void 0 ? void 0 : U.parentElement,
                Q = ["vkui__root"].concat(S === "embedded" ? "vkui__root--embedded" : []);
            return Y == null || (B = Y.classList).add.apply(B, Dl(Q)), function () {
                var ne;
                Y == null || (ne = Y.classList).remove.apply(ne, Dl(Q))
            }
        }, []), fe(function () {
            if (S === "full") return x.documentElement.classList.add("vkui"), function () {
                x.documentElement.classList.remove("vkui")
            }
        }, [x, S]), fe(function () {
            var U;
            if (S === "partial" || !((U = d.current) !== null && U !== void 0 && U.parentElement)) return ve;
            var B = d.current.parentElement;
            for (var Y in _) if (_.hasOwnProperty(Y) && typeof _[Y] == "number") {
                var Q = _[Y];
                B.style.setProperty("--safe-area-inset-".concat(Y), "".concat(Q, "px")), C && C.style.setProperty("--safe-area-inset-".concat(Y), "".concat(Q, "px"))
            }
            return function () {
                for (var ne in _) _.hasOwnProperty(ne) && (B.style.removeProperty("--safe-area-inset-".concat(ne)), C && C.style.removeProperty("--safe-area-inset-".concat(ne)))
            }
        }, [_, C]), fe(function () {
            var U;
            if (S === "partial" || o !== Xe.REGULAR) return ve;
            var B = S === "embedded" ? (U = d.current) === null || U === void 0 ? void 0 : U.parentElement : x.body;
            return B == null || B.classList.add("vkui--sizeX-regular"), function () {
                return B == null ? void 0 : B.classList.remove("vkui--sizeX-regular")
            }
        }, [o]), fe(function () {
            return S !== "full" || M === void 0 ? ve : (x.documentElement.style.setProperty("color-scheme", M), function () {
                return x.documentElement.style.removeProperty("color-scheme")
            })
        }, [M]);
        var j = E.useMemo(function () {
            return c === "contain" ? KM : UM
        }, [c]), re = y(hs.Provider, {
            value: {
                appRoot: d,
                portalRoot: C,
                embedded: S === "embedded",
                keyboardInput: w,
                mode: S,
                disablePortal: p
            }
        }, y(j, {elRef: d}, y(JR, {classPrefix: "vkui", globalClasses: !s}, t)));
        return S === "partial" ? re : y("div", D({ref: d, vkuiClass: X("AppRoot", !a && "AppRoot--no-mouse")}, m), re)
    }, {sizeX: !0, hasMouse: !0});
nw.displayName = "AppRoot";

function oI(e, t) {
    var r = t === "inherit", n = E.useCallback(function () {
        if (!(!r || !je || !e)) return e.getAttribute("scheme")
    }, [r, e]), o = E.useState(n()), a = te(o, 2), l = a[0], s = a[1];
    return E.useEffect(function () {
        if (!r || !e) return ve;
        s(n());
        var u = new MutationObserver(function () {
            return s(n())
        });
        return u.observe(e, {attributes: !0, attributeFilter: ["scheme"]}), function () {
            return u.disconnect()
        }
    }, [n, r, e]), t === "inherit" ? l : t
}

var iI = function (t) {
    return t === Ge.SPACE_GRAY || t === Ge.VKCOM_DARK ? "dark" : "light"
}, l0 = function (t) {
    var r = E.useContext(a0), n = E.useContext(Yt), o = t.children, a = t.webviewType,
        l = a === void 0 ? n.webviewType : a, s = t.isWebView, u = s === void 0 ? n.isWebView : s,
        c = t.transitionMotionEnabled, v = c === void 0 ? n.transitionMotionEnabled : c, g = t.platform,
        p = g === void 0 ? n.platform : g, m = t.hasNewTokens, S = m === void 0 ? n.hasNewTokens : m, w = t.appearance,
        d = w === void 0 ? n.appearance : w, f = t.scheme, h = t.locale, C = h === void 0 ? r ?? "ru" : h,
        k = YM({scheme: f, platform: p, appearance: d}), $ = kt(), x = $.document, _ = x == null ? void 0 : x.body;
    fe(function () {
        return k === "inherit" ? ve : (_ == null || _.setAttribute("scheme", k), function () {
            return _ == null ? void 0 : _.removeAttribute("scheme")
        })
    }, [k]);
    var R = oI(_, k), M = iI(R);
    fe(function () {
        var re = C1(p, M);
        return _ == null || _.classList.add(re), function () {
            _ == null || _.classList.remove(re)
        }
    }, [p, M]);
    var j = k1({
        webviewType: l,
        isWebView: u,
        transitionMotionEnabled: v,
        hasNewTokens: S,
        platform: p,
        scheme: f,
        appearance: d || M
    });
    return y(Yt.Provider, {value: j}, y(a0.Provider, {value: C}, y(b1, {appearance: j.appearance}, o)))
}, jf = {exports: {}}, ow = function (t, r) {
    return function () {
        for (var o = new Array(arguments.length), a = 0; a < o.length; a++) o[a] = arguments[a];
        return t.apply(r, o)
    }
}, aI = ow, Un = Object.prototype.toString;

function Lf(e) {
    return Un.call(e) === "[object Array]"
}

function ed(e) {
    return typeof e > "u"
}

function lI(e) {
    return e !== null && !ed(e) && e.constructor !== null && !ed(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function sI(e) {
    return Un.call(e) === "[object ArrayBuffer]"
}

function uI(e) {
    return typeof FormData < "u" && e instanceof FormData
}

function cI(e) {
    var t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t
}

function dI(e) {
    return typeof e == "string"
}

function fI(e) {
    return typeof e == "number"
}

function iw(e) {
    return e !== null && typeof e == "object"
}

function ul(e) {
    if (Un.call(e) !== "[object Object]") return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

function vI(e) {
    return Un.call(e) === "[object Date]"
}

function pI(e) {
    return Un.call(e) === "[object File]"
}

function hI(e) {
    return Un.call(e) === "[object Blob]"
}

function aw(e) {
    return Un.call(e) === "[object Function]"
}

function mI(e) {
    return iw(e) && aw(e.pipe)
}

function gI(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}

function yI(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function wI() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function Nf(e, t) {
    if (!(e === null || typeof e > "u")) if (typeof e != "object" && (e = [e]), Lf(e)) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
}

function td() {
    var e = {};

    function t(o, a) {
        ul(e[a]) && ul(o) ? e[a] = td(e[a], o) : ul(o) ? e[a] = td({}, o) : Lf(o) ? e[a] = o.slice() : e[a] = o
    }

    for (var r = 0, n = arguments.length; r < n; r++) Nf(arguments[r], t);
    return e
}

function SI(e, t, r) {
    return Nf(t, function (o, a) {
        r && typeof o == "function" ? e[a] = aI(o, r) : e[a] = o
    }), e
}

function CI(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}

var It = {
    isArray: Lf,
    isArrayBuffer: sI,
    isBuffer: lI,
    isFormData: uI,
    isArrayBufferView: cI,
    isString: dI,
    isNumber: fI,
    isObject: iw,
    isPlainObject: ul,
    isUndefined: ed,
    isDate: vI,
    isFile: pI,
    isBlob: hI,
    isFunction: aw,
    isStream: mI,
    isURLSearchParams: gI,
    isStandardBrowserEnv: wI,
    forEach: Nf,
    merge: td,
    extend: SI,
    trim: yI,
    stripBOM: CI
}, Jn = It;

function s0(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

var lw = function (t, r, n) {
    if (!r) return t;
    var o;
    if (n) o = n(r); else if (Jn.isURLSearchParams(r)) o = r.toString(); else {
        var a = [];
        Jn.forEach(r, function (u, c) {
            u === null || typeof u > "u" || (Jn.isArray(u) ? c = c + "[]" : u = [u], Jn.forEach(u, function (g) {
                Jn.isDate(g) ? g = g.toISOString() : Jn.isObject(g) && (g = JSON.stringify(g)), a.push(s0(c) + "=" + s0(g))
            }))
        }), o = a.join("&")
    }
    if (o) {
        var l = t.indexOf("#");
        l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + o
    }
    return t
}, bI = It;

function gs() {
    this.handlers = []
}

gs.prototype.use = function (t, r, n) {
    return this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1
};
gs.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null)
};
gs.prototype.forEach = function (t) {
    bI.forEach(this.handlers, function (n) {
        n !== null && t(n)
    })
};
var EI = gs, kI = It, xI = function (t, r) {
    kI.forEach(t, function (o, a) {
        a !== r && a.toUpperCase() === r.toUpperCase() && (t[r] = o, delete t[a])
    })
}, sw = function (t, r, n, o, a) {
    return t.config = r, n && (t.code = n), t.request = o, t.response = a, t.isAxiosError = !0, t.toJSON = function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
        }
    }, t
}, Tu, u0;

function uw() {
    if (u0) return Tu;
    u0 = 1;
    var e = sw;
    return Tu = function (r, n, o, a, l) {
        var s = new Error(r);
        return e(s, n, o, a, l)
    }, Tu
}

var Ou, c0;

function $I() {
    if (c0) return Ou;
    c0 = 1;
    var e = uw();
    return Ou = function (r, n, o) {
        var a = o.config.validateStatus;
        !o.status || !a || a(o.status) ? r(o) : n(e("Request failed with status code " + o.status, o.config, null, o.request, o))
    }, Ou
}

var Pu, d0;

function _I() {
    if (d0) return Pu;
    d0 = 1;
    var e = It;
    return Pu = e.isStandardBrowserEnv() ? function () {
        return {
            write: function (n, o, a, l, s, u) {
                var c = [];
                c.push(n + "=" + encodeURIComponent(o)), e.isNumber(a) && c.push("expires=" + new Date(a).toGMTString()), e.isString(l) && c.push("path=" + l), e.isString(s) && c.push("domain=" + s), u === !0 && c.push("secure"), document.cookie = c.join("; ")
            }, read: function (n) {
                var o = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                return o ? decodeURIComponent(o[3]) : null
            }, remove: function (n) {
                this.write(n, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }(), Pu
}

var Mu, f0;

function TI() {
    return f0 || (f0 = 1, Mu = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }), Mu
}

var Ru, v0;

function OI() {
    return v0 || (v0 = 1, Ru = function (t, r) {
        return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t
    }), Ru
}

var Au, p0;

function PI() {
    if (p0) return Au;
    p0 = 1;
    var e = TI(), t = OI();
    return Au = function (n, o) {
        return n && !e(o) ? t(n, o) : o
    }, Au
}

var Iu, h0;

function MI() {
    if (h0) return Iu;
    h0 = 1;
    var e = It,
        t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return Iu = function (n) {
        var o = {}, a, l, s;
        return n && e.forEach(n.split(`
`), function (c) {
            if (s = c.indexOf(":"), a = e.trim(c.substr(0, s)).toLowerCase(), l = e.trim(c.substr(s + 1)), a) {
                if (o[a] && t.indexOf(a) >= 0) return;
                a === "set-cookie" ? o[a] = (o[a] ? o[a] : []).concat([l]) : o[a] = o[a] ? o[a] + ", " + l : l
            }
        }), o
    }, Iu
}

var ju, m0;

function RI() {
    if (m0) return ju;
    m0 = 1;
    var e = It;
    return ju = e.isStandardBrowserEnv() ? function () {
        var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), o;

        function a(l) {
            var s = l;
            return r && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }

        return o = a(window.location.href), function (s) {
            var u = e.isString(s) ? a(s) : s;
            return u.protocol === o.protocol && u.host === o.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }(), ju
}

var Lu, g0;

function y0() {
    if (g0) return Lu;
    g0 = 1;
    var e = It, t = $I(), r = _I(), n = lw, o = PI(), a = MI(), l = RI(), s = uw();
    return Lu = function (c) {
        return new Promise(function (g, p) {
            var m = c.data, S = c.headers, w = c.responseType;
            e.isFormData(m) && delete S["Content-Type"];
            var d = new XMLHttpRequest;
            if (c.auth) {
                var f = c.auth.username || "", h = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "";
                S.Authorization = "Basic " + btoa(f + ":" + h)
            }
            var C = o(c.baseURL, c.url);
            d.open(c.method.toUpperCase(), n(C, c.params, c.paramsSerializer), !0), d.timeout = c.timeout;

            function k() {
                if (d) {
                    var x = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
                        _ = !w || w === "text" || w === "json" ? d.responseText : d.response,
                        R = {data: _, status: d.status, statusText: d.statusText, headers: x, config: c, request: d};
                    t(g, p, R), d = null
                }
            }

            if ("onloadend" in d ? d.onloadend = k : d.onreadystatechange = function () {
                !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(k)
            }, d.onabort = function () {
                d && (p(s("Request aborted", c, "ECONNABORTED", d)), d = null)
            }, d.onerror = function () {
                p(s("Network Error", c, null, d)), d = null
            }, d.ontimeout = function () {
                var _ = "timeout of " + c.timeout + "ms exceeded";
                c.timeoutErrorMessage && (_ = c.timeoutErrorMessage), p(s(_, c, c.transitional && c.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", d)), d = null
            }, e.isStandardBrowserEnv()) {
                var $ = (c.withCredentials || l(C)) && c.xsrfCookieName ? r.read(c.xsrfCookieName) : void 0;
                $ && (S[c.xsrfHeaderName] = $)
            }
            "setRequestHeader" in d && e.forEach(S, function (_, R) {
                typeof m > "u" && R.toLowerCase() === "content-type" ? delete S[R] : d.setRequestHeader(R, _)
            }), e.isUndefined(c.withCredentials) || (d.withCredentials = !!c.withCredentials), w && w !== "json" && (d.responseType = c.responseType), typeof c.onDownloadProgress == "function" && d.addEventListener("progress", c.onDownloadProgress), typeof c.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", c.onUploadProgress), c.cancelToken && c.cancelToken.promise.then(function (_) {
                d && (d.abort(), p(_), d = null)
            }), m || (m = null), d.send(m)
        })
    }, Lu
}

var Ke = It, w0 = xI, AI = sw, II = {"Content-Type": "application/x-www-form-urlencoded"};

function S0(e, t) {
    !Ke.isUndefined(e) && Ke.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
}

function jI() {
    var e;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = y0()), e
}

function LI(e, t, r) {
    if (Ke.isString(e)) try {
        return (t || JSON.parse)(e), Ke.trim(e)
    } catch (n) {
        if (n.name !== "SyntaxError") throw n
    }
    return (0, JSON.stringify)(e)
}

var ys = {
    transitional: {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    adapter: jI(),
    transformRequest: [function (t, r) {
        return w0(r, "Accept"), w0(r, "Content-Type"), Ke.isFormData(t) || Ke.isArrayBuffer(t) || Ke.isBuffer(t) || Ke.isStream(t) || Ke.isFile(t) || Ke.isBlob(t) ? t : Ke.isArrayBufferView(t) ? t.buffer : Ke.isURLSearchParams(t) ? (S0(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : Ke.isObject(t) || r && r["Content-Type"] === "application/json" ? (S0(r, "application/json"), LI(t)) : t
    }],
    transformResponse: [function (t) {
        var r = this.transitional, n = r && r.silentJSONParsing, o = r && r.forcedJSONParsing,
            a = !n && this.responseType === "json";
        if (a || o && Ke.isString(t) && t.length) try {
            return JSON.parse(t)
        } catch (l) {
            if (a) throw l.name === "SyntaxError" ? AI(l, this, "E_JSON_PARSE") : l
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
        return t >= 200 && t < 300
    }
};
ys.headers = {common: {Accept: "application/json, text/plain, */*"}};
Ke.forEach(["delete", "get", "head"], function (t) {
    ys.headers[t] = {}
});
Ke.forEach(["post", "put", "patch"], function (t) {
    ys.headers[t] = Ke.merge(II)
});
var Df = ys, NI = It, DI = Df, FI = function (t, r, n) {
    var o = this || DI;
    return NI.forEach(n, function (l) {
        t = l.call(o, t, r)
    }), t
}, Nu, C0;

function cw() {
    return C0 || (C0 = 1, Nu = function (t) {
        return !!(t && t.__CANCEL__)
    }), Nu
}

var b0 = It, Du = FI, BI = cw(), zI = Df;

function Fu(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
}

var HI = function (t) {
    Fu(t), t.headers = t.headers || {}, t.data = Du.call(t, t.data, t.headers, t.transformRequest), t.headers = b0.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), b0.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (o) {
        delete t.headers[o]
    });
    var r = t.adapter || zI.adapter;
    return r(t).then(function (o) {
        return Fu(t), o.data = Du.call(t, o.data, o.headers, t.transformResponse), o
    }, function (o) {
        return BI(o) || (Fu(t), o && o.response && (o.response.data = Du.call(t, o.response.data, o.response.headers, t.transformResponse))), Promise.reject(o)
    })
}, Je = It, dw = function (t, r) {
    r = r || {};
    var n = {}, o = ["url", "method", "data"], a = ["headers", "auth", "proxy", "params"],
        l = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
        s = ["validateStatus"];

    function u(p, m) {
        return Je.isPlainObject(p) && Je.isPlainObject(m) ? Je.merge(p, m) : Je.isPlainObject(m) ? Je.merge({}, m) : Je.isArray(m) ? m.slice() : m
    }

    function c(p) {
        Je.isUndefined(r[p]) ? Je.isUndefined(t[p]) || (n[p] = u(void 0, t[p])) : n[p] = u(t[p], r[p])
    }

    Je.forEach(o, function (m) {
        Je.isUndefined(r[m]) || (n[m] = u(void 0, r[m]))
    }), Je.forEach(a, c), Je.forEach(l, function (m) {
        Je.isUndefined(r[m]) ? Je.isUndefined(t[m]) || (n[m] = u(void 0, t[m])) : n[m] = u(void 0, r[m])
    }), Je.forEach(s, function (m) {
        m in r ? n[m] = u(t[m], r[m]) : m in t && (n[m] = u(void 0, t[m]))
    });
    var v = o.concat(a).concat(l).concat(s), g = Object.keys(t).concat(Object.keys(r)).filter(function (m) {
        return v.indexOf(m) === -1
    });
    return Je.forEach(g, c), n
};
const VI = "axios", WI = "0.21.4", UI = "Promise based HTTP client for the browser and node.js", KI = "index.js", GI = {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
    }, YI = {type: "git", url: "https://github.com/axios/axios.git"}, XI = ["xhr", "http", "ajax", "promise", "node"],
    qI = "Matt Zabriskie", ZI = "MIT", QI = {url: "https://github.com/axios/axios/issues"},
    JI = "https://axios-http.com", e6 = {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
    }, t6 = {"./lib/adapters/http.js": "./lib/adapters/xhr.js"}, r6 = "dist/axios.min.js", n6 = "dist/axios.min.js",
    o6 = "./index.d.ts", i6 = {"follow-redirects": "^1.14.0"}, a6 = [{path: "./dist/axios.min.js", threshold: "5kB"}],
    l6 = {
        name: VI,
        version: WI,
        description: UI,
        main: KI,
        scripts: GI,
        repository: YI,
        keywords: XI,
        author: qI,
        license: ZI,
        bugs: QI,
        homepage: JI,
        devDependencies: e6,
        browser: t6,
        jsdelivr: r6,
        unpkg: n6,
        typings: o6,
        dependencies: i6,
        bundlesize: a6
    };
var fw = l6, Ff = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
    Ff[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
var E0 = {}, s6 = fw.version.split(".");

function vw(e, t) {
    for (var r = t ? t.split(".") : s6, n = e.split("."), o = 0; o < 3; o++) {
        if (r[o] > n[o]) return !0;
        if (r[o] < n[o]) return !1
    }
    return !1
}

Ff.transitional = function (t, r, n) {
    var o = r && vw(r);

    function a(l, s) {
        return "[Axios v" + fw.version + "] Transitional option '" + l + "'" + s + (n ? ". " + n : "")
    }

    return function (l, s, u) {
        if (t === !1) throw new Error(a(s, " has been removed in " + r));
        return o && !E0[s] && (E0[s] = !0, console.warn(a(s, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(l, s, u) : !0
    }
};

function u6(e, t, r) {
    if (typeof e != "object") throw new TypeError("options must be an object");
    for (var n = Object.keys(e), o = n.length; o-- > 0;) {
        var a = n[o], l = t[a];
        if (l) {
            var s = e[a], u = s === void 0 || l(s, a, e);
            if (u !== !0) throw new TypeError("option " + a + " must be " + u);
            continue
        }
        if (r !== !0) throw Error("Unknown option " + a)
    }
}

var c6 = {isOlderVersion: vw, assertOptions: u6, validators: Ff}, pw = It, d6 = lw, k0 = EI, x0 = HI, ws = dw, hw = c6,
    eo = hw.validators;

function da(e) {
    this.defaults = e, this.interceptors = {request: new k0, response: new k0}
}

da.prototype.request = function (t) {
    typeof t == "string" ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = ws(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var r = t.transitional;
    r !== void 0 && hw.assertOptions(r, {
        silentJSONParsing: eo.transitional(eo.boolean, "1.0.0"),
        forcedJSONParsing: eo.transitional(eo.boolean, "1.0.0"),
        clarifyTimeoutError: eo.transitional(eo.boolean, "1.0.0")
    }, !1);
    var n = [], o = !0;
    this.interceptors.request.forEach(function (p) {
        typeof p.runWhen == "function" && p.runWhen(t) === !1 || (o = o && p.synchronous, n.unshift(p.fulfilled, p.rejected))
    });
    var a = [];
    this.interceptors.response.forEach(function (p) {
        a.push(p.fulfilled, p.rejected)
    });
    var l;
    if (!o) {
        var s = [x0, void 0];
        for (Array.prototype.unshift.apply(s, n), s = s.concat(a), l = Promise.resolve(t); s.length;) l = l.then(s.shift(), s.shift());
        return l
    }
    for (var u = t; n.length;) {
        var c = n.shift(), v = n.shift();
        try {
            u = c(u)
        } catch (g) {
            v(g);
            break
        }
    }
    try {
        l = x0(u)
    } catch (g) {
        return Promise.reject(g)
    }
    for (; a.length;) l = l.then(a.shift(), a.shift());
    return l
};
da.prototype.getUri = function (t) {
    return t = ws(this.defaults, t), d6(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
};
pw.forEach(["delete", "get", "head", "options"], function (t) {
    da.prototype[t] = function (r, n) {
        return this.request(ws(n || {}, {method: t, url: r, data: (n || {}).data}))
    }
});
pw.forEach(["post", "put", "patch"], function (t) {
    da.prototype[t] = function (r, n, o) {
        return this.request(ws(o || {}, {method: t, url: r, data: n}))
    }
});
var f6 = da, Bu, $0;

function mw() {
    if ($0) return Bu;
    $0 = 1;

    function e(t) {
        this.message = t
    }

    return e.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, e.prototype.__CANCEL__ = !0, Bu = e, Bu
}

var zu, _0;

function v6() {
    if (_0) return zu;
    _0 = 1;
    var e = mw();

    function t(r) {
        if (typeof r != "function") throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function (l) {
            n = l
        });
        var o = this;
        r(function (l) {
            o.reason || (o.reason = new e(l), n(o.reason))
        })
    }

    return t.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, t.source = function () {
        var n, o = new t(function (l) {
            n = l
        });
        return {token: o, cancel: n}
    }, zu = t, zu
}

var Hu, T0;

function p6() {
    return T0 || (T0 = 1, Hu = function (t) {
        return function (n) {
            return t.apply(null, n)
        }
    }), Hu
}

var Vu, O0;

function h6() {
    return O0 || (O0 = 1, Vu = function (t) {
        return typeof t == "object" && t.isAxiosError === !0
    }), Vu
}

var P0 = It, m6 = ow, cl = f6, g6 = dw, y6 = Df;

function gw(e) {
    var t = new cl(e), r = m6(cl.prototype.request, t);
    return P0.extend(r, cl.prototype, t), P0.extend(r, t), r
}

var Xt = gw(y6);
Xt.Axios = cl;
Xt.create = function (t) {
    return gw(g6(Xt.defaults, t))
};
Xt.Cancel = mw();
Xt.CancelToken = v6();
Xt.isCancel = cw();
Xt.all = function (t) {
    return Promise.all(t)
};
Xt.spread = p6();
Xt.isAxiosError = h6();
jf.exports = Xt;
jf.exports.default = Xt;
var w6 = jf.exports, S6 = w6;
const yw = Xi(S6), Le = "https://fishing-game2.online/api/like/";
yw.defaults.headers.common["x-vk"] = window.location.href;

class C6 {
    async send(t, r = "GET", n, o = {}) {
        const a = await yw({method: r, url: `${t}${n}`, data: o}).catch(l => {
            console.error("Error API:", l)
        });
        return a ? a.data : []
    }

    async GetUser() {
        const t = window.location.hash.replace("#", ""), r = new URLSearchParams(t),
            n = Object.fromEntries(r.entries());
        let o = [];
        for (const s of new URLSearchParams(n.tgWebAppData)) {
            const [u, c] = s;
            o.push({key: u, value: c})
        }
        o = o.reduce((s, u) => Object.assign(s, {[u.key]: u.value}), {});
        const a = o.start_param;
        window.Telegram.WebApp.expand();
        const l = await this.send(Le, "GET", "getUser?ref=" + a, null);
        return console.log("API: ", "GetUser", l), l
    }

    async GetRewards() {
        const t = await this.send(Le, "GET", "getRewards", null);
        return console.log("API: ", "GetRewards", t), t
    }

    async ClaimReward(t) {
        const r = await this.send(Le, "GET", "claimReward?type=" + t, null);
        return console.log("API: ", "ClaimReward", r), r
    }

    async GetTop() {
        const t = await this.send(Le, "GET", "getTop", null);
        return console.log("API: ", "GetTop", t), t
    }

    async GetDailyTop() {
        const t = await this.send(Le, "GET", "getDailyTop", null);
        return console.log("API: ", "GetDailyTop", t), t
    }

    async SetTK(t) {
        const r = await this.send(Le, "POST", "setTK", t);
        return console.log("API: ", "SetTK", r), r
    }

    async Withdraw(t) {
        const r = await this.send(Le, "POST", "withdraw", t);
        return console.log("API: ", "Withdraw", r), r
    }

    async GetInvited() {
        const t = await this.send(Le, "GET", "getInvited", null);
        return console.log("API: ", "GetInvited", t), t
    }

    async GetFriendsTop(t) {
        const r = await this.send(Le, "POST", "getFriendsTop", t);
        return console.log("API: ", "GetFriendsTop", r), r
    }

    async Cmp(t) {
        const r = await this.send(Le, "POST", "cmp", t);
        return console.log("API: ", "Cmp", r), r
    }

    async PostStory(t) {
        const r = await this.send(Le, "POST", "postStory", t);
        return console.log("API: ", "PostStory", r), r
    }

    async PromoteZone(t) {
        const r = await this.send(Le, "POST", "promoteZone", t);
        return console.log("API: ", "PromoteZone", r), r
    }

    async BuyPrisoner(t) {
        const r = await this.send(Le, "POST", "buyPrisoner", t);
        return console.log("API: ", "BuyPrisoner", r), r
    }

    async GetSubscribeReward(t) {
        const r = await this.send(Le, "POST", "getSubscribeReward", t);
        return console.log("API: ", "GetSubscribeReward", r), r
    }

    async AcceptPrisoner(t) {
        const r = await this.send(Le, "POST", "acceptPrisoner", t);
        return console.log("API: ", "AcceptPrisoner", r), r
    }

    async DeclinePrisoner(t) {
        const r = await this.send(Le, "POST", "declinePrisoner", t);
        return console.log("API: ", "DeclinePrisoner", r), r
    }

    async SeenAd(t) {
        const r = await this.send(Le, "POST", "seenAd", t);
        return console.log("API: ", "SeenAd", r), r
    }

    async SeenAd2(t) {
        console.log(t);
        const r = await this.send(Le, "POST", "seenAd2", t);
        return console.log("API: ", "SeenAd2", r), r
    }

    async SimplePost(t) {
        const r = await this.send(Le, "POST", "post", t);
        return console.log("API: ", "SimplePost", r), r
    }
}

const wi = "" + new URL("logo-BR7o5Vfi.png", import.meta.url).href, b6 = e => {
    var c;
    const {fetchedUser: t, user: r, pagination: n, pagination3: o, rewards: a} = e.state, [l, s] = E.useState(!0);
    let u = wi;
    return E.useEffect(() => {
        console.log(l), setInterval(() => {
            s(v => !v), console.log(l)
        }, 5e3)
    }, []), b.jsxs(Ho, {
        id: e.id,
        children: [b.jsxs(he, {
            children: [b.jsx("br", {}), b.jsx(Ln, {
                Component: "span",
                weight: "semibold",
                level: "1",
                style: {fontSize: 30, display: "flex", justifyContent: "center", textAlign: "center", marginTop: 15},
                children: b.jsxs("div", {
                    style: {display: "flex", color: "#FFFFFF"},
                    children: [r.banana.toFixed(3), b.jsx("img", {
                        style: {marginTop: -10},
                        width: 48,
                        height: 48,
                        alt: "",
                        src: u
                    })]
                })
            })]
        }), e.state.timer && b.jsx(he, {
            children: b.jsx(yt, {
                disabled: e.state.user.ads_reload2,
                stretched: !0,
                size: "s",
                style: {marginTop: -10},
                onClick: e.showAds2,
                mode: "primary",
                children: e.state.user.ads_reload2 ? `Claim in ${e.state.user.ads_reload2 > 60 ? `1h ${e.state.user.ads_reload2 - 60}m` : `${e.state.user.ads_reload2}m`}` : "CLAIM 0.001 $LK"
            })
        }), e.state.timer && b.jsx(he, {
            children: b.jsx(yt, {
                disabled: e.state.user.ads_reload,
                stretched: !0,
                before: b.jsx(b5, {}),
                size: "s",
                appearance: "positive",
                style: {marginTop: -10},
                onClick: e.showAds,
                mode: "primary",
                children: e.state.user.ads_reload ? `Claim in ${e.state.user.ads_reload > 60 ? `1h ${e.state.user.ads_reload - 60}m` : `${e.state.user.ads_reload}m`}` : "Watch ads and claim 0.01 $LK"
            })
        }), e.state.timer && b.jsxs(b.Fragment, {
            children: [b.jsx(i0, {
                size: "m",
                header: "Wallet for airdrop",
                subheader: b.jsx("span", {children: "Specify the wallet for your airdrop"}),
                actions: b.jsx(yt, {
                    mode: "primary", size: "m", style: {borderRadius: 50}, onClick: () => {
                        r.ton_wallet, e.openModal("main")
                    }, children: "Enter"
                })
            }), b.jsx(i0, {
                size: "m",
                header: "Mining community",
                subheader: b.jsx("span", {children: "Home for Telegram $LK"}),
                actions: b.jsx(yt, {
                    mode: "primary", size: "m", style: {borderRadius: 50}, onClick: () => {
                        window.Telegram.WebApp.openTelegramLink("https://t.me/likecoin_main"), e.claimReward()
                    }, children: "Join"
                })
            }), b.jsx(he, {
                children: b.jsx(yt, {
                    stretched: !0,
                    style: {marginTop: 10},
                    size: "s",
                    before: b.jsx(T5, {}),
                    mode: "primary",
                    onClick: () => {
                        window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=https://t.me/likedrop_bot/like?startapp=${r.vk_id}&text=Join the mining!`)
                    },
                    children: "Invite friends"
                })
            })]
        }), e.state.snackbar, b.jsx(he, {
            children: b.jsxs(un, {
                style: {
                    fontSize: 15,
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 0
                }, children: ["Get 100% $LK from friends' farming ", b.jsx("br", {}), " and 0.05 for each invitee"]
            })
        }), b.jsx(he, {
            children: b.jsxs(If, {
                header: b.jsx(Qc, {children: "Your rewards"}),
                children: [b.jsx(Tr, {
                    disabled: !0,
                    before: b.jsx(Pn, {size: 48, src: wi}),
                    after: b.jsxs("span", {children: ["+ ", (r.refs_count * .05).toFixed(3) || 0, " $LK"]}),
                    subtitle: b.jsx("span", {children: r.refs_count || 0}),
                    children: "Miners invited"
                }), b.jsx(Tr, {
                    disabled: !0,
                    before: b.jsx(Pn, {size: 48, src: wi}),
                    after: b.jsxs("span", {children: ["+ ", r.refs_reward || 0, " $LK"]}),
                    children: "Referral admission"
                }), (c = e.state.rewards) == null ? void 0 : c.map((v, g) => b.jsx(Tr, {
                    disabled: !0,
                    before: b.jsx(Pn, {size: 48, src: wi}),
                    after: b.jsxs("span", {children: ["+ ", v.count, " $LK"]}),
                    children: v.name
                }, g))]
            })
        })]
    })
}, E6 = e => {
    const {getTop: t, state: r, getFriendsID: n} = e, {top: o} = r;
    return o || t(), b.jsxs(Ho, {
        id: e.id,
        children: [b.jsx(ca, {
            left: !1,
            children: "Leaderboard"
        }), b.jsx(cn, {}), b.jsx("div", {style: {marginTop: 5}}), o ? o != null && o.length ? o.map((a, l) => {
            var s, u, c, v, g;
            return b.jsxs("div", {
                children: [r.activeTab === "zones" ? b.jsx(Tr, {
                    before: b.jsx(Pn, {
                        size: 45,
                        src: a.avatar
                    }),
                    after: b.jsx(Jc, {children: i + 1}),
                    description: `Уровень зоны: ${a.zone_level}, заключенных ${a.zone_prisoners_count}`,
                    children: a.name
                }) : b.jsx(Tr, {
                    disabled: !0,
                    onClick: () => {
                    },
                    after: b.jsx(J1, {
                        size: 45,
                        gradientColor: (a == null ? void 0 : a.vk_id) % 6 + 1,
                        children: ((s = a == null ? void 0 : a.name) == null ? void 0 : s.split(" ").length) > 1 ? `${(u = a == null ? void 0 : a.name) == null ? void 0 : u.split(" ")[0].slice(0, 1)}${(c = a == null ? void 0 : a.name) == null ? void 0 : c.split(" ")[1].slice(0, 1)}` : (v = a == null ? void 0 : a.name) == null ? void 0 : v.slice(0, 2)
                    }),
                    before: b.jsx(he, {
                        children: b.jsx(he, {
                            children: b.jsx(Jc, {
                                style: {marginLeft: l < 3 && -10},
                                children: l === 0 ? b.jsx(D1, {}) : l === 1 ? b.jsx(F1, {}) : l === 2 ? b.jsx(B1, {}) : l + 1
                            })
                        })
                    }),
                    description: b.jsx("div", {children: b.jsxs("div", {children: ["Balance ", a.banana.toFixed(3) || 0, " $LK"]})}),
                    children: b.jsx("div", {style: {display: "flex"}, children: b.jsx("div", {children: a.name})})
                }), l !== ((g = e.state.top) == null ? void 0 : g.length) - 1 && b.jsx(cn, {})]
            }, l)
        }) : b.jsx(To, {children: "Ошибка при загрузке данных"}) : b.jsx(he, {children: b.jsx(Vo, {})}), o && b.jsxs(To, {children: [r.activeTab === "all" ? o.length : o == null ? void 0 : o.length, " users"]}), r.snackbar]
    })
}, k6 = e => {
    const [t, r] = E.useState(""), {state: n} = e, o = n.daily_top, a = () => {
        const l = new Date, u = new Date(l.getFullYear(), l.getMonth(), l.getDate(), 26, 59, 59, 999) - l;
        if (u > 0) {
            const c = {
                hours: Math.floor(u / 36e5 % 24),
                minutes: Math.floor(u / 1e3 / 60 % 60),
                seconds: Math.floor(u / 1e3 % 60)
            };
            r(`${c.hours < 10 ? `0${c.hours}` : c.hours}:${c.minutes < 10 ? `0${c.minutes}` : c.minutes}:${c.seconds < 10 ? `0${c.seconds}` : c.seconds}`)
        } else r("00:00:00")
    };
    return E.useEffect(() => {
        e.getDailyTop(), a();
        const l = setInterval(a, 1e3);
        return () => clearInterval(l)
    }, []), b.jsxs(Ho, {
        id: e.id, children: [e.state.snackbar, b.jsx(ca, {
            left: b.jsx(xr, {
                onClick: () => {
                    e.setPState({activePanel: "home"})
                }, children: b.jsx(E5, {})
            }),
            right: b.jsx(he, {style: {marginLeft: 5}, children: t}),
            children: b.jsx("div", {style: {display: "flex"}, children: "$NOT contest"})
        }), b.jsx(he, {
            children: b.jsx(yt, {
                stretched: !0, onClick: () => {
                    window.Telegram.WebApp.openTelegramLink("https://t.me/freestxv")
                }, children: "Payment proofs"
            })
        }), b.jsx("div", {}), o ? o.length ? o.map((l, s) => {
            var c, v, g, p, m;
            const u = {1: 200, 2: 100, 3: 50, 4: 30, 5: 25, 6: 20, 7: 15, 8: 14, 9: 12, 10: 10};
            return b.jsxs("div", {
                children: [b.jsx(Tr, {
                    disabled: !0,
                    after: b.jsx(J1, {
                        size: 45,
                        gradientColor: (l == null ? void 0 : l.vk_id) % 6 + 1,
                        children: ((c = l == null ? void 0 : l.name) == null ? void 0 : c.split(" ").length) > 1 ? `${(v = l == null ? void 0 : l.name) == null ? void 0 : v.split(" ")[0].slice(0, 1)}${(g = l == null ? void 0 : l.name) == null ? void 0 : g.split(" ")[1].slice(0, 1)}` : (p = l == null ? void 0 : l.name) == null ? void 0 : p.slice(0, 2)
                    }),
                    before: b.jsxs(he, {
                        children: [b.jsx(he, {
                            children: b.jsx(Jc, {
                                style: {marginLeft: s < 3 && -10},
                                children: s === 0 ? b.jsxs(b.Fragment, {
                                    children: [b.jsx(D1, {}), b.jsx("br", {}), b.jsxs("div", {
                                        style: {
                                            marginTop: 5,
                                            color: "#e2b542"
                                        }, children: [u[s + 1], " $NOT"]
                                    })]
                                }) : s === 1 ? b.jsxs(b.Fragment, {
                                    children: [b.jsx(F1, {}), b.jsx("br", {}), b.jsxs("div", {
                                        style: {
                                            marginTop: 5,
                                            color: "#e2b542"
                                        }, children: [u[s + 1], " $NOT"]
                                    })]
                                }) : s === 2 ? b.jsxs(b.Fragment, {
                                    children: [b.jsx(B1, {}), b.jsx("br", {}), b.jsxs("div", {
                                        style: {
                                            marginTop: 5,
                                            color: "#e2b542"
                                        }, children: [u[s + 1], " $NOT"]
                                    })]
                                }) : u[s + 1] ? b.jsxs(b.Fragment, {
                                    children: [s + 1, b.jsx("br", {}), b.jsxs("div", {
                                        style: {
                                            marginTop: 5,
                                            color: "#e2b542"
                                        }, children: [u[s + 1], " $NOT"]
                                    })]
                                }) : s + 1
                            })
                        }), b.jsx(yt, {
                            onClick: () => e.showAdsBoost(l == null ? void 0 : l.vk_id),
                            children: "Boost rank"
                        })]
                    }),
                    description: b.jsx("div", {children: b.jsxs("div", {children: ["Balance ", l.balance_today || 0, " $LK"]})}),
                    children: b.jsx("div", {style: {display: "flex"}, children: b.jsx("div", {children: l.name})})
                }), s !== ((m = e.state.top) == null ? void 0 : m.length) - 1 && b.jsx(cn, {})]
            }, s)
        }) : b.jsx(To, {children: "Ошибка при загрузке данных"}) : b.jsx(he, {children: b.jsx(Vo, {})}), o && b.jsxs(To, {children: [o.length, " users"]}), e.state.snackbar]
    })
}, x6 = e => {
    var a, l;
    const [t, r] = ur.useState(e.user.banana), [n, o] = ur.useState(e.user.banana / .02);
    return b.jsxs(Ho, {
        id: e.id,
        children: [e.state.snackbar, b.jsx(ca, {children: "Pool $LK"}), b.jsx(Ln, {
            Component: "span",
            weight: "semibold",
            level: "1",
            style: {fontSize: 30, display: "flex", justifyContent: "center", textAlign: "center", marginTop: 20},
            children: b.jsxs("span", {
                children: ["There is $LK left ", b.jsx("br", {}), " ", b.jsx("div", {
                    style: {marginTop: 10},
                    children: "before the drop distribution!"
                })]
            })
        }), b.jsx("br", {}), b.jsxs(Ln, {
            Component: "span",
            weight: "semibold",
            level: "1",
            style: {fontSize: 30, display: "flex", justifyContent: "center", textAlign: "center", marginTop: 30},
            children: [(205e5 - parseFloat((l = (a = e == null ? void 0 : e.state) == null ? void 0 : a.user) == null ? void 0 : l.total_coins) || 0).toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), b.jsx("img", {
                style: {marginTop: -10},
                width: 48,
                height: 48,
                alt: "",
                src: wi
            })]
        }), b.jsx(To, {children: "As soon as all the coins are distributed among the players, you will receive a drop."}), b.jsx(he, {
            style: {fontSize: 30},
            children: "Swap"
        }), b.jsx(cn, {}), b.jsxs(If, {
            children: [b.jsx(Tr, {
                children: b.jsx(o0, {
                    header: "Minimum withdrawal",
                    children: "25 DOGS"
                })
            }), b.jsx(Tr, {children: b.jsx(o0, {header: "Gas commission", children: "10 DOGS"})})]
        }), b.jsxs(ew, {
            children: [b.jsx(_n, {
                top: "From $LK", children: b.jsx(Yi, {
                    value: t, onChange: s => {
                        const u = s.currentTarget.value;
                        if (u > e.user.banana) {
                            r(e.user.banana), o(e.user.banana / .02);
                            return
                        }
                        r(u), o(u / .02)
                    }
                })
            }), b.jsx(_n, {
                top: "to $DOGS", children: b.jsx(Yi, {
                    value: n, onChange: s => {
                        const u = s.currentTarget.value;
                        o(u), r(u * .02)
                    }
                })
            }), b.jsx(_n, {
                children: b.jsx(yt, {
                    disabled: !t, stretched: !0, size: "l", onClick: () => {
                        e.withdraw(t)
                    }, children: "Send request"
                })
            }), b.jsx(_n, {
                children: b.jsx(yt, {
                    stretched: !0, size: "l", mode: "outline", onClick: () => {
                        window.Telegram.WebApp.openTelegramLink("https://t.me/likecoin_main/74")
                    }, children: "What is it?"
                })
            })]
        }), e.state.snackbar]
    })
}, $6 = e => {
    const [t, r] = E.useState(void 0);
    return b.jsx(Gi, {
        id: "main",
        onClose: e.closeModal,
        header: b.jsx(Ul, {
            left: Gr && b.jsx(xr, {onClick: e.closeModal, children: b.jsx(Nn, {})}),
            right: b.jsx(xr, {onClick: e.closeModal, children: Gr ? null : b.jsx(he, {children: "Close"})}),
            children: "One important point"
        }),
        children: b.jsxs(he, {
            children: [b.jsxs(XA, {children: ["To send the airdrop, we need your TonKeeper address", b.jsx("br", {}), "You can enter it in the field below"]}), b.jsx(_n, {
                top: "TonKeeper address",
                children: b.jsx(Yi, {
                    value: t === void 0 ? e.state.user.ton_wallet : t,
                    placeholder: "Enter here..",
                    onChange: n => r(n.target.value)
                })
            }), b.jsx(yt, {
                disabled: !t, size: "l", stretched: !0, onClick: () => {
                    e.setTK(t)
                }, children: "Save"
            })]
        })
    })
}, _6 = e => {
    var t, r;
    return b.jsx(Gi, {
        id: "cmp",
        onClose: e.closeModal,
        header: b.jsx(Ul, {
            left: Gr && b.jsx(xr, {onClick: e.closeModal, children: b.jsx(Nn, {})}),
            right: b.jsx(xr, {onClick: e.closeModal, children: Gr ? null : b.jsx(he, {children: "Закрыть"})}),
            children: "Уменьшитель"
        }),
        children: b.jsxs(he, {
            children: [b.jsxs(ew, {
                children: [b.jsx(_n, {
                    top: "На сколько уменьшаем?",
                    children: b.jsx(Yi, {
                        value: e.state.cmpV, onChange: n => {
                            var o, a;
                            e.setPState({cmpV: n.currentTarget.value > ((o = e.state.user) == null ? void 0 : o.compressions) ? (a = e.state.user) == null ? void 0 : a.compressions : n.currentTarget.value})
                        }
                    })
                }), b.jsx(_n, {
                    children: b.jsx(yt, {
                        disabled: e.state.copied, size: "l", stretched: !0, onClick: () => {
                            e.api.Cmp({vk_id: e.state.selected_vk_id, value: e.state.cmpV}).then(n => {
                                if (n === "ok") {
                                    window.openDoneSnackBar("Банан пользователя уменьшен! ");
                                    const o = e.state.user;
                                    o.compressions = o.compressions - e.state.cmpV, e.setPState({user: o}), e.closeModal()
                                } else window.openErrorSnackBar(n.toString()), e.closeModal()
                            }), _t.send("VKWebAppTapticNotificationOccurred", {type: "success"})
                        }, before: b.jsx(_5, {}), children: "Уменьшить банан"
                    })
                })]
            }), b.jsxs(To, {children: ["Вам доступно ", ((r = (t = e.state.user) == null ? void 0 : t.compressions) == null ? void 0 : r.toFixed(2)) || 0, " см. уменьшителя"]})]
        })
    })
};

class T6 extends E.Component {
    constructor(r) {
        super(r);
        Ae(this, "initHelpers", () => {
            window.startLoad = () => {
                this.setState({popout: b.jsx(Z5, {})})
            }, window.endLoad = () => {
                this.setState({popout: null})
            }, window.openDoneSnackBar = this.openDoneSnackBar, window.openErrorSnackBar = this.openErrorSnackBar
        });
        Ae(this, "getUser", () => {
            this.api.GetUser().then(r => {
                r.vk_id ? (r != null && r.sub_show && this.setState({modal: null}), this.setState({user: r || {}}), this.getRewards()) : this.openErrorSnackBar(r.error || r)
            })
        });
        Ae(this, "getRewards", () => {
            this.api.GetRewards().then(r => {
                this.setState({rewards: r || {}})
            })
        });
        Ae(this, "claimReward", r => {
            this.api.ClaimReward(r).then(n => {
                this.getUser()
            })
        });
        Ae(this, "setTK", async r => {
            (await this.api.SetTK({wallet: r})).status && this.setState({modal: null}), this.getUser()
        });
        Ae(this, "withdraw", async r => {
            if (r < .5) {
                window.openErrorSnackBar("Minimum withdrawal 25 $DOGS");
                return
            }
            if (!this.state.user.ton_wallet) {
                this.openModal("main");
                return
            }
            if (r > this.state.user.banana) {
                window.openErrorSnackBar("You don`t have enough $LK");
                return
            }
            await this.api.Withdraw({amount_lk: r}) === "ok" ? (this.setState({modal: null}), window.openDoneSnackBar("Request sent successfully!")) : window.openErrorSnackBar("Request failed!"), this.getUser()
        });
        Ae(this, "showAdsBoost", async r => {
            var n, o;
            if (await this.getUser(), ((n = this.state.user) == null ? void 0 : n.promotes_today) >= 20) {
                this.openErrorSnackBar("Try again tomorrow");
                return
            }
            if ((o = this.state.user) != null && o.promotes_reload) {
                this.openErrorSnackBar(`Try again after ${this.state.user.promotes_reload} mins`);
                return
            }
            this.AdController.show().then(a => {
                this.api.SeenAd2({id: r}).then(l => {
                    typeof l == "string" && this.openDoneSnackBar("Boosted"), this.getDailyTop()
                })
            }).catch(a => {
            }), await this.getUser()
        });
        Ae(this, "showAds", async () => {
            var r, n;
            if (await this.getUser(), ((r = this.state.user) == null ? void 0 : r.ads_today) >= 20) {
                this.openErrorSnackBar("Try again tomorrow");
                return
            }
            if ((n = this.state.user) != null && n.ads_reload) {
                this.openErrorSnackBar(`Try again after ${this.state.user.ads_reload} mins`);
                return
            }
            await this.AdController.show().then(async o => {
                await this.api.SeenAd().then(a => {
                    a.includes("again") ? this.openErrorSnackBar(a) : this.openDoneSnackBar(`Earned ${a} $LK`), setTimeout(() => {
                        this.getUser()
                    }, 1e3)
                })
            }).catch(o => {
            }), setTimeout(() => {
                this.getUser()
            }, 1e3)
        });
        Ae(this, "showAds2", async () => {
            var r, n;
            if (await this.getUser(), ((r = this.state.user) == null ? void 0 : r.ads_today2) >= 20) {
                this.openErrorSnackBar("Try again tomorrow");
                return
            }
            if ((n = this.state.user) != null && n.ads_reload2) {
                this.openErrorSnackBar(`Try again after ${this.state.user.ads_reload2} mins`);
                return
            }
            await this.api.SeenAd2().then(o => {
                o.includes("again") ? this.openErrorSnackBar(o) : this.openDoneSnackBar(`Earned ${o} $LK`)
            }), setTimeout(() => {
                this.getUser()
            }, 1e3)
        });
        Ae(this, "getFriends", async () => {
            var r, n;
            if (this.state.token) {
                const o = await _t.send("VKWebAppCallAPIMethod", {
                    method: "friends.get",
                    params: {v: 5.21, fields: "photo_200", access_token: this.state.token}
                });
                return this.setState({friends: ((r = o == null ? void 0 : o.response) == null ? void 0 : r.items) || !1}), ((n = o == null ? void 0 : o.response) == null ? void 0 : n.items) || !1
            }
        });
        Ae(this, "getFriendsID", async () => {
            var r, n;
            if (this.state.token) {
                const o = await _t.send("VKWebAppCallAPIMethod", {
                    method: "friends.get",
                    params: {v: 5.21, lang: "ru", access_token: this.state.token}
                });
                return console.log(o), this.setState({friendsID: ((r = o == null ? void 0 : o.response) == null ? void 0 : r.items) || !1}), ((n = o == null ? void 0 : o.response) == null ? void 0 : n.items) || !1
            }
            return !1
        });
        Ae(this, "getTop", () => {
            this.api.GetTop().then(r => {
                r.length && this.setState({top: r})
            })
        });
        Ae(this, "getDailyTop", () => {
            this.api.GetDailyTop().then(r => {
                r.length && this.setState({daily_top: r})
            })
        });
        Ae(this, "go", r => {
            this.setState({activePanel: r})
        });
        Ae(this, "openDoneSnackBar", (r, n = 3e3) => {
            this.setState({
                snackbar: b.jsx(e0, {
                    layout: "vertical",
                    duration: n,
                    onClose: () => this.setState({snackbar: null}),
                    before: b.jsx(Pn, {
                        size: 24,
                        style: {backgroundColor: "#4bb34b"},
                        children: b.jsx(w5, {fill: "#fff", width: 14, height: 14})
                    }),
                    children: r
                })
            })
        });
        Ae(this, "openErrorSnackBar", (r, n = 3e3) => {
            this.setState({
                snackbar: b.jsx(e0, {
                    duration: n,
                    layout: "vertical",
                    onClose: () => this.setState({snackbar: null}),
                    before: b.jsx(Pn, {
                        size: 24,
                        style: {backgroundColor: "#FF0000"},
                        children: b.jsx(y5, {fill: "#fff", width: 14, height: 14})
                    }),
                    children: r || "Слишком много запросов в секунду. Попробуйте позже."
                })
            })
        });
        Ae(this, "closeModal", () => {
            this.setState({modal: null})
        });
        Ae(this, "openModal", r => {
            this.setState({modal: r})
        });
        Ae(this, "makeStory", () => {
            var n;
            let r = `https://vk.com/app7845675#${(n = this.state.user) == null ? void 0 : n.vk_id}`;
            _t.send("VKWebAppShowStoryBox", {
                background_type: "image",
                url: "https://sun9-70.userapi.com/impg/tSfTzsfgPEuf7SDju3mJ36rIeiLjGlrdXDKAkQ/Tm2vkMMZYbY.jpg?size=1456x1894&quality=96&sign=60197b88021c7f245f210e0ce4449310&type=album",
                attachment: {text: "go_to", type: "url", url: r}
            }).then(o => {
                console.log(o)
            })
        });
        this.state = {
            timer: "",
            activePanel: "home",
            activeStory: "home",
            slideIndex: 1,
            pagination: 2,
            pagination2: 3,
            pagination3: 2,
            cmpV: "",
            activeTab: "all",
            successSub: localStorage.getItem("successSub") || [],
            popout: null,
            modal: "start",
            snackbar: null,
            fetchedUser: {id: 1, first_name: "Test", last_name: "User"},
            user: !1,
            scheme: "space_gray"
        }, this.api = new C6, this.initHelpers(), this.AdController = window.Adsgram.init({blockId: "3014"})
    }

    componentDidMount() {
        window.Traffy.renderTasks(document.queryselector('#rew'));
        this.getUser(), setInterval(this.getUser, 2e4), _t.send("VKWebAppInit"), _t.subscribe(({
                                                                                                   detail: {
                                                                                                       type: o,
                                                                                                       data: a
                                                                                                   }
                                                                                               }) => {
            if (o === "VKWebAppUpdateConfig") {
                const l = document.createAttribute("scheme");
                l.value = a.scheme, document.body.attributes.setNamedItem(l), this.setState({scheme: a.scheme})
            }
            o === "VKWebAppGetUserInfoResult" && this.setState({fetchedUser: a}), o === "VKWebAppAccessTokenReceived" && (console.log(a), this.setState({token: a.access_token})), o === "VKWebAppShowStoryBoxResult" && this.api.PostStory().then(l => {
                if (typeof l == "number") {
                    window.openDoneSnackBar(`Бонус ${l} см. и 0.2 уменьшителя начилены!`, 15e3);
                    const s = this.state.user;
                    s.balance = s.balance + l, this.setState({user: s})
                } else window.openErrorSnackBar(l, 15e3)
            })
        });
        const r = () => {
            const o = new Date("August 15, 2025 12:00:00 GMT+0300").getTime(), a = new Date().getTime(), l = o - a,
                s = Math.floor(l / (1e3 * 60 * 60 * 24)), u = Math.floor(l % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
                c = Math.floor(l % (1e3 * 60 * 60) / (1e3 * 60)), v = Math.floor(l % (1e3 * 60) / 1e3);
            this.setState({timer: `${s}d ${u}h ${c}m ${v}s`}), l < 0 && (clearInterval(n), this.setState({timer: !1}))
        }, n = setInterval(r, 1e3);
        r()
    }

    render() {
        const {activePanel: r, activeStory: n, popout: o, scheme: a, modal: l, user: s} = this.state,
            u = {setPState: this.setState.bind(this), user: s}, c = b.jsxs(mA, {
                activeModal: l,
                onClose: this.closeModal,
                children: [b.jsx($6, {id: "main", ...this, ...u}), b.jsx(_6, {id: "cmp", ...this, ...u}), b.jsx(Gi, {
                    id: "start",
                    preventClose: !1,
                    onClose: () => {
                        this.openModal("start")
                    },
                    header: b.jsx(Ul, {
                        left: Gr && b.jsx(xr, {onClick: this.closeModal, children: b.jsx(Nn, {})}),
                        right: b.jsx(xr, {onClick: this.closeModal, children: Gr ? null : b.jsx(he, {children: "Close"})}),
                        children: "GET A BONUS"
                    }),
                    children: b.jsxs(he, {
                        children: [b.jsx(Qc, {
                            style: {
                                fontSize: 30,
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                                marginTop: 15
                            }, children: "Subscription bonus 0.1 $LK"
                        }), b.jsx(he, {
                            children: b.jsx(he, {
                                children: b.jsx(yt, {
                                    style: {backgroundColor: "#e2b542"},
                                    size: "l",
                                    stretched: !0,
                                    onClick: () => {
                                        window.Telegram.WebApp.openTelegramLink("https://t.me/likecoin_main")
                                    },
                                    children: b.jsx("div", {style: {color: "#FFFFFF", fontSize: 20}, children: "Earn $LK"})
                                })
                            })
                        })]
                    })
                }), b.jsx(Gi, {
                    id: "start2",
                    preventClose: !1,
                    onClose: () => {
                        this.openModal("start")
                    },
                    header: b.jsx(Ul, {
                        left: Gr && b.jsx(xr, {onClick: this.closeModal, children: b.jsx(Nn, {})}),
                        right: b.jsx(xr, {onClick: this.closeModal, children: Gr ? null : b.jsx(he, {children: "Close"})}),
                        children: "$NOT CONTEST"
                    }),
                    children: b.jsxs(he, {children: [b.jsx(Qc, {children: "Earn up to $300 NOT daily by inviting frens "}), b.jsx(he, {})]})
                })]
            }), v = ["home", "onboarding", "rate", "reward", "shop"].includes(r) ? [r] : ["home", r],
            p = {activePanel: r, activeStory: n, popout: o, modal: c, history: v, onSwipeBack: () => this.go("home")};
        return s ? b.jsx(l0, {
            scheme: "vkcom_dark",
            isWebView: !0,
            webviewType: "internal",
            children: b.jsxs(R1, {
                activeStory: n,
                tabbar: this.state.timer && b.jsxs(KR, {
                    children: [b.jsx($u, {
                        onClick: () => {
                            this.setState({activeStory: "home", activePanel: "home", snackbar: null})
                        }, selected: n === "home", children: b.jsx(M5, {width: 40, height: 40})
                    }), b.jsx($u, {
                        onClick: () => {
                            this.setState({activeStory: "rewards", snackbar: null})
                        }, selected: n === "rewards", children: b.jsx(O5, {width: 40, height: 40})
                    }), b.jsx($u, {
                        onClick: () => {
                            this.setState({activeStory: "rate", activePanel: "rate", snackbar: null})
                        }, selected: n === "rate", children: b.jsx(P5, {width: 40, height: 40})
                    })]
                }),
                children: [b.jsxs(Ua, {
                    id: "home", ...p,
                    children: [b.jsx(b6, {id: "home", ...this, ...u}), b.jsx(k6, {id: "top", ...this, ...u})]
                }), b.jsx(Ua, {
                    id: "rewards", ...p,
                    activePanel: "rewards",
                    children: b.jsx(x6, {id: "rewards", ...this, ...u})
                }), b.jsx(Ua, {id: "rate", ...p, children: b.jsx(E6, {id: "rate", ...this, ...u})})]
            })
        }) : b.jsx(l0, {
            scheme: a,
            isWebView: !0,
            children: b.jsx(Ua, {
                id: "load",
                activePanel: "load",
                children: b.jsx(Ho, {
                    id: "load",
                    children: b.jsx(he, {style: {marginTop: "75%"}, children: b.jsx(Vo, {})})
                })
            })
        })
    }
}

const O6 = b.jsx(zR, {children: b.jsx(nw, {children: b.jsx(T6, {})})});
XP.render(O6, document.getElementById("root"));
