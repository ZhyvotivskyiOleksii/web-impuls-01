document.addEventListener("DOMContentLoaded", function() {
    var h1 = document.querySelector('h1');
    var options = {
      root: null,  // относительно вьюпорта
      rootMargin: '0px',
      threshold: 0.1  // Значение порога для срабатывания observer
    };
  
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Применяем анимацию, когда элемент входит в область видимости
          h1.style.webkitAnimation = 'anim 1.2s ease-out forwards';
          h1.style.animation = 'anim 1.2s ease-out forwards';
        } else {
          // Сбрасываем анимацию, когда элемент выходит из области видимости
          h1.style.webkitAnimation = 'none';
          h1.style.animation = 'none';
        }
      });
    }
  
    var observer = new IntersectionObserver(handleIntersect, options);
  
    observer.observe(h1);
  });
  