const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

/**
 * "قاعدة بيانات" بسيطة في الذاكرة لتخزين المستخدمين.
 * @type {Array<{username: string, password: string}>}
 */
let users = [];

/**
 * تسجيل مستخدم جديد.
 * @route POST /register
 * @param {Object} req.body - يحتوي على بيانات المستخدم الجديدة.
 * @param {string} req.body.username - اسم المستخدم.
 * @param {string} req.body.password - كلمة المرور.
 * @returns {Object} JSON يحتوي على رسالة نجاح أو خطأ.
 */
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
    }

    const exists = users.find(u => u.username === username);
    if (exists) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    users.push({ username, password });
    res.json({ message: 'User registered successfully' });
});

/**
 * تسجيل الدخول.
 * @route POST /login
 * @param {Object} req.body - يحتوي على بيانات تسجيل الدخول.
 * @param {string} req.body.username - اسم المستخدم.
 * @param {string} req.body.password - كلمة المرور.
 * @returns {Object} JSON يحتوي على رسالة نجاح أو خطأ.
 */
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
});

/**
 * تشغيل السيرفر على البورت المحدد.
 */
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
