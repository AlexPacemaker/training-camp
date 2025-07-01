import { type FC, useState, type MouseEvent, type KeyboardEvent } from "react";
import "./Tree.css";

export interface TreeNode {
  id: string;
  title: string;
  children?: TreeNode[];
}

interface TreeProps {
  data: TreeNode[];
}

export const Tree: FC<TreeProps> = ({ data }) => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    setOpenNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const title = (e.target as HTMLElement).closest<HTMLDivElement>(".tree__title");
    if (!title) return;

    const id = title.dataset.id;
    if (id) toggleNode(id);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const title = (e.target as HTMLElement).closest<HTMLDivElement>(".tree__title");
      if (title) {
        const id = title.dataset.id;
        if (id) toggleNode(id);
      }
    }
  };

  const renderTree = (nodes: TreeNode[]) => (
    <ul className='tree'>
      {nodes.map((node) => (
        <li key={node.id} className={`tree__item ${openNodes.has(node.id) ? "open" : ""}`}>
          <div className='tree__title' data-id={node.id}>
            {node.title}
            <span className='tree__icon'>{node.children && openNodes.has(node.id) ? "►" : "▼"}</span>
          </div>
          {node.children && openNodes.has(node.id) && <div className='tree__children'>{renderTree(node.children)}</div>}
        </li>
      ))}
    </ul>
  );

  return (
    <div className='tree-container' onClick={handleClick} onKeyDown={handleKeyDown} role='tree' tabIndex={0}>
      {renderTree(data)}
    </div>
  );
};
