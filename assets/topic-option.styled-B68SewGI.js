import{j as n,b as i,t as o,u as g,a as x,r as s}from"./index-D86K3tRG.js";const $="1",B=5,u=e=>e.split("/").pop()??$,b=({width:e,height:r,stroke:t})=>n.jsx("svg",{width:e??"24",height:r??"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M9 6.5L2.5 13L9 19.5",stroke:t??"white",strokeWidth:"2.5",strokeLinecap:"round"})}),f=i.section`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;

  color: white;
`,k=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 8px;
`,w=i.button`
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
`,P=i.p`
  margin: 0 auto;
  font-size: ${o.fontSizes.xm};
  font-weight: ${o.fontWeights["extra-bold"]};
  line-height: 111%;

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.l};
  }
`,y=i.span`
  color: ${o.colors.secondaryPink};
`,v=i.div`
  width: 100%;
  height: 4px;
  background-color: ${o.colors.white};
  border-radius: 5px;
  overflow: hidden;

  @media screen and (${o.media.medium}) {
    height: 10px;
  }
`,z=i.div`
  width: ${e=>e.$progressPercent}%;
  height: 100%;
  background-color: ${o.colors.secondaryPink};
  transition: width 1s;
  border-radius: 10px;
`,W=({question:e,totalQuestions:r,isGoBackBtnShown:t=!0})=>{const{pathname:c}=g(),a=x(),d=u(c),[l,m]=s.useState(0);s.useEffect(()=>{const h=e/r*100;m(h)},[e,r]);const p=()=>{a(`/quiz/${Number(d)-1}`)};return n.jsxs(f,{children:[n.jsxs(k,{children:[n.jsx(w,{$isGoBackBtnShown:t,onClick:p,children:n.jsx(b,{})}),n.jsxs(P,{children:[n.jsx(y,{children:e}),n.jsxs("span",{children:["/",r]})]})]}),n.jsx(v,{children:n.jsx(z,{$progressPercent:l})})]})},I=i.li`
  min-width: 335px;
  min-height: 76px;
  padding: 23px 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: ${o.transition.main};
  user-select: none;

  color: ${o.colors.white};
  font-size: ${o.fontSizes.m};
  font-weight: ${o.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;

  background-color: ${o.colors.secondaryBg};
  border: ${o.borders.medium} ${o.colors.secondaryBg};

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
`,j=i.li`
  min-width: 335px;
  min-height: 76px;
  border-radius: 16px;
  transition: ${o.transition.main};
  user-select: none;

  color: ${o.colors.white};
  background-color: ${({$isChecked:e})=>e?o.colors.mainPinkWithOpacity:o.colors.secondaryBg};

  border: ${o.borders.medium};
  border-color: ${({$isChecked:e})=>e?o.colors.mainPinkWithOpacity:o.colors.secondaryBg};

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
`,O=i.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 20px;
  cursor: pointer;

  font-size: ${o.fontSizes.m};
  font-weight: ${o.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;

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
`,L=i.input`
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

  ${j} + &:checked {
    background-color: ${o.colors.mainPink};
  }
`,E=i.li`
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
`,A=i.img`
  width: 52px;
  height: 52px;

  @media screen and (${o.media.medium}) {
    width: 62px;
    height: 62px;
  }
`,T=i.p`
  color: ${o.colors.white};
  font-family: ${o.fonts.nunito};
  letter-spacing: 0.03px;
  font-size: ${o.fontSizes.s};
  font-weight: ${o.fontWeights["semi-bold"]};
  line-height: 133%;

  @media screen and (${o.media.medium}) {
    font-size: ${o.fontSizes.m};
  }
`,C=i.li`
  width: 100%;
  min-height: 60px;
  padding: 16px 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: ${o.transition.main};
  user-select: none;

  color: ${o.colors.white};
  font-size: ${o.fontSizes.m};
  font-weight: ${o.fontWeights["semi-bold"]};
  line-height: 141%;

  background-color: ${o.colors.secondaryBg};
  border: ${o.borders.medium} transparent;

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
`,N=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  overflow-x: hidden;

  width: 88px;
  height: 88px;
  border-radius: 50%;

  cursor: pointer;
  transition: ${o.transition.main};
  user-select: none;

  background-color: ${({$isChecked:e})=>e?o.colors.mainPinkWithOpacity:o.colors.secondaryBg};
  border: ${o.borders.medium};
  border-color: ${({$isChecked:e})=>e?o.colors.mainPink:o.colors.secondaryBg};

  &:hover {
    border-color: ${o.colors.mainPink};
  }

  &:active {
    border-color: ${o.colors.mainPink};
    background-color: ${o.colors.mainPinkWithOpacity};
  }

  @media screen and (${o.media.medium}) {
    &:nth-child(even) {
      transform: translateY(15px);
    }
  }
`,_=i.img`
  width: 25px;
  height: 25px;
`,D=i.p`
  color: ${o.colors.white};
  text-align: center;
  font-family: ${o.fonts.nunito};
  font-size: ${o.fontSizes.xs};
  font-weight: ${o.fontWeights["semi-bold"]};
  line-height: 123%;
  letter-spacing: 0.078px;
`;export{T as D,C as I,O as L,W as P,B as T,E as a,A as b,I as c,j as d,L as e,N as f,u as g,_ as h,D as i};
