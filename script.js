
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
	shortName:'',
	location:'',
	mail:'',
	linkedin:'',
	github:'',
	whatsapp:'',
	instagram:'',
	name:'',
	title:'',
	about:'',
	experience:'Education',
	techstack:['HTML','CSS','JAVASCRIPT','ReactJS','NodeJS','MongoDB'],
	project:[
		{
			title:'Project Title',
			description:'Describe about your project with 2 or 3 lines',
			techstack:'python, javascript'
		}
	]
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
		title:'Enter your position or role',
		change:true
	},
	{
		name:'about',
		title:'let\'s describe about your self', 
		change:true
	},
	{
		name:'shortname',
		title:'Enter your nick name or shortname',
		change:true
	},
	{
		name:'mail',
		title:'Enter your mail address',
	},
	{
		name:'linkedin',
		title:'linkedin.com/in/username/  Enter username only',
	},
	{
		name:'whatsapp',
		title:'Enter your whatsapp number',
	},
	{
		name:'github',
		title:'Enter your facebook username',
	},
	{
		name:'instagram',
		title:'Enter your instagram username',
	},
	{
		name:'experience',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceFirst',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceSecond',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceThird',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceFourth',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceFifth',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceSixth',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceSeventh',
		title:'Enter the title Experience or Education',
		change:true
	},
	{
		name:'experienceEighth',
		title:'Enter the title Experience or Education',
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

input.title = link.title;
input.style.display = 'none';

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
	console.log(details);
	if(link?.change && input.value.trim()!==''){
	details[link.name] = input.value.trim();
		element.innerHTML = input.value;
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

/* project */


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
