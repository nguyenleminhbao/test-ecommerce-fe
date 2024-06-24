<template>
  <img :src="thumnail" class="object-cover max-h-[450px]" alt="thumbnail" />
  <div v-html="content" id="ContentFeed"></div>
</template>

<script setup lang="ts">
const { thumnail, content } = defineProps<{
  thumnail: string
  content: string
}>()
</script>

<style scoped>
#ContentFeed {
  width: 100%;
  margin-top: 16px;

  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
  text-align: justify;
}

#ContentFeed >>> p {
  margin: 0 auto 20px;
}

#ContentFeed >>> figure {
  margin: 0 auto 32px;
  width: 100%;
}
#ContentFeed >>> img {
  aspect-ratio: attr(width) / attr(height);
  height: auto;
  margin-bottom: 0;
  max-width: 100%;
  width: 100%;
}
#ContentFeed >>> figcaption {
  margin: 8px auto 0;

  color: #757575;
  font-size: 14px;
  line-height: 24px;
}

#ContentFeed >>> h1,
#ContentFeed >>> h2,
#ContentFeed >>> h3 {
  margin: 48px auto 16px;
}
#ContentFeed >>> h1 {
  margin: 48px auto 16px;

  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
}
#ContentFeed >>> h2 {
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
}
#ContentFeed >>> h3 {
  margin-top: 32px;

  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

#ContentFeed >>> a {
  text-decoration: underline;
  color: #337ab7;
}

#ContentFeed >>> ul {
  margin: 0 auto 32px;
  list-style: initial;
  padding-left: 2.5rem;
}
#ContentFeed >>> li {
  margin-bottom: 16px;
  position: relative;
}
</style>
