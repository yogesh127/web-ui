if (!document.getElementById('local-chatbot-button')) {
  const button = document.createElement('button');
  button.id = 'local-chatbot-button';
  button.innerText = '🤖';

  Object.assign(button.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 10000,
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  });

  const iframeContainer = document.createElement('div');
  iframeContainer.id = 'chatbot-iframe-container';
  Object.assign(iframeContainer.style, {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '400px',
    height: '500px',
    zIndex: 9999,
    display: 'none',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: 'white',
    boxShadow: '0 4px 16px rgba(0,0,0,0.25)'
  });

  const iframe = document.createElement('iframe');
  iframe.src = 'http://127.0.0.1:7788/?__theme=dark';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.id = 'chatbot-iframe';

  iframe.onload = () => {
    // Give it time to load inner content
    setTimeout(() => {
      try {
        const input = iframe.contentDocument.querySelector('textarea[placeholder*="Enter your task"]');
        if (input) input.focus();
      } catch (e) {
        console.warn("Unable to access iframe contents:", e);
      }
    }, 1000);
  };

  iframeContainer.appendChild(iframe);
  document.body.appendChild(iframeContainer);

  button.addEventListener('click', () => {
    iframeContainer.style.display = (iframeContainer.style.display === 'block') ? 'none' : 'block';
  });

  document.body.appendChild(button);
}
