    // 모달 열기
document.getElementById("mic").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
  
  // 모달 닫기
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });

 
 
 // 모달 외부 클릭 시 닫기
 window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  });
  