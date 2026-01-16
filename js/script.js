// Menunggu seluruh elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Ambil elemen tombol berdasarkan ID yang kita buat di HTML
    const btn = document.getElementById('submitBtn');

    btn.addEventListener('click', function() {
        // 1. Ambil nilai dari setiap input
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const gender = genderElement ? genderElement.value : "Tidak dipilih";
        const message = document.getElementById('message').value;

        // 2. Validasi: Jika ada yang kosong, tampilkan peringatan
        if (!name || !birthdate || !message) {
            alert("Harap isi semua kolom nama, tanggal lahir, dan pesan!");
            return; 
        }

        // 3. Ambil elemen displayArea di sebelah kanan
        const displayArea = document.getElementById('displayArea');

        // 4. Masukkan data ke dalam kotak hasil
        displayArea.innerHTML = `
            <div class="p-4 bg-white border-l-4 border-blue-500 shadow-md rounded-r-md">
                <h4 class="font-bold text-blue-600 mb-3 border-b pb-1">Data Terkirim:</h4>
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

        // Opsional: Jika ingin form kosong kembali setelah submit, aktifkan baris di bawah:
        // document.getElementById('contactForm').reset();
    });
});
