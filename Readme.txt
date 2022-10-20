# Project-Spotify
In this project, I am using Html,Css,Javascript for Frontend Development
File1 name: "Index.html"(Html Code)
File2 name: "Style.css"(css code)
File3 name: "Script.js"(javascript code)

################ --> HTML And Css <-- #############################################
1.)Firstly I am going to explain file1 name :"index.html" And File2 name: "Style.css".
These files are consists of "Html"(Hyper Text Markup Language) And "Css"(Cascading Style Sheet) code ,which is used to make structure and decoration for web page.

I am starting with explaning tags:-------->

In head tag, I've used two "link rel" tags to connect the "Style.css" file with html and other file is icon for web page.
In body tag, First of all, I"ve created navbar with the help of "nav" tag with "ul" tag (unordered list).

I've used both in flex display and used some margin and padding for adjustment(css) and then I make background:black for better finish,
and also text color: white and give a height of 60px to the nav with the font -family:'Ubuntu' 'sans-serif',

After that I've created a "Div" with container class.
In container class,there is one more class "songlist"---> This class is used to create song lists. 

In songlist class, I created 7 "div" ,named as Songitems, this class is used to create songlist, 
Add Images using "img" tag and but in this class I've use javascript to add name and images to the container class. 
"CSS" ----->
container class ----->
    min-height: 75vh;
    background-color: black;
    color: white;
    display: flex;
    margin:23px auto;
    width: 70%;
    border-radius: 13px;
    background-image: url();
After that make a banner class for background gif, In this class using Justify-content:center and align-items:center.

At Last create a footer for progressbar and also play,pause buttons.
Using FontAwesome ------>
* To create play button and pause button-->
code---->
<script src="https://kit.fontawesome.com/a21ef0aaf8.js" crossorigin="anonymous"></script>
<i class="fas fa-fast-backward"></i>
            <i class="fas fa-3x fa-play-circle" id="masterplay"></i>
            <i class="fas fa-fast-forward"></i>
By using javascript ,I've created progressbar,play(pause),PlayNexSong,changing the opacity of the gif.

############################ --> JavaScript(JS) <-- #####################################
In this I am going to explain about javascript, How to make those those works. 
Javascript is connected with main "HTML" file by using "script" tag in "Body" tag .
-----><script src="js/script.js"></script>

First of all Initilise the variables :
By using the "let" I've created 6 variables :
* let songindex=0; ------------------> This variable is used to tell the index of songs varibales.
* let audioElement =new Audio('songs/1.mp3');------>This variable is used to select the audio element present in our files.
* let masterplay= document.getElementById('masterplay');------->
* let myprogressbar= document.getElementById('myprogressbar');
* let gif= document.getElementById('gif');
* let songItem=Array.from(document.getElementsByClassName('songItem'));