const letterScreen = document.querySelector('#letter-screen');
const gardenScreen = document.querySelector('#garden-screen');
const openLetter = document.querySelector('#open-letter');
const restart = document.querySelector('#restart');

openLetter.addEventListener('click', () => {
  letterScreen.classList.add('opening');
  openLetter.disabled = true;

  window.setTimeout(() => {
    letterScreen.hidden = true;
    gardenScreen.hidden = false;
    gardenScreen.querySelector('.photo-frame').focus?.();
  }, 700);
});

restart.addEventListener('click', () => {
  gardenScreen.hidden = true;
  letterScreen.hidden = false;
  letterScreen.classList.remove('opening');
  openLetter.disabled = false;
  openLetter.focus();
});
