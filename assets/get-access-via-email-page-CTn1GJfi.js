import{g as j,b as g,t as n,j as t,a as $,r as f}from"./index-BFNabtH6.js";import{T}from"./title-CqZabXUG.js";import{S as v}from"./sub-title-B60E1Sl0.js";import{B as C}from"./button-DURUXnr_.js";import{u as S,E as b}from"./use-localization-vc0mfw3R.js";import{c as z}from"./colorize-title-B1j2s6Y4.js";const I=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,A=r=>I.test(r);var E={exports:{}};function w(r,e=100,c={}){if(typeof r!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof r}\`.`);if(e<0)throw new RangeError("`wait` must not be negative.");const{immediate:m}=typeof c=="boolean"?{immediate:c}:c;let s,l,o,p,d;function x(){const i=Date.now()-p;if(i<e&&i>=0)o=setTimeout(x,e-i);else if(o=void 0,!m){const a=s,h=l;s=void 0,l=void 0,d=r.apply(a,h)}}const u=function(...i){if(s&&this!==s)throw new Error("Debounced method called with different contexts.");s=this,l=i,p=Date.now();const a=m&&!o;if(o||(o=setTimeout(x,e)),a){const h=s,y=l;s=void 0,l=void 0,d=r.apply(h,y)}return d};return u.clear=()=>{o&&(clearTimeout(o),o=void 0)},u.flush=()=>{if(!o)return;const i=s,a=l;s=void 0,l=void 0,d=r.apply(i,a),clearTimeout(o),o=void 0},u}E.exports.debounce=w;E.exports=w;var D=E.exports;const L=j(D),k=g.input`
  min-width: 335px;
  width: 100%;
  min-height: 76px;
  margin-bottom: 10px;
  padding: 0 20px;
  border-radius: 10px;

  border: ${n.borders.medium} transparent;
  background-color: ${n.colors.secondaryBg};

  color: ${n.colors.white};
  ::placeholder {
    color: ${n.colors.subtitleGrayWithOpacity};
  }

  outline: none;
  transition: ${n.transition.main};

  &:not(:placeholder-shown):focus-visible {
    border-color: ${n.colors.mainPink};
  }
`,B=g.p`
  color: ${n.colors.inputError};
  font-size: ${n.fontSizes.s};
  font-weight: ${n.fontWeights["extra-bold"]};
`,G=({onChange:r,isValid:e,errorDescription:c})=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(k,{"aria-placeholder":"Your email",placeholder:"Your email",onChange:r}),!e&&t.jsx(B,{children:c})]}),W=g.p`
  min-width: 280px;
  max-width: 320px;

  color: ${n.colors.titleGray};
  font-size: ${n.fontSizes.xs};
  font-weight: ${n.fontWeights.medium};
  line-height: 150%;

  text-align: center;

  @media screen and (${n.media.medium}) {
    font-size: ${n.fontSizes.s};
  }
`,M=({htmlContent:r})=>t.jsx(W,{dangerouslySetInnerHTML:{__html:r}}),H=()=>{const r=$(),{genericTranslation:e,selectedLanguage:c}=S(),[m,s]=f.useState(""),[l,o]=f.useState(e!==null?e.email["empty-error"]:""),[p,d]=f.useState("");f.useEffect(()=>{if(e){const i=e.email.agreement,a=z(i,c);d(a)}},[e]),f.useEffect(()=>{const i=localStorage.getItem(b);s(i??"")},[]);const x=L(i=>{const a=i.target.value;s(a);const h=A(a);o(h?"":e.email["incorrect-error"])},1e3),u=()=>{localStorage.setItem(b,m),r("/results")};return e===null?t.jsx("h1",{children:"Loading..."}):t.jsx(t.Fragment,{children:t.jsxs("section",{style:{height:"80vh",width:"100%",maxWidth:"500px"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"80vh",gap:"56px"},children:[t.jsxs("div",{children:[t.jsx(T,{children:e.email.title}),t.jsx(v,{children:e.email["sub-title"]})]}),t.jsx(G,{onChange:x,isValid:l==="",errorDescription:l}),t.jsx(M,{htmlContent:p})]}),t.jsx(C,{onClick:u,isDisabled:l!==""||m==="",children:e.button.next})]})})};export{H as default};
