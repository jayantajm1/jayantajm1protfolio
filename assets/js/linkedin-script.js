// ===========================================
// LINKEDIN-STYLE PORTFOLIO - JAVASCRIPT
// Feed Interactions & Dynamic Content
// ===========================================

// Sample posts data with real projects
const feedPosts = [
  {
    id: 1,
    type: "project",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "2 days ago",
    content:
      "🚀 Excited to share: Community Events India Platform\n\nA community-driven events platform where community leaders/hosts can create events (with photos, description, registration), members join events with their community ID, comment and ask questions, search events by location/type, and where admins moderate and close events after completion.\n\n✨ Key Features:\n• Event creation with multimedia support\n• Community-based registration system\n• Location and type-based search\n• Interactive comments and Q&A\n• Admin moderation tools",
    tags: ["#Angular", "#AspNetCore", "#PostgreSQL", "#CommunityBuilding"],
    image: "assets/images/community-event-ind.jpg",
    link: {
      title: "Community Events India - Live Demo",
      description:
        "Check out the live platform for community-driven events management",
      url: "https://community-event.netlify.app",
      github: "https://github.com/jayantajm1/community-event-ind-ui",
    },
    likes: 234,
    comments: 42,
    shares: 28,
  },
  {
    id: 2,
    type: "project",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "5 days ago",
    content:
      "🛠️ Web Tools Collection - Your All-in-One Developer Toolkit\n\nBuilt a comprehensive collection of useful web-based tools including converters, generators, and utilities for developers and designers.\n\n🎯 Perfect for:\n• Quick format conversions\n• Code generation\n• Data transformation\n• Developer utilities\n\nAll tools work offline and respect your privacy! 🔒",
    tags: ["#JavaScript", "#WebTools", "#OpenSource", "#Productivity"],
    image: "assets/images/webtools.jpg",
    link: {
      title: "Web Tools Collection",
      description: "Useful web-based utilities for developers and designers",
      url: "https://jayantajm1.github.io/web-tools/",
      github: "https://github.com/jayantajm1/web-tools",
    },
    likes: 189,
    comments: 31,
    shares: 22,
  },
  {
    id: 3,
    type: "project",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "1 week ago",
    content:
      "💼 Job Notifier - Never Miss an Opportunity!\n\nAn automated job notification system that alerts users about new job postings based on their preferences and criteria.\n\n🔔 Features:\n• Automated job scraping\n• Custom preference filters\n• Real-time notifications\n• Multi-platform support\n\nHelping job seekers stay ahead of the curve! 🎯",
    tags: ["#Python", "#Automation", "#WebScraping", "#JobSearch"],
    image: "assets/images/job-notifier.jpg",
    link: {
      title: "Job Notifier - GitHub Repository",
      description:
        "Automated job notification system with preference-based filtering",
      url: "https://github.com/jayantajm1/Job-Notifier",
      github: "https://github.com/jayantajm1/Job-Notifier",
    },
    likes: 312,
    comments: 47,
    shares: 35,
  },
  {
    id: 4,
    type: "project",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "2 weeks ago",
    content:
      "📦 Tritoybox - Your Comprehensive Toolkit Application\n\nA comprehensive toolkit application providing various utility tools and features for daily productivity and development tasks.\n\n💡 Includes:\n• Productivity tools\n• Development utilities\n• Quick converters\n• Resource generators\n\nStreamlining your workflow, one tool at a time! ⚡",
    tags: ["#React", "#NodeJS", "#MongoDB", "#ProductivityTools"],
    image: "assets/images/tritoybox.jpg",
    link: {
      title: "Tritoybox - Live Application",
      description: "Comprehensive toolkit for productivity and development",
      url: "https://jayantajm1.github.io/TriToyBox/",
      github: "https://github.com/jayantajm1/TriToyBox",
    },
    likes: 245,
    comments: 38,
    shares: 19,
  },
  {
    id: 5,
    type: "project",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "3 weeks ago",
    content:
      "💝 Fun Proposal - Make Your Moment Special!\n\nAn interactive and creative web application designed for making memorable proposals with animations and engaging UI elements.\n\n✨ Features:\n• Beautiful animations\n• Interactive elements\n• Personalized experience\n• Mobile responsive\n\nBecause special moments deserve special presentation! 💕",
    tags: ["#JavaScript", "#CSS3", "#Animation", "#Creative"],
    image: "assets/images/fun-proposal.jpg",
    link: {
      title: "Fun Proposal - Live Demo",
      description: "Interactive proposal application with beautiful animations",
      url: "https://fun-project-85yv.onrender.com/",
      github: "https://github.com/jayantajm1/fun-project",
    },
    likes: 428,
    comments: 89,
    shares: 61,
  },
  {
    id: 6,
    type: "achievement",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "1 month ago",
    content:
      "🎉 Proud to announce that our team successfully delivered the ePension platform!\n\n📊 Impact:\n• 100+ production APIs\n• 20,000+ active users\n• 30% reduction in defects\n• Zero downtime in 6 months\n\nThanks to my amazing team at NIC for this incredible journey! 🙏",
    tags: ["#TeamWork", "#Achievement", "#eGovernance", "#Success"],
    image: null,
    link: null,
    likes: 567,
    comments: 89,
    shares: 42,
  },
  {
    id: 7,
    type: "article",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "2 days ago",
    content:
      "📝 New Article: An Ultimate Guide to Web Application Development\n\nWeb applications are pivotal for business growth, efficiency, and user experience. This comprehensive guide explores:\n\n✨ Key Topics:\n• Modern web architecture patterns\n• Choosing the right tech stack\n• Performance optimization strategies\n• Security best practices\n• Scalability considerations\n\nPerfect for CEOs, business owners, and developers looking to understand web development from a strategic perspective! 💼",
    tags: ["#WebDevelopment", "#JavaScript", "#Angular", "#DotNetCore"],
    image: "assets/images/web-app-blog.jpg",
    link: {
      title: "An Ultimate Guide to Web Application Development",
      description: "Comprehensive guide on building modern web applications",
      url: "#web-dev-blog",
      isArticle: true,
    },
    likes: 892,
    comments: 145,
    shares: 203,
  },
  {
    id: 8,
    type: "article",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "1 week ago",
    content:
      "🔐 New Article: Cybersecurity in Modern Applications\n\nIn today's digital landscape, security isn't optional—it's essential. Here's what every developer needs to know:\n\n🛡️ Essential Practices:\n• Implementing authentication & authorization\n• Protecting against common vulnerabilities (OWASP Top 10)\n• Secure API development\n• Data encryption strategies\n• Security testing & monitoring\n\nBuild secure, resilient applications that protect your users and your business! 🚀",
    tags: ["#Cybersecurity", "#Security", "#DevSecOps", "#BestPractices"],
    image: "assets/images/cyber-security-blog.jpg",
    link: {
      title: "Cybersecurity in Modern Applications",
      description: "Essential security practices for developers",
      url: "#cyber-security-blog",
      isArticle: true,
    },
    likes: 734,
    comments: 98,
    shares: 156,
  },
  {
    id: 9,
    type: "article",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "3 days ago",
    content:
      "🔧 New Tool: HP WiFi Fixer Pro\n\nTired of WiFi connectivity issues on your HP Pavilion laptop? I've got you covered!\n\n⚡ Features:\n• Automatic driver cleanup\n• Network reset automation\n• Quick troubleshooting\n• 5-minute fix guaranteed\n\nNo more endless troubleshooting—get back online fast! 💻",
    tags: ["#Tools", "#Windows", "#Networking", "#Productivity"],
    image: "assets/images/hp-wifi-fixer.jpg",
    link: {
      title: "Fix HP Pavilion WiFi Issues in 5 Minutes",
      description: "Automated tool for HP WiFi connectivity problems",
      url: "#hp-wifi-fixer",
      isArticle: true,
    },
    likes: 456,
    comments: 67,
    shares: 89,
  },
];

