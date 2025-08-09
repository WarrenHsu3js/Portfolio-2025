import { useTranslation } from "react-i18next";

export const projects = {
  mooncake:      { key: "mooncake",      image: "/images/3d1.png" },
  trophy:        { key: "trophy",        image: "/images/3d2.png" },
  hybridGift:    { key: "hybridGift",    image: "/images/wood1.png" },
  subdFurniture: { key: "subdFurniture", image: "/images/wood2.png" },
  shipModel:     { key: "shipModel",     image: "/images/ship1.png" },
  shipReverse:   { key: "shipReverse",   image: "/images/ship2.png" },
  spiralStair:   { key: "spiralStair",   image: "/images/archi1.png" },
  woodStructure: { key: "woodStructure", image: "/images/archi2.png" },
};

export default function ProjectCard({ id, onClick }) {
  const { t } = useTranslation();
  const p = projects[id];
  if (!p) return null;

  const title = t(`projects.${p.key}.title`);
  const tools = t(`projects.${p.key}.tools`);
  const tags  = t(`projects.${p.key}.tags`, { returnObjects: true });

  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      aria-label={title}
      className="group flex h-full w-full flex-col text-left rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400/40"
    >
      <div className="relative w-full h-56 sm:h-60 md:h-64 rounded-t-2xl bg-gray-50 border-b border-gray-200 flex items-center justify-center">
        <img
          src={p.image}
          alt={title}
          loading="lazy"
          draggable="false"
          className="block max-h-[80%] max-w-[80%] object-contain pointer-events-none"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 grow">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-1.5 group-hover:text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{tools}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {Array.isArray(tags) &&
            tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-xs rounded-full border border-gray-200 bg-gray-100 px-2 py-1"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </button>
  );
}
