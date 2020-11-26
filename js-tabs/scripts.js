const myButton = document.querySelector("#tabButton");
const myNav = document.querySelector("nav");

myButton.addEventListener("click", toggleMenu);

const sections = [sectionOne, sectionTwo, sectionThree, sectionFour];
const tabs = [trigger01, trigger02, trigger03, trigger04];

function toggleMenu() {
  // console.log("toggled menu button");
  myNav.classList.toggle("hide");
}

trigger01.addEventListener("click", ()=> showSection(sectionOne, trigger01));
trigger02.addEventListener("click", ()=> showSection(sectionTwo, trigger02));
trigger03.addEventListener("click", ()=> showSection(sectionThree, trigger03));
trigger04.addEventListener("click", ()=> showSection(sectionFour, trigger04));

function showSection(section, tab) {
  // console.log(section, tab);
  hideAllSections();
  section.classList.add("show");
  tab.classList.remove("inactive");
  toggleMenu();
  event.preventDefault();
  // Event.preventDefault();
}

function hideAllSections() {
  tabs.forEach( sec => sec.classList.add("inactive") );
  sections.forEach( sec => sec.classList.remove("show") );
}
