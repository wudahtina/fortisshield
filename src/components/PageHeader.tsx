
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, subtitle, className, children }: PageHeaderProps) => {
  return (
    <div className={cn("bg-navy-900 py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg text-gray-300 mb-6">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
