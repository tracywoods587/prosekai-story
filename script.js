const stories = [
  {
    title: "The Secret Garden",
    image: "https://source.unsplash.com/random/600x400/?garden",
    description: "A hidden world full of magical flowers and creatures."
  },
  {
    title: "Ocean's Whisper",
    image: "https://source.unsplash.com/random/600x400/?ocean",
    description: "Discover the deep sea mysteries in this adventure."
  },
  {
    title: "Mountain Echo",
    image: "https://source.unsplash.com/random/600x400/?mountain",
    description: "Journey to the peaks where legends are born."
  }
];

function loadStories() {
  const container = document.getElementById('stories-grid');
  
  stories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <img src="${story.image}" alt="${story.title}" class="story-img">
      <div class="story-content">
        <h3 class="story-title">${story.title}</h3>
        <p class="story-desc">${story.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadStories);
