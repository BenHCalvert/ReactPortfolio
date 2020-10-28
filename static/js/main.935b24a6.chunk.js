(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),s=(t(13),t(1)),o=t(2),c=t(4),m=t(3),p=t(5),u=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e.name),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,e.address),r.a.createElement("br",null),r.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthofStarting," ",e.YearOfStarting," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Technical Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:" ".concat(e.skillname.toLowerCase())}),r.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return console.log(e),r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Here is a selection of my work:"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves cf"},e.portfolio&&e.portfolio.map(function(e){return r.a.createElement("div",{className:"columns portfolio-item"},r.a.createElement("a",{href:e.projurl,target:"blank"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("img",{src:"".concat("/ReactPortfolio","/").concat(e.imgurl),className:"item-img",alt:"portfolio"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("a",{href:e.repo,target:"blank"},"Github Repository")))))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Feel free to contact me on ",r.a.createElement("a",{href:e.linkedinId,target:"blank"}," LinkedIn")," or send me an email at ",r.a.createElement("a",{href:e.email,target:"blank"},"benhcalvert@gmail.com")))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={imagebaseurl:"https://github.com/BenHCalvert",name:"Ben Calvert",role:"Full Stack Web Developer | K-12 education administration | CMO finance, operations & IT",linkedinId:"https://linkedin.com/in/benjamin-calvert-62978438/",email:"mailto:benhcalvert@gmail.com",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://linkedin.com/in/benjamin-calvert-62978438/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/BenHCalvert",className:"fa fa-github"}],aboutme:"I am a full stack web developer and former middle school assistant principal with experience in school district finance, operations and IT. Currently in Boise, ID",address:"Golden CO | Boise ID",website:"https://github.com/BenHCalvert",education:[{UniversityName:"University of Denver",specialization:"Certificate, Full-Stack Web Development",MonthOfPassing:"Mar",YearOfPassing:"2020"},{UniversityName:"New York University",specialization:"Bachelor of Arts: Economics, Minor: Italian",MonthOfPassing:"May",YearOfPassing:"2013"}],work:[{CompanyName:"STRIVE Prep - Sunnyside",specialization:"Assistant Principal",MonthOfLeaving:"Jun",YearOfLeaving:"2020",MonthofStarting:"Jul",YearOfStarting:"2018",Achievements:"Co-Led a successful turn-around for a failing middle school (grades 6-8), marked by a 16-34% increase in student achievement on semester 1 Language Arts midterms, a 12% increase in positive responses from staff on the Workplace Quality Survey and a 75% decrease in student suspensions. Led a team of 6 employees and   oversaw scheduling and day-to-day events and activities for 33 teachers & staff"},{CompanyName:"Deer Hill Expeditions",specialization:"Basecamp Manager",MonthOfLeaving:"Jul",YearOfLeaving:"2018",MonthofStarting:"Jul",YearOfStarting:"2018",Achievements:"Managed 12 basecamp staff members and held  responsibility for trip logistics, facilities, and equipment. Served as primary point of contact for emergency situations in the field"},{CompanyName:"KIPP New Jersey",specialization:"School Start-up Project Manager, Head of Student Activities & Operations Manager",MonthOfLeaving:"Nov",YearOfLeaving:"2017",MonthofStarting:"Feb",YearOfStarting:"2014",Achievements:"Created and implemented facilities, food service, IT and other operational systems. Supervised facility and construction operations and created KIPP New Jersey\u2019s AmeriCorps teaching residency "}],skillsDescription:"Ben Calvert's technical skills",skills:[{skillname:"Bootstrap"},{skillname:"CSS"},{skillname:"Cloudflare"},{skillname:"Docker"},{skillname:"Drupal"},{skillname:"Express.JS"},{skillname:"Git"},{skillname:"Github"},{skillname:"HTML"},{skillname:"JavaScript"},{skillname:"Materialize"},{skillname:"MongoDB"},{skillname:"MySql"},{skillname:"Node.js"},{skillname:"Progressive Web Apps"},{skillname:"Python"},{skillname:"React"}],portfolio:[{name:"Habit App",description:"An app to help users build habits by tracking their progress towards rewards. Built with React.",projurl:"https://habit-app-2020.herokuapp.com/",imgurl:"images/portfolio/starChart_2.png",repo:"https://github.com/BenHCalvert/habit-app"},{name:"Sports Manager",description:"An app to manage schools sports teams, their rosters and schedules.",projurl:"https://pacific-peak-82509.herokuapp.com/",imgurl:"images/portfolio/SportsManager_2.png",repo:"https://github.com/BenHCalvert/Proj-2"},{name:"Hike & Dinner",description:"An app that allows users to find a nearby hike and a place to grab a bite to eat close to the trailhead",projurl:"https://benhcalvert.github.io/Group-Project/",imgurl:"images/portfolio/HikeandDinner_2.png",repo:"https://github.com/BenHCalvert/Group-Project"},{name:"Weather Dashboard",description:"A weather dashboard written in HTML and JavaScrpit",projurl:"https://benhcalvert.github.io/HW6_Weather/",imgurl:"images/portfolio/WeatherDashboard_2.png",repo:"https://github.com/BenHCalvert/HW6_Weather"},{name:"React Weather Dashboard",description:"Another weather dashboard, this time in React using reactstrap. Uses the Weatherbit API for weather info and the Google Geocoding API to handle location info.",projurl:"https://react-weather-app2020.herokuapp.com/",imgurl:"images/portfolio/ReactWeather.png",repo:"https://github.com/BenHCalvert/react-weather"},{name:"Cloudflare Workers Linktree",description:"A Cloudflare Workers project that builds a linktree-style website by pulling links from a simple 'API'. You can go directly to the API response at the /links route.",projurl:"https://my-app.benhcalvert.workers.dev/",imgurl:"images/portfolio/cfworkers.png",repo:"https://github.com/BenHCalvert/CFProj"},{name:"PWA Budget Tracker",description:"A progressive web app budget tracker with offline functionality.",projurl:"https://aqueous-island-57111.herokuapp.com/",imgurl:"images/portfolio/budgetPWA_2.png",repo:"https://github.com/BenHCalvert/pwaBudgetTracker"},{name:"Github Profile - PDF Generator",description:"A command line application to generate a PDF profile from a github username using node.js",projurl:"https://github.com/BenHCalvert/DevProfileGen",imgurl:"images/portfolio/DevProfileGen.gif",repo:"https://github.com/BenHCalvert/DevProfileGen"}]},b=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{resumeData:g}),r.a.createElement(h,{resumeData:g}),r.a.createElement(d,{resumeData:g}),r.a.createElement(f,{resumeData:g}),r.a.createElement(v,{resumeData:g}),r.a.createElement(E,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.935b24a6.chunk.js.map