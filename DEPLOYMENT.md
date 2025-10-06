# Deployment Guide

This guide will help you deploy your portfolio to Vercel, the recommended platform for Next.js applications.

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

3. **Custom Domain (Optional)**:
   - In your Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Choose deployment settings
   - Deploy!

## 🔧 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update personal information in `src/app/page.tsx`
- [ ] Replace `your.email@example.com` with your actual email
- [ ] Update GitHub links to your repositories
- [ ] Add live demo links for your projects
- [ ] Test the contact form (currently simulated)
- [ ] Update the README.md with your information

## 📝 Environment Variables

If you plan to add a real contact form, you'll need to set up environment variables:

1. **Create `.env.local`**:

   ```bash
   # Email service (e.g., Resend, SendGrid, etc.)
   EMAIL_SERVICE_API_KEY=your_api_key_here
   EMAIL_FROM=your_email@example.com
   EMAIL_TO=your_email@example.com
   ```

2. **Add to Vercel**:
   - Go to your project settings
   - Add environment variables
   - Redeploy

## 🎨 Customization After Deployment

### Update Project Information

1. **Edit project details** in `src/app/page.tsx`
2. **Add live demo links** for your projects
3. **Update contact information**
4. **Customize colors** in Tailwind classes

### Add Real Contact Form

To make the contact form functional:

1. **Choose an email service**:

   - [Resend](https://resend.com) (recommended)
   - [SendGrid](https://sendgrid.com)
   - [EmailJS](https://emailjs.com)

2. **Update ContactForm.tsx**:

   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);

     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData),
       });

       if (response.ok) {
         setSubmitStatus('success');
         setFormData({ name: '', email: '', message: '' });
       } else {
         setSubmitStatus('error');
       }
     } catch (error) {
       setSubmitStatus('error');
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

3. **Create API route** at `src/app/api/contact/route.ts`:

   ```tsx
   import { NextRequest, NextResponse } from 'next/server';
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: NextRequest) {
     try {
       const { name, email, message } = await request.json();

       await resend.emails.send({
         from: 'Portfolio Contact <onboarding@resend.dev>',
         to: [process.env.EMAIL_TO!],
         subject: `New message from ${name}`,
         html: `
           <h2>New message from ${name}</h2>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
         `,
       });

       return NextResponse.json({ success: true });
     } catch (error) {
       return NextResponse.json(
         { error: 'Failed to send email' },
         { status: 500 }
       );
     }
   }
   ```

## 🌐 Alternative Deployment Platforms

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### Railway

1. Connect your GitHub repository
2. Railway auto-detects Next.js
3. Deploy with one click

### AWS Amplify

1. Connect your GitHub repository
2. Choose Next.js framework
3. Configure build settings
4. Deploy!

## 📊 Performance Optimization

After deployment, consider:

- **Image Optimization**: Use Next.js Image component
- **Font Optimization**: Use next/font for custom fonts
- **Bundle Analysis**: Run `npm run build` to check bundle size
- **SEO**: Update metadata in `layout.tsx`

## 🔍 Analytics (Optional)

Add analytics to track visitors:

1. **Google Analytics**:
   ```bash
   npm install @vercel/analytics
   ```
2. **Add to layout.tsx**:

   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }) {
     return (
       <html lang='en'>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

## 🎉 You're Done!

Your portfolio is now live! Share it with potential employers and clients.

**Next Steps**:

- Share your portfolio URL
- Update your LinkedIn profile
- Add the URL to your resume
- Consider adding a blog section
- Keep projects updated with new work

---

Happy coding! 🚀


