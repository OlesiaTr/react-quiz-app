import{j as e,r as u,u as m,a as g}from"./index-BFNabtH6.js";import{f,h as x,i as h,g as j,P as I,T as N}from"./topic-option.styled-DGVMaKJg.js";import{T as O}from"./title-CqZabXUG.js";import{T as p,u as E}from"./use-localization-vc0mfw3R.js";import{B as C}from"./button-DURUXnr_.js";import{S as P}from"./sub-title-B60E1Sl0.js";const _=3,b=({topic:i,onClick:n,icon:c,isSelected:t})=>e.jsxs(f,{onClick:n,$isChecked:t,children:[e.jsx(x,{src:c,alt:i}),e.jsx(h,{children:i})]}),B=(i,n)=>{const[c,t]=u.useState([]);return u.useEffect(()=>{const s=localStorage.getItem(i),l=(s?JSON.parse(s):[]).slice(0,n);t(l)},[i,n]),{selectedTopics:c,updateSelectedTopics:s=>{if(c.includes(s)){const o=c.filter(l=>l!==s);t(o),localStorage.setItem(p,JSON.stringify(o))}else{const o=[...c,s].slice(0,n);t(o),localStorage.setItem(p,JSON.stringify(o))}},setSelectedTopics:t}},M=()=>{const{pathname:i}=m(),n=g(),c=j(i),{genericTranslation:t,selectedTranslation:d}=E(),{selectedTopics:s,updateSelectedTopics:o,setSelectedTopics:l}=B(p,_);u.useEffect(()=>{const a=localStorage.getItem(p),r=a?JSON.parse(a):[];l(r)},[l]);const T=a=>{o(a)},S=()=>{n("/loading")};return d===null||t===null?e.jsx("h1",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(I,{question:Number(c),totalQuestions:N}),e.jsxs("section",{children:[e.jsx(O,{children:d[4].title}),e.jsx(P,{children:d[4]["sub-title"]}),e.jsx("ul",{style:{marginBottom:"36px",display:"grid",justifyContent:"center",gridTemplateColumns:"repeat(auto-fill,100px)",gap:"8px"},children:d[4].options.map(({icon:a,value:r})=>e.jsx(b,{onClick:()=>T(r),topic:r,icon:a,isSelected:s.includes(r)},r))}),e.jsx(C,{selectedItems:s,onClick:S,children:t.button.next})]})]})};export{M as default};
