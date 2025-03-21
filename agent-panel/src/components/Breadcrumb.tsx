import { Link } from "react-router-dom";

interface BreadcrumbProps {
  pageName: string;
  breadcrumbs: { name: string; link: string }[]; // Dynamic breadcrumb list
}

const Breadcrumb = ({ pageName, breadcrumbs }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              <Link to={crumb.link} className="text-gray-600 hover:text-primary">
                {crumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
