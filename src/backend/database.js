// استدعاء مكتبة sqlite3
const sqlite3 = require('sqlite3').verbose();

// فتح أو إنشاء قاعدة بيانات باسم books.db
const db = new sqlite3.Database('./src/backend/books.db', (err) => {
    if (err) {
        console.error('فشل في فتح قاعدة البيانات:', err.message);
    } else {
        console.log('تم فتح قاعدة البيانات بنجاح.');
    }
});

// إنشاء جدول المستخدمين إذا لم يكن موجودًا
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  -- معرف المستخدم تلقائي
        username TEXT NOT NULL UNIQUE,         -- اسم المستخدم لا يمكن تكراره
        email TEXT NOT NULL                    -- البريد الإلكتروني
    )
`, (err) => {
    if (err) {
        console.error('فشل في إنشاء جدول المستخدمين:', err.message);
    } else {
        console.log('تم إنشاء جدول المستخدمين بنجاح أو وجد مسبقًا.');
    }
});

// تصدير قاعدة البيانات للاستخدام في الملفات الأخرى
module.exports = db;
