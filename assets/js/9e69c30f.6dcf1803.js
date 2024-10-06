"use strict";(self.webpackChunkstm_32_documentaion=self.webpackChunkstm_32_documentaion||[]).push([[942],{4324:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(4848),r=n(8453);const i={},o="HC-SR04",c={id:"UltrasonicSensor/UltrasonicSensor",title:"HC-SR04",description:"Image.png)",source:"@site/docs/UltrasonicSensor/UltrasonicSensor.md",sourceDirName:"UltrasonicSensor",slug:"/UltrasonicSensor/",permalink:"/STM32/docs/UltrasonicSensor/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UltrasonicSensor/UltrasonicSensor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code",permalink:"/STM32/docs/LCD_Display/Code"},next:{title:"Code",permalink:"/STM32/docs/UltrasonicSensor/code"}},l={},a=[{value:"HC-SR04 Ultrasonic Sensor Specs:",id:"hc-sr04-ultrasonic-sensor-specs",level:2},{value:"Working of HC-SR04 Sensor",id:"working-of-hc-sr04-sensor",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"hc-sr04",children:"HC-SR04"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(6042).A+"",width:"530",height:"364"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"hc-sr04-ultrasonic-sensor-specs",children:"HC-SR04 Ultrasonic Sensor Specs:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The HC-SR04 ultrasonic sensor uses sonar energy to measure distance to an object"}),"\n",(0,t.jsx)(s.li,{children:"It consists of both the transmitter and the receiver modules."}),"\n",(0,t.jsxs)(s.li,{children:["Specs:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Range:"}),"  2 - 400 Cm"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Accuracy:"})," 0.3 Cm"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Frequency:"})," 40 KHz"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(9523).A+"",width:"529",height:"441"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"transmitter"})," module is used to convert the electrical signal into a 40KHz burst of 8 sonar wave pulses."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"receiver"})," module listens to the ultrasonic waves produced by the transmitter module"]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"working-of-hc-sr04-sensor",children:"Working of HC-SR04 Sensor"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(1299).A+"",width:"640",height:"313"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"To start ranging with HC-SR04, first, we apply 10\xb5s pulse to the trigger pin of the HC-SR04 sensor from STM32 Nucleo digital output pin."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"As soon as the 10\xb5s input trigger signal becomes active low, the transmitter circuit produces a burst of 8 ultrasonic sonar pulses. At the same time, the echo pin also makes a transition from a logic low level to a logic high level."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Using the HAL libraries, we save the TIM Counter Register value (val1) on runtime when the echo pin goes high."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"These waves travel through the air and if there is any object placed in parallel to the sensor, these waves reflect back after a collision with the object."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"As soon as the ultrasonic waves received by the receiver circuit after striking with an object, the echo pin goes low. At that point the TIM Counter Register value (val2) on runtime is saved as well."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Both these values will be used to determine the distance to an object."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6042:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/1(2)-4bcac8e96f5ed0769b6a508014b50cbd.png"},9523:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/2(2)-90a49c6198881f810613fc064ec43ab8.png"},1299:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/3-774280aaf65f0aea2930028601e4815a.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);