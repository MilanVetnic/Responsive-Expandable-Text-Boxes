var accordion = document.querySelector('.accordion');
var items = accordion.querySelectorAll('li');
var questions = accordion.querySelectorAll('.question');

function toggleAccordion() {
  var thisItem = this.parentNode;
  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));
