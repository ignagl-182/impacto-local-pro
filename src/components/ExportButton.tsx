import { Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ExportButton = () => {
  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="sm"
        className="text-impact-text border-impact-border hover:bg-impact-card"
      >
        <Download className="w-4 h-4 mr-1" />
        PDF
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        className="text-impact-text border-impact-border hover:bg-impact-card"
      >
        <Share2 className="w-4 h-4" />
      </Button>
    </div>
  );
};