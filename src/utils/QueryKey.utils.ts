type Resource = 'Asset' | 'Company' | 'Unit' | 'User' | 'WorkOrder'

export function findMany(resource: Resource) {
  return [`${resource}.findMany`]
}
