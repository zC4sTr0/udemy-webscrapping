var classesAccordion = document.getElementsByClassName(
  "ud-accordion-panel-title"
);

for (indexClass in classesAccordion) {
  console.log("[ ] - " + classesAccordion[indexClass]?.children[0]?.innerText);
}
