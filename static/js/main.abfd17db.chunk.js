(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{1:function(e,t,a){e.exports={History:"History_History__2KPWO",List:"History_List__2RQcr",ListItem:"History_ListItem__xjSYU",Button:"History_Button__33v2a",Hidden:"History_Hidden__3xdTb",Total:"History_Total__GYh3W",Calculation:"History_Calculation__3Y6i5",TextSmallest:"History_TextSmallest__20R4v",TextSmaller:"History_TextSmaller__2TUip",TextSmall:"History_TextSmall__3h7mW",TextNormal:"History_TextNormal__2XVMg"}},10:function(e,t,a){e.exports={Button:"Key_Button__1HrvG",Wide:"Key_Wide__2SVkf",Red:"Key_Red__7Nts3",Green:"Key_Green__2OfF-",LightGrey:"Key_LightGrey__KhdXa",DarkGrey:"Key_DarkGrey__2uGqZ",Black:"Key_Black__PtpvA",White:"Key_White__2Bpx6",Transparant:"Key_Transparant__3QECz"}},13:function(e,t,a){e.exports={container:"App_container__pBz2c",White:"App_White__2XN-a",Black:"App_Black__Onya_"}},29:function(e,t,a){e.exports=a(41)},39:function(e,t,a){},4:function(e,t,a){e.exports={Display:"Display_Display__1qbU3",Black:"Display_Black__3kBpU",White:"Display_White__1PfBp",result:"Display_result__11H9g",total:"Display_total__lmTwt",TextSmall:"Display_TextSmall__1_9jM",TextSmaller:"Display_TextSmaller__1iZHs",TextSmallest:"Display_TextSmallest__3yTQF"}},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(15),i=a(22),s=a(23),d=a(27),u=a(24),k=a(28),m=a(14),h=a(8),_=a(1),y=a.n(_);function p(e){var t=e.history;return r.a.createElement("div",{className:y.a.History},r.a.createElement("button",{"aria-label":"Clear History",onClick:e.onClickClearHistory,className:t.length>=1?"".concat(y.a.Button," animated bounceIn"):"".concat(y.a.Button," animated bounceOut ").concat(y.a.Hidden)},"Clear History"),r.a.createElement("ul",{className:t.length>=1?"".concat(y.a.List," animated slideInDown"):y.a.List},t.map((function(e){var t=String("".concat(e.firstNumber," ").concat(e.operator," ").concat(e.secondNumber," ="));return r.a.createElement("li",{className:y.a.ListItem,key:e.id},r.a.createElement("h6",{className:t.length>=23?"".concat(y.a.Calculation," ").concat(y.a.TextSmallest):t.length>=11?"".concat(y.a.Calculation," ").concat(y.a.TextSmaller):"".concat(y.a.Calculation," ").concat(y.a.TextSmall)},t),r.a.createElement("h1",{className:String(e.total).length>=17?"".concat(y.a.Total," ").concat(y.a.TextSmaller):String(e.total).length>=8?"".concat(y.a.Total," ").concat(y.a.TextSmall):"".concat(y.a.Total," ").concat(y.a.TextNormal)},e.total))}))))}var C=a(9),g=a.n(C);function b(e){var t=e.currentPressed,a=e.currentPage,n=e.darkMode;return r.a.createElement("div",{className:g.a.Header},r.a.createElement(m.b,{"aria-label":"/"===a?"Go to History":"Go to Calculator",to:"/"===a?"/history":"/",className:g.a.Button},r.a.createElement("i",{className:"/"===a?"fas fa-history":"fas fa-times-circle"})),r.a.createElement("h6",{className:"/history"===a?g.a.HistoryHeader:g.a.Hidden},"History"),r.a.createElement("h6",{className:"/"===a?g.a.Text:g.a.Hidden},"Characters Count: ",String(t).length>12?"Over":String(t).length),r.a.createElement("button",{"aria-label":!0===n?"Toggle Light Mode":"Toggle Dark Mode",onClick:e.onClickDarkLightMode,className:g.a.Button},r.a.createElement("i",{className:!0===n?"fas fa-sun":"fas fa-moon"})))}var f=a(4),E=a.n(f);function H(e){var t=e.calculation,a=e.total,n=e.currentPressed,l=e.darkMode;return r.a.createElement("div",{className:!0===l?"".concat(E.a.Display," ").concat(E.a.White):"".concat(E.a.Display," ").concat(E.a.Black)},r.a.createElement("h6",{className:String(t).length>=20?"".concat(E.a.result," ").concat(E.a.TextSmallest):E.a.result},t),r.a.createElement("h1",{className:String(a).length>=14||n.length>=14?"".concat(E.a.total," ").concat(E.a.TextSmaller):String(a).length>=9||n.length>=9?"".concat(E.a.total," ").concat(E.a.TextSmall):E.a.total},null===a?n:a))}var T=a(10),S=a.n(T);function N(e){var t=e.title,a=e.color,n=e.background,l=e.wide;return r.a.createElement("button",{"aria-label":t,onClick:function(){return e.onClick(t)},className:"Wide"===l?"".concat(S.a.Button," ").concat(S.a[a]," ").concat(S.a[n]," ").concat(S.a[l]):"".concat(S.a.Button," ").concat(S.a[a]," ").concat(S.a[n])},t)}var v=a(7),B=a.n(v);function x(e){var t=e.darkMode;return r.a.createElement("div",{className:!0===t?"".concat(B.a.Keypad," ").concat(B.a.DarkMode):B.a.Keypad},r.a.createElement("div",{className:B.a.Row},r.a.createElement(N,{title:"Clear",onClick:e.onClickHandleClear,color:"Red",background:!0===t?"DarkGrey":"LightGrey",wide:"Wide"}),r.a.createElement(N,{title:"%",onClick:e.onClick,color:"Green",background:!0===t?"DarkGrey":"LightGrey"}),r.a.createElement(N,{title:"/",onClick:e.onClick,color:"Green",background:!0===t?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(N,{title:"7",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"8",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"9",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"*",onClick:e.onClick,color:"Green",background:!0===t?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(N,{title:"4",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"5",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"6",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"-",onClick:e.onClick,color:"Green",background:!0===t?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(N,{title:"1",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"2",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"3",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"+",onClick:e.onClick,color:"Green",background:!0===t?"DarkGrey":"LightGrey"})),r.a.createElement("div",{className:B.a.Row},r.a.createElement(N,{title:r.a.createElement("i",{className:"fas fa-backspace"}),onClick:e.onClickHandleBackspace,color:"Red",background:"Transparant"}),r.a.createElement(N,{title:"0",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:".",onClick:e.onClick,color:!0===t?"White":"Black",background:"Transparant"}),r.a.createElement(N,{title:"=",onClick:e.onClickHandleCalculation,color:"White",background:"Green"})))}var D=a(13),M=a.n(D),P=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleKeypress=function(e){["0",".","1","2","3","4","5","6","7","8","9","/","*","-","+","%"].includes(e.key)?a.handleClick(e.key):"Escape"===e.key?a.handleClear():"Enter"===e.key?a.handleCalculation():"Backspace"===e.key||"Delete"===e.key?a.handleBackspace():a.handleReturn()},a.handleClick=function(e){var t=a.state.currentPressed,n=Object(o.a)(a.state.currentPressedList);if(n.push(e),!0===a.state.complete)return"/"===e||"*"===e||"-"===e||"+"===e||"%"===e?void 0:void a.setState({currentPressed:t+=e,currentPressedList:n,calculation:"".concat(a.state.firstNumber," ").concat(a.state.operator," ").concat(a.state.secondNumber," = ").concat(a.state.total),total:null,complete:!1});if("/"===e||"*"===e||"-"===e||"+"===e||"%"===e)a.setState({currentPressed:"",currentPressedList:[],firstNumber:parseFloat(t),operator:e,calculation:null});else{if(t.length>11)return void a.setState({currentPressed:"Exceeded limit!",calculation:"Limit 12 Numbers (Delete to continue or Clear)"});a.setState((function(t){return{currentPressed:t.currentPressed+=e,currentPressedList:n,secondNumber:parseFloat(t.currentPressed)}}))}},a.handleClear=function(){a.setState({currentPressed:"",currentPressedList:[],firstNumber:null,operator:null,secondNumber:null,total:null,calculation:null,complete:!1})},a.handleClearHistory=function(){a.setState((function(e){return{history:[]}})),localStorage.removeItem("History")},a.handleCalculation=function(){var e=a.state.firstNumber,t=a.state.operator,n=a.state.secondNumber,r=null,l=Object(o.a)(a.state.history);if(null!==e&&null!==t&&null!==n){switch(t){case"%":r=e%n;break;case"/":r=e/n;break;case"*":r=e*n;break;case"-":r=e-n;break;case"+":r=e+n}var c={id:Math.random().toString(36).substr(2,9),firstNumber:e,operator:t,secondNumber:n,total:parseFloat(r)>=1e9?r=parseFloat(r).toExponential(3):r};l.push(c),localStorage.setItem("History",JSON.stringify(l)),a.setState({currentPressed:"",currentPressedList:[],calculation:"".concat(e," ").concat(t," ").concat(n),total:parseFloat(r)>=1e9?r=parseFloat(r).toExponential(3):r,complete:!0,history:l})}},a.handleBackspace=function(){if(!0!==a.state.complete){var e=Object(o.a)(a.state.currentPressedList);e.pop();var t=e.join("");a.setState((function(a){return{currentPressed:String(t),currentPressedList:e,secondNumber:parseFloat(t),calculation:String(a.calculation).length>26?null:a.calculation}}))}},a.handleDarkMode=function(){localStorage.setItem("DarkMode",!a.state.darkMode),a.setState((function(e){return{darkMode:!e.darkMode}}))},a.state={currentPressed:"",currentPressedList:[],firstNumber:null,operator:null,secondNumber:null,total:null,calculation:null,complete:!1,history:[],darkMode:!1},a}return Object(k.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("History")||"[]"),t=JSON.parse(localStorage.getItem("DarkMode")||!1);this.setState((function(a){return{history:e,darkMode:t}})),document.addEventListener("keydown",this.handleKeypress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeypress,!1)}},{key:"handleReturn",value:function(){}},{key:"render",value:function(){var e=!0===this.state.darkMode?"".concat(M.a.container," ").concat(M.a.Black," animated fade"):"".concat(M.a.container," ").concat(M.a.White," animated fade");return r.a.createElement(m.a,{basename:"/react-calculator"},r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement("div",{className:e},r.a.createElement(b,{currentPressed:this.state.currentPressed,currentPage:"/",onClickDarkLightMode:this.handleDarkMode,darkMode:this.state.darkMode}),r.a.createElement(H,{total:this.state.total,currentPressed:this.state.currentPressed,calculation:this.state.calculation,darkMode:this.state.darkMode}),r.a.createElement(x,{onClick:this.handleClick,onClickHandleClear:this.handleClear,onClickHandleBackspace:this.handleBackspace,onClickHandleCalculation:this.handleCalculation,onKeypress:this.handleKeypress,darkMode:this.state.darkMode}))),r.a.createElement(h.a,{path:"/history"},r.a.createElement("div",{className:e},r.a.createElement(b,{currentPage:"/history",onClickDarkLightMode:this.handleDarkMode,darkMode:this.state.darkMode}),r.a.createElement(p,{history:this.state.history,onClickClearHistory:this.handleClearHistory}))))}}]),t}(r.a.Component));a(40);c.a.render(r.a.createElement(P,null),document.getElementById("root"))},7:function(e,t,a){e.exports={Keypad:"Keypad_Keypad__2TTIA",Row:"Keypad_Row__3wDvA",DarkMode:"Keypad_DarkMode__2Fhv6"}},9:function(e,t,a){e.exports={Header:"Header_Header__3W_Sd",Button:"Header_Button__2XABB",HistoryHeader:"Header_HistoryHeader__3_f6w",Text:"Header_Text__2aVAg",Hidden:"Header_Hidden__15jhU"}}},[[29,1,2]]]);
//# sourceMappingURL=main.abfd17db.chunk.js.map