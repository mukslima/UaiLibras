const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = question.querySelector('i');

  question.addEventListener('click', () => {
    const isOpen = question.classList.contains('active');

    // Fecha todas
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
      q.querySelector('i').classList.remove('fa-minus');
      q.querySelector('i').classList.add('fa-plus');
    });

    // Abre se não estiver aberta
    if (!isOpen) {
      answer.style.display = 'block';
      question.classList.add('active');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  });
});
