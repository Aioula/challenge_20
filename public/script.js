const names = ["Azedine", "Alice", "Bob", "Charlie", "Diana"];

document.getElementById('generate-btn').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  document.getElementById('name-display').textContent = names[randomIndex];
});
