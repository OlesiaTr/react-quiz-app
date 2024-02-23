import{b as n,t as s,j as d}from"./index-D86K3tRG.js";const a=n.button`
  width: 100%;
  min-height: 56px;
  padding: 13px 0;
  border: none;
  border-radius: 30px;

  color: ${s.colors.white};

  background-color: #e4229c;

  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`,u=({children:t,selectedItems:o,onClick:r,isDisabled:e})=>d.jsx(a,{disabled:o&&o.length===0||e,onClick:r,children:t});export{u as B};
