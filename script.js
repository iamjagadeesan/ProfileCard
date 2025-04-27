const navElement = `<li id="links">
        <ul id="location" class="linkss"><i class="fas fa-map-marker-alt"></i> Location</ul>
            <input id="Location" placeholder="Location" />
        <ul id="mail" class="linkss"><i class="fas fa-envelope"></i><span class="hiddenLink"> Mail</span></ul>
          <input id="Mail" placeholder="Mail id" />
        <ul id="linkedin" class="linkss"><i class="fab fa-linkedin"></i><span class="hiddenLink"> Linkedin</span></ul>
          <input id="Linkedin" placeholder="Linkedin url" />
        <ul id="github" class="linkss"><i class="fab fa-github"></i><span class="hiddenLink"> Github</span></ul>
          <input id="Github" placeholder="Github link" />
        <ul id="whatsapp" class="linkss"><i class="fab fa-whatsapp"></i><span class="hiddenLink"> Whatsapp</span></ul>
          <input id="Whatsapp" placeholder="Whatsapp number"  />
        <ul id="instagram" class="linkss"> <i class="fa-brands fa-instagram"></i> <span class="hiddenLink"> Instagram</span></ul>
          <input id="Instagram" placeholder="Instagram" />
        <ul id="download" class="linkss"><i class="material-icons">download</i></ul>
      </li>`;

const laptop = document.getElementById('lapNav');
const mobile = document.getElementById('mobNav');

function checkScreen(){

if(window.innerWidth < 500){
	laptop.innerHTML = '';
	mobile.innerHTML = navElement;
}
else{
	laptop.innerHTML = navElement;
	mobile.innerHTML = '';
}

}

checkScreen();
window.addEventListener('resize',checkScreen());

document.querySelectorAll('[title]').forEach(el => {
      el.removeAttribute('title'); 
    });

const details = {
	color:'#6d28d9',
	bgColor:'linear-gradient(to right bottom, #101010, #17142e, #1c154c, #25116a, #340087)',
	shortname:'',
	location:'',
	mail:'',
	linkedin:'',
	github:'',
	whatsapp:'',
	instagram:'',
	image:'',
	name:'',
	title:'',
	about:'',
	experience:'Education',
	experienceFirst:'XYZ Degree',
	experienceSecond:'XYZ University',
	experienceThird:'CGPA',
	experienceFourth:'Year',
	experienceFifth:'ABC Degree',
	experienceSixth:'ABC University',
	experienceSeventh:'CGPA',
	experienceEighth:'Year',
	techstack:['HTML','CSS','JAVASCRIPT','ReactJS','NodeJS','MongoDB'],
	project:[
		{
			title:'Project Title',
			description:'Describe about your project with 2 or 3 lines',
			techstack:'techstacks used'
		}
	],
	ac1:'+15',
	ac2:'Certifications',
	ac3:'+5',
	ac4:'Projects',
	ac5:'+225',
	ac6:'LeetCode Problems'
}

const techstack = [{
name:'techStack1',
change:true
},{
name:'techStack2',
change:true
},{
name:'techStack3',
change:true
},{
name:'techStack4',
change:true
},{
name:'techStack5',
change:true
},{
name:'techStack6',
change:true
}
]

const BGcolor = {
	'#7c3aed':'linear-gradient(to right bottom, #101010, #17142e, #1c154c, #25116a, #340087)',
	'#dc2626':'linear-gradient(to right bottom, #101010, #271629, #4b1032, #700026, #870300)',
	'#1d4ed8':'linear-gradient(to right bottom, #101010, #17162c, #191b49, #141f67, #002387)',
	'#ea580c':'linear-gradient(to right bottom, #101010, #291929, #4e1931, #721825, #852d00)',
	'#16a34a':'linear-gradient(to right bottom, #101010, #0e2a3d, #004a5d, #006a5b, #008732)'
} 

