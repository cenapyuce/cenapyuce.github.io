document.addEventListener('DOMContentLoaded', () => {
const projects = [
    {
      title: "Apptime Uptime Service",
      description: `In 2020, we built one of the first-ever panel-based uptime services for Discord bots in Turkey.
                  100% free. Made with passion. Kept thousands of bots running.
                  Respect to Eleven.`,
      tags: ["Node.js", "Express.js", "MongoDB", "EJS"],
      status: "deprecated",
      link: "https://github.com/elevenski/apptime"
    },
    {
      title: "CS2 Bomb Tracking Dashboard",
      description: "A side project I built out of boredom. It tracks bomb events in CS2 in real-time, and you can track it on mobile devices.",
      tags: ["Node.js", "Express.js", "Socket.io", "HTML"],
      status: "opensource",
      link: "https://github.com/cenapyuce/cs2-bomb-tracking-dashboard"
    },
    {
      title: "Instagram Video Downloader",
      description: "A simple tool to download Instagram videos. It was a fun project I made for boredom.",
      tags: ["Node.js", "Express.js", "EJS", "Python"],
      status: "opensource",
      link: "https://github.com/cenapyuce/instavideodownloader"
    }
  ];
  const socials = [
      {
          name: "GitHub",
          url: "https://github.com/cenapyuce",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
      },
      {
          name: "Discord",
          url: "https://discord.com/users/900423626497613844",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/discord.svg"
      },
      {
          name: "X",
          url: "https://x.com/cenapp3",
          icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
      }
  ];

  const emailBlock = document.querySelector('.email-block h3');
  const emailButton = document.querySelector('.email-button');
  const email = "cenapyuce504@gmail.com";

  emailBlock.textContent = `✉️ ${email}`;
  emailButton.href = `mailto:${email}`;
  
  const container = document.querySelector('.work-grid');
  const projectloader = document.getElementById('projects-loader');
  const contactLoader = document.getElementById('contact-loader');
  container.innerHTML = '';

  projects.forEach(project => {
    projectloader.style.display = 'none';
    const card = document.createElement('div');
    card.className = 'work-card';

    const content = document.createElement('div');
    content.className = 'work-card-content';

    const title = document.createElement('h3');
      if(project.link){
      title.clickable = true;
      title.className = 'project-title';
      title.style.cursor = 'pointer';
      title.addEventListener('click', () => {
          if (project.link) {
              window.open(project.link);
          }
      });
      title.style.color = 'var(--primary-light)';
      title.style.textDecoration = 'underline';
      title.style.textDecorationColor = 'var(--primary-light)';
      title.style.textDecorationThickness = '2px';
      title.style.textUnderlineOffset = '4px';
      title.style.transition = 'text-decoration-color 0.3s, text-decoration-thickness 0.3s, text-underline-offset 0.3s';
      title.addEventListener('mouseover', () => {
          title.style.textDecorationColor = 'var(--primary)';
          title.style.textDecorationThickness = '4px';
          title.style.textUnderlineOffset = '6px';
      });
      title.addEventListener('mouseout', () => {
          title.style.textDecorationColor = 'var(--primary-light)';
          title.style.textDecorationThickness = '2px';
          title.style.textUnderlineOffset = '4px';
      });
      
      }
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.textContent = project.description;

    const tagContainer = document.createElement('div');
    tagContainer.className = 'tag-container';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagContainer.appendChild(span);
    });

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(tagContainer);

    if (project.status) {
      const statusDiv = document.createElement('div');
      statusDiv.className = `project-status ${project.status}`;
      const span = document.createElement('span');
      span.textContent = {
          working: '🟢 Working',
          paused: '🟡 Paused',
          completed: '🔵 Completed',
          cancelled: '🔴 Cancelled',
          experimental: '🧪 Experimental',
          maintenance: '🛠️ Maintenance',
          scheduled: '📅 Scheduled',
          pending: '⏳ Pending',
          "on-hold": '💤 On Hold',
          deprecated: '🚫 Deprecated',
          frozen: '🧊 Frozen',
          draft: '📝 Draft',
          opensource: '🌍 Open Source'
      }[project.status] || '';

      statusDiv.appendChild(span);
      content.appendChild(statusDiv);
    }

    card.appendChild(content);
    container.appendChild(card);
  });
  const sociallinks = document.getElementById('social-links');

  socials.forEach(social => {
      contactLoader.style.display = 'none';
      const a = document.createElement('a');
      a.href = social.url;
      a.target = '_blank';
      a.className = 'social-link';
      a.title = social.name;

      const img = document.createElement('img');
      img.src = social.icon;
      img.alt = `${social.name} icon`;

      a.appendChild(img);
      sociallinks.appendChild(a);
  });
});