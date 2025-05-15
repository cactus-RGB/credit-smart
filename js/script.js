document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle with animation
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Add scrolled class to navbar on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Set up specific navigation links
    const requestDemoLinks = document.querySelectorAll('a.btn-primary');
    requestDemoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const demoSection = document.querySelector('.demo-link');
            if (demoSection) {
                window.scrollTo({
                    top: demoSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Set up hero button links
    const getStartedBtn = document.querySelector('.hero-buttons a.btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const demoSection = document.querySelector('.demo-link');
            if (demoSection) {
                window.scrollTo({
                    top: demoSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    const learnMoreBtn = document.querySelector('.hero-buttons a.btn-outline');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const timelineSection = document.querySelector('#timeline');
            if (timelineSection) {
                window.scrollTo({
                    top: timelineSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    };

    // Add missing features section
    addFeaturesSection();

    // Add animation to statistics
    animateStatistics();
});

// Function to add features section
function addFeaturesSection() {
    // Check if features section already exists
    if (document.getElementById('features')) {
        // Features section already exists in HTML, so we don't need to create it dynamically
        return;
    }

    // Only create features section if it doesn't exist
    const featuresSection = document.createElement('section');
    featuresSection.id = 'features';
    featuresSection.className = 'features';

    // Create features content
    featuresSection.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>Key Features</h2>
                <p>Advanced AI-powered tools to transform your lending process</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>AI-Powered Scoring</h3>
                    <p>Our machine learning algorithms analyze thousands of data points to provide accurate credit scores.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Real-Time Processing</h3>
                    <p>Get instant credit decisions in milliseconds, not days or hours.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Fraud Detection</h3>
                    <p>Advanced anomaly detection identifies potential fraud before it impacts your business.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Predictive Analytics</h3>
                    <p>Forecast future performance and identify growth opportunities with our analytics dashboard.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h3>Secure Infrastructure</h3>
                    <p>Bank-grade security ensures your data stays protected at all times.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <h3>Compliance Ready</h3>
                    <p>Built with regulatory compliance in mind, including detailed audit trails and model explanations.</p>
                </div>
            </div>
        </div>
    `;

    // Insert features section after hero and before timeline
    const heroSection = document.querySelector('.hero');
    const timelineSection = document.querySelector('.timeline');
    
    if (heroSection && timelineSection) {
        heroSection.parentNode.insertBefore(featuresSection, timelineSection);
    }

    // Add CSS for features section if it doesn't already exist in styles.css
    if (!document.querySelector('style.features-styles')) {
        const style = document.createElement('style');
        style.className = 'features-styles';
        style.textContent = `
            .features {
                padding: 6rem 0;
                background-color: #fff;
            }
            
            .features-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
            }
            
            .feature-card {
                background: white;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
                padding: 2rem;
                text-align: center;
                transition: var(--transition);
            }
            
            .feature-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
            }
            
            .feature-icon {
                width: 70px;
                height: 70px;
                background: var(--gradient);
                border-radius: 50%;
                margin: 0 auto 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.8rem;
            }
            
            .feature-card h3 {
                margin-bottom: 1rem;
            }
            
            .feature-card p {
                color: var(--text);
                margin-bottom: 0;
            }
            
            @media (max-width: 992px) {
                .features-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            
            @media (max-width: 576px) {
                .features-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
}

// Function to animate statistics
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds
    
    // Intersection Observer to trigger animation when stats are in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const targetValue = parseFloat(statElement.textContent);
                let unit = statElement.textContent.replace(/[0-9.]/g, '');
                let startValue = 0;
                
                // Handle special case for time (seconds)
                if (unit === 's') {
                    startValue = 0;
                }
                
                const incrementValue = (targetValue - startValue) / (animationDuration / 16);
                let currentValue = startValue;
                
                const updateCounter = () => {
                    if (currentValue < targetValue) {
                        currentValue += incrementValue;
                        
                        if (currentValue > targetValue) {
                            currentValue = targetValue;
                        }
                        
                        // Format the number based on the unit
                        if (unit === 's') {
                            statElement.textContent = currentValue.toFixed(1) + unit;
                        } else if (unit === '%') {
                            statElement.textContent = Math.round(currentValue) + unit;
                        } else {
                            statElement.textContent = Math.round(currentValue) + unit;
                        }
                        
                        requestAnimationFrame(updateCounter);
                    }
                };
                
                updateCounter();
                observer.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}