import { useDashboardContext } from '../providers/DashboardProvider';
import type { DashboardContextValue } from '../types';

function useDashboard(): DashboardContextValue {
  return useDashboardContext();
}

export { useDashboard };
