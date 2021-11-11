# Sound Assignment - *Astara*

## Nouf Alabbasi, Gopika Krishnan, Tina Zhang, Chinonyerem Ukaegbu

### **Description**

It has been 585 days since March 7th, 2020, the day of school closure at NYUAD. With all classes turning remote, many students reported that the campus residents heavily depend on the campus cats for their mental health and healing. Until there was a cat missing…
Where did the cat go?

This comic project leads the readers to narrowing down the exact place the cat went. Readers get to talk to a catmom, fellow campus cats, and looks around the map, and then the cat-napper calls the reader to tease them, but the cat-napper gets caught at the airport.

### **Implementation**

+ **Panel 1**
  
  The first panel sets an introduction to the intelligent, telling audience the background of the story and the button on the page to interact with. For the geometric figure, I use p5.js to reach the effect I want. The figure itself is constitute of several rotated squares, and the length of the squares are changing according to the sound track volume. I made it rotate steadily and linearly to the time passing, and the sound is constitute of adjusted recorded vocal, and fade-in heartbeat.
  

+ **Panel 2**
  
  The second panel shows the cats and the cat mom being interviewed. This panel provides clues and hints as to where the missing cat might be which influences the decisions the reader makes in the next panel. The images were placed in a grid and the grid-template-areas properties was used to position the images. Then the speech bubbles were downloaded as PNGs with transparent backgrounds. And then, the opacity of the speech bubbles was set to 0 and would only be displayed when the reader hovers over the image.
  
  
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

We found this project to be very fun! It was rather interesting to work on the different parts of the website together and to make some certain changes, discuss how we could make it better, discuss implementations etc. Overall, I believe our expectations for the project were met. We just really wanted the readers to have fun exploring the story and to have a very wholesome experience in total. We also believed the implementation was way less stressful than the first website, now that we've played around with website making so it was a really interesting experience. We hope the readers have as much fun experiencing the comic as we did making it!


### **Interesting Notes**

For some reason, one of the fonts that was in .ttf wasn't loading until we converted it to .otf even though the other fonts were in .ttf! Also, Github takes some time to show the changes you've effected so you have to consider that as well.

