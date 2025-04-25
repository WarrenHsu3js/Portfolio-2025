export default function InfoPanel({ selected, onClose }) {
  const infoMap = {
    japan: {
      title: "日本留學",
      content: "2024年底，我踏上了前往京都的旅程。在語言學校學習日語的同時，也探索了神社、寺廟、庭園與展覽",
      tags: ["語言學校", "文化體驗", "留學生活"],
      articles: [
        {
          title: "五重塔之美：層層疊疊的塔身象徵著歷史與信仰的積累",
          image: "/images/japan1.jpg"
        },
        {
          title: "竹生島的寧靜視角：湖上神域與自然景觀的靜謐交會",
          image: "/images/japan2.jpg"
        },
        {
          title: "麻布台之丘：在都市綠意中延伸出的當代靜謐空間",
          image: "/images/japan3.jpg"
        },
        {
          title: "萬博大屋根：木構結構與光影交織的壯麗天穹",
          image: "/images/japan4.jpg"
        },
        {
          title: "魔法世界的入口：沉浸於燈光與幻想打造的魔法體驗",
          image: "/images/japan5.jpg"
        },
        {
          title: "NTT萬博展館：科技、藝術與未來感的建築融合之作",
          image: "/images/japan6.jpg"
        },
      ]
    },
  };

  const info = infoMap[selected];
  if (!info) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-1/2 bg-white shadow-xl rounded-l-2xl z-50 overflow-auto p-8 text-black pt-14">
      <button className="hover:bg-gray-200 rounded-full p-1 transition" onClick={onClose}>
        ✖
      </button>
      <h2 className="text-4xl font-bold mb-4">{info.title}</h2>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{info.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {info.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 border text-sm rounded-md bg-gray-100 text-gray-700">
            {tag}
          </span>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-3 gap-4">
        {info.articles.map((article, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-32 object-cover" />
            <div className="p-3 text-sm font-semibold text-gray-800">{article.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
  