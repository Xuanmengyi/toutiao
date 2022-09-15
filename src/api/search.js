import request from '@/utils/request'
/**
 *
 * @param {*} q 搜索关键词
 * @returns
 */
export const getSuggestionAPI = (q) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}

/**
 *
 * @param {*} page 页数
 * @param {*} per_page 每页的数量
 * @param {*} q 搜索关键词
 * @returns
 */
export const getResultAPI = (page, per_page, q) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      per_page,
      q
    }
  })
}
