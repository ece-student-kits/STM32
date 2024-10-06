"use strict";(self.webpackChunkstm_32_documentaion=self.webpackChunkstm_32_documentaion||[]).push([[247],{6274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const o={},l="Basics: BlinkLed",r={id:"Basics/BlinkLed",title:"Basics: BlinkLed",description:"Task: Cofigure inbuilt LED and blink at a delay of 1 Sec",source:"@site/docs/Basics/BlinkLed.md",sourceDirName:"Basics",slug:"/Basics/BlinkLed",permalink:"/STM32/docs/Basics/BlinkLed",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Basics/BlinkLed.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BasicSteps",permalink:"/STM32/docs/Basics/BasicSteps"},next:{title:"Basics: ButtonLED",permalink:"/STM32/docs/Basics/ButtonLED"}},a={},c=[{value:"Step 1: Create a STM32 Project &quot;BlinkLed&quot;",id:"step-1-create-a-stm32-project-blinkled",level:3},{value:"Step 2: Configure &quot;PA5&quot; as &quot;GPIO_OUTPUT&quot;",id:"step-2-configure-pa5-as-gpio_output",level:3},{value:"Port A, GPIO Pin 5 Configuration",id:"port-a-gpio-pin-5-configuration",level:4},{value:"Step 3: Code Snippet for LED Blinking",id:"step-3-code-snippet-for-led-blinking",level:3},{value:"Toggle the status of the GPIO PIN:",id:"toggle-the-status-of-the-gpio-pin",level:4},{value:"Write a GPIO PIN as HIGH/LOW:",id:"write-a-gpio-pin-as-highlow",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"basics-blinkled",children:"Basics: BlinkLed"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Task: Cofigure inbuilt LED and blink at a delay of 1 Sec"})}),"\n",(0,t.jsx)(n.h3,{id:"step-1-create-a-stm32-project-blinkled",children:'Step 1: Create a STM32 Project "BlinkLed"'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-2-configure-pa5-as-gpio_output",children:'Step 2: Configure "PA5" as "GPIO_OUTPUT"'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.st.com/stm32mcu/wiki/STM32StepByStep:Step2_Blink_LED",children:"Docs"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(8166).A+"",width:"799",height:"152"})}),"\n",(0,t.jsx)(n.h4,{id:"port-a-gpio-pin-5-configuration",children:"Port A, GPIO Pin 5 Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"(Already configured when initialized the pheripherals in default configuration)"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-3-code-snippet-for-led-blinking",children:"Step 3: Code Snippet for LED Blinking"}),"\n",(0,t.jsx)(n.p,{children:"Place the following code under 'while(1)' inside the main loop:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"toggle-the-status-of-the-gpio-pin",children:"Toggle the status of the GPIO PIN:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// Toggle LED connected to PA5\r\nHAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);\r\nHAL_Delay(100);   // Insert delay 100 ms\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"write-a-gpio-pin-as-highlow",children:"Write a GPIO PIN as HIGH/LOW:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// Toggle LED connected to PA5\r\nHAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_SET);\r\nHAL_Delay (100);   /* Insert delay 100 ms */\r\nHAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_RESET);\r\nHAL_Delay (100);   /* Insert delay 100 ms */\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8166:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1-4bf83d711bd8426dd10be2a744bced64.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);