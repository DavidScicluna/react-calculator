(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{1:function(e,a,t){e.exports={History:"History_History__2KPWO",List:"History_List__2RQcr",ListItem:"History_ListItem__xjSYU",Button:"History_Button__33v2a",Hidden:"History_Hidden__3xdTb",Total:"History_Total__GYh3W",Calculation:"History_Calculation__3Y6i5",TextSmallest:"History_TextSmallest__20R4v",TextSmaller:"History_TextSmaller__2TUip",TextSmall:"History_TextSmall__3h7mW",TextNormal:"History_TextNormal__2XVMg"}},10:function(e,a,t){e.exports={Header:"Header_Header__3W_Sd",Button:"Header_Button__2XABB",HistoryHeader:"Header_HistoryHeader__3_f6w",Text:"Header_Text__2aVAg",Hidden:"Header_Hidden__15jhU"}},11:function(e,a,t){e.exports={Button:"Key_Button__1HrvG",Wide:"Key_Wide__2SVkf",Red:"Key_Red__7Nts3",Green:"Key_Green__2OfF-",LightGrey:"Key_LightGrey__KhdXa",DarkGrey:"Key_DarkGrey__2uGqZ",Black:"Key_Black__PtpvA",White:"Key_White__2Bpx6",Transparant:"Key_Transparant__3QECz"}},29:function(e,a,t){e.exports=t(41)},39:function(e,a,t){},4:function(e,a,t){e.exports={Display:"Display_Display__1qbU3",Black:"Display_Black__3kBpU",White:"Display_White__1PfBp",Result:"Display_Result__2f_nq",Total:"Display_Total__2iDCl",TextSmall:"Display_TextSmall__1_9jM",TextSmaller:"Display_TextSmaller__1iZHs",TextSmallest:"Display_TextSmallest__3yTQF"}},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=t(15),i=t(22),s=t(23),d=t(27),u=t(24),m=t(28),k=t(14),h=t(9),_=t(1),p=t.n(_);function y(e){var a=e.history;return r.a.createElement("div",{className:p.a.History},r.a.createElement("button",{"aria-label":"Clear History",onClick:e.onClickClearHistory,className:a.length>=1?"".concat(p.a.Button," animated bounceIn"):"".concat(p.a.Button," animated bounceOut ").concat(p.a.Hidden)},"Clear History"),r.a.createElement("ul",{className:a.length>=1?"".concat(p.a.List," animated slideInDown"):p.a.List},a.reverse().map((function(e){var a=String("".concat(e.firstNumber," ").concat(e.operator," ").concat(e.secondNumber," ="));return r.a.createElement("li",{className:p.a.ListItem,key:e.id},r.a.createElement("h6",{className:a.length>=23?"".concat(p.a.Calculation," ").concat(p.a.TextSmallest):a.length>=11?"".concat(p.a.Calculation," ").concat(p.a.TextSmaller):"".concat(p.a.Calculation," ").concat(p.a.TextSmall)},a),r.a.createElement("h1",{className:String(e.total).length>=17?"".concat(p.a.Total," ").concat(p.a.TextSmaller):String(e.total).length>=8?"".concat(p.a.Total," ").concat(p.a.TextSmall):"".concat(p.a.Total," ").concat(p.a.TextNormal)},e.total))}))))}var C=t(10),g=t.n(C);function b(e){var a=e.currentPressed,t=e.currentPage,n=e.darkMode;return r.a.createElement("div",{className:g.a.Header},r.a.createElement(k.b,{"aria-label":"/"===t?"Go to History":"Go to Calculator",to:"/"===t?"/history":"/",className:g.a.Button,onClick:e.onClickHandleClear},r.a.createElement("i",{className:"/"===t?"fas fa-history":"fas fa-times-circle"})),r.a.createElement("h6",{className:"/history"===t?g.a.HistoryHeader:g.a.Hidden},"History"),r.a.createElement("h6",{className:"/"===t?g.a.Text:g.a.Hidden},"Characters Count: ",String(a).length>12?"Over":String(a).length),r.a.createElement("button",{"aria-label":!0===n?"Toggle Light Mode":"Toggle Dark Mode",onClick:e.onClickDarkLightMode,className:g.a.Button},r.a.createElement("i",{className:!0===n?"fas fa-sun":"fas fa-moon"})))}var f=t(4),E=t.n(f);function H(e){var a=e.calculation,t=e.total,n=e.currentPressed,l=e.darkMode;return r.a.createElement("div",{className:!0===l?"".concat(E.a.Display," ").concat(E.a.White):"".concat(E.a.Display," ").concat(E.a.Black)},r.a.createElement("h6",{className:String(a).length>=20?"".concat(E.a.Result," ").concat(E.a.TextSmallest):E.a.Result},a),r.a.createElement("h1",{className:String(t).length>=14||n.length>=14?"".concat(E.a.Total," ").concat(E.a.TextSmaller):String(t).length>=9||n.length>=9?"".concat(E.a.Total," ").concat(E.a.TextSmall):E.a.Total},null===t?n:t))}var T=t(11),S=t.n(T);function v(e){var a=e.title,t=e.color,n=e.background,l=e.wide;return r.a.createElement("button",{"aria-label":a,onClick:function(){return e.onClick(a)},className:"Wide"===l?"".concat(S.a.Button," ").concat(S.a[t]," ").concat(S.a[n]," ").concat(S.a[l]):"".concat(S.a.Button," ").concat(S.a[t]," ").concat(S.a[n])},a)}var N=t(7),B=t.n(N);function x(e){var a=e.darkMode;return r.a.createElement("div",{className:!0===a?"".concat(B.a.Keypad," ").concat(B.a.DarkMode):B.a.Keypad},r.a.createElement("div",{className:B.a.Row},r.a.createElement(v,{title:"Clear",onClick:e.onClickHandleClear,color:"Red",background:!0===a?"DarkGrey":"LightGrey",wide:"Wide"}),r.a.createElement(v,{title:"%",onClick:e.onClick,color:"Green",background:!0===a?"DarkGrey":"LightGrey"}),r.a.createElement(v,{title:"/",onClick:e.onClick,color:"Green",background:!0===a?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(v,{title:"7",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"8",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"9",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"*",onClick:e.onClick,color:"Green",background:!0===a?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(v,{title:"4",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"5",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"6",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"-",onClick:e.onClick,color:"Green",background:!0===a?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(v,{title:"1",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"2",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"3",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"+",onClick:e.onClick,color:"Green",background:!0===a?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(v,{title:r.a.createElement("i",{className:"fas fa-backspace"}),onClick:e.onClickHandleBackspace,color:"Red",background:"Transparant"}),r.a.createElement(v,{title:"0",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:".",onClick:e.onClick,color:!0===a?"White":"Black",background:"Transparant"}),r.a.createElement(v,{title:"=",onClick:e.onClickHandleCalculation,color:"White",background:"Green"})))}var D=t(8),M=t.n(D),P=(t(39),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).handleKeypress=function(e){["0",".","1","2","3","4","5","6","7","8","9","/","*","-","+","%"].includes(e.key)?t.handleClick(e.key):"Escape"===e.key?t.handleClear():"Enter"===e.key?t.handleCalculation():"Backspace"===e.key||"Delete"===e.key?t.handleBackspace():t.handleReturn()},t.handleClick=function(e){var a=t.state.currentPressed,n=Object(o.a)(t.state.currentPressedList);if(n.push(e),!0===t.state.complete)return"/"===e||"*"===e||"-"===e||"+"===e||"%"===e?void 0:void t.setState({currentPressed:a+=e,currentPressedList:n,calculation:"".concat(t.state.firstNumber," ").concat(t.state.operator," ").concat(t.state.secondNumber," = ").concat(t.state.total),total:null,complete:!1});if("/"===e||"*"===e||"-"===e||"+"===e||"%"===e)t.setState({currentPressed:"",currentPressedList:[],firstNumber:parseFloat(a),operator:e,calculation:null});else{if(a.length>11)return void t.setState({currentPressed:"Exceeded limit!",calculation:"Limit 12 Numbers (Delete to continue or Clear)"});t.setState((function(a){return{currentPressed:a.currentPressed+=e,currentPressedList:n,secondNumber:parseFloat(a.currentPressed)}}))}},t.handleClear=function(){t.setState({currentPressed:"",currentPressedList:[],firstNumber:null,operator:null,secondNumber:null,total:null,calculation:null,complete:!1})},t.handleClearHistory=function(){t.setState((function(e){return{history:[]}})),localStorage.removeItem("History")},t.handleCalculation=function(){var e=t.state.firstNumber,a=t.state.operator,n=t.state.secondNumber,r=null,l=Object(o.a)(t.state.history);if(null!==e&&null!==a&&null!==n){switch(a){case"%":r=e%n;break;case"/":r=e/n;break;case"*":r=e*n;break;case"-":r=e-n;break;case"+":r=e+n}var c={id:Math.random().toString(36).substr(2,9),firstNumber:e,operator:a,secondNumber:n,total:parseFloat(r)>=1e9?r=parseFloat(r).toExponential(3):r};l.push(c),localStorage.setItem("History",JSON.stringify(l)),t.setState({currentPressed:"",currentPressedList:[],calculation:"".concat(e," ").concat(a," ").concat(n),total:parseFloat(r)>=1e9?r=parseFloat(r).toExponential(3):r,complete:!0,history:l})}},t.handleBackspace=function(){if(!0!==t.state.complete){var e=Object(o.a)(t.state.currentPressedList);e.pop();var a=e.join("");t.setState((function(t){return{currentPressed:String(a),currentPressedList:e,secondNumber:parseFloat(a),calculation:String(t.calculation).length>26?null:t.calculation}}))}},t.handleDarkMode=function(){localStorage.setItem("DarkMode",!t.state.darkMode),t.setState((function(e){return{darkMode:!e.darkMode}}))},t.state={currentPressed:"",currentPressedList:[],firstNumber:null,operator:null,secondNumber:null,total:null,calculation:null,complete:!1,history:[],darkMode:!1},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("History")||"[]"),a=JSON.parse(localStorage.getItem("DarkMode")||!1);this.setState((function(t){return{history:e,darkMode:a}})),document.addEventListener("keydown",this.handleKeypress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeypress,!1)}},{key:"handleReturn",value:function(){}},{key:"render",value:function(){var e=!0===this.state.darkMode?"".concat(M.a.container," ").concat(M.a.Black," animated fade"):"".concat(M.a.container," ").concat(M.a.White," animated fade");return r.a.createElement(k.a,null,r.a.createElement("div",{className:"".concat(M.a.Horizontal," animated fade")},r.a.createElement("div",{className:"".concat(M.a.Message," animated flash")},r.a.createElement("h1",{className:M.a.Header},"Please rotate your device"),r.a.createElement("h4",{className:M.a.Subheader},"We don't support landscape mode yet on mobile. Please go back to portrait mode for the best experience. Thank you."))),r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement("div",{className:e},r.a.createElement(b,{currentPressed:this.state.currentPressed,currentPage:"/",onClickDarkLightMode:this.handleDarkMode,darkMode:this.state.darkMode}),r.a.createElement(H,{total:this.state.total,currentPressed:this.state.currentPressed,calculation:this.state.calculation,darkMode:this.state.darkMode}),r.a.createElement(x,{onClick:this.handleClick,onClickHandleClear:this.handleClear,onClickHandleBackspace:this.handleBackspace,onClickHandleCalculation:this.handleCalculation,onKeypress:this.handleKeypress,darkMode:this.state.darkMode}))),r.a.createElement(h.a,{path:"/history"},r.a.createElement("div",{className:e},r.a.createElement(b,{currentPage:"/history",onClickDarkLightMode:this.handleDarkMode,onClickHandleClear:this.handleClear,darkMode:this.state.darkMode}),r.a.createElement(y,{history:this.state.history,onClickClearHistory:this.handleClearHistory}))))}}]),a}(r.a.Component));t(40);c.a.render(r.a.createElement(P,null),document.getElementById("root"))},7:function(e,a,t){e.exports={Keypad:"Keypad_Keypad__2TTIA",Row:"Keypad_Row__3wDvA",DarkMode:"Keypad_DarkMode__2Fhv6"}},8:function(e,a,t){e.exports={container:"App_container__pBz2c",White:"App_White__2XN-a",Black:"App_Black__Onya_",Horizontal:"App_Horizontal__16uqe",Message:"App_Message__2TsWB",Header:"App_Header__1bla5",Subheader:"App_Subheader__1vLmH"}}},[[29,1,2]]]);
//# sourceMappingURL=main.e736c452.chunk.js.map