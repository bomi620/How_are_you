document.getElementById("btn").addEventListener("click", function() {
    var audio = document.getElementById("audio");
    
    var audioGroups = {
      group1: {
        colors: ["#6A7C93"],
        files: [
          "https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav"
        ]
      },
      group2: {
        colors: ["#FCDB69"],
        files: [
          "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
        ]
      },
      group3: {
        colors: ["#DDDDDD"],
        files: [
           "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav"
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
  