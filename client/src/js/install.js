const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent from automatically showing the prompt
    event.preventDefault();
        // Remove the hidden class from the button.
        butInstall.classList.toggle('hidden', false)
    // Show the prompt to the user when they click a button or perform some other action
    const installButton = document.getElementById('install-button');
    installButton.addEventListener('click', () => {
      event.prompt();
      // Wait for the user to respond to the prompt
      event.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Accepted');
        } else {
          console.log('Dismissed');
        }
      });
    });
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
  });
