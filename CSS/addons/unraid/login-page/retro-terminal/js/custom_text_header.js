
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>  _________       __  .__    ___________.__  .__        
 /   _____/ _____/  |_|  |__ \_   _____/|  | |__|__  ___
 \_____  \_/ __ \   __\  |  \ |    __)  |  | |  \  \/  /
 /        \  ___/|  | |   Y  \|     \   |  |_|  |>    < 
/_______  /\___  >__| |___|  /\___  /   |____/__/__/\_ \
        \/     \/          \/     \/                  \/</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
