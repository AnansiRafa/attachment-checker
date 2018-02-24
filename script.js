console.log("script loaded")

window.addEventListener( 'load', function() {
  let sendButton1 = document.getElementById('send1')
  let sendButton2 = document.getElementById('send2')
  let attachButton = document.getElementById('attach-button');
  let textArea = document.getElementById('textArea')

  console.log("window loaded");

  textArea.addEventListener('change', function () {
    console.dir(textArea);
  })

  attachButton.addEventListener('click', function() {
    console.dir(attachButton);
  });

  sendButton1.addEventListener('click', function() {
    if ((textArea.value.includes("attach") || textArea.value.includes("Attach")) && attachButton.files.length == 0) {
      attachButton.style.border = "1px solid red";
      confirm("Looks like you said you're attaching something but didn't actually attach it. Don't be that guy. Send anyway? (you will be reviled for this)");
    }});

    sendButton2.addEventListener('click', function() {
      if ((textArea.value.includes("attach") || textArea.value.includes("Attach")) && attachButton.files.length == 0) {
        attachButton.style.border = "1px solid red";
        confirm("Looks like you said you're attaching something but didn't actually attach it. Don't be that guy. Send anyway? (you will be reviled for this)");
      }});




    });
