import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh",
    supportedLngs: ["zh", "en"],
    detection: { order: ["querystring", "localStorage", "navigator"], caches: ["localStorage"] },
    interpolation: { escapeValue: false },
    resources: {
      zh: {
        translation: {
          nav: { intro: "介紹", lobby: "數位導覽" },
          loader: { loading: "載入中", wait: "請稍後" },
          about: {
            title: "關於我",
            intro1: "我是 Warren，一位結合數位製造與 3D 網頁技術的設計師／開發者，專長於木作加工流程中的 CAD/CAM 整合與數位視覺化應用。",
            intro2: "我擁有兩年的數位製造實務經驗，參與過船模製作、建材加工、家具設計與逆向工程等專案，熟悉從設計建模到 CNC 加工路徑規劃的全流程。目前任職於一家營造公司，從事木構造相關工作，實際參與大型工地專案，累積了豐富的現場製造與施工經驗。",
            intro3: "為了進一步融合製造與數位技術，我積極投入 3D 網頁開發的學習與實踐，特別專注於使用 Three.js 與 React Three Fiber，打造具備互動性與資料連結能力的 3D 模型與視覺化系統，探索其在數位孿生、物聯網與智慧製造領域的應用潛力。",
            contactTitle: "聯絡我請使用下列社群私信",
            ig: "Instagram:",
            li: "LinkedIn:"
          },
          projects: {
            sectionTitle: "數位製造經歷",
            mooncake: {
              title: "月餅模具設計開發｜客製化食品模具應用",
              tools: "Rhino / Fusion 360",
              tags: ["食品設計", "模具製作", "CNC 加工", "品牌合作"],
              desc: "本案為配合品牌中秋禮盒推出的月餅模具設計，我負責將平面視覺圖轉化為立體模具，並依據食品加工需求進行參數調整，確保模具細節在烘烤後依然清晰可辨。設計過程中需與視覺設計方密切協作，確保造型與品牌識別一致。\n\n技術重點：\n- 根據2D圖檔建立3D浮雕模型\n- 考量食品模具使用需求，進行深度、高度與倒角處理優化\n- 模具結構以 Rhino 建模，並以3D列印打樣測試效果\n- 最終交付可用於生產的模具模型檔案，支援 CNC 或食品級矽膠開模流程"
            },
            trophy: {
              title: "動物造型獎盃設計與3D列印實作",
              tools: "Rhino / ChituBox",
              tags: ["造型設計", "3D 列印", "光固化", "展示製作"],
              desc: "本案為一件結合造型與功能性的動物主題獎盃設計，我負責從造型構思、3D建模、支撐設計到列印後處理，完整實現虛擬設計到實體輸出的流程。獎盃造型以飛翔中的鳥為概念，結合高爾夫球座，強調動感與力道。\n\n技術重點：\n- 使用 Rhino 建立複雜曲面造型，融合象徵意象與球體結構\n- 考量列印方向與支撐需求，優化模型結構與穩定性\n- 使用光固化3D列印，確保細節呈現與強度\n- 後處理包含支撐拆除、打磨與拼裝，完成展示用成品"
            },
            hybridGift: {
              title: "自由曲面禮品設計｜木材 CNC + 金屬 3D 列印混合製造",
              tools: "Rhino / Grasshopper（晶格結構）/ Fusion 360",
              tags: ["自由曲面", "混合製造", "晶格結構", "木工加工"],
              desc: "本案為一件探索數位製造與材料語彙融合的工藝禮品。我負責全案建模與製程整合，將有機流動的木質曲面與參數化生成的金屬結構結合，表現自然與技術的共存。作品強調設計美感與製造可行性的平衡，並具備小量製造與客製潛力。\n\n技術重點：\n- 使用 Rhino 與 Grasshopper 建立自由曲面與參數化金屬結構\n- 木質部件以 CNC 加工製作，考量刀具方向與材料紋理\n- 金屬部件以金屬粉末雷射熔融（SLM）方式 3D 列印，保有結構細節\n- 組裝與接合處採精密對位設計，確保材質間過渡自然且穩固"
            },
            subdFurniture: {
              title: "有機曲面家具設計與製造｜SubD 建模 × CNC 木工加工",
              tools: "Rhino SubD / Grasshopper（切片與標註）",
              tags: ["家具設計", "SubD 曲面", "CNC 木作", "組裝修整"],
              desc: "本案為全曲面造型的室外桌椅設計，採用 Rhino SubD 技術建模，結合數位切片策略進行木材 CNC 加工與組裝。我負責整體造型設計、結構切片規劃與現場組裝，作品呈現自然流動感與工藝精度的融合，應用於陽台、展覽或公共空間。\n\n技術重點：\n- 使用 Rhino SubD 建立自由曲面造型，提升建模彈性與曲面連續性\n- 將複雜造型拆解為可切割片段，依加工限制進行優化排版\n- 木材 CNC 加工使用堆疊製法達到有機曲面\n- 自行組裝與打磨修整，確保曲線準確與結構穩定"
            },
            shipModel: {
              title: "船模製作｜曲面建模 × 構架設計 × 加工準備",
              tools: "Rhino / Grasshopper（自動化切片與編碼）",
              tags: ["船模設計", "構架建構", "CNC 加工", "自動標註"],
              desc: "本案為實體船隻的1:1船模製作，作為複合材料成型前的基礎模具。我負責整體數位建模、曲面修正、肋板結構拆解與加工準備，確保模型具備高精度與製造可行性。成品後續由合作廠商現場組裝並進行模具開發作業。\n\n技術重點：\n- 與團隊共同建立船身外型曲面與內部肋架結構幾何\n- 使用 Rhino 建模並結合 Grasshopper 自動切片與肋板標註定位\n- 根據加工設備條件優化肋板斷面、接合方式與材料利用率\n- 製作完整加工圖與編碼系統，支援 CNC 加工與後續拼裝流程"
            },
            shipReverse: {
              title: "船模逆向工程｜掃描建模 × 數據重建 × 實體加工驗證",
              tools: "Rhino / Geomagic / Fusion 360",
              tags: ["逆向建模", "掃描處理", "CNC 驗證", "曲面重建"],
              desc: "本案為舊有船體外殼的逆向建模案，目的在於建立數位模型以進行優化設計與再製造。我負責掃描資料的修整、3D建模重建、曲面重構與模型分割，並協助加工樣板驗證模型精度與製程可行性。\n\n技術重點：\n- 接收實體掃描點雲與STL模型，進行資料清理與重拓撲處理\n- 使用 Rhino 重建平滑曲面，保留原始造型特徵\n- 依加工需求進行曲面切割與分件，規劃接合方式與公差\n- 協助 CNC 發泡板加工並驗證曲面轉譯與模型準確性"
            },
            spiralStair: {
              title: "大型曲面樓梯加工｜建築構件數位製造整合",
              tools: "Rhino",
              tags: ["建築構件", "自由曲面", "CNC 模板", "施工配合"],
              desc: "本案為某公共空間的主樓梯設計，整體造型為自由曲面的懸浮螺旋結構，結合木作包覆與金屬支撐。我參與其中的曲面拆解、零件加工規劃與現場配合製作，負責將數位建模結果精確轉化為實體構件，並確保組裝順利與施工精度。\n\n技術重點：\n- 協助從建築設計圖中轉換出可製造的3D模型\n- 針對自由曲面結構進行拆件與數位展開，考量材料尺寸與施工流程\n- 製作 CNC 加工用的排料圖與曲面模板\n- 遠端協作安裝，確保加工構件與現場結構精準對接"
            },
            woodStructure: {
              title: "大型木構造建材加工與現場管理",
              tools: "Rhino / Grasshopper（編號管理）",
              tags: ["木構建材", "參數化桁架", "編碼系統", "工廠對接"],
              desc: "本案為一座公共建築中的大型木構結構單元，結構形式為參數化放射狀桁架，橫跨整體建築空間。我參與建材加工準備、工廠編碼系統管理、木構件標記與分類、出貨規劃，確保每一根構件能準確對應其設計位置並順利安裝。\n\n技術重點：\n- 協助從 Rhino / Revit 建模轉換成 CNC 加工資料\n- 建立木構件編碼系統，對應每一塊木料的施工圖編號與現場定位\n- 溝通工廠加工方式、順序與包裝方式"
            }
          },
          common: { close: "關閉", copyright: "© 2025 Warren Hsu. All rights reserved." }
        }
      },
      en: {
        translation: {
          nav: { intro: "Intro", lobby: "Lobby" },
          loader: { loading: "Loading", wait: "Please wait" },
          about: {
            title: "About Me",
            intro1: "I'm Warren, a designer/developer integrating digital fabrication with 3D web technologies, specializing in CAD/CAM workflows and visualization for wood fabrication.",
            intro2: "I have two years of hands-on experience across ship models, building materials, furniture, and reverse engineering, covering modeling to CNC toolpaths. I currently work on timber structure projects at a construction company with extensive on-site fabrication experience.",
            intro3: "To bridge fabrication and digital tech, I focus on Three.js and React Three Fiber to build interactive, data‑linked 3D models and visualization systems for digital twins, IoT, and smart manufacturing.",
            contactTitle: "DM me via the following socials",
            ig: "Instagram:",
            li: "LinkedIn:"
          },
          projects: {
            sectionTitle: "Digital Fabrication Projects",
            mooncake: {
              title: "Mooncake Mold Design | Custom Food Mold",
              tools: "Rhino / Fusion 360",
              tags: ["Food design", "Mold making", "CNC", "Brand collab"],
              desc: "Designed a mooncake mold for a brand’s Mid‑Autumn gift set. Converted 2D artwork into a 3D relief and tuned depth and fillets for crisp baked details. Closely coordinated with the visual team to keep shape aligned with brand identity.\n\nHighlights:\n- Built 3D relief from 2D drawings\n- Optimized depth/height/fillets for food‑grade use\n- Modeled in Rhino; verified with 3D‑printed prototypes\n- Delivered production‑ready models for CNC or silicone molding"
            },
            trophy: {
              title: "Animal Trophy Design & 3D Printing",
              tools: "Rhino / ChituBox",
              tags: ["Form design", "3D printing", "SLA", "Exhibit"],
              desc: "A functional, sculptural animal‑themed trophy from ideation to physical output: modeling, support planning, printing and finishing. The form references a bird in flight with a golf ball base, emphasizing motion and strength.\n\nHighlights:\n- Complex surface modeling in Rhino\n- Orientation/support optimization for stability\n- SLA printing for detail and strength\n- Post‑processing: support removal, sanding, assembly"
            },
            hybridGift: {
              title: "Freeform Gift | Wood CNC + Metal 3D Printing",
              tools: "Rhino / Grasshopper (Lattice) / Fusion 360",
              tags: ["Freeform", "Hybrid manufacturing", "Lattice", "Woodworking"],
              desc: "Craft piece exploring the fusion of digital fabrication and material expression. Combined organic wooden freeform surfaces with parametric metal lattices to balance aesthetics and manufacturability with potential for small‑batch customization.\n\nHighlights:\n- Freeform + parametric lattice via Rhino/GH\n- Wood parts CNC’d with tool orientation and grain considered\n- Metal parts SLM‑printed to preserve detail\n- Precision alignment at joints for natural, robust transitions"
            },
            subdFurniture: {
              title: "Organic Furniture | SubD × CNC Wood",
              tools: "Rhino SubD / Grasshopper (Slicing & Labels)",
              tags: ["Furniture", "SubD surface", "CNC wood", "Assembly"],
              desc: "Outdoor table‑bench set modeled with Rhino SubD and fabricated using digital slicing strategies for wood CNC. Responsible for form design, structural slicing and on‑site assembly; suitable for balconies, exhibitions or public spaces.\n\nHighlights:\n- SubD for flexible, continuous surfaces\n- Decomposition for manufacturable segments and layouts\n- Stacked‑lamination CNC to realize organic forms\n- Assembly and finishing for accuracy and stability"
            },
            shipModel: {
              title: "Ship Model | Surface Modeling × Frame Design × CAM Prep",
              tools: "Rhino / Grasshopper (Auto Slicing & Coding)",
              tags: ["Ship model", "Frame layout", "CNC", "Auto labels"],
              desc: "Full‑scale 1:1 plug used before composite lay‑up. Handled digital modeling, surface corrections, rib structure decomposition and CAM prep to ensure precision and feasibility; later assembled and tooled on site by partners.\n\nHighlights:\n- Built hull surfaces and internal ribs\n- Auto slicing/labeling with GH for positioning\n- Optimized sections, joints and material usage\n- Complete drawings and coding for CNC and assembly"
            },
            shipReverse: {
              title: "Ship Reverse Engineering | Scan → Rebuild → CNC Verify",
              tools: "Rhino / Geomagic / Fusion 360",
              tags: ["Reverse modeling", "Scan processing", "CNC verify", "Surface rebuild"],
              desc: "Reverse‑modeled an existing hull to enable redesign and remanufacturing. Cleaned scans/meshes, rebuilt surfaces and segmented models; assisted CNC foam verification to validate tolerance and process feasibility.\n\nHighlights:\n- Cleaned point clouds/STL and retopology\n- Rebuilt smooth surfaces in Rhino with features preserved\n- Segmented per manufacturing needs with joints/tolerances\n- CNC verification to confirm digital‑to‑physical fidelity"
            },
            spiralStair: {
              title: "Large Curved Stair | Architectural Fabrication Integration",
              tools: "Rhino",
              tags: ["Architectural parts", "Freeform", "CNC templates", "Site support"],
              desc: "Main public‑space stair featuring a freeform helical structure with timber cladding and metal support. Managed decomposition, part planning and site coordination to translate digital models to physical components with installation accuracy.\n\nHighlights:\n- Converted design drawings into manufacturable 3D\n- Decomposed freeform structures with material/flow constraints\n- Produced CNC layouts and surface templates\n- Remote install coordination to align with site structures"
            },
            woodStructure: {
              title: "Large Timber Structure | Fabrication & On‑site Management",
              tools: "Rhino / Grasshopper (Coding)",
              tags: ["Timber parts", "Parametric truss", "Coding system", "Factory liaison"],
              desc: "Timber unit in a public building featuring a parametric radial truss spanning the space. Supported fabrication prep, coding management, marking/sorting and shipping plans to ensure precise positioning and smooth installation.\n\nHighlights:\n- Converted Rhino/Revit models to CNC data\n- Built coding system mapping drawings to site locations\n- Coordinated factory process, sequence and packaging"
            }
          },
          common: { close: "Close", copyright: "© 2025 Warren Hsu. All rights reserved." }
        }
      }
    }
  });

export default i18n;
