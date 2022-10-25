console.log("helll");

/* 
Write a JavaScript functionality to add a new link into the navbar
*/
const navbar = document.querySelector("nav");
const anotherNavbarLink = document.createElement("span");
anotherNavbarLink.innerText = "task1";
navbar.appendChild(anotherNavbarLink);

/* 
Write a JavaScript functionality to change the color of the main heading title
*/
const header = document.querySelector(".jumbotron h1");
header.addEventListener("click", (event) => {
  event.currentTarget.style.backgroundColor = "orangered";
  event.currentTarget.innerText = "task2";
});
/* 
Write a JavaScript functionality to change the background of the jumbotron
*/
const jumbotron = document.querySelector(".jumbotron");
jumbotron.addEventListener("click", (event) => {
  event.currentTarget.style.backgroundColor = "red";
});
/* 
Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere” section in the aside element. 
It should happen when the page loads, automatically
*/
const twitterLink = document.querySelector("aside div:nth-child(3) li:nth-child(2)");
// twitterLink.style.border = "1px solid black";
window.onload = () => {
  twitterLink.hidden = true;
};

/* 
Write a JavaScript functionality to remove the first 50 characters in the first paragraph for every blog post
*/
const firstParagraphBlogPost = document.querySelectorAll(".blog-post-meta+p");
for (let fp of firstParagraphBlogPost) {
  //fp.style.backgroundColor = "red";
  let originalString = fp.innerText;
  let substring = originalString.substring(50);
  fp.innerText = substring;
}

/* 
Write a JavaScript functionality to add a new Blog Post (div with title and text)
*/

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
console.log({ today });

const authorName = "Nic";

const mainBlogSection = document.querySelector(".blog-main");
const blogPagination = document.querySelector(".blog-pagination");
const newerButton = document.querySelector("main .blog-pagination a[tabindex='-1']");
newerButton.ariaDisabled = false;
newerButton.classList.toggle("disabled");

const createNewBlogPost = function () {
  const divBlog = document.createElement("div");
    divBlog.classList.add("blog-post");
    divBlog.classList.add(`nr${}`)

  const headerBlog = document.createElement("h2");
  headerBlog.classList.add("blog-post-title");
  headerBlog.innerText = `Blog post ${mainBlogSection.children.length - 2 + 1}`;

  const paragraphBlogAuthor = document.createElement("p");
  paragraphBlogAuthor.classList.add("blog-post-meta");
  paragraphBlogAuthor.innerHTML = `${today} by <a href="#">${authorName}</a></p>`;

  const paragraphBlog = document.createElement("p");
  paragraphBlog.innerText = `
                um sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Aenean lacinia
                bibendum nulla sed consectet`;

  divBlog.appendChild(headerBlog);
  divBlog.appendChild(paragraphBlogAuthor);
  divBlog.appendChild(paragraphBlog);
  mainBlogSection.insertBefore(divBlog, blogPagination);
};
createNewBlogPost();
newerButton.addEventListener("click", createNewBlogPost);

// const showBlogPagination = function () {
//   blogPagination.hidden = false;
// };
// const addNewBlog = function () {
//   blogPagination.hidden = true;
//   mainBlogSection.innerHTML += `
//     <div class="blog-post">
//         <h2 class="blog-post-title">Blog post ${mainBlogSection.children.length - 2 + 1}</h2>
//             <p class="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

//             <p>
//               Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
//               bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
//               cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
//             </p>
//     </>`;
// };
// addNewBlog();
// showBlogPagination();

/* 
Write a JavaScript functionality to remove the last Blog Post when the user clicks on the “Older” button
*/
const allElemInBlogSection = document.querySelector(".blog-main");
const allBlogs = document.querySelectorAll(".blog-post");
const olderBtn = document.querySelector(".btn-outline-primary ");
const removeLastBlog = function () {
  let removeChild;
  //allBlogs.removeChild(allBlogs.lastChild);
  //   for (let i = 0; i < allBlogs.length; i++) {
  //     if (i === allBlogs.length - 1) {
  //       console.log({ i });
  //       removeChild = allElemInBlogSection.removeChild(allBlogs[i]);
  //     }
  //   }
  //   console.log(removeChild);
  allElemInBlogSection;
};
olderBtn.addEventListener("click", removeLastBlog);

/* 
Write a JavaScript functionality that will create an alert with the name of the author every time the user hovers the mouse on an author’s name
*/

const authorNameBlog = document.querySelectorAll(".blog-post-meta a");
const alertAuthorOnHover = function () {
  for (let author of authorNameBlog) {
    // i.style.backgroundColor = "red";
    console.dir({ author });
    author.addEventListener("mouseover", (event) => {
      alert(event.currentTarget.innerText);
    });
  }
};
alertAuthorOnHover();

/* 
EXTRA Write a JavaScript functionality that will remove the corresponding parent card from the DOM, 
upon clicking on their “Continue reading” link 
*/
const continueReading = document.querySelector(".jumbotron a[href^='#']");
continueReading.addEventListener("click", (event) => {
  const biggerParentElem = event.target.parentNode.parentNode;
  const parentElem = event.target.parentNode;
  let removedParent = biggerParentElem.removeChild(parentElem);
  console.dir(removedParent);
});
