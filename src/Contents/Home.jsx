import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard, { projects } from "./ProjectCard";

export default function Home() {
  const { t } = useTranslation();
  const [detailId, setDetailId] = useState(null);
  const detail = detailId ? projects[detailId] : null;

  const title = detail ? t(`projects.${detail.key}.title`) : "";
  const tools = detail ? t(`projects.${detail.key}.tools`) : "";
  const tags  = detail ? t(`projects.${detail.key}.tags`, { returnObjects: true }) : [];
  const desc  = detail ? t(`projects.${detail.key}.desc`) : "";

  return (
    <div className="bg-white text-gray-800">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="rounded-2xl border border-gray-200 bg-white/60">
          <div className="px-6 sm:px-10 py-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">{t("about.title")}</h1>
            <div className="space-y-1 leading-relaxed text-[15px] sm:text-base text-gray-700">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
              <p>{t("about.intro3")}</p>
            </div>
            <div className="text-sm text-gray-700 leading-6 mt-6">
              <p>{t("about.contactTitle")}</p>
              <p>
                {t("about.ig")}{" "}
                <a href="https://www.instagram.com/warren.3js/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  @warren.3js
                </a>
              </p>
              <p>
                {t("about.li")}{" "}
                <a href="https://www.linkedin.com/in/warrenrh3d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  linkedin.com/in/warrenrh3d
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">
          {t("projects.sectionTitle")}
        </h2>
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          {Object.keys(projects).map((id) => (
            <div key={id} className="h-full">
              <ProjectCard id={id} onClick={setDetailId} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <p className="text-center text-sm text-gray-500">{t("common.copyright")}</p>
      </section>

      {detail && (
        <div className="fixed inset-0 z-[200]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDetailId(null)} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,900px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
            <div className="p-5 sm:p-8">
              <button
                onClick={() => setDetailId(null)}
                className="ml-auto block rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
              >
                {t("common.close")}
              </button>
              <img src={detail.image} alt={title} className="w-full h-64 object-contain mb-6 border rounded" />
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
              <p className="text-gray-500 mb-4">{tools}</p>
              <p className="text-gray-600 mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(tags) &&
                  tags.map((tag, i) => (
                    <span key={i} className="bg-gray-200 px-3 py-1 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
