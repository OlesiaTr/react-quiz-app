import{b as I,t as f,j as d,a as K}from"./index-BFNabtH6.js";import{B}from"./button-DURUXnr_.js";import{L as X,G as q,A as H,C as Q,T as Z,E as ee,u as te}from"./use-localization-vc0mfw3R.js";const ne=(e,t)=>{const r=localStorage.getItem(X),n=localStorage.getItem(q),a=localStorage.getItem(H),o=localStorage.getItem(Q),c=o?JSON.parse(o):[],s=localStorage.getItem(Z),i=s?JSON.parse(s):[],l=localStorage.getItem(ee);return[{order:1,title:t[0].title,type:t[0].type,answer:r},{order:2,title:t[1].title,type:t[1].type,answer:n},{order:3,title:t[2].title,type:t[2].type,answer:a},{order:4,title:t[3].title,type:t[3].type,answer:c},{order:5,title:t[4].title,type:t[4].type,answer:i},{order:6,title:e.email.title,type:e.email.type,answer:l}]};function m(e){return Object.prototype.toString.call(e)==="[object Array]"}function O(e,t){if(!e)throw new Error(t)}function k(e){return Object.keys(e)}function y(e){return Object.keys(e).map(function(t){return[t,e[t]]})}function x(e,t,r){var n="."+t,a=new RegExp("(\\".concat(t,")?$"));return r(e).replace(a,n)}function re(e){return e.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")}function ae(e){return Array(e+1).join(" ")}function oe(e){return e.replace(/([<>&])/g,function(t,r){switch(r){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}})}function ce(e,t,r){switch(t){case"txt":{var n="text/plain;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}case"css":{var n="text/css;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}case"html":{var n="text/html;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}case"json":{var n="text/json;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}case"csv":{var n="text/csv;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}case"xls":{var n="text/application/vnd.ms-excel;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}case"xml":{var n="text/application/xml;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:n})):"data:,".concat(n)+encodeURIComponent(e)}default:return""}}function z(e,t,r,n){r===void 0&&(r="download"),n===void 0&&(n=!0);var a=ce(e,t,n),o=document.createElement("a");o.href=a,o.download=r,o.setAttribute("style","visibility:hidden"),document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!1,view:window})),document.body.removeChild(o)}var v=function(){return v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)},w=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),a,o=[],c;try{for(;(t===void 0||t-- >0)&&!(a=n.next()).done;)o.push(a.value)}catch(s){c={error:s}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(c)throw c.error}}return o};function ie(e){if(!e||m(e)&&!e.length||!m(e)&&!k(e).length)return function(r){return r};var t=m(e)?e.reduce(function(r,n){var a;return v(v({},r),(a={},a[n]=n,a))},Object.create(null)):e;return function(r){return m(r)?r.map(function(n){return y(n).reduce(function(a,o){var c=w(o,2),s=c[0],i=c[1];return s in t&&(a[t[s]]=i),a},Object.create(null))}).filter(function(n){return k(n).length}):y(r).reduce(function(n,a){var o=w(a,2),c=o[0],s=o[1];return c in t&&(n[t[c]]=s),n},Object.create(null))}}function se(e){var t="Invalid export data. Please provide a valid JSON";try{return typeof e=="string"?JSON.parse(e):e}catch{throw new Error(t)}}function le(e,t,r){t===void 0&&(t=null);var n="Invalid export data. Please provide valid JSON object";try{return JSON.stringify(e,t,r)}catch{throw new Error(n)}}function $(e){return e.map(y).reduce(function(t,r,n){return r.reduce(function(a,o){var c=w(o,2),s=c[0],i=c[1],l=a[s]||Array.from({length:e.length}).map(function(u){return""});return l[n]=(typeof i!="string"?JSON.stringify(i):i)||"",a[s]=l,a},t)},Object.create(null))}function F(e,t){return t===void 0&&(t=function(r){return r}),t(y(e).map(function(r){var n=w(r,2),a=n[0],o=n[1];return{fieldName:a,fieldValues:o}}))}function ue(e,t){var r=new RegExp("".concat(t,`|"|
`)),n=r.test(e)?'"':"",a=e.replace(/"/g,'""');return"".concat(n).concat(a).concat(n)}var de={beforeTableEncode:function(e){return e},delimiter:","};function fe(e,t){t===void 0&&(t={});var r=v(v({},de),t),n=r.beforeTableEncode,a=r.delimiter;if(!e.length)return"";var o=$(e),c=F(o,n),s=c.map(function(u){var p=u.fieldName;return p}).join(a)+`\r
`,i=c.map(function(u){var p=u.fieldValues;return p}).map(function(u){return u.map(function(p){return ue(p,a)})}),l=i.reduce(function(u,p){return u.map(function(j,_){return"".concat(j).concat(a).concat(p[_])})});return s+l.join(`\r
`)}function pe(e,t){O(e.length>0);var r=$(e),n=F(r,t),a=n.map(function(s){var i=s.fieldName;return i}).join("</b></th><th><b>"),o=n.map(function(s){var i=s.fieldValues;return i}).map(function(s){return s.map(function(i){return"<td>".concat(i,"</td>")})}),c=o.reduce(function(s,i){return s.map(function(l,u){return"".concat(l).concat(i[u])})});return`
    <table>
      <thead>
        <tr><th><b>`.concat(a,`</b></th></tr>
      </thead>
      <tbody>
        <tr>`).concat(c.join(`</tr>
        <tr>`),`</tr>
      </tbody>
    </table>
  `)}var ve={beforeTableEncode:function(e){return e}};function me(e,t){var r=v(v({},ve),t).beforeTableEncode;if(!e.length)return"";var n=`<html>
  <head>
    <meta charset="UTF-8" />
  </head >
  <body>
    `.concat(pe(e,r),`
  </body>
</html >
`);return n}function he(e){var t=`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>
`.concat(L(e,"base"),`
`);return t}function L(e,t,r,n){r===void 0&&(r="element"),n===void 0&&(n=0);var a=re(t),o=ae(n);if(e==null)return"".concat(o,"<").concat(a," />");var c=m(e)?e.map(function(i){return L(i,r,r,n+2)}).join(`
`):typeof e=="object"?y(e).map(function(i){var l=w(i,2),u=l[0],p=l[1];return L(p,u,r,n+2)}).join(`
`):o+"  "+oe(String(e)),s="".concat(o,"<").concat(a,`>
`).concat(c,`
`).concat(o,"</").concat(a,">");return s}var ge={txt:"txt",css:"css",html:"html",json:"json",csv:"csv",xls:"xls",xml:"xml"};function E(e){var t=e.data,r=e.fileName,n=r===void 0?"download":r,a=e.extension,o=e.fileNameFormatter,c=o===void 0?function(S){return S.replace(/\s+/,"_")}:o,s=e.fields,i=e.exportType,l=i===void 0?"txt":i,u=e.replacer,p=u===void 0?null:u,j=e.space,_=j===void 0?4:j,R=e.processor,h=R===void 0?z:R,N=e.withBOM,J=N===void 0?!1:N,A=e.beforeTableEncode,C=A===void 0?function(S){return S}:A,U=e.delimiter,V=U===void 0?",":U,T="Invalid export data. Please provide an array of objects",G="Can't export unknown data type ".concat(l,"."),P="Can't export string data to ".concat(l,".");if(typeof t=="string")switch(l){case"txt":case"css":case"html":return h(t,l,x(n,a??l,c));default:throw new Error(P)}var W=ie(s),g=W(se(t)),D=le(g,p,_);switch(l){case"txt":case"css":case"html":return h(D,l,x(n,a??l,c));case"json":return h(D,l,x(n,a??"json",c));case"csv":{O(m(g),T);var Y="\uFEFF",M=fe(g,{beforeTableEncode:C,delimiter:V}),b=J?Y+M:M;return h(b,l,x(n,a??"csv",c))}case"xls":{O(m(g),T);var b=me(g,{beforeTableEncode:C});return h(b,l,x(n,a??"xls",c))}case"xml":{var b=he(g);return h(b,l,x(n,a??"xml",c))}default:throw new Error(G)}}E.types=ge;E.processors={downloadFile:z};const xe=I.h1`
  color: ${f.colors.secondaryWhite};
  text-align: center;
  font-family: ${f.fonts.cursive};
  font-size: ${f.fontSizes.xxl};
  font-weight: ${f.fontWeights.normal};
  line-height: normal;

  @media screen and (${f.media.medium}) {
    font-size: ${f.fontSizes.xxxl};
  }
`,be=I.h2`
  color: ${f.colors.secondaryWhite};
  text-align: center;
  font-size: ${f.fontSizes.m};
  font-weight: ${f.fontWeights["semi-bold"]};
  line-height: 147%;
  letter-spacing: -0.17px;

  margin-bottom: 62px;

  @media screen and (${f.media.medium}) {
    font-size: ${f.fontSizes.xm};
  }
`,ye=({title:e,subTitle:t})=>d.jsxs(d.Fragment,{children:[d.jsx(xe,{children:e}),d.jsxs(be,{children:[" ",t," "]})]}),we=I.button`
  font-weight: ${f.fontWeights["semi-bold"]};
  font-size: ${f.fontSizes.m};
  line-height: 147%;
  color: ${f.colors.secondaryWhite};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background: transparent;
  border: 0;

  &:active {
    color: ${f.colors.mainPink};
  }
`,je=({text:e,onClick:t})=>d.jsxs(we,{onClick:t,children:[d.jsx("img",{src:"/src/assets/icon-download.svg",alt:"download icon"}),e]}),Oe=()=>{const e=K(),{genericTranslation:t,selectedTranslation:r}=te(),n=()=>{const c=ne(t,r).map(i=>({...i,answer:Array.isArray(i.answer)?i.answer.join(", "):i.answer})),s=E.types.csv;E({data:c,fileName:"user_results",exportType:s})},a=()=>{localStorage.clear(),e("/quiz/1")};return t===null?d.jsx("h1",{children:"Loading..."}):d.jsx(d.Fragment,{children:d.jsxs("section",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column",height:"90vh"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",paddingTop:"60px"},children:[d.jsx(ye,{title:t.success.title,subTitle:t.success["sub-title"]}),d.jsx("img",{src:"/src/assets/success-checkmark.svg",alt:"success checkmark with light-green background color",style:{width:"100%",height:"100%",maxWidth:"280px",maxHeight:"280px"}})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",gap:"37px"},children:[d.jsx(je,{text:t.success.download,onClick:n}),d.jsx(B,{onClick:a,children:t.button.retake})]})]})})};export{Oe as default};
