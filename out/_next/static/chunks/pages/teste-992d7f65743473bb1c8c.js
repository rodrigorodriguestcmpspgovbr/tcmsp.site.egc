(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{4184:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===c)if(t.toString===Object.prototype.toString)for(var s in t)n.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},5858:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(2809),o=t(4029),c=t.n(o),a=t(4184),s=t.n(a),u=t(5893);function i(e){var r,t=e.children,o=e.type;return(0,u.jsx)("div",{className:s()((r={},(0,n.Z)(r,c().success,"success"===o),(0,n.Z)(r,c().error,"error"===o),r)),children:t})}},2167:function(e,r,t){"use strict";var n=t(3848);r.default=void 0;var o,c=(o=t(7294))&&o.__esModule?o:{default:o},a=t(1063),s=t(4651),u=t(7426);var i={};function l(e,r,t,n){if(e&&a.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,o=s.useRouter(),f=c.default.useMemo((function(){var r=a.resolveHref(o,e.href,!0),t=n(r,2),c=t[0],s=t[1];return{href:c,as:e.as?a.resolveHref(o,e.as):s||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,_=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=(r=c.default.Children.only(v))&&"object"===typeof r&&r.ref,x=u.useIntersection({rootMargin:"200px"}),j=n(x,2),m=j[0],E=j[1],L=c.default.useCallback((function(e){m(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,m]);c.default.useEffect((function(){var e=E&&t&&a.isLocalURL(d),r="undefined"!==typeof g?g:o&&o.locale,n=i[d+"%"+p+(r?"%"+r:"")];e&&!n&&l(o,d,p,{locale:r})}),[p,d,E,g,t,o]);var w={ref:L,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,s,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[o?"replace":"push"](t,n,{shallow:c,locale:u,scroll:s}))}(e,o,d,p,h,y,_,g)},onMouseEnter:function(e){a.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof g?g:o&&o.locale,M=o&&o.isLocaleDomain&&a.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);w.href=M||a.addBasePath(a.addLocale(p,k,o&&o.defaultLocale))}return c.default.cloneElement(r,w)};r.default=f},7426:function(e,r,t){"use strict";var n=t(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!a,u=o.useRef(),i=o.useState(!1),l=n(i,2),f=l[0],d=l[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=s.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,c=n.observer,a=n.elements;return a.set(e,r),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return o.useEffect((function(){if(!a&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),c=t(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},69:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var n=t(1664),o=t(9008),c=t(5858),a=t(5893);function s(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:"Post teste"})}),(0,a.jsx)(c.Z,{type:"success",children:(0,a.jsx)("p",{children:"Teste"})}),(0,a.jsx)("h1",{children:"First Post"}),(0,a.jsx)("h2",{children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:"Back to home"})})})]})}},8925:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teste",function(){return t(69)}])},4029:function(e){e.exports={success:"alert_success__3dLQh",error:"alert_error__1s5rr"}},9008:function(e,r,t){e.exports=t(639)},1664:function(e,r,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=8925,e(e.s=r);var r}));var r=e.O();_N_E=r}]);