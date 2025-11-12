# GoConnectAI Site (Next.js + Tailwind)

This is a deploy-ready site zipped for upload to **Vercel**.

## Deploy (upload method)
1. Go to https://vercel.com/new
2. Click **Import Project → Upload** and drag this zip.
3. Vercel detects Next.js and deploys automatically.
4. Your site will be live at a *.vercel.app URL.
5. Add your custom domain in **Vercel → Domains**.

## Local dev (optional)
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Contact form
Replace the `action` attribute in `app/page.tsx` with your **Formspree** endpoint or Make webhook.
