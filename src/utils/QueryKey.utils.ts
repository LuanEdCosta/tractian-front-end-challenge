type Resource = 'Asset' | 'Company' | 'Unit' | 'User' | 'WorkOrder'
type Param = string | number | object

export function findMany(resource: Resource, ...params: Param[]) {
  return [`${resource}.findMany`, ...params]
}
