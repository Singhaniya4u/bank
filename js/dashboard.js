document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/user/dashboard');
        const userData = await response.json();

        // Update the DOM with user data
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('telecomCircle').textContent = userData.telecomCircle;
        document.getElementById('telecomOperator').textContent = userData.telecomOperator;
        document.getElementById('fileReference').textContent = userData.fileReference;
        document.getElementById('fileStatus').textContent = userData.fileStatus;
        document.getElementById('balance').textContent = userData.balance;
        document.getElementById('balanceStatus').textContent = userData.balanceStatus;

        // Example: Redirect to Payments Page if balanceStatus is Processing
        if (userData.balanceStatus === 'Processing') {
            document.getElementById('moreOptionsLink').href = 'payments.html';
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});
