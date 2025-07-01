import type { TreeNode } from "../components/Tree";

export const treeData: TreeNode[] = [
  {
    id: "1",
    title: "Животные",
    children: [
      {
        id: "1-1",
        title: "Млекопитающие",
        children: [
          { id: "1-1-1", title: "Коровы" },
          { id: "1-1-2", title: "Ослы" },
          { id: "1-1-3", title: "Лошади" },
          { id: "1-1-4", title: "Собаки" },
        ],
      },
      {
        id: "1-2",
        title: "Птицы",
        children: [
          { id: "1-2-1", title: "Орлы" },
          { id: "1-2-2", title: "Вороны" },
          { id: "1-2-3", title: "Гуси" },
        ],
      },
      {
        id: "1-3",
        title: "Рыбы",
        children: [
          { id: "1-3-1", title: "Щука" },
          { id: "1-3-2", title: "Судак" },
        ],
      },
      {
        id: "1-4",
        title: "Земноводные",
        children: [
          { id: "1-4-1", title: "Лягушки" },
          { id: "1-4-2", title: "Тритоны" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Растения",
    children: [
      {
        id: "2-1",
        title: "Цветы",
        children: [
          { id: "2-1-1", title: "Розы" },
          { id: "2-1-2", title: "Тюльпаны" },
        ],
      },
      {
        id: "2-2",
        title: "Деревья",
        children: [
          { id: "2-2-1", title: "Берёзы" },
          { id: "2-2-2", title: "Дубы" },
        ],
      },
      {
        id: "2-3",
        title: "Травы",
        children: [
          { id: "2-3-1", title: "Пшеница" },
          { id: "2-3-2", title: "Рожь" },
          { id: "2-3-3", title: "Клевер" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Грибы",
    children: [
      {
        id: "3-1",
        title: "Съедобные",
        children: [
          { id: "3-1-1", title: "Шампиньоны" },
          { id: "3-1-2", title: "Белые грибы" },
        ],
      },
      {
        id: "3-2",
        title: "Ядовитые",
        children: [
          { id: "3-2-1", title: "Мухоморы" },
          { id: "3-2-2", title: "Поганки" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Минералы",
    children: [
      {
        id: "4-1",
        title: "Металлы",
        children: [
          { id: "4-1-1", title: "Золото" },
          { id: "4-1-2", title: "Серебро" },
        ],
      },
      {
        id: "4-2",
        title: "Неметаллы",
        children: [
          { id: "4-2-1", title: "Алмазы" },
          { id: "4-2-2", title: "Сера" },
        ],
      },
    ],
  },
];
