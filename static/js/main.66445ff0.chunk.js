(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=(t(13),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthofStarting," ",e.YearOfStarting," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Technical Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:" ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return console.log(e),l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Here is a selection of my work:"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat("/ReactPortfolio","/").concat(e.imgurl),className:"item-img",alt:"portfolio"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me on LinkedIn"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,l.a.createElement("a",{href:"{resumeData.linkedinId}"}," LinkedIn"))))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://github.com/BenHCalvert",name:"Ben Calvert",role:"full stack web developer and middle school assistant principal",linkedinId:"https://www.linkedin.com/in/benjamin-calvert-62978438/",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://linkedin.com/in/benjamin-calvert-62978438/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/BenHCalvert",className:"fa fa-github"}],aboutme:"I recently completed University of Denver's Full Stack Web Development Coding Bootcamp. I also work as a middle school assistant principal. This summer, I'm moving to Boise, ID and am currently in search of a job to leverage and continue developing my technical skills.",address:"Golden CO | Boise ID",website:"https://github.com/BenHCalvert",education:[{UniversityName:"University of Denver",specialization:"Coding Bootcamp, Full-Stack Web Development",MonthOfPassing:"Mar",YearOfPassing:"2020"},{UniversityName:"New York University",specialization:"Bachelor of Arts: Economics, Minor: Italian",MonthOfPassing:"May",YearOfPassing:"2013"}],work:[{CompanyName:"STRIVE Prep - Sunnyside",specialization:"Assistant Principal",MonthOfLeaving:"Jun",YearOfLeaving:"2020",MonthofStarting:"Jul",YearOfStarting:"2018",Achievements:"Some Achievements"},{CompanyName:"Deer Hill Expeditions",specialization:"Basecamp Manager",MonthOfLeaving:"Jul",YearOfLeaving:"2018",MonthofStarting:"Jul",YearOfStarting:"2018",Achievements:"Some Achievements"},{CompanyName:"KIPP New Jersey",specialization:"School Start-up Project Manager, Head of Student Activities & Operations Manager",MonthOfLeaving:"Nov",YearOfLeaving:"2017",MonthofStarting:"Feb",YearOfStarting:"2014",Achievements:"Some Achievements"}],skillsDescription:"Ben Calvert's technical skills",skills:[{skillname:"CSS"},{skillname:"Express.JS"},{skillname:"Git"},{skillname:"Github"},{skillname:"HTML"},{skillname:"JavaScript"},{skillname:"MongoDB"},{skillname:"MySql"},{skillname:"Node.js"},{skillname:"React"}],portfolio:[{name:"Habit App",description:"An app to help users build habits by tracking their progress towards rewards. Built with React.",projurl:"https://habit-app-2020.herokuapp.com/",imgurl:"images/portfolio/starChart.png"},{name:"Sports Manager",description:"An app to manage schools sports teams, their rosters and schedules.",projurl:"https://pacific-peak-82509.herokuapp.com/",imgurl:"images/portfolio/SportsManager.png"},{name:"Hike & Dinner",description:"An app that allows users to find a nearby hike and a place to grab a bite to eat close to the trailhead",projurl:"https://benhcalvert.github.io/Group-Project/",imgurl:"images/portfolio/HikeandDinner.png"},{name:"Weather Dashboard",description:"A weather dashboard written in HTML and JavaScrpit",projurl:"https://benhcalvert.github.io/HW6_Weather/",imgurl:"images/portfolio/WeatherDashboard.png"},{name:"PWA Budget Tracker",description:"A progressive web app budget tracker with offline functionality.",projurl:"https://aqueous-island-57111.herokuapp.com/",imgurl:"images/portfolio/budgetPWA.png"}]},g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(v,{resumeData:b}),l.a.createElement(f,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.66445ff0.chunk.js.map