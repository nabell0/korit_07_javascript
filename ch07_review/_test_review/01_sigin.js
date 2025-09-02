const addBtn = document.getElementById("siginin")
const userIdInput = document.getElementById("userId");
const passwordInput = document.getElementById("userPassword");

let users = JSON.parse(localStorage.getItem("users")) || [];

addBtn.addEventListener("click", () => {
  const userId = userIdInput.value.trim();
  const userPassword = passwordInput.value.trim();

  function saveUsers() {
    localStorage.getItem("users", JSON.stringify(users));
  }

  if (userId === " ") {
    alert("아이디를 입력하세요.");
    userIdInput.focus();
    return;
  }
  if (userPassword === " ") {
    alert("비밀번호를 입력하세요.");
    passwordInput.focus();
    return;
  }
  if (userPassword.length < 6) {
    alert("비밀번호는 6자 이상이어야합니다.");
    passwordInput.focus();
    return;
  }
  const foundUser = users.find(
    (user) => user.userId === userId && user.password === userPassword
  );

  if (foundUser) {
    alert("로그인 성공!");
  } else {
    alert("아이디 또는 비밀번호가 올바르지 않습니다.");
  }
});

document.getElementById("go-siginup").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./02_siginup.html";
});