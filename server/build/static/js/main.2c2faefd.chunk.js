(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(15),c=n.n(o),r=n(6),a=n(5),i=n(2),u=n(3),d=n.n(u),l="http://localhost:3001/api/todos",s={getAll:function(){return d.a.get(l).then((function(t){return t.data}))},create:function(t){return d.a.post(l,t).then((function(t){return t.data}))},change:function(t){return console.log("change before baseurl"),d.a.put("".concat(l,"/").concat(t.id),t).then((function(t){return console.log("change promise returned"),t.data}))},remove:function(t){return d.a.delete("".concat(l,"/").concat(t.id),t).then((function(t){console.log(t)}))}},h=n(0),j=function(t){var e=t.todo,n=t.removeTodo,o=t.toggleChange;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return o(e)}})}),Object(h.jsx)("td",{children:e.content}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return n(e)},children:"x"})})]})},b=(n(39),function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],c=Object(i.useState)(""),u=Object(a.a)(c,2),d=u[0],l=u[1];Object(i.useEffect)((function(){s.getAll().then((function(t){o(t)}))}),[]);var b=function(t){console.log("removetodo",t),window.confirm("Do you want to remove ".concat(t.content,"?"))&&s.remove(t).then(o(n.filter((function(e){return e.id!==t.id})))).catch((function(e){window.alert('The todo "'.concat(t.content,' was already removed from the server"'))}))},f=function(t){var e=Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed});console.log("changedTodo",e),s.change(e).then(o(n.map((function(t){return t.id!==e.id?t:e}))))};return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Todos"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:d,completed:!1};s.create(e).then((function(t){o(n.concat(t)),l("")}))},children:[Object(h.jsx)("input",{value:d,onChange:function(t){l(t.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"save"})]}),Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:n.map((function(t){return Object(h.jsx)(j,{todo:t,removeTodo:b,toggleChange:f},t.id)}))})})]})});c.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2c2faefd.chunk.js.map