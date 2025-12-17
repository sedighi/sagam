import { defineConfig } from 'vite'

export default defineConfig({
    base: '/sagam/', // نام مخزن گیت‌هاب شما
    server: {
        port: 5173,
        open: true
    }
})
