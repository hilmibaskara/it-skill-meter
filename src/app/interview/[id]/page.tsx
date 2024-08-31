'use client';

import { useState, useRef } from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import Navbar from "@/src/components/Navbar";

export default function InterviewDetail({ params }: { params: { id: string }; }) {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [recognitionResult, setRecognitionResult] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);

  // Start Video Recording
  const handleStartRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      setChunks([]);

      mediaRecorder.ondataavailable = (e) => {
        setChunks((prev) => [...prev, e.data]);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };

      mediaRecorder.start();
      setRecording(true);
    }
  };

  // Stop Video Recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  // Text to Speech
  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance("This is an example of text to speech.");
    window.speechSynthesis.speak(utterance);
  };

  // Speech to Text
  const handleSpeechToText = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setRecognitionResult(transcript);
      };
    } else {
      console.error("Speech Recognition API not supported in this browser.");
    }
  };

  return (
    <div className="pt-32 md:h-screen">
      <Navbar />
      <div className="bg-white w-[530px] h-[676px] mx-auto p-7 rounded-xl">
        {/* Video Player */}
        <div className="w-[400px] h-[300px] bg-[#808080] mx-auto mt-10">
          <video ref={videoRef} autoPlay className="w-full h-full" />
          {videoURL && <video src={videoURL} controls className="w-full h-full mt-4" />}
        </div>
        <div className="flex flex-row justify-between px-[120px] pt-8">
          {/* Text to Speech */}
          <HiSpeakerWave
            className="p-4 bg-[#d9d9d9] text-black w-[60px] h-[60px] rounded-full cursor-pointer"
            onClick={handleTextToSpeech}
          />
          {/* Speech to Text */}
          <FaMicrophone
            className="p-4 bg-[#d9d9d9] text-black w-[60px] h-[60px] rounded-full cursor-pointer"
            onClick={handleSpeechToText}
          />
        </div>
        <div className="mt-[20px] text-center">
          {recording ? (
            <button onClick={handleStopRecording} className="m-2 rounded-md bg-[#e6545f] text-white px-4 py-2">
              Stop Recording
            </button>
          ) : (
            <button onClick={handleStartRecording} className="m-2 rounded-md bg-[#e6545f] text-white px-4 py-2">
              Start Recording
            </button>
          )}
          <p className="mt-4">{recognitionResult}</p>
        </div>
        <div >
          <hr className="my-4 border-black" />
          <div className="flex flex-row justify-between">
            <button className="m-2 rounded-md border border-[#7f7f7f] px-4 py-2 text-[#7f7f7f]">
              Batal
            </button>
            <button onClick={handleStartRecording} className="m-2 rounded-md bg-[#e6545f] text-white px-4 py-2">
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
