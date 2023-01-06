// copy link tooltip 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// copy link action
const copyBtn = document.querySelector(".copy-btn")
copyBtn.addEventListener('click', (i) => {
　const shortUrlContent = document.querySelector('.short-url').innerText
  const textarea = document.createElement('textarea')
  textarea.value = shortUrlContent
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
})
