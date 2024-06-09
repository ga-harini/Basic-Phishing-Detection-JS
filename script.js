const urlInput = document.getElementById("url");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", checkPhishing);

function checkPhishing() {
  const url = urlInput.value;
  const phishingKeywords = ["login", "password", "credit card", "banking"];
  let isPhishing = false;

  phishingKeywords.forEach((keyword) => {
    if (url.includes(keyword)) {
      isPhishing = true;
    }
  });

  if (isPhishing) {
    resultDiv.textContent = "Phishing URL detected!";
    resultDiv.style.color = "red";
  } else {
    resultDiv.textContent = "URL is safe.";
    resultDiv.style.color = "green";
  }
}