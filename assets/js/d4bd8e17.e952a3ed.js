"use strict";(self.webpackChunkstm_32_documentaion=self.webpackChunkstm_32_documentaion||[]).push([[800],{3893:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(4848),r=s(8453);const t={},c="Code",o={id:"UltrasonicSensor/code",title:"Code",description:"Task: To interface ultrasonic sensor with STM32",source:"@site/docs/UltrasonicSensor/code.md",sourceDirName:"UltrasonicSensor",slug:"/UltrasonicSensor/code",permalink:"/STM32/docs/UltrasonicSensor/code",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UltrasonicSensor/code.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HC-SR04",permalink:"/STM32/docs/UltrasonicSensor/"}},d={},l=[{value:"Step 1: Create a STM32 Project &quot;Ultrasonic&quot;",id:"step-1-create-a-stm32-project-ultrasonic",level:3},{value:"Step 2: Clock Configuration",id:"step-2-clock-configuration",level:3},{value:"Step 3: Pinout &amp; Configuration",id:"step-3-pinout--configuration",level:3},{value:"Step 4: Code Snippet to measure distance using ultrasonic sensor and display in the 16x2 LCD Display",id:"step-4-code-snippet-to-measure-distance-using-ultrasonic-sensor-and-display-in-the-16x2-lcd-display",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"code",children:"Code"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Task: To interface ultrasonic sensor with STM32"})}),"\n",(0,i.jsx)(n.h3,{id:"step-1-create-a-stm32-project-ultrasonic",children:'Step 1: Create a STM32 Project "Ultrasonic"'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"step-2-clock-configuration",children:"Step 2: Clock Configuration"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(2498).A+"",width:"1091",height:"297"})}),"\n",(0,i.jsxs)(n.p,{children:["You can specify your ",(0,i.jsx)(n.code,{children:"System clock"}),". We will set ",(0,i.jsx)(n.code,{children:"HCLK (MHz)"})," as ",(0,i.jsx)(n.strong,{children:"180 MHz"})," and press 'ENTER'. And generate the code and associated perspectives by saving using CTRL + S."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"step-3-pinout--configuration",children:"Step 3: Pinout & Configuration"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(8585).A+"",width:"429",height:"390"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure system clock:\r\nSystem Core > ",(0,i.jsx)(n.code,{children:"RCC"})," then select \u2018",(0,i.jsx)(n.code,{children:"Crystal/Ceramic Resonator"}),"\u2019 in from the High Speed Clock(",(0,i.jsx)(n.code,{children:"HSC"}),") feature"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Now configure ",(0,i.jsx)(n.code,{children:"I2C"})," by following the procedure in 16x2 LCD tutorial or by following the step below.\r\n(",(0,i.jsx)(n.strong,{children:"DON'T FORGET TO ADD THE NECESSARY LIBRARY FILES FOR I2C_LCD"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(5646).A+"",width:"427",height:"438"})}),"\n",(0,i.jsxs)(n.p,{children:["(Under Pinout& Configuration- Connectivity > I2C1.\r\nSelect the ",(0,i.jsx)(n.code,{children:"I2C mode"})," as \u2018",(0,i.jsx)(n.strong,{children:"I2C"}),"\u2019\r\nThen go to \u2018Parameter Settings\u2019 and set the",(0,i.jsx)(n.code,{children:"I2C speed mode"})," as \u2018",(0,i.jsx)(n.strong,{children:"Fast Mode"}),"\u2019)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(9979).A+"",width:"676",height:"561"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Now head over to ",(0,i.jsx)(n.code,{children:"Timers > TIM1"})," and select the Clock Source as \u2018",(0,i.jsx)(n.code,{children:"Internal Clock"}),".\u2019 Then click the Parameter Settings and set the ",(0,i.jsx)(n.code,{children:"Prescaler"})," as ",(0,i.jsx)(n.strong,{children:"180-1"})," and ",(0,i.jsx)(n.code,{children:"Counter period"})," as ",(0,i.jsx)(n.strong,{children:"65536-1"})," as it is the maximum value for a 16 bit timer (default)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(3716).A+"",width:"681",height:"526"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Now configure GPIO Pins:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PA10"})," as ",(0,i.jsx)(n.code,{children:"GPIO_OUTPUT"})," (TRIGGER PIN [D2])"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PA4"})," as ",(0,i.jsx)(n.code,{children:"GPIO_INPUT"})," (ECHO PIN [A2])"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note1:"}),"\r\nBesure to change the Prescalar value as per your system clock."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["we do this to get a ",(0,i.jsx)(n.code,{children:"1us"})," pulse"]}),"\n",(0,i.jsxs)(n.li,{children:["Example:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"System clock = 180"}),"\n",(0,i.jsx)(n.li,{children:"Prescalar Value = 180-1"}),"\n",(0,i.jsx)(n.li,{children:"Pulse = 180Mhz/180\r\n= 1Mhz"}),"\n",(0,i.jsx)(n.li,{children:"Timeperiod = 1/freq\r\n= 1/1Mhz\r\n= 1us"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note2:"}),"\r\nReg counter period, ",(0,i.jsx)(n.strong,{children:"65536-1"})," is the max value for 16 bit timer, but for this code we can use any value greater than ",(0,i.jsx)(n.strong,{children:"10"}),".\r\nBut max value is preffered to avoid confusion."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"step-4-code-snippet-to-measure-distance-using-ultrasonic-sensor-and-display-in-the-16x2-lcd-display",children:"Step 4: Code Snippet to measure distance using ultrasonic sensor and display in the 16x2 LCD Display"}),"\n",(0,i.jsxs)(n.p,{children:["Paste the following code snippet inside the ",(0,i.jsx)(n.code,{children:"/* USER CODE BEGIN Includes */"})," in ",(0,i.jsx)(n.code,{children:"main.c"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include "stdio.h"\r\n#include "liquidcrystal_i2c.h"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Paste the following code snippet inside the ",(0,i.jsx)(n.code,{children:"/* USER CODE BEGIN PD */"})," in ",(0,i.jsx)(n.code,{children:"main.c"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#define TRIG_PIN GPIO_PIN_10\r\n#define TRIG_PORT GPIOA\r\n#define ECHO_PIN GPIO_PIN_4\r\n#define ECHO_PORT GPIOA\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Paste the following code snippet inside the ",(0,i.jsx)(n.code,{children:"/* USER CODE BEGIN PV */"})," in ",(0,i.jsx)(n.code,{children:"main.c"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"uint32_t pMillis;\r\nuint32_t val1 = 0;\r\nuint32_t val2 = 0;\r\nuint16_t distance  = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Paste the following code snippet inside the ",(0,i.jsx)(n.code,{children:"/* USER CODE BEGIN 2 */"})," in ",(0,i.jsx)(n.code,{children:"main.c"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"HAL_TIM_Base_Start(&htim1);\r\nHAL_GPIO_WritePin(TRIG_PORT, TRIG_PIN, GPIO_PIN_RESET);\r\nLCD_Init(2);\r\nLCD_Clear();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Paste the following code snippet inside the ",(0,i.jsx)(n.code,{children:"while (1)"})," in ",(0,i.jsx)(n.code,{children:"main.c"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'HAL_GPIO_WritePin(TRIG_PORT, TRIG_PIN, GPIO_PIN_SET);\r\n__HAL_TIM_SET_COUNTER(&htim1, 0);\r\nwhile (__HAL_TIM_GET_COUNTER (&htim1) < 10);  // wait for 10 us\r\nHAL_GPIO_WritePin(TRIG_PORT, TRIG_PIN, GPIO_PIN_RESET);\r\n\r\npMillis = HAL_GetTick();\r\nwhile (!(HAL_GPIO_ReadPin (ECHO_PORT, ECHO_PIN)) && pMillis + 10 >  HAL_GetTick());\r\nval1 = __HAL_TIM_GET_COUNTER (&htim1);\r\n\r\npMillis = HAL_GetTick();\r\nwhile ((HAL_GPIO_ReadPin (ECHO_PORT, ECHO_PIN)) && pMillis + 50 > HAL_GetTick());\r\nval2 = __HAL_TIM_GET_COUNTER (&htim1);\r\n\r\ndistance = (val2-val1)* 0.034/2;\r\n\r\nLCD_Clear();\r\nLCD_SetCursor(0,0);\r\nchar value[20];\r\nsprintf(value, "Distance: %dCm", distance);  // Format the string with the distance value\r\nLCD_Print(value);  // Pass the formatted string to the function\r\nHAL_Delay(500);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8585:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/1-75e9067153de5d03ce746a6a0b2bb946.png"},2498:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2-05721da51aa7270e14ab77bce16b09f3.png"},9979:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/3-e9536a0b6dac274907b6df417a241bee.png"},3716:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/4-26ee86566add8982816efcdd1dd5fefe.png"},5646:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/5-d026b6fc1709eb834e2dbc0c2e69b0ac.webp"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);