<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](https://github.com/Fatima-Kabalan/LebTalk/tree/develop#-project-philosophy) • [WIREFRAMES](https://github.com/Fatima-Kabalan/LebTalk/tree/develop#-mockups) • [TECH STACK](https://github.com/Fatima-Kabalan/LebTalk/tree/develop#-tech-stack) • [IMPLEMENTATION](https://github.com/Fatima-Kabalan/LebTalk/tree/develop#-impplementation) • [HOW TO RUN?](https://github.com/Fatima-Kabalan/LebTalk/tree/develop#-how-to-run)**

</div>

<br><br>


<img src="./readme/title2.svg"/>

> The LebTalk app is a learning app that teaches the user how to speak arabic lebanese by listnening to audio and seeing the translate of words in both languages .
> 
> There are several questions for each quiz for each category inorder to make the user practice his new language.

### User Stories
- As a user, I want to learn lebanese in a fast way, so that I can benifit from it
- As a user, I want to get notifications for having new categories added, so that I can check it quickly 
<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing  | Home  |
| -----------------| -----|
| ![Landing](https://github.com/Fatima-Kabalan/LebTalk/blob/develop/readme/figma/Signin.png) | ![Home](https://github.com/Fatima-Kabalan/LebTalk/blob/develop/readme/figma/Home.png) |

| Food Category  | Connecting to Instructors  |
| -----------------| -----|
| ![Artists results](https://github.com/Fatima-Kabalan/LebTalk/blob/develop/readme/figma/FoodPage.png) | ![Artist's Albums](https://github.com/Fatima-Kabalan/LebTalk/blob/develop/readme/figma/Instructors.png) |


<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.



<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing  | Home/Search  |
| -----------------| -----|
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |


<br><br>
<img src="./readme/title6.svg"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```


