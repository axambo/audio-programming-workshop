# Checklist

- Download ```code/d7/``` from the link provided in the chat window of the course.
- Alternatively, download it directly from the repository: [https://github.com/axambo/audio-programming-workshop](https://github.com/axambo/audio-programming-workshop)
- Resources about responsive design:
    - [HTML Responsive Web Design](https://www.w3schools.com/html/html_responsive.asp)
- How to test it on your mobile phone?
    - Option 1
        - Use Toggle Device Toolbar in Chrome DevTools to open the UI that enables you to simulate a mobile viewport ([Simulate Mobile Devices with Device Mode in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/device-mode/)). 
    - Option 2
        - Find what is **your IP address**.  
            - In Mac: Locate and open Terminal from Applications->Utilities->Terminal. At the Terminal Prompt, type ``ifconfig`` and press Enter.
            - In PC: Locate and open cmd from the Windows taskbar. Type ipconfig /all and press Enter. Look for Physical Address.
        - Launch ``01-responsive-design/index.html`` using ``Go Live`` in the Visual Studio Code editor.
        - Make sure that both mobile phone and computer are connected to the same network.
        - Get access from your mobile phone to the address ``http://127.0.0.1:5500`` but replacing ``127.0.0.1`` with your IP address e.g. ``http://192.168.1.2:5500``. Magic!