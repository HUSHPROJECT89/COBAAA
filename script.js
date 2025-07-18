// 15 soal per mapel (bisa tambah/edit soal di sini!)
const questionsBySubject = {
  umum: [
    {question: "Binatang yang bisa hidup di air dan di darat disebut?", choices: ["Reptil", "Amfibi", "Mamalia", "Aves"], answer: 1},
    {question: "Planet terbesar di tata surya adalah?", choices: ["Mars", "Bumi", "Jupiter", "Venus"], answer: 2},
    {question: "Benua terbesar di dunia adalah?", choices: ["Afrika", "Asia", "Eropa", "Australia"], answer: 1},
    {question: "Ibukota provinsi Jawa Tengah adalah?", choices: ["Semarang", "Surakarta", "Magelang", "Salatiga"], answer: 0},
    {question: "Hari Kemerdekaan Indonesia diperingati setiap tanggal?", choices: ["17 Agustus", "10 November", "1 Juni", "21 April"], answer: 0},
    {question: "Satuan arus listrik adalah?", choices: ["Watt", "Volt", "Ohm", "Ampere"], answer: 3},
    {question: "Siapakah penemu bola lampu pijar?", choices: ["Albert Einstein", "Thomas Edison", "Isaac Newton", "Galileo Galilei"], answer: 1},
    {question: "Alat musik tradisional dari Jawa Barat adalah?", choices: ["Angklung", "Gamelan", "Sasando", "Tifa"], answer: 0},
    {question: "Sungai terpanjang di Indonesia?", choices: ["Kapuas", "Mahakam", "Citarum", "Barito"], answer: 0},
    {question: "Bahan utama membuat kaca adalah?", choices: ["Pasir", "Besi", "Kayu", "Kapur"], answer: 0},
    {question: "Pulau terkecil di Indonesia adalah?", choices: ["Samosir", "Simping", "Weh", "Bali"], answer: 1},
    {question: "Hari Sumpah Pemuda diperingati tiap tanggal?", choices: ["28 Oktober", "17 Agustus", "2 Mei", "10 November"], answer: 0},
    {question: "Organisasi ASEAN berdiri tahun?", choices: ["1965", "1967", "1970", "1980"], answer: 1},
    {question: "Pahlawan perempuan dari Aceh adalah?", choices: ["Dewi Sartika", "R.A. Kartini", "Cut Nyak Dien", "Martha Christina Tiahahu"], answer: 2},
    {question: "Ibukota Australia adalah?", choices: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2}
  ],
  matematika: [
    {question: "Hasil dari 12 x 8 adalah?", choices: ["96", "108", "104", "88"], answer: 0},
    {question: "Akar pangkat dua dari 81?", choices: ["7", "8", "9", "10"], answer: 2},
    {question: "Bilangan prima terkecil adalah?", choices: ["0", "1", "2", "3"], answer: 2},
    {question: "Rumus luas lingkaran adalah?", choices: ["πr²", "2πr", "πd", "r²"], answer: 0},
    {question: "Hasil dari 15 + 27 adalah?", choices: ["32", "37", "42", "45"], answer: 3},
    {question: "Jika x = 5, maka nilai dari 2x + 3 = ...", choices: ["8", "10", "13", "15"], answer: 2},
    {question: "Hasil 144 : 12 = ...", choices: ["10", "11", "12", "13"], answer: 2},
    {question: "Rumus keliling persegi panjang?", choices: ["2(p+l)", "p x l", "p + l", "2p x 2l"], answer: 0},
    {question: "Hasil 2³ adalah?", choices: ["6", "8", "9", "4"], answer: 1},
    {question: "Sudut siku-siku besarnya ...", choices: ["30°", "90°", "45°", "180°"], answer: 1},
    {question: "Hasil 5² + 3² adalah?", choices: ["25", "34", "35", "49"], answer: 1},
    {question: "Hasil 100 – 24 : 4 + 6 = ?", choices: ["90", "100", "110", "92"], answer: 3},
    {question: "Angka Romawi dari 50 adalah?", choices: ["X", "L", "C", "D"], answer: 1},
    {question: "Hasil 2/3 + 1/3 adalah?", choices: ["1", "2", "3", "4"], answer: 0},
    {question: "Sisi terpanjang pada segitiga siku-siku disebut ...", choices: ["Alas", "Tinggi", "Hipotenusa", "Sisi"], answer: 2}
  ],
  ipa: [
    {question: "Bagian tumbuhan tempat fotosintesis?", choices: ["Akar", "Batang", "Daun", "Bunga"], answer: 2},
    {question: "Alat ukur kuat arus listrik adalah?", choices: ["Voltmeter", "Amperemeter", "Ohmmeter", "Barometer"], answer: 1},
    {question: "Proses perubahan air jadi uap disebut?", choices: ["Kondensasi", "Presipitasi", "Evaporasi", "Transpirasi"], answer: 2},
    {question: "Hewan yang mengalami metamorfosis sempurna?", choices: ["Kupu-kupu", "Kucing", "Ayam", "Ikan"], answer: 0},
    {question: "Manusia bernafas menggunakan?", choices: ["Insang", "Paru-paru", "Trakea", "Kulit"], answer: 1},
    {question: "Benda yang ditarik magnet disebut?", choices: ["Isolator", "Konduktor", "Fermagnetik", "Nonmagnetik"], answer: 2},
    {question: "Fotosintesis membutuhkan ...", choices: ["Air, udara, cahaya", "Air, tanah, pupuk", "Udara, tanah, cahaya", "Air, udara, tanah"], answer: 0},
    {question: "Gaya yang menghambat gerak benda disebut ...", choices: ["Gaya otot", "Gaya berat", "Gaya gesek", "Gaya pegas"], answer: 2},
    {question: "Alat pernapasan pada ikan adalah ...", choices: ["Insang", "Paru-paru", "Trakea", "Spirakel"], answer: 0},
    {question: "Planet terdekat dengan matahari adalah ...", choices: ["Venus", "Merkurius", "Mars", "Bumi"], answer: 1},
    {question: "Bagian mata yang berfungsi mengatur banyak cahaya?", choices: ["Kornea", "Lensa", "Iris", "Retina"], answer: 2},
    {question: "Bagian telinga untuk menangkap getaran suara?", choices: ["Gendang telinga", "Tulang martil", "Saluran telinga", "Koklea"], answer: 0},
    {question: "Jenis tulang keras disebut ...", choices: ["Tulang rawan", "Tulang sejati", "Tulang lunak", "Tulang sendi"], answer: 1},
    {question: "Benda cair yang mudah menguap disebut ...", choices: ["Volatil", "Padat", "Gas", "Plasma"], answer: 0},
    {question: "Organ pencernaan pertama pada manusia adalah ...", choices: ["Lambung", "Mulut", "Usus", "Kerongkongan"], answer: 1}
  ],
  ips: [
    {question: "Ibukota negara Jepang adalah?", choices: ["Osaka", "Tokyo", "Kyoto", "Hokkaido"], answer: 1},
    {question: "Bapak Koperasi Indonesia?", choices: ["Soekarno", "Moh. Hatta", "Ki Hajar Dewantara", "Sutan Syahrir"], answer: 1},
    {question: "Sungai terpanjang di Indonesia?", choices: ["Kapuas", "Barito", "Mahakam", "Musi"], answer: 0},
    {question: "ASEAN organisasi negara di kawasan ...", choices: ["Asia Timur", "Asia Selatan", "Asia Tenggara", "Asia Barat"], answer: 2},
    {question: "Mata uang Thailand?", choices: ["Ringgit", "Baht", "Dolar", "Yen"], answer: 1},
    {question: "Gunung tertinggi di dunia?", choices: ["Kilimanjaro", "Everest", "Elbrus", "Cartenz"], answer: 1},
    {question: "Negara dengan penduduk terbanyak di dunia?", choices: ["India", "Amerika", "Tiongkok", "Indonesia"], answer: 2},
    {question: "Hari Sumpah Pemuda diperingati pada?", choices: ["17 Agustus", "28 Oktober", "2 Mei", "10 November"], answer: 1},
    {question: "Benua terkecil di dunia?", choices: ["Asia", "Australia", "Eropa", "Afrika"], answer: 1},
    {question: "Ibukota Vietnam adalah?", choices: ["Ho Chi Minh", "Hanoi", "Da Nang", "Hue"], answer: 1},
    {question: "Candi Borobudur terletak di?", choices: ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "Bali"], answer: 1},
    {question: "Negara kepulauan terbesar di dunia?", choices: ["Jepang", "Filipina", "Indonesia", "Maladewa"], answer: 2},
    {question: "Tanggal Proklamasi RI?", choices: ["16 Agustus 1945", "17 Agustus 1945", "18 Agustus 1945", "10 November 1945"], answer: 1},
    {question: "Lambang negara Indonesia adalah?", choices: ["Garuda", "Banteng", "Macan", "Elang"], answer: 0},
    {question: "Tokoh Sumpah Pemuda dari Minangkabau?", choices: ["Moh. Yamin", "Soegondo", "Ki Hajar", "Sutan Syahrir"], answer: 0}
  ],
  bahasa: [
    {question: "Antonim dari 'besar' adalah?", choices: ["Tinggi", "Kecil", "Lebar", "Panjang"], answer: 1},
    {question: "Kalimat yang benar adalah ...", choices: ["Saya makan nasi.", "Nasi makan saya.", "Saya nasi makan.", "Makan saya nasi."], answer: 0},
    {question: "Sinonim kata 'indah' adalah?", choices: ["Jelek", "Bagus", "Buruk", "Sedih"], answer: 1},
    {question: "Kata baku dari 'aktifitas' adalah?", choices: ["Aktifitas", "Aktivitas", "Aktif", "Aktivas"], answer: 1},
    {question: "Peribahasa: 'Bagai air di daun talas' artinya ...", choices: ["Setia", "Labil", "Rajin", "Pemberani"], answer: 1},
    {question: "Contoh kata serapan dari bahasa Inggris?", choices: ["Sepeda", "Televisi", "Meja", "Pintu"], answer: 1},
    {question: "Kata baku dari 'resiko' adalah?", choices: ["Resiko", "Risiko", "Riziko", "Resiko"], answer: 1},
    {question: "Lawan kata 'senang' adalah?", choices: ["Bahagia", "Sedih", "Suka", "Cinta"], answer: 1},
    {question: "Sinonim 'pandai' adalah?", choices: ["Bodoh", "Pintar", "Jahat", "Baik"], answer: 1},
    {question: "Lidah tidak bertulang artinya ...", choices: ["Suka makan", "Tidak punya pendirian", "Mudah berucap", "Suka bicara"], answer: 2},
    {question: "Kata dasar dari 'menyanyi'?", choices: ["Nyanyi", "Menyanyi", "Bernyanyi", "Penyanyi"], answer: 0},
    {question: "Kata ulang berimbuhan terdapat pada ...", choices: ["Berjalan-jalan", "Rumah-rumah", "Lari-lari", "Mobil-mobil"], answer: 0},
    {question: "Kalimat imperatif adalah ...", choices: ["Perintah", "Laporan", "Pertanyaan", "Seruan"], answer: 0},
    {question: "Sinonim kata 'berani' adalah?", choices: ["Takut", "Gentar", "Pemberani", "Penakut"], answer: 2},
    {question: "Antonim 'cepat' adalah?", choices: ["Lambat", "Ringan", "Kuat", "Pendek"], answer: 0}
  ],
  inggris: [
    {question: "What is the English word for 'meja'?", choices: ["Chair", "Table", "Book", "Window"], answer: 1},
    {question: "Choose the correct sentence.", choices: ["He go to school.", "He goes to school.", "He going to school.", "He gone to school."], answer: 1},
    {question: "The opposite of 'big' is ...", choices: ["Small", "Tall", "Long", "Short"], answer: 0},
    {question: "Translate: 'Saya suka membaca buku.'", choices: ["I like reading books.", "I read like books.", "I am like book read.", "I like to books reading."], answer: 0},
    {question: "What is the capital city of England?", choices: ["Liverpool", "London", "Manchester", "Berlin"], answer: 1},
    {question: "Which is the correct plural of 'child'?", choices: ["Childs", "Childes", "Children", "Childrens"], answer: 2},
    {question: "The color of the sky is ...", choices: ["Green", "Blue", "Red", "Yellow"], answer: 1},
    {question: "What time is it? 07:00", choices: ["Seven o'clock", "Six o'clock", "Eight o'clock", "Nine o'clock"], answer: 0},
    {question: "Animal that barks is a ...", choices: ["Cat", "Dog", "Cow", "Bird"], answer: 1},
    {question: "Which is a fruit?", choices: ["Carrot", "Potato", "Apple", "Cucumber"], answer: 2},
    {question: "I ... to the market yesterday.", choices: ["go", "went", "going", "gone"], answer: 1},
    {question: "She ... a beautiful voice.", choices: ["have", "has", "had", "having"], answer: 1},
    {question: "Choose the correct negative: 'I am happy.'", choices: ["I am not happy.", "I not happy.", "I am happy not.", "Not I am happy."], answer: 0},
    {question: "What is 'buku' in English?", choices: ["Book", "Bag", "Box", "Bus"], answer: 0},
    {question: "We ... soccer every Sunday.", choices: ["play", "plays", "playing", "played"], answer: 0}
  ]
};

