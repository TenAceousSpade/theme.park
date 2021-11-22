
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>   
   _____      __  __    _________     
  / ___/___  / /_/ /_  / ____/ (_)  __
  \__ \/ _ \/ __/ __ \/ /_  / / / |/_/
 ___/ /  __/ /_/ / / / __/ / / />  <
/____/\___/\__/_/ /_/_/   /_/_/_/|_|  
                                      </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
