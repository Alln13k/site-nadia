import { locations } from "@/lib/site";

export function Locations() {
  return (
    <div className="location-grid">
      {locations.map((location) => (
        <article key={location.city} className="location-card">
          <h3>{location.city}</h3>
          <p>
            <a href={location.mapHref} target="_blank" rel="noopener noreferrer">
              {location.address}
              <span className="sr-only"> (ouvre la carte dans un nouvel onglet)</span>
            </a>
          </p>
        </article>
      ))}
    </div>
  );
}
