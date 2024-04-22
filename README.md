# <span style="color:LightSeaGreen">**Title** :</span> <span style="color:LightSeaGreen">**Del Ray Gourmet.**<span>

# <span style="color:LightSeaGreen">**Project Description**:</span>


* ##  I have created an expo react native app having name <span style="color:Crimson">_**Food-menu**_.</span>

* ##  The main thing is to render specific menu items when we click on the particular filter.

* ##  In this application we will have three filters having names as <span style="color:Crimson">_**APPETIZERS**_, _**MENU ENTREES**_ and _**DESSERTS**_.</span>

* ## When I click on the APPETIZERS it should display all menu items related to APPETIZERS. Similarly, MENU ENTREES and DESSERTS.

* ## Here, I have created _Two_ components <span style="color:MediumVioletRed">_**Main**_ and _**Sections**_</span> in the components folder.
* ## I have created <span style="color:Teal">**top navigation bar**</span> by using react-native-tabs-section-list package. which having tab names as appetizers, main entrees and desserts.
* ##  I have used <span style="color:LightSkyBlue">**Section List**</span> to render menu items section wise.
* ##  <span style="color:LightCoral">_**In the main component**_</span>, I have created an background image an kept address of the restaurent on background image.
* ## Here I have used <span style="color:plum">_**staticData**_</span> folder to store all static data related to appetizers,main entrees and desserts.
* ## I have created two seperate style file for sections and main components. I have imported the files into the components to add required styles.
* ## And I have added auto scrollable to the section list, like when I click the specific filter it will automtically scroll upto the particular section. it will only show the specific section.similarly, other two filters do.
* ##  I wrote <span style="color:DeepSkyBlue">_**unit testing**_</span> to the  components. And I kept all tests in a Tests folder.
* ##  I have installed <span style="color:OrangeRed">_**typescript**_</span> into app to create components with tsx extension.
* ##  I kept all images in assets folder,which I have used in this application.

#  <span style="color:LightSeaGreen">**How to Install and Run the Project:**</span>
* ## Firsly, we need to clone the repository into the system using `git clone (repo link)`.
* ## <span style="color:MediumPurple">_**Node**_</span> should be installed in the system.
* ## Application should have testing library. If not,you need to install jest or testing library `npm install --save-dev @testing-library/react-native`.
* ## Use `npm run start` command to run the application.
* ## To see the output, we need to have <span style="color:DarkTurquoise">_**Andriod studio emulator in case of Android device and Xcode simulator if we have IOS device.**_</span>
* ## If we want to see the output in our mobile,we should have <span style="color:IndianRed">_**Expo app**_</span> in our mobile,it works only if we use expo react native app.
* ## when we run the app, then <span style="color:Tomato">_**terminal will genrate Metro Bundler(QR code)**_</span>,we need to scan this using expo app or Xcode or Android studio.
* ## So,that we can see our app in different devices.

# <span style="color:LightSeaGreen">**Installed Packages:**</span>
* ## In this application I have used navigation,for this I have installed two packages into the app.
    * ## <span style="color:HotPink">**For Top Navigation bar:** `npm i react-native-tabs-section-list` for creating navigation bar along with the auto scrollable functionality.


