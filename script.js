document.getElementById('audio').addEventListener('play', function() {
  document.getElementById('video').pause();
});


document.getElementById('video').addEventListener('play', function() {
  document.getElementById('audio').pause();
});


function kirimSurvei() {
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const fasilitas = document.querySelector('input[name="fasilitas"]:checked').value;
  const saran = document.getElementById('saran').value;

  const formData = {
    nama: nama,
    nim: nim,
    fasilitas: fasilitas,
    saran: saran
  };

  console.log(formData);

  alert(`Nama: ${nama}\nNIM: ${nim}\nPenilaian Fasilitas: ${fasilitas}\nSaran: ${saran}`);
}
