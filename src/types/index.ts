// ===== Types =====

export interface Profile {
  id: string
  name: string
  age: number
  occupation: string
  location: string
  distance: string
  bio: string
  tags: string[]
  images: string[]
  verified: boolean
  premium: boolean
  compatibilityScore: number
  online: boolean
}

export interface Match {
  id: string
  profileId: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: number
  online: boolean
}

export interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  reviews: number
  pricePerNight: number
  image: string
  tags: string[]
  amenities: string[]
  couple_friendly: boolean
}

export interface DecorPackage {
  id: string
  name: string
  type: 'romantic' | 'anniversary' | 'proposal' | 'birthday'
  price: number
  description: string
  includes: string[]
  image: string
  popular: boolean
}

export interface Event {
  id: string
  name: string
  type: 'candle_dinner' | 'surprise' | 'beach' | 'rooftop'
  price: number
  description: string
  duration: string
  includes: string[]
  image: string
  rating: number
  reviews: number
}

export interface AIReminder {
  id: string
  type: 'call' | 'message' | 'anniversary' | 'birthday' | 'date'
  title: string
  description: string
  time: string
  person: string
  completed: boolean
}

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'ai' | 'match'
  timestamp: string
  type?: 'text' | 'suggestion' | 'booking' | 'reminder'
}
