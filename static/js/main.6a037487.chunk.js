(this.webpackJsonpmockup=this.webpackJsonpmockup||[]).push([[0],[,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(4),n=c.n(a),r=c.p+"static/media/logo.d461a4d9.png",o=c.p+"static/media/settings.2db3e154.svg",l=c.p+"static/media/search.353c0b58.svg",j=c.p+"static/media/tinkerbell.d83fec2c.svg",d=(c(10),c(0));function u(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:r,alt:"Logo"})}),Object(d.jsx)("nav",{className:"header__nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:j,alt:"Notificaciones"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:o,alt:"Ajustes"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:l,alt:"B\xfasqueda"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"header__nav--avatar",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU",alt:"avatar"})})]})})]})}c(12);function b(){return Object(d.jsxs)("section",{className:"section__top",children:[Object(d.jsx)("h1",{children:"Listar usuarios"}),Object(d.jsxs)("h2",{children:[Object(d.jsx)("a",{href:"/",children:"inicio"}),Object(d.jsx)("span",{children:"/"}),"usuarios"]})]})}var h=c(2),m=c(5),O=(c(13),function e(t,c,s,i,a,n,r,o){Object(m.a)(this,e),this.nombre=t,this.apellidoMaterno=c,this.apellidoPaterno=s,this.perfil=i,this.status=a,this.estado=n,this.ciudad=r,this.correo=o}),x=[new O("Juan","Perez","Perez","Usuario","Activo","San Francisco","California","juan@gmail.com"),new O("Jorge","Lopez","Herrera","Usuario","Activo","Jalisco","California","jorge@gmail.com"),new O("Jose","Hernandez","Carrillo","Usuario","Activo","San Francisco","California","jose@gmail.com"),new O("Juan","Perez","Perez","Usuario","Activo","San Francisco","California","juan@gmail.com")];function p(){var e=function(e){var t=Object(s.useState)(""),c=Object(h.a)(t,2),i=c[0],a=c[1],n=Object(s.useState)(e),r=Object(h.a)(n,2),o=r[0],l=r[1];return Object(s.useMemo)((function(){var t=e.filter((function(e){return"".concat(e.nombre," ").concat(e.apellidoMaterno," ").concat(e.apellidoPaterno).toLowerCase().includes(i.toLowerCase())}));l(t)}),[e,i]),{query:i,setQuery:a,filterUsers:o}}(x),t=e.query,c=e.setQuery,i=e.filterUsers;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"table__search",children:[Object(d.jsx)("label",{htmlFor:"search",children:"Filtrar usuarios:"}),Object(d.jsx)("input",{type:"text",placeholder:"Buscar",onChange:function(e){return c(e.target.value)},value:t,id:"search"})]}),Object(d.jsxs)("div",{className:"table__container",children:[Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Nombre"}),Object(d.jsx)("th",{children:"Apellido Materno"}),Object(d.jsx)("th",{children:"Apellido Paterno"}),Object(d.jsx)("th",{children:"Perfil"}),Object(d.jsx)("th",{children:"Status"}),Object(d.jsx)("th",{children:"Estado"}),Object(d.jsx)("th",{children:"Ciudad"}),Object(d.jsx)("th",{children:"Correo"})]})}),Object(d.jsx)("tbody",{children:i.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.nombre}),Object(d.jsx)("td",{children:e.apellidoMaterno}),Object(d.jsx)("td",{children:e.apellidoPaterno}),Object(d.jsx)("td",{children:e.perfil}),Object(d.jsx)("td",{children:e.status}),Object(d.jsx)("td",{children:e.estado}),Object(d.jsx)("td",{children:e.ciudad}),Object(d.jsx)("td",{children:e.correo})]},t)}))})]}),0===i.length&&Object(d.jsx)("p",{style:{textAlign:"center",padding:"10px"},children:"No se encontraron usuarios."})]})]})}console.log(x);c(14);function f(){var e=Object(s.useState)(1),t=Object(h.a)(e,2),c=t[0],i=t[1];return Object(d.jsxs)("section",{className:"tabs",children:[Object(d.jsxs)("ul",{className:"tabs__container",children:[Object(d.jsx)("li",{className:"tabs__item",children:Object(d.jsx)("button",{className:"tabs__button ".concat(0===c?"activo":""),onClick:function(){i(0)},children:"Tablero"})}),Object(d.jsx)("li",{className:"tabs__item",children:Object(d.jsx)("button",{className:"tabs__button ".concat(1===c?"activo":""),onClick:function(){i(1)},children:"Usuarios"})}),Object(d.jsx)("li",{className:"tabs__item",children:Object(d.jsx)("button",{className:"tabs__button ".concat(2===c?"activo":""),onClick:function(){i(2)},children:"Productos"})})]}),Object(d.jsxs)("div",{className:"tabs__content",children:[0===c&&Object(d.jsxs)("div",{className:"tabs__content-item",children:[Object(d.jsx)("h3",{children:"Dashboard"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum, assumenda quos dolore unde enim! Odio qui voluptate cum suscipit dolorum ad unde, quod nulla autem explicabo aspernatur! Odio, minima!"})]}),1===c&&Object(d.jsx)("div",{className:"tabs__content-item",children:Object(d.jsx)(p,{})}),2===c&&Object(d.jsxs)("div",{className:"tabs__content-item",children:[Object(d.jsx)("h3",{children:"Productos"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum, assumenda quos dolore unde enim! Odio qui voluptate cum suscipit dolorum ad unde, quod nulla autem explicabo aspernatur! Odio, minima!"})]})]})]})}function _(){return Object(d.jsxs)("main",{children:[Object(d.jsx)(u,{}),Object(d.jsx)(b,{}),Object(d.jsx)(f,{})]})}c(15);n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.6a037487.chunk.js.map