import request from './request'

export const getProblemList = async () => {
  const res = await request.get('/problems')
  return res.data
}

export const getProblemDetail = async (id: string) => {
  const res = await request.get(`/problems/${id}`)
  return res.data
}
