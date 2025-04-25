import {
  _extends,
  require_prop_types
} from "./chunk-NZGN3PNQ.js";
import {
  require_react_dom
} from "./chunk-LRZGMRQ3.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/attr-accept/dist/es/index.js
var require_es = __commonJS({
  "node_modules/attr-accept/dist/es/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
        if (acceptedFilesArray.length === 0) {
          return true;
        }
        var fileName = file.name || "";
        var mimeType = (file.type || "").toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        return acceptedFilesArray.some(function(type) {
          var validType = type.trim().toLowerCase();
          if (validType.charAt(0) === ".") {
            return fileName.toLowerCase().endsWith(validType);
          } else if (validType.endsWith("/*")) {
            return baseMimeType === validType.replace(/\/.*$/, "");
          }
          return mimeType === validType;
        });
      }
      return true;
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    module.exports = function isObject2(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module) {
    "use strict";
    var isObject2 = require_isobject();
    function isObjectObject(o4) {
      return isObject2(o4) === true && Object.prototype.toString.call(o4) === "[object Object]";
    }
    module.exports = function isPlainObject(o4) {
      var ctor, prot;
      if (isObjectObject(o4) === false) return false;
      ctor = o4.constructor;
      if (typeof ctor !== "function") return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false) return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    var isPlainObject = require_is_plain_object();
    module.exports = function isExtendable(val) {
      return isPlainObject(val) || typeof val === "function" || Array.isArray(val);
    };
  }
});

// node_modules/for-in/index.js
var require_for_in = __commonJS({
  "node_modules/for-in/index.js"(exports, module) {
    "use strict";
    module.exports = function forIn(obj, fn, thisArg) {
      for (var key in obj) {
        if (fn.call(thisArg, obj[key], key, obj) === false) {
          break;
        }
      }
    };
  }
});

// node_modules/mixin-deep/index.js
var require_mixin_deep = __commonJS({
  "node_modules/mixin-deep/index.js"(exports, module) {
    "use strict";
    var isExtendable = require_is_extendable();
    var forIn = require_for_in();
    function mixinDeep(target, objects) {
      var len = arguments.length, i4 = 0;
      while (++i4 < len) {
        var obj = arguments[i4];
        if (isObject2(obj)) {
          forIn(obj, copy, target);
        }
      }
      return target;
    }
    function copy(val, key) {
      if (!isValidKey(key)) {
        return;
      }
      var obj = this[key];
      if (isObject2(val) && isObject2(obj)) {
        mixinDeep(obj, val);
      } else {
        this[key] = val;
      }
    }
    function isObject2(val) {
      return isExtendable(val) && !Array.isArray(val);
    }
    function isValidKey(key) {
      return key !== "__proto__" && key !== "constructor" && key !== "prototype";
    }
    module.exports = mixinDeep;
  }
});

// node_modules/get-value/index.js
var require_get_value = __commonJS({
  "node_modules/get-value/index.js"(exports, module) {
    module.exports = function(obj, prop, a4, b4, c4) {
      if (!isObject2(obj) || !prop) {
        return obj;
      }
      prop = toString(prop);
      if (a4) prop += "." + toString(a4);
      if (b4) prop += "." + toString(b4);
      if (c4) prop += "." + toString(c4);
      if (prop in obj) {
        return obj[prop];
      }
      var segs = prop.split(".");
      var len = segs.length;
      var i4 = -1;
      while (obj && ++i4 < len) {
        var key = segs[i4];
        while (key[key.length - 1] === "\\") {
          key = key.slice(0, -1) + "." + segs[++i4];
        }
        obj = obj[key];
      }
      return obj;
    };
    function isObject2(val) {
      return val !== null && (typeof val === "object" || typeof val === "function");
    }
    function toString(val) {
      if (!val) return "";
      if (Array.isArray(val)) {
        return val.join(".");
      }
      return val;
    }
  }
});

// node_modules/assign-symbols/index.js
var require_assign_symbols = __commonJS({
  "node_modules/assign-symbols/index.js"(exports, module) {
    "use strict";
    module.exports = function(receiver, objects) {
      if (receiver === null || typeof receiver === "undefined") {
        throw new TypeError("expected first argument to be an object.");
      }
      if (typeof objects === "undefined" || typeof Symbol === "undefined") {
        return receiver;
      }
      if (typeof Object.getOwnPropertySymbols !== "function") {
        return receiver;
      }
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var target = Object(receiver);
      var len = arguments.length, i4 = 0;
      while (++i4 < len) {
        var provider = Object(arguments[i4]);
        var names = Object.getOwnPropertySymbols(provider);
        for (var j3 = 0; j3 < names.length; j3++) {
          var key = names[j3];
          if (isEnumerable.call(provider, key)) {
            target[key] = provider[key];
          }
        }
      }
      return target;
    };
  }
});

