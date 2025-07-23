import { Trophy } from 'lucide-react';

interface NudgeBoxProps {
  message: string;
}

export const NudgeBox = ({ message }: NudgeBoxProps) => {
  return (
    <div className="bg-gradient-to-r from-impact-highlight/20 to-impact-header/20 rounded-xl p-4 border border-impact-highlight/30">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-impact-highlight rounded-full flex items-center justify-center">
          <Trophy className="w-4 h-4 text-impact-bg" />
        </div>
        <div className="flex-1">
          <p className="text-impact-text text-sm leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};