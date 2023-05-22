chrome.contextMenus.create({
    id: 'clip',
    title: 'BoosteX',
    contexts: ['selection'] 
  });

  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
        console.log(selectionText)
        var popup = document.createElement("div");
            // Customize the popup box with your desired content and styling
            // For example:
            popup.textContent = "Selected Text: " + selectionText;
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "#ffffff";
            popup.style.padding = "10px";
            popup.style.border = "1px solid #ccc";
            popup.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
            
            // Append the popup box to the document body
            document.body.appendChild(popup);
          });

// chrome.contextMenus.create({
//     title: "Your Extension Name",
//     contexts: ["selection"],
//   });

//   chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     // Retrieve the selected text from the context menu info
//     // var selectedText = info.selectionText;
    
//     // Create a popup box element
//     var popup = document.createElement("div");
//     // Customize the popup box with your desired content and styling
//     // For example:
//     popup.textContent = "Selected Text: ";
//     popup.style.position = "fixed";
//     popup.style.top = "50%";
//     popup.style.left = "50%";
//     popup.style.transform = "translate(-50%, -50%)";
//     popup.style.backgroundColor = "#ffffff";
//     popup.style.padding = "10px";
//     popup.style.border = "1px solid #ccc";
//     popup.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    
//     // Append the popup box to the document body
//     document.body.appendChild(popup);
//   });
  