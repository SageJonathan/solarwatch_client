import { useState } from 'react';
import '../styles/partials/_tooltip.scss';  

export const useTooltip = () => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return { visible, showTooltip, hideTooltip };
};
