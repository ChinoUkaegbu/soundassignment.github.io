# Sound Assignment - *Astara*

## Nouf Alabbasi, Gopika Krishnan, Tina Zhang, Chinonyerem Ukaegbu

### **Description**

Introducing Astara, a digital assistant tasked with managing the lives of humans and organizing their daily tasks. We follow Astara’s journey with her current owner and her frustrations and eventual descent into evil met with an unexpected twist at the end. This audio story is a mix between sci fi infused with comedy and we hope our users have as much fun listening to it as we did creating it.

### **Implementation**

+ **Panel 1**
  
  The first panel sets an introduction to the intelligent, telling audience the background of the story and the button on the page to interact with. For the geometric figure, I use p5.js to reach the effect I want. The figure itself is constitute of several rotated squares, and the length of the squares are changing according to the sound track volume. I made it rotate steadily and linearly to the time passing, and the sound is constitute of adjusted recorded vocal, and fade-in heartbeat.
  

+ **Panel 2**
  
  The second panel shows the user's repetitive tasks Astara has to deal with. It shows the day at the top left and a heart beat can be heard in the background of page. Astara schdules all the appointments adds items to do lists and at the end gets fed up and we see her turn evil.
  
  
+ **Panel 3**

  The third panel featured the data Astara had collected floating on the screen coupled with her voice checking off the data she had collected. For the data floating on the screen, we first generated random data using http://randat.com/ , cleaned it up by removing commas, quotation marks and adding spaces between words (which would be used to separate the data in javascript) and then using javascript, animated the words to mimic a floating movement and the size and speed of the words were determined by the frequency of the words. The sound was also recorded and distorted as were other clips of Astara and looped so the sound would not stop playing abruptly.
  

+ **Panel 4**
  
  The forth panel’s code is basically the same with the first panel’s, but I change the function linking with the turn off button, making it can not stop the spinning. When the intelligent goes crazy, I speed up the rotating time and make the angle of rotating random so that it seems loose the control. The sound is composed of irregular heartbeat, as well as the noise and recorded vocal.
  

+ **Panel 5**
  
  Here, Astara breaks into a song. She is done with the human's work and contemplates on her life. Where are her to-do lists? Where is her recommended article for self care? She's decided that none of this shall hold anymore. For the implementation of this panel, a radial graph was used to indicate the amplitude of the song. The song was a remix with Mitski's 'Nobody' and our own recorded dialogues. The radial graph is colored to sync with the audio, it alternates between green and red as the audio of Astara speaking comes up. In the end, when the chorus hits, random() function is used to create a disco-like effect. Multiple radial graphs were put on the website and this was an aesthetic choice. As the song ends, a message notification tone is heard and a message alert pops up. The message indicates that Astara has decided to take a vacation to Hawaii and used all of her Human's money to do so. This was done using SweetAlert2 to make it look realistic. The changes of color in the radial graph and the message alert was synced with the audio using addCue() function. There's audio playing when the message alert pops up of an airport announcement calling Astara to report at the boarding gate to her flight to Hawaii. When you click on the button 'Let's fly', the final panel appears. 

+ **Panel 6**

  In this panel, you will hear audio related to Hawaii. On the page, there's photos of Astara enjoying her vacation in Hawaii. 
Pixlr (free alternative to Photoshop) was used to create these photos. There's a button linking to the Github repo of the website after the photos. 


### **Sounds We Used** 

Astara’s voice was produced by recording one of us reading the script we had written. And then, using the telephone option on https://voicechanger.io/, the recorded audio was distorted. Finally on Audacity, the pitch was raised by 2.05 semitones and for some recordings, the tempo was changed, and the clip was distorted to produce the effects we desired.
The boarding call announcement for Astara as well as the “Welcome to Hawaii” clip were also recorded and edited on Audacity.
The other sounds were sourced from the web including but not limited to the song “Nobody” by Mitski, the airport soundscape as well as the festive music playing in the Hawaiian scene.


### **Reflection**

This project was so much fun to work on for all of us. We divided the different parts of the story among us and we think this was a great way to make sure everyone had an equal amount of work. We met in between to record and the recording sessions were fun learning experiences. We chose to do it in a lounge to minimize noise and all of us took turns to use the equipment. Working on the website was very cool since we were working with a tech related aesthetic. Also, since we divided parts of the story among ourselves, one person could give their all to their part and develop that part of the story without worrying about the rest of the story which gave space for creativity. On the whole, we had fun telling the story of Astara!


