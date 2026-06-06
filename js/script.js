// 1. Fungsi untuk langsung membuka WhatsApp (Digunakan di tombol produk & tombol custom)
function wa(pesan) {
    window.open(
        "https://wa.me/6283142758042?text=" + encodeURIComponent(pesan),
        "_blank"
    );
}

// 2. Fungsi untuk memunculkan/menyembunyikan tombol saat kartu produk diklik
function toggleTombol(cardElemen) {
    // Bersihkan class 'active' dari kartu lain agar hanya 1 tombol terbuka dalam satu waktu
    document.querySelectorAll('.card').forEach(card => {
        if (card !== cardElemen) {
            card.classList.remove('active');
        }
    });
    
    // Tambah atau hapus class 'active' pada kartu yang sedang di-klik
    cardElemen.classList.toggle('active');
}   

// 3. Fungsi untuk membuka dan menutup Accordion FAQ
function toggleFaq(elementTujuan) {
    // Ambil element pembungkus utamanya (.faq-item)
    const faqItem = elementTujuan.parentElement;
    
    // Bersihkan faq lain yang sedang terbuka (opsional, agar hanya 1 faq terbuka sekaligus)
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active-faq');
        }
    });

    // Tambah atau hapus class 'active-faq' pada faq yang diklik
    faqItem.classList.toggle('active-faq');
}