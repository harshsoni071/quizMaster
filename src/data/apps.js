// // src/data/apps.js
// // ─────────────────────────────────────────────────────────────
// // Each app object:
// //   id          – unique string
// //   name        – display name
// //   description – short tagline (max ~80 chars)
// //   logo        – URL to app icon (replace with your own images)
// //   playStoreLink – full Play Store (or App Store) URL
// //   category    – one of the CATEGORIES list below
// //   rating      – 1.0 to 5.0
// //   downloads   – short download count string
// //   featured    – boolean (shows first, highlighted)
// // ─────────────────────────────────────────────────────────────

// export const CATEGORIES = ['All', 'Productivity', 'Fitness', 'Finance', 'Creative', 'Social', 'Utilities']

// export const apps = [
//   {
//     id: 'focusflow',
//     name: 'FocusFlow',
//     description: 'Deep work sessions with Pomodoro timers, task lists, and distraction blocking.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=focusflow&backgroundColor=4f46e5&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Productivity',
//     rating: 4.7,
//     downloads: '2M+',
//     featured: true,
//   },
//   {
//     id: 'pocketlift',
//     name: 'PocketLift',
//     description: 'Smart workout tracker with AI-powered form feedback and personalized plans.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=pocketlift&backgroundColor=10b981&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Fitness',
//     rating: 4.5,
//     downloads: '1.4M+',
//     featured: false,
//   },
//   {
//     id: 'coinage',
//     name: 'Coinage',
//     description: 'Expense tracking and budget planner with beautiful charts and bill reminders.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=coinage&backgroundColor=f59e0b&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Finance',
//     rating: 4.8,
//     downloads: '3.2M+',
//     featured: false,
//   },
//   {
//     id: 'sketchwave',
//     name: 'SketchWave',
//     description: 'Minimalist drawing and illustration canvas with layer support and export.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=sketchwave&backgroundColor=ec4899&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Creative',
//     rating: 4.4,
//     downloads: '890K+',
//     featured: false,
//   },
//   {
//     id: 'ripple',
//     name: 'Ripple',
//     description: 'Calm social journaling — share moments privately with your closest circle.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=ripple&backgroundColor=06b6d4&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Social',
//     rating: 4.3,
//     downloads: '560K+',
//     featured: false,
//   },
//   {
//     id: 'voltbattery',
//     name: 'VoltBattery',
//     description: 'Real-time battery health monitor with charge cycles and temperature alerts.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=voltbattery&backgroundColor=84cc16&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Utilities',
//     rating: 4.6,
//     downloads: '4.1M+',
//     featured: false,
//   },
//   {
//     id: 'claritynotes',
//     name: 'ClarityNotes',
//     description: 'Voice-to-text notes with auto-transcription, tagging, and smart search.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=claritynotes&backgroundColor=6366f1&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Productivity',
//     rating: 4.9,
//     downloads: '1.1M+',
//     featured: false,
//   },
//   {
//     id: 'mindpulse',
//     name: 'MindPulse',
//     description: 'Guided meditation and breathwork sessions for stress, sleep, and focus.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=mindpulse&backgroundColor=a855f7&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Fitness',
//     rating: 4.7,
//     downloads: '2.8M+',
//     featured: false,
//   },
//   {
//     id: 'safevault',
//     name: 'SafeVault',
//     description: 'Encrypted password manager with biometric login and breach detection.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=safevault&backgroundColor=ef4444&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Utilities',
//     rating: 4.8,
//     downloads: '5.5M+',
//     featured: false,
//   },
//   {
//     id: 'lenscraft',
//     name: 'LensCraft',
//     description: 'Pro photo editor with film presets, curves, and one-tap sky replacement.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=lenscraft&backgroundColor=f97316&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Creative',
//     rating: 4.5,
//     downloads: '1.7M+',
//     featured: false,
//   },
//   {
//     id: 'splitwise2',
//     name: 'SplitEasy',
//     description: 'Group expense splitting made effortless — trips, dinners, flatmates sorted.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=spliteasy&backgroundColor=14b8a6&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Finance',
//     rating: 4.6,
//     downloads: '980K+',
//     featured: false,
//   },
//   {
//     id: 'threadspace',
//     name: 'ThreadSpace',
//     description: 'Community forums reimagined — follow topics you love, mute everything else.',
//     logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=threadspace&backgroundColor=8b5cf6&size=128',
//     playStoreLink: 'https://play.google.com/store',
//     category: 'Social',
//     rating: 4.2,
//     downloads: '430K+',
//     featured: false,
//   },
// ]

