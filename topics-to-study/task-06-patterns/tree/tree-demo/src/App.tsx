import { Tree } from "./components/Tree";
import { treeData } from "./data/treeData";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🌳 Раскрывающееся дерево</h1>
      <Tree data={treeData} />
    </div>
  );
}

export default App;
