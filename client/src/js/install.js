const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
  window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  // console.log(promptEvent)
  if (!promptEvent) {
      return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});
  
// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Display a confirmation message to the user
  console.log('Jate has been installed on your device!');
  window.deferredPrompt = null
  });
