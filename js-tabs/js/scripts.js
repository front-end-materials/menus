const myButton = document.querySelector("#tabButton");
const myNav = document.querySelector("nav");

myButton.addEventListener("click", toggleMenu);

const sections = [sectionOne, sectionTwo, sectionThree, sectionFour];
const tabs = [triggerOne, triggerTwo, triggerThree, triggerFour];

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
  tabs.forEach( sec => sec.classList.add("inactive") );
  sections.forEach( sec => sec.classList.remove("show") );
}
