import{r as c,j as t,u as j,a as T}from"./index-BFNabtH6.js";import{d as I,e as N,L as O,g as k,P as E,T as b}from"./topic-option.styled-DGVMaKJg.js";import{T as q}from"./title-CqZabXUG.js";import{C as u,u as L}from"./use-localization-vc0mfw3R.js";import{B as z}from"./button-DURUXnr_.js";import{c as B}from"./colorize-title-B1j2s6Y4.js";const P=({critique:s,onClick:r,isSelected:a})=>{const[n,l]=c.useState(a);c.useEffect(()=>{const d=localStorage.getItem(u),m=d?JSON.parse(d):[];l(m.includes(s))},[s]);const o=()=>{l(!n),r()};return t.jsxs(I,{onClick:r,$isChecked:n,children:[t.jsx(N,{type:"checkbox",value:"true",name:s,id:s,onChange:o,checked:n}),t.jsx(O,{htmlFor:s,children:t.jsx("span",{children:s})})]})},U=()=>{const{pathname:s}=j(),r=T(),a=k(s),{genericTranslation:n,selectedLanguage:l,selectedTranslation:o}=L(),[d,m]=c.useState("");c.useEffect(()=>{if(o){const e=o[3].title,i=B(e,l);m(i)}},[o]);const[h,C]=c.useState([]);c.useEffect(()=>{const e=localStorage.getItem(u),i=e?JSON.parse(e):[];C(i)},[]);const x=e=>{const i=localStorage.getItem(u),g=i?JSON.parse(i):[],p=g.includes(e)?g.filter(f=>f!==e):[...g,e];C(p),localStorage.setItem(u,JSON.stringify(p))},S=()=>{r(`/quiz/${Number(a)+1}`)};return o===null||n===null?t.jsx("h1",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(E,{question:Number(a),totalQuestions:b}),t.jsxs("section",{children:[t.jsx(q,{htmlContent:d,children:o[3].title}),t.jsx("ul",{style:{marginBottom:"26px"},children:o[3].options.map(({value:e})=>t.jsx(P,{onClick:()=>x(e),critique:e,isSelected:h.includes(e)},e))}),t.jsx(z,{selectedItems:h,onClick:S,children:n.button.next})]})]})};export{U as default};