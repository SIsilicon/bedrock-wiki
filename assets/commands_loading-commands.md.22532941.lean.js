import{_ as l,c as r,a as s,w as o,b as e,d as a,e as t,r as i,o as d}from"./404.md.10773650.js";const N='{"title":"Loading Commands","description":"","frontmatter":{"title":"Loading Commands","category":"Tutorials","mention":["MedicalJewel105","Hatchibombotar"],"tags":["easy"]},"headers":[{"level":2,"title":"Player Join","slug":"player-join"},{"level":2,"title":"First World Load","slug":"first-world-load"}],"relativePath":"commands/loading-commands.md"}',c={},p=e("p",null,"Sometimes when creating an add-on you need to run commands on a players first join or on the first time a world has been loaded. We will go through both.",-1),u=e("h2",{id:"player-join",tabindex:"-1"},[a("Player Join "),e("a",{class:"header-anchor",href:"#player-join","aria-hidden":"true"},"#")],-1),_=e("p",null,[a("In order to check if a new player has joined the world we need to run commands every tick. For this we use "),e("a",{href:"/commands/mcfunction.html#creating-tick-json"},"tick.json"),a(".")],-1),m=e("p",null,"Here is what your file could look like:",-1),h=a("BP/functions/tick.json"),b=t("",2),g=a("BP/functions/load_commands.mcfunction"),f=t("",4),w=a("BP/functions/tick.json"),y=t("",1),v=a("BP/functions/load_check.mcfunction"),k=e("div",{class:"language-"},[e("pre",null,[e("code",null,`execute @a[c=1] ~ ~ ~ function load_commands
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),T=e("p",null,[a("Here, we are running it from one player, this could be from any "),e("strong",null,"entity"),a(" though.")],-1),P=a("BP/functions/load_commands.mcfunction"),j=t("",2);function C(S,A,V,x,I,q){const n=i("CodeHeader");return d(),r("div",null,[p,u,_,m,s(n,null,{default:o(()=>[h]),_:1}),b,s(n,null,{default:o(()=>[g]),_:1}),f,s(n,null,{default:o(()=>[w]),_:1}),y,s(n,null,{default:o(()=>[v]),_:1}),k,T,s(n,null,{default:o(()=>[P]),_:1}),j])}var H=l(c,[["render",C]]);export{N as __pageData,H as default};