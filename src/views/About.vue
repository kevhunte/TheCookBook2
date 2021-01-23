<template>
  <div class="bookmark page">
    <h1
    class="mt-6"
    >About the Cookbook</h1>
    <v-container>
      <v-card
        elevation="5"
        class="mt-3 mb-12 white--text"
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
          >The Cookbook was born in 2021! We are always growing and improving, so look out for changes every few weeks.</div>
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
          >We're everywhere. Any device with access to the web brings our site to you. 
          To download our app, view your device below and follow the guide provided.</div>
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
        class="mr-0 mx-auto my-12 white--text"
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
          >We created the Cookbook in order give you an easy way to view, find and share recipes.
          Once signing up, take a chance to view the site and learn what's available on the Cookbook.
          </div>
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
              If you are not currently doing so, visit our site in the Safari Web Browser. 
            </p>
            <p>
              Click the share option. Something should appear that is similar to the picture shown.
              Select to Add to Home Screen and select add afterwards.
            </p>
            <p>
              That's all! Now our application will run locally just as any other app on your phone.
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
      
      </v-container>
  </div>
</template>