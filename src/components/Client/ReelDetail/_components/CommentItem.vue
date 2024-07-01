<template>
  <div class="mb-5">
    <div class="CommentContentContainer">
      <a href="/user" class="flex-[0_0_40px] mr-3">
        <span shape="circle" class="SpanAvatarContainer h-10 w-10">
          <img loading="lazy" class="ImgAvatar" :src="avatarUrl" alt="avatar" />
        </span>
      </a>

      <div class="flex-auto">
        <a class="text-body-2-semibold text-neutral-7" href="/user">{{ userName }}</a>
        <p class="CommentText text-neutral-7">{{ desc }}</p>
        <!-- <p class="text-body-2 text-neutral-4">
            <span class="SpanCreatedTime">{{ createAt }}</span>
            <span role="button" class="SpanReplyButton">Reply</span>
        </p> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { avatarUrl, userName, desc } = defineProps<{
  avatarUrl: string
  userName: string
  desc: string
  createAt?: string
}>()
</script>

<style scoped>
.CommentContentContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  margin-bottom: 8px;
}

.SpanAvatarContainer {
  display: inline-block;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-feature-settings: 'tnum';
  position: relative;
  overflow: hidden;
  color: rgb(255, 255, 255);
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  line-height: 32px;
  border-radius: 50%;
  background-color: rgba(136, 136, 136, 0.5);
}

.ImgAvatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.SpanCreatedTime {
  display: inline-block;
  width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}

.SpanReplyButton {
  cursor: pointer;
  color: rgba(22, 24, 35, 0.5);
  font-weight: 400;
  margin-left: 4px;
}
.CommentText {
  font-size: 16px;
  line-height: 21px;
  white-space: pre-line;
  word-break: break-word;
  margin-bottom: 6px;
}
</style>
