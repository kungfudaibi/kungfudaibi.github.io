import{u as z,f as te,g as se,h as M,i as le,P as ae,t as re,j as ue,k as E,l as Q,m as ie,n as Y,p as s,q as ne,R as T,s as oe,v as ce,x as ve,C as he,y as pe,z as de,A as ye,B as me,D as ge,E as fe,F as He,G as $,H as _,I as Re,J as q,K as ke}from"./app--TT6XkIP.js";const we=["/AI.html","/HPC.html","/LLM.html","/","/about.html","/algorithm.html","/foreword.html","/guide.html","/linux.html","/network.html","/start.html","/zhaoxin.html","/blog/thefirsts.html","/blog/zhujiechong.html","/en/AI.html","/en/HPC.html","/en/","/en/about.html","/en/algorithms.html","/en/getting-started.html","/en/introduction.html","/en/linux.html","/en/network-security.html","/en/recruitment.html","/en/self-taught-guide.html","/404.html"],xe="SEARCH_PRO_QUERY_HISTORY",g=z(xe,[]),Qe=()=>{const{queryHistoryCount:l}=q,a=l>0;return{enabled:a,queryHistory:g,addQueryHistory:r=>{a&&(g.value=Array.from(new Set([r,...g.value.slice(0,l-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=l=>we[l.id]+("anchor"in l?`#${l.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,f=z(qe,[]),Ce=()=>{const l=U>0;return{enabled:l,resultHistory:f,addResultHistory:a=>{if(l){const r={link:F(a),display:a.display};"header"in a&&(r.header=a.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:a=>{f.value=[...f.value.slice(0,a),...f.value.slice(a+1)]}}},Se=l=>{const a=he(),r=M(),C=pe(),i=E(0),k=Q(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:S}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:b=p=>p,splitWord:L,suggestionsFilter:I,...m}=a.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(p=>b(p,R,r.value,C.value)).then(p=>{i.value-=1,d.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(d.value=[])})):d.value=[]},q.searchDelay-q.suggestDelay);Y([l,r],([c])=>H(c),{immediate:!0}),ge(()=>{S()})}),{isSearching:k,results:d}};var Le=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:a}){const r=se(),C=M(),i=le(ae),{enabled:k,addQueryHistory:d,queryHistory:y,removeQueryHistory:S}=Qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:b}=Ce(),L=k||H,I=re(l,"queries"),{results:m,isSearching:p}=Se(I),u=ue({isQuery:!0,index:0}),v=E(0),h=E(0),j=Q(()=>L&&(y.value.length>0||c.value.length>0)),A=Q(()=>m.value.length>0),D=Q(()=>m.value[v.value]||null),B=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,h.value=D.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,h.value=0},V=()=>{h.value<D.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},P=e=>e.map(t=>ke(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[n,x=""]=He(t)?t[C.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",P([n,...o,x])))}return e.display.map(t=>s("div",P(t)))},w=()=>{v.value=0,h.value=0,a("updateQuery",""),a("close")},X=()=>k?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{a("updateQuery",e)}},[s($,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),S(t)}})]))])):null,Z=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{w()}},()=>[s($,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>P(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(t)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(A.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=D.value.contents[h.value];d(l.queries.join(" ")),R(t),r.push(F(t)),w()}}else if(H){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(a("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),w())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!A.value:!j.value}],id:"search-pro-results"},l.queries.length?p.value?s(ne,{hint:i.value.searching}):A.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const x=v.value===n;return s("li",{class:["search-pro-result-list-item",{active:x}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((o,ee)=>{const O=x&&h.value===ee;return s(T,{to:F(o),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{d(l.queries.join(" ")),R(o),w()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",W(o))])])})])})):i.value.emptyResult:L?j.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Le as default};
