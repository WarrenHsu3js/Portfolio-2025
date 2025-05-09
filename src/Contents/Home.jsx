import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      id: "mooncake",
      title: "月餅模具設計開發｜客製化食品模具應用",
      tools: "Rhino / Fusion 360",
      tags: ["食品設計", "模具製作", "CNC 加工", "品牌合作"],
      image: "/images/3d1.png"
    },
    {
      id: "trophy",
      title: "獎座設計製造動物造型獎盃設計與3D列印實作",
      tools: "Rhino /ChituBox",
      tags: ["造型設計", "3D 列印", "光固化", "展示製作"],
      image: "/images/3d2.png"
    },
    {
      id: "hybridGift",
      title: "自由曲面禮品設計｜木材 CNC + 金屬 3D 列印混合製造",
      tools: "Rhino / Grasshopper(晶格結構)/ Fusion 360",
      tags: ["自由曲面", "混合製造", "晶格結構", "木工加工"],
      image: "/images/wood1.png"
    },
    {
      id: "subdFurniture",
      title: "有機曲面家具設計與製造｜SubD 建模 × CNC 木工加工",
      tools: "Rhino SubD / Grasshopper（切片與標註）",
      tags: ["家具設計", "SubD 曲面", "CNC 木作", "組裝修整"],
      image: "/images/wood2.png"
    },
    {
      id: "shipModel",
      title: "船模製作｜曲面建模 × 構架設計 × 加工準備",
      tools: "Rhino / Grasshopper（自動化切片與編碼）",
      tags: ["船模設計", "構架建構", "CNC 加工", "自動標註"],
      image: "/images/ship1.png"
    },
    {
      id: "shipReverse",
      title: "船模逆向工程｜掃描建模 × 數據重建 × 實體加工驗證",
      tools: "Rhino / Geomagic / Fusion 360",
      tags: ["逆向建模", "掃描處理", "CNC 驗證", "曲面重建"],
      image: "/images/ship2.png"
    },
    {
      id: "spiralStair",
      title: "大型曲面樓梯加工｜建築構件數位製造整合",
      tools: "Rhino",
      tags: ["建築構件", "自由曲面", "CNC 模板", "施工配合"],
      image: "/images/archi1.png"
    },
    {
      id: "woodStructure",
      title: "大型木構造建材加工與現場管理｜數位製造整合",
      tools: "Rhino / Grasshopper(編號管理)",
      tags: ["木構建材", "參數化桁架", "編碼系統", "工廠對接"],
      image: "/images/archi2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20 px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Hi, 我是 Warren</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          我專注於數位製造與 3D 設計，擅長從建模到加工的全流程整合，涵蓋產品設計、家具製造與展場裝置開發。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/lobby"
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            進入 3D 展示
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">數位製造經歷作品</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block bg-gray-50 border rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-contain p-4 bg-white" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-2 text-gray-500">{project.tools}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-100">
        © 2025 Warren Hsu. All rights reserved.
      </footer>
    </div>
  );
}