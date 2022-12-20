// variables

let container = document.querySelector(".container");

const header = document.createElement("div");
header.classList.add("header");
container.appendChild(header);

const h2 = document.createElement("h2");
h2.textContent = "JavaScript Quote Generator";
header.appendChild(h2);

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
container.appendChild(mainContent);

const textArea = document.createElement("div");
textArea.classList.add("text-area");
mainContent.appendChild(textArea);

const quote = document.createElement("span");
quote.classList.add("quote");
quote.textContent = ` "I do the very best I know how - the very best I can; and I mean to
keep on doing so until the end" `;
textArea.appendChild(quote);

const person = document.createElement("div");
person.classList.add("person");
person.textContent = "Abraham Lincoln";
mainContent.appendChild(person);

const buttonArea = document.createElement("div");
buttonArea.classList.add("button-area");
mainContent.appendChild(buttonArea);

const button = document.createElement("button");
button.setAttribute("id", "newQuote");
button.textContent = "New Quote";
buttonArea.appendChild(button);

const quotes = [
  {
    quote: ` “The most successful entrepreneurs I know are optimistic. It's part of the job description.” `,
    person: ` Caterina Fake`,
  },
  {
    quote: ` “If we did all the things we were capable of, we would astound ourselves” `,
    person: ` Thomas Edison`,
  },
  {
    quote: ` “The only way to do great work is to love what you do” `,
    person: ` Steve Jobs`,
  },
  {
    quote: ` “Get five or six of your smartest friends in a room and ask them to rate your idea.” `,
    person: ` Mark Pincus`,
  },
  {
    quote: ` “If people like you, they'll listen to you, but if they trust you, they'll do business with you.” `,
    person: ` Zig Ziglar`,
  },
  {
    quote: ` “You don't need to have a 100_person company to develop that idea.” `,
    person: ` Larry Page`,
  },
  {
    quote: ` “Chase the vision, not the money, the money will end up following you.” `,
    person: ` Tony Hsieh`,
  },
  {
    quote: ` “A person who is quietly confident makes the best leader.” `,
    person: ` Fred Wilson`,
  },
  {
    quote: ` “Success is not final, failure is not fatal: it is the courage to continue that counts.” `,
    person: ` Winston Churchill`,
  },
  {
    quote: ` “Success is the sum of small efforts _ repeated day in and day out.” `,
    person: ` Robert Collier`,
  },
  {
    quote: ` “Your value will be not what you know; it will be what you share.” `,
    person: ` Ginni Rometty`,
  },
  {
    quote: ` “Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.” `,
    person: ` Biz Stone`,
  },
  {
    quote: ` “Your most unhappy customers are your greatest source of learning.” `,
    person: ` Bill Gates`,
  },
  {
    quote: ` “Listen to your customers deeply, or you will have none.” `,
    person: ` Bryan Clayton`,
  },
  {
    quote: ` “Don't worry about failure; you only have to be right once.” `,
    person: ` Drew Houston`,
  },
  {
    quote: ` “It's fine to celebrate success but it is more important to heed the lessons of failure.” `,
    person: ` Bill Gates`,
  },
  {
    quote: ` "Success is going from failure to failure without losing your enthusiasm." `,
    person: ` Winston Churchill`,
  },
  {
    quote: ` “Failure is success if we learn from it.” `,
    person: ` Malcolm Forbes`,
  },
  {
    quote: ` “My alma mater was books, a good library… I could spend the rest of my life reading, just satisfying my curiosity.” `,
    person: ` Malclom X`,
  },
  {
    quote: `“You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it” `,
    person: ` Malclom X`,
  },
  {
    quote: `“It is only after slavery and prison that the sweetest appreciation of freedom can come.” `,
    person: ` Malclom X`,
  },
  {
    quote: `“The hardest test I ever faced in my life was praying.” `,
    person: ` Malclom X`,
  },
  {
    quote: `“People don't realize how a man's whole life can be changed by one book.” `,
    person: ` Malclom X`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
