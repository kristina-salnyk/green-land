import { ICONS } from '../../../../constants';

export const getIconByName = name => {
  const iconIdx = ICONS.findIndex(item => item.name === name);
  if (iconIdx === -1) {
    return null;
  }
  return ICONS[iconIdx];
};
