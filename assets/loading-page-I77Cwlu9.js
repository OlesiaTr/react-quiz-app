import{b as n,t as s,r as a,j as t,a as l}from"./index-ED9gzTx7.js";import{u as d}from"./use-localization-C7JFPGCL.js";import{S as f}from"./sub-title-CnPYaQws.js";const h=n.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`,u=n.circle`
  fill: none;
  stroke: ${s.colors.white};
  stroke-width: 6;
`,x=n.circle`
  fill: none;
  stroke: ${s.colors.secondaryPink};
  stroke-width: 6;
  stroke-linecap: round;
  transition: ${s.transition.main};
`,m=n.text`
  text-anchor: middle;
  dominant-baseline: central;
  font-size: ${s.fontSizes.m};
  fill: ${s.colors.white};
`,g=({onLoadingDone:r})=>{const[e,o]=a.useState(0);return a.useEffect(()=>{const c=setInterval(()=>{o(i=>i<100?i+1:100)},50);return()=>clearInterval(c)},[]),a.useEffect(()=>{e===100&&setTimeout(()=>{r()},100)},[r,e]),t.jsxs(h,{viewBox:"0 0 100 100",children:[t.jsx(u,{cx:"50",cy:"50",r:"40"}),t.jsx(x,{cx:"50",cy:"50",r:"40",strokeDasharray:251.2,strokeDashoffset:251.2*(100-e)/100}),t.jsxs(m,{x:"50",y:"50",transform:"translate(100) rotate(90)",children:[e,"%"]})]})},v=()=>{const r=l(),{genericTranslation:e}=d(),o=()=>{r("/email")};return e===null?t.jsx("h1",{children:"Loading..."}):t.jsx(t.Fragment,{children:t.jsxs("section",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[t.jsx(f,{children:e.loader["sub-title"]}),t.jsx(g,{onLoadingDone:o})]})})};export{v as default};
