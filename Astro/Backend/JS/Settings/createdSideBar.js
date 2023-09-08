function createSidebar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  const logoDetailsDiv = document.createElement("div");
  logoDetailsDiv.classList.add("logo-details");

  const logoImg = document.createElement("img");
  logoImg.src = "/Assets/Images/Icons/iconAstro.png";
  logoImg.classList.add("logo_img");
  logoImg.alt = "astronaut";

  const menuIcon = document.createElement("i");
  menuIcon.classList.add("bx", "bx-menu");
  menuIcon.id = "btn";

  logoDetailsDiv.appendChild(logoImg);
  logoDetailsDiv.appendChild(menuIcon);

  const navListUl = document.createElement("ul");
  navListUl.classList.add("nav-list");

  const links = [
    {
      href: "/Astro/Frontend/Html/Base/home.html",
      iconClass: "bx bx-home",
      text: "Home",
    },
    {
      href: "/Astro/Frontend/Html/Others/search.html",
      iconClass: "bx bx-search",
      text: "Search",
    },
    {
      href: "/Astro/Frontend/Html/Erro/comingSoon.html",
      iconClass: "bx bx-heart",
      text: "Salvos",
    },
    {
      href: "#",
      iconClass: "bx bx-plus",
      text: "Criar",
    },
    {
      href: "/Astro/Frontend/Html/Base/index.html",
      iconClass: "bx bx-exit",
      text: "Sair",
    },
  ];

  links.forEach((linkInfo) => {
    const listItem = document.createElement("li");

    const link = document.createElement("a");
    link.href = linkInfo.href;

    const icon = document.createElement("i");
    icon.className = linkInfo.iconClass;

    if (linkInfo.text === "Search") {
      // Para o link com texto 'Search', crie um elemento de entrada <input>
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Search...";

      // Adicione o ícone e o elemento de entrada ao link
      link.appendChild(icon);
      link.appendChild(input);
    } else {
      // Para outros links, crie um elemento de <span> com o texto do link
      const spanName = document.createElement("span");
      spanName.classList.add("links_name");
      spanName.textContent = linkInfo.text;

      // Adicione o ícone e o <span> ao link
      link.appendChild(icon);
      link.appendChild(spanName);
    }

    listItem.appendChild(link);

    if (linkInfo.text !== "Search") {
      const tooltipSpan = document.createElement("span");
      tooltipSpan.classList.add("tooltip");
      tooltipSpan.textContent = linkInfo.text;
      listItem.appendChild(tooltipSpan);
    } else if (linkInfo.text === 'Sair') {
        // Para o link com texto 'Sair', crie um elemento de <span> com o texto do link
        const spanName = document.createElement('span');
        spanName.classList.add('links_name');
        spanName.textContent = linkInfo.text;
  
        // Adicione o ícone, o <span> e o elemento tooltip ao link
        link.appendChild(icon);
        link.appendChild(spanName);
  
        const tooltipSpan = document.createElement('span');
        tooltipSpan.classList.add('tooltip');
        tooltipSpan.textContent = linkInfo.text;
        listItem.appendChild(tooltipSpan);
      }

    navListUl.appendChild(listItem);
  });

  sidebarDiv.appendChild(logoDetailsDiv);
  sidebarDiv.appendChild(navListUl);

  // Adicione a barra lateral ao corpo do documento
  document.body.appendChild(sidebarDiv);
}

export {createSidebar}