// ===========================================
// THEME TOGGLE
// ===========================================

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    themeIcon.className = "fas fa-moon";
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  const themeIcon = document.getElementById("theme-icon");

  document.body.setAttribute("data-theme", savedTheme);
  themeIcon.className = savedTheme === "light" ? "fas fa-sun" : "fas fa-moon";

  // Load feed posts
  loadFeedPosts();
});

// ===========================================
// FEED POST RENDERING
// ===========================================

function loadFeedPosts() {
  const feedContainer = document.getElementById("feed-posts");

  feedPosts.forEach((post) => {
    const postElement = createPostElement(post);
    feedContainer.appendChild(postElement);
  });
}

function createPostElement(post) {
  const postDiv = document.createElement("div");
  postDiv.className = "feed-post card";
  postDiv.setAttribute("data-post-id", post.id);
  postDiv.innerHTML = `
    <div class="post-header">
      <img src="${post.avatar}" alt="${post.author}" class="post-avatar" />
      <div class="post-author-info">
        <div class="post-author-name">${post.author}</div>
        <div class="post-author-headline">${post.headline}</div>
        <div class="post-timestamp">
          <span>${post.timestamp}</span>
          <span>•</span>
          <i class="fas fa-globe-americas"></i>
        </div>
      </div>
      <button class="post-menu-btn">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>

    <div class="post-content">
      <div class="post-text">${post.content.replace(/\n/g, "<br>")}</div>
      ${
        post.tags
          ? `
        <div class="post-tags">
          ${post.tags
            .map((tag) => `<span class="post-tag">${tag}</span>`)
            .join("")}
        </div>
      `
          : ""
      }
      ${
        post.image
          ? `<img src="${post.image}" alt="Post image" class="post-image" onerror="this.style.display='none'" />`
          : ""
      }
      ${
        post.link
          ? `
        <div class="post-link-preview">
          <div class="link-preview-content">
            <div class="link-preview-title">${post.link.title}</div>
            <div class="link-preview-description">${post.link.description}</div>
            <div class="link-preview-actions">
              ${
                post.link.url
                  ? `<a href="${post.link.url}" target="_blank" class="link-btn"><i class="fas fa-external-link-alt"></i> View Live</a>`
                  : ""
              }
              ${
                post.link.github
                  ? `<a href="${post.link.github}" target="_blank" class="link-btn"><i class="fab fa-github"></i> View Code</a>`
                  : ""
              }
            </div>
          </div>
        </div>
      `
          : ""
      }
    </div>

    <div class="post-stats">
      <div class="post-likes">
        <span class="like-icon"><i class="fas fa-thumbs-up"></i></span>
        <span class="like-count">${post.likes}</span>
      </div>
      <div class="post-engagement">
        <span>${post.comments} comments</span>
        <span>•</span>
        <span>${post.shares} shares</span>
      </div>
    </div>

    <div class="post-actions">
      <button class="action-btn like-btn" onclick="toggleLike(${
        post.id
      }, this)">
        <i class="far fa-thumbs-up"></i>
        <span>Like</span>
      </button>
      <button class="action-btn">
        <i class="far fa-comment"></i>
        <span>Comment</span>
      </button>
      <button class="action-btn">
        <i class="fas fa-share"></i>
        <span>Share</span>
      </button>
      <button class="action-btn">
        <i class="fas fa-paper-plane"></i>
        <span>Send</span>
      </button>
    </div>
  `;

  return postDiv;
}

