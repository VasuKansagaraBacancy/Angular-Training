const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) {
    window.location.href = "../login/index.html";
}

document.getElementById("userName").innerText = user.username;
document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
};

const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
const container = document.getElementById("blogContainer");

blogs.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "blog-post";

    div.innerHTML = `
    <div class="comment-count">${post.comments.length}</div>
    <h3>${post.title}</h3>
    <img src="${post.image}" />
    <p>${post.content}</p>

    <div class="comment-box">
      <textarea id="commentInput-${index}" placeholder="Add a comment..."></textarea>
      <button onclick="addComment(${index})">Post</button>
    </div>
    
 <div id="comments-${index}">
  ${post.comments.map((c, ci) => `
    <div class="comment">
      <div class="comment-content" id="comment-${index}-${ci}" contenteditable="false">
        <b>${c.username}:</b> <span>${c.content}</span>
      </div>
      ${c.username === user.username ? `
    <div class="comment-actions">
        <button class="edit-btn" onclick="enableEdit(${index}, ${ci})">✏️</button>
        <button class="delete-btn" onclick="deleteComment(${index}, ${ci})">🗑️</button>
    </div>
    ` : ""}
    </div>
  `).join("")}
</div>
  `;

    container.appendChild(div);
});

function addComment(blogIndex) {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    const textarea = document.getElementById(`commentInput-${blogIndex}`);
    const text = textarea.value.trim();
    if (text === "") return;

    blogs[blogIndex].comments.push({
        username: user.username,
        content: text
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.reload();
}

function deleteComment(blogIndex, commentIndex) {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    blogs[blogIndex].comments.splice(commentIndex, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.reload();
}

function enableEdit(blogIndex, commentIndex) {
    const contentEl = document.querySelector(`#comment-${blogIndex}-${commentIndex}`);
    const span = contentEl.querySelector('span');
    contentEl.setAttribute("contenteditable", "true");
    span.focus();

    contentEl.onblur = () => {
        const blogs = JSON.parse(localStorage.getItem("blogs"));
        const text = contentEl.innerText.split(":").slice(1).join(":").trim(); // removes the username
        blogs[blogIndex].comments[commentIndex].content = text;
        localStorage.setItem("blogs", JSON.stringify(blogs));
        contentEl.setAttribute("contenteditable", "false");
    };

}
const toggleButton = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggleButton.textContent = '☀️ Light Mode';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});