// node_modules/split-string/node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/split-string/node_modules/extend-shallow/index.js"(exports, module) {
    "use strict";
    var isExtendable = require_is_extendable();
    var assignSymbols = require_assign_symbols();
    module.exports = Object.assign || function(obj) {
      if (obj === null || typeof obj === "undefined") {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      if (!isObject2(obj)) {
        obj = {};
      }
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var val = arguments[i4];
        if (isString(val)) {
          val = toObject(val);
        }
        if (isObject2(val)) {
          assign(obj, val);
          assignSymbols(obj, val);
        }
      }
      return obj;
    };
    function assign(a4, b4) {
      for (var key in b4) {
        if (hasOwn(b4, key)) {
          a4[key] = b4[key];
        }
      }
    }
    function isString(val) {
      return val && typeof val === "string";
    }
    function toObject(str) {
      var obj = {};
      for (var i4 in str) {
        obj[i4] = str[i4];
      }
      return obj;
    }
    function isObject2(val) {
      return val && typeof val === "object" || isExtendable(val);
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/split-string/index.js
var require_split_string = __commonJS({
  "node_modules/split-string/index.js"(exports, module) {
    "use strict";
    var extend = require_extend_shallow();
    module.exports = function(str, options, fn) {
      if (typeof str !== "string") {
        throw new TypeError("expected a string");
      }
      if (typeof options === "function") {
        fn = options;
        options = null;
      }
      if (typeof options === "string") {
        options = { sep: options };
      }
      var opts = extend({ sep: "." }, options);
      var quotes = opts.quotes || ['"', "'", "`"];
      var brackets;
      if (opts.brackets === true) {
        brackets = {
          "<": ">",
          "(": ")",
          "[": "]",
          "{": "}"
        };
      } else if (opts.brackets) {
        brackets = opts.brackets;
      }
      var tokens = [];
      var stack = [];
      var arr = [""];
      var sep = opts.sep;
      var len = str.length;
      var idx = -1;
      var closeIdx;
      function expected() {
        if (brackets && stack.length) {
          return brackets[stack[stack.length - 1]];
        }
      }
      while (++idx < len) {
        var ch = str[idx];
        var next = str[idx + 1];
        var tok = { val: ch, idx, arr, str };
        tokens.push(tok);
        if (ch === "\\") {
          tok.val = keepEscaping(opts, str, idx) === true ? ch + next : next;
          tok.escaped = true;
          if (typeof fn === "function") {
            fn(tok);
          }
          arr[arr.length - 1] += tok.val;
          idx++;
          continue;
        }
        if (brackets && brackets[ch]) {
          stack.push(ch);
          var e4 = expected();
          var i4 = idx + 1;
          if (str.indexOf(e4, i4 + 1) !== -1) {
            while (stack.length && i4 < len) {
              var s4 = str[++i4];
              if (s4 === "\\") {
                s4++;
                continue;
              }
              if (quotes.indexOf(s4) !== -1) {
                i4 = getClosingQuote(str, s4, i4 + 1);
                continue;
              }
              e4 = expected();
              if (stack.length && str.indexOf(e4, i4 + 1) === -1) {
                break;
              }
              if (brackets[s4]) {
                stack.push(s4);
                continue;
              }
              if (e4 === s4) {
                stack.pop();
              }
            }
          }
          closeIdx = i4;
          if (closeIdx === -1) {
            arr[arr.length - 1] += ch;
            continue;
          }
          ch = str.slice(idx, closeIdx + 1);
          tok.val = ch;
          tok.idx = idx = closeIdx;
        }
        if (quotes.indexOf(ch) !== -1) {
          closeIdx = getClosingQuote(str, ch, idx + 1);
          if (closeIdx === -1) {
            arr[arr.length - 1] += ch;
            continue;
          }
          if (keepQuotes(ch, opts) === true) {
            ch = str.slice(idx, closeIdx + 1);
          } else {
            ch = str.slice(idx + 1, closeIdx);
          }
          tok.val = ch;
          tok.idx = idx = closeIdx;
        }
        if (typeof fn === "function") {
          fn(tok, tokens);
          ch = tok.val;
          idx = tok.idx;
        }
        if (tok.val === sep && tok.split !== false) {
          arr.push("");
          continue;
        }
        arr[arr.length - 1] += tok.val;
      }
      return arr;
    };
    function getClosingQuote(str, ch, i4, brackets) {
      var idx = str.indexOf(ch, i4);
      if (str.charAt(idx - 1) === "\\") {
        return getClosingQuote(str, ch, idx + 1);
      }
      return idx;
    }
    function keepQuotes(ch, opts) {
      if (opts.keepDoubleQuotes === true && ch === '"') return true;
      if (opts.keepSingleQuotes === true && ch === "'") return true;
      return opts.keepQuotes;
    }
    function keepEscaping(opts, str, idx) {
      if (typeof opts.keepEscaping === "function") {
        return opts.keepEscaping(str, idx);
      }
      return opts.keepEscaping === true || str[idx + 1] === "\\";
    }
  }
});

// node_modules/extend-shallow/node_modules/is-extendable/index.js
var require_is_extendable2 = __commonJS({
  "node_modules/extend-shallow/node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    module.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow2 = __commonJS({
  "node_modules/extend-shallow/index.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_extendable2();
    module.exports = function extend(o4) {
      if (!isObject2(o4)) {
        o4 = {};
      }
      var len = arguments.length;
      for (var i4 = 1; i4 < len; i4++) {
        var obj = arguments[i4];
        if (isObject2(obj)) {
          assign(o4, obj);
        }
      }
      return o4;
    };
    function assign(a4, b4) {
      for (var key in b4) {
        if (hasOwn(b4, key)) {
          a4[key] = b4[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/set-value/node_modules/is-extendable/index.js
var require_is_extendable3 = __commonJS({
  "node_modules/set-value/node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    module.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/set-value/index.js
var require_set_value = __commonJS({
  "node_modules/set-value/index.js"(exports, module) {
    "use strict";
    var split2 = require_split_string();
    var extend = require_extend_shallow2();
    var isPlainObject = require_is_plain_object();
    var isObject2 = require_is_extendable3();
    module.exports = function(obj, prop, val) {
      if (!isObject2(obj)) {
        return obj;
      }
      if (Array.isArray(prop)) {
        prop = [].concat.apply([], prop).join(".");
      }
      if (typeof prop !== "string") {
        return obj;
      }
      var keys = split2(prop, { sep: ".", brackets: true }).filter(isValidKey);
      var len = keys.length;
      var idx = -1;
      var current = obj;
      while (++idx < len) {
        var key = keys[idx];
        if (idx !== len - 1) {
          if (!isObject2(current[key])) {
            current[key] = {};
          }
          current = current[key];
          continue;
        }
        if (isPlainObject(current[key]) && isPlainObject(val)) {
          current[key] = extend({}, current[key], val);
        } else {
          current[key] = val;
        }
      }
      return obj;
    };
    function isValidKey(key) {
      return key !== "__proto__" && key !== "constructor" && key !== "prototype";
    }
  }
});

// node_modules/merge-value/index.js
var require_merge_value = __commonJS({
  "node_modules/merge-value/index.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_extendable();
    var merge = require_mixin_deep();
    var get = require_get_value();
    var set = require_set_value();
    module.exports = function mergeValue(obj, prop, value) {
      if (!isObject2(obj)) {
        throw new TypeError("expected an object");
      }
      if (typeof prop !== "string" || value == null) {
        return merge.apply(null, arguments);
      }
      if (typeof value === "string") {
        set(obj, prop, value);
        return obj;
      }
      var current = get(obj, prop);
      if (isObject2(value) && isObject2(current)) {
        value = merge({}, current, value);
      }
      set(obj, prop, value);
      return obj;
    };
  }
});

// node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react4 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@radix-ui/react-primitive/dist/index.module.js
var import_react3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@radix-ui/react-slot/dist/index.module.js
var import_react2 = __toESM(require_react());

// node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var import_react = __toESM(require_react());
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function") ref(value);
  else if (ref !== null && ref !== void 0) ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/@radix-ui/react-slot/dist/index.module.js
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react2.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react2.Children.count(newElement) > 1) return import_react2.Children.only(null);
        return (0, import_react2.isValidElement)(newElement) ? newElement.props.children : null;
      } else return child;
    });
    return (0, import_react2.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), (0, import_react2.isValidElement)(newElement) ? (0, import_react2.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return (0, import_react2.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if ((0, import_react2.isValidElement)(children)) return (0, import_react2.cloneElement)(children, {
    ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
  });
  return import_react2.Children.count(children) > 1 ? import_react2.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return (0, import_react2.createElement)(import_react2.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return (0, import_react2.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
        childPropValue(...args);
        slotPropValue(...args);
      };
      else if (slotPropValue) overrideProps[propName] = slotPropValue;
    } else if (propName === "style") overrideProps[propName] = {
      ...slotPropValue,
      ...childPropValue
    };
    else if (propName === "className") overrideProps[propName] = [
      slotPropValue,
      childPropValue
    ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = (0, import_react3.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react3.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return (0, import_react3.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target) (0, import_react_dom.flushSync)(
    () => target.dispatchEvent(event)
  );
}

// node_modules/@radix-ui/react-portal/dist/index.module.js
var $f1701beae083dbae$var$PORTAL_NAME = "Portal";
var $f1701beae083dbae$export$602eac185826482c = (0, import_react4.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? import_react_dom2.default.createPortal((0, import_react4.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
Object.assign($f1701beae083dbae$export$602eac185826482c, {
  displayName: $f1701beae083dbae$var$PORTAL_NAME
});
var $f1701beae083dbae$export$be92b6f5f03c0fe9 = $f1701beae083dbae$export$602eac185826482c;

// node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len])) ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/v8n/dist/v8n.esm.js
var Rule = function Rule2(name, fn, args, modifiers) {
  this.name = name;
  this.fn = fn;
  this.args = args;
  this.modifiers = modifiers;
};
Rule.prototype._test = function _test(value) {
  var fn = this.fn;
  try {
    testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex) {
    fn = function() {
      return false;
    };
  }
  try {
    return testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex$1) {
    return false;
  }
};
Rule.prototype._check = function _check(value) {
  try {
    testAux(this.modifiers.slice(), this.fn, this)(value);
  } catch (ex) {
    if (testAux(this.modifiers.slice(), function(it) {
      return it;
    }, this)(false)) {
      return;
    }
  }
  if (!testAux(this.modifiers.slice(), this.fn, this)(value)) {
    throw null;
  }
};
Rule.prototype._testAsync = function _testAsync(value) {
  var this$1 = this;
  return new Promise(function(resolve, reject) {
    testAsyncAux(
      this$1.modifiers.slice(),
      this$1.fn,
      this$1
    )(value).then(function(valid) {
      if (valid) {
        resolve(value);
      } else {
        reject(null);
      }
    }).catch(function(ex) {
      return reject(ex);
    });
  });
};
function pickFn(fn, variant) {
  if (variant === void 0) variant = "simple";
  return typeof fn === "object" ? fn[variant] : fn;
}
function testAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAux(modifiers, fn, rule);
    return modifier.perform(nextFn, rule);
  } else {
    return pickFn(fn);
  }
}
function testAsyncAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAsyncAux(modifiers, fn, rule);
    return modifier.performAsync(nextFn, rule);
  } else {
    return function(value) {
      return Promise.resolve(pickFn(fn, "async")(value));
    };
  }
}
var Modifier = function Modifier2(name, perform, performAsync) {
  this.name = name;
  this.perform = perform;
  this.performAsync = performAsync;
};
var ValidationError = function(Error2) {
  function ValidationError2(rule, value, cause, target) {
    var remaining = [], len = arguments.length - 4;
    while (len-- > 0) remaining[len] = arguments[len + 4];
    Error2.call(this, remaining);
    if (Error2.captureStackTrace) {
      Error2.captureStackTrace(this, ValidationError2);
    }
    this.rule = rule;
    this.value = value;
    this.cause = cause;
    this.target = target;
  }
  if (Error2) ValidationError2.__proto__ = Error2;
  ValidationError2.prototype = Object.create(Error2 && Error2.prototype);
  ValidationError2.prototype.constructor = ValidationError2;
  return ValidationError2;
}(Error);
var Context = function Context2(chain, nextRuleModifiers) {
  if (chain === void 0) chain = [];
  if (nextRuleModifiers === void 0) nextRuleModifiers = [];
  this.chain = chain;
  this.nextRuleModifiers = nextRuleModifiers;
};
Context.prototype._applyRule = function _applyRule(ruleFn, name) {
  var this$1 = this;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    this$1.chain.push(
      new Rule(name, ruleFn.apply(this$1, args), args, this$1.nextRuleModifiers)
    );
    this$1.nextRuleModifiers = [];
    return this$1;
  };
};
Context.prototype._applyModifier = function _applyModifier(modifier, name) {
  this.nextRuleModifiers.push(
    new Modifier(name, modifier.simple, modifier.async)
  );
  return this;
};
Context.prototype._clone = function _clone() {
  return new Context(this.chain.slice(), this.nextRuleModifiers.slice());
};
Context.prototype.test = function test(value) {
  return this.chain.every(function(rule) {
    return rule._test(value);
  });
};
Context.prototype.testAll = function testAll(value) {
  var err = [];
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      err.push(new ValidationError(rule, value, ex));
    }
  });
  return err;
};
Context.prototype.check = function check(value) {
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      throw new ValidationError(rule, value, ex);
    }
  });
};
Context.prototype.testAsync = function testAsync(value) {
  var this$1 = this;
  return new Promise(function(resolve, reject) {
    executeAsyncRules(value, this$1.chain.slice(), resolve, reject);
  });
};
function executeAsyncRules(value, rules, resolve, reject) {
  if (rules.length) {
    var rule = rules.shift();
    rule._testAsync(value).then(
      function() {
        executeAsyncRules(value, rules, resolve, reject);
      },
      function(cause) {
        reject(new ValidationError(rule, value, cause));
      }
    );
  } else {
    resolve(value);
  }
}
var consideredEmpty = function(value, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString && typeof value === "string" && value.trim().length === 0) {
    return true;
  }
  return value === void 0 || value === null;
};
function optional(validation, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString === void 0) considerTrimmedEmptyString = false;
  return {
    simple: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.check(value) === void 0;
    },
    async: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.testAsync(value);
    }
  };
}
function v8n() {
  return typeof Proxy !== "undefined" ? proxyContext(new Context()) : proxylessContext(new Context());
}
var customRules = {};
v8n.extend = function(newRules) {
  Object.assign(customRules, newRules);
};
v8n.clearCustomRules = function() {
  customRules = {};
};
function proxyContext(context) {
  return new Proxy(context, {
    get: function get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      var newContext = proxyContext(context._clone());
      if (prop in availableModifiers) {
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
      if (prop in customRules) {
        return newContext._applyRule(customRules[prop], prop);
      }
      if (prop in availableRules) {
        return newContext._applyRule(availableRules[prop], prop);
      }
    }
  });
}
function proxylessContext(context) {
  var addRuleSet = function(ruleSet, targetContext) {
    Object.keys(ruleSet).forEach(function(prop) {
      targetContext[prop] = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var newContext = proxylessContext(targetContext._clone());
        var contextWithRuleApplied = newContext._applyRule(
          ruleSet[prop],
          prop
        ).apply(void 0, args);
        return contextWithRuleApplied;
      };
    });
    return targetContext;
  };
  var contextWithAvailableRules = addRuleSet(availableRules, context);
  var contextWithAllRules = addRuleSet(
    customRules,
    contextWithAvailableRules
  );
  Object.keys(availableModifiers).forEach(function(prop) {
    Object.defineProperty(contextWithAllRules, prop, {
      get: function() {
        var newContext = proxylessContext(contextWithAllRules._clone());
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
    });
  });
  return contextWithAllRules;
}
var availableModifiers = {
  not: {
    simple: function(fn) {
      return function(value) {
        return !fn(value);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          return !result;
        }).catch(function() {
          return true;
        });
      };
    }
  },
  some: {
    simple: function(fn) {
      return function(value) {
        return split(value).some(function(item) {
          try {
            return fn(item);
          } catch (ex) {
            return false;
          }
        });
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(
          split(value).map(function(item) {
            try {
              return fn(item).catch(function() {
                return false;
              });
            } catch (ex) {
              return false;
            }
          })
        ).then(function(result) {
          return result.some(Boolean);
        });
      };
    }
  },
  every: {
    simple: function(fn) {
      return function(value) {
        return value !== false && split(value).every(fn);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(split(value).map(fn)).then(function(result) {
          return result.every(Boolean);
        });
      };
    }
  },
  strict: {
    simple: function(fn, rule) {
      return function(value) {
        if (isSchemaRule(rule) && value && typeof value === "object") {
          return Object.keys(rule.args[0]).length === Object.keys(value).length && fn(value);
        }
        return fn(value);
      };
    },
    async: function(fn, rule) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          if (isSchemaRule(rule) && value && typeof value === "object") {
            return Object.keys(rule.args[0]).length === Object.keys(value).length && result;
          }
          return result;
        }).catch(function() {
          return false;
        });
      };
    }
  }
};
function isSchemaRule(rule) {
  return rule && rule.name === "schema" && rule.args.length > 0 && typeof rule.args[0] === "object";
}
function split(value) {
  if (typeof value === "string") {
    return value.split("");
  }
  return value;
}
var availableRules = {
  // Value
  equal: function(expected) {
    return function(value) {
      return value == expected;
    };
  },
  exact: function(expected) {
    return function(value) {
      return value === expected;
    };
  },
  // Types
  number: function(allowInfinite) {
    if (allowInfinite === void 0) allowInfinite = true;
    return function(value) {
      return typeof value === "number" && (allowInfinite || isFinite(value));
    };
  },
  integer: function() {
    return function(value) {
      var isInteger = Number.isInteger || isIntegerPolyfill;
      return isInteger(value);
    };
  },
  numeric: function() {
    return function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    };
  },
  string: function() {
    return testType("string");
  },
  boolean: function() {
    return testType("boolean");
  },
  undefined: function() {
    return testType("undefined");
  },
  null: function() {
    return testType("null");
  },
  array: function() {
    return testType("array");
  },
  object: function() {
    return testType("object");
  },
  instanceOf: function(instance) {
    return function(value) {
      return value instanceof instance;
    };
  },
  // Pattern
  pattern: function(expected) {
    return function(value) {
      return expected.test(value);
    };
  },
  lowercase: function() {
    return function(value) {
      return typeof value === "boolean" || value === value.toLowerCase() && value.trim() !== "";
    };
  },
  uppercase: function() {
    return function(value) {
      return value === value.toUpperCase() && value.trim() !== "";
    };
  },
  vowel: function() {
    return function(value) {
      return /^[aeiou]+$/i.test(value);
    };
  },
  consonant: function() {
    return function(value) {
      return /^(?=[^aeiou])([a-z]+)$/i.test(value);
    };
  },
  // Value at
  first: function(expected) {
    return function(value) {
      return value[0] == expected;
    };
  },
  last: function(expected) {
    return function(value) {
      return value[value.length - 1] == expected;
    };
  },
  // Length
  empty: function() {
    return function(value) {
      return value.length === 0;
    };
  },
  length: function(min3, max3) {
    return function(value) {
      return value.length >= min3 && value.length <= (max3 || min3);
    };
  },
  minLength: function(min3) {
    return function(value) {
      return value.length >= min3;
    };
  },
  maxLength: function(max3) {
    return function(value) {
      return value.length <= max3;
    };
  },
  // Range
  negative: function() {
    return function(value) {
      return value < 0;
    };
  },
  positive: function() {
    return function(value) {
      return value >= 0;
    };
  },
  between: function(a4, b4) {
    return function(value) {
      return value >= a4 && value <= b4;
    };
  },
  range: function(a4, b4) {
    return function(value) {
      return value >= a4 && value <= b4;
    };
  },
  lessThan: function(n4) {
    return function(value) {
      return value < n4;
    };
  },
  lessThanOrEqual: function(n4) {
    return function(value) {
      return value <= n4;
    };
  },
  greaterThan: function(n4) {
    return function(value) {
      return value > n4;
    };
  },
  greaterThanOrEqual: function(n4) {
    return function(value) {
      return value >= n4;
    };
  },
  // Divisible
  even: function() {
    return function(value) {
      return value % 2 === 0;
    };
  },
  odd: function() {
    return function(value) {
      return value % 2 !== 0;
    };
  },
  includes: function(expected) {
    return function(value) {
      return ~value.indexOf(expected);
    };
  },
  schema: function(schema) {
    return testSchema(schema);
  },
  // branching
  passesAnyOf: function() {
    var validations = [], len = arguments.length;
    while (len--) validations[len] = arguments[len];
    return function(value) {
      return validations.some(function(validation) {
        return validation.test(value);
      });
    };
  },
  optional
};
function testType(expected) {
  return function(value) {
    return Array.isArray(value) && expected === "array" || value === null && expected === "null" || typeof value === expected;
  };
}
function isIntegerPolyfill(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function testSchema(schema) {
  return {
    simple: function(value) {
      var causes = [];
      Object.keys(schema).forEach(function(key) {
        var nestedValidation = schema[key];
        try {
          nestedValidation.check((value || {})[key]);
        } catch (ex) {
          ex.target = key;
          causes.push(ex);
        }
      });
      if (causes.length > 0) {
        throw causes;
      }
      return true;
    },
    async: function(value) {
      var causes = [];
      var nested = Object.keys(schema).map(function(key) {
        var nestedValidation = schema[key];
        return nestedValidation.testAsync((value || {})[key]).catch(function(ex) {
          ex.target = key;
          causes.push(ex);
        });
      });
      return Promise.all(nested).then(function() {
        if (causes.length > 0) {
          throw causes;
        }
        return true;
      });
    }
  };
}
var v8n_esm_default = v8n;

// node_modules/@stitches/react/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e4, t4) => "function" == typeof t4 ? { "()": Function.prototype.toString.call(t4) } : t4;
var o = () => {
  const e4 = /* @__PURE__ */ Object.create(null);
  return (t4, r4, ...n4) => {
    const o4 = ((e5) => JSON.stringify(e5, i))(t4);
    return o4 in e4 ? e4[o4] : e4[o4] = r4(t4, ...n4);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e4, t4) => Object.defineProperties(e4, Object.getOwnPropertyDescriptors(t4));
var a = (e4) => {
  for (const t4 in e4) return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e4) => e4.includes("-") ? e4 : e4.replace(/[A-Z]/g, (e5) => "-" + e5.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e4) => (t4) => e4(..."string" == typeof t4 ? String(t4).split(g) : [t4]);
var u = { appearance: (e4) => ({ WebkitAppearance: e4, appearance: e4 }), backfaceVisibility: (e4) => ({ WebkitBackfaceVisibility: e4, backfaceVisibility: e4 }), backdropFilter: (e4) => ({ WebkitBackdropFilter: e4, backdropFilter: e4 }), backgroundClip: (e4) => ({ WebkitBackgroundClip: e4, backgroundClip: e4 }), boxDecorationBreak: (e4) => ({ WebkitBoxDecorationBreak: e4, boxDecorationBreak: e4 }), clipPath: (e4) => ({ WebkitClipPath: e4, clipPath: e4 }), content: (e4) => ({ content: e4.includes('"') || e4.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e4) ? e4 : `"${e4}"` }), hyphens: (e4) => ({ WebkitHyphens: e4, hyphens: e4 }), maskImage: (e4) => ({ WebkitMaskImage: e4, maskImage: e4 }), maskSize: (e4) => ({ WebkitMaskSize: e4, maskSize: e4 }), tabSize: (e4) => ({ MozTabSize: e4, tabSize: e4 }), textSizeAdjust: (e4) => ({ WebkitTextSizeAdjust: e4, textSizeAdjust: e4 }), userSelect: (e4) => ({ WebkitUserSelect: e4, userSelect: e4 }), marginBlock: p((e4, t4) => ({ marginBlockStart: e4, marginBlockEnd: t4 || e4 })), marginInline: p((e4, t4) => ({ marginInlineStart: e4, marginInlineEnd: t4 || e4 })), maxSize: p((e4, t4) => ({ maxBlockSize: e4, maxInlineSize: t4 || e4 })), minSize: p((e4, t4) => ({ minBlockSize: e4, minInlineSize: t4 || e4 })), paddingBlock: p((e4, t4) => ({ paddingBlockStart: e4, paddingBlockEnd: t4 || e4 })), paddingInline: p((e4, t4) => ({ paddingInlineStart: e4, paddingInlineEnd: t4 || e4 })) };
var h = /([\d.]+)([^]*)/;
var f = (e4, t4) => e4.length ? e4.reduce((e5, r4) => (e5.push(...t4.map((e6) => e6.includes("&") ? e6.replace(/&/g, /[ +>|~]/.test(r4) && /&.*&/.test(e6) ? `:is(${r4})` : r4) : r4 + " " + e6)), e5), []) : t4;
var m = (e4, t4) => e4 in b && "string" == typeof t4 ? t4.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t5, r4, n4, i4) => r4 + ("stretch" === n4 ? `-moz-available${i4};${d(e4)}:${r4}-webkit-fill-available` : `-moz-fit-content${i4};${d(e4)}:${r4}fit-content`) + i4) : String(t4);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e4) => e4 ? e4 + "-" : "";
var k = (e4, t4, r4) => e4.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e5, n4, i4, o4, l4) => "$" == o4 == !!i4 ? e5 : (n4 || "--" == o4 ? "calc(" : "") + "var(--" + ("$" === o4 ? S(t4) + (l4.includes("$") ? "" : S(r4)) + l4.replace(/\$/g, "-") : l4) + ")" + (n4 || "--" == o4 ? "*" + (n4 || "") + (i4 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e4, t4, r4, n4, i4) => {
  let o4, l4, s4;
  const a4 = (e5, t5, r5) => {
    let c4, g4;
    const p4 = (e6) => {
      for (c4 in e6) {
        const R3 = 64 === c4.charCodeAt(0), z2 = R3 && Array.isArray(e6[c4]) ? e6[c4] : [e6[c4]];
        for (g4 of z2) {
          const e7 = /[A-Z]/.test($4 = c4) ? $4 : $4.replace(/-[^]/g, (e8) => e8[1].toUpperCase()), z3 = "object" == typeof g4 && g4 && g4.toString === B && (!n4.utils[e7] || !t5.length);
          if (e7 in n4.utils && !z3) {
            const t6 = n4.utils[e7];
            if (t6 !== l4) {
              l4 = t6, p4(t6(g4)), l4 = null;
              continue;
            }
          } else if (e7 in u) {
            const t6 = u[e7];
            if (t6 !== s4) {
              s4 = t6, p4(t6(g4)), s4 = null;
              continue;
            }
          }
          if (R3 && (b4 = c4.slice(1) in n4.media ? "@media " + n4.media[c4.slice(1)] : c4, c4 = b4.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e8, t6, r6, n5, i5, o5) => {
            const l5 = h.test(t6), s5 = 0.0625 * (l5 ? -1 : 1), [a5, c5] = l5 ? [n5, t6] : [t6, n5];
            return "(" + ("=" === r6[0] ? "" : ">" === r6[0] === l5 ? "max-" : "min-") + a5 + ":" + ("=" !== r6[0] && 1 === r6.length ? c5.replace(h, (e9, t7, n6) => Number(t7) + s5 * (">" === r6 ? 1 : -1) + n6) : c5) + (i5 ? ") and (" + (">" === i5[0] ? "min-" : "max-") + a5 + ":" + (1 === i5.length ? o5.replace(h, (e9, t7, r7) => Number(t7) + s5 * (">" === i5 ? -1 : 1) + r7) : o5) : "") + ")";
          })), z3) {
            const e8 = R3 ? r5.concat(c4) : [...r5], n5 = R3 ? [...t5] : f(t5, c4.split(y));
            void 0 !== o4 && i4(x(...o4)), o4 = void 0, a4(g4, n5, e8);
          } else void 0 === o4 && (o4 = [[], t5, r5]), c4 = R3 || 36 !== c4.charCodeAt(0) ? c4 : `--${S(n4.prefix)}${c4.slice(1).replace(/\$/g, "-")}`, g4 = z3 ? g4 : "number" == typeof g4 ? g4 && e7 in I ? String(g4) + "px" : String(g4) : k(m(e7, null == g4 ? "" : g4), n4.prefix, n4.themeMap[e7]), o4[0].push(`${R3 ? `${c4} ` : `${d(c4)}:`}${g4}`);
        }
      }
      var b4, $4;
    };
    p4(e5), void 0 !== o4 && i4(x(...o4)), o4 = void 0;
  };
  a4(e4, t4, r4);
};
var x = (e4, t4, r4) => `${r4.map((e5) => `${e5}{`).join("")}${t4.length ? `${t4.join(",")}{` : ""}${e4.join(";")}${t4.length ? "}" : ""}${Array(r4.length ? r4.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e4) => String.fromCharCode(e4 + (e4 > 25 ? 39 : 97));
var z = (e4) => ((e5) => {
  let t4, r4 = "";
  for (t4 = Math.abs(e5); t4 > 52; t4 = t4 / 52 | 0) r4 = R(t4 % 52) + r4;
  return R(t4 % 52) + r4;
})(((e5, t4) => {
  let r4 = t4.length;
  for (; r4; ) e5 = 33 * e5 ^ t4.charCodeAt(--r4);
  return e5;
})(5381, JSON.stringify(e4)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e4) => {
  if (e4.href && !e4.href.startsWith(location.origin)) return false;
  try {
    return !!e4.cssRules;
  } catch (e5) {
    return false;
  }
};
var E = (e4) => {
  let t4;
  const r4 = () => {
    const { cssRules: e5 } = t4.sheet;
    return [].map.call(e5, (r5, n5) => {
      const { cssText: i4 } = r5;
      let o4 = "";
      if (i4.startsWith("--sxs")) return "";
      if (e5[n5 - 1] && (o4 = e5[n5 - 1].cssText).startsWith("--sxs")) {
        if (!r5.cssRules.length) return "";
        for (const e6 in t4.rules) if (t4.rules[e6].group === r5) return `--sxs{--sxs:${[...t4.rules[e6].cache].join(" ")}}${i4}`;
        return r5.cssRules.length ? `${o4}${i4}` : "";
      }
      return i4;
    }).join("");
  }, n4 = () => {
    if (t4) {
      const { rules: e5, sheet: r5 } = t4;
      if (!r5.deleteRule) {
        for (; 3 === Object(Object(r5.cssRules)[0]).type; ) r5.cssRules.splice(0, 1);
        r5.cssRules = [];
      }
      for (const t5 in e5) delete e5[t5];
    }
    const i4 = Object(e4).styleSheets || [];
    for (const e5 of i4) if (j(e5)) {
      for (let i5 = 0, o5 = e5.cssRules; o5[i5]; ++i5) {
        const l5 = Object(o5[i5]);
        if (1 !== l5.type) continue;
        const s4 = Object(o5[i5 + 1]);
        if (4 !== s4.type) continue;
        ++i5;
        const { cssText: a4 } = l5;
        if (!a4.startsWith("--sxs")) continue;
        const c4 = a4.slice(14, -3).trim().split(/\s+/), d4 = W[c4[0]];
        d4 && (t4 || (t4 = { sheet: e5, reset: n4, rules: {}, toString: r4 }), t4.rules[d4] = { group: s4, index: i5, cache: new Set(c4) });
      }
      if (t4) break;
    }
    if (!t4) {
      const i5 = (e5, t5) => ({ type: t5, cssRules: [], insertRule(e6, t6) {
        this.cssRules.splice(t6, 0, i5(e6, { import: 3, undefined: 1 }[(e6.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e5 ? `@media{${[].map.call(this.cssRules, (e6) => e6.cssText).join("")}}` : e5;
      } });
      t4 = { sheet: e4 ? (e4.head || e4).appendChild(document.createElement("style")).sheet : i5("", "text/css"), rules: {}, reset: n4, toString: r4 };
    }
    const { sheet: o4, rules: l4 } = t4;
    for (let e5 = W.length - 1; e5 >= 0; --e5) {
      const t5 = W[e5];
      if (!l4[t5]) {
        const r5 = W[e5 + 1], n5 = l4[r5] ? l4[r5].index : o4.cssRules.length;
        o4.insertRule("@media{}", n5), o4.insertRule(`--sxs{--sxs:${e5}}`, n5), l4[t5] = { group: o4.cssRules[n5 + 1], index: n5, cache: /* @__PURE__ */ new Set([e5]) };
      }
      v(l4[t5]);
    }
  };
  return n4(), t4;
};
var v = (e4) => {
  const t4 = e4.group;
  let r4 = t4.cssRules.length;
  e4.apply = (e5) => {
    try {
      t4.insertRule(e5, r4), ++r4;
    } catch (e6) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e4, t4) => w(e4, () => (...r4) => {
  let n4 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t5 of r4) if (null != t5) if (t5[l]) {
    null == n4.type && (n4.type = t5[l].type);
    for (const e5 of t5[l].composers) n4.composers.add(e5);
  } else t5.constructor !== Object || t5.$$typeof ? null == n4.type && (n4.type = t5) : n4.composers.add(C(t5, e4));
  return null == n4.type && (n4.type = "span"), n4.composers.size || n4.composers.add(["PJLV", {}, [], [], {}, []]), P(e4, n4, t4);
});
var C = ({ variants: e4, compoundVariants: t4, defaultVariants: r4, ...n4 }, i4) => {
  const o4 = `${S(i4.prefix)}c-${z(n4)}`, l4 = [], s4 = [], d4 = /* @__PURE__ */ Object.create(null), g4 = [];
  for (const e5 in r4) d4[e5] = String(r4[e5]);
  if ("object" == typeof e4 && e4) for (const t5 in e4) {
    p4 = d4, u4 = t5, c.call(p4, u4) || (d4[t5] = "undefined");
    const r5 = e4[t5];
    for (const e5 in r5) {
      const n5 = { [t5]: String(e5) };
      "undefined" === String(e5) && g4.push(t5);
      const i5 = r5[e5], o5 = [n5, i5, !a(i5)];
      l4.push(o5);
    }
  }
  var p4, u4;
  if ("object" == typeof t4 && t4) for (const e5 of t4) {
    let { css: t5, ...r5 } = e5;
    t5 = "object" == typeof t5 && t5 || {};
    for (const e6 in r5) r5[e6] = String(r5[e6]);
    const n5 = [r5, t5, !a(t5)];
    s4.push(n5);
  }
  return [o4, n4, l4, s4, d4, g4];
};
var P = (e4, t4, r4) => {
  const [n4, i4, o4, a4] = L(t4.composers), c4 = "function" == typeof t4.type || t4.type.$$typeof ? ((e5) => {
    function t5() {
      for (let r5 = 0; r5 < t5[T].length; r5++) {
        const [n5, i5] = t5[T][r5];
        e5.rules[n5].apply(i5);
      }
      return t5[T] = [], null;
    }
    return t5[T] = [], t5.rules = {}, W.forEach((e6) => t5.rules[e6] = { apply: (r5) => t5[T].push([e6, r5]) }), t5;
  })(r4) : null, d4 = (c4 || r4).rules, g4 = `.${n4}${i4.length > 1 ? `:where(.${i4.slice(1).join(".")})` : ""}`, p4 = (l4) => {
    l4 = "object" == typeof l4 && l4 || A;
    const { css: s4, ...p5 } = l4, u4 = {};
    for (const e5 in o4) if (delete p5[e5], e5 in l4) {
      let t5 = l4[e5];
      "object" == typeof t5 && t5 ? u4[e5] = { "@initial": o4[e5], ...t5 } : (t5 = String(t5), u4[e5] = "undefined" !== t5 || a4.has(e5) ? t5 : o4[e5]);
    } else u4[e5] = o4[e5];
    const h4 = /* @__PURE__ */ new Set([...i4]);
    for (const [n5, i5, o5, l5] of t4.composers) {
      r4.rules.styled.cache.has(n5) || (r4.rules.styled.cache.add(n5), $(i5, [`.${n5}`], [], e4, (e5) => {
        d4.styled.apply(e5);
      }));
      const t5 = O(o5, u4, e4.media), s5 = O(l5, u4, e4.media, true);
      for (const i6 of t5) if (void 0 !== i6) for (const [t6, o6, l6] of i6) {
        const i7 = `${n5}-${z(o6)}-${t6}`;
        h4.add(i7);
        const s6 = (l6 ? r4.rules.resonevar : r4.rules.onevar).cache, a5 = l6 ? d4.resonevar : d4.onevar;
        s6.has(i7) || (s6.add(i7), $(o6, [`.${i7}`], [], e4, (e5) => {
          a5.apply(e5);
        }));
      }
      for (const t6 of s5) if (void 0 !== t6) for (const [i6, o6] of t6) {
        const t7 = `${n5}-${z(o6)}-${i6}`;
        h4.add(t7), r4.rules.allvar.cache.has(t7) || (r4.rules.allvar.cache.add(t7), $(o6, [`.${t7}`], [], e4, (e5) => {
          d4.allvar.apply(e5);
        }));
      }
    }
    if ("object" == typeof s4 && s4) {
      const t5 = `${n4}-i${z(s4)}-css`;
      h4.add(t5), r4.rules.inline.cache.has(t5) || (r4.rules.inline.cache.add(t5), $(s4, [`.${t5}`], [], e4, (e5) => {
        d4.inline.apply(e5);
      }));
    }
    for (const e5 of String(l4.className || "").trim().split(/\s+/)) e5 && h4.add(e5);
    const f4 = p5.className = [...h4].join(" ");
    return { type: t4.type, className: f4, selector: g4, props: p5, toString: () => f4, deferredInjector: c4 };
  };
  return s(p4, { className: n4, selector: g4, [l]: t4, toString: () => (r4.rules.styled.cache.has(n4) || p4(), n4) });
};
var L = (e4) => {
  let t4 = "";
  const r4 = [], n4 = {}, i4 = [];
  for (const [o4, , , , l4, s4] of e4) {
    "" === t4 && (t4 = o4), r4.push(o4), i4.push(...s4);
    for (const e5 in l4) {
      const t5 = l4[e5];
      (void 0 === n4[e5] || "undefined" !== t5 || s4.includes(t5)) && (n4[e5] = t5);
    }
  }
  return [t4, r4, n4, new Set(i4)];
};
var O = (e4, t4, r4, n4) => {
  const i4 = [];
  e: for (let [o4, l4, s4] of e4) {
    if (s4) continue;
    let e5, a4 = 0, c4 = false;
    for (e5 in o4) {
      const n5 = o4[e5];
      let i5 = t4[e5];
      if (i5 !== n5) {
        if ("object" != typeof i5 || !i5) continue e;
        {
          let e6, t5, o5 = 0;
          for (const l5 in i5) {
            if (n5 === String(i5[l5])) {
              if ("@initial" !== l5) {
                const e7 = l5.slice(1);
                (t5 = t5 || []).push(e7 in r4 ? r4[e7] : l5.replace(/^@media ?/, "")), c4 = true;
              }
              a4 += o5, e6 = true;
            }
            ++o5;
          }
          if (t5 && t5.length && (l4 = { ["@media " + t5.join(", ")]: l4 }), !e6) continue e;
        }
      }
    }
    (i4[a4] = i4[a4] || []).push([n4 ? "cv" : `${e5}-${o4[e5]}`, l4, c4]);
  }
  return i4;
};
var A = {};
var N = o();
var D = (e4, t4) => N(e4, () => (...r4) => {
  const n4 = () => {
    for (let n5 of r4) {
      n5 = "object" == typeof n5 && n5 || {};
      let r5 = z(n5);
      if (!t4.rules.global.cache.has(r5)) {
        if (t4.rules.global.cache.add(r5), "@import" in n5) {
          let e5 = [].indexOf.call(t4.sheet.cssRules, t4.rules.themed.group) - 1;
          for (let r6 of [].concat(n5["@import"])) r6 = r6.includes('"') || r6.includes("'") ? r6 : `"${r6}"`, t4.sheet.insertRule(`@import ${r6};`, e5++);
          delete n5["@import"];
        }
        $(n5, [], [], e4, (e5) => {
          t4.rules.global.apply(e5);
        });
      }
    }
    return "";
  };
  return s(n4, { toString: n4 });
});
var H = o();
var V = (e4, t4) => H(e4, () => (r4) => {
  const n4 = `${S(e4.prefix)}k-${z(r4)}`, i4 = () => {
    if (!t4.rules.global.cache.has(n4)) {
      t4.rules.global.cache.add(n4);
      const i5 = [];
      $(r4, [], [], e4, (e5) => i5.push(e5));
      const o4 = `@keyframes ${n4}{${i5.join("")}}`;
      t4.rules.global.apply(o4);
    }
    return n4;
  };
  return s(i4, { get name() {
    return i4();
  }, toString: i4 });
});
var G = class {
  constructor(e4, t4, r4, n4) {
    this.token = null == e4 ? "" : String(e4), this.value = null == t4 ? "" : String(t4), this.scale = null == r4 ? "" : String(r4), this.prefix = null == n4 ? "" : String(n4);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e4, t4) => F(e4, () => (r4, n4) => {
  n4 = "object" == typeof r4 && r4 || Object(n4);
  const i4 = `.${r4 = (r4 = "string" == typeof r4 ? r4 : "") || `${S(e4.prefix)}t-${z(n4)}`}`, o4 = {}, l4 = [];
  for (const t5 in n4) {
    o4[t5] = {};
    for (const r5 in n4[t5]) {
      const i5 = `--${S(e4.prefix)}${t5}-${r5}`, s5 = k(String(n4[t5][r5]), e4.prefix, t5);
      o4[t5][r5] = new G(r5, s5, t5, e4.prefix), l4.push(`${i5}:${s5}`);
    }
  }
  const s4 = () => {
    if (l4.length && !t4.rules.themed.cache.has(r4)) {
      t4.rules.themed.cache.add(r4);
      const i5 = `${n4 === e4.theme ? ":root," : ""}.${r4}{${l4.join(";")}}`;
      t4.rules.themed.apply(i5);
    }
    return r4;
  };
  return { ...o4, get className() {
    return s4();
  }, selector: i4, toString: s4 };
});
var U = o();
var Y = o();
var q = (e4) => {
  const t4 = ((e5) => {
    let t5 = false;
    const r4 = U(e5, (e6) => {
      t5 = true;
      const r5 = "prefix" in (e6 = "object" == typeof e6 && e6 || {}) ? String(e6.prefix) : "", i4 = "object" == typeof e6.media && e6.media || {}, o4 = "object" == typeof e6.root ? e6.root || null : globalThis.document || null, l4 = "object" == typeof e6.theme && e6.theme || {}, s4 = { prefix: r5, media: i4, theme: l4, themeMap: "object" == typeof e6.themeMap && e6.themeMap || { ...n }, utils: "object" == typeof e6.utils && e6.utils || {} }, a4 = E(o4), c4 = { css: M(s4, a4), globalCss: D(s4, a4), keyframes: V(s4, a4), createTheme: J(s4, a4), reset() {
        a4.reset(), c4.theme.toString();
      }, theme: {}, sheet: a4, config: s4, prefix: r5, getCssText: a4.toString, toString: a4.toString };
      return String(c4.theme = c4.createTheme(l4)), c4;
    });
    return t5 || r4.reset(), r4;
  })(e4);
  return t4.styled = (({ config: e5, sheet: t5 }) => Y(e5, () => {
    const r4 = M(e5, t5);
    return (...e6) => {
      const t6 = r4(...e6), n4 = t6[l].type, i4 = import_react5.default.forwardRef((e7, r5) => {
        const i5 = e7 && e7.as || n4, { props: o4, deferredInjector: l4 } = t6(e7);
        return delete o4.as, o4.ref = r5, l4 ? import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement(i5, o4), import_react5.default.createElement(l4, null)) : import_react5.default.createElement(i5, o4);
      });
      return i4.className = t6.className, i4.displayName = `Styled.${n4.displayName || n4.name || n4}`, i4.selector = t6.selector, i4.toString = () => t6.selector, i4[l] = t6[l], i4;
    };
  }))(t4), t4;
};

// node_modules/@radix-ui/react-tooltip/dist/index.module.js
var import_react18 = __toESM(require_react());

// node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-context/dist/index.module.js
var import_react6 = __toESM(require_react());
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = (0, import_react6.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context3 = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react6.useMemo)(
        () => context,
        Object.values(context)
      );
      return (0, import_react6.createElement)(Context3.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context3 = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react6.useContext)(Context3);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return (0, import_react6.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react6.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react6.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var import_react9 = __toESM(require_react());

// node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var import_react7 = __toESM(require_react());
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react7.useRef)(callback);
  (0, import_react7.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react7.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var import_react8 = __toESM(require_react());
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react8.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME = "DismissableLayer";
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = (0, import_react9.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = (0, import_react9.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react9.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react9.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react9.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch) return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer) return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react9.useEffect)(() => {
    if (!node1) return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react9.useEffect)(() => {
    return () => {
      if (!node1) return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react9.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
Object.assign($5cb92bef7577960e$export$177fb62ff3ec1f22, {
  displayName: $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME
});
var $5cb92bef7577960e$var$BRANCH_NAME = "DismissableLayerBranch";
var $5cb92bef7577960e$export$4d5eb2109db14228 = (0, import_react9.forwardRef)((props, forwardedRef) => {
  const context = (0, import_react9.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const ref = (0, import_react9.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react9.useEffect)(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [
    context.branches
  ]);
  return (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, props, {
    ref: composedRefs
  }));
});
Object.assign($5cb92bef7577960e$export$4d5eb2109db14228, {
  displayName: $5cb92bef7577960e$var$BRANCH_NAME
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react9.useRef)(false);
  const handleClickRef = (0, import_react9.useRef)(() => {
  });
  (0, import_react9.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, {
    once: true
  });
  if (discrete) $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-id/dist/index.module.js
var $2AODx$react = __toESM(require_react());

// node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var import_react10 = __toESM(require_react());
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react10.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId) setId(
      (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
    );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-popper/dist/index.module.js
var import_react14 = __toESM(require_react());

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  {
    if (platform2 == null) {
      console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
    }
    if (middleware.filter((_ref) => {
      let {
        name
      } = _ref;
      return name === "autoPlacement" || name === "flip";
    }).length > 1) {
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
    }
  }
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x3,
    y: y4
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i4 = 0; i4 < middleware.length; i4++) {
    const {
      name,
      fn
    } = middleware[i4];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x3,
      y: y4,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x3 = nextX != null ? nextX : x3;
    y4 = nextY != null ? nextY : y4;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    {
      if (resetCount > 50) {
        console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
      }
    }
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x3,
          y: y4
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i4 = -1;
      continue;
    }
  }
  return {
    x: x3,
    y: y4,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x3,
    y: y4,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? {
      ...rects.floating,
      x: x3,
      y: y4
    } : rects.reference,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x: x3,
      y: y4,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      {
        console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
      }
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x: x3,
      y: y4
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    const alignmentPadding = alignment === "start" ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset2 && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min3 ? min3 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
var sides = ["top", "right", "bottom", "left"];
var allPlacements = sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$map$so;
            const placement2 = (_overflowsData$map$so = overflowsData.map((d4) => [d4, d4.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b4) => a4[1] - b4[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(_temp) {
  let {
    strategy = "referenceHidden",
    ...detectOverflowOptions
  } = _temp === void 0 ? {} : _temp;
  return {
    name: "hide",
    async fn(middlewareArguments) {
      const {
        rects
      } = middlewareArguments;
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(middlewareArguments, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(middlewareArguments, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = middlewareArguments;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x: x3,
        y: y4
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x3 + diffCoords.x,
        y: y4 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x: x3,
        y: y4,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x4,
              y: y5
            } = _ref;
            return {
              x: x4,
              y: y5
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x: x3,
        y: y4
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x3,
          y: limitedCoords.y - y4
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(middlewareArguments) {
      const {
        x: x3,
        y: y4,
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = options;
      const coords = {
        x: x3,
        y: y4
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = typeof offset2 === "function" ? offset2({
        ...rects,
        placement
      }) : offset2;
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        availableHeight: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        availableWidth: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      const prevDimensions = await platform2.getDimensions(elements.floating);
      apply == null ? void 0 : apply({
        ...middlewareArguments,
        ...dimensions
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (prevDimensions.width !== nextDimensions.width || prevDimensions.height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs
function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function getUAString() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || // @ts-ignore (TS 4.1 compat)
  css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x3 = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y4 = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y4,
    right: x3 + width,
    bottom: y4 + height,
    left: x3,
    x: x3,
    y: y4
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(
    element,
    // @ts-ignore - checked above (TS 4.1 compat)
    isOffsetParentAnElement && isScaled(offsetParent),
    strategy === "fixed"
  );
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || // DOM Element detected
    (isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x3 = 0;
  let y4 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x3 = visualViewport.offsetLeft;
      y4 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x3 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y4 = -scroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x3 += max2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (["html", "body", "#document"].includes(getNodeName(parentNode))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : (
    // @ts-ignore: isBody tells us target will be an HTMLElement here
    updatedList.concat(getOverflowAncestors(target))
  );
}
function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element, strategy));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: {
        ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize: _ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestorResize = _ancestorResize && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }
      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => computePosition(reference, floating, {
  platform,
  ...options
});

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React = __toESM(require_react());
var import_react11 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var index = typeof document !== "undefined" ? import_react11.useLayoutEffect : import_react11.useEffect;
function deepEqual(a4, b4) {
  if (a4 === b4) {
    return true;
  }
  if (typeof a4 !== typeof b4) {
    return false;
  }
  if (typeof a4 === "function" && a4.toString() === b4.toString()) {
    return true;
  }
  let length, i4, keys;
  if (a4 && b4 && typeof a4 == "object") {
    if (Array.isArray(a4)) {
      length = a4.length;
      if (length != b4.length) return false;
      for (i4 = length; i4-- !== 0; ) {
        if (!deepEqual(a4[i4], b4[i4])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a4);
    length = keys.length;
    if (length !== Object.keys(b4).length) {
      return false;
    }
    for (i4 = length; i4-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b4, keys[i4])) {
        return false;
      }
    }
    for (i4 = length; i4-- !== 0; ) {
      const key = keys[i4];
      if (key === "_owner" && a4.$$typeof) {
        continue;
      }
      if (!deepEqual(a4[key], b4[key])) {
        return false;
      }
    }
    return true;
  }
  return a4 !== a4 && b4 !== b4;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(_temp) {
  let {
    middleware,
    placement = "bottom",
    strategy = "absolute",
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const reference = React.useRef(null);
  const floating = React.useRef(null);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const cleanupRef = React.useRef(null);
  const [data, setData] = React.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map((_ref) => {
    let {
      options
    } = _ref;
    return options;
  }), middleware == null ? void 0 : middleware.map((_ref2) => {
    let {
      options
    } = _ref2;
    return options;
  }))) {
    setLatestMiddleware(middleware);
  }
  const update = React.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }
    computePosition2(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then((data2) => {
      if (isMountedRef.current) {
        ReactDOM.flushSync(() => {
          setData(data2);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = React.useCallback(() => {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = React.useCallback((node) => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = React.useCallback((node) => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = React.useMemo(() => ({
    reference,
    floating
  }), []);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}
var arrow2 = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};

// node_modules/@radix-ui/react-arrow/dist/index.module.js
var import_react12 = __toESM(require_react());
var $7e8f5cd07187803e$var$NAME = "Arrow";
var $7e8f5cd07187803e$export$21b07c8f274aebd5 = (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props.asChild ? children : (0, import_react12.createElement)("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
Object.assign($7e8f5cd07187803e$export$21b07c8f274aebd5, {
  displayName: $7e8f5cd07187803e$var$NAME
});
var $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;

// node_modules/@radix-ui/react-use-size/dist/index.module.js
var import_react13 = __toESM(require_react());
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size2, setSize] = (0, import_react13.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) return;
        if (!entries.length) return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size2;
}

// node_modules/@radix-ui/react-popper/dist/index.module.js
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react14.useState)(null);
  return (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
Object.assign($cf1ac5d9fe0e8206$export$badac9ada3a0bdf9, {
  displayName: $cf1ac5d9fe0e8206$var$POPPER_NAME
});
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react14.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
Object.assign($cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d, {
  displayName: $cf1ac5d9fe0e8206$var$ANCHOR_NAME
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var [$cf1ac5d9fe0e8206$var$PositionContextProvider, $cf1ac5d9fe0e8206$var$usePositionContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, {
  hasParent: false,
  positionUpdateFns: /* @__PURE__ */ new Set()
});
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = (0, import_react14.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$hide, _middlewareData$trans, _middlewareData$trans2;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, avoidCollisions = true, onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react14.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow3, setArrow] = (0, import_react14.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow3);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { reference, floating, strategy, x: x3, y: y4, placement, middlewareData, update } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      $cf1ac5d9fe0e8206$var$anchorCssProperties(),
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions ? shift({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : void 0,
        ...detectOverflowOptions
      }) : void 0,
      arrow3 ? arrow2({
        element: arrow3,
        padding: arrowPadding
      }) : void 0,
      avoidCollisions ? flip({
        ...detectOverflowOptions
      }) : void 0,
      size({
        ...detectOverflowOptions,
        apply: ({ elements, availableWidth: width, availableHeight: height }) => {
          elements.floating.style.setProperty("--radix-popper-available-width", `${width}px`);
          elements.floating.style.setProperty("--radix-popper-available-height", `${height}px`);
        }
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached ? hide({
        strategy: "referenceHidden"
      }) : void 0
    ].filter($cf1ac5d9fe0e8206$var$isDefined)
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    reference(context.anchor);
  }, [
    reference,
    context.anchor
  ]);
  const isPlaced = x3 !== null && y4 !== null;
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPlaced) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPlaced,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react14.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const { hasParent, positionUpdateFns } = $cf1ac5d9fe0e8206$var$usePositionContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const isRoot = !hasParent;
  (0, import_react14.useLayoutEffect)(() => {
    if (!isRoot) {
      positionUpdateFns.add(update);
      return () => {
        positionUpdateFns.delete(update);
      };
    }
  }, [
    isRoot,
    positionUpdateFns,
    update
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isRoot && isPlaced) Array.from(positionUpdateFns).reverse().forEach(
      (fn) => requestAnimationFrame(fn)
    );
  }, [
    isRoot,
    isPlaced,
    positionUpdateFns
  ]);
  const commonProps = {
    "data-side": placedSide,
    "data-align": placedAlign,
    ...contentProps,
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPlaced ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  };
  return (0, import_react14.createElement)("div", {
    ref: floating,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: strategy,
      left: 0,
      top: 0,
      transform: isPlaced ? `translate3d(${Math.round(x3)}px, ${Math.round(y4)}px, 0)` : "translate3d(0, -200%, 0)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, isRoot ? (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PositionContextProvider, {
    scope: __scopePopper,
    hasParent: true,
    positionUpdateFns
  }, (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)) : (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)));
});
Object.assign($cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc, {
  displayName: $cf1ac5d9fe0e8206$var$CONTENT_NAME
});
var $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
var $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = (0, import_react14.forwardRef)(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_react14.createElement)("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, (0, import_react14.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
  displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
function $cf1ac5d9fe0e8206$var$isDefined(value) {
  return value !== void 0;
}
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$anchorCssProperties = () => ({
  name: "anchorCssProperties",
  fn(data) {
    const { rects, elements } = data;
    const { width, height } = rects.reference;
    elements.floating.style.setProperty("--radix-popper-anchor-width", `${width}px`);
    elements.floating.style.setProperty("--radix-popper-anchor-height", `${height}px`);
    return {};
  }
});
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x3 = "";
    let y4 = "";
    if (placedSide === "bottom") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y4 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y4 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x3 = `${-arrowHeight}px`;
      y4 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x3 = `${rects.floating.width + arrowHeight}px`;
      y4 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x: x3,
        y: y4
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
var $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;

// node_modules/@radix-ui/react-presence/dist/index.module.js
var import_react15 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());
function $fe963b355347cc68$export$3e6543de14f8614f(initialState2, machine) {
  return (0, import_react15.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState2);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react15.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? (0, import_react15.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react15.useState)();
  const stylesRef = (0, import_react15.useRef)({});
  const prevPresentRef = (0, import_react15.useRef)(present);
  const prevAnimationNameRef = (0, import_react15.useRef)("none");
  const initialState2 = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react15.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present) send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) send("ANIMATION_OUT");
        else send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom4.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react15.useCallback)((node) => {
      if (node) stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var import_react16 = __toESM(require_react());
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react16.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop) handleChange(value);
    } else setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react16.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react16.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react16.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-visually-hidden/dist/index.module.js
var import_react17 = __toESM(require_react());
var $ea1ef594cf570d83$var$NAME = "VisuallyHidden";
var $ea1ef594cf570d83$export$439d29a4e110a164 = (0, import_react17.forwardRef)((props, forwardedRef) => {
  return (0, import_react17.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
Object.assign($ea1ef594cf570d83$export$439d29a4e110a164, {
  displayName: $ea1ef594cf570d83$var$NAME
});
var $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;

// node_modules/@radix-ui/react-tooltip/dist/index.module.js
var [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
var $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION = 700;
var $a093c7e1ec25a057$var$TOOLTIP_OPEN = "tooltip.open";
var [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
var $a093c7e1ec25a057$export$f78649fb9ca566b8 = (props) => {
  const { __scopeTooltip, delayDuration = $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react18.useState)(true);
  const isPointerInTransitRef = (0, import_react18.useRef)(false);
  const skipDelayTimerRef = (0, import_react18.useRef)(0);
  (0, import_react18.useEffect)(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_react18.createElement)($a093c7e1ec25a057$var$TooltipProviderContextProvider, {
    scope: __scopeTooltip,
    isOpenDelayed,
    delayDuration,
    onOpen: (0, import_react18.useCallback)(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      setIsOpenDelayed(false);
    }, []),
    onClose: (0, import_react18.useCallback)(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      skipDelayTimerRef.current = window.setTimeout(
        () => setIsOpenDelayed(true),
        skipDelayDuration
      );
    }, [
      skipDelayDuration
    ]),
    isPointerInTransitRef,
    onPointerInTransitChange: (0, import_react18.useCallback)((inTransit) => {
      isPointerInTransitRef.current = inTransit;
    }, []),
    disableHoverableContent
  }, children);
};
Object.assign($a093c7e1ec25a057$export$f78649fb9ca566b8, {
  displayName: $a093c7e1ec25a057$var$PROVIDER_NAME
});
var $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
var [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
var $a093c7e1ec25a057$export$28c660c63b792dea = (props) => {
  const { __scopeTooltip, children, open: openProp, defaultOpen = false, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = (0, import_react18.useState)(null);
  const contentId = $1746a345f3d73bb7$export$f680877a34711e37();
  const openTimerRef = (0, import_react18.useRef)(0);
  const disableHoverableContent = disableHoverableContentProp !== null && disableHoverableContentProp !== void 0 ? disableHoverableContentProp : providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp !== null && delayDurationProp !== void 0 ? delayDurationProp : providerContext.delayDuration;
  const wasOpenDelayedRef = (0, import_react18.useRef)(false);
  const [open1 = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open) => {
      if (open) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
      } else providerContext.onClose();
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
    }
  });
  const stateAttribute = (0, import_react18.useMemo)(() => {
    return open1 ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [
    open1
  ]);
  const handleOpen = (0, import_react18.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [
    setOpen
  ]);
  const handleClose = (0, import_react18.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [
    setOpen
  ]);
  const handleDelayedOpen = (0, import_react18.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [
    delayDuration,
    setOpen
  ]);
  (0, import_react18.useEffect)(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return (0, import_react18.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react18.createElement)($a093c7e1ec25a057$var$TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open: open1,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: (0, import_react18.useCallback)(() => {
      if (providerContext.isOpenDelayed) handleDelayedOpen();
      else handleOpen();
    }, [
      providerContext.isOpenDelayed,
      handleDelayedOpen,
      handleOpen
    ]),
    onTriggerLeave: (0, import_react18.useCallback)(() => {
      if (disableHoverableContent) handleClose();
      else
        window.clearTimeout(openTimerRef.current);
    }, [
      handleClose,
      disableHoverableContent
    ]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent
  }, children));
};
Object.assign($a093c7e1ec25a057$export$28c660c63b792dea, {
  displayName: $a093c7e1ec25a057$var$TOOLTIP_NAME
});
var $a093c7e1ec25a057$var$TRIGGER_NAME = "TooltipTrigger";
var $a093c7e1ec25a057$export$8c610744efcf8a1d = (0, import_react18.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const ref = (0, import_react18.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onTriggerChange);
  const isPointerDownRef = (0, import_react18.useRef)(false);
  const hasPointerMoveOpenedRef = (0, import_react18.useRef)(false);
  const handlePointerUp = (0, import_react18.useCallback)(
    () => isPointerDownRef.current = false,
    []
  );
  (0, import_react18.useEffect)(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [
    handlePointerUp
  ]);
  return (0, import_react18.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), (0, import_react18.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": context.open ? context.contentId : void 0,
    "data-state": context.stateAttribute
  }, triggerProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      if (event.pointerType === "touch") return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, () => {
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, () => {
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, {
        once: true
      });
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      if (!isPointerDownRef.current) context.onOpen();
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onClose)
  })));
});
Object.assign($a093c7e1ec25a057$export$8c610744efcf8a1d, {
  displayName: $a093c7e1ec25a057$var$TRIGGER_NAME
});
var $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
var [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
  forceMount: void 0
});
var $a093c7e1ec25a057$export$7b36b8f925ab7497 = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, __scopeTooltip);
  return (0, import_react18.createElement)($a093c7e1ec25a057$var$PortalProvider, {
    scope: __scopeTooltip,
    forceMount
  }, (0, import_react18.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react18.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($a093c7e1ec25a057$export$7b36b8f925ab7497, {
  displayName: $a093c7e1ec25a057$var$PORTAL_NAME
});
var $a093c7e1ec25a057$var$CONTENT_NAME = "TooltipContent";
var $a093c7e1ec25a057$export$e9003e2be37ec060 = (0, import_react18.forwardRef)((props, forwardedRef) => {
  const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  return (0, import_react18.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.disableHoverableContent ? (0, import_react18.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })) : (0, import_react18.createElement)($a093c7e1ec25a057$var$TooltipContentHoverable, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })));
});
var $a093c7e1ec25a057$var$TooltipContentHoverable = (0, import_react18.forwardRef)((props, forwardedRef) => {
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const ref = (0, import_react18.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = (0, import_react18.useState)(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = (0, import_react18.useCallback)(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [
    onPointerInTransitChange
  ]);
  const handleCreateGraceArea = (0, import_react18.useCallback)((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const bleed = exitSide === "right" || exitSide === "bottom" ? -5 : 5;
    const isXAxis = exitSide === "right" || exitSide === "left";
    const startPoint = isXAxis ? {
      x: event.clientX + bleed,
      y: event.clientY
    } : {
      x: event.clientX,
      y: event.clientY + bleed
    };
    const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = $a093c7e1ec25a057$var$getHull([
      startPoint,
      ...hoverTargetPoints
    ]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [
    onPointerInTransitChange
  ]);
  (0, import_react18.useEffect)(() => {
    return () => handleRemoveGraceArea();
  }, [
    handleRemoveGraceArea
  ]);
  (0, import_react18.useEffect)(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [
    trigger,
    content,
    handleCreateGraceArea,
    handleRemoveGraceArea
  ]);
  (0, import_react18.useEffect)(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [
    trigger,
    content,
    pointerGraceArea,
    onClose,
    handleRemoveGraceArea
  ]);
  return (0, import_react18.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, _extends({}, props, {
    ref: composedRefs
  }));
});
var [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
  isInside: false
});
var $a093c7e1ec25a057$var$TooltipContentImpl = (0, import_react18.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const { onClose } = context;
  (0, import_react18.useEffect)(() => {
    document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
  }, [
    onClose
  ]);
  (0, import_react18.useEffect)(() => {
    if (context.trigger) {
      const handleScroll = (event) => {
        const target = event.target;
        if (target !== null && target !== void 0 && target.contains(context.trigger)) onClose();
      };
      window.addEventListener("scroll", handleScroll, {
        capture: true
      });
      return () => window.removeEventListener("scroll", handleScroll, {
        capture: true
      });
    }
  }, [
    context.trigger,
    onClose
  ]);
  return (0, import_react18.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose
  }, (0, import_react18.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": context.stateAttribute
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), (0, import_react18.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), (0, import_react18.createElement)($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
    scope: __scopeTooltip,
    isInside: true
  }, (0, import_react18.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    id: context.contentId,
    role: "tooltip"
  }, ariaLabel || children))));
});
Object.assign($a093c7e1ec25a057$export$e9003e2be37ec060, {
  displayName: $a093c7e1ec25a057$var$CONTENT_NAME
});
var $a093c7e1ec25a057$var$ARROW_NAME = "TooltipArrow";
var $a093c7e1ec25a057$export$c27ee0ad710f7559 = (0, import_react18.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, ...arrowProps } = props;
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const visuallyHiddenContentContext = $a093c7e1ec25a057$var$useVisuallyHiddenContentContext($a093c7e1ec25a057$var$ARROW_NAME, __scopeTooltip);
  return visuallyHiddenContentContext.isInside ? null : (0, import_react18.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($a093c7e1ec25a057$export$c27ee0ad710f7559, {
  displayName: $a093c7e1ec25a057$var$ARROW_NAME
});
function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      return null;
  }
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
  const { x: x3, y: y4 } = point;
  let inside = false;
  for (let i4 = 0, j3 = polygon.length - 1; i4 < polygon.length; j3 = i4++) {
    const xi = polygon[i4].x;
    const yi = polygon[i4].y;
    const xj = polygon[j3].x;
    const yj = polygon[j3].y;
    const intersect = yi > y4 !== yj > y4 && x3 < (xj - xi) * (y4 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function $a093c7e1ec25a057$var$getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a4, b4) => {
    if (a4.x < b4.x) return -1;
    else if (a4.x > b4.x) return 1;
    else if (a4.y < b4.y) return -1;
    else if (a4.y > b4.y) return 1;
    else return 0;
  });
  return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
}
function $a093c7e1ec25a057$var$getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i4 = 0; i4 < points.length; i4++) {
    const p4 = points[i4];
    while (upperHull.length >= 2) {
      const q3 = upperHull[upperHull.length - 1];
      const r4 = upperHull[upperHull.length - 2];
      if ((q3.x - r4.x) * (p4.y - r4.y) >= (q3.y - r4.y) * (p4.x - r4.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p4);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i1 = points.length - 1; i1 >= 0; i1--) {
    const p4 = points[i1];
    while (lowerHull.length >= 2) {
      const q3 = lowerHull[lowerHull.length - 1];
      const r4 = lowerHull[lowerHull.length - 2];
      if ((q3.x - r4.x) * (p4.y - r4.y) >= (q3.y - r4.y) * (p4.x - r4.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p4);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
var $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
var $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
var $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
var $a093c7e1ec25a057$export$21b07c8f274aebd5 = $a093c7e1ec25a057$export$c27ee0ad710f7559;

// node_modules/colord/index.mjs
var r2 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t2 = function(r4) {
  return "string" == typeof r4 ? r4.length > 0 : "number" == typeof r4;
};
var n2 = function(r4, t4, n4) {
  return void 0 === t4 && (t4 = 0), void 0 === n4 && (n4 = Math.pow(10, t4)), Math.round(n4 * r4) / n4 + 0;
};
var e2 = function(r4, t4, n4) {
  return void 0 === t4 && (t4 = 0), void 0 === n4 && (n4 = 1), r4 > n4 ? n4 : r4 > t4 ? r4 : t4;
};
var u2 = function(r4) {
  return (r4 = isFinite(r4) ? r4 % 360 : 0) > 0 ? r4 : r4 + 360;
};
var a2 = function(r4) {
  return { r: e2(r4.r, 0, 255), g: e2(r4.g, 0, 255), b: e2(r4.b, 0, 255), a: e2(r4.a) };
};
var o2 = function(r4) {
  return { r: n2(r4.r), g: n2(r4.g), b: n2(r4.b), a: n2(r4.a, 3) };
};
var i2 = /^#([0-9a-f]{3,8})$/i;
var s2 = function(r4) {
  var t4 = r4.toString(16);
  return t4.length < 2 ? "0" + t4 : t4;
};
var h2 = function(r4) {
  var t4 = r4.r, n4 = r4.g, e4 = r4.b, u4 = r4.a, a4 = Math.max(t4, n4, e4), o4 = a4 - Math.min(t4, n4, e4), i4 = o4 ? a4 === t4 ? (n4 - e4) / o4 : a4 === n4 ? 2 + (e4 - t4) / o4 : 4 + (t4 - n4) / o4 : 0;
  return { h: 60 * (i4 < 0 ? i4 + 6 : i4), s: a4 ? o4 / a4 * 100 : 0, v: a4 / 255 * 100, a: u4 };
};
var b2 = function(r4) {
  var t4 = r4.h, n4 = r4.s, e4 = r4.v, u4 = r4.a;
  t4 = t4 / 360 * 6, n4 /= 100, e4 /= 100;
  var a4 = Math.floor(t4), o4 = e4 * (1 - n4), i4 = e4 * (1 - (t4 - a4) * n4), s4 = e4 * (1 - (1 - t4 + a4) * n4), h4 = a4 % 6;
  return { r: 255 * [e4, i4, o4, o4, s4, e4][h4], g: 255 * [s4, e4, e4, i4, o4, o4][h4], b: 255 * [o4, o4, s4, e4, e4, i4][h4], a: u4 };
};
var g2 = function(r4) {
  return { h: u2(r4.h), s: e2(r4.s, 0, 100), l: e2(r4.l, 0, 100), a: e2(r4.a) };
};
var d2 = function(r4) {
  return { h: n2(r4.h), s: n2(r4.s), l: n2(r4.l), a: n2(r4.a, 3) };
};
var f2 = function(r4) {
  return b2((n4 = (t4 = r4).s, { h: t4.h, s: (n4 *= ((e4 = t4.l) < 50 ? e4 : 100 - e4) / 100) > 0 ? 2 * n4 / (e4 + n4) * 100 : 0, v: e4 + n4, a: t4.a }));
  var t4, n4, e4;
};
var c2 = function(r4) {
  return { h: (t4 = h2(r4)).h, s: (u4 = (200 - (n4 = t4.s)) * (e4 = t4.v) / 100) > 0 && u4 < 200 ? n4 * e4 / 100 / (u4 <= 100 ? u4 : 200 - u4) * 100 : 0, l: u4 / 2, a: t4.a };
  var t4, n4, e4, u4;
};
var l2 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p2 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v2 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m2 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y2 = { string: [[function(r4) {
  var t4 = i2.exec(r4);
  return t4 ? (r4 = t4[1]).length <= 4 ? { r: parseInt(r4[0] + r4[0], 16), g: parseInt(r4[1] + r4[1], 16), b: parseInt(r4[2] + r4[2], 16), a: 4 === r4.length ? n2(parseInt(r4[3] + r4[3], 16) / 255, 2) : 1 } : 6 === r4.length || 8 === r4.length ? { r: parseInt(r4.substr(0, 2), 16), g: parseInt(r4.substr(2, 2), 16), b: parseInt(r4.substr(4, 2), 16), a: 8 === r4.length ? n2(parseInt(r4.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r4) {
  var t4 = v2.exec(r4) || m2.exec(r4);
  return t4 ? t4[2] !== t4[4] || t4[4] !== t4[6] ? null : a2({ r: Number(t4[1]) / (t4[2] ? 100 / 255 : 1), g: Number(t4[3]) / (t4[4] ? 100 / 255 : 1), b: Number(t4[5]) / (t4[6] ? 100 / 255 : 1), a: void 0 === t4[7] ? 1 : Number(t4[7]) / (t4[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t4) {
  var n4 = l2.exec(t4) || p2.exec(t4);
  if (!n4) return null;
  var e4, u4, a4 = g2({ h: (e4 = n4[1], u4 = n4[2], void 0 === u4 && (u4 = "deg"), Number(e4) * (r2[u4] || 1)), s: Number(n4[3]), l: Number(n4[4]), a: void 0 === n4[5] ? 1 : Number(n4[5]) / (n4[6] ? 100 : 1) });
  return f2(a4);
}, "hsl"]], object: [[function(r4) {
  var n4 = r4.r, e4 = r4.g, u4 = r4.b, o4 = r4.a, i4 = void 0 === o4 ? 1 : o4;
  return t2(n4) && t2(e4) && t2(u4) ? a2({ r: Number(n4), g: Number(e4), b: Number(u4), a: Number(i4) }) : null;
}, "rgb"], [function(r4) {
  var n4 = r4.h, e4 = r4.s, u4 = r4.l, a4 = r4.a, o4 = void 0 === a4 ? 1 : a4;
  if (!t2(n4) || !t2(e4) || !t2(u4)) return null;
  var i4 = g2({ h: Number(n4), s: Number(e4), l: Number(u4), a: Number(o4) });
  return f2(i4);
}, "hsl"], [function(r4) {
  var n4 = r4.h, a4 = r4.s, o4 = r4.v, i4 = r4.a, s4 = void 0 === i4 ? 1 : i4;
  if (!t2(n4) || !t2(a4) || !t2(o4)) return null;
  var h4 = function(r5) {
    return { h: u2(r5.h), s: e2(r5.s, 0, 100), v: e2(r5.v, 0, 100), a: e2(r5.a) };
  }({ h: Number(n4), s: Number(a4), v: Number(o4), a: Number(s4) });
  return b2(h4);
}, "hsv"]] };
var N2 = function(r4, t4) {
  for (var n4 = 0; n4 < t4.length; n4++) {
    var e4 = t4[n4][0](r4);
    if (e4) return [e4, t4[n4][1]];
  }
  return [null, void 0];
};
var x2 = function(r4) {
  return "string" == typeof r4 ? N2(r4.trim(), y2.string) : "object" == typeof r4 && null !== r4 ? N2(r4, y2.object) : [null, void 0];
};
var I2 = function(r4) {
  return x2(r4)[1];
};
var M2 = function(r4, t4) {
  var n4 = c2(r4);
  return { h: n4.h, s: e2(n4.s + 100 * t4, 0, 100), l: n4.l, a: n4.a };
};
var H2 = function(r4) {
  return (299 * r4.r + 587 * r4.g + 114 * r4.b) / 1e3 / 255;
};
var $2 = function(r4, t4) {
  var n4 = c2(r4);
  return { h: n4.h, s: n4.s, l: e2(n4.l + 100 * t4, 0, 100), a: n4.a };
};
var j2 = function() {
  function r4(r5) {
    this.parsed = x2(r5)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r4.prototype.isValid = function() {
    return null !== this.parsed;
  }, r4.prototype.brightness = function() {
    return n2(H2(this.rgba), 2);
  }, r4.prototype.isDark = function() {
    return H2(this.rgba) < 0.5;
  }, r4.prototype.isLight = function() {
    return H2(this.rgba) >= 0.5;
  }, r4.prototype.toHex = function() {
    return r5 = o2(this.rgba), t4 = r5.r, e4 = r5.g, u4 = r5.b, i4 = (a4 = r5.a) < 1 ? s2(n2(255 * a4)) : "", "#" + s2(t4) + s2(e4) + s2(u4) + i4;
    var r5, t4, e4, u4, a4, i4;
  }, r4.prototype.toRgb = function() {
    return o2(this.rgba);
  }, r4.prototype.toRgbString = function() {
    return r5 = o2(this.rgba), t4 = r5.r, n4 = r5.g, e4 = r5.b, (u4 = r5.a) < 1 ? "rgba(" + t4 + ", " + n4 + ", " + e4 + ", " + u4 + ")" : "rgb(" + t4 + ", " + n4 + ", " + e4 + ")";
    var r5, t4, n4, e4, u4;
  }, r4.prototype.toHsl = function() {
    return d2(c2(this.rgba));
  }, r4.prototype.toHslString = function() {
    return r5 = d2(c2(this.rgba)), t4 = r5.h, n4 = r5.s, e4 = r5.l, (u4 = r5.a) < 1 ? "hsla(" + t4 + ", " + n4 + "%, " + e4 + "%, " + u4 + ")" : "hsl(" + t4 + ", " + n4 + "%, " + e4 + "%)";
    var r5, t4, n4, e4, u4;
  }, r4.prototype.toHsv = function() {
    return r5 = h2(this.rgba), { h: n2(r5.h), s: n2(r5.s), v: n2(r5.v), a: n2(r5.a, 3) };
    var r5;
  }, r4.prototype.invert = function() {
    return w2({ r: 255 - (r5 = this.rgba).r, g: 255 - r5.g, b: 255 - r5.b, a: r5.a });
    var r5;
  }, r4.prototype.saturate = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2(M2(this.rgba, r5));
  }, r4.prototype.desaturate = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2(M2(this.rgba, -r5));
  }, r4.prototype.grayscale = function() {
    return w2(M2(this.rgba, -1));
  }, r4.prototype.lighten = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2($2(this.rgba, r5));
  }, r4.prototype.darken = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2($2(this.rgba, -r5));
  }, r4.prototype.rotate = function(r5) {
    return void 0 === r5 && (r5 = 15), this.hue(this.hue() + r5);
  }, r4.prototype.alpha = function(r5) {
    return "number" == typeof r5 ? w2({ r: (t4 = this.rgba).r, g: t4.g, b: t4.b, a: r5 }) : n2(this.rgba.a, 3);
    var t4;
  }, r4.prototype.hue = function(r5) {
    var t4 = c2(this.rgba);
    return "number" == typeof r5 ? w2({ h: r5, s: t4.s, l: t4.l, a: t4.a }) : n2(t4.h);
  }, r4.prototype.isEqual = function(r5) {
    return this.toHex() === w2(r5).toHex();
  }, r4;
}();
var w2 = function(r4) {
  return r4 instanceof j2 ? r4 : new j2(r4);
};
var S2 = [];
var k2 = function(r4) {
  r4.forEach(function(r5) {
    S2.indexOf(r5) < 0 && (r5(j2, y2), S2.push(r5));
  });
};

// node_modules/colord/plugins/names.mjs
function names_default(e4, f4) {
  var a4 = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r4 = {};
  for (var d4 in a4) r4[a4[d4]] = d4;
  var l4 = {};
  e4.prototype.toName = function(f5) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var d5, i4, n4 = r4[this.toHex()];
    if (n4) return n4;
    if (null == f5 ? void 0 : f5.closest) {
      var o4 = this.toRgb(), t4 = 1 / 0, b4 = "black";
      if (!l4.length) for (var c4 in a4) l4[c4] = new e4(a4[c4]).toRgb();
      for (var g4 in a4) {
        var u4 = (d5 = o4, i4 = l4[g4], Math.pow(d5.r - i4.r, 2) + Math.pow(d5.g - i4.g, 2) + Math.pow(d5.b - i4.b, 2));
        u4 < t4 && (t4 = u4, b4 = g4);
      }
      return b4;
    }
  };
  f4.string.push([function(f5) {
    var r5 = f5.toLowerCase(), d5 = "transparent" === r5 ? "#0000" : a4[r5];
    return d5 ? new e4(d5).toRgb() : null;
  }, "name"]);
}

// node_modules/react-colorful/dist/index.mjs
var import_react19 = __toESM(require_react(), 1);
function u3() {
  return (u3 = Object.assign || function(e4) {
    for (var r4 = 1; r4 < arguments.length; r4++) {
      var t4 = arguments[r4];
      for (var n4 in t4) Object.prototype.hasOwnProperty.call(t4, n4) && (e4[n4] = t4[n4]);
    }
    return e4;
  }).apply(this, arguments);
}
function c3(e4, r4) {
  if (null == e4) return {};
  var t4, n4, o4 = {}, a4 = Object.keys(e4);
  for (n4 = 0; n4 < a4.length; n4++) r4.indexOf(t4 = a4[n4]) >= 0 || (o4[t4] = e4[t4]);
  return o4;
}
function i3(e4) {
  var t4 = (0, import_react19.useRef)(e4), n4 = (0, import_react19.useRef)(function(e5) {
    t4.current && t4.current(e5);
  });
  return t4.current = e4, n4.current;
}
var s3 = function(e4, r4, t4) {
  return void 0 === r4 && (r4 = 0), void 0 === t4 && (t4 = 1), e4 > t4 ? t4 : e4 < r4 ? r4 : e4;
};
var f3 = function(e4) {
  return "touches" in e4;
};
var v3 = function(e4) {
  return e4 && e4.ownerDocument.defaultView || self;
};
var d3 = function(e4, r4, t4) {
  var n4 = e4.getBoundingClientRect(), o4 = f3(r4) ? function(e5, r5) {
    for (var t5 = 0; t5 < e5.length; t5++) if (e5[t5].identifier === r5) return e5[t5];
    return e5[0];
  }(r4.touches, t4) : r4;
  return { left: s3((o4.pageX - (n4.left + v3(e4).pageXOffset)) / n4.width), top: s3((o4.pageY - (n4.top + v3(e4).pageYOffset)) / n4.height) };
};
var h3 = function(e4) {
  !f3(e4) && e4.preventDefault();
};
var m3 = import_react19.default.memo(function(o4) {
  var a4 = o4.onMove, l4 = o4.onKey, s4 = c3(o4, ["onMove", "onKey"]), m4 = (0, import_react19.useRef)(null), g4 = i3(a4), p4 = i3(l4), b4 = (0, import_react19.useRef)(null), _2 = (0, import_react19.useRef)(false), x3 = (0, import_react19.useMemo)(function() {
    var e4 = function(e5) {
      h3(e5), (f3(e5) ? e5.touches.length > 0 : e5.buttons > 0) && m4.current ? g4(d3(m4.current, e5, b4.current)) : t4(false);
    }, r4 = function() {
      return t4(false);
    };
    function t4(t5) {
      var n4 = _2.current, o5 = v3(m4.current), a5 = t5 ? o5.addEventListener : o5.removeEventListener;
      a5(n4 ? "touchmove" : "mousemove", e4), a5(n4 ? "touchend" : "mouseup", r4);
    }
    return [function(e5) {
      var r5 = e5.nativeEvent, n4 = m4.current;
      if (n4 && (h3(r5), !function(e6, r6) {
        return r6 && !f3(e6);
      }(r5, _2.current) && n4)) {
        if (f3(r5)) {
          _2.current = true;
          var o5 = r5.changedTouches || [];
          o5.length && (b4.current = o5[0].identifier);
        }
        n4.focus(), g4(d3(n4, r5, b4.current)), t4(true);
      }
    }, function(e5) {
      var r5 = e5.which || e5.keyCode;
      r5 < 37 || r5 > 40 || (e5.preventDefault(), p4({ left: 39 === r5 ? 0.05 : 37 === r5 ? -0.05 : 0, top: 40 === r5 ? 0.05 : 38 === r5 ? -0.05 : 0 }));
    }, t4];
  }, [p4, g4]), C2 = x3[0], E2 = x3[1], H3 = x3[2];
  return (0, import_react19.useEffect)(function() {
    return H3;
  }, [H3]), import_react19.default.createElement("div", u3({}, s4, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m4, onKeyDown: E2, tabIndex: 0, role: "slider" }));
});
var g3 = function(e4) {
  return e4.filter(Boolean).join(" ");
};
var p3 = function(r4) {
  var t4 = r4.color, n4 = r4.left, o4 = r4.top, a4 = void 0 === o4 ? 0.5 : o4, l4 = g3(["react-colorful__pointer", r4.className]);
  return import_react19.default.createElement("div", { className: l4, style: { top: 100 * a4 + "%", left: 100 * n4 + "%" } }, import_react19.default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t4 } }));
};
var b3 = function(e4, r4, t4) {
  return void 0 === r4 && (r4 = 0), void 0 === t4 && (t4 = Math.pow(10, r4)), Math.round(t4 * e4) / t4;
};
var _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var y3 = function(e4) {
  var r4 = e4.s, t4 = e4.v, n4 = e4.a, o4 = (200 - r4) * t4 / 100;
  return { h: b3(e4.h), s: b3(o4 > 0 && o4 < 200 ? r4 * t4 / 100 / (o4 <= 100 ? o4 : 200 - o4) * 100 : 0), l: b3(o4 / 2), a: b3(n4, 2) };
};
var q2 = function(e4) {
  var r4 = y3(e4);
  return "hsl(" + r4.h + ", " + r4.s + "%, " + r4.l + "%)";
};
var k3 = function(e4) {
  var r4 = y3(e4);
  return "hsla(" + r4.h + ", " + r4.s + "%, " + r4.l + "%, " + r4.a + ")";
};
var I3 = function(e4) {
  var r4 = e4.h, t4 = e4.s, n4 = e4.v, o4 = e4.a;
  r4 = r4 / 360 * 6, t4 /= 100, n4 /= 100;
  var a4 = Math.floor(r4), l4 = n4 * (1 - t4), u4 = n4 * (1 - (r4 - a4) * t4), c4 = n4 * (1 - (1 - r4 + a4) * t4), i4 = a4 % 6;
  return { r: b3(255 * [n4, u4, l4, l4, c4, n4][i4]), g: b3(255 * [c4, n4, n4, u4, l4, l4][i4]), b: b3(255 * [l4, l4, c4, n4, n4, u4][i4]), a: b3(o4, 2) };
};
var L2 = function(e4) {
  var r4 = e4.r, t4 = e4.g, n4 = e4.b, o4 = e4.a, a4 = Math.max(r4, t4, n4), l4 = a4 - Math.min(r4, t4, n4), u4 = l4 ? a4 === r4 ? (t4 - n4) / l4 : a4 === t4 ? 2 + (n4 - r4) / l4 : 4 + (r4 - t4) / l4 : 0;
  return { h: b3(60 * (u4 < 0 ? u4 + 6 : u4)), s: b3(a4 ? l4 / a4 * 100 : 0), v: b3(a4 / 255 * 100), a: o4 };
};
var S3 = import_react19.default.memo(function(r4) {
  var t4 = r4.hue, n4 = r4.onChange, o4 = g3(["react-colorful__hue", r4.className]);
  return import_react19.default.createElement("div", { className: o4 }, import_react19.default.createElement(m3, { onMove: function(e4) {
    n4({ h: 360 * e4.left });
  }, onKey: function(e4) {
    n4({ h: s3(t4 + 360 * e4.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": b3(t4), "aria-valuemax": "360", "aria-valuemin": "0" }, import_react19.default.createElement(p3, { className: "react-colorful__hue-pointer", left: t4 / 360, color: q2({ h: t4, s: 100, v: 100, a: 1 }) })));
});
var T2 = import_react19.default.memo(function(r4) {
  var t4 = r4.hsva, n4 = r4.onChange, o4 = { backgroundColor: q2({ h: t4.h, s: 100, v: 100, a: 1 }) };
  return import_react19.default.createElement("div", { className: "react-colorful__saturation", style: o4 }, import_react19.default.createElement(m3, { onMove: function(e4) {
    n4({ s: 100 * e4.left, v: 100 - 100 * e4.top });
  }, onKey: function(e4) {
    n4({ s: s3(t4.s + 100 * e4.left, 0, 100), v: s3(t4.v - 100 * e4.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b3(t4.s) + "%, Brightness " + b3(t4.v) + "%" }, import_react19.default.createElement(p3, { className: "react-colorful__saturation-pointer", top: 1 - t4.v / 100, left: t4.s / 100, color: q2(t4) })));
});
var F2 = function(e4, r4) {
  if (e4 === r4) return true;
  for (var t4 in e4) if (e4[t4] !== r4[t4]) return false;
  return true;
};
function Y2(e4, t4, l4) {
  var u4 = i3(l4), c4 = (0, import_react19.useState)(function() {
    return e4.toHsva(t4);
  }), s4 = c4[0], f4 = c4[1], v4 = (0, import_react19.useRef)({ color: t4, hsva: s4 });
  (0, import_react19.useEffect)(function() {
    if (!e4.equal(t4, v4.current.color)) {
      var r4 = e4.toHsva(t4);
      v4.current = { hsva: r4, color: t4 }, f4(r4);
    }
  }, [t4, e4]), (0, import_react19.useEffect)(function() {
    var r4;
    F2(s4, v4.current.hsva) || e4.equal(r4 = e4.fromHsva(s4), v4.current.color) || (v4.current = { hsva: s4, color: r4 }, u4(r4));
  }, [s4, e4, u4]);
  var d4 = (0, import_react19.useCallback)(function(e5) {
    f4(function(r4) {
      return Object.assign({}, r4, e5);
    });
  }, []);
  return [s4, d4];
}
var R2;
var V2 = "undefined" != typeof window ? import_react19.useLayoutEffect : import_react19.useEffect;
var $3 = function() {
  return R2 || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
};
var J2 = /* @__PURE__ */ new Map();
var Q = function(e4) {
  V2(function() {
    var r4 = e4.current ? e4.current.ownerDocument : document;
    if (void 0 !== r4 && !J2.has(r4)) {
      var t4 = r4.createElement("style");
      t4.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J2.set(r4, t4);
      var n4 = $3();
      n4 && t4.setAttribute("nonce", n4), r4.head.appendChild(t4);
    }
  }, []);
};
var U2 = function(t4) {
  var n4 = t4.className, o4 = t4.colorModel, a4 = t4.color, l4 = void 0 === a4 ? o4.defaultColor : a4, i4 = t4.onChange, s4 = c3(t4, ["className", "colorModel", "color", "onChange"]), f4 = (0, import_react19.useRef)(null);
  Q(f4);
  var v4 = Y2(o4, l4, i4), d4 = v4[0], h4 = v4[1], m4 = g3(["react-colorful", n4]);
  return import_react19.default.createElement("div", u3({}, s4, { ref: f4, className: m4 }), import_react19.default.createElement(T2, { hsva: d4, onChange: h4 }), import_react19.default.createElement(S3, { hue: d4.h, onChange: h4, className: "react-colorful__last-control" }));
};
var ee = function(r4) {
  var t4 = r4.className, n4 = r4.hsva, o4 = r4.onChange, a4 = { backgroundImage: "linear-gradient(90deg, " + k3(Object.assign({}, n4, { a: 0 })) + ", " + k3(Object.assign({}, n4, { a: 1 })) + ")" }, l4 = g3(["react-colorful__alpha", t4]), u4 = b3(100 * n4.a);
  return import_react19.default.createElement("div", { className: l4 }, import_react19.default.createElement("div", { className: "react-colorful__alpha-gradient", style: a4 }), import_react19.default.createElement(m3, { onMove: function(e4) {
    o4({ a: e4.left });
  }, onKey: function(e4) {
    o4({ a: s3(n4.a + e4.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u4 + "%", "aria-valuenow": u4, "aria-valuemin": "0", "aria-valuemax": "100" }, import_react19.default.createElement(p3, { className: "react-colorful__alpha-pointer", left: n4.a, color: k3(n4) })));
};
var re = function(t4) {
  var n4 = t4.className, o4 = t4.colorModel, a4 = t4.color, l4 = void 0 === a4 ? o4.defaultColor : a4, i4 = t4.onChange, s4 = c3(t4, ["className", "colorModel", "color", "onChange"]), f4 = (0, import_react19.useRef)(null);
  Q(f4);
  var v4 = Y2(o4, l4, i4), d4 = v4[0], h4 = v4[1], m4 = g3(["react-colorful", n4]);
  return import_react19.default.createElement("div", u3({}, s4, { ref: f4, className: m4 }), import_react19.default.createElement(T2, { hsva: d4, onChange: h4 }), import_react19.default.createElement(S3, { hue: d4.h, onChange: h4 }), import_react19.default.createElement(ee, { hsva: d4, onChange: h4, className: "react-colorful__last-control" }));
};
var xe = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: L2, fromHsva: I3, equal: F2 };
var Ce = function(r4) {
  return import_react19.default.createElement(re, u3({}, r4, { colorModel: xe }));
};
var Me = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e4) {
  return L2({ r: e4.r, g: e4.g, b: e4.b, a: 1 });
}, fromHsva: function(e4) {
  return { r: (r4 = I3(e4)).r, g: r4.g, b: r4.b };
  var r4;
}, equal: F2 };
var Ne = function(r4) {
  return import_react19.default.createElement(U2, u3({}, r4, { colorModel: Me }));
};

// node_modules/react-dropzone/dist/es/index.js
var import_react20 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t4[0] & 1) throw t4[1];
    return t4[1];
  }, trys: [], ops: [] }, f4, y4, t4, g4 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g4.next = verb(0), g4["throw"] = verb(1), g4["return"] = verb(2), typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
    return this;
  }), g4;
  function verb(n4) {
    return function(v4) {
      return step([n4, v4]);
    };
  }
  function step(op) {
    if (f4) throw new TypeError("Generator is already executing.");
    while (g4 && (g4 = 0, op[0] && (_2 = 0)), _2) try {
      if (f4 = 1, y4 && (t4 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t4 = y4["return"]) && t4.call(y4), 0) : y4.next) && !(t4 = t4.call(y4, op[1])).done) return t4;
      if (y4 = 0, t4) op = [op[0] & 2, t4.value];
      switch (op[0]) {
        case 0:
        case 1:
          t4 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y4 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t4 = _2.trys, t4 = t4.length > 0 && t4[t4.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t4 || op[1] > t4[0] && op[1] < t4[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t4[1]) {
            _2.label = t4[1];
            t4 = op;
            break;
          }
          if (t4 && _2.label < t4[2]) {
            _2.label = t4[2];
            _2.ops.push(op);
            break;
          }
          if (t4[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e4) {
      op = [6, e4];
      y4 = 0;
    } finally {
      f4 = t4 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o4, n4) {
  var m4 = typeof Symbol === "function" && o4[Symbol.iterator];
  if (!m4) return o4;
  var i4 = m4.call(o4), r4, ar = [], e4;
  try {
    while ((n4 === void 0 || n4-- > 0) && !(r4 = i4.next()).done) ar.push(r4.value);
  } catch (error) {
    e4 = { error };
  } finally {
    try {
      if (r4 && !r4.done && (m4 = i4["return"])) m4.call(i4);
    } finally {
      if (e4) throw e4.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i4 = 0; i4 < arguments.length; i4++)
    ar = ar.concat(__read(arguments[i4]));
  return ar;
}

// node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f4 = withMimeType(file);
  if (typeof f4.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f4, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f4;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v4) {
  return typeof v4 === "object" && v4 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h4) {
            return h4.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items) return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i4 = 0; i4 < items.length; i4++) {
    var file = items[i4];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length) return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/react-dropzone/dist/es/utils/index.js
var import_attr_accept = __toESM(require_es());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = null != arguments[i4] ? arguments[i4] : {};
    i4 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i4) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i4) || _unsupportedIterableToArray(arr, i4) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o4, minLen) {
  if (!o4) return;
  if (typeof o4 === "string") return _arrayLikeToArray(o4, minLen);
  var n4 = Object.prototype.toString.call(o4).slice(8, -1);
  if (n4 === "Object" && o4.constructor) n4 = o4.constructor.name;
  if (n4 === "Map" || n4 === "Set") return Array.from(o4);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4)) return _arrayLikeToArray(o4, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
    arr2[i4] = arr[i4];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i4) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i4 && _arr.length === i4) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(accept) ? (
      // Accept just MIME types as per spec
      // NOTE: accept can be https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
      accept.filter(function(item) {
        return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
      }).reduce(function(a4, b4) {
        return _objectSpread(_objectSpread({}, a4), {}, _defineProperty({}, b4, []));
      }, {})
    ) : {}
  }];
}
function isAbort(v4) {
  return v4 instanceof DOMException && (v4.name === "AbortError" || v4.code === v4.ABORT_ERR);
}
function isSecurityError(v4) {
  return v4 instanceof DOMException && (v4.name === "SecurityError" || v4.code === v4.SECURITY_ERR);
}

// node_modules/react-dropzone/dist/es/index.js
var _excluded = ["children"];
var _excluded2 = ["open"];
var _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray2(arr);
}
function _slicedToArray2(arr, i4) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i4) || _unsupportedIterableToArray2(arr, i4) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o4, minLen) {
  if (!o4) return;
  if (typeof o4 === "string") return _arrayLikeToArray2(o4, minLen);
  var n4 = Object.prototype.toString.call(o4).slice(8, -1);
  if (n4 === "Object" && o4.constructor) n4 = o4.constructor.name;
  if (n4 === "Map" || n4 === "Set") return Array.from(o4);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4)) return _arrayLikeToArray2(o4, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
    arr2[i4] = arr[i4];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i4) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i4 && _arr.length === i4) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = null != arguments[i4] ? arguments[i4] : {};
    i4 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i4;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i4 = 0; i4 < sourceSymbolKeys.length; i4++) {
      key = sourceSymbolKeys[i4];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = (0, import_react20.forwardRef)(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
  (0, import_react20.useImperativeHandle)(ref, function() {
    return {
      open
    };
  }, [open]);
  return import_react20.default.createElement(import_react20.Fragment, null, children(_objectSpread2(_objectSpread2({}, props), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: import_prop_types.default.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: import_prop_types.default.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: import_prop_types.default.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: import_prop_types.default.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: import_prop_types.default.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: import_prop_types.default.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: import_prop_types.default.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: import_prop_types.default.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: import_prop_types.default.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: import_prop_types.default.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: import_prop_types.default.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: import_prop_types.default.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: import_prop_types.default.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: import_prop_types.default.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: import_prop_types.default.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: import_prop_types.default.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: import_prop_types.default.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: import_prop_types.default.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: import_prop_types.default.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread2(_objectSpread2({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = (0, import_react20.useMemo)(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = (0, import_react20.useMemo)(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = (0, import_react20.useRef)(null);
  var inputRef = (0, import_react20.useRef)(null);
  var _useReducer = (0, import_react20.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var fsAccessApiWorksRef = (0, import_react20.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  (0, import_react20.useEffect)(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = (0, import_react20.useRef)([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  (0, import_react20.useEffect)(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = (0, import_react20.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = (0, import_react20.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0, import_react20.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = (0, import_react20.useCallback)(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e4) {
            return e4;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = (0, import_react20.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = (0, import_react20.useCallback)(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e4) {
        if (isAbort(e4)) {
          onFileDialogCancelCb(e4);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e4)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          }
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = (0, import_react20.useCallback)(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = (0, import_react20.useCallback)(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = (0, import_react20.useCallback)(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = (0, import_react20.useCallback)(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = (0, import_react20.useMemo)(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread2(_objectSpread2(_defineProperty2({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0, import_react20.useCallback)(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0, import_react20.useMemo)(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty2({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread2(_objectSpread2({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread2(_objectSpread2({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread2(_objectSpread2({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread2(_objectSpread2({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread2({}, initialState);
    default:
      return state;
  }
}
function noop() {
}

export {
  $f1701beae083dbae$export$be92b6f5f03c0fe9,
  dequal,
  v8n_esm_default,
  q,
  $a093c7e1ec25a057$export$be92b6f5f03c0fe9,
  $a093c7e1ec25a057$export$41fb9f06171c75f4,
  $a093c7e1ec25a057$export$7c6e2c02157bb7d2,
  $a093c7e1ec25a057$export$21b07c8f274aebd5,
  I2 as I,
  w2 as w,
  k2 as k,
  names_default,
  Ce,
  Ne,
  useDropzone,
  require_merge_value
};
/*! Bundled license information:

isobject/index.js:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-plain-object/index.js:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

for-in/index.js:
  (*!
   * for-in <https://github.com/jonschlinkert/for-in>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

get-value/index.js:
  (*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

assign-symbols/index.js:
  (*!
   * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

split-string/index.js:
  (*!
   * split-string <https://github.com/jonschlinkert/split-string>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

set-value/index.js:
  (*!
   * set-value <https://github.com/jonschlinkert/set-value>
   *
   * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=chunk-6YKWUWYM.js.map
