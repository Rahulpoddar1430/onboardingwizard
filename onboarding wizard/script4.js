document.getElementById('storeForm').addEventListener('input', updatePreview);
document.getElementById('logoInput').addEventListener('change', updateLogoPreview);
document.getElementById('faviconInput').addEventListener('change', updateFaviconPreview);
document.getElementById('supportDetails').addEventListener('change', toggleSupportDetails);

function updatePreview() {
    const storeName = document.getElementById('storeName').value;
    const storeTitle = document.getElementById('storeTitle').value;
    const supportEmail = document.getElementById('supportEmail').value;
    const supportPhone = document.getElementById('supportPhone').value;

    document.getElementById('previewStoreName').textContent = storeName;
    document.getElementById('previewStoreTitle').textContent = storeTitle;

    if (document.getElementById('supportDetails').checked) {
        document.getElementById('previewSupportEmail').textContent = `📧 ${supportEmail}`;
        document.getElementById('previewSupportPhone').textContent = `📞 ${supportPhone}`;
    } else {
        document.getElementById('previewSupportEmail').textContent = '';
        document.getElementById('previewSupportPhone').textContent = '';
    }
}

function updateLogoPreview(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('logoPreview').src = e.target.result;
            document.getElementById('previewLogo').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function updateFaviconPreview(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('faviconPreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function toggleSupportDetails() {
    const supportDetailsFields = document.getElementById('supportDetailsFields');
    if (document.getElementById('supportDetails').checked) {
        supportDetailsFields.style.display = 'block';
    } else {
        supportDetailsFields.style.display = 'none';
    }
    updatePreview();
}

function review() {
    alert('Review button clicked!');
    // Implement additional review functionality here
}

function finish() {
    alert('Finish button clicked!');
    // Implement additional finish functionality here
}



document.getElementById('back-button').addEventListener('click', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Determine the next page based on the current page
    let backPage;
    if (currentPage.includes('page4.html')) {
        backPage = 'page3.html';
    } else if (currentPage.includes('page2.html')) {
        backPage = 'page3.html'; // Or you can navigate to another page
    } else {
        backPage = 'page3.html'; // Default to page 1 if current page is not recognized
    }

    // Navigate to the next page
    window.location.href = backPage;
});
document.getElementById('next-button').addEventListener('click', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Determine the next page based on the current page
    let nextPage;
    if (currentPage.includes('page4.html')) {
        nextPage = 'page5.html';
    } else if (currentPage.includes('page4.html')) {
        nextPage = 'page5.html'; // Or you can navigate to another page
    } else {
        nextPage = 'page5.html'; // Default to page 1 if current page is not recognized
    }

    // Navigate to the next page
    window.location.href = nextPage;
});