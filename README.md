# 🤟 SignBridge
### Real-Time Sign Language Translator

SignBridge is an AI-powered web application designed to help bridge the communication gap between deaf or hard-of-hearing individuals and people who rely on spoken language.

The system uses computer vision and machine learning to detect hand gestures through a webcam and translate sign language into readable text and optional speech output in real time.

---

## 🌍 Problem

More than **70 million people worldwide use sign language as their primary form of communication**, yet most hearing individuals cannot understand it. This creates communication barriers in education, healthcare, workplaces, and everyday interactions.

SignBridge aims to reduce this barrier by providing an accessible translation system that works directly in a web browser.

---

## 🚀 Features

- ✋ Real-time sign language recognition using webcam
- 🤖 AI-based gesture detection
- 💬 Sign → Text translation
- 🔊 Optional Text-to-Speech output
- 🌐 Browser-based application
- ⚡ Fast real-time processing

---

## 🧠 How It Works

The system processes gestures in several stages:

1. **Video Capture**  
   The webcam captures live video of the user's hand gestures.

2. **Hand Detection**  
   Computer vision detects hand landmarks and tracks movement.

3. **Gesture Recognition**  
   A trained machine learning model classifies gestures.

4. **Translation**  
   The recognized gesture is converted into text.

5. **Output**  
   The translated message is displayed on the screen and can be spoken using text-to-speech.

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- TailwindCSS

### Backend
- Python
- FastAPI

### AI / Computer Vision
- MediaPipe
- OpenCV
- NumPy

### Other
- Web Speech API
- WebSockets

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/NexaSag3/Signbridge.git
cd Signbridge
