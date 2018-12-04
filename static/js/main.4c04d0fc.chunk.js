(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},23:function(e,t,a){e.exports=a(58)},28:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),l=a.n(r),i=(a(28),a(2)),o=a(3),c=a(6),h=a(4),u=a(5),d=a(1),m=(a(10),a(31),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"display"},s.a.createElement("p",{className:"text-dark",id:"generated"},this.props.children))}}]),t}(n.Component)),p=(a(33),a(22)),f=a.n(p),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.submitHandler=e.submitHandler.bind(Object(d.a)(Object(d.a)(e))),e.state={key:"",error:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"submitHandler",value:function(e){e.preventDefault(),this.state.key.length<4||0===this.state.key.length?(this.props.showModal(),this.handleError(!0),setTimeout(function(){this.handleError(!1)}.bind(this),2500)):4===this.state.key.length&&(this.props.changeHandler(this.state.key),this.props.hideModal(),this.setState({key:""}))}},{key:"handleChange",value:function(e){this.setState({key:e.target.value})}},{key:"handleError",value:function(e){this.setState({error:e}),e||this.props.hideModal()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h4",{className:"text-light text-uppercase"},"Enter a 4-Letter Key"),s.a.createElement("form",{className:"flex-form-center",onSubmit:this.submitHandler},s.a.createElement("div",{className:f()({"error ":this.state.error},"container")},s.a.createElement("img",{className:"icon-small",src:this.props.icon,alt:""}),s.a.createElement("input",{type:"text",id:"key",maxLength:this.props.length,placeholder:this.props.placeholder,className:"input text-uppercase "+this.props.width,value:this.state.key,onChange:this.handleChange})),s.a.createElement("div",{className:"wide"},s.a.createElement("button",{className:"button "+this.props.buttonType+" "+this.props.color,onClick:this.props.handleClick},"Generate"))))}}]),t}(n.Component),v=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"modalIsVisible",value:function(e){return this.visibility=e?"modal visible flex-center":"modal hidden",this.visibility}},{key:"render",value:function(){return s.a.createElement("div",{className:this.modalIsVisible(this.props.show)},s.a.createElement("div",{className:"close-button",onClick:this.props.handleClose},s.a.createElement("img",{src:"images/icons/cross.svg",alt:""})),s.a.createElement("p",{className:"text-light text-center"},this.props.message))}}]),t}(n.Component)),g=(a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.state={displayText:"Enter a key and press generate for a password."},a.handleData=a.handleData.bind(Object(d.a)(Object(d.a)(a))),a.checkFullScreen(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleData",value:function(e){var t=this.generatePassword();this.setState({displayText:""+e.toUpperCase()+t})}},{key:"generatePassword",value:function(){for(var e="",t=0;t<3;t++){e+="-";for(var a=0;a<4;a++)e+=this.getRandomChar()}return e}},{key:"getRandomChar",value:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),t="abcdefghijklmnopqrstuvwxyz".split(""),a="01234567890".split(""),n=Math.floor(3*Math.random()+1);return 1===n?e[Math.floor(Math.random()*e.length)]:2===n?t[Math.floor(Math.random()*t.length)]:a[Math.floor(Math.random()*a.length)]}},{key:"checkFullScreen",value:function(){var e=document.getElementsByClassName("App");window.innerWidth<1e3&&(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,{message:"Please enter a four-digit code to generate your password.",show:this.state.show,handleClose:this.hideModal}),s.a.createElement("div",{className:"hero flex-center"},s.a.createElement("div",{className:"flex-center"},s.a.createElement("h1",{className:"text-light text-uppercase flex-center"},"Token"),s.a.createElement("h4",{className:"text-light text-uppercase flex-center"},"A Simple, Secure Password Generator."),s.a.createElement("hr",null)),s.a.createElement("div",{className:"flex-center"},s.a.createElement(b,{icon:"images/icons/flag.svg",length:"4",width:"small",placeholder:"Key",changeHandler:this.handleData,value:this.state.key,showModal:this.showModal,hideModal:this.hideModal,buttonType:"primary",color:"darkviolet"}))),s.a.createElement("div",{className:"bottom flex-center"},s.a.createElement("h4",{className:"text-dark text-center text-uppercase",id:"password-header"},"Your Password"),s.a.createElement(m,null,this.state.displayText)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.4c04d0fc.chunk.js.map