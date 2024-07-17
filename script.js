

// Fungsi untuk menampilkan daftar pertandingan
function displayMatches() {
    const matchList = document.getElementById('match-list');
    matches.forEach(match => {
        const li = document.createElement('li');
        li.textContent = `${match.teamA} ${match.scoreA} - ${match.scoreB} ${match.teamB}`;
        matchList.appendChild(li);
    });
}

// Fungsi untuk menampilkan skor langsung
function displayLiveScores() {
    const liveScores = document.getElementById('live-scores');
    matches.forEach(match => {
        const div = document.createElement('div');
        div.textContent = `${match.teamA} ${match.scoreA} - ${match.scoreB} ${match.teamB}`;
        liveScores.appendChild(div);
    });
}

function changeContent() {
    document.getElementById('center-content').innerHTML = 1`
        <p>Konten telah diubah!</p>
        <button onclick="changeContentBack()">Ubah Kembali</button>
    `;
}

function changeContentBack() {
    document.getElementById('center-content').innerHTML = `
        <p>Ini adalah konten di tengah.</p>
        <button onclick="changeContent()">Ubah Konten</button>
    `;
}


// Menjalankan fungsi sesuai halaman
if (document.getElementById('match-list')) {
    displayMatches();
}

if (document.getElementById('live-scores')) {
    displayLiveScores();
}