// ===== LOGIC QUIZ ======
let quizQuestions = [];
let currentQuestion = 0;
let selectedChoice = null;
let score = 0;
let currentSubject = null;
let quizTime = 0; // in seconds
let timerInterval = null;
let timeLeft = 0;
let isQuizFail = false;

const subjectBox = document.getElementById('subject-box');
const subjectBtns = document.querySelectorAll('.subject-btn');
const timeBox = document.getElementById('time-box');
const timeBtns = document.querySelectorAll('.time-btn');
const backBtnTime = document.getElementById('back-btn-time');
const quizBox = document.getElementById('quiz-box');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result-box');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const backBtnQuiz = document.getElementById('back-btn-quiz');
const backBtnResult = document.getElementById('back-btn-result');
const timerEl = document.getElementById('timer');
const failBox = document.getElementById('fail-box');
const retryBtn = document.getElementById('retry-btn');
const failBackBtn = document.getElementById('fail-back-btn');

// Pilih mapel
subjectBtns.forEach(btn => {
  btn.onclick = () => {
    currentSubject = btn.getAttribute('data-subject');
    subjectBox.classList.add('hidden');
    timeBox.classList.remove('hidden');
  };
});

// Pilih waktu
timeBtns.forEach(btn => {
  btn.onclick = () => {
    quizTime = parseInt(btn.getAttribute('data-time'));
    timeBox.classList.add('hidden');
    startQuiz();
  };
});

// Tombol "kembali" di menu waktu
backBtnTime.onclick = () => {
  currentSubject = null;
  timeBox.classList.add('hidden');
  subjectBox.classList.remove('hidden');
};

// START QUIZ
function startQuiz() {
  quizQuestions = [...questionsBySubject[currentSubject]];
  shuffle(quizQuestions);
  if (quizQuestions.length > 15) quizQuestions = quizQuestions.slice(0, 15);
  currentQuestion = 0;
  score = 0;
  isQuizFail = false;
  timerEl.classList.remove('timer-warning');
  showTimer(quizTime);
  timeLeft = quizTime;
  quizBox.classList.remove('hidden');
  resultBox.classList.add('hidden');
  failBox.classList.add('hidden');
  showQuestion(currentQuestion);
  startTimer();
}

// Timer logic
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 10) {
      timerEl.classList.add('timer-warning');
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuizFail();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const sec = (timeLeft % 60).toString().padStart(2, '0');
  timerEl.textContent = `${min}:${sec}`;
}

function showTimer(show) {
  timerEl.parentElement.style.display = show ? 'flex' : 'none';
}

// Soal dan jawaban
function showQuestion(index) {
  showTimer(true);
  const q = quizQuestions[index];
  questionEl.textContent = `Soal ${index + 1} dari ${quizQuestions.length}: ${q.question}`;
  choicesEl.innerHTML = '';
  q.choices.forEach((choice, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.onclick = () => selectChoice(i, btn);
    li.appendChild(btn);
    choicesEl.appendChild(li);
  });
  selectedChoice = null;
  nextBtn.disabled = true;
}

function selectChoice(index, btn) {
  selectedChoice = index;
  document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (selectedChoice === quizQuestions[currentQuestion].answer) score++;
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion(currentQuestion);
  } else {
    endQuizSuccess();
  }
};

// Berhasil selesai quiz
function endQuizSuccess() {
  clearInterval(timerInterval);
  showTimer(false);
  quizBox.classList.add('hidden');
  resultBox.classList.remove('hidden');
  failBox.classList.add('hidden');
  scoreEl.textContent = `Skor Anda: ${score} dari ${quizQuestions.length}`;
}

// Gagal karena waktu habis
function endQuizFail() {
  isQuizFail = true;
  showTimer(false);
  quizBox.classList.add('hidden');
  resultBox.classList.add('hidden');
  failBox.classList.remove('hidden');
}

// Tombol ulangi quiz
restartBtn.onclick = () => {
  timeBox.classList.remove('hidden');
  resultBox.classList.add('hidden');
  quizBox.classList.add('hidden');
  failBox.classList.add('hidden');
};

// Tombol kembali ke mapel
backBtnQuiz.onclick = backToMapel;
backBtnResult.onclick = backToMapel;
failBackBtn.onclick = backToMapel;
function backToMapel() {
  clearInterval(timerInterval);
  currentSubject = null;
  quizTime = 0;
  timeBox.classList.add('hidden');
  subjectBox.classList.remove('hidden');
  quizBox.classList.add('hidden');
  resultBox.classList.add('hidden');
  failBox.classList.add('hidden');
}

// Tombol "Coba Lagi" pada fail
retryBtn.onclick = () => {
  timeBox.classList.remove('hidden');
  failBox.classList.add('hidden');
  quizBox.classList.add('hidden');
  resultBox.classList.add('hidden');
};

// Shuffle array (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}