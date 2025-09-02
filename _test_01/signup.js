const addBtn = document.getElementById("signup")
const userIdInput = document.getElementById("userId");
const passwordInput = document.getElementById("userPassword");

let users = JSON.parse(localStorage.getItem("users")) || [];

addBtn.addEventListener("click", () => {
  const userId = userIdInput.value.trim();
  const userPassword = passwordInput.value.trim();

  function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
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
  const existUser = users.find((user) => user.userId === userId);
  if (existUser) {
    alert("이미 존재하는 아이디입니다.");
    return;
  }
  const newUsers = {
    userId: userId,
    password: userPassword,
  };
  users.push(newUsers);
  saveUsers();

  alert("회원가입 성공! 로그인 페이지로 이동합니다.");

  window.location.href = "./signin.html";
});
document.getElementById("go-signin").addEventListener("click",  (e) => {
  e.preventDefault();
  window.location.href = "./signin.html";
});