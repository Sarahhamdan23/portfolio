document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    }
  });
}); 