# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 2025-10-20
    # cd my_app : cd 는 자식 폴더로 이동할때
    # main.jsk 내 import : 외부 파일을 가져오기
    # react 핵심 기술
        | 기술 요소                 | 역할                                           |
        | ------------------------ | ---------------------------------------------- |
        | **JSX**                  | UI를 선언적으로 작성하는 문법                    |
        | **Virtual DOM**          | 실제 DOM 대신 비교용으로 사용하는 JavaScript 객체 |
        | **Reconciliation**       | 이전 가상 DOM과 새로운 가상 DOM 비교             |
        | **ReactDOM.render**      | 앱을 브라우저 DOM에 연결                         |
        | **Hooks (예: useState)** | 함수형 컴포넌트에서 상태 관리                     |
        | **Event Handling**       | 사용자 인터랙션 처리                             |
    # SPA(single page application)
        브라우저가 최초로 index.html 하나를 받음
        JavaScript 프레임워크(예: React, Vue, Angular)가 실행됨
        사용자의 요청(페이지 이동 등)이 발생하면
        → 서버에 HTML 요청 ❌
        → 대신 API 요청으로 데이터만 가져와서
        → 화면 일부만 갱신 ✅

    # Virtual DOM
        실제 DOM을 직접 건드리지 않고, 메모리 상의 복제본을 통해 변경점을 계산해서 필요한 부분만 효율적으로 업데이트하는 기술.
    
    # React는 이전 Virtual DOM과 새 Virtual DOM을 비교(diff)해서 어떤 부분이 바뀌었는지 계산합니다.