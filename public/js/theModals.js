$(function (){
  $('#trig1').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Personal Website");
    $("#modalBody").html("I have created this personal website to showcase my skills as both a front-end and back-end developer.");
    $('.modal').modal();
  });

  $('#trig2').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Rock Papaer Scissors Game");
    $("#modalBody").html("A simple game based on javascript");
    $('.modal').modal();
  });

  $('#trig3').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Encoding algorithm");
    $("#modalBody").html("I created an encoding algorithm that produced cryptographic  text. The program had to transform a piece of text using specific cryptographic methods . It also had to be able to decrypt a piece of encoded text. I have spent a lot of time researching various cryptographic methods and how I could apply them to my program. My main task was to produce a unique method that could not be easily deciphered and had a high level  of security. I have studied the way modern encryption works, specifically about the two main modern encryption standards used today, DES and AES. A major setback has been trying to to come up with an encryption algorithm that was secure enough and that could also be easy to decrypt using pen and paper so that it could be verified that the encryption is working and nu producing a string of random letters.");
    $('.modal').modal();
  });

  $('#trig4').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Android App");
    $("#modalBody").html("I single handedly created an Android App that lets the user see what surrounding users are listening to. Through the use of object oriented programing languages, such as Java and C++, and the Eclipse Android SDK, I have achieved it. The specifications of the app were: to be able to play music internally, to connect to social media, to have access to the geo-location services on the phone, to be able to share information via the internet and exchange private chat messages. I have researched extensively the legal aspects of my app at the encouragement of my tutor. Due to time constraints, the amount of research and other coding issues, the app was never developed further than a rough version. I would like to develop it further in the future as a hobby project and deploy it in the app store. Also make available to the  visually impaired and blind people.");
    $('.modal').modal();
  });

  $('#trig5').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Artificial Intelligence Game");
    $("#modalBody").html("I have created an artificial intelligence game as part of a project for a module. The game was based on object oriented programing language, specifically C++, and was created using Dev C++. The specifications of the game were: single player, based on a static map, the player had to go through a maze in order to finish the game, single level game. I have researched extensively the libraries that could have been used in order for the game to work. Although the time allocated was short, I have managed to produce a working project that met all the requirements. I believe that this project could be developed further and made more aesthetically pleasing, as well as the code behind it could be improved and multiple players and levels could be added.");
    $('.modal').modal();
  });

  $('#trig7').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Sparta Global");
    $("#modalBody").html("<b>Business Skills</b> – Effective communication includes written, verbal and non-verbal. Presentation skills, stakeholder management, conflict resolution. "+ 
    "<b>HTML/CSS</b> – Best practices and Semantics, as well as Accessibility using ARIA Best specificity practices, mobile first responsive web design, CSS frameworks and an introduction to SASS and precompilers. "+
    "<b>Version control, APIs</b> – Git working collaboratively with Github, how to contribute to open source projects. Interacting with public and private APIs in both XML and JSON formats. In-depth look at the RESTful design pattern. "+
    "<b>Web Design and Information Architecture</b> – the full design process from inception and client needs, data structures, design metaphors and both low-fidelity and high-fidelity wireframing. Databases – building and querying SQL databases with MySQL, noSQL databases with MongoDB in preparation for use in a node app. "+
    "<b>Practical Agile</b> - methods of Scrum including User Stories, Acceptance Criteria, Acceptance Tests, User Stories, DOD, Burn down Charts, Road maps, Release Planning, Sprint Planning, Daily stand-ups, Retrospectives and Sprint Reviews. "+
    "<b>JavaScript</b> – including interacting with the DOM, AJAX and one page apps, jQuery, Object Oriented programming and prototypical inheritance, introduction to classes with ES6 and Babel. "+
    "<b>Node.js/React.js</b> - Server side JavaScript with Express, Socket.io and integration with MongoDB. Build custom APIs, use node modules in middleware to configure the app. Covering Redis, authentication with Passport, JWT token based authentication, testing with Mocha and Chai, and Express EJS templates for serving static files. Client side development with Javascript front-end frameworks, focusing particularly on React. Covering best practices and the single responsibility principle, using Webpack with React as well as testing with Jest. "+
    "<b>Practical Testing</b> – testing lifecycle, testing development and design, exploratory testing, web testing, performance testing and usability testing.");
    $('.modal').modal();
  });

  $('#trig8').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Pret");
    $("#modalBody").html("As a Team Leader, I was responsible for driving results across all areas of the business by implementing and maintaining new standards. I was supervising, monitoring and issuing instruction to team members. I was in charge of all  cash handling procedures in the absence of the Manager in addition to dealing with customer complaints in an effective and efficient manner. As a Barista, I was responsible for providing customers with excellent customer service and high quality hot beverages. I was responsible for driving results across coffee side of the business by implementing and maintaining new standards. I was coaching, monitoring and training  team members on the ins and outs of the coffee area. I was tasked with dealing with customer complaints in an effective and efficient manner.");
    $('.modal').modal();
  });

  $('#trig9').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("London Metropolitan University");
    $("#modalBody").html("Whilst I enjoyed developing my understanding of political and social movements and issues, I chose to focus most of my studies in tech, particularly around areas like  Object Oriented Programming and Java. Also, I have taken a module about Operating Systems which I enjoyed immensely and it is something I will be interested in pursuing further in the future.");
    $('.modal').modal();
  });

  $('#trig10').click(function (e){
    e.preventDefault();
    $("#modalHeader").html("Gh. G. Murgoci National College");
    $("#modalBody").html("In college my studies were focued mostly on Science subjects, with an accent on Maths and Computer Science. Some of the subjects I studied were Mathematics, Computer Science, Programming in C++, Physics, Chemistry, Biology, History, Geography. As a final project in Computer Science, I had to create and present a working database using Oracle SQL and Microsoft Access.");
    $('.modal').modal();
  });
});
