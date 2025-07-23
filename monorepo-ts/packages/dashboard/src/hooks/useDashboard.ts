import { useDashboardContext } from '../providers/DashboardProvider';
import type { DashboardContextValue } from '../types';

export function useDashboard(): DashboardContextValue {
    return useDashboardContext();
}
