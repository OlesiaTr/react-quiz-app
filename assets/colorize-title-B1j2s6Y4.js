const s={en:["hate","privacy","policy","terms","of","use."],de:["wenigsten","datenschutzrichtlinie","nutzungsbedingungen"],es:["odias","política","de","privacidad","condiciones","uso."],fr:["détestez","politique","de","confidentialité","conditions","d'utilisation."],ua:["не","політикою","конфіденційності","умовами","використання."]},d=(o,t)=>o.split(" ").map((e,n)=>{var i;return((i=s[t])==null?void 0:i.includes(e.toLowerCase()))?`<span key=${n} style="color: #E4229B;">${e}</span>`:`${e}`}).join(" ");export{d as c};