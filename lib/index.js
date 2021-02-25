'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('@emotion/styled/base');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Wrapper = _styled__default['default']("button", process.env.NODE_ENV === "production" ? {
  target: "exmq3cg0"
} : {
  target: "exmq3cg0",
  label: "Wrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "j6drta",
  styles: "text-transform:uppercase;font-size:1.5em;font-weight:bold;letter-spacing:4px;border:none;border-radius:5px;padding:10px 20px;background:#5cdb95;color:#05385b"
} : {
  name: "j6drta",
  styles: "text-transform:uppercase;font-size:1.5em;font-weight:bold;letter-spacing:4px;border:none;border-radius:5px;padding:10px 20px;background:#5cdb95;color:#05385b",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHNkIiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzVjZGI5NTtcbiAgY29sb3I6ICMwNTM4NWI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0ZXh0LCBvbkNsaWNrIH0pIHtcbiAgcmV0dXJuIDxXcmFwcGVyIG9uQ2xpY2s9e29uQ2xpY2t9Pnt0ZXh0fTwvV3JhcHBlcj47XG59Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
    onClick: onClick
  }, text);
}

exports.Button = Button;