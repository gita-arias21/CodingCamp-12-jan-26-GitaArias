
document.addEventListener('DOMContentLoaded', function() {
    
    welcomeMessage(); 

    function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! to Gitas Website.`;
}

// Placeholder for form validation function
function validateForm() { }

    // Submit Button
    const btn = document.getElementById('submitBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;
            const genderElement = document.querySelector('input[name="gender"]:checked');
            const gender = genderElement ? genderElement.value : "Tidak dipilih";
            const message = document.getElementById('message').value;

            if (!name || !birthdate || !message) {
                alert("Harap isi semua kolom nama, tanggal lahir, dan pesan!");
                return; 
            }

            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = `
                <div class="p-4 bg-white border border-gray-200 shadow-md rounded-lg">
                    <h4 class="font-bold text-gray-600 mb-3 border-b pb-1">Data Terkirim:</h4>
                    <div class="space-y-2 text-sm">
                        <p><strong>Nama:</strong> ${name}</p>
                        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
                        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                        <div class="mt-3 p-2 bg-gray-50 rounded border italic">
                            <strong>Pesan:</strong><br>
                            "${message}"
                        </div>
                    </div>
                    <p class="text-[10px] text-gray-400 mt-4 text-right">
                        Submit pada: ${new Date().toLocaleString('id-ID')}
                    </p>
                </div>
            `;
            document.getElementById('contactForm').reset();
        });
    }
});