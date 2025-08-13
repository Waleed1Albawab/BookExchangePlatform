// التعامل مع فورم التسجيل
const registerForm = document.getElementById('registerForm');
const registerResult = document.getElementById('registerResult');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;

  const res = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email })
  });

  const data = await res.json();
  registerResult.textContent = JSON.stringify(data);
});

// التعامل مع فورم تسجيل الدخول
const loginForm = document.getElementById('loginForm');
const loginResult = document.getElementById('loginResult');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;

  const res = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  const data = await res.json();
  loginResult.textContent = JSON.stringify(data);
});

// التعامل مع فورم إضافة كتاب جديد
const addBookForm = document.getElementById('addBookForm');
const addBookResult = document.getElementById('addBookResult');

addBookForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;

  const res = await fetch('http://localhost:3000/addBook', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author })
  });

  const data = await res.json();
  addBookResult.textContent = JSON.stringify(data);
});
