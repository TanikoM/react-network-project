(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i});var a=n(126),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"080a399b-dd92-470f-9f42-ca0f41d1cab9"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileApi object."),u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},131:function(e,t,n){e.exports={userPhoto:"User_userPhoto__1kFtt"}},132:function(e,t,n){e.exports=n.p+"static/media/user.08e6ccaf.png"},159:function(e,t,n){e.exports=n(299)},16:function(e,t,n){e.exports={nav:"Navbar_nav__3qsL9",item:"Navbar_item__2wfyE",activeLink:"Navbar_activeLink__2WMx0"}},243:function(e,t,n){},245:function(e,t,n){},251:function(e,t,n){e.exports=n.p+"static/media/preloader.900ec5a6.svg"},299:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(6),r=n(92),o=n(93),u={},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},c=n(7),s=n.n(c),l=n(15),f=n(38),m=n(8),p=n(12),d=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(m.a)({},e,a):e})},g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},h=function(e){return{type:"FOLLOW",userId:e}},E=function(e){return{type:"UNFOLLOW",userId:e}},v=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},w=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},O=function(){var e=Object(l.a)(s.a.mark(function e(t,n,a,r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(w(!1,n));case 6:case"end":return e.stop()}},e,this)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)({},e,{users:d(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(m.a)({},e,{users:d(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(m.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(m.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(m.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(m.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(m.a)({},e,{followingInProgress:t.isFetching?Object(f.a)(e.followingInProgress).concat([t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},_=n(40),P={userId:null,email:null,login:null,isAuth:!1},j=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},y=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,r,o,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,u=a.login,t(j(r,o,u,!0)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(m.a)({},e,t.payload);default:return e}},k=n(127),I=n(65),N={initialized:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(m.a)({},e,{initialized:!0});default:return e}},U=Object(a.c)({profilePage:r.b,dialogsPage:o.a,sidebar:i,usersPage:S,auth:C,form:I.a,app:T}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,x=Object(a.e)(U,L(Object(a.a)(k.a)));window._store_=x;var A=x,F=n(0),R=n.n(F),z=n(69),G=n.n(z),D=(n(243),n(28)),M=n(29),W=n(31),B=n(30),H=n(32),q=(n(245),n(16)),Y=n.n(q),V=n(313),X=function(){return R.a.createElement("nav",{className:Y.a.nav},R.a.createElement("div",{className:Y.a.item},R.a.createElement(V.a,{to:"/profile",activeClassName:Y.a.activeLink},"Profile")),R.a.createElement("div",{className:"".concat(Y.a.item," ").concat(Y.a.active)},R.a.createElement(V.a,{to:"/dialogs",activeClassName:Y.a.activeLink},"Messages")),R.a.createElement("div",{className:"".concat(Y.a.item," ").concat(Y.a.active)},R.a.createElement(V.a,{to:"/users",activeClassName:Y.a.activeLink},"Users")),R.a.createElement("div",{className:Y.a.item},R.a.createElement("a",null,"News")),R.a.createElement("div",{className:Y.a.item},R.a.createElement("a",null,"Music")),R.a.createElement("div",{className:Y.a.item},R.a.createElement("a",null,"Settings")))},J=n(250),Q=n(314),Z=n(13),K=n(66),$=n(56),ee=n(125),te=n(75),ne=n.n(te),ae=n(130),re=n.n(ae),oe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,u=void 0===o?10:o,i=Math.ceil(t/n),c=[],s=1;s<=i;s++)c.push(s);var l=Math.ceil(i/u),f=Object(F.useState)(1),m=Object(ee.a)(f,2),p=m[0],d=m[1],g=(p-1)*u+1,h=p*u;return R.a.createElement("div",{className:ne.a.paginator},p>1&&R.a.createElement("button",{onClick:function(){d(p-1)}},"PREV"),c.filter(function(e){return e>=g&&e<=h}).map(function(e){return R.a.createElement("span",{className:re()(Object($.a)({},ne.a.selectedPage,a===e),ne.a.pageNumber),key:e,onClick:function(t){r(e)}},e)}),l>p&&R.a.createElement("button",{onClick:function(){d(p+1)}},"NEXT"))},ue=n(131),ie=n.n(ue),ce=n(132),se=n.n(ce),le=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return R.a.createElement("div",null,R.a.createElement("span",null,R.a.createElement("div",null,R.a.createElement(V.a,{to:"/profile/"+t.id},R.a.createElement("img",{src:null!=t.photos.small?t.photos.small:se.a,className:ie.a.userPhoto}))),R.a.createElement("div",null,t.followed?R.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):R.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))),R.a.createElement("span",null,R.a.createElement("span",null,R.a.createElement("div",null,t.name),R.a.createElement("div",null,t.status)),R.a.createElement("span",null,R.a.createElement("div",null,"user.location.country"),R.a.createElement("div",null,"user.location.city"))))},fe=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,r=e.onPageChanged,o=e.users,u=Object(K.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return R.a.createElement("div",null,R.a.createElement(oe,{currentPage:t,onPageChanged:r,totalItemsCount:n,pageSize:a}),R.a.createElement("div",null,o.map(function(e){return R.a.createElement(le,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})})))},me=n(70),pe=n(133),de=Object(pe.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),ge=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.getUsers(e,n.props.pageSize)},n}return Object(H.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return R.a.createElement(R.a.Fragment,null,this.props.isFetching?R.a.createElement(me.a,null):null,R.a.createElement(fe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),t}(R.a.Component),he=Object(Z.b)(function(e){return{users:de(e),pageSize:function(e){return e.usersPage.pageSize}(e),totalUsersCount:function(e){return e.usersPage.totalUsersCount}(e),currentPage:function(e){return e.usersPage.currentPage}(e),isFetching:function(e){return e.usersPage.isFetching}(e),followingInProgress:function(e){return e.usersPage.followingInProgress}(e)}},{follow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,p.c.follow.bind(p.c),h);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,p.c.unfollow.bind(p.c),E);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:v,toggleFollowingProgress:w,getUsers:function(e,t){return function(){var n=Object(l.a)(s.a.mark(function n(a){var r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(b(!0)),a(v(e)),n.next=4,p.c.getUsers(e,t);case 4:r=n.sent,a(b(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(ge),Ee=n(88),ve=n.n(Ee),be=function(e){return R.a.createElement("header",{className:ve.a.header},R.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),R.a.createElement("div",{className:ve.a.loginBlock},e.isAuth?R.a.createElement("div",null,e.login," ",R.a.createElement("button",{onClick:e.logout},"Log out")):R.a.createElement(V.a,{to:"/login"},"Login")))},we=function(e){function t(){return Object(D.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return R.a.createElement(be,this.props)}}]),t}(R.a.Component),Oe=Object(Z.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(we),Se=n(61),_e=n(64),Pe=n(71),je=n(84),ye=n(311),Ce=n(48),ke=n.n(Ce),Ie=Object(_e.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return R.a.createElement("form",{onSubmit:t},R.a.createElement("div",null,R.a.createElement(Se.a,{placeholder:"Email",validate:[je.b],name:"email",component:Pe.a})),R.a.createElement("div",null,R.a.createElement(Se.a,{placeholder:"Password",validate:[je.b],name:"password",type:"password",component:Pe.a})),R.a.createElement("div",null,R.a.createElement(Se.a,{component:Pe.a,name:"rememberMe",type:"checkbox"})," remember me"),n&&R.a.createElement("div",{className:ke.a.formSummaryError},n),R.a.createElement("div",null,R.a.createElement("button",null,"Submit")))}),Ne=Object(Z.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var a=Object(l.a)(s.a.mark(function a(r){var o,u;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(y()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(_.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?R.a.createElement(ye.a,{to:"/profile"}):R.a.createElement("div",null,R.a.createElement("h1",null,"Login"),R.a.createElement(Ie,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}),Te=R.a.lazy(function(){return n.e(1).then(n.bind(null,310))}),Ue=R.a.lazy(function(){return n.e(2).then(n.bind(null,309))}),Le=function(e){function t(){return Object(D.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?R.a.createElement("div",{className:"app-wrapper"},R.a.createElement(Oe,null),R.a.createElement(X,null),R.a.createElement("div",{className:"app-wrapper-content"},R.a.createElement(J.a,{path:"/dialogs",render:function(){return R.a.createElement(R.a.Suspense,{fallback:R.a.createElement("h1",null,"Loading...")},R.a.createElement(Te,null))}}),R.a.createElement(J.a,{path:"/profile/:userId?",render:function(){return R.a.createElement(R.a.Suspense,{fallback:R.a.createElement("h1",null,"Loading...")},R.a.createElement(Ue,null))}}),R.a.createElement(J.a,{path:"/users",render:function(){return R.a.createElement(he,null)}}),R.a.createElement(J.a,{path:"/login",render:function(){return R.a.createElement(Ne,null)}}))):R.a.createElement(me.a,null)}}]),t}(R.a.Component),xe=Object(a.d)(Q.a,Object(Z.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(y()).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Le),Ae=n(312);G.a.render(R.a.createElement(Ae.a,{basename:"/samurai-network"},R.a.createElement(Z.a,{store:A},R.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__12YM9",formSummaryError:"FormsControls_formSummaryError__2-lc_"}},70:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(251),u=n.n(o);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:u.a}))}},71:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var a=n(66),r=n(0),o=n.n(r),u=n(48),i=n.n(u),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,r))),u&&o.a.createElement("span",null,n.error))},s=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),u&&o.a.createElement("span",null,n.error))}},75:function(e,t,n){e.exports={paginator:"Paginator_paginator__2qQqh",pageNumber:"Paginator_pageNumber__tyUqv",selectedPage:"Paginator_selectedPage__1YQU7"}},84:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbol")}}},88:function(e,t,n){e.exports={header:"Header_header__25WrR",loginBlock:"Header_loginBlock__1qLnk"}},92:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return p}),n.d(t,"e",function(){return d});var a=n(7),r=n.n(a),o=n(15),u=n(38),i=n(8),c=n(12),s={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:Object(u.a)(e.posts).concat([n]),newPostText:""});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter(function(e){return e.id!=t.postId})});default:return e}}},93:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(38),r=n(8),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:Object(a.a)(e.messages).concat([{id:6,message:n}])});default:return e}}}},[[159,4,3]]]);
//# sourceMappingURL=main.8eb6aef2.chunk.js.map