# 🎨 How to Update Your Portfolio

Your portfolio is designed to be easily updated! Just edit the `portfolio-config.ts` file and your website will automatically update.

## 📁 Main Configuration File
**Edit this file:** `client/portfolio-config.ts`

## 🔧 Quick Updates

### 🖼️ To Update Your Photos
1. Upload your photos to any image hosting service:
   - Google Drive (make sure it's public)
   - Imgur
   - Cloudinary
   - Any other image hosting service

2. Get the direct image URL (should end with .jpg, .png, etc.)

3. In `client/portfolio-config.ts`, find the `profileImages` section:
   ```typescript
   profileImages: {
     main: "/placeholder.svg", // Replace with your main photo URL
     about: "/placeholder.svg", // Replace with your about section photo URL
   }
   ```

4. Replace `/placeholder.svg` with your image URLs

### 🚀 To Add New Projects
1. In `client/portfolio-config.ts`, find the `projects` section
2. Copy one of the existing project objects
3. Update the details:
   ```typescript
   {
     name: "Your New Project",
     description: "Description of your project...",
     technologies: ["React", "Node.js", "MongoDB"],
     semester: "Semester 5",
     github: "https://github.com/yourusername/project",
     demo: "https://yourproject.com",
     image: "https://your-image-url.com/image.jpg",
     featured: true
   }
   ```

### 🏅 To Add New Certificates
1. In `client/portfolio-config.ts`, find the `certifications` section
2. **Update the certificates folder link:**
   ```typescript
   certificationsFolder: "https://your-drive-link-here", // Link to view all certificates
   ```
3. Add individual certificates:
   ```typescript
   {
     name: "Your Certificate Name",
     issuer: "Issuing Organization",
     description: "What you learned or achieved",
     date: "2024",
     image: "https://your-certificate-image-url.com/cert.jpg",
     link: "https://verify-certificate-link.com" // Optional
   }
   ```

### 🏆 To Add Co-Curricular Activities
1. In `client/portfolio-config.ts`, find the `coCurricular` section
2. Add a new activity:
   ```typescript
   {
     title: "Your Activity",
     role: "Your Role",
     duration: "Month Year",
     description: "What you did or achieved",
     icon: "trophy" // Options: trophy, users, camera, award
   }
   ```

### 📚 To Add Education
1. In `client/portfolio-config.ts`, find the `education` section
2. Add new education entry:
   ```typescript
   {
     institution: "School/College Name",
     degree: "Degree Name",
     duration: "Start - End",
     score: "85%" or "8.5/10.0 CGPA",
     scoreType: "percentage" or "cgpa",
     coursework: ["Subject 1", "Subject 2", "Subject 3"]
   }
   ```

### 💻 To Update Skills
1. In `client/portfolio-config.ts`, find the `technologies` section
2. Update the arrays:
   ```typescript
   languages: ["Python", "C++", "C", "Java"], // Core programming languages
   frameworks: ["MERN Stack", "Django"], // Main frameworks & libraries
   tools: ["Git", "Figma", "AI Tools"], // Development tools

   skillLevels: {
     "JavaScript": 90, // Update skill levels (0-100)
     "Python": 85,
     // Add more skills
   }
   ```

## 💡 Pro Tips

1. **Image URLs**: Make sure your image URLs are direct links and accessible
2. **GitHub Links**: Update placeholder GitHub links with your actual repositories
3. **Demo Links**: Add working demo links for your projects
4. **Save & Refresh**: After editing, save the file and refresh your website

## 🆘 Need Help?

If you need to add more complex features or sections, you can:
1. Edit the individual component files in `client/components/sections/`
2. Modify the main data file at `client/data/resume.ts`
3. Update styling in `client/global.css` or component files

---

**Happy coding! 🚀**
