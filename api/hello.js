// Vercel API route
export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Portfolio API is working!',
    timestamp: new Date().toISOString()
  });
}
