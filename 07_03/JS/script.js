const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide")
ALERT.classList.add("hide")

function reveal(e, current){
  e.preventDefault();
  // CTA.classList.toggle("hide");
  current.innerHTML == "Book Now!"? current.innerHTML="Oops": current.innerHTML="Book Now!"

  ALERT.classList.toggle("hide");

}

// CTA.onclick = reveal;  //   removing () ensures not executing while loadking
// CTA.onclick  = console.log("button was clicked");

// CTA.addEventListener("click", reveal, false)

//assing arugments to event addEventListener
CTA.addEventListener("click",function (e){ reveal(e,this);}, false)

CTA.addEventListener("click",function(){ console.log("The button was clicked");}, false)
