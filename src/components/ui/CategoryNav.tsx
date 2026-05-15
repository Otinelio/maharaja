import clsx from 'clsx';
import { type Category } from '../../utils/storage';
import './CategoryNav.css';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryNav({ categories, activeCategory, onSelectCategory }: CategoryNavProps) {
  const handleClick = (id: string) => {
    onSelectCategory(id);
    const element = document.getElementById(`category-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="category-nav">
      <ul className="cat-list">
        {categories.sort((a,b) => a.order - b.order).map((cat) => (
          <li key={cat.id}>
            <button
              className={clsx('cat-pill font-inter', { active: activeCategory === cat.id })}
              onClick={() => handleClick(cat.id)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
