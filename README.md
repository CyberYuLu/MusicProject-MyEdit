# What is Clusters？
Clusters is Jeff Ventrella’s browser-based swarm/particle simulation. It models simple local rules (species, forces, sensors) that produce rich emergent motion and visually expressive patterns. Demo and original documentation: https://ventrella.com/Clusters/intro.html

# What did I do？
In this fork I explore sound-driven behavior. Using the browser audio library Meyda, the page listens to the microphone and extracts real-time features. I currently map RMS loudness (0–1) to a small random impulse added to each particle’s velocity each frame (with friction), so louder sound or music makes the swarm move faster/jitter more. In short, the microphone controls the clusters’ movement. 
<img width="800" height="412" alt="unnamed" src="https://github.com/user-attachments/assets/a1da5dd3-e484-4d03-9fc2-98de58f52d9f" />
