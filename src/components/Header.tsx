import { useEffect, useRef, useState } from "react";
import {
  siteContent as c,
  contactHref,
} from "../data/siteContent";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  const whatsappHref = contactHref("whatsapp");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 28);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 960px)",
    );

    const closeMenu = () => {
      if (media.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", closeMenu);

    return () => {
      media.removeEventListener("change", closeMenu);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const original =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKey = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }

      if (event.key === "Tab") {
        const items = Array.from(
          header.current?.querySelectorAll<HTMLElement>(
            "a, button",
          ) ?? [],
        ).filter(
          (el) =>
            el.getClientRects().length,
        );

        const first = items[0];
        const last = items.at(-1);

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener(
      "keydown",
      handleKey,
    );

    return () => {
      document.body.style.overflow =
        original;

      document.removeEventListener(
        "keydown",
        handleKey,
      );
    };
  }, [open]);

  const close = () => {
    setOpen(false);
  };

  return (
    <header
      ref={header}
      className={`header ${
        scrolled ? "is-scrolled" : ""
      } ${open ? "is-open" : ""}`}
    >
      <div className="container header-inner">
        <a
          href="#inicio"
          className="wordmark"
          onClick={close}
        >
          {c.name}
        </a>

        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={
            open
              ? c.ui.menuClose
              : c.ui.menuOpen
          }
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() =>
            setOpen(!open)
          }
        >
          <span />
          <span />
        </button>

        <nav
          id="main-nav"
          className={`navigation ${
            open ? "is-open" : ""
          }`}
          aria-label={c.ui.navigation}
        >
          {c.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
            >
              {link.label}
            </a>
          ))}

          {whatsappHref ? (
            <a
              className="button button--outline"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              {c.cta.contact}

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          ) : (
            <a
              className="button button--outline"
              href="#contato"
              onClick={close}
            >
              {c.cta.contact}

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}