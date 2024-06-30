// document.getElementById('productName').addEventListener('input', updateProductDetails);
document.getElementById('logoInput').addEventListener('change', updateLogoPreview);
  document.getElementById('productName').addEventListener('input', updateProductDetails);
document.getElementById('productDescription').addEventListener('input', updateProductDetails);
document.getElementById('listPrice').addEventListener('input', updateProductDetails);
document.getElementById('discountPercentage').addEventListener('input', updateProductDetails);
document.getElementById('gstRate').addEventListener('input', updateProductDetails);
document.getElementById('shippingCharges').addEventListener('input', updateProductDetails);
document.getElementById('netPrice').addEventListener('input', updateProductDetails);
// document.getElementById('productImage').addEventListener('change', updateProductImage);

function updateProductDetails() {
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const listPrice = parseFloat(document.getElementById('listPrice').value) || 0;
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value) || 0;
    const discountedPrice = listPrice - (listPrice * (discountPercentage / 100));
    var discountAmount = (listPrice * discountPercentage) / 100;
    document.getElementById('netPrice').value = discountedPrice.toFixed(2);

    document.getElementById('previewName').innerText = productName;
    document.getElementById('previewDescription').innerText = productDescription;
    document.getElementById('previewPrice').innerText = listPrice.toFixed(2);
    document.getElementById('previewDiscountedPrice').innerText = discountedPrice.toFixed(2);
}


function updateLogoPreview(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('logoPreview').src = e.target.result;
            document.getElementById('previewImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}


document.getElementById('back-button').addEventListener('click', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Determine the next page based on the current page
    let backPage;
    if (currentPage.includes('page3.html')) {
        backPage = 'page2.html';
    } else if (currentPage.includes('page2.html')) {
        backPage = 'page2.html'; // Or you can navigate to another page
    } else {
        backPage = 'page2.html'; // Default to page 1 if current page is not recognized
    }

    // Navigate to the next page
    window.location.href = backPage;
});
document.getElementById('next-button').addEventListener('click', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Determine the next page based on the current page
    let nextPage;
    if (currentPage.includes('page3.html')) {
        nextPage = 'page4.html';
    } else if (currentPage.includes('page4.html')) {
        nextPage = 'page4.html'; // Or you can navigate to another page
    } else {
        nextPage = 'page4.html'; // Default to page 1 if current page is not recognized
    }

    // Navigate to the next page
    window.location.href = nextPage;
});






