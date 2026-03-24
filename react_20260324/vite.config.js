import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//  vite 로 리액트 실행 시 추가적으로 필요한 옵션을 입력 시 사용
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
