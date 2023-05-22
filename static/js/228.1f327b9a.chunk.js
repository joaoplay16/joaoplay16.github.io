"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[228],{2228:function(n,e,i){i.r(e),i.d(e,{default:function(){return C}});var a,t,o,s,l,r,d,c,p=i(168),m=i(9439),x=i(8550),u=i(2791),g=i(6444),f=i(30),h=i(9016),j=i(3283),v=i(184),y=(0,g.ZP)("div")(a||(a=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  justify-items: center;\n  align-items: start;\n  gap: 0px 60px;\n  padding: 0px 20px 60px 20px;\n\n  @media (max-width: 900px) {\n    justify-content: center;\n    grid-template-columns: 1fr;\n    row-gap: 40px;\n    padding-bottom: 10px;\n  }\n"]))),b=(0,g.ZP)("div")(t||(t=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 0px 20px;\n  align-items: center;\n  justify-items: center;\n\n  .arrow {\n    padding: 0px 10px;\n  }\n"]))),w=(0,g.ZP)("div")(o||(o=(0,p.Z)(["\n  --selected-image: calc(\n    ","%\n  );\n  display: flex;\n  overflow: hidden;\n  max-width: 300px;\n  max-height: 600px;\n\n  img {\n    padding-right: 5px;\n    transform: ",";\n    transition: 0.3s;\n  }\n"])),(function(n){return-100*n.selectedImageIndex}),(function(n){return 0==n.selectedImageIndex?"none":"translateX(var(--selected-image))"})),Z=(0,g.ZP)("div")(s||(s=(0,p.Z)(["\n  ul {\n    list-style: disc;\n    margin-left: 25px;\n  }\n"]))),I=(0,g.ZP)("article")(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: start;\n  align-items: center;\n  padding-top: 34px;\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),P=(0,g.ZP)("div")(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 16px;\n  justify-content: space-between;\n  padding: 40px 0px;\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),k=(0,g.ZP)("div")(d||(d=(0,p.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n"]))),N=(0,g.ZP)("article")(c||(c=(0,p.Z)(["\n  background-color: var(--cor-s4);\n  padding-top: 60px;\n  padding-bottom: 30px;\n\n  @media (max-width: 800px) {\n    padding-top: 40px;\n  }\n"]))),C=function(){var n=["Kotlin","Room","Paging3","Dagger/Hilt","Room","Coil","Datastore","MVVM"],e=(0,u.useState)(0),i=(0,m.Z)(e,2),a=i[0],t=i[1],o=[{src:f.qv,alt:"Comics Info tela 1"},{src:f.P7,alt:"Comics Info tela 2"}],s=a<o.length-1,l=a>0,r=l?"visible":"hidden",d=s?"visible":"hidden";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x.h4,{}),(0,v.jsxs)(y,{className:"container",children:[(0,v.jsxs)(b,{children:[(0,v.jsx)("img",{id:"arrow-left",style:{visibility:r},className:"arrow",src:h.IW,alt:"",onClick:function(n){l&&t((function(n){return n-1}))}}),(0,v.jsx)(w,{selectedImageIndex:a,children:null===o||void 0===o?void 0:o.map((function(n){return(0,v.jsx)("img",{src:n.src,alt:n.alt},n.alt)}))}),(0,v.jsx)("img",{id:"arrow-right",style:{visibility:d},className:"arrow",src:h._I,alt:"",onClick:function(n){s&&t((function(n){return n+1}))}})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)("h2",{className:"fon-1-l cor-0",children:"Comics Info"}),(0,v.jsxs)("p",{className:"font-2-s cor-3",children:["Comics Info, \xe9 um cliente App para a Marvel API, que obt\xe9m informa\xe7\xf5es sobre as HQ's Marvel. Desenvolvido em Kotlin, utilizando o UI kit Jetpack Compose."," "]}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{className:"font-2-s cor-3",children:"Utilizei a arquitetura MVVM, al\xe9m de conceitos de estado da IU, imutabilidade e uma uma \xfanica fonte de verdade com o fluxo de dados unidirecional."}),(0,v.jsx)("br",{}),(0,v.jsx)("li",{className:"font-2-s cor-3",children:"A experi\xeancia do usu\xe1rio \xe9 um aspecto muito importante de um produto. Eu tive a oportunidade de implementar uma pagina\xe7\xe3o de dados offline, usando Paging3 library e Room."})]}),(0,v.jsx)(I,{children:null===n||void 0===n?void 0:n.map((function(n){return(0,v.jsx)(x.Af,{className:"font-1-xs cor-p2",color:"--cor-p2",paddingY:2,paddingX:10,lineWidth:2,borderRadius:15,children:n},n)}))}),(0,v.jsxs)(P,{children:[(0,v.jsxs)(k,{className:"link-button",children:[(0,v.jsx)("img",{src:h.vJ,alt:"\xcdcone Google Play"}),(0,v.jsx)(x.Qj,{className:"font-2-xs cor-0 googleplay",href:"https://play.google.com/store/apps/details?id=com.playlab.marvelcomicsinfo",children:"ver no google play"})]}),(0,v.jsxs)(k,{className:"link-button",children:[(0,v.jsx)("img",{src:h.ET,alt:"\xcdcone Github"}),(0,v.jsx)(x.Qj,{className:"font-2-xs cor-0 googleplay",href:"https://github.com/joaoplay16/marvel-comics-info",children:"reposit\xf3rio do projeto"})]})]})]})]}),(0,v.jsx)(N,{children:(0,v.jsx)(j.Z,{itemBackGroundColor:"--cor-s2",title:(0,v.jsx)(x.QE,{children:"Mais Projetos"})})}),(0,v.jsx)(x.$_,{id:"contact"})]})}}}]);
//# sourceMappingURL=228.1f327b9a.chunk.js.map