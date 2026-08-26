import { useEffect, useRef, useState, useCallback } from "react";
import { resolveImage } from "../lib/images";

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function Reveal({
  children,
  variant = "",
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`${className}${inView ? " is-in" : ""}`.trim()}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function LineReveal({ children, as: Tag = "div", className = "", style, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const masks = el.querySelectorAll(".line-mask");
    if (!masks.length) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          masks.forEach((m) => m.classList.add("is-in"));
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}

export function ProjectImage({
  slotId,
  alt,
  aspectRatio,
  objectPosition = "center",
  priority = false,
  className = "",
  style,
  imgStyle,
}) {
  const result = resolveImage(slotId);

  if (result.isPlaceholder) {
    const meta = result.meta || { desc: "Imagen del proyecto", aspect: "16:9" };
    return (
      <div
        className={`project-image-placeholder ${className}`}
        style={style}
        data-image-slot={slotId}
        role="img"
        aria-label={alt || meta.desc}
      >
        <span className="placeholder-icon" aria-hidden="true">📷</span>
        <span className="placeholder-label">IMAGEN PENDIENTE</span>
        <span className="placeholder-name">{slotId}</span>
        <span className="placeholder-desc">{meta.desc}</span>
        <span className="placeholder-aspect">Formato: {aspectRatio || meta.aspect}</span>
      </div>
    );
  }

  return (
    <img
      src={result.src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      style={{
        objectPosition,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...imgStyle,
      }}
      className={className}
    />
  );
}

export function WhatsAppIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.7 6.4L3 29.1l7-1.8c1.8 1 3.9 1.5 6 1.5 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.6c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.7 0-5.9 4.8-10.7 10.9-10.7 5.9 0 10.7 4.8 10.7 10.7s-4.8 10.8-10.7 10.8zm5.9-8.1c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.4-.2-.4 0-.6.2-.8l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z" />
    </svg>
  );
}

export function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export function ImageModal({ src, alt, isOpen, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("is-locked");
      contentRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("is-locked");
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div
      ref={overlayRef}
      className={`modal-overlay${isOpen ? " is-open" : ""}`}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Ampliar imagen"}
    >
      <div className="modal-content" ref={contentRef} tabIndex="-1">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        {src ? (
          <img src={src} alt={alt} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
        ) : (
          <div style={{ width: "70vw", height: "60vh" }}>
            <ProjectImage slotId="placeholder" alt="Placeholder" />
          </div>
        )}
      </div>
    </div>
  );
}
