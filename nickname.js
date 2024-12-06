document.getElementById('submit-btn').addEventListener('click', () => {
    const nickname = document.getElementById('nickname').value.trim();
    if (!nickname) {
      alert("이름/닉네임을 작성해주세요!");
      return;
    }
    // Save nickname in localStorage
    localStorage.setItem('nickname', nickname);
    // Redirect to result page
    window.location.href = 'result.html';
  });