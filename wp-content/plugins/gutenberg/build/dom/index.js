window.wp=window.wp||{},window.wp.dom=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=419)}({2:function(t,e){t.exports=window.lodash},419:function(t,e,n){"use strict";n.r(e),n.d(e,"focus",(function(){return tt})),n.d(e,"computeCaretRect",(function(){return N})),n.d(e,"documentHasTextSelection",(function(){return w})),n.d(e,"documentHasUncollapsedSelection",(function(){return O})),n.d(e,"documentHasSelection",(function(){return S})),n.d(e,"getRectangleFromRange",(function(){return y})),n.d(e,"getScrollContainer",(function(){return A})),n.d(e,"getOffsetParent",(function(){return x})),n.d(e,"isEntirelySelected",(function(){return P})),n.d(e,"isHorizontalEdge",(function(){return j})),n.d(e,"isNumberInput",(function(){return v})),n.d(e,"isTextField",(function(){return E})),n.d(e,"isVerticalEdge",(function(){return I})),n.d(e,"placeCaretAtHorizontalEdge",(function(){return H})),n.d(e,"placeCaretAtVerticalEdge",(function(){return V})),n.d(e,"replace",(function(){return z})),n.d(e,"remove",(function(){return B})),n.d(e,"insertAfter",(function(){return F})),n.d(e,"unwrap",(function(){return U})),n.d(e,"replaceTag",(function(){return k})),n.d(e,"wrap",(function(){return q})),n.d(e,"__unstableStripHTML",(function(){return X})),n.d(e,"isEmpty",(function(){return G})),n.d(e,"removeInvalidHTML",(function(){return Q})),n.d(e,"isRTL",(function(){return D})),n.d(e,"getPhrasingContentSchema",(function(){return $})),n.d(e,"isPhrasingContent",(function(){return J})),n.d(e,"isTextContent",(function(){return K})),n.d(e,"getFilesFromDataTransfer",(function(){return Z}));var r={};n.r(r),n.d(r,"find",(function(){return c}));var o={};n.r(o),n.d(o,"isTabbableIndex",(function(){return l})),n.d(o,"find",(function(){return h})),n.d(o,"findPrevious",(function(){return b})),n.d(o,"findNext",(function(){return g}));const i=["[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",");function u(t){return t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0}function c(t){const e=t.querySelectorAll(i);return Array.from(e).filter(t=>{if(!u(t)||function(t){return"iframe"===t.nodeName.toLowerCase()&&"-1"===t.getAttribute("tabindex")}(t))return!1;const{nodeName:e}=t;return"AREA"!==e||function(t){const e=t.closest("map[name]");if(!e)return!1;const n=t.ownerDocument.querySelector('img[usemap="#'+e.name+'"]');return!!n&&u(n)}(t)})}var a=n(2);function s(t){const e=t.getAttribute("tabindex");return null===e?0:parseInt(e,10)}function l(t){return-1!==s(t)}function d(t,e){return{element:t,index:e}}function f(t){return t.element}function m(t,e){const n=s(t.element),r=s(e.element);return n===r?t.index-e.index:n-r}function p(t){return t.filter(l).map(d).sort(m).map(f).reduce(function(){const t={};return function(e,n){const{nodeName:r,type:o,checked:i,name:u}=n;if("INPUT"!==r||"radio"!==o||!u)return e.concat(n);const c=t.hasOwnProperty(u);if(!i&&c)return e;if(c){const n=t[u];e=Object(a.without)(e,n)}return t[u]=n,e.concat(n)}}(),[])}function h(t){return p(c(t))}function b(t){const e=c(t.ownerDocument.body),n=e.indexOf(t);return e.length=n,Object(a.last)(p(e))}function g(t){const e=c(t.ownerDocument.body),n=e.indexOf(t),r=e.slice(n+1).filter(e=>!t.contains(e));return Object(a.first)(p(r))}function y(t){if(!t.collapsed){const e=Array.from(t.getClientRects());if(1===e.length)return e[0];const n=e.filter(({width:t})=>t>1);if(0===n.length)return t.getBoundingClientRect();if(1===n.length)return n[0];let{top:r,bottom:o,left:i,right:u}=n[0];for(const{top:t,bottom:e,left:c,right:a}of n)t<r&&(r=t),e>o&&(o=e),c<i&&(i=c),a>u&&(u=a);return new window.DOMRect(i,r,u-i,o-r)}const{startContainer:e}=t,{ownerDocument:n}=e;if("BR"===e.nodeName){const{parentNode:r}=e,o=Array.from(r.childNodes).indexOf(e);(t=n.createRange()).setStart(r,o),t.setEnd(r,o)}let r=t.getClientRects()[0];if(!r){const e=n.createTextNode("​");(t=t.cloneRange()).insertNode(e),r=t.getClientRects()[0],e.parentNode,e.parentNode.removeChild(e)}return r}function N(t){const e=t.getSelection(),n=e.rangeCount?e.getRangeAt(0):null;return n?y(n):null}function w(t){t.defaultView;const e=t.defaultView.getSelection(),n=e.rangeCount?e.getRangeAt(0):null;return!!n&&!n.collapsed}function C(t){return!!t&&"INPUT"===t.nodeName}function E(t){return C(t)&&t.type&&!["button","checkbox","hidden","file","radio","image","range","reset","submit","number"].includes(t.type)||"TEXTAREA"===t.nodeName||"true"===t.contentEditable}function v(t){return C(t)&&"number"===t.type&&!!t.valueAsNumber}function O(t){return w(t)||!!t.activeElement&&function(t){if(!E(t)&&!v(t))return!1;try{const{selectionStart:e,selectionEnd:n}=t;return null!==e&&e!==n}catch(t){return!1}}(t.activeElement)}function S(t){return!!t.activeElement&&(E(t.activeElement)||v(t.activeElement)||w(t))}function T(t){return t.ownerDocument.defaultView,t.ownerDocument.defaultView.getComputedStyle(t)}function A(t){if(t){if(t.scrollHeight>t.clientHeight){const{overflowY:e}=T(t);if(/(auto|scroll)/.test(e))return t}return A(t.parentNode)}}function x(t){let e;for(;(e=t.parentNode)&&e.nodeType!==e.ELEMENT_NODE;);return e?"static"!==T(e).position?e:e.offsetParent:null}function R(t){return"INPUT"===t.tagName||"TEXTAREA"===t.tagName}function P(t){if(R(t))return 0===t.selectionStart&&t.value.length===t.selectionEnd;if(!t.isContentEditable)return!0;const{ownerDocument:e}=t,{defaultView:n}=e,r=n.getSelection(),o=r.rangeCount?r.getRangeAt(0):null;if(!o)return!0;const{startContainer:i,endContainer:u,startOffset:c,endOffset:a}=o;if(i===t&&u===t&&0===c&&a===t.childNodes.length)return!0;const s=t.lastChild,l=s.nodeType===s.TEXT_NODE?s.data.length:s.childNodes.length;return i===t.firstChild&&u===t.lastChild&&0===c&&a===l}function D(t){return"rtl"===T(t).direction}function M(t,e,n,r){const o=r.style.zIndex,i=r.style.position,{position:u="static"}=T(r);"static"===u&&(r.style.position="relative"),r.style.zIndex="10000";const c=function(t,e,n){if(t.caretRangeFromPoint)return t.caretRangeFromPoint(e,n);if(!t.caretPositionFromPoint)return null;const r=t.caretPositionFromPoint(e,n);if(!r)return null;const o=t.createRange();return o.setStart(r.offsetNode,r.offset),o.collapse(!0),o}(t,e,n);return r.style.zIndex=o,r.style.position=i,c}function L(t,e,n=!1){if(R(t))return t.selectionStart===t.selectionEnd&&(e?0===t.selectionStart:t.value.length===t.selectionStart);if(!t.isContentEditable)return!0;const{ownerDocument:r}=t,{defaultView:o}=r,i=o.getSelection();if(!i||!i.rangeCount)return!1;const u=i.getRangeAt(0),c=u.cloneRange(),a=function(t){const{anchorNode:e,focusNode:n,anchorOffset:r,focusOffset:o}=t,i=e.compareDocumentPosition(n);return!(i&e.DOCUMENT_POSITION_PRECEDING)&&(!!(i&e.DOCUMENT_POSITION_FOLLOWING)||0!==i||r<=o)}(i),s=i.isCollapsed;s||c.collapse(!a);const l=y(c),d=y(u);if(!l||!d)return!1;const f=function(t){const e=Array.from(t.getClientRects());if(!e.length)return;const n=Math.min(...e.map(({top:t})=>t));return Math.max(...e.map(({bottom:t})=>t))-n}(u);if(!s&&f&&f>l.height&&a===e)return!1;const m=D(t)?!e:e,p=t.getBoundingClientRect(),h=M(r,m?p.left+1:p.right-1,e?p.top+1:p.bottom-1,t);if(!h)return!1;const b=y(h);if(!b)return!1;const g=e?"top":"bottom",N=m?"left":"right",w=b[g]-d[g],C=b[N]-l[N],E=Math.abs(w)<=1,v=Math.abs(C)<=1;return n?E:E&&v}function j(t,e){return L(t,e)}function I(t,e){return L(t,e,!0)}function _(t,e){const{ownerDocument:n}=t,r=D(t)?!e:e,o=t.getBoundingClientRect();return M(n,e?o.right-1:o.left+1,r?o.bottom-1:o.top+1,t)}function H(t,e){if(!t)return;if(t.focus(),R(t)){if("number"!=typeof t.selectionStart)return;return void(e?(t.selectionStart=t.value.length,t.selectionEnd=t.value.length):(t.selectionStart=0,t.selectionEnd=0))}if(!t.isContentEditable)return;let n=_(t,e);if(!(n&&n.startContainer&&t.contains(n.startContainer)||(t.scrollIntoView(e),n=_(t,e),n&&n.startContainer&&t.contains(n.startContainer))))return;const{ownerDocument:r}=t,{defaultView:o}=r,i=o.getSelection();i.removeAllRanges(),i.addRange(n)}function V(t,e,n,r=!0){if(!t)return;if(!n||!t.isContentEditable)return void H(t,e);t.focus();const o=n.height/2,i=t.getBoundingClientRect(),u=n.left,c=e?i.bottom-o:i.top+o,{ownerDocument:a}=t,{defaultView:s}=a,l=M(a,u,c,t);if(!l||!t.contains(l.startContainer))return!r||l&&l.startContainer&&l.startContainer.contains(t)?void H(t,e):(t.scrollIntoView(e),void V(t,e,n,!1));const d=s.getSelection();d.removeAllRanges(),d.addRange(l)}function F(t,e){e.parentNode,e.parentNode.insertBefore(t,e.nextSibling)}function B(t){t.parentNode,t.parentNode.removeChild(t)}function z(t,e){t.parentNode,F(e,t.parentNode),B(t)}function U(t){const e=t.parentNode;for(;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}function k(t,e){const n=t.ownerDocument.createElement(e);for(;t.firstChild;)n.appendChild(t.firstChild);return t.parentNode,t.parentNode.replaceChild(n,t),n}function q(t,e){e.parentNode,e.parentNode.insertBefore(t,e),t.appendChild(e)}function X(t){return(new window.DOMParser).parseFromString(t,"text/html").body.textContent||""}function G(t){switch(t.nodeType){case t.TEXT_NODE:return/^[ \f\n\r\t\v\u00a0]*$/.test(t.nodeValue||"");case t.ELEMENT_NODE:return!t.hasAttributes()&&(!t.hasChildNodes()||Array.from(t.childNodes).every(G));default:return!0}}const W={strong:{},em:{},s:{},del:{},ins:{},a:{attributes:["href","target","rel"]},code:{},abbr:{attributes:["title"]},sub:{},sup:{},br:{},small:{},q:{attributes:["cite"]},dfn:{attributes:["title"]},data:{attributes:["value"]},time:{attributes:["datetime"]},var:{},samp:{},kbd:{},i:{},b:{},u:{},mark:{},ruby:{},rt:{},rp:{},bdi:{attributes:["dir"]},bdo:{attributes:["dir"]},wbr:{},"#text":{}};Object(a.without)(Object.keys(W),"#text","br").forEach(t=>{W[t].children=Object(a.omit)(W,t)});const Y={...W,audio:{attributes:["src","preload","autoplay","mediagroup","loop","muted"]},canvas:{attributes:["width","height"]},embed:{attributes:["src","type","width","height"]},img:{attributes:["alt","src","srcset","usemap","ismap","width","height"]},object:{attributes:["data","type","name","usemap","form","width","height"]},video:{attributes:["src","poster","preload","autoplay","mediagroup","loop","muted","controls","width","height"]}};function $(t){return"paste"!==t?Y:Object(a.omit)({...Y,ins:{children:Y.ins.children},del:{children:Y.del.children}},["u","abbr","data","time","wbr","bdi","bdo"])}function J(t){const e=t.nodeName.toLowerCase();return $().hasOwnProperty(e)||"span"===e}function K(t){const e=t.nodeName.toLowerCase();return W.hasOwnProperty(e)||"span"===e}function Q(t,e,n){const r=document.implementation.createHTMLDocument("");return r.body.innerHTML=t,function t(e,n,r,o){Array.from(e).forEach(e=>{var i,u;const c=e.nodeName.toLowerCase();if(r.hasOwnProperty(c)&&(!r[c].isMatch||null!==(i=(u=r[c]).isMatch)&&void 0!==i&&i.call(u,e))){if(function(t){return!!t&&t.nodeType===t.ELEMENT_NODE}(e)){const{attributes:i=[],classes:u=[],children:s,require:l=[],allowEmpty:d}=r[c];if(s&&!d&&G(e))return void B(e);if(e.hasAttributes()&&(Array.from(e.attributes).forEach(({name:t})=>{"class"===t||Object(a.includes)(i,t)||e.removeAttribute(t)}),e.classList&&e.classList.length)){const t=u.map(t=>"string"==typeof t?e=>e===t:t instanceof RegExp?e=>t.test(e):a.noop);Array.from(e.classList).forEach(n=>{t.some(t=>t(n))||e.classList.remove(n)}),e.classList.length||e.removeAttribute("class")}if(e.hasChildNodes()){if("*"===s)return;if(s)l.length&&!e.querySelector(l.join(","))?(t(e.childNodes,n,r,o),U(e)):e.parentNode&&"BODY"===e.parentNode.nodeName&&J(e)?(t(e.childNodes,n,r,o),Array.from(e.childNodes).some(t=>!J(t))&&U(e)):t(e.childNodes,n,s,o);else for(;e.firstChild;)B(e.firstChild)}}}else t(e.childNodes,n,r,o),o&&!J(e)&&e.nextElementSibling&&F(n.createElement("br"),e),U(e)})}(r.body.childNodes,r,e,n),r.body.innerHTML}function Z(t){const e=Array.from(t.files);return Array.from(t.items).forEach(t=>{const n=t.getAsFile();n&&!e.find(({name:t,type:e,size:r})=>t===n.name&&e===n.type&&r===n.size)&&e.push(n)}),e}const tt={focusable:r,tabbable:o}}});