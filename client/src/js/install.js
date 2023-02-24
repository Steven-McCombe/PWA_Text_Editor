const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent from automatically showing the prompt
    event.preventDefault();
    
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

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