// ===========================================
// POST INTERACTIONS
// ===========================================

function toggleLike(postId, button) {
  const icon = button.querySelector("i");
  const isLiked = button.classList.contains("liked");

  if (isLiked) {
    button.classList.remove("liked");
    icon.className = "far fa-thumbs-up";
  } else {
    button.classList.add("liked");
    icon.className = "fas fa-thumbs-up";
  }

  // Update like count in data
  const post = feedPosts.find((p) => p.id === postId);
  if (post) {
    post.likes += isLiked ? -1 : 1;
    updatePostStats(postId);
  }
}

function updatePostStats(postId) {
  const post = feedPosts.find((p) => p.id === postId);
  if (post) {
    const postElement = document.querySelector(`[data-post-id="${postId}"]`);
    if (postElement) {
      const likesElement = postElement.querySelector(".like-count");
      if (likesElement) {
        likesElement.textContent = post.likes;
      }
    }
  }
}

// ===========================================
// CHATBOT / ASSISTANT FUNCTIONALITY
// ===========================================

// Q&A Database
const chatbotQA = {
  greetings: {
    keywords: ["hi", "hello", "hlw", "hey", "hello there"],
    answer:
      "Hello — I'm your quick assistant. How can I help you today? Ask me about my skills, experience, projects, or anything else you'd like to know.",
  },
  skills: {
    keywords: [
      "skill",
      "technology",
      "tech",
      "languages",
      "programming",
      "what you know",
    ],
    answer:
      "I specialize in Web Development (HTML, CSS, JavaScript, Angular), Backend Development (ASP.NET Core, Node.js), Database Management (PostgreSQL, SQL, MongoDB), Cloud & DevOps (Docker, RabbitMQ, Redis), and modern software architecture patterns.",
  },
  experience: {
    keywords: ["experience", "work", "job", "worked", "career", "professional"],
    answer:
      "I have 1+ year of professional experience as a Full Stack Developer at National Informatics Centre (NIC), Kolkata. I've worked on various e-Governance projects including ePanchayat, ePension platforms, and built scalable applications serving 20,000+ users. Check out my feed for detailed project information!",
  },
  education: {
    keywords: [
      "education",
      "study",
      "degree",
      "qualification",
      "school",
      "university",
      "college",
    ],
    answer:
      "I hold a Bachelor's degree in Computer Science Engineering (2021-2025). I was also Design Lead at ByteMonk-GTC Tech Club, where I enhanced leadership and event management skills.",
  },
  projects: {
    keywords: [
      "project",
      "work sample",
      "portfolio",
      "built",
      "created",
      "developed",
    ],
    answer:
      "I've built several exciting projects: 🔹 Community Events India - Event management platform 🔹 Web Tools Collection - Developer utilities 🔹 Job Notifier - Automated job alerts 🔹 Tritoybox - Productivity toolkit 🔹 Fun Proposal - Creative web app. Scroll through my feed to see detailed posts about each project with live links!",
  },
  contact: {
    keywords: [
      "contact",
      "reach",
      "email",
      "phone",
      "hire",
      "available",
      "touch",
    ],
    answer:
      "You can reach me via email at jayantaofficial84@gmail.com. Connect with me on LinkedIn (linkedin.com/in/mardijm/) or check out my code on GitHub (github.com/jayantajm1). I'm always open to new opportunities!",
  },
  location: {
    keywords: ["location", "where", "based", "from", "live", "city"],
    answer:
      "I'm based in Kolkata, India. I work with clients globally and I'm comfortable working remotely across different time zones!",
  },
  technologies: {
    keywords: ["tools", "framework", "library", "software", "use"],
    answer:
      "I work with modern technologies including ASP.NET Core, Angular, PostgreSQL, Docker, RabbitMQ, Redis, EF Core, OpenTelemetry, and more. I follow clean architecture principles and best practices for scalable software development!",
  },
  github: {
    keywords: ["github", "code", "repository", "repos"],
    answer:
      "Check out my GitHub at github.com/jayantajm1 to see my open-source projects, contributions, and code samples. All my projects in the feed have GitHub links!",
  },
  linkedin: {
    keywords: ["linkedin", "profile", "professional network"],
    answer:
      "Connect with me on LinkedIn at linkedin.com/in/mardijm/ to stay updated with my professional journey, posts, and achievements!",
  },
};

