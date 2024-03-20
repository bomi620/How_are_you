document.getElementById("btn").addEventListener("click", function() {
    var audio = document.getElementById("audio");
    
    var audioGroups = {
      group1: {
        colors: ["#6A7C93"],
        files: [
        "folder/negative/answer7.mp3",
        "folder/negative/answer8.mp3",
        "folder/negative/answer9.mp3",
        "folder/negative/answer14.mp3",
         "folder/negative/answer18.mp3",
         "folder/negative/answer20.mp3",
         "folder/negative/answer21.mp3",
         "folder/negative/answer34.mp3",
         "folder/negative/answer47.mp3",
         "folder/negative/answer48.mp3",
         "folder/negative/answer51.mp3",
         "folder/negative/answer52.mp3",
         "folder/negative/answer66.mp3",
         "folder/negative/answer68.mp3",
         "folder/negative/answer71.mp3",
         "folder/negative/answer78.mp3",
         "folder/negative/answer79.mp3",
         "folder/negative/answer80.mp3",
         "folder/negative/answer87.mp3",
         "folder/negative/answer96.mp3",
         "folder/negative/answer97.mp3"
        ]
      },
      group2: {
        colors: ["#FCDB69"],
        files: [
            "folder/positive/answer4.mp3",
            "folder/positive/answer10.mp3",
            "folder/positive/answer11.mp3",
            "folder/positive/answer12.mp3",
            "folder/positive/answer15.mp3",
            "folder/positive/answer16.mp3",
            "folder/positive/answer22.mp3",
            "folder/positive/answer24.mp3",
            "folder/positive/answer25.mp3",
            "folder/positive/answer26.mp3",
            "folder/positive/answer27.mp3",
            "folder/positive/answer29.mp3",
            "folder/positive/answer36.mp3",
            "folder/positive/answer37.mp3",
            "folder/positive/answer45.mp3",
            "folder/positive/answer49.mp3",
            "folder/positive/answer50.mp3",
            "folder/positive/answer58.mp3",
            "folder/positive/answer63.mp3",
            "folder/positive/answer69.mp3",
            "folder/positive/answer70.mp3",
            "folder/positive/answer72.mp3",
            "folder/positive/answer84.mp3",
            "folder/positive/answer86.mp3",
            "folder/positive/answer90.mp3",
            "folder/positive/answer92.mp3",
            "folder/positive/answer93.mp3",
            "folder/positive/answer94.mp3",
            "folder/positive/answer95.mp3"
          
        ]
      },
      group3: {
        colors: ["#DDDDDD"],
        files: [
"folder/neutral/answer1.mp3",
"folder/neutral/answer2.mp3",
"folder/neutral/answer3.mp3",
"folder/neutral/answer5.mp3",
"folder/neutral/answer6.mp3", 
"folder/neutral/answer13.mp3", 
"folder/neutral/answer17.mp3",
"folder/neutral/answer19.mp3",
"folder/neutral/answer23.mp3",
"folder/neutral/answer28.mp3", 
"folder/neutral/answer30.mp3",
"folder/neutral/answer31.mp3",
"folder/neutral/answer32.mp3",
"folder/neutral/answer33.mp3",
"folder/neutral/answer35.mp3", 
"folder/neutral/answer38.mp3", 
"folder/neutral/answer39.mp3", 
"folder/neutral/answer40.mp3", 
"folder/neutral/answer41.mp3", 
         "folder/neutral/answer42.mp3", 
         "folder/neutral/answer43.mp3", 
         "folder/neutral/answer44.mp3", 
         "folder/neutral/answer46.mp3", 
         "folder/neutral/answer53.mp3", 
         "folder/neutral/answer54.mp3",
         "folder/neutral/answer55.mp3", 
         "folder/neutral/answer56.mp3", 
         "folder/neutral/answer57.mp3", 
         "folder/neutral/answer59.mp3",
         "folder/neutral/answer60.mp3", 
         "folder/neutral/answer61.mp3", 
         "folder/neutral/answer62.mp3", 
         "folder/neutral/answer64.mp3", 
           "folder/neutral/answer65.mp3", 
           "folder/neutral/answer67.mp3", 
           "folder/neutral/answer73.mp3",
           " folder/neutral/answer74.mp3", 
           "folder/neutral/answer75.mp3 ",
           "folder/neutral/answer76.mp3", 
           "folder/neutral/answer77.mp3", 
           "folder/neutral/answer81.mp3", 
           "folder/neutral/answer82.mp3", 
           "folder/neutral/answer83.mp3",
           "folder/neutral/answer85.mp3", 
           "folder/neutral/answer88.mp3", 
           "folder/neutral/answer89.mp3", 
           "folder/neutral/answer91.mp3", 
           "folder/neutral/answer98.mp3"

            
        ]
      }
    };
    
    var groupKeys = Object.keys(audioGroups);
    var randomGroupKey = groupKeys[Math.floor(Math.random() * groupKeys.length)];
    var randomGroup = audioGroups[randomGroupKey];
    
    var randomAudio = randomGroup.files[Math.floor(Math.random() * randomGroup.files.length)];
    
    audio.src = randomAudio;
    audio.play();
    
    var randomColor = randomGroup.colors[Math.floor(Math.random() * randomGroup.colors.length)];
    
    var randomSize = (Math.floor(Math.random() * 100) + 50) * 4; // 현재 크기의 2배
    var randomX = Math.floor(Math.random() * (window.innerWidth - randomSize));
    var randomY = Math.floor(Math.random() * (window.innerHeight - randomSize));
  
    // 새로운 SVG 요소를 생성합니다.
    var newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newSvg.setAttribute("width", randomSize);
    newSvg.setAttribute("height", randomSize);
    newSvg.setAttribute("viewBox", "0 0 655 229");
    newSvg.style.position = "absolute"; // 절대 위치 설정
    newSvg.style.left = randomX + "px";
    newSvg.style.top = randomY + "px";
  
    // 새로운 path를 생성합니다.
    var newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPath.setAttribute("d", "M40 0C17.9086 0 0 17.9086 0 40V167.31C0 189.401 17.9086 207.31 40 207.31H588.161L633.369 228.778L624.719 206.089C642.05 201.703 654.875 186.004 654.875 167.31V40C654.875 17.9086 636.966 0 614.875 0H40Z");
    newPath.setAttribute("fill", randomColor);
  
    // SVG에 path를 추가합니다.
    newSvg.appendChild(newPath);
  
    // 새로운 SVG를 문서에 추가합니다.
    document.body.appendChild(newSvg);
  });
  