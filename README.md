# The Cloud Engineer — Portfolio Website

This is the personal portfolio website of **Waseem Syed**, a Certified **AWS CloudOps Engineer – Associate** and **AWS Cloud Practitioner**, showcasing cloud projects, certifications, and technical blogs.  
The portfolio reflects Waseem’s journey from Amazon **Process Control Specialist (Central Flow)** to a dedicated **AWS Cloud Support Engineer**, demonstrating expertise in automation, infrastructure-as-code, and cloud architecture.

---

## Live Demo

**Website:** [https://waseem-syed.click](https://waseem-syed.click)

---

## Project Overview

This portfolio website highlights:

- AWS projects with linked GitHub repositories and architecture previews  
- Certifications and technical achievements  
- Blog articles on AWS troubleshooting, optimization, and best practices  
- Responsive layout built using **HTML, CSS, Bootstrap, and JavaScript**  
- Deployment and hosting automated with **AWS Amplify**, **S3**, and **CloudFront**  
- CI/CD pipeline connected to **GitHub** for automatic build and release  

---

## Tech Stack

| Category | Technology Used |
|-----------|----------------|
| Frontend  | HTML5, CSS3, Bootstrap 4, JavaScript, jQuery |
| Animations | Owl Carousel, Typed.js, Fancybox |
| Infrastructure as Code | AWS CloudFormation (`p-infrastructure-stack.ts`) |
| Hosting & CI/CD | **AWS Amplify**, AWS S3, AWS CloudFront, GitHub Actions |
| Domain & DNS | AWS Route 53 |
| Version Control | Git & GitHub |

---

## AWS Amplify — Hosting & CI/CD

### What is AWS Amplify?

**AWS Amplify** is a managed service that simplifies the process of **building, deploying, and hosting web applications**.  
It integrates directly with GitHub repositories and automatically handles the **CI/CD pipeline**, so every time you push code to your main branch, Amplify:
1. Pulls the latest code from GitHub  
2. Builds the project (HTML/CSS/JS)  
3. Deploys the build artifacts to an S3 backend managed by Amplify  
4. Distributes content globally using CloudFront  

This creates a fully **automated and version-controlled cloud deployment** pipeline.

---

### How I Integrated AWS Amplify

1. **Connected GitHub Repository**
   - In the AWS Amplify Console, I selected *"Connect App" → GitHub*.
   - Authorized Amplify to access my repo `portfolio-with-amplify`.
   - Selected the main branch for automatic builds.

2. **Configured Build Settings**
   Amplify automatically detected the static website framework and generated a default `amplify.yml` build file:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - echo "Static website - no build step needed"
     artifacts:
       baseDirectory: /
       files:
         - '**/*'
     cache:
       paths: []
   ```

3. **Deployment Process**
   - Amplify provisions backend resources using **CloudFormation**.
   - The site is stored in an **S3 bucket** managed by Amplify.
   - It automatically sets up a **CloudFront distribution** for caching and HTTPS.
   - DNS is linked via **Route 53** for my custom domain `waseem-syed.click`.

4. **Continuous Deployment**
   - On each commit to `main`, Amplify rebuilds and redeploys automatically.
   - This ensures the site is always up to date without manual uploads.

---

### 🔹 How It Works (Pipeline Flow)

```
GitHub → AWS Amplify → S3 (static assets) → CloudFront (CDN) → Route 53 (Domain)
```

**Amplify Workflow:**
1. Detects Git push on `main`
2. Executes `amplify.yml` build script
3. Syncs compiled assets to S3 bucket
4. Invalidate CloudFront cache
5. Serve updated website globally via HTTPS

This pipeline ensures **zero-downtime deployments**, **version rollback**, and **automated scaling**.

---

## 📁 Project Structure

```
portfolio-website/
├── index.html
├── css/
│   ├── style.css
│   ├── superslides.css
│   └── owl.carousel.min.css
├── js/
│   ├── script.js
│   ├── countUp.js
│   ├── jquery.superslides.min.js
│   └── typed.min.js
├── img/
│   ├── slide1.jpg, slide2.jpg, slide3.jpg
│   ├── about.png
│   └── portfolio/thumbnails/
│       ├── iam.png
│       ├── cloudops.png
│       ├── s3+cf+github.png
│       └── ...
├── p-infrastructure-stack.ts   # CloudFormation Stack (IaC)
└── README.md
```

---

## 🧠 Key Features

- 🎞️ Full-screen image slider with dynamic text animations  
- 🧑‍💻 Categorized portfolio (Projects, Certificates, Blogs)  
- 📚 “About Me” section aligned with AWS CloudOps journey  
- ✉️ Direct contact button (mailto integration)  
- ⚡ Lightweight, responsive design optimized for mobile  
- 🔄 Automated CI/CD deployment via AWS Amplify  

---

## ⚙️ Related AWS Services

| Service | Purpose |
|----------|----------|
| **S3** | Static content storage (HTML, CSS, JS, Images) |
| **CloudFront** | Global CDN and HTTPS delivery |
| **Route 53** | Domain name resolution |
| **AWS Amplify** | CI/CD hosting and automatic deployment |
| **CloudFormation** | Infrastructure as Code (template in `p-infrastructure-stack.ts`) |
| **GitHub Actions** | Optional CI hooks for pre-deploy testing |

---

## 🧑‍💻 Author

**Waseem Syed**  
- 🌐 [Portfolio Website](https://waseem-syed.click)  
- 💼 [LinkedIn](https://linkedin.com/in/waseem465syed)  
- ✍️ [Medium Blog](https://medium.com/@waseem.syed465)  
- 📧 waseem.syed465@gmail.com  

---

## 🪪 License

This project is licensed under the **MIT License** — feel free to fork and customize for learning or personal use.

---

## ⭐ Acknowledgements

Special thanks to the **AWS Cloud Community**, **Amazon mentors**, and open-source developers whose tools made this project possible.
