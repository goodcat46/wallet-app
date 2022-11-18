"use strict";(self.webpackChunkwallet_app=self.webpackChunkwallet_app||[]).push([[940],{3940:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var n=t(2791),c=t(9434),l=t(9961),s=[{id:"c9d9e447-1b83-4238-8712-edc77b18b739",name:"Main expenses",type:"EXPENSE"},{id:"27eb4b75-9a42-4991-a802-4aefe21ac3ce",name:"Products",type:"EXPENSE"},{id:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",name:"Car",type:"EXPENSE"},{id:"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",name:"Self care",type:"EXPENSE"},{id:"76cc875a-3b43-4eae-8fdb-f76633821a34",name:"Child care",type:"EXPENSE"},{id:"128673b5-2f9a-46ae-a428-ec48cf1effa1",name:"Household products",type:"EXPENSE"},{id:"1272fcc4-d59f-462d-ad33-a85a075e5581",name:"Education",type:"EXPENSE"},{id:"c143130f-7d1e-4011-90a4-54766d4e308e",name:"Leisure",type:"EXPENSE"},{id:"719626f1-9d23-4e99-84f5-289024e437a8",name:"Other expenses",type:"EXPENSE"},{id:"3acd0ecd-5295-4d54-8e7c-d3908f4d0402",name:"Entertainment",type:"EXPENSE"},{id:"063f1132-ba5d-42b4-951d-44011ca46262",name:"Income",type:"INCOME"}],o={tablesList:"TableMobile_tablesList__GjNh3",listItem:"TableMobile_listItem__WWJNx",trow:"TableMobile_trow__zcDv-",th:"TableMobile_th__uiuoE",td:"TableMobile_td__H9RrI",tableEXPENSE:"TableMobile_tableEXPENSE__hs6mg",tableINCOME:"TableMobile_tableINCOME__OWboc",sum:"TableMobile_sum__uRmPW"},i=t(3329),d=function(e){var a=e.tdTitle,t=e.value;return(0,i.jsxs)("tr",{className:o.trow,children:[(0,i.jsx)("th",{className:o.th,children:a}),(0,i.jsx)("td",{title:t,className:"sum"!==a?o.td:[o.sum,o.td].join(" "),children:t})]})},r=function(e){var a=new Date(e),t=a.getDate().toString().padStart(2,0),n=(a.getMonth()+1).toString().padStart(2,0),c=a.getFullYear().toString().slice(2);return"".concat(t,".").concat(n,".").concat(c," ")},b=function(e){var a=e.data,t=a.map((function(e){return{id:e.id,date:r(e.transactionDate),type:"INCOME"===e.type?"+":"-",category:(a=e.categoryId,s.find((function(e){return e.id===a}))).name,comment:e.comment,sum:"INCOME"===e.type?e.amount:e.amount.toString().slice(1),balance:e.balanceAfter};var a}));return(0,i.jsx)("div",{className:o.container,children:(0,i.jsx)("ul",{className:o.tablesList,children:t.map((function(e){return(0,i.jsx)("li",{className:o.listItem,children:(0,i.jsx)("table",{className:"+"===e.type?o.tableINCOME:o.tableEXPENSE,children:(0,i.jsx)("tbody",{className:o.tbody,children:Object.keys(e).map((function(a,t){return(0,i.jsx)(d,{tdTitle:a,value:e[a]},t)}))})})},e.id)}))})})},m={table:"TableTransactions_table__HiX+p",thead:"TableTransactions_thead__8JeIA",colHead:"TableTransactions_colHead__HxgxD",tbody:"TableTransactions_tbody__LhRi5",tbodyRow:"TableTransactions_tbodyRow__HHA+Q",col:"TableTransactions_col__gB-5r","col-1":"TableTransactions_col-1__G5RwF","col-2":"TableTransactions_col-2__9-MnO","col-3":"TableTransactions_col-3__-cE0b","col-4":"TableTransactions_col-4__fhcYA",comentWrap:"TableTransactions_comentWrap__Rj1t+","col-5":"TableTransactions_col-5__jdbD9","col-6":"TableTransactions_col-6__biTEg",income:"TableTransactions_income__SkreT",expense:"TableTransactions_expense__fgvjz"},_=["Date","Type","Category","Comment","Sum","Balance"],u=function(e){var a=e.data;return(0,i.jsx)("div",{className:m.container,children:(0,i.jsxs)("table",{className:m.table,children:[(0,i.jsx)("thead",{className:m.thead,children:(0,i.jsx)("tr",{children:_.map((function(e,a){return(0,i.jsx)("th",{className:[m.colHead,m["col-".concat(a+1)],m["colHead".concat(a+1)]].join(" "),children:e},a)}))})}),(0,i.jsx)("tbody",{className:m.tbody,children:a.map((function(e){var a=s.find((function(a){return a.id===e.categoryId}));return(0,i.jsxs)("tr",{className:m.tbodyRow,children:[(0,i.jsx)("td",{className:[m.col,m.td,m["col-1"]].join(" "),children:r(e.transactionDate)}),(0,i.jsx)("td",{className:[m.col,m.td,m["col-2"]].join(" "),children:"INCOME"===e.type?"+":"-"}),(0,i.jsx)("td",{className:[m.col,m.td,m["col-3"]].join(" "),title:a.name,children:a.name}),(0,i.jsx)("td",{className:[m.col,m.td,m["col-4"]].join(" "),title:e.comment,children:(0,i.jsx)("div",{className:m.comentWrap,children:e.comment})}),"INCOME"===e.type?(0,i.jsx)("td",{className:[m.col,m.td,m.income,m["col-5"]].join(" "),children:e.amount}):(0,i.jsx)("td",{className:[m.col,m.td,m.expense,m["col-5"]].join(" "),children:e.amount.toString().slice(1)}),(0,i.jsx)("td",{className:[m.col,m.td,m["col-6"]].join(" "),children:e.balanceAfter})]},e.id)}))})]})})},E=t(927),h={HomeTableBox:"TransactionsPage_HomeTableBox__1J2xP"},T=function(e){var a=(0,c.v9)(l.pX.f1),t=(0,c.I0)();return(0,n.useEffect)((function(){a.length>0||t(l.h4.getTransactionsThunk())}),[t,a.length]),(0,i.jsxs)("div",{className:h.TransactionsPage,children:[(0,i.jsx)(E.ij,{children:(0,i.jsx)(b,{data:a})}),(0,i.jsx)(E.P0,{children:(0,i.jsx)("div",{className:h.HomeTableBox,children:(0,i.jsx)(u,{data:a})})})]})}}}]);
//# sourceMappingURL=940.33cf9376.chunk.js.map