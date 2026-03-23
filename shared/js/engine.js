import OL_CONFIG from './config.js';
import OL_CALCS from './calculators.js';

// Home Page Grid Logic
export const initHome = () => {
    const grid = document.getElementById('category-grid');
    if(!grid) return;
    OL_CONFIG.categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `
            <div class="cat-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p>${cat.tools.length} Tools</p>
            <a href="/${cat.id}" class="btn">Explore</a>
        `;
        grid.appendChild(card);
    });
};

// Universal Tool UI Loader
export const loadToolUI = (toolId) => {
    const container = document.getElementById('tool-container');
    if(!container) return;
    
    // Automatic Form Generation based on Tool
    container.innerHTML = `
        <div class="tool-ui-card">
            <h2>${toolId.toUpperCase().replace('-', ' ')}</h2>
            <div id="inputs-area"></div>
            <button onclick="runCalculation('${toolId}')" class="main-btn">Calculate Now</button>
            <div id="final-result" class="res-box">Result will show here</div>
        </div>
    `;
    console.log("🚀 Tool Loaded: " + toolId);
};

document.addEventListener('DOMContentLoaded', initHome);