// src/data/apps.js
// ─────────────────────────────────────────────────────────────
// Each app object:
//   id          – unique string
//   name        – display name
//   description – short tagline (max ~80 chars)
//   logo        – URL to app icon (replace with your own images)
//   playStoreLink – full Play Store (or App Store) URL
//   category    – one of the CATEGORIES list below
//   rating      – 1.0 to 5.0
//   downloads   – short download count string
//   featured    – boolean (shows first, highlighted)
// ─────────────────────────────────────────────────────────────

export const CATEGORIES = ['All', 'Productivity', 'Fitness', 'Finance', 'Creative', 'Social', 'Utilities']

export const apps = [
  {
    id: 'SSC Master',
    name: 'SSC Master',
    description: 'Deep work sessions with Pomodoro timers, task lists, and distraction blocking.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=focusflow&backgroundColor=4f46e5&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Productivity',
    rating: 4.7,
    downloads: '2M+',
    featured: true,
  },
  {
    id: 'UPSC Master',
    name: 'UPSC Master',
    description: 'Smart workout tracker with AI-powered form feedback and personalized plans.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=pocketlift&backgroundColor=10b981&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Fitness',
    rating: 4.5,
    downloads: '1.4M+',
    featured: false,
  },
  {
    id: 'Railway Master',
    name: 'Railway Master',
    description: 'Expense tracking and budget planner with beautiful charts and bill reminders.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=coinage&backgroundColor=f59e0b&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Finance',
    rating: 4.8,
    downloads: '3.2M+',
    featured: false,
  },
  {
    id: 'Banking Master',
    name: 'Banking Master',
    description: 'Minimalist drawing and illustration canvas with layer support and export.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=sketchwave&backgroundColor=ec4899&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Creative',
    rating: 4.4,
    downloads: '890K+',
    featured: false,
  },
  {
    id: 'Defence Master',
    name: 'Defence Master',
    description: 'Calm social journaling — share moments privately with your closest circle.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=ripple&backgroundColor=06b6d4&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Social',
    rating: 4.3,
    downloads: '560K+',
    featured: false,
  },
  {
    id: 'Police Exam Master',
    name: 'Police Exam Master',
    description: 'Real-time battery health monitor with charge cycles and temperature alerts.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=voltbattery&backgroundColor=84cc16&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Utilities',
    rating: 4.6,
    downloads: '4.1M+',
    featured: false,
  },
  {
    id: 'Sarkari Exam Master',
    name: 'Sarkari Exam Master',
    description: 'Voice-to-text notes with auto-transcription, tagging, and smart search.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=claritynotes&backgroundColor=6366f1&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Productivity',
    rating: 4.9,
    downloads: '1.1M+',
    featured: false,
  },
  {
    id: 'Govt Exam Master',
    name: 'Govt Exam Master',
    description: 'Guided meditation and breathwork sessions for stress, sleep, and focus.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=mindpulse&backgroundColor=a855f7&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Fitness',
    rating: 4.7,
    downloads: '2.8M+',
    featured: false,
  },
  {
    id: 'Competitive Master',
    name: 'Competitive Master',
    description: 'Encrypted password manager with biometric login and breach detection.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=safevault&backgroundColor=ef4444&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Utilities',
    rating: 4.8,
    downloads: '5.5M+',
    featured: false,
  },
  {
    id: 'Mock Test Master',
    name: 'Mock Test Master',
    description: 'Pro photo editor with film presets, curves, and one-tap sky replacement.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=lenscraft&backgroundColor=f97316&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Creative',
    rating: 4.5,
    downloads: '1.7M+',
    featured: false,
  },
  {
    id: 'Practice Test Master',
    name: 'Practice Test Master',
    description: 'Group expense splitting made effortless — trips, dinners, flatmates sorted.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=spliteasy&backgroundColor=14b8a6&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Finance',
    rating: 4.6,
    downloads: '980K+',
    featured: false,
  },
  {
    id: 'Test Series Master',
    name: 'Test Series Master',
    description: 'Community forums reimagined — follow topics you love, mute everything else.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=threadspace&backgroundColor=8b5cf6&size=128',
    playStoreLink: 'https://play.google.com/store',
    category: 'Social',
    rating: 4.2,
    downloads: '430K+',
    featured: false,
  },
]
