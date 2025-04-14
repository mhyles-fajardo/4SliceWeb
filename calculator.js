document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    
    const targets = [
        { id: 'bank-amnt1', percentage: 0.4, fallback: '40%' },
        { id: 'bank-amnt2', percentage: 0.3, fallback: '30%' },
        { id: 'bank-amnt3', percentage: 0.2, fallback: '20%' },
        { id: 'bank-amnt4', percentage: 0.1, fallback: '10%' }
    ];

    amountInput.addEventListener('input', function() {
        const amountValue = parseFloat(amountInput.value);

        targets.forEach(({ id, percentage, fallback }) => {
            const element = document.getElementById(id);
            element.textContent = !isNaN(amountValue) 
                ? (amountValue * percentage).toFixed(2) 
                : fallback;
        });
    });
});
