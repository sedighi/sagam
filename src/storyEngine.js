import { storyNodes } from './storyData.js';

/**
 * StoryEngine class
 * Manages the flow of the interactive story.
 */
export class StoryEngine {
    constructor(renderCallback) {
        this.currentNode = null;
        this.renderCallback = renderCallback; // Function to call when UI needs update
    }

    /**
     * Starts the story from the first node.
     */
    start() {
        this.currentNode = storyNodes.find(node => node.id === 1);
        this.updateUI();
    }

    /**
     * Transitions to the next node based on user choice.
     * @param {number} nextNodeId - The ID of the node to navigate to.
     */
    makeChoice(nextNodeId) {
        const nextNode = storyNodes.find(node => node.id === nextNodeId);
        if (nextNode) {
            this.currentNode = nextNode;
            this.updateUI();
        } else {
            console.error("Node not found:", nextNodeId);
        }
    }

    /**
     * Calls the render callback with current node data.
     */
    updateUI() {
        if (this.renderCallback && this.currentNode) {
            this.renderCallback(this.currentNode);
        }
    }
}
