// استدعاء مكتبة supertest لاختبار الـ HTTP endpoints
const request = require('supertest');

// استدعاء التطبيق (السيرفر) الذي نريد اختبار endpoints الخاصة به
const app = require('../src/backend/server'); // تأكد من صحة مسار السيرفر

// مجموعة الاختبارات الأساسية للتطبيق
describe('Basic Functionality', () => {

  // اختبار endpoint التسجيل
  test('Register endpoint should respond', async () => {
    // إرسال طلب POST إلى /register مع بيانات مستخدم تجريبية
    const res = await request(app)
      .post('/register')
      .send({ 
        username: 'testuser',  // اسم المستخدم التجريبي
        email: 'test@example.com' // البريد الإلكتروني التجريبي
      });
    
    // التحقق أن حالة الاستجابة هي 200 (ناجحة)
    expect(res.statusCode).toBe(200);
  });

  // اختبار endpoint تسجيل الدخول
  test('Login endpoint should respond', async () => {
    // إرسال طلب POST إلى /login مع اسم المستخدم التجريبي
    const res = await request(app)
      .post('/login')
      .send({ 
        username: 'testuser' // اسم المستخدم الذي تم تسجيله مسبقاً
      });
    
    // التحقق أن حالة الاستجابة هي 200 (ناجحة)
    expect(res.statusCode).toBe(200);
  });

});
