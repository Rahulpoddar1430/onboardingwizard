
function goToPage2() {
    const productType = document.getElementById('productType');
    const productTypeError = document.getElementById('productTypeError');
    const category = document.getElementById('category');
    const categoryError = document.getElementById('categoryError');
    const subCategory = document.getElementById('subCategory');
    const subCategoryError = document.getElementById('subCategoryError');
    
    let valid = true;
    
    if (productType.value.trim() === '') {
        productType.classList.add('error');
        productTypeError.style.display = 'block';
        valid = false;
    } else {
        productType.classList.remove('error');
        productTypeError.style.display = 'none';
    }
    
    if (category.value.trim() === '') {
        category.classList.add('error');
        categoryError.style.display = 'block';
        valid = false;
    } else {
        category.classList.remove('error');
        categoryError.style.display = 'none';
    }
    
    if (subCategory.value.trim() === '') {
        subCategory.classList.add('error');
        subCategoryError.style.display = 'block';
        valid = false;
    } else {
        subCategory.classList.remove('error');
        subCategoryError.style.display = 'none';
    }
    
    if (valid) {
        window.location.href = 'page3.html';
    }
}

document.getElementById('back-button').addEventListener('click', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Determine the next page based on the current page
    let backPage;
    if (currentPage.includes('page2.html')) {
        backPage = 'index.html';
    } else if (currentPage.includes('page1.html')) {
        backPage = 'index.html'; // Or you can navigate to another page
    } else {
        backPage = 'index.html'; // Default to page 1 if current page is not recognized
    }

    // Navigate to the next page
    window.location.href = backPage;
});


