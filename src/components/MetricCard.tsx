import { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface MetricCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconColor?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export const MetricCard = ({ 
  title, 
  subtitle, 
  icon, 
  iconColor = "text-impact-header", 
  children, 
  defaultOpen = true 
}: MetricCardProps) => {
  return (
    <div className="bg-impact-card rounded-xl border border-impact-border overflow-hidden">
      <Collapsible defaultOpen={defaultOpen}>
        <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-impact-border/20 transition-colors">
          <div className="flex items-center gap-3">
            <div className={`${iconColor}`}>
              {icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-impact-header">{title}</h3>
              <p className="text-xs text-impact-secondary">{subtitle}</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-impact-secondary transition-transform data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pb-4">
            {children}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};