function selectCard(button) {
    const buttons = document.querySelectorAll('.choose-button');
    buttons.forEach(btn => {
        btn.classList.remove('checked');
        btn.textContent = 'Choose';
    });
    button.classList.add('checked');
    button.textContent = '';  // Clear the text content to display the check mark
}

function goToNextPage() {
    const selectedButton = document.querySelector('.choose-button.checked');
    if (selectedButton) {
        window.location.href = 'nextpage.html'; // Replace with your actual next page URL
    } else {
        alert('Please select an option before proceeding.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.choose-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('checked'));
            button.classList.add('checked');
        });
    });
});
document.getElementById('next-button').addEventListener('click', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Determine the next page based on the current page
    let nextPage;
    if (currentPage.includes('page1.html')) {
        nextPage = 'page2.html';
    } else if (currentPage.includes('page2.html')) {
        nextPage = 'page2.html'; // Or you can navigate to another page
    } else {
        nextPage = 'page2.html'; // Default to page 1 if current page is not recognized
    }

    // Navigate to the next page
    window.location.href = nextPage;
});
