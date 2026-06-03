import './style.css'

const themeToggleBtn = document.getElementById('theme-toggle')

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
  })
}