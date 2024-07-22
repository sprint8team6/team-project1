import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/** 공통 GET 요청 함수
 *
 * @param {Object} props - function props
 * @param {string} props.url - 리스폰스 URL
 */
async function getData(url) {
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

getData.propTypes = {
  url: PropTypes.string.isRequired,
};

/** 공통 POST 요청 함수
 *
 * @param {Object} props - function props
 * @param {string} props.url - 리스폰스 URL
 * @param {Object} props.data - 전송할 데이터
 */
async function postData(url, data) {
  const response = await axios.post(url, data);
  try {
    if (response.status !== 201) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Failed to post:', error);
    throw error;
  }
}

postData.propTypes = {
  url: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

/** 공통 PUT 요청 함수
 *
 * @param {Object} props - function props
 * @param {string} props.url - 리스폰스 URL
 * @param {Object} props.data - 전송할 데이터
 */
async function putData(url, data) {
  const response = await axios.put(url, data);
  try {
    if (![200, 204].includes(response.status)) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Failed to put:', error);
    throw error;
  }
}

putData.propTypes = {
  url: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

/** --------------------------------------------------------------------- */

/** 아이돌 정보를 가져오는 API 함수
 *
 * @param {Object} props - API props
 * @param {number} props.pageSize - 한 번에 불러 올 아이돌 수 (기본값: 10)
 * @param {number} props.cursor - 커서 (옵션)
 * @param {string} props.keyword - 검색 키워드 (옵션)
 * @returns {Promise<Object>} API 응답 데이터
 *
 * 아래에서 import 해서 사용중입니다.
 * @see {@link ../pages/ListPage/components/IdolCard.jsx}
 * @see {@link ../pages/MyPage/components/FavoriteCandidates.jsx}
 */
export async function getIdols({
  pageSize = 10,
  cursor = 0,
  keyword = '',
} = {}) {
  const params = new URLSearchParams();

  if (pageSize) params.append('pageSize', pageSize);
  if (cursor !== undefined) params.append('cursor', cursor);
  if (keyword) params.append('keyword', keyword);

  const query = params.toString();
  const url = `${BASE_URL}/idols${query ? `?${query}` : ''}`;

  return getData(url);
}

getIdols.propTypes = {
  pageSize: PropTypes.number,
  cursor: PropTypes.number,
  keyword: PropTypes.string,
};

/** 후원 목록을 가져오는 API 함수
 *
 * @param {Object} props - API props
 * @param {number} props.pageSize - 한 번에 불러 올 아이돌 수 (기본값: 10)
 * @param {number} props.cursor - 커서 (옵션)
 * @param {array[number]} props.priorityIdolIds - 우선순위 아이돌 ID 리스트, 최대 5개 (옵션)
 * @returns {Promise<Object>} API 응답 데이터
 *
 * 아래에서 import 해서 사용중입니다.
 * @see {@link ../pages/ListPage/components/TributeSupport.jsx}
 */
export async function getDonations({
  pageSize = 10,
  cursor = 0,
  priorityIdolIds = 0,
} = {}) {
  const query = new URLSearchParams({
    pageSize,
    cursor,
    priorityIdolIds,
  }).toString();
  const url = `${BASE_URL}/donations?${query}`;
  return getData(url);
}

getDonations.propTypes = {
  pageSize: PropTypes.number,
  cursor: PropTypes.number,
  priorityIdolIds: PropTypes.arrayOf(PropTypes.number),
};

/** 차트 정보를 가져오는 API 함수
 *
 * @param {Object} props - API props
 * @param {'female' | 'male'} props.gender - 성별 (필수)
 * @param {number} props.pageSize - 한 번에 불러 올 아이돌 수 (기본값: 10)
 * @param {number} props.cursor - 커서 (옵션)
 * @returns {Promise<Object>} API 응답 데이터
 *
 * 아래에서 import 해서 사용중입니다.
 * @see {@link ../pages/ListPage/components/MonthChart.jsx}
 * @see {@link ../components/Modal/VoteModal.jsx}
 */
export async function getCharts({ gender, pageSize = 10, cursor = 0 } = {}) {
  const query = new URLSearchParams({ gender, pageSize, cursor }).toString();
  const url = `${BASE_URL}/charts/{gender}?${query}`;

  return getData(url);
}

getCharts.propTypes = {
  gender: PropTypes.oneOf(['female', 'male']).isRequired,
  pageSize: PropTypes.number,
  cursor: PropTypes.number,
};

/** 조공에 후원 정보를 보내는 API 함수
 *
 * @param {Object} props - API props
 * @param {number} props.donationId - 후원할 id
 * @param {number} props.donationAmount - 후원할 데이터
 * @returns {Promise<Object>} API 응답 데이터
 *
 * 아래에서 import 해서 사용중입니다.
 * @see {@link ../components/Modal/DonationModal.jsx}
 */
export async function putDonationsContribute({
  donationId = 0,
  donationAmount,
}) {
  // not exist query
  const url = `${BASE_URL}/donations/${donationId}/contribute`;
  const data = { amount: donationAmount };

  try {
    const response = await putData(url, data);
    return response;
  } catch (error) {
    console.error('Failed to contribute to donation:', error);
    throw error;
  }
}

putDonationsContribute.propTypes = {
  donationId: PropTypes.number.isRequired,
  donationAmount: PropTypes.number.isRequired,
};

/** 이달의 차트에서 아이돌에게 투표하는 API
 *
 * @param {Object} prop - API props
 * @param {number} prop.idolId - 투표할 idol의 id
 *
 * 아래에서 import 해서 사용중입니다.
 * @see {@link ../components/Modal/VoteModal.jsx}
 */
export async function postVote({ idolId }) {
  // not exist query
  const url = `${BASE_URL}/votes`;
  const data = { idolId };
  try {
    const response = await postData(url, data);
    return response;
  } catch (error) {
    console.error('Failed to vote to idol:', error);
    throw error;
  }
}

postVote.propTypes = {
  idolId: PropTypes,
};
