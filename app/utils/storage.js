function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}