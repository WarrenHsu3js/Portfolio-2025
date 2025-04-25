import {
  $a093c7e1ec25a057$export$21b07c8f274aebd5,
  $a093c7e1ec25a057$export$41fb9f06171c75f4,
  $a093c7e1ec25a057$export$7c6e2c02157bb7d2,
  $a093c7e1ec25a057$export$be92b6f5f03c0fe9,
  $f1701beae083dbae$export$be92b6f5f03c0fe9,
  Ce,
  I,
  Ne,
  dequal,
  k,
  names_default,
  q,
  require_merge_value,
  useDropzone,
  v8n_esm_default,
  w
} from "./chunk-6YKWUWYM.js";
import {
  useDrag
} from "./chunk-NZGN3PNQ.js";
import {
  require_client
} from "./chunk-LRZGMRQ3.js";
import {
  create
} from "./chunk-SGTNUUKV.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/leva/dist/vector-plugin-a4ae7e76.esm.js
var import_react = __toESM(require_react());

// node_modules/zustand/esm/shallow.js
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// node_modules/leva/dist/vector-plugin-a4ae7e76.esm.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var LevaErrors;
(function(LevaErrors2) {
  LevaErrors2[LevaErrors2["UNSUPPORTED_INPUT"] = 0] = "UNSUPPORTED_INPUT";
  LevaErrors2[LevaErrors2["NO_COMPONENT_FOR_TYPE"] = 1] = "NO_COMPONENT_FOR_TYPE";
  LevaErrors2[LevaErrors2["UNKNOWN_INPUT"] = 2] = "UNKNOWN_INPUT";
  LevaErrors2[LevaErrors2["DUPLICATE_KEYS"] = 3] = "DUPLICATE_KEYS";
  LevaErrors2[LevaErrors2["ALREADY_REGISTERED_TYPE"] = 4] = "ALREADY_REGISTERED_TYPE";
  LevaErrors2[LevaErrors2["CLIPBOARD_ERROR"] = 5] = "CLIPBOARD_ERROR";
  LevaErrors2[LevaErrors2["THEME_ERROR"] = 6] = "THEME_ERROR";
  LevaErrors2[LevaErrors2["PATH_DOESNT_EXIST"] = 7] = "PATH_DOESNT_EXIST";
  LevaErrors2[LevaErrors2["INPUT_TYPE_OVERRIDE"] = 8] = "INPUT_TYPE_OVERRIDE";
  LevaErrors2[LevaErrors2["EMPTY_KEY"] = 9] = "EMPTY_KEY";
})(LevaErrors || (LevaErrors = {}));
var ErrorList = {
  [LevaErrors.UNSUPPORTED_INPUT]: (type, path) => [`An input with type \`${type}\` input was found at path \`${path}\` but it's not supported yet.`],
  [LevaErrors.NO_COMPONENT_FOR_TYPE]: (type, path) => [`Type \`${type}\` found at path \`${path}\` can't be displayed in panel because no component supports it yet.`],
  [LevaErrors.UNKNOWN_INPUT]: (path, value) => [`input at path \`${path}\` is not recognized.`, value],
  [LevaErrors.DUPLICATE_KEYS]: (key, path, prevPath) => [`Key \`${key}\` of path \`${path}\` already exists at path \`${prevPath}\`. Even nested keys need to be unique. Rename one of the keys.`],
  [LevaErrors.ALREADY_REGISTERED_TYPE]: (type) => [`Type ${type} has already been registered. You can't register a component with the same type.`],
  [LevaErrors.CLIPBOARD_ERROR]: (value) => [`Error copying the value`, value],
  [LevaErrors.THEME_ERROR]: (category, key) => [`Error accessing the theme \`${category}.${key}\` value.`],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => [`Error getting the value at path \`${path}\`. There is probably an error in your \`render\` function.`],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => [`Error accessing the value at path \`${path}\``],
  [LevaErrors.INPUT_TYPE_OVERRIDE]: (path, type, wrongType) => [`Input at path \`${path}\` already exists with type: \`${type}\`. Its type cannot be overridden with type \`${wrongType}\`.`],
  [LevaErrors.EMPTY_KEY]: () => ["Keys can not be empty, if you want to hide a label use whitespace."]
};
function _log(fn, errorType, ...args) {
  const [message, ...rest2] = ErrorList[errorType](...args);
  console[fn]("LEVA: " + message, ...rest2);
}
var warn = _log.bind(null, "warn");
var log = _log.bind(null, "log");
var _excluded$a = ["value"];
var _excluded2$4 = ["schema"];
var _excluded3$1 = ["value"];
var Schemas = [];
var Plugins = {};
function getValueType(_ref) {
  let {
    value
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$a);
  for (let checker of Schemas) {
    const type = checker(value, settings);
    if (type) return type;
  }
  return void 0;
}
function register(type, _ref2) {
  let {
    schema: schema3
  } = _ref2, plugin2 = _objectWithoutProperties(_ref2, _excluded2$4);
  if (type in Plugins) {
    warn(LevaErrors.ALREADY_REGISTERED_TYPE, type);
    return;
  }
  Schemas.push((value, settings) => schema3(value, settings) && type);
  Plugins[type] = plugin2;
}
function createInternalPlugin(plugin2) {
  return plugin2;
}
function normalize$3(type, input, path, data) {
  const {
    normalize: _normalize
  } = Plugins[type];
  if (_normalize) return _normalize(input, path, data);
  if (typeof input !== "object" || !("value" in input)) return {
    value: input
  };
  const {
    value
  } = input, settings = _objectWithoutProperties(input, _excluded3$1);
  return {
    value,
    settings
  };
}
function sanitize$4(type, value, settings, prevValue, path, store) {
  const {
    sanitize: sanitize3
  } = Plugins[type];
  if (sanitize3) return sanitize3(value, settings, prevValue, path, store);
  return value;
}
function format$2(type, value, settings) {
  const {
    format: format3
  } = Plugins[type];
  if (format3) return format3(value, settings);
  return value;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
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
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var clamp = (x, min, max) => x > max ? max : x < min ? min : x;
var parseNumber = (v) => {
  if (v === "" || typeof v === "number") return v;
  try {
    const _v = evaluate(v);
    if (!isNaN(_v)) return _v;
  } catch (_unused) {
  }
  return parseFloat(v);
};
var log10 = Math.log(10);
function getStep(number3) {
  let n = Math.abs(+String(number3).replace(".", ""));
  if (n === 0) return 0.01;
  while (n !== 0 && n % 10 === 0) n /= 10;
  const significantDigits = Math.floor(Math.log(n) / log10) + 1;
  const numberLog = Math.floor(Math.log10(Math.abs(number3)));
  const step = Math.pow(10, numberLog - significantDigits);
  return Math.max(step, 1e-3);
}
var range = (v, min, max) => {
  if (max === min) return 0;
  const _v = clamp(v, min, max);
  return (_v - min) / (max - min);
};
var invertedRange = (p, min, max) => p * (max - min) + min;
var getUid = () => "_" + Math.random().toString(36).substr(2, 9);
var parens = /\(([0-9+\-*/^ .]+)\)/;
var exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/;
var mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
var div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/;
var add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/;
var sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
function evaluate(expr) {
  if (isNaN(Number(expr))) {
    if (parens.test(expr)) {
      const newExpr = expr.replace(parens, (match, subExpr) => String(evaluate(subExpr)));
      return evaluate(newExpr);
    } else if (exp.test(expr)) {
      const newExpr = expr.replace(exp, (match, base, pow) => String(Math.pow(Number(base), Number(pow))));
      return evaluate(newExpr);
    } else if (mul.test(expr)) {
      const newExpr = expr.replace(mul, (match, a, b) => String(Number(a) * Number(b)));
      return evaluate(newExpr);
    } else if (div.test(expr)) {
      const newExpr = expr.replace(div, (match, a, b) => {
        if (b != 0) return String(Number(a) / Number(b));
        else throw new Error("Division by zero");
      });
      return evaluate(newExpr);
    } else if (add.test(expr)) {
      const newExpr = expr.replace(add, (match, a, b) => String(Number(a) + Number(b)));
      return evaluate(newExpr);
    } else if (sub.test(expr)) {
      const newExpr = expr.replace(sub, (match, a, b) => String(Number(a) - Number(b)));
      return evaluate(newExpr);
    } else {
      return Number(expr);
    }
  }
  return Number(expr);
}
function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (!!object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
function omit(object, keys) {
  const obj = _objectSpread2({}, object);
  keys.forEach((k2) => k2 in object && delete obj[k2]);
  return obj;
}
function mapArrayToKeys(value, keys) {
  return value.reduce((acc, v, i) => Object.assign(acc, {
    [keys[i]]: v
  }), {});
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
var isEmptyObject = (obj) => isObject(obj) && Object.keys(obj).length === 0;
var SpecialInputs;
(function(SpecialInputs2) {
  SpecialInputs2["BUTTON"] = "BUTTON";
  SpecialInputs2["BUTTON_GROUP"] = "BUTTON_GROUP";
  SpecialInputs2["MONITOR"] = "MONITOR";
  SpecialInputs2["FOLDER"] = "FOLDER";
})(SpecialInputs || (SpecialInputs = {}));
var LevaInputs;
(function(LevaInputs2) {
  LevaInputs2["SELECT"] = "SELECT";
  LevaInputs2["IMAGE"] = "IMAGE";
  LevaInputs2["NUMBER"] = "NUMBER";
  LevaInputs2["COLOR"] = "COLOR";
  LevaInputs2["STRING"] = "STRING";
  LevaInputs2["BOOLEAN"] = "BOOLEAN";
  LevaInputs2["INTERVAL"] = "INTERVAL";
  LevaInputs2["VECTOR3D"] = "VECTOR3D";
  LevaInputs2["VECTOR2D"] = "VECTOR2D";
})(LevaInputs || (LevaInputs = {}));
var _excluded$9 = ["type", "__customInput"];
var _excluded2$3 = ["render", "label", "optional", "order", "disabled", "hint", "onChange", "onEditStart", "onEditEnd", "transient"];
var _excluded3 = ["type"];
function parseOptions(_input, key, mergedOptions = {}, customType) {
  var _commonOptions$option, _commonOptions$disabl;
  if (typeof _input !== "object" || Array.isArray(_input)) {
    return {
      type: customType,
      input: _input,
      options: _objectSpread2({
        key,
        label: key,
        optional: false,
        disabled: false,
        order: 0
      }, mergedOptions)
    };
  }
  if ("__customInput" in _input) {
    const {
      type: _type,
      __customInput
    } = _input, options = _objectWithoutProperties(_input, _excluded$9);
    return parseOptions(__customInput, key, options, _type);
  }
  const {
    render,
    label,
    optional,
    order = 0,
    disabled,
    hint,
    onChange,
    onEditStart,
    onEditEnd,
    transient
  } = _input, inputWithType = _objectWithoutProperties(_input, _excluded2$3);
  const commonOptions = _objectSpread2({
    render,
    key,
    label: label !== null && label !== void 0 ? label : key,
    hint,
    transient: transient !== null && transient !== void 0 ? transient : !!onChange,
    onEditStart,
    onEditEnd,
    disabled,
    optional,
    order
  }, mergedOptions);
  let {
    type
  } = inputWithType, input = _objectWithoutProperties(inputWithType, _excluded3);
  type = customType !== null && customType !== void 0 ? customType : type;
  if (type in SpecialInputs) {
    return {
      type,
      input,
      options: commonOptions
    };
  }
  let computedInput;
  if (customType && isObject(input) && "value" in input) computedInput = input.value;
  else computedInput = isEmptyObject(input) ? void 0 : input;
  return {
    type,
    input: computedInput,
    options: _objectSpread2(_objectSpread2({}, commonOptions), {}, {
      onChange,
      optional: (_commonOptions$option = commonOptions.optional) !== null && _commonOptions$option !== void 0 ? _commonOptions$option : false,
      disabled: (_commonOptions$disabl = commonOptions.disabled) !== null && _commonOptions$disabl !== void 0 ? _commonOptions$disabl : false
    })
  };
}
function normalizeInput(_input, key, path, data) {
  const parsedInputAndOptions = parseOptions(_input, key);
  const {
    type,
    input: parsedInput,
    options
  } = parsedInputAndOptions;
  if (type) {
    if (type in SpecialInputs)
      return parsedInputAndOptions;
    return {
      type,
      input: normalize$3(type, parsedInput, path, data),
      options
    };
  }
  let inputType = getValueType(parsedInput);
  if (inputType) return {
    type: inputType,
    input: normalize$3(inputType, parsedInput, path, data),
    options
  };
  inputType = getValueType({
    value: parsedInput
  });
  if (inputType) return {
    type: inputType,
    input: normalize$3(inputType, {
      value: parsedInput
    }, path, data),
    options
  };
  return false;
}
function updateInput(input, newValue, path, store, fromPanel) {
  const {
    value,
    type,
    settings
  } = input;
  input.value = sanitizeValue({
    type,
    value,
    settings
  }, newValue, path, store);
  input.fromPanel = fromPanel;
}
var ValueError = function ValueError2(message, value, error) {
  this.type = "LEVA_ERROR";
  this.message = "LEVA: " + message;
  this.previousValue = value;
  this.error = error;
};
function sanitizeValue({
  type,
  value,
  settings
}, newValue, path, store) {
  const _newValue = type !== "SELECT" && typeof newValue === "function" ? newValue(value) : newValue;
  let sanitizedNewValue;
  try {
    sanitizedNewValue = sanitize$4(type, _newValue, settings, value, path, store);
  } catch (e) {
    throw new ValueError(`The value \`${newValue}\` did not result in a correct value.`, value, e);
  }
  if (dequal(sanitizedNewValue, value)) {
    return value;
  }
  return sanitizedNewValue;
}
var debounce = (callback, wait, immediate = false) => {
  let timeout = 0;
  return function() {
    const args = arguments;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);
    window.clearTimeout(timeout);
    timeout = window.setTimeout(next, wait);
    if (callNow) next();
  };
};
var multiplyStep = (event) => event.shiftKey ? 5 : event.altKey ? 1 / 5 : 1;
var _excluded$8 = ["value"];
var _excluded2$2 = ["min", "max"];
var schema$3 = (v) => {
  if (typeof v === "number") return true;
  if (typeof v === "string") {
    const _v = parseFloat(v);
    if (isNaN(_v)) return false;
    const suffix = v.substring(("" + _v).length).trim();
    return suffix.length < 4;
  }
  return false;
};
var sanitize$3 = (v, {
  min: _min = -Infinity,
  max: _max = Infinity,
  suffix
}) => {
  const _v = parseFloat(v);
  if (v === "" || isNaN(_v)) throw Error("Invalid number");
  const f = clamp(_v, _min, _max);
  return suffix ? f + suffix : f;
};
var format$1 = (v, {
  pad: _pad = 0,
  suffix
}) => {
  const f = parseFloat(v).toFixed(_pad);
  return suffix ? f + suffix : f;
};
var normalize$2 = (_ref) => {
  let {
    value
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$8);
  const {
    min = -Infinity,
    max = Infinity
  } = settings, _settings = _objectWithoutProperties(settings, _excluded2$2);
  let _value = parseFloat(value);
  const suffix = typeof value === "string" ? value.substring(("" + _value).length) : void 0;
  _value = clamp(_value, min, max);
  let step = settings.step;
  if (!step) {
    if (Number.isFinite(min)) {
      if (Number.isFinite(max)) step = +(Math.abs(max - min) / 100).toPrecision(1);
      else step = +(Math.abs(_value - min) / 100).toPrecision(1);
    } else if (Number.isFinite(max)) step = +(Math.abs(max - _value) / 100).toPrecision(1);
  }
  const padStep = step ? getStep(step) * 10 : getStep(_value);
  step = step || padStep / 10;
  const pad = Math.round(clamp(Math.log10(1 / padStep), 0, 2));
  return {
    value: suffix ? _value + suffix : _value,
    settings: _objectSpread2({
      initialValue: _value,
      step,
      pad,
      min,
      max,
      suffix
    }, _settings)
  };
};
var sanitizeStep$1 = (v, {
  step,
  initialValue
}) => {
  const steps = Math.round((v - initialValue) / step);
  return initialValue + steps * step;
};
var props$3 = Object.freeze({
  __proto__: null,
  schema: schema$3,
  sanitize: sanitize$3,
  format: format$1,
  normalize: normalize$2,
  sanitizeStep: sanitizeStep$1
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var InputContext = (0, import_react.createContext)({});
function useInputContext() {
  return (0, import_react.useContext)(InputContext);
}
var ThemeContext = (0, import_react.createContext)(null);
var StoreContext = (0, import_react.createContext)(null);
var PanelSettingsContext = (0, import_react.createContext)(null);
function useStoreContext() {
  return (0, import_react.useContext)(StoreContext);
}
function usePanelSettingsContext() {
  return (0, import_react.useContext)(PanelSettingsContext);
}
function LevaStoreProvider({
  children,
  store
}) {
  return import_react.default.createElement(StoreContext.Provider, {
    value: store
  }, children);
}
var getDefaultTheme = () => ({
  colors: {
    elevation1: "#292d39",
    elevation2: "#181c20",
    elevation3: "#373c4b",
    accent1: "#0066dc",
    accent2: "#007bff",
    accent3: "#3c93ff",
    highlight1: "#535760",
    highlight2: "#8c92a4",
    highlight3: "#fefefe",
    vivid1: "#ffcc00",
    folderWidgetColor: "$highlight2",
    folderTextColor: "$highlight3",
    toolTipBackground: "$highlight3",
    toolTipText: "$elevation2"
  },
  radii: {
    xs: "2px",
    sm: "3px",
    lg: "10px"
  },
  space: {
    xs: "3px",
    sm: "6px",
    md: "10px",
    rowGap: "7px",
    colGap: "7px"
  },
  fonts: {
    mono: `ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace`,
    sans: `system-ui, sans-serif`
  },
  fontSizes: {
    root: "11px",
    toolTip: "$root"
  },
  sizes: {
    rootWidth: "280px",
    controlWidth: "160px",
    numberInputMinWidth: "38px",
    scrubberWidth: "8px",
    scrubberHeight: "16px",
    rowHeight: "24px",
    folderTitleHeight: "20px",
    checkboxSize: "16px",
    joystickWidth: "100px",
    joystickHeight: "100px",
    colorPickerWidth: "$controlWidth",
    colorPickerHeight: "100px",
    imagePreviewWidth: "$controlWidth",
    imagePreviewHeight: "100px",
    monitorHeight: "60px",
    titleBarHeight: "39px"
  },
  shadows: {
    level1: "0 0 9px 0 #00000088",
    level2: "0 4px 14px #00000033"
  },
  borderWidths: {
    root: "0px",
    input: "1px",
    focus: "1px",
    hover: "1px",
    active: "1px",
    folder: "1px"
  },
  fontWeights: {
    label: "normal",
    folder: "normal",
    button: "normal"
  }
});
function createStateClass(value, options) {
  const [borderColor, bgColor] = value.split(" ");
  const css2 = {};
  if (borderColor !== "none") {
    css2.boxShadow = `${options.inset ? "inset " : ""}0 0 0 $borderWidths${[options.key]} $colors${borderColor !== "default" && borderColor || options.borderColor}`;
  }
  if (bgColor) {
    css2.backgroundColor = bgColor;
  }
  return css2;
}
var utils = {
  $inputStyle: () => (value) => createStateClass(value, {
    key: "$input",
    borderColor: "$highlight1",
    inset: true
  }),
  $focusStyle: () => (value) => createStateClass(value, {
    key: "$focus",
    borderColor: "$accent2"
  }),
  $hoverStyle: () => (value) => createStateClass(value, {
    key: "$hover",
    borderColor: "$accent1",
    inset: true
  }),
  $activeStyle: () => (value) => createStateClass(value, {
    key: "$active",
    borderColor: "$accent1",
    inset: true
  })
};
var {
  styled,
  css,
  createTheme,
  globalCss,
  keyframes
} = q({
  prefix: "leva",
  theme: getDefaultTheme(),
  utils: _objectSpread2(_objectSpread2({}, utils), {}, {
    $flex: () => ({
      display: "flex",
      alignItems: "center"
    }),
    $flexCenter: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    $reset: () => ({
      outline: "none",
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
      fontFamily: "inherit",
      border: "none",
      backgroundColor: "transparent",
      appearance: "none"
    }),
    $draggable: () => ({
      touchAction: "none",
      WebkitUserDrag: "none",
      userSelect: "none"
    }),
    $focus: (value) => ({
      "&:focus": utils.$focusStyle()(value)
    }),
    $focusWithin: (value) => ({
      "&:focus-within": utils.$focusStyle()(value)
    }),
    $hover: (value) => ({
      "&:hover": utils.$hoverStyle()(value)
    }),
    $active: (value) => ({
      "&:active": utils.$activeStyle()(value)
    })
  })
});
var globalStyles = globalCss({
  ".leva__panel__dragged": {
    WebkitUserDrag: "none",
    userSelect: "none",
    input: {
      userSelect: "none"
    },
    "*": {
      cursor: "ew-resize !important"
    }
  }
});
function mergeTheme(newTheme) {
  const defaultTheme = getDefaultTheme();
  if (!newTheme) return {
    theme: defaultTheme,
    className: ""
  };
  Object.keys(newTheme).forEach((key) => {
    Object.assign(defaultTheme[key], newTheme[key]);
  });
  const customTheme = createTheme(defaultTheme);
  return {
    theme: defaultTheme,
    className: customTheme.className
  };
}
function useTh(category, key) {
  const {
    theme
  } = (0, import_react.useContext)(ThemeContext);
  if (!(category in theme) || !(key in theme[category])) {
    warn(LevaErrors.THEME_ERROR, category, key);
    return "";
  }
  let _key = key;
  while (true) {
    let value = theme[category][_key];
    if (typeof value === "string" && value.charAt(0) === "$") _key = value.substr(1);
    else return value;
  }
}
var StyledInput = styled("input", {
  $reset: "",
  padding: "0 $sm",
  width: 0,
  minWidth: 0,
  flex: 1,
  height: "100%",
  variants: {
    levaType: {
      number: {
        textAlign: "right"
      }
    },
    as: {
      textarea: {
        padding: "$sm"
      }
    }
  }
});
var InnerLabel = styled("div", {
  $draggable: "",
  height: "100%",
  $flexCenter: "",
  position: "relative",
  padding: "0 $xs",
  fontSize: "0.8em",
  opacity: 0.8,
  cursor: "default",
  touchAction: "none",
  [`& + ${StyledInput}`]: {
    paddingLeft: 0
  }
});
var InnerNumberLabel = styled(InnerLabel, {
  cursor: "ew-resize",
  marginRight: "-$xs",
  textTransform: "uppercase",
  opacity: 0.3,
  "&:hover": {
    opacity: 1
  },
  variants: {
    dragging: {
      true: {
        backgroundColor: "$accent2",
        opacity: 1
      }
    }
  }
});
var InputContainer = styled("div", {
  $flex: "",
  position: "relative",
  borderRadius: "$sm",
  overflow: "hidden",
  color: "inherit",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  $inputStyle: "$elevation1",
  $hover: "",
  $focusWithin: "",
  variants: {
    textArea: {
      true: {
        height: "auto"
      }
    }
  }
});
var _excluded$7 = ["innerLabel", "value", "onUpdate", "onChange", "onKeyDown", "type", "id", "inputType", "rows"];
var _excluded2$1 = ["onUpdate"];
function ValueInput(_ref) {
  let {
    innerLabel,
    value,
    onUpdate,
    onChange,
    onKeyDown,
    type,
    id,
    inputType = "text",
    rows = 0
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$7);
  const {
    id: _id,
    emitOnEditStart,
    emitOnEditEnd,
    disabled
  } = useInputContext();
  const inputId = id || _id;
  const inputRef = (0, import_react.useRef)(null);
  const isTextArea = rows > 0;
  const asType = isTextArea ? "textarea" : "input";
  const update = (0, import_react.useCallback)((fn) => (event) => {
    const _value = event.currentTarget.value;
    fn(_value);
  }, []);
  import_react.default.useEffect(() => {
    const ref = inputRef.current;
    const _onUpdate = update((value2) => {
      onUpdate(value2);
      emitOnEditEnd();
    });
    ref === null || ref === void 0 ? void 0 : ref.addEventListener("blur", _onUpdate);
    return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener("blur", _onUpdate);
  }, [update, onUpdate, emitOnEditEnd]);
  const onKeyPress = (0, import_react.useCallback)((event) => {
    if (event.key === "Enter") {
      update(onUpdate)(event);
    }
  }, [update, onUpdate]);
  const inputProps = Object.assign({
    as: asType
  }, isTextArea ? {
    rows
  } : {}, props3);
  return import_react.default.createElement(InputContainer, {
    textArea: isTextArea
  }, innerLabel && typeof innerLabel === "string" ? import_react.default.createElement(InnerLabel, null, innerLabel) : innerLabel, import_react.default.createElement(StyledInput, _extends({
    levaType: type,
    ref: inputRef,
    id: inputId,
    type: inputType,
    autoComplete: "off",
    spellCheck: "false",
    value,
    onChange: update(onChange),
    onFocus: () => emitOnEditStart(),
    onKeyPress,
    onKeyDown,
    disabled
  }, inputProps)));
}
function NumberInput(_ref2) {
  let {
    onUpdate
  } = _ref2, props3 = _objectWithoutProperties(_ref2, _excluded2$1);
  const _onUpdate = (0, import_react.useCallback)((v) => onUpdate(parseNumber(v)), [onUpdate]);
  const onKeyDown = (0, import_react.useCallback)((event) => {
    const dir = event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
    if (dir) {
      event.preventDefault();
      const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
      onUpdate((v) => parseFloat(v) + dir * step);
    }
  }, [onUpdate]);
  return import_react.default.createElement(ValueInput, _extends({}, props3, {
    onUpdate: _onUpdate,
    onKeyDown,
    type: "number"
  }));
}
var StyledFolder = styled("div", {});
var StyledWrapper = styled("div", {
  position: "relative",
  background: "$elevation2",
  transition: "height 300ms ease",
  variants: {
    fill: {
      true: {},
      false: {}
    },
    flat: {
      false: {},
      true: {}
    },
    isRoot: {
      true: {},
      false: {
        paddingLeft: "$md",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "$borderWidths$folder",
          height: "100%",
          backgroundColor: "$folderWidgetColor",
          opacity: 0.4,
          transform: "translateX(-50%)"
        }
      }
    }
  },
  compoundVariants: [{
    isRoot: true,
    fill: false,
    css: {
      overflowY: "auto",
      maxHeight: "calc(100vh - 20px - $$titleBarHeight)"
    }
  }, {
    isRoot: true,
    flat: false,
    css: {
      borderRadius: "$lg"
    }
  }]
});
var StyledTitle = styled("div", {
  $flex: "",
  color: "$folderTextColor",
  userSelect: "none",
  cursor: "pointer",
  height: "$folderTitleHeight",
  fontWeight: "$folder",
  "> svg": {
    marginLeft: -4,
    marginRight: 4,
    cursor: "pointer",
    fill: "$folderWidgetColor",
    opacity: 0.6
  },
  "&:hover > svg": {
    fill: "$folderWidgetColor"
  },
  [`&:hover + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & > svg`]: {
    opacity: 1
  }
});
var StyledContent = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "100%",
  rowGap: "$rowGap",
  transition: "opacity 250ms ease",
  variants: {
    toggled: {
      true: {
        opacity: 1,
        transitionDelay: "250ms"
      },
      false: {
        opacity: 0,
        transitionDelay: "0ms",
        pointerEvents: "none"
      }
    },
    isRoot: {
      true: {
        "& > div": {
          paddingLeft: "$md",
          paddingRight: "$md"
        },
        "& > div:first-of-type": {
          paddingTop: "$sm"
        },
        "& > div:last-of-type": {
          paddingBottom: "$sm"
        },
        [`> ${StyledFolder}:not(:first-of-type)`]: {
          paddingTop: "$sm",
          marginTop: "$md",
          borderTop: "$borderWidths$folder solid $colors$elevation1"
        }
      }
    }
  }
});
var StyledRow = styled("div", {
  position: "relative",
  zIndex: 100,
  display: "grid",
  rowGap: "$rowGap",
  gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
  alignItems: "center",
  color: "$highlight2",
  [`${StyledContent} > &`]: {
    "&:first-of-type": {
      marginTop: "$rowGap"
    },
    "&:last-of-type": {
      marginBottom: "$rowGap"
    }
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: "none"
      },
      false: {
        "&:hover,&:focus-within": {
          color: "$highlight3"
        }
      }
    }
  }
});
var StyledInputRow = styled(StyledRow, {
  gridTemplateColumns: "auto $sizes$controlWidth",
  columnGap: "$colGap"
});
var CopyLabelContainer = styled("div", {
  $flex: "",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  "& > div": {
    marginLeft: "$colGap",
    padding: "0 $xs",
    opacity: 0.4
  },
  "& > div:hover": {
    opacity: 0.8
  },
  "& > div > svg": {
    display: "none",
    cursor: "pointer",
    width: 13,
    minWidth: 13,
    height: 13,
    backgroundColor: "$elevation2"
  },
  "&:hover > div > svg": {
    display: "block"
  },
  variants: {
    align: {
      top: {
        height: "100%",
        alignItems: "flex-start",
        paddingTop: "$sm"
      }
    }
  }
});
var StyledOptionalToggle = styled("input", {
  $reset: "",
  height: 0,
  width: 0,
  opacity: 0,
  margin: 0,
  "& + label": {
    position: "relative",
    $flexCenter: "",
    height: "100%",
    userSelect: "none",
    cursor: "pointer",
    paddingLeft: 2,
    paddingRight: "$sm",
    pointerEvents: "auto"
  },
  "& + label:after": {
    content: '""',
    width: 6,
    height: 6,
    backgroundColor: "$elevation3",
    borderRadius: "50%",
    $activeStyle: ""
  },
  "&:focus + label:after": {
    $focusStyle: ""
  },
  "& + label:active:after": {
    backgroundColor: "$accent1",
    $focusStyle: ""
  },
  "&:checked + label:after": {
    backgroundColor: "$accent1"
  }
});
var StyledLabel = styled("label", {
  fontWeight: "$label",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "& > svg": {
    display: "block"
  }
});
var StyledInputWrapper$1 = styled("div", {
  opacity: 1,
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
        [`& ${StyledLabel}`]: {
          pointerEvents: "auto"
        }
      }
    }
  }
});
var Overlay = styled("div", {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1e3,
  userSelect: "none"
});
var StyledToolTipContent = styled("div", {
  background: "$toolTipBackground",
  fontFamily: "$sans",
  fontSize: "$toolTip",
  padding: "$xs $sm",
  color: "$toolTipText",
  borderRadius: "$xs",
  boxShadow: "$level2",
  maxWidth: 260
});
var ToolTipArrow = styled($a093c7e1ec25a057$export$21b07c8f274aebd5, {
  fill: "$toolTipBackground"
});
function Portal({
  children
}) {
  const {
    className
  } = (0, import_react.useContext)(ThemeContext);
  return import_react.default.createElement($f1701beae083dbae$export$be92b6f5f03c0fe9, {
    className
  }, children);
}
var _excluded$6 = ["align"];
function OptionalToggle() {
  const {
    id,
    disable,
    disabled
  } = useInputContext();
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(StyledOptionalToggle, {
    id: id + "__disable",
    type: "checkbox",
    checked: !disabled,
    onChange: () => disable(!disabled)
  }), import_react.default.createElement("label", {
    htmlFor: id + "__disable"
  }));
}
function RawLabel(props3) {
  const {
    id,
    optional,
    hint
  } = useInputContext();
  const htmlFor = props3.htmlFor || (id ? {
    htmlFor: id
  } : null);
  const title = !hint && typeof props3.children === "string" ? {
    title: props3.children
  } : null;
  return import_react.default.createElement(import_react.default.Fragment, null, optional && import_react.default.createElement(OptionalToggle, null), hint !== void 0 ? import_react.default.createElement($a093c7e1ec25a057$export$be92b6f5f03c0fe9, null, import_react.default.createElement($a093c7e1ec25a057$export$41fb9f06171c75f4, {
    asChild: true
  }, import_react.default.createElement(StyledLabel, _extends({}, htmlFor, props3))), import_react.default.createElement($a093c7e1ec25a057$export$7c6e2c02157bb7d2, {
    side: "top",
    sideOffset: 2
  }, import_react.default.createElement(StyledToolTipContent, null, hint, import_react.default.createElement(ToolTipArrow, null)))) : import_react.default.createElement(StyledLabel, _extends({}, htmlFor, title, props3)));
}
function Label(_ref) {
  let {
    align
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$6);
  const {
    value,
    label,
    key,
    disabled
  } = useInputContext();
  const {
    hideCopyButton
  } = usePanelSettingsContext();
  const copyEnabled = !hideCopyButton && key !== void 0;
  const [copied, setCopied] = (0, import_react.useState)(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({
        [key]: value !== null && value !== void 0 ? value : ""
      }));
      setCopied(true);
    } catch (_unused) {
      warn(LevaErrors.CLIPBOARD_ERROR, {
        [key]: value
      });
    }
  };
  return import_react.default.createElement(CopyLabelContainer, {
    align,
    onPointerLeave: () => setCopied(false)
  }, import_react.default.createElement(RawLabel, props3), copyEnabled && !disabled && import_react.default.createElement("div", {
    title: `Click to copy ${typeof label === "string" ? label : key} value`
  }, !copied ? import_react.default.createElement("svg", {
    onClick: handleClick,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react.default.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), import_react.default.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  })) : import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react.default.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }))));
}
var _excluded$5 = ["toggled"];
var Svg = styled("svg", {
  fill: "currentColor",
  transition: "transform 350ms ease, fill 250ms ease"
});
function Chevron(_ref) {
  let {
    toggled
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$5);
  return import_react.default.createElement(Svg, _extends({
    width: "9",
    height: "5",
    viewBox: "0 0 9 5",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: `rotate(${toggled ? 0 : -90}deg)`
    }
  }, props3), import_react.default.createElement("path", {
    d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"
  }));
}
var _excluded$4 = ["input"];
function Row(_ref) {
  let {
    input
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$4);
  if (input) return import_react.default.createElement(StyledInputRow, props3);
  return import_react.default.createElement(StyledRow, props3);
}
function useInputSetters({
  value,
  type,
  settings,
  setValue
}) {
  const [displayValue, setDisplayValue] = (0, import_react.useState)(format$2(type, value, settings));
  const previousValueRef = (0, import_react.useRef)(value);
  const settingsRef = (0, import_react.useRef)(settings);
  settingsRef.current = settings;
  const setFormat = (0, import_react.useCallback)((v) => setDisplayValue(format$2(type, v, settingsRef.current)), [type]);
  const onUpdate = (0, import_react.useCallback)((updatedValue) => {
    try {
      setValue(updatedValue);
    } catch (error) {
      const {
        type: type2,
        previousValue
      } = error;
      if (type2 !== "LEVA_ERROR") throw error;
      setFormat(previousValue);
    }
  }, [setFormat, setValue]);
  (0, import_react.useEffect)(() => {
    if (!dequal(value, previousValueRef.current)) {
      setFormat(value);
    }
    previousValueRef.current = value;
  }, [value, setFormat]);
  return {
    displayValue,
    onChange: setDisplayValue,
    onUpdate
  };
}
function useDrag2(handler, config) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  return useDrag((state) => {
    if (state.first) {
      document.body.classList.add("leva__panel__dragged");
      emitOnEditStart === null || emitOnEditStart === void 0 ? void 0 : emitOnEditStart();
    }
    const result = handler(state);
    if (state.last) {
      document.body.classList.remove("leva__panel__dragged");
      emitOnEditEnd === null || emitOnEditEnd === void 0 ? void 0 : emitOnEditEnd();
    }
    return result;
  }, config);
}
function useCanvas2d(fn) {
  const canvas = (0, import_react.useRef)(null);
  const ctx = (0, import_react.useRef)(null);
  const hasFired = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    const handleCanvas = debounce(() => {
      canvas.current.width = canvas.current.offsetWidth * window.devicePixelRatio;
      canvas.current.height = canvas.current.offsetHeight * window.devicePixelRatio;
      fn(canvas.current, ctx.current);
    }, 250);
    window.addEventListener("resize", handleCanvas);
    if (!hasFired.current) {
      handleCanvas();
      hasFired.current = true;
    }
    return () => window.removeEventListener("resize", handleCanvas);
  }, [fn]);
  (0, import_react.useEffect)(() => {
    ctx.current = canvas.current.getContext("2d");
  }, []);
  return [canvas, ctx];
}
function useTransform() {
  const ref = (0, import_react.useRef)(null);
  const local = (0, import_react.useRef)({
    x: 0,
    y: 0
  });
  const set = (0, import_react.useCallback)((point) => {
    Object.assign(local.current, point);
    if (ref.current) ref.current.style.transform = `translate3d(${local.current.x}px, ${local.current.y}px, 0)`;
  }, []);
  return [ref, set];
}
var _excluded$3 = ["__refCount"];
var getInputAtPath = (data, path) => {
  if (!data[path]) return null;
  const _data$path = data[path], input = _objectWithoutProperties(_data$path, _excluded$3);
  return input;
};
function useInput(path) {
  const store = useStoreContext();
  const [state, setState] = (0, import_react.useState)(getInputAtPath(store.getData(), path));
  const set = (0, import_react.useCallback)((value) => store.setValueAtPath(path, value, true), [path, store]);
  const setSettings = (0, import_react.useCallback)((settings) => store.setSettingsAtPath(path, settings), [path, store]);
  const disable = (0, import_react.useCallback)((flag) => store.disableInputAtPath(path, flag), [path, store]);
  const emitOnEditStart = (0, import_react.useCallback)(() => store.emitOnEditStart(path), [path, store]);
  const emitOnEditEnd = (0, import_react.useCallback)(() => store.emitOnEditEnd(path), [path, store]);
  (0, import_react.useEffect)(() => {
    setState(getInputAtPath(store.getData(), path));
    const unsub = store.useStore.subscribe((s) => getInputAtPath(s.data, path), setState, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store, path]);
  return [state, {
    set,
    setSettings,
    disable,
    storeId: store.storeId,
    emitOnEditStart,
    emitOnEditEnd
  }];
}
var RangeGrid = styled("div", {
  variants: {
    hasRange: {
      true: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "auto $sizes$numberInputMinWidth",
        columnGap: "$colGap",
        alignItems: "center"
      }
    }
  }
});
var Range = styled("div", {
  position: "relative",
  width: "100%",
  height: 2,
  borderRadius: "$xs",
  backgroundColor: "$elevation1"
});
var Scrubber = styled("div", {
  position: "absolute",
  width: "$scrubberWidth",
  height: "$scrubberHeight",
  borderRadius: "$xs",
  boxShadow: "0 0 0 2px $colors$elevation2",
  backgroundColor: "$accent2",
  cursor: "pointer",
  $active: "none $accent1",
  $hover: "none $accent3",
  variants: {
    position: {
      left: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transform: "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))"
      },
      right: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transform: "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))"
      }
    }
  }
});
var RangeWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "100%",
  cursor: "pointer",
  touchAction: "none"
});
var Indicator = styled("div", {
  position: "absolute",
  height: "100%",
  backgroundColor: "$accent2"
});
function RangeSlider({
  value,
  min,
  max,
  onDrag,
  step,
  initialValue
}) {
  const ref = (0, import_react.useRef)(null);
  const scrubberRef = (0, import_react.useRef)(null);
  const rangeWidth = (0, import_react.useRef)(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag2(({
    event,
    first,
    xy: [x],
    movement: [mx],
    memo
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === scrubberRef.current;
      memo = targetIsScrub ? value : invertedRange((x - left) / width, min, max);
    }
    const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max - min);
    onDrag(sanitizeStep$1(newValue, {
      step,
      initialValue
    }));
    return memo;
  });
  const pos = range(value, min, max);
  return import_react.default.createElement(RangeWrapper, _extends({
    ref
  }, bind()), import_react.default.createElement(Range, null, import_react.default.createElement(Indicator, {
    style: {
      left: 0,
      right: `${(1 - pos) * 100}%`
    }
  })), import_react.default.createElement(Scrubber, {
    ref: scrubberRef,
    style: {
      left: `calc(${pos} * (100% - ${scrubberWidth}))`
    }
  }));
}
var DraggableLabel = import_react.default.memo(({
  label,
  onUpdate,
  step,
  innerLabelTrim
}) => {
  const [dragging, setDragging] = (0, import_react.useState)(false);
  const bind = useDrag2(({
    active,
    delta: [dx],
    event,
    memo: _memo = 0,
    first,
    last,
    target
  }) => {
    if (first) {
      const label2 = target;
      label2.requestPointerLock();
    }
    if (last) {
      document.exitPointerLock();
    }
    setDragging(active);
    _memo += dx / 2;
    if (Math.abs(_memo) >= 1) {
      onUpdate((v) => parseFloat(v) + Math.floor(_memo) * step * multiplyStep(event));
      _memo = 0;
    }
    return _memo;
  });
  return import_react.default.createElement(InnerNumberLabel, _extends({
    dragging,
    title: label.length > 1 ? label : ""
  }, bind()), label.slice(0, innerLabelTrim));
});
function Number$1({
  label,
  id,
  displayValue,
  onUpdate,
  onChange,
  settings,
  innerLabelTrim = 1
}) {
  const InnerLabel2 = innerLabelTrim > 0 && import_react.default.createElement(DraggableLabel, {
    label,
    step: settings.step,
    onUpdate,
    innerLabelTrim
  });
  return import_react.default.createElement(NumberInput, {
    id,
    value: String(displayValue),
    onUpdate,
    onChange,
    innerLabel: InnerLabel2
  });
}
function NumberComponent() {
  const props3 = useInputContext();
  const {
    label,
    value,
    onUpdate,
    settings,
    id
  } = props3;
  const {
    min,
    max
  } = settings;
  const hasRange = max !== Infinity && min !== -Infinity;
  return import_react.default.createElement(Row, {
    input: true
  }, import_react.default.createElement(Label, null, label), import_react.default.createElement(RangeGrid, {
    hasRange
  }, hasRange && import_react.default.createElement(RangeSlider, _extends({
    value: parseFloat(value),
    onDrag: onUpdate
  }, settings)), import_react.default.createElement(Number$1, _extends({}, props3, {
    id,
    label: "value",
    innerLabelTrim: hasRange ? 0 : 1
  }))));
}
var {
  sanitizeStep
} = props$3;
var rest = _objectWithoutProperties(props$3, ["sanitizeStep"]);
var number = createInternalPlugin(_objectSpread2({
  component: NumberComponent
}, rest));
var schema$2 = (_o, s) => v8n_esm_default().schema({
  options: v8n_esm_default().passesAnyOf(v8n_esm_default().object(), v8n_esm_default().array())
}).test(s);
var sanitize$2 = (value, {
  values
}) => {
  if (values.indexOf(value) < 0) throw Error(`Selected value doesn't match Select options`);
  return value;
};
var format = (value, {
  values
}) => {
  return values.indexOf(value);
};
var normalize$1 = (input) => {
  let {
    value,
    options
  } = input;
  let keys;
  let values;
  if (Array.isArray(options)) {
    values = options;
    keys = options.map((o) => String(o));
  } else {
    values = Object.values(options);
    keys = Object.keys(options);
  }
  if (!("value" in input)) value = values[0];
  else if (!values.includes(value)) {
    keys.unshift(String(value));
    values.unshift(value);
  }
  if (!Object.values(options).includes(value)) options[String(value)] = value;
  return {
    value,
    settings: {
      keys,
      values
    }
  };
};
var props$2 = Object.freeze({
  __proto__: null,
  schema: schema$2,
  sanitize: sanitize$2,
  format,
  normalize: normalize$1
});
var SelectContainer = styled("div", {
  $flexCenter: "",
  position: "relative",
  "> svg": {
    pointerEvents: "none",
    position: "absolute",
    right: "$md"
  }
});
var NativeSelect = styled("select", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0
});
var PresentationalSelect = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  padding: "0 $sm",
  cursor: "pointer",
  [`${NativeSelect}:focus + &`]: {
    $focusStyle: ""
  },
  [`${NativeSelect}:hover + &`]: {
    $hoverStyle: ""
  }
});
function Select({
  displayValue,
  value,
  onUpdate,
  id,
  settings,
  disabled
}) {
  const {
    keys,
    values
  } = settings;
  const lastDisplayedValue = (0, import_react.useRef)();
  if (value === values[displayValue]) {
    lastDisplayedValue.current = keys[displayValue];
  }
  return import_react.default.createElement(SelectContainer, null, import_react.default.createElement(NativeSelect, {
    id,
    value: displayValue,
    onChange: (e) => onUpdate(values[Number(e.currentTarget.value)]),
    disabled
  }, keys.map((key, index) => import_react.default.createElement("option", {
    key,
    value: index
  }, key))), import_react.default.createElement(PresentationalSelect, null, lastDisplayedValue.current), import_react.default.createElement(Chevron, {
    toggled: true
  }));
}
function SelectComponent() {
  const {
    label,
    value,
    displayValue,
    onUpdate,
    id,
    disabled,
    settings
  } = useInputContext();
  return import_react.default.createElement(Row, {
    input: true
  }, import_react.default.createElement(Label, null, label), import_react.default.createElement(Select, {
    id,
    value,
    displayValue,
    onUpdate,
    settings,
    disabled
  }));
}
var select = createInternalPlugin(_objectSpread2({
  component: SelectComponent
}, props$2));
var schema$1 = (o) => v8n_esm_default().string().test(o);
var sanitize$1 = (v) => {
  if (typeof v !== "string") throw Error(`Invalid string`);
  return v;
};
var normalize = ({
  value,
  editable: _editable = true,
  rows: _rows = false
}) => {
  return {
    value,
    settings: {
      editable: _editable,
      rows: typeof _rows === "number" ? _rows : _rows ? 5 : 0
    }
  };
};
var props$1 = Object.freeze({
  __proto__: null,
  schema: schema$1,
  sanitize: sanitize$1,
  normalize
});
var _excluded$2 = ["displayValue", "onUpdate", "onChange", "editable"];
var NonEditableString = styled("div", {
  whiteSpace: "pre-wrap"
});
function String$1(_ref) {
  let {
    displayValue,
    onUpdate,
    onChange,
    editable = true
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$2);
  if (editable) return import_react.default.createElement(ValueInput, _extends({
    value: displayValue,
    onUpdate,
    onChange
  }, props3));
  return import_react.default.createElement(NonEditableString, null, displayValue);
}
function StringComponent() {
  const {
    label,
    settings,
    displayValue,
    onUpdate,
    onChange
  } = useInputContext();
  return import_react.default.createElement(Row, {
    input: true
  }, import_react.default.createElement(Label, null, label), import_react.default.createElement(String$1, _extends({
    displayValue,
    onUpdate,
    onChange
  }, settings)));
}
var string = createInternalPlugin(_objectSpread2({
  component: StringComponent
}, props$1));
var schema = (o) => v8n_esm_default().boolean().test(o);
var sanitize = (v) => {
  if (typeof v !== "boolean") throw Error("Invalid boolean");
  return v;
};
var props = Object.freeze({
  __proto__: null,
  schema,
  sanitize
});
var StyledInputWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "$rowHeight",
  input: {
    $reset: "",
    height: 0,
    width: 0,
    opacity: 0,
    margin: 0
  },
  label: {
    position: "relative",
    $flexCenter: "",
    userSelect: "none",
    cursor: "pointer",
    height: "$checkboxSize",
    width: "$checkboxSize",
    backgroundColor: "$elevation3",
    borderRadius: "$sm",
    $hover: ""
  },
  "input:focus + label": {
    $focusStyle: ""
  },
  "input:focus:checked + label, input:checked + label:hover": {
    $hoverStyle: "$accent3"
  },
  "input + label:active": {
    backgroundColor: "$accent1"
  },
  "input:checked + label:active": {
    backgroundColor: "$accent1"
  },
  "label > svg": {
    display: "none",
    width: "90%",
    height: "90%",
    stroke: "$highlight3"
  },
  "input:checked + label": {
    backgroundColor: "$accent2"
  },
  "input:checked + label > svg": {
    display: "block"
  }
});
function Boolean2({
  value,
  onUpdate,
  id,
  disabled
}) {
  return import_react.default.createElement(StyledInputWrapper, null, import_react.default.createElement("input", {
    id,
    type: "checkbox",
    checked: value,
    onChange: (e) => onUpdate(e.currentTarget.checked),
    disabled
  }), import_react.default.createElement("label", {
    htmlFor: id
  }, import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }))));
}
function BooleanComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled,
    id
  } = useInputContext();
  return import_react.default.createElement(Row, {
    input: true
  }, import_react.default.createElement(Label, null, label), import_react.default.createElement(Boolean2, {
    value,
    onUpdate,
    id,
    disabled
  }));
}
var boolean = createInternalPlugin(_objectSpread2({
  component: BooleanComponent
}, props));
var _excluded$1 = ["locked"];
function Coordinate({
  value,
  id,
  valueKey,
  settings,
  onUpdate,
  innerLabelTrim
}) {
  const valueRef = (0, import_react.useRef)(value[valueKey]);
  valueRef.current = value[valueKey];
  const setValue = (0, import_react.useCallback)((newValue) => onUpdate({
    [valueKey]: sanitizeValue({
      type: "NUMBER",
      value: valueRef.current,
      settings
    }, newValue)
  }), [onUpdate, settings, valueKey]);
  const number3 = useInputSetters({
    type: "NUMBER",
    value: value[valueKey],
    settings,
    setValue
  });
  return import_react.default.createElement(Number$1, {
    id,
    label: valueKey,
    value: value[valueKey],
    displayValue: number3.displayValue,
    onUpdate: number3.onUpdate,
    onChange: number3.onChange,
    settings,
    innerLabelTrim
  });
}
var Container = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridAutoFlow: "column dense",
  alignItems: "center",
  variants: {
    withLock: {
      true: {
        gridTemplateColumns: "10px auto",
        "> svg": {
          cursor: "pointer"
        }
      }
    }
  }
});
function Lock(_ref) {
  let {
    locked
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$1);
  return import_react.default.createElement("svg", _extends({
    width: "10",
    height: "10",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props3), locked ? import_react.default.createElement("path", {
    d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }) : import_react.default.createElement("path", {
    d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
function Vector({
  value,
  onUpdate,
  settings,
  innerLabelTrim
}) {
  const {
    id,
    setSettings
  } = useInputContext();
  const {
    lock,
    locked
  } = settings;
  return import_react.default.createElement(Container, {
    withLock: lock
  }, lock && import_react.default.createElement(Lock, {
    locked,
    onClick: () => setSettings({
      locked: !locked
    })
  }), Object.keys(value).map((key, i) => import_react.default.createElement(Coordinate, {
    id: i === 0 ? id : `${id}.${key}`,
    key,
    valueKey: key,
    value,
    settings: settings[key],
    onUpdate,
    innerLabelTrim
  })));
}
var normalizeKeyedNumberSettings = (value, settings) => {
  const _settings = {};
  let maxStep = 0;
  let minPad = Infinity;
  Object.entries(value).forEach(([key, v]) => {
    _settings[key] = normalize$2(_objectSpread2({
      value: v
    }, settings[key])).settings;
    maxStep = Math.max(maxStep, _settings[key].step);
    minPad = Math.min(minPad, _settings[key].pad);
  });
  for (let key in _settings) {
    const {
      step,
      min,
      max
    } = settings[key] || {};
    if (!isFinite(step) && (!isFinite(min) || !isFinite(max))) {
      _settings[key].step = maxStep;
      _settings[key].pad = minPad;
    }
  }
  return _settings;
};
var _excluded = ["lock"];
var _excluded2 = ["value"];
function getVectorSchema(dimension) {
  const isVectorArray = v8n_esm_default().array().length(dimension).every.number();
  const isVectorObject = (o) => {
    if (!o || typeof o !== "object") return false;
    const values = Object.values(o);
    return values.length === dimension && values.every((v) => isFinite(v));
  };
  return (o) => {
    return isVectorArray.test(o) || isVectorObject(o);
  };
}
function getVectorType(value) {
  return Array.isArray(value) ? "array" : "object";
}
function convert(value, format3, keys) {
  if (getVectorType(value) === format3) return value;
  return format3 === "array" ? Object.values(value) : mapArrayToKeys(value, keys);
}
var sanitizeVector = (value, settings, previousValue) => {
  const _value = convert(value, "object", settings.keys);
  for (let key in _value) _value[key] = sanitize$3(_value[key], settings[key]);
  const _valueKeys = Object.keys(_value);
  let newValue = {};
  if (_valueKeys.length === settings.keys.length) newValue = _value;
  else {
    const _previousValue = convert(previousValue, "object", settings.keys);
    if (_valueKeys.length === 1 && settings.locked) {
      const lockedKey = _valueKeys[0];
      const lockedCoordinate = _value[lockedKey];
      const previousLockedCoordinate = _previousValue[lockedKey];
      const ratio = previousLockedCoordinate !== 0 ? lockedCoordinate / previousLockedCoordinate : 1;
      for (let key in _previousValue) {
        if (key === lockedKey) newValue[lockedKey] = lockedCoordinate;
        else newValue[key] = _previousValue[key] * ratio;
      }
    } else {
      newValue = _objectSpread2(_objectSpread2({}, _previousValue), _value);
    }
  }
  return convert(newValue, settings.format, settings.keys);
};
var formatVector = (value, settings) => convert(value, "object", settings.keys);
var isNumberSettings = (o) => !!o && ("step" in o || "min" in o || "max" in o);
function normalizeVector(value, settings, defaultKeys = []) {
  const {
    lock = false
  } = settings, _settings = _objectWithoutProperties(settings, _excluded);
  const format3 = Array.isArray(value) ? "array" : "object";
  const keys = format3 === "object" ? Object.keys(value) : defaultKeys;
  const _value = convert(value, "object", keys);
  const mergedSettings = isNumberSettings(_settings) ? keys.reduce((acc, k2) => Object.assign(acc, {
    [k2]: _settings
  }), {}) : _settings;
  const numberSettings = normalizeKeyedNumberSettings(_value, mergedSettings);
  return {
    value: format3 === "array" ? value : _value,
    settings: _objectSpread2(_objectSpread2({}, numberSettings), {}, {
      format: format3,
      keys,
      lock,
      locked: false
    })
  };
}
function getVectorPlugin(defaultKeys) {
  return {
    schema: getVectorSchema(defaultKeys.length),
    normalize: (_ref) => {
      let {
        value
      } = _ref, settings = _objectWithoutProperties(_ref, _excluded2);
      return normalizeVector(value, settings, defaultKeys);
    },
    format: (value, settings) => formatVector(value, settings),
    sanitize: (value, settings, prevValue) => sanitizeVector(value, settings, prevValue)
  };
}

// node_modules/leva/dist/leva.esm.js
var import_react4 = __toESM(require_react());

// node_modules/zustand/esm/middleware.js
var subscribeWithSelector = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};

// node_modules/leva/dist/leva.esm.js
var import_client = __toESM(require_client());
var import_merge_value = __toESM(require_merge_value());
var join = (...args) => args.filter(Boolean).join(".");
function getKeyPath(path) {
  const dir = path.split(".");
  return [dir.pop(), dir.join(".") || void 0];
}
function getValuesForPaths(data, paths) {
  return Object.entries(pick(data, paths)).reduce(
    (acc, [, {
      value,
      disabled,
      key
    }]) => {
      acc[key] = disabled ? void 0 : value;
      return acc;
    },
    {}
  );
}
function useCompareMemoize(value, deep) {
  const ref = (0, import_react4.useRef)();
  const compare = deep ? dequal : shallow;
  if (!compare(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepMemo(fn, deps) {
  return (0, import_react4.useMemo)(fn, useCompareMemoize(deps, true));
}
function useToggle(toggled) {
  const wrapperRef = (0, import_react4.useRef)(null);
  const contentRef = (0, import_react4.useRef)(null);
  const firstRender = (0, import_react4.useRef)(true);
  (0, import_react4.useLayoutEffect)(() => {
    if (!toggled) {
      wrapperRef.current.style.height = "0px";
      wrapperRef.current.style.overflow = "hidden";
    }
  }, []);
  (0, import_react4.useEffect)(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let timeout;
    const ref = wrapperRef.current;
    const fixHeight = () => {
      if (toggled) {
        ref.style.removeProperty("height");
        ref.style.removeProperty("overflow");
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    };
    ref.addEventListener("transitionend", fixHeight, {
      once: true
    });
    const {
      height
    } = contentRef.current.getBoundingClientRect();
    ref.style.height = height + "px";
    if (!toggled) {
      ref.style.overflow = "hidden";
      timeout = window.setTimeout(() => ref.style.height = "0px", 50);
    }
    return () => {
      ref.removeEventListener("transitionend", fixHeight);
      clearTimeout(timeout);
    };
  }, [toggled]);
  return {
    wrapperRef,
    contentRef
  };
}
var useVisiblePaths = (store) => {
  const [paths, setPaths] = (0, import_react4.useState)(store.getVisiblePaths());
  (0, import_react4.useEffect)(() => {
    setPaths(store.getVisiblePaths());
    const unsub = store.useStore.subscribe(store.getVisiblePaths, setPaths, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store]);
  return paths;
};
function useValuesForPath(store, paths, initialData) {
  const valuesForPath = store.useStore((s) => {
    const data = _objectSpread2(_objectSpread2({}, initialData), s.data);
    return getValuesForPaths(data, paths);
  }, shallow);
  return valuesForPath;
}
function usePopin(margin = 3) {
  const popinRef = (0, import_react4.useRef)(null);
  const wrapperRef = (0, import_react4.useRef)(null);
  const [shown, setShow] = (0, import_react4.useState)(false);
  const show = (0, import_react4.useCallback)(() => setShow(true), []);
  const hide = (0, import_react4.useCallback)(() => setShow(false), []);
  (0, import_react4.useLayoutEffect)(() => {
    if (shown) {
      const {
        bottom,
        top,
        left
      } = popinRef.current.getBoundingClientRect();
      const {
        height
      } = wrapperRef.current.getBoundingClientRect();
      const direction = bottom + height > window.innerHeight - 40 ? "up" : "down";
      wrapperRef.current.style.position = "fixed";
      wrapperRef.current.style.zIndex = "10000";
      wrapperRef.current.style.left = left + "px";
      if (direction === "down") wrapperRef.current.style.top = bottom + margin + "px";
      else wrapperRef.current.style.bottom = window.innerHeight - top + margin + "px";
    }
  }, [margin, shown]);
  return {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  };
}
k([names_default]);
var convertMap = {
  rgb: "toRgb",
  hsl: "toHsl",
  hsv: "toHsv",
  hex: "toHex"
};
v8n_esm_default.extend({
  color: () => (value) => w(value).isValid()
});
var schema$22 = (o) => v8n_esm_default().color().test(o);
function convert2(color2, {
  format: format3,
  hasAlpha,
  isString
}) {
  const convertFn = convertMap[format3] + (isString && format3 !== "hex" ? "String" : "");
  const result = color2[convertFn]();
  return typeof result === "object" && !hasAlpha ? omit(result, ["a"]) : result;
}
var sanitize$22 = (v, settings) => {
  const color2 = w(v);
  if (!color2.isValid()) throw Error("Invalid color");
  return convert2(color2, settings);
};
var format$12 = (v, settings) => {
  return convert2(w(v), _objectSpread2(_objectSpread2({}, settings), {}, {
    isString: true,
    format: "hex"
  }));
};
var normalize$32 = ({
  value
}) => {
  const _f = I(value);
  const format3 = _f === "name" ? "hex" : _f;
  const hasAlpha = typeof value === "object" ? "a" in value : _f === "hex" && value.length === 8 || /^(rgba)|(hsla)|(hsva)/.test(value);
  const settings = {
    format: format3,
    hasAlpha,
    isString: typeof value === "string"
  };
  return {
    value: sanitize$22(value, settings),
    settings
  };
};
var props$22 = Object.freeze({
  __proto__: null,
  schema: schema$22,
  sanitize: sanitize$22,
  format: format$12,
  normalize: normalize$32
});
var ColorPreview = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  borderRadius: "$sm",
  overflow: "hidden",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  backgroundColor: "#fff",
  backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  $inputStyle: "",
  $hover: "",
  zIndex: 1,
  variants: {
    active: {
      true: {
        $inputStyle: "$accent1"
      }
    }
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "currentColor",
    zIndex: 1
  }
});
var PickerContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto",
  columnGap: "$colGap",
  alignItems: "center"
});
var PickerWrapper = styled("div", {
  width: "$colorPickerWidth",
  height: "$colorPickerHeight",
  ".react-colorful": {
    width: "100%",
    height: "100%",
    boxShadow: "$level2",
    cursor: "crosshair"
  },
  ".react-colorful__saturation": {
    borderRadius: "$sm $sm 0 0"
  },
  ".react-colorful__alpha, .react-colorful__hue": {
    height: 10
  },
  ".react-colorful__last-control": {
    borderRadius: "0 0 $sm $sm"
  },
  ".react-colorful__pointer": {
    height: 12,
    width: 12
  }
});
function convertToRgb(value, format3) {
  return format3 !== "rgb" ? w(value).toRgb() : value;
}
function Color({
  value,
  displayValue,
  settings,
  onUpdate
}) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  const {
    format: format3,
    hasAlpha
  } = settings;
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const timer = (0, import_react4.useRef)(0);
  const [initialRgb, setInitialRgb] = (0, import_react4.useState)(() => convertToRgb(value, format3));
  const ColorPicker = hasAlpha ? Ce : Ne;
  const showPicker = () => {
    setInitialRgb(convertToRgb(value, format3));
    show();
    emitOnEditStart();
  };
  const hidePicker = () => {
    hide();
    emitOnEditEnd();
    window.clearTimeout(timer.current);
  };
  const hideAfterDelay = () => {
    timer.current = window.setTimeout(hidePicker, 500);
  };
  (0, import_react4.useEffect)(() => {
    return () => window.clearTimeout(timer.current);
  }, []);
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement(ColorPreview, {
    ref: popinRef,
    active: shown,
    onClick: () => showPicker(),
    style: {
      color: displayValue
    }
  }), shown && import_react4.default.createElement(Portal, null, import_react4.default.createElement(Overlay, {
    onPointerUp: hidePicker
  }), import_react4.default.createElement(PickerWrapper, {
    ref: wrapperRef,
    onMouseEnter: () => window.clearTimeout(timer.current),
    onMouseLeave: (e) => e.buttons === 0 && hideAfterDelay()
  }, import_react4.default.createElement(ColorPicker, {
    color: initialRgb,
    onChange: onUpdate
  }))));
}
function ColorComponent() {
  const {
    value,
    displayValue,
    label,
    onChange,
    onUpdate,
    settings
  } = useInputContext();
  return import_react4.default.createElement(Row, {
    input: true
  }, import_react4.default.createElement(Label, null, label), import_react4.default.createElement(PickerContainer, null, import_react4.default.createElement(Color, {
    value,
    displayValue,
    onChange,
    onUpdate,
    settings
  }), import_react4.default.createElement(ValueInput, {
    value: displayValue,
    onChange,
    onUpdate
  })));
}
var color = createInternalPlugin(_objectSpread2({
  component: ColorComponent
}, props$22));
function Vector3dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return import_react4.default.createElement(Row, {
    input: true
  }, import_react4.default.createElement(Label, null, label), import_react4.default.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  }));
}
var vector3d = createInternalPlugin(_objectSpread2({
  component: Vector3dComponent
}, getVectorPlugin(["x", "y", "z"])));
var JoystickTrigger = styled("div", {
  $flexCenter: "",
  position: "relative",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  touchAction: "none",
  $draggable: "",
  $hover: "",
  "&:active": {
    cursor: "none"
  },
  "&::after": {
    content: '""',
    backgroundColor: "$accent2",
    height: 4,
    width: 4,
    borderRadius: 2
  }
});
var JoystickPlayground = styled("div", {
  $flexCenter: "",
  width: "$joystickWidth",
  height: "$joystickHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  position: "fixed",
  zIndex: 1e4,
  overflow: "hidden",
  $draggable: "",
  transform: "translate(-50%, -50%)",
  variants: {
    isOutOfBounds: {
      true: {
        backgroundColor: "$elevation1"
      },
      false: {
        backgroundColor: "$elevation3"
      }
    }
  },
  "> div": {
    position: "absolute",
    $flexCenter: "",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "$highlight1",
    backgroundColor: "$elevation3",
    width: "80%",
    height: "80%",
    "&::after,&::before": {
      content: '""',
      position: "absolute",
      zindex: 10,
      backgroundColor: "$highlight1"
    },
    "&::before": {
      width: "100%",
      height: 1
    },
    "&::after": {
      height: "100%",
      width: 1
    }
  },
  "> span": {
    position: "relative",
    zindex: 100,
    width: 10,
    height: 10,
    backgroundColor: "$accent2",
    borderRadius: "50%"
  }
});
function Joystick({
  value,
  settings,
  onUpdate
}) {
  const timeout = (0, import_react4.useRef)();
  const outOfBoundsX = (0, import_react4.useRef)(0);
  const outOfBoundsY = (0, import_react4.useRef)(0);
  const stepMultiplier = (0, import_react4.useRef)(1);
  const [joystickShown, setShowJoystick] = (0, import_react4.useState)(false);
  const [isOutOfBounds, setIsOutOfBounds] = (0, import_react4.useState)(false);
  const [spanRef, set] = useTransform();
  const joystickeRef = (0, import_react4.useRef)(null);
  const playgroundRef = (0, import_react4.useRef)(null);
  (0, import_react4.useLayoutEffect)(() => {
    if (joystickShown) {
      const {
        top,
        left,
        width,
        height
      } = joystickeRef.current.getBoundingClientRect();
      playgroundRef.current.style.left = left + width / 2 + "px";
      playgroundRef.current.style.top = top + height / 2 + "px";
    }
  }, [joystickShown]);
  const {
    keys: [v1, v2],
    joystick
  } = settings;
  const yFactor = joystick === "invertY" ? 1 : -1;
  const {
    [v1]: {
      step: stepV1
    },
    [v2]: {
      step: stepV2
    }
  } = settings;
  const wpx = useTh("sizes", "joystickWidth");
  const hpx = useTh("sizes", "joystickHeight");
  const w2 = parseFloat(wpx) * 0.8 / 2;
  const h = parseFloat(hpx) * 0.8 / 2;
  const startOutOfBounds = (0, import_react4.useCallback)(() => {
    if (timeout.current) return;
    setIsOutOfBounds(true);
    if (outOfBoundsX.current) set({
      x: outOfBoundsX.current * w2
    });
    if (outOfBoundsY.current) set({
      y: outOfBoundsY.current * -h
    });
    timeout.current = window.setInterval(() => {
      onUpdate((v) => {
        const incX = stepV1 * outOfBoundsX.current * stepMultiplier.current;
        const incY = yFactor * stepV2 * outOfBoundsY.current * stepMultiplier.current;
        return Array.isArray(v) ? {
          [v1]: v[0] + incX,
          [v2]: v[1] + incY
        } : {
          [v1]: v[v1] + incX,
          [v2]: v[v2] + incY
        };
      });
    }, 16);
  }, [w2, h, onUpdate, set, stepV1, stepV2, v1, v2, yFactor]);
  const endOutOfBounds = (0, import_react4.useCallback)(() => {
    window.clearTimeout(timeout.current);
    timeout.current = void 0;
    setIsOutOfBounds(false);
  }, []);
  (0, import_react4.useEffect)(() => {
    function setStepMultiplier(event) {
      stepMultiplier.current = multiplyStep(event);
    }
    window.addEventListener("keydown", setStepMultiplier);
    window.addEventListener("keyup", setStepMultiplier);
    return () => {
      window.clearTimeout(timeout.current);
      window.removeEventListener("keydown", setStepMultiplier);
      window.removeEventListener("keyup", setStepMultiplier);
    };
  }, []);
  const bind = useDrag2(({
    first,
    active,
    delta: [dx, dy],
    movement: [mx, my]
  }) => {
    if (first) setShowJoystick(true);
    const _x = clamp(mx, -w2, w2);
    const _y = clamp(my, -h, h);
    outOfBoundsX.current = Math.abs(mx) > Math.abs(_x) ? Math.sign(mx - _x) : 0;
    outOfBoundsY.current = Math.abs(my) > Math.abs(_y) ? Math.sign(_y - my) : 0;
    let newX = value[v1];
    let newY = value[v2];
    if (active) {
      if (!outOfBoundsX.current) {
        newX += dx * stepV1 * stepMultiplier.current;
        set({
          x: _x
        });
      }
      if (!outOfBoundsY.current) {
        newY -= yFactor * dy * stepV2 * stepMultiplier.current;
        set({
          y: _y
        });
      }
      if (outOfBoundsX.current || outOfBoundsY.current) startOutOfBounds();
      else endOutOfBounds();
      onUpdate({
        [v1]: newX,
        [v2]: newY
      });
    } else {
      setShowJoystick(false);
      outOfBoundsX.current = 0;
      outOfBoundsY.current = 0;
      set({
        x: 0,
        y: 0
      });
      endOutOfBounds();
    }
  });
  return import_react4.default.createElement(JoystickTrigger, _extends({
    ref: joystickeRef
  }, bind()), joystickShown && import_react4.default.createElement(Portal, null, import_react4.default.createElement(JoystickPlayground, {
    ref: playgroundRef,
    isOutOfBounds
  }, import_react4.default.createElement("div", null), import_react4.default.createElement("span", {
    ref: spanRef
  }))));
}
var Container$1 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  variants: {
    withJoystick: {
      true: {
        gridTemplateColumns: "$sizes$rowHeight auto"
      },
      false: {
        gridTemplateColumns: "auto"
      }
    }
  }
});
function Vector2dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return import_react4.default.createElement(Row, {
    input: true
  }, import_react4.default.createElement(Label, null, label), import_react4.default.createElement(Container$1, {
    withJoystick: !!settings.joystick
  }, settings.joystick && import_react4.default.createElement(Joystick, {
    value: displayValue,
    settings,
    onUpdate
  }), import_react4.default.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  })));
}
var _excluded$72 = ["joystick"];
var plugin = getVectorPlugin(["x", "y"]);
var normalize$22 = (_ref) => {
  let {
    joystick = true
  } = _ref, input = _objectWithoutProperties(_ref, _excluded$72);
  const {
    value,
    settings
  } = plugin.normalize(input);
  return {
    value,
    settings: _objectSpread2(_objectSpread2({}, settings), {}, {
      joystick
    })
  };
};
var vector2d = createInternalPlugin(_objectSpread2(_objectSpread2({
  component: Vector2dComponent
}, plugin), {}, {
  normalize: normalize$22
}));
var sanitize$12 = (v) => {
  if (v === void 0) return void 0;
  if (v instanceof File) {
    try {
      return URL.createObjectURL(v);
    } catch (e) {
      return void 0;
    }
  }
  if (typeof v === "string" && v.indexOf("blob:") === 0) return v;
  throw Error(`Invalid image format [undefined | blob | File].`);
};
var schema$12 = (_o, s) => typeof s === "object" && "image" in s;
var normalize$12 = ({
  image: image2
}) => {
  return {
    value: image2
  };
};
var props$12 = Object.freeze({
  __proto__: null,
  sanitize: sanitize$12,
  schema: schema$12,
  normalize: normalize$12
});
var ImageContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto 20px",
  columnGap: "$colGap",
  alignItems: "center"
});
var DropZone = styled("div", {
  $flexCenter: "",
  overflow: "hidden",
  height: "$rowHeight",
  background: "$elevation3",
  textAlign: "center",
  color: "inherit",
  borderRadius: "$sm",
  outline: "none",
  userSelect: "none",
  cursor: "pointer",
  $inputStyle: "",
  $hover: "",
  $focusWithin: "",
  $active: "$accent1 $elevation1",
  variants: {
    isDragAccept: {
      true: {
        $inputStyle: "$accent1",
        backgroundColor: "$elevation1"
      }
    }
  }
});
var ImagePreview = styled("div", {
  boxSizing: "border-box",
  borderRadius: "$sm",
  height: "$rowHeight",
  width: "$rowHeight",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center",
  variants: {
    hasImage: {
      true: {
        cursor: "pointer",
        $hover: "",
        $active: ""
      }
    }
  }
});
var ImageLargePreview = styled("div", {
  $flexCenter: "",
  width: "$imagePreviewWidth",
  height: "$imagePreviewHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  pointerEvents: "none",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center"
});
var Instructions = styled("div", {
  fontSize: "0.8em",
  height: "100%",
  padding: "$rowGap $md"
});
var Remove = styled("div", {
  $flexCenter: "",
  top: "0",
  right: "0",
  marginRight: "$sm",
  height: "100%",
  cursor: "pointer",
  variants: {
    disabled: {
      true: {
        color: "$elevation3",
        cursor: "default"
      }
    }
  },
  "&::after,&::before": {
    content: '""',
    position: "absolute",
    height: 2,
    width: 10,
    borderRadius: 1,
    backgroundColor: "currentColor"
  },
  "&::after": {
    transform: "rotate(45deg)"
  },
  "&::before": {
    transform: "rotate(-45deg)"
  }
});
function ImageComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled
  } = useInputContext();
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const onDrop = (0, import_react4.useCallback)((acceptedFiles) => {
    if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
  }, [onUpdate]);
  const clear = (0, import_react4.useCallback)((e) => {
    e.stopPropagation();
    onUpdate(void 0);
  }, [onUpdate]);
  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop,
    disabled
  });
  return import_react4.default.createElement(Row, {
    input: true
  }, import_react4.default.createElement(Label, null, label), import_react4.default.createElement(ImageContainer, null, import_react4.default.createElement(ImagePreview, {
    ref: popinRef,
    hasImage: !!value,
    onPointerDown: () => !!value && show(),
    onPointerUp: hide,
    style: {
      backgroundImage: value ? `url(${value})` : "none"
    }
  }), shown && !!value && import_react4.default.createElement(Portal, null, import_react4.default.createElement(Overlay, {
    onPointerUp: hide,
    style: {
      cursor: "pointer"
    }
  }), import_react4.default.createElement(ImageLargePreview, {
    ref: wrapperRef,
    style: {
      backgroundImage: `url(${value})`
    }
  })), import_react4.default.createElement(DropZone, getRootProps({
    isDragAccept
  }), import_react4.default.createElement("input", getInputProps()), import_react4.default.createElement(Instructions, null, isDragAccept ? "drop image" : "click or drop")), import_react4.default.createElement(Remove, {
    onClick: clear,
    disabled: !value
  })));
}
var image = createInternalPlugin(_objectSpread2({
  component: ImageComponent
}, props$12));
var number2 = v8n_esm_default().number();
var schema2 = (o, s) => v8n_esm_default().array().length(2).every.number().test(o) && v8n_esm_default().schema({
  min: number2,
  max: number2
}).test(s);
var format2 = (v) => ({
  min: v[0],
  max: v[1]
});
var sanitize2 = (value, {
  bounds: [MIN, MAX]
}, prevValue) => {
  const _value = Array.isArray(value) ? format2(value) : value;
  const _newValue = {
    min: prevValue[0],
    max: prevValue[1]
  };
  const {
    min,
    max
  } = _objectSpread2(_objectSpread2({}, _newValue), _value);
  return [clamp(Number(min), MIN, Math.max(MIN, max)), clamp(Number(max), Math.min(MAX, min), MAX)];
};
var normalize2 = ({
  value,
  min,
  max
}) => {
  const boundsSettings = {
    min,
    max
  };
  const _settings = normalizeKeyedNumberSettings(format2(value), {
    min: boundsSettings,
    max: boundsSettings
  });
  const bounds = [min, max];
  const settings = _objectSpread2(_objectSpread2({}, _settings), {}, {
    bounds
  });
  const _value = sanitize2(format2(value), settings, value);
  return {
    value: _value,
    settings
  };
};
var props2 = Object.freeze({
  __proto__: null,
  schema: schema2,
  format: format2,
  sanitize: sanitize2,
  normalize: normalize2
});
var _excluded$62 = ["value", "bounds", "onDrag"];
var _excluded2$12 = ["bounds"];
var Container2 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridTemplateColumns: "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)"
});
function IntervalSlider(_ref) {
  let {
    value,
    bounds: [min, max],
    onDrag
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$62);
  const ref = (0, import_react4.useRef)(null);
  const minScrubberRef = (0, import_react4.useRef)(null);
  const maxScrubberRef = (0, import_react4.useRef)(null);
  const rangeWidth = (0, import_react4.useRef)(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag2(({
    event,
    first,
    xy: [x],
    movement: [mx],
    memo: _memo = {}
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === minScrubberRef.current || (event === null || event === void 0 ? void 0 : event.target) === maxScrubberRef.current;
      _memo.pos = invertedRange((x - left) / width, min, max);
      const delta = Math.abs(_memo.pos - value.min) - Math.abs(_memo.pos - value.max);
      _memo.key = delta < 0 || delta === 0 && _memo.pos <= value.min ? "min" : "max";
      if (targetIsScrub) _memo.pos = value[_memo.key];
    }
    const newValue = _memo.pos + invertedRange(mx / rangeWidth.current, 0, max - min);
    onDrag({
      [_memo.key]: sanitizeStep(newValue, settings[_memo.key])
    });
    return _memo;
  });
  const minStyle = `calc(${range(value.min, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  const maxStyle = `calc(${1 - range(value.max, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  return import_react4.default.createElement(RangeWrapper, _extends({
    ref
  }, bind()), import_react4.default.createElement(Range, null, import_react4.default.createElement(Indicator, {
    style: {
      left: minStyle,
      right: maxStyle
    }
  })), import_react4.default.createElement(Scrubber, {
    position: "left",
    ref: minScrubberRef,
    style: {
      left: minStyle
    }
  }), import_react4.default.createElement(Scrubber, {
    position: "right",
    ref: maxScrubberRef,
    style: {
      right: maxStyle
    }
  }));
}
function IntervalComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  const _settings = _objectWithoutProperties(settings, _excluded2$12);
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement(Row, {
    input: true
  }, import_react4.default.createElement(Label, null, label), import_react4.default.createElement(Container2, null, import_react4.default.createElement(IntervalSlider, _extends({
    value: displayValue
  }, settings, {
    onDrag: onUpdate
  })), import_react4.default.createElement(Vector, {
    value: displayValue,
    settings: _settings,
    onUpdate,
    innerLabelTrim: 0
  }))));
}
var interval = createInternalPlugin(_objectSpread2({
  component: IntervalComponent
}, props2));
var createEventEmitter = () => {
  const listenerMapping = /* @__PURE__ */ new Map();
  return {
    on: (topic, listener) => {
      let listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        listeners = /* @__PURE__ */ new Set();
        listenerMapping.set(topic, listeners);
      }
      listeners.add(listener);
    },
    off: (topic, listener) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      listeners.delete(listener);
      if (listeners.size === 0) {
        listenerMapping.delete(topic);
      }
    },
    emit: (topic, ...args) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      for (const listener of listeners) {
        listener(...args);
      }
    }
  };
};
var _excluded$52 = ["type", "value"];
var _excluded22 = ["onChange", "transient", "onEditStart", "onEditEnd"];
var Store = function Store2() {
  const store = create(subscribeWithSelector(() => ({
    data: {}
  })));
  const eventEmitter = createEventEmitter();
  this.storeId = getUid();
  this.useStore = store;
  const folders = {};
  const orderedPaths = /* @__PURE__ */ new Set();
  this.getVisiblePaths = () => {
    const data = this.getData();
    const paths = Object.keys(data);
    const hiddenFolders = [];
    Object.entries(folders).forEach(([path, settings]) => {
      if (settings.render && paths.some((p) => p.indexOf(path) === 0) && !settings.render(this.get))
        hiddenFolders.push(path + ".");
    });
    const visiblePaths = [];
    orderedPaths.forEach((path) => {
      if (path in data && data[path].__refCount > 0 && hiddenFolders.every((p) => path.indexOf(p) === -1) && (!data[path].render || data[path].render(this.get))) {
        visiblePaths.push(path);
      }
    });
    return visiblePaths;
  };
  this.setOrderedPaths = (newPaths) => {
    newPaths.forEach((p) => orderedPaths.add(p));
  };
  this.orderPaths = (paths) => {
    this.setOrderedPaths(paths);
    return paths;
  };
  this.disposePaths = (paths) => {
    store.setState((s) => {
      const data = s.data;
      paths.forEach((path) => {
        if (path in data) {
          const input = data[path];
          input.__refCount--;
          if (input.__refCount === 0 && input.type in SpecialInputs) {
            delete data[path];
          }
        }
      });
      return {
        data
      };
    });
  };
  this.dispose = () => {
    store.setState(() => {
      return {
        data: {}
      };
    });
  };
  this.getFolderSettings = (path) => {
    return folders[path] || {};
  };
  this.getData = () => {
    return store.getState().data;
  };
  this.addData = (newData, override) => {
    store.setState((s) => {
      const data = s.data;
      Object.entries(newData).forEach(([path, newInputData]) => {
        let input = data[path];
        if (!!input) {
          const {
            type,
            value
          } = newInputData, rest2 = _objectWithoutProperties(newInputData, _excluded$52);
          if (type !== input.type) {
            warn(LevaErrors.INPUT_TYPE_OVERRIDE, type);
          } else {
            if (input.__refCount === 0 || override) {
              Object.assign(input, rest2);
            }
            input.__refCount++;
          }
        } else {
          data[path] = _objectSpread2(_objectSpread2({}, newInputData), {}, {
            __refCount: 1
          });
        }
      });
      return {
        data
      };
    });
  };
  this.setValueAtPath = (path, value, fromPanel) => {
    store.setState((s) => {
      const data = s.data;
      updateInput(data[path], value, path, this, fromPanel);
      return {
        data
      };
    });
  };
  this.setSettingsAtPath = (path, settings) => {
    store.setState((s) => {
      const data = s.data;
      data[path].settings = _objectSpread2(_objectSpread2({}, data[path].settings), settings);
      return {
        data
      };
    });
  };
  this.disableInputAtPath = (path, flag) => {
    store.setState((s) => {
      const data = s.data;
      data[path].disabled = flag;
      return {
        data
      };
    });
  };
  this.set = (values, fromPanel) => {
    store.setState((s) => {
      const data = s.data;
      Object.entries(values).forEach(([path, value]) => {
        try {
          updateInput(data[path], value, void 0, void 0, fromPanel);
        } catch (e) {
          if (true) {
            console.warn(`[This message will only show in development]: \`set\` for path ${path} has failed.`, e);
          }
        }
      });
      return {
        data
      };
    });
  };
  this.getInput = (path) => {
    try {
      return this.getData()[path];
    } catch (e) {
      warn(LevaErrors.PATH_DOESNT_EXIST, path);
    }
  };
  this.get = (path) => {
    var _this$getInput;
    return (_this$getInput = this.getInput(path)) === null || _this$getInput === void 0 ? void 0 : _this$getInput.value;
  };
  this.emitOnEditStart = (path) => {
    eventEmitter.emit(`onEditStart:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.emitOnEditEnd = (path) => {
    eventEmitter.emit(`onEditEnd:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.subscribeToEditStart = (path, listener) => {
    const _path = `onEditStart:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  this.subscribeToEditEnd = (path, listener) => {
    const _path = `onEditEnd:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  const _getDataFromSchema = (schema3, rootPath, mappedPaths) => {
    const data = {};
    Object.entries(schema3).forEach(([key, rawInput]) => {
      if (key === "") return warn(LevaErrors.EMPTY_KEY);
      let newPath = join(rootPath, key);
      if (rawInput.type === SpecialInputs.FOLDER) {
        const newData = _getDataFromSchema(rawInput.schema, newPath, mappedPaths);
        Object.assign(data, newData);
        if (!(newPath in folders)) folders[newPath] = rawInput.settings;
      } else if (key in mappedPaths) {
        warn(LevaErrors.DUPLICATE_KEYS, key, newPath, mappedPaths[key].path);
      } else {
        const normalizedInput = normalizeInput(rawInput, key, newPath, data);
        if (normalizedInput) {
          const {
            type,
            options,
            input
          } = normalizedInput;
          const {
            onChange,
            transient,
            onEditStart,
            onEditEnd
          } = options, _options = _objectWithoutProperties(options, _excluded22);
          data[newPath] = _objectSpread2(_objectSpread2(_objectSpread2({
            type
          }, _options), input), {}, {
            fromPanel: true
          });
          mappedPaths[key] = {
            path: newPath,
            onChange,
            transient,
            onEditStart,
            onEditEnd
          };
        } else {
          warn(LevaErrors.UNKNOWN_INPUT, newPath, rawInput);
        }
      }
    });
    return data;
  };
  this.getDataFromSchema = (schema3) => {
    const mappedPaths = {};
    const data = _getDataFromSchema(schema3, "", mappedPaths);
    return [data, mappedPaths];
  };
};
var levaStore = new Store();
function useCreateStore() {
  return (0, import_react4.useMemo)(() => new Store(), []);
}
if (typeof window !== "undefined") {
  window.__STORE = levaStore;
}
var defaultSettings$2 = {
  collapsed: false
};
function folder(schema3, settings) {
  return {
    type: SpecialInputs.FOLDER,
    schema: schema3,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$2), settings)
  };
}
var defaultSettings$1 = {
  disabled: false
};
function button(onClick, settings) {
  return {
    type: SpecialInputs.BUTTON,
    onClick,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$1), settings)
  };
}
function buttonGroup(opts) {
  return {
    type: SpecialInputs.BUTTON_GROUP,
    opts
  };
}
var defaultSettings = {
  graph: false,
  interval: 100
};
function monitor(objectOrFn, settings) {
  return {
    type: SpecialInputs.MONITOR,
    objectOrFn,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings), settings)
  };
}
var isInput = (v) => "__levaInput" in v;
var buildTree = (paths, filter) => {
  const tree = {};
  const _filter = filter ? filter.toLowerCase() : null;
  paths.forEach((path) => {
    const [valueKey, folderPath] = getKeyPath(path);
    if (!_filter || valueKey.toLowerCase().indexOf(_filter) > -1) {
      (0, import_merge_value.default)(tree, folderPath, {
        [valueKey]: {
          __levaInput: true,
          path
        }
      });
    }
  });
  return tree;
};
var _excluded$42 = ["type", "label", "path", "valueKey", "value", "settings", "setValue", "disabled"];
function ControlInput(_ref) {
  let {
    type,
    label,
    path,
    valueKey,
    value,
    settings,
    setValue,
    disabled
  } = _ref, rest2 = _objectWithoutProperties(_ref, _excluded$42);
  const {
    displayValue,
    onChange,
    onUpdate
  } = useInputSetters({
    type,
    value,
    settings,
    setValue
  });
  const Input = Plugins[type].component;
  if (!Input) {
    warn(LevaErrors.NO_COMPONENT_FOR_TYPE, type, path);
    return null;
  }
  return import_react4.default.createElement(InputContext.Provider, {
    value: _objectSpread2({
      key: valueKey,
      path,
      id: "" + path,
      label,
      displayValue,
      value,
      onChange,
      onUpdate,
      settings,
      setValue,
      disabled
    }, rest2)
  }, import_react4.default.createElement(StyledInputWrapper$1, {
    disabled
  }, import_react4.default.createElement(Input, null)));
}
var StyledButton = styled("button", {
  display: "block",
  $reset: "",
  fontWeight: "$button",
  height: "$rowHeight",
  borderStyle: "none",
  borderRadius: "$sm",
  backgroundColor: "$elevation1",
  color: "$highlight1",
  "&:not(:disabled)": {
    color: "$highlight3",
    backgroundColor: "$accent2",
    cursor: "pointer",
    $hover: "$accent3",
    $active: "$accent3 $accent1",
    $focus: ""
  }
});
function Button({
  onClick,
  settings,
  label
}) {
  const store = useStoreContext();
  return import_react4.default.createElement(Row, null, import_react4.default.createElement(StyledButton, {
    disabled: settings.disabled,
    onClick: () => onClick(store.get)
  }, label));
}
var StyledButtonGroup = styled("div", {
  $flex: "",
  justifyContent: "flex-end",
  gap: "$colGap"
});
var StyledButtonGroupButton = styled("button", {
  $reset: "",
  cursor: "pointer",
  borderRadius: "$xs",
  "&:hover": {
    backgroundColor: "$elevation3"
  }
});
var getOpts = ({
  label: _label,
  opts: _opts
}) => {
  let label = typeof _label === "string" ? _label.trim() === "" ? null : _label : _label;
  let opts = _opts;
  if (typeof _opts.opts === "object") {
    if (opts.label !== void 0) {
      label = _opts.label;
    }
    opts = _opts.opts;
  }
  return {
    label,
    opts
  };
};
function ButtonGroup(props3) {
  const {
    label,
    opts
  } = getOpts(props3);
  const store = useStoreContext();
  return import_react4.default.createElement(Row, {
    input: !!label
  }, label && import_react4.default.createElement(Label, null, label), import_react4.default.createElement(StyledButtonGroup, null, Object.entries(opts).map(([label2, onClick]) => import_react4.default.createElement(StyledButtonGroupButton, {
    key: label2,
    onClick: () => onClick(store.get)
  }, label2))));
}
var Canvas = styled("canvas", {
  height: "$monitorHeight",
  width: "100%",
  display: "block",
  borderRadius: "$sm"
});
var POINTS = 100;
function push(arr, val) {
  arr.push(val);
  if (arr.length > POINTS) arr.shift();
}
var MonitorCanvas = (0, import_react4.forwardRef)(function({
  initialValue
}, ref) {
  const accentColor = useTh("colors", "highlight3");
  const backgroundColor = useTh("colors", "elevation2");
  const fillColor = useTh("colors", "highlight1");
  const [gradientTop, gradientBottom] = (0, import_react4.useMemo)(() => {
    return [w(fillColor).alpha(0.4).toRgbString(), w(fillColor).alpha(0.1).toRgbString()];
  }, [fillColor]);
  const points = (0, import_react4.useRef)([initialValue]);
  const min = (0, import_react4.useRef)(initialValue);
  const max = (0, import_react4.useRef)(initialValue);
  const raf = (0, import_react4.useRef)();
  const drawPlot = (0, import_react4.useCallback)((_canvas, _ctx) => {
    if (!_canvas) return;
    const {
      width,
      height
    } = _canvas;
    const path = new Path2D();
    const interval2 = width / POINTS;
    const verticalPadding = height * 0.05;
    for (let i = 0; i < points.current.length; i++) {
      const p = range(points.current[i], min.current, max.current);
      const x = interval2 * i;
      const y = height - p * (height - verticalPadding * 2) - verticalPadding;
      path.lineTo(x, y);
    }
    _ctx.clearRect(0, 0, width, height);
    const gradientPath = new Path2D(path);
    gradientPath.lineTo(interval2 * (points.current.length + 1), height);
    gradientPath.lineTo(0, height);
    gradientPath.lineTo(0, 0);
    const gradient = _ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, gradientTop);
    gradient.addColorStop(1, gradientBottom);
    _ctx.fillStyle = gradient;
    _ctx.fill(gradientPath);
    _ctx.strokeStyle = backgroundColor;
    _ctx.lineJoin = "round";
    _ctx.lineWidth = 14;
    _ctx.stroke(path);
    _ctx.strokeStyle = accentColor;
    _ctx.lineWidth = 2;
    _ctx.stroke(path);
  }, [accentColor, backgroundColor, gradientTop, gradientBottom]);
  const [canvas, ctx] = useCanvas2d(drawPlot);
  (0, import_react4.useImperativeHandle)(ref, () => ({
    frame: (val) => {
      if (min.current === void 0 || val < min.current) min.current = val;
      if (max.current === void 0 || val > max.current) max.current = val;
      push(points.current, val);
      raf.current = requestAnimationFrame(() => drawPlot(canvas.current, ctx.current));
    }
  }), [canvas, ctx, drawPlot]);
  (0, import_react4.useEffect)(() => () => cancelAnimationFrame(raf.current), []);
  return import_react4.default.createElement(Canvas, {
    ref: canvas
  });
});
var parse = (val) => Number.isFinite(val) ? val.toPrecision(2) : val.toString();
var MonitorLog = (0, import_react4.forwardRef)(function({
  initialValue
}, ref) {
  const [val, set] = (0, import_react4.useState)(parse(initialValue));
  (0, import_react4.useImperativeHandle)(ref, () => ({
    frame: (v) => set(parse(v))
  }), []);
  return import_react4.default.createElement("div", null, val);
});
function getValue(o) {
  return typeof o === "function" ? o() : o.current;
}
function Monitor({
  label,
  objectOrFn,
  settings
}) {
  const ref = (0, import_react4.useRef)();
  const initialValue = (0, import_react4.useRef)(getValue(objectOrFn));
  (0, import_react4.useEffect)(() => {
    const timeout = window.setInterval(() => {
      var _ref$current;
      if (document.hidden) return;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.frame(getValue(objectOrFn));
    }, settings.interval);
    return () => window.clearInterval(timeout);
  }, [objectOrFn, settings.interval]);
  return import_react4.default.createElement(Row, {
    input: true
  }, import_react4.default.createElement(Label, {
    align: "top"
  }, label), settings.graph ? import_react4.default.createElement(MonitorCanvas, {
    ref,
    initialValue: initialValue.current
  }) : import_react4.default.createElement(MonitorLog, {
    ref,
    initialValue: initialValue.current
  }));
}
var _excluded$32 = ["type", "label", "key"];
var specialComponents = {
  [SpecialInputs.BUTTON]: Button,
  [SpecialInputs.BUTTON_GROUP]: ButtonGroup,
  [SpecialInputs.MONITOR]: Monitor
};
var Control = import_react4.default.memo(({
  path
}) => {
  const [input, {
    set,
    setSettings,
    disable,
    storeId,
    emitOnEditStart,
    emitOnEditEnd
  }] = useInput(path);
  if (!input) return null;
  const {
    type,
    label,
    key
  } = input, inputProps = _objectWithoutProperties(input, _excluded$32);
  if (type in SpecialInputs) {
    const SpecialInputForType = specialComponents[type];
    return import_react4.default.createElement(SpecialInputForType, _extends({
      label,
      path
    }, inputProps));
  }
  if (!(type in Plugins)) {
    log(LevaErrors.UNSUPPORTED_INPUT, type, path);
    return null;
  }
  return import_react4.default.createElement(ControlInput, _extends({
    key: storeId + path,
    type,
    label,
    storeId,
    path,
    valueKey: key,
    setValue: set,
    setSettings,
    disable,
    emitOnEditStart,
    emitOnEditEnd
  }, inputProps));
});
function FolderTitle({
  toggle,
  toggled,
  name
}) {
  return import_react4.default.createElement(StyledTitle, {
    onClick: () => toggle()
  }, import_react4.default.createElement(Chevron, {
    toggled
  }), import_react4.default.createElement("div", null, name));
}
var Folder = ({
  name,
  path,
  tree
}) => {
  const store = useStoreContext();
  const newPath = join(path, name);
  const {
    collapsed,
    color: color2
  } = store.getFolderSettings(newPath);
  const [toggled, setToggle] = (0, import_react4.useState)(!collapsed);
  const folderRef = (0, import_react4.useRef)(null);
  const widgetColor = useTh("colors", "folderWidgetColor");
  const textColor = useTh("colors", "folderTextColor");
  (0, import_react4.useLayoutEffect)(() => {
    folderRef.current.style.setProperty("--leva-colors-folderWidgetColor", color2 || widgetColor);
    folderRef.current.style.setProperty("--leva-colors-folderTextColor", color2 || textColor);
  }, [color2, widgetColor, textColor]);
  return import_react4.default.createElement(StyledFolder, {
    ref: folderRef
  }, import_react4.default.createElement(FolderTitle, {
    name,
    toggled,
    toggle: () => setToggle((t) => !t)
  }), import_react4.default.createElement(TreeWrapper, {
    parent: newPath,
    tree,
    toggled
  }));
};
var TreeWrapper = import_react4.default.memo(({
  isRoot: _isRoot = false,
  fill: _fill = false,
  flat: _flat = false,
  parent,
  tree,
  toggled
}) => {
  const {
    wrapperRef,
    contentRef
  } = useToggle(toggled);
  const store = useStoreContext();
  const getOrder = ([key, o]) => {
    var _store$getInput;
    const order = isInput(o) ? (_store$getInput = store.getInput(o.path)) === null || _store$getInput === void 0 ? void 0 : _store$getInput.order : store.getFolderSettings(join(parent, key)).order;
    return order || 0;
  };
  const entries = Object.entries(tree).sort((a, b) => getOrder(a) - getOrder(b));
  return import_react4.default.createElement(StyledWrapper, {
    ref: wrapperRef,
    isRoot: _isRoot,
    fill: _fill,
    flat: _flat
  }, import_react4.default.createElement(StyledContent, {
    ref: contentRef,
    isRoot: _isRoot,
    toggled
  }, entries.map(([key, value]) => isInput(value) ? import_react4.default.createElement(Control, {
    key: value.path,
    valueKey: value.valueKey,
    path: value.path
  }) : import_react4.default.createElement(Folder, {
    key,
    name: key,
    path: parent,
    tree: value
  }))));
});
var StyledRoot = styled("div", {
  position: "relative",
  fontFamily: "$mono",
  fontSize: "$root",
  color: "$rootText",
  backgroundColor: "$elevation1",
  variants: {
    fill: {
      false: {
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1e3,
        width: "$rootWidth"
      },
      true: {
        position: "relative",
        width: "100%"
      }
    },
    flat: {
      false: {
        borderRadius: "$lg",
        boxShadow: "$level1"
      }
    },
    oneLineLabels: {
      true: {
        [`${StyledInputRow}`]: {
          gridTemplateColumns: "auto",
          gridAutoColumns: "minmax(max-content, 1fr)",
          gridAutoRows: "minmax($sizes$rowHeight), auto)",
          rowGap: 0,
          columnGap: 0,
          marginTop: "$rowGap"
        }
      }
    },
    hideTitleBar: {
      true: {
        $$titleBarHeight: "0px"
      },
      false: {
        $$titleBarHeight: "$sizes$titleBarHeight"
      }
    }
  },
  "&,*,*:after,*:before": {
    boxSizing: "border-box"
  },
  "*::selection": {
    backgroundColor: "$accent2"
  }
});
var iconWidth = 40;
var Icon = styled("i", {
  $flexCenter: "",
  width: iconWidth,
  userSelect: "none",
  cursor: "pointer",
  "> svg": {
    fill: "$highlight1",
    transition: "transform 350ms ease, fill 250ms ease"
  },
  "&:hover > svg": {
    fill: "$highlight3"
  },
  variants: {
    active: {
      true: {
        "> svg": {
          fill: "$highlight2"
        }
      }
    }
  }
});
var StyledTitleWithFilter = styled("div", {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  height: "$titleBarHeight",
  variants: {
    mode: {
      drag: {
        cursor: "grab"
      }
    }
  }
});
var FilterWrapper = styled("div", {
  $flex: "",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  transition: "height 250ms ease",
  color: "$highlight3",
  paddingLeft: "$md",
  [`> ${Icon}`]: {
    height: 30
  },
  variants: {
    toggled: {
      true: {
        height: 30
      },
      false: {
        height: 0
      }
    }
  }
});
var StyledFilterInput = styled("input", {
  $reset: "",
  flex: 1,
  position: "relative",
  height: 30,
  width: "100%",
  backgroundColor: "transparent",
  fontSize: "10px",
  borderRadius: "$root",
  "&:focus": {},
  "&::placeholder": {
    color: "$highlight2"
  }
});
var TitleContainer = styled("div", {
  touchAction: "none",
  $flexCenter: "",
  flex: 1,
  "> svg": {
    fill: "$highlight1"
  },
  color: "$highlight1",
  variants: {
    drag: {
      true: {
        $draggable: "",
        "> svg": {
          transition: "fill 250ms ease"
        },
        "&:hover": {
          color: "$highlight3"
        },
        "&:hover > svg": {
          fill: "$highlight3"
        }
      }
    },
    filterEnabled: {
      false: {
        paddingRight: iconWidth
      }
    }
  }
});
var FilterInput = import_react4.default.forwardRef(({
  setFilter,
  toggle
}, ref) => {
  const [value, set] = (0, import_react4.useState)("");
  const debouncedOnChange = (0, import_react4.useMemo)(() => debounce(setFilter, 250), [setFilter]);
  const clear = () => {
    setFilter("");
    set("");
  };
  const _onChange = (e) => {
    const v = e.currentTarget.value;
    toggle(true);
    set(v);
  };
  (0, import_react4.useEffect)(() => {
    debouncedOnChange(value);
  }, [value, debouncedOnChange]);
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement(StyledFilterInput, {
    ref,
    value,
    placeholder: "[Open filter with CMD+SHIFT+L]",
    onPointerDown: (e) => e.stopPropagation(),
    onChange: _onChange
  }), import_react4.default.createElement(Icon, {
    onClick: () => clear(),
    style: {
      visibility: value ? "visible" : "hidden"
    }
  }, import_react4.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "14",
    width: "14",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react4.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }))));
});
function TitleWithFilter({
  setFilter,
  onDrag,
  onDragStart,
  onDragEnd,
  toggle,
  toggled,
  title,
  drag,
  filterEnabled,
  from
}) {
  const [filterShown, setShowFilter] = (0, import_react4.useState)(false);
  const inputRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    var _inputRef$current, _inputRef$current2;
    if (filterShown) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    else (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
  }, [filterShown]);
  const bind = useDrag2(({
    offset: [x, y],
    first,
    last
  }) => {
    onDrag({
      x,
      y
    });
    if (first) {
      onDragStart({
        x,
        y
      });
    }
    if (last) {
      onDragEnd({
        x,
        y
      });
    }
  }, {
    filterTaps: true,
    from: ({
      offset: [x, y]
    }) => [(from === null || from === void 0 ? void 0 : from.x) || x, (from === null || from === void 0 ? void 0 : from.y) || y]
  });
  (0, import_react4.useEffect)(() => {
    const handleShortcut = (event) => {
      if (event.key === "L" && event.shiftKey && event.metaKey) {
        setShowFilter((f) => !f);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement(StyledTitleWithFilter, {
    mode: drag ? "drag" : void 0
  }, import_react4.default.createElement(Icon, {
    active: !toggled,
    onClick: () => toggle()
  }, import_react4.default.createElement(Chevron, {
    toggled,
    width: 12,
    height: 8
  })), import_react4.default.createElement(TitleContainer, _extends({}, drag ? bind() : {}, {
    drag,
    filterEnabled
  }), title === void 0 && drag ? import_react4.default.createElement("svg", {
    width: "20",
    height: "10",
    viewBox: "0 0 28 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, import_react4.default.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2"
  }), import_react4.default.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2"
  }), import_react4.default.createElement("circle", {
    cx: "26",
    cy: "2",
    r: "2"
  }), import_react4.default.createElement("circle", {
    cx: "2",
    cy: "12",
    r: "2"
  }), import_react4.default.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "2"
  }), import_react4.default.createElement("circle", {
    cx: "26",
    cy: "12",
    r: "2"
  })) : title), filterEnabled && import_react4.default.createElement(Icon, {
    active: filterShown,
    onClick: () => setShowFilter((f) => !f)
  }, import_react4.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 0 20 20"
  }, import_react4.default.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), import_react4.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  })))), import_react4.default.createElement(FilterWrapper, {
    toggled: filterShown
  }, import_react4.default.createElement(FilterInput, {
    ref: inputRef,
    setFilter,
    toggle
  })));
}
var _excluded$22 = ["store", "hidden", "theme", "collapsed"];
function LevaRoot(_ref) {
  let {
    store,
    hidden = false,
    theme,
    collapsed = false
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$22);
  const themeContext = useDeepMemo(() => mergeTheme(theme), [theme]);
  const [toggled, setToggle] = (0, import_react4.useState)(!collapsed);
  const computedToggled = typeof collapsed === "object" ? !collapsed.collapsed : toggled;
  const computedSetToggle = (0, import_react4.useMemo)(() => {
    if (typeof collapsed === "object") {
      return (value) => {
        if (typeof value === "function") {
          collapsed.onChange(!value(!collapsed.collapsed));
        } else {
          collapsed.onChange(!value);
        }
      };
    }
    return setToggle;
  }, [collapsed]);
  if (!store || hidden) return null;
  return import_react4.default.createElement(ThemeContext.Provider, {
    value: themeContext
  }, import_react4.default.createElement(LevaCore, _extends({
    store
  }, props3, {
    toggled: computedToggled,
    setToggle: computedSetToggle,
    rootClass: themeContext.className
  })));
}
var LevaCore = import_react4.default.memo(({
  store,
  rootClass,
  fill: _fill = false,
  flat: _flat = false,
  neverHide: _neverHide = false,
  oneLineLabels: _oneLineLabels = false,
  titleBar: _titleBar = {
    title: void 0,
    drag: true,
    filter: true,
    position: void 0,
    onDrag: void 0,
    onDragStart: void 0,
    onDragEnd: void 0
  },
  hideCopyButton: _hideCopyButton = false,
  toggled,
  setToggle
}) => {
  var _titleBar$drag, _titleBar$filter;
  const paths = useVisiblePaths(store);
  const [filter, setFilter] = (0, import_react4.useState)("");
  const tree = (0, import_react4.useMemo)(() => buildTree(paths, filter), [paths, filter]);
  const [rootRef, set] = useTransform();
  const shouldShow = _neverHide || paths.length > 0;
  const title = typeof _titleBar === "object" ? _titleBar.title || void 0 : void 0;
  const drag = typeof _titleBar === "object" ? (_titleBar$drag = _titleBar.drag) !== null && _titleBar$drag !== void 0 ? _titleBar$drag : true : true;
  const filterEnabled = typeof _titleBar === "object" ? (_titleBar$filter = _titleBar.filter) !== null && _titleBar$filter !== void 0 ? _titleBar$filter : true : true;
  const position = typeof _titleBar === "object" ? _titleBar.position || void 0 : void 0;
  const onDrag = typeof _titleBar === "object" ? _titleBar.onDrag || void 0 : void 0;
  const onDragStart = typeof _titleBar === "object" ? _titleBar.onDragStart || void 0 : void 0;
  const onDragEnd = typeof _titleBar === "object" ? _titleBar.onDragEnd || void 0 : void 0;
  import_react4.default.useEffect(() => {
    set({
      x: position === null || position === void 0 ? void 0 : position.x,
      y: position === null || position === void 0 ? void 0 : position.y
    });
  }, [position, set]);
  globalStyles();
  return import_react4.default.createElement(PanelSettingsContext.Provider, {
    value: {
      hideCopyButton: _hideCopyButton
    }
  }, import_react4.default.createElement(StyledRoot, {
    ref: rootRef,
    className: rootClass,
    fill: _fill,
    flat: _flat,
    oneLineLabels: _oneLineLabels,
    hideTitleBar: !_titleBar,
    style: {
      display: shouldShow ? "block" : "none"
    }
  }, _titleBar && import_react4.default.createElement(TitleWithFilter, {
    onDrag: (point) => {
      set(point);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(point);
    },
    onDragStart: (point) => onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(point),
    onDragEnd: (point) => onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(point),
    setFilter,
    toggle: (flag) => setToggle((t) => flag !== null && flag !== void 0 ? flag : !t),
    toggled,
    title,
    drag,
    filterEnabled,
    from: position
  }), shouldShow && import_react4.default.createElement(StoreContext.Provider, {
    value: store
  }, import_react4.default.createElement(TreeWrapper, {
    isRoot: true,
    fill: _fill,
    flat: _flat,
    tree,
    toggled
  }))));
});
var _excluded$12 = ["isRoot"];
var rootInitialized = false;
var rootEl = null;
function Leva(_ref) {
  let {
    isRoot = false
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$12);
  (0, import_react4.useEffect)(() => {
    rootInitialized = true;
    if (!isRoot && rootEl) {
      rootEl.remove();
      rootEl = null;
    }
    return () => {
      if (!isRoot) rootInitialized = false;
    };
  }, [isRoot]);
  return import_react4.default.createElement(LevaRoot, _extends({
    store: levaStore
  }, props3));
}
function useRenderRoot(isGlobalPanel) {
  (0, import_react4.useEffect)(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl = document.getElementById("leva__root") || Object.assign(document.createElement("div"), {
          id: "leva__root"
        });
        if (document.body) {
          document.body.appendChild(rootEl);
          (0, import_client.createRoot)(rootEl).render(import_react4.default.createElement(Leva, {
            isRoot: true
          }));
        }
      }
      rootInitialized = true;
    }
  }, [isGlobalPanel]);
}
var _excluded4 = ["store"];
function LevaPanel(_ref) {
  let {
    store
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded4);
  const parentStore = useStoreContext();
  const _store = store === void 0 ? parentStore : store;
  return import_react4.default.createElement(LevaRoot, _extends({
    store: _store
  }, props3));
}
function parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  let schema3;
  let folderName = void 0;
  let folderSettings;
  let hookSettings;
  let deps;
  if (typeof schemaOrFolderName === "string") {
    folderName = schemaOrFolderName;
    schema3 = settingsOrDepsOrSchema;
    if (Array.isArray(depsOrSettingsOrFolderSettings)) {
      deps = depsOrSettingsOrFolderSettings;
    } else {
      if (depsOrSettingsOrFolderSettings) {
        if ("store" in depsOrSettingsOrFolderSettings) {
          hookSettings = depsOrSettingsOrFolderSettings;
          deps = depsOrSettings;
        } else {
          folderSettings = depsOrSettingsOrFolderSettings;
          if (Array.isArray(depsOrSettings)) {
            deps = depsOrSettings;
          } else {
            hookSettings = depsOrSettings;
            deps = depsOrUndefined;
          }
        }
      }
    }
  } else {
    schema3 = schemaOrFolderName;
    if (Array.isArray(settingsOrDepsOrSchema)) {
      deps = settingsOrDepsOrSchema;
    } else {
      hookSettings = settingsOrDepsOrSchema;
      deps = depsOrSettingsOrFolderSettings;
    }
  }
  return {
    schema: schema3,
    folderName,
    folderSettings,
    hookSettings,
    deps: deps || []
  };
}
function useControls(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  const {
    folderName,
    schema: schema3,
    folderSettings,
    hookSettings,
    deps
  } = parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined);
  const schemaIsFunction = typeof schema3 === "function";
  const depsChanged = (0, import_react4.useRef)(false);
  const firstRender = (0, import_react4.useRef)(true);
  const _schema = useDeepMemo(() => {
    depsChanged.current = true;
    const s = typeof schema3 === "function" ? schema3() : schema3;
    return folderName ? {
      [folderName]: folder(s, folderSettings)
    } : s;
  }, deps);
  const isGlobalPanel = !(hookSettings !== null && hookSettings !== void 0 && hookSettings.store);
  useRenderRoot(isGlobalPanel);
  const [store] = (0, import_react4.useState)(() => (hookSettings === null || hookSettings === void 0 ? void 0 : hookSettings.store) || levaStore);
  const [initialData, mappedPaths] = (0, import_react4.useMemo)(() => store.getDataFromSchema(_schema), [store, _schema]);
  const [allPaths, renderPaths, onChangePaths, onEditStartPaths, onEditEndPaths] = (0, import_react4.useMemo)(() => {
    const allPaths2 = [];
    const renderPaths2 = [];
    const onChangePaths2 = {};
    const onEditStartPaths2 = {};
    const onEditEndPaths2 = {};
    Object.values(mappedPaths).forEach(({
      path,
      onChange,
      onEditStart,
      onEditEnd,
      transient
    }) => {
      allPaths2.push(path);
      if (!!onChange) {
        onChangePaths2[path] = onChange;
        if (!transient) {
          renderPaths2.push(path);
        }
      } else {
        renderPaths2.push(path);
      }
      if (onEditStart) {
        onEditStartPaths2[path] = onEditStart;
      }
      if (onEditEnd) {
        onEditEndPaths2[path] = onEditEnd;
      }
    });
    return [allPaths2, renderPaths2, onChangePaths2, onEditStartPaths2, onEditEndPaths2];
  }, [mappedPaths]);
  const paths = (0, import_react4.useMemo)(() => store.orderPaths(allPaths), [allPaths, store]);
  const values = useValuesForPath(store, renderPaths, initialData);
  const set = (0, import_react4.useCallback)((values2) => {
    const _values = Object.entries(values2).reduce((acc, [p, v]) => Object.assign(acc, {
      [mappedPaths[p].path]: v
    }), {});
    store.set(_values, false);
  }, [store, mappedPaths]);
  const get = (0, import_react4.useCallback)((path) => store.get(mappedPaths[path].path), [store, mappedPaths]);
  (0, import_react4.useEffect)(() => {
    const shouldOverrideSettings = !firstRender.current && depsChanged.current;
    store.addData(initialData, shouldOverrideSettings);
    firstRender.current = false;
    depsChanged.current = false;
    return () => store.disposePaths(paths);
  }, [store, paths, initialData]);
  (0, import_react4.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onChangePaths).forEach(([path, onChange]) => {
      onChange(store.get(path), path, _objectSpread2({
        initial: true,
        get: store.get
      }, store.getInput(path)));
      const unsub = store.useStore.subscribe((s) => {
        const input = s.data[path];
        const value = input.disabled ? void 0 : input.value;
        return [value, input];
      }, ([value, input]) => onChange(value, path, _objectSpread2({
        initial: false,
        get: store.get
      }, input)), {
        equalityFn: shallow
      });
      unsubscriptions.push(unsub);
    });
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [store, onChangePaths]);
  (0, import_react4.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onEditStartPaths).forEach(([path, onEditStart]) => unsubscriptions.push(store.subscribeToEditStart(path, onEditStart)));
    Object.entries(onEditEndPaths).forEach(([path, onEditEnd]) => unsubscriptions.push(store.subscribeToEditEnd(path, onEditEnd)));
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [onEditStartPaths, onEditEndPaths, store]);
  if (schemaIsFunction) return [values, set, get];
  return values;
}
register(LevaInputs.SELECT, select);
register(LevaInputs.IMAGE, image);
register(LevaInputs.NUMBER, number);
register(LevaInputs.COLOR, color);
register(LevaInputs.STRING, string);
register(LevaInputs.BOOLEAN, boolean);
register(LevaInputs.INTERVAL, interval);
register(LevaInputs.VECTOR3D, vector3d);
register(LevaInputs.VECTOR2D, vector2d);
export {
  Leva,
  LevaInputs,
  LevaPanel,
  LevaStoreProvider,
  button,
  buttonGroup,
  folder,
  levaStore,
  monitor,
  useControls,
  useCreateStore,
  useStoreContext
};
//# sourceMappingURL=leva.js.map
