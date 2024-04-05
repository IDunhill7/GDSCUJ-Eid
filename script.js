(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        r(n);
    new MutationObserver(n=>{
        for (const i of n)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(n) {
        const i = {};
        return n.integrity && (i.integrity = n.integrity),
        n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const i = t(n);
        fetch(n.href, i)
    }
}
)();
function Ud(A) {
    return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A
}
var nc = {
    exports: {}
}
  , fs = {}
  , ic = {
    exports: {}
}
  , O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn = Symbol.for("react.element")
  , Fd = Symbol.for("react.portal")
  , vd = Symbol.for("react.fragment")
  , md = Symbol.for("react.strict_mode")
  , Ed = Symbol.for("react.profiler")
  , yd = Symbol.for("react.provider")
  , Hd = Symbol.for("react.context")
  , Id = Symbol.for("react.forward_ref")
  , Sd = Symbol.for("react.suspense")
  , Ld = Symbol.for("react.memo")
  , Kd = Symbol.for("react.lazy")
  , Za = Symbol.iterator;
function xd(A) {
    return A === null || typeof A != "object" ? null : (A = Za && A[Za] || A["@@iterator"],
    typeof A == "function" ? A : null)
}
var sc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , oc = Object.assign
  , lc = {};
function dr(A, e, t) {
    this.props = A,
    this.context = e,
    this.refs = lc,
    this.updater = t || sc
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(A, e) {
    if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, e, "setState")
}
;
dr.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate")
}
;
function ac() {}
ac.prototype = dr.prototype;
function zl(A, e, t) {
    this.props = A,
    this.context = e,
    this.refs = lc,
    this.updater = t || sc
}
var Zl = zl.prototype = new ac;
Zl.constructor = zl;
oc(Zl, dr.prototype);
Zl.isPureReactComponent = !0;
var ja = Array.isArray
  , uc = Object.prototype.hasOwnProperty
  , jl = {
    current: null
}
  , Bc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function cc(A, e, t) {
    var r, n = {}, i = null, s = null;
    if (e != null)
        for (r in e.ref !== void 0 && (s = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e)
            uc.call(e, r) && !Bc.hasOwnProperty(r) && (n[r] = e[r]);
    var o = arguments.length - 2;
    if (o === 1)
        n.children = t;
    else if (1 < o) {
        for (var l = Array(o), a = 0; a < o; a++)
            l[a] = arguments[a + 2];
        n.children = l
    }
    if (A && A.defaultProps)
        for (r in o = A.defaultProps,
        o)
            n[r] === void 0 && (n[r] = o[r]);
    return {
        $$typeof: mn,
        type: A,
        key: i,
        ref: s,
        props: n,
        _owner: jl.current
    }
}
function Dd(A, e) {
    return {
        $$typeof: mn,
        type: A.type,
        key: e,
        ref: A.ref,
        props: A.props,
        _owner: A._owner
    }
}
function $l(A) {
    return typeof A == "object" && A !== null && A.$$typeof === mn
}
function Td(A) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + A.replace(/[=:]/g, function(t) {
        return e[t]
    })
}
var $a = /\/+/g;
function Rs(A, e) {
    return typeof A == "object" && A !== null && A.key != null ? Td("" + A.key) : e.toString(36)
}
function Qi(A, e, t, r, n) {
    var i = typeof A;
    (i === "undefined" || i === "boolean") && (A = null);
    var s = !1;
    if (A === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (A.$$typeof) {
            case mn:
            case Fd:
                s = !0
            }
        }
    if (s)
        return s = A,
        n = n(s),
        A = r === "" ? "." + Rs(s, 0) : r,
        ja(n) ? (t = "",
        A != null && (t = A.replace($a, "$&/") + "/"),
        Qi(n, e, t, "", function(a) {
            return a
        })) : n != null && ($l(n) && (n = Dd(n, t + (!n.key || s && s.key === n.key ? "" : ("" + n.key).replace($a, "$&/") + "/") + A)),
        e.push(n)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    ja(A))
        for (var o = 0; o < A.length; o++) {
            i = A[o];
            var l = r + Rs(i, o);
            s += Qi(i, e, t, l, n)
        }
    else if (l = xd(A),
    typeof l == "function")
        for (A = l.call(A),
        o = 0; !(i = A.next()).done; )
            i = i.value,
            l = r + Rs(i, o++),
            s += Qi(i, e, t, l, n);
    else if (i === "object")
        throw e = String(A),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Kn(A, e, t) {
    if (A == null)
        return A;
    var r = []
      , n = 0;
    return Qi(A, r, "", "", function(i) {
        return e.call(t, i, n++)
    }),
    r
}
function Od(A) {
    if (A._status === -1) {
        var e = A._result;
        e = e(),
        e.then(function(t) {
            (A._status === 0 || A._status === -1) && (A._status = 1,
            A._result = t)
        }, function(t) {
            (A._status === 0 || A._status === -1) && (A._status = 2,
            A._result = t)
        }),
        A._status === -1 && (A._status = 0,
        A._result = e)
    }
    if (A._status === 1)
        return A._result.default;
    throw A._result
}
var KA = {
    current: null
}
  , hi = {
    transition: null
}
  , Md = {
    ReactCurrentDispatcher: KA,
    ReactCurrentBatchConfig: hi,
    ReactCurrentOwner: jl
};
O.Children = {
    map: Kn,
    forEach: function(A, e, t) {
        Kn(A, function() {
            e.apply(this, arguments)
        }, t)
    },
    count: function(A) {
        var e = 0;
        return Kn(A, function() {
            e++
        }),
        e
    },
    toArray: function(A) {
        return Kn(A, function(e) {
            return e
        }) || []
    },
    only: function(A) {
        if (!$l(A))
            throw Error("React.Children.only expected to receive a single React element child.");
        return A
    }
};
O.Component = dr;
O.Fragment = vd;
O.Profiler = Ed;
O.PureComponent = zl;
O.StrictMode = md;
O.Suspense = Sd;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
O.cloneElement = function(A, e, t) {
    if (A == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var r = oc({}, A.props)
      , n = A.key
      , i = A.ref
      , s = A._owner;
    if (e != null) {
        if (e.ref !== void 0 && (i = e.ref,
        s = jl.current),
        e.key !== void 0 && (n = "" + e.key),
        A.type && A.type.defaultProps)
            var o = A.type.defaultProps;
        for (l in e)
            uc.call(e, l) && !Bc.hasOwnProperty(l) && (r[l] = e[l] === void 0 && o !== void 0 ? o[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = t;
    else if (1 < l) {
        o = Array(l);
        for (var a = 0; a < l; a++)
            o[a] = arguments[a + 2];
        r.children = o
    }
    return {
        $$typeof: mn,
        type: A.type,
        key: n,
        ref: i,
        props: r,
        _owner: s
    }
}
;
O.createContext = function(A) {
    return A = {
        $$typeof: Hd,
        _currentValue: A,
        _currentValue2: A,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    A.Provider = {
        $$typeof: yd,
        _context: A
    },
    A.Consumer = A
}
;
O.createElement = cc;
O.createFactory = function(A) {
    var e = cc.bind(null, A);
    return e.type = A,
    e
}
;
O.createRef = function() {
    return {
        current: null
    }
}
;
O.forwardRef = function(A) {
    return {
        $$typeof: Id,
        render: A
    }
}
;
O.isValidElement = $l;
O.lazy = function(A) {
    return {
        $$typeof: Kd,
        _payload: {
            _status: -1,
            _result: A
        },
        _init: Od
    }
}
;
O.memo = function(A, e) {
    return {
        $$typeof: Ld,
        type: A,
        compare: e === void 0 ? null : e
    }
}
;
O.startTransition = function(A) {
    var e = hi.transition;
    hi.transition = {};
    try {
        A()
    } finally {
        hi.transition = e
    }
}
;
O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
O.useCallback = function(A, e) {
    return KA.current.useCallback(A, e)
}
;
O.useContext = function(A) {
    return KA.current.useContext(A)
}
;
O.useDebugValue = function() {}
;
O.useDeferredValue = function(A) {
    return KA.current.useDeferredValue(A)
}
;
O.useEffect = function(A, e) {
    return KA.current.useEffect(A, e)
}
;
O.useId = function() {
    return KA.current.useId()
}
;
O.useImperativeHandle = function(A, e, t) {
    return KA.current.useImperativeHandle(A, e, t)
}
;
O.useInsertionEffect = function(A, e) {
    return KA.current.useInsertionEffect(A, e)
}
;
O.useLayoutEffect = function(A, e) {
    return KA.current.useLayoutEffect(A, e)
}
;
O.useMemo = function(A, e) {
    return KA.current.useMemo(A, e)
}
;
O.useReducer = function(A, e, t) {
    return KA.current.useReducer(A, e, t)
}
;
O.useRef = function(A) {
    return KA.current.useRef(A)
}
;
O.useState = function(A) {
    return KA.current.useState(A)
}
;
O.useSyncExternalStore = function(A, e, t) {
    return KA.current.useSyncExternalStore(A, e, t)
}
;
O.useTransition = function() {
    return KA.current.useTransition()
}
;
O.version = "18.2.0";
ic.exports = O;
var wr = ic.exports;
const kd = Ud(wr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd = wr
  , Rd = Symbol.for("react.element")
  , _d = Symbol.for("react.fragment")
  , Vd = Object.prototype.hasOwnProperty
  , Gd = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Pd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function fc(A, e, t) {
    var r, n = {}, i = null, s = null;
    t !== void 0 && (i = "" + t),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
    for (r in e)
        Vd.call(e, r) && !Pd.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps)
        for (r in e = A.defaultProps,
        e)
            n[r] === void 0 && (n[r] = e[r]);
    return {
        $$typeof: Rd,
        type: A,
        key: i,
        ref: s,
        props: n,
        _owner: Gd.current
    }
}
fs.Fragment = _d;
fs.jsx = fc;
fs.jsxs = fc;
nc.exports = fs;
var tA = nc.exports
  , Do = {}
  , gc = {
    exports: {}
}
  , bA = {}
  , dc = {
    exports: {}
}
  , wc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(A) {
    function e(E, x) {
        var D = E.length;
        E.push(x);
        A: for (; 0 < D; ) {
            var R = D - 1 >>> 1
              , P = E[R];
            if (0 < n(P, x))
                E[R] = x,
                E[D] = P,
                D = R;
            else
                break A
        }
    }
    function t(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var x = E[0]
          , D = E.pop();
        if (D !== x) {
            E[0] = D;
            A: for (var R = 0, P = E.length, DA = P >>> 1; R < DA; ) {
                var HA = 2 * (R + 1) - 1
                  , VA = E[HA]
                  , TA = HA + 1
                  , de = E[TA];
                if (0 > n(VA, D))
                    TA < P && 0 > n(de, VA) ? (E[R] = de,
                    E[TA] = D,
                    R = TA) : (E[R] = VA,
                    E[HA] = D,
                    R = HA);
                else if (TA < P && 0 > n(de, D))
                    E[R] = de,
                    E[TA] = D,
                    R = TA;
                else
                    break A
            }
        }
        return x
    }
    function n(E, x) {
        var D = E.sortIndex - x.sortIndex;
        return D !== 0 ? D : E.id - x.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        A.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , o = s.now();
        A.unstable_now = function() {
            return s.now() - o
        }
    }
    var l = []
      , a = []
      , u = 1
      , B = null
      , f = 3
      , Q = !1
      , w = !1
      , h = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(E) {
        for (var x = t(a); x !== null; ) {
            if (x.callback === null)
                r(a);
            else if (x.startTime <= E)
                r(a),
                x.sortIndex = x.expirationTime,
                e(l, x);
            else
                break;
            x = t(a)
        }
    }
    function p(E) {
        if (h = !1,
        d(E),
        !w)
            if (t(l) !== null)
                w = !0,
                BA(U);
            else {
                var x = t(a);
                x !== null && cA(p, x.startTime - E)
            }
    }
    function U(E, x) {
        w = !1,
        h && (h = !1,
        g(m),
        m = -1),
        Q = !0;
        var D = f;
        try {
            for (d(x),
            B = t(l); B !== null && (!(B.expirationTime > x) || E && !G()); ) {
                var R = B.callback;
                if (typeof R == "function") {
                    B.callback = null,
                    f = B.priorityLevel;
                    var P = R(B.expirationTime <= x);
                    x = A.unstable_now(),
                    typeof P == "function" ? B.callback = P : B === t(l) && r(l),
                    d(x)
                } else
                    r(l);
                B = t(l)
            }
            if (B !== null)
                var DA = !0;
            else {
                var HA = t(a);
                HA !== null && cA(p, HA.startTime - x),
                DA = !1
            }
            return DA
        } finally {
            B = null,
            f = D,
            Q = !1
        }
    }
    var C = !1
      , v = null
      , m = -1
      , I = 5
      , K = -1;
    function G() {
        return !(A.unstable_now() - K < I)
    }
    function oA() {
        if (v !== null) {
            var E = A.unstable_now();
            K = E;
            var x = !0;
            try {
                x = v(!0, E)
            } finally {
                x ? M() : (C = !1,
                v = null)
            }
        } else
            C = !1
    }
    var M;
    if (typeof c == "function")
        M = function() {
            c(oA)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var nA = new MessageChannel
          , ge = nA.port2;
        nA.port1.onmessage = oA,
        M = function() {
            ge.postMessage(null)
        }
    } else
        M = function() {
            S(oA, 0)
        }
        ;
    function BA(E) {
        v = E,
        C || (C = !0,
        M())
    }
    function cA(E, x) {
        m = S(function() {
            E(A.unstable_now())
        }, x)
    }
    A.unstable_IdlePriority = 5,
    A.unstable_ImmediatePriority = 1,
    A.unstable_LowPriority = 4,
    A.unstable_NormalPriority = 3,
    A.unstable_Profiling = null,
    A.unstable_UserBlockingPriority = 2,
    A.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    A.unstable_continueExecution = function() {
        w || Q || (w = !0,
        BA(U))
    }
    ,
    A.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    A.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    A.unstable_getFirstCallbackNode = function() {
        return t(l)
    }
    ,
    A.unstable_next = function(E) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var x = 3;
            break;
        default:
            x = f
        }
        var D = f;
        f = x;
        try {
            return E()
        } finally {
            f = D
        }
    }
    ,
    A.unstable_pauseExecution = function() {}
    ,
    A.unstable_requestPaint = function() {}
    ,
    A.unstable_runWithPriority = function(E, x) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var D = f;
        f = E;
        try {
            return x()
        } finally {
            f = D
        }
    }
    ,
    A.unstable_scheduleCallback = function(E, x, D) {
        var R = A.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? R + D : R) : D = R,
        E) {
        case 1:
            var P = -1;
            break;
        case 2:
            P = 250;
            break;
        case 5:
            P = 1073741823;
            break;
        case 4:
            P = 1e4;
            break;
        default:
            P = 5e3
        }
        return P = D + P,
        E = {
            id: u++,
            callback: x,
            priorityLevel: E,
            startTime: D,
            expirationTime: P,
            sortIndex: -1
        },
        D > R ? (E.sortIndex = D,
        e(a, E),
        t(l) === null && E === t(a) && (h ? (g(m),
        m = -1) : h = !0,
        cA(p, D - R))) : (E.sortIndex = P,
        e(l, E),
        w || Q || (w = !0,
        BA(U))),
        E
    }
    ,
    A.unstable_shouldYield = G,
    A.unstable_wrapCallback = function(E) {
        var x = f;
        return function() {
            var D = f;
            f = x;
            try {
                return E.apply(this, arguments)
            } finally {
                f = D
            }
        }
    }
}
)(wc);
dc.exports = wc;
var Xd = dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc = wr
  , WA = Xd;
function F(A) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hc = new Set
  , rn = {};
function Lt(A, e) {
    or(A, e),
    or(A + "Capture", e)
}
function or(A, e) {
    for (rn[A] = e,
    A = 0; A < e.length; A++)
        hc.add(e[A])
}
var xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , To = Object.prototype.hasOwnProperty
  , Jd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , qa = {}
  , Au = {};
function Wd(A) {
    return To.call(Au, A) ? !0 : To.call(qa, A) ? !1 : Jd.test(A) ? Au[A] = !0 : (qa[A] = !0,
    !1)
}
function bd(A, e, t, r) {
    if (t !== null && t.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (A = A.toLowerCase().slice(0, 5),
        A !== "data-" && A !== "aria-");
    default:
        return !1
    }
}
function Yd(A, e, t, r) {
    if (e === null || typeof e > "u" || bd(A, e, t, r))
        return !0;
    if (r)
        return !1;
    if (t !== null)
        switch (t.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function xA(A, e, t, r, n, i, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = n,
    this.mustUseProperty = t,
    this.propertyName = A,
    this.type = e,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var CA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
    CA[A] = new xA(A,0,!1,A,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
    var e = A[0];
    CA[e] = new xA(e,1,!1,A[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
    CA[A] = new xA(A,2,!1,A.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
    CA[A] = new xA(A,2,!1,A,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
    CA[A] = new xA(A,3,!1,A.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
    CA[A] = new xA(A,3,!0,A,null,!1,!1)
});
["capture", "download"].forEach(function(A) {
    CA[A] = new xA(A,4,!1,A,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(A) {
    CA[A] = new xA(A,6,!1,A,null,!1,!1)
});
["rowSpan", "start"].forEach(function(A) {
    CA[A] = new xA(A,5,!1,A.toLowerCase(),null,!1,!1)
});
var ql = /[\-:]([a-z])/g;
function Aa(A) {
    return A[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
    var e = A.replace(ql, Aa);
    CA[e] = new xA(e,1,!1,A,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
    var e = A.replace(ql, Aa);
    CA[e] = new xA(e,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
    var e = A.replace(ql, Aa);
    CA[e] = new xA(e,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(A) {
    CA[A] = new xA(A,1,!1,A.toLowerCase(),null,!1,!1)
});
CA.xlinkHref = new xA("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(A) {
    CA[A] = new xA(A,1,!1,A.toLowerCase(),null,!0,!0)
});
function ea(A, e, t, r) {
    var n = CA.hasOwnProperty(e) ? CA[e] : null;
    (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Yd(e, t, n, r) && (t = null),
    r || n === null ? Wd(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName,
    r = n.attributeNamespace,
    t === null ? A.removeAttribute(e) : (n = n.type,
    t = n === 3 || n === 4 && t === !0 ? "" : "" + t,
    r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))))
}
var ke = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , xn = Symbol.for("react.element")
  , Vt = Symbol.for("react.portal")
  , Gt = Symbol.for("react.fragment")
  , ta = Symbol.for("react.strict_mode")
  , Oo = Symbol.for("react.profiler")
  , pc = Symbol.for("react.provider")
  , Cc = Symbol.for("react.context")
  , ra = Symbol.for("react.forward_ref")
  , Mo = Symbol.for("react.suspense")
  , ko = Symbol.for("react.suspense_list")
  , na = Symbol.for("react.memo")
  , Ve = Symbol.for("react.lazy")
  , Uc = Symbol.for("react.offscreen")
  , eu = Symbol.iterator;
function Cr(A) {
    return A === null || typeof A != "object" ? null : (A = eu && A[eu] || A["@@iterator"],
    typeof A == "function" ? A : null)
}
var $ = Object.assign, _s;
function xr(A) {
    if (_s === void 0)
        try {
            throw Error()
        } catch (t) {
            var e = t.stack.trim().match(/\n( *(at )?)/);
            _s = e && e[1] || ""
        }
    return `
` + _s + A
}
var Vs = !1;
function Gs(A, e) {
    if (!A || Vs)
        return "";
    Vs = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(A, [], e)
            } else {
                try {
                    e.call()
                } catch (a) {
                    r = a
                }
                A.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            A()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var n = a.stack.split(`
`), i = r.stack.split(`
`), s = n.length - 1, o = i.length - 1; 1 <= s && 0 <= o && n[s] !== i[o]; )
                o--;
            for (; 1 <= s && 0 <= o; s--,
            o--)
                if (n[s] !== i[o]) {
                    if (s !== 1 || o !== 1)
                        do
                            if (s--,
                            o--,
                            0 > o || n[s] !== i[o]) {
                                var l = `
` + n[s].replace(" at new ", " at ");
                                return A.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", A.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= o);
                    break
                }
        }
    } finally {
        Vs = !1,
        Error.prepareStackTrace = t
    }
    return (A = A ? A.displayName || A.name : "") ? xr(A) : ""
}
function zd(A) {
    switch (A.tag) {
    case 5:
        return xr(A.type);
    case 16:
        return xr("Lazy");
    case 13:
        return xr("Suspense");
    case 19:
        return xr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return A = Gs(A.type, !1),
        A;
    case 11:
        return A = Gs(A.type.render, !1),
        A;
    case 1:
        return A = Gs(A.type, !0),
        A;
    default:
        return ""
    }
}
function No(A) {
    if (A == null)
        return null;
    if (typeof A == "function")
        return A.displayName || A.name || null;
    if (typeof A == "string")
        return A;
    switch (A) {
    case Gt:
        return "Fragment";
    case Vt:
        return "Portal";
    case Oo:
        return "Profiler";
    case ta:
        return "StrictMode";
    case Mo:
        return "Suspense";
    case ko:
        return "SuspenseList"
    }
    if (typeof A == "object")
        switch (A.$$typeof) {
        case Cc:
            return (A.displayName || "Context") + ".Consumer";
        case pc:
            return (A._context.displayName || "Context") + ".Provider";
        case ra:
            var e = A.render;
            return A = A.displayName,
            A || (A = e.displayName || e.name || "",
            A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"),
            A;
        case na:
            return e = A.displayName || null,
            e !== null ? e : No(A.type) || "Memo";
        case Ve:
            e = A._payload,
            A = A._init;
            try {
                return No(A(e))
            } catch {}
        }
    return null
}
function Zd(A) {
    var e = A.type;
    switch (A.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return A = e.render,
        A = A.displayName || A.name || "",
        e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return No(e);
    case 8:
        return e === ta ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function ot(A) {
    switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return A;
    case "object":
        return A;
    default:
        return ""
    }
}
function Fc(A) {
    var e = A.type;
    return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function jd(A) {
    var e = Fc(A) ? "checked" : "value"
      , t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e)
      , r = "" + A[e];
    if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var n = t.get
          , i = t.set;
        return Object.defineProperty(A, e, {
            configurable: !0,
            get: function() {
                return n.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(A, e, {
            enumerable: t.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                A._valueTracker = null,
                delete A[e]
            }
        }
    }
}
function Dn(A) {
    A._valueTracker || (A._valueTracker = jd(A))
}
function vc(A) {
    if (!A)
        return !1;
    var e = A._valueTracker;
    if (!e)
        return !0;
    var t = e.getValue()
      , r = "";
    return A && (r = Fc(A) ? A.checked ? "true" : "false" : A.value),
    A = r,
    A !== t ? (e.setValue(A),
    !0) : !1
}
function Di(A) {
    if (A = A || (typeof document < "u" ? document : void 0),
    typeof A > "u")
        return null;
    try {
        return A.activeElement || A.body
    } catch {
        return A.body
    }
}
function Ro(A, e) {
    var t = e.checked;
    return $({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? A._wrapperState.initialChecked
    })
}
function tu(A, e) {
    var t = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    t = ot(e.value != null ? e.value : t),
    A._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function mc(A, e) {
    e = e.checked,
    e != null && ea(A, "checked", e, !1)
}
function _o(A, e) {
    mc(A, e);
    var t = ot(e.value)
      , r = e.type;
    if (t != null)
        r === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
    else if (r === "submit" || r === "reset") {
        A.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? Vo(A, e.type, t) : e.hasOwnProperty("defaultValue") && Vo(A, e.type, ot(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked)
}
function ru(A, e, t) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + A._wrapperState.initialValue,
        t || e === A.value || (A.value = e),
        A.defaultValue = e
    }
    t = A.name,
    t !== "" && (A.name = ""),
    A.defaultChecked = !!A._wrapperState.initialChecked,
    t !== "" && (A.name = t)
}
function Vo(A, e, t) {
    (e !== "number" || Di(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t))
}
var Dr = Array.isArray;
function Ar(A, e, t, r) {
    if (A = A.options,
    e) {
        e = {};
        for (var n = 0; n < t.length; n++)
            e["$" + t[n]] = !0;
        for (t = 0; t < A.length; t++)
            n = e.hasOwnProperty("$" + A[t].value),
            A[t].selected !== n && (A[t].selected = n),
            n && r && (A[t].defaultSelected = !0)
    } else {
        for (t = "" + ot(t),
        e = null,
        n = 0; n < A.length; n++) {
            if (A[n].value === t) {
                A[n].selected = !0,
                r && (A[n].defaultSelected = !0);
                return
            }
            e !== null || A[n].disabled || (e = A[n])
        }
        e !== null && (e.selected = !0)
    }
}
function Go(A, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(F(91));
    return $({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + A._wrapperState.initialValue
    })
}
function nu(A, e) {
    var t = e.value;
    if (t == null) {
        if (t = e.children,
        e = e.defaultValue,
        t != null) {
            if (e != null)
                throw Error(F(92));
            if (Dr(t)) {
                if (1 < t.length)
                    throw Error(F(93));
                t = t[0]
            }
            e = t
        }
        e == null && (e = ""),
        t = e
    }
    A._wrapperState = {
        initialValue: ot(t)
    }
}
function Ec(A, e) {
    var t = ot(e.value)
      , r = ot(e.defaultValue);
    t != null && (t = "" + t,
    t !== A.value && (A.value = t),
    e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)),
    r != null && (A.defaultValue = "" + r)
}
function iu(A) {
    var e = A.textContent;
    e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e)
}
function yc(A) {
    switch (A) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Po(A, e) {
    return A == null || A === "http://www.w3.org/1999/xhtml" ? yc(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A
}
var Tn, Hc = function(A) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, r, n) {
        MSApp.execUnsafeLocalFunction(function() {
            return A(e, t, r, n)
        })
    }
    : A
}(function(A, e) {
    if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in A)
        A.innerHTML = e;
    else {
        for (Tn = Tn || document.createElement("div"),
        Tn.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Tn.firstChild; A.firstChild; )
            A.removeChild(A.firstChild);
        for (; e.firstChild; )
            A.appendChild(e.firstChild)
    }
});
function nn(A, e) {
    if (e) {
        var t = A.firstChild;
        if (t && t === A.lastChild && t.nodeType === 3) {
            t.nodeValue = e;
            return
        }
    }
    A.textContent = e
}
var Pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
}
  , $d = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(A) {
    $d.forEach(function(e) {
        e = e + A.charAt(0).toUpperCase() + A.substring(1),
        Pr[e] = Pr[A]
    })
});
function Ic(A, e, t) {
    return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || Pr.hasOwnProperty(A) && Pr[A] ? ("" + e).trim() : e + "px"
}
function Sc(A, e) {
    A = A.style;
    for (var t in e)
        if (e.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0
              , n = Ic(t, e[t], r);
            t === "float" && (t = "cssFloat"),
            r ? A.setProperty(t, n) : A[t] = n
        }
}
var qd = $({
    menuitem: !0
}, {
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
function Xo(A, e) {
    if (e) {
        if (qd[A] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(F(137, A));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(F(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(F(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(F(62))
    }
}
function Jo(A, e) {
    if (A.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (A) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Wo = null;
function ia(A) {
    return A = A.target || A.srcElement || window,
    A.correspondingUseElement && (A = A.correspondingUseElement),
    A.nodeType === 3 ? A.parentNode : A
}
var bo = null
  , er = null
  , tr = null;
function su(A) {
    if (A = Hn(A)) {
        if (typeof bo != "function")
            throw Error(F(280));
        var e = A.stateNode;
        e && (e = hs(e),
        bo(A.stateNode, A.type, e))
    }
}
function Lc(A) {
    er ? tr ? tr.push(A) : tr = [A] : er = A
}
function Kc() {
    if (er) {
        var A = er
          , e = tr;
        if (tr = er = null,
        su(A),
        e)
            for (A = 0; A < e.length; A++)
                su(e[A])
    }
}
function xc(A, e) {
    return A(e)
}
function Dc() {}
var Ps = !1;
function Tc(A, e, t) {
    if (Ps)
        return A(e, t);
    Ps = !0;
    try {
        return xc(A, e, t)
    } finally {
        Ps = !1,
        (er !== null || tr !== null) && (Dc(),
        Kc())
    }
}
function sn(A, e) {
    var t = A.stateNode;
    if (t === null)
        return null;
    var r = hs(t);
    if (r === null)
        return null;
    t = r[e];
    A: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (A = A.type,
        r = !(A === "button" || A === "input" || A === "select" || A === "textarea")),
        A = !r;
        break A;
    default:
        A = !1
    }
    if (A)
        return null;
    if (t && typeof t != "function")
        throw Error(F(231, e, typeof t));
    return t
}
var Yo = !1;
if (xe)
    try {
        var Ur = {};
        Object.defineProperty(Ur, "passive", {
            get: function() {
                Yo = !0
            }
        }),
        window.addEventListener("test", Ur, Ur),
        window.removeEventListener("test", Ur, Ur)
    } catch {
        Yo = !1
    }
function Aw(A, e, t, r, n, i, s, o, l) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(t, a)
    } catch (u) {
        this.onError(u)
    }
}
var Xr = !1
  , Ti = null
  , Oi = !1
  , zo = null
  , ew = {
    onError: function(A) {
        Xr = !0,
        Ti = A
    }
};
function tw(A, e, t, r, n, i, s, o, l) {
    Xr = !1,
    Ti = null,
    Aw.apply(ew, arguments)
}
function rw(A, e, t, r, n, i, s, o, l) {
    if (tw.apply(this, arguments),
    Xr) {
        if (Xr) {
            var a = Ti;
            Xr = !1,
            Ti = null
        } else
            throw Error(F(198));
        Oi || (Oi = !0,
        zo = a)
    }
}
function Kt(A) {
    var e = A
      , t = A;
    if (A.alternate)
        for (; e.return; )
            e = e.return;
    else {
        A = e;
        do
            e = A,
            e.flags & 4098 && (t = e.return),
            A = e.return;
        while (A)
    }
    return e.tag === 3 ? t : null
}
function Oc(A) {
    if (A.tag === 13) {
        var e = A.memoizedState;
        if (e === null && (A = A.alternate,
        A !== null && (e = A.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function ou(A) {
    if (Kt(A) !== A)
        throw Error(F(188))
}
function nw(A) {
    var e = A.alternate;
    if (!e) {
        if (e = Kt(A),
        e === null)
            throw Error(F(188));
        return e !== A ? null : A
    }
    for (var t = A, r = e; ; ) {
        var n = t.return;
        if (n === null)
            break;
        var i = n.alternate;
        if (i === null) {
            if (r = n.return,
            r !== null) {
                t = r;
                continue
            }
            break
        }
        if (n.child === i.child) {
            for (i = n.child; i; ) {
                if (i === t)
                    return ou(n),
                    A;
                if (i === r)
                    return ou(n),
                    e;
                i = i.sibling
            }
            throw Error(F(188))
        }
        if (t.return !== r.return)
            t = n,
            r = i;
        else {
            for (var s = !1, o = n.child; o; ) {
                if (o === t) {
                    s = !0,
                    t = n,
                    r = i;
                    break
                }
                if (o === r) {
                    s = !0,
                    r = n,
                    t = i;
                    break
                }
                o = o.sibling
            }
            if (!s) {
                for (o = i.child; o; ) {
                    if (o === t) {
                        s = !0,
                        t = i,
                        r = n;
                        break
                    }
                    if (o === r) {
                        s = !0,
                        r = i,
                        t = n;
                        break
                    }
                    o = o.sibling
                }
                if (!s)
                    throw Error(F(189))
            }
        }
        if (t.alternate !== r)
            throw Error(F(190))
    }
    if (t.tag !== 3)
        throw Error(F(188));
    return t.stateNode.current === t ? A : e
}
function Mc(A) {
    return A = nw(A),
    A !== null ? kc(A) : null
}
function kc(A) {
    if (A.tag === 5 || A.tag === 6)
        return A;
    for (A = A.child; A !== null; ) {
        var e = kc(A);
        if (e !== null)
            return e;
        A = A.sibling
    }
    return null
}
var Nc = WA.unstable_scheduleCallback
  , lu = WA.unstable_cancelCallback
  , iw = WA.unstable_shouldYield
  , sw = WA.unstable_requestPaint
  , rA = WA.unstable_now
  , ow = WA.unstable_getCurrentPriorityLevel
  , sa = WA.unstable_ImmediatePriority
  , Rc = WA.unstable_UserBlockingPriority
  , Mi = WA.unstable_NormalPriority
  , lw = WA.unstable_LowPriority
  , _c = WA.unstable_IdlePriority
  , gs = null
  , Ce = null;
function aw(A) {
    if (Ce && typeof Ce.onCommitFiberRoot == "function")
        try {
            Ce.onCommitFiberRoot(gs, A, void 0, (A.current.flags & 128) === 128)
        } catch {}
}
var ue = Math.clz32 ? Math.clz32 : cw
  , uw = Math.log
  , Bw = Math.LN2;
function cw(A) {
    return A >>>= 0,
    A === 0 ? 32 : 31 - (uw(A) / Bw | 0) | 0
}
var On = 64
  , Mn = 4194304;
function Tr(A) {
    switch (A & -A) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return A & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return A
    }
}
function ki(A, e) {
    var t = A.pendingLanes;
    if (t === 0)
        return 0;
    var r = 0
      , n = A.suspendedLanes
      , i = A.pingedLanes
      , s = t & 268435455;
    if (s !== 0) {
        var o = s & ~n;
        o !== 0 ? r = Tr(o) : (i &= s,
        i !== 0 && (r = Tr(i)))
    } else
        s = t & ~n,
        s !== 0 ? r = Tr(s) : i !== 0 && (r = Tr(i));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & n) && (n = r & -r,
    i = e & -e,
    n >= i || n === 16 && (i & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= t & 16),
    e = A.entangledLanes,
    e !== 0)
        for (A = A.entanglements,
        e &= r; 0 < e; )
            t = 31 - ue(e),
            n = 1 << t,
            r |= A[t],
            e &= ~n;
    return r
}
function fw(A, e) {
    switch (A) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function gw(A, e) {
    for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, i = A.pendingLanes; 0 < i; ) {
        var s = 31 - ue(i)
          , o = 1 << s
          , l = n[s];
        l === -1 ? (!(o & t) || o & r) && (n[s] = fw(o, e)) : l <= e && (A.expiredLanes |= o),
        i &= ~o
    }
}
function Zo(A) {
    return A = A.pendingLanes & -1073741825,
    A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
}
function Vc() {
    var A = On;
    return On <<= 1,
    !(On & 4194240) && (On = 64),
    A
}
function Xs(A) {
    for (var e = [], t = 0; 31 > t; t++)
        e.push(A);
    return e
}
function En(A, e, t) {
    A.pendingLanes |= e,
    e !== 536870912 && (A.suspendedLanes = 0,
    A.pingedLanes = 0),
    A = A.eventTimes,
    e = 31 - ue(e),
    A[e] = t
}
function dw(A, e) {
    var t = A.pendingLanes & ~e;
    A.pendingLanes = e,
    A.suspendedLanes = 0,
    A.pingedLanes = 0,
    A.expiredLanes &= e,
    A.mutableReadLanes &= e,
    A.entangledLanes &= e,
    e = A.entanglements;
    var r = A.eventTimes;
    for (A = A.expirationTimes; 0 < t; ) {
        var n = 31 - ue(t)
          , i = 1 << n;
        e[n] = 0,
        r[n] = -1,
        A[n] = -1,
        t &= ~i
    }
}
function oa(A, e) {
    var t = A.entangledLanes |= e;
    for (A = A.entanglements; t; ) {
        var r = 31 - ue(t)
          , n = 1 << r;
        n & e | A[r] & e && (A[r] |= e),
        t &= ~n
    }
}
var _ = 0;
function Gc(A) {
    return A &= -A,
    1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1
}
var Pc, la, Xc, Jc, Wc, jo = !1, kn = [], je = null, $e = null, qe = null, on = new Map, ln = new Map, Xe = [], ww = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function au(A, e) {
    switch (A) {
    case "focusin":
    case "focusout":
        je = null;
        break;
    case "dragenter":
    case "dragleave":
        $e = null;
        break;
    case "mouseover":
    case "mouseout":
        qe = null;
        break;
    case "pointerover":
    case "pointerout":
        on.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ln.delete(e.pointerId)
    }
}
function Fr(A, e, t, r, n, i) {
    return A === null || A.nativeEvent !== i ? (A = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [n]
    },
    e !== null && (e = Hn(e),
    e !== null && la(e)),
    A) : (A.eventSystemFlags |= r,
    e = A.targetContainers,
    n !== null && e.indexOf(n) === -1 && e.push(n),
    A)
}
function Qw(A, e, t, r, n) {
    switch (e) {
    case "focusin":
        return je = Fr(je, A, e, t, r, n),
        !0;
    case "dragenter":
        return $e = Fr($e, A, e, t, r, n),
        !0;
    case "mouseover":
        return qe = Fr(qe, A, e, t, r, n),
        !0;
    case "pointerover":
        var i = n.pointerId;
        return on.set(i, Fr(on.get(i) || null, A, e, t, r, n)),
        !0;
    case "gotpointercapture":
        return i = n.pointerId,
        ln.set(i, Fr(ln.get(i) || null, A, e, t, r, n)),
        !0
    }
    return !1
}
function bc(A) {
    var e = Qt(A.target);
    if (e !== null) {
        var t = Kt(e);
        if (t !== null) {
            if (e = t.tag,
            e === 13) {
                if (e = Oc(t),
                e !== null) {
                    A.blockedOn = e,
                    Wc(A.priority, function() {
                        Xc(t)
                    });
                    return
                }
            } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    A.blockedOn = null
}
function pi(A) {
    if (A.blockedOn !== null)
        return !1;
    for (var e = A.targetContainers; 0 < e.length; ) {
        var t = $o(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
        if (t === null) {
            t = A.nativeEvent;
            var r = new t.constructor(t.type,t);
            Wo = r,
            t.target.dispatchEvent(r),
            Wo = null
        } else
            return e = Hn(t),
            e !== null && la(e),
            A.blockedOn = t,
            !1;
        e.shift()
    }
    return !0
}
function uu(A, e, t) {
    pi(A) && t.delete(e)
}
function hw() {
    jo = !1,
    je !== null && pi(je) && (je = null),
    $e !== null && pi($e) && ($e = null),
    qe !== null && pi(qe) && (qe = null),
    on.forEach(uu),
    ln.forEach(uu)
}
function vr(A, e) {
    A.blockedOn === e && (A.blockedOn = null,
    jo || (jo = !0,
    WA.unstable_scheduleCallback(WA.unstable_NormalPriority, hw)))
}
function an(A) {
    function e(n) {
        return vr(n, A)
    }
    if (0 < kn.length) {
        vr(kn[0], A);
        for (var t = 1; t < kn.length; t++) {
            var r = kn[t];
            r.blockedOn === A && (r.blockedOn = null)
        }
    }
    for (je !== null && vr(je, A),
    $e !== null && vr($e, A),
    qe !== null && vr(qe, A),
    on.forEach(e),
    ln.forEach(e),
    t = 0; t < Xe.length; t++)
        r = Xe[t],
        r.blockedOn === A && (r.blockedOn = null);
    for (; 0 < Xe.length && (t = Xe[0],
    t.blockedOn === null); )
        bc(t),
        t.blockedOn === null && Xe.shift()
}
var rr = ke.ReactCurrentBatchConfig
  , Ni = !0;
function pw(A, e, t, r) {
    var n = _
      , i = rr.transition;
    rr.transition = null;
    try {
        _ = 1,
        aa(A, e, t, r)
    } finally {
        _ = n,
        rr.transition = i
    }
}
function Cw(A, e, t, r) {
    var n = _
      , i = rr.transition;
    rr.transition = null;
    try {
        _ = 4,
        aa(A, e, t, r)
    } finally {
        _ = n,
        rr.transition = i
    }
}
function aa(A, e, t, r) {
    if (Ni) {
        var n = $o(A, e, t, r);
        if (n === null)
            Ao(A, e, r, Ri, t),
            au(A, r);
        else if (Qw(n, A, e, t, r))
            r.stopPropagation();
        else if (au(A, r),
        e & 4 && -1 < ww.indexOf(A)) {
            for (; n !== null; ) {
                var i = Hn(n);
                if (i !== null && Pc(i),
                i = $o(A, e, t, r),
                i === null && Ao(A, e, r, Ri, t),
                i === n)
                    break;
                n = i
            }
            n !== null && r.stopPropagation()
        } else
            Ao(A, e, r, null, t)
    }
}
var Ri = null;
function $o(A, e, t, r) {
    if (Ri = null,
    A = ia(r),
    A = Qt(A),
    A !== null)
        if (e = Kt(A),
        e === null)
            A = null;
        else if (t = e.tag,
        t === 13) {
            if (A = Oc(e),
            A !== null)
                return A;
            A = null
        } else if (t === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            A = null
        } else
            e !== A && (A = null);
    return Ri = A,
    null
}
function Yc(A) {
    switch (A) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (ow()) {
        case sa:
            return 1;
        case Rc:
            return 4;
        case Mi:
        case lw:
            return 16;
        case _c:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var We = null
  , ua = null
  , Ci = null;
function zc() {
    if (Ci)
        return Ci;
    var A, e = ua, t = e.length, r, n = "value"in We ? We.value : We.textContent, i = n.length;
    for (A = 0; A < t && e[A] === n[A]; A++)
        ;
    var s = t - A;
    for (r = 1; r <= s && e[t - r] === n[i - r]; r++)
        ;
    return Ci = n.slice(A, 1 < r ? 1 - r : void 0)
}
function Ui(A) {
    var e = A.keyCode;
    return "charCode"in A ? (A = A.charCode,
    A === 0 && e === 13 && (A = 13)) : A = e,
    A === 10 && (A = 13),
    32 <= A || A === 13 ? A : 0
}
function Nn() {
    return !0
}
function Bu() {
    return !1
}
function YA(A) {
    function e(t, r, n, i, s) {
        this._reactName = t,
        this._targetInst = n,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var o in A)
            A.hasOwnProperty(o) && (t = A[o],
            this[o] = t ? t(i) : i[o]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Nn : Bu,
        this.isPropagationStopped = Bu,
        this
    }
    return $(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            this.isDefaultPrevented = Nn)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            this.isPropagationStopped = Nn)
        },
        persist: function() {},
        isPersistent: Nn
    }),
    e
}
var Qr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(A) {
        return A.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ba = YA(Qr), yn = $({}, Qr, {
    view: 0,
    detail: 0
}), Uw = YA(yn), Js, Ws, mr, ds = $({}, yn, {
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
    getModifierState: ca,
    button: 0,
    buttons: 0,
    relatedTarget: function(A) {
        return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget
    },
    movementX: function(A) {
        return "movementX"in A ? A.movementX : (A !== mr && (mr && A.type === "mousemove" ? (Js = A.screenX - mr.screenX,
        Ws = A.screenY - mr.screenY) : Ws = Js = 0,
        mr = A),
        Js)
    },
    movementY: function(A) {
        return "movementY"in A ? A.movementY : Ws
    }
}), cu = YA(ds), Fw = $({}, ds, {
    dataTransfer: 0
}), vw = YA(Fw), mw = $({}, yn, {
    relatedTarget: 0
}), bs = YA(mw), Ew = $({}, Qr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), yw = YA(Ew), Hw = $({}, Qr, {
    clipboardData: function(A) {
        return "clipboardData"in A ? A.clipboardData : window.clipboardData
    }
}), Iw = YA(Hw), Sw = $({}, Qr, {
    data: 0
}), fu = YA(Sw), Lw = {
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
}, Kw = {
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
}, xw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Dw(A) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(A) : (A = xw[A]) ? !!e[A] : !1
}
function ca() {
    return Dw
}
var Tw = $({}, yn, {
    key: function(A) {
        if (A.key) {
            var e = Lw[A.key] || A.key;
            if (e !== "Unidentified")
                return e
        }
        return A.type === "keypress" ? (A = Ui(A),
        A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? Kw[A.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ca,
    charCode: function(A) {
        return A.type === "keypress" ? Ui(A) : 0
    },
    keyCode: function(A) {
        return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0
    },
    which: function(A) {
        return A.type === "keypress" ? Ui(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0
    }
})
  , Ow = YA(Tw)
  , Mw = $({}, ds, {
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
})
  , gu = YA(Mw)
  , kw = $({}, yn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ca
})
  , Nw = YA(kw)
  , Rw = $({}, Qr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , _w = YA(Rw)
  , Vw = $({}, ds, {
    deltaX: function(A) {
        return "deltaX"in A ? A.deltaX : "wheelDeltaX"in A ? -A.wheelDeltaX : 0
    },
    deltaY: function(A) {
        return "deltaY"in A ? A.deltaY : "wheelDeltaY"in A ? -A.wheelDeltaY : "wheelDelta"in A ? -A.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Gw = YA(Vw)
  , Pw = [9, 13, 27, 32]
  , fa = xe && "CompositionEvent"in window
  , Jr = null;
xe && "documentMode"in document && (Jr = document.documentMode);
var Xw = xe && "TextEvent"in window && !Jr
  , Zc = xe && (!fa || Jr && 8 < Jr && 11 >= Jr)
  , du = " "
  , wu = !1;
function jc(A, e) {
    switch (A) {
    case "keyup":
        return Pw.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function $c(A) {
    return A = A.detail,
    typeof A == "object" && "data"in A ? A.data : null
}
var Pt = !1;
function Jw(A, e) {
    switch (A) {
    case "compositionend":
        return $c(e);
    case "keypress":
        return e.which !== 32 ? null : (wu = !0,
        du);
    case "textInput":
        return A = e.data,
        A === du && wu ? null : A;
    default:
        return null
    }
}
function Ww(A, e) {
    if (Pt)
        return A === "compositionend" || !fa && jc(A, e) ? (A = zc(),
        Ci = ua = We = null,
        Pt = !1,
        A) : null;
    switch (A) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Zc && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var bw = {
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
function Qu(A) {
    var e = A && A.nodeName && A.nodeName.toLowerCase();
    return e === "input" ? !!bw[A.type] : e === "textarea"
}
function qc(A, e, t, r) {
    Lc(r),
    e = _i(e, "onChange"),
    0 < e.length && (t = new Ba("onChange","change",null,t,r),
    A.push({
        event: t,
        listeners: e
    }))
}
var Wr = null
  , un = null;
function Yw(A) {
    Bf(A, 0)
}
function ws(A) {
    var e = Wt(A);
    if (vc(e))
        return A
}
function zw(A, e) {
    if (A === "change")
        return e
}
var Af = !1;
if (xe) {
    var Ys;
    if (xe) {
        var zs = "oninput"in document;
        if (!zs) {
            var hu = document.createElement("div");
            hu.setAttribute("oninput", "return;"),
            zs = typeof hu.oninput == "function"
        }
        Ys = zs
    } else
        Ys = !1;
    Af = Ys && (!document.documentMode || 9 < document.documentMode)
}
function pu() {
    Wr && (Wr.detachEvent("onpropertychange", ef),
    un = Wr = null)
}
function ef(A) {
    if (A.propertyName === "value" && ws(un)) {
        var e = [];
        qc(e, un, A, ia(A)),
        Tc(Yw, e)
    }
}
function Zw(A, e, t) {
    A === "focusin" ? (pu(),
    Wr = e,
    un = t,
    Wr.attachEvent("onpropertychange", ef)) : A === "focusout" && pu()
}
function jw(A) {
    if (A === "selectionchange" || A === "keyup" || A === "keydown")
        return ws(un)
}
function $w(A, e) {
    if (A === "click")
        return ws(e)
}
function qw(A, e) {
    if (A === "input" || A === "change")
        return ws(e)
}
function AQ(A, e) {
    return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e
}
var ce = typeof Object.is == "function" ? Object.is : AQ;
function Bn(A, e) {
    if (ce(A, e))
        return !0;
    if (typeof A != "object" || A === null || typeof e != "object" || e === null)
        return !1;
    var t = Object.keys(A)
      , r = Object.keys(e);
    if (t.length !== r.length)
        return !1;
    for (r = 0; r < t.length; r++) {
        var n = t[r];
        if (!To.call(e, n) || !ce(A[n], e[n]))
            return !1
    }
    return !0
}
function Cu(A) {
    for (; A && A.firstChild; )
        A = A.firstChild;
    return A
}
function Uu(A, e) {
    var t = Cu(A);
    A = 0;
    for (var r; t; ) {
        if (t.nodeType === 3) {
            if (r = A + t.textContent.length,
            A <= e && r >= e)
                return {
                    node: t,
                    offset: e - A
                };
            A = r
        }
        A: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break A
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = Cu(t)
    }
}
function tf(A, e) {
    return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? tf(A, e.parentNode) : "contains"in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1
}
function rf() {
    for (var A = window, e = Di(); e instanceof A.HTMLIFrameElement; ) {
        try {
            var t = typeof e.contentWindow.location.href == "string"
        } catch {
            t = !1
        }
        if (t)
            A = e.contentWindow;
        else
            break;
        e = Di(A.document)
    }
    return e
}
function ga(A) {
    var e = A && A.nodeName && A.nodeName.toLowerCase();
    return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true")
}
function eQ(A) {
    var e = rf()
      , t = A.focusedElem
      , r = A.selectionRange;
    if (e !== t && t && t.ownerDocument && tf(t.ownerDocument.documentElement, t)) {
        if (r !== null && ga(t)) {
            if (e = r.start,
            A = r.end,
            A === void 0 && (A = e),
            "selectionStart"in t)
                t.selectionStart = e,
                t.selectionEnd = Math.min(A, t.value.length);
            else if (A = (e = t.ownerDocument || document) && e.defaultView || window,
            A.getSelection) {
                A = A.getSelection();
                var n = t.textContent.length
                  , i = Math.min(r.start, n);
                r = r.end === void 0 ? i : Math.min(r.end, n),
                !A.extend && i > r && (n = r,
                r = i,
                i = n),
                n = Uu(t, i);
                var s = Uu(t, r);
                n && s && (A.rangeCount !== 1 || A.anchorNode !== n.node || A.anchorOffset !== n.offset || A.focusNode !== s.node || A.focusOffset !== s.offset) && (e = e.createRange(),
                e.setStart(n.node, n.offset),
                A.removeAllRanges(),
                i > r ? (A.addRange(e),
                A.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset),
                A.addRange(e)))
            }
        }
        for (e = [],
        A = t; A = A.parentNode; )
            A.nodeType === 1 && e.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
            });
        for (typeof t.focus == "function" && t.focus(),
        t = 0; t < e.length; t++)
            A = e[t],
            A.element.scrollLeft = A.left,
            A.element.scrollTop = A.top
    }
}
var tQ = xe && "documentMode"in document && 11 >= document.documentMode
  , Xt = null
  , qo = null
  , br = null
  , Al = !1;
function Fu(A, e, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Al || Xt == null || Xt !== Di(r) || (r = Xt,
    "selectionStart"in r && ga(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    br && Bn(br, r) || (br = r,
    r = _i(qo, "onSelect"),
    0 < r.length && (e = new Ba("onSelect","select",null,e,t),
    A.push({
        event: e,
        listeners: r
    }),
    e.target = Xt)))
}
function Rn(A, e) {
    var t = {};
    return t[A.toLowerCase()] = e.toLowerCase(),
    t["Webkit" + A] = "webkit" + e,
    t["Moz" + A] = "moz" + e,
    t
}
var Jt = {
    animationend: Rn("Animation", "AnimationEnd"),
    animationiteration: Rn("Animation", "AnimationIteration"),
    animationstart: Rn("Animation", "AnimationStart"),
    transitionend: Rn("Transition", "TransitionEnd")
}
  , Zs = {}
  , nf = {};
xe && (nf = document.createElement("div").style,
"AnimationEvent"in window || (delete Jt.animationend.animation,
delete Jt.animationiteration.animation,
delete Jt.animationstart.animation),
"TransitionEvent"in window || delete Jt.transitionend.transition);
function Qs(A) {
    if (Zs[A])
        return Zs[A];
    if (!Jt[A])
        return A;
    var e = Jt[A], t;
    for (t in e)
        if (e.hasOwnProperty(t) && t in nf)
            return Zs[A] = e[t];
    return A
}
var sf = Qs("animationend")
  , of = Qs("animationiteration")
  , lf = Qs("animationstart")
  , af = Qs("transitionend")
  , uf = new Map
  , vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ut(A, e) {
    uf.set(A, e),
    Lt(e, [A])
}
for (var js = 0; js < vu.length; js++) {
    var $s = vu[js]
      , rQ = $s.toLowerCase()
      , nQ = $s[0].toUpperCase() + $s.slice(1);
    ut(rQ, "on" + nQ)
}
ut(sf, "onAnimationEnd");
ut(of, "onAnimationIteration");
ut(lf, "onAnimationStart");
ut("dblclick", "onDoubleClick");
ut("focusin", "onFocus");
ut("focusout", "onBlur");
ut(af, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , iQ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function mu(A, e, t) {
    var r = A.type || "unknown-event";
    A.currentTarget = t,
    rw(r, e, void 0, A),
    A.currentTarget = null
}
function Bf(A, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < A.length; t++) {
        var r = A[t]
          , n = r.event;
        r = r.listeners;
        A: {
            var i = void 0;
            if (e)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var o = r[s]
                      , l = o.instance
                      , a = o.currentTarget;
                    if (o = o.listener,
                    l !== i && n.isPropagationStopped())
                        break A;
                    mu(n, o, a),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (o = r[s],
                    l = o.instance,
                    a = o.currentTarget,
                    o = o.listener,
                    l !== i && n.isPropagationStopped())
                        break A;
                    mu(n, o, a),
                    i = l
                }
        }
    }
    if (Oi)
        throw A = zo,
        Oi = !1,
        zo = null,
        A
}
function W(A, e) {
    var t = e[il];
    t === void 0 && (t = e[il] = new Set);
    var r = A + "__bubble";
    t.has(r) || (cf(e, A, 2, !1),
    t.add(r))
}
function qs(A, e, t) {
    var r = 0;
    e && (r |= 4),
    cf(t, A, r, e)
}
var _n = "_reactListening" + Math.random().toString(36).slice(2);
function cn(A) {
    if (!A[_n]) {
        A[_n] = !0,
        hc.forEach(function(t) {
            t !== "selectionchange" && (iQ.has(t) || qs(t, !1, A),
            qs(t, !0, A))
        });
        var e = A.nodeType === 9 ? A : A.ownerDocument;
        e === null || e[_n] || (e[_n] = !0,
        qs("selectionchange", !1, e))
    }
}
function cf(A, e, t, r) {
    switch (Yc(e)) {
    case 1:
        var n = pw;
        break;
    case 4:
        n = Cw;
        break;
    default:
        n = aa
    }
    t = n.bind(null, e, t, A),
    n = void 0,
    !Yo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0),
    r ? n !== void 0 ? A.addEventListener(e, t, {
        capture: !0,
        passive: n
    }) : A.addEventListener(e, t, !0) : n !== void 0 ? A.addEventListener(e, t, {
        passive: n
    }) : A.addEventListener(e, t, !1)
}
function Ao(A, e, t, r, n) {
    var i = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        A: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var o = r.stateNode.containerInfo;
                if (o === n || o.nodeType === 8 && o.parentNode === n)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === n || l.nodeType === 8 && l.parentNode === n))
                            return;
                        s = s.return
                    }
                for (; o !== null; ) {
                    if (s = Qt(o),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue A
                    }
                    o = o.parentNode
                }
            }
            r = r.return
        }
    Tc(function() {
        var a = i
          , u = ia(t)
          , B = [];
        A: {
            var f = uf.get(A);
            if (f !== void 0) {
                var Q = Ba
                  , w = A;
                switch (A) {
                case "keypress":
                    if (Ui(t) === 0)
                        break A;
                case "keydown":
                case "keyup":
                    Q = Ow;
                    break;
                case "focusin":
                    w = "focus",
                    Q = bs;
                    break;
                case "focusout":
                    w = "blur",
                    Q = bs;
                    break;
                case "beforeblur":
                case "afterblur":
                    Q = bs;
                    break;
                case "click":
                    if (t.button === 2)
                        break A;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    Q = cu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    Q = vw;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    Q = Nw;
                    break;
                case sf:
                case of:
                case lf:
                    Q = yw;
                    break;
                case af:
                    Q = _w;
                    break;
                case "scroll":
                    Q = Uw;
                    break;
                case "wheel":
                    Q = Gw;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    Q = Iw;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    Q = gu
                }
                var h = (e & 4) !== 0
                  , S = !h && A === "scroll"
                  , g = h ? f !== null ? f + "Capture" : null : f;
                h = [];
                for (var c = a, d; c !== null; ) {
                    d = c;
                    var p = d.stateNode;
                    if (d.tag === 5 && p !== null && (d = p,
                    g !== null && (p = sn(c, g),
                    p != null && h.push(fn(c, p, d)))),
                    S)
                        break;
                    c = c.return
                }
                0 < h.length && (f = new Q(f,w,null,t,u),
                B.push({
                    event: f,
                    listeners: h
                }))
            }
        }
        if (!(e & 7)) {
            A: {
                if (f = A === "mouseover" || A === "pointerover",
                Q = A === "mouseout" || A === "pointerout",
                f && t !== Wo && (w = t.relatedTarget || t.fromElement) && (Qt(w) || w[De]))
                    break A;
                if ((Q || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window,
                Q ? (w = t.relatedTarget || t.toElement,
                Q = a,
                w = w ? Qt(w) : null,
                w !== null && (S = Kt(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (Q = null,
                w = a),
                Q !== w)) {
                    if (h = cu,
                    p = "onMouseLeave",
                    g = "onMouseEnter",
                    c = "mouse",
                    (A === "pointerout" || A === "pointerover") && (h = gu,
                    p = "onPointerLeave",
                    g = "onPointerEnter",
                    c = "pointer"),
                    S = Q == null ? f : Wt(Q),
                    d = w == null ? f : Wt(w),
                    f = new h(p,c + "leave",Q,t,u),
                    f.target = S,
                    f.relatedTarget = d,
                    p = null,
                    Qt(u) === a && (h = new h(g,c + "enter",w,t,u),
                    h.target = d,
                    h.relatedTarget = S,
                    p = h),
                    S = p,
                    Q && w)
                        e: {
                            for (h = Q,
                            g = w,
                            c = 0,
                            d = h; d; d = xt(d))
                                c++;
                            for (d = 0,
                            p = g; p; p = xt(p))
                                d++;
                            for (; 0 < c - d; )
                                h = xt(h),
                                c--;
                            for (; 0 < d - c; )
                                g = xt(g),
                                d--;
                            for (; c--; ) {
                                if (h === g || g !== null && h === g.alternate)
                                    break e;
                                h = xt(h),
                                g = xt(g)
                            }
                            h = null
                        }
                    else
                        h = null;
                    Q !== null && Eu(B, f, Q, h, !1),
                    w !== null && S !== null && Eu(B, S, w, h, !0)
                }
            }
            A: {
                if (f = a ? Wt(a) : window,
                Q = f.nodeName && f.nodeName.toLowerCase(),
                Q === "select" || Q === "input" && f.type === "file")
                    var U = zw;
                else if (Qu(f))
                    if (Af)
                        U = qw;
                    else {
                        U = jw;
                        var C = Zw
                    }
                else
                    (Q = f.nodeName) && Q.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (U = $w);
                if (U && (U = U(A, a))) {
                    qc(B, U, t, u);
                    break A
                }
                C && C(A, f, a),
                A === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Vo(f, "number", f.value)
            }
            switch (C = a ? Wt(a) : window,
            A) {
            case "focusin":
                (Qu(C) || C.contentEditable === "true") && (Xt = C,
                qo = a,
                br = null);
                break;
            case "focusout":
                br = qo = Xt = null;
                break;
            case "mousedown":
                Al = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Al = !1,
                Fu(B, t, u);
                break;
            case "selectionchange":
                if (tQ)
                    break;
            case "keydown":
            case "keyup":
                Fu(B, t, u)
            }
            var v;
            if (fa)
                A: {
                    switch (A) {
                    case "compositionstart":
                        var m = "onCompositionStart";
                        break A;
                    case "compositionend":
                        m = "onCompositionEnd";
                        break A;
                    case "compositionupdate":
                        m = "onCompositionUpdate";
                        break A
                    }
                    m = void 0
                }
            else
                Pt ? jc(A, t) && (m = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (m = "onCompositionStart");
            m && (Zc && t.locale !== "ko" && (Pt || m !== "onCompositionStart" ? m === "onCompositionEnd" && Pt && (v = zc()) : (We = u,
            ua = "value"in We ? We.value : We.textContent,
            Pt = !0)),
            C = _i(a, m),
            0 < C.length && (m = new fu(m,A,null,t,u),
            B.push({
                event: m,
                listeners: C
            }),
            v ? m.data = v : (v = $c(t),
            v !== null && (m.data = v)))),
            (v = Xw ? Jw(A, t) : Ww(A, t)) && (a = _i(a, "onBeforeInput"),
            0 < a.length && (u = new fu("onBeforeInput","beforeinput",null,t,u),
            B.push({
                event: u,
                listeners: a
            }),
            u.data = v))
        }
        Bf(B, e)
    })
}
function fn(A, e, t) {
    return {
        instance: A,
        listener: e,
        currentTarget: t
    }
}
function _i(A, e) {
    for (var t = e + "Capture", r = []; A !== null; ) {
        var n = A
          , i = n.stateNode;
        n.tag === 5 && i !== null && (n = i,
        i = sn(A, t),
        i != null && r.unshift(fn(A, i, n)),
        i = sn(A, e),
        i != null && r.push(fn(A, i, n))),
        A = A.return
    }
    return r
}
function xt(A) {
    if (A === null)
        return null;
    do
        A = A.return;
    while (A && A.tag !== 5);
    return A || null
}
function Eu(A, e, t, r, n) {
    for (var i = e._reactName, s = []; t !== null && t !== r; ) {
        var o = t
          , l = o.alternate
          , a = o.stateNode;
        if (l !== null && l === r)
            break;
        o.tag === 5 && a !== null && (o = a,
        n ? (l = sn(t, i),
        l != null && s.unshift(fn(t, l, o))) : n || (l = sn(t, i),
        l != null && s.push(fn(t, l, o)))),
        t = t.return
    }
    s.length !== 0 && A.push({
        event: e,
        listeners: s
    })
}
var sQ = /\r\n?/g
  , oQ = /\u0000|\uFFFD/g;
function yu(A) {
    return (typeof A == "string" ? A : "" + A).replace(sQ, `
`).replace(oQ, "")
}
function Vn(A, e, t) {
    if (e = yu(e),
    yu(A) !== e && t)
        throw Error(F(425))
}
function Vi() {}
var el = null
  , tl = null;
function rl(A, e) {
    return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var nl = typeof setTimeout == "function" ? setTimeout : void 0
  , lQ = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Hu = typeof Promise == "function" ? Promise : void 0
  , aQ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hu < "u" ? function(A) {
    return Hu.resolve(null).then(A).catch(uQ)
}
: nl;
function uQ(A) {
    setTimeout(function() {
        throw A
    })
}
function eo(A, e) {
    var t = e
      , r = 0;
    do {
        var n = t.nextSibling;
        if (A.removeChild(t),
        n && n.nodeType === 8)
            if (t = n.data,
            t === "/$") {
                if (r === 0) {
                    A.removeChild(n),
                    an(e);
                    return
                }
                r--
            } else
                t !== "$" && t !== "$?" && t !== "$!" || r++;
        t = n
    } while (t);
    an(e)
}
function At(A) {
    for (; A != null; A = A.nextSibling) {
        var e = A.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = A.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return A
}
function Iu(A) {
    A = A.previousSibling;
    for (var e = 0; A; ) {
        if (A.nodeType === 8) {
            var t = A.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (e === 0)
                    return A;
                e--
            } else
                t === "/$" && e++
        }
        A = A.previousSibling
    }
    return null
}
var hr = Math.random().toString(36).slice(2)
  , pe = "__reactFiber$" + hr
  , gn = "__reactProps$" + hr
  , De = "__reactContainer$" + hr
  , il = "__reactEvents$" + hr
  , BQ = "__reactListeners$" + hr
  , cQ = "__reactHandles$" + hr;
function Qt(A) {
    var e = A[pe];
    if (e)
        return e;
    for (var t = A.parentNode; t; ) {
        if (e = t[De] || t[pe]) {
            if (t = e.alternate,
            e.child !== null || t !== null && t.child !== null)
                for (A = Iu(A); A !== null; ) {
                    if (t = A[pe])
                        return t;
                    A = Iu(A)
                }
            return e
        }
        A = t,
        t = A.parentNode
    }
    return null
}
function Hn(A) {
    return A = A[pe] || A[De],
    !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A
}
function Wt(A) {
    if (A.tag === 5 || A.tag === 6)
        return A.stateNode;
    throw Error(F(33))
}
function hs(A) {
    return A[gn] || null
}
var sl = []
  , bt = -1;
function Bt(A) {
    return {
        current: A
    }
}
function b(A) {
    0 > bt || (A.current = sl[bt],
    sl[bt] = null,
    bt--)
}
function J(A, e) {
    bt++,
    sl[bt] = A.current,
    A.current = e
}
var lt = {}
  , yA = Bt(lt)
  , NA = Bt(!1)
  , Et = lt;
function lr(A, e) {
    var t = A.type.contextTypes;
    if (!t)
        return lt;
    var r = A.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var n = {}, i;
    for (i in t)
        n[i] = e[i];
    return r && (A = A.stateNode,
    A.__reactInternalMemoizedUnmaskedChildContext = e,
    A.__reactInternalMemoizedMaskedChildContext = n),
    n
}
function RA(A) {
    return A = A.childContextTypes,
    A != null
}
function Gi() {
    b(NA),
    b(yA)
}
function Su(A, e, t) {
    if (yA.current !== lt)
        throw Error(F(168));
    J(yA, e),
    J(NA, t)
}
function ff(A, e, t) {
    var r = A.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return t;
    r = r.getChildContext();
    for (var n in r)
        if (!(n in e))
            throw Error(F(108, Zd(A) || "Unknown", n));
    return $({}, t, r)
}
function Pi(A) {
    return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || lt,
    Et = yA.current,
    J(yA, A),
    J(NA, NA.current),
    !0
}
function Lu(A, e, t) {
    var r = A.stateNode;
    if (!r)
        throw Error(F(169));
    t ? (A = ff(A, e, Et),
    r.__reactInternalMemoizedMergedChildContext = A,
    b(NA),
    b(yA),
    J(yA, A)) : b(NA),
    J(NA, t)
}
var He = null
  , ps = !1
  , to = !1;
function gf(A) {
    He === null ? He = [A] : He.push(A)
}
function fQ(A) {
    ps = !0,
    gf(A)
}
function ct() {
    if (!to && He !== null) {
        to = !0;
        var A = 0
          , e = _;
        try {
            var t = He;
            for (_ = 1; A < t.length; A++) {
                var r = t[A];
                do
                    r = r(!0);
                while (r !== null)
            }
            He = null,
            ps = !1
        } catch (n) {
            throw He !== null && (He = He.slice(A + 1)),
            Nc(sa, ct),
            n
        } finally {
            _ = e,
            to = !1
        }
    }
    return null
}
var Yt = []
  , zt = 0
  , Xi = null
  , Ji = 0
  , ZA = []
  , jA = 0
  , yt = null
  , Ie = 1
  , Se = "";
function gt(A, e) {
    Yt[zt++] = Ji,
    Yt[zt++] = Xi,
    Xi = A,
    Ji = e
}
function df(A, e, t) {
    ZA[jA++] = Ie,
    ZA[jA++] = Se,
    ZA[jA++] = yt,
    yt = A;
    var r = Ie;
    A = Se;
    var n = 32 - ue(r) - 1;
    r &= ~(1 << n),
    t += 1;
    var i = 32 - ue(e) + n;
    if (30 < i) {
        var s = n - n % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        n -= s,
        Ie = 1 << 32 - ue(e) + n | t << n | r,
        Se = i + A
    } else
        Ie = 1 << i | t << n | r,
        Se = A
}
function da(A) {
    A.return !== null && (gt(A, 1),
    df(A, 1, 0))
}
function wa(A) {
    for (; A === Xi; )
        Xi = Yt[--zt],
        Yt[zt] = null,
        Ji = Yt[--zt],
        Yt[zt] = null;
    for (; A === yt; )
        yt = ZA[--jA],
        ZA[jA] = null,
        Se = ZA[--jA],
        ZA[jA] = null,
        Ie = ZA[--jA],
        ZA[jA] = null
}
var JA = null
  , XA = null
  , z = !1
  , ae = null;
function wf(A, e) {
    var t = qA(5, null, null, 0);
    t.elementType = "DELETED",
    t.stateNode = e,
    t.return = A,
    e = A.deletions,
    e === null ? (A.deletions = [t],
    A.flags |= 16) : e.push(t)
}
function Ku(A, e) {
    switch (A.tag) {
    case 5:
        var t = A.type;
        return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (A.stateNode = e,
        JA = A,
        XA = At(e.firstChild),
        !0) : !1;
    case 6:
        return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (A.stateNode = e,
        JA = A,
        XA = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (t = yt !== null ? {
            id: Ie,
            overflow: Se
        } : null,
        A.memoizedState = {
            dehydrated: e,
            treeContext: t,
            retryLane: 1073741824
        },
        t = qA(18, null, null, 0),
        t.stateNode = e,
        t.return = A,
        A.child = t,
        JA = A,
        XA = null,
        !0) : !1;
    default:
        return !1
    }
}
function ol(A) {
    return (A.mode & 1) !== 0 && (A.flags & 128) === 0
}
function ll(A) {
    if (z) {
        var e = XA;
        if (e) {
            var t = e;
            if (!Ku(A, e)) {
                if (ol(A))
                    throw Error(F(418));
                e = At(t.nextSibling);
                var r = JA;
                e && Ku(A, e) ? wf(r, t) : (A.flags = A.flags & -4097 | 2,
                z = !1,
                JA = A)
            }
        } else {
            if (ol(A))
                throw Error(F(418));
            A.flags = A.flags & -4097 | 2,
            z = !1,
            JA = A
        }
    }
}
function xu(A) {
    for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; )
        A = A.return;
    JA = A
}
function Gn(A) {
    if (A !== JA)
        return !1;
    if (!z)
        return xu(A),
        z = !0,
        !1;
    var e;
    if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type,
    e = e !== "head" && e !== "body" && !rl(A.type, A.memoizedProps)),
    e && (e = XA)) {
        if (ol(A))
            throw Qf(),
            Error(F(418));
        for (; e; )
            wf(A, e),
            e = At(e.nextSibling)
    }
    if (xu(A),
    A.tag === 13) {
        if (A = A.memoizedState,
        A = A !== null ? A.dehydrated : null,
        !A)
            throw Error(F(317));
        A: {
            for (A = A.nextSibling,
            e = 0; A; ) {
                if (A.nodeType === 8) {
                    var t = A.data;
                    if (t === "/$") {
                        if (e === 0) {
                            XA = At(A.nextSibling);
                            break A
                        }
                        e--
                    } else
                        t !== "$" && t !== "$!" && t !== "$?" || e++
                }
                A = A.nextSibling
            }
            XA = null
        }
    } else
        XA = JA ? At(A.stateNode.nextSibling) : null;
    return !0
}
function Qf() {
    for (var A = XA; A; )
        A = At(A.nextSibling)
}
function ar() {
    XA = JA = null,
    z = !1
}
function Qa(A) {
    ae === null ? ae = [A] : ae.push(A)
}
var gQ = ke.ReactCurrentBatchConfig;
function oe(A, e) {
    if (A && A.defaultProps) {
        e = $({}, e),
        A = A.defaultProps;
        for (var t in A)
            e[t] === void 0 && (e[t] = A[t]);
        return e
    }
    return e
}
var Wi = Bt(null)
  , bi = null
  , Zt = null
  , ha = null;
function pa() {
    ha = Zt = bi = null
}
function Ca(A) {
    var e = Wi.current;
    b(Wi),
    A._currentValue = e
}
function al(A, e, t) {
    for (; A !== null; ) {
        var r = A.alternate;
        if ((A.childLanes & e) !== e ? (A.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        A === t)
            break;
        A = A.return
    }
}
function nr(A, e) {
    bi = A,
    ha = Zt = null,
    A = A.dependencies,
    A !== null && A.firstContext !== null && (A.lanes & e && (kA = !0),
    A.firstContext = null)
}
function re(A) {
    var e = A._currentValue;
    if (ha !== A)
        if (A = {
            context: A,
            memoizedValue: e,
            next: null
        },
        Zt === null) {
            if (bi === null)
                throw Error(F(308));
            Zt = A,
            bi.dependencies = {
                lanes: 0,
                firstContext: A
            }
        } else
            Zt = Zt.next = A;
    return e
}
var ht = null;
function Ua(A) {
    ht === null ? ht = [A] : ht.push(A)
}
function hf(A, e, t, r) {
    var n = e.interleaved;
    return n === null ? (t.next = t,
    Ua(e)) : (t.next = n.next,
    n.next = t),
    e.interleaved = t,
    Te(A, r)
}
function Te(A, e) {
    A.lanes |= e;
    var t = A.alternate;
    for (t !== null && (t.lanes |= e),
    t = A,
    A = A.return; A !== null; )
        A.childLanes |= e,
        t = A.alternate,
        t !== null && (t.childLanes |= e),
        t = A,
        A = A.return;
    return t.tag === 3 ? t.stateNode : null
}
var Ge = !1;
function Fa(A) {
    A.updateQueue = {
        baseState: A.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function pf(A, e) {
    A = A.updateQueue,
    e.updateQueue === A && (e.updateQueue = {
        baseState: A.baseState,
        firstBaseUpdate: A.firstBaseUpdate,
        lastBaseUpdate: A.lastBaseUpdate,
        shared: A.shared,
        effects: A.effects
    })
}
function Le(A, e) {
    return {
        eventTime: A,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function et(A, e, t) {
    var r = A.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    k & 2) {
        var n = r.pending;
        return n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        r.pending = e,
        Te(A, t)
    }
    return n = r.interleaved,
    n === null ? (e.next = e,
    Ua(r)) : (e.next = n.next,
    n.next = e),
    r.interleaved = e,
    Te(A, t)
}
function Fi(A, e, t) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (t & 4194240) !== 0)) {
        var r = e.lanes;
        r &= A.pendingLanes,
        t |= r,
        e.lanes = t,
        oa(A, t)
    }
}
function Du(A, e) {
    var t = A.updateQueue
      , r = A.alternate;
    if (r !== null && (r = r.updateQueue,
    t === r)) {
        var n = null
          , i = null;
        if (t = t.firstBaseUpdate,
        t !== null) {
            do {
                var s = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                i === null ? n = i = s : i = i.next = s,
                t = t.next
            } while (t !== null);
            i === null ? n = i = e : i = i.next = e
        } else
            n = i = e;
        t = {
            baseState: r.baseState,
            firstBaseUpdate: n,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        A.updateQueue = t;
        return
    }
    A = t.lastBaseUpdate,
    A === null ? t.firstBaseUpdate = e : A.next = e,
    t.lastBaseUpdate = e
}
function Yi(A, e, t, r) {
    var n = A.updateQueue;
    Ge = !1;
    var i = n.firstBaseUpdate
      , s = n.lastBaseUpdate
      , o = n.shared.pending;
    if (o !== null) {
        n.shared.pending = null;
        var l = o
          , a = l.next;
        l.next = null,
        s === null ? i = a : s.next = a,
        s = l;
        var u = A.alternate;
        u !== null && (u = u.updateQueue,
        o = u.lastBaseUpdate,
        o !== s && (o === null ? u.firstBaseUpdate = a : o.next = a,
        u.lastBaseUpdate = l))
    }
    if (i !== null) {
        var B = n.baseState;
        s = 0,
        u = a = l = null,
        o = i;
        do {
            var f = o.lane
              , Q = o.eventTime;
            if ((r & f) === f) {
                u !== null && (u = u.next = {
                    eventTime: Q,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                A: {
                    var w = A
                      , h = o;
                    switch (f = e,
                    Q = t,
                    h.tag) {
                    case 1:
                        if (w = h.payload,
                        typeof w == "function") {
                            B = w.call(Q, B, f);
                            break A
                        }
                        B = w;
                        break A;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = h.payload,
                        f = typeof w == "function" ? w.call(Q, B, f) : w,
                        f == null)
                            break A;
                        B = $({}, B, f);
                        break A;
                    case 2:
                        Ge = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (A.flags |= 64,
                f = n.effects,
                f === null ? n.effects = [o] : f.push(o))
            } else
                Q = {
                    eventTime: Q,
                    lane: f,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                },
                u === null ? (a = u = Q,
                l = B) : u = u.next = Q,
                s |= f;
            if (o = o.next,
            o === null) {
                if (o = n.shared.pending,
                o === null)
                    break;
                f = o,
                o = f.next,
                f.next = null,
                n.lastBaseUpdate = f,
                n.shared.pending = null
            }
        } while (!0);
        if (u === null && (l = B),
        n.baseState = l,
        n.firstBaseUpdate = a,
        n.lastBaseUpdate = u,
        e = n.shared.interleaved,
        e !== null) {
            n = e;
            do
                s |= n.lane,
                n = n.next;
            while (n !== e)
        } else
            i === null && (n.shared.lanes = 0);
        It |= s,
        A.lanes = s,
        A.memoizedState = B
    }
}
function Tu(A, e, t) {
    if (A = e.effects,
    e.effects = null,
    A !== null)
        for (e = 0; e < A.length; e++) {
            var r = A[e]
              , n = r.callback;
            if (n !== null) {
                if (r.callback = null,
                r = t,
                typeof n != "function")
                    throw Error(F(191, n));
                n.call(r)
            }
        }
}
var Cf = new Qc.Component().refs;
function ul(A, e, t, r) {
    e = A.memoizedState,
    t = t(r, e),
    t = t == null ? e : $({}, e, t),
    A.memoizedState = t,
    A.lanes === 0 && (A.updateQueue.baseState = t)
}
var Cs = {
    isMounted: function(A) {
        return (A = A._reactInternals) ? Kt(A) === A : !1
    },
    enqueueSetState: function(A, e, t) {
        A = A._reactInternals;
        var r = LA()
          , n = rt(A)
          , i = Le(r, n);
        i.payload = e,
        t != null && (i.callback = t),
        e = et(A, i, n),
        e !== null && (Be(e, A, n, r),
        Fi(e, A, n))
    },
    enqueueReplaceState: function(A, e, t) {
        A = A._reactInternals;
        var r = LA()
          , n = rt(A)
          , i = Le(r, n);
        i.tag = 1,
        i.payload = e,
        t != null && (i.callback = t),
        e = et(A, i, n),
        e !== null && (Be(e, A, n, r),
        Fi(e, A, n))
    },
    enqueueForceUpdate: function(A, e) {
        A = A._reactInternals;
        var t = LA()
          , r = rt(A)
          , n = Le(t, r);
        n.tag = 2,
        e != null && (n.callback = e),
        e = et(A, n, r),
        e !== null && (Be(e, A, r, t),
        Fi(e, A, r))
    }
};
function Ou(A, e, t, r, n, i, s) {
    return A = A.stateNode,
    typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, i, s) : e.prototype && e.prototype.isPureReactComponent ? !Bn(t, r) || !Bn(n, i) : !0
}
function Uf(A, e, t) {
    var r = !1
      , n = lt
      , i = e.contextType;
    return typeof i == "object" && i !== null ? i = re(i) : (n = RA(e) ? Et : yA.current,
    r = e.contextTypes,
    i = (r = r != null) ? lr(A, n) : lt),
    e = new e(t,i),
    A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = Cs,
    A.stateNode = e,
    e._reactInternals = A,
    r && (A = A.stateNode,
    A.__reactInternalMemoizedUnmaskedChildContext = n,
    A.__reactInternalMemoizedMaskedChildContext = i),
    e
}
function Mu(A, e, t, r) {
    A = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r),
    e.state !== A && Cs.enqueueReplaceState(e, e.state, null)
}
function Bl(A, e, t, r) {
    var n = A.stateNode;
    n.props = t,
    n.state = A.memoizedState,
    n.refs = Cf,
    Fa(A);
    var i = e.contextType;
    typeof i == "object" && i !== null ? n.context = re(i) : (i = RA(e) ? Et : yA.current,
    n.context = lr(A, i)),
    n.state = A.memoizedState,
    i = e.getDerivedStateFromProps,
    typeof i == "function" && (ul(A, e, i, t),
    n.state = A.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state,
    typeof n.componentWillMount == "function" && n.componentWillMount(),
    typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
    e !== n.state && Cs.enqueueReplaceState(n, n.state, null),
    Yi(A, t, n, r),
    n.state = A.memoizedState),
    typeof n.componentDidMount == "function" && (A.flags |= 4194308)
}
function Er(A, e, t) {
    if (A = t.ref,
    A !== null && typeof A != "function" && typeof A != "object") {
        if (t._owner) {
            if (t = t._owner,
            t) {
                if (t.tag !== 1)
                    throw Error(F(309));
                var r = t.stateNode
            }
            if (!r)
                throw Error(F(147, A));
            var n = r
              , i = "" + A;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(s) {
                var o = n.refs;
                o === Cf && (o = n.refs = {}),
                s === null ? delete o[i] : o[i] = s
            }
            ,
            e._stringRef = i,
            e)
        }
        if (typeof A != "string")
            throw Error(F(284));
        if (!t._owner)
            throw Error(F(290, A))
    }
    return A
}
function Pn(A, e) {
    throw A = Object.prototype.toString.call(e),
    Error(F(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A))
}
function ku(A) {
    var e = A._init;
    return e(A._payload)
}
function Ff(A) {
    function e(g, c) {
        if (A) {
            var d = g.deletions;
            d === null ? (g.deletions = [c],
            g.flags |= 16) : d.push(c)
        }
    }
    function t(g, c) {
        if (!A)
            return null;
        for (; c !== null; )
            e(g, c),
            c = c.sibling;
        return null
    }
    function r(g, c) {
        for (g = new Map; c !== null; )
            c.key !== null ? g.set(c.key, c) : g.set(c.index, c),
            c = c.sibling;
        return g
    }
    function n(g, c) {
        return g = nt(g, c),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, c, d) {
        return g.index = d,
        A ? (d = g.alternate,
        d !== null ? (d = d.index,
        d < c ? (g.flags |= 2,
        c) : d) : (g.flags |= 2,
        c)) : (g.flags |= 1048576,
        c)
    }
    function s(g) {
        return A && g.alternate === null && (g.flags |= 2),
        g
    }
    function o(g, c, d, p) {
        return c === null || c.tag !== 6 ? (c = ao(d, g.mode, p),
        c.return = g,
        c) : (c = n(c, d),
        c.return = g,
        c)
    }
    function l(g, c, d, p) {
        var U = d.type;
        return U === Gt ? u(g, c, d.props.children, p, d.key) : c !== null && (c.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ve && ku(U) === c.type) ? (p = n(c, d.props),
        p.ref = Er(g, c, d),
        p.return = g,
        p) : (p = Ii(d.type, d.key, d.props, null, g.mode, p),
        p.ref = Er(g, c, d),
        p.return = g,
        p)
    }
    function a(g, c, d, p) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = uo(d, g.mode, p),
        c.return = g,
        c) : (c = n(c, d.children || []),
        c.return = g,
        c)
    }
    function u(g, c, d, p, U) {
        return c === null || c.tag !== 7 ? (c = Ft(d, g.mode, p, U),
        c.return = g,
        c) : (c = n(c, d),
        c.return = g,
        c)
    }
    function B(g, c, d) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = ao("" + c, g.mode, d),
            c.return = g,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case xn:
                return d = Ii(c.type, c.key, c.props, null, g.mode, d),
                d.ref = Er(g, null, c),
                d.return = g,
                d;
            case Vt:
                return c = uo(c, g.mode, d),
                c.return = g,
                c;
            case Ve:
                var p = c._init;
                return B(g, p(c._payload), d)
            }
            if (Dr(c) || Cr(c))
                return c = Ft(c, g.mode, d, null),
                c.return = g,
                c;
            Pn(g, c)
        }
        return null
    }
    function f(g, c, d, p) {
        var U = c !== null ? c.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return U !== null ? null : o(g, c, "" + d, p);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case xn:
                return d.key === U ? l(g, c, d, p) : null;
            case Vt:
                return d.key === U ? a(g, c, d, p) : null;
            case Ve:
                return U = d._init,
                f(g, c, U(d._payload), p)
            }
            if (Dr(d) || Cr(d))
                return U !== null ? null : u(g, c, d, p, null);
            Pn(g, d)
        }
        return null
    }
    function Q(g, c, d, p, U) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return g = g.get(d) || null,
            o(c, g, "" + p, U);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case xn:
                return g = g.get(p.key === null ? d : p.key) || null,
                l(c, g, p, U);
            case Vt:
                return g = g.get(p.key === null ? d : p.key) || null,
                a(c, g, p, U);
            case Ve:
                var C = p._init;
                return Q(g, c, d, C(p._payload), U)
            }
            if (Dr(p) || Cr(p))
                return g = g.get(d) || null,
                u(c, g, p, U, null);
            Pn(c, p)
        }
        return null
    }
    function w(g, c, d, p) {
        for (var U = null, C = null, v = c, m = c = 0, I = null; v !== null && m < d.length; m++) {
            v.index > m ? (I = v,
            v = null) : I = v.sibling;
            var K = f(g, v, d[m], p);
            if (K === null) {
                v === null && (v = I);
                break
            }
            A && v && K.alternate === null && e(g, v),
            c = i(K, c, m),
            C === null ? U = K : C.sibling = K,
            C = K,
            v = I
        }
        if (m === d.length)
            return t(g, v),
            z && gt(g, m),
            U;
        if (v === null) {
            for (; m < d.length; m++)
                v = B(g, d[m], p),
                v !== null && (c = i(v, c, m),
                C === null ? U = v : C.sibling = v,
                C = v);
            return z && gt(g, m),
            U
        }
        for (v = r(g, v); m < d.length; m++)
            I = Q(v, g, m, d[m], p),
            I !== null && (A && I.alternate !== null && v.delete(I.key === null ? m : I.key),
            c = i(I, c, m),
            C === null ? U = I : C.sibling = I,
            C = I);
        return A && v.forEach(function(G) {
            return e(g, G)
        }),
        z && gt(g, m),
        U
    }
    function h(g, c, d, p) {
        var U = Cr(d);
        if (typeof U != "function")
            throw Error(F(150));
        if (d = U.call(d),
        d == null)
            throw Error(F(151));
        for (var C = U = null, v = c, m = c = 0, I = null, K = d.next(); v !== null && !K.done; m++,
        K = d.next()) {
            v.index > m ? (I = v,
            v = null) : I = v.sibling;
            var G = f(g, v, K.value, p);
            if (G === null) {
                v === null && (v = I);
                break
            }
            A && v && G.alternate === null && e(g, v),
            c = i(G, c, m),
            C === null ? U = G : C.sibling = G,
            C = G,
            v = I
        }
        if (K.done)
            return t(g, v),
            z && gt(g, m),
            U;
        if (v === null) {
            for (; !K.done; m++,
            K = d.next())
                K = B(g, K.value, p),
                K !== null && (c = i(K, c, m),
                C === null ? U = K : C.sibling = K,
                C = K);
            return z && gt(g, m),
            U
        }
        for (v = r(g, v); !K.done; m++,
        K = d.next())
            K = Q(v, g, m, K.value, p),
            K !== null && (A && K.alternate !== null && v.delete(K.key === null ? m : K.key),
            c = i(K, c, m),
            C === null ? U = K : C.sibling = K,
            C = K);
        return A && v.forEach(function(oA) {
            return e(g, oA)
        }),
        z && gt(g, m),
        U
    }
    function S(g, c, d, p) {
        if (typeof d == "object" && d !== null && d.type === Gt && d.key === null && (d = d.props.children),
        typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case xn:
                A: {
                    for (var U = d.key, C = c; C !== null; ) {
                        if (C.key === U) {
                            if (U = d.type,
                            U === Gt) {
                                if (C.tag === 7) {
                                    t(g, C.sibling),
                                    c = n(C, d.props.children),
                                    c.return = g,
                                    g = c;
                                    break A
                                }
                            } else if (C.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ve && ku(U) === C.type) {
                                t(g, C.sibling),
                                c = n(C, d.props),
                                c.ref = Er(g, C, d),
                                c.return = g,
                                g = c;
                                break A
                            }
                            t(g, C);
                            break
                        } else
                            e(g, C);
                        C = C.sibling
                    }
                    d.type === Gt ? (c = Ft(d.props.children, g.mode, p, d.key),
                    c.return = g,
                    g = c) : (p = Ii(d.type, d.key, d.props, null, g.mode, p),
                    p.ref = Er(g, c, d),
                    p.return = g,
                    g = p)
                }
                return s(g);
            case Vt:
                A: {
                    for (C = d.key; c !== null; ) {
                        if (c.key === C)
                            if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                t(g, c.sibling),
                                c = n(c, d.children || []),
                                c.return = g,
                                g = c;
                                break A
                            } else {
                                t(g, c);
                                break
                            }
                        else
                            e(g, c);
                        c = c.sibling
                    }
                    c = uo(d, g.mode, p),
                    c.return = g,
                    g = c
                }
                return s(g);
            case Ve:
                return C = d._init,
                S(g, c, C(d._payload), p)
            }
            if (Dr(d))
                return w(g, c, d, p);
            if (Cr(d))
                return h(g, c, d, p);
            Pn(g, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
        c !== null && c.tag === 6 ? (t(g, c.sibling),
        c = n(c, d),
        c.return = g,
        g = c) : (t(g, c),
        c = ao(d, g.mode, p),
        c.return = g,
        g = c),
        s(g)) : t(g, c)
    }
    return S
}
var ur = Ff(!0)
  , vf = Ff(!1)
  , In = {}
  , Ue = Bt(In)
  , dn = Bt(In)
  , wn = Bt(In);
function pt(A) {
    if (A === In)
        throw Error(F(174));
    return A
}
function va(A, e) {
    switch (J(wn, e),
    J(dn, A),
    J(Ue, In),
    A = e.nodeType,
    A) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : Po(null, "");
        break;
    default:
        A = A === 8 ? e.parentNode : e,
        e = A.namespaceURI || null,
        A = A.tagName,
        e = Po(e, A)
    }
    b(Ue),
    J(Ue, e)
}
function Br() {
    b(Ue),
    b(dn),
    b(wn)
}
function mf(A) {
    pt(wn.current);
    var e = pt(Ue.current)
      , t = Po(e, A.type);
    e !== t && (J(dn, A),
    J(Ue, t))
}
function ma(A) {
    dn.current === A && (b(Ue),
    b(dn))
}
var Z = Bt(0);
function zi(A) {
    for (var e = A; e !== null; ) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t !== null && (t = t.dehydrated,
            t === null || t.data === "$?" || t.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === A)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === A)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var ro = [];
function Ea() {
    for (var A = 0; A < ro.length; A++)
        ro[A]._workInProgressVersionPrimary = null;
    ro.length = 0
}
var vi = ke.ReactCurrentDispatcher
  , no = ke.ReactCurrentBatchConfig
  , Ht = 0
  , j = null
  , lA = null
  , gA = null
  , Zi = !1
  , Yr = !1
  , Qn = 0
  , dQ = 0;
function UA() {
    throw Error(F(321))
}
function ya(A, e) {
    if (e === null)
        return !1;
    for (var t = 0; t < e.length && t < A.length; t++)
        if (!ce(A[t], e[t]))
            return !1;
    return !0
}
function Ha(A, e, t, r, n, i) {
    if (Ht = i,
    j = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    vi.current = A === null || A.memoizedState === null ? pQ : CQ,
    A = t(r, n),
    Yr) {
        i = 0;
        do {
            if (Yr = !1,
            Qn = 0,
            25 <= i)
                throw Error(F(301));
            i += 1,
            gA = lA = null,
            e.updateQueue = null,
            vi.current = UQ,
            A = t(r, n)
        } while (Yr)
    }
    if (vi.current = ji,
    e = lA !== null && lA.next !== null,
    Ht = 0,
    gA = lA = j = null,
    Zi = !1,
    e)
        throw Error(F(300));
    return A
}
function Ia() {
    var A = Qn !== 0;
    return Qn = 0,
    A
}
function he() {
    var A = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return gA === null ? j.memoizedState = gA = A : gA = gA.next = A,
    gA
}
function ne() {
    if (lA === null) {
        var A = j.alternate;
        A = A !== null ? A.memoizedState : null
    } else
        A = lA.next;
    var e = gA === null ? j.memoizedState : gA.next;
    if (e !== null)
        gA = e,
        lA = A;
    else {
        if (A === null)
            throw Error(F(310));
        lA = A,
        A = {
            memoizedState: lA.memoizedState,
            baseState: lA.baseState,
            baseQueue: lA.baseQueue,
            queue: lA.queue,
            next: null
        },
        gA === null ? j.memoizedState = gA = A : gA = gA.next = A
    }
    return gA
}
function hn(A, e) {
    return typeof e == "function" ? e(A) : e
}
function io(A) {
    var e = ne()
      , t = e.queue;
    if (t === null)
        throw Error(F(311));
    t.lastRenderedReducer = A;
    var r = lA
      , n = r.baseQueue
      , i = t.pending;
    if (i !== null) {
        if (n !== null) {
            var s = n.next;
            n.next = i.next,
            i.next = s
        }
        r.baseQueue = n = i,
        t.pending = null
    }
    if (n !== null) {
        i = n.next,
        r = r.baseState;
        var o = s = null
          , l = null
          , a = i;
        do {
            var u = a.lane;
            if ((Ht & u) === u)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }),
                r = a.hasEagerState ? a.eagerState : A(r, a.action);
            else {
                var B = {
                    lane: u,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                l === null ? (o = l = B,
                s = r) : l = l.next = B,
                j.lanes |= u,
                It |= u
            }
            a = a.next
        } while (a !== null && a !== i);
        l === null ? s = r : l.next = o,
        ce(r, e.memoizedState) || (kA = !0),
        e.memoizedState = r,
        e.baseState = s,
        e.baseQueue = l,
        t.lastRenderedState = r
    }
    if (A = t.interleaved,
    A !== null) {
        n = A;
        do
            i = n.lane,
            j.lanes |= i,
            It |= i,
            n = n.next;
        while (n !== A)
    } else
        n === null && (t.lanes = 0);
    return [e.memoizedState, t.dispatch]
}
function so(A) {
    var e = ne()
      , t = e.queue;
    if (t === null)
        throw Error(F(311));
    t.lastRenderedReducer = A;
    var r = t.dispatch
      , n = t.pending
      , i = e.memoizedState;
    if (n !== null) {
        t.pending = null;
        var s = n = n.next;
        do
            i = A(i, s.action),
            s = s.next;
        while (s !== n);
        ce(i, e.memoizedState) || (kA = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        t.lastRenderedState = i
    }
    return [i, r]
}
function Ef() {}
function yf(A, e) {
    var t = j
      , r = ne()
      , n = e()
      , i = !ce(r.memoizedState, n);
    if (i && (r.memoizedState = n,
    kA = !0),
    r = r.queue,
    Sa(Sf.bind(null, t, r, A), [A]),
    r.getSnapshot !== e || i || gA !== null && gA.memoizedState.tag & 1) {
        if (t.flags |= 2048,
        pn(9, If.bind(null, t, r, n, e), void 0, null),
        dA === null)
            throw Error(F(349));
        Ht & 30 || Hf(t, e, n)
    }
    return n
}
function Hf(A, e, t) {
    A.flags |= 16384,
    A = {
        getSnapshot: e,
        value: t
    },
    e = j.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    j.updateQueue = e,
    e.stores = [A]) : (t = e.stores,
    t === null ? e.stores = [A] : t.push(A))
}
function If(A, e, t, r) {
    e.value = t,
    e.getSnapshot = r,
    Lf(e) && Kf(A)
}
function Sf(A, e, t) {
    return t(function() {
        Lf(e) && Kf(A)
    })
}
function Lf(A) {
    var e = A.getSnapshot;
    A = A.value;
    try {
        var t = e();
        return !ce(A, t)
    } catch {
        return !0
    }
}
function Kf(A) {
    var e = Te(A, 1);
    e !== null && Be(e, A, 1, -1)
}
function Nu(A) {
    var e = he();
    return typeof A == "function" && (A = A()),
    e.memoizedState = e.baseState = A,
    A = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: A
    },
    e.queue = A,
    A = A.dispatch = hQ.bind(null, j, A),
    [e.memoizedState, A]
}
function pn(A, e, t, r) {
    return A = {
        tag: A,
        create: e,
        destroy: t,
        deps: r,
        next: null
    },
    e = j.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    j.updateQueue = e,
    e.lastEffect = A.next = A) : (t = e.lastEffect,
    t === null ? e.lastEffect = A.next = A : (r = t.next,
    t.next = A,
    A.next = r,
    e.lastEffect = A)),
    A
}
function xf() {
    return ne().memoizedState
}
function mi(A, e, t, r) {
    var n = he();
    j.flags |= A,
    n.memoizedState = pn(1 | e, t, void 0, r === void 0 ? null : r)
}
function Us(A, e, t, r) {
    var n = ne();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (lA !== null) {
        var s = lA.memoizedState;
        if (i = s.destroy,
        r !== null && ya(r, s.deps)) {
            n.memoizedState = pn(e, t, i, r);
            return
        }
    }
    j.flags |= A,
    n.memoizedState = pn(1 | e, t, i, r)
}
function Ru(A, e) {
    return mi(8390656, 8, A, e)
}
function Sa(A, e) {
    return Us(2048, 8, A, e)
}
function Df(A, e) {
    return Us(4, 2, A, e)
}
function Tf(A, e) {
    return Us(4, 4, A, e)
}
function Of(A, e) {
    if (typeof e == "function")
        return A = A(),
        e(A),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return A = A(),
        e.current = A,
        function() {
            e.current = null
        }
}
function Mf(A, e, t) {
    return t = t != null ? t.concat([A]) : null,
    Us(4, 4, Of.bind(null, e, A), t)
}
function La() {}
function kf(A, e) {
    var t = ne();
    e = e === void 0 ? null : e;
    var r = t.memoizedState;
    return r !== null && e !== null && ya(e, r[1]) ? r[0] : (t.memoizedState = [A, e],
    A)
}
function Nf(A, e) {
    var t = ne();
    e = e === void 0 ? null : e;
    var r = t.memoizedState;
    return r !== null && e !== null && ya(e, r[1]) ? r[0] : (A = A(),
    t.memoizedState = [A, e],
    A)
}
function Rf(A, e, t) {
    return Ht & 21 ? (ce(t, e) || (t = Vc(),
    j.lanes |= t,
    It |= t,
    A.baseState = !0),
    e) : (A.baseState && (A.baseState = !1,
    kA = !0),
    A.memoizedState = t)
}
function wQ(A, e) {
    var t = _;
    _ = t !== 0 && 4 > t ? t : 4,
    A(!0);
    var r = no.transition;
    no.transition = {};
    try {
        A(!1),
        e()
    } finally {
        _ = t,
        no.transition = r
    }
}
function _f() {
    return ne().memoizedState
}
function QQ(A, e, t) {
    var r = rt(A);
    if (t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Vf(A))
        Gf(e, t);
    else if (t = hf(A, e, t, r),
    t !== null) {
        var n = LA();
        Be(t, A, r, n),
        Pf(t, e, r)
    }
}
function hQ(A, e, t) {
    var r = rt(A)
      , n = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Vf(A))
        Gf(e, n);
    else {
        var i = A.alternate;
        if (A.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
            try {
                var s = e.lastRenderedState
                  , o = i(s, t);
                if (n.hasEagerState = !0,
                n.eagerState = o,
                ce(o, s)) {
                    var l = e.interleaved;
                    l === null ? (n.next = n,
                    Ua(e)) : (n.next = l.next,
                    l.next = n),
                    e.interleaved = n;
                    return
                }
            } catch {} finally {}
        t = hf(A, e, n, r),
        t !== null && (n = LA(),
        Be(t, A, r, n),
        Pf(t, e, r))
    }
}
function Vf(A) {
    var e = A.alternate;
    return A === j || e !== null && e === j
}
function Gf(A, e) {
    Yr = Zi = !0;
    var t = A.pending;
    t === null ? e.next = e : (e.next = t.next,
    t.next = e),
    A.pending = e
}
function Pf(A, e, t) {
    if (t & 4194240) {
        var r = e.lanes;
        r &= A.pendingLanes,
        t |= r,
        e.lanes = t,
        oa(A, t)
    }
}
var ji = {
    readContext: re,
    useCallback: UA,
    useContext: UA,
    useEffect: UA,
    useImperativeHandle: UA,
    useInsertionEffect: UA,
    useLayoutEffect: UA,
    useMemo: UA,
    useReducer: UA,
    useRef: UA,
    useState: UA,
    useDebugValue: UA,
    useDeferredValue: UA,
    useTransition: UA,
    useMutableSource: UA,
    useSyncExternalStore: UA,
    useId: UA,
    unstable_isNewReconciler: !1
}
  , pQ = {
    readContext: re,
    useCallback: function(A, e) {
        return he().memoizedState = [A, e === void 0 ? null : e],
        A
    },
    useContext: re,
    useEffect: Ru,
    useImperativeHandle: function(A, e, t) {
        return t = t != null ? t.concat([A]) : null,
        mi(4194308, 4, Of.bind(null, e, A), t)
    },
    useLayoutEffect: function(A, e) {
        return mi(4194308, 4, A, e)
    },
    useInsertionEffect: function(A, e) {
        return mi(4, 2, A, e)
    },
    useMemo: function(A, e) {
        var t = he();
        return e = e === void 0 ? null : e,
        A = A(),
        t.memoizedState = [A, e],
        A
    },
    useReducer: function(A, e, t) {
        var r = he();
        return e = t !== void 0 ? t(e) : e,
        r.memoizedState = r.baseState = e,
        A = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: A,
            lastRenderedState: e
        },
        r.queue = A,
        A = A.dispatch = QQ.bind(null, j, A),
        [r.memoizedState, A]
    },
    useRef: function(A) {
        var e = he();
        return A = {
            current: A
        },
        e.memoizedState = A
    },
    useState: Nu,
    useDebugValue: La,
    useDeferredValue: function(A) {
        return he().memoizedState = A
    },
    useTransition: function() {
        var A = Nu(!1)
          , e = A[0];
        return A = wQ.bind(null, A[1]),
        he().memoizedState = A,
        [e, A]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(A, e, t) {
        var r = j
          , n = he();
        if (z) {
            if (t === void 0)
                throw Error(F(407));
            t = t()
        } else {
            if (t = e(),
            dA === null)
                throw Error(F(349));
            Ht & 30 || Hf(r, e, t)
        }
        n.memoizedState = t;
        var i = {
            value: t,
            getSnapshot: e
        };
        return n.queue = i,
        Ru(Sf.bind(null, r, i, A), [A]),
        r.flags |= 2048,
        pn(9, If.bind(null, r, i, t, e), void 0, null),
        t
    },
    useId: function() {
        var A = he()
          , e = dA.identifierPrefix;
        if (z) {
            var t = Se
              , r = Ie;
            t = (r & ~(1 << 32 - ue(r) - 1)).toString(32) + t,
            e = ":" + e + "R" + t,
            t = Qn++,
            0 < t && (e += "H" + t.toString(32)),
            e += ":"
        } else
            t = dQ++,
            e = ":" + e + "r" + t.toString(32) + ":";
        return A.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , CQ = {
    readContext: re,
    useCallback: kf,
    useContext: re,
    useEffect: Sa,
    useImperativeHandle: Mf,
    useInsertionEffect: Df,
    useLayoutEffect: Tf,
    useMemo: Nf,
    useReducer: io,
    useRef: xf,
    useState: function() {
        return io(hn)
    },
    useDebugValue: La,
    useDeferredValue: function(A) {
        var e = ne();
        return Rf(e, lA.memoizedState, A)
    },
    useTransition: function() {
        var A = io(hn)[0]
          , e = ne().memoizedState;
        return [A, e]
    },
    useMutableSource: Ef,
    useSyncExternalStore: yf,
    useId: _f,
    unstable_isNewReconciler: !1
}
  , UQ = {
    readContext: re,
    useCallback: kf,
    useContext: re,
    useEffect: Sa,
    useImperativeHandle: Mf,
    useInsertionEffect: Df,
    useLayoutEffect: Tf,
    useMemo: Nf,
    useReducer: so,
    useRef: xf,
    useState: function() {
        return so(hn)
    },
    useDebugValue: La,
    useDeferredValue: function(A) {
        var e = ne();
        return lA === null ? e.memoizedState = A : Rf(e, lA.memoizedState, A)
    },
    useTransition: function() {
        var A = so(hn)[0]
          , e = ne().memoizedState;
        return [A, e]
    },
    useMutableSource: Ef,
    useSyncExternalStore: yf,
    useId: _f,
    unstable_isNewReconciler: !1
};
function cr(A, e) {
    try {
        var t = ""
          , r = e;
        do
            t += zd(r),
            r = r.return;
        while (r);
        var n = t
    } catch (i) {
        n = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: A,
        source: e,
        stack: n,
        digest: null
    }
}
function oo(A, e, t) {
    return {
        value: A,
        source: null,
        stack: t ?? null,
        digest: e ?? null
    }
}
function cl(A, e) {
    try {
        console.error(e.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}
var FQ = typeof WeakMap == "function" ? WeakMap : Map;
function Xf(A, e, t) {
    t = Le(-1, t),
    t.tag = 3,
    t.payload = {
        element: null
    };
    var r = e.value;
    return t.callback = function() {
        qi || (qi = !0,
        Fl = r),
        cl(A, e)
    }
    ,
    t
}
function Jf(A, e, t) {
    t = Le(-1, t),
    t.tag = 3;
    var r = A.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var n = e.value;
        t.payload = function() {
            return r(n)
        }
        ,
        t.callback = function() {
            cl(A, e)
        }
    }
    var i = A.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        cl(A, e),
        typeof r != "function" && (tt === null ? tt = new Set([this]) : tt.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    t
}
function _u(A, e, t) {
    var r = A.pingCache;
    if (r === null) {
        r = A.pingCache = new FQ;
        var n = new Set;
        r.set(e, n)
    } else
        n = r.get(e),
        n === void 0 && (n = new Set,
        r.set(e, n));
    n.has(t) || (n.add(t),
    A = MQ.bind(null, A, e, t),
    e.then(A, A))
}
function Vu(A) {
    do {
        var e;
        if ((e = A.tag === 13) && (e = A.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return A;
        A = A.return
    } while (A !== null);
    return null
}
function Gu(A, e, t, r, n) {
    return A.mode & 1 ? (A.flags |= 65536,
    A.lanes = n,
    A) : (A === e ? A.flags |= 65536 : (A.flags |= 128,
    t.flags |= 131072,
    t.flags &= -52805,
    t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = Le(-1, 1),
    e.tag = 2,
    et(t, e, 1))),
    t.lanes |= 1),
    A)
}
var vQ = ke.ReactCurrentOwner
  , kA = !1;
function SA(A, e, t, r) {
    e.child = A === null ? vf(e, null, t, r) : ur(e, A.child, t, r)
}
function Pu(A, e, t, r, n) {
    t = t.render;
    var i = e.ref;
    return nr(e, n),
    r = Ha(A, e, t, r, i, n),
    t = Ia(),
    A !== null && !kA ? (e.updateQueue = A.updateQueue,
    e.flags &= -2053,
    A.lanes &= ~n,
    Oe(A, e, n)) : (z && t && da(e),
    e.flags |= 1,
    SA(A, e, r, n),
    e.child)
}
function Xu(A, e, t, r, n) {
    if (A === null) {
        var i = t.type;
        return typeof i == "function" && !Na(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15,
        e.type = i,
        Wf(A, e, i, r, n)) : (A = Ii(t.type, null, r, e, e.mode, n),
        A.ref = e.ref,
        A.return = e,
        e.child = A)
    }
    if (i = A.child,
    !(A.lanes & n)) {
        var s = i.memoizedProps;
        if (t = t.compare,
        t = t !== null ? t : Bn,
        t(s, r) && A.ref === e.ref)
            return Oe(A, e, n)
    }
    return e.flags |= 1,
    A = nt(i, r),
    A.ref = e.ref,
    A.return = e,
    e.child = A
}
function Wf(A, e, t, r, n) {
    if (A !== null) {
        var i = A.memoizedProps;
        if (Bn(i, r) && A.ref === e.ref)
            if (kA = !1,
            e.pendingProps = r = i,
            (A.lanes & n) !== 0)
                A.flags & 131072 && (kA = !0);
            else
                return e.lanes = A.lanes,
                Oe(A, e, n)
    }
    return fl(A, e, t, r, n)
}
function bf(A, e, t) {
    var r = e.pendingProps
      , n = r.children
      , i = A !== null ? A.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            J($t, PA),
            PA |= t;
        else {
            if (!(t & 1073741824))
                return A = i !== null ? i.baseLanes | t : t,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: A,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                J($t, PA),
                PA |= A,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : t,
            J($t, PA),
            PA |= r
        }
    else
        i !== null ? (r = i.baseLanes | t,
        e.memoizedState = null) : r = t,
        J($t, PA),
        PA |= r;
    return SA(A, e, n, t),
    e.child
}
function Yf(A, e) {
    var t = e.ref;
    (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512,
    e.flags |= 2097152)
}
function fl(A, e, t, r, n) {
    var i = RA(t) ? Et : yA.current;
    return i = lr(e, i),
    nr(e, n),
    t = Ha(A, e, t, r, i, n),
    r = Ia(),
    A !== null && !kA ? (e.updateQueue = A.updateQueue,
    e.flags &= -2053,
    A.lanes &= ~n,
    Oe(A, e, n)) : (z && r && da(e),
    e.flags |= 1,
    SA(A, e, t, n),
    e.child)
}
function Ju(A, e, t, r, n) {
    if (RA(t)) {
        var i = !0;
        Pi(e)
    } else
        i = !1;
    if (nr(e, n),
    e.stateNode === null)
        Ei(A, e),
        Uf(e, t, r),
        Bl(e, t, r, n),
        r = !0;
    else if (A === null) {
        var s = e.stateNode
          , o = e.memoizedProps;
        s.props = o;
        var l = s.context
          , a = t.contextType;
        typeof a == "object" && a !== null ? a = re(a) : (a = RA(t) ? Et : yA.current,
        a = lr(e, a));
        var u = t.getDerivedStateFromProps
          , B = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        B || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || l !== a) && Mu(e, s, r, a),
        Ge = !1;
        var f = e.memoizedState;
        s.state = f,
        Yi(e, r, s, n),
        l = e.memoizedState,
        o !== r || f !== l || NA.current || Ge ? (typeof u == "function" && (ul(e, t, u, r),
        l = e.memoizedState),
        (o = Ge || Ou(e, t, o, r, f, l, a)) ? (B || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = a,
        r = o) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        s = e.stateNode,
        pf(A, e),
        o = e.memoizedProps,
        a = e.type === e.elementType ? o : oe(e.type, o),
        s.props = a,
        B = e.pendingProps,
        f = s.context,
        l = t.contextType,
        typeof l == "object" && l !== null ? l = re(l) : (l = RA(t) ? Et : yA.current,
        l = lr(e, l));
        var Q = t.getDerivedStateFromProps;
        (u = typeof Q == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== B || f !== l) && Mu(e, s, r, l),
        Ge = !1,
        f = e.memoizedState,
        s.state = f,
        Yi(e, r, s, n);
        var w = e.memoizedState;
        o !== B || f !== w || NA.current || Ge ? (typeof Q == "function" && (ul(e, t, Q, r),
        w = e.memoizedState),
        (a = Ge || Ou(e, t, a, r, f, w, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)),
        typeof s.componentDidUpdate == "function" && (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === A.memoizedProps && f === A.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || o === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = w),
        s.props = r,
        s.state = w,
        s.context = l,
        r = a) : (typeof s.componentDidUpdate != "function" || o === A.memoizedProps && f === A.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || o === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return gl(A, e, t, r, i, n)
}
function gl(A, e, t, r, n, i) {
    Yf(A, e);
    var s = (e.flags & 128) !== 0;
    if (!r && !s)
        return n && Lu(e, t, !1),
        Oe(A, e, i);
    r = e.stateNode,
    vQ.current = e;
    var o = s && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    A !== null && s ? (e.child = ur(e, A.child, null, i),
    e.child = ur(e, null, o, i)) : SA(A, e, o, i),
    e.memoizedState = r.state,
    n && Lu(e, t, !0),
    e.child
}
function zf(A) {
    var e = A.stateNode;
    e.pendingContext ? Su(A, e.pendingContext, e.pendingContext !== e.context) : e.context && Su(A, e.context, !1),
    va(A, e.containerInfo)
}
function Wu(A, e, t, r, n) {
    return ar(),
    Qa(n),
    e.flags |= 256,
    SA(A, e, t, r),
    e.child
}
var dl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function wl(A) {
    return {
        baseLanes: A,
        cachePool: null,
        transitions: null
    }
}
function Zf(A, e, t) {
    var r = e.pendingProps, n = Z.current, i = !1, s = (e.flags & 128) !== 0, o;
    if ((o = s) || (o = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0),
    o ? (i = !0,
    e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1),
    J(Z, n & 1),
    A === null)
        return ll(e),
        A = e.memoizedState,
        A !== null && (A = A.dehydrated,
        A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (s = r.children,
        A = r.fallback,
        i ? (r = e.mode,
        i = e.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ms(s, r, 0, null),
        A = Ft(A, r, t, null),
        i.return = e,
        A.return = e,
        i.sibling = A,
        e.child = i,
        e.child.memoizedState = wl(t),
        e.memoizedState = dl,
        A) : Ka(e, s));
    if (n = A.memoizedState,
    n !== null && (o = n.dehydrated,
    o !== null))
        return mQ(A, e, s, r, o, n, t);
    if (i) {
        i = r.fallback,
        s = e.mode,
        n = A.child,
        o = n.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && e.child !== n ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = l,
        e.deletions = null) : (r = nt(n, l),
        r.subtreeFlags = n.subtreeFlags & 14680064),
        o !== null ? i = nt(o, i) : (i = Ft(i, s, t, null),
        i.flags |= 2),
        i.return = e,
        r.return = e,
        r.sibling = i,
        e.child = r,
        r = i,
        i = e.child,
        s = A.child.memoizedState,
        s = s === null ? wl(t) : {
            baseLanes: s.baseLanes | t,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = A.childLanes & ~t,
        e.memoizedState = dl,
        r
    }
    return i = A.child,
    A = i.sibling,
    r = nt(i, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = t),
    r.return = e,
    r.sibling = null,
    A !== null && (t = e.deletions,
    t === null ? (e.deletions = [A],
    e.flags |= 16) : t.push(A)),
    e.child = r,
    e.memoizedState = null,
    r
}
function Ka(A, e) {
    return e = ms({
        mode: "visible",
        children: e
    }, A.mode, 0, null),
    e.return = A,
    A.child = e
}
function Xn(A, e, t, r) {
    return r !== null && Qa(r),
    ur(e, A.child, null, t),
    A = Ka(e, e.pendingProps.children),
    A.flags |= 2,
    e.memoizedState = null,
    A
}
function mQ(A, e, t, r, n, i, s) {
    if (t)
        return e.flags & 256 ? (e.flags &= -257,
        r = oo(Error(F(422))),
        Xn(A, e, s, r)) : e.memoizedState !== null ? (e.child = A.child,
        e.flags |= 128,
        null) : (i = r.fallback,
        n = e.mode,
        r = ms({
            mode: "visible",
            children: r.children
        }, n, 0, null),
        i = Ft(i, n, s, null),
        i.flags |= 2,
        r.return = e,
        i.return = e,
        r.sibling = i,
        e.child = r,
        e.mode & 1 && ur(e, A.child, null, s),
        e.child.memoizedState = wl(s),
        e.memoizedState = dl,
        i);
    if (!(e.mode & 1))
        return Xn(A, e, s, null);
    if (n.data === "$!") {
        if (r = n.nextSibling && n.nextSibling.dataset,
        r)
            var o = r.dgst;
        return r = o,
        i = Error(F(419)),
        r = oo(i, r, void 0),
        Xn(A, e, s, r)
    }
    if (o = (s & A.childLanes) !== 0,
    kA || o) {
        if (r = dA,
        r !== null) {
            switch (s & -s) {
            case 4:
                n = 2;
                break;
            case 16:
                n = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                n = 32;
                break;
            case 536870912:
                n = 268435456;
                break;
            default:
                n = 0
            }
            n = n & (r.suspendedLanes | s) ? 0 : n,
            n !== 0 && n !== i.retryLane && (i.retryLane = n,
            Te(A, n),
            Be(r, A, n, -1))
        }
        return ka(),
        r = oo(Error(F(421))),
        Xn(A, e, s, r)
    }
    return n.data === "$?" ? (e.flags |= 128,
    e.child = A.child,
    e = kQ.bind(null, A),
    n._reactRetry = e,
    null) : (A = i.treeContext,
    XA = At(n.nextSibling),
    JA = e,
    z = !0,
    ae = null,
    A !== null && (ZA[jA++] = Ie,
    ZA[jA++] = Se,
    ZA[jA++] = yt,
    Ie = A.id,
    Se = A.overflow,
    yt = e),
    e = Ka(e, r.children),
    e.flags |= 4096,
    e)
}
function bu(A, e, t) {
    A.lanes |= e;
    var r = A.alternate;
    r !== null && (r.lanes |= e),
    al(A.return, e, t)
}
function lo(A, e, t, r, n) {
    var i = A.memoizedState;
    i === null ? A.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: n
    } : (i.isBackwards = e,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = t,
    i.tailMode = n)
}
function jf(A, e, t) {
    var r = e.pendingProps
      , n = r.revealOrder
      , i = r.tail;
    if (SA(A, e, r.children, t),
    r = Z.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (A !== null && A.flags & 128)
            A: for (A = e.child; A !== null; ) {
                if (A.tag === 13)
                    A.memoizedState !== null && bu(A, t, e);
                else if (A.tag === 19)
                    bu(A, t, e);
                else if (A.child !== null) {
                    A.child.return = A,
                    A = A.child;
                    continue
                }
                if (A === e)
                    break A;
                for (; A.sibling === null; ) {
                    if (A.return === null || A.return === e)
                        break A;
                    A = A.return
                }
                A.sibling.return = A.return,
                A = A.sibling
            }
        r &= 1
    }
    if (J(Z, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (n) {
        case "forwards":
            for (t = e.child,
            n = null; t !== null; )
                A = t.alternate,
                A !== null && zi(A) === null && (n = t),
                t = t.sibling;
            t = n,
            t === null ? (n = e.child,
            e.child = null) : (n = t.sibling,
            t.sibling = null),
            lo(e, !1, n, t, i);
            break;
        case "backwards":
            for (t = null,
            n = e.child,
            e.child = null; n !== null; ) {
                if (A = n.alternate,
                A !== null && zi(A) === null) {
                    e.child = n;
                    break
                }
                A = n.sibling,
                n.sibling = t,
                t = n,
                n = A
            }
            lo(e, !0, t, null, i);
            break;
        case "together":
            lo(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Ei(A, e) {
    !(e.mode & 1) && A !== null && (A.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function Oe(A, e, t) {
    if (A !== null && (e.dependencies = A.dependencies),
    It |= e.lanes,
    !(t & e.childLanes))
        return null;
    if (A !== null && e.child !== A.child)
        throw Error(F(153));
    if (e.child !== null) {
        for (A = e.child,
        t = nt(A, A.pendingProps),
        e.child = t,
        t.return = e; A.sibling !== null; )
            A = A.sibling,
            t = t.sibling = nt(A, A.pendingProps),
            t.return = e;
        t.sibling = null
    }
    return e.child
}
function EQ(A, e, t) {
    switch (e.tag) {
    case 3:
        zf(e),
        ar();
        break;
    case 5:
        mf(e);
        break;
    case 1:
        RA(e.type) && Pi(e);
        break;
    case 4:
        va(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , n = e.memoizedProps.value;
        J(Wi, r._currentValue),
        r._currentValue = n;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (J(Z, Z.current & 1),
            e.flags |= 128,
            null) : t & e.child.childLanes ? Zf(A, e, t) : (J(Z, Z.current & 1),
            A = Oe(A, e, t),
            A !== null ? A.sibling : null);
        J(Z, Z.current & 1);
        break;
    case 19:
        if (r = (t & e.childLanes) !== 0,
        A.flags & 128) {
            if (r)
                return jf(A, e, t);
            e.flags |= 128
        }
        if (n = e.memoizedState,
        n !== null && (n.rendering = null,
        n.tail = null,
        n.lastEffect = null),
        J(Z, Z.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        bf(A, e, t)
    }
    return Oe(A, e, t)
}
var $f, Ql, qf, Ag;
$f = function(A, e) {
    for (var t = e.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6)
            A.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
}
;
Ql = function() {}
;
qf = function(A, e, t, r) {
    var n = A.memoizedProps;
    if (n !== r) {
        A = e.stateNode,
        pt(Ue.current);
        var i = null;
        switch (t) {
        case "input":
            n = Ro(A, n),
            r = Ro(A, r),
            i = [];
            break;
        case "select":
            n = $({}, n, {
                value: void 0
            }),
            r = $({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            n = Go(A, n),
            r = Go(A, r),
            i = [];
            break;
        default:
            typeof n.onClick != "function" && typeof r.onClick == "function" && (A.onclick = Vi)
        }
        Xo(t, r);
        var s;
        t = null;
        for (a in n)
            if (!r.hasOwnProperty(a) && n.hasOwnProperty(a) && n[a] != null)
                if (a === "style") {
                    var o = n[a];
                    for (s in o)
                        o.hasOwnProperty(s) && (t || (t = {}),
                        t[s] = "")
                } else
                    a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (rn.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
        for (a in r) {
            var l = r[a];
            if (o = n != null ? n[a] : void 0,
            r.hasOwnProperty(a) && l !== o && (l != null || o != null))
                if (a === "style")
                    if (o) {
                        for (s in o)
                            !o.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (t || (t = {}),
                            t[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && o[s] !== l[s] && (t || (t = {}),
                            t[s] = l[s])
                    } else
                        t || (i || (i = []),
                        i.push(a, t)),
                        t = l;
                else
                    a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    o = o ? o.__html : void 0,
                    l != null && o !== l && (i = i || []).push(a, l)) : a === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(a, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (rn.hasOwnProperty(a) ? (l != null && a === "onScroll" && W("scroll", A),
                    i || o === l || (i = [])) : (i = i || []).push(a, l))
        }
        t && (i = i || []).push("style", t);
        var a = i;
        (e.updateQueue = a) && (e.flags |= 4)
    }
}
;
Ag = function(A, e, t, r) {
    t !== r && (e.flags |= 4)
}
;
function yr(A, e) {
    if (!z)
        switch (A.tailMode) {
        case "hidden":
            e = A.tail;
            for (var t = null; e !== null; )
                e.alternate !== null && (t = e),
                e = e.sibling;
            t === null ? A.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = A.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : r.sibling = null
        }
}
function FA(A) {
    var e = A.alternate !== null && A.alternate.child === A.child
      , t = 0
      , r = 0;
    if (e)
        for (var n = A.child; n !== null; )
            t |= n.lanes | n.childLanes,
            r |= n.subtreeFlags & 14680064,
            r |= n.flags & 14680064,
            n.return = A,
            n = n.sibling;
    else
        for (n = A.child; n !== null; )
            t |= n.lanes | n.childLanes,
            r |= n.subtreeFlags,
            r |= n.flags,
            n.return = A,
            n = n.sibling;
    return A.subtreeFlags |= r,
    A.childLanes = t,
    e
}
function yQ(A, e, t) {
    var r = e.pendingProps;
    switch (wa(e),
    e.tag) {
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
        return FA(e),
        null;
    case 1:
        return RA(e.type) && Gi(),
        FA(e),
        null;
    case 3:
        return r = e.stateNode,
        Br(),
        b(NA),
        b(yA),
        Ea(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (A === null || A.child === null) && (Gn(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        ae !== null && (El(ae),
        ae = null))),
        Ql(A, e),
        FA(e),
        null;
    case 5:
        ma(e);
        var n = pt(wn.current);
        if (t = e.type,
        A !== null && e.stateNode != null)
            qf(A, e, t, r, n),
            A.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(F(166));
                return FA(e),
                null
            }
            if (A = pt(Ue.current),
            Gn(e)) {
                r = e.stateNode,
                t = e.type;
                var i = e.memoizedProps;
                switch (r[pe] = e,
                r[gn] = i,
                A = (e.mode & 1) !== 0,
                t) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (n = 0; n < Or.length; n++)
                        W(Or[n], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    tu(r, i),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    nu(r, i),
                    W("invalid", r)
                }
                Xo(t, i),
                n = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var o = i[s];
                        s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Vn(r.textContent, o, A),
                        n = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Vn(r.textContent, o, A),
                        n = ["children", "" + o]) : rn.hasOwnProperty(s) && o != null && s === "onScroll" && W("scroll", r)
                    }
                switch (t) {
                case "input":
                    Dn(r),
                    ru(r, i, !0);
                    break;
                case "textarea":
                    Dn(r),
                    iu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Vi)
                }
                r = n,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                s = n.nodeType === 9 ? n : n.ownerDocument,
                A === "http://www.w3.org/1999/xhtml" && (A = yc(t)),
                A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = s.createElement("div"),
                A.innerHTML = "<script><\/script>",
                A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = s.createElement(t, {
                    is: r.is
                }) : (A = s.createElement(t),
                t === "select" && (s = A,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : A = s.createElementNS(A, t),
                A[pe] = e,
                A[gn] = r,
                $f(A, e, !1, !1),
                e.stateNode = A;
                A: {
                    switch (s = Jo(t, r),
                    t) {
                    case "dialog":
                        W("cancel", A),
                        W("close", A),
                        n = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", A),
                        n = r;
                        break;
                    case "video":
                    case "audio":
                        for (n = 0; n < Or.length; n++)
                            W(Or[n], A);
                        n = r;
                        break;
                    case "source":
                        W("error", A),
                        n = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", A),
                        W("load", A),
                        n = r;
                        break;
                    case "details":
                        W("toggle", A),
                        n = r;
                        break;
                    case "input":
                        tu(A, r),
                        n = Ro(A, r),
                        W("invalid", A);
                        break;
                    case "option":
                        n = r;
                        break;
                    case "select":
                        A._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        n = $({}, r, {
                            value: void 0
                        }),
                        W("invalid", A);
                        break;
                    case "textarea":
                        nu(A, r),
                        n = Go(A, r),
                        W("invalid", A);
                        break;
                    default:
                        n = r
                    }
                    Xo(t, n),
                    o = n;
                    for (i in o)
                        if (o.hasOwnProperty(i)) {
                            var l = o[i];
                            i === "style" ? Sc(A, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Hc(A, l)) : i === "children" ? typeof l == "string" ? (t !== "textarea" || l !== "") && nn(A, l) : typeof l == "number" && nn(A, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (rn.hasOwnProperty(i) ? l != null && i === "onScroll" && W("scroll", A) : l != null && ea(A, i, l, s))
                        }
                    switch (t) {
                    case "input":
                        Dn(A),
                        ru(A, r, !1);
                        break;
                    case "textarea":
                        Dn(A),
                        iu(A);
                        break;
                    case "option":
                        r.value != null && A.setAttribute("value", "" + ot(r.value));
                        break;
                    case "select":
                        A.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Ar(A, !!r.multiple, i, !1) : r.defaultValue != null && Ar(A, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof n.onClick == "function" && (A.onclick = Vi)
                    }
                    switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break A;
                    case "img":
                        r = !0;
                        break A;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return FA(e),
        null;
    case 6:
        if (A && e.stateNode != null)
            Ag(A, e, A.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(F(166));
            if (t = pt(wn.current),
            pt(Ue.current),
            Gn(e)) {
                if (r = e.stateNode,
                t = e.memoizedProps,
                r[pe] = e,
                (i = r.nodeValue !== t) && (A = JA,
                A !== null))
                    switch (A.tag) {
                    case 3:
                        Vn(r.nodeValue, t, (A.mode & 1) !== 0);
                        break;
                    case 5:
                        A.memoizedProps.suppressHydrationWarning !== !0 && Vn(r.nodeValue, t, (A.mode & 1) !== 0)
                    }
                i && (e.flags |= 4)
            } else
                r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r),
                r[pe] = e,
                e.stateNode = r
        }
        return FA(e),
        null;
    case 13:
        if (b(Z),
        r = e.memoizedState,
        A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
            if (z && XA !== null && e.mode & 1 && !(e.flags & 128))
                Qf(),
                ar(),
                e.flags |= 98560,
                i = !1;
            else if (i = Gn(e),
            r !== null && r.dehydrated !== null) {
                if (A === null) {
                    if (!i)
                        throw Error(F(318));
                    if (i = e.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(F(317));
                    i[pe] = e
                } else
                    ar(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                FA(e),
                i = !1
            } else
                ae !== null && (El(ae),
                ae = null),
                i = !0;
            if (!i)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = t,
        e) : (r = r !== null,
        r !== (A !== null && A.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (A === null || Z.current & 1 ? uA === 0 && (uA = 3) : ka())),
        e.updateQueue !== null && (e.flags |= 4),
        FA(e),
        null);
    case 4:
        return Br(),
        Ql(A, e),
        A === null && cn(e.stateNode.containerInfo),
        FA(e),
        null;
    case 10:
        return Ca(e.type._context),
        FA(e),
        null;
    case 17:
        return RA(e.type) && Gi(),
        FA(e),
        null;
    case 19:
        if (b(Z),
        i = e.memoizedState,
        i === null)
            return FA(e),
            null;
        if (r = (e.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                yr(i, !1);
            else {
                if (uA !== 0 || A !== null && A.flags & 128)
                    for (A = e.child; A !== null; ) {
                        if (s = zi(A),
                        s !== null) {
                            for (e.flags |= 128,
                            yr(i, !1),
                            r = s.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = t,
                            t = e.child; t !== null; )
                                i = t,
                                A = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = A,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                A = s.dependencies,
                                i.dependencies = A === null ? null : {
                                    lanes: A.lanes,
                                    firstContext: A.firstContext
                                }),
                                t = t.sibling;
                            return J(Z, Z.current & 1 | 2),
                            e.child
                        }
                        A = A.sibling
                    }
                i.tail !== null && rA() > fr && (e.flags |= 128,
                r = !0,
                yr(i, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (A = zi(s),
                A !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    t = A.updateQueue,
                    t !== null && (e.updateQueue = t,
                    e.flags |= 4),
                    yr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !z)
                        return FA(e),
                        null
                } else
                    2 * rA() - i.renderingStartTime > fr && t !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    yr(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (s.sibling = e.child,
            e.child = s) : (t = i.last,
            t !== null ? t.sibling = s : e.child = s,
            i.last = s)
        }
        return i.tail !== null ? (e = i.tail,
        i.rendering = e,
        i.tail = e.sibling,
        i.renderingStartTime = rA(),
        e.sibling = null,
        t = Z.current,
        J(Z, r ? t & 1 | 2 : t & 1),
        e) : (FA(e),
        null);
    case 22:
    case 23:
        return Ma(),
        r = e.memoizedState !== null,
        A !== null && A.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? PA & 1073741824 && (FA(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : FA(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(F(156, e.tag))
}
function HQ(A, e) {
    switch (wa(e),
    e.tag) {
    case 1:
        return RA(e.type) && Gi(),
        A = e.flags,
        A & 65536 ? (e.flags = A & -65537 | 128,
        e) : null;
    case 3:
        return Br(),
        b(NA),
        b(yA),
        Ea(),
        A = e.flags,
        A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128,
        e) : null;
    case 5:
        return ma(e),
        null;
    case 13:
        if (b(Z),
        A = e.memoizedState,
        A !== null && A.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(F(340));
            ar()
        }
        return A = e.flags,
        A & 65536 ? (e.flags = A & -65537 | 128,
        e) : null;
    case 19:
        return b(Z),
        null;
    case 4:
        return Br(),
        null;
    case 10:
        return Ca(e.type._context),
        null;
    case 22:
    case 23:
        return Ma(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Jn = !1
  , EA = !1
  , IQ = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function jt(A, e) {
    var t = A.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null)
            } catch (r) {
                q(A, e, r)
            }
        else
            t.current = null
}
function hl(A, e, t) {
    try {
        t()
    } catch (r) {
        q(A, e, r)
    }
}
var Yu = !1;
function SQ(A, e) {
    if (el = Ni,
    A = rf(),
    ga(A)) {
        if ("selectionStart"in A)
            var t = {
                start: A.selectionStart,
                end: A.selectionEnd
            };
        else
            A: {
                t = (t = A.ownerDocument) && t.defaultView || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var n = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType,
                        i.nodeType
                    } catch {
                        t = null;
                        break A
                    }
                    var s = 0
                      , o = -1
                      , l = -1
                      , a = 0
                      , u = 0
                      , B = A
                      , f = null;
                    e: for (; ; ) {
                        for (var Q; B !== t || n !== 0 && B.nodeType !== 3 || (o = s + n),
                        B !== i || r !== 0 && B.nodeType !== 3 || (l = s + r),
                        B.nodeType === 3 && (s += B.nodeValue.length),
                        (Q = B.firstChild) !== null; )
                            f = B,
                            B = Q;
                        for (; ; ) {
                            if (B === A)
                                break e;
                            if (f === t && ++a === n && (o = s),
                            f === i && ++u === r && (l = s),
                            (Q = B.nextSibling) !== null)
                                break;
                            B = f,
                            f = B.parentNode
                        }
                        B = Q
                    }
                    t = o === -1 || l === -1 ? null : {
                        start: o,
                        end: l
                    }
                } else
                    t = null
            }
        t = t || {
            start: 0,
            end: 0
        }
    } else
        t = null;
    for (tl = {
        focusedElem: A,
        selectionRange: t
    },
    Ni = !1,
    L = e; L !== null; )
        if (e = L,
        A = e.child,
        (e.subtreeFlags & 1028) !== 0 && A !== null)
            A.return = e,
            L = A;
        else
            for (; L !== null; ) {
                e = L;
                try {
                    var w = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var h = w.memoizedProps
                                  , S = w.memoizedState
                                  , g = e.stateNode
                                  , c = g.getSnapshotBeforeUpdate(e.elementType === e.type ? h : oe(e.type, h), S);
                                g.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var d = e.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(F(163))
                        }
                } catch (p) {
                    q(e, e.return, p)
                }
                if (A = e.sibling,
                A !== null) {
                    A.return = e.return,
                    L = A;
                    break
                }
                L = e.return
            }
    return w = Yu,
    Yu = !1,
    w
}
function zr(A, e, t) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var n = r = r.next;
        do {
            if ((n.tag & A) === A) {
                var i = n.destroy;
                n.destroy = void 0,
                i !== void 0 && hl(e, t, i)
            }
            n = n.next
        } while (n !== r)
    }
}
function Fs(A, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var t = e = e.next;
        do {
            if ((t.tag & A) === A) {
                var r = t.create;
                t.destroy = r()
            }
            t = t.next
        } while (t !== e)
    }
}
function pl(A) {
    var e = A.ref;
    if (e !== null) {
        var t = A.stateNode;
        switch (A.tag) {
        case 5:
            A = t;
            break;
        default:
            A = t
        }
        typeof e == "function" ? e(A) : e.current = A
    }
}
function eg(A) {
    var e = A.alternate;
    e !== null && (A.alternate = null,
    eg(e)),
    A.child = null,
    A.deletions = null,
    A.sibling = null,
    A.tag === 5 && (e = A.stateNode,
    e !== null && (delete e[pe],
    delete e[gn],
    delete e[il],
    delete e[BQ],
    delete e[cQ])),
    A.stateNode = null,
    A.return = null,
    A.dependencies = null,
    A.memoizedProps = null,
    A.memoizedState = null,
    A.pendingProps = null,
    A.stateNode = null,
    A.updateQueue = null
}
function tg(A) {
    return A.tag === 5 || A.tag === 3 || A.tag === 4
}
function zu(A) {
    A: for (; ; ) {
        for (; A.sibling === null; ) {
            if (A.return === null || tg(A.return))
                return null;
            A = A.return
        }
        for (A.sibling.return = A.return,
        A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
            if (A.flags & 2 || A.child === null || A.tag === 4)
                continue A;
            A.child.return = A,
            A = A.child
        }
        if (!(A.flags & 2))
            return A.stateNode
    }
}
function Cl(A, e, t) {
    var r = A.tag;
    if (r === 5 || r === 6)
        A = A.stateNode,
        e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode,
        e.insertBefore(A, t)) : (e = t,
        e.appendChild(A)),
        t = t._reactRootContainer,
        t != null || e.onclick !== null || (e.onclick = Vi));
    else if (r !== 4 && (A = A.child,
    A !== null))
        for (Cl(A, e, t),
        A = A.sibling; A !== null; )
            Cl(A, e, t),
            A = A.sibling
}
function Ul(A, e, t) {
    var r = A.tag;
    if (r === 5 || r === 6)
        A = A.stateNode,
        e ? t.insertBefore(A, e) : t.appendChild(A);
    else if (r !== 4 && (A = A.child,
    A !== null))
        for (Ul(A, e, t),
        A = A.sibling; A !== null; )
            Ul(A, e, t),
            A = A.sibling
}
var wA = null
  , le = !1;
function Ne(A, e, t) {
    for (t = t.child; t !== null; )
        rg(A, e, t),
        t = t.sibling
}
function rg(A, e, t) {
    if (Ce && typeof Ce.onCommitFiberUnmount == "function")
        try {
            Ce.onCommitFiberUnmount(gs, t)
        } catch {}
    switch (t.tag) {
    case 5:
        EA || jt(t, e);
    case 6:
        var r = wA
          , n = le;
        wA = null,
        Ne(A, e, t),
        wA = r,
        le = n,
        wA !== null && (le ? (A = wA,
        t = t.stateNode,
        A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : wA.removeChild(t.stateNode));
        break;
    case 18:
        wA !== null && (le ? (A = wA,
        t = t.stateNode,
        A.nodeType === 8 ? eo(A.parentNode, t) : A.nodeType === 1 && eo(A, t),
        an(A)) : eo(wA, t.stateNode));
        break;
    case 4:
        r = wA,
        n = le,
        wA = t.stateNode.containerInfo,
        le = !0,
        Ne(A, e, t),
        wA = r,
        le = n;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!EA && (r = t.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            n = r = r.next;
            do {
                var i = n
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && hl(t, e, s),
                n = n.next
            } while (n !== r)
        }
        Ne(A, e, t);
        break;
    case 1:
        if (!EA && (jt(t, e),
        r = t.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = t.memoizedProps,
                r.state = t.memoizedState,
                r.componentWillUnmount()
            } catch (o) {
                q(t, e, o)
            }
        Ne(A, e, t);
        break;
    case 21:
        Ne(A, e, t);
        break;
    case 22:
        t.mode & 1 ? (EA = (r = EA) || t.memoizedState !== null,
        Ne(A, e, t),
        EA = r) : Ne(A, e, t);
        break;
    default:
        Ne(A, e, t)
    }
}
function Zu(A) {
    var e = A.updateQueue;
    if (e !== null) {
        A.updateQueue = null;
        var t = A.stateNode;
        t === null && (t = A.stateNode = new IQ),
        e.forEach(function(r) {
            var n = NQ.bind(null, A, r);
            t.has(r) || (t.add(r),
            r.then(n, n))
        })
    }
}
function ie(A, e) {
    var t = e.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            try {
                var i = A
                  , s = e
                  , o = s;
                A: for (; o !== null; ) {
                    switch (o.tag) {
                    case 5:
                        wA = o.stateNode,
                        le = !1;
                        break A;
                    case 3:
                        wA = o.stateNode.containerInfo,
                        le = !0;
                        break A;
                    case 4:
                        wA = o.stateNode.containerInfo,
                        le = !0;
                        break A
                    }
                    o = o.return
                }
                if (wA === null)
                    throw Error(F(160));
                rg(i, s, n),
                wA = null,
                le = !1;
                var l = n.alternate;
                l !== null && (l.return = null),
                n.return = null
            } catch (a) {
                q(n, e, a)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            ng(e, A),
            e = e.sibling
}
function ng(A, e) {
    var t = A.alternate
      , r = A.flags;
    switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ie(e, A),
        we(A),
        r & 4) {
            try {
                zr(3, A, A.return),
                Fs(3, A)
            } catch (h) {
                q(A, A.return, h)
            }
            try {
                zr(5, A, A.return)
            } catch (h) {
                q(A, A.return, h)
            }
        }
        break;
    case 1:
        ie(e, A),
        we(A),
        r & 512 && t !== null && jt(t, t.return);
        break;
    case 5:
        if (ie(e, A),
        we(A),
        r & 512 && t !== null && jt(t, t.return),
        A.flags & 32) {
            var n = A.stateNode;
            try {
                nn(n, "")
            } catch (h) {
                q(A, A.return, h)
            }
        }
        if (r & 4 && (n = A.stateNode,
        n != null)) {
            var i = A.memoizedProps
              , s = t !== null ? t.memoizedProps : i
              , o = A.type
              , l = A.updateQueue;
            if (A.updateQueue = null,
            l !== null)
                try {
                    o === "input" && i.type === "radio" && i.name != null && mc(n, i),
                    Jo(o, s);
                    var a = Jo(o, i);
                    for (s = 0; s < l.length; s += 2) {
                        var u = l[s]
                          , B = l[s + 1];
                        u === "style" ? Sc(n, B) : u === "dangerouslySetInnerHTML" ? Hc(n, B) : u === "children" ? nn(n, B) : ea(n, u, B, a)
                    }
                    switch (o) {
                    case "input":
                        _o(n, i);
                        break;
                    case "textarea":
                        Ec(n, i);
                        break;
                    case "select":
                        var f = n._wrapperState.wasMultiple;
                        n._wrapperState.wasMultiple = !!i.multiple;
                        var Q = i.value;
                        Q != null ? Ar(n, !!i.multiple, Q, !1) : f !== !!i.multiple && (i.defaultValue != null ? Ar(n, !!i.multiple, i.defaultValue, !0) : Ar(n, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    n[gn] = i
                } catch (h) {
                    q(A, A.return, h)
                }
        }
        break;
    case 6:
        if (ie(e, A),
        we(A),
        r & 4) {
            if (A.stateNode === null)
                throw Error(F(162));
            n = A.stateNode,
            i = A.memoizedProps;
            try {
                n.nodeValue = i
            } catch (h) {
                q(A, A.return, h)
            }
        }
        break;
    case 3:
        if (ie(e, A),
        we(A),
        r & 4 && t !== null && t.memoizedState.isDehydrated)
            try {
                an(e.containerInfo)
            } catch (h) {
                q(A, A.return, h)
            }
        break;
    case 4:
        ie(e, A),
        we(A);
        break;
    case 13:
        ie(e, A),
        we(A),
        n = A.child,
        n.flags & 8192 && (i = n.memoizedState !== null,
        n.stateNode.isHidden = i,
        !i || n.alternate !== null && n.alternate.memoizedState !== null || (Ta = rA())),
        r & 4 && Zu(A);
        break;
    case 22:
        if (u = t !== null && t.memoizedState !== null,
        A.mode & 1 ? (EA = (a = EA) || u,
        ie(e, A),
        EA = a) : ie(e, A),
        we(A),
        r & 8192) {
            if (a = A.memoizedState !== null,
            (A.stateNode.isHidden = a) && !u && A.mode & 1)
                for (L = A,
                u = A.child; u !== null; ) {
                    for (B = L = u; L !== null; ) {
                        switch (f = L,
                        Q = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            zr(4, f, f.return);
                            break;
                        case 1:
                            jt(f, f.return);
                            var w = f.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = f,
                                t = f.return;
                                try {
                                    e = r,
                                    w.props = e.memoizedProps,
                                    w.state = e.memoizedState,
                                    w.componentWillUnmount()
                                } catch (h) {
                                    q(r, t, h)
                                }
                            }
                            break;
                        case 5:
                            jt(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                $u(B);
                                continue
                            }
                        }
                        Q !== null ? (Q.return = f,
                        L = Q) : $u(B)
                    }
                    u = u.sibling
                }
            A: for (u = null,
            B = A; ; ) {
                if (B.tag === 5) {
                    if (u === null) {
                        u = B;
                        try {
                            n = B.stateNode,
                            a ? (i = n.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = B.stateNode,
                            l = B.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            o.style.display = Ic("display", s))
                        } catch (h) {
                            q(A, A.return, h)
                        }
                    }
                } else if (B.tag === 6) {
                    if (u === null)
                        try {
                            B.stateNode.nodeValue = a ? "" : B.memoizedProps
                        } catch (h) {
                            q(A, A.return, h)
                        }
                } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === A) && B.child !== null) {
                    B.child.return = B,
                    B = B.child;
                    continue
                }
                if (B === A)
                    break A;
                for (; B.sibling === null; ) {
                    if (B.return === null || B.return === A)
                        break A;
                    u === B && (u = null),
                    B = B.return
                }
                u === B && (u = null),
                B.sibling.return = B.return,
                B = B.sibling
            }
        }
        break;
    case 19:
        ie(e, A),
        we(A),
        r & 4 && Zu(A);
        break;
    case 21:
        break;
    default:
        ie(e, A),
        we(A)
    }
}
function we(A) {
    var e = A.flags;
    if (e & 2) {
        try {
            A: {
                for (var t = A.return; t !== null; ) {
                    if (tg(t)) {
                        var r = t;
                        break A
                    }
                    t = t.return
                }
                throw Error(F(160))
            }
            switch (r.tag) {
            case 5:
                var n = r.stateNode;
                r.flags & 32 && (nn(n, ""),
                r.flags &= -33);
                var i = zu(A);
                Ul(A, i, n);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , o = zu(A);
                Cl(A, o, s);
                break;
            default:
                throw Error(F(161))
            }
        } catch (l) {
            q(A, A.return, l)
        }
        A.flags &= -3
    }
    e & 4096 && (A.flags &= -4097)
}
function LQ(A, e, t) {
    L = A,
    ig(A)
}
function ig(A, e, t) {
    for (var r = (A.mode & 1) !== 0; L !== null; ) {
        var n = L
          , i = n.child;
        if (n.tag === 22 && r) {
            var s = n.memoizedState !== null || Jn;
            if (!s) {
                var o = n.alternate
                  , l = o !== null && o.memoizedState !== null || EA;
                o = Jn;
                var a = EA;
                if (Jn = s,
                (EA = l) && !a)
                    for (L = n; L !== null; )
                        s = L,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? qu(n) : l !== null ? (l.return = s,
                        L = l) : qu(n);
                for (; i !== null; )
                    L = i,
                    ig(i),
                    i = i.sibling;
                L = n,
                Jn = o,
                EA = a
            }
            ju(A)
        } else
            n.subtreeFlags & 8772 && i !== null ? (i.return = n,
            L = i) : ju(A)
    }
}
function ju(A) {
    for (; L !== null; ) {
        var e = L;
        if (e.flags & 8772) {
            var t = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        EA || Fs(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !EA)
                            if (t === null)
                                r.componentDidMount();
                            else {
                                var n = e.elementType === e.type ? t.memoizedProps : oe(e.type, t.memoizedProps);
                                r.componentDidUpdate(n, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = e.updateQueue;
                        i !== null && Tu(e, i, r);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (t = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    t = e.child.stateNode;
                                    break;
                                case 1:
                                    t = e.child.stateNode
                                }
                            Tu(e, s, t)
                        }
                        break;
                    case 5:
                        var o = e.stateNode;
                        if (t === null && e.flags & 4) {
                            t = o;
                            var l = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && t.focus();
                                break;
                            case "img":
                                l.src && (t.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var a = e.alternate;
                            if (a !== null) {
                                var u = a.memoizedState;
                                if (u !== null) {
                                    var B = u.dehydrated;
                                    B !== null && an(B)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(F(163))
                    }
                EA || e.flags & 512 && pl(e)
            } catch (f) {
                q(e, e.return, f)
            }
        }
        if (e === A) {
            L = null;
            break
        }
        if (t = e.sibling,
        t !== null) {
            t.return = e.return,
            L = t;
            break
        }
        L = e.return
    }
}
function $u(A) {
    for (; L !== null; ) {
        var e = L;
        if (e === A) {
            L = null;
            break
        }
        var t = e.sibling;
        if (t !== null) {
            t.return = e.return,
            L = t;
            break
        }
        L = e.return
    }
}
function qu(A) {
    for (; L !== null; ) {
        var e = L;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var t = e.return;
                try {
                    Fs(4, e)
                } catch (l) {
                    q(e, t, l)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var n = e.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        q(e, n, l)
                    }
                }
                var i = e.return;
                try {
                    pl(e)
                } catch (l) {
                    q(e, i, l)
                }
                break;
            case 5:
                var s = e.return;
                try {
                    pl(e)
                } catch (l) {
                    q(e, s, l)
                }
            }
        } catch (l) {
            q(e, e.return, l)
        }
        if (e === A) {
            L = null;
            break
        }
        var o = e.sibling;
        if (o !== null) {
            o.return = e.return,
            L = o;
            break
        }
        L = e.return
    }
}
var KQ = Math.ceil
  , $i = ke.ReactCurrentDispatcher
  , xa = ke.ReactCurrentOwner
  , te = ke.ReactCurrentBatchConfig
  , k = 0
  , dA = null
  , sA = null
  , pA = 0
  , PA = 0
  , $t = Bt(0)
  , uA = 0
  , Cn = null
  , It = 0
  , vs = 0
  , Da = 0
  , Zr = null
  , MA = null
  , Ta = 0
  , fr = 1 / 0
  , ye = null
  , qi = !1
  , Fl = null
  , tt = null
  , Wn = !1
  , be = null
  , As = 0
  , jr = 0
  , vl = null
  , yi = -1
  , Hi = 0;
function LA() {
    return k & 6 ? rA() : yi !== -1 ? yi : yi = rA()
}
function rt(A) {
    return A.mode & 1 ? k & 2 && pA !== 0 ? pA & -pA : gQ.transition !== null ? (Hi === 0 && (Hi = Vc()),
    Hi) : (A = _,
    A !== 0 || (A = window.event,
    A = A === void 0 ? 16 : Yc(A.type)),
    A) : 1
}
function Be(A, e, t, r) {
    if (50 < jr)
        throw jr = 0,
        vl = null,
        Error(F(185));
    En(A, t, r),
    (!(k & 2) || A !== dA) && (A === dA && (!(k & 2) && (vs |= t),
    uA === 4 && Je(A, pA)),
    _A(A, r),
    t === 1 && k === 0 && !(e.mode & 1) && (fr = rA() + 500,
    ps && ct()))
}
function _A(A, e) {
    var t = A.callbackNode;
    gw(A, e);
    var r = ki(A, A === dA ? pA : 0);
    if (r === 0)
        t !== null && lu(t),
        A.callbackNode = null,
        A.callbackPriority = 0;
    else if (e = r & -r,
    A.callbackPriority !== e) {
        if (t != null && lu(t),
        e === 1)
            A.tag === 0 ? fQ(AB.bind(null, A)) : gf(AB.bind(null, A)),
            aQ(function() {
                !(k & 6) && ct()
            }),
            t = null;
        else {
            switch (Gc(r)) {
            case 1:
                t = sa;
                break;
            case 4:
                t = Rc;
                break;
            case 16:
                t = Mi;
                break;
            case 536870912:
                t = _c;
                break;
            default:
                t = Mi
            }
            t = fg(t, sg.bind(null, A))
        }
        A.callbackPriority = e,
        A.callbackNode = t
    }
}
function sg(A, e) {
    if (yi = -1,
    Hi = 0,
    k & 6)
        throw Error(F(327));
    var t = A.callbackNode;
    if (ir() && A.callbackNode !== t)
        return null;
    var r = ki(A, A === dA ? pA : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & A.expiredLanes || e)
        e = es(A, r);
    else {
        e = r;
        var n = k;
        k |= 2;
        var i = lg();
        (dA !== A || pA !== e) && (ye = null,
        fr = rA() + 500,
        Ut(A, e));
        do
            try {
                TQ();
                break
            } catch (o) {
                og(A, o)
            }
        while (!0);
        pa(),
        $i.current = i,
        k = n,
        sA !== null ? e = 0 : (dA = null,
        pA = 0,
        e = uA)
    }
    if (e !== 0) {
        if (e === 2 && (n = Zo(A),
        n !== 0 && (r = n,
        e = ml(A, n))),
        e === 1)
            throw t = Cn,
            Ut(A, 0),
            Je(A, r),
            _A(A, rA()),
            t;
        if (e === 6)
            Je(A, r);
        else {
            if (n = A.current.alternate,
            !(r & 30) && !xQ(n) && (e = es(A, r),
            e === 2 && (i = Zo(A),
            i !== 0 && (r = i,
            e = ml(A, i))),
            e === 1))
                throw t = Cn,
                Ut(A, 0),
                Je(A, r),
                _A(A, rA()),
                t;
            switch (A.finishedWork = n,
            A.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(F(345));
            case 2:
                dt(A, MA, ye);
                break;
            case 3:
                if (Je(A, r),
                (r & 130023424) === r && (e = Ta + 500 - rA(),
                10 < e)) {
                    if (ki(A, 0) !== 0)
                        break;
                    if (n = A.suspendedLanes,
                    (n & r) !== r) {
                        LA(),
                        A.pingedLanes |= A.suspendedLanes & n;
                        break
                    }
                    A.timeoutHandle = nl(dt.bind(null, A, MA, ye), e);
                    break
                }
                dt(A, MA, ye);
                break;
            case 4:
                if (Je(A, r),
                (r & 4194240) === r)
                    break;
                for (e = A.eventTimes,
                n = -1; 0 < r; ) {
                    var s = 31 - ue(r);
                    i = 1 << s,
                    s = e[s],
                    s > n && (n = s),
                    r &= ~i
                }
                if (r = n,
                r = rA() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KQ(r / 1960)) - r,
                10 < r) {
                    A.timeoutHandle = nl(dt.bind(null, A, MA, ye), r);
                    break
                }
                dt(A, MA, ye);
                break;
            case 5:
                dt(A, MA, ye);
                break;
            default:
                throw Error(F(329))
            }
        }
    }
    return _A(A, rA()),
    A.callbackNode === t ? sg.bind(null, A) : null
}
function ml(A, e) {
    var t = Zr;
    return A.current.memoizedState.isDehydrated && (Ut(A, e).flags |= 256),
    A = es(A, e),
    A !== 2 && (e = MA,
    MA = t,
    e !== null && El(e)),
    A
}
function El(A) {
    MA === null ? MA = A : MA.push.apply(MA, A)
}
function xQ(A) {
    for (var e = A; ; ) {
        if (e.flags & 16384) {
            var t = e.updateQueue;
            if (t !== null && (t = t.stores,
            t !== null))
                for (var r = 0; r < t.length; r++) {
                    var n = t[r]
                      , i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ce(i(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (t = e.child,
        e.subtreeFlags & 16384 && t !== null)
            t.return = e,
            e = t;
        else {
            if (e === A)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === A)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Je(A, e) {
    for (e &= ~Da,
    e &= ~vs,
    A.suspendedLanes |= e,
    A.pingedLanes &= ~e,
    A = A.expirationTimes; 0 < e; ) {
        var t = 31 - ue(e)
          , r = 1 << t;
        A[t] = -1,
        e &= ~r
    }
}
function AB(A) {
    if (k & 6)
        throw Error(F(327));
    ir();
    var e = ki(A, 0);
    if (!(e & 1))
        return _A(A, rA()),
        null;
    var t = es(A, e);
    if (A.tag !== 0 && t === 2) {
        var r = Zo(A);
        r !== 0 && (e = r,
        t = ml(A, r))
    }
    if (t === 1)
        throw t = Cn,
        Ut(A, 0),
        Je(A, e),
        _A(A, rA()),
        t;
    if (t === 6)
        throw Error(F(345));
    return A.finishedWork = A.current.alternate,
    A.finishedLanes = e,
    dt(A, MA, ye),
    _A(A, rA()),
    null
}
function Oa(A, e) {
    var t = k;
    k |= 1;
    try {
        return A(e)
    } finally {
        k = t,
        k === 0 && (fr = rA() + 500,
        ps && ct())
    }
}
function St(A) {
    be !== null && be.tag === 0 && !(k & 6) && ir();
    var e = k;
    k |= 1;
    var t = te.transition
      , r = _;
    try {
        if (te.transition = null,
        _ = 1,
        A)
            return A()
    } finally {
        _ = r,
        te.transition = t,
        k = e,
        !(k & 6) && ct()
    }
}
function Ma() {
    PA = $t.current,
    b($t)
}
function Ut(A, e) {
    A.finishedWork = null,
    A.finishedLanes = 0;
    var t = A.timeoutHandle;
    if (t !== -1 && (A.timeoutHandle = -1,
    lQ(t)),
    sA !== null)
        for (t = sA.return; t !== null; ) {
            var r = t;
            switch (wa(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Gi();
                break;
            case 3:
                Br(),
                b(NA),
                b(yA),
                Ea();
                break;
            case 5:
                ma(r);
                break;
            case 4:
                Br();
                break;
            case 13:
                b(Z);
                break;
            case 19:
                b(Z);
                break;
            case 10:
                Ca(r.type._context);
                break;
            case 22:
            case 23:
                Ma()
            }
            t = t.return
        }
    if (dA = A,
    sA = A = nt(A.current, null),
    pA = PA = e,
    uA = 0,
    Cn = null,
    Da = vs = It = 0,
    MA = Zr = null,
    ht !== null) {
        for (e = 0; e < ht.length; e++)
            if (t = ht[e],
            r = t.interleaved,
            r !== null) {
                t.interleaved = null;
                var n = r.next
                  , i = t.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = n,
                    r.next = s
                }
                t.pending = r
            }
        ht = null
    }
    return A
}
function og(A, e) {
    do {
        var t = sA;
        try {
            if (pa(),
            vi.current = ji,
            Zi) {
                for (var r = j.memoizedState; r !== null; ) {
                    var n = r.queue;
                    n !== null && (n.pending = null),
                    r = r.next
                }
                Zi = !1
            }
            if (Ht = 0,
            gA = lA = j = null,
            Yr = !1,
            Qn = 0,
            xa.current = null,
            t === null || t.return === null) {
                uA = 1,
                Cn = e,
                sA = null;
                break
            }
            A: {
                var i = A
                  , s = t.return
                  , o = t
                  , l = e;
                if (e = pA,
                o.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var a = l
                      , u = o
                      , B = u.tag;
                    if (!(u.mode & 1) && (B === 0 || B === 11 || B === 15)) {
                        var f = u.alternate;
                        f ? (u.updateQueue = f.updateQueue,
                        u.memoizedState = f.memoizedState,
                        u.lanes = f.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var Q = Vu(s);
                    if (Q !== null) {
                        Q.flags &= -257,
                        Gu(Q, s, o, i, e),
                        Q.mode & 1 && _u(i, a, e),
                        e = Q,
                        l = a;
                        var w = e.updateQueue;
                        if (w === null) {
                            var h = new Set;
                            h.add(l),
                            e.updateQueue = h
                        } else
                            w.add(l);
                        break A
                    } else {
                        if (!(e & 1)) {
                            _u(i, a, e),
                            ka();
                            break A
                        }
                        l = Error(F(426))
                    }
                } else if (z && o.mode & 1) {
                    var S = Vu(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Gu(S, s, o, i, e),
                        Qa(cr(l, o));
                        break A
                    }
                }
                i = l = cr(l, o),
                uA !== 4 && (uA = 2),
                Zr === null ? Zr = [i] : Zr.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        e &= -e,
                        i.lanes |= e;
                        var g = Xf(i, l, e);
                        Du(i, g);
                        break A;
                    case 1:
                        o = l;
                        var c = i.type
                          , d = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (tt === null || !tt.has(d)))) {
                            i.flags |= 65536,
                            e &= -e,
                            i.lanes |= e;
                            var p = Jf(i, o, e);
                            Du(i, p);
                            break A
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            ug(t)
        } catch (U) {
            e = U,
            sA === t && t !== null && (sA = t = t.return);
            continue
        }
        break
    } while (!0)
}
function lg() {
    var A = $i.current;
    return $i.current = ji,
    A === null ? ji : A
}
function ka() {
    (uA === 0 || uA === 3 || uA === 2) && (uA = 4),
    dA === null || !(It & 268435455) && !(vs & 268435455) || Je(dA, pA)
}
function es(A, e) {
    var t = k;
    k |= 2;
    var r = lg();
    (dA !== A || pA !== e) && (ye = null,
    Ut(A, e));
    do
        try {
            DQ();
            break
        } catch (n) {
            og(A, n)
        }
    while (!0);
    if (pa(),
    k = t,
    $i.current = r,
    sA !== null)
        throw Error(F(261));
    return dA = null,
    pA = 0,
    uA
}
function DQ() {
    for (; sA !== null; )
        ag(sA)
}
function TQ() {
    for (; sA !== null && !iw(); )
        ag(sA)
}
function ag(A) {
    var e = cg(A.alternate, A, PA);
    A.memoizedProps = A.pendingProps,
    e === null ? ug(A) : sA = e,
    xa.current = null
}
function ug(A) {
    var e = A;
    do {
        var t = e.alternate;
        if (A = e.return,
        e.flags & 32768) {
            if (t = HQ(t, e),
            t !== null) {
                t.flags &= 32767,
                sA = t;
                return
            }
            if (A !== null)
                A.flags |= 32768,
                A.subtreeFlags = 0,
                A.deletions = null;
            else {
                uA = 6,
                sA = null;
                return
            }
        } else if (t = yQ(t, e, PA),
        t !== null) {
            sA = t;
            return
        }
        if (e = e.sibling,
        e !== null) {
            sA = e;
            return
        }
        sA = e = A
    } while (e !== null);
    uA === 0 && (uA = 5)
}
function dt(A, e, t) {
    var r = _
      , n = te.transition;
    try {
        te.transition = null,
        _ = 1,
        OQ(A, e, t, r)
    } finally {
        te.transition = n,
        _ = r
    }
    return null
}
function OQ(A, e, t, r) {
    do
        ir();
    while (be !== null);
    if (k & 6)
        throw Error(F(327));
    t = A.finishedWork;
    var n = A.finishedLanes;
    if (t === null)
        return null;
    if (A.finishedWork = null,
    A.finishedLanes = 0,
    t === A.current)
        throw Error(F(177));
    A.callbackNode = null,
    A.callbackPriority = 0;
    var i = t.lanes | t.childLanes;
    if (dw(A, i),
    A === dA && (sA = dA = null,
    pA = 0),
    !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Wn || (Wn = !0,
    fg(Mi, function() {
        return ir(),
        null
    })),
    i = (t.flags & 15990) !== 0,
    t.subtreeFlags & 15990 || i) {
        i = te.transition,
        te.transition = null;
        var s = _;
        _ = 1;
        var o = k;
        k |= 4,
        xa.current = null,
        SQ(A, t),
        ng(t, A),
        eQ(tl),
        Ni = !!el,
        tl = el = null,
        A.current = t,
        LQ(t),
        sw(),
        k = o,
        _ = s,
        te.transition = i
    } else
        A.current = t;
    if (Wn && (Wn = !1,
    be = A,
    As = n),
    i = A.pendingLanes,
    i === 0 && (tt = null),
    aw(t.stateNode),
    _A(A, rA()),
    e !== null)
        for (r = A.onRecoverableError,
        t = 0; t < e.length; t++)
            n = e[t],
            r(n.value, {
                componentStack: n.stack,
                digest: n.digest
            });
    if (qi)
        throw qi = !1,
        A = Fl,
        Fl = null,
        A;
    return As & 1 && A.tag !== 0 && ir(),
    i = A.pendingLanes,
    i & 1 ? A === vl ? jr++ : (jr = 0,
    vl = A) : jr = 0,
    ct(),
    null
}
function ir() {
    if (be !== null) {
        var A = Gc(As)
          , e = te.transition
          , t = _;
        try {
            if (te.transition = null,
            _ = 16 > A ? 16 : A,
            be === null)
                var r = !1;
            else {
                if (A = be,
                be = null,
                As = 0,
                k & 6)
                    throw Error(F(331));
                var n = k;
                for (k |= 4,
                L = A.current; L !== null; ) {
                    var i = L
                      , s = i.child;
                    if (L.flags & 16) {
                        var o = i.deletions;
                        if (o !== null) {
                            for (var l = 0; l < o.length; l++) {
                                var a = o[l];
                                for (L = a; L !== null; ) {
                                    var u = L;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zr(8, u, i)
                                    }
                                    var B = u.child;
                                    if (B !== null)
                                        B.return = u,
                                        L = B;
                                    else
                                        for (; L !== null; ) {
                                            u = L;
                                            var f = u.sibling
                                              , Q = u.return;
                                            if (eg(u),
                                            u === a) {
                                                L = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = Q,
                                                L = f;
                                                break
                                            }
                                            L = Q
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var h = w.child;
                                if (h !== null) {
                                    w.child = null;
                                    do {
                                        var S = h.sibling;
                                        h.sibling = null,
                                        h = S
                                    } while (h !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        L = s;
                    else
                        A: for (; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zr(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                L = g;
                                break A
                            }
                            L = i.return
                        }
                }
                var c = A.current;
                for (L = c; L !== null; ) {
                    s = L;
                    var d = s.child;
                    if (s.subtreeFlags & 2064 && d !== null)
                        d.return = s,
                        L = d;
                    else
                        A: for (s = c; L !== null; ) {
                            if (o = L,
                            o.flags & 2048)
                                try {
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fs(9, o)
                                    }
                                } catch (U) {
                                    q(o, o.return, U)
                                }
                            if (o === s) {
                                L = null;
                                break A
                            }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                L = p;
                                break A
                            }
                            L = o.return
                        }
                }
                if (k = n,
                ct(),
                Ce && typeof Ce.onPostCommitFiberRoot == "function")
                    try {
                        Ce.onPostCommitFiberRoot(gs, A)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            _ = t,
            te.transition = e
        }
    }
    return !1
}
function eB(A, e, t) {
    e = cr(t, e),
    e = Xf(A, e, 1),
    A = et(A, e, 1),
    e = LA(),
    A !== null && (En(A, 1, e),
    _A(A, e))
}
function q(A, e, t) {
    if (A.tag === 3)
        eB(A, A, t);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                eB(e, A, t);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tt === null || !tt.has(r))) {
                    A = cr(t, A),
                    A = Jf(e, A, 1),
                    e = et(e, A, 1),
                    A = LA(),
                    e !== null && (En(e, 1, A),
                    _A(e, A));
                    break
                }
            }
            e = e.return
        }
}
function MQ(A, e, t) {
    var r = A.pingCache;
    r !== null && r.delete(e),
    e = LA(),
    A.pingedLanes |= A.suspendedLanes & t,
    dA === A && (pA & t) === t && (uA === 4 || uA === 3 && (pA & 130023424) === pA && 500 > rA() - Ta ? Ut(A, 0) : Da |= t),
    _A(A, e)
}
function Bg(A, e) {
    e === 0 && (A.mode & 1 ? (e = Mn,
    Mn <<= 1,
    !(Mn & 130023424) && (Mn = 4194304)) : e = 1);
    var t = LA();
    A = Te(A, e),
    A !== null && (En(A, e, t),
    _A(A, t))
}
function kQ(A) {
    var e = A.memoizedState
      , t = 0;
    e !== null && (t = e.retryLane),
    Bg(A, t)
}
function NQ(A, e) {
    var t = 0;
    switch (A.tag) {
    case 13:
        var r = A.stateNode
          , n = A.memoizedState;
        n !== null && (t = n.retryLane);
        break;
    case 19:
        r = A.stateNode;
        break;
    default:
        throw Error(F(314))
    }
    r !== null && r.delete(e),
    Bg(A, t)
}
var cg;
cg = function(A, e, t) {
    if (A !== null)
        if (A.memoizedProps !== e.pendingProps || NA.current)
            kA = !0;
        else {
            if (!(A.lanes & t) && !(e.flags & 128))
                return kA = !1,
                EQ(A, e, t);
            kA = !!(A.flags & 131072)
        }
    else
        kA = !1,
        z && e.flags & 1048576 && df(e, Ji, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        Ei(A, e),
        A = e.pendingProps;
        var n = lr(e, yA.current);
        nr(e, t),
        n = Ha(null, e, r, A, n, t);
        var i = Ia();
        return e.flags |= 1,
        typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        RA(r) ? (i = !0,
        Pi(e)) : i = !1,
        e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
        Fa(e),
        n.updater = Cs,
        e.stateNode = n,
        n._reactInternals = e,
        Bl(e, r, A, t),
        e = gl(null, e, r, !0, i, t)) : (e.tag = 0,
        z && i && da(e),
        SA(null, e, n, t),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        A: {
            switch (Ei(A, e),
            A = e.pendingProps,
            n = r._init,
            r = n(r._payload),
            e.type = r,
            n = e.tag = _Q(r),
            A = oe(r, A),
            n) {
            case 0:
                e = fl(null, e, r, A, t);
                break A;
            case 1:
                e = Ju(null, e, r, A, t);
                break A;
            case 11:
                e = Pu(null, e, r, A, t);
                break A;
            case 14:
                e = Xu(null, e, r, oe(r.type, A), t);
                break A
            }
            throw Error(F(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        n = e.pendingProps,
        n = e.elementType === r ? n : oe(r, n),
        fl(A, e, r, n, t);
    case 1:
        return r = e.type,
        n = e.pendingProps,
        n = e.elementType === r ? n : oe(r, n),
        Ju(A, e, r, n, t);
    case 3:
        A: {
            if (zf(e),
            A === null)
                throw Error(F(387));
            r = e.pendingProps,
            i = e.memoizedState,
            n = i.element,
            pf(A, e),
            Yi(e, r, null, t);
            var s = e.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                e.updateQueue.baseState = i,
                e.memoizedState = i,
                e.flags & 256) {
                    n = cr(Error(F(423)), e),
                    e = Wu(A, e, r, t, n);
                    break A
                } else if (r !== n) {
                    n = cr(Error(F(424)), e),
                    e = Wu(A, e, r, t, n);
                    break A
                } else
                    for (XA = At(e.stateNode.containerInfo.firstChild),
                    JA = e,
                    z = !0,
                    ae = null,
                    t = vf(e, null, r, t),
                    e.child = t; t; )
                        t.flags = t.flags & -3 | 4096,
                        t = t.sibling;
            else {
                if (ar(),
                r === n) {
                    e = Oe(A, e, t);
                    break A
                }
                SA(A, e, r, t)
            }
            e = e.child
        }
        return e;
    case 5:
        return mf(e),
        A === null && ll(e),
        r = e.type,
        n = e.pendingProps,
        i = A !== null ? A.memoizedProps : null,
        s = n.children,
        rl(r, n) ? s = null : i !== null && rl(r, i) && (e.flags |= 32),
        Yf(A, e),
        SA(A, e, s, t),
        e.child;
    case 6:
        return A === null && ll(e),
        null;
    case 13:
        return Zf(A, e, t);
    case 4:
        return va(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        A === null ? e.child = ur(e, null, r, t) : SA(A, e, r, t),
        e.child;
    case 11:
        return r = e.type,
        n = e.pendingProps,
        n = e.elementType === r ? n : oe(r, n),
        Pu(A, e, r, n, t);
    case 7:
        return SA(A, e, e.pendingProps, t),
        e.child;
    case 8:
        return SA(A, e, e.pendingProps.children, t),
        e.child;
    case 12:
        return SA(A, e, e.pendingProps.children, t),
        e.child;
    case 10:
        A: {
            if (r = e.type._context,
            n = e.pendingProps,
            i = e.memoizedProps,
            s = n.value,
            J(Wi, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (ce(i.value, s)) {
                    if (i.children === n.children && !NA.current) {
                        e = Oe(A, e, t);
                        break A
                    }
                } else
                    for (i = e.child,
                    i !== null && (i.return = e); i !== null; ) {
                        var o = i.dependencies;
                        if (o !== null) {
                            s = i.child;
                            for (var l = o.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Le(-1, t & -t),
                                        l.tag = 2;
                                        var a = i.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var u = a.pending;
                                            u === null ? l.next = l : (l.next = u.next,
                                            u.next = l),
                                            a.pending = l
                                        }
                                    }
                                    i.lanes |= t,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= t),
                                    al(i.return, t, e),
                                    o.lanes |= t;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === e.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(F(341));
                            s.lanes |= t,
                            o = s.alternate,
                            o !== null && (o.lanes |= t),
                            al(s, t, e),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            SA(A, e, n.children, t),
            e = e.child
        }
        return e;
    case 9:
        return n = e.type,
        r = e.pendingProps.children,
        nr(e, t),
        n = re(n),
        r = r(n),
        e.flags |= 1,
        SA(A, e, r, t),
        e.child;
    case 14:
        return r = e.type,
        n = oe(r, e.pendingProps),
        n = oe(r.type, n),
        Xu(A, e, r, n, t);
    case 15:
        return Wf(A, e, e.type, e.pendingProps, t);
    case 17:
        return r = e.type,
        n = e.pendingProps,
        n = e.elementType === r ? n : oe(r, n),
        Ei(A, e),
        e.tag = 1,
        RA(r) ? (A = !0,
        Pi(e)) : A = !1,
        nr(e, t),
        Uf(e, r, n),
        Bl(e, r, n, t),
        gl(null, e, r, !0, A, t);
    case 19:
        return jf(A, e, t);
    case 22:
        return bf(A, e, t)
    }
    throw Error(F(156, e.tag))
}
;
function fg(A, e) {
    return Nc(A, e)
}
function RQ(A, e, t, r) {
    this.tag = A,
    this.key = t,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function qA(A, e, t, r) {
    return new RQ(A,e,t,r)
}
function Na(A) {
    return A = A.prototype,
    !(!A || !A.isReactComponent)
}
function _Q(A) {
    if (typeof A == "function")
        return Na(A) ? 1 : 0;
    if (A != null) {
        if (A = A.$$typeof,
        A === ra)
            return 11;
        if (A === na)
            return 14
    }
    return 2
}
function nt(A, e) {
    var t = A.alternate;
    return t === null ? (t = qA(A.tag, e, A.key, A.mode),
    t.elementType = A.elementType,
    t.type = A.type,
    t.stateNode = A.stateNode,
    t.alternate = A,
    A.alternate = t) : (t.pendingProps = e,
    t.type = A.type,
    t.flags = 0,
    t.subtreeFlags = 0,
    t.deletions = null),
    t.flags = A.flags & 14680064,
    t.childLanes = A.childLanes,
    t.lanes = A.lanes,
    t.child = A.child,
    t.memoizedProps = A.memoizedProps,
    t.memoizedState = A.memoizedState,
    t.updateQueue = A.updateQueue,
    e = A.dependencies,
    t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    t.sibling = A.sibling,
    t.index = A.index,
    t.ref = A.ref,
    t
}
function Ii(A, e, t, r, n, i) {
    var s = 2;
    if (r = A,
    typeof A == "function")
        Na(A) && (s = 1);
    else if (typeof A == "string")
        s = 5;
    else
        A: switch (A) {
        case Gt:
            return Ft(t.children, n, i, e);
        case ta:
            s = 8,
            n |= 8;
            break;
        case Oo:
            return A = qA(12, t, e, n | 2),
            A.elementType = Oo,
            A.lanes = i,
            A;
        case Mo:
            return A = qA(13, t, e, n),
            A.elementType = Mo,
            A.lanes = i,
            A;
        case ko:
            return A = qA(19, t, e, n),
            A.elementType = ko,
            A.lanes = i,
            A;
        case Uc:
            return ms(t, n, i, e);
        default:
            if (typeof A == "object" && A !== null)
                switch (A.$$typeof) {
                case pc:
                    s = 10;
                    break A;
                case Cc:
                    s = 9;
                    break A;
                case ra:
                    s = 11;
                    break A;
                case na:
                    s = 14;
                    break A;
                case Ve:
                    s = 16,
                    r = null;
                    break A
                }
            throw Error(F(130, A == null ? A : typeof A, ""))
        }
    return e = qA(s, t, e, n),
    e.elementType = A,
    e.type = r,
    e.lanes = i,
    e
}
function Ft(A, e, t, r) {
    return A = qA(7, A, r, e),
    A.lanes = t,
    A
}
function ms(A, e, t, r) {
    return A = qA(22, A, r, e),
    A.elementType = Uc,
    A.lanes = t,
    A.stateNode = {
        isHidden: !1
    },
    A
}
function ao(A, e, t) {
    return A = qA(6, A, null, e),
    A.lanes = t,
    A
}
function uo(A, e, t) {
    return e = qA(4, A.children !== null ? A.children : [], A.key, e),
    e.lanes = t,
    e.stateNode = {
        containerInfo: A.containerInfo,
        pendingChildren: null,
        implementation: A.implementation
    },
    e
}
function VQ(A, e, t, r, n) {
    this.tag = e,
    this.containerInfo = A,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Xs(0),
    this.expirationTimes = Xs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Xs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = n,
    this.mutableSourceEagerHydrationData = null
}
function Ra(A, e, t, r, n, i, s, o, l) {
    return A = new VQ(A,e,t,o,l),
    e === 1 ? (e = 1,
    i === !0 && (e |= 8)) : e = 0,
    i = qA(3, null, null, e),
    A.current = i,
    i.stateNode = A,
    i.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Fa(i),
    A
}
function GQ(A, e, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Vt,
        key: r == null ? null : "" + r,
        children: A,
        containerInfo: e,
        implementation: t
    }
}
function gg(A) {
    if (!A)
        return lt;
    A = A._reactInternals;
    A: {
        if (Kt(A) !== A || A.tag !== 1)
            throw Error(F(170));
        var e = A;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break A;
            case 1:
                if (RA(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break A
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(F(171))
    }
    if (A.tag === 1) {
        var t = A.type;
        if (RA(t))
            return ff(A, t, e)
    }
    return e
}
function dg(A, e, t, r, n, i, s, o, l) {
    return A = Ra(t, r, !0, A, n, i, s, o, l),
    A.context = gg(null),
    t = A.current,
    r = LA(),
    n = rt(t),
    i = Le(r, n),
    i.callback = e ?? null,
    et(t, i, n),
    A.current.lanes = n,
    En(A, n, r),
    _A(A, r),
    A
}
function Es(A, e, t, r) {
    var n = e.current
      , i = LA()
      , s = rt(n);
    return t = gg(t),
    e.context === null ? e.context = t : e.pendingContext = t,
    e = Le(i, s),
    e.payload = {
        element: A
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    A = et(n, e, s),
    A !== null && (Be(A, n, s, i),
    Fi(A, n, s)),
    s
}
function ts(A) {
    if (A = A.current,
    !A.child)
        return null;
    switch (A.child.tag) {
    case 5:
        return A.child.stateNode;
    default:
        return A.child.stateNode
    }
}
function tB(A, e) {
    if (A = A.memoizedState,
    A !== null && A.dehydrated !== null) {
        var t = A.retryLane;
        A.retryLane = t !== 0 && t < e ? t : e
    }
}
function _a(A, e) {
    tB(A, e),
    (A = A.alternate) && tB(A, e)
}
function PQ() {
    return null
}
var wg = typeof reportError == "function" ? reportError : function(A) {
    console.error(A)
}
;
function Va(A) {
    this._internalRoot = A
}
ys.prototype.render = Va.prototype.render = function(A) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(F(409));
    Es(A, e, null, null)
}
;
ys.prototype.unmount = Va.prototype.unmount = function() {
    var A = this._internalRoot;
    if (A !== null) {
        this._internalRoot = null;
        var e = A.containerInfo;
        St(function() {
            Es(null, A, null, null)
        }),
        e[De] = null
    }
}
;
function ys(A) {
    this._internalRoot = A
}
ys.prototype.unstable_scheduleHydration = function(A) {
    if (A) {
        var e = Jc();
        A = {
            blockedOn: null,
            target: A,
            priority: e
        };
        for (var t = 0; t < Xe.length && e !== 0 && e < Xe[t].priority; t++)
            ;
        Xe.splice(t, 0, A),
        t === 0 && bc(A)
    }
}
;
function Ga(A) {
    return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
}
function Hs(A) {
    return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
}
function rB() {}
function XQ(A, e, t, r, n) {
    if (n) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var a = ts(s);
                i.call(a)
            }
        }
        var s = dg(e, r, A, 0, null, !1, !1, "", rB);
        return A._reactRootContainer = s,
        A[De] = s.current,
        cn(A.nodeType === 8 ? A.parentNode : A),
        St(),
        s
    }
    for (; n = A.lastChild; )
        A.removeChild(n);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var a = ts(l);
            o.call(a)
        }
    }
    var l = Ra(A, 0, !1, null, null, !1, !1, "", rB);
    return A._reactRootContainer = l,
    A[De] = l.current,
    cn(A.nodeType === 8 ? A.parentNode : A),
    St(function() {
        Es(e, l, t, r)
    }),
    l
}
function Is(A, e, t, r, n) {
    var i = t._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof n == "function") {
            var o = n;
            n = function() {
                var l = ts(s);
                o.call(l)
            }
        }
        Es(e, s, A, n)
    } else
        s = XQ(t, e, A, n, r);
    return ts(s)
}
Pc = function(A) {
    switch (A.tag) {
    case 3:
        var e = A.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var t = Tr(e.pendingLanes);
            t !== 0 && (oa(e, t | 1),
            _A(e, rA()),
            !(k & 6) && (fr = rA() + 500,
            ct()))
        }
        break;
    case 13:
        St(function() {
            var r = Te(A, 1);
            if (r !== null) {
                var n = LA();
                Be(r, A, 1, n)
            }
        }),
        _a(A, 1)
    }
}
;
la = function(A) {
    if (A.tag === 13) {
        var e = Te(A, 134217728);
        if (e !== null) {
            var t = LA();
            Be(e, A, 134217728, t)
        }
        _a(A, 134217728)
    }
}
;
Xc = function(A) {
    if (A.tag === 13) {
        var e = rt(A)
          , t = Te(A, e);
        if (t !== null) {
            var r = LA();
            Be(t, A, e, r)
        }
        _a(A, e)
    }
}
;
Jc = function() {
    return _
}
;
Wc = function(A, e) {
    var t = _;
    try {
        return _ = A,
        e()
    } finally {
        _ = t
    }
}
;
bo = function(A, e, t) {
    switch (e) {
    case "input":
        if (_o(A, t),
        e = t.name,
        t.type === "radio" && e != null) {
            for (t = A; t.parentNode; )
                t = t.parentNode;
            for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < t.length; e++) {
                var r = t[e];
                if (r !== A && r.form === A.form) {
                    var n = hs(r);
                    if (!n)
                        throw Error(F(90));
                    vc(r),
                    _o(r, n)
                }
            }
        }
        break;
    case "textarea":
        Ec(A, t);
        break;
    case "select":
        e = t.value,
        e != null && Ar(A, !!t.multiple, e, !1)
    }
}
;
xc = Oa;
Dc = St;
var JQ = {
    usingClientEntryPoint: !1,
    Events: [Hn, Wt, hs, Lc, Kc, Oa]
}
  , Hr = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , WQ = {
    bundleType: Hr.bundleType,
    version: Hr.version,
    rendererPackageName: Hr.rendererPackageName,
    rendererConfig: Hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ke.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(A) {
        return A = Mc(A),
        A === null ? null : A.stateNode
    },
    findFiberByHostInstance: Hr.findFiberByHostInstance || PQ,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bn.isDisabled && bn.supportsFiber)
        try {
            gs = bn.inject(WQ),
            Ce = bn
        } catch {}
}
bA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JQ;
bA.createPortal = function(A, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ga(e))
        throw Error(F(200));
    return GQ(A, e, null, t)
}
;
bA.createRoot = function(A, e) {
    if (!Ga(A))
        throw Error(F(299));
    var t = !1
      , r = ""
      , n = wg;
    return e != null && (e.unstable_strictMode === !0 && (t = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (n = e.onRecoverableError)),
    e = Ra(A, 1, !1, null, null, t, !1, r, n),
    A[De] = e.current,
    cn(A.nodeType === 8 ? A.parentNode : A),
    new Va(e)
}
;
bA.findDOMNode = function(A) {
    if (A == null)
        return null;
    if (A.nodeType === 1)
        return A;
    var e = A._reactInternals;
    if (e === void 0)
        throw typeof A.render == "function" ? Error(F(188)) : (A = Object.keys(A).join(","),
        Error(F(268, A)));
    return A = Mc(e),
    A = A === null ? null : A.stateNode,
    A
}
;
bA.flushSync = function(A) {
    return St(A)
}
;
bA.hydrate = function(A, e, t) {
    if (!Hs(e))
        throw Error(F(200));
    return Is(null, A, e, !0, t)
}
;
bA.hydrateRoot = function(A, e, t) {
    if (!Ga(A))
        throw Error(F(405));
    var r = t != null && t.hydratedSources || null
      , n = !1
      , i = ""
      , s = wg;
    if (t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    e = dg(e, null, A, 1, t ?? null, n, !1, i, s),
    A[De] = e.current,
    cn(A),
    r)
        for (A = 0; A < r.length; A++)
            t = r[A],
            n = t._getVersion,
            n = n(t._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n);
    return new ys(e)
}
;
bA.render = function(A, e, t) {
    if (!Hs(e))
        throw Error(F(200));
    return Is(null, A, e, !1, t)
}
;
bA.unmountComponentAtNode = function(A) {
    if (!Hs(A))
        throw Error(F(40));
    return A._reactRootContainer ? (St(function() {
        Is(null, null, A, !1, function() {
            A._reactRootContainer = null,
            A[De] = null
        })
    }),
    !0) : !1
}
;
bA.unstable_batchedUpdates = Oa;
bA.unstable_renderSubtreeIntoContainer = function(A, e, t, r) {
    if (!Hs(t))
        throw Error(F(200));
    if (A == null || A._reactInternals === void 0)
        throw Error(F(38));
    return Is(A, e, t, !1, r)
}
;
bA.version = "18.2.0-next-9e3b772b8-20220608";
function Qg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qg)
        } catch (A) {
            console.error(A)
        }
}
Qg(),
gc.exports = bA;
var bQ = gc.exports
  , nB = bQ;
Do.createRoot = nB.createRoot,
Do.hydrateRoot = nB.hydrateRoot;
const YQ = ()=>tA.jsxs(tA.Fragment, {
    children: [tA.jsx("img", {
        src: "./assests/GDSCuj.png",
        alt: "logo",
        className: "w-3/4  md:w-96 lg:w-96"
    }), tA.jsx("h1", {
        className: "text-xl md:text-2xl lg:text-4xl  text-black ",
        children: "كل عام وانتم بخير"
    })]
})
  , zQ = ({onChangName: A})=>{
    const [e,t] = wr.useState("")
      , r = n=>{
        t(n.target.value)
    }
    ;
    return tA.jsxs("form", {
        className: " m-10 p-6 bg-white rounded shadow-md w-96",
        children: [tA.jsxs("div", {
            className: "mb-4",
            children: [tA.jsx("label", {
                htmlFor: "name",
                className: "block text-end text-sm font-medium text-gray-700",
                children: "ادخل اسمك"
            }), tA.jsx("input", {
                type: "text",
                id: "name",
                name: "name",
                placeholder: "الاسم",
                onChange: r,
                className: "mt-1 p-2 w-full text-end border rounded-md background-gray-100 "
            })]
        }), tA.jsx("button", {
            onClick: n=>{
                n.preventDefault(),
                A(e)
            }
            ,
            className: "w-full bg-custom-purple text-white py-2 rounded-md hover:bg-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple focus:ring-opacity-50",
            children: "انشئ كرت المعايدة الخاص بك"
        })]
    })
}
;
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var yl = function(A, e) {
    return yl = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, r) {
        t.__proto__ = r
    }
    || function(t, r) {
        for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    ,
    yl(A, e)
};
function fe(A, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    yl(A, e);
    function t() {
        this.constructor = A
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype,
    new t)
}
var Hl = function() {
    return Hl = Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }
    ,
    Hl.apply(this, arguments)
};
function IA(A, e, t, r) {
    function n(i) {
        return i instanceof t ? i : new t(function(s) {
            s(i)
        }
        )
    }
    return new (t || (t = Promise))(function(i, s) {
        function o(u) {
            try {
                a(r.next(u))
            } catch (B) {
                s(B)
            }
        }
        function l(u) {
            try {
                a(r.throw(u))
            } catch (B) {
                s(B)
            }
        }
        function a(u) {
            u.done ? i(u.value) : n(u.value).then(o, l)
        }
        a((r = r.apply(A, e || [])).next())
    }
    )
}
function vA(A, e) {
    var t = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, r, n, i, s;
    return s = {
        next: o(0),
        throw: o(1),
        return: o(2)
    },
    typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function o(a) {
        return function(u) {
            return l([a, u])
        }
    }
    function l(a) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (r = 1,
                n && (i = a[0] & 2 ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n),
                0) : n.next) && !(i = i.call(n, a[1])).done)
                    return i;
                switch (n = 0,
                i && (a = [a[0] & 2, i.value]),
                a[0]) {
                case 0:
                case 1:
                    i = a;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: a[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    n = a[1],
                    a = [0];
                    continue;
                case 7:
                    a = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (i = t.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
                        t.label = a[1];
                        break
                    }
                    if (a[0] === 6 && t.label < i[1]) {
                        t.label = i[1],
                        i = a;
                        break
                    }
                    if (i && t.label < i[2]) {
                        t.label = i[2],
                        t.ops.push(a);
                        break
                    }
                    i[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                a = e.call(A, t)
            } catch (u) {
                a = [6, u],
                n = 0
            } finally {
                r = i = 0
            }
        if (a[0] & 5)
            throw a[1];
        return {
            value: a[0] ? a[1] : void 0,
            done: !0
        }
    }
}
function Yn(A, e, t) {
    if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
            (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)),
            i[r] = e[r]);
    return A.concat(i || e)
}
var Me = function() {
    function A(e, t, r, n) {
        this.left = e,
        this.top = t,
        this.width = r,
        this.height = n
    }
    return A.prototype.add = function(e, t, r, n) {
        return new A(this.left + e,this.top + t,this.width + r,this.height + n)
    }
    ,
    A.fromClientRect = function(e, t) {
        return new A(t.left + e.windowBounds.left,t.top + e.windowBounds.top,t.width,t.height)
    }
    ,
    A.fromDOMRectList = function(e, t) {
        var r = Array.from(t).find(function(n) {
            return n.width !== 0
        });
        return r ? new A(r.left + e.windowBounds.left,r.top + e.windowBounds.top,r.width,r.height) : A.EMPTY
    }
    ,
    A.EMPTY = new A(0,0,0,0),
    A
}()
  , Ss = function(A, e) {
    return Me.fromClientRect(A, e.getBoundingClientRect())
}
  , ZQ = function(A) {
    var e = A.body
      , t = A.documentElement;
    if (!e || !t)
        throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth))
      , n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new Me(0,0,r,n)
}
  , Ls = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
        var n = A.charCodeAt(t++);
        if (n >= 55296 && n <= 56319 && t < r) {
            var i = A.charCodeAt(t++);
            (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n),
            t--)
        } else
            e.push(n)
    }
    return e
}
  , eA = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
        A[e] = arguments[e];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t)
        return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
        var s = A[n];
        s <= 65535 ? r.push(s) : (s -= 65536,
        r.push((s >> 10) + 55296, s % 1024 + 56320)),
        (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r),
        r.length = 0)
    }
    return i
}
  , iB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , jQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zn = 0; zn < iB.length; zn++)
    jQ[iB.charCodeAt(zn)] = zn;
var sB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Mr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Zn = 0; Zn < sB.length; Zn++)
    Mr[sB.charCodeAt(Zn)] = Zn;
var $Q = function(A) {
    var e = A.length * .75, t = A.length, r, n = 0, i, s, o, l;
    A[A.length - 1] === "=" && (e--,
    A[A.length - 2] === "=" && e--);
    var a = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e)
      , u = Array.isArray(a) ? a : new Uint8Array(a);
    for (r = 0; r < t; r += 4)
        i = Mr[A.charCodeAt(r)],
        s = Mr[A.charCodeAt(r + 1)],
        o = Mr[A.charCodeAt(r + 2)],
        l = Mr[A.charCodeAt(r + 3)],
        u[n++] = i << 2 | s >> 4,
        u[n++] = (s & 15) << 4 | o >> 2,
        u[n++] = (o & 3) << 6 | l & 63;
    return a
}
  , qQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
        t.push(A[r + 1] << 8 | A[r]);
    return t
}
  , Ah = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
        t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t
}
  , vt = 5
  , Pa = 11
  , Bo = 2
  , eh = Pa - vt
  , hg = 65536 >> vt
  , th = 1 << vt
  , co = th - 1
  , rh = 1024 >> vt
  , nh = hg + rh
  , ih = nh
  , sh = 32
  , oh = ih + sh
  , lh = 65536 >> Pa
  , ah = 1 << eh
  , uh = ah - 1
  , oB = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
}
  , Bh = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
}
  , ch = function(A, e) {
    var t = $Q(A)
      , r = Array.isArray(t) ? Ah(t) : new Uint32Array(t)
      , n = Array.isArray(t) ? qQ(t) : new Uint16Array(t)
      , i = 24
      , s = oB(n, i / 2, r[4] / 2)
      , o = r[5] === 2 ? oB(n, (i + r[4]) / 2) : Bh(r, Math.ceil((i + r[4]) / 4));
    return new fh(r[0],r[1],r[2],r[3],s,o)
}
  , fh = function() {
    function A(e, t, r, n, i, s) {
        this.initialValue = e,
        this.errorValue = t,
        this.highStart = r,
        this.highValueIndex = n,
        this.index = i,
        this.data = s
    }
    return A.prototype.get = function(e) {
        var t;
        if (e >= 0) {
            if (e < 55296 || e > 56319 && e <= 65535)
                return t = this.index[e >> vt],
                t = (t << Bo) + (e & co),
                this.data[t];
            if (e <= 65535)
                return t = this.index[hg + (e - 55296 >> vt)],
                t = (t << Bo) + (e & co),
                this.data[t];
            if (e < this.highStart)
                return t = oh - lh + (e >> Pa),
                t = this.index[t],
                t += e >> vt & uh,
                t = this.index[t],
                t = (t << Bo) + (e & co),
                this.data[t];
            if (e <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    A
}()
  , lB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , gh = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var jn = 0; jn < lB.length; jn++)
    gh[lB.charCodeAt(jn)] = jn;
var dh = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
  , aB = 50
  , wh = 1
  , pg = 2
  , Cg = 3
  , Qh = 4
  , hh = 5
  , uB = 7
  , Ug = 8
  , BB = 9
  , Ye = 10
  , Il = 11
  , cB = 12
  , Sl = 13
  , ph = 14
  , kr = 15
  , Ll = 16
  , $n = 17
  , Ir = 18
  , Ch = 19
  , fB = 20
  , Kl = 21
  , Sr = 22
  , fo = 23
  , Dt = 24
  , GA = 25
  , Nr = 26
  , Rr = 27
  , Tt = 28
  , Uh = 29
  , wt = 30
  , Fh = 31
  , qn = 32
  , Ai = 33
  , xl = 34
  , Dl = 35
  , Tl = 36
  , Un = 37
  , Ol = 38
  , Si = 39
  , Li = 40
  , go = 41
  , Fg = 42
  , vh = 43
  , mh = [9001, 65288]
  , vg = "!"
  , T = "×"
  , ei = "÷"
  , Ml = ch(dh)
  , me = [wt, Tl]
  , kl = [wh, pg, Cg, hh]
  , mg = [Ye, Ug]
  , gB = [Rr, Nr]
  , Eh = kl.concat(mg)
  , dB = [Ol, Si, Li, xl, Dl]
  , yh = [kr, Sl]
  , Hh = function(A, e) {
    e === void 0 && (e = "strict");
    var t = []
      , r = []
      , n = [];
    return A.forEach(function(i, s) {
        var o = Ml.get(i);
        if (o > aB ? (n.push(!0),
        o -= aB) : n.push(!1),
        ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
            return r.push(s),
            t.push(Ll);
        if (o === Qh || o === Il) {
            if (s === 0)
                return r.push(s),
                t.push(wt);
            var l = t[s - 1];
            return Eh.indexOf(l) === -1 ? (r.push(r[s - 1]),
            t.push(l)) : (r.push(s),
            t.push(wt))
        }
        if (r.push(s),
        o === Fh)
            return t.push(e === "strict" ? Kl : Un);
        if (o === Fg || o === Uh)
            return t.push(wt);
        if (o === vh)
            return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Un) : t.push(wt);
        t.push(o)
    }),
    [r, t, n]
}
  , wo = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
        for (var i = t; i <= r.length; ) {
            i++;
            var s = r[i];
            if (s === e)
                return !0;
            if (s !== Ye)
                break
        }
    if (n === Ye)
        for (var i = t; i > 0; ) {
            i--;
            var o = r[i];
            if (Array.isArray(A) ? A.indexOf(o) !== -1 : A === o)
                for (var l = t; l <= r.length; ) {
                    l++;
                    var s = r[l];
                    if (s === e)
                        return !0;
                    if (s !== Ye)
                        break
                }
            if (o !== Ye)
                break
        }
    return !1
}
  , wB = function(A, e) {
    for (var t = A; t >= 0; ) {
        var r = e[t];
        if (r === Ye)
            t--;
        else
            return r
    }
    return 0
}
  , Ih = function(A, e, t, r, n) {
    if (t[r] === 0)
        return T;
    var i = r - 1;
    if (Array.isArray(n) && n[i] === !0)
        return T;
    var s = i - 1
      , o = i + 1
      , l = e[i]
      , a = s >= 0 ? e[s] : 0
      , u = e[o];
    if (l === pg && u === Cg)
        return T;
    if (kl.indexOf(l) !== -1)
        return vg;
    if (kl.indexOf(u) !== -1 || mg.indexOf(u) !== -1)
        return T;
    if (wB(i, e) === Ug)
        return ei;
    if (Ml.get(A[i]) === Il || (l === qn || l === Ai) && Ml.get(A[o]) === Il || l === uB || u === uB || l === BB || [Ye, Sl, kr].indexOf(l) === -1 && u === BB || [$n, Ir, Ch, Dt, Tt].indexOf(u) !== -1 || wB(i, e) === Sr || wo(fo, Sr, i, e) || wo([$n, Ir], Kl, i, e) || wo(cB, cB, i, e))
        return T;
    if (l === Ye)
        return ei;
    if (l === fo || u === fo)
        return T;
    if (u === Ll || l === Ll)
        return ei;
    if ([Sl, kr, Kl].indexOf(u) !== -1 || l === ph || a === Tl && yh.indexOf(l) !== -1 || l === Tt && u === Tl || u === fB || me.indexOf(u) !== -1 && l === GA || me.indexOf(l) !== -1 && u === GA || l === Rr && [Un, qn, Ai].indexOf(u) !== -1 || [Un, qn, Ai].indexOf(l) !== -1 && u === Nr || me.indexOf(l) !== -1 && gB.indexOf(u) !== -1 || gB.indexOf(l) !== -1 && me.indexOf(u) !== -1 || [Rr, Nr].indexOf(l) !== -1 && (u === GA || [Sr, kr].indexOf(u) !== -1 && e[o + 1] === GA) || [Sr, kr].indexOf(l) !== -1 && u === GA || l === GA && [GA, Tt, Dt].indexOf(u) !== -1)
        return T;
    if ([GA, Tt, Dt, $n, Ir].indexOf(u) !== -1)
        for (var B = i; B >= 0; ) {
            var f = e[B];
            if (f === GA)
                return T;
            if ([Tt, Dt].indexOf(f) !== -1)
                B--;
            else
                break
        }
    if ([Rr, Nr].indexOf(u) !== -1)
        for (var B = [$n, Ir].indexOf(l) !== -1 ? s : i; B >= 0; ) {
            var f = e[B];
            if (f === GA)
                return T;
            if ([Tt, Dt].indexOf(f) !== -1)
                B--;
            else
                break
        }
    if (Ol === l && [Ol, Si, xl, Dl].indexOf(u) !== -1 || [Si, xl].indexOf(l) !== -1 && [Si, Li].indexOf(u) !== -1 || [Li, Dl].indexOf(l) !== -1 && u === Li || dB.indexOf(l) !== -1 && [fB, Nr].indexOf(u) !== -1 || dB.indexOf(u) !== -1 && l === Rr || me.indexOf(l) !== -1 && me.indexOf(u) !== -1 || l === Dt && me.indexOf(u) !== -1 || me.concat(GA).indexOf(l) !== -1 && u === Sr && mh.indexOf(A[o]) === -1 || me.concat(GA).indexOf(u) !== -1 && l === Ir)
        return T;
    if (l === go && u === go) {
        for (var Q = t[i], w = 1; Q > 0 && (Q--,
        e[Q] === go); )
            w++;
        if (w % 2 !== 0)
            return T
    }
    return l === qn && u === Ai ? T : ei
}
  , Sh = function(A, e) {
    e || (e = {
        lineBreak: "normal",
        wordBreak: "normal"
    });
    var t = Hh(A, e.lineBreak)
      , r = t[0]
      , n = t[1]
      , i = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(o) {
        return [GA, wt, Fg].indexOf(o) !== -1 ? Un : o
    }));
    var s = e.wordBreak === "keep-all" ? i.map(function(o, l) {
        return o && A[l] >= 19968 && A[l] <= 40959
    }) : void 0;
    return [r, n, s]
}
  , Lh = function() {
    function A(e, t, r, n) {
        this.codePoints = e,
        this.required = t === vg,
        this.start = r,
        this.end = n
    }
    return A.prototype.slice = function() {
        return eA.apply(void 0, this.codePoints.slice(this.start, this.end))
    }
    ,
    A
}()
  , Kh = function(A, e) {
    var t = Ls(A)
      , r = Sh(t, e)
      , n = r[0]
      , i = r[1]
      , s = r[2]
      , o = t.length
      , l = 0
      , a = 0;
    return {
        next: function() {
            if (a >= o)
                return {
                    done: !0,
                    value: null
                };
            for (var u = T; a < o && (u = Ih(t, i, n, ++a, s)) === T; )
                ;
            if (u !== T || a === o) {
                var B = new Lh(t,u,l,a);
                return l = a,
                {
                    value: B,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}
  , xh = 1
  , Dh = 2
  , Sn = 4
  , QB = 8
  , rs = 10
  , hB = 47
  , $r = 92
  , Th = 9
  , Oh = 32
  , ti = 34
  , Lr = 61
  , Mh = 35
  , kh = 36
  , Nh = 37
  , ri = 39
  , ni = 40
  , Kr = 41
  , Rh = 95
  , OA = 45
  , _h = 33
  , Vh = 60
  , Gh = 62
  , Ph = 64
  , Xh = 91
  , Jh = 93
  , Wh = 61
  , bh = 123
  , ii = 63
  , Yh = 125
  , pB = 124
  , zh = 126
  , Zh = 128
  , CB = 65533
  , Qo = 42
  , Ct = 43
  , jh = 44
  , $h = 58
  , qh = 59
  , Fn = 46
  , Ap = 0
  , ep = 8
  , tp = 11
  , rp = 14
  , np = 31
  , ip = 127
  , Qe = -1
  , Eg = 48
  , yg = 97
  , Hg = 101
  , sp = 102
  , op = 117
  , lp = 122
  , Ig = 65
  , Sg = 69
  , Lg = 70
  , ap = 85
  , up = 90
  , mA = function(A) {
    return A >= Eg && A <= 57
}
  , Bp = function(A) {
    return A >= 55296 && A <= 57343
}
  , Ot = function(A) {
    return mA(A) || A >= Ig && A <= Lg || A >= yg && A <= sp
}
  , cp = function(A) {
    return A >= yg && A <= lp
}
  , fp = function(A) {
    return A >= Ig && A <= up
}
  , gp = function(A) {
    return cp(A) || fp(A)
}
  , dp = function(A) {
    return A >= Zh
}
  , si = function(A) {
    return A === rs || A === Th || A === Oh
}
  , ns = function(A) {
    return gp(A) || dp(A) || A === Rh
}
  , UB = function(A) {
    return ns(A) || mA(A) || A === OA
}
  , wp = function(A) {
    return A >= Ap && A <= ep || A === tp || A >= rp && A <= np || A === ip
}
  , Pe = function(A, e) {
    return A !== $r ? !1 : e !== rs
}
  , oi = function(A, e, t) {
    return A === OA ? ns(e) || Pe(e, t) : ns(A) ? !0 : !!(A === $r && Pe(A, e))
}
  , ho = function(A, e, t) {
    return A === Ct || A === OA ? mA(e) ? !0 : e === Fn && mA(t) : mA(A === Fn ? e : A)
}
  , Qp = function(A) {
    var e = 0
      , t = 1;
    (A[e] === Ct || A[e] === OA) && (A[e] === OA && (t = -1),
    e++);
    for (var r = []; mA(A[e]); )
        r.push(A[e++]);
    var n = r.length ? parseInt(eA.apply(void 0, r), 10) : 0;
    A[e] === Fn && e++;
    for (var i = []; mA(A[e]); )
        i.push(A[e++]);
    var s = i.length
      , o = s ? parseInt(eA.apply(void 0, i), 10) : 0;
    (A[e] === Sg || A[e] === Hg) && e++;
    var l = 1;
    (A[e] === Ct || A[e] === OA) && (A[e] === OA && (l = -1),
    e++);
    for (var a = []; mA(A[e]); )
        a.push(A[e++]);
    var u = a.length ? parseInt(eA.apply(void 0, a), 10) : 0;
    return t * (n + o * Math.pow(10, -s)) * Math.pow(10, l * u)
}
  , hp = {
    type: 2
}
  , pp = {
    type: 3
}
  , Cp = {
    type: 4
}
  , Up = {
    type: 13
}
  , Fp = {
    type: 8
}
  , vp = {
    type: 21
}
  , mp = {
    type: 9
}
  , Ep = {
    type: 10
}
  , yp = {
    type: 11
}
  , Hp = {
    type: 12
}
  , Ip = {
    type: 14
}
  , li = {
    type: 23
}
  , Sp = {
    type: 1
}
  , Lp = {
    type: 25
}
  , Kp = {
    type: 24
}
  , xp = {
    type: 26
}
  , Dp = {
    type: 27
}
  , Tp = {
    type: 28
}
  , Op = {
    type: 29
}
  , Mp = {
    type: 31
}
  , Nl = {
    type: 32
}
  , Kg = function() {
    function A() {
        this._value = []
    }
    return A.prototype.write = function(e) {
        this._value = this._value.concat(Ls(e))
    }
    ,
    A.prototype.read = function() {
        for (var e = [], t = this.consumeToken(); t !== Nl; )
            e.push(t),
            t = this.consumeToken();
        return e
    }
    ,
    A.prototype.consumeToken = function() {
        var e = this.consumeCodePoint();
        switch (e) {
        case ti:
            return this.consumeStringToken(ti);
        case Mh:
            var t = this.peekCodePoint(0)
              , r = this.peekCodePoint(1)
              , n = this.peekCodePoint(2);
            if (UB(t) || Pe(r, n)) {
                var i = oi(t, r, n) ? Dh : xh
                  , s = this.consumeName();
                return {
                    type: 5,
                    value: s,
                    flags: i
                }
            }
            break;
        case kh:
            if (this.peekCodePoint(0) === Lr)
                return this.consumeCodePoint(),
                Up;
            break;
        case ri:
            return this.consumeStringToken(ri);
        case ni:
            return hp;
        case Kr:
            return pp;
        case Qo:
            if (this.peekCodePoint(0) === Lr)
                return this.consumeCodePoint(),
                Ip;
            break;
        case Ct:
            if (ho(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(e),
                this.consumeNumericToken();
            break;
        case jh:
            return Cp;
        case OA:
            var o = e
              , l = this.peekCodePoint(0)
              , a = this.peekCodePoint(1);
            if (ho(o, l, a))
                return this.reconsumeCodePoint(e),
                this.consumeNumericToken();
            if (oi(o, l, a))
                return this.reconsumeCodePoint(e),
                this.consumeIdentLikeToken();
            if (l === OA && a === Gh)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                Kp;
            break;
        case Fn:
            if (ho(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(e),
                this.consumeNumericToken();
            break;
        case hB:
            if (this.peekCodePoint(0) === Qo)
                for (this.consumeCodePoint(); ; ) {
                    var u = this.consumeCodePoint();
                    if (u === Qo && (u = this.consumeCodePoint(),
                    u === hB))
                        return this.consumeToken();
                    if (u === Qe)
                        return this.consumeToken()
                }
            break;
        case $h:
            return xp;
        case qh:
            return Dp;
        case Vh:
            if (this.peekCodePoint(0) === _h && this.peekCodePoint(1) === OA && this.peekCodePoint(2) === OA)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                Lp;
            break;
        case Ph:
            var B = this.peekCodePoint(0)
              , f = this.peekCodePoint(1)
              , Q = this.peekCodePoint(2);
            if (oi(B, f, Q)) {
                var s = this.consumeName();
                return {
                    type: 7,
                    value: s
                }
            }
            break;
        case Xh:
            return Tp;
        case $r:
            if (Pe(e, this.peekCodePoint(0)))
                return this.reconsumeCodePoint(e),
                this.consumeIdentLikeToken();
            break;
        case Jh:
            return Op;
        case Wh:
            if (this.peekCodePoint(0) === Lr)
                return this.consumeCodePoint(),
                Fp;
            break;
        case bh:
            return yp;
        case Yh:
            return Hp;
        case op:
        case ap:
            var w = this.peekCodePoint(0)
              , h = this.peekCodePoint(1);
            return w === Ct && (Ot(h) || h === ii) && (this.consumeCodePoint(),
            this.consumeUnicodeRangeToken()),
            this.reconsumeCodePoint(e),
            this.consumeIdentLikeToken();
        case pB:
            if (this.peekCodePoint(0) === Lr)
                return this.consumeCodePoint(),
                mp;
            if (this.peekCodePoint(0) === pB)
                return this.consumeCodePoint(),
                vp;
            break;
        case zh:
            if (this.peekCodePoint(0) === Lr)
                return this.consumeCodePoint(),
                Ep;
            break;
        case Qe:
            return Nl
        }
        return si(e) ? (this.consumeWhiteSpace(),
        Mp) : mA(e) ? (this.reconsumeCodePoint(e),
        this.consumeNumericToken()) : ns(e) ? (this.reconsumeCodePoint(e),
        this.consumeIdentLikeToken()) : {
            type: 6,
            value: eA(e)
        }
    }
    ,
    A.prototype.consumeCodePoint = function() {
        var e = this._value.shift();
        return typeof e > "u" ? -1 : e
    }
    ,
    A.prototype.reconsumeCodePoint = function(e) {
        this._value.unshift(e)
    }
    ,
    A.prototype.peekCodePoint = function(e) {
        return e >= this._value.length ? -1 : this._value[e]
    }
    ,
    A.prototype.consumeUnicodeRangeToken = function() {
        for (var e = [], t = this.consumeCodePoint(); Ot(t) && e.length < 6; )
            e.push(t),
            t = this.consumeCodePoint();
        for (var r = !1; t === ii && e.length < 6; )
            e.push(t),
            t = this.consumeCodePoint(),
            r = !0;
        if (r) {
            var n = parseInt(eA.apply(void 0, e.map(function(l) {
                return l === ii ? Eg : l
            })), 16)
              , i = parseInt(eA.apply(void 0, e.map(function(l) {
                return l === ii ? Lg : l
            })), 16);
            return {
                type: 30,
                start: n,
                end: i
            }
        }
        var s = parseInt(eA.apply(void 0, e), 16);
        if (this.peekCodePoint(0) === OA && Ot(this.peekCodePoint(1))) {
            this.consumeCodePoint(),
            t = this.consumeCodePoint();
            for (var o = []; Ot(t) && o.length < 6; )
                o.push(t),
                t = this.consumeCodePoint();
            var i = parseInt(eA.apply(void 0, o), 16);
            return {
                type: 30,
                start: s,
                end: i
            }
        } else
            return {
                type: 30,
                start: s,
                end: s
            }
    }
    ,
    A.prototype.consumeIdentLikeToken = function() {
        var e = this.consumeName();
        return e.toLowerCase() === "url" && this.peekCodePoint(0) === ni ? (this.consumeCodePoint(),
        this.consumeUrlToken()) : this.peekCodePoint(0) === ni ? (this.consumeCodePoint(),
        {
            type: 19,
            value: e
        }) : {
            type: 20,
            value: e
        }
    }
    ,
    A.prototype.consumeUrlToken = function() {
        var e = [];
        if (this.consumeWhiteSpace(),
        this.peekCodePoint(0) === Qe)
            return {
                type: 22,
                value: ""
            };
        var t = this.peekCodePoint(0);
        if (t === ri || t === ti) {
            var r = this.consumeStringToken(this.consumeCodePoint());
            return r.type === 0 && (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === Qe || this.peekCodePoint(0) === Kr) ? (this.consumeCodePoint(),
            {
                type: 22,
                value: r.value
            }) : (this.consumeBadUrlRemnants(),
            li)
        }
        for (; ; ) {
            var n = this.consumeCodePoint();
            if (n === Qe || n === Kr)
                return {
                    type: 22,
                    value: eA.apply(void 0, e)
                };
            if (si(n))
                return this.consumeWhiteSpace(),
                this.peekCodePoint(0) === Qe || this.peekCodePoint(0) === Kr ? (this.consumeCodePoint(),
                {
                    type: 22,
                    value: eA.apply(void 0, e)
                }) : (this.consumeBadUrlRemnants(),
                li);
            if (n === ti || n === ri || n === ni || wp(n))
                return this.consumeBadUrlRemnants(),
                li;
            if (n === $r)
                if (Pe(n, this.peekCodePoint(0)))
                    e.push(this.consumeEscapedCodePoint());
                else
                    return this.consumeBadUrlRemnants(),
                    li;
            else
                e.push(n)
        }
    }
    ,
    A.prototype.consumeWhiteSpace = function() {
        for (; si(this.peekCodePoint(0)); )
            this.consumeCodePoint()
    }
    ,
    A.prototype.consumeBadUrlRemnants = function() {
        for (; ; ) {
            var e = this.consumeCodePoint();
            if (e === Kr || e === Qe)
                return;
            Pe(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
        }
    }
    ,
    A.prototype.consumeStringSlice = function(e) {
        for (var t = 5e4, r = ""; e > 0; ) {
            var n = Math.min(t, e);
            r += eA.apply(void 0, this._value.splice(0, n)),
            e -= n
        }
        return this._value.shift(),
        r
    }
    ,
    A.prototype.consumeStringToken = function(e) {
        var t = ""
          , r = 0;
        do {
            var n = this._value[r];
            if (n === Qe || n === void 0 || n === e)
                return t += this.consumeStringSlice(r),
                {
                    type: 0,
                    value: t
                };
            if (n === rs)
                return this._value.splice(0, r),
                Sp;
            if (n === $r) {
                var i = this._value[r + 1];
                i !== Qe && i !== void 0 && (i === rs ? (t += this.consumeStringSlice(r),
                r = -1,
                this._value.shift()) : Pe(n, i) && (t += this.consumeStringSlice(r),
                t += eA(this.consumeEscapedCodePoint()),
                r = -1))
            }
            r++
        } while (!0)
    }
    ,
    A.prototype.consumeNumber = function() {
        var e = []
          , t = Sn
          , r = this.peekCodePoint(0);
        for ((r === Ct || r === OA) && e.push(this.consumeCodePoint()); mA(this.peekCodePoint(0)); )
            e.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === Fn && mA(n))
            for (e.push(this.consumeCodePoint(), this.consumeCodePoint()),
            t = QB; mA(this.peekCodePoint(0)); )
                e.push(this.consumeCodePoint());
        r = this.peekCodePoint(0),
        n = this.peekCodePoint(1);
        var i = this.peekCodePoint(2);
        if ((r === Sg || r === Hg) && ((n === Ct || n === OA) && mA(i) || mA(n)))
            for (e.push(this.consumeCodePoint(), this.consumeCodePoint()),
            t = QB; mA(this.peekCodePoint(0)); )
                e.push(this.consumeCodePoint());
        return [Qp(e), t]
    }
    ,
    A.prototype.consumeNumericToken = function() {
        var e = this.consumeNumber()
          , t = e[0]
          , r = e[1]
          , n = this.peekCodePoint(0)
          , i = this.peekCodePoint(1)
          , s = this.peekCodePoint(2);
        if (oi(n, i, s)) {
            var o = this.consumeName();
            return {
                type: 15,
                number: t,
                flags: r,
                unit: o
            }
        }
        return n === Nh ? (this.consumeCodePoint(),
        {
            type: 16,
            number: t,
            flags: r
        }) : {
            type: 17,
            number: t,
            flags: r
        }
    }
    ,
    A.prototype.consumeEscapedCodePoint = function() {
        var e = this.consumeCodePoint();
        if (Ot(e)) {
            for (var t = eA(e); Ot(this.peekCodePoint(0)) && t.length < 6; )
                t += eA(this.consumeCodePoint());
            si(this.peekCodePoint(0)) && this.consumeCodePoint();
            var r = parseInt(t, 16);
            return r === 0 || Bp(r) || r > 1114111 ? CB : r
        }
        return e === Qe ? CB : e
    }
    ,
    A.prototype.consumeName = function() {
        for (var e = ""; ; ) {
            var t = this.consumeCodePoint();
            if (UB(t))
                e += eA(t);
            else if (Pe(t, this.peekCodePoint(0)))
                e += eA(this.consumeEscapedCodePoint());
            else
                return this.reconsumeCodePoint(t),
                e
        }
    }
    ,
    A
}()
  , xg = function() {
    function A(e) {
        this._tokens = e
    }
    return A.create = function(e) {
        var t = new Kg;
        return t.write(e),
        new A(t.read())
    }
    ,
    A.parseValue = function(e) {
        return A.create(e).parseComponentValue()
    }
    ,
    A.parseValues = function(e) {
        return A.create(e).parseComponentValues()
    }
    ,
    A.prototype.parseComponentValue = function() {
        for (var e = this.consumeToken(); e.type === 31; )
            e = this.consumeToken();
        if (e.type === 32)
            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        this.reconsumeToken(e);
        var t = this.consumeComponentValue();
        do
            e = this.consumeToken();
        while (e.type === 31);
        if (e.type === 32)
            return t;
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }
    ,
    A.prototype.parseComponentValues = function() {
        for (var e = []; ; ) {
            var t = this.consumeComponentValue();
            if (t.type === 32)
                return e;
            e.push(t),
            e.push()
        }
    }
    ,
    A.prototype.consumeComponentValue = function() {
        var e = this.consumeToken();
        switch (e.type) {
        case 11:
        case 28:
        case 2:
            return this.consumeSimpleBlock(e.type);
        case 19:
            return this.consumeFunction(e)
        }
        return e
    }
    ,
    A.prototype.consumeSimpleBlock = function(e) {
        for (var t = {
            type: e,
            values: []
        }, r = this.consumeToken(); ; ) {
            if (r.type === 32 || Np(r, e))
                return t;
            this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue()),
            r = this.consumeToken()
        }
    }
    ,
    A.prototype.consumeFunction = function(e) {
        for (var t = {
            name: e.value,
            values: [],
            type: 18
        }; ; ) {
            var r = this.consumeToken();
            if (r.type === 32 || r.type === 3)
                return t;
            this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue())
        }
    }
    ,
    A.prototype.consumeToken = function() {
        var e = this._tokens.shift();
        return typeof e > "u" ? Nl : e
    }
    ,
    A.prototype.reconsumeToken = function(e) {
        this._tokens.unshift(e)
    }
    ,
    A
}()
  , Ln = function(A) {
    return A.type === 15
}
  , pr = function(A) {
    return A.type === 17
}
  , V = function(A) {
    return A.type === 20
}
  , kp = function(A) {
    return A.type === 0
}
  , Rl = function(A, e) {
    return V(A) && A.value === e
}
  , Dg = function(A) {
    return A.type !== 31
}
  , gr = function(A) {
    return A.type !== 31 && A.type !== 4
}
  , Fe = function(A) {
    var e = []
      , t = [];
    return A.forEach(function(r) {
        if (r.type === 4) {
            if (t.length === 0)
                throw new Error("Error parsing function args, zero tokens for arg");
            e.push(t),
            t = [];
            return
        }
        r.type !== 31 && t.push(r)
    }),
    t.length && e.push(t),
    e
}
  , Np = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3
}
  , at = function(A) {
    return A.type === 17 || A.type === 15
}
  , iA = function(A) {
    return A.type === 16 || at(A)
}
  , Tg = function(A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]]
}
  , hA = {
    type: 17,
    number: 0,
    flags: Sn
}
  , Xa = {
    type: 16,
    number: 50,
    flags: Sn
}
  , ze = {
    type: 16,
    number: 100,
    flags: Sn
}
  , _r = function(A, e, t) {
    var r = A[0]
      , n = A[1];
    return [X(r, e), X(typeof n < "u" ? n : r, t)]
}
  , X = function(A, e) {
    if (A.type === 16)
        return A.number / 100 * e;
    if (Ln(A))
        switch (A.unit) {
        case "rem":
        case "em":
            return 16 * A.number;
        case "px":
        default:
            return A.number
        }
    return A.number
}
  , Og = "deg"
  , Mg = "grad"
  , kg = "rad"
  , Ng = "turn"
  , Ks = {
    name: "angle",
    parse: function(A, e) {
        if (e.type === 15)
            switch (e.unit) {
            case Og:
                return Math.PI * e.number / 180;
            case Mg:
                return Math.PI / 200 * e.number;
            case kg:
                return e.number;
            case Ng:
                return Math.PI * 2 * e.number
            }
        throw new Error("Unsupported angle type")
    }
}
  , Rg = function(A) {
    return A.type === 15 && (A.unit === Og || A.unit === Mg || A.unit === kg || A.unit === Ng)
}
  , _g = function(A) {
    var e = A.filter(V).map(function(t) {
        return t.value
    }).join(" ");
    switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
        return [hA, hA];
    case "to top":
    case "bottom":
        return Ae(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
        return [hA, ze];
    case "to right":
    case "left":
        return Ae(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
        return [ze, ze];
    case "to bottom":
    case "top":
        return Ae(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
        return [ze, hA];
    case "to left":
    case "right":
        return Ae(270)
    }
    return 0
}
  , Ae = function(A) {
    return Math.PI * A / 180
}
  , it = {
    name: "color",
    parse: function(A, e) {
        if (e.type === 18) {
            var t = Rp[e.name];
            if (typeof t > "u")
                throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
            return t(A, e.values)
        }
        if (e.type === 5) {
            if (e.value.length === 3) {
                var r = e.value.substring(0, 1)
                  , n = e.value.substring(1, 2)
                  , i = e.value.substring(2, 3);
                return Ze(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1)
            }
            if (e.value.length === 4) {
                var r = e.value.substring(0, 1)
                  , n = e.value.substring(1, 2)
                  , i = e.value.substring(2, 3)
                  , s = e.value.substring(3, 4);
                return Ze(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(s + s, 16) / 255)
            }
            if (e.value.length === 6) {
                var r = e.value.substring(0, 2)
                  , n = e.value.substring(2, 4)
                  , i = e.value.substring(4, 6);
                return Ze(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1)
            }
            if (e.value.length === 8) {
                var r = e.value.substring(0, 2)
                  , n = e.value.substring(2, 4)
                  , i = e.value.substring(4, 6)
                  , s = e.value.substring(6, 8);
                return Ze(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(s, 16) / 255)
            }
        }
        if (e.type === 20) {
            var o = Ke[e.value.toUpperCase()];
            if (typeof o < "u")
                return o
        }
        return Ke.TRANSPARENT
    }
}
  , st = function(A) {
    return (255 & A) === 0
}
  , fA = function(A) {
    var e = 255 & A
      , t = 255 & A >> 8
      , r = 255 & A >> 16
      , n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")"
}
  , Ze = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0
}
  , FB = function(A, e) {
    if (A.type === 17)
        return A.number;
    if (A.type === 16) {
        var t = e === 3 ? 1 : 255;
        return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t)
    }
    return 0
}
  , vB = function(A, e) {
    var t = e.filter(gr);
    if (t.length === 3) {
        var r = t.map(FB)
          , n = r[0]
          , i = r[1]
          , s = r[2];
        return Ze(n, i, s, 1)
    }
    if (t.length === 4) {
        var o = t.map(FB)
          , n = o[0]
          , i = o[1]
          , s = o[2]
          , l = o[3];
        return Ze(n, i, s, l)
    }
    return 0
};
function po(A, e, t) {
    return t < 0 && (t += 1),
    t >= 1 && (t -= 1),
    t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A
}
var mB = function(A, e) {
    var t = e.filter(gr)
      , r = t[0]
      , n = t[1]
      , i = t[2]
      , s = t[3]
      , o = (r.type === 17 ? Ae(r.number) : Ks.parse(A, r)) / (Math.PI * 2)
      , l = iA(n) ? n.number / 100 : 0
      , a = iA(i) ? i.number / 100 : 0
      , u = typeof s < "u" && iA(s) ? X(s, 1) : 1;
    if (l === 0)
        return Ze(a * 255, a * 255, a * 255, 1);
    var B = a <= .5 ? a * (l + 1) : a + l - a * l
      , f = a * 2 - B
      , Q = po(f, B, o + 1 / 3)
      , w = po(f, B, o)
      , h = po(f, B, o - 1 / 3);
    return Ze(Q * 255, w * 255, h * 255, u)
}
  , Rp = {
    hsl: mB,
    hsla: mB,
    rgb: vB,
    rgba: vB
}
  , qr = function(A, e) {
    return it.parse(A, xg.create(e).parseComponentValue())
}
  , Ke = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
}
  , _p = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return e.map(function(t) {
            if (V(t))
                switch (t.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}
  , Vp = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , xs = function(A, e) {
    var t = it.parse(A, e[0])
      , r = e[1];
    return r && iA(r) ? {
        color: t,
        stop: r
    } : {
        color: t,
        stop: null
    }
}
  , EB = function(A, e) {
    var t = A[0]
      , r = A[A.length - 1];
    t.stop === null && (t.stop = hA),
    r.stop === null && (r.stop = ze);
    for (var n = [], i = 0, s = 0; s < A.length; s++) {
        var o = A[s].stop;
        if (o !== null) {
            var l = X(o, e);
            l > i ? n.push(l) : n.push(i),
            i = l
        } else
            n.push(null)
    }
    for (var a = null, s = 0; s < n.length; s++) {
        var u = n[s];
        if (u === null)
            a === null && (a = s);
        else if (a !== null) {
            for (var B = s - a, f = n[a - 1], Q = (u - f) / (B + 1), w = 1; w <= B; w++)
                n[a + w - 1] = Q * w;
            a = null
        }
    }
    return A.map(function(h, S) {
        var g = h.color;
        return {
            color: g,
            stop: Math.max(Math.min(1, n[S] / e), 0)
        }
    })
}
  , Gp = function(A, e, t) {
    var r = e / 2
      , n = t / 2
      , i = X(A[0], e) - r
      , s = n - X(A[1], t);
    return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2)
}
  , Pp = function(A, e, t) {
    var r = typeof A == "number" ? A : Gp(A, e, t)
      , n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r))
      , i = e / 2
      , s = t / 2
      , o = n / 2
      , l = Math.sin(r - Math.PI / 2) * o
      , a = Math.cos(r - Math.PI / 2) * o;
    return [n, i - a, i + a, s - l, s + l]
}
  , se = function(A, e) {
    return Math.sqrt(A * A + e * e)
}
  , yB = function(A, e, t, r, n) {
    var i = [[0, 0], [0, e], [A, 0], [A, e]];
    return i.reduce(function(s, o) {
        var l = o[0]
          , a = o[1]
          , u = se(t - l, r - a);
        return (n ? u < s.optimumDistance : u > s.optimumDistance) ? {
            optimumCorner: o,
            optimumDistance: u
        } : s
    }, {
        optimumDistance: n ? 1 / 0 : -1 / 0,
        optimumCorner: null
    }).optimumCorner
}
  , Xp = function(A, e, t, r, n) {
    var i = 0
      , s = 0;
    switch (A.size) {
    case 0:
        A.shape === 0 ? i = s = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.min(Math.abs(e), Math.abs(e - r)),
        s = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
    case 2:
        if (A.shape === 0)
            i = s = Math.min(se(e, t), se(e, t - n), se(e - r, t), se(e - r, t - n));
        else if (A.shape === 1) {
            var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r))
              , l = yB(r, n, e, t, !0)
              , a = l[0]
              , u = l[1];
            i = se(a - e, (u - t) / o),
            s = o * i
        }
        break;
    case 1:
        A.shape === 0 ? i = s = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.max(Math.abs(e), Math.abs(e - r)),
        s = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
    case 3:
        if (A.shape === 0)
            i = s = Math.max(se(e, t), se(e, t - n), se(e - r, t), se(e - r, t - n));
        else if (A.shape === 1) {
            var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r))
              , B = yB(r, n, e, t, !1)
              , a = B[0]
              , u = B[1];
            i = se(a - e, (u - t) / o),
            s = o * i
        }
        break
    }
    return Array.isArray(A.size) && (i = X(A.size[0], r),
    s = A.size.length === 2 ? X(A.size[1], n) : i),
    [i, s]
}
  , Jp = function(A, e) {
    var t = Ae(180)
      , r = [];
    return Fe(e).forEach(function(n, i) {
        if (i === 0) {
            var s = n[0];
            if (s.type === 20 && s.value === "to") {
                t = _g(n);
                return
            } else if (Rg(s)) {
                t = Ks.parse(A, s);
                return
            }
        }
        var o = xs(A, n);
        r.push(o)
    }),
    {
        angle: t,
        stops: r,
        type: 1
    }
}
  , ai = function(A, e) {
    var t = Ae(180)
      , r = [];
    return Fe(e).forEach(function(n, i) {
        if (i === 0) {
            var s = n[0];
            if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
                t = _g(n);
                return
            } else if (Rg(s)) {
                t = (Ks.parse(A, s) + Ae(270)) % Ae(360);
                return
            }
        }
        var o = xs(A, n);
        r.push(o)
    }),
    {
        angle: t,
        stops: r,
        type: 1
    }
}
  , Wp = function(A, e) {
    var t = Ae(180)
      , r = []
      , n = 1
      , i = 0
      , s = 3
      , o = [];
    return Fe(e).forEach(function(l, a) {
        var u = l[0];
        if (a === 0) {
            if (V(u) && u.value === "linear") {
                n = 1;
                return
            } else if (V(u) && u.value === "radial") {
                n = 2;
                return
            }
        }
        if (u.type === 18) {
            if (u.name === "from") {
                var B = it.parse(A, u.values[0]);
                r.push({
                    stop: hA,
                    color: B
                })
            } else if (u.name === "to") {
                var B = it.parse(A, u.values[0]);
                r.push({
                    stop: ze,
                    color: B
                })
            } else if (u.name === "color-stop") {
                var f = u.values.filter(gr);
                if (f.length === 2) {
                    var B = it.parse(A, f[1])
                      , Q = f[0];
                    pr(Q) && r.push({
                        stop: {
                            type: 16,
                            number: Q.number * 100,
                            flags: Q.flags
                        },
                        color: B
                    })
                }
            }
        }
    }),
    n === 1 ? {
        angle: (t + Ae(180)) % Ae(360),
        stops: r,
        type: n
    } : {
        size: s,
        shape: i,
        stops: r,
        position: o,
        type: n
    }
}
  , Vg = "closest-side"
  , Gg = "farthest-side"
  , Pg = "closest-corner"
  , Xg = "farthest-corner"
  , Jg = "circle"
  , Wg = "ellipse"
  , bg = "cover"
  , Yg = "contain"
  , bp = function(A, e) {
    var t = 0
      , r = 3
      , n = []
      , i = [];
    return Fe(e).forEach(function(s, o) {
        var l = !0;
        if (o === 0) {
            var a = !1;
            l = s.reduce(function(B, f) {
                if (a)
                    if (V(f))
                        switch (f.value) {
                        case "center":
                            return i.push(Xa),
                            B;
                        case "top":
                        case "left":
                            return i.push(hA),
                            B;
                        case "right":
                        case "bottom":
                            return i.push(ze),
                            B
                        }
                    else
                        (iA(f) || at(f)) && i.push(f);
                else if (V(f))
                    switch (f.value) {
                    case Jg:
                        return t = 0,
                        !1;
                    case Wg:
                        return t = 1,
                        !1;
                    case "at":
                        return a = !0,
                        !1;
                    case Vg:
                        return r = 0,
                        !1;
                    case bg:
                    case Gg:
                        return r = 1,
                        !1;
                    case Yg:
                    case Pg:
                        return r = 2,
                        !1;
                    case Xg:
                        return r = 3,
                        !1
                    }
                else if (at(f) || iA(f))
                    return Array.isArray(r) || (r = []),
                    r.push(f),
                    !1;
                return B
            }, l)
        }
        if (l) {
            var u = xs(A, s);
            n.push(u)
        }
    }),
    {
        size: r,
        shape: t,
        stops: n,
        position: i,
        type: 2
    }
}
  , ui = function(A, e) {
    var t = 0
      , r = 3
      , n = []
      , i = [];
    return Fe(e).forEach(function(s, o) {
        var l = !0;
        if (o === 0 ? l = s.reduce(function(u, B) {
            if (V(B))
                switch (B.value) {
                case "center":
                    return i.push(Xa),
                    !1;
                case "top":
                case "left":
                    return i.push(hA),
                    !1;
                case "right":
                case "bottom":
                    return i.push(ze),
                    !1
                }
            else if (iA(B) || at(B))
                return i.push(B),
                !1;
            return u
        }, l) : o === 1 && (l = s.reduce(function(u, B) {
            if (V(B))
                switch (B.value) {
                case Jg:
                    return t = 0,
                    !1;
                case Wg:
                    return t = 1,
                    !1;
                case Yg:
                case Vg:
                    return r = 0,
                    !1;
                case Gg:
                    return r = 1,
                    !1;
                case Pg:
                    return r = 2,
                    !1;
                case bg:
                case Xg:
                    return r = 3,
                    !1
                }
            else if (at(B) || iA(B))
                return Array.isArray(r) || (r = []),
                r.push(B),
                !1;
            return u
        }, l)),
        l) {
            var a = xs(A, s);
            n.push(a)
        }
    }),
    {
        size: r,
        shape: t,
        stops: n,
        position: i,
        type: 2
    }
}
  , Yp = function(A) {
    return A.type === 1
}
  , zp = function(A) {
    return A.type === 2
}
  , Ja = {
    name: "image",
    parse: function(A, e) {
        if (e.type === 22) {
            var t = {
                url: e.value,
                type: 0
            };
            return A.cache.addImage(e.value),
            t
        }
        if (e.type === 18) {
            var r = zg[e.name];
            if (typeof r > "u")
                throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
            return r(A, e.values)
        }
        throw new Error("Unsupported image type " + e.type)
    }
};
function Zp(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!zg[A.name])
}
var zg = {
    "linear-gradient": Jp,
    "-moz-linear-gradient": ai,
    "-ms-linear-gradient": ai,
    "-o-linear-gradient": ai,
    "-webkit-linear-gradient": ai,
    "radial-gradient": bp,
    "-moz-radial-gradient": ui,
    "-ms-radial-gradient": ui,
    "-o-radial-gradient": ui,
    "-webkit-radial-gradient": ui,
    "-webkit-gradient": Wp
}, jp = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(A, e) {
        if (e.length === 0)
            return [];
        var t = e[0];
        return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
            return gr(r) && Zp(r)
        }).map(function(r) {
            return Ja.parse(A, r)
        })
    }
}, $p = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return e.map(function(t) {
            if (V(t))
                switch (t.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}, qp = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function(A, e) {
        return Fe(e).map(function(t) {
            return t.filter(iA)
        }).map(Tg)
    }
}, AC = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return Fe(e).map(function(t) {
            return t.filter(V).map(function(r) {
                return r.value
            }).join(" ")
        }).map(eC)
    }
}, eC = function(A) {
    switch (A) {
    case "no-repeat":
        return 1;
    case "repeat-x":
    case "repeat no-repeat":
        return 2;
    case "repeat-y":
    case "no-repeat repeat":
        return 3;
    case "repeat":
    default:
        return 0
    }
}, sr;
(function(A) {
    A.AUTO = "auto",
    A.CONTAIN = "contain",
    A.COVER = "cover"
}
)(sr || (sr = {}));
var tC = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return Fe(e).map(function(t) {
            return t.filter(rC)
        })
    }
}, rC = function(A) {
    return V(A) || iA(A)
}, Ds = function(A) {
    return {
        name: "border-" + A + "-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }
}, nC = Ds("top"), iC = Ds("right"), sC = Ds("bottom"), oC = Ds("left"), Ts = function(A) {
    return {
        name: "border-radius-" + A,
        initialValue: "0 0",
        prefix: !1,
        type: 1,
        parse: function(e, t) {
            return Tg(t.filter(iA))
        }
    }
}, lC = Ts("top-left"), aC = Ts("top-right"), uC = Ts("bottom-right"), BC = Ts("bottom-left"), Os = function(A) {
    return {
        name: "border-" + A + "-style",
        initialValue: "solid",
        prefix: !1,
        type: 2,
        parse: function(e, t) {
            switch (t) {
            case "none":
                return 0;
            case "dashed":
                return 2;
            case "dotted":
                return 3;
            case "double":
                return 4
            }
            return 1
        }
    }
}, cC = Os("top"), fC = Os("right"), gC = Os("bottom"), dC = Os("left"), Ms = function(A) {
    return {
        name: "border-" + A + "-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(e, t) {
            return Ln(t) ? t.number : 0
        }
    }
}, wC = Ms("top"), QC = Ms("right"), hC = Ms("bottom"), pC = Ms("left"), CC = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}, UC = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "rtl":
            return 1;
        case "ltr":
        default:
            return 0
        }
    }
}, FC = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return e.filter(V).reduce(function(t, r) {
            return t | vC(r.value)
        }, 0)
    }
}, vC = function(A) {
    switch (A) {
    case "block":
    case "-webkit-box":
        return 2;
    case "inline":
        return 4;
    case "run-in":
        return 8;
    case "flow":
        return 16;
    case "flow-root":
        return 32;
    case "table":
        return 64;
    case "flex":
    case "-webkit-flex":
        return 128;
    case "grid":
    case "-ms-grid":
        return 256;
    case "ruby":
        return 512;
    case "subgrid":
        return 1024;
    case "list-item":
        return 2048;
    case "table-row-group":
        return 4096;
    case "table-header-group":
        return 8192;
    case "table-footer-group":
        return 16384;
    case "table-row":
        return 32768;
    case "table-cell":
        return 65536;
    case "table-column-group":
        return 131072;
    case "table-column":
        return 262144;
    case "table-caption":
        return 524288;
    case "ruby-base":
        return 1048576;
    case "ruby-text":
        return 2097152;
    case "ruby-base-container":
        return 4194304;
    case "ruby-text-container":
        return 8388608;
    case "contents":
        return 16777216;
    case "inline-block":
        return 33554432;
    case "inline-list-item":
        return 67108864;
    case "inline-table":
        return 134217728;
    case "inline-flex":
        return 268435456;
    case "inline-grid":
        return 536870912
    }
    return 0
}, mC = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "inline-start":
            return 3;
        case "inline-end":
            return 4
        }
        return 0
    }
}, EC = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function(A, e) {
        return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0
    }
}, is;
(function(A) {
    A.NORMAL = "normal",
    A.STRICT = "strict"
}
)(is || (is = {}));
var yC = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "strict":
            return is.STRICT;
        case "normal":
        default:
            return is.NORMAL
        }
    }
}, HC = {
    name: "line-height",
    initialValue: "normal",
    prefix: !1,
    type: 4
}, HB = function(A, e) {
    return V(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : iA(A) ? X(A, e) : e
}, IC = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function(A, e) {
        return e.type === 20 && e.value === "none" ? null : Ja.parse(A, e)
    }
}, SC = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "inside":
            return 0;
        case "outside":
        default:
            return 1
        }
    }
}, _l = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "disc":
            return 0;
        case "circle":
            return 1;
        case "square":
            return 2;
        case "decimal":
            return 3;
        case "cjk-decimal":
            return 4;
        case "decimal-leading-zero":
            return 5;
        case "lower-roman":
            return 6;
        case "upper-roman":
            return 7;
        case "lower-greek":
            return 8;
        case "lower-alpha":
            return 9;
        case "upper-alpha":
            return 10;
        case "arabic-indic":
            return 11;
        case "armenian":
            return 12;
        case "bengali":
            return 13;
        case "cambodian":
            return 14;
        case "cjk-earthly-branch":
            return 15;
        case "cjk-heavenly-stem":
            return 16;
        case "cjk-ideographic":
            return 17;
        case "devanagari":
            return 18;
        case "ethiopic-numeric":
            return 19;
        case "georgian":
            return 20;
        case "gujarati":
            return 21;
        case "gurmukhi":
            return 22;
        case "hebrew":
            return 22;
        case "hiragana":
            return 23;
        case "hiragana-iroha":
            return 24;
        case "japanese-formal":
            return 25;
        case "japanese-informal":
            return 26;
        case "kannada":
            return 27;
        case "katakana":
            return 28;
        case "katakana-iroha":
            return 29;
        case "khmer":
            return 30;
        case "korean-hangul-formal":
            return 31;
        case "korean-hanja-formal":
            return 32;
        case "korean-hanja-informal":
            return 33;
        case "lao":
            return 34;
        case "lower-armenian":
            return 35;
        case "malayalam":
            return 36;
        case "mongolian":
            return 37;
        case "myanmar":
            return 38;
        case "oriya":
            return 39;
        case "persian":
            return 40;
        case "simp-chinese-formal":
            return 41;
        case "simp-chinese-informal":
            return 42;
        case "tamil":
            return 43;
        case "telugu":
            return 44;
        case "thai":
            return 45;
        case "tibetan":
            return 46;
        case "trad-chinese-formal":
            return 47;
        case "trad-chinese-informal":
            return 48;
        case "upper-armenian":
            return 49;
        case "disclosure-open":
            return 50;
        case "disclosure-closed":
            return 51;
        case "none":
        default:
            return -1
        }
    }
}, ks = function(A) {
    return {
        name: "margin-" + A,
        initialValue: "0",
        prefix: !1,
        type: 4
    }
}, LC = ks("top"), KC = ks("right"), xC = ks("bottom"), DC = ks("left"), TC = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return e.filter(V).map(function(t) {
            switch (t.value) {
            case "hidden":
                return 1;
            case "scroll":
                return 2;
            case "clip":
                return 3;
            case "auto":
                return 4;
            case "visible":
            default:
                return 0
            }
        })
    }
}, OC = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "break-word":
            return "break-word";
        case "normal":
        default:
            return "normal"
        }
    }
}, Ns = function(A) {
    return {
        name: "padding-" + A,
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length-percentage"
    }
}, MC = Ns("top"), kC = Ns("right"), NC = Ns("bottom"), RC = Ns("left"), _C = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "right":
            return 2;
        case "center":
        case "justify":
            return 1;
        case "left":
        default:
            return 0
        }
    }
}, VC = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "relative":
            return 1;
        case "absolute":
            return 2;
        case "fixed":
            return 3;
        case "sticky":
            return 4
        }
        return 0
    }
}, GC = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(A, e) {
        return e.length === 1 && Rl(e[0], "none") ? [] : Fe(e).map(function(t) {
            for (var r = {
                color: Ke.TRANSPARENT,
                offsetX: hA,
                offsetY: hA,
                blur: hA
            }, n = 0, i = 0; i < t.length; i++) {
                var s = t[i];
                at(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s,
                n++) : r.color = it.parse(A, s)
            }
            return r
        })
    }
}, PC = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "uppercase":
            return 2;
        case "lowercase":
            return 1;
        case "capitalize":
            return 3
        }
        return 0
    }
}, XC = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function(A, e) {
        if (e.type === 20 && e.value === "none")
            return null;
        if (e.type === 18) {
            var t = bC[e.name];
            if (typeof t > "u")
                throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
            return t(e.values)
        }
        return null
    }
}, JC = function(A) {
    var e = A.filter(function(t) {
        return t.type === 17
    }).map(function(t) {
        return t.number
    });
    return e.length === 6 ? e : null
}, WC = function(A) {
    var e = A.filter(function(l) {
        return l.type === 17
    }).map(function(l) {
        return l.number
    })
      , t = e[0]
      , r = e[1];
    e[2],
    e[3];
    var n = e[4]
      , i = e[5];
    e[6],
    e[7],
    e[8],
    e[9],
    e[10],
    e[11];
    var s = e[12]
      , o = e[13];
    return e[14],
    e[15],
    e.length === 16 ? [t, r, n, i, s, o] : null
}, bC = {
    matrix: JC,
    matrix3d: WC
}, IB = {
    type: 16,
    number: 50,
    flags: Sn
}, YC = [IB, IB], zC = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function(A, e) {
        var t = e.filter(iA);
        return t.length !== 2 ? YC : [t[0], t[1]]
    }
}, ZC = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "hidden":
            return 1;
        case "collapse":
            return 2;
        case "visible":
        default:
            return 0
        }
    }
}, An;
(function(A) {
    A.NORMAL = "normal",
    A.BREAK_ALL = "break-all",
    A.KEEP_ALL = "keep-all"
}
)(An || (An = {}));
var jC = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "break-all":
            return An.BREAK_ALL;
        case "keep-all":
            return An.KEEP_ALL;
        case "normal":
        default:
            return An.NORMAL
        }
    }
}
  , $C = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function(A, e) {
        if (e.type === 20)
            return {
                auto: !0,
                order: 0
            };
        if (pr(e))
            return {
                auto: !1,
                order: e.number
            };
        throw new Error("Invalid z-index number parsed")
    }
}
  , Zg = {
    name: "time",
    parse: function(A, e) {
        if (e.type === 15)
            switch (e.unit.toLowerCase()) {
            case "s":
                return 1e3 * e.number;
            case "ms":
                return e.number
            }
        throw new Error("Unsupported time type")
    }
}
  , qC = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function(A, e) {
        return pr(e) ? e.number : 1
    }
}
  , A0 = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , e0 = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return e.filter(V).map(function(t) {
            switch (t.value) {
            case "underline":
                return 1;
            case "overline":
                return 2;
            case "line-through":
                return 3;
            case "none":
                return 4
            }
            return 0
        }).filter(function(t) {
            return t !== 0
        })
    }
}
  , t0 = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        var t = []
          , r = [];
        return e.forEach(function(n) {
            switch (n.type) {
            case 20:
            case 0:
                t.push(n.value);
                break;
            case 17:
                t.push(n.number.toString());
                break;
            case 4:
                r.push(t.join(" ")),
                t.length = 0;
                break
            }
        }),
        t.length && r.push(t.join(" ")),
        r.map(function(n) {
            return n.indexOf(" ") === -1 ? n : "'" + n + "'"
        })
    }
}
  , r0 = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length"
}
  , n0 = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function(A, e) {
        if (pr(e))
            return e.number;
        if (V(e))
            switch (e.value) {
            case "bold":
                return 700;
            case "normal":
            default:
                return 400
            }
        return 400
    }
}
  , i0 = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(A, e) {
        return e.filter(V).map(function(t) {
            return t.value
        })
    }
}
  , s0 = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
        switch (e) {
        case "oblique":
            return "oblique";
        case "italic":
            return "italic";
        case "normal":
        default:
            return "normal"
        }
    }
}
  , aA = function(A, e) {
    return (A & e) !== 0
}
  , o0 = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(A, e) {
        if (e.length === 0)
            return [];
        var t = e[0];
        return t.type === 20 && t.value === "none" ? [] : e
    }
}
  , l0 = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(A, e) {
        if (e.length === 0)
            return null;
        var t = e[0];
        if (t.type === 20 && t.value === "none")
            return null;
        for (var r = [], n = e.filter(Dg), i = 0; i < n.length; i++) {
            var s = n[i]
              , o = n[i + 1];
            if (s.type === 20) {
                var l = o && pr(o) ? o.number : 1;
                r.push({
                    counter: s.value,
                    increment: l
                })
            }
        }
        return r
    }
}
  , a0 = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(A, e) {
        if (e.length === 0)
            return [];
        for (var t = [], r = e.filter(Dg), n = 0; n < r.length; n++) {
            var i = r[n]
              , s = r[n + 1];
            if (V(i) && i.value !== "none") {
                var o = s && pr(s) ? s.number : 0;
                t.push({
                    counter: i.value,
                    reset: o
                })
            }
        }
        return t
    }
}
  , u0 = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        return e.filter(Ln).map(function(t) {
            return Zg.parse(A, t)
        })
    }
}
  , B0 = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(A, e) {
        if (e.length === 0)
            return null;
        var t = e[0];
        if (t.type === 20 && t.value === "none")
            return null;
        var r = []
          , n = e.filter(kp);
        if (n.length % 2 !== 0)
            return null;
        for (var i = 0; i < n.length; i += 2) {
            var s = n[i].value
              , o = n[i + 1].value;
            r.push({
                open: s,
                close: o
            })
        }
        return r
    }
}
  , SB = function(A, e, t) {
    if (!A)
        return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : ""
}
  , c0 = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(A, e) {
        return e.length === 1 && Rl(e[0], "none") ? [] : Fe(e).map(function(t) {
            for (var r = {
                color: 255,
                offsetX: hA,
                offsetY: hA,
                blur: hA,
                spread: hA,
                inset: !1
            }, n = 0, i = 0; i < t.length; i++) {
                var s = t[i];
                Rl(s, "inset") ? r.inset = !0 : at(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s,
                n++) : r.color = it.parse(A, s)
            }
            return r
        })
    }
}
  , f0 = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
        var t = [0, 1, 2]
          , r = [];
        return e.filter(V).forEach(function(n) {
            switch (n.value) {
            case "stroke":
                r.push(1);
                break;
            case "fill":
                r.push(0);
                break;
            case "markers":
                r.push(2);
                break
            }
        }),
        t.forEach(function(n) {
            r.indexOf(n) === -1 && r.push(n)
        }),
        r
    }
}
  , g0 = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color"
}
  , d0 = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, e) {
        return Ln(e) ? e.number : 0
    }
}
  , w0 = function() {
    function A(e, t) {
        var r, n;
        this.animationDuration = H(e, u0, t.animationDuration),
        this.backgroundClip = H(e, _p, t.backgroundClip),
        this.backgroundColor = H(e, Vp, t.backgroundColor),
        this.backgroundImage = H(e, jp, t.backgroundImage),
        this.backgroundOrigin = H(e, $p, t.backgroundOrigin),
        this.backgroundPosition = H(e, qp, t.backgroundPosition),
        this.backgroundRepeat = H(e, AC, t.backgroundRepeat),
        this.backgroundSize = H(e, tC, t.backgroundSize),
        this.borderTopColor = H(e, nC, t.borderTopColor),
        this.borderRightColor = H(e, iC, t.borderRightColor),
        this.borderBottomColor = H(e, sC, t.borderBottomColor),
        this.borderLeftColor = H(e, oC, t.borderLeftColor),
        this.borderTopLeftRadius = H(e, lC, t.borderTopLeftRadius),
        this.borderTopRightRadius = H(e, aC, t.borderTopRightRadius),
        this.borderBottomRightRadius = H(e, uC, t.borderBottomRightRadius),
        this.borderBottomLeftRadius = H(e, BC, t.borderBottomLeftRadius),
        this.borderTopStyle = H(e, cC, t.borderTopStyle),
        this.borderRightStyle = H(e, fC, t.borderRightStyle),
        this.borderBottomStyle = H(e, gC, t.borderBottomStyle),
        this.borderLeftStyle = H(e, dC, t.borderLeftStyle),
        this.borderTopWidth = H(e, wC, t.borderTopWidth),
        this.borderRightWidth = H(e, QC, t.borderRightWidth),
        this.borderBottomWidth = H(e, hC, t.borderBottomWidth),
        this.borderLeftWidth = H(e, pC, t.borderLeftWidth),
        this.boxShadow = H(e, c0, t.boxShadow),
        this.color = H(e, CC, t.color),
        this.direction = H(e, UC, t.direction),
        this.display = H(e, FC, t.display),
        this.float = H(e, mC, t.cssFloat),
        this.fontFamily = H(e, t0, t.fontFamily),
        this.fontSize = H(e, r0, t.fontSize),
        this.fontStyle = H(e, s0, t.fontStyle),
        this.fontVariant = H(e, i0, t.fontVariant),
        this.fontWeight = H(e, n0, t.fontWeight),
        this.letterSpacing = H(e, EC, t.letterSpacing),
        this.lineBreak = H(e, yC, t.lineBreak),
        this.lineHeight = H(e, HC, t.lineHeight),
        this.listStyleImage = H(e, IC, t.listStyleImage),
        this.listStylePosition = H(e, SC, t.listStylePosition),
        this.listStyleType = H(e, _l, t.listStyleType),
        this.marginTop = H(e, LC, t.marginTop),
        this.marginRight = H(e, KC, t.marginRight),
        this.marginBottom = H(e, xC, t.marginBottom),
        this.marginLeft = H(e, DC, t.marginLeft),
        this.opacity = H(e, qC, t.opacity);
        var i = H(e, TC, t.overflow);
        this.overflowX = i[0],
        this.overflowY = i[i.length > 1 ? 1 : 0],
        this.overflowWrap = H(e, OC, t.overflowWrap),
        this.paddingTop = H(e, MC, t.paddingTop),
        this.paddingRight = H(e, kC, t.paddingRight),
        this.paddingBottom = H(e, NC, t.paddingBottom),
        this.paddingLeft = H(e, RC, t.paddingLeft),
        this.paintOrder = H(e, f0, t.paintOrder),
        this.position = H(e, VC, t.position),
        this.textAlign = H(e, _C, t.textAlign),
        this.textDecorationColor = H(e, A0, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color),
        this.textDecorationLine = H(e, e0, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration),
        this.textShadow = H(e, GC, t.textShadow),
        this.textTransform = H(e, PC, t.textTransform),
        this.transform = H(e, XC, t.transform),
        this.transformOrigin = H(e, zC, t.transformOrigin),
        this.visibility = H(e, ZC, t.visibility),
        this.webkitTextStrokeColor = H(e, g0, t.webkitTextStrokeColor),
        this.webkitTextStrokeWidth = H(e, d0, t.webkitTextStrokeWidth),
        this.wordBreak = H(e, jC, t.wordBreak),
        this.zIndex = H(e, $C, t.zIndex)
    }
    return A.prototype.isVisible = function() {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0
    }
    ,
    A.prototype.isTransparent = function() {
        return st(this.backgroundColor)
    }
    ,
    A.prototype.isTransformed = function() {
        return this.transform !== null
    }
    ,
    A.prototype.isPositioned = function() {
        return this.position !== 0
    }
    ,
    A.prototype.isPositionedWithZIndex = function() {
        return this.isPositioned() && !this.zIndex.auto
    }
    ,
    A.prototype.isFloating = function() {
        return this.float !== 0
    }
    ,
    A.prototype.isInlineLevel = function() {
        return aA(this.display, 4) || aA(this.display, 33554432) || aA(this.display, 268435456) || aA(this.display, 536870912) || aA(this.display, 67108864) || aA(this.display, 134217728)
    }
    ,
    A
}()
  , Q0 = function() {
    function A(e, t) {
        this.content = H(e, o0, t.content),
        this.quotes = H(e, B0, t.quotes)
    }
    return A
}()
  , LB = function() {
    function A(e, t) {
        this.counterIncrement = H(e, l0, t.counterIncrement),
        this.counterReset = H(e, a0, t.counterReset)
    }
    return A
}()
  , H = function(A, e, t) {
    var r = new Kg
      , n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var i = new xg(r.read());
    switch (e.type) {
    case 2:
        var s = i.parseComponentValue();
        return e.parse(A, V(s) ? s.value : e.initialValue);
    case 0:
        return e.parse(A, i.parseComponentValue());
    case 1:
        return e.parse(A, i.parseComponentValues());
    case 4:
        return i.parseComponentValue();
    case 3:
        switch (e.format) {
        case "angle":
            return Ks.parse(A, i.parseComponentValue());
        case "color":
            return it.parse(A, i.parseComponentValue());
        case "image":
            return Ja.parse(A, i.parseComponentValue());
        case "length":
            var o = i.parseComponentValue();
            return at(o) ? o : hA;
        case "length-percentage":
            var l = i.parseComponentValue();
            return iA(l) ? l : hA;
        case "time":
            return Zg.parse(A, i.parseComponentValue())
        }
        break
    }
}
  , h0 = "data-html2canvas-debug"
  , p0 = function(A) {
    var e = A.getAttribute(h0);
    switch (e) {
    case "all":
        return 1;
    case "clone":
        return 2;
    case "parse":
        return 3;
    case "render":
        return 4;
    default:
        return 0
    }
}
  , Vl = function(A, e) {
    var t = p0(A);
    return t === 1 || e === t
}
  , ve = function() {
    function A(e, t) {
        if (this.context = e,
        this.textNodes = [],
        this.elements = [],
        this.flags = 0,
        Vl(t, 3))
            debugger ;this.styles = new w0(e,window.getComputedStyle(t, null)),
        Xl(t) && (this.styles.animationDuration.some(function(r) {
            return r > 0
        }) && (t.style.animationDuration = "0s"),
        this.styles.transform !== null && (t.style.transform = "none")),
        this.bounds = Ss(this.context, t),
        Vl(t, 4) && (this.flags |= 16)
    }
    return A
}()
  , C0 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="
  , KB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Vr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Bi = 0; Bi < KB.length; Bi++)
    Vr[KB.charCodeAt(Bi)] = Bi;
var U0 = function(A) {
    var e = A.length * .75, t = A.length, r, n = 0, i, s, o, l;
    A[A.length - 1] === "=" && (e--,
    A[A.length - 2] === "=" && e--);
    var a = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e)
      , u = Array.isArray(a) ? a : new Uint8Array(a);
    for (r = 0; r < t; r += 4)
        i = Vr[A.charCodeAt(r)],
        s = Vr[A.charCodeAt(r + 1)],
        o = Vr[A.charCodeAt(r + 2)],
        l = Vr[A.charCodeAt(r + 3)],
        u[n++] = i << 2 | s >> 4,
        u[n++] = (s & 15) << 4 | o >> 2,
        u[n++] = (o & 3) << 6 | l & 63;
    return a
}
  , F0 = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
        t.push(A[r + 1] << 8 | A[r]);
    return t
}
  , v0 = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
        t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t
}
  , mt = 5
  , Wa = 11
  , Co = 2
  , m0 = Wa - mt
  , jg = 65536 >> mt
  , E0 = 1 << mt
  , Uo = E0 - 1
  , y0 = 1024 >> mt
  , H0 = jg + y0
  , I0 = H0
  , S0 = 32
  , L0 = I0 + S0
  , K0 = 65536 >> Wa
  , x0 = 1 << m0
  , D0 = x0 - 1
  , xB = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
}
  , T0 = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
}
  , O0 = function(A, e) {
    var t = U0(A)
      , r = Array.isArray(t) ? v0(t) : new Uint32Array(t)
      , n = Array.isArray(t) ? F0(t) : new Uint16Array(t)
      , i = 24
      , s = xB(n, i / 2, r[4] / 2)
      , o = r[5] === 2 ? xB(n, (i + r[4]) / 2) : T0(r, Math.ceil((i + r[4]) / 4));
    return new M0(r[0],r[1],r[2],r[3],s,o)
}
  , M0 = function() {
    function A(e, t, r, n, i, s) {
        this.initialValue = e,
        this.errorValue = t,
        this.highStart = r,
        this.highValueIndex = n,
        this.index = i,
        this.data = s
    }
    return A.prototype.get = function(e) {
        var t;
        if (e >= 0) {
            if (e < 55296 || e > 56319 && e <= 65535)
                return t = this.index[e >> mt],
                t = (t << Co) + (e & Uo),
                this.data[t];
            if (e <= 65535)
                return t = this.index[jg + (e - 55296 >> mt)],
                t = (t << Co) + (e & Uo),
                this.data[t];
            if (e < this.highStart)
                return t = L0 - K0 + (e >> Wa),
                t = this.index[t],
                t += e >> mt & D0,
                t = this.index[t],
                t = (t << Co) + (e & Uo),
                this.data[t];
            if (e <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    A
}()
  , DB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , k0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ci = 0; ci < DB.length; ci++)
    k0[DB.charCodeAt(ci)] = ci;
var N0 = 1, Fo = 2, vo = 3, TB = 4, OB = 5, R0 = 7, MB = 8, mo = 9, Eo = 10, kB = 11, NB = 12, RB = 13, _B = 14, yo = 15, _0 = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
        var n = A.charCodeAt(t++);
        if (n >= 55296 && n <= 56319 && t < r) {
            var i = A.charCodeAt(t++);
            (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n),
            t--)
        } else
            e.push(n)
    }
    return e
}, V0 = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
        A[e] = arguments[e];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t)
        return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
        var s = A[n];
        s <= 65535 ? r.push(s) : (s -= 65536,
        r.push((s >> 10) + 55296, s % 1024 + 56320)),
        (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r),
        r.length = 0)
    }
    return i
}, G0 = O0(C0), zA = "×", Ho = "÷", P0 = function(A) {
    return G0.get(A)
}, X0 = function(A, e, t) {
    var r = t - 2
      , n = e[r]
      , i = e[t - 1]
      , s = e[t];
    if (i === Fo && s === vo)
        return zA;
    if (i === Fo || i === vo || i === TB || s === Fo || s === vo || s === TB)
        return Ho;
    if (i === MB && [MB, mo, kB, NB].indexOf(s) !== -1 || (i === kB || i === mo) && (s === mo || s === Eo) || (i === NB || i === Eo) && s === Eo || s === RB || s === OB || s === R0 || i === N0)
        return zA;
    if (i === RB && s === _B) {
        for (; n === OB; )
            n = e[--r];
        if (n === _B)
            return zA
    }
    if (i === yo && s === yo) {
        for (var o = 0; n === yo; )
            o++,
            n = e[--r];
        if (o % 2 === 0)
            return zA
    }
    return Ho
}, J0 = function(A) {
    var e = _0(A)
      , t = e.length
      , r = 0
      , n = 0
      , i = e.map(P0);
    return {
        next: function() {
            if (r >= t)
                return {
                    done: !0,
                    value: null
                };
            for (var s = zA; r < t && (s = X0(e, i, ++r)) === zA; )
                ;
            if (s !== zA || r === t) {
                var o = V0.apply(null, e.slice(n, r));
                return n = r,
                {
                    value: o,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}, W0 = function(A) {
    for (var e = J0(A), t = [], r; !(r = e.next()).done; )
        r.value && t.push(r.value.slice());
    return t
}, b0 = function(A) {
    var e = 123;
    if (A.createRange) {
        var t = A.createRange();
        if (t.getBoundingClientRect) {
            var r = A.createElement("boundtest");
            r.style.height = e + "px",
            r.style.display = "block",
            A.body.appendChild(r),
            t.selectNode(r);
            var n = t.getBoundingClientRect()
              , i = Math.round(n.height);
            if (A.body.removeChild(r),
            i === e)
                return !0
        }
    }
    return !1
}, Y0 = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px",
    e.style.display = "block",
    e.style.fontSize = "12px",
    e.style.letterSpacing = "0px",
    e.style.wordSpacing = "0px",
    A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild
      , n = Ls(r.data).map(function(l) {
        return eA(l)
    })
      , i = 0
      , s = {}
      , o = n.every(function(l, a) {
        t.setStart(r, i),
        t.setEnd(r, i + l.length);
        var u = t.getBoundingClientRect();
        i += l.length;
        var B = u.x > s.x || u.y > s.y;
        return s = u,
        a === 0 ? !0 : B
    });
    return A.body.removeChild(e),
    o
}, z0 = function() {
    return typeof new Image().crossOrigin < "u"
}, Z0 = function() {
    return typeof new XMLHttpRequest().responseType == "string"
}, j0 = function(A) {
    var e = new Image
      , t = A.createElement("canvas")
      , r = t.getContext("2d");
    if (!r)
        return !1;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
        r.drawImage(e, 0, 0),
        t.toDataURL()
    } catch {
        return !1
    }
    return !0
}, VB = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255
}, $0 = function(A) {
    var e = A.createElement("canvas")
      , t = 100;
    e.width = t,
    e.height = t;
    var r = e.getContext("2d");
    if (!r)
        return Promise.reject(!1);
    r.fillStyle = "rgb(0, 255, 0)",
    r.fillRect(0, 0, t, t);
    var n = new Image
      , i = e.toDataURL();
    n.src = i;
    var s = Gl(t, t, 0, 0, n);
    return r.fillStyle = "red",
    r.fillRect(0, 0, t, t),
    GB(s).then(function(o) {
        r.drawImage(o, 0, 0);
        var l = r.getImageData(0, 0, t, t).data;
        r.fillStyle = "red",
        r.fillRect(0, 0, t, t);
        var a = A.createElement("div");
        return a.style.backgroundImage = "url(" + i + ")",
        a.style.height = t + "px",
        VB(l) ? GB(Gl(t, t, 0, 0, a)) : Promise.reject(!1)
    }).then(function(o) {
        return r.drawImage(o, 0, 0),
        VB(r.getImageData(0, 0, t, t).data)
    }).catch(function() {
        return !1
    })
}, Gl = function(A, e, t, r, n) {
    var i = "http://www.w3.org/2000/svg"
      , s = document.createElementNS(i, "svg")
      , o = document.createElementNS(i, "foreignObject");
    return s.setAttributeNS(null, "width", A.toString()),
    s.setAttributeNS(null, "height", e.toString()),
    o.setAttributeNS(null, "width", "100%"),
    o.setAttributeNS(null, "height", "100%"),
    o.setAttributeNS(null, "x", t.toString()),
    o.setAttributeNS(null, "y", r.toString()),
    o.setAttributeNS(null, "externalResourcesRequired", "true"),
    s.appendChild(o),
    o.appendChild(n),
    s
}, GB = function(A) {
    return new Promise(function(e, t) {
        var r = new Image;
        r.onload = function() {
            return e(r)
        }
        ,
        r.onerror = t,
        r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A))
    }
    )
}, QA = {
    get SUPPORT_RANGE_BOUNDS() {
        var A = b0(document);
        return Object.defineProperty(QA, "SUPPORT_RANGE_BOUNDS", {
            value: A
        }),
        A
    },
    get SUPPORT_WORD_BREAKING() {
        var A = QA.SUPPORT_RANGE_BOUNDS && Y0(document);
        return Object.defineProperty(QA, "SUPPORT_WORD_BREAKING", {
            value: A
        }),
        A
    },
    get SUPPORT_SVG_DRAWING() {
        var A = j0(document);
        return Object.defineProperty(QA, "SUPPORT_SVG_DRAWING", {
            value: A
        }),
        A
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var A = typeof Array.from == "function" && typeof window.fetch == "function" ? $0(document) : Promise.resolve(!1);
        return Object.defineProperty(QA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
            value: A
        }),
        A
    },
    get SUPPORT_CORS_IMAGES() {
        var A = z0();
        return Object.defineProperty(QA, "SUPPORT_CORS_IMAGES", {
            value: A
        }),
        A
    },
    get SUPPORT_RESPONSE_TYPE() {
        var A = Z0();
        return Object.defineProperty(QA, "SUPPORT_RESPONSE_TYPE", {
            value: A
        }),
        A
    },
    get SUPPORT_CORS_XHR() {
        var A = "withCredentials"in new XMLHttpRequest;
        return Object.defineProperty(QA, "SUPPORT_CORS_XHR", {
            value: A
        }),
        A
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        var A = !!(typeof Intl < "u" && Intl.Segmenter);
        return Object.defineProperty(QA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
            value: A
        }),
        A
    }
}, en = function() {
    function A(e, t) {
        this.text = e,
        this.bounds = t
    }
    return A
}(), q0 = function(A, e, t, r) {
    var n = tU(e, t)
      , i = []
      , s = 0;
    return n.forEach(function(o) {
        if (t.textDecorationLine.length || o.trim().length > 0)
            if (QA.SUPPORT_RANGE_BOUNDS) {
                var l = PB(r, s, o.length).getClientRects();
                if (l.length > 1) {
                    var a = ba(o)
                      , u = 0;
                    a.forEach(function(f) {
                        i.push(new en(f,Me.fromDOMRectList(A, PB(r, u + s, f.length).getClientRects()))),
                        u += f.length
                    })
                } else
                    i.push(new en(o,Me.fromDOMRectList(A, l)))
            } else {
                var B = r.splitText(o.length);
                i.push(new en(o,AU(A, r))),
                r = B
            }
        else
            QA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
        s += o.length
    }),
    i
}, AU = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
        var r = t.createElement("html2canvaswrapper");
        r.appendChild(e.cloneNode(!0));
        var n = e.parentNode;
        if (n) {
            n.replaceChild(r, e);
            var i = Ss(A, r);
            return r.firstChild && n.replaceChild(r.firstChild, r),
            i
        }
    }
    return Me.EMPTY
}, PB = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r)
        throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e),
    n.setEnd(A, e + t),
    n
}, ba = function(A) {
    if (QA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var e = new Intl.Segmenter(void 0,{
            granularity: "grapheme"
        });
        return Array.from(e.segment(A)).map(function(t) {
            return t.segment
        })
    }
    return W0(A)
}, eU = function(A, e) {
    if (QA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var t = new Intl.Segmenter(void 0,{
            granularity: "word"
        });
        return Array.from(t.segment(A)).map(function(r) {
            return r.segment
        })
    }
    return nU(A, e)
}, tU = function(A, e) {
    return e.letterSpacing !== 0 ? ba(A) : eU(A, e)
}, rU = [32, 160, 4961, 65792, 65793, 4153, 4241], nU = function(A, e) {
    for (var t = Kh(A, {
        lineBreak: e.lineBreak,
        wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, i = function() {
        if (n.value) {
            var s = n.value.slice()
              , o = Ls(s)
              , l = "";
            o.forEach(function(a) {
                rU.indexOf(a) === -1 ? l += eA(a) : (l.length && r.push(l),
                r.push(eA(a)),
                l = "")
            }),
            l.length && r.push(l)
        }
    }; !(n = t.next()).done; )
        i();
    return r
}, iU = function() {
    function A(e, t, r) {
        this.text = sU(t.data, r.textTransform),
        this.textBounds = q0(e, this.text, r, t)
    }
    return A
}(), sU = function(A, e) {
    switch (e) {
    case 1:
        return A.toLowerCase();
    case 3:
        return A.replace(oU, lU);
    case 2:
        return A.toUpperCase();
    default:
        return A
    }
}, oU = /(^|\s|:|-|\(|\))([a-z])/g, lU = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A
}, $g = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n.src = r.currentSrc || r.src,
        n.intrinsicWidth = r.naturalWidth,
        n.intrinsicHeight = r.naturalHeight,
        n.context.cache.addImage(n.src),
        n
    }
    return e
}(ve), qg = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n.canvas = r,
        n.intrinsicWidth = r.width,
        n.intrinsicHeight = r.height,
        n
    }
    return e
}(ve), Ad = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this
          , i = new XMLSerializer
          , s = Ss(t, r);
        return r.setAttribute("width", s.width + "px"),
        r.setAttribute("height", s.height + "px"),
        n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)),
        n.intrinsicWidth = r.width.baseVal.value,
        n.intrinsicHeight = r.height.baseVal.value,
        n.context.cache.addImage(n.svg),
        n
    }
    return e
}(ve), ed = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n.value = r.value,
        n
    }
    return e
}(ve), Pl = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n.start = r.start,
        n.reversed = typeof r.reversed == "boolean" && r.reversed === !0,
        n
    }
    return e
}(ve), aU = [{
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
}], uU = [{
    type: 16,
    flags: 0,
    number: 50
}], BU = function(A) {
    return A.width > A.height ? new Me(A.left + (A.width - A.height) / 2,A.top,A.height,A.height) : A.width < A.height ? new Me(A.left,A.top + (A.height - A.width) / 2,A.width,A.width) : A
}, cU = function(A) {
    var e = A.type === fU ? new Array(A.value.length + 1).join("•") : A.value;
    return e.length === 0 ? A.placeholder || "" : e
}, ss = "checkbox", os = "radio", fU = "password", XB = 707406591, Ya = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        switch (n.type = r.type.toLowerCase(),
        n.checked = r.checked,
        n.value = cU(r),
        (n.type === ss || n.type === os) && (n.styles.backgroundColor = 3739148031,
        n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575,
        n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1,
        n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1,
        n.styles.backgroundClip = [0],
        n.styles.backgroundOrigin = [0],
        n.bounds = BU(n.bounds)),
        n.type) {
        case ss:
            n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = aU;
            break;
        case os:
            n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = uU;
            break
        }
        return n
    }
    return e
}(ve), td = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this
          , i = r.options[r.selectedIndex || 0];
        return n.value = i && i.text || "",
        n
    }
    return e
}(ve), rd = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n.value = r.value,
        n
    }
    return e
}(ve), nd = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        n.src = r.src,
        n.width = parseInt(r.width, 10) || 0,
        n.height = parseInt(r.height, 10) || 0,
        n.backgroundColor = n.styles.backgroundColor;
        try {
            if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
                n.tree = sd(t, r.contentWindow.document.documentElement);
                var i = r.contentWindow.document.documentElement ? qr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Ke.TRANSPARENT
                  , s = r.contentWindow.document.body ? qr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Ke.TRANSPARENT;
                n.backgroundColor = st(i) ? st(s) ? n.styles.backgroundColor : s : i
            }
        } catch {}
        return n
    }
    return e
}(ve), gU = ["OL", "UL", "MENU"], Ki = function(A, e, t, r) {
    for (var n = e.firstChild, i = void 0; n; n = i)
        if (i = n.nextSibling,
        od(n) && n.data.trim().length > 0)
            t.textNodes.push(new iU(A,n,t.styles));
        else if (qt(n))
            if (Bd(n) && n.assignedNodes)
                n.assignedNodes().forEach(function(o) {
                    return Ki(A, o, t, r)
                });
            else {
                var s = id(A, n);
                s.styles.isVisible() && (dU(n, s, r) ? s.flags |= 4 : wU(s.styles) && (s.flags |= 2),
                gU.indexOf(n.tagName) !== -1 && (s.flags |= 8),
                t.elements.push(s),
                n.slot,
                n.shadowRoot ? Ki(A, n.shadowRoot, s, r) : !ls(n) && !ld(n) && !as(n) && Ki(A, n, s, r))
            }
}, id = function(A, e) {
    return Jl(e) ? new $g(A,e) : ad(e) ? new qg(A,e) : ld(e) ? new Ad(A,e) : QU(e) ? new ed(A,e) : hU(e) ? new Pl(A,e) : pU(e) ? new Ya(A,e) : as(e) ? new td(A,e) : ls(e) ? new rd(A,e) : ud(e) ? new nd(A,e) : new ve(A,e)
}, sd = function(A, e) {
    var t = id(A, e);
    return t.flags |= 4,
    Ki(A, e, t, t),
    t
}, dU = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || za(A) && t.styles.isTransparent()
}, wU = function(A) {
    return A.isPositioned() || A.isFloating()
}, od = function(A) {
    return A.nodeType === Node.TEXT_NODE
}, qt = function(A) {
    return A.nodeType === Node.ELEMENT_NODE
}, Xl = function(A) {
    return qt(A) && typeof A.style < "u" && !xi(A)
}, xi = function(A) {
    return typeof A.className == "object"
}, QU = function(A) {
    return A.tagName === "LI"
}, hU = function(A) {
    return A.tagName === "OL"
}, pU = function(A) {
    return A.tagName === "INPUT"
}, CU = function(A) {
    return A.tagName === "HTML"
}, ld = function(A) {
    return A.tagName === "svg"
}, za = function(A) {
    return A.tagName === "BODY"
}, ad = function(A) {
    return A.tagName === "CANVAS"
}, JB = function(A) {
    return A.tagName === "VIDEO"
}, Jl = function(A) {
    return A.tagName === "IMG"
}, ud = function(A) {
    return A.tagName === "IFRAME"
}, WB = function(A) {
    return A.tagName === "STYLE"
}, UU = function(A) {
    return A.tagName === "SCRIPT"
}, ls = function(A) {
    return A.tagName === "TEXTAREA"
}, as = function(A) {
    return A.tagName === "SELECT"
}, Bd = function(A) {
    return A.tagName === "SLOT"
}, bB = function(A) {
    return A.tagName.indexOf("-") > 0
}, FU = function() {
    function A() {
        this.counters = {}
    }
    return A.prototype.getCounterValue = function(e) {
        var t = this.counters[e];
        return t && t.length ? t[t.length - 1] : 1
    }
    ,
    A.prototype.getCounterValues = function(e) {
        var t = this.counters[e];
        return t || []
    }
    ,
    A.prototype.pop = function(e) {
        var t = this;
        e.forEach(function(r) {
            return t.counters[r].pop()
        })
    }
    ,
    A.prototype.parse = function(e) {
        var t = this
          , r = e.counterIncrement
          , n = e.counterReset
          , i = !0;
        r !== null && r.forEach(function(o) {
            var l = t.counters[o.counter];
            l && o.increment !== 0 && (i = !1,
            l.length || l.push(1),
            l[Math.max(0, l.length - 1)] += o.increment)
        });
        var s = [];
        return i && n.forEach(function(o) {
            var l = t.counters[o.counter];
            s.push(o.counter),
            l || (l = t.counters[o.counter] = []),
            l.push(o.reset)
        }),
        s
    }
    ,
    A
}(), YB = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, zB = {
    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
}, vU = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
}, mU = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
}, Mt = function(A, e, t, r, n, i) {
    return A < e || A > t ? vn(A, n, i.length > 0) : r.integers.reduce(function(s, o, l) {
        for (; A >= o; )
            A -= o,
            s += r.values[l];
        return s
    }, "") + i
}, cd = function(A, e, t, r) {
    var n = "";
    do
        t || A--,
        n = r(A) + n,
        A /= e;
    while (A * e >= e);
    return n
}, AA = function(A, e, t, r, n) {
    var i = t - e + 1;
    return (A < 0 ? "-" : "") + (cd(Math.abs(A), i, r, function(s) {
        return eA(Math.floor(s % i) + e)
    }) + n)
}, ft = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return cd(Math.abs(A), r, !1, function(n) {
        return e[Math.floor(n % r)]
    }) + t
}, Rt = 1, Re = 2, _e = 4, Gr = 8, Ee = function(A, e, t, r, n, i) {
    if (A < -9999 || A > 9999)
        return vn(A, 4, n.length > 0);
    var s = Math.abs(A)
      , o = n;
    if (s === 0)
        return e[0] + o;
    for (var l = 0; s > 0 && l <= 4; l++) {
        var a = s % 10;
        a === 0 && aA(i, Rt) && o !== "" ? o = e[a] + o : a > 1 || a === 1 && l === 0 || a === 1 && l === 1 && aA(i, Re) || a === 1 && l === 1 && aA(i, _e) && A > 100 || a === 1 && l > 1 && aA(i, Gr) ? o = e[a] + (l > 0 ? t[l - 1] : "") + o : a === 1 && l > 0 && (o = t[l - 1] + o),
        s = Math.floor(s / 10)
    }
    return (A < 0 ? r : "") + o
}, ZB = "十百千萬", jB = "拾佰仟萬", $B = "マイナス", Io = "마이너스", vn = function(A, e, t) {
    var r = t ? ". " : ""
      , n = t ? "、" : ""
      , i = t ? ", " : ""
      , s = t ? " " : "";
    switch (e) {
    case 0:
        return "•" + s;
    case 1:
        return "◦" + s;
    case 2:
        return "◾" + s;
    case 5:
        var o = AA(A, 48, 57, !0, r);
        return o.length < 4 ? "0" + o : o;
    case 4:
        return ft(A, "〇一二三四五六七八九", n);
    case 6:
        return Mt(A, 1, 3999, YB, 3, r).toLowerCase();
    case 7:
        return Mt(A, 1, 3999, YB, 3, r);
    case 8:
        return AA(A, 945, 969, !1, r);
    case 9:
        return AA(A, 97, 122, !1, r);
    case 10:
        return AA(A, 65, 90, !1, r);
    case 11:
        return AA(A, 1632, 1641, !0, r);
    case 12:
    case 49:
        return Mt(A, 1, 9999, zB, 3, r);
    case 35:
        return Mt(A, 1, 9999, zB, 3, r).toLowerCase();
    case 13:
        return AA(A, 2534, 2543, !0, r);
    case 14:
    case 30:
        return AA(A, 6112, 6121, !0, r);
    case 15:
        return ft(A, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
        return ft(A, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
        return Ee(A, "零一二三四五六七八九", ZB, "負", n, Re | _e | Gr);
    case 47:
        return Ee(A, "零壹貳參肆伍陸柒捌玖", jB, "負", n, Rt | Re | _e | Gr);
    case 42:
        return Ee(A, "零一二三四五六七八九", ZB, "负", n, Re | _e | Gr);
    case 41:
        return Ee(A, "零壹贰叁肆伍陆柒捌玖", jB, "负", n, Rt | Re | _e | Gr);
    case 26:
        return Ee(A, "〇一二三四五六七八九", "十百千万", $B, n, 0);
    case 25:
        return Ee(A, "零壱弐参四伍六七八九", "拾百千万", $B, n, Rt | Re | _e);
    case 31:
        return Ee(A, "영일이삼사오육칠팔구", "십백천만", Io, i, Rt | Re | _e);
    case 33:
        return Ee(A, "零一二三四五六七八九", "十百千萬", Io, i, 0);
    case 32:
        return Ee(A, "零壹貳參四五六七八九", "拾百千", Io, i, Rt | Re | _e);
    case 18:
        return AA(A, 2406, 2415, !0, r);
    case 20:
        return Mt(A, 1, 19999, mU, 3, r);
    case 21:
        return AA(A, 2790, 2799, !0, r);
    case 22:
        return AA(A, 2662, 2671, !0, r);
    case 22:
        return Mt(A, 1, 10999, vU, 3, r);
    case 23:
        return ft(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
        return ft(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
        return AA(A, 3302, 3311, !0, r);
    case 28:
        return ft(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
        return ft(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
        return AA(A, 3792, 3801, !0, r);
    case 37:
        return AA(A, 6160, 6169, !0, r);
    case 38:
        return AA(A, 4160, 4169, !0, r);
    case 39:
        return AA(A, 2918, 2927, !0, r);
    case 40:
        return AA(A, 1776, 1785, !0, r);
    case 43:
        return AA(A, 3046, 3055, !0, r);
    case 44:
        return AA(A, 3174, 3183, !0, r);
    case 45:
        return AA(A, 3664, 3673, !0, r);
    case 46:
        return AA(A, 3872, 3881, !0, r);
    case 3:
    default:
        return AA(A, 48, 57, !0, r)
    }
}, fd = "data-html2canvas-ignore", qB = function() {
    function A(e, t, r) {
        if (this.context = e,
        this.options = r,
        this.scrolledElements = [],
        this.referenceElement = t,
        this.counters = new FU,
        this.quoteDepth = 0,
        !t.ownerDocument)
            throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1)
    }
    return A.prototype.toIFrame = function(e, t) {
        var r = this
          , n = EU(e, t);
        if (!n.contentWindow)
            return Promise.reject("Unable to find iframe window");
        var i = e.defaultView.pageXOffset
          , s = e.defaultView.pageYOffset
          , o = n.contentWindow
          , l = o.document
          , a = IU(n).then(function() {
            return IA(r, void 0, void 0, function() {
                var u, B;
                return vA(this, function(f) {
                    switch (f.label) {
                    case 0:
                        return this.scrolledElements.forEach(xU),
                        o && (o.scrollTo(t.left, t.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                        this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))),
                        u = this.options.onclone,
                        B = this.clonedReferenceElement,
                        typeof B > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : l.fonts && l.fonts.ready ? [4, l.fonts.ready] : [3, 2];
                    case 1:
                        f.sent(),
                        f.label = 2;
                    case 2:
                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, HU(l)] : [3, 4];
                    case 3:
                        f.sent(),
                        f.label = 4;
                    case 4:
                        return typeof u == "function" ? [2, Promise.resolve().then(function() {
                            return u(l, B)
                        }).then(function() {
                            return n
                        })] : [2, n]
                    }
                })
            })
        });
        return l.open(),
        l.write(LU(document.doctype) + "<html></html>"),
        KU(this.referenceElement.ownerDocument, i, s),
        l.replaceChild(l.adoptNode(this.documentElement), l.documentElement),
        l.close(),
        a
    }
    ,
    A.prototype.createElementClone = function(e) {
        if (Vl(e, 2))
            debugger ;if (ad(e))
            return this.createCanvasClone(e);
        if (JB(e))
            return this.createVideoClone(e);
        if (WB(e))
            return this.createStyleClone(e);
        var t = e.cloneNode(!1);
        return Jl(t) && (Jl(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc,
        t.srcset = ""),
        t.loading === "lazy" && (t.loading = "eager")),
        bB(t) ? this.createCustomElementClone(t) : t
    }
    ,
    A.prototype.createCustomElementClone = function(e) {
        var t = document.createElement("html2canvascustomelement");
        return So(e.style, t),
        t
    }
    ,
    A.prototype.createStyleClone = function(e) {
        try {
            var t = e.sheet;
            if (t && t.cssRules) {
                var r = [].slice.call(t.cssRules, 0).reduce(function(i, s) {
                    return s && typeof s.cssText == "string" ? i + s.cssText : i
                }, "")
                  , n = e.cloneNode(!1);
                return n.textContent = r,
                n
            }
        } catch (i) {
            if (this.context.logger.error("Unable to access cssRules property", i),
            i.name !== "SecurityError")
                throw i
        }
        return e.cloneNode(!1)
    }
    ,
    A.prototype.createCanvasClone = function(e) {
        var t;
        if (this.options.inlineImages && e.ownerDocument) {
            var r = e.ownerDocument.createElement("img");
            try {
                return r.src = e.toDataURL(),
                r
            } catch {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e)
            }
        }
        var n = e.cloneNode(!1);
        try {
            n.width = e.width,
            n.height = e.height;
            var i = e.getContext("2d")
              , s = n.getContext("2d");
            if (s)
                if (!this.options.allowTaint && i)
                    s.putImageData(i.getImageData(0, 0, e.width, e.height), 0, 0);
                else {
                    var o = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
                    if (o) {
                        var l = o.getContextAttributes();
                        (l == null ? void 0 : l.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e)
                    }
                    s.drawImage(e, 0, 0)
                }
            return n
        } catch {
            this.context.logger.info("Unable to clone canvas as it is tainted", e)
        }
        return n
    }
    ,
    A.prototype.createVideoClone = function(e) {
        var t = e.ownerDocument.createElement("canvas");
        t.width = e.offsetWidth,
        t.height = e.offsetHeight;
        var r = t.getContext("2d");
        try {
            return r && (r.drawImage(e, 0, 0, t.width, t.height),
            this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)),
            t
        } catch {
            this.context.logger.info("Unable to clone video as it is tainted", e)
        }
        var n = e.ownerDocument.createElement("canvas");
        return n.width = e.offsetWidth,
        n.height = e.offsetHeight,
        n
    }
    ,
    A.prototype.appendChildNode = function(e, t, r) {
        (!qt(t) || !UU(t) && !t.hasAttribute(fd) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !qt(t) || !WB(t)) && e.appendChild(this.cloneNode(t, r))
    }
    ,
    A.prototype.cloneChildNodes = function(e, t, r) {
        for (var n = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
            if (qt(i) && Bd(i) && typeof i.assignedNodes == "function") {
                var s = i.assignedNodes();
                s.length && s.forEach(function(o) {
                    return n.appendChildNode(t, o, r)
                })
            } else
                this.appendChildNode(t, i, r)
    }
    ,
    A.prototype.cloneNode = function(e, t) {
        if (od(e))
            return document.createTextNode(e.data);
        if (!e.ownerDocument)
            return e.cloneNode(!1);
        var r = e.ownerDocument.defaultView;
        if (r && qt(e) && (Xl(e) || xi(e))) {
            var n = this.createElementClone(e);
            n.style.transitionProperty = "none";
            var i = r.getComputedStyle(e)
              , s = r.getComputedStyle(e, ":before")
              , o = r.getComputedStyle(e, ":after");
            this.referenceElement === e && Xl(n) && (this.clonedReferenceElement = n),
            za(n) && OU(n);
            var l = this.counters.parse(new LB(this.context,i))
              , a = this.resolvePseudoContent(e, n, s, tn.BEFORE);
            bB(e) && (t = !0),
            JB(e) || this.cloneChildNodes(e, n, t),
            a && n.insertBefore(a, n.firstChild);
            var u = this.resolvePseudoContent(e, n, o, tn.AFTER);
            return u && n.appendChild(u),
            this.counters.pop(l),
            (i && (this.options.copyStyles || xi(e)) && !ud(e) || t) && So(i, n),
            (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]),
            (ls(e) || as(e)) && (ls(n) || as(n)) && (n.value = e.value),
            n
        }
        return e.cloneNode(!1)
    }
    ,
    A.prototype.resolvePseudoContent = function(e, t, r, n) {
        var i = this;
        if (r) {
            var s = r.content
              , o = t.ownerDocument;
            if (!(!o || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
                this.counters.parse(new LB(this.context,r));
                var l = new Q0(this.context,r)
                  , a = o.createElement("html2canvaspseudoelement");
                So(r, a),
                l.content.forEach(function(B) {
                    if (B.type === 0)
                        a.appendChild(o.createTextNode(B.value));
                    else if (B.type === 22) {
                        var f = o.createElement("img");
                        f.src = B.value,
                        f.style.opacity = "1",
                        a.appendChild(f)
                    } else if (B.type === 18) {
                        if (B.name === "attr") {
                            var Q = B.values.filter(V);
                            Q.length && a.appendChild(o.createTextNode(e.getAttribute(Q[0].value) || ""))
                        } else if (B.name === "counter") {
                            var w = B.values.filter(gr)
                              , h = w[0]
                              , S = w[1];
                            if (h && V(h)) {
                                var g = i.counters.getCounterValue(h.value)
                                  , c = S && V(S) ? _l.parse(i.context, S.value) : 3;
                                a.appendChild(o.createTextNode(vn(g, c, !1)))
                            }
                        } else if (B.name === "counters") {
                            var d = B.values.filter(gr)
                              , h = d[0]
                              , p = d[1]
                              , S = d[2];
                            if (h && V(h)) {
                                var U = i.counters.getCounterValues(h.value)
                                  , C = S && V(S) ? _l.parse(i.context, S.value) : 3
                                  , v = p && p.type === 0 ? p.value : ""
                                  , m = U.map(function(G) {
                                    return vn(G, C, !1)
                                }).join(v);
                                a.appendChild(o.createTextNode(m))
                            }
                        }
                    } else if (B.type === 20)
                        switch (B.value) {
                        case "open-quote":
                            a.appendChild(o.createTextNode(SB(l.quotes, i.quoteDepth++, !0)));
                            break;
                        case "close-quote":
                            a.appendChild(o.createTextNode(SB(l.quotes, --i.quoteDepth, !1)));
                            break;
                        default:
                            a.appendChild(o.createTextNode(B.value))
                        }
                }),
                a.className = Wl + " " + bl;
                var u = n === tn.BEFORE ? " " + Wl : " " + bl;
                return xi(t) ? t.className.baseValue += u : t.className += u,
                a
            }
        }
    }
    ,
    A.destroy = function(e) {
        return e.parentNode ? (e.parentNode.removeChild(e),
        !0) : !1
    }
    ,
    A
}(), tn;
(function(A) {
    A[A.BEFORE = 0] = "BEFORE",
    A[A.AFTER = 1] = "AFTER"
}
)(tn || (tn = {}));
var EU = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container",
    t.style.visibility = "hidden",
    t.style.position = "fixed",
    t.style.left = "-10000px",
    t.style.top = "0px",
    t.style.border = "0",
    t.width = e.width.toString(),
    t.height = e.height.toString(),
    t.scrolling = "no",
    t.setAttribute(fd, "true"),
    A.body.appendChild(t),
    t
}, yU = function(A) {
    return new Promise(function(e) {
        if (A.complete) {
            e();
            return
        }
        if (!A.src) {
            e();
            return
        }
        A.onload = e,
        A.onerror = e
    }
    )
}, HU = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(yU))
}, IU = function(A) {
    return new Promise(function(e, t) {
        var r = A.contentWindow;
        if (!r)
            return t("No window assigned for iframe");
        var n = r.document;
        r.onload = A.onload = function() {
            r.onload = A.onload = null;
            var i = setInterval(function() {
                n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(i),
                e(A))
            }, 50)
        }
    }
    )
}, SU = ["all", "d", "content"], So = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
        var r = A.item(t);
        SU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r))
    }
    return e
}, LU = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ",
    A.name && (e += A.name),
    A.internalSubset && (e += A.internalSubset),
    A.publicId && (e += '"' + A.publicId + '"'),
    A.systemId && (e += '"' + A.systemId + '"'),
    e += ">"),
    e
}, KU = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
}, xU = function(A) {
    var e = A[0]
      , t = A[1]
      , r = A[2];
    e.scrollLeft = t,
    e.scrollTop = r
}, DU = ":before", TU = ":after", Wl = "___html2canvas___pseudoelement_before", bl = "___html2canvas___pseudoelement_after", Ac = `{
    content: "" !important;
    display: none !important;
}`, OU = function(A) {
    MU(A, "." + Wl + DU + Ac + `
         .` + bl + TU + Ac)
}, MU = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
        var r = t.createElement("style");
        r.textContent = e,
        A.appendChild(r)
    }
}, gd = function() {
    function A() {}
    return A.getOrigin = function(e) {
        var t = A._link;
        return t ? (t.href = e,
        t.href = t.href,
        t.protocol + t.hostname + t.port) : "about:blank"
    }
    ,
    A.isSameOrigin = function(e) {
        return A.getOrigin(e) === A._origin
    }
    ,
    A.setContext = function(e) {
        A._link = e.document.createElement("a"),
        A._origin = A.getOrigin(e.location.href)
    }
    ,
    A._origin = "about:blank",
    A
}(), kU = function() {
    function A(e, t) {
        this.context = e,
        this._options = t,
        this._cache = {}
    }
    return A.prototype.addImage = function(e) {
        var t = Promise.resolve();
        return this.has(e) || (Ko(e) || VU(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {}),
        t
    }
    ,
    A.prototype.match = function(e) {
        return this._cache[e]
    }
    ,
    A.prototype.loadImage = function(e) {
        return IA(this, void 0, void 0, function() {
            var t, r, n, i, s = this;
            return vA(this, function(o) {
                switch (o.label) {
                case 0:
                    return t = gd.isSameOrigin(e),
                    r = !Lo(e) && this._options.useCORS === !0 && QA.SUPPORT_CORS_IMAGES && !t,
                    n = !Lo(e) && !t && !Ko(e) && typeof this._options.proxy == "string" && QA.SUPPORT_CORS_XHR && !r,
                    !t && this._options.allowTaint === !1 && !Lo(e) && !Ko(e) && !n && !r ? [2] : (i = e,
                    n ? [4, this.proxy(i)] : [3, 2]);
                case 1:
                    i = o.sent(),
                    o.label = 2;
                case 2:
                    return this.context.logger.debug("Added image " + e.substring(0, 256)),
                    [4, new Promise(function(l, a) {
                        var u = new Image;
                        u.onload = function() {
                            return l(u)
                        }
                        ,
                        u.onerror = a,
                        (GU(i) || r) && (u.crossOrigin = "anonymous"),
                        u.src = i,
                        u.complete === !0 && setTimeout(function() {
                            return l(u)
                        }, 500),
                        s._options.imageTimeout > 0 && setTimeout(function() {
                            return a("Timed out (" + s._options.imageTimeout + "ms) loading image")
                        }, s._options.imageTimeout)
                    }
                    )];
                case 3:
                    return [2, o.sent()]
                }
            })
        })
    }
    ,
    A.prototype.has = function(e) {
        return typeof this._cache[e] < "u"
    }
    ,
    A.prototype.keys = function() {
        return Promise.resolve(Object.keys(this._cache))
    }
    ,
    A.prototype.proxy = function(e) {
        var t = this
          , r = this._options.proxy;
        if (!r)
            throw new Error("No proxy defined");
        var n = e.substring(0, 256);
        return new Promise(function(i, s) {
            var o = QA.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
              , l = new XMLHttpRequest;
            l.onload = function() {
                if (l.status === 200)
                    if (o === "text")
                        i(l.response);
                    else {
                        var B = new FileReader;
                        B.addEventListener("load", function() {
                            return i(B.result)
                        }, !1),
                        B.addEventListener("error", function(f) {
                            return s(f)
                        }, !1),
                        B.readAsDataURL(l.response)
                    }
                else
                    s("Failed to proxy resource " + n + " with status code " + l.status)
            }
            ,
            l.onerror = s;
            var a = r.indexOf("?") > -1 ? "&" : "?";
            if (l.open("GET", "" + r + a + "url=" + encodeURIComponent(e) + "&responseType=" + o),
            o !== "text" && l instanceof XMLHttpRequest && (l.responseType = o),
            t._options.imageTimeout) {
                var u = t._options.imageTimeout;
                l.timeout = u,
                l.ontimeout = function() {
                    return s("Timed out (" + u + "ms) proxying " + n)
                }
            }
            l.send()
        }
        )
    }
    ,
    A
}(), NU = /^data:image\/svg\+xml/i, RU = /^data:image\/.*;base64,/i, _U = /^data:image\/.*/i, VU = function(A) {
    return QA.SUPPORT_SVG_DRAWING || !PU(A)
}, Lo = function(A) {
    return _U.test(A)
}, GU = function(A) {
    return RU.test(A)
}, Ko = function(A) {
    return A.substr(0, 4) === "blob"
}, PU = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || NU.test(A)
}, y = function() {
    function A(e, t) {
        this.type = 0,
        this.x = e,
        this.y = t
    }
    return A.prototype.add = function(e, t) {
        return new A(this.x + e,this.y + t)
    }
    ,
    A
}(), kt = function(A, e, t) {
    return new y(A.x + (e.x - A.x) * t,A.y + (e.y - A.y) * t)
}, fi = function() {
    function A(e, t, r, n) {
        this.type = 1,
        this.start = e,
        this.startControl = t,
        this.endControl = r,
        this.end = n
    }
    return A.prototype.subdivide = function(e, t) {
        var r = kt(this.start, this.startControl, e)
          , n = kt(this.startControl, this.endControl, e)
          , i = kt(this.endControl, this.end, e)
          , s = kt(r, n, e)
          , o = kt(n, i, e)
          , l = kt(s, o, e);
        return t ? new A(this.start,r,s,l) : new A(l,o,i,this.end)
    }
    ,
    A.prototype.add = function(e, t) {
        return new A(this.start.add(e, t),this.startControl.add(e, t),this.endControl.add(e, t),this.end.add(e, t))
    }
    ,
    A.prototype.reverse = function() {
        return new A(this.end,this.endControl,this.startControl,this.start)
    }
    ,
    A
}(), $A = function(A) {
    return A.type === 1
}, XU = function() {
    function A(e) {
        var t = e.styles
          , r = e.bounds
          , n = _r(t.borderTopLeftRadius, r.width, r.height)
          , i = n[0]
          , s = n[1]
          , o = _r(t.borderTopRightRadius, r.width, r.height)
          , l = o[0]
          , a = o[1]
          , u = _r(t.borderBottomRightRadius, r.width, r.height)
          , B = u[0]
          , f = u[1]
          , Q = _r(t.borderBottomLeftRadius, r.width, r.height)
          , w = Q[0]
          , h = Q[1]
          , S = [];
        S.push((i + l) / r.width),
        S.push((w + B) / r.width),
        S.push((s + h) / r.height),
        S.push((a + f) / r.height);
        var g = Math.max.apply(Math, S);
        g > 1 && (i /= g,
        s /= g,
        l /= g,
        a /= g,
        B /= g,
        f /= g,
        w /= g,
        h /= g);
        var c = r.width - l
          , d = r.height - f
          , p = r.width - B
          , U = r.height - h
          , C = t.borderTopWidth
          , v = t.borderRightWidth
          , m = t.borderBottomWidth
          , I = t.borderLeftWidth
          , K = X(t.paddingTop, e.bounds.width)
          , G = X(t.paddingRight, e.bounds.width)
          , oA = X(t.paddingBottom, e.bounds.width)
          , M = X(t.paddingLeft, e.bounds.width);
        this.topLeftBorderDoubleOuterBox = i > 0 || s > 0 ? Y(r.left + I / 3, r.top + C / 3, i - I / 3, s - C / 3, N.TOP_LEFT) : new y(r.left + I / 3,r.top + C / 3),
        this.topRightBorderDoubleOuterBox = i > 0 || s > 0 ? Y(r.left + c, r.top + C / 3, l - v / 3, a - C / 3, N.TOP_RIGHT) : new y(r.left + r.width - v / 3,r.top + C / 3),
        this.bottomRightBorderDoubleOuterBox = B > 0 || f > 0 ? Y(r.left + p, r.top + d, B - v / 3, f - m / 3, N.BOTTOM_RIGHT) : new y(r.left + r.width - v / 3,r.top + r.height - m / 3),
        this.bottomLeftBorderDoubleOuterBox = w > 0 || h > 0 ? Y(r.left + I / 3, r.top + U, w - I / 3, h - m / 3, N.BOTTOM_LEFT) : new y(r.left + I / 3,r.top + r.height - m / 3),
        this.topLeftBorderDoubleInnerBox = i > 0 || s > 0 ? Y(r.left + I * 2 / 3, r.top + C * 2 / 3, i - I * 2 / 3, s - C * 2 / 3, N.TOP_LEFT) : new y(r.left + I * 2 / 3,r.top + C * 2 / 3),
        this.topRightBorderDoubleInnerBox = i > 0 || s > 0 ? Y(r.left + c, r.top + C * 2 / 3, l - v * 2 / 3, a - C * 2 / 3, N.TOP_RIGHT) : new y(r.left + r.width - v * 2 / 3,r.top + C * 2 / 3),
        this.bottomRightBorderDoubleInnerBox = B > 0 || f > 0 ? Y(r.left + p, r.top + d, B - v * 2 / 3, f - m * 2 / 3, N.BOTTOM_RIGHT) : new y(r.left + r.width - v * 2 / 3,r.top + r.height - m * 2 / 3),
        this.bottomLeftBorderDoubleInnerBox = w > 0 || h > 0 ? Y(r.left + I * 2 / 3, r.top + U, w - I * 2 / 3, h - m * 2 / 3, N.BOTTOM_LEFT) : new y(r.left + I * 2 / 3,r.top + r.height - m * 2 / 3),
        this.topLeftBorderStroke = i > 0 || s > 0 ? Y(r.left + I / 2, r.top + C / 2, i - I / 2, s - C / 2, N.TOP_LEFT) : new y(r.left + I / 2,r.top + C / 2),
        this.topRightBorderStroke = i > 0 || s > 0 ? Y(r.left + c, r.top + C / 2, l - v / 2, a - C / 2, N.TOP_RIGHT) : new y(r.left + r.width - v / 2,r.top + C / 2),
        this.bottomRightBorderStroke = B > 0 || f > 0 ? Y(r.left + p, r.top + d, B - v / 2, f - m / 2, N.BOTTOM_RIGHT) : new y(r.left + r.width - v / 2,r.top + r.height - m / 2),
        this.bottomLeftBorderStroke = w > 0 || h > 0 ? Y(r.left + I / 2, r.top + U, w - I / 2, h - m / 2, N.BOTTOM_LEFT) : new y(r.left + I / 2,r.top + r.height - m / 2),
        this.topLeftBorderBox = i > 0 || s > 0 ? Y(r.left, r.top, i, s, N.TOP_LEFT) : new y(r.left,r.top),
        this.topRightBorderBox = l > 0 || a > 0 ? Y(r.left + c, r.top, l, a, N.TOP_RIGHT) : new y(r.left + r.width,r.top),
        this.bottomRightBorderBox = B > 0 || f > 0 ? Y(r.left + p, r.top + d, B, f, N.BOTTOM_RIGHT) : new y(r.left + r.width,r.top + r.height),
        this.bottomLeftBorderBox = w > 0 || h > 0 ? Y(r.left, r.top + U, w, h, N.BOTTOM_LEFT) : new y(r.left,r.top + r.height),
        this.topLeftPaddingBox = i > 0 || s > 0 ? Y(r.left + I, r.top + C, Math.max(0, i - I), Math.max(0, s - C), N.TOP_LEFT) : new y(r.left + I,r.top + C),
        this.topRightPaddingBox = l > 0 || a > 0 ? Y(r.left + Math.min(c, r.width - v), r.top + C, c > r.width + v ? 0 : Math.max(0, l - v), Math.max(0, a - C), N.TOP_RIGHT) : new y(r.left + r.width - v,r.top + C),
        this.bottomRightPaddingBox = B > 0 || f > 0 ? Y(r.left + Math.min(p, r.width - I), r.top + Math.min(d, r.height - m), Math.max(0, B - v), Math.max(0, f - m), N.BOTTOM_RIGHT) : new y(r.left + r.width - v,r.top + r.height - m),
        this.bottomLeftPaddingBox = w > 0 || h > 0 ? Y(r.left + I, r.top + Math.min(U, r.height - m), Math.max(0, w - I), Math.max(0, h - m), N.BOTTOM_LEFT) : new y(r.left + I,r.top + r.height - m),
        this.topLeftContentBox = i > 0 || s > 0 ? Y(r.left + I + M, r.top + C + K, Math.max(0, i - (I + M)), Math.max(0, s - (C + K)), N.TOP_LEFT) : new y(r.left + I + M,r.top + C + K),
        this.topRightContentBox = l > 0 || a > 0 ? Y(r.left + Math.min(c, r.width + I + M), r.top + C + K, c > r.width + I + M ? 0 : l - I + M, a - (C + K), N.TOP_RIGHT) : new y(r.left + r.width - (v + G),r.top + C + K),
        this.bottomRightContentBox = B > 0 || f > 0 ? Y(r.left + Math.min(p, r.width - (I + M)), r.top + Math.min(d, r.height + C + K), Math.max(0, B - (v + G)), f - (m + oA), N.BOTTOM_RIGHT) : new y(r.left + r.width - (v + G),r.top + r.height - (m + oA)),
        this.bottomLeftContentBox = w > 0 || h > 0 ? Y(r.left + I + M, r.top + U, Math.max(0, w - (I + M)), h - (m + oA), N.BOTTOM_LEFT) : new y(r.left + I + M,r.top + r.height - (m + oA))
    }
    return A
}(), N;
(function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT",
    A[A.TOP_RIGHT = 1] = "TOP_RIGHT",
    A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
    A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
}
)(N || (N = {}));
var Y = function(A, e, t, r, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3)
      , s = t * i
      , o = r * i
      , l = A + t
      , a = e + r;
    switch (n) {
    case N.TOP_LEFT:
        return new fi(new y(A,a),new y(A,a - o),new y(l - s,e),new y(l,e));
    case N.TOP_RIGHT:
        return new fi(new y(A,e),new y(A + s,e),new y(l,a - o),new y(l,a));
    case N.BOTTOM_RIGHT:
        return new fi(new y(l,e),new y(l,e + o),new y(A + s,a),new y(A,a));
    case N.BOTTOM_LEFT:
    default:
        return new fi(new y(l,a),new y(l - s,a),new y(A,e + o),new y(A,e))
    }
}
  , us = function(A) {
    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
}
  , JU = function(A) {
    return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
}
  , Bs = function(A) {
    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
}
  , WU = function() {
    function A(e, t, r) {
        this.offsetX = e,
        this.offsetY = t,
        this.matrix = r,
        this.type = 0,
        this.target = 6
    }
    return A
}()
  , gi = function() {
    function A(e, t) {
        this.path = e,
        this.target = t,
        this.type = 1
    }
    return A
}()
  , bU = function() {
    function A(e) {
        this.opacity = e,
        this.type = 2,
        this.target = 6
    }
    return A
}()
  , YU = function(A) {
    return A.type === 0
}
  , dd = function(A) {
    return A.type === 1
}
  , zU = function(A) {
    return A.type === 2
}
  , ec = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
        return t === e[r]
    }) : !1
}
  , ZU = function(A, e, t, r, n) {
    return A.map(function(i, s) {
        switch (s) {
        case 0:
            return i.add(e, t);
        case 1:
            return i.add(e + r, t);
        case 2:
            return i.add(e + r, t + n);
        case 3:
            return i.add(e, t + n)
        }
        return i
    })
}
  , wd = function() {
    function A(e) {
        this.element = e,
        this.inlineLevel = [],
        this.nonInlineLevel = [],
        this.negativeZIndex = [],
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
        this.positiveZIndex = [],
        this.nonPositionedFloats = [],
        this.nonPositionedInlineLevel = []
    }
    return A
}()
  , Qd = function() {
    function A(e, t) {
        if (this.container = e,
        this.parent = t,
        this.effects = [],
        this.curves = new XU(this.container),
        this.container.styles.opacity < 1 && this.effects.push(new bU(this.container.styles.opacity)),
        this.container.styles.transform !== null) {
            var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number
              , n = this.container.bounds.top + this.container.styles.transformOrigin[1].number
              , i = this.container.styles.transform;
            this.effects.push(new WU(r,n,i))
        }
        if (this.container.styles.overflowX !== 0) {
            var s = us(this.curves)
              , o = Bs(this.curves);
            ec(s, o) ? this.effects.push(new gi(s,6)) : (this.effects.push(new gi(s,2)),
            this.effects.push(new gi(o,4)))
        }
    }
    return A.prototype.getEffects = function(e) {
        for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
            var i = r.effects.filter(function(l) {
                return !dd(l)
            });
            if (t || r.container.styles.position !== 0 || !r.parent) {
                if (n.unshift.apply(n, i),
                t = [2, 3].indexOf(r.container.styles.position) === -1,
                r.container.styles.overflowX !== 0) {
                    var s = us(r.curves)
                      , o = Bs(r.curves);
                    ec(s, o) || n.unshift(new gi(o,6))
                }
            } else
                n.unshift.apply(n, i);
            r = r.parent
        }
        return n.filter(function(l) {
            return aA(l.target, e)
        })
    }
    ,
    A
}()
  , Yl = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
        var i = aA(n.flags, 4)
          , s = aA(n.flags, 2)
          , o = new Qd(n,A);
        aA(n.styles.display, 2048) && r.push(o);
        var l = aA(n.flags, 8) ? [] : r;
        if (i || s) {
            var a = i || n.styles.isPositioned() ? t : e
              , u = new wd(o);
            if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
                var B = n.styles.zIndex.order;
                if (B < 0) {
                    var f = 0;
                    a.negativeZIndex.some(function(w, h) {
                        return B > w.element.container.styles.zIndex.order ? (f = h,
                        !1) : f > 0
                    }),
                    a.negativeZIndex.splice(f, 0, u)
                } else if (B > 0) {
                    var Q = 0;
                    a.positiveZIndex.some(function(w, h) {
                        return B >= w.element.container.styles.zIndex.order ? (Q = h + 1,
                        !1) : Q > 0
                    }),
                    a.positiveZIndex.splice(Q, 0, u)
                } else
                    a.zeroOrAutoZIndexOrTransformedOrOpacity.push(u)
            } else
                n.styles.isFloating() ? a.nonPositionedFloats.push(u) : a.nonPositionedInlineLevel.push(u);
            Yl(o, u, i ? u : t, l)
        } else
            n.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o),
            Yl(o, e, t, l);
        aA(n.flags, 8) && hd(n, l)
    })
}
  , hd = function(A, e) {
    for (var t = A instanceof Pl ? A.start : 1, r = A instanceof Pl ? A.reversed : !1, n = 0; n < e.length; n++) {
        var i = e[n];
        i.container instanceof ed && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value),
        i.listValue = vn(t, i.container.styles.listStyleType, !0),
        t += r ? -1 : 1
    }
}
  , jU = function(A) {
    var e = new Qd(A,null)
      , t = new wd(e)
      , r = [];
    return Yl(e, t, t, r),
    hd(e.container, r),
    t
}
  , tc = function(A, e) {
    switch (e) {
    case 0:
        return ee(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
        return ee(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
        return ee(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
        return ee(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
    }
}
  , $U = function(A, e) {
    switch (e) {
    case 0:
        return ee(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
        return ee(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
        return ee(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
        return ee(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
    }
}
  , qU = function(A, e) {
    switch (e) {
    case 0:
        return ee(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
        return ee(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
        return ee(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
        return ee(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
    }
}
  , AF = function(A, e) {
    switch (e) {
    case 0:
        return di(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
        return di(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
        return di(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
        return di(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
    }
}
  , di = function(A, e) {
    var t = [];
    return $A(A) ? t.push(A.subdivide(.5, !1)) : t.push(A),
    $A(e) ? t.push(e.subdivide(.5, !0)) : t.push(e),
    t
}
  , ee = function(A, e, t, r) {
    var n = [];
    return $A(A) ? n.push(A.subdivide(.5, !1)) : n.push(A),
    $A(t) ? n.push(t.subdivide(.5, !0)) : n.push(t),
    $A(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r),
    $A(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e),
    n
}
  , pd = function(A) {
    var e = A.bounds
      , t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
}
  , cs = function(A) {
    var e = A.styles
      , t = A.bounds
      , r = X(e.paddingLeft, t.width)
      , n = X(e.paddingRight, t.width)
      , i = X(e.paddingTop, t.width)
      , s = X(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + i + s))
}
  , eF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? cs(e) : pd(e)
}
  , tF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? cs(e) : pd(e)
}
  , xo = function(A, e, t) {
    var r = eF(_t(A.styles.backgroundOrigin, e), A)
      , n = tF(_t(A.styles.backgroundClip, e), A)
      , i = rF(_t(A.styles.backgroundSize, e), t, r)
      , s = i[0]
      , o = i[1]
      , l = _r(_t(A.styles.backgroundPosition, e), r.width - s, r.height - o)
      , a = nF(_t(A.styles.backgroundRepeat, e), l, i, r, n)
      , u = Math.round(r.left + l[0])
      , B = Math.round(r.top + l[1]);
    return [a, u, B, s, o]
}
  , Nt = function(A) {
    return V(A) && A.value === sr.AUTO
}
  , wi = function(A) {
    return typeof A == "number"
}
  , rF = function(A, e, t) {
    var r = e[0]
      , n = e[1]
      , i = e[2]
      , s = A[0]
      , o = A[1];
    if (!s)
        return [0, 0];
    if (iA(s) && o && iA(o))
        return [X(s, t.width), X(o, t.height)];
    var l = wi(i);
    if (V(s) && (s.value === sr.CONTAIN || s.value === sr.COVER)) {
        if (wi(i)) {
            var a = t.width / t.height;
            return a < i != (s.value === sr.COVER) ? [t.width, t.width / i] : [t.height * i, t.height]
        }
        return [t.width, t.height]
    }
    var u = wi(r)
      , B = wi(n)
      , f = u || B;
    if (Nt(s) && (!o || Nt(o))) {
        if (u && B)
            return [r, n];
        if (!l && !f)
            return [t.width, t.height];
        if (f && l) {
            var Q = u ? r : n * i
              , w = B ? n : r / i;
            return [Q, w]
        }
        var h = u ? r : t.width
          , S = B ? n : t.height;
        return [h, S]
    }
    if (l) {
        var g = 0
          , c = 0;
        return iA(s) ? g = X(s, t.width) : iA(o) && (c = X(o, t.height)),
        Nt(s) ? g = c * i : (!o || Nt(o)) && (c = g / i),
        [g, c]
    }
    var d = null
      , p = null;
    if (iA(s) ? d = X(s, t.width) : o && iA(o) && (p = X(o, t.height)),
    d !== null && (!o || Nt(o)) && (p = u && B ? d / r * n : t.height),
    p !== null && Nt(s) && (d = u && B ? p / n * r : t.width),
    d !== null && p !== null)
        return [d, p];
    throw new Error("Unable to calculate background-size for element")
}
  , _t = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t
}
  , nF = function(A, e, t, r, n) {
    var i = e[0]
      , s = e[1]
      , o = t[0]
      , l = t[1];
    switch (A) {
    case 2:
        return [new y(Math.round(r.left),Math.round(r.top + s)), new y(Math.round(r.left + r.width),Math.round(r.top + s)), new y(Math.round(r.left + r.width),Math.round(l + r.top + s)), new y(Math.round(r.left),Math.round(l + r.top + s))];
    case 3:
        return [new y(Math.round(r.left + i),Math.round(r.top)), new y(Math.round(r.left + i + o),Math.round(r.top)), new y(Math.round(r.left + i + o),Math.round(r.height + r.top)), new y(Math.round(r.left + i),Math.round(r.height + r.top))];
    case 1:
        return [new y(Math.round(r.left + i),Math.round(r.top + s)), new y(Math.round(r.left + i + o),Math.round(r.top + s)), new y(Math.round(r.left + i + o),Math.round(r.top + s + l)), new y(Math.round(r.left + i),Math.round(r.top + s + l))];
    default:
        return [new y(Math.round(n.left),Math.round(n.top)), new y(Math.round(n.left + n.width),Math.round(n.top)), new y(Math.round(n.left + n.width),Math.round(n.height + n.top)), new y(Math.round(n.left),Math.round(n.height + n.top))]
    }
}
  , iF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  , rc = "Hidden Text"
  , sF = function() {
    function A(e) {
        this._data = {},
        this._document = e
    }
    return A.prototype.parseMetrics = function(e, t) {
        var r = this._document.createElement("div")
          , n = this._document.createElement("img")
          , i = this._document.createElement("span")
          , s = this._document.body;
        r.style.visibility = "hidden",
        r.style.fontFamily = e,
        r.style.fontSize = t,
        r.style.margin = "0",
        r.style.padding = "0",
        r.style.whiteSpace = "nowrap",
        s.appendChild(r),
        n.src = iF,
        n.width = 1,
        n.height = 1,
        n.style.margin = "0",
        n.style.padding = "0",
        n.style.verticalAlign = "baseline",
        i.style.fontFamily = e,
        i.style.fontSize = t,
        i.style.margin = "0",
        i.style.padding = "0",
        i.appendChild(this._document.createTextNode(rc)),
        r.appendChild(i),
        r.appendChild(n);
        var o = n.offsetTop - i.offsetTop + 2;
        r.removeChild(i),
        r.appendChild(this._document.createTextNode(rc)),
        r.style.lineHeight = "normal",
        n.style.verticalAlign = "super";
        var l = n.offsetTop - r.offsetTop + 2;
        return s.removeChild(r),
        {
            baseline: o,
            middle: l
        }
    }
    ,
    A.prototype.getMetrics = function(e, t) {
        var r = e + " " + t;
        return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)),
        this._data[r]
    }
    ,
    A
}()
  , Cd = function() {
    function A(e, t) {
        this.context = e,
        this.options = t
    }
    return A
}()
  , oF = 1e4
  , lF = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n._activeEffects = [],
        n.canvas = r.canvas ? r.canvas : document.createElement("canvas"),
        n.ctx = n.canvas.getContext("2d"),
        r.canvas || (n.canvas.width = Math.floor(r.width * r.scale),
        n.canvas.height = Math.floor(r.height * r.scale),
        n.canvas.style.width = r.width + "px",
        n.canvas.style.height = r.height + "px"),
        n.fontMetrics = new sF(document),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.ctx.textBaseline = "bottom",
        n._activeEffects = [],
        n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale),
        n
    }
    return e.prototype.applyEffects = function(t) {
        for (var r = this; this._activeEffects.length; )
            this.popEffect();
        t.forEach(function(n) {
            return r.applyEffect(n)
        })
    }
    ,
    e.prototype.applyEffect = function(t) {
        this.ctx.save(),
        zU(t) && (this.ctx.globalAlpha = t.opacity),
        YU(t) && (this.ctx.translate(t.offsetX, t.offsetY),
        this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]),
        this.ctx.translate(-t.offsetX, -t.offsetY)),
        dd(t) && (this.path(t.path),
        this.ctx.clip()),
        this._activeEffects.push(t)
    }
    ,
    e.prototype.popEffect = function() {
        this._activeEffects.pop(),
        this.ctx.restore()
    }
    ,
    e.prototype.renderStack = function(t) {
        return IA(this, void 0, void 0, function() {
            var r;
            return vA(this, function(n) {
                switch (n.label) {
                case 0:
                    return r = t.element.container.styles,
                    r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
                case 1:
                    n.sent(),
                    n.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.renderNode = function(t) {
        return IA(this, void 0, void 0, function() {
            return vA(this, function(r) {
                switch (r.label) {
                case 0:
                    if (aA(t.container.flags, 16))
                        debugger ;return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
                case 1:
                    return r.sent(),
                    [4, this.renderNodeContent(t)];
                case 2:
                    r.sent(),
                    r.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.renderTextWithLetterSpacing = function(t, r, n) {
        var i = this;
        if (r === 0)
            this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
        else {
            var s = ba(t.text);
            s.reduce(function(o, l) {
                return i.ctx.fillText(l, o, t.bounds.top + n),
                o + i.ctx.measureText(l).width
            }, t.bounds.left)
        }
    }
    ,
    e.prototype.createFontStyle = function(t) {
        var r = t.fontVariant.filter(function(s) {
            return s === "normal" || s === "small-caps"
        }).join("")
          , n = fF(t.fontFamily).join(", ")
          , i = Ln(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
        return [[t.fontStyle, r, t.fontWeight, i, n].join(" "), n, i]
    }
    ,
    e.prototype.renderTextNode = function(t, r) {
        return IA(this, void 0, void 0, function() {
            var n, i, s, o, l, a, u, B, f = this;
            return vA(this, function(Q) {
                return n = this.createFontStyle(r),
                i = n[0],
                s = n[1],
                o = n[2],
                this.ctx.font = i,
                this.ctx.direction = r.direction === 1 ? "rtl" : "ltr",
                this.ctx.textAlign = "left",
                this.ctx.textBaseline = "alphabetic",
                l = this.fontMetrics.getMetrics(s, o),
                a = l.baseline,
                u = l.middle,
                B = r.paintOrder,
                t.textBounds.forEach(function(w) {
                    B.forEach(function(h) {
                        switch (h) {
                        case 0:
                            f.ctx.fillStyle = fA(r.color),
                            f.renderTextWithLetterSpacing(w, r.letterSpacing, a);
                            var S = r.textShadow;
                            S.length && w.text.trim().length && (S.slice(0).reverse().forEach(function(g) {
                                f.ctx.shadowColor = fA(g.color),
                                f.ctx.shadowOffsetX = g.offsetX.number * f.options.scale,
                                f.ctx.shadowOffsetY = g.offsetY.number * f.options.scale,
                                f.ctx.shadowBlur = g.blur.number,
                                f.renderTextWithLetterSpacing(w, r.letterSpacing, a)
                            }),
                            f.ctx.shadowColor = "",
                            f.ctx.shadowOffsetX = 0,
                            f.ctx.shadowOffsetY = 0,
                            f.ctx.shadowBlur = 0),
                            r.textDecorationLine.length && (f.ctx.fillStyle = fA(r.textDecorationColor || r.color),
                            r.textDecorationLine.forEach(function(g) {
                                switch (g) {
                                case 1:
                                    f.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top + a), w.bounds.width, 1);
                                    break;
                                case 2:
                                    f.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top), w.bounds.width, 1);
                                    break;
                                case 3:
                                    f.ctx.fillRect(w.bounds.left, Math.ceil(w.bounds.top + u), w.bounds.width, 1);
                                    break
                                }
                            }));
                            break;
                        case 1:
                            r.webkitTextStrokeWidth && w.text.trim().length && (f.ctx.strokeStyle = fA(r.webkitTextStrokeColor),
                            f.ctx.lineWidth = r.webkitTextStrokeWidth,
                            f.ctx.lineJoin = window.chrome ? "miter" : "round",
                            f.ctx.strokeText(w.text, w.bounds.left, w.bounds.top + a)),
                            f.ctx.strokeStyle = "",
                            f.ctx.lineWidth = 0,
                            f.ctx.lineJoin = "miter";
                            break
                        }
                    })
                }),
                [2]
            })
        })
    }
    ,
    e.prototype.renderReplacedElement = function(t, r, n) {
        if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
            var i = cs(t)
              , s = Bs(r);
            this.path(s),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height),
            this.ctx.restore()
        }
    }
    ,
    e.prototype.renderNodeContent = function(t) {
        return IA(this, void 0, void 0, function() {
            var r, n, i, s, o, l, c, c, a, u, B, f, p, Q, w, U, h, S, g, c, d, p, U;
            return vA(this, function(C) {
                switch (C.label) {
                case 0:
                    this.applyEffects(t.getEffects(4)),
                    r = t.container,
                    n = t.curves,
                    i = r.styles,
                    s = 0,
                    o = r.textNodes,
                    C.label = 1;
                case 1:
                    return s < o.length ? (l = o[s],
                    [4, this.renderTextNode(l, i)]) : [3, 4];
                case 2:
                    C.sent(),
                    C.label = 3;
                case 3:
                    return s++,
                    [3, 1];
                case 4:
                    if (!(r instanceof $g))
                        return [3, 8];
                    C.label = 5;
                case 5:
                    return C.trys.push([5, 7, , 8]),
                    [4, this.context.cache.match(r.src)];
                case 6:
                    return c = C.sent(),
                    this.renderReplacedElement(r, n, c),
                    [3, 8];
                case 7:
                    return C.sent(),
                    this.context.logger.error("Error loading image " + r.src),
                    [3, 8];
                case 8:
                    if (r instanceof qg && this.renderReplacedElement(r, n, r.canvas),
                    !(r instanceof Ad))
                        return [3, 12];
                    C.label = 9;
                case 9:
                    return C.trys.push([9, 11, , 12]),
                    [4, this.context.cache.match(r.svg)];
                case 10:
                    return c = C.sent(),
                    this.renderReplacedElement(r, n, c),
                    [3, 12];
                case 11:
                    return C.sent(),
                    this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)),
                    [3, 12];
                case 12:
                    return r instanceof nd && r.tree ? (a = new e(this.context,{
                        scale: this.options.scale,
                        backgroundColor: r.backgroundColor,
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                    }),
                    [4, a.render(r.tree)]) : [3, 14];
                case 13:
                    u = C.sent(),
                    r.width && r.height && this.ctx.drawImage(u, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height),
                    C.label = 14;
                case 14:
                    if (r instanceof Ya && (B = Math.min(r.bounds.width, r.bounds.height),
                    r.type === ss ? r.checked && (this.ctx.save(),
                    this.path([new y(r.bounds.left + B * .39363,r.bounds.top + B * .79), new y(r.bounds.left + B * .16,r.bounds.top + B * .5549), new y(r.bounds.left + B * .27347,r.bounds.top + B * .44071), new y(r.bounds.left + B * .39694,r.bounds.top + B * .5649), new y(r.bounds.left + B * .72983,r.bounds.top + B * .23), new y(r.bounds.left + B * .84,r.bounds.top + B * .34085), new y(r.bounds.left + B * .39363,r.bounds.top + B * .79)]),
                    this.ctx.fillStyle = fA(XB),
                    this.ctx.fill(),
                    this.ctx.restore()) : r.type === os && r.checked && (this.ctx.save(),
                    this.ctx.beginPath(),
                    this.ctx.arc(r.bounds.left + B / 2, r.bounds.top + B / 2, B / 4, 0, Math.PI * 2, !0),
                    this.ctx.fillStyle = fA(XB),
                    this.ctx.fill(),
                    this.ctx.restore())),
                    aF(r) && r.value.length) {
                        switch (f = this.createFontStyle(i),
                        p = f[0],
                        Q = f[1],
                        w = this.fontMetrics.getMetrics(p, Q).baseline,
                        this.ctx.font = p,
                        this.ctx.fillStyle = fA(i.color),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = BF(r.styles.textAlign),
                        U = cs(r),
                        h = 0,
                        r.styles.textAlign) {
                        case 1:
                            h += U.width / 2;
                            break;
                        case 2:
                            h += U.width;
                            break
                        }
                        S = U.add(h, 0, 0, -U.height / 2 + 1),
                        this.ctx.save(),
                        this.path([new y(U.left,U.top), new y(U.left + U.width,U.top), new y(U.left + U.width,U.top + U.height), new y(U.left,U.top + U.height)]),
                        this.ctx.clip(),
                        this.renderTextWithLetterSpacing(new en(r.value,S), i.letterSpacing, w),
                        this.ctx.restore(),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = "left"
                    }
                    if (!aA(r.styles.display, 2048))
                        return [3, 20];
                    if (r.styles.listStyleImage === null)
                        return [3, 19];
                    if (g = r.styles.listStyleImage,
                    g.type !== 0)
                        return [3, 18];
                    c = void 0,
                    d = g.url,
                    C.label = 15;
                case 15:
                    return C.trys.push([15, 17, , 18]),
                    [4, this.context.cache.match(d)];
                case 16:
                    return c = C.sent(),
                    this.ctx.drawImage(c, r.bounds.left - (c.width + 10), r.bounds.top),
                    [3, 18];
                case 17:
                    return C.sent(),
                    this.context.logger.error("Error loading list-style-image " + d),
                    [3, 18];
                case 18:
                    return [3, 20];
                case 19:
                    t.listValue && r.styles.listStyleType !== -1 && (p = this.createFontStyle(i)[0],
                    this.ctx.font = p,
                    this.ctx.fillStyle = fA(i.color),
                    this.ctx.textBaseline = "middle",
                    this.ctx.textAlign = "right",
                    U = new Me(r.bounds.left,r.bounds.top + X(r.styles.paddingTop, r.bounds.width),r.bounds.width,HB(i.lineHeight, i.fontSize.number) / 2 + 1),
                    this.renderTextWithLetterSpacing(new en(t.listValue,U), i.letterSpacing, HB(i.lineHeight, i.fontSize.number) / 2 + 2),
                    this.ctx.textBaseline = "bottom",
                    this.ctx.textAlign = "left"),
                    C.label = 20;
                case 20:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.renderStackContent = function(t) {
        return IA(this, void 0, void 0, function() {
            var r, n, g, i, s, g, o, l, g, a, u, g, B, f, g, Q, w, g, h, S, g;
            return vA(this, function(c) {
                switch (c.label) {
                case 0:
                    if (aA(t.element.container.flags, 16))
                        debugger ;return [4, this.renderNodeBackgroundAndBorders(t.element)];
                case 1:
                    c.sent(),
                    r = 0,
                    n = t.negativeZIndex,
                    c.label = 2;
                case 2:
                    return r < n.length ? (g = n[r],
                    [4, this.renderStack(g)]) : [3, 5];
                case 3:
                    c.sent(),
                    c.label = 4;
                case 4:
                    return r++,
                    [3, 2];
                case 5:
                    return [4, this.renderNodeContent(t.element)];
                case 6:
                    c.sent(),
                    i = 0,
                    s = t.nonInlineLevel,
                    c.label = 7;
                case 7:
                    return i < s.length ? (g = s[i],
                    [4, this.renderNode(g)]) : [3, 10];
                case 8:
                    c.sent(),
                    c.label = 9;
                case 9:
                    return i++,
                    [3, 7];
                case 10:
                    o = 0,
                    l = t.nonPositionedFloats,
                    c.label = 11;
                case 11:
                    return o < l.length ? (g = l[o],
                    [4, this.renderStack(g)]) : [3, 14];
                case 12:
                    c.sent(),
                    c.label = 13;
                case 13:
                    return o++,
                    [3, 11];
                case 14:
                    a = 0,
                    u = t.nonPositionedInlineLevel,
                    c.label = 15;
                case 15:
                    return a < u.length ? (g = u[a],
                    [4, this.renderStack(g)]) : [3, 18];
                case 16:
                    c.sent(),
                    c.label = 17;
                case 17:
                    return a++,
                    [3, 15];
                case 18:
                    B = 0,
                    f = t.inlineLevel,
                    c.label = 19;
                case 19:
                    return B < f.length ? (g = f[B],
                    [4, this.renderNode(g)]) : [3, 22];
                case 20:
                    c.sent(),
                    c.label = 21;
                case 21:
                    return B++,
                    [3, 19];
                case 22:
                    Q = 0,
                    w = t.zeroOrAutoZIndexOrTransformedOrOpacity,
                    c.label = 23;
                case 23:
                    return Q < w.length ? (g = w[Q],
                    [4, this.renderStack(g)]) : [3, 26];
                case 24:
                    c.sent(),
                    c.label = 25;
                case 25:
                    return Q++,
                    [3, 23];
                case 26:
                    h = 0,
                    S = t.positiveZIndex,
                    c.label = 27;
                case 27:
                    return h < S.length ? (g = S[h],
                    [4, this.renderStack(g)]) : [3, 30];
                case 28:
                    c.sent(),
                    c.label = 29;
                case 29:
                    return h++,
                    [3, 27];
                case 30:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.mask = function(t) {
        this.ctx.beginPath(),
        this.ctx.moveTo(0, 0),
        this.ctx.lineTo(this.canvas.width, 0),
        this.ctx.lineTo(this.canvas.width, this.canvas.height),
        this.ctx.lineTo(0, this.canvas.height),
        this.ctx.lineTo(0, 0),
        this.formatPath(t.slice(0).reverse()),
        this.ctx.closePath()
    }
    ,
    e.prototype.path = function(t) {
        this.ctx.beginPath(),
        this.formatPath(t),
        this.ctx.closePath()
    }
    ,
    e.prototype.formatPath = function(t) {
        var r = this;
        t.forEach(function(n, i) {
            var s = $A(n) ? n.start : n;
            i === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y),
            $A(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y)
        })
    }
    ,
    e.prototype.renderRepeat = function(t, r, n, i) {
        this.path(t),
        this.ctx.fillStyle = r,
        this.ctx.translate(n, i),
        this.ctx.fill(),
        this.ctx.translate(-n, -i)
    }
    ,
    e.prototype.resizeImage = function(t, r, n) {
        var i;
        if (t.width === r && t.height === n)
            return t;
        var s = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document
          , o = s.createElement("canvas");
        o.width = Math.max(1, r),
        o.height = Math.max(1, n);
        var l = o.getContext("2d");
        return l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n),
        o
    }
    ,
    e.prototype.renderBackgroundImage = function(t) {
        return IA(this, void 0, void 0, function() {
            var r, n, i, s, o, l;
            return vA(this, function(a) {
                switch (a.label) {
                case 0:
                    r = t.styles.backgroundImage.length - 1,
                    n = function(u) {
                        var B, f, Q, K, BA, cA, M, nA, m, w, K, BA, cA, M, nA, h, S, g, c, d, p, U, C, v, m, I, K, G, oA, M, nA, ge, BA, cA, E, x, D, R, P, DA, HA, VA;
                        return vA(this, function(TA) {
                            switch (TA.label) {
                            case 0:
                                if (u.type !== 0)
                                    return [3, 5];
                                B = void 0,
                                f = u.url,
                                TA.label = 1;
                            case 1:
                                return TA.trys.push([1, 3, , 4]),
                                [4, i.context.cache.match(f)];
                            case 2:
                                return B = TA.sent(),
                                [3, 4];
                            case 3:
                                return TA.sent(),
                                i.context.logger.error("Error loading background-image " + f),
                                [3, 4];
                            case 4:
                                return B && (Q = xo(t, r, [B.width, B.height, B.width / B.height]),
                                K = Q[0],
                                BA = Q[1],
                                cA = Q[2],
                                M = Q[3],
                                nA = Q[4],
                                m = i.ctx.createPattern(i.resizeImage(B, M, nA), "repeat"),
                                i.renderRepeat(K, m, BA, cA)),
                                [3, 6];
                            case 5:
                                Yp(u) ? (w = xo(t, r, [null, null, null]),
                                K = w[0],
                                BA = w[1],
                                cA = w[2],
                                M = w[3],
                                nA = w[4],
                                h = Pp(u.angle, M, nA),
                                S = h[0],
                                g = h[1],
                                c = h[2],
                                d = h[3],
                                p = h[4],
                                U = document.createElement("canvas"),
                                U.width = M,
                                U.height = nA,
                                C = U.getContext("2d"),
                                v = C.createLinearGradient(g, d, c, p),
                                EB(u.stops, S).forEach(function(de) {
                                    return v.addColorStop(de.stop, fA(de.color))
                                }),
                                C.fillStyle = v,
                                C.fillRect(0, 0, M, nA),
                                M > 0 && nA > 0 && (m = i.ctx.createPattern(U, "repeat"),
                                i.renderRepeat(K, m, BA, cA))) : zp(u) && (I = xo(t, r, [null, null, null]),
                                K = I[0],
                                G = I[1],
                                oA = I[2],
                                M = I[3],
                                nA = I[4],
                                ge = u.position.length === 0 ? [Xa] : u.position,
                                BA = X(ge[0], M),
                                cA = X(ge[ge.length - 1], nA),
                                E = Xp(u, BA, cA, M, nA),
                                x = E[0],
                                D = E[1],
                                x > 0 && D > 0 && (R = i.ctx.createRadialGradient(G + BA, oA + cA, 0, G + BA, oA + cA, x),
                                EB(u.stops, x * 2).forEach(function(de) {
                                    return R.addColorStop(de.stop, fA(de.color))
                                }),
                                i.path(K),
                                i.ctx.fillStyle = R,
                                x !== D ? (P = t.bounds.left + .5 * t.bounds.width,
                                DA = t.bounds.top + .5 * t.bounds.height,
                                HA = D / x,
                                VA = 1 / HA,
                                i.ctx.save(),
                                i.ctx.translate(P, DA),
                                i.ctx.transform(1, 0, 0, HA, 0, 0),
                                i.ctx.translate(-P, -DA),
                                i.ctx.fillRect(G, VA * (oA - DA) + DA, M, nA * VA),
                                i.ctx.restore()) : i.ctx.fill())),
                                TA.label = 6;
                            case 6:
                                return r--,
                                [2]
                            }
                        })
                    }
                    ,
                    i = this,
                    s = 0,
                    o = t.styles.backgroundImage.slice(0).reverse(),
                    a.label = 1;
                case 1:
                    return s < o.length ? (l = o[s],
                    [5, n(l)]) : [3, 4];
                case 2:
                    a.sent(),
                    a.label = 3;
                case 3:
                    return s++,
                    [3, 1];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.renderSolidBorder = function(t, r, n) {
        return IA(this, void 0, void 0, function() {
            return vA(this, function(i) {
                return this.path(tc(n, r)),
                this.ctx.fillStyle = fA(t),
                this.ctx.fill(),
                [2]
            })
        })
    }
    ,
    e.prototype.renderDoubleBorder = function(t, r, n, i) {
        return IA(this, void 0, void 0, function() {
            var s, o;
            return vA(this, function(l) {
                switch (l.label) {
                case 0:
                    return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
                case 1:
                    return l.sent(),
                    [2];
                case 2:
                    return s = $U(i, n),
                    this.path(s),
                    this.ctx.fillStyle = fA(t),
                    this.ctx.fill(),
                    o = qU(i, n),
                    this.path(o),
                    this.ctx.fill(),
                    [2]
                }
            })
        })
    }
    ,
    e.prototype.renderNodeBackgroundAndBorders = function(t) {
        return IA(this, void 0, void 0, function() {
            var r, n, i, s, o, l, a, u, B = this;
            return vA(this, function(f) {
                switch (f.label) {
                case 0:
                    return this.applyEffects(t.getEffects(2)),
                    r = t.container.styles,
                    n = !st(r.backgroundColor) || r.backgroundImage.length,
                    i = [{
                        style: r.borderTopStyle,
                        color: r.borderTopColor,
                        width: r.borderTopWidth
                    }, {
                        style: r.borderRightStyle,
                        color: r.borderRightColor,
                        width: r.borderRightWidth
                    }, {
                        style: r.borderBottomStyle,
                        color: r.borderBottomColor,
                        width: r.borderBottomWidth
                    }, {
                        style: r.borderLeftStyle,
                        color: r.borderLeftColor,
                        width: r.borderLeftWidth
                    }],
                    s = uF(_t(r.backgroundClip, 0), t.curves),
                    n || r.boxShadow.length ? (this.ctx.save(),
                    this.path(s),
                    this.ctx.clip(),
                    st(r.backgroundColor) || (this.ctx.fillStyle = fA(r.backgroundColor),
                    this.ctx.fill()),
                    [4, this.renderBackgroundImage(t.container)]) : [3, 2];
                case 1:
                    f.sent(),
                    this.ctx.restore(),
                    r.boxShadow.slice(0).reverse().forEach(function(Q) {
                        B.ctx.save();
                        var w = us(t.curves)
                          , h = Q.inset ? 0 : oF
                          , S = ZU(w, -h + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                        Q.inset ? (B.path(w),
                        B.ctx.clip(),
                        B.mask(S)) : (B.mask(w),
                        B.ctx.clip(),
                        B.path(S)),
                        B.ctx.shadowOffsetX = Q.offsetX.number + h,
                        B.ctx.shadowOffsetY = Q.offsetY.number,
                        B.ctx.shadowColor = fA(Q.color),
                        B.ctx.shadowBlur = Q.blur.number,
                        B.ctx.fillStyle = Q.inset ? fA(Q.color) : "rgba(0,0,0,1)",
                        B.ctx.fill(),
                        B.ctx.restore()
                    }),
                    f.label = 2;
                case 2:
                    o = 0,
                    l = 0,
                    a = i,
                    f.label = 3;
                case 3:
                    return l < a.length ? (u = a[l],
                    u.style !== 0 && !st(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(u.color, u.width, o, t.curves, 2)] : [3, 11]) : [3, 13];
                case 4:
                    return f.sent(),
                    [3, 11];
                case 5:
                    return u.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(u.color, u.width, o, t.curves, 3)];
                case 6:
                    return f.sent(),
                    [3, 11];
                case 7:
                    return u.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(u.color, u.width, o, t.curves)];
                case 8:
                    return f.sent(),
                    [3, 11];
                case 9:
                    return [4, this.renderSolidBorder(u.color, o, t.curves)];
                case 10:
                    f.sent(),
                    f.label = 11;
                case 11:
                    o++,
                    f.label = 12;
                case 12:
                    return l++,
                    [3, 3];
                case 13:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.renderDashedDottedBorder = function(t, r, n, i, s) {
        return IA(this, void 0, void 0, function() {
            var o, l, a, u, B, f, Q, w, h, S, g, c, d, p, U, C, U, C;
            return vA(this, function(v) {
                return this.ctx.save(),
                o = AF(i, n),
                l = tc(i, n),
                s === 2 && (this.path(l),
                this.ctx.clip()),
                $A(l[0]) ? (a = l[0].start.x,
                u = l[0].start.y) : (a = l[0].x,
                u = l[0].y),
                $A(l[1]) ? (B = l[1].end.x,
                f = l[1].end.y) : (B = l[1].x,
                f = l[1].y),
                n === 0 || n === 2 ? Q = Math.abs(a - B) : Q = Math.abs(u - f),
                this.ctx.beginPath(),
                s === 3 ? this.formatPath(o) : this.formatPath(l.slice(0, 2)),
                w = r < 3 ? r * 3 : r * 2,
                h = r < 3 ? r * 2 : r,
                s === 3 && (w = r,
                h = r),
                S = !0,
                Q <= w * 2 ? S = !1 : Q <= w * 2 + h ? (g = Q / (2 * w + h),
                w *= g,
                h *= g) : (c = Math.floor((Q + h) / (w + h)),
                d = (Q - c * w) / (c - 1),
                p = (Q - (c + 1) * w) / c,
                h = p <= 0 || Math.abs(h - d) < Math.abs(h - p) ? d : p),
                S && (s === 3 ? this.ctx.setLineDash([0, w + h]) : this.ctx.setLineDash([w, h])),
                s === 3 ? (this.ctx.lineCap = "round",
                this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1,
                this.ctx.strokeStyle = fA(t),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                s === 2 && ($A(l[0]) && (U = l[3],
                C = l[0],
                this.ctx.beginPath(),
                this.formatPath([new y(U.end.x,U.end.y), new y(C.start.x,C.start.y)]),
                this.ctx.stroke()),
                $A(l[1]) && (U = l[1],
                C = l[2],
                this.ctx.beginPath(),
                this.formatPath([new y(U.end.x,U.end.y), new y(C.start.x,C.start.y)]),
                this.ctx.stroke())),
                this.ctx.restore(),
                [2]
            })
        })
    }
    ,
    e.prototype.render = function(t) {
        return IA(this, void 0, void 0, function() {
            var r;
            return vA(this, function(n) {
                switch (n.label) {
                case 0:
                    return this.options.backgroundColor && (this.ctx.fillStyle = fA(this.options.backgroundColor),
                    this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                    r = jU(t),
                    [4, this.renderStack(r)];
                case 1:
                    return n.sent(),
                    this.applyEffects([]),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    e
}(Cd)
  , aF = function(A) {
    return A instanceof rd || A instanceof td ? !0 : A instanceof Ya && A.type !== os && A.type !== ss
}
  , uF = function(A, e) {
    switch (A) {
    case 0:
        return us(e);
    case 2:
        return JU(e);
    case 1:
    default:
        return Bs(e)
    }
}
  , BF = function(A) {
    switch (A) {
    case 1:
        return "center";
    case 2:
        return "right";
    case 0:
    default:
        return "left"
    }
}
  , cF = ["-apple-system", "system-ui"]
  , fF = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
        return cF.indexOf(e) === -1
    }) : A
}
  , gF = function(A) {
    fe(e, A);
    function e(t, r) {
        var n = A.call(this, t, r) || this;
        return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"),
        n.ctx = n.canvas.getContext("2d"),
        n.options = r,
        n.canvas.width = Math.floor(r.width * r.scale),
        n.canvas.height = Math.floor(r.height * r.scale),
        n.canvas.style.width = r.width + "px",
        n.canvas.style.height = r.height + "px",
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale),
        n
    }
    return e.prototype.render = function(t) {
        return IA(this, void 0, void 0, function() {
            var r, n;
            return vA(this, function(i) {
                switch (i.label) {
                case 0:
                    return r = Gl(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t),
                    [4, dF(r)];
                case 1:
                    return n = i.sent(),
                    this.options.backgroundColor && (this.ctx.fillStyle = fA(this.options.backgroundColor),
                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                    this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    e
}(Cd)
  , dF = function(A) {
    return new Promise(function(e, t) {
        var r = new Image;
        r.onload = function() {
            e(r)
        }
        ,
        r.onerror = t,
        r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A))
    }
    )
}
  , wF = function() {
    function A(e) {
        var t = e.id
          , r = e.enabled;
        this.id = t,
        this.enabled = r,
        this.start = Date.now()
    }
    return A.prototype.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Yn([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e))
    }
    ,
    A.prototype.getTime = function() {
        return Date.now() - this.start
    }
    ,
    A.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Yn([this.id, this.getTime() + "ms"], e))
    }
    ,
    A.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Yn([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e))
    }
    ,
    A.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Yn([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e))
    }
    ,
    A.instances = {},
    A
}()
  , QF = function() {
    function A(e, t) {
        var r;
        this.windowBounds = t,
        this.instanceName = "#" + A.instanceCount++,
        this.logger = new wF({
            id: this.instanceName,
            enabled: e.logging
        }),
        this.cache = (r = e.cache) !== null && r !== void 0 ? r : new kU(this,e)
    }
    return A.instanceCount = 1,
    A
}()
  , hF = function(A, e) {
    return e === void 0 && (e = {}),
    pF(A, e)
};
typeof window < "u" && gd.setContext(window);
var pF = function(A, e) {
    return IA(void 0, void 0, void 0, function() {
        var t, r, n, i, s, o, l, a, u, B, f, Q, w, h, S, g, c, d, p, U, v, C, v, m, I, K, G, oA, M, nA, ge, BA, cA, E, x, D, R, P, DA, HA;
        return vA(this, function(VA) {
            switch (VA.label) {
            case 0:
                if (!A || typeof A != "object")
                    return [2, Promise.reject("Invalid element provided as first argument")];
                if (t = A.ownerDocument,
                !t)
                    throw new Error("Element is not attached to a Document");
                if (r = t.defaultView,
                !r)
                    throw new Error("Document is not attached to a Window");
                return n = {
                    allowTaint: (m = e.allowTaint) !== null && m !== void 0 ? m : !1,
                    imageTimeout: (I = e.imageTimeout) !== null && I !== void 0 ? I : 15e3,
                    proxy: e.proxy,
                    useCORS: (K = e.useCORS) !== null && K !== void 0 ? K : !1
                },
                i = Hl({
                    logging: (G = e.logging) !== null && G !== void 0 ? G : !0,
                    cache: e.cache
                }, n),
                s = {
                    windowWidth: (oA = e.windowWidth) !== null && oA !== void 0 ? oA : r.innerWidth,
                    windowHeight: (M = e.windowHeight) !== null && M !== void 0 ? M : r.innerHeight,
                    scrollX: (nA = e.scrollX) !== null && nA !== void 0 ? nA : r.pageXOffset,
                    scrollY: (ge = e.scrollY) !== null && ge !== void 0 ? ge : r.pageYOffset
                },
                o = new Me(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),
                l = new QF(i,o),
                a = (BA = e.foreignObjectRendering) !== null && BA !== void 0 ? BA : !1,
                u = {
                    allowTaint: (cA = e.allowTaint) !== null && cA !== void 0 ? cA : !1,
                    onclone: e.onclone,
                    ignoreElements: e.ignoreElements,
                    inlineImages: a,
                    copyStyles: a
                },
                l.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top),
                B = new qB(l,A,u),
                f = B.clonedReferenceElement,
                f ? [4, B.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
            case 1:
                return Q = VA.sent(),
                w = za(f) || CU(f) ? ZQ(f.ownerDocument) : Ss(l, f),
                h = w.width,
                S = w.height,
                g = w.left,
                c = w.top,
                d = CF(l, f, e.backgroundColor),
                p = {
                    canvas: e.canvas,
                    backgroundColor: d,
                    scale: (x = (E = e.scale) !== null && E !== void 0 ? E : r.devicePixelRatio) !== null && x !== void 0 ? x : 1,
                    x: ((D = e.x) !== null && D !== void 0 ? D : 0) + g,
                    y: ((R = e.y) !== null && R !== void 0 ? R : 0) + c,
                    width: (P = e.width) !== null && P !== void 0 ? P : Math.ceil(h),
                    height: (DA = e.height) !== null && DA !== void 0 ? DA : Math.ceil(S)
                },
                a ? (l.logger.debug("Document cloned, using foreign object rendering"),
                v = new gF(l,p),
                [4, v.render(f)]) : [3, 3];
            case 2:
                return U = VA.sent(),
                [3, 5];
            case 3:
                return l.logger.debug("Document cloned, element located at " + g + "," + c + " with size " + h + "x" + S + " using computed rendering"),
                l.logger.debug("Starting DOM parsing"),
                C = sd(l, f),
                d === C.styles.backgroundColor && (C.styles.backgroundColor = Ke.TRANSPARENT),
                l.logger.debug("Starting renderer for element at " + p.x + "," + p.y + " with size " + p.width + "x" + p.height),
                v = new lF(l,p),
                [4, v.render(C)];
            case 4:
                U = VA.sent(),
                VA.label = 5;
            case 5:
                return (!((HA = e.removeContainer) !== null && HA !== void 0) || HA) && (qB.destroy(Q) || l.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                l.logger.debug("Finished rendering"),
                [2, U]
            }
        })
    })
}
  , CF = function(A, e, t) {
    var r = e.ownerDocument
      , n = r.documentElement ? qr(A, getComputedStyle(r.documentElement).backgroundColor) : Ke.TRANSPARENT
      , i = r.body ? qr(A, getComputedStyle(r.body).backgroundColor) : Ke.TRANSPARENT
      , s = typeof t == "string" ? qr(A, t) : t === null ? Ke.TRANSPARENT : 4294967295;
    return e === r.documentElement ? st(n) ? st(i) ? s : i : n : s
};
const UF = ({name: A})=>{
    console.log(A);
    const e = wr.useRef(null)
      , t = async()=>{
        if (!e.current)
            return;
        const i = (await hF(e.current)).toDataURL("image/png", 1);
        r(i, `${A}.png`)
    }
      , r = (n,i)=>{
        const s = window.document.createElement("a");
        s.href = n,
        s.download = i,
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s),
        s.remove()
    }
    ;
    return tA.jsxs(tA.Fragment, {
        children: [tA.jsxs("div", {
            ref: e,
            className: "relative",
            children: [tA.jsx("img", {
                src: "./assests/card.png",
                alt: "Background",
                style: {
                    width: "100%",
                    height: "auto"
                }
            }), tA.jsx("p", {
                className: "text-xs sm:text-sm md:text-xl lg:text-2xl  font-bold z-10 text-custom-purple absolute bottom-1/4 left-1/2 transform -translate-x-1/2",
                children: A
            })]
        }), tA.jsx("button", {
            className: "m-6 p-10 bg-custom-purple text-white py-2 rounded-md hover:bg-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple focus:ring-opacity-50",
            onClick: t,
            children: "تحميل الكرت"
        })]
    })
}
;
function FF() {
    const [A,e] = wr.useState("");
    return tA.jsxs("div", {
        className: "w-full  flex flex-col items-center justify-center",
        children: [tA.jsx(YQ, {}), tA.jsx(zQ, {
            onChangName: t=>e(t)
        }), A && tA.jsx(UF, {
            name: A
        })]
    })
}
Do.createRoot(document.getElementById("root")).render(tA.jsx(kd.StrictMode, {
    children: tA.jsx(FF, {})
}));
