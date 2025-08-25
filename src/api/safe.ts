import request from '@/utils/request'

export const getHazard = (data:any) => {
  return request.get('dv3/safe/get-hazard',{ params: data })
}