!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc");console.log(e(u));var l=document.querySelector(".form"),a=null,c=null,f=null;function d(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}l.addEventListener("submit",(function(n){n.preventDefault();var t=n.currentTarget.elements,o=t.delay,r=t.step,l=t.amount;for(a=Number(o.value),c=Number(r.value),f=Number(l.value),i=1;i<=f;i+=1)d(i,a).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),a+=c;n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.d4271daa.js.map