// Dashboard Configuration - Easy to customize!
const dashboardConfig = {
    projectName: "Website Redesign Project",
    clientName: "Colt McCoy Steakhouse",
    overallProgress: 65,
    startDate: "2024-07-01",
    expectedCompletion: "2024-08-15",
    totalBudget: 15000,
    spentBudget: 9750
};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    updateProjectInfo();
    updateLastModified();
    calculateDaysRemaining();
    calculateBudgetRemaining();
});

// Update project and client information
function updateProjectInfo() {
    document.getElementById('project-name').textContent = dashboardConfig.projectName;
    document.querySelector('.client-name').textContent = `Client: ${dashboardConfig.clientName}`;
}

// Update last modified timestamp
function updateLastModified() {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('last-updated-date').textContent = formatted;
}

// Calculate days remaining
function calculateDaysRemaining() {
    const today = new Date();
    const endDate = new Date(dashboardConfig.expectedCompletion);
    const timeDiff = endDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const daysElement = document.querySelector('.timeline-item:last-child .value.highlight');
    if (daysElement && daysDiff > 0) {
        daysElement.textContent = `${daysDiff} days`;
    }
}

// Calculate budget remaining
function calculateBudgetRemaining() {
    const remaining = dashboardConfig.totalBudget - dashboardConfig.spentBudget;
    const remainingElement = document.querySelector('.budget-item:last-child .value.highlight');
    if (remainingElement) {
        remainingElement.textContent = `$${remaining.toLocaleString()}`;
    }
}

// Export for easy customization
window.dashboardConfig = dashboardConfig;