// Initialize chat functionality when messages nav item is clicked
document.addEventListener("DOMContentLoaded", function () {
  const messagesNavItem = document.querySelector('a[href="#messages"]');

  if (messagesNavItem) {
    messagesNavItem.addEventListener("click", function (e) {
      e.preventDefault();
      openChatAssistant();
    });
  }
});

function openChatAssistant() {
  // Create chat modal
  const existingModal = document.getElementById("chatAssistantModal");
  if (existingModal) {
    existingModal.classList.add("active");
    return;
  }

  const chatModal = document.createElement("div");
  chatModal.id = "chatAssistantModal";
  chatModal.className = "modal active";
  chatModal.innerHTML = `
    <div class="modal-content chat-assistant-content">
      <div class="modal-header">
        <div class="chat-header-info">
          <i class="fas fa-robot"></i>
          <div>
            <h3>Portfolio Assistant</h3>
            <span class="status-online">Online</span>
          </div>
        </div>
        <button class="modal-close" onclick="closeChatAssistant()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body chat-body">
        <div class="chatbot-messages" id="chat-messages">
          <div class="bot-message">
            <div class="message-content">
              👋 Hi! I'm your portfolio assistant. How can I help you today? Ask me about skills, experience, projects, or anything else!
            </div>
          </div>
        </div>
        <div class="chatbot-suggestions">
          <button class="suggestion-btn" onclick="askQuestion('What are your skills?')">
            What are your skills?
          </button>
          <button class="suggestion-btn" onclick="askQuestion('Tell me about your experience')">
            Tell me about your experience
          </button>
          <button class="suggestion-btn" onclick="askQuestion('Show me your projects')">
            Show me your projects
          </button>
          <button class="suggestion-btn" onclick="askQuestion('How can I contact you?')">
            How can I contact you?
          </button>
        </div>
      </div>
      <div class="modal-footer chat-footer">
        <input
          type="text"
          id="chat-input-field"
          placeholder="Type a message..."
          onkeypress="if(event.key==='Enter') sendChatMessage()"
        />
        <button class="btn-primary" onclick="sendChatMessage()">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(chatModal);
  document.body.style.overflow = "hidden";

  // Add CSS for chat assistant
  if (!document.getElementById("chat-assistant-styles")) {
    const chatStyles = document.createElement("style");
    chatStyles.id = "chat-assistant-styles";
    chatStyles.textContent = `
      .chat-assistant-content {
        max-width: 600px !important;
        height: 80vh;
        display: flex;
        flex-direction: column;
      }
      .chat-header-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .chat-header-info i {
        font-size: 24px;
        color: var(--primary-color);
      }
      .status-online {
        font-size: 12px;
        color: #10b981;
      }
      .chat-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0 !important;
      }
      .chatbot-messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .bot-message, .user-message {
        max-width: 80%;
        animation: slideUp 0.3s ease;
      }
      .bot-message {
        align-self: flex-start;
      }
      .user-message {
        align-self: flex-end;
      }
      .message-content {
        padding: 12px 16px;
        border-radius: var(--border-radius-md);
        line-height: 1.5;
      }
      .bot-message .message-content {
        background: var(--bg-secondary);
        color: var(--text-primary);
      }
      .user-message .message-content {
        background: var(--primary-color);
        color: white;
      }
      .chatbot-suggestions {
        padding: 16px 20px;
        border-top: 1px solid var(--border-color);
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .suggestion-btn {
        padding: 8px 16px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        cursor: pointer;
        font-size: 13px;
        color: var(--text-secondary);
        transition: all 0.2s;
      }
      .suggestion-btn:hover {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }
      .chat-footer {
        padding: 16px 20px !important;
        border-top: 1px solid var(--border-color);
        display: flex;
        gap: 12px;
      }
      .chat-footer input {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-md);
        background: var(--bg-secondary);
        color: var(--text-primary);
        font-size: 14px;
      }
      .chat-footer button {
        padding: 12px 20px;
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(chatStyles);
  }
}

function closeChatAssistant() {
  const modal = document.getElementById("chatAssistantModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function sendChatMessage() {
  const input = document.getElementById("chat-input-field");
  const message = input.value.trim();

  if (!message) return;

  addUserMessage(message);
  input.value = "";

  setTimeout(() => {
    const answer = findChatAnswer(message);
    addBotMessage(answer);
  }, 500);
}

function askQuestion(question) {
  addUserMessage(question);
  setTimeout(() => {
    const answer = findChatAnswer(question);
    addBotMessage(answer);
  }, 500);
}

function addUserMessage(message) {
  const messagesContainer = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "user-message";
  messageDiv.innerHTML = `
    <div class="message-content">${message}</div>
  `;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessage(message) {
  const messagesContainer = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "bot-message";
  messageDiv.innerHTML = `
    <div class="message-content">${message}</div>
  `;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function findChatAnswer(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  for (const [key, qa] of Object.entries(chatbotQA)) {
    for (const keyword of qa.keywords) {
      if (lowerMessage.includes(keyword)) {
        return qa.answer;
      }
    }
  }

  return "I'm not sure about that. Try asking about my skills, experience, education, projects, or how to contact me! You can also use the suggestion buttons.";
}

// ===========================================
// POST MODAL
// ===========================================

function openPostModal() {
  const modal = document.getElementById("postModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePostModal() {
  const modal = document.getElementById("postModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  document.getElementById("postContent").value = "";
}

function createPost() {
  const content = document.getElementById("postContent").value.trim();

  if (!content) {
    alert("Please write something to post!");
    return;
  }

  const newPost = {
    id: feedPosts.length + 1,
    type: "update",
    author: "Jayanta Mardi",
    headline: "Software Developer at National Informatics Centre",
    avatar: "assets/images/index.jpg",
    timestamp: "Just now",
    content: content,
    tags: extractHashtags(content),
    image: null,
    link: null,
    likes: 0,
    comments: 0,
    shares: 0,
  };

  feedPosts.unshift(newPost);

  const feedContainer = document.getElementById("feed-posts");
  const postElement = createPostElement(newPost);
  feedContainer.insertBefore(postElement, feedContainer.firstChild);

  closePostModal();

  // Show success message
  showNotification("Post published successfully!");
}

function extractHashtags(text) {
  const hashtags = text.match(/#\w+/g);
  return hashtags || [];
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 70px;
    right: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-md);
    padding: 16px 24px;
    box-shadow: var(--shadow-md);
    z-index: 3000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("postModal");
  if (event.target === modal) {
    closePostModal();
  }
};

// ===========================================
// SEARCH FUNCTIONALITY
// ===========================================

const searchInput = document.querySelector(".search-bar input");
if (searchInput) {
  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm.length === 0) {
      loadFeedPosts();
      return;
    }

    const filteredPosts = feedPosts.filter(
      (post) =>
        post.content.toLowerCase().includes(searchTerm) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );

    const feedContainer = document.getElementById("feed-posts");
    feedContainer.innerHTML = "";

    if (filteredPosts.length === 0) {
      feedContainer.innerHTML = `
        <div class="card" style="padding: 40px; text-align: center;">
          <i class="fas fa-search" style="font-size: 48px; color: var(--text-muted); margin-bottom: 16px;"></i>
          <h3 style="color: var(--text-primary); margin-bottom: 8px;">No posts found</h3>
          <p style="color: var(--text-secondary);">Try searching with different keywords</p>
        </div>
      `;
    } else {
      filteredPosts.forEach((post) => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
      });
    }
  });
}

// ===========================================
// SMOOTH SCROLLING
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===========================================
// ANIMATIONS
// ===========================================

const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===========================================
// LAZY LOADING
// ===========================================

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img);
});

// ===========================================
// KEYBOARD SHORTCUTS
// ===========================================

document.addEventListener("keydown", function (e) {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    searchInput?.focus();
  }

  // Ctrl/Cmd + N to create new post
  if ((e.ctrlKey || e.metaKey) && e.key === "n") {
    e.preventDefault();
    openPostModal();
  }

  // Escape to close modal
  if (e.key === "Escape") {
    closePostModal();
    closeChatAssistant();
    closeExperienceModal();
    closeEducationModal();
    closeContactModal();
    closeBlogModal();
    closeResumeModal();
  }
});

// ===========================================
// CONTACT MODAL
// ===========================================

function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Contact Form Handling with EmailJS
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  const themeIcon = document.getElementById("theme-icon");

  document.body.setAttribute("data-theme", savedTheme);
  themeIcon.className = savedTheme === "light" ? "fas fa-sun" : "fas fa-moon";

  // Load feed posts
  loadFeedPosts();

  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init("6MWgYgaBSkGv2uS19");
  }

  // Contact Form Handler
  const contactForm = document.getElementById("linkedin-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("from_name");
      const email = formData.get("from_email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Basic validation
      if (!name || !email || !subject || !message) {
        showNotification("Please fill in all fields", "error");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Show sending message
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;

      // EmailJS implementation
      emailjs
        .send("service_portfoliojm", "template_5euef4n", {
          name: name,
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: "jayantaofficial84@gmail.com",
        })
        .then(
          function (response) {
            showNotification("Message sent successfully! 🎉", "success");
            contactForm.reset();
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
          },
          function (error) {
            console.error("EmailJS Error:", error);
            showNotification(
              "Failed to send message. Please try again.",
              "error"
            );
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
          }
        );
    });
  }
});

// ===========================================
// EDUCATION MODAL
// ===========================================

function openEducationModal() {
  const modal = document.getElementById("educationModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeEducationModal() {
  const modal = document.getElementById("educationModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// ===========================================
// EXPERIENCE MODAL
// ===========================================

function openExperienceModal() {
  const modal = document.getElementById("experienceModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeExperienceModal() {
  const modal = document.getElementById("experienceModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  const experienceModal = document.getElementById("experienceModal");
  if (event.target === experienceModal) {
    closeExperienceModal();
  }

  const educationModal = document.getElementById("educationModal");
  if (event.target === educationModal) {
    closeEducationModal();
  }

  const contactModal = document.getElementById("contactModal");
  if (event.target === contactModal) {
    closeContactModal();
  }

  const blogModal = document.getElementById("blogModal");
  if (event.target === blogModal) {
    closeBlogModal();
  }

  const resumeModal = document.getElementById("resumeModal");
  if (event.target === resumeModal) {
    closeResumeModal();
  }
});

// ===========================================
// BLOG MODAL
// ===========================================

function openBlogModal() {
  const modal = document.getElementById("blogModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeBlogModal() {
  const modal = document.getElementById("blogModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// ===========================================
// RESUME MODAL
// ===========================================

function openResumeModal() {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

console.log("LinkedIn-style Portfolio loaded successfully! 🚀");
console.log(`📊 ${feedPosts.length} posts loaded`);
console.log(
  "💡 Keyboard shortcuts: Ctrl+K (Search), Ctrl+N (New Post), Esc (Close)"
);
