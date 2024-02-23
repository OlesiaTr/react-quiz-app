import{b as e,t as n,j as s}from"./index-CpFTmIrb.js";const d=e.button`
  width: 100%;
  min-height: 56px;

  background-color: #e4229c;
  color: ${n.colors.white};
  border: none;
  border-radius: 30px;
  padding: 13px 0;
  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`,i=({children:t,selectedItems:o,onClick:r})=>s.jsx(d,{disabled:o&&o.length===0,onClick:r,children:t});export{i as B};
