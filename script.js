function addProjectCards(projectCards) {
    // Get the div container.
    const projectContainer = document.getElementById('project-container');
  
    // Iterate over the array of JSON objects and create a card for each project.
    projectCards.forEach((project) => {
      // Create a new div element for the card.
      const card = document.createElement('div');
      card.classList.add('projectCard');
  
      const container = document.createElement('div');
      // Create an image element for the card.
      const banner = document.createElement('img');
      banner.src = project.banner;
      banner.alt = project.name;

      card.appendChild(banner);

      

      // Create a title element for the card.
      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = project.name;
      container.appendChild(title);

      // Create an image element for the card.
      const image = document.createElement('img');
      image.src = project.image;
      image.alt = project.name;
      container.appendChild(image);
  
      // Create a title element for the card.
      const centerContainer = document.createElement('div');
      centerContainer.classList.add('center-container');
      container.appendChild(centerContainer);

      // Create a button element for the card.
      const button = document.createElement('span');
      button.classList.add('projectView');
  
      const projectDescContainer = document.createElement('span');
      
      const projectDesc = document.createElement('span');
      projectDesc.textContent = project.decription;

      const linkContainer = document.createElement('a');
      linkContainer.href = project.url;
      linkContainer.target = "_blank";
      const linkIcon = document.createElement('img');
      linkIcon.src = "assets/icons/open_link_icon.svg";
      linkContainer.appendChild(linkIcon);
      projectDescContainer.appendChild(projectDesc);
      projectDescContainer.appendChild(linkContainer);


      button.appendChild(projectDescContainer);
      card.appendChild(button);

      card.appendChild(container);
      // Append the card to the div container.
      projectContainer.appendChild(card);
    });
  }
  
  // Get the array of JSON objects.
  const projectCards = [
    {
      id: 1,
      name: 'Poke Quiz',
      image: "https://play-lh.googleusercontent.com/8ksJpJfdPD9PSG6_5MH03WLTggjEVGPig1naU8ozn5aN22u3NoW2VjgiBD1fSFhXXg=w240-h480-rw",
      banner: 'assets/project-icons/poke_quiz_banner.png',
      url: 'https://play.google.com/store/apps/details?id=com.manshal79.quizapp',
      decription : "Pokemon Anime based Quiz Game with Beutiful UI"
    },
    {
      id: 3,
      name: 'BCA Practical Programs',
      image: 'https://play-lh.googleusercontent.com/eger09haE-Ppv4t4IfvQTV0VEId5VLLS2BZ004UTCvDGm67lp-dlbIgju6NjMgpAPA=w240-h480-rw',
      banner: 'https://play-lh.googleusercontent.com/tylb9WxEu6i-PNemHifw7Bhm9pS4qYVzq7qdAh2Yv2sod3REbPRA8H18olLDikOKGlY=w416-h235-rw',
      url: 'https://play.google.com/store/apps/details?id=com.surajrathod.bcaprogram&pcampaignid=web_share',
      decription : "Study app for BCA students, Whether they need a program solution or want to revise them. Get all at one place"
    },
    {
      id: 2,
      name: 'Mann Sign: Online Store',
      image: 'assets/project-icons/mann-sign-logo.png',
      banner: 'assets/project-icons/mann-sign-banner.png',
      url: 'https://play.google.com/store/apps/details?id=com.surajmanshal.mannsign&hl=en',
      decription: "The Mann Sign App is an online ordering system for verity of posters. Whether you need posters for advertising, promoting an event, or just decorating your space."
    },
    
    
    
  ];
  
  // Add the project cards to the div container.
  addProjectCards(projectCards);

  // Get the container element where you want to add the social media content
const container = document.getElementById("social-media-container");

const socialMediaData = [
  {
      platform: "LinkedIn",
      iconSrc: "assets/icons/linkedin-logo.png",
      profileUrl: "https://www.linkedin.com/in/manshalkhatri/",
      name: "Manshal Khatri"
  },
  {
      platform: "GitHub",
      iconSrc: "assets/icons/github_logo.svg",
      profileUrl: "https://github.com/Manshal-Git",
      name: "Manshal-Git"
  },
  {
      platform: "Email",
      iconSrc: "assets/icons/gmail_icon_(2020).webp",
      profileUrl: "mailto:manshalkhatri51+portfolio@gmail.com",
      name: "manshalkhatri51@gmail.com"
  }
];


// Loop through the array and create elements for each JSON object
socialMediaData.forEach(item => {
  // Create a div element for each social media platform
  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.className = "social-media";

  // Create an image element
  const img = document.createElement("img");
  img.src = item.iconSrc;
  img.alt = item.platform;

  // Create a span element containing a link
  const span = document.createElement("span");
  const link = document.createElement("a");
  link.href = item.profileUrl;
  link.textContent = item.name;
  span.appendChild(link);

  // Append the image and span to the social media div
  socialMediaDiv.appendChild(img);
  socialMediaDiv.appendChild(span);

  // Append the social media div to the container
  container.appendChild(socialMediaDiv);
});

let navBar = document.getElementById("nav");
let main = document.getElementById("main");
let menu = document.getElementById("menuIcon");
let menuActive = false;
menu.addEventListener("click", () => {
  if(menuActive){
    activate(navBar);
    // activate(main);
  }else{
    deactivate(navBar);
    // deactivate(main);
  }
  menuActive = !menuActive;
});

menu.addEventListener("touchend", () => {
  if(!menuActive){
    activate(navBar);
    // activateMain(false);
  }else{
    deactivate(navBar);
    // deactivate(main);
    // activateMain(true);
  }
  menuActive = !menuActive;
});

function activateMain(b){
  // main.classList.toggle("passive",b);
  if(b){
    main.classList.remove("passive");
  }else{
    main.classList.add("passive");
  }
}

function activate(ele){
  ele.classList.add("hiddenNav");
    ele.classList.remove("activeNav");
}
function deactivate(ele){
  ele.classList.remove("hiddenNav");
    ele.classList.add("activeNav");
}