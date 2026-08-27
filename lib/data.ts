export type Locale = "pt" | "en";

export const siteUrl = "https://marcelodev.tech";

export const profile = {
  name: "Marcelo Lucas",
  links: {
    email: "marcelolucasdeoliveiraa@gmail.com",
    linkedin: "https://www.linkedin.com/in/mlucasoliv/",
    github: "https://github.com/mlucasoliv",
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  type?: string;
  location?: string;
  description: string;
  tags?: string[];
  href?: string;
};

export type Dictionary = {
  nav: { sobre: string; experiencia: string; skills: string; contato: string };
  hero: {
    role: string;
    tagline: string;
    ctaExperience: string;
    ctaContact: string;
  };
  about: { title: string; paragraphs: string[]; location: string };
  experience: { title: string; items: Experience[] };
  skills: { title: string; groups: { group: string; items: string[] }[] };
  contact: {
    title: string;
    intro: string;
    items: { label: string; href: string; value: string }[];
    form: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
};

const contactItems = [
  { label: "Email", href: `mailto:${profile.links.email}`, value: profile.links.email },
  { label: "LinkedIn", href: profile.links.linkedin, value: "/in/mlucasoliv" },
  { label: "GitHub", href: profile.links.github, value: "/mlucasoliv" },
];

const skillItems = {
  langs: ["TypeScript", "JavaScript", "Python", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "PostgreSQL", "REST APIs"],
  infra: ["Git", "Docker", "Vercel", "Linux"],
};

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    nav: { sobre: "Sobre", experiencia: "Experiência", skills: "Skills", contato: "Contato" },
    hero: {
      role: "Software Engineer",
      tagline:
        "Construo software que parece certo — do backend ao último detalhe da interface.",
      ctaExperience: "Ver experiência",
      ctaContact: "Entrar em contato",
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Sou o Marcelo, desenvolvedor de Maceió (AL). Comecei a programar por curiosidade e acabei descobrindo que o que mais me move é transformar problemas reais em software que as pessoas de fato usam.",
        "Hoje transito entre backend e full-stack: construo APIs sólidas, modelo dados e cuido daquela camada que ninguém vê — mas todo mundo sente. Já passei por infraestrutura para o setor público a projetos com impacto social.",
        "Sou meio obcecado por detalhe. Acredito que a diferença entre um sistema \"ok\" e um que dá gosto de usar mora nas coisas pequenas: uma animação no tempo certo, uma resposta rápida, um fluxo que simplesmente faz sentido. É isso que tento levar pra cada projeto.",
      ],
      location: "Alagoas, Brasil",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "Kode.Lab",
          role: "Fullstack Developer",
          period: "fev 2026 — Presente",
          type: "Meio período",
          location: "Maceió, AL",
          description:
            "Desenvolvimento de soluções de software em projetos de P&D voltados a demandas reais de empresas parceiras, em ambiente multidisciplinar e colaborativo com líderes técnicos.",
          tags: ["Node.js", "PostgreSQL", "Redis", "Docker", "Fullstack", "P&D"],
        },
        {
          company: "SECTI Alagoas — Programa OxeTech",
          role: "Desenvolvedor Backend",
          period: "nov 2025 — Presente",
          type: "Meio período",
          location: "Maceió, AL",
          description:
            "Desenvolvimento e manutenção de APIs e serviços backend com foco em desempenho, segurança e escalabilidade, além de modelagem e integração de bancos de dados garantindo consistência e eficiência no acesso aos dados.",
          tags: ["Node.js", "PostgreSQL", "Redis", "Docker", "Backend", "APIs"],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { group: "Linguagens", items: skillItems.langs },
        { group: "Frontend", items: skillItems.frontend },
        { group: "Backend", items: skillItems.backend },
        { group: "Infra & Tools", items: skillItems.infra },
      ],
    },
    contact: {
      title: "Contato",
      intro: "Aberto a novos projetos e oportunidades. Vamos conversar.",
      items: contactItems,
      form: {
        name: { label: "Nome", placeholder: "Seu nome" },
        email: { label: "Email", placeholder: "voce@email.com" },
        message: { label: "Mensagem", placeholder: "Escreva sua mensagem..." },
        send: "Enviar mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada! Retorno em breve.",
        error: "Algo deu errado. Tente de novo ou me chame no LinkedIn.",
      },
    },
  },
  en: {
    nav: { sobre: "About", experiencia: "Experience", skills: "Skills", contato: "Contact" },
    hero: {
      role: "Software Engineer",
      tagline:
        "I build software that feels right — from the backend to the last detail of the interface.",
      ctaExperience: "View experience",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About",
      paragraphs: [
        "I'm Marcelo, a developer from Maceió, Brazil. I started coding out of curiosity and ended up realizing that what drives me most is turning real problems into software people actually use.",
        "These days I move between backend and full-stack: building solid APIs, modeling data, and taking care of the layer no one sees — but everyone feels. I've worked on everything from public-sector infrastructure to projects with social impact.",
        "I'm a bit obsessed with detail. I believe the gap between an \"okay\" system and one that's a joy to use lives in the small things: an animation timed just right, a fast response, a flow that simply makes sense. That's what I try to bring to every project.",
      ],
      location: "Alagoas, Brazil",
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Kode.Lab",
          role: "Fullstack Developer",
          period: "Feb 2026 — Present",
          type: "Part-time",
          location: "Maceió, Brazil",
          description:
            "Software development on R&D projects addressing real demands from partner companies, in a multidisciplinary environment collaborating with technical leads.",
          tags: ["Node.js", "PostgreSQL", "Redis", "Docker", "Fullstack", "R&D"],
        },
        {
          company: "SECTI Alagoas — OxeTech Program",
          role: "Backend Developer",
          period: "Nov 2025 — Present",
          type: "Part-time",
          location: "Maceió, Brazil",
          description:
            "Development and maintenance of backend APIs and services focused on performance, security, and scalability, plus data modeling and database integration ensuring consistency and efficient data access.",
          tags: ["Node.js", "PostgreSQL", "Redis", "Docker", "Backend", "APIs"],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { group: "Languages", items: skillItems.langs },
        { group: "Frontend", items: skillItems.frontend },
        { group: "Backend", items: skillItems.backend },
        { group: "Infra & Tools", items: skillItems.infra },
      ],
    },
    contact: {
      title: "Contact",
      intro: "Open to new projects and opportunities. Let's talk.",
      items: contactItems,
      form: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@email.com" },
        message: { label: "Message", placeholder: "Write your message..." },
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Try again or reach me on LinkedIn.",
      },
    },
  },
};