const links = [
	{
		name:'name',
		title:'Enter your name',
		change:true
	},
	{
		name:'title',
		title:'Enter position or role',
		change:true
	},
	{
		name:'about',
		title:'let\'s describe about your self 2 or 3 lines', 
		change:true
	},
	{
		name:'shortname',
		title:'Enter nick name or shortname',
		change:true
	},
	{
		name:'mail',
		title:'Enter your mail address',
	},
	{
		name:'linkedin',
		title:'Enter username only',
	},
	{
		name:'whatsapp',
		title:'Enter whatsapp number',
	},
	{
		name:'github',
		title:'Enter facebook username',
	},
	{
		name:'instagram',
		title:'Enter instagram username',
	},
	{
		name:'experience',
		title:'Experience or Education',
		change:true
	},
	{
		name:'experienceFirst',
		title:'Degree or Company',
		change:true
	},
	{
		name:'experienceSecond',
		title:'',
		change:true
	},
	{
		name:'experienceThird',
		title:'',
		change:true
	},
	{
		name:'experienceFourth',
		title:'',
		change:true
	},
	{
		name:'experienceFifth',
		title:'Degree or Company',
		change:true
	},
	{
		name:'experienceSixth',
		title:'',
		change:true
	},
	{
		name:'experienceSeventh',
		title:'',
		change:true
	},
	{
		name:'experienceEighth',
		title:'',
		change:true
	},
	{
		name:'ac1',
		title:'',
		change:true
	},
	{
		name:'ac2',
		title:'',
		change:true
	},
	{
		name:'ac3',
		title:'',
		change:true
	},
	{
		name:'ac4',
		title:'',
		change:true
	},
	{
		name:'ac5',
		title:'',
		change:true
	},
	{
		name:'ac6',
		title:'',
		change:true
	}
];

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
});


links.forEach((link)=>{
let element = document.getElementById(link.name);
let input = document.getElementById(link.name[0].toUpperCase()+link.name.split("").slice(1).join(''));

console.log(element,input);

input.title = link.title;
input.style.display = 'none';
input.placeholder = link.title;

element.addEventListener("click",(e)=>{
	element.style.display = "none";
	input.style.display = "block";
	input.focus();
});

input.addEventListener("keydown",(e)=>{
if(e.key=='Enter'){
	e.preventDefault();
	element.style.display = "block";
	input.style.display = "none";
	details[link.name] = input.value.trim();
	if(link?.change && input.value.trim()!==''){
		element.innerHTML = input.value;
	console.log(details);
	}
	else{
		element.style.display = 'flex';
	}
}
});

})

let loc = document.getElementById('location');
let Location = document.getElementById("Location");

loc.title='';
Location.title='';
Location.style.display = 'none';

Location.onchange =function(){
details.location = Location.value.trim();
loc.innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + details.location;
}

loc.addEventListener("click",(e)=>{
	loc.style.display = "none";
	Location.style.display = "block";
	Location.focus();
});

Location.addEventListener("keydown",(e)=>{
if(e.key=='Enter'){
	loc.style.display = "flex";
	loc.style.alignItems = "center";
	Location.style.display = "none";
	console.log(details);
}
});


// color and background color
const colorOption = document.querySelector('select');
document.body.style.setProperty('--BGCOLOR',Object.entries(BGcolor)[0][1]);

colorOption.onchange = function () {
document.body.style.setProperty('--COLOR',colorOption.value);
document.body.style.setProperty('--BGCOLOR',BGcolor[colorOption.value]);
details['color']=colorOption.value;
details.bgColor = BGcolor[details.color];
}

techstack.forEach((link,index) =>
{
let element = document.getElementById(link.name);
let input = document.getElementById(link.name[0].toUpperCase()+link.name.split("").slice(1).join(''));

input.title = link.title;
input.style.display = 'none';

element.addEventListener("click",(e)=>{
	element.style.display = "none";
	input.style.display = "block";
	input.focus();
});

input.addEventListener("keydown",(e)=>{
if(e.key=='Enter'){
	element.style.display = "block";
	input.style.display = "none";
	console.log(details);
	if(link?.change && input.value.trim()!=''){
	details.techstack[index] = input.value;
		element.innerHTML = input.value;
		console.log(index);
	}
}
});
})

