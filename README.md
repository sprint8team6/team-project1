# Fandom-K

**Code-it Sprint 8기** Part2 6팀<br>
첫번째 프로젝트: **Fandom-K**<br>
프로젝트 기간: 2024. 7. 10 ~ 2024. 7. 25 (약 15일)

<br>
<img src="https://github.com/user-attachments/assets/bb102d6f-b832-4a34-8f9e-1679c0a4e9fa">
<br><br><br>

## 배포 링크
https://669f9b246baeea1a3ebf6f9d--fandom-k8-6.netlify.app/
<br>

## 프로젝트 팀 구성 및 역할
### 팀원 소개
<table>
  <tr>
    <th width="100"><a href="https://github.com/kjw0412c">김준완</a></th>
    <th width="100"><a href="https://github.com/KorpoQ">임귀태</a></th>
    <th width="100"><a href="https://github.com/youmdang">염정훈</a></th>
    <th width="100"><a href="https://github.com/hyeoksuJ">장혁수</a></th>
  </tr>
  <tr>
    <td width="100"><img src="https://github.com/kjw0412c.png" width="80"></td>
    <td width="100"><img src="https://github.com/KorpoQ.png" width="80"></td>
    <td width="100"><img src="https://github.com/youmdang.png" width="80"></td>
    <td width="100"><img src="https://github.com/hyeoksuJ.png" width="80"></td>
  </tr>
  <tr>
    <td width="100">@kjw0412c</td>
    <td width="100">@KorpoQ</td>
    <td width="100">@youmdang</td>
    <td width="100">@hyeoksuJ</td>
  </tr>
</table>
<br>

### 팀원이 맡은 역할

| 팀원     | 역할 및 책임                                                                 |
|----------|------------------------------------------------------------------------------|
| **김준완**<br>(팀장) | - 마이 페이지 구현<br> - 레포 관리<br> - 컨벤션 정립<br> - ESLint 적용 |
| **임귀태**<br>(팀원) | - 모달 및 공용 컴포넌트 구현<br> - 목록 페이지 구현 보조<br> - API 구현<br> |
| **장혁수**<br>(팀원)  | - 랜딩 페이지 구현<br> -  마이 페이지 구현 보조<br> - 데이터 셋 제작 및 테스트 |
| **염정훈**<br>(팀원)  | - 목록 페이지 구현<br> - 헤더 컴포넌트 구현<br> - 캐러셀 기능 구현 |

<br>

## 프로젝트 개요
### 주제 및 선정 배경
- 주제 자체에 재미가 있을 것 같았고, 실제로 존재해 사용해볼 수 있는 서비스일 것 같아 선정하게 되었습니다.

### 프로젝트 내용
- 자신이 좋아하는 아이돌을 투표하고 후원할 수 있는 서비스 플랫폼입니다.
- 크레딧을 통해 후원하고 투표해 원하는 아이돌을 차트의 순위를 올릴 수 있습니다.

<br>

## 개발 환경

### 기술 스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<br>

### 프로젝트 구조

```javascript
📂 public
📂 src
┣ 📂 apis
┃ ┗ 📄 idolApi.js
┣ 📂 assets
┃ ┣ 📂 icons
┃ ┗ 📂 LandingPage
┣ 📂 components
┃ ┣ 📂 Modal
┃ ┃ ┣ 📄 Modal.jsx
┃ ┣ 📄 Button.jsx
┃ ┗ ...
┣ 📂 pages
┃ ┣ 📂 LandingPage
┃ ┃ ┗ 📄 LandingPage.jsx
┃ ┣ 📂 ListPage
┃ ┃ ┣ 📂 components
┃ ┃ ┗ 📄 ListPage.jsx
┃ ┣ 📂 MyPage
┣ 📂 contexts
┣ 📂 constants
┣ 📂 styles
┣ 📂 hooks
┗ 📂 utils
```
<br>

## 프로젝트 수행 절차 및 방법
### 프로젝트 사전 기획과 프로젝트 수행 완료 과정을 도식화
<img src="https://github.com/user-attachments/assets/632a6db2-8225-4597-bcd4-25019d2649cb">

## 팀 자체 평가
### 팀원별 종합 의견

**김준완**: 상호 존중과 배려로 원활한 협업이 이루어졌습니다. <br>
다만 데드라인 대처와 R&R 분배가 미흡했습니다. <br>
초기 정책 설정이 더 적극적이었다면 좋았을 것 같다고 느꼈습니다.<br>
<br>
**임귀태**: 문제 해결을 위한 토론이 좋았습니다. <br>
코어 타임 외의 개발 시간 투자가 부족했고 계획 수립이 아쉬웠습니다. <br>
명확한 목표 설정과 세부 계획이 필요하다는 걸 느꼈습니다. <br>
<br>
**염정훈**: 서로 모르는 부분에 대한 도움을 주는 모습이 좋았습니다. <br>
하지만 다른 사람과 공유해야하는 코드의 경우 공유를 위한 수정이 필요했었습니다. <br>
공유되는 코드 부분에 대한 논의가 필요하다고 느꼈습니다. <br>
<br>
**장혁수**: 다들 맡은 역할에 최선을 다하는 모습이 보기 좋습니다. <br>
그러나 의사소통 과정에서 오해가 생겨 개선이 필요했던 것 같습니다. <br>
상대방의 말을 재확인하는 방법이 도움이 될 것 같다고 느꼈습니다. <br>
