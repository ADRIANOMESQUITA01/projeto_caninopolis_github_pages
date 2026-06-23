document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.btn.primary');if(b){b.addEventListener('click',()=>{b.style.transform='scale(0.98)';setTimeout(()=>b.style.transform='',160)})}});

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playWithSound');
  const launch = document.getElementById('videoLaunch');
  const wrapper = document.getElementById('videoWrapper');
  const iframe = document.getElementById('videoCaninopolis');

  if (playButton && launch && wrapper && iframe) {
    playButton.addEventListener('click', () => {
      iframe.src = 'https://www.youtube.com/embed/19KyOqaR0KU?autoplay=1&mute=0&playsinline=1&rel=0';

      launch.classList.add('is-hidden');
      wrapper.classList.remove('is-hidden');

      wrapper.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  }
});
