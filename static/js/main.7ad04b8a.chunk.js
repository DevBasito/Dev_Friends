(this.webpackJsonpdev_friends=this.webpackJsonpdev_friends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(7),s=a.n(c),r=(a(12),a(2)),o=a(3),l=a(5),h=a(4),u=(a(13),a(0)),b=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("a",{href:"".concat(this.props.website),target:"_blank",children:Object(u.jsxs)("div",{className:"tc bg-light-green dib pa2 ma2  grow bw2 shadow-5  h-50",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(this.props.username,".png?set=set2?size=50x50"),alt:"robots"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:this.props.username}),Object(u.jsx)("h3",{children:this.props.name}),Object(u.jsx)("h4",{children:this.props.occupation}),Object(u.jsx)("h4",{children:this.props.email})]})]})})}}]),a}(n.a.Component),d=[{name:"Aderinwale Basit",username:"DevBasito",email:"aderinwale.bx@gmail.com",occupation:"Application Developer, Apex Developer",website:"https://github.com/DevBasito"},{name:"Michael Oluwadamilare",username:"McFizzy",email:"michaelfelix3858@gmail.com",occupation:"Back-end Developer, Magento Developer",website:"https://michaeloluwadamilare.github.io/Latest-portfolio/"},{name:"Oladipo Olamilekan",username:"Oladips",email:"dukelekky@gmail.com",occupation:"UI/UX Designer, Brand Manager",website:"https://www.linkedin.com/in/olamilekanoladipo/"},{name:"Osuolale Jubril",username:"Jagaban",email:"tobi.osuolale@gmail.com",occupation:"IT Specialist, Head of Dept (IT)",website:"https://github.com/DevBasito"},{name:"Abdul-Fatah Aishat",username:"AishaCodes",email:"abdulfatahaisha@gmail.com",occupation:"Software Developer, Mobile App Developer",website:"https://github.com/aishacodes"},{name:"AbdulGaffar AbdulMalik",username:"DevMaleeq",email:"devmaleeq@gmail.com",occupation:"Software Developer, Mobile App Developer",website:"https://github.com/emperor-orbitz"}],p=d.map((function(e,t){return Object(u.jsx)(b,{username:d[t].username,name:d[t].name,email:d[t].email,occupation:d[t].occupation,website:d[t].website},t)})),m=function(){return Object(u.jsx)("div",{children:p})},j=function(e){return Object(u.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px",paddingTop:"5px"},children:e.children})},g=function(e){var t=e.searchchange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",name:"",id:"",placeholder:"Search Developers",onChange:t,className:"pa3 ba b--green bg-lightest-blue ma3"})})},v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.call(this)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{children:["Powered by ",Object(u.jsxs)("i",{children:[" ",Object(u.jsx)("a",{href:"https://github.com/DevBasito",target:"_blank",style:{color:"#0ccac4"},children:" DevBasito "})," "]})," "]})})}}]),a}(n.a.Component),O=(a(15),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={devs:d,searchfield:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;this.state.devs.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"DevFriends"}),Object(u.jsx)(g,{searchchange:this.onSearchChange}),Object(u.jsx)(j,{children:Object(u.jsx)(m,{})}),Object(u.jsx)(v,{})]})}}]),a}(i.Component)),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(u.jsx)("div",{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.7ad04b8a.chunk.js.map