// course.component.ts

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core'; // Import OnInit
import { Router } from '@angular/router'; // Import Router

interface Session {
  title: string;
  videoUrl?: string; // The YouTube video ID
  thumbnailUrl?: string; // The URL for the video's thumbnail image
}

// Define the Module interface, which includes an array of Session objects
interface Module {
  title: string;
  sessions: Session[];
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit{
  public accordionState: { [index: number]: boolean } = {};
  public currentVideoUrl: string | null = null;

  constructor(private router: Router) {} // Inject the Router service

  ngOnInit() {
    // Set a default video URL during the initialization of the component
    const defaultVideoUrl = 'DEFAULT_VIDEO_ID'; // Replace with your desired default video ID
    this.currentVideoUrl = `https://www.youtube.com/embed/${defaultVideoUrl}`;
  }

  onSessionClick(session: Session): void {
    // Check if the clicked session is a 'Session Test'
    if (session.title === 'Session Test') {
      this.router.navigateByUrl('/welcome'); // Navigate to the welcome route
    } else {
      // Otherwise, set the video URL as usual
      console.log('Session clicked:', session.title);
      this.currentVideoUrl = session.videoUrl ? `https://www.youtube.com/embed/${session.videoUrl}` : null;
    }
  }

  toggleAccordionItem(index: number): void {
    this.accordionState[index] = !this.accordionState[index];
  }

  // Expanded modules array with more typewriting topics and sessions
  public modules = [
    {
      title: 'Typewriting Basics',
      sessions: [
        {
          title: 'Introduction to Typewriting',
          videoUrl: '0dZBeI5Wa8E',
          thumbnailUrl: 'https://img.youtube.com/vi/0dZBeI5Wa8E/0.jpg'
        },
        {
          title: 'Understanding the Keyboard',
          videoUrl: 'n-BRC_Pe8ig',
          thumbnailUrl: 'https://img.youtube.com/vi/n-BRC_Pe8ig/0.jpg'
        },
        {
          title: 'Home Row Keys',
          videoUrl: 'syZg8-cSMYs',
          thumbnailUrl: 'https://img.youtube.com/vi/syZg8-cSMYs/0.jpg'
        },
        {
          title: 'Upper Row Keys',
          videoUrl: 'G7srS_X8rsA',
          thumbnailUrl: 'https://img.youtube.com/vi/G7srS_X8rsA/0.jpg'
        },
        {
          title: 'Lower Row Keys',
          videoUrl: '4obx9t9AS4s',
          thumbnailUrl: 'https://img.youtube.com/vi/4obx9t9AS4s/0.jpg'
        },
        {
          title: 'Session Test'
        },
        // ... other sessions
      ]
    },
    {
      title: 'Speed Building',
      sessions: [
        {
          title: 'Finger Placement Exercises',
          videoUrl: 'gZ8h_YHhCds',
          thumbnailUrl: 'https://img.youtube.com/vi/gZ8h_YHhCds/0.jpg'
        },
        {
          title: 'Increasing Typing Speed',
          videoUrl: 'VIDEO_ID_7',
          thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID_7/0.jpg'
        },
        {
          title: 'Accuracy Training',
          videoUrl: 'VIDEO_ID_8',
          thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID_8/0.jpg'
        },
        {
          title: 'Typing Drills',
          videoUrl: 'VIDEO_ID_9',
          thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID_9/0.jpg'
        },
        {
          title: 'Session Test'
        },
        // ... other sessions
      ]
    },
    {
      title: 'Advanced Techniques',
      sessions: [
        { title: 'Professional Typewriting Tips' },
        { title: 'Ergonomics and Typewriting' },
        { title: 'Advanced Punctuation' },
        { title: 'Numeric Keypad Mastery' },
        { title: 'Session Test' }
        // ... other sessions
      ]
    },
    {
      title: 'Special Characters Typing',
      sessions: [
        { title: 'Symbols and Special Characters' },
        { title: 'Using Alt Codes' },
        { title: 'Emojis and Non-Standard Characters' },
        { title: 'Session Test' }
        // ... other sessions
      ]
    },
    {
      title: 'Typewriting for Coding',
      sessions: [
        { title: 'Keyboard Shortcuts for Developers' },
        { title: 'Typing Special Syntax Quickly' },
        { title: 'Navigating Code with the Keyboard' },
        { title: 'Session Test' }
        // ... other sessions
      ]
    },
    {
      title: 'Career Skills',
      sessions: [
        { title: 'Typing for Transcription Jobs' },
        { title: 'Resume Building for Typists' },
        { title: 'Interview Preparation for Clerical Roles' },
        { title: 'Session Test' },

        // ... other sessions
      ]
    }
    // ... other modules/topics
  ];
}