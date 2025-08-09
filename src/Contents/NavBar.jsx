import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const tabs = [
    { to: "/", label: t("nav.intro") },
    { to: "/lobby", label: t("nav.lobby") },
  ];

  const toggleLang = () => {
    const next = i18n.language.startsWith("zh") ? "en" : "zh";
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
  };

  return (
    <nav className="fixed top-4 right-4 z-[100] flex items-center gap-2" aria-label="主導覽">
      <button
        onClick={toggleLang}
        className="rounded-4xl bg-white/90 backdrop-blur border border-gray-200 shadow-lg px-3 py-1.5 text-sm hover:bg-gray-50"
      >
        {i18n.language.startsWith("zh") ? "中文/EN" : "EN/中"}
      </button>

     
      <div className="flex items-center gap-1 rounded-4xl bg-white/90 backdrop-blur border border-gray-200 shadow-lg px-2 py-1">
        {tabs.map((tItem) => {
          const active = pathname === tItem.to;
          return (
            <Link
              key={tItem.to}
              to={tItem.to}
              className={[
                "px-3 py-1.5 rounded-4xl text-sm transition",
                active ? "bg-blue-500 text-white shadow-sm" : "text-gray-700 hover:bg-blue-50",
              ].join(" ")}
            >
              {tItem.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
