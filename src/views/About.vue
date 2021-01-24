<template>
  <div class="bookmark page">
    <h1
    class="mt-6"
    >About the CookBook</h1>
    <v-container>

      <v-card
        elevation="5"
        class="mt-3 my-12 white--text"
        max-width="374"
        color="#B38A0B"
      >
      <v-card-title>Why</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          </v-row>

          <div
          class="my-4 subtitle-1 white--text"
          >We created the CookBook in order give users an easy way to create, save and share recipes.
          Once signing up, feel free to explore the site and learn what's available on the CookBook.
          </div>
        </v-card-text>
      </v-card>
      

      <v-card
        elevation="5"
        class="mx-auto my-12 white--text"
        max-width="374"
        color="#B38A0B"
      >
      <v-card-title>Where</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          </v-row>

          <div
          class="my-4 subtitle-1 white--text"
          >We're everywhere, or everywhere the cloud reaches. Any device with access to the Web brings our site to you. 
          To download our app, select your device from the choices below and follow the guide.</div>
        </v-card-text>
        <v-card-actions>
      <v-btn
        color="white"
        text
        href="#android"
      >
        Android
      </v-btn>

      <v-btn
        color="white"
        text
        href="#iOS"
      >
        iOS
      </v-btn>
    </v-card-actions>
      </v-card>

      <v-card
        elevation="5"
        class="mr-0 mx-auto mb-12 white--text"
        max-width="374"
        color="#B38A0B"
      >
      <v-card-title>When</v-card-title>
      <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          </v-row>

          <div
          class="my-4 subtitle-1 white--text"
          >The Cookbook first went live 2021. We are always growing and improving, so look out for changes every few weeks.</div>
        </v-card-text>
      </v-card>
    </v-container>

      <v-container
      id="iOS"
      class="pt-6"
      >
        <p
        class="text-h6"
        >
          How to install the iOS mobile app
        </p>
        <v-container>
          <v-row
          no-gutters
          justify="center"
          align="center"
          >
            <v-col
            cols="12"
            sm="5"
            >
            <p>
              As of January 2021, the only way to install web applications on iOS is by using Safari.
              If you are not currently doing so, open our site in the Safari Web Browser. 
            </p>
            <p>
              Select the share option. Something should appear that is similar to the picture shown.
              Choose Add to Home Screen and select Add afterwards.
            </p>
            <p>
              That's all! Now our application will run natively on your device.
            </p>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col
            cols="12"
            sm="5"
            >
            <v-img
            max-width="15rem"
            class="mx-auto my-5"
            :aspect-ratio="17/22"
            src="/images/AddToHomeSafari.jpeg"
            lazy-src="/images/AddToHomeSafari.jpeg"
            ></v-img>
            </v-col>
          </v-row>
            
            
        </v-container>
      
      </v-container>

      <v-container
      id="android"
      >
        <p
        class="text-h6"
        >
        How to install the Android mobile app
        </p>

        <v-container>
          <v-row
          no-gutters
          justify="center"
          align="center"
          >
            <v-col
            cols="12"
            sm="5"
            order="2"
            >
              <p>
                This tutorial and example is shown in Google Chrome. 
                If you are using a different browser and having trouble, trying using Chrome instead.
              </p>
              <p>
                Downloading our Android app is pretty simple. If it hasn't appeared already, 
                a message should show at the bottom of the page prompting you to download the app.
              </p>

              <p>
                Select the prompt and follow the instructions. It's as simple as that! 
                The application is now installed on your homescreen.
              </p>
            </v-col>

            <v-col
            cols="12"
            sm="5"
            order="1"
            >
              <v-img
              max-width="15rem"
              class="mx-auto my-5"
              :aspect-ratio="10/17"
              src="/images/AndroidPWA_OnLoad.jpg"
              lazy-src="/images/AndroidPWA_OnLoad.jpg"
              ></v-img>
            </v-col>

          </v-row>

        </v-container>

        <v-divider class="my-6"></v-divider>

        <v-container>
          <v-row
          no-gutters
          justify="center"
          align="center"
          >
            <v-col
            col="12"
            sm="5"
            width="25ch"
            >
              <p>
                This tutorial and example is shown in Google Chrome. 
                If you are using a different browser and having trouble, trying using Chrome instead.
              </p>
              <p>
                If the prompt does not appear when you first enter the site, go to the browser settings.
                Select Install app from the options provided.
              </p>

              <p>
                Follow the steps given by the browser. And that's all! 
                Now the mobile app is downloaded onto your device.
              </p>
              
            </v-col>

            <v-col
            col="12"
            sm="5"
            >
              <v-img
              width="17rem"
              class="mx-auto my-5"
              :aspect-ratio="10/17"
              src="/images/AndroidPWA_Settings.jpg"
              lazy-src="/images/AndroidPWA_Settings.jpg"
              ></v-img>
            </v-col>

          </v-row>
        </v-container>
      
      </v-container>
  </div>
</template>