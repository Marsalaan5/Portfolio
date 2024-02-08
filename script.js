
var typed = new Typed('#element', {
  strings: ['Front-End Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

let scroll = document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
})
})
  
  document.getElementById('skill-button').addEventListener('click', function() {
    var Skills = document.getElementById('Skills');
    Skills.scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('contact-button').addEventListener('click', function() {
    var Contact = document.getElementById('contact');
    Contact.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('project-button').addEventListener('click', function() {
    var Project = document.getElementById('projects');
    Project.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('skill-button').addEventListener('click', function() {
    var Skills = document.getElementById('Skills');
    Skills.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('Home').addEventListener('click', function() {
    var homeButton = document.getElementById('home-button');
    homeButton.scrollIntoView({ behavior: 'smooth' });
  });




