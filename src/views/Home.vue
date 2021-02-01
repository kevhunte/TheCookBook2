<template>
  <div class="home page">
    <h1>
      Home Page
    </h1>
    <div>
      This page will show the latest recipes uploaded to the site. 
      Name, photo, id, created date
      Filter by what was not uploaded anonymously.
      Place in store, but cap at 30. Roll out like a queue: pop oldest content
    </div>
    <div>
      Paginate data from graphql. 6 at a time
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
};
</script>
