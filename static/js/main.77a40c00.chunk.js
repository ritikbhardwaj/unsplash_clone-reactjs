(this["webpackJsonpapi-fetch"]=this["webpackJsonpapi-fetch"]||[]).push([[0],{20:function(e,t,a){e.exports=a(49)},25:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a.n(s),c=(a(25),a(2)),u=a.n(c),l=a(8),o=a(3),m=a(4),h=a(6),p=a(5),d=a(7),f=(a(27),a(19)),b=a.n(f),g=(a(45),a(46),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){e.setState({value:t.target.value})},e.getButtonClasses=function(){var t="btn  ml-4  btn-";return t+=e.state.value?"secondary bg-dark":"light"},e.state={value:"dog"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header jumbotron"},r.a.createElement("div",{className:"formGroup"},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return e.props.onSubmit(e.state.value)},className:this.getButtonClasses(),disabled:!this.state.value},"Search")))}}]),t}(r.a.Component)),v=(a(47),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return 0===this.props.images.length&&!1===this.props.timeOut?r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"}),r.a.createElement("p",null,"Loading")):!0===this.props.timeOut&&0===this.props.images.length?r.a.createElement("div",{className:"loader-container not-found"},r.a.createElement("h2",null,"Sorry, no results found!"),r.a.createElement("p",null,"Your internet may be slow.")):r.a.createElement("div",{className:"results"},this.props.images.map((function(e){return r.a.createElement("div",{key:e.id,className:"image"},r.a.createElement("img",{alt:e.alt_description,src:e.urls.regular}),r.a.createElement("div",{className:"overlay"}),r.a.createElement("button",{className:"btn  btn-sm bg-light bg-light overlay-btn"},"\u2913"),r.a.createElement("div",{className:"likes badge  badge-light"},e.likes," Likes"),r.a.createElement("div",{className:"profile"},r.a.createElement("img",{alt:"",src:e.user.profile_image.small,style:{width:30,height:"auto",borderRadius:"50%"}}),r.a.createElement("h6",null,e.user.name)))})))}}]),t}(r.a.Component)),E=(a(48),function(){return r.a.createElement("div",{className:"footer jumbotron"},r.a.createElement("h6",null,r.a.createElement("span",{style:{fontFamily:"arial black"}},"BY")," Ritik Bhardwaj"),r.a.createElement("a",{href:"https://www.github.com/ritikbhardwaj"},"My Github"))}),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).getImages=function(){var t=Object(l.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({arr:[]}),t.next=3,b.a.get("https://api.unsplash.com/search/photos",{params:{query:a,per_page:21,page:n},headers:{Authorization:"Client-ID y-KsfJBqb_iZfZO12bN7fqEWsrAdGbQoJAUwN-soUns"}});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.componentDidMount=Object(l.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getImages("dog",200*Math.random());case 2:a=t.sent,e.setState({arr:a.data.results});case 4:case"end":return t.stop()}}),t)}))),e.handleSubmit=function(){var t=Object(l.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({timeOut:!1}),t.next=3,e.getImages(a,200*Math.random());case 3:r=t.sent,new Promise((function(e,t){setTimeout((function(){e()}),5e3)})).then((function(){e.setState({timeOut:!0})})),e.setState({arr:r.data.results});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={arr:[],timeOut:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container-fluid"},r.a.createElement(g,{onSubmit:this.handleSubmit}),r.a.createElement(v,{images:this.state.arr,onLoad:this.setLoadingFalse,timeOut:this.state.timeOut}),r.a.createElement(E,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.77a40c00.chunk.js.map