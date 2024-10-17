'use client';

import { Icon } from '@/components/icon';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { FloatingDelayGroup } from '@floating-ui/react';

export const InfoTooltip = ({ text }: { text: string }) => {
  return (
    <FloatingDelayGroup delay={200}>
      <Tooltip>
        <TooltipTrigger>
          <Icon type='information' size='small' />
        </TooltipTrigger>
        <TooltipContent className='Tooltip'>
          <div className='bg-blue-2 px-3 py-2 text-white body-s-500 max-w-xs'>
            {text}
          </div>
        </TooltipContent>
      </Tooltip>
    </FloatingDelayGroup>
  );
};
