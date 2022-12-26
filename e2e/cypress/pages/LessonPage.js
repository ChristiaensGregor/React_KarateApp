class LessonPage {
  getLessonListTitle = () => cy.xpath('//*[@data-cy="lesson-list-title"]');
  getLessonCard = (index) => cy.xpath(`(//*[@data-cy="lesson-card"])[${index}]`);
}

module.exports = new LessonPage();
