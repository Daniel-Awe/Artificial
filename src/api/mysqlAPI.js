import request from '@/utiles/request'

export function getUsersData() {
  return request.get('/mysql/usersdata')
}
export function postUsersData(id, data) {
  console.log(data)
  return request.post(`/mysql/usersdata?id=${id}`, data)
}
export function putUsersData(id, data) {
  return request.put(`/mysql/usersdata?id=${id}`, data)
}
export function deleteUsersData(id) {
  return request.delete(`/mysql/usersdata?id=${id}`)
}
