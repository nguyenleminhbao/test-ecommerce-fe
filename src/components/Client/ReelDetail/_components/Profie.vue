<template>
  <div class="ProfileWrapper">
    <div class="DescriptionContentWrapper">
      <div class="InfoContainer">
        <a class="mr-3" href="/userId">
          <img
            class="w-10 aspect-square object-cover rounded-full"
            src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
            alt="user.name"
          />
        </a>
        <a class="StyledLink" href="/userId">
          <span class="text-body-2-bold">User</span>
          <br />
          <span class="text-caption-1">05-06-2024</span>
        </a>
      </div>

      <div class="DescriptionContent">
        <span class="text-body-2">mô tả</span>
      </div>
    </div>

    <div class="MainContent">
      <div class="Container">
        <div class="StyledWrapper">
          <div class="FlexCenterRow">
            <!-- Heart ---------------------------------------------------------------------------->
            <button type="button" class="ButtonActionItem">
              <span class="SpanIconWrapper">
                <HeartFilled class="text-[16px]" />
              </span>
              <strong>20K</strong>
            </button>

            <!-- Comment ---------------------------------------------------------------------------->
            <button type="button" class="ButtonActionItem ml-5">
              <span class="SpanIconWrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-dots-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                  />
                </svg>
              </span>
              <strong>500</strong>
            </button>

            <!-- Share ---------------------------------------------------------------------------->
            <button type="button" class="ButtonActionItem ml-5">
              <span class="SpanIconWrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-share-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"
                  />
                </svg>
              </span>
              <strong>500</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeartFilled } from '@ant-design/icons-vue'
</script>

<style scoped>
.ProfileWrapper {
  margin-left: -32px;
  margin-right: -32px;
}

.DescriptionContentWrapper {
  background: rgba(22, 24, 35, 0.03);
  border-radius: 12px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 16px;
}

.InfoContainer {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin-bottom: 15px;
  position: relative;
  flex: 0 0 82px;
}

.StyledLink {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 1 1 auto;
  margin-right: 12px;
}

.DescriptionContent {
  overflow: visible;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.MainContent {
  padding: 0px 32px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.Container {
  position: relative;
  padding: 16px 0px 0px;
}

.StyledWrapper {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.FlexCenterRow {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}
.ButtonActionItem {
  border: none;
  background: none;
  outline: none;
  padding: 0px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  flex-direction: row;
}
.SpanIconWrapper {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0px;
  border-radius: 50%;
  transition: all 200ms ease-in-out 0s;
  width: 32px;
  height: 32px;
  background-color: rgba(22, 24, 35, 0.06);
  padding: 6px;
  margin-right: 6px;
}
</style>
