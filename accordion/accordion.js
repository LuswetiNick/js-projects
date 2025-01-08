const data = [
  {
    id: 1,
    title: "What is HTML?",
    content:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of web pages using markup.",
  },
  {
    id: 2,
    title: "What is CSS?",
    content:
      "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It describes how elements should be rendered on screen.",
  },
  {
    id: 3,
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications and can be used on both the client-side and server-side.",
  },
  {
    id: 4,
    title: "What is DOM?",
    content:
      "The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content.",
  },
];

const accordionContainer = document.querySelector(".accordion");

const accordionData = () => {
  accordionContainer.innerHTML = data
    .map(
      (item) => `
    <div class="accordionItem">
    <div class="accordionTitle">
    <h3>${item.title}</h3>
    <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div class="accordionContent">
    <p>${item.content}</p>
    </div>
    </div>
    `
    )
    .join(" ");
};

accordionData();

const accordionTitle = document.querySelectorAll(".accordionTitle");
accordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getActiveClasses = document.querySelectorAll(".active");
      getActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
