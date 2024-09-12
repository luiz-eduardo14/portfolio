import{A as o}from"./UIcon.f62756c7.js";function u(a,...t){const l=Object.assign({},a);return Object.keys(l).forEach(g=>{t.includes(g)&&delete l[g]}),l}const r=a=>a,m=[r({name:"programming-languages",slug:"pro-lang"}),r({name:"frameworks",slug:"framework"}),r({name:"libraries",slug:"library"}),r({name:"languages",slug:"lang"}),r({name:"databases",slug:"db"}),r({name:"orms",slug:"orm"}),r({name:"security",slug:"security"}),r({name:"devops",slug:"devops"}),r({name:"testing",slug:"test"}),r({name:"dev-tools",slug:"devtools"}),r({name:"markup-and-style",slug:"markup-style"}),r({name:"design",slug:"design"}),r({name:"soft-skills",slug:"soft"}),r({name:"message-brokers",slug:"msg-broker"})],e=a=>{const t=u(a,"category");return a.category&&(t.category=m.find(l=>l.slug===a.category)),t},c=[e({slug:"java",color:"red",description:"java.description",logo:o.Java,name:"Java",category:"pro-lang"}),e({slug:"kotlin",color:"purple",description:"kotlin.description",logo:o.Kotlin,name:"Kotlin",category:"pro-lang"}),e({slug:"js",color:"yellow",description:"javascript.description",logo:o.JavaScript,name:"Javascript",category:"pro-lang"}),e({slug:"ts",color:"blue",description:"typescript.description",logo:o.TypeScript,name:"Typescript",category:"pro-lang"}),e({slug:"rust",color:"orange",description:"rust.description",logo:o.Rust,name:"Rust",category:"pro-lang"}),e({slug:"nestjs",color:"red",logo:o.NestJs,name:"Nestjs",category:"framework"}),e({slug:"spring-boot",color:"green",logo:o.SpringBoot,name:"Spring boot",category:"framework"}),e({slug:"spring-security",color:"green",logo:o.SpringSecurity,name:"Spring security",category:"framework"}),e({slug:"spring-batch",color:"green",logo:o.SpringBatch,name:"Spring batch",category:"framework"}),e({slug:"tailwind",color:"blue",logo:o.Tailwind,name:"Tailwind",category:"framework"}),e({slug:"react-native",color:"blue",logo:o.ReactNative,name:"React Native",category:"framework"}),e({slug:"jetpack-compose",color:"green",logo:o.JetpackCompose,name:"Jetpack Compose",category:"framework"}),e({slug:"reactjs",color:"cyan",logo:o.ReactJs,name:"React Js",category:"library"}),e({slug:"react-navigation",color:"purple",logo:o.ReactNavigation,name:"React Navigation",category:"library"}),e({slug:"react-router",color:"red",logo:o.ReactRouter,name:"React Router",category:"library"}),e({slug:"puppeteer",color:"purple",logo:o.Puppeteer,name:"Puppeteer",category:"library"}),e({slug:"hibernate",color:"gray",logo:o.Hibernate,name:"Hibernate",category:"library"}),e({slug:"mybatis",color:"red",logo:o.MyBatis,name:"MyBatis",category:"library"}),e({slug:"tokio",color:"white",logo:o.Tokio,name:"Tokio",category:"library"}),e({slug:"slqx",color:"blue",logo:o.Unknown,name:"Sqlx",category:"library"}),e({slug:"vite",color:"yellow",logo:o.Vite,name:"vite",category:"devtools"}),e({slug:"docker",color:"blue",logo:o.Docker,name:"Docker",category:"devops"}),e({slug:"grafana",color:"orange",logo:o.Grafana,name:"Grafana",category:"devops"}),e({slug:"rabbitmq",color:"orange",logo:o.RabbitMQ,name:"RabbitMQ",category:"msg-broker"}),e({slug:"kafka",color:"white",logo:o.Kafka,name:"Kafka",category:"msg-broker"}),e({slug:"junit",color:"green",logo:o.Junit,name:"Junit",category:"test"}),e({slug:"jest",color:"red",logo:o.Jest,name:"Jest",category:"test"}),e({slug:"K6",color:"purple",logo:o.K6,name:"K6",category:"test"}),e({slug:"css",color:"blue",logo:o.CSS,name:"CSS",category:"markup-style"}),e({slug:"html",color:"orange",logo:o.HTML,name:"HTML",category:"markup-style"})],y="Skills",d=(...a)=>c.filter(t=>a.includes(t.slug)),b=a=>{const t=[],l=[];return c.forEach(g=>{if(a.trim()&&!g.name.toLowerCase().includes(a.trim().toLowerCase()))return;if(!g.category){l.push(g);return}let s=t.find(i=>{var n;return i.category.slug===((n=g.category)==null?void 0:n.slug)});s||(s={items:[],category:g.category},t.push(s)),s.items.push(g)}),l.length!==0&&t.push({category:{name:"Others",slug:"others"},items:l}),t};export{b as a,d as g,c as i,y as t};
