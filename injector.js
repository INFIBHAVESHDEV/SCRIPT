(function () {
  const newH1Text = "🚀 This H1 has been updated by Bhavesh's SEO Script!";

  document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector("h1");
    if (h1) {
      console.log("✅ Original H1:", h1.innerText);
      h1.innerText = newH1Text;
      console.log("✅ H1 Updated to:", newH1Text);
    } else {
      console.warn("⚠️ No <h1> tag found on this page.");
    }
  });
})();