const addTechStack = document.getElementById('addTechStack');
const AddTechStack = document.getElementById('AddTechStack');
const scrollerInner = document.querySelector('.scroller-inner');
AddTechStack.style.display = 'none';

addTechStack.addEventListener("click",(e)=>{
	addTechStack.style.display = 'none';
	AddTechStack.style.display = 'block';
	AddTechStack.focus();
	AddTechStack.addEventListener("keydown", (e) => {
		if(e.key == 'Enter' && AddTechStack.value!=''){
			details.techstack.push(AddTechStack.value);
		const techstackObj = {
			name:'techstack' + (techstack.length + 1),
			index:techstack.length,
			change:true
		}
			techstack.push(techstackObj);
			console.log(techstackObj);
			console.log(techstack);
			console.log(details)
			const child = document.createElement('li');
			child.setAttribute('id','techStack'+techstack.length);
			child.innerHTML = AddTechStack.value;
			AddTechStack.value = '';
			const childInput = document.createElement('input');
			childInput.setAttribute('type','text');
			childInput.setAttribute('id','TechStack'+techstack.length);
			childInput.style.display = 'none';
			addTechStack.style.display = 'block';
			AddTechStack.style.display = 'none';
			scrollerInner.appendChild(child);
			scrollerInner.appendChild(childInput);

			let element = document.getElementById('techStack'+techstack.length);
			let input = document.getElementById('TechStack'+techstack.length);


			input.style.display = 'none';

			element.addEventListener("click",(e)=>{
				element.style.display = "none";
				input.style.display = "block";
				input.focus();
				input.value = details.techstack[techstackObj.index];
			});

			input.addEventListener("keydown",(e)=>{
			if(e.key=='Enter'){
				element.style.display = "block";
				input.style.display = "none";
				console.log(details);
				if(input.value.trim()!=''){
				details.techstack[techstackObj.index] = input.value;
					element.innerHTML = input.value;
					console.log(techstackObj.index);
				}
			}
			});
		}
	});
});

/* set image */

const image = document.getElementById('image');
const imageInput = document.getElementById('imageInput');

image.addEventListener('click',()=>{
	imageInput.click();
});

imageInput.addEventListener('change',(event)=>{
	const file = event.target.files[0];
	if(file){
		const reader = new FileReader();
		reader.onload = e => {
			image.style.backgroundImage = `url('${e.target.result}')`;
			details.image = e.target.result;
		};
		reader.readAsDataURL(file);
	}
});

const download = document.getElementById('download');

/* Project */

const project = document.getElementById('project');

function projectRender() {
	project.innerHTML = '';
	details.project.forEach((pro, index) => {

		const container = document.createElement('div');

		// Title
		const title = document.createElement('h5');
		title.textContent = pro.title;
		title.style.display = 'block';
		const titleInput = document.createElement('input');
		titleInput.setAttribute('type', 'text');
		titleInput.style.display = 'none';
		container.appendChild(title);
		container.appendChild(titleInput);
		title.addEventListener("click", () => ProjectClick(index, 'title', title, titleInput));

		// Description
		const description = document.createElement('p');
		description.textContent = pro.description;
		const desInput = document.createElement('input');
		desInput.setAttribute('type', 'text');
		desInput.style.display = 'none';
		container.appendChild(description);
		container.appendChild(desInput);
		description.addEventListener("click", () => ProjectClick(index, 'description', description, desInput));

		// Techstack
		const techstack = document.createElement('div');
		techstack.textContent = pro.techstack;
		const techstackInput = document.createElement('input');
		techstackInput.setAttribute('type', 'text');
		techstackInput.style.display = 'none';
		container.appendChild(techstack);
		container.appendChild(techstackInput);
		techstack.addEventListener("click", () => ProjectClick(index, 'techstack', techstack, techstackInput));

		project.appendChild(container);
	});
}

