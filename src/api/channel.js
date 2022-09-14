import request from '@/utils/request'

export const getUserChannelAPI = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}

export const getAllChannelsAPI = () => {
  return request({
    url: '/v1_0/channels'
  })
}

export const delChannelAPI = (id) => {
  return request({
    url: `/v1_0/user/channels/${id}`,
    method: 'DELETE'
  })
}

export const addChannelAPI = (id, seq) => {
  return request({
    url: '/v1_0/user/channels',
    method: 'PATCH',
    data: {
      channels: [{ id, seq }]
    }
  })
}
