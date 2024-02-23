import{r as u,I as G,R as U,g as q,c as F,j as d,b as c,t as e,u as M,a as R,_ as h}from"./index-CpFTmIrb.js";function V(){if(console&&console.warn){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const z={};function S(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];typeof t[0]=="string"&&z[t[0]]||(typeof t[0]=="string"&&(z[t[0]]=new Date),V(...t))}const B=(n,t)=>()=>{if(n.isInitialized)t();else{const o=()=>{setTimeout(()=>{n.off("initialized",o)},0),t()};n.on("initialized",o)}};function L(n,t,o){n.loadNamespaces(t,B(n,o))}function N(n,t,o,a){typeof o=="string"&&(o=[o]),o.forEach(l=>{n.options.ns.indexOf(l)<0&&n.options.ns.push(l)}),n.loadLanguages(t,B(n,a))}function Y(n,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const a=t.languages[0],l=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const g=(w,x)=>{const r=t.services.backendConnector.state[`${w}|${x}`];return r===-1||r===2};return o.bindI18n&&o.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!g(t.isLanguageChangingTo,n)?!1:!!(t.hasResourceBundle(a,n)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||g(a,n)&&(!l||g(i,n)))}function K(n,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(S("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(n,{lng:o.lng,precheck:(l,i)=>{if(o.bindI18n&&o.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!i(l.isLanguageChangingTo,n))return!1}}):Y(n,t,o)}const H=(n,t)=>{const o=u.useRef();return u.useEffect(()=>{o.current=t?o.current:n},[n,t]),o.current};function W(n,t,o,a){return n.getFixedT(t,o,a)}function J(n,t,o,a){return u.useCallback(W(n,t,o,a),[n,t,o,a])}function Q(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:o}=t,{i18n:a,defaultNS:l}=u.useContext(G)||{},i=o||a||F();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new U),!i){S("You will need to pass in an i18next instance by using initReactI18next");const p=($,f)=>typeof f=="string"?f:f&&typeof f=="object"&&typeof f.defaultValue=="string"?f.defaultValue:Array.isArray($)?$[$.length-1]:$,b=[p,{},!1];return b.t=p,b.i18n={},b.ready=!1,b}i.options.react&&i.options.react.wait!==void 0&&S("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const g={...q(),...i.options.react,...t},{useSuspense:w,keyPrefix:x}=g;let r=n||l||i.options&&i.options.defaultNS;r=typeof r=="string"?[r]:r||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(r);const k=(i.isInitialized||i.initializedStoreOnce)&&r.every(p=>K(p,i,g)),_=J(i,t.lng||null,g.nsMode==="fallback"?r:r[0],x),y=()=>_,m=()=>W(i,t.lng||null,g.nsMode==="fallback"?r:r[0],x),[s,v]=u.useState(y);let E=r.join();t.lng&&(E=`${t.lng}${E}`);const T=H(E),P=u.useRef(!0);u.useEffect(()=>{const{bindI18n:p,bindI18nStore:b}=g;P.current=!0,!k&&!w&&(t.lng?N(i,t.lng,r,()=>{P.current&&v(m)}):L(i,r,()=>{P.current&&v(m)})),k&&T&&T!==E&&P.current&&v(m);function $(){P.current&&v(m)}return p&&i&&i.on(p,$),b&&i&&i.store.on(b,$),()=>{P.current=!1,p&&i&&p.split(" ").forEach(f=>i.off(f,$)),b&&i&&b.split(" ").forEach(f=>i.store.off(f,$))}},[i,E]);const j=u.useRef(!0);u.useEffect(()=>{P.current&&!j.current&&v(y),j.current=!1},[i,x]);const I=[s,i,k];if(I.t=s,I.i18n=i,I.ready=k,k||!k&&!w)return I;throw new Promise(p=>{t.lng?N(i,t.lng,r,()=>p()):L(i,r,()=>p())})}const X=({width:n,height:t,stroke:o})=>d.jsx("svg",{width:n??"24",height:t??"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M9 6.5L2.5 13L9 19.5",stroke:o??"white",strokeWidth:"2.5",strokeLinecap:"round"})}),Z=c.section`
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`,ee=c.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`,ne=c.button`
  background: none;
  border: none;
  cursor: ${({$isGoBackBtnShown:n})=>n?"pointer":"default"};
  transition: ${e.transition.main};
  opacity: ${({$isGoBackBtnShown:n})=>n?1:0};
  animation: ${({$isGoBackBtnShown:n})=>n?"fadeIn":"none"}
    0.5s ease;

  &:active svg path {
    stroke: ${e.colors.secondaryPink};
  }
`,te=c.p`
  margin: 0 auto;

  font-size: ${e.fontSizes.xm};
  font-weight: ${e.fontWeights["extra-bold"]};
  line-height: 111%;

  @media screen and (${e.media.medium}) {
    font-size: ${e.fontSizes.l};
  }
`,oe=c.span`
  color: ${e.colors.secondaryPink};
`,ie=c.div`
  width: 100%;
  height: 4px;
  background-color: ${e.colors.white};
  border-radius: 5px;
  overflow: hidden;

  @media screen and (${e.media.medium}) {
    height: 10px;
  }
`,re=c.div`
  width: ${n=>n.$progressPercent}%;
  height: 100%;
  background-color: ${e.colors.secondaryPink};
  transition: width 1s;
  border-radius: 10px;
`,se="1",ae="language",A="language-abbreviation",ue="gender",ge="age",me="critique",pe="topic",fe=5,ce=n=>n.split("/").pop()??se,he=({question:n,totalQuestions:t,isGoBackBtnShown:o=!0})=>{const{pathname:a}=M(),l=R(),i=ce(a),[g,w]=u.useState(0);u.useEffect(()=>{const r=n/t*100;w(r)},[n,t]);const x=()=>{l(`/quiz/${Number(i)-1}`)};return d.jsxs(Z,{children:[d.jsxs(ee,{children:[d.jsx(ne,{$isGoBackBtnShown:o,onClick:x,children:d.jsx(X,{})}),d.jsxs(te,{children:[d.jsx(oe,{children:n}),d.jsxs("span",{children:["/",t]})]})]}),d.jsx(ie,{children:d.jsx(re,{$progressPercent:g})})]})},O=c.h1`
  color: ${e.colors.white};

  text-align: center;
  font-size: ${e.fontSizes.xl};
  font-weight: ${e.fontWeights["extra-bold"]};
  line-height: 127%;
  letter-spacing: -0.6px;

  margin-bottom: 16px;

  @media screen and (${e.media.medium}) {
    font-size: ${e.fontSizes.xxl};
    margin-bottom: 20px;
  }
`,xe=({children:n,htmlContent:t})=>d.jsx(d.Fragment,{children:t?d.jsx(O,{dangerouslySetInnerHTML:{__html:t}}):d.jsx(O,{children:n})}),be=c.li`
  min-width: 335px;
  min-height: 76px;
  color: ${e.colors.white};
  font-size: ${e.fontSizes.m};
  background-color: ${e.colors.secondaryBg};
  font-weight: ${e.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;
  border: ${e.borders.medium} ${e.colors.secondaryBg};
  border-radius: 16px;
  padding: 23px 20px;
  cursor: pointer;
  transition: ${e.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${e.colors.mainPink};
  }

  &:active {
    border-color: ${e.colors.mainPink};
    background-color: ${e.colors.mainPinkWithOpacity};
  }

  @media screen and (${e.media.medium}) {
    min-width: 420px;

    font-size: ${e.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`,le=c.li`
  min-width: 335px;
  min-height: 76px;
  color: ${e.colors.white};
  background-color: ${({$isChecked:n})=>n?e.colors.mainPinkWithOpacity:e.colors.secondaryBg};

  border: ${e.borders.medium};
  border-color: ${({$isChecked:n})=>n?e.colors.mainPinkWithOpacity:e.colors.secondaryBg};

  border-radius: 16px;
  transition: ${e.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${e.colors.mainPink};
  }

  &:active {
    border-color: ${e.colors.mainPink};
    background-color: ${e.colors.mainPinkWithOpacity};
  }

  @media screen and (${e.media.medium}) {
    min-width: 420px;

    font-size: ${e.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`,$e=c.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${e.fontSizes.m};
  font-weight: ${e.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;
  padding: 23px 20px;
  cursor: pointer;

  &::after {
    content: '';
    width: 23px;
    height: 23px;
    border: ${e.borders.medium} ${e.colors.mainPink};
    border-radius: 8px;

    input:checked + & {
      background-color: ${e.colors.mainPink};
      background-image: url(/src/assets/icon-check.svg);
      border: none;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`,we=c.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;

  ${le} + &:checked {
    background-color: ${e.colors.mainPink};
  }
`,ke=c.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  min-width: 101px;
  min-height: 144px;
  background-color: ${e.colors.secondaryBg};

  border: ${e.borders.medium} transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: ${e.transition.main};
  user-select: none;

  & + & {
    margin-left: 12px;
  }

  &:hover {
    border-color: ${e.colors.mainPink};
  }

  &:active {
    border-color: ${e.colors.mainPink};
    background-color: ${e.colors.mainPinkWithOpacity};
  }

  @media screen and (${e.media.medium}) {
    font-size: ${e.fontSizes.xm};
    min-width: 116px;
    min-height: 148px;

    & + & {
      margin-left: 14px;
    }
  }
`,_e=c.img`
  width: 52px;
  height: 52px;

  @media screen and (${e.media.medium}) {
    width: 62px;
    height: 62px;
  }
`,ye=c.p`
  color: ${e.colors.white};
  font-family: ${e.fonts.nunito};
  letter-spacing: 0.03px;
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights["semi-bold"]};
  line-height: 133%;

  @media screen and (${e.media.medium}) {
    font-size: ${e.fontSizes.m};
  }
`,Pe=c.li`
  width: 100%;
  min-height: 60px;
  color: ${e.colors.white};
  font-size: ${e.fontSizes.m};
  background-color: ${e.colors.secondaryBg};
  font-weight: ${e.fontWeights["semi-bold"]};
  line-height: 141%;
  border: ${e.borders.medium} transparent;
  border-radius: 16px;
  padding: 16px 20px;
  cursor: pointer;
  transition: ${e.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${e.colors.mainPink};
  }

  &:active {
    border-color: ${e.colors.mainPink};
    background-color: ${e.colors.mainPinkWithOpacity};
  }

  @media screen and (${e.media.medium}) {
    font-size: ${e.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`,ve=c.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 88px;
  height: 88px;

  cursor: pointer;

  background-color: ${({$isChecked:n})=>n?e.colors.mainPinkWithOpacity:e.colors.secondaryBg};

  border: ${e.borders.medium};
  border-color: ${({$isChecked:n})=>n?e.colors.mainPink:e.colors.secondaryBg};

  border-radius: 50%;
  transition: ${e.transition.main};
  user-select: none;

  &:hover {
    border-color: ${e.colors.mainPink};
  }

  &:active {
    border-color: ${e.colors.mainPink};
    background-color: ${e.colors.mainPinkWithOpacity};
  }

  &:nth-child(even) {
    transform: translateY(15px);
  }
`,Ee=c.img`
  width: 25px;
  height: 25px;
`,Ie=c.p`
  color: ${e.colors.white};

  text-align: center;
  font-family: ${e.fonts.nunito};
  font-size: ${e.fontSizes.xs};
  font-weight: ${e.fontWeights["semi-bold"]};
  line-height: 123%;
  letter-spacing: 0.078px;
`,C=(n,t)=>{const o=n[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t)))})};var D=(n=>(n.English="en",n.French="fr",n.German="de",n.Spanish="es",n.Ukrainian="ua",n))(D||{});const Se=()=>{const{i18n:n}=Q(),t=R(),o=localStorage.getItem(A)||"en",[a,l]=u.useState(o),[i,g]=u.useState(null),[w,x]=u.useState(null),r=async _=>{try{const y=await C(Object.assign({"../locales/de/questions.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.e),__vite__mapDeps([0,1])),"../locales/en/questions.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.q),__vite__mapDeps([0,1])),"../locales/es/questions.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.h),__vite__mapDeps([0,1])),"../locales/fr/questions.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.k),__vite__mapDeps([0,1])),"../locales/ua/questions.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.m),__vite__mapDeps([0,1]))}),`../locales/${_}/questions.json`),m=await C(Object.assign({"../locales/de/generic.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.f),__vite__mapDeps([0,1])),"../locales/en/generic.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.d),__vite__mapDeps([0,1])),"../locales/es/generic.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.i),__vite__mapDeps([0,1])),"../locales/fr/generic.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.l),__vite__mapDeps([0,1])),"../locales/ua/generic.json":()=>h(()=>import("./index-CpFTmIrb.js").then(s=>s.n),__vite__mapDeps([0,1]))}),`../locales/${_}/generic.json`);g(y.default),x(m.default)}catch(y){console.error("Error loading translation data:",y)}},k=(_,y)=>{localStorage.setItem(ae,_);const m=D[_];m?(n.changeLanguage(m),localStorage.setItem(A,m),l(m),t(`/quiz/${Number(y)+1}`),r(m)):console.error("Unsupported language:",_)};return u.useEffect(()=>{r(a)},[a]),{genericTranslation:w,selectedLanguage:a,selectedTranslation:i,changeLanguageAndNavigate:k}};export{ge as A,me as C,ye as D,ue as G,Pe as I,$e as L,he as P,fe as T,xe as a,ke as b,_e as c,be as d,le as e,we as f,ce as g,ve as h,Ee as i,Ie as j,pe as k,Se as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CpFTmIrb.js","assets/index-cXar-3K0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
