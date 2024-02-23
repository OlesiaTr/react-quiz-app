import{j as i,b as n,t as o,u as x,a as $,r as s}from"./index-ED9gzTx7.js";const u=({width:e,height:t,stroke:r})=>i.jsx("svg",{width:e??"24",height:t??"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M9 6.5L2.5 13L9 19.5",stroke:r??"white",strokeWidth:"2.5",strokeLinecap:"round"})}),f=n.section`
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`,b=n.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`,k=n.button`
  background: none;
  border: none;
  cursor: ${({$isGoBackBtnShown:e})=>e?"pointer":"default"};
  transition: ${o.transition.main};
  opacity: ${({$isGoBackBtnShown:e})=>e?1:0};
  animation: ${({$isGoBackBtnShown:e})=>e?"fadeIn":"none"}
    0.5s ease;

  &:active svg path {
    stroke: ${o.colors.secondaryPink};
  }
`,w=n.p`
  margin: 0 auto;

  font-size: ${o.fontSizes.xm};
  font-weight: ${o.fontWeights["extra-bold"]};
  line-height: 111%;

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.l};
  }
`,P=n.span`
  color: ${o.colors.secondaryPink};
`,y=n.div`
  width: 100%;
  height: 4px;
  background-color: ${o.colors.white};
  border-radius: 5px;
  overflow: hidden;

  @media screen and (${o.media.medium}) {
    height: 10px;
  }
`,z=n.div`
  width: ${e=>e.$progressPercent}%;
  height: 100%;
  background-color: ${o.colors.secondaryPink};
  transition: width 1s;
  border-radius: 10px;
`,v="1",W=5,j=e=>e.split("/").pop()??v,I=({question:e,totalQuestions:t,isGoBackBtnShown:r=!0})=>{const{pathname:a}=x(),d=$(),l=j(a),[m,p]=s.useState(0);s.useEffect(()=>{const g=e/t*100;p(g)},[e,t]);const h=()=>{d(`/quiz/${Number(l)-1}`)};return i.jsxs(f,{children:[i.jsxs(b,{children:[i.jsx(k,{$isGoBackBtnShown:r,onClick:h,children:i.jsx(u,{})}),i.jsxs(w,{children:[i.jsx(P,{children:e}),i.jsxs("span",{children:["/",t]})]})]}),i.jsx(y,{children:i.jsx(z,{$progressPercent:m})})]})},c=n.h1`
  color: ${o.colors.white};

  text-align: center;
  font-size: ${o.fontSizes.xl};
  font-weight: ${o.fontWeights["extra-bold"]};
  line-height: 127%;
  letter-spacing: -0.6px;

  margin-bottom: 16px;

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.xxl};
    margin-bottom: 20px;
  }
`,O=({children:e,htmlContent:t})=>i.jsx(i.Fragment,{children:t?i.jsx(c,{dangerouslySetInnerHTML:{__html:t}}):i.jsx(c,{children:e})}),L=n.li`
  min-width: 335px;
  min-height: 76px;
  color: ${o.colors.white};
  font-size: ${o.fontSizes.m};
  background-color: ${o.colors.secondaryBg};
  font-weight: ${o.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;
  border: ${o.borders.medium} ${o.colors.secondaryBg};
  border-radius: 16px;
  padding: 23px 20px;
  cursor: pointer;
  transition: ${o.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${o.colors.mainPink};
  }

  &:active {
    border-color: ${o.colors.mainPink};
    background-color: ${o.colors.mainPinkWithOpacity};
  }

  @media screen and (${o.media.medium}) {
    min-width: 420px;

    font-size: ${o.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`,S=n.li`
  min-width: 335px;
  min-height: 76px;
  color: ${o.colors.white};
  background-color: ${({$isChecked:e})=>e?o.colors.mainPinkWithOpacity:o.colors.secondaryBg};

  border: ${o.borders.medium};
  border-color: ${({$isChecked:e})=>e?o.colors.mainPinkWithOpacity:o.colors.secondaryBg};

  border-radius: 16px;
  transition: ${o.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${o.colors.mainPink};
  }

  &:active {
    border-color: ${o.colors.mainPink};
    background-color: ${o.colors.mainPinkWithOpacity};
  }

  @media screen and (${o.media.medium}) {
    min-width: 420px;

    font-size: ${o.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`,T=n.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${o.fontSizes.m};
  font-weight: ${o.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;
  padding: 23px 20px;
  cursor: pointer;

  &::after {
    content: '';
    width: 23px;
    height: 23px;
    border: ${o.borders.medium} ${o.colors.mainPink};
    border-radius: 8px;

    input:checked + & {
      background-color: ${o.colors.mainPink};
      background-image: url(/src/assets/icon-check.svg);
      border: none;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`,E=n.input`
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

  ${S} + &:checked {
    background-color: ${o.colors.mainPink};
  }
`,_=n.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  min-width: 101px;
  min-height: 144px;
  background-color: ${o.colors.secondaryBg};

  border: ${o.borders.medium} transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: ${o.transition.main};
  user-select: none;

  & + & {
    margin-left: 12px;
  }

  &:hover {
    border-color: ${o.colors.mainPink};
  }

  &:active {
    border-color: ${o.colors.mainPink};
    background-color: ${o.colors.mainPinkWithOpacity};
  }

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.xm};
    min-width: 116px;
    min-height: 148px;

    & + & {
      margin-left: 14px;
    }
  }
`,A=n.img`
  width: 52px;
  height: 52px;

  @media screen and (${o.media.medium}) {
    width: 62px;
    height: 62px;
  }
`,N=n.p`
  color: ${o.colors.white};
  font-family: ${o.fonts.nunito};
  letter-spacing: 0.03px;
  font-size: ${o.fontSizes.s};
  font-weight: ${o.fontWeights["semi-bold"]};
  line-height: 133%;

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.m};
  }
`,C=n.li`
  width: 100%;
  min-height: 60px;
  color: ${o.colors.white};
  font-size: ${o.fontSizes.m};
  background-color: ${o.colors.secondaryBg};
  font-weight: ${o.fontWeights["semi-bold"]};
  line-height: 141%;
  border: ${o.borders.medium} transparent;
  border-radius: 16px;
  padding: 16px 20px;
  cursor: pointer;
  transition: ${o.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${o.colors.mainPink};
  }

  &:active {
    border-color: ${o.colors.mainPink};
    background-color: ${o.colors.mainPinkWithOpacity};
  }

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`,D=n.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 88px;
  height: 88px;

  cursor: pointer;

  background-color: ${({$isChecked:e})=>e?o.colors.mainPinkWithOpacity:o.colors.secondaryBg};

  border: ${o.borders.medium};
  border-color: ${({$isChecked:e})=>e?o.colors.mainPink:o.colors.secondaryBg};

  border-radius: 50%;
  transition: ${o.transition.main};
  user-select: none;

  &:hover {
    border-color: ${o.colors.mainPink};
  }

  &:active {
    border-color: ${o.colors.mainPink};
    background-color: ${o.colors.mainPinkWithOpacity};
  }

  &:nth-child(even) {
    transform: translateY(15px);
  }
`,F=n.img`
  width: 25px;
  height: 25px;
`,U=n.p`
  color: ${o.colors.white};

  text-align: center;
  font-family: ${o.fonts.nunito};
  font-size: ${o.fontSizes.xs};
  font-weight: ${o.fontWeights["semi-bold"]};
  line-height: 123%;
  letter-spacing: 0.078px;
`;export{N as D,C as I,T as L,I as P,W as T,O as a,_ as b,A as c,L as d,S as e,E as f,j as g,D as h,F as i,U as j};
