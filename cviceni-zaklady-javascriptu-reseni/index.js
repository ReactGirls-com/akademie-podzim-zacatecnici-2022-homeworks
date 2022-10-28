// 1. ÚKOL: při kliknutí na tlačítko změň barvu nadpisu na červenou
function changeColor() {
  document.querySelector(".sub-header").style.color = "red";
};

// 2. ÚKOL: při kliknutí na tlačítko stránka přivítá užívatele tím, že vyskočí okno (alert) s textem např. Vítej na této stránce!
function welcomeUser() {
  alert("Vítej na této stránce!");
};

// 3. ÚKOL: Změň tento text na tvůj oblíbený citát při přejetí myši
let quote = document.querySelector(".favourite-quote");

quote.addEventListener("mouseover", function() {
  quote.textContent = "„Chcete-li uspět zdvojnásobte počet svých neúspěchů.” - Thomas J. Watson Jr.";
});
  // při uhnutí s myší jinam se text vrátí do původního (nebo klidně jiného) znění:
quote.addEventListener("mouseout", function() {
  quote.textContent = "3. ÚKOL: Změň tento text na tvůj oblíbený citát při přejetí myší";
});

// 4. ÚKOL: Po kliknutí na tlačítko zobraz aktuální datum a čas
function findDate() {
  document.querySelector("#result").textContent = Date();
}

// 5. ÚKOL: Přepínej tlačítkem mezi styly pomocí podmínky
function toggleStyles() {
  let demo = document.querySelector("#demo");
  if (demo.className === "my-style") {
    demo.className = "new-style";
  } else {
    demo.className = "my-style";
  }
}