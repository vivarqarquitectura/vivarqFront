import "../../styles/components/skeleton/skeleton.css";

export default function Skeleton({ count = 2 }) {
  return (
    <div role="status" aria-busy="true" style={{ display: "grid", gap: 12 }}>
      {Array.from({ length: count }).map((_, i) => (
        <article
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "96px 1fr",
            gap: 12,
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <div className="skeleton sk-rect" style={{ width: 96 }} />
          <div style={{ display: "grid", gap: 8, alignContent: "center" }}>
            <div className="skeleton sk-line lg" style={{ width: "50%" }} />
            <div className="skeleton sk-line" style={{ width: "75%" }} />
            <div className="skeleton sk-line sm" style={{ width: "30%" }} />
          </div>
        </article>
      ))}
      <span className="sr-only">Cargando carrito…</span>
    </div>
  );
}
