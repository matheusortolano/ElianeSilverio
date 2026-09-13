import { useState } from "react";

import {
  contactHref,
  siteContent as c,
} from "../data/siteContent";

import { Arrow } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  const [notice, setNotice] = useState(false);

  const whatsapp = contactHref("whatsapp");
  const email = contactHref("email");
  const linkedin = contactHref("linkedin");

  const primary = whatsapp ?? email;

  const pending = (
    label: string,
    variant: string,
  ) => (
    <button
      className={`button button--${variant}`}
      onClick={() => setNotice(true)}
      aria-controls="contact-status"
    >
      {label}
      <Arrow diagonal />
    </button>
  );

  return (
    <section
      id="contato"
      className="contact-section dark section"
    >
      <div className="container contact-layout">
        <div
          className="contact-monogram"
          aria-hidden="true"
        >
          ES
          <span />
        </div>

        <div>
          <SectionHeader {...c.contactSection} />

          <div className="button-group">
            {primary ? (
              <a
                className="button button--primary"
                href={primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.cta.contact}
                <Arrow diagonal />
              </a>
            ) : (
              pending(
                c.cta.contact,
                "primary",
              )
            )}

            {linkedin ? (
              <a
                className="button button--outline"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.cta.linkedin}
                <Arrow diagonal />
              </a>
            ) : (
              pending(
                c.cta.linkedin,
                "outline",
              )
            )}
          </div>

          <div
            id="contact-status"
            className="contact-status"
            role="status"
          >
            {!primary && (
              <span className="status-label">
                {c.ui.pendingLabel}
              </span>
            )}

            {notice && (
              <p>{c.ui.pending}</p>
            )}
          </div>

          <div className="contact-details">
            <div>
              <span>{c.ui.whatsapp}</span>

              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.contact.whatsapp}
                </a>
              ) : (
                <span className="placeholder">
                  {c.contact.whatsapp}
                </span>
              )}
            </div>

            <div>
              <span>{c.ui.email}</span>

              {email ? (
                <a
                  href={email}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.contact.email}
                </a>
              ) : (
                <span className="placeholder">
                  {c.contact.email}
                </span>
              )}
            </div>

            <div>
              <span>{c.ui.linkedin}</span>

              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.contact.linkedin}
                </a>
              ) : (
                <span className="placeholder">
                  {c.contact.linkedin}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}