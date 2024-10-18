// Primeira parte: Navbar
// Configurando botão switch
const switchToggle = document.querySelector('.switch-toggle');
const icons = switchToggle.querySelectorAll('.material-symbols-outlined');

switchToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')

  icons.forEach(span => {
    span.classList.toggle('switch-actived')
  })
})

//Funcionalidade aleatória dos emojis

const emojis = ['🤣', '😎', '😍', '😉', '🤡', '😄', '😁', '😉', '🤪'];
function handleShowEmoji() {
  const index = Math.floor(Math.random() * emojis.length);
  const emojiSort = emojis[index];

  document.querySelector('.emoji').innerHTML = emojiSort;
}

handleShowEmoji();


