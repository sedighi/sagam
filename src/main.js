import { StoryEngine } from './storyEngine.js';

// Get Telegram WebApp object
const tg = window.Telegram.WebApp;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Notify Telegram that the Mini App is ready
  tg.ready();

  // Expand to full height
  tg.expand();

  // Initialize simple image mapping (placeholders for now)
  const imageMap = {
    'adventure_start': '🌟',
    'forest_squirrel': '🌳🐿️',
    'space_robot': '🚀🤖',
    'squirrel_happy': '🌰😊',
    'sad_moment': '😢',
    'robot_home': '🏠⭐',
    'lonely_robot': '😔',
    'chocolate_palace': '🍫🏰'
  };

  const appElement = document.getElementById('app');

  // Define render function
  const render = (node) => {
    // Clear previous content
    appElement.innerHTML = '';

    // Create Card Container
    const card = document.createElement('div');
    card.className = 'story-card';

    // Image/Icon Area
    const imgDiv = document.createElement('div');
    imgDiv.className = 'story-image';
    // Use emoji as placeholder image
    imgDiv.textContent = imageMap[node.image] || '✨';
    card.appendChild(imgDiv);

    // Text Area
    const textP = document.createElement('p');
    textP.className = 'story-text';
    textP.textContent = node.text;
    card.appendChild(textP);

    // Choices Container
    const choicesDiv = document.createElement('div');
    choicesDiv.className = 'choices-container';

    node.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.text;

      // Handle click
      btn.addEventListener('click', () => {
        // Haptic feedback if available on Telegram
        if (tg.HapticFeedback) {
          tg.HapticFeedback.impactOccurred('light');
        }
        storyEngine.makeChoice(choice.nextNodeId);
      });

      choicesDiv.appendChild(btn);
    });

    card.appendChild(choicesDiv);
    appElement.appendChild(card);

    // Reset MainButton just in case
    tg.MainButton.hide();
  };

  // Create Engine instance
  const storyEngine = new StoryEngine(render);

  // Start the story
  storyEngine.start();
});
