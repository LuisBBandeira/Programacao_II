export const action = () => {
  const btn_ptn1 = document.querySelector("a.ptn1");
  const btn_ptn2 = document.querySelector("a.ptn2");
  const btn_ptn3 = document.querySelector("a.ptn3");
  const btn_ph1 = document.querySelector("a.ph1");
  const btn_ph2 = document.querySelector("a.ph2");
  const btn_ph3 = document.querySelector("a.ph3");
  const btn_sc1 = document.querySelector("a.sc1");
  const btn_sc2 = document.querySelector("a.sc2");
  const btn_sc3 = document.querySelector("a.sc3");
  const reset_btn = document.querySelector("#reset");
  const h2 = document.querySelector("h2");

  btn_ptn1.onclick = () => {
    document.querySelector(".ptn2").style.display = "none";
    document.querySelector(".ptn3").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_ptn2.onclick = () => {
    document.querySelector(".ptn1").style.display = "none";
    document.querySelector(".ptn3").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_ptn3.onclick = () => {
    document.querySelector(".ptn1").style.display = "none";
    document.querySelector(".ptn2").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_ph1.onclick = () => {
    document.querySelector(".ph2").style.display = "none";
    document.querySelector(".ph3").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_ph2.onclick = () => {
    document.querySelector(".ph1").style.display = "none";
    document.querySelector(".ph3").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_ph3.onclick = () => {
    document.querySelector(".ph1").style.display = "none";
    document.querySelector(".ph2").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_sc1.onclick = () => {
    document.querySelector(".sc2").style.display = "none";
    document.querySelector(".sc3").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_sc2.onclick = () => {
    document.querySelector(".sc1").style.display = "none";
    document.querySelector(".sc3").style.display = "none";
    reset_btn.className = "reset";
  };

  btn_sc3.onclick = () => {
    document.querySelector(".sc1").style.display = "none";
    document.querySelector(".sc2").style.display = "none";
    reset_btn.className = "reset";
  };

  reset_btn.onclick = () => {
    document.querySelector(".ptn1").style.display = "block";
    document.querySelector(".ptn2").style.display = "block";
    document.querySelector(".ptn3").style.display = "block";
    document.querySelector(".ph1").style.display = "block";
    document.querySelector(".ph2").style.display = "block";
    document.querySelector(".ph3").style.display = "block";
    document.querySelector(".sc1").style.display = "block";
    document.querySelector(".sc2").style.display = "block";
    document.querySelector(".sc3").style.display = "block";
    reset_btn.className = "none";
    h2.innerHTML = "";
  };
};
