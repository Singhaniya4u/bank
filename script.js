document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const otpForm = document.getElementById('otp-form');
    const roleSelect = document.getElementById('role');
    const mobileInput = document.getElementById('mobile');
    const otpInput = document.getElementById('otp');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const role = roleSelect.value;
        const mobile = mobileInput.value;

        // Simulate sending OTP and receiving response
        console.log(`Requesting OTP for ${role} with mobile ${mobile}`);
        
        // Show OTP form and hide login form
        loginForm.style.display = 'none';
        otpForm.style.display = 'block';
    });

    otpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const otp = otpInput.value;

        // Simulate OTP verification
        console.log(`Verifying OTP: ${otp}`);

        // Assuming OTP verification is successful
        // Redirect based on role
        const role = roleSelect.value;
        if (role === 'user') {
            window.location.href = 'dashboard.html'; // Redirect to user dashboard
        } else if (role === 'admin') {
            window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard (you may want to adjust this)
        }
    });
});
