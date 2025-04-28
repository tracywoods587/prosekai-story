const stories = [
    {
        title: "Petualangan di Hutan",
        image: "assets/images/story1.jpg",
        description: "Cerita tentang perjalanan magis melalui hutan kuno."
    },
    {
        title: "Kota yang Hilang",
        image: "assets/images/story2.jpg",
        description: "Misteri peradaban kuno yang terlupakan."
    }
];

function loadStories() {
    const container = document.getElementById('stories-container');
    
    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <img src="${story.image}" alt="${story.title}">
            <h2>${story.title}</h2>
            <p>${story.description}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadStories);