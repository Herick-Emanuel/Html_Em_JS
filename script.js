document.addEventListener("DOMContentLoaded", () => {
  // Header
  const header = document.querySelector("header");
  header.id = "header";

  const headerLink = document.createElement("a");
  headerLink.href = "./index.html";

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Squirtle";
  headerLink.appendChild(headerTitle);

  header.appendChild(headerLink);

  // Navbar
  const nav = document.querySelector("nav");
  nav.setAttribute("aria-label", "Navegação principal");

  const navList = document.createElement("ul");
  const navItems = [
    { href: "#info-squirtle", text: "Informações sobre Squirtle" },
    { href: "#caracteristicas", text: "Características" },
    { href: "#curiosidades", text: "Curiosidades" },
    { href: "#artigo-squirtle", text: "Artigo sobre Squirtle" },
    { href: "#recursos", text: "Recursos Adicionais" },
    { href: "#evolucao", text: "Evolução" },
  ];

  navItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.text;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  nav.appendChild(navList);

  // Main Content
  const main = document.querySelector("main");

  // Squirtle Section
  const infoSection = document.createElement("section");
  infoSection.id = "info-squirtle";
  infoSection.setAttribute("aria-labelledby", "info-squirtle-label");

  const infoHeading = document.createElement("h2");
  infoHeading.id = "info-squirtle-label";
  infoHeading.textContent = "Informações sobre Squirtle";
  infoSection.appendChild(infoHeading);

  const imageContainer = document.createElement("div");
  const images = [
    {
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      alt: "Squirtle 1",
    },
    {
      src: "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png",
      alt: "Squirtle 2",
    },
  ];

  images.forEach((imgData) => {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    imageContainer.appendChild(img);
  });

  infoSection.appendChild(imageContainer);

  const infoParagraph = document.createElement("p");
  infoParagraph.textContent =
    "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.";
  infoSection.appendChild(infoParagraph);

  main.appendChild(infoSection);

  // Características Section
  const caracteristicasSection = document.createElement("section");
  caracteristicasSection.id = "caracteristicas";
  caracteristicasSection.setAttribute(
    "aria-labelledby",
    "caracteristicas-label"
  );

  const caracteristicasHeading = document.createElement("h2");
  caracteristicasHeading.id = "caracteristicas-label";
  caracteristicasHeading.textContent = "Características";
  caracteristicasSection.appendChild(caracteristicasHeading);

  const caracteristicasParagraph = document.createElement("p");
  caracteristicasParagraph.textContent =
    "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.";
  caracteristicasSection.appendChild(caracteristicasParagraph);

  main.appendChild(caracteristicasSection);

  // Curiosidades Section
  const curiosidadesSection = document.createElement("section");
  curiosidadesSection.id = "curiosidades";
  curiosidadesSection.setAttribute("aria-labelledby", "curiosidades-label");

  const curiosidadesHeading = document.createElement("h2");
  curiosidadesHeading.id = "curiosidades-label";
  curiosidadesHeading.textContent = "Curiosidades";
  curiosidadesSection.appendChild(curiosidadesHeading);

  const curiosidadesList = document.createElement("ul");
  const curiosidades = [
    "Squirtle é um dos Pokémon mais populares e adoráveis.",
    'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
    "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.",
  ];

  curiosidades.forEach((curiosidade) => {
    const listItem = document.createElement("li");
    listItem.textContent = curiosidade;
    curiosidadesList.appendChild(listItem);
  });

  curiosidadesSection.appendChild(curiosidadesList);
  main.appendChild(curiosidadesSection);

  // Artigo sobre Squirtle Section
  const artigoSection = document.createElement("article");
  artigoSection.id = "artigo-squirtle";
  artigoSection.setAttribute("aria-labelledby", "artigo-squirtle-label");

  const artigoHeading = document.createElement("h2");
  artigoHeading.id = "artigo-squirtle-label";
  artigoHeading.textContent = "Squirtle: O Amigo Aquático";
  artigoSection.appendChild(artigoHeading);

  const artigoParagraphs = [
    "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
    "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.",
    "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.",
  ];

  artigoParagraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    artigoSection.appendChild(paragraph);
  });

  main.appendChild(artigoSection);

  // Recursos Adicionais Section
  const recursosSection = document.createElement("section");
  recursosSection.id = "recursos";
  recursosSection.setAttribute("aria-labelledby", "recursos-label");

  const recursosHeading = document.createElement("h2");
  recursosHeading.id = "recursos-label";
  recursosHeading.textContent = "Recursos Adicionais";
  recursosSection.appendChild(recursosHeading);

  const recursosList = document.createElement("ul");
  const recursos = [
    {
      href: "https://www.pokemon.com/br/pokedex/squirtle",
      text: "Pokédex - Squirtle",
    },
    {
      href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
      text: "Bulbapedia - Squirtle",
    },
  ];

  recursos.forEach((recurso) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = recurso.href;
    link.target = "_blank";
    link.textContent = recurso.text;
    listItem.appendChild(link);
    recursosList.appendChild(listItem);
  });

  recursosSection.appendChild(recursosList);
  main.appendChild(recursosSection);

  // Evoluções Section
  const evolucaoSection = document.createElement("section");
  evolucaoSection.id = "evolucao";
  evolucaoSection.setAttribute("aria-labelledby", "evolucao-label");

  const evolucaoHeading = document.createElement("h2");
  evolucaoHeading.id = "evolucao-label";
  evolucaoHeading.textContent = "Evoluções";
  evolucaoSection.appendChild(evolucaoHeading);

  const evolucaoList = document.createElement("ul");
  const evolucoes = [
    {
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      alt: "Squirtle",
      caption: "1. Squirtle",
    },
    {
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
      alt: "Wartortle",
      caption: "2. Wartortle",
    },
    {
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
      alt: "Blastoise",
      caption: "3. Blastoise",
    },
  ];

  evolucoes.forEach((evolucao) => {
    const listItem = document.createElement("li");
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = evolucao.src;
    img.alt = evolucao.alt;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = evolucao.caption;
    figure.appendChild(figcaption);

    listItem.appendChild(figure);
    evolucaoList.appendChild(listItem);
  });

  evolucaoSection.appendChild(evolucaoList);
  main.appendChild(evolucaoSection);

  // Footer
  const footer = document.querySelector("footer");

  const footerItems = [
    {
      content:
        "&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.",
      ariaLabel: "Copyright",
    },
    { content: "Voltar para o topo", href: "#header" },
    { content: "Contato via e-mail", href: "mailto:contato@squirtlepage.com" },
    { content: "Telefone: (55) 5555-5555", href: "tel:+5555555555" },
  ];

  footerItems.forEach((item) => {
    const paragraph = document.createElement("p");
    if (item.ariaLabel) {
      paragraph.setAttribute("aria-label", item.ariaLabel);
      paragraph.innerHTML = item.content;
    } else {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.content;
      paragraph.appendChild(link);
    }
    footer.appendChild(paragraph);
  });
});
