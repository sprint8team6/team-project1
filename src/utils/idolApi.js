import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/** 공통 HTTP 요청 함수
 * @param {string} url - 리스폰스 URL
 */
async function fetchData(url) {
  const response = await axios.get(url);
  try {
    if (response.status !== 200) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
}

fetchData.propTypes = {
  url: PropTypes.string.isRequired,
};

/** 아이돌 정보를 가져오는 API 함수
 *
 * @param {number} pageSize - 한 번에 불러 올 아이돌 수 (기본값: 10)
 * @param {number} cursor - 커서 (옵션)
 * @param {string} keyword - 검색 키워드 (옵션)
 * @returns {Promise<Object>} API 응답 데이터
 */
export async function getIdols({ pageSize = 10, cursor, keyword } = {}) {
  const query = new URLSearchParams({ pageSize, cursor, keyword }).toString();
  const url = `${BASE_URL}/idols?${query}`;
  return fetchData(url);
}

getIdols.propTypes = {
  pageSize: PropTypes.number,
  cursor: PropTypes.number,
  keyword: PropTypes.string,
};

/** 후원 목록을 가져오는 API 함수
 *
 * @param {number} pageSize - 한 번에 불러 올 아이돌 수 (기본값: 10)
 * @param {number} cursor - 커서 (옵션)
 * @param {array[number]} priorityIdolIds - 우선순위 아이돌 ID 리스트, 최대 5개 (옵션)
 * @returns {Promise<Object>} API 응답 데이터
 */
export async function getDonations({
  pageSize = 10,
  cursor,
  priorityIdolIds,
} = {}) {
  const query = new URLSearchParams(
    pageSize,
    cursor,
    priorityIdolIds
  ).toString();
  const url = `${BASE_URL}/donations?${query}`;
  return fetchData(url);
}

getDonations.propTypes = {
  pageSize: PropTypes.number,
  cursor: PropTypes.number,
  priorityIdolIds: PropTypes.arrayOf(PropTypes.number),
};

/** 차트 정보를 가져오는 API 함수
 *
 * @param {'female' | 'male'} gender - 성별 (필수)
 * @param {number} pageSize - 한 번에 불러 올 아이돌 수 (기본값: 10)
 * @param {number} cursor - 커서 (옵션)
 * @returns {Promise<Object>} API 응답 데이터
 */
export async function getCharts({ gender, pageSize = 10, cursor } = {}) {
  const query = new URLSearchParams({ gender, pageSize, cursor }).toString();
  const url = `${BASE_URL}/charts/{gender}?${query}`;
  return fetchData(url);
}

getCharts.propTypes = {
  gender: PropTypes.oneOf(['female', 'male']).isRequired,
  pageSize: PropTypes.number,
  cursor: PropTypes.number,
};
