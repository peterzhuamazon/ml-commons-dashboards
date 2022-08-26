import { TASK_API_ENDPOINT } from '../../server/routes/constants';
import { Pagination } from '../../server/services/utils/pagination';
import { InnerHttpProvider } from './inner_http_provider';

export interface TaskSearchItem {
  id: string;
  lastUpdateTime: number;
  createTime: number;
  isAsync: boolean;
  functionName: string;
  inputType: string;
  workerNode: string;
  state: string;
  modelId: string;
  taskType: string;
}

export interface TaskSarchResponse {
  data: TaskSearchItem[];
  pagination: Pagination;
}

export class Task {
  public search(query: { functionName?: string; currentPage: number; pageSize: number }) {
    return InnerHttpProvider.getHttp().get<TaskSarchResponse>(TASK_API_ENDPOINT, {
      query,
    });
  }

  public delete(taskId: string) {
    return InnerHttpProvider.getHttp().delete(`${TASK_API_ENDPOINT}/${taskId}`);
  }
}