projectRender();

function ProjectClick(index, field, displayEl, inputEl) {
	displayEl.style.display = 'none';
	inputEl.style.display = 'block';
	inputEl.value = displayEl.textContent;
	inputEl.focus();

	inputEl.addEventListener('keydown', function handleKeyDown(e) {
		if (e.key === 'Enter') {
			if (inputEl.value !== '') {
				details.project[index][field] = inputEl.value;
			}
			displayEl.style.display = 'block';
			inputEl.style.display = 'none';
			projectRender();
			// Clean up to prevent multiple listeners
			inputEl.removeEventListener('keydown', handleKeyDown);
		}
	});
}

const addProject = document.getElementById('addProject');

addProject.addEventListener("click",()=>{
	details.project.push({
			title:'Project Title',
			description:'Describe about your project with 2 or 3 lines',
			techstack:'python, javascript'
	});
	projectRender();
  	project.scrollLeft = project.scrollWidth;
})

/* download */

const downloadBtn = document.getElementById('download');

downloadBtn.addEventListener('click', () => {
  const htmlContent = `
  	<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/c45442c024.js" crossorigin="anonymous"></script>
  <link rel="icon"  href="${details.image}">
  <link rel="stylesheet" type="text/css" href="style.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <title>${details.name.charAt(0).toUpperCase() + details.name.slice(1).toLowerCase()} Profile Card</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Baloo+Bhaijaan+2:wght@400..800&family=Bruno+Ace&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Dosis:wght@200..800&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Kalam:wght@300;400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Silkscreen:wght@400;700&display=swap');

:root{
  --COLOR : ${details.color};
  --BGCOLOR: ${details.bgColor};
}
a{
  all: unset;
}
.hidden{
  visibility: hidden;
}
.flex{
  display: flex;
  gap: 1.5rem;
}
input{
  color: white !important;
  font-weight: 500;
}
@keyframes rotateBG {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
#mobNav{
  display: none;
}
h5{
  margin: 0;
  padding: 0;
}
html{
  width: 100vw;
  overflow-x: hidden;
}
main{
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  padding-bottom: 2rem;
}
input{
  color: var(--COLOR);
  background-color: transparent;
  outline: none;
  border-radius: .5rem;
  padding: 0 4px;
  font-size: 1rem;
}
input:focus{
  outline: 1px solid var(--COLOR);
}
li,ul{
  list-style:none;
}
html{
  background-color: black;
}
body{
  backdrop-filter: blur(1rem);
  max-width: 100vw;
  min-height: 100vh;
  margin:0;
  padding:0;
  color:var(--COLOR);
  font-family:sans-serif;
  background-image: var(--BGCOLOR);
  overflow-x: hidden;
}
header{
  margin: 0;
  background-color:rgb(0,0,0,.2);
  padding:0rem 2rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  overflow: hidden;
  }
  #topLine{
    margin: 0;
    padding: 0;
    height: 1px;
    width: 100vw;
    background-image: linear-gradient(to right,var(--COLOR),transparent);
  }
  #download{
    color: white;
    cursor: pointer;
    padding: 2px;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: .2s ease-in-out;
  }
#shortname{
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-style:italic;
  font-family:sans-serif;
  font-weight: bold;
  letter-spacing:1px;
  opacity:100%;
}
#shortname::first-letter{
  color:white;
}
#About{
  text-transform: none;
  width: 25vw;
  height: 8rem;
}
#experience{
  text-transform: uppercase;
}
#Mail,#Location,#Linkedin,#Facebook,#Whatsapp,#Instagram,#Shortname,#Name,#Title,#Experience,#AddTechStack{
height: 2rem;
margin-left: 1rem;
}
#links{
  margin: 0;
  padding: 0;
  display:flex;
  align-items: center;
  justify-content: space-between;
}
.linkss{
  font-family: Poppins;
  font-weight: 400;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor:pointer;
  font-weight:600;
  letter-spacing:1px;
}
.linkss:hover{
  color: white;
}
#ColorSelection{
  padding:.5rem 2rem 0 0;
  display:flex;
  justify-content:end;
  align-items: center;
  gap: .5rem;
  font-weight: 600;
}
select{
  background-color:black;
  color:var(--COLOR);
  padding:4px;
  border:none;
  border-radius:.5rem;
}
select:focus{
  outline:2px solid var(--COLOR);
}
option{
  background-color:black;
  font-weight:600;
  font-family:sans-serif;
}
#leftTop{
  padding:2rem;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  gap:1rem;
}
#imageOuter{
  position: relative;
  padding: 0;
  margin: 0;
  width: min-content;
  height: min-content;
   border-radius:50%;
   border: .5rem;
}
#imageOuter::before{
  content: '';
  position: absolute;
  border-radius: 50%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  background-image: linear-gradient(to bottom right,white,var(--COLOR));
  animation: 5s rotateBG linear infinite;
}
#image{
  cursor: pointer;
  background-image: url('assets/setImage.jpg');
  background-size: cover;
  background-position: center;
  height: 15rem;
  width: 15rem;
  margin: 2px;
  border: 4px solid rgb(0, 0, 0,0.8);
  border-radius:50%;
}
#imageInput{
  display: none;
}
#content{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
h1{
  font-family: Audiowide;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  max-width: 25vw;
  overflow: hidden;
  text-overflow: ellipsis;
}
#title{
  color:white;
  font-weight: 400;
  text-transform:uppercase;
}
#about{
  font-family: Poppins;
  font-size: .8rem;
  width: 100%;
  opacity: 75%;
  letter-spacing: 1px;
  line-padding: 1px;
  font-weight: 400;
  color: white;
}
#left{
  width: 50vw;
}
#right{
  padding: 1rem;
  width: 50vw;
}
#education{
  position: relative;
  background-image: var(--BGCOLOR);
  margin: 0 1rem 0 2rem;
  padding: 1rem;
  border-radius: 1rem;
}
#edu > h2{
  margin: 0;
  padding: 0;
}
#eduBox{
  padding-left: 2rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
}

#eduBox > div > h4 {
    font-family: Poppins;
  font-size: .9rem;
}
#eduBox > div > span {
    font-family: Poppins;
  font-size: .8rem;
}

#education::before{
  content: '';
  position: absolute;
  opacity: 50%;
  top: -1px;
  left: -1px;
  right: -2px;
  bottom: -2px;
  border-radius: 1rem;
  z-index: -1;
  background-image: linear-gradient(to bottom right,white,var(--COLOR));
}

#Masters,#Bachelors{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  height: min-content;
}
#Masters::before,#Bachelors::before{
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  content: '';
  position: absolute;
  height: 80%;
  width: 1px;
  background-image: linear-gradient(to bottom, white,transparent);
  transform: translateX(-1.2rem) translateY(1.2rem);
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

#Masters h4, #Masters h5,#Bachelors h4, #Bachelors h5{
  color: lightgray;
  font-weight: 400;
}

#mcap,#bcap{
  color: transparent;
  font-size: .8rem;
  border: 1px solid white;
  position: absolute;
  transform: translateX(-1.65rem) translateY(1.3rem) rotate(45deg);
}

#addTechStack,#addProject{
  margin-left: 2.5rem;
  background-color: white;
  color: var(--COLOR);
}
#addTechStack::first-letter , #addProject::first-letter{
  font-size: 1rem;
}

#project {
  margin: 0 1rem 1rem 0;
  padding: .5rem;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  mask: linear-gradient(90deg,transparent,white 2%,white 97%,transparent);
  scroll-behavior: smooth;
}
#project::-webkit-scrollbar{
  display: none;
}

#project > div {
  margin: 0;
  padding: 0;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: .5rem;
  padding: 1rem;
  border-radius: 1rem;
  max-height: min-content;
  height: 100%;
  min-width: 25%;
  max-width: 50%;
  background-image: var(--BGCOLOR);
  scroll-snap-align: start; /* Optional: For snap scrolling */
}

/* Gradient border using ::before */
#project > div::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -2px;
  bottom: -2px;
  border-radius: 1.1rem;
  background-image: linear-gradient(to bottom right, white, var(--COLOR));
  z-index: -1;
  opacity: 0.5;
}
#project > div > h5{
  font-family: Poppins;
  font-weight: normal;
  color: whitesmoke;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
#project > div > p{
  margin: 0;
  padding: 0;
  font-family: Poppins;
  line-height: 1rem;
  font-size: .7rem;
  color: rgb(255, 255, 255, 0.5);
}
#project > div > div {
  text-align: center;
  font-size: .8rem;
  color: whitesmoke;
  opacity: .8;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: start; 
  font-family: sans-serif;
  font-weight: 500;
}

#rightBottom{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content:center;
  align-items: center;
  transform: translateX(-1rem);
}

#rightBottom > span {
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  height: 7rem;
  width: 7rem;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 50%;
  z-index: 4;
  background-color: black;
  background: transparent;
  backdrop-filter: blur(1rem);
  overflow: hidden; 
}


#rightBottom span:nth-child(1) {
  transform: translateX(1rem);
}

#rightBottom span:nth-child(3) {
  transform: translateX(-1rem);
}

#rightBottom > span > p {
  margin:0;
  padding: 0;
  font-size: .8rem;
  text-align: center;
  font-family: Poppins;
}

#rightBottom > span > h3{
  margin: 0;
  padding: 0;
}

#rightBottom > span > input{
  display: none;
  width: 4rem;
}

span > h3{
  font-weight: 300;
}

/* Scroller effect */


.scroll-item > li{
  text-transform: uppercase;
  font-size: .8rem;
  width: max-content;
  padding: .4rem;
  font-weight: 700;
  color: white;
  background-color: var(--COLOR);
  border-radius: .4rem;
  opacity: 80%;
}
.scroller{
  max-width: 100%;
  overflow: hidden;
  margin-right: 1rem;
}
.scroller-inner{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.scroller[data-animated="true"]{
  overflow: hidden;
  mask: linear-gradient(90deg,transparent,white,white,transparent);
}
.scroller[data-animated="true"] .scroller-inner{
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll 20s linear infinite;
}
@keyframes scroll {
  to{
    transform: translate(calc(-32.5% - 0.1rem));
  }
}

@media (min-width: 800px) {
  
  #download:hover{
    border : 2px solid white;
  }

  ::-webkit-scrollbar {
  width: 6px; 
  height: 4px; 
}

::-webkit-scrollbar-track {
  background: transparent; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--COLOR);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: white;
}
}

@media (max-width: 800px) {
  .hiddenLink{
    display: none;
  }
  main{
    flex-direction: column;
  }
  #left{
    width: 100%;
  }
  h1{
      max-width: 50vw;
  }
  #About{
    width: 50vw;
  }
  #right{
    width: 100%;
  }
  #eduBox{
    padding-bottom: 1rem;
  }
   #project {
    margin: 0;
    padding: .2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  mask: linear-gradient(90deg,transparent,white 0%,white 100%,transparent);
}
#project > div {
  width: 40%;
}
}

@media (max-width: 500px) {
    .hiddenLink{
    display: block;
  }
  body{
    overflow-x: hidden;
  }
  header{
    padding: .5rem;
  }
  #shortname{
    font-size: 1rem;
  }
  #links{
  margin: 0 2rem;
  padding: 1rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.linkss{
  color: whitesmoke;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor:pointer;
  font-weight:600;
  letter-spacing:1px;
  padding-bottom: 2rem;
}
#download{
  grid-column: 1 / 3; 
  text-align: center; 
  margin: 2rem;
}
  main{
    flex-direction: column;
  }
  #leftTop{
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
  }
  #left{
    width: 100%;
  }
  h1{
      max-width: 95vw;
      text-align: center;
  }
  #About{
    width: 90vw;
  }
  #right{
    width: 100%;
  }
  #content{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  #eduBox{
    flex-direction: column;
    padding-bottom: 1rem;
  }
  #education{
    margin: 0 1rem 0 1rem;
  }
  #addProject,#addTechStack{
    margin: 1rem 0 0 0;
  }
  .scroller-inner{
    margin: 0 0 1rem 0;
    padding: 0 2rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  }
  #project {
    margin: auto;
    padding: .2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  mask: linear-gradient(90deg,transparent,white 0%,white 100%,transparent);
}
#project > div {
  min-width: 80%;
  max-width: 80%;
}
  #bottomLine{
    margin: 0;
    padding: 0;
    height: 1px;
    width: 100vw;
    background-image: linear-gradient(to right, transparent, var(--COLOR));
  }
nav{
  display: none;
}
#mobNav{
  display: block;
  width: 100vw;
  overflow-x: hidden;
  max-width: 100vw;
}
#rightBottom{
  padding: 2rem 0;
}
#rightBottom > span {
  height: 5rem;
  width: 5rem;
}
}
  </style>
</head>
<body>
  <header>
    <h2 id="shortname">${details.shortname}</h2>
    <nav id="lapNav">
      <li id="links">
      <ul id="location" class="linkss"><i class="fas fa-map-marker-alt"></i> ${details.location}</ul>
      <ul id="mail" class="linkss"><a href="mailto:${details.mail}"><i class="fas fa-envelope"></i> <span class="hiddenLink">Mail</span></a></ul>
      <ul id="linkedin" class="linkss"><a href="https://www.linkedin.com/in/${details.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> <span class="hiddenLink">Linkedin</span></a></ul>
      <ul id="github" class="linkss"><a href="https://github.com/${details.github}" target="_blank"><i class="fab fa-github"></i> <span class="hiddenLink">Github</span></a></ul>
      <ul id="whatsapp" class="linkss"><a href="https://wa.me/${details.whatsapp}?text=Hello%20${details.name}" target="_blank"><i class="fab fa-whatsapp"></i> <span class="hiddenLink">Whatsapp</span></a></ul>
      <ul id="instagram" class="linkss"><a href="https://instagram.com/${details.instagram}/" target="_blank"><i class="fa-brands fa-instagram"></i> <span class="hiddenLink">Instagram</span></a></ul>
      </li>
    </nav>
  </header>

  <div id="topLine"></div>
  
  <main>
    <div id="left">
      <section id="leftTop">
        <div id="imageOuter">
          <div id="image" style="background-image: url('${details.image}');"></div>
        </div>
        <span id="content">
          <h1 id="name">${details.name}</h1> 
          <h3 id="title">${details.title}</h3>
          <p id="about">${details.about}</p>
        </span>
      </section>

      <article id="education">
        <div id="edu">
          <h2 id="experience">${details.experience}</h2>
          <article id="eduBox">
            <div id="Masters">
              <i id="mcap" class="fa-solid fa-diamond"></i>
              <h3 id="experienceFirst">${details.experienceFirst}</h3> 
              <h4 id="experienceSecond">${details.experienceSecond}</h4>
              <span class="flex"> 
                <h5 id="experienceThird">${details.experienceThird}</h5>
                <h5 id="experienceFourth"><strong>${details.experienceFourth}</strong></h5>
              </span>
            </div>
            <div id="Bachelors">
              <i id="bcap" class="fa-solid fa-diamond"></i>
              <h3 id="experienceFifth">${details.experienceFifth}</h3>
              <h4 id="experienceSixth">${details.experienceSixth}</h4>
              <span class="flex"> 
                <h5 id="experienceSeventh">${details.experienceSeventh}</h5>
                <h5 id="experienceEighth"><strong>${details.experienceEighth}</strong></h5>
              </span>
            </div>
          </article>
        </div>
      </article>
    </div>

    <div id="right">
      <h2>TECH STACK</h2>
      <div class="scroller">
        <ul class="scroll-item scroller-inner">
  		 ${details.techstack.map((tech) => `
          <li>
            ${tech}
          </li>
        `).join('')}
  		 ${details.techstack.map((tech) => `
          <li>
            ${tech}
          </li>
        `).join('')}
  		 ${details.techstack.map((tech) => `
          <li>
            ${tech}
          </li>
        `).join('')}
        </ul>
      </div>

      <h2>PROJECTS</h2>
      <div id="project">
        ${details.project.map((pro) => `
          <div>
            <h5>${pro.title}</h5>
            <p>${pro.description}</p>
            <div>${pro.techstack}</div>
          </div>
        `).join('')}
      </div>

      <h2>ACHIEVEMENTS</h2>
      <div id="rightBottom">
        <span>
          <h3 id="ac1">${details.ac1}</h3> <input id="Ac1" type="text" name="">
          <p id="ac2">${details.ac2}</p> <input id="Ac2" type="text" name="">
        </span>
        <span>
          <h3 id="ac3">${details.ac3}</h3> <input id="Ac3" type="text" name="">
          <p id="ac4">${details.ac4}</p> <input id="Ac4" type="text" name="">
        </span>
        <span>
          <h3 id="ac5">${details.ac5}</h3> <input id="Ac5" type="text" name="">
          <p id="ac6">${details.ac6}</p> <input id="Ac6" type="text" name="">
        </span>
      </div>
    </div>
  </main>
   
  <div id="bottomLine"></div>

  <nav id="mobNav">
    <li id="links">
      <ul id="location" class="linkss"><i class="fas fa-map-marker-alt"></i> ${details.location}</ul>
      <ul id="mail" class="linkss"><a href="mailto:${details.mail}"><i class="fas fa-envelope"></i> <span class="hiddenLink">Mail</span></a></ul>
      <ul id="linkedin" class="linkss"><a href="https://www.linkedin.com/in/${details.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> <span class="hiddenLink">Linkedin</span></a></ul>
      <ul id="github" class="linkss"><a href="https://github.com/${details.github}" target="_blank"><i class="fab fa-github"></i> <span class="hiddenLink">Github</span></a></ul>
      <ul id="whatsapp" class="linkss"><a href="https://wa.me/${details.whatsapp}?text=Hello%20${details.name}" target="_blank"><i class="fab fa-whatsapp"></i> <span class="hiddenLink">Whatsapp</span></a></ul>
      <ul id="instagram" class="linkss"><a href="https://instagram.com/${details.instagram}/" target="_blank"><i class="fa-brands fa-instagram"></i> <span class="hiddenLink">Instagram</span></a></ul>
    </li>
  </nav>

  <script>
	// Scrolling effect
	const scrollers = document.querySelectorAll(".scroller");
	if (scrollers.length > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	  addAnimation();
	}
	function addAnimation() {
	  scrollers.forEach(scroller => {
	    scroller.setAttribute("data-animated", true);

	    const scrollerInner = scroller.querySelector('.scroller-inner');
	    const scrollerContent = Array.from(scrollerInner.children);

	    scrollerContent.forEach(item => {
	      const duplicatedItem = item.cloneNode(true);
	      duplicatedItem.setAttribute('aria-hidden', true);
	      scrollerInner.appendChild(duplicatedItem);
	    });
	  });
	}
  </script>
</body>
</html>

  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = details.name +'_profile_card.html';
  a.click();
});
