"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Link de rolagem interna que não escreve o hash na URL.
 *
 * O href com # é mantido para que funcione sem JavaScript e para que
 * leitores de tela continuem anunciando o elemento como link. Com JS,
 * o clique é interceptado e a rolagem é feita manualmente, deixando o
 * endereço sempre em marcelodev.tech.
 */
export function ScrollLink({
  href,
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  const reduce = useReducedMotion();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Deixa o navegador cuidar de cmd/ctrl/shift-clique e do botão do meio
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    const target = document.getElementById(href.replace(/^#/, ""));
    if (!target) return; // sem alvo, o href original ainda vale

    e.preventDefault();
    target.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });

    // Move o foco para a seção, senão leitores de tela e o teclado
    // continuam no topo do documento após a rolagem.
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
