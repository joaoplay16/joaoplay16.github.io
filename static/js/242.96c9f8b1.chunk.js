"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[242],{7242:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var a,i,r,s,o,d,l,c,p=t(168),m=t(8152),x=t(7805),g=t(2791),u=t(6031),f=t(5583),h=t(9016),j=t(1088),b=t(184),w=(0,u.ZP)("div")(a||(a=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  align-items: start;\n  gap: 40px 60px;\n  padding: 0px 20px 60px 20px;\n\n  @media (max-width: 900px) {\n    justify-content: center;\n    grid-template-columns: 1fr;\n    padding-bottom: 10px;\n  }\n"]))),v=(0,u.ZP)("div")(i||(i=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 0px 20px;\n  align-items: center;\n  justify-items: center;\n\n  .arrow {\n    padding: 0px 10px;\n  }\n\n  @media (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    row-gap: 20px;\n\n    #arrow-left {\n      grid-area: 2/1;\n    }\n\n    #arrow-right {\n      grid-area: 2/2;\n    }\n\n    #project-images {\n      grid-column: 1/-1;\n    }\n  }\n"]))),y=(0,u.ZP)("div")(r||(r=(0,p.Z)(["\n  --selected-image: calc(\n    ","%\n  );\n  display: flex;\n  overflow: hidden;\n  max-width: 800px;\n  max-height: 600px;\n\n  img {\n    padding-right: 5px;\n    transform: ",";\n    transition: 0.3s;\n  }\n"])),(function(n){return-100*n.selectedImageIndex}),(function(n){return 0==n.selectedImageIndex?"none":"translateX(var(--selected-image))"})),Z=(0,u.ZP)("div")(s||(s=(0,p.Z)(["\n  ul {\n    list-style: disc;\n    margin-left: 25px;\n  }\n"]))),k=(0,u.ZP)("article")(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: start;\n  align-items: center;\n  padding-top: 34px;\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),A=(0,u.ZP)("div")(d||(d=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 16px;\n  justify-content: space-between;\n  padding: 40px 0px;\n\n  .demo-link {\n    gap: 0px;\n  }\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),W=(0,u.ZP)("div")(l||(l=(0,p.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n"]))),P=(0,u.ZP)("article")(c||(c=(0,p.Z)(["\n  background-color: var(--cor-s4);\n  padding-top: 60px;\n  padding-bottom: 30px;\n\n  @media (max-width: 800px) {\n    padding-top: 40px;\n  }\n"]))),I=function(){var n=["React","MaterialUI","Firestore","Mercado Pago","Authentication"],e=(0,g.useState)(0),t=(0,m.Z)(e,2),a=t[0],i=t[1],r=[{src:f.ww,alt:"Agendamento Web tela 10"},{src:f.IT,alt:"Agendamento Web tela 2"},{src:f.SH,alt:"Agendamento Web tela 3"},{src:f.qn,alt:"Agendamento Web tela 4"},{src:f.Qr,alt:"Agendamento Web tela 5"},{src:f.yX,alt:"Agendamento Web tela 6"},{src:f.ni,alt:"Agendamento Web tela 7"},{src:f.hE,alt:"Agendamento Web tela 8"},{src:f.aG,alt:"Agendamento Web tela 9"}],s=a<r.length-1,o=a>0,d=o?"visible":"hidden",l=s?"visible":"hidden";return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.h4,{}),(0,b.jsxs)(w,{className:"container",children:[(0,b.jsxs)(v,{children:[(0,b.jsx)("img",{id:"arrow-left",style:{visibility:d},className:"arrow",src:h.IW,alt:"",onClick:function(n){o&&i((function(n){return n-1}))}}),(0,b.jsx)(y,{id:"project-images",selectedImageIndex:a,children:null===r||void 0===r?void 0:r.map((function(n){return(0,b.jsx)("img",{src:n.src,alt:n.alt},n.alt)}))}),(0,b.jsx)("img",{id:"arrow-right",style:{visibility:l},className:"arrow",src:h._I,alt:"",onClick:function(n){s&&i((function(n){return n+1}))}})]}),(0,b.jsxs)(Z,{children:[(0,b.jsx)("h2",{className:"fon-1-l cor-0",children:"Agendamento Web"}),(0,b.jsx)("p",{className:"font-2-s cor-3",children:"Agendamento Web \xe9 um sistema web de auto-agendamento para servi\xe7os de est\xe9tica. Permite que o cliente escolha a procedimento, profissional, data e m\xe9todo de pagamento do atendimento. Al\xe9m disso possui dashboard para defini\xe7\xe3o de datas dispon\xedveis, profissionais e valores de procedimentos. Fase final de constru\xe7\xe3o."}),(0,b.jsx)(k,{children:null===n||void 0===n?void 0:n.map((function(n){return(0,b.jsx)(x.Af,{className:"font-1-xs cor-p2",color:"--cor-p2",paddingY:2,paddingX:10,lineWidth:2,borderRadius:15,children:n},n)}))}),(0,b.jsxs)(A,{children:[(0,b.jsxs)(W,{className:"link-button",children:[(0,b.jsx)("img",{src:h.ET,alt:"\xcdcone Github"}),(0,b.jsx)(x.Qj,{className:"font-2-xs cor-0 googleplay",href:"https://github.com/joaoplay16/agendamento-web",target:"_blank",children:"reposit\xf3rio do projeto"})]}),(0,b.jsxs)(W,{className:"link-button demo-link",children:[(0,b.jsx)("img",{src:h.xP,alt:"\xcdcone de corrente"}),(0,b.jsx)(x.Qj,{className:"font-2-xs cor-0 googleplay",href:"http://ec2-15-228-45-130.sa-east-1.compute.amazonaws.com/",target:"_blank",children:"demonstra\xe7\xe3o"})]})]})]})]}),(0,b.jsx)(P,{children:(0,b.jsx)(j.Z,{itemBackGroundColor:"--cor-s2",title:(0,b.jsx)(x.QE,{children:"Mais Projetos"})})}),(0,b.jsx)(x.$_,{id:"contact"})]})}},1088:function(n,e,t){t.d(e,{Z:function(){return a.Z}});var a=t(3283)}}]);
//# sourceMappingURL=242.96c9f8b1.chunk.js.map