const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
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

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the install prompt to the user
      deferredPrompt.prompt();
  
      // Wait for the user to respond to the prompt
      const choiceResult = await deferredPrompt.userChoice;
  
      // Log the user's response to the console
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
  
      // Reset the deferredPrompt variable to null
      deferredPrompt = null;
    }
});
  
// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Display a confirmation message to the user
    console.log('Jate has been installed on your device!');
  });
