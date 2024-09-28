(function(){"use strict";var e={9956:function(e,n,t){var r=t(5130),o=t(6768),a=t(4232);const u={id:"app"},i={key:0,class:"login-container"},s={class:"login-box"},c={key:1,class:"user-info"},l={class:"form-group"},p={class:"form-group"};function f(e,n,t,f,d,v){return(0,o.uX)(),(0,o.CE)("div",u,[d.user?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("div",s,[n[4]||(n[4]=(0,o.Lk)("h1",null,"Welcome to TSMC-pet",-1)),n[5]||(n[5]=(0,o.Lk)("p",null,"Your journey to success and rewards starts here",-1)),(0,o.Lk)("button",{class:"login-btn",onClick:n[0]||(n[0]=(...e)=>v.login&&v.login(...e))}," Login with Google ")])])),d.user?((0,o.uX)(),(0,o.CE)("div",c,[(0,o.Lk)("h2",null,"Welcome, "+(0,a.v_)(d.user.displayName)+"!",1),(0,o.Lk)("p",null,"Your ID: "+(0,a.v_)(d.user.uid),1),(0,o.Lk)("div",l,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>d.name=e),placeholder:"Enter your pet's name",class:"input-field"},null,512),[[r.Jo,d.name]])]),(0,o.Lk)("div",p,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>d.balance=e),placeholder:"Enter your pet's energy level",type:"number",class:"input-field"},null,512),[[r.Jo,d.balance,void 0,{number:!0}]])]),(0,o.Lk)("button",{class:"save-btn",onClick:n[3]||(n[3]=(...e)=>v.saveData&&v.saveData(...e))},"Save Pet Info")])):(0,o.Q3)("",!0)])}var d=t(6400),v=t(7617),h=t(4161),b=t(6971);const m={apiKey:"AIzaSyBv5UlN_6wbxZBLZcP13UcwM6unIixKn6I",authDomain:"vue-http-demo-8773a.firebaseapp.com",databaseURL:"https://vue-http-demo-8773a-default-rtdb.firebaseio.com",projectId:"vue-http-demo-8773a",storageBucket:"vue-http-demo-8773a.appspot.com",messagingSenderId:"189657556660",appId:"1:189657556660:web:4650bcc6ad7106bdcc59e1"},g=(0,d.Wp)(m),y=((0,v.aU)(g),(0,h.C3)(g)),k=(0,b.xI)(g),w=new b.HF;function L(){return(0,b.df)(k,w)}var O={name:"App",data(){return{user:null,name:"",balance:0}},methods:{async login(){try{const e=await L();this.user=e.user}catch(e){console.error("Error during Google login:",e)}},saveData(){if(this.user){const e=this.user.uid,n=(0,h.KR)(y,"users/"+e);(0,h.hZ)(n,{petName:this.name,petEnergy:this.balance}).then((()=>{console.log("Pet data saved successfully")})).catch((e=>{console.error("Error saving pet data:",e)}))}}}},E=t(1241);const x=(0,E.A)(O,[["render",f]]);var C=x;(0,r.Ef)(C).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(i=!1,a<u&&(u=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],s=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(s)var l=s(t)}for(n&&n(r);c<u.length;c++)a=u[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkpet"]=self["webpackChunkpet"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(9956)}));r=t.O(r)})();
//# sourceMappingURL=app.ddb24c68.js.map