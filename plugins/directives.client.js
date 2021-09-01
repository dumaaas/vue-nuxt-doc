import Vue from 'vue';

Vue.directive("font-size", {
  inserted: (el) => {
    el.style.fontSize = 12 + 'px'
  }
})

const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        entry.target.classList.remove('before-enter')

        animateOnScrollObserver.unobserve(entry.target)
      }
    })
  }
)

Vue.directive('animate-on-scroll', {
  bind: el => {
    el.classList.add('before-enter')
    animateOnScrollObserver.observe(el)
  }
})
