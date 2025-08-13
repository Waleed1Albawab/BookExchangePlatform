// انتظار تحميل محتوى الصفحة بالكامل قبل تنفيذ أي كود
document.addEventListener("DOMContentLoaded", () => {
    // اختيار الفورمات وعرض الرسائل من الـ DOM
    const registerForm = document.getElementById("registerForm"); // فورم التسجيل
    const loginForm = document.getElementById("loginForm");       // فورم تسجيل الدخول
    const messageBox = document.getElementById("message");        // صندوق الرسائل لعرض النتائج

    // التعامل مع إرسال فورم التسجيل
    registerForm?.addEventListener("submit", async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة بشكل افتراضي

        // أخذ القيم المدخلة من المستخدم
        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;

        // إرسال البيانات إلى السيرفر باستخدام Fetch API
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }) // تحويل البيانات إلى JSON
        });

        // انتظار الرد من السيرفر وتحويله إلى JSON
        const data = await res.json();
        // عرض رسالة السيرفر في صندوق الرسائل
        messageBox.textContent = data.message;
    });

    // التعامل مع إرسال فورم تسجيل الدخول
    loginForm?.addEventListener("submit", async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة بشكل افتراضي

        // أخذ القيم المدخلة من المستخدم
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // إرسال البيانات إلى السيرفر باستخدام Fetch API
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }) // تحويل البيانات إلى JSON
        });

        // انتظار الرد من السيرفر وتحويله إلى JSON
        const data = await res.json();
        // عرض رسالة السيرفر في صندوق الرسائل
        messageBox.textContent = data.message;
    });
});
