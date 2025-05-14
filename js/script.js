document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for all tabbed sections
    const allTabs = document.querySelectorAll('.tab');
    
    allTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Find the parent tabs container
            const tabsContainer = tab.closest('.tabs');
            // Find the associated tab content container
            const tabContentContainer = tabsContainer.nextElementSibling;
            // Get the tab id
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs in this container
            tabsContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            // Remove active class from all tab panes in this content container
            tabContentContainer.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            // Add active class to corresponding tab content
            tabContentContainer.querySelector('#' + tabId).classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Demo form submission (simulated)
    const submitBtn = document.querySelector('.tab-pane#application .btn-primary');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            // In a real implementation, this would collect form data and submit to the backend
            alert('Application submitted! In a real implementation, this would process your data and show the AI-generated credit score.');
            
            // Find the score tab and trigger a click on it
            const demoTabs = document.querySelector('#demo .tabs');
            const scoreTab = demoTabs.querySelector('[data-tab="score"]');
            scoreTab.click();
        });
    }
});