loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const mobile = document.getElementById('mobile').value;
    const role = document.getElementById('role').value;

    const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, role })
    });

    const data = await response.json();
    if (response.status === 200) {
        alert(data.message);
        loginForm.style.display = 'none';
        otpForm.style.display = 'block';
    } else {
        alert('Error: ' + data.message);
    }
});

// OTP Verification
otpForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const mobile = document.getElementById('mobile').value;
    const otp = document.getElementById('otp').value;

    const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, otp })
    });

    const data = await response.json();
    if (response.status === 200) {
        alert(data.message);
        // Redirect based on role
        if (data.role === 'admin') {
            window.location.href = '/dashboard.html';
        } else {
            window.location.href = '/dashboard.html';
        }
    } else {
        alert('Error: ' + data.message);
    }
});
