const myButton = document.querySelector("#tabButton");
const myNav = document.querySelector("nav");

myButton.addEventListener("click", toggleMenu);

const sections = [sectionDefault, sectionTwo, sectionThree, sectionFour];
const tabs = [triggerNone, triggerTwo, triggerThree, triggerFour];

function toggleMenu() {
  // console.log("toggled menu button");
  myNav.classList.toggle("hide");
}

triggerTwo.addEventListener("click", ()=> showSection(sectionTwo, triggerTwo));
triggerThree.addEventListener("click", ()=> showSection(sectionThree, triggerThree));
triggerFour.addEventListener("click", ()=> showSection(sectionFour, triggerFour));

function showSection(section, tab) {
  // console.log(section, tab);
  hideAllSections();
  section.classList.add("show");
  tab.classList.remove("inactive");
  toggleMenu();
  event.preventDefault();
}

function hideAllSections() {
  sections.forEach( sec => sec.classList.remove("show") );
  tabs.forEach( sec => sec.classList.add("inactive") );
}
