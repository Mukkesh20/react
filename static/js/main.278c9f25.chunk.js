(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h1",{children:e.monster.name},e.monster.id),Object(l.jsx)("h2",{children:e.monster.email},e.monster.id)]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.name.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(16),n(17),function(e){var t=e.placeHolder,n=e.onChangeValue;return Object(l.jsx)("input",{className:"search",placeholder:t,onChange:n},"search")}),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={users:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"MONSTERS ACADEMY"}),Object(l.jsx)(m,{placeHolder:"Search the Monster",onChangeValue:this.handleChange}),Object(l.jsx)(j,{name:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.278c9f25.chunk.js.map