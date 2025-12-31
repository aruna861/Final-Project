
/**
 * Updates the price displayed on the product card based on the selected option.
 * * @param {string} selectId - The ID of the <select> element (e.g., 'storageOption1').
 * @param {string} priceDisplayId - The ID of the <p> element displaying the price (e.g., 'priceDisplay1').
 */
function updatePrice(selectId, priceDisplayId) {
    // 1. Get the select element
    const selectElement = document.getElementById(selectId);
    
    // 2. Get the currently selected option element
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    // 3. Get the element where the price is displayed
    const priceDisplayElement = document.getElementById(priceDisplayId);
    
    // 4. Check if a valid option was selected and if the price element exists
    if (selectedOption && priceDisplayElement) {
        
        // 5. Get the price from the custom 'data-price' attribute
        const newPrice = selectedOption.getAttribute('data-price');
        
        // 6. Check if the price is available (i.e., not the default "Select Storage" option)
        if (newPrice) {
            
            // Format the price with commas (Indian/Sri Lankan Rupees format: 418,000.00)
            const formattedPrice = parseFloat(newPrice).toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            // 7. Update the text content of the price display element
            priceDisplayElement.textContent = `Rs. ${formattedPrice}`;
            
        } else {
            // Optional: If a range is preferred when no specific option is selected
            // priceDisplayElement.textContent = 'Rs. 418,000.00 – Rs. 475,000.00';
            // We'll leave it as the single price, or you can revert to the range.
        }
    }
}

// Optional: You might want to call the function on page load if you want 
// to ensure the price field updates from the default selection:
// document.addEventListener('DOMContentLoaded', () => {
//     updatePrice('storageOption1', 'priceDisplay1');
// });
    function toggleMenu() {
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active');
    }