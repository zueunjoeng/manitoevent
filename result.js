const randomResults = [
    { text: "이상고등학교 전설의 3대 얼짱, 김영훈", img: "./img/영훈01.png" },
  { text: "이상고등학교 축구진심 Boy, 김선우", img: "./img/선우01.png"},
  { text: "이상고등학교 웃음 천사, 배준영", img: "./img/제이콥01.png" },
  { text: "이상고등학교 세계정복이 꿈이라던 이상연", img: "/img/상연01.png" },
  { text: "이상고등학교 전설의 3대 얼짱 막내, 이주연", img: "./img/주연01.png" },
  { text: "이상고등학교 환생한 피카소, 문형서", img: "./img/케빈01.png" },
  { text: "이상고등학교 춤추는 미남다람쥐, 지창민", img: "./img/창민01.png"},
  { text: "이상고등학교 감미로운 목소리, 최찬희", img: "./img/뉴01.png" },
  { text: "이상고등학교 얼짱인줄 알았더니 먹짱, 이재현", img: "./img/현재01.png" },
  { text: "이상고등학교 급식1등은 놓친 적 없는 주학년", img: "./img/학년.png" },
  { text: "이상고등학교 스치면 친구, 손영재", img: "./img/에릭01.png" },
  { text: "나의 영원한 소년들, 더보이즈입니다. \n 시원한 여름처럼 따뜻한 겨울처럼 \n 늘 더보이즈와 함께하는 순간은 행복만 가득하길", img: "./img/단체.jpeg" }
    ];

    const nickname = localStorage.getItem('nickname');
    if (!nickname) {
      alert("No nickname found! Returning to input page.");
      window.location.href = 'index.html';
    }

    const randomIndex = Math.floor(Math.random() * randomResults.length);
    const selectedResult = randomResults[randomIndex];

    // 입력텍스트 가져오기
    document.getElementById('nickname-part').textContent = `${nickname}의 마니또는`;
    document.getElementById('result-part').textContent = selectedResult.text;

    // 이미지업로드
    document.getElementById('result-img').src = selectedResult.img;

    // 다시하기버튼
    document.getElementById('retry-btn').addEventListener('click', () => {
      localStorage.removeItem('nickname'); // Clear nickname
      window.location.href = 'index.html';
    });
