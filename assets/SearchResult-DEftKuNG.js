import{u as z,f as se,g as te,h as M,i as le,P as ae,t as re,j as ue,k as P,l as Q,m as ie,n as Y,p as t,q as oe,R as T,s as ne,v as ce,x as ve,C as he,y as pe,z as de,A as ye,B as me,D as ge,E as fe,F as He,G as $,H as _,I as Re,J as q,K as ke}from"./app-CmWsNQH4.js";const we=["/AI.html","/HPC.html","/LLM.html","/","/about.html","/algorithm.html","/foreword.html","/guide.html","/linux.html","/network.html","/start.html","/zhaoxin.html","/blog/zhujiechong.html","/404.html"],xe="SEARCH_PRO_QUERY_HISTORY",g=z(xe,[]),Qe=()=>{const{queryHistoryCount:l}=q,a=l>0;return{enabled:a,queryHistory:g,addQueryHistory:r=>{a&&(g.value=Array.from(new Set([r,...g.value.slice(0,l-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=l=>we[l.id]+("anchor"in l?`#${l.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,f=z(qe,[]),Ce=()=>{const l=U>0;return{enabled:l,resultHistory:f,addResultHistory:a=>{if(l){const r={link:F(a),display:a.display};"header"in a&&(r.header=a.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:a=>{f.value=[...f.value.slice(0,a),...f.value.slice(a+1)]}}},Se=l=>{const a=he(),r=M(),C=pe(),i=P(0),k=Q(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:S}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:L=p=>p,splitWord:b,suggestionsFilter:j,...m}=a.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(p=>L(p,R,r.value,C.value)).then(p=>{i.value-=1,d.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(d.value=[])})):d.value=[]},q.searchDelay-q.suggestDelay);Y([l,r],([c])=>H(c),{immediate:!0}),ge(()=>{S()})}),{isSearching:k,results:d}};var be=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:a}){const r=te(),C=M(),i=le(ae),{enabled:k,addQueryHistory:d,queryHistory:y,removeQueryHistory:S}=Qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:L}=Ce(),b=k||H,j=re(l,"queries"),{results:m,isSearching:p}=Se(j),u=ue({isQuery:!0,index:0}),v=P(0),h=P(0),I=Q(()=>b&&(y.value.length>0||c.value.length>0)),D=Q(()=>m.value.length>0),A=Q(()=>m.value[v.value]||null),B=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,h.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,h.value=0},V=()=>{h.value<A.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},E=e=>e.map(s=>ke(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,x=""]=He(s)?s[C.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",E([o,...n,x])))}return e.display.map(s=>t("div",E(s)))},w=()=>{v.value=0,h.value=0,a("updateQuery",""),a("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>E(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),L(s)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=A.value.contents[h.value];d(l.queries.join(" ")),R(s),r.push(F(s)),w()}}else if(H){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!D.value:!I.value}],id:"search-pro-results"},l.queries.length?p.value?t(oe,{hint:i.value.searching}):D.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const x=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:x}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=x&&h.value===ee;return t(T,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{d(l.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:b?I.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{be as default};
