(this["webpackJsonpcf-analyzer"]=this["webpackJsonpcf-analyzer"]||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),c=n.n(s),i=n(20),d=n.n(i),l=n(34),j=n(6),o=(n(87),n(200)),h=n(203),x=n.p+"static/media/logo.1deb9b97.png",b=n(1);var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(h.a,{bg:"light",variant:"light",children:Object(b.jsxs)(h.a.Brand,{href:"/",children:[Object(b.jsx)("img",{alt:"logo",src:x,width:"300px",height:"50px",style:{paddingTop:"10px"},className:"d-inline-block align-top"})," "]})})})})},u=n(204),g=n(206);var m=function(e){var t={textAlign:"center",padding:"30px"},n=e.onSearch,r=Object(a.useState)(""),s=Object(j.a)(r,2),c=s[0],i=s[1];return Object(b.jsx)("div",{children:Object(b.jsx)(o.a,{className:"search",children:Object(b.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),n(c)},children:[Object(b.jsx)("h4",{style:t,children:"Codeforces Username"}),Object(b.jsx)(u.a.Group,{children:Object(b.jsx)(u.a.Control,{className:"searchBox",type:"text",id:"handle",name:"handle",onChange:function(e){return i(e.target.value)},value:c,placeholder:"Enter the Codeforces Username",required:!0})}),Object(b.jsx)("div",{style:t,children:Object(b.jsx)(g.a,{className:"searchButton",variant:"dark",type:"submit",children:"Search"})})]})})})},p=n(201),f=n(8),v=n.n(f);var C=function(){var e="https://codeforces.com/api/contest.list?gym=false",t=Object(a.useState)([]),n=Object(j.a)(t,2),r=n[0],s=n[1];Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,s(a.result);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);for(var c=[],i=0;i<r.length&&"BEFORE"===r[i].phase;i++)c.push(r[i]);var h=0;return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)("h3",{children:"\u1d1c\u1d18\u1d04\u1d0f\u1d0d\u026a\u0274\u0262 \u1d04\u1d0f\u0274\u1d1b\u1d07\ua731\u1d1b"}),Object(b.jsx)("br",{}),Object(b.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Start Date"}),Object(b.jsx)("th",{children:"Length"})]})}),Object(b.jsx)("tbody",{children:c.reverse().map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:++h}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:v.a.unix(e.startTimeSeconds).format("DD MMM YYYY hh:mm a")}),Object(b.jsx)("td",{children:v.a.duration(e.durationSeconds,"seconds").format("hh:mm")})]},e.id)}))})]})]})})},A=n(205),R=n(202),k=n(76),y=n(51),N=n.n(y);var E=function(e){var t,n,a,r=e.user;"newbie"===r.rank?(n=t="newbie",a=t):"pupil"===r.rank?(n=t="pupil",a=t):"specialist"===r.rank?(n=t="specialist",a=t):"expert"===r.rank?(n=t="expert",a=t):"candidate master"===r.rank?(n=t="candidate_master",a=t):"master"===r.rank?(n=t="master",a=t):"international master"===r.rank?(n=t="international_master",a=t):"grandmaster"===r.rank?(n=t="grandmaster",a=t):"international grandmaster"===r.rank?(n=t="international_grandmaster",a=t):"legendary grandmaster"===r.rank&&(n=t="legendary_grandmaster",a=t),"newbie"===r.maxRank?a="newbie":"pupil"===r.maxRank?a="pupil":"specialist"===r.maxRank?a="specialist":"expert"===r.maxRank?a="expert":"candidate master"===r.maxRank?a="candidate_master":"master"===r.maxRank?a="master":"international master"===r.maxRank?a="international_master":"grandmaster"===r.maxRank?a="grandmaster":"international grandmaster"===r.maxRank?a="international_grandmaster":"legendary grandmaster"===r.maxRank&&(a="legendary_grandmaster");var s="https://codeforces.com/blog/"+r.handle,c="https://codeforces.com/comments/with/"+r.handle,i="https://codeforces.com/usertalk/with/"+r.handle,d="https://codeforces.com/usertalk?other="+r.handle;return Object(b.jsx)("div",{className:"userBlock",children:Object(b.jsx)(A.a,{children:Object(b.jsx)(A.a.Body,{children:Object(b.jsxs)(R.a,{children:[Object(b.jsxs)(k.a,{sm:8,children:[Object(b.jsx)("h4",{className:t,children:r.rank}),Object(b.jsx)("h3",{children:r.handle}),Object(b.jsxs)("h5",{children:[r.firstName?"Name: "+r.firstName:"",r.lastName&&r.firstName?" "+r.lastName:""]}),Object(b.jsxs)("h5",{children:[r.city?"Place: "+r.city:"",r.country?r.city?", "+r.country:"Place: "+r.country:""]}),Object(b.jsx)("h5",{children:r.organization?"Organization: "+r.organization:""}),Object(b.jsxs)("h5",{children:["Rating: ",Object(b.jsx)("span",{className:n,children:r.rating})," (max."," ",Object(b.jsxs)("span",{className:a,children:[r.maxRank,", ",r.maxRating]}),")"]}),Object(b.jsxs)("h5",{children:["Friends of: ",r.friendOfCount," users"]}),Object(b.jsxs)("h5",{children:["Last Visit:"," ",Object(b.jsx)(N.a,{fromNow:!0,children:v.a.unix(r.lastOnlineTimeSeconds).format("DD MMM YYYY hh:mm a")})]}),Object(b.jsxs)("h5",{children:["Registered:"," ",Object(b.jsx)(N.a,{fromNow:!0,children:v.a.unix(r.registrationTimeSeconds).format("DD MMM YYYY hh:mm a")})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAEv0lEQVR4XrWVa2xTZRjH/+esWy+7tB0tu15Yx64XO6YYdCGQmDCYCHhLjCwmGBOnBtAYJRI1BkOCaPwyoxIQkQUjCTpQQLkJQ4UFx+bArWNzY6Vnp+u6dm1Pr6fnnMducSbIAmrCkzx537zJ/5cn73NjiAh3w9j/K9Rp1El1NZVLNz6/4e3nmp984Z8C1b8FmeZlmgtys4uttdUrrbWV9146fXhxRUVpjspUiIN7dw8A+OSO4MV1NSvy87LKLUWFJVVlFmt1WcnCzu+/NGZnmXRphkwGxCASjiY8BBU/jIbF1pLcnCwr73T1zgnW6/XpTU1NW15sXvvS+jXLDEkqLURZRkwiEAApLsPn8UIWowCbBBaAzIrIm29IXlRdvgLA32BWm6xSqxkmCQCysrLu16am3nedG/eNjTnhmnDB6/EgHJhCNBxBijEH2nl5YBNQWYwArAqyEoccDeDBReUrb0reyOaHnbYPN7lWr1rVMuULeszmvBxdRmZ6QAhCSYhlMZw4YyApCsgSpq73Ii27BGnmQujMBTPRux3DWFJtuSc9VWfGrL1pzb54YucbNOqcpKOHdjp2t74y+NrLm/mOfdvJcf4ABbg+cvedJcF5jUTBTQI/SHzXURLG+kkWg+QdvEj8pcPEnd1DtRXFjxMRZks4P0Ovb127utEVbSsg6iigziNPRC4e2CKPnNqfAA/Q6LkviL+cgPE2sp9vo5FTeyhgvzIDdPacoLDHTt5f9tGrG9YdmgXP0tUAVtTn46tvNiBA+5OJLtSQr7OF7Gc+Jj/3B02N9JAwnoi2+xgNn9hFIfcIRaYcFPY6Zt7s375Phz7YPM6yjJaIwAIz8BiAM90cWt7prt/7+vFKR8+RESWl9zMUpOyCOtQG/2gPnF2noS+shdFihav7JMa7TyM6ycFYVAMRLCpyMszlxXnL8Rf0Jq+oqGxufnZjd8vTqx2XtjfQ0FY1CZ+mkNLZQELfuxTk+2ngSCsNHfuIguNDNNnXQbavd9CVtq3EtW+jpxqXtBLRrQ3i9XqupWspok7Sy359Ffy6WvD2n5Bvv4CcssvQWs9jQd0zCMcsUEgC13UcpEgAgFiU8EBVwfI5O0+SpCkhILglJm6IR/2Ua9IzodRHMCYtB9f/A3Jtp5BX3QmVdRsk1bKZkgTDAooCQY6jKj/DYjKklbK3Ruwd1WrUyVGJEQWRZCkh1LERpCWnIHnhY3Do1+DXbjOutv8MrqMdEZmBIsUgxSKICn5ka0lXV5q7bs6x2djYuKOysqqpUucprc9Va5gkFQCAAQMk7hKxkMMCxFgMv3F+1C3IhH6eCcmZBZifnYf1m956b84hFAqFRl3uCWdRDopAsoZiIpTZBINBXCGoUo1YUP8QSjUa6EyFSFJrEZrk4RjoggpK+pxgm812uXhh2aO9AwP8UktthqbICq0hC6wmHeqUFEx/T5xU+L2/T+Zu3AjZbP2+q9eG7RMe3+jYhN/mi+G7OcGiKAbGeW5ArzWIvUpZCfdjT3CMdwlBwRcSAgG/x+fzjLk8N3hPrF8ChgDYATiJyH/beRwMBgc7zp373GjMXNR+9ORBRZGnhW4A08LgtNMddtptdx7DMGoAEhHJ+I9215bpnyGvoDEnx09oAAAAAElFTkSuQmCC",width:"22px",height:"22px",style:{marginRight:"0.5em"},alt:"blog"}),Object(b.jsx)("a",{href:s,style:{textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer",children:"Blog entries"}),","," ",Object(b.jsx)("a",{href:c,style:{textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer",children:"Comments"}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEoElEQVRIia1VTWhUVxg99+e9mXmJmWTixEIUlai1XUQTS2lTUySmNcQ0OGNMk9RSKN1UuulOF10EFAtaCoWC3UZLKulCSGuTghtJQaGLitC/UCsoSTDGmHHy3tx3371fF5MZk1Brrf3gwOP9nHO+756PByLCf8XWrVu3dXR0dLquG3vUO09MmkwmqzOZTGZ4ePirO3dm54iIBgcHP34qgerq6ppDvb1vDg0NfXnr1u1pWqooMhRFhvL5xUJjY2PzEwkkk8mq7u7uN4aGhoamp6dnS6TGWCoU1AoQEV28+N0lxhh/rMCOHTuazp8/P7za6WrS5VAqJCKi/v7+dx8rMDY29gMRURhq8v2AfD+gICj8o0ChoMhaSzdu/DmVTCZrHynw7PbtjYuLi2phIUezd+fo/v0FepDPk+/7/0qMiOj06U8+X87JsayymUyP53luPBaD1hp+ECDwCwiCArTWIGthycJa+9DhsooigyNH3n+vubn5xdI9WbpwXTd+5erVQwAgHYmKCg/z8/dhhAEXAiKKwDmHFAJSSgghwBgDEYExBsYYjDFIJBLuqVOnPxVC7DHG6HIHu3bteqlp587tJXeVFRVwXRdKKegwRLiEglLwgwB+EECFIYwxsPZhV0qF2Lu3rWVgYOCdFR309vYOMMaglALnHJxzpFLVWFz0oZSCkBKMMXDGIISAEALRUldCiHJnjDNEkcHx4ydO1NXVfcuICGvWrEn+dO3a7/X19XWR1mCcF4mkRP5BHrenpiCEgJdIIBaLoaAUOGNlI6VxCc4hZFGsqqoKJ0+e/EwCQFtbW+eGDRvq8vk8OGNgjJdn6nkJPLNuHYTgcBwHnHG4joO7c3OQUoJzXjbEOYc0DsgtTmVmZiYnAaCvr28gigx0qMFF6SAdOI4DKSVqUylorRGGCkorxONxSCnhBwFirotYPIZ4PA7PSyDmunBdF7lcTo2MjJyT9fXrN01MTOzJ5XLgvOhSiuIsrbXQWhedSQEpvaVDJdSl18IPAlRWViLmuhBCrIjs+Pj4xNTU1G88k80c3rx5U6XrOGCMIYoiqFAhVCHCUEPrhzDGlMUqKyqQqqkpfmMihFojiiJYawEAZ8+ePQcAYv7evXB29m4sVVu7Pp1Oe47jwhgDY6LiMlmCpWIELRGsLW0pwDlDqPWKxXMcBzdv3pw/evToh8eOHcvLycnJKwCuxOPxdbt3t3ZnDx7sa21tfXnjxo0JsoQwVCAD2NJh8qX0MFOMK+dQKlxKVPHZhQsXLuZyuRkAYKvXHQBqamq27W1/LdvT09Pf0tLSmEqloHUIrSMwhnI8GWNwpIRSIYw15Si3t7d3T0xMjD5SoFSMMbFly5ZXXt/XcaCrq+tAc3PzZs/zECoFYw044+CCgzOOQqEAr8LD9evX/3i1tbXRGOOv2OS/KyIyAC4DuMwY+2hnU1N7Npt9q7Nz/76GhoYqzjlCpWBhAcYgpcQ3o6OjJfISyRPD87z1+7u6Pjhz5otLP//ya7iQy9NC7gFNz8xEDQ0NLzzVT3810un084cPvz04Nv795MjI1z8CEP+rwLJ41q1Np59bff8vbCpn+t2wYs4AAAAASUVORK5CYII=",width:"22px",height:"22px",style:{marginRight:"0.5em"},alt:"blog"}),Object(b.jsx)("a",{href:i,style:{textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer",children:"Talks"}),","," ",Object(b.jsx)("a",{href:d,style:{textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer",children:"Send message"}),Object(b.jsx)("br",{})]}),Object(b.jsx)(k.a,{sm:4,style:{padding:"20px"},children:Object(b.jsx)("div",{className:"dp",children:Object(b.jsx)("img",{src:r.titlePhoto,width:"100%",height:"100%",alt:"dp"})})})]})})})})},D=n(35);var w=function(e){for(var t=e.rating,n=[],a=[],r=0;r<t.length;r++)n.push(t[r].newRating),a.push(v.a.unix(t[r].ratingUpdateTimeSeconds).format("MMM YY"));return Object(b.jsx)("div",{style:{paddingTop:"50px"},children:Object(b.jsx)(A.a,{style:{width:"100%",height:"100%"},children:Object(b.jsx)(A.a.Body,{children:Object(b.jsx)(D.b,{data:{labels:a,datasets:[{label:"Rating Change",data:n,borderWidth:.5,borderColor:"rgb(255,0,0)",hoverBackgroundColor:"rgba(0, 0, 0, 1)",pointRadius:3,pointHoverBackgroundColor:"rgba(0, 0, 0, 1)"}]},height:400,width:400,options:{maintainAspectRatio:!1,scales:{x:{ticks:{display:!1},grid:{display:!1}}},plugins:{legend:{display:!1}},layout:{padding:10}}})})})})};var S=function(e){var t,n,a,r,s,c=e.rating;if(c.length>=1){t=c.length,n=c[0].rank,a=c[0].rank,r=c[0].newRating-c[0].oldRating,s=c[0].newRating-c[0].oldRating;for(var i=1;i<c.length;i++){c[i].rank<n&&(n=c[i].rank),c[i].rank>a&&(a=c[i].rank);var d=c[i].newRating-c[i].oldRating;d>r&&(r=d),d<s&&(s=d)}}return Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{className:"stats",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Total Contest"}),Object(b.jsx)("td",{className:"statsData",children:t})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Best Rank"}),Object(b.jsx)("td",{className:"statsData",children:n})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Worst Rank"}),Object(b.jsx)("td",{className:"statsData",children:a})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Best Rating Change"}),Object(b.jsx)("td",{className:"statsData",children:r})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:" Worst Rating Change"}),Object(b.jsx)("td",{className:"statsData",children:s})]})]})})})};var M=function(e){for(var t=e.data,n=0,a=0,r=0,s=0,c=0,i=0;i<t.length;i++)"TESTS"===t[i].testset&&("OK"===t[i].verdict?n++:"WRONG_ANSWER"===t[i].verdict?a++:"TIME_LIMIT_EXCEEDED"===t[i].verdict?r++:"COMPILATION_ERROR"===t[i].verdict?s++:"RUNTIME_ERROR"===t[i].verdict&&c++);var d=[n,a,r,s,c];return Object(b.jsx)("div",{style:{paddingTop:"50px"},children:Object(b.jsx)(A.a,{children:Object(b.jsx)(A.a.Body,{children:Object(b.jsx)(D.a,{data:{labels:["ACCEPTED","WRONG ANSWER","TIME LIMIT EXCEEDED","COMPILATION ERROR","RUNTIME ERROR"],datasets:[{label:"Submission Doughnut",data:d,backgroundColor:["#1C8C0E","#E56255","#F7750F","#d6ba22","#6F6D6D"],borderColor:["#115708","#8f3128","#a6581b","#96810c","#1f1c1c"],borderWidth:1}]},height:400,width:400,options:{maintainAspectRatio:!1,plugins:{legend:{position:"right"}}}})})})})},Y=n(79),I=n.n(Y);var B=function(e){var t=e.data,n=[],r=[],s=(new Date).getFullYear().toString();if(t.length>=1){for(var c=[],i=[],d=0;d<t.length;d++){var l=v.a.unix(t[d].creationTimeSeconds).format("YYYY-MM-DD"),o=v.a.unix(t[d].creationTimeSeconds).format("YYYY");c.push(l),o!==s&&i.push(o)}for(var h=c.reduce((function(e,t){return e[t]?++e[t]:e[t]=1,e}),{}),x=0,O=Object.entries(h);x<O.length;x++){var u=Object(j.a)(O[x],2),g={date:u[0],count:u[1]};n.push(g)}for(var m=i.reduce((function(e,t){return e[t]?++e[t]:e[t]=1,e}),{}),p=0,f=Object.entries(m);p<f.length;p++){var C=Object(j.a)(f[p],1)[0];r.push(C)}}var R=Object(a.useState)(""),k=Object(j.a)(R,2),y=k[0],N=k[1];!function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],r=t[1]}();for(var E=s,D=0;D<r.length;D++)y&&y===r[D]&&(E=y);return Object(b.jsx)("div",{style:{paddingTop:"50px"},children:Object(b.jsx)(A.a,{style:{padding:"20px"},children:Object(b.jsxs)(A.a.Body,{children:[Object(b.jsx)("div",{className:"year",children:Object(b.jsxs)("select",{onChange:function(e){return N(e.target.value)},value:y,children:[Object(b.jsx)("option",{value:s,selected:!0,children:s}),r.reverse().map((function(e){return Object(b.jsx)("option",{value:e,children:e})}))]})}),Object(b.jsx)(I.a,{startDate:E+"-01-01",endDate:E+"-12-31",values:n,classForValue:function(e){return e?"color-scale-".concat(e.count):"color-empty"},titleForValue:function(e){return e?"Date : "+e.date:""},showMonthLabels:!0,showWeekdayLabels:!0})]})})})},F=n(80);var T=function(){return Object(b.jsx)("div",{className:"footerLayout",children:Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)("p",{children:["Made with \u2764 by"," ",Object(b.jsxs)("a",{href:"https://www.linkedin.com/in/subham-singh-cc",target:"_blank",rel:"noreferrer",children:[" ","Subham Singh"]})]}),Object(b.jsx)(g.a,{variant:"dark",children:Object(b.jsxs)("a",{href:"https://github.com/subham-proj/cf-analyzer",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:["Contribute on \xa0",Object(b.jsx)(F.a,{})]})})]})})})};var L=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),c=Object(j.a)(s,2),i=c[0],h=c[1],x=Object(a.useState)([]),u=Object(j.a)(x,2),g=u[0],p=u[1],f=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,s,c,i,l,j,o,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://codeforces.com/api/user.info?handles="+t,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,c="https://codeforces.com/api/user.rating?handle="+t,e.next=10,fetch(c);case 10:return i=e.sent,e.next=13,i.json();case 13:return l=e.sent,j="https://codeforces.com/api/user.status?handle="+t,e.next=17,fetch(j);case 17:return o=e.sent,e.next=20,o.json();case 20:x=e.sent,"OK"===s.status?(r(s.result[0]),h(l.result),p(x.result)):alert("Not Found");case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{onSearch:f}),Object(b.jsx)(C,{}),Object(b.jsxs)(o.a,{fluid:!0,children:[Object(b.jsxs)(R.a,{children:[Object(b.jsx)(k.a,{lg:6,md:12,xs:12,sm:12,children:n.handle?Object(b.jsx)(E,{user:n}):""}),Object(b.jsx)(k.a,{lg:6,md:12,xs:12,sm:12,children:n.handle?Object(b.jsx)(w,{rating:i}):""})]}),Object(b.jsxs)(R.a,{style:{paddingTop:"40px"},children:[Object(b.jsx)(k.a,{lg:6,md:12,xs:12,sm:12,children:n.handle?Object(b.jsx)(S,{rating:i}):""}),Object(b.jsx)(k.a,{lg:6,md:12,xs:12,sm:12,children:n.handle?Object(b.jsx)(M,{data:g}):""})]})]}),Object(b.jsx)(o.a,{fluid:"md",children:n.handle?Object(b.jsx)(B,{data:g}):""}),Object(b.jsx)(T,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),U()},87:function(e,t,n){}},[[198,1,2]]]);
//# sourceMappingURL=main.5164ee26.chunk.js.map