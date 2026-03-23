import OL_CONFIG from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('category-grid');
    if(!grid) return;

    OL_CONFIG.categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `
            <div class="cat-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p>${cat.tools.length} Tools Available</p>
            <a href="/${cat.id}" class="btn">Explore</a>
        `;
        grid.appendChild(card);
    });
    console.log("🚀 OpenLov Engine Active");
});

// Tool Page Logic
export const loadTool = (toolId) => {
    const container = document.getElementById('tool-container');
    if(!container) return;
    
    // Yahan hum Tool ka Input form inject karenge
    console.log("Loading Tool Logic for: " + toolId);